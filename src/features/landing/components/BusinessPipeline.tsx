"use client";

import React, { useState, useEffect, useRef } from 'react';

const STAGES = [
  {
    id: 'fp-0',
    tabId: 'ft-0',
    title: 'Pay in',
    icon: '#i-arrow-down-left',
    heading: 'Pay in with fiat or crypto.',
    description: 'Collect through hosted checkout, payment links or API, connect card and bank-payment rails, or receive funds into named vIBANs.',
    controls: [
      { icon: '#i-radar', label: 'Wallet risk screening' },
      { icon: '#i-activity', label: 'Transaction monitoring' }
    ]
  },
  {
    id: 'fp-1',
    tabId: 'ft-1',
    title: 'Screen',
    icon: '#i-scan-search',
    heading: 'Screen customers, businesses and wallets.',
    description: 'Customer and business checks scale with product, geography, transaction size and risk profile, before any value moves on.',
    controls: [
      { icon: '#i-user-check', label: 'KYC and KYB verification' },
      { icon: '#i-scan-search', label: 'Sanctions and PEP screening' },
      { icon: '#i-radar', label: 'Wallet risk screening' }
    ]
  },
  {
    id: 'fp-2',
    tabId: 'ft-2',
    title: 'Convert',
    icon: '#i-repeat',
    heading: 'Convert through OTC and liquidity.',
    description: 'Execute fiat, stablecoin and crypto conversions through quote-driven workflows, with clear quotes, execution status and records.',
    controls: [
      { icon: '#i-activity', label: 'Transaction monitoring' },
      { icon: '#i-file-check', label: 'Audit-ready records' }
    ]
  },
  {
    id: 'fp-3',
    tabId: 'ft-3',
    title: 'Route',
    icon: '#i-git-merge',
    heading: 'Route to a wallet or account.',
    description: 'Send value to a digital-asset wallet or a multi-currency account, depending on how the flow needs to settle.',
    controls: [
      { icon: '#i-radar', label: 'Wallet risk screening' },
      { icon: '#i-git-merge', label: 'Operational reconciliation' }
    ]
  },
  {
    id: 'fp-4',
    tabId: 'ft-4',
    title: 'Settle',
    icon: '#i-landmark',
    heading: 'Settle in fiat or stablecoin.',
    description: 'Settle through EUR, GBP, USD and supported local rails, or coordinate treasury, supplier and cross-border settlement in stablecoins.',
    controls: [
      { icon: '#i-git-merge', label: 'Operational reconciliation' },
      { icon: '#i-file-check', label: 'Audit-ready records' }
    ]
  }
];

export default function BusinessPipeline() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Check URL query parameters and hash on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseParams = () => {
      const params = new URLSearchParams(window.location.search);
      const stageParam = params.get('stage');
      if (stageParam !== null) {
        const parsed = parseInt(stageParam, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < STAGES.length) {
          setActiveTab(parsed);
        }
      }

      if (window.location.hash === '#pipeline' && sectionRef.current) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    };

    parseParams();
    window.addEventListener('hashchange', parseParams);
    return () => window.removeEventListener('hashchange', parseParams);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % STAGES.length;
      setActiveTab(next);
      document.getElementById(STAGES[next].tabId)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + STAGES.length) % STAGES.length;
      setActiveTab(prev);
      document.getElementById(STAGES[prev].tabId)?.focus();
    }
  };

  return (
    <section className="sec" id="pipeline" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">How value moves</p>
            <h2 className="h2">From pay-in to settlement in five stages.</h2>
          </div>
          <p className="body rv">
            Every flow passes through the same stages, with checks built into each one. Select a stage to see what happens there.
          </p>
        </div>

        <div className="flow" role="tablist" aria-label="Payment stages" id="flow-tabs">
          <div className="flow-track" aria-hidden="true">
            <span className="flow-packet" />
            <span className="flow-packet" />
            <span className="flow-packet" />
          </div>

          {STAGES.map((stage, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={stage.id}
                className="flow-node"
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={stage.id}
                id={stage.tabId}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span className="flow-dot">
                  <svg className="ic" aria-hidden="true">
                    <use href={stage.icon} />
                  </svg>
                </span>
                <b>{stage.title}</b>
              </button>
            );
          })}
        </div>

        {STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            className="flow-panel"
            id={stage.id}
            role="tabpanel"
            aria-labelledby={stage.tabId}
            hidden={activeTab !== idx}
          >
            <div>
              <h3 className="h3">{stage.heading}</h3>
              <p className="body">{stage.description}</p>
            </div>
            <div>
              <p className="lbl">Controls at this stage</p>
              <div className="tags">
                {stage.controls.map((ctrl, cIdx) => (
                  <span key={cIdx} className="tag">
                    <svg className="ic" aria-hidden="true">
                      <use href={ctrl.icon} />
                    </svg>
                    {ctrl.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
