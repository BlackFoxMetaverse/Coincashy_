"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Ring {
  x: number;
  y: number;
  born: number;
}

export default function SonarSection() {
  const hostRef = useRef<HTMLElement>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const cv = cvRef.current;
    if (!host || !cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const o = {
      spacing: 26,
      dotRadius: 1.4,
      baseOpacity: 0.26,
      pingEvery: 2.4,
      speed: 260,
      ringWidth: 90,
      amplitude: 2.2,
      maxRings: 6,
      area: [0.22, 0.18, 0.78, 0.82]
    };

    let W = 0;
    let H = 0;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = false;
    let seeded = false;
    let stroke = '#ffffff';
    let rings: Ring[] = [];
    let nextPing = performance.now() + o.pingEvery * 1000;
    const TAU = Math.PI * 2;

    const readColor = () => {
      const cs = getComputedStyle(cv);
      stroke = cs.color || '#ffffff';
      const b = parseFloat(cs.getPropertyValue('--sonar-base'));
      if (b > 0) o.baseOpacity = b;
    };

    function addRing(x: number, y: number, born: number) {
      readColor();
      rings.push({ x, y, born });
      while (rings.length > o.maxRings) rings.shift();
    }

    function draw(now: number) {
      if (!ctx) return;
      const lifetime = (Math.hypot(W, H) + o.ringWidth) / o.speed;
      rings = rings.filter(r => (now - r.born) / 1000 < lifetime);
      const live = rings.map(r => {
        const age = (now - r.born) / 1000;
        const radius = age * o.speed;
        return {
          x: r.x,
          y: r.y,
          radius,
          reach: radius + o.ringWidth,
          fade: 1 - age / lifetime
        };
      });

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = stroke;
      const cols = Math.ceil(W / o.spacing) + 1;
      const rows = Math.ceil(H / o.spacing) + 1;
      const ox = (W - (cols - 1) * o.spacing) / 2;
      const oy = (H - (rows - 1) * o.spacing) / 2;
      const hot: number[] = [];

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
            const t = 1 - d / o.ringWidth;
            const k = t * t * (3 - 2 * t) * r.fade;
            if (k > energy) energy = k;
          }
          if (energy < 0.01) {
            ctx.moveTo(x + o.dotRadius, y);
            ctx.arc(x, y, o.dotRadius, 0, TAU);
          } else {
            hot.push(x, y, energy);
          }
        }
      }
      ctx.fill();

      for (let k = 0; k < hot.length; k += 3) {
        const e = hot[k + 2];
        ctx.globalAlpha = o.baseOpacity + (1 - o.baseOpacity) * e;
        ctx.beginPath();
        ctx.arc(hot[k], hot[k + 1], o.dotRadius * (1 + o.amplitude * e), 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function resize() {
      if (!host || !cv || !ctx) return;
      const r = host.getBoundingClientRect();
      W = Math.max(1, Math.round(r.width));
      H = Math.max(1, Math.round(r.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!seeded && W > 1) {
        seeded = true;
        const [x0, y0, x1, y1] = o.area;
        if (!reduceMotion) {
          addRing(W * (x0 + (x1 - x0) * 0.68), H * (y0 + (y1 - y0) * 0.34), performance.now() - 500);
        }
      }
      draw(performance.now());
    }

    function tick(now: number) {
      raf = 0;
      if (!visible || document.hidden) return;
      if (reduceMotion) {
        rings = [];
        draw(now);
        return;
      }
      if (now >= nextPing) {
        const [x0, y0, x1, y1] = o.area;
        addRing(W * (x0 + Math.random() * (x1 - x0)), H * (y0 + Math.random() * (y1 - y0)), now);
        nextPing = now + o.pingEvery * 1000;
      }
      draw(now);
      if (rings.length) {
        raf = requestAnimationFrame(tick);
      } else {
        clearTimeout(timer);
        timer = setTimeout(() => tick(performance.now()), Math.max(16, nextPing - now));
      }
    }

    function wake() {
      if (!raf) {
        clearTimeout(timer);
        raf = requestAnimationFrame(tick);
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      if (reduceMotion || (e.target as HTMLElement).closest('a, button')) return;
      const r = host.getBoundingClientRect();
      addRing(e.clientX - r.left, e.clientY - r.top, performance.now());
      wake();
    };

    host.addEventListener('pointerdown', handlePointerDown);

    let ro: ResizeObserver | null = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(() => {
        if (host.offsetParent) resize();
      });
      ro.observe(host);
    } else {
      window.addEventListener('resize', resize);
    }

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          if (!W) {
            readColor();
            resize();
          }
          wake();
        }
      }, { threshold: 0 });
      io.observe(host);
    } else {
      visible = true;
      readColor();
      resize();
      wake();
    }

    const handleVisibility = () => {
      if (!document.hidden && visible) wake();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      host.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', resize);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
    };
  }, []);

  return (
    <section className="sec sonar" data-sonar ref={hostRef}>
      <canvas className="sonar-canvas" ref={cvRef} aria-hidden="true" suppressHydrationWarning />
      <div className="sonar-wash" aria-hidden="true" />
      <div className="wrap sonar-inner">
        <p className="eyebrow">Get started</p>
        <h2 className="h2">Tell us how your money needs to move.</h2>
        <p className="lede">
          Every ring is a payment settling somewhere on the network. Tap anywhere to send one, then tell us about your markets, currencies, volumes and settlement needs.
        </p>
        <div className="cta-row">
          <Link className="btn btn-solid" href="/contact">
            Talk to our team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
          </Link>
          <Link className="btn btn-line" href="/personal">
            Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
