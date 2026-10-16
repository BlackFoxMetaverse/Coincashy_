"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import CryptoExchangeWidget from '@/features/crypto-exchange/components/CryptoExchangeWidget';

interface PayoutRail {
  id: string;
  name: string;
  badge: string;
  speed: string;
  fee: string;
  limits: string;
  description: string;
  iconId: string;
}

const PAYOUT_RAILS: PayoutRail[] = [
  {
    id: 'sepa-instant',
    name: 'SEPA Instant Payout',
    badge: 'European Standard',
    speed: '< 10 seconds',
    fee: '0.00% rail fee',
    limits: '€50 – €100,000 / tx',
    description: 'Instant EUR settlement directly into any SEPA-enabled European IBAN. Real-time clearing 24/7/365, including weekends and holidays.',
    iconId: '#b-sepa'
  },
  {
    id: 'faster-payments',
    name: 'UK Faster Payments',
    badge: 'Instant GBP',
    speed: '< 30 seconds',
    fee: '0.00% rail fee',
    limits: '£50 – £50,000 / tx',
    description: 'Direct GBP bank cashouts to high-street banks and neobanks across the UK (Revolut, Monzo, Barclays, Starling, HSBC) with instant arrival.',
    iconId: '#i-landmark'
  },
  {
    id: 'card-payout',
    name: 'Visa Direct & Mastercard Send',
    badge: 'Push to Card',
    speed: '< 2 minutes',
    fee: '1.49% flat',
    limits: '€20 – €5,000 / tx',
    description: 'Instant credit card or debit card push payout. Funds reflect immediately on your card balance without waiting for bank clearance.',
    iconId: '#i-credit-card'
  },
  {
    id: 'swift-wire',
    name: 'Global SWIFT Wire',
    badge: 'Institutional USD/EUR',
    speed: 'Same-day / 24h',
    fee: 'Fixed wire fee',
    limits: '$5,000 – $5M+ (OTC)',
    description: 'Global high-value wire transfers to accounts worldwide in USD, EUR, GBP, and CHF. Ideal for OTC block trades and enterprise treasury.',
    iconId: '#i-globe'
  }
];

const FAQS = [
  {
    q: 'How fast will fiat funds reach my bank account?',
    a: 'For European IBANs supporting SEPA Instant, funds arrive in under 10 seconds after blockchain confirmation. UK Faster Payments take under 30 seconds. Standard international SWIFT wires clear within same-day business hours.'
  },
  {
    q: 'Are exchange rates locked or subject to market volatility while transferring?',
    a: 'Your exchange rate is 100% locked the moment you initiate the sell order. You receive a guaranteed quote with 0% slippage, so market fluctuations during transaction confirmation will never diminish your payout.'
  },
  {
    q: 'Can I sell crypto from any self-custody wallet?',
    a: 'Yes. You can deposit from any external personal wallet, including Ledger, Trezor, MetaMask, Trust Wallet, Phantom, or exchange accounts. We generate a unique, single-use escrow address for your order.'
  },
  {
    q: 'What bank account details are required to cash out?',
    a: 'For EUR withdrawals, you only need your IBAN and account holder name. For GBP, your Account Number and Sort Code. For global USD, your SWIFT/BIC and account number. The name on the bank account must match your verified identity.'
  },
  {
    q: 'What is the maximum amount I can sell in a single order?',
    a: 'Standard verified users can cash out up to €100,000 daily via SEPA Instant. For volumes exceeding €100,000, our dedicated OTC desk facilitates unlimited liquidity with custom settlement rails.'
  }
];

export default function SellCryptoView() {
  const [selectedRail, setSelectedRail] = useState<string>('sepa-instant');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Live Simulator state
  const [simAsset, setSimAsset] = useState<'BTC' | 'ETH' | 'USDT'>('ETH');
  const [simAmount, setSimAmount] = useState<string>('1.5');

  const assetPrices = {
    BTC: 64280,
    ETH: 3490.5,
    USDT: 0.92
  };

  const parsedAmt = parseFloat(simAmount) || 0;
  const calculatedPayout = (parsedAmt * assetPrices[simAsset]).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="page" id="sell-crypto-page" suppressHydrationWarning>
      {/* ============ Hero Section ============ */}
      <section className="p-hero" id="sell-hero">
        <div className="p-hero-glow" aria-hidden="true" />
        <div className="wrap p-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Direct Bank Off-Ramp</p>
            <h1 className="display">
              <span className="nw">Sell crypto.</span> <span className="nw">Cash out to your</span> <em className="nw">bank account.</em>
            </h1>
            <p className="lede">
              Convert digital assets to EUR, GBP, or USD in seconds. Funds land directly in your bank account via SEPA Instant or Faster Payments with guaranteed locked rates.
            </p>
            
            <div className="cta-row" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <a className="btn btn-solid" href="#widget">
                Start selling now
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
              <a className="btn btn-line" href="#simulator">
                Simulate Payout
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="dot live" />
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>SEPA Instant &lt;10s</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>Locked-in quotes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>Zero bank delays</span>
              </div>
            </div>
          </div>

          <div className="w-col" id="exchange-widget">
            <CryptoExchangeWidget defaultMode="sell" />
            <p className="p-caption">Funds sent directly to your verified IBAN or bank account.</p>
          </div>
        </div>
      </section>

      {/* ============ Interactive Bank Payout Simulator ============ */}
      <section className="sec" id="simulator" style={{ background: 'var(--surface-2)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-split" style={{ alignItems: 'center' }}>
            <div className="sec-head">
              <p className="eyebrow">Real-Time Estimator</p>
              <h2 className="h2">Calculate your bank payout instantly.</h2>
              <p className="body">
                Select your digital asset and desired quantity to preview the exact fiat amount transferred directly to your bank account with zero hidden fees.
              </p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg-dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Select Asset to Sell
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {(['BTC', 'ETH', 'USDT'] as const).map((sym) => (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => setSimAsset(sym)}
                      style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: `1px solid ${simAsset === sym ? 'var(--hi)' : 'var(--line)'}`,
                        background: simAsset === sym ? 'var(--surface-2)' : 'transparent',
                        color: 'var(--fg)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg-dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Quantity to Sell
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="number"
                    value={simAmount}
                    onChange={(e) => setSimAmount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--line)',
                      color: 'var(--fg)',
                      fontSize: '1.1rem',
                      fontFamily: 'var(--f-mono)',
                      outline: 'none'
                    }}
                  />
                  <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--fg-dim)', fontWeight: 600 }}>
                    {simAsset}
                  </span>
                </div>
              </div>

              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--surface-2)', border: '1px solid var(--line)', marginTop: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--fg-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                  Estimated Bank Payout (SEPA Instant)
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--jade)', fontFamily: 'var(--f-mono)' }}>
                    €{calculatedPayout}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--fg-dim)' }}>EUR</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--line)', fontSize: '0.78rem', color: 'var(--fg-faint)' }}>
                  <span>Network fees included</span>
                  <span style={{ color: 'var(--jade)' }}>✓ 0% Hidden spread</span>
                </div>
              </div>

              <a className="btn btn-solid btn-block" href="#widget" style={{ justifyContent: 'center' }}>
                Sell {simAsset} with this quote
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Payout Rails ============ */}
      <section className="sec" id="payout-rails">
        <div className="wrap">
          <div className="sec-split">
            <div className="sec-head">
              <p className="eyebrow">Payout Rails</p>
              <h2 className="h2">Instant liquidity. Connected to tier-one banking.</h2>
            </div>
            <p className="body">
              Never wait days for wire transfers or suffer broker freezes. We route payouts through dedicated European and global clearing rails for immediate delivery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginTop: '2rem' }}>
            {PAYOUT_RAILS.map((rail) => {
              const isSelected = selectedRail === rail.id;
              return (
                <div
                  key={rail.id}
                  onClick={() => setSelectedRail(rail.id)}
                  style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    background: isSelected ? 'var(--surface)' : 'var(--surface-2)',
                    border: `1px solid ${isSelected ? 'var(--hi)' : 'var(--line)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 12px 32px -10px rgba(0, 0, 0, 0.4)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: '24px', height: '24px' }}><use href={rail.iconId} /></svg>
                    </div>
                    <span style={{ padding: '4px 10px', borderRadius: '99px', background: 'var(--surface)', border: '1px solid var(--line)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--jade)' }}>
                      {rail.badge}
                    </span>
                  </div>

                  <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{rail.name}</h3>
                  <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.9rem', lineHeight: 1.55, flexGrow: 1, marginBottom: '1.5rem' }}>
                    {rail.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.8rem' }}>
                    <div>
                      <span style={{ display: 'block', color: 'var(--fg-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Delivery</span>
                      <b style={{ color: 'var(--fg)' }}>{rail.speed}</b>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: 'var(--fg-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limits</span>
                      <b style={{ color: 'var(--fg)' }}>{rail.limits}</b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Step-by-Step Flow ============ */}
      <section className="sec" style={{ background: 'var(--ground)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '700px' }}>
            <p className="eyebrow">Off-Ramp Protocol</p>
            <h2 className="h2">Cash out in three simple steps.</h2>
            <p className="lede">Complete transparency from quote confirmation to funds arrival.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', marginTop: '2.5rem' }}>
            <div style={{ padding: '2.25rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>STEP 01</span>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lock Your Quote</h3>
              <p className="body" style={{ fontSize: '0.9rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
                Choose the digital asset you want to sell (BTC, ETH, USDT) and destination currency (EUR, GBP, USD). Your rate is locked instantly.
              </p>
            </div>

            <div style={{ padding: '2.25rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>STEP 02</span>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Provide Bank IBAN</h3>
              <p className="body" style={{ fontSize: '0.9rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
                Enter your personal bank IBAN or account details. Ownership is matched against your verified profile to ensure secure delivery.
              </p>
            </div>

            <div style={{ padding: '2.25rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>STEP 03</span>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Send Crypto &amp; Settle</h3>
              <p className="body" style={{ fontSize: '0.9rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
                Transfer crypto to the provided secure escrow address. Once confirmed, SEPA Instant automatically fires fiat into your bank in &lt;10s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Institutional OTC & High Volume ============ */}
      <section className="sec" style={{ paddingBlock: '3.5rem', background: 'var(--surface-2)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">High Net Worth &amp; Enterprise</span>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Selling larger volumes? Access institutional OTC.</h2>
              <p className="body" style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                For orders exceeding €100,000, avoid exchange order books and slippage. Coincashy OTC provides private quote execution, dedicated account managers, and custom banking rails worldwide.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link className="btn btn-solid" href="/otc">
                  Explore OTC Desks
                  <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/contact?topic=otc">
                  Contact an OTC Trader
                </Link>
              </div>
            </div>

            <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Institutional Off-Ramp Features</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <svg className="ic" style={{ width: '18px', height: '18px', color: 'var(--jade)', flexShrink: 0 }}><use href="#i-check" /></svg>
                  <span>Unlimited single-ticket order sizes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <svg className="ic" style={{ width: '18px', height: '18px', color: 'var(--jade)', flexShrink: 0 }}><use href="#i-check" /></svg>
                  <span>Zero market impact &amp; 0% slippage guarantee</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <svg className="ic" style={{ width: '18px', height: '18px', color: 'var(--jade)', flexShrink: 0 }}><use href="#i-check" /></svg>
                  <span>Same-day SWIFT, Fedwire, and CHAPS settlement</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <svg className="ic" style={{ width: '18px', height: '18px', color: 'var(--jade)', flexShrink: 0 }}><use href="#i-check" /></svg>
                  <span>Dedicated Telegram / Signal trading desk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ Accordion ============ */}
      <section className="sec" id="faq">
        <div className="wrap" style={{ maxWidth: '840px' }}>
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
            <p className="eyebrow">Sell Crypto FAQ</p>
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '2rem' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      color: 'var(--fg)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <svg
                      className="ic"
                      style={{
                        width: '18px',
                        height: '18px',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '12px'
                      }}
                    >
                      <use href="#i-chevron-down" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--fg-dim)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Final Conversion CTA ============ */}
      <section className="sec" style={{ paddingBlock: '4rem 6rem' }}>
        <div className="wrap">
          <div
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, var(--surface), var(--surface-2))',
              border: '1px solid var(--line)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div className="p-hero-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.25 }} aria-hidden="true" />
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
              Liquidate crypto directly into <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>your bank account.</em>
            </h2>
            <p className="lede" style={{ maxWidth: '620px', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>
              Receive funds via SEPA Instant in seconds. Safe, fully compliant, and executed with guaranteed pricing.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <a className="btn btn-solid" href="#widget">
                Cash out now
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
              <Link className="btn btn-line" href="/contact">
                Talk to support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
