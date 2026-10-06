import { $, $$, clamp, reduceMotion, canHover, hasIO, fmt, icon, EMAIL, EMAIL_RE, themeBtns, themeListeners, currentTheme, applyTheme, onTheme, cssRGB, toast, selectNode, copyText, waveTexture } from './utils.js';

/* ---------- segmented controls & tabs ---------- */

  function radioGroup(group, onChange) {
    const items = $$('[role="radio"]', group);
    const select = (el, focus, silent) => {
      items.forEach(x => {
        const on = x === el;
        x.setAttribute('aria-checked', String(on));
        x.tabIndex = on ? 0 : -1;
      });
      if (focus) el.focus();
      if (!silent && onChange) onChange(el);
    };
    items.forEach((el, i) => {
      el.addEventListener('click', () => select(el, false));
      el.addEventListener('keydown', e => {
        let j = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % items.length;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + items.length) % items.length;
        if (j !== null) { e.preventDefault(); select(items[j], true); }
      });
    });
    return { items, select: (el, silent) => select(el, false, silent) };
  }

  function tabList(list) {
    const tabs = $$('[role="tab"]', list);
    const select = (t, focus) => {
      tabs.forEach(x => {
        const on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(x.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        let j = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') j = 0;
        if (e.key === 'End') j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); select(tabs[j], true); }
      });
    });
    list.selectTab = i => { if (tabs[i]) select(tabs[i]); };
  }
  $$('[data-tabs]').forEach(tabList);

  
/* ---------- code examples copy ---------- */

  const codeCopy = $('#code-copy');
  if (codeCopy) codeCopy.addEventListener('click', () => {
    const pre = $$('.code pre').find(p => !p.hidden);
    if (pre) copyText(pre.textContent, pre);
  });

  
/* ---------- prepared email dialog ---------- */

  const dlg = $('#mail-dialog');
  function openMail(subject, body) {
    const mdSubject = $('#md-subject'), mdBody = $('#md-body'), mdOpen = $('#md-open');
    if (mdSubject) mdSubject.textContent = subject;
    if (mdBody) mdBody.textContent = body;
    if (mdOpen) mdOpen.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (dlg) { try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); } }
  }
  function closeMail() { if (!dlg) return; try { dlg.close(); } catch (e) { dlg.removeAttribute('open'); } }
  if ($('#md-close')) $('#md-close').addEventListener('click', closeMail);
  if (dlg) dlg.addEventListener('click', e => { if (e.target === dlg) closeMail(); });
  if ($('#md-copy')) $('#md-copy').addEventListener('click', () => {
    copyText(`To: ${EMAIL}\nSubject: ${$('#md-subject').textContent}\n\n${$('#md-body').textContent}`, $('#md-body'));
  });
  $$('[data-copy]').forEach(b => b.addEventListener('click', () => copyText(b.dataset.copy, b.parentElement.querySelector('code'))));

  function check(inp, ok, msg) {
    const err = document.getElementById(`${inp.id}-err`);
    inp.setAttribute('aria-invalid', String(!ok));
    if (err) {
      err.textContent = ok ? '' : msg;
      if (ok) inp.removeAttribute('aria-describedby'); else inp.setAttribute('aria-describedby', err.id);
    }
    return ok;
  }

  const contactForm = $('#contact-form');
  if (contactForm) contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('#cf-name'), email = $('#cf-email'), company = $('#cf-company');
    const results = [
      [name, check(name, name.value.trim().length > 1, 'Enter your full name.')],
      [email, check(email, EMAIL_RE.test(email.value.trim()), 'Enter a work email, like name@company.com.')],
      [company, check(company, company.value.trim().length > 1, 'Enter your company name.')]
    ];
    const bad = results.find(r => !r[1]);
    if (bad) { bad[0].focus(); return; }
    
    const pick = n => $$(`input[name="${n}"]:checked`, contactForm).map(i => i.value);
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    try {
      const payload = {
        name: name.value.trim(),
        company: company.value.trim(),
        email: email.value.trim(),
        markets: $('#cf-markets').value.trim() || 'Not specified',
        currencies: pick('ccy').join(', ') || 'Not specified',
        monthlyVolume: $('#cf-volume').value,
        products: pick('product').join(', ') || 'Not specified',
        notes: $('#cf-notes').value.trim() || 'Not specified'
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        toast('Message sent successfully! Our team will contact you soon.');
        contactForm.reset();
        
        // UI Fix: Change button to green and show success message
        submitBtn.innerHTML = 'Successfully sent <svg class="ic" aria-hidden="true"><use href="#i-check" /></svg>';
        submitBtn.style.backgroundColor = '#10B981';
        submitBtn.style.borderColor = '#10B981';
        submitBtn.style.color = '#fff';
        // Intentionally NOT re-enabling the button to prevent multiple submissions
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      toast('Failed to send message. Please check your connection or try again later.');
      console.error(err);
      
      // Revert the button to its original state only on error
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });

  const waitlist = $('#waitlist');
  if (waitlist) waitlist.addEventListener('submit', e => {
    e.preventDefault();
    const inp = $('#wl-email');
    if (!check(inp, EMAIL_RE.test(inp.value.trim()), 'Enter an email address, like name@example.com.')) { inp.focus(); return; }
    openMail('Coincashy card waitlist', [
      'Please add me to the Coincashy personal crypto card waitlist.',
      '',
      `Email: ${inp.value.trim()}`,
      `Preference: ${window.cardPref ? window.cardPref() : ''}`,
      'Country: '
    ].join('\n'));
  });


  /* ---------- home hero: gateway flow ----------
     Dotted paths run from the client's ecosystem (left) into the Coincashy gateway (hub) and out to the
     networks and rails (right). Particles travel the paths, the hub pulses on every arrival, a tap sends a
     ripple that pushes particles, the pointer gently attracts them, and hovering a node lights its path. */
  const flow = (() => {
    const hero = $('#gateway');
    const cv = $('#flow-canvas');
    if (!hero || !cv) return { refresh() {} };
    const ctx = cv.getContext('2d');
    if (!ctx) return { refresh() {} };
    const hub = $('#hub');
    const core = $('.hub-core', hub);
    const tick = $('#hub-tick');
    const hint = $('#flow-hint');
    const nodes = $$('.fnode', hero);
    const mq = matchMedia('(max-width: 900px)');
    let CHALK = [238, 242, 246], JADE = [92, 184, 234], BRASS = [226, 184, 102];
    const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
    function palette() {
      CHALK = cssRGB(hero, '--flow-ink', CHALK);
      JADE = cssRGB(hero, '--flow-accent', JADE);
      BRASS = cssRGB(hero, '--flow-warm', BRASS);
    }
    palette();
    onTheme(() => { palette(); if (W) { paintStatic(); if (reduceMotion) drawStill(); } });
    let W = 0, H = 0, dpr = 1, cx = 0, cy = 0, R = 60;
    let paths = [], particles = [], ripples = [], pulses = [];
    let stat = null; /* offscreen layer with the static dotted paths */
    let hot = -1, raf = 0, running = false, visible = false, last = 0, hitTimer = 0;
    const pointer = { x: -1e4, y: -1e4, on: false };

    function bez(t, a, b, c, d) {
      const u = 1 - t;
      return { x: u * u * u * a.x + 3 * u * u * t * b.x + 3 * u * t * t * c.x + t * t * t * d.x,
               y: u * u * u * a.y + 3 * u * u * t * b.y + 3 * u * t * t * c.y + t * t * t * d.y };
    }
    function makePath(p0, left, feature, node) {
      const dx = Math.abs(cx - p0.x);
      const p1 = { x: left ? p0.x + dx * .45 : p0.x - dx * .45, y: p0.y };
      const p2 = { x: left ? cx - dx * .22 : cx + dx * .22, y: cy };
      const p3 = { x: left ? cx - R : cx + R, y: cy };
      return { p0, p1, p2, p3, left, feature, node, hover: 0 };
    }
    function build() {
      const r = hero.getBoundingClientRect();
      W = r.width; H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      const hr = core.getBoundingClientRect();
      cx = hr.left - r.left + hr.width / 2;
      cy = hr.top - r.top + hr.height / 2;
      R = hr.width / 2 + 10;
      paths = [];
      particles = [];
      const small = mq.matches;
      /* feature paths, anchored to the node chips (desktop only) */
      if (!small) {
        nodes.forEach((n, i) => {
          const nr = n.getBoundingClientRect();
          const left = n.classList.contains('fn-l');
          const p0 = { x: (left ? nr.right : nr.left) - r.left + (left ? 4 : -4), y: nr.top - r.top + nr.height / 2 };
          const path = makePath(p0, left, true, i);
          paths.push(path);
          for (let k = 0; k < 2; k++) particles.push({ path, t: Math.random(), speed: .0018 + Math.random() * .0016, feature: true, out: !left });
        });
      }
      /* background lattice from both edges */
      const n = small ? 22 : 34;
      for (let i = 0; i < n; i++) {
        const left = i % 2 === 0;
        const y = H * .3 + ((i + .5) / n) * H * .78 - H * .04;
        const path = makePath({ x: left ? -2 : W + 2, y }, left, false, -1);
        paths.push(path);
        particles.push({ path, t: Math.random(), speed: .0009 + Math.random() * .0014, feature: false, out: !left && Math.random() < .5 });
      }
      paintStatic();
    }
    function strokePath(c, p, alpha, width, dash) {
      c.beginPath();
      c.moveTo(p.p0.x, p.p0.y);
      c.bezierCurveTo(p.p1.x, p.p1.y, p.p2.x, p.p2.y, p.p3.x, p.p3.y);
      c.strokeStyle = rgba(p.feature ? JADE : CHALK, alpha);
      c.lineWidth = width;
      c.setLineDash(dash);
      c.stroke();
    }
    function paintStatic() {
      if (!stat) stat = document.createElement('canvas');
      stat.width = cv.width; stat.height = cv.height;
      const c = stat.getContext('2d');
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, W, H);
      c.lineCap = 'round';
      paths.forEach(p => {
        if (p.feature) strokePath(c, p, p.node === hot ? 1 : (currentTheme() === 'light' ? .55 : .75), p.node === hot ? 1.8 : 1.2, p.node === hot ? [3, 3] : [2, 5]);
        else strokePath(c, p, currentTheme() === 'light' ? .3 : .26, 1, [1, 4]);
      });
      c.setLineDash([]);
    }
    function frame(now) {
      raf = 0;
      if (!running) return;
      const dt = Math.min(48, now - (last || now)); last = now;
      const k = dt / 16.7;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (stat) ctx.drawImage(stat, 0, 0, W, H);
      /* ripples from taps */
      for (let i = ripples.length - 1; i >= 0; i--) {
        const e = ripples[i];
        e.r += 13 * k; e.life -= .014 * k;
        if (e.life <= 0) { ripples.splice(i, 1); continue; }
        ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(JADE, .28 * e.life); ctx.lineWidth = 1; ctx.stroke();
      }
      /* hub pulses on arrival */
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.r += 1.6 * k; p.life -= .03 * k;
        if (p.life <= 0) { pulses.splice(i, 1); continue; }
        ctx.beginPath(); ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(p.col, .5 * p.life); ctx.lineWidth = 1.2; ctx.stroke();
      }
      /* particles */
      for (let i = particles.length - 1; i >= 0; i--) {
        const q = particles[i];
        const boost = q.path.node === hot ? 2.2 : 1;
        q.t += q.speed * k * boost;
        if (q.t >= 1) {
          if (q.burst) { particles.splice(i, 1); continue; }
          q.t = 0;
          arrive(q, q.out);
          continue;
        }
        const tt = q.out ? 1 - q.t : q.t;
        const pos = bez(tt, q.path.p0, q.path.p1, q.path.p2, q.path.p3);
        let ox = 0, oy = 0;
        for (const e of ripples) {
          const dx = pos.x - e.x, dy = pos.y - e.y, d = Math.hypot(dx, dy) || 1;
          const band = 120;
          if (d < e.r + band && d > e.r - band) {
            const f = (1 - Math.abs(d - e.r) / band) * e.life;
            ox += (dx / d) * f * 70; oy += (dy / d) * f * 70;
          }
        }
        if (pointer.on) {
          const dx = pointer.x - pos.x, dy = pointer.y - pos.y, d = Math.hypot(dx, dy);
          if (d < 150 && d > 1) { const f = (1 - d / 150) * .35; ox += dx * f; oy += dy * f; }
        }
        const x = pos.x + ox, y = pos.y + oy;
        const col = q.feature ? (q.out ? BRASS : JADE) : CHALK;
        const size = q.feature ? 3.2 : 2.4;
        if (q.feature) { ctx.fillStyle = rgba(col, .22); ctx.fillRect(x - size, y - size, size * 2, size * 2); }
        ctx.fillStyle = rgba(col, q.feature ? .95 : .72);
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }
      raf = requestAnimationFrame(frame);
    }
    function arrive(q, leaving) {
      if (!q.feature && Math.random() < .6) return;
      pulses.push({ r: R - 8, life: 1, col: leaving ? BRASS : JADE });
      if (q.feature) {
        hub.classList.add('is-hit');
        clearTimeout(hitTimer);
        hitTimer = setTimeout(() => hub.classList.remove('is-hit'), 420);
      }
    }
    function start() {
      if (running || reduceMotion) { if (reduceMotion) drawStill(); return; }
      running = true; last = 0;
      if (!raf) raf = requestAnimationFrame(frame);
    }
    function stop() { running = false; if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    function drawStill() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (stat) ctx.drawImage(stat, 0, 0, W, H);
      particles.forEach(q => {
        const pos = bez(q.t, q.path.p0, q.path.p1, q.path.p2, q.path.p3);
        ctx.fillStyle = rgba(q.feature ? JADE : CHALK, .8);
        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
      });
    }
    /* ticker under the hub */
    const EVENTS = [
      'Screen · Convert · Route · Settle',
      'Checkout → 25,000 USDC → settled in EUR',
      'Apple Pay → 0.012 BTC delivered',
      'OTC quote → 10.4 BTC → USD',
      'vIBAN → €16,820 received',
      'Card → €48.20 at a café',
      'Webhook → payment.settled'
    ];
    let ei = 0, tickTimer = 0;
    function setTick(text) {
      if (!tick || tick.textContent === text) return;
      tick.classList.add('swap');
      setTimeout(() => { tick.textContent = text; tick.classList.remove('swap'); }, 300);
    }
    function cycle() {
      clearInterval(tickTimer);
      tickTimer = setInterval(() => { if (hot === -1 && visible && !document.hidden) { ei = (ei + 1) % EVENTS.length; setTick(EVENTS[ei]); } }, 3600);
    }
    /* interaction */
    nodes.forEach((n, i) => {
      const on = () => { hot = i; n.classList.add('is-hot'); paintStatic(); setTick(n.dataset.tick || ''); if (!mq.matches) burst(i); };
      const off = () => { if (hot !== i) return; hot = -1; n.classList.remove('is-hot'); paintStatic(); setTick(EVENTS[ei]); };
      n.addEventListener('pointerenter', on);
      n.addEventListener('pointerleave', off);
      n.addEventListener('focus', on);
      n.addEventListener('blur', off);
    });
    function burst(i) {
      const path = paths.find(p => p.node === i);
      if (!path) return;
      for (let k = 0; k < 3; k++) particles.push({ path, t: -k * .08, speed: .006, feature: true, out: !path.left, burst: true });
    }
    hero.addEventListener('pointerdown', e => {
      if (e.target.closest('a, button, input, select')) return;
      const r = hero.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0, life: 1 });
      if (hint) hint.classList.add('is-done');
      start();
    });
    hero.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const r = hero.getBoundingClientRect();
      pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = true;
    });
    hero.addEventListener('pointerleave', () => { pointer.on = false; });
    let rsTimer = 0;
    const onResize = () => { clearTimeout(rsTimer); rsTimer = setTimeout(() => { if (hero.offsetParent) { build(); if (reduceMotion) drawStill(); } }, 120); };
    window.addEventListener('resize', onResize);
    if (window.ResizeObserver) new ResizeObserver(onResize).observe(hero);
    if (hasIO) {
      new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible) { if (!W) build(); start(); cycle(); } else { stop(); clearInterval(tickTimer); }
      }, { threshold: .05 }).observe(hero);
    } else { build(); start(); cycle(); }
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else if (visible) start(); });
    return { refresh() { if (hero.offsetParent) { build(); if (reduceMotion) drawStill(); } } };
  })();

window.flow = flow;


  /* ---------- sonar grid (closing sections) ----------
     A field of dots; ambient pings and taps send expanding rings through it. Idles when no ring is alive,
     pauses off-screen and in hidden tabs, and stays still under reduced motion. */
  $$('[data-sonar]').forEach(host => {
    const cv = $('.sonar-canvas', host);
    const ctx = cv && cv.getContext('2d');
    if (!ctx) return;
    const o = { spacing: 26, dotRadius: 1.4, baseOpacity: .26, pingEvery: 2.4, speed: 260, ringWidth: 90, amplitude: 2.2, maxRings: 6, area: [.22, .18, .78, .82] };
    let W = 0, H = 0, raf = 0, timer = 0, visible = false, seeded = false, stroke = '', rings = [];
    let nextPing = performance.now() + o.pingEvery * 1000;
    const TAU = Math.PI * 2;
    const readColor = () => { const cs = getComputedStyle(cv); stroke = cs.color; const b = parseFloat(cs.getPropertyValue('--sonar-base')); if (b > 0) o.baseOpacity = b; };
    function addRing(x, y, born) { readColor(); rings.push({ x, y, born }); while (rings.length > o.maxRings) rings.shift(); }
    function draw(now) {
      const lifetime = (Math.hypot(W, H) + o.ringWidth) / o.speed;
      rings = rings.filter(r => (now - r.born) / 1000 < lifetime);
      const live = rings.map(r => { const age = (now - r.born) / 1000, radius = age * o.speed; return { x: r.x, y: r.y, radius, reach: radius + o.ringWidth, fade: 1 - age / lifetime }; });
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = stroke;
      const cols = Math.ceil(W / o.spacing) + 1, rows = Math.ceil(H / o.spacing) + 1;
      const ox = (W - (cols - 1) * o.spacing) / 2, oy = (H - (rows - 1) * o.spacing) / 2;
      const hot = [];
      ctx.globalAlpha = o.baseOpacity;
      ctx.beginPath();
      for (let i = 0; i < cols; i++) {
        const x = ox + i * o.spacing;
        for (let j = 0; j < rows; j++) {
          const y = oy + j * o.spacing;
          let energy = 0;
          for (const r of live) {
            if (Math.abs(x - r.x) > r.reach || Math.abs(y - r.y) > r.reach) continue;
            const d = Math.abs(Math.hypot(x - r.x, y - r.y) - r.radius);
            if (d >= o.ringWidth) continue;
            const t = 1 - d / o.ringWidth, k = t * t * (3 - 2 * t) * r.fade;
            if (k > energy) energy = k;
          }
          if (energy < .01) { ctx.moveTo(x + o.dotRadius, y); ctx.arc(x, y, o.dotRadius, 0, TAU); }
          else hot.push(x, y, energy);
        }
      }
      ctx.fill();
      for (let k = 0; k < hot.length; k += 3) {
        const e = hot[k + 2];
        ctx.globalAlpha = o.baseOpacity + (1 - o.baseOpacity) * e;
        ctx.beginPath(); ctx.arc(hot[k], hot[k + 1], o.dotRadius * (1 + o.amplitude * e), 0, TAU); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function resize() {
      const r = host.getBoundingClientRect();
      W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!seeded && W > 1) {
        seeded = true;
        const [x0, y0, x1, y1] = o.area;
        if (!reduceMotion) addRing(W * (x0 + (x1 - x0) * .68), H * (y0 + (y1 - y0) * .34), performance.now() - 500);
      }
      draw(performance.now());
    }
    function tick(now) {
      raf = 0;
      if (!visible || document.hidden) return;
      if (reduceMotion) { rings = []; draw(now); return; }
      if (now >= nextPing) {
        const [x0, y0, x1, y1] = o.area;
        addRing(W * (x0 + Math.random() * (x1 - x0)), H * (y0 + Math.random() * (y1 - y0)), now);
        nextPing = now + o.pingEvery * 1000;
      }
      draw(now);
      if (rings.length) raf = requestAnimationFrame(tick);
      else { clearTimeout(timer); timer = setTimeout(() => tick(performance.now()), Math.max(16, nextPing - now)); }
    }
    function wake() { if (!raf) { clearTimeout(timer); raf = requestAnimationFrame(tick); } }
    host.addEventListener('pointerdown', e => {
      if (reduceMotion || e.target.closest('a, button')) return;
      const r = host.getBoundingClientRect();
      addRing(e.clientX - r.left, e.clientY - r.top, performance.now());
      wake();
    });
    onTheme(() => { readColor(); if (W) draw(performance.now()); });
    if (window.ResizeObserver) new ResizeObserver(() => { if (host.offsetParent) resize(); }).observe(host);
    else window.addEventListener('resize', () => { if (host.offsetParent) resize(); });
    if (hasIO) new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) { if (!W) { readColor(); resize(); } wake(); } }, { threshold: 0 }).observe(host);
    else { visible = true; readColor(); resize(); wake(); }
    document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) wake(); });
  });

  
/* ---------- navigation & routing ---------- */

  const nav = $('#nav');
  const burger = $('#burger');
  const mnav = $('#mnav');
  const pages = $$('main.page');
  const CTA_DEFAULT = ['Get started', 'https://trade.coincashy.io/auth/signup', 'Get started'];
  const HIGHLIGHT = new Set(['processing', 'otc', 'ramp', 'c2c', 'vibans', 'wallets', 'cards', 'settlement']);
  let currentPage = null;

  /* openMobile removed */
  /* closeMobile removed */
  /* burger click removed */
  /* Close mobile menu on ANY link tap inside mnav (hash links + full-path links like /about) */
  /* mnav click removed */

  function jump(el, smooth) {
    const html = document.documentElement;
    if (smooth) {
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    if (el) el.scrollIntoView({ block: 'start' }); else window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }

  function showPage(id) {
    if (currentPage === id) return false;
    pages.forEach(p => { p.hidden = p.id !== id; });
    currentPage = id;
    document.body.dataset.page = id;
    $$('[data-nav]').forEach(a => a.classList.toggle('is-current', a.dataset.nav === id));
    const cta = $('#nav-cta');
    if (cta) { cta.innerHTML = `<span class="l-long">${CTA_DEFAULT[0]}</span><span class="l-short">${CTA_DEFAULT[2]}</span>`; cta.setAttribute('href', CTA_DEFAULT[1]); }
    if (id === 'home' && window.flow) requestAnimationFrame(() => window.flow.refresh());
    return true;
  }

  function route(raw, opts = {}) {
    let token = String(raw || '').replace(/^#/, '').trim() || 'home';
    const mode = ['buy', 'sell', 'convert'].includes(token) ? token : null;
    let target = mode ? $('#widget') : document.getElementById(token);
    if (!target || !target.closest('main.page')) { 
      target = document.querySelector('main.page');
      token = target ? target.id : 'home'; 
    }
    const pageEl = target ? target.closest('main.page') : null;
    if (!pageEl) return null;
    const changed = showPage(pageEl.id);
    if (mode && window.widget) window.widget.setMode(mode);
    const smooth = !changed && opts.smooth !== false && !reduceMotion;
    requestAnimationFrame(() => {
      jump(target === pageEl ? null : target, smooth);
      if (HIGHLIGHT.has(token) || mode) {
        target.classList.remove('flash');
        void target.offsetWidth;
        target.classList.add('flash');
      }
      onScroll();
    });
    if (opts.push) { try { history.pushState(null, '', `#${token}`); } catch (e) { /* sandboxed */ } }
    return target;
  }

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const href = a.getAttribute('href');
    if (href.length < 2) return;
    e.preventDefault();
    // closeMobile removed
    if (a.closest('.menu')) nav.classList.add('menus-off');
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    route(href, { push: true });
  });
  $$('.has-menu > .nav-link').forEach(l => {
    l.addEventListener('pointerenter', () => nav.classList.remove('menus-off'));
    l.addEventListener('focus', () => nav.classList.remove('menus-off'));
  });
  $$('.flow-mini [data-stage]').forEach(a => a.addEventListener('click', () => {
    const i = Number(a.dataset.stage);
    setTimeout(() => { const l = $('#flow-tabs'); if (l && l.selectTab) l.selectTab(i); }, 0);
  }));
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (mnav.classList.contains('open')) { openMobile(false); burger.focus(); }
    const ae = document.activeElement;
    if (ae && ae.closest && ae.closest('.has-menu')) { nav.classList.add('menus-off'); ae.blur(); }
  });
  window.addEventListener('popstate', () => route(location.hash, { smooth: false }));
  window.addEventListener('hashchange', () => route(location.hash, { smooth: false }));

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      /* nav is-scrolled removed */
      if (window.statement && typeof window.statement.update === 'function') window.statement.update();
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    onScroll();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (currentPage === 'home' && window.flow) window.flow.refresh(); }, 200);
  });

export { radioGroup, tabList, openMail };

/* ---------- boot ---------- */

  const first = route(location.hash, { smooth: false });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { if (first && !first.matches('main.page')) jump(first, false); flow.refresh(); });
  }
  
/* ---------- ticker ---------- */

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-close-ticker]');
    if (btn) {
      const ticker = btn.closest('.top-ticker');
      if (ticker) ticker.remove();
    }
  });