import { $, $$, clamp, reduceMotion, canHover, hasIO, fmt, icon, EMAIL, EMAIL_RE, themeBtns, themeListeners, currentTheme, applyTheme, onTheme, cssRGB, toast, selectNode, copyText, waveTexture } from './utils.js';
import { radioGroup, openMail } from './ui.js';

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

window.widget = widget;
window.cardPref = cardPref;

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
