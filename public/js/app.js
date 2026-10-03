(() => {
  'use strict';

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasIO = 'IntersectionObserver' in window;
  const fmt = (n, max = 2, min = max) => Number(n).toLocaleString('en-US', { minimumFractionDigits: min, maximumFractionDigits: max });
  const icon = name => `<svg class="ic" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const EMAIL = 'support@coincashy.io';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


  /* ---------- theme (light / dark) ---------- */
  const themeBtns = $$('[data-theme-toggle]');
  const themeListeners = [];
  function currentTheme() { return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'; }
  function applyTheme(t, persist) {
    document.documentElement.dataset.theme = t;
    themeBtns.forEach(b => {
      b.setAttribute('aria-label', t === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      const l = b.querySelector('[data-theme-label]');
      if (l) l.textContent = t === 'light' ? 'Dark mode' : 'Light mode';
    });
    if (persist) { try { localStorage.setItem('coincashy-theme', t); } catch (e) { /* private mode */ } }
    themeListeners.forEach(fn => fn(t));
  }
  const onTheme = fn => themeListeners.push(fn);
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('coincashy-theme'); } catch (e) { /* ignore */ }
  applyTheme(savedTheme === 'light' ? 'light' : 'dark', false);
  themeBtns.forEach(b => b.addEventListener('click', () => applyTheme(currentTheme() === 'light' ? 'dark' : 'light', true)));
  const cssRGB = (el, name, fallback) => {
    const v = getComputedStyle(el).getPropertyValue(name).trim();
    const m = v.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : fallback;
  };

  /* ---------- toast + clipboard ---------- */
  const toastEl = $('#toast');
  let toastTimer = 0;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
  }
  function selectNode(node) {
    try {
      const range = document.createRange();
      range.selectNodeContents(node);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (e) { /* ignore */ }
  }
  function copyText(text, node) {
    let p;
    try { p = navigator.clipboard.writeText(text); } catch (e) { p = Promise.reject(e); }
    return p.then(
      () => { toast('Copied to clipboard'); return true; },
      () => { if (node) selectNode(node); toast('Text selected. Press Ctrl+C or ⌘C to copy.'); return false; }
    );
  }

  /* ---------- card textures ---------- */
  function waveTexture(color) {
    const w = 700, h = 440, TAU = Math.PI * 2;
    const cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    const ctx = cv.getContext('2d');
    if (!ctx) return '';
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    for (let k = 0; k < 30; k++) {
      const ph = (k / 30) * TAU;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const u = x / w;
        const y = h * .66 + Math.sin(u * TAU * 2.2 + ph) * h * .15 + Math.sin(u * TAU * 8 - ph) * h * .022;
        if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      ctx.stroke();
    }
    const cx = w * .8, cy = h * .34, R = h * .3;
    for (let k = 0; k < 22; k++) {
      const ph = (k / 22) * TAU;
      ctx.beginPath();
      for (let i = 0; i <= 720; i++) {
        const t = (i / 720) * TAU, r = R * (.72 + .16 * Math.sin(10 * t + ph));
        const x = cx + r * Math.cos(t), y = cy + r * Math.sin(t);
        if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      ctx.stroke();
    }
    return cv.toDataURL('image/png');
  }
  try {
    const light = waveTexture('rgba(255,255,255,.17)');
    const dark = waveTexture('rgba(13,18,25,.2)');
    if (light) document.documentElement.style.setProperty('--tex-light', `url("${light}")`);
    if (dark) document.documentElement.style.setProperty('--tex-dark', `url("${dark}")`);
  } catch (e) { /* texture is decorative */ }


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

  /* ---------- card tilt ---------- */
  if (canHover && !reduceMotion) {
    $$('[data-tilt]').forEach(zone => {
      const target = zone.querySelector('.card-tilt') || zone;
      let raf = 0;
      zone.addEventListener('pointermove', e => {
        const r = zone.getBoundingClientRect();
        const px = clamp((e.clientX - r.left) / r.width, 0, 1);
        const py = clamp((e.clientY - r.top) / r.height, 0, 1);
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          target.style.setProperty('--ry', `${((px - .5) * 24).toFixed(2)}deg`);
          target.style.setProperty('--rx', `${((.5 - py) * 18).toFixed(2)}deg`);
          target.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
          target.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
        });
      });
      zone.addEventListener('pointerleave', () => {
        cancelAnimationFrame(raf);
        target.style.setProperty('--rx', '0deg');
        target.style.setProperty('--ry', '0deg');
        target.style.setProperty('--mx', '30%');
        target.style.setProperty('--my', '20%');
      });
    });
  }

  /* ---------- buy / sell / convert widget ---------- */
  const quoteTimers = $$('[data-quote-timer]');
  const widget = (() => {
    const root = $('#widget');
    if (!root) return { setMode() {}, flash() {} };
    const FIAT = { USD: { sym: '$', usd: 1 }, EUR: { sym: '€', usd: 1.16 }, GBP: { sym: '£', usd: 1.34 } };
    const CRYPTO = {
      BTC: { glyph: '₿', usd: 84297.67, dp: 7, cls: 'btc' },
      ETH: { glyph: 'Ξ', usd: 2640.35, dp: 6, cls: 'eth' },
      USDT: { glyph: '₮', usd: 1, dp: 2, cls: 'usdt' },
      USDC: { glyph: '$', usd: 1, dp: 2, cls: 'usdc' }
    };
    const DEF = { buy: ['USD', 'BTC', 1000], sell: ['BTC', 'USD', 0.025], convert: ['BTC', 'USDC', 0.05] };
    const jitter = { BTC: 1, ETH: 1, USDT: 1, USDC: 1 };
    const s = { mode: 'buy', from: 'USD', to: 'BTC', fromAmt: 1000, toAmt: 0, side: 'from', method: 'Apple Pay' };
    const E = id => document.getElementById(id);
    const el = {
      from: E('w-from'), to: E('w-to'), fromSel: E('w-from-asset'), toSel: E('w-to-asset'),
      fromChip: E('w-from-chip'), toChip: E('w-to-chip'), fromLbl: E('w-from-label'),
      methods: E('w-methods'), dest: E('w-dest'), destTxt: E('w-dest-txt'),
      rate: E('w-rate'), rateTxt: E('w-rate-txt'), go: E('w-go'),
      form: E('w-form'), review: E('w-review'), timer: E('w-timer-txt'), ring: E('w-ring')
    };
    const isFiat = c => Object.prototype.hasOwnProperty.call(FIAT, c);
    const usd = c => (isFiat(c) ? FIAT[c].usd : CRYPTO[c].usd * jitter[c]);
    const dp = c => (isFiat(c) ? 2 : CRYPTO[c].dp);
    const parse = v => { const n = parseFloat(String(v).replace(/,/g, '').replace(/[^0-9.]/g, '')); return Number.isFinite(n) ? n : 0; };
    const show = (c, v) => (isFiat(c) ? fmt(v, 2) : fmt(v, dp(c), 0));
    const money = (c, v) => (isFiat(c) ? FIAT[c].sym + fmt(v, 2) : `${fmt(v, dp(c), 0)} ${c}`);
    const lists = () => {
      const f = Object.keys(FIAT), k = Object.keys(CRYPTO);
      return s.mode === 'buy' ? [f, k] : s.mode === 'sell' ? [k, f] : [k, k];
    };
    const modes = radioGroup(E('w-modes'), btn => setMode(btn.dataset.wmode));
    radioGroup(el.methods, btn => { s.method = btn.dataset.method; });

    function fill(sel, list, val) {
      sel.innerHTML = list.map(c => `<option value="${c}">${c}</option>`).join('');
      sel.value = val;
    }
    function paintChip(chip, c) {
      const coin = chip.querySelector('.coin');
      coin.className = 'coin ' + (isFiat(c) ? 'fiat' : CRYPTO[c].cls);
      coin.textContent = isFiat(c) ? FIAT[c].sym : CRYPTO[c].glyph;
      chip.querySelector('.code').textContent = c;
    }
    function calc() {
      const r = usd(s.from) / usd(s.to);
      if (s.side === 'from') s.toAmt = s.fromAmt * r; else s.fromAmt = s.toAmt / r;
    }
    function render(full) {
      calc();
      if (full) {
        const [lf, lt] = lists();
        fill(el.fromSel, lf, s.from);
        fill(el.toSel, lt, s.to);
        modes.items.forEach(b => {
          const on = b.dataset.wmode === s.mode;
          b.setAttribute('aria-checked', String(on));
          b.tabIndex = on ? 0 : -1;
        });
        el.fromLbl.textContent = s.mode === 'buy' ? 'You spend' : s.mode === 'sell' ? 'You sell' : 'You convert';
        el.methods.hidden = s.mode !== 'buy';
        el.dest.hidden = s.mode === 'buy';
        el.destTxt.textContent = s.mode === 'sell' ? 'Payout to your bank account' : 'Converted inside your Coincashy wallet';
        el.fromSel.setAttribute('aria-label', s.mode === 'buy' ? 'Currency you spend' : `Asset you ${s.mode === 'sell' ? 'sell' : 'convert'}`);
        el.toSel.setAttribute('aria-label', s.mode === 'sell' ? 'Currency you receive' : 'Asset you receive');
      }
      el.go.textContent = s.mode === 'buy' ? `Buy ${s.to}` : s.mode === 'sell' ? `Sell ${s.from}` : `Convert to ${s.to}`;
      paintChip(el.fromChip, s.from);
      paintChip(el.toChip, s.to);
      if (full || document.activeElement !== el.from) el.from.value = show(s.from, s.fromAmt);
      if (full || document.activeElement !== el.to) el.to.value = show(s.to, s.toAmt);
      if (s.mode === 'convert') {
        const r = usd(s.from) / usd(s.to);
        el.rateTxt.textContent = `1 ${s.from} ≈ ${fmt(r, r < 1 ? 6 : 2)} ${s.to}`;
      } else {
        const c = s.mode === 'buy' ? s.to : s.from;
        const f = s.mode === 'buy' ? s.from : s.to;
        el.rateTxt.textContent = `1 ${c} ≈ ${FIAT[f].sym}${fmt(usd(c) / usd(f), 2)}`;
      }
    }
    function showForm() { el.review.hidden = true; el.form.hidden = false; }
    function setMode(mode) {
      if (!DEF[mode]) return;
      showForm();
      if (mode !== s.mode) {
        s.mode = mode;
        [s.from, s.to, s.fromAmt] = DEF[mode];
        s.side = 'from';
      }
      render(true);
    }
    function swap() {
      const { from, to, fromAmt, toAmt } = s;
      if (s.mode === 'buy') s.mode = 'sell'; else if (s.mode === 'sell') s.mode = 'buy';
      s.from = to; s.to = from; s.fromAmt = toAmt; s.toAmt = fromAmt; s.side = 'from';
      render(true);
    }
    function sanitize(inp) { if (/[^0-9.,]/.test(inp.value)) inp.value = inp.value.replace(/[^0-9.,]/g, ''); }

    el.from.addEventListener('input', () => { sanitize(el.from); s.fromAmt = parse(el.from.value); s.side = 'from'; render(false); });
    el.to.addEventListener('input', () => { sanitize(el.to); s.toAmt = parse(el.to.value); s.side = 'to'; render(false); });
    el.from.addEventListener('blur', () => render(false));
    el.to.addEventListener('blur', () => render(false));
    [el.from, el.to].forEach(inp => inp.addEventListener('focus', () => requestAnimationFrame(() => inp.select())));
    el.fromSel.addEventListener('change', () => {
      s.from = el.fromSel.value;
      if (s.mode === 'convert' && s.from === s.to) s.to = Object.keys(CRYPTO).find(c => c !== s.from);
      render(true);
    });
    el.toSel.addEventListener('change', () => {
      s.to = el.toSel.value;
      if (s.mode === 'convert' && s.to === s.from) s.from = Object.keys(CRYPTO).find(c => c !== s.to);
      render(true);
    });
    E('w-swap').addEventListener('click', swap);

    el.go.addEventListener('click', () => {
      if (!(s.fromAmt > 0)) { toast('Enter an amount to continue.'); el.from.focus(); return; }
      E('wr-l1').textContent = s.mode === 'buy' ? 'You spend' : s.mode === 'sell' ? 'You sell' : 'You convert';
      E('wr-v1').textContent = money(s.from, s.fromAmt);
      E('wr-v2').textContent = `≈ ${money(s.to, s.toAmt)}`;
      E('wr-l3').textContent = s.mode === 'buy' ? 'Paid with' : s.mode === 'sell' ? 'Paid to' : 'Held in';
      E('wr-v3').textContent = s.mode === 'buy' ? s.method : s.mode === 'sell' ? 'Your bank account' : 'Your Coincashy wallet';
      el.form.hidden = true;
      el.review.hidden = false;
      E('wr-title').focus({ preventScroll: true });
    });
    E('wr-back').addEventListener('click', () => { showForm(); el.go.focus({ preventScroll: true }); });

    /* quote countdown, shared with the hero chips */
    const CIRC = 2 * Math.PI * 9;
    let left = 30;
    function refresh() {
      ['BTC', 'ETH'].forEach(k => { jitter[k] = 1 + (Math.random() - .5) * .003; });
      render(false);
      el.rate.classList.remove('flash');
      void el.rate.offsetWidth;
      el.rate.classList.add('flash');
    }
    function tick() {
      left -= 1;
      if (left < 0) { left = 30; refresh(); }
      const txt = `00:${String(left).padStart(2, '0')}`;
      el.timer.textContent = txt;
      el.ring.style.strokeDashoffset = (CIRC * (1 - left / 30)).toFixed(2);
      quoteTimers.forEach(n => { n.textContent = txt; });
    }
    setInterval(() => { if (!document.hidden) tick(); }, 1000);

    function flash() { root.classList.remove('flash'); void root.offsetWidth; root.classList.add('flash'); }
    render(true);
    return { setMode, flash };
  })();

  /* ---------- card lab ---------- */
  let cardPref = () => 'Virtual card, Vault finish';
  (() => {
    const card = $('#lab-card');
    if (!card) return;
    const st = { finish: 'vault', physical: false, frozen: false, online: true, contactless: true, limit: 1500 };
    const NAMES = { vault: 'Vault', sky: 'Sky', paper: 'Paper' };
    const range = $('#lab-limit');
    function paint() {
      card.classList.remove('finish-vault', 'finish-sky', 'finish-paper');
      card.classList.add(`finish-${st.finish}`);
      card.classList.toggle('is-physical', st.physical);
      card.classList.toggle('is-frozen', st.frozen);
      card.classList.toggle('no-nfc', !st.contactless);
      $('#lab-type').textContent = st.physical ? 'PHYSICAL' : 'VIRTUAL';
      $('#lab-finish-name').textContent = NAMES[st.finish];
      $('#lab-limit-out').textContent = `€${fmt(st.limit, 0)}`;
      $('#lab-banner').hidden = !st.frozen;
    }
    radioGroup($('#lab-format'), b => { st.physical = b.dataset.format === 'physical'; paint(); });
    radioGroup($('#lab-finish'), b => { st.finish = b.dataset.finish; paint(); });
    $$('[data-switch]').forEach(sw => sw.addEventListener('click', () => {
      const k = sw.dataset.switch;
      st[k] = !st[k];
      sw.setAttribute('aria-checked', String(st[k]));
      paint();
    }));
    range.addEventListener('input', () => { st.limit = Number(range.value); paint(); });
    cardPref = () => `${st.physical ? 'Physical' : 'Virtual'} card, ${NAMES[st.finish]} finish`;
    paint();
  })();

  /* ---------- sticky phone story ---------- */
  (() => {
    const root = $('#story');
    if (!root) return;
    const steps = $$('.story-step', root);
    const screens = $$('.screen', root);
    const chips = $$('.s-chip', root);
    const scroller = $('.story-steps', root);
    const mq = matchMedia('(max-width: 900px)');
    let active = -1, io = null;
    function set(i) {
      if (i === active || i < 0) return;
      active = i;
      steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
      screens.forEach((s, k) => s.classList.toggle('is-active', k === i));
      chips.forEach(c => c.classList.toggle('is-active', Number(c.dataset.step) === i));
    }
    function build() {
      if (io) io.disconnect();
      if (!hasIO) return;
      io = new IntersectionObserver(es => {
        es.forEach(e => { if (e.isIntersecting) set(steps.indexOf(e.target)); });
      }, mq.matches ? { root: scroller, threshold: .6 } : { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(s => io.observe(s));
    }
    steps.forEach((s, i) => s.addEventListener('click', e => {
      if (!mq.matches || e.target.closest('a')) return;
      const delta = s.getBoundingClientRect().left - scroller.getBoundingClientRect().left;
      scroller.scrollBy({ left: delta - (scroller.clientWidth - s.clientWidth) / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
      set(i);
    }));
    set(0);
    build();
    if (mq.addEventListener) mq.addEventListener('change', build); else if (mq.addListener) mq.addListener(build);
  })();

  /* ---------- statement word reveal ---------- */
  const statement = (() => {
    const el = $('#statement');
    if (!el || reduceMotion) return { update() {} };
    const words = [];
    const wrap = node => {
      Array.from(node.childNodes).forEach(ch => {
        if (ch.nodeType === 3) {
          const frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const span = document.createElement('span');
            span.className = 'w';
            span.textContent = part;
            words.push(span);
            frag.appendChild(span);
          });
          ch.replaceWith(frag);
        } else if (ch.nodeType === 1) wrap(ch);
      });
    };
    wrap(el);
    function update() {
      if (!el.offsetParent) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const start = vh * .9, end = vh * .3;
      const p = clamp((start - r.top) / ((start - end) + r.height * .5), 0, 1);
      const n = words.length;
      for (let i = 0; i < n; i++) {
        const t = clamp(p * (n + 4) - i, 0, 1);
        words[i].style.opacity = (.28 + .72 * t).toFixed(3);
      }
    }
    return { update };
  })();

  /* ---------- how it works stepper ---------- */
  (() => {
    const root = $('#how-grid');
    if (!root) return;
    const steps = $$('.how-step', root);
    const panes = $$('.how-pane', root);
    const DUR = 5000;
    let i = 0, timer = 0, visible = false, hover = false;
    function schedule() {
      clearTimeout(timer);
      if (visible && !hover && !reduceMotion) timer = setTimeout(() => set((i + 1) % steps.length), DUR);
    }
    function set(n, focus) {
      i = n;
      steps.forEach((s, k) => {
        const on = k === n;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-selected', String(on));
        s.tabIndex = on ? 0 : -1;
        const bar = s.querySelector('.bar');
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = '';
      });
      panes.forEach((p, k) => {
        p.classList.toggle('is-active', k === n);
        p.setAttribute('aria-hidden', String(k !== n));
      });
      if (focus) steps[n].focus();
      schedule();
    }
    steps.forEach((s, k) => {
      s.addEventListener('click', () => set(k));
      s.addEventListener('keydown', e => {
        let j = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') j = (k + 1) % steps.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') j = (k - 1 + steps.length) % steps.length;
        if (j !== null) { e.preventDefault(); set(j, true); }
      });
    });
    root.addEventListener('pointerenter', e => { if (e.pointerType !== 'mouse') return; hover = true; root.classList.add('paused'); clearTimeout(timer); });
    root.addEventListener('pointerleave', e => { if (e.pointerType !== 'mouse') return; hover = false; root.classList.remove('paused'); set(i); });
    if (hasIO) {
      new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible) set(i); else clearTimeout(timer);
      }, { threshold: .3 }).observe(root);
    }
    set(0);
  })();

  /* ---------- business: operations panel ---------- */
  (() => {
    const root = $('#ops');
    if (!root) return;
    const bars = $('#ops-bars');
    const H = [22, 18, 15, 12, 10, 12, 18, 26, 38, 46, 52, 58, 61, 57, 63, 70, 66, 72, 68, 74, 79, 71, 76, 48];
    bars.innerHTML = H.map((h, i) => `<i style="--h:${h}%;--i:${i}"></i>`).join('');
    const last = bars.lastElementChild;
    let lastH = H[H.length - 1];
    const kp = $('#k-proc'), ks = $('#k-set'), kw = $('#k-wal'), feed = $('#ops-feed');
    let proc = 1840000, settled = 946000, wallets = 248, pi = 3, t1 = 0, t2 = 0;
    const POOL = [
      { ic: 'store', t: 'Merchant payment', d: '25,000 USDC → EUR settlement', s: 'Completed', ok: true },
      { ic: 'chart-candlestick', t: 'OTC conversion', d: '10.4 BTC → USD settlement', s: 'Quoted', ok: false },
      { ic: 'landmark', t: 'vIBAN collection', d: '€16,820 received', s: 'Received', ok: true },
      { ic: 'repeat', t: 'USDC → EUR conversion', d: '€92,400', s: 'Settled', ok: true },
      { ic: 'send', t: 'Merchant settlement', d: '$48,000 to operating account', s: 'Settled', ok: true },
      { ic: 'wallet', t: 'Wallet created', d: 'USDC · ethereum', s: 'Active', ok: true }
    ];
    function row(p) {
      const li = document.createElement('li');
      li.className = 'enter';
      li.innerHTML = `<span class="f-ic">${icon(p.ic)}</span><span class="f-txt"><b>${p.t}</b><small>${p.d}</small></span><span class="pill${p.ok ? '' : ' pending'}">${p.s}</span>`;
      return li;
    }
    function push() {
      feed.prepend(row(POOL[pi % POOL.length]));
      pi += 1;
      while (feed.children.length > 3) feed.lastElementChild.remove();
    }
    function bump() {
      proc += Math.round(600 + Math.random() * 4200);
      if (Math.random() < .55) settled += Math.round(400 + Math.random() * 2600);
      if (Math.random() < .07) wallets += 1;
      kp.textContent = `$${proc.toLocaleString('en-US')}`;
      ks.textContent = `$${settled.toLocaleString('en-US')}`;
      kw.textContent = String(wallets);
      lastH = Math.min(92, lastH + Math.random() * 1.6);
      last.style.setProperty('--h', `${lastH.toFixed(1)}%`);
    }
    const start = () => { if (t1 || reduceMotion) return; t1 = setInterval(bump, 2200); t2 = setInterval(push, 4300); };
    const stop = () => { clearInterval(t1); clearInterval(t2); t1 = 0; t2 = 0; };
    if (hasIO) new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(root);
  })();

  /* ---------- business: treasury ---------- */
  (() => {
    const root = $('#treasury');
    if (!root) return;
    const D = {
      all: { lbl: 'Total balance', val: 2481904.28, pre: '$', suf: '', dp: 2, seed: 7 },
      EUR: { lbl: 'EUR account', val: 804220, pre: '€', suf: '', dp: 0, seed: 3 },
      USD: { lbl: 'USD account', val: 626400, pre: '$', suf: '', dp: 0, seed: 11 },
      USDC: { lbl: 'USDC wallet', val: 420850, pre: '', suf: ' USDC', dp: 0, seed: 5 }
    };
    function series(seed, end) {
      let x = seed * 9301 + 49297;
      const rnd = () => { x = (x * 9301 + 49297) % 233280; return x / 233280; };
      const pts = [];
      let v = end * .82;
      for (let i = 0; i < 30; i++) { v += end * (.012 + (rnd() - .45) * .03); pts.push(v); }
      const k = end / pts[pts.length - 1];
      return pts.map(p => p * k);
    }
    const svg = $('#spark');
    const W = 320, TOP = 12, BOTTOM = 90;
    function draw(pts) {
      const min = Math.min(...pts), max = Math.max(...pts), n = pts.length;
      const x = i => 4 + (i * (W - 8)) / (n - 1);
      const y = v => BOTTOM - ((v - min) / ((max - min) || 1)) * (BOTTOM - TOP);
      const d = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
      $('.sp-line', svg).setAttribute('d', d);
      $('.sp-area', svg).setAttribute('d', `${d} L${x(n - 1).toFixed(1)} ${BOTTOM} L${x(0).toFixed(1)} ${BOTTOM} Z`);
      const end = $('.sp-end', svg);
      end.setAttribute('cx', x(n - 1).toFixed(1));
      end.setAttribute('cy', y(pts[n - 1]).toFixed(1));
    }
    const total = $('#t-total'), lbl = $('#t-lbl');
    let shown = D.all.val, anim = 0;
    function tween(d) {
      cancelAnimationFrame(anim);
      const from = shown, to = d.val, t0 = performance.now(), dur = reduceMotion ? 0 : 650;
      const step = now => {
        const p = dur ? clamp((now - t0) / dur, 0, 1) : 1;
        const e = 1 - Math.pow(1 - p, 3);
        shown = from + (to - from) * e;
        total.textContent = d.pre + fmt(p === 1 ? to : shown, d.dp) + d.suf;
        if (p < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    }
    function select(key) {
      const d = D[key];
      lbl.textContent = d.lbl;
      tween(d);
      draw(series(d.seed, d.val));
      $$('.acct', root).forEach(r => r.classList.toggle('dim', key !== 'all' && r.dataset.row !== key));
      $$('.t-act li', root).forEach(li => li.classList.toggle('dim', key !== 'all' && !li.dataset.ccy.split(' ').includes(key)));
    }
    radioGroup($('#t-accts'), b => select(b.dataset.acct));
    draw(series(D.all.seed, D.all.val));
  })();

  /* ---------- business: capabilities and inquiry chips ---------- */
  const contactForm = $('#contact-form');
  const productChip = v => (contactForm ? $$('input[name="product"]', contactForm).find(i => i.value === v) : null);
  function syncCaps() {
    $$('.cap-add').forEach(b => {
      const ch = productChip(b.dataset.interest);
      const on = !!(ch && ch.checked);
      b.setAttribute('aria-pressed', String(on));
      b.querySelector('span').textContent = on ? 'Added to inquiry' : 'Add to inquiry';
    });
  }
  if (canHover) {
    $$('.cap').forEach(c => c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));
  }
  $$('.cap-add').forEach(b => b.addEventListener('click', () => {
    const ch = productChip(b.dataset.interest);
    if (!ch) return;
    ch.checked = !ch.checked;
    syncCaps();
    toast(ch.checked ? `${b.dataset.interest} added to your inquiry` : `${b.dataset.interest} removed from your inquiry`);
  }));
  if (contactForm) contactForm.addEventListener('change', e => { if (e.target.name === 'product') syncCaps(); });
  $$('[data-interest-link]').forEach(a => a.addEventListener('click', () => {
    const ch = productChip(a.dataset.interestLink);
    if (ch && !ch.checked) { ch.checked = true; syncCaps(); }
  }));
  syncCaps();

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

  if (contactForm) contactForm.addEventListener('submit', e => {
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
    const lines = [
      `Name: ${name.value.trim()}`,
      `Company: ${company.value.trim()}`,
      `Work email: ${email.value.trim()}`,
      `Markets: ${$('#cf-markets').value.trim() || 'Not specified'}`,
      `Currencies: ${pick('ccy').join(', ') || 'Not specified'}`,
      `Monthly volume: ${$('#cf-volume').value}`,
      `Products of interest: ${pick('product').join(', ') || 'Not specified'}`,
      '',
      'Settlement requirements:',
      $('#cf-notes').value.trim() || 'Not specified'
    ];
    openMail(`Business inquiry from ${company.value.trim()}`, lines.join('\n'));
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
      `Preference: ${cardPref()}`,
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
  const CTA = { home: ['Get started', 'https://trade.coincashy.io/auth/signup', 'Get started'], personal: ['Buy crypto', '#buy', 'Buy crypto'], business: ['Talk to our team', '#contact', 'Contact'] };
  const HIGHLIGHT = new Set(['processing', 'otc', 'ramp', 'c2c', 'vibans', 'wallets', 'cards', 'settlement']);
  let currentPage = null;

  function openMobile(open) {
    mnav.classList.toggle('open', open);
    mnav.inert = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.classList.toggle('no-scroll', open);
    nav.classList.toggle('menu-open', open);
  }
  const closeMobile = () => { if (mnav.classList.contains('open')) openMobile(false); };
  burger.addEventListener('click', () => openMobile(!mnav.classList.contains('open')));

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
    if (cta && CTA[id]) { cta.innerHTML = `<span class="l-long">${CTA[id][0]}</span><span class="l-short">${CTA[id][2]}</span>`; cta.setAttribute('href', CTA[id][1]); }
    if (id === 'home') requestAnimationFrame(() => flow.refresh());
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
    if (mode) widget.setMode(mode);
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
    closeMobile();
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
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
      statement.update();
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    onScroll();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (currentPage === 'home') flow.refresh(); }, 200);
  });

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
})();
