"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface AssetOption {
  symbol: string;
  name: string;
  unit: string;
  iconClass: string;
  iconChar: string;
  rateAmount: string;
}

const ASSETS: AssetOption[] = [
  { symbol: 'BTC', name: 'Bitcoin', unit: 'BTC', iconClass: 'btc', iconChar: '₿', rateAmount: '+0.0034402' },
  { symbol: 'ETH', name: 'Ether', unit: 'ETH', iconClass: 'eth', iconChar: 'Ξ', rateAmount: '+0.098415' },
  { symbol: 'USDT', name: 'Tether', unit: 'USDT', iconClass: 'usdt', iconChar: '₮', rateAmount: '+272.50' },
  { symbol: 'USDC', name: 'USD Coin', unit: 'USDC', iconClass: 'usdc', iconChar: '$', rateAmount: '+272.50' },
];

const PAYMENT_METHODS = [
  { id: 'card', name: 'Card', icon: '#i-credit-card' },
  { id: 'apple-pay', name: 'Apple Pay', icon: '#i-smartphone' },
  { id: 'google-pay', name: 'Google Pay', icon: '#i-smartphone' },
  { id: 'bank', name: 'Bank transfer', icon: '#i-landmark' },
];

const STEPS = [
  {
    num: '01',
    title: 'Choose',
    desc: 'Select an asset and enter the amount.',
  },
  {
    num: '02',
    title: 'Pay',
    desc: 'Use an available card, wallet or bank rail.',
  },
  {
    num: '03',
    title: 'Verify',
    desc: 'Complete the required identity and payment checks.',
  },
  {
    num: '04',
    title: 'Receive',
    desc: 'Your crypto moves to the supported destination.',
  },
];

const STEP_DURATION_MS = 5000;

export default function HowItWorksStepper() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedAsset, setSelectedAsset] = useState<AssetOption>(ASSETS[0]);
  const [selectedPayment, setSelectedPayment] = useState<string>('apple-pay');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const [screenPassed, setScreenPassed] = useState<boolean>(false);
  const [quoteSeconds, setQuoteSeconds] = useState<number>(30);
  const [animKey, setAnimKey] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const stepButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Advance to step helper
  const goToStep = useCallback((index: number, focus = false) => {
    setActiveStep(index);
    setAnimKey((prev) => prev + 1);
    if (index === 1) {
      setQuoteSeconds(30);
    }
    if (index === 2) {
      setScreenPassed(false);
    }
    if (focus && stepButtonsRef.current[index]) {
      stepButtonsRef.current[index]?.focus();
    }
  }, []);

  // Intersection Observer to pause when section is out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Step 2 quote held countdown timer
  useEffect(() => {
    if (activeStep !== 1 || isPaused) return;

    const timer = setInterval(() => {
      setQuoteSeconds((prev) => (prev > 1 ? prev - 1 : 30));
    }, 1000);

    return () => clearInterval(timer);
  }, [activeStep, isPaused]);

  // Step 3 live verification progression
  useEffect(() => {
    if (activeStep !== 2) return;

    const passTimer = setTimeout(() => {
      setScreenPassed(true);
    }, 1800);

    return () => {
      clearTimeout(passTimer);
      setScreenPassed(false);
    };
  }, [activeStep]);

  // Auto-advance step timer
  useEffect(() => {
    if (isPaused || !isInView) return;

    const timer = setTimeout(() => {
      goToStep((activeStep + 1) % STEPS.length);
    }, STEP_DURATION_MS);

    return () => clearTimeout(timer);
  }, [activeStep, isPaused, isInView, animKey, goToStep]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIndex = (index + 1) % STEPS.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + STEPS.length) % STEPS.length;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      goToStep(nextIndex, true);
    }
  };

  return (
    <div
      className={`how-grid ${isPaused ? 'paused' : ''}`}
      id="how-grid"
      ref={containerRef}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setIsPaused(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setIsPaused(false);
      }}
    >
      {/* ============ Steps Navigation ============ */}
      <div className="how-steps" role="tablist" aria-label="Steps to buy crypto" aria-orientation="vertical">
        {STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.num}
              ref={(el) => {
                stepButtonsRef.current[idx] = el;
              }}
              className={`how-step ${isActive ? 'is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`hp-${idx}`}
              id={`hs-${idx}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goToStep(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              <span className="n">{step.num}</span>
              <span>
                <span className="hs-t h3">{step.title}</span>
                <span className="hs-d">{step.desc}</span>
              </span>
              {isActive && (
                <span
                  key={`bar-${animKey}`}
                  className="bar"
                  style={{
                    animation: isPaused ? 'none' : `bar ${STEP_DURATION_MS}ms linear forwards`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ============ Interactive Step Visualizers ============ */}
      <div className="how-vis">
        {/* Pane 0: Choose Asset */}
        <div
          className={`how-pane ${activeStep === 0 ? 'is-active' : ''}`}
          id="hp-0"
          role="tabpanel"
          aria-labelledby="hs-0"
          aria-hidden={activeStep !== 0}
        >
          <div className="hp-card">
            <div className="hp-title">
              Choose an asset
              <small>Step 1 of 4</small>
            </div>
            {ASSETS.map((asset) => {
              const isSelected = selectedAsset.symbol === asset.symbol;
              return (
                <div
                  key={asset.symbol}
                  className={`hp-row ${isSelected ? 'sel' : ''}`}
                  onClick={() => setSelectedAsset(asset)}
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                >
                  <span className={`coin sm ${asset.iconClass}`}>{asset.iconChar}</span>
                  {asset.name}
                  <em>{asset.symbol}</em>
                </div>
              );
            })}
            <div className="hp-row sel">
              <svg className="ic" aria-hidden="true">
                <use href="#i-euro" />
              </svg>
              Amount
              <em>€250.00</em>
            </div>
          </div>
        </div>

        {/* Pane 1: Pay */}
        <div
          className={`how-pane ${activeStep === 1 ? 'is-active' : ''}`}
          id="hp-1"
          role="tabpanel"
          aria-labelledby="hs-1"
          aria-hidden={activeStep !== 1}
        >
          <div className="hp-card">
            <div className="hp-title">
              Pay €250.00
              <small>Step 2 of 4</small>
            </div>
            <div className="hp-grid">
              {PAYMENT_METHODS.map((pm) => {
                const isSelected = selectedPayment === pm.id;
                return (
                  <div
                    key={pm.id}
                    className={`hp-row ${isSelected ? 'sel' : ''}`}
                    onClick={() => setSelectedPayment(pm.id)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  >
                    <svg className="ic" aria-hidden="true">
                      <use href={pm.icon} />
                    </svg>
                    {pm.name}
                  </div>
                );
              })}
            </div>
            <div className="hp-row">
              <svg className="ic" aria-hidden="true">
                <use href="#i-clock" />
              </svg>
              Quote held
              <em>00:{quoteSeconds < 10 ? `0${quoteSeconds}` : quoteSeconds}</em>
            </div>
          </div>
        </div>

        {/* Pane 2: Verify */}
        <div
          className={`how-pane ${activeStep === 2 ? 'is-active' : ''}`}
          id="hp-2"
          role="tabpanel"
          aria-labelledby="hs-2"
          aria-hidden={activeStep !== 2}
        >
          <div className="hp-card">
            <div className="hp-title">
              Verify
              <small>Step 3 of 4</small>
            </div>
            <div className="hp-check">
              <i>
                <svg className="ic" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </i>
              Identity check
              <em>Done</em>
            </div>
            <div className="hp-check">
              <i>
                <svg className="ic" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </i>
              Payment check
              <em>Done</em>
            </div>
            <div className={`hp-check ${screenPassed ? '' : 'wait'}`}>
              <i>
                {screenPassed && (
                  <svg className="ic" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                )}
              </i>
              Wallet screening
              <em>{screenPassed ? 'Passed' : 'In progress'}</em>
            </div>
          </div>
        </div>

        {/* Pane 3: Received */}
        <div
          className={`how-pane ${activeStep === 3 ? 'is-active' : ''}`}
          id="hp-3"
          role="tabpanel"
          aria-labelledby="hs-3"
          aria-hidden={activeStep !== 3}
        >
          <div className="hp-card">
            <div className="hp-title">
              Received
              <small>Step 4 of 4</small>
            </div>
            <div className="hp-big">
              {selectedAsset.rateAmount} <span className="small mono">{selectedAsset.symbol}</span>
            </div>
            <div className="hp-row">
              <svg className="ic" aria-hidden="true">
                <use href="#i-wallet" />
              </svg>
              Your Coincashy wallet
              <em style={{ color: 'var(--jade)', fontWeight: 600 }}>Received</em>
            </div>
            <div className="hp-row">
              <svg className="ic" aria-hidden="true">
                <use href="#i-receipt" />
              </svg>
              You paid
              <em>€250.00</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
