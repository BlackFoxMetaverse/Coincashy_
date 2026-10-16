"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyGridRef = useRef<HTMLDivElement>(null);
  const stepsListRef = useRef<HTMLOListElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedPayMethod, setSelectedPayMethod] = useState<'apple' | 'card' | 'bank'>('apple');
  const [buyTimer, setBuyTimer] = useState<number>(24);
  const [convertTimer, setConvertTimer] = useState<number>(18);
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const [swapRotate, setSwapRotate] = useState<number>(0);

  // Live countdown timers inside phone screens
  useEffect(() => {
    const timer = setInterval(() => {
      setBuyTimer((prev) => (prev > 1 ? prev - 1 : 30));
      setConvertTimer((prev) => (prev > 1 ? prev - 1 : 20));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle step click (desktop & mobile)
  const handleStepClick = useCallback((index: number, e: React.MouseEvent) => {
    // If clicking on link arrow, let Next.js Link handle it
    if ((e.target as HTMLElement).closest('a')) return;
    
    setActiveStep(index);
    const list = stepsListRef.current;
    if (!list) return;
    const stepEls = list.querySelectorAll<HTMLElement>('.story-step');
    const targetStep = stepEls[index];
    if (targetStep) {
      const isMobile = window.matchMedia('(max-width: 900px)').matches;
      if (isMobile) {
        const delta = targetStep.getBoundingClientRect().left - list.getBoundingClientRect().left;
        list.scrollBy({
          left: delta - (list.clientWidth - targetStep.clientWidth) / 2,
          behavior: 'smooth'
        });
      } else {
        targetStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  // Swap currencies in Convert screen
  const handleSwap = useCallback(() => {
    setIsSwapped((prev) => !prev);
    setSwapRotate((prev) => prev + 180);
  }, []);

  // GSAP ScrollTrigger & 3D Tilt Setup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 900px)').matches;

    const ctx = gsap.context(() => {
      if (!isMobile && !isReduced && stepsListRef.current) {
        const stepEls = stepsListRef.current.querySelectorAll<HTMLElement>('.story-step');
        
        stepEls.forEach((stepEl, idx) => {
          ScrollTrigger.create({
            trigger: stepEl,
            start: 'top center+=10%',
            end: 'bottom center-=10%',
            onEnter: () => setActiveStep(idx),
            onEnterBack: () => setActiveStep(idx),
          });
        });
      }

      // Mobile swipe/scroll observer
      if (isMobile && stepsListRef.current) {
        const stepEls = stepsListRef.current.querySelectorAll<HTMLElement>('.story-step');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const stepIdx = Array.from(stepEls).indexOf(entry.target as HTMLElement);
                if (stepIdx !== -1) setActiveStep(stepIdx);
              }
            });
          },
          { root: stepsListRef.current, threshold: 0.6 }
        );

        stepEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      }
    }, sectionRef);

    // Interactive 3D Card Gyroscopic Hologram Tilt
    const phoneEl = phoneRef.current;
    const cardEl = cardRef.current;
    let tiltRaf = 0;

    const handlePointerMove = (e: PointerEvent) => {
      if (!phoneEl || !cardEl || isReduced) return;
      const rect = phoneEl.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      const py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));

      cancelAnimationFrame(tiltRaf);
      tiltRaf = requestAnimationFrame(() => {
        const rx = ((0.5 - py) * 14).toFixed(2);
        const ry = ((px - 0.5) * 18).toFixed(2);
        const mx = (px * 100).toFixed(1);
        const my = (py * 100).toFixed(1);

        cardEl.style.setProperty('--rx', `${rx}deg`);
        cardEl.style.setProperty('--ry', `${ry}deg`);
        cardEl.style.setProperty('--mx', `${mx}%`);
        cardEl.style.setProperty('--my', `${my}%`);
      });
    };

    const handlePointerLeave = () => {
      if (!cardEl || isReduced) return;
      cancelAnimationFrame(tiltRaf);
      cardEl.style.setProperty('--rx', '0deg');
      cardEl.style.setProperty('--ry', '0deg');
      cardEl.style.setProperty('--mx', '50%');
      cardEl.style.setProperty('--my', '50%');
    };

    if (phoneEl) {
      phoneEl.addEventListener('pointermove', handlePointerMove);
      phoneEl.addEventListener('pointerleave', handlePointerLeave);
    }

    return () => {
      ctx.revert();
      if (phoneEl) {
        phoneEl.removeEventListener('pointermove', handlePointerMove);
        phoneEl.removeEventListener('pointerleave', handlePointerLeave);
      }
      cancelAnimationFrame(tiltRaf);
    };
  }, []);

  return (
    <section className="sec" id="products" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">One account</p>
          <h2 className="h2">Everything you need to move between money and crypto.</h2>
          <p className="lede">
            Start with familiar payment methods, follow clear transaction steps and manage your digital value without unnecessary complexity.
          </p>
        </div>

        <div className="story-grid" id="story" ref={storyGridRef}>
          {/* Steps List */}
          <ol className="story-steps" ref={stepsListRef} aria-label="Product tour">
            {/* Step 0: Buy */}
            <li
              className={`story-step ${activeStep === 0 ? 'is-active' : ''}`}
              data-step={0}
              onClick={(e) => handleStepClick(0, e)}
              style={{ cursor: 'pointer' }}
            >
              <span className="story-kicker">Buy</span>
              <h3 className="h3">Buy crypto</h3>
              <p className="body">Purchase supported assets using card, Apple Pay, Google Pay or bank transfer.</p>
              <Link className="link-arrow" href="/personal">
                Start buying
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
            </li>

            {/* Step 1: Sell */}
            <li
              className={`story-step ${activeStep === 1 ? 'is-active' : ''}`}
              data-step={1}
              onClick={(e) => handleStepClick(1, e)}
              style={{ cursor: 'pointer' }}
            >
              <span className="story-kicker">Sell</span>
              <h3 className="h3">Sell crypto</h3>
              <p className="body">Convert supported digital assets and receive funds through available payout methods.</p>
              <Link className="link-arrow" href="/personal">
                Start selling
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
            </li>

            {/* Step 2: Convert */}
            <li
              className={`story-step ${activeStep === 2 ? 'is-active' : ''}`}
              data-step={2}
              onClick={(e) => handleStepClick(2, e)}
              style={{ cursor: 'pointer' }}
            >
              <span className="story-kicker">Convert</span>
              <h3 className="h3">Convert crypto</h3>
              <p className="body">Move between supported assets with a clear quote, shown before you confirm.</p>
              <Link className="link-arrow" href="/personal">
                Try a conversion
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
            </li>

            {/* Step 3: Spend */}
            <li
              className={`story-step ${activeStep === 3 ? 'is-active' : ''}`}
              data-step={3}
              onClick={(e) => handleStepClick(3, e)}
              style={{ cursor: 'pointer' }}
            >
              <span className="story-kicker">Spend</span>
              <h3 className="h3">Spend with your card</h3>
              <p className="body">Use a partner-enabled virtual or physical card for eligible everyday purchases.</p>
              <Link className="link-arrow" href="/cards">
                Explore the card
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
            </li>
          </ol>

          {/* Sticky Phone Mockup Stage */}
          <div className="story-stage" aria-hidden="true">
            <div className="phone" ref={phoneRef} style={{ cursor: 'default' }}>
              <div className="phone-screen scope-dark">
                {/* Phone Status Bar */}
                <div className="phone-status">
                  <span>9:41</span>
                  <span className="sig">
                    <span className="bars"><span /><span /><span /><span /></span>
                    <span className="batt" />
                  </span>
                </div>

                {/* Screen 0: Buy BTC */}
                <div className={`screen ${activeStep === 0 ? 'is-active' : ''}`} data-screen={0}>
                  <div className="app-top">
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span>
                    <b>Buy BTC</b>
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span>
                  </div>
                  <div className="app-hero">
                    <small>You spend</small>
                    <div className="app-amt">$1,000<span>.00</span></div>
                    <span className="app-sub">≈ 0.0118627 BTC</span>
                  </div>
                  <div className="app-list">
                    <div
                      className={`app-row ${selectedPayMethod === 'apple' ? 'is-sel' : ''}`}
                      onClick={() => setSelectedPayMethod('apple')}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg></span>
                      <span>Apple Pay</span>
                      <span className="app-radio" />
                    </div>
                    <div
                      className={`app-row ${selectedPayMethod === 'card' ? 'is-sel' : ''}`}
                      onClick={() => setSelectedPayMethod('card')}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span>
                      <span>Card<small>•••• 2049</small></span>
                      <span className="app-radio" />
                    </div>
                    <div
                      className={`app-row ${selectedPayMethod === 'bank' ? 'is-sel' : ''}`}
                      onClick={() => setSelectedPayMethod('bank')}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span>
                      <span>Bank transfer</span>
                      <span className="app-radio" />
                    </div>
                  </div>
                  <div className="app-foot">
                    <div className="app-note">
                      Fees included in the quote · {buyTimer < 10 ? `00:0${buyTimer}` : `00:${buyTimer}`}
                    </div>
                    <div className="app-btn" style={{ cursor: 'pointer' }}>Buy BTC</div>
                  </div>
                </div>

                {/* Screen 1: Sell ETH */}
                <div className={`screen ${activeStep === 1 ? 'is-active' : ''}`} data-screen={1}>
                  <div className="app-top">
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span>
                    <b>Sell ETH</b>
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span>
                  </div>
                  <div className="app-hero">
                    <small>You sell</small>
                    <div className="app-amt">0.75<span> ETH</span></div>
                    <span className="app-sub">≈ €1,706.90</span>
                  </div>
                  <div className="app-row is-sel">
                    <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span>
                    <span>Bank account<small>EUR · •••• 4821</small></span>
                    <span className="app-radio" />
                  </div>
                  <div className="app-steps">
                    <div className="app-step">
                      <i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i>
                      <span>Order placed</span>
                      <small>14:02</small>
                    </div>
                    <div className="app-step">
                      <i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i>
                      <span>Converted to EUR</span>
                      <small>14:02</small>
                    </div>
                    <div className="app-step todo">
                      <i style={{ animation: 'pulse 1.8s ease-in-out infinite' }} />
                      <span>Paid to your bank</span>
                      <small style={{ color: 'var(--jade)' }}>Processing</small>
                    </div>
                  </div>
                  <div className="app-foot">
                    <div className="app-btn" style={{ cursor: 'pointer' }}>Sell to bank</div>
                  </div>
                </div>

                {/* Screen 2: Convert BTC -> USDC */}
                <div className={`screen ${activeStep === 2 ? 'is-active' : ''}`} data-screen={2}>
                  <div className="app-top">
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span>
                    <b>Convert</b>
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span>
                  </div>
                  <div className="app-box mt-s">
                    <small>{isSwapped ? 'From' : 'From'}</small>
                    <div className="v">
                      <span>{isSwapped ? '4,214.88' : '0.05'}</span>
                      <span className="tk">
                        {isSwapped ? (
                          <><span className="coin sm usdc">$</span>USDC</>
                        ) : (
                          <><span className="coin sm btc">₿</span>BTC</>
                        )}
                      </span>
                    </div>
                  </div>
                  <div
                    className="app-swapico"
                    onClick={handleSwap}
                    style={{
                      cursor: 'pointer',
                      transform: `rotate(${swapRotate}deg)`,
                      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                    title="Swap currencies"
                  >
                    <svg className="ic" aria-hidden="true"><use href="#i-arrow-down-up" /></svg>
                  </div>
                  <div className="app-box">
                    <small>To</small>
                    <div className="v">
                      <span>{isSwapped ? '0.05' : '4,214.88'}</span>
                      <span className="tk">
                        {isSwapped ? (
                          <><span className="coin sm btc">₿</span>BTC</>
                        ) : (
                          <><span className="coin sm usdc">$</span>USDC</>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="app-list">
                    <div className="app-row">
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span>
                      <span>Rate<small>1 BTC ≈ 84,297.67 USDC</small></span>
                      <span />
                    </div>
                    <div className="app-row">
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span>
                      <span>
                        Quote
                        <small>Refreshes in {convertTimer < 10 ? `00:0${convertTimer}` : `00:${convertTimer}`}</small>
                      </span>
                      <span />
                    </div>
                  </div>
                  <div className="app-foot">
                    <div className="app-btn" style={{ cursor: 'pointer' }}>
                      Convert to {isSwapped ? 'BTC' : 'USDC'}
                    </div>
                  </div>
                </div>

                {/* Screen 3: Spend with Card */}
                <div className={`screen ${activeStep === 3 ? 'is-active' : ''}`} data-screen={3}>
                  <div className="app-top">
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span>
                    <b>Card</b>
                    <span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-lock" /></svg></span>
                  </div>
                  <div className="app-cardwrap">
                    <div
                      className="card finish-sky card-tilt"
                      ref={cardRef}
                      style={{
                        '--rx': '0deg',
                        '--ry': '0deg',
                        '--mx': '50%',
                        '--my': '50%'
                      } as React.CSSProperties}
                    >
                      <div className="card-tex" />
                      <div className="card-foil" />
                      <div className="card-sheen" />
                      <div className="card-body">
                        <div className="card-row">
                          <span className="card-word">
                            <Image className="cw-dark" src="/media/logo-white.png" alt="Coincashy" width={1217} height={157} />
                            <Image className="cw-light" src="/media/logo-black.png" alt="" width={1217} height={157} />
                          </span>
                          <span className="card-type">VIRTUAL</span>
                        </div>
                        <div className="card-mid">
                          <span className="card-chip" />
                          <svg className="ic card-nfc" aria-hidden="true"><use href="#i-nfc" /></svg>
                        </div>
                        <div className="card-num">•••• 2049</div>
                        <div className="card-foot">
                          <span>Your name</span>
                          <span>09/29</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="app-bal">
                    <small>Available to spend</small>
                    <b>€1,240.50</b>
                  </div>
                  <div className="app-list">
                    <div className="app-row">
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-shopping-bag" /></svg></span>
                      <span>Coffee shop<small>Today · Contactless</small></span>
                      <span className="amt">−€4.20</span>
                    </div>
                    <div className="app-row">
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-send" /></svg></span>
                      <span>Metro top-up<small>Yesterday · Online</small></span>
                      <span className="amt">−€20.00</span>
                    </div>
                    <div className="app-row">
                      <span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-store" /></svg></span>
                      <span>Grocery market<small>Mon · Contactless</small></span>
                      <span className="amt">−€36.80</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photographic Phone Frame */}
              <Image
                className="phone-frame"
                src="/media/phone-frame.png"
                alt=""
                width={600}
                height={1219}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
