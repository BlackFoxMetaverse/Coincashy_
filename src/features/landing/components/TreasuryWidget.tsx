"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';

// Domain constants
const ACCOUNTS = {
  all: { id: 'all', lbl: 'Total balance', val: 2481904.28, pre: '$', suf: '', dp: 2, seed: 7 },
  EUR: { id: 'EUR', lbl: 'EUR account', val: 804220, pre: '€', suf: '', dp: 0, seed: 3 },
  USD: { id: 'USD', lbl: 'USD account', val: 626400, pre: '$', suf: '', dp: 0, seed: 11 },
  USDC: { id: 'USDC', lbl: 'USDC wallet', val: 420850, pre: '', suf: ' USDC', dp: 0, seed: 5 }
} as const;

type AccountId = keyof typeof ACCOUNTS;

function generateSeries(seed: number, end: number) {
  let x = seed * 9301 + 49297;
  const rnd = () => { x = (x * 9301 + 49297) % 233280; return x / 233280; };
  const pts: number[] = [];
  let v = end * 0.82;
  for (let i = 0; i < 30; i++) { 
    v += end * (0.012 + (rnd() - 0.45) * 0.03); 
    pts.push(v); 
  }
  const k = end / pts[pts.length - 1];
  return pts.map(p => p * k);
}

const W = 320;
const TOP = 12;
const BOTTOM = 90;

function formatNumber(n: number, dp: number) {
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
}

export default function TreasuryWidget() {
  const [selectedId, setSelectedId] = useState<AccountId>('all');
  const [displayVal, setDisplayVal] = useState(ACCOUNTS.all.val);
  const animRef = useRef<number>(0);
  const valRef = useRef(ACCOUNTS.all.val);

  const selectedAcct = ACCOUNTS[selectedId];

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    
    cancelAnimationFrame(animRef.current);
    
    if (prefersReduced) {
      setDisplayVal(selectedAcct.val);
      valRef.current = selectedAcct.val;
      return;
    }

    const from = valRef.current;
    const to = selectedAcct.val;
    const t0 = performance.now();
    const dur = 650;

    const step = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3); // Ease out cubic
      const current = from + (to - from) * e;
      valRef.current = current;
      setDisplayVal(current);
      
      if (p < 1) {
        animRef.current = requestAnimationFrame(step);
      }
    };
    
    animRef.current = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animRef.current);
  }, [selectedAcct]);

  const sparkData = useMemo(() => {
    const pts = generateSeries(selectedAcct.seed, selectedAcct.val);
    const min = Math.min(...pts);
    const max = Math.max(...pts);
    const n = pts.length;
    const x = (i: number) => 4 + (i * (W - 8)) / (n - 1);
    const y = (v: number) => BOTTOM - ((v - min) / ((max - min) || 1)) * (BOTTOM - TOP);
    const d = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
    
    return {
      line: d,
      area: `${d} L${x(n - 1).toFixed(1)} ${BOTTOM} L${x(0).toFixed(1)} ${BOTTOM} Z`,
      endX: x(n - 1).toFixed(1),
      endY: y(pts[n - 1]).toFixed(1)
    };
  }, [selectedAcct]);

  return (
    <div className="treasury" id="treasury">
      <div className="t-head"><b>Business treasury</b></div>
      <div>
        <div className="t-lbl" id="t-lbl">{selectedAcct.lbl}</div>
        <div className="t-total" id="t-total">
          {selectedAcct.pre}{formatNumber(displayVal, selectedAcct.dp)}{selectedAcct.suf}
        </div>
      </div>
      <div className="t-seg">
        <div className="seg" role="radiogroup" aria-label="Account">
          {(Object.keys(ACCOUNTS) as AccountId[]).map(id => (
            <button 
              key={id}
              type="button" 
              role="radio" 
              aria-checked={selectedId === id} 
              onClick={() => setSelectedId(id)}
              tabIndex={selectedId === id ? 0 : -1}
            >
              {id === 'all' ? 'All' : id}
            </button>
          ))}
        </div>
      </div>
      <svg className="spark" id="spark" viewBox="0 0 320 96" role="img" aria-label="Balance trend across September">
        <defs>
          <linearGradient id="spFill" x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} className="sp-stop-a" />
            <stop offset={1} className="sp-stop-b" />
          </linearGradient>
        </defs>
        <line className="grid" x1={0} x2={320} y1={12} y2={12} />
        <line className="grid" x1={0} x2={320} y1={51} y2={51} />
        <line className="grid" x1={0} x2={320} y1={90} y2={90} />
        <path className="sp-area" d={sparkData.area} />
        <path className="sp-line" d={sparkData.line} />
        <circle className="sp-end" r="3.5" cx={sparkData.endX} cy={sparkData.endY} />
      </svg>
      <div className="spark-axis" aria-hidden="true"><span>1 Sep</span><span>30 Sep</span></div>
      <div className="accts">
        <div className={`acct ${selectedId !== 'all' && selectedId !== 'EUR' ? 'dim' : ''}`}>
          <span className="coin sm fiat">€</span><span>EUR account</span><b>€804,220</b>
        </div>
        <div className={`acct ${selectedId !== 'all' && selectedId !== 'USD' ? 'dim' : ''}`}>
          <span className="coin sm fiat">$</span><span>USD account</span><b>$626,400</b>
        </div>
        <div className={`acct ${selectedId !== 'all' && selectedId !== 'USDC' ? 'dim' : ''}`}>
          <span className="coin sm usdc">$</span><span>USDC wallet</span><b>420,850 USDC</b>
        </div>
      </div>
      <div className="t-act-h">Recent activity</div>
      <ul className="t-act">
        <li className={selectedId !== 'all' && !['USDC', 'EUR'].includes(selectedId) ? 'dim' : ''}>
          <span>USDC → EUR conversion</span><b>€92,400</b>
        </li>
        <li className={selectedId !== 'all' && selectedId !== 'USD' ? 'dim' : ''}>
          <span>Merchant settlement</span><b>$48,000</b>
        </li>
        <li className={selectedId !== 'all' && selectedId !== 'EUR' ? 'dim' : ''}>
          <span>vIBAN collection</span><b>€16,820</b>
        </li>
      </ul>
    </div>
  );
}
