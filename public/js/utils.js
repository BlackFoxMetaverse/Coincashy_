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


  
export {
  $, $$, clamp, reduceMotion, canHover, hasIO, fmt, icon, EMAIL, EMAIL_RE,
  themeBtns, themeListeners, currentTheme, applyTheme, onTheme, cssRGB,
  toast, selectNode, copyText, waveTexture
};
