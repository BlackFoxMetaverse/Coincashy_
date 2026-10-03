import { $, $$, clamp, reduceMotion, canHover, hasIO, fmt, icon, EMAIL, EMAIL_RE, themeBtns, themeListeners, currentTheme, applyTheme, onTheme, cssRGB, toast, selectNode, copyText, waveTexture } from './utils.js';

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

  
window.statement = statement;
export { statement };