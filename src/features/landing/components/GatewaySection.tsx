"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Point {
  x: number;
  y: number;
}

interface Path {
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  left: boolean;
  feature: boolean;
  node: number;
  hover: number;
}

interface Particle {
  path: Path;
  t: number;
  speed: number;
  feature: boolean;
  out: boolean;
  burst?: boolean;
}

interface Ripple {
  x: number;
  y: number;
  r: number;
  life: number;
}

interface Pulse {
  r: number;
  life: number;
  col: [number, number, number];
}

const EVENTS = [
  'Screen · Convert · Route · Settle',
  'Checkout → 25,000 USDC → settled in EUR',
  'Apple Pay → 0.012 BTC delivered',
  'OTC quote → 10.4 BTC → USD',
  'vIBAN → €16,820 received',
  'Card → €48.20 at a café',
  'Webhook → payment.settled'
];

export default function GatewaySection() {
  const heroRef = useRef<HTMLElement>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const tickRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const cv = cvRef.current;
    const hub = hubRef.current;
    const core = coreRef.current;
    const tick = tickRef.current;
    const hint = hintRef.current;

    if (!hero || !cv || !hub || !core) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const nodes = Array.from(hero.querySelectorAll<HTMLElement>('.fnode'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cssRGB = (el: Element, name: string, fallback: [number, number, number]): [number, number, number] => {
      const v = getComputedStyle(el).getPropertyValue(name).trim();
      const m = v.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
      return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : fallback;
    };

    let CHALK: [number, number, number] = [238, 242, 246];
    let JADE: [number, number, number] = [92, 184, 234];
    let BRASS: [number, number, number] = [226, 184, 102];

    const rgba = (c: [number, number, number], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

    function palette() {
      if (!hero) return;
      CHALK = cssRGB(hero, '--flow-ink', CHALK);
      JADE = cssRGB(hero, '--flow-accent', JADE);
      BRASS = cssRGB(hero, '--flow-warm', BRASS);
    }
    palette();

    const isLight = () => document.documentElement.dataset.theme === 'light';

    let W = 0;
    let H = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;
    let R = 60;
    let paths: Path[] = [];
    let particles: Particle[] = [];
    const ripples: Ripple[] = [];
    const pulses: Pulse[] = [];
    let stat: HTMLCanvasElement | null = null;
    let hot = -1;
    let raf = 0;
    let running = false;
    let visible = false;
    let last = 0;
    let hitTimer: ReturnType<typeof setTimeout> | undefined;
    const pointer = { x: -1e4, y: -1e4, on: false };

    function bez(t: number, a: Point, b: Point, c: Point, d: Point): Point {
      const u = 1 - t;
      return {
        x: u * u * u * a.x + 3 * u * u * t * b.x + 3 * u * t * t * c.x + t * t * t * d.x,
        y: u * u * u * a.y + 3 * u * u * t * b.y + 3 * u * t * t * c.y + t * t * t * d.y
      };
    }

    function makePath(p0: Point, left: boolean, feature: boolean, node: number): Path {
      const dx = Math.abs(cx - p0.x);
      const p1 = { x: left ? p0.x + dx * 0.45 : p0.x - dx * 0.45, y: p0.y };
      const p2 = { x: left ? cx - dx * 0.22 : cx + dx * 0.22, y: cy };
      const p3 = { x: left ? cx - R : cx + R, y: cy };
      return { p0, p1, p2, p3, left, feature, node, hover: 0 };
    }

    function strokePath(c: CanvasRenderingContext2D, p: Path, alpha: number, width: number, dash: number[]) {
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
      if (!cv) return;
      stat.width = cv.width;
      stat.height = cv.height;
      const c = stat.getContext('2d');
      if (!c) return;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, W, H);
      c.lineCap = 'round';
      paths.forEach(p => {
        if (p.feature) {
          strokePath(
            c,
            p,
            p.node === hot ? 1 : (isLight() ? 0.55 : 0.75),
            p.node === hot ? 1.8 : 1.2,
            p.node === hot ? [3, 3] : [2, 5]
          );
        } else {
          strokePath(c, p, isLight() ? 0.3 : 0.26, 1, [1, 4]);
        }
      });
      c.setLineDash([]);
    }

    function build() {
      if (!hero || !core || !cv) return;
      const r = hero.getBoundingClientRect();
      W = r.width;
      H = r.height;
      if (W < 20 || H < 20) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      const hr = core.getBoundingClientRect();
      cx = hr.left - r.left + hr.width / 2;
      cy = hr.top - r.top + hr.height / 2;
      R = hr.width / 2 + 10;
      paths = [];
      particles = [];
      const small = window.innerWidth <= 900;

      if (!small) {
        nodes.forEach((n, i) => {
          const nr = n.getBoundingClientRect();
          const left = n.classList.contains('fn-l');
          const p0 = {
            x: (left ? nr.right : nr.left) - r.left + (left ? 4 : -4),
            y: nr.top - r.top + nr.height / 2
          };
          const path = makePath(p0, left, true, i);
          paths.push(path);
          for (let k = 0; k < 2; k++) {
            particles.push({
              path,
              t: Math.random(),
              speed: 0.0018 + Math.random() * 0.0016,
              feature: true,
              out: !left
            });
          }
        });
      }

      const n = small ? 22 : 34;
      for (let i = 0; i < n; i++) {
        const left = i % 2 === 0;
        const y = H * 0.3 + ((i + 0.5) / n) * H * 0.78 - H * 0.04;
        const path = makePath({ x: left ? -2 : W + 2, y }, left, false, -1);
        paths.push(path);
        particles.push({
          path,
          t: Math.random(),
          speed: 0.0009 + Math.random() * 0.0014,
          feature: false,
          out: !left && Math.random() < 0.5
        });
      }
      paintStatic();
    }

    function arrive(q: Particle, leaving: boolean) {
      if (!q.feature && Math.random() < 0.6) return;
      pulses.push({ r: R - 8, life: 1, col: leaving ? BRASS : JADE });
      if (q.feature && hub) {
        hub.classList.add('is-hit');
        clearTimeout(hitTimer);
        hitTimer = setTimeout(() => hub.classList.remove('is-hit'), 420);
      }
    }

    function frame(now: number) {
      raf = 0;
      if (!running || !ctx) return;
      const dt = Math.min(48, now - (last || now));
      last = now;
      const k = dt / 16.7;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (stat) ctx.drawImage(stat, 0, 0, W, H);

      // ripples from taps
      for (let i = ripples.length - 1; i >= 0; i--) {
        const e = ripples[i];
        e.r += 13 * k;
        e.life -= 0.014 * k;
        if (e.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(JADE, 0.28 * e.life);
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // hub pulses on arrival
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.r += 1.6 * k;
        p.life -= 0.03 * k;
        if (p.life <= 0) {
          pulses.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(p.col, 0.5 * p.life);
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const q = particles[i];
        const boost = q.path.node === hot ? 2.2 : 1;
        q.t += q.speed * k * boost;
        if (q.t >= 1) {
          if (q.burst) {
            particles.splice(i, 1);
            continue;
          }
          q.t = 0;
          arrive(q, q.out);
          continue;
        }
        const tt = q.out ? 1 - q.t : q.t;
        const pos = bez(tt, q.path.p0, q.path.p1, q.path.p2, q.path.p3);
        let ox = 0;
        let oy = 0;
        for (const e of ripples) {
          const dx = pos.x - e.x;
          const dy = pos.y - e.y;
          const d = Math.hypot(dx, dy) || 1;
          const band = 120;
          if (d < e.r + band && d > e.r - band) {
            const f = (1 - Math.abs(d - e.r) / band) * e.life;
            ox += (dx / d) * f * 70;
            oy += (dy / d) * f * 70;
          }
        }
        if (pointer.on) {
          const dx = pointer.x - pos.x;
          const dy = pointer.y - pos.y;
          const d = Math.hypot(dx, dy);
          if (d < 150 && d > 1) {
            const f = (1 - d / 150) * 0.35;
            ox += dx * f;
            oy += dy * f;
          }
        }
        const x = pos.x + ox;
        const y = pos.y + oy;
        const col = q.feature ? (q.out ? BRASS : JADE) : CHALK;
        const size = q.feature ? 3.2 : 2.4;
        if (q.feature) {
          ctx.fillStyle = rgba(col, 0.22);
          ctx.fillRect(x - size, y - size, size * 2, size * 2);
        }
        ctx.fillStyle = rgba(col, q.feature ? 0.95 : 0.72);
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }
      raf = requestAnimationFrame(frame);
    }

    function drawStill() {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (stat) ctx.drawImage(stat, 0, 0, W, H);
      particles.forEach(q => {
        const pos = bez(q.t, q.path.p0, q.path.p1, q.path.p2, q.path.p3);
        ctx.fillStyle = rgba(q.feature ? JADE : CHALK, 0.8);
        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
      });
    }

    function start() {
      if (running || reduceMotion) {
        if (reduceMotion) drawStill();
        return;
      }
      running = true;
      last = 0;
      if (!raf) raf = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    let ei = 0;
    let tickTimer: ReturnType<typeof setInterval> | undefined;

    function setTick(text: string) {
      if (!tick || tick.textContent === text) return;
      tick.classList.add('swap');
      setTimeout(() => {
        if (tick) {
          tick.textContent = text;
          tick.classList.remove('swap');
        }
      }, 300);
    }

    function cycle() {
      clearInterval(tickTimer);
      tickTimer = setInterval(() => {
        if (hot === -1 && visible && !document.hidden) {
          ei = (ei + 1) % EVENTS.length;
          setTick(EVENTS[ei]);
        }
      }, 3600);
    }

    function burst(i: number) {
      const path = paths.find(p => p.node === i);
      if (!path) return;
      for (let k = 0; k < 3; k++) {
        particles.push({
          path,
          t: -k * 0.08,
          speed: 0.006,
          feature: true,
          out: !path.left,
          burst: true
        });
      }
    }

    const nodeCleanups: Array<() => void> = [];
    nodes.forEach((n, i) => {
      const on = () => {
        hot = i;
        n.classList.add('is-hot');
        paintStatic();
        setTick(n.dataset.tick || '');
        if (window.innerWidth > 900) burst(i);
      };
      const off = () => {
        if (hot !== i) return;
        hot = -1;
        n.classList.remove('is-hot');
        paintStatic();
        setTick(EVENTS[ei]);
      };
      n.addEventListener('pointerenter', on);
      n.addEventListener('pointerleave', off);
      n.addEventListener('focus', on);
      n.addEventListener('blur', off);

      nodeCleanups.push(() => {
        n.removeEventListener('pointerenter', on);
        n.removeEventListener('pointerleave', off);
        n.removeEventListener('focus', on);
        n.removeEventListener('blur', off);
      });
    });

    const handlePointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('a, button, input, select')) return;
      const r = hero.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0, life: 1 });
      if (hint) hint.classList.add('is-done');
      start();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const r = hero.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.on = true;
    };

    const handlePointerLeave = () => {
      pointer.on = false;
    };

    hero.addEventListener('pointerdown', handlePointerDown);
    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);

    let rsTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(rsTimer);
      rsTimer = setTimeout(() => {
        if (hero.offsetParent) {
          palette();
          build();
          if (reduceMotion) drawStill();
        }
      }, 120);
    };

    window.addEventListener('resize', onResize);
    let ro: ResizeObserver | null = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(onResize);
      ro.observe(hero);
    }

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          if (!W) build();
          start();
          cycle();
        } else {
          stop();
          clearInterval(tickTimer);
        }
      }, { threshold: 0.05 });
      io.observe(hero);
    } else {
      visible = true;
      build();
      start();
      cycle();
    }

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Initial build
    const initTimer = setTimeout(() => {
      build();
      if (visible) start();
    }, 50);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(rsTimer);
      clearTimeout(hitTimer);
      clearInterval(tickTimer);
      stop();
      nodeCleanups.forEach(fn => fn());
      hero.removeEventListener('pointerdown', handlePointerDown);
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
    };
  }, []);

  return (
    <section className="sec gw" id="gateway" ref={heroRef}>
      <canvas className="flow-canvas" id="flow-canvas" ref={cvRef} aria-hidden="true" suppressHydrationWarning />
      <div className="wrap gw-inner">
        <div className="sec-head gw-head">
          <p className="eyebrow">The gateway</p>
          <h2 className="h2">Plug one gateway into your ecosystem.</h2>
          <p className="lede">
            Your checkout, app, customers and treasury on one side. Crypto networks, stablecoins, card rails and bank rails on the other. Coincashy screens, converts, routes and settles in between.
          </p>
        </div>
        <div className="flow-stage" id="flow-stage">
          <span className="flow-side fs-l"><i />Your ecosystem</span>
          <span className="flow-side fs-r">Networks &amp; rails<i /></span>
          <div className="hub" id="hub" ref={hubRef}>
            <svg className="hub-ring" viewBox="0 0 160 160" aria-hidden="true">
              <circle cx={80} cy={80} r={76} fill="none" stroke="currentColor" strokeWidth={1} opacity=".35" />
              <circle className="hub-orbit" cx={80} cy={80} r={70} fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 6" opacity=".6" />
              <circle className="hub-arc" cx={80} cy={80} r={76} fill="none" stroke="var(--jade)" strokeWidth="1.5" strokeDasharray="70 408" strokeLinecap="round" />
            </svg>
            <div className="hub-core" ref={coreRef}>
              <Image src="/media/logo-mark-white.png" alt="" width={149} height={157} />
            </div>
            <div className="hub-label">
              <span className="hub-word">Coincashy gateway</span>
              <span className="hub-tick" id="hub-tick" ref={tickRef} aria-live="polite">Screen · Convert · Route · Settle</span>
            </div>
          </div>
          <nav className="fnodes" aria-label="How the gateway connects">
            <Link className="fnode fn-l" href="/processing" style={{'--x': '6%', '--y': '13%'} as React.CSSProperties} data-tick="Accept crypto at checkout, settle in EUR, GBP or USD">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-store" /></svg></span>
              <span><b>Your checkout</b></span>
            </Link>
            <Link className="fnode fn-l" href="/developers" style={{'--x': '0%', '--y': '39%'} as React.CSSProperties} data-tick="Payments, wallet and quote APIs, with webhooks">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-code-xml" /></svg></span>
              <span><b>Your app &amp; website</b></span>
            </Link>
            <Link className="fnode fn-l" href="/personal" style={{'--x': '0%', '--y': '65%'} as React.CSSProperties} data-tick="Pay by card, Apple Pay, Google Pay or wallet">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-users" /></svg></span>
              <span><b>Your customers</b></span>
            </Link>
            <Link className="fnode fn-l" href="/settlement" style={{'--x': '6%', '--y': '91%'} as React.CSSProperties} data-tick="Fiat accounts, vIBANs and balances in one view">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span>
              <span><b>Your treasury</b></span>
            </Link>
            <Link className="fnode fn-r" href="/otc" style={{'--x': '6%', '--y': '13%'} as React.CSSProperties} data-tick="Bitcoin, Ethereum and supported networks">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-bitcoin" /></svg></span>
              <span><b>Crypto networks</b></span>
            </Link>
            <Link className="fnode fn-r" href="/settlement" style={{'--x': '0%', '--y': '39%'} as React.CSSProperties} data-tick="USDC and USDT settlement">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-coins" /></svg></span>
              <span><b>Stablecoins</b></span>
            </Link>
            <Link className="fnode fn-r" href="/cards" style={{'--x': '0%', '--y': '65%'} as React.CSSProperties} data-tick="Visa and Mastercard crypto cards">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span>
              <span><b>Card rails</b></span>
            </Link>
            <Link className="fnode fn-r" href="/vibans" style={{'--x': '6%', '--y': '91%'} as React.CSSProperties} data-tick="EUR, GBP, USD and local rails">
              <span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-banknote" /></svg></span>
              <span><b>Bank rails</b></span>
            </Link>
          </nav>
          <p className="flow-hint" id="flow-hint" ref={hintRef}>
            <span className="dot live" />Tap anywhere to send a pulse through the network
          </p>
        </div>
      </div>
    </section>
  );
}
