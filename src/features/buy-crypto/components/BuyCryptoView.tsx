"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CryptoExchangeWidget from '@/features/crypto-exchange/components/CryptoExchangeWidget';
import {
  SUPPORTED_SYMBOLS,
  SupportedSymbol,
  formatCryptoPrice,
  compute24hChange,
} from '../services/diaPriceService';
import CryptoLogo from '@/components/CryptoLogo';

interface PaymentRail {
  id: string;
  name: string;
  badge: string;
  speed: string;
  fee: string;
  limits: string;
  description: string;
  iconId: string;
}

const PAYMENT_RAILS: PaymentRail[] = [
  {
    id: 'apple-google',
    name: 'Apple Pay & Google Pay',
    badge: 'Fastest Mobile',
    speed: '< 60 seconds',
    fee: '1.49% transparent',
    limits: '€20 – €5,000 / day',
    description: '1-tap biometric checkout directly from your phone or Mac using Face ID or fingerprint. Zero manual card detail entry.',
    iconId: '#b-applepay'
  },
  {
    id: 'cards',
    name: 'Visa & Mastercard',
    badge: 'Universal',
    speed: 'Instant credit',
    fee: '1.99% flat',
    limits: '€20 – €10,000 / day',
    description: 'Worldwide acceptance for debit and credit cards issued across 140+ countries, fortified by 3D-Secure 2.0 biometric fraud protocols.',
    iconId: '#i-credit-card'
  },
  {
    id: 'sepa',
    name: 'SEPA Instant & Bank Wire',
    badge: 'Zero Rail Fee',
    speed: 'Under 10s (Instant)',
    fee: '0.00% rail fee',
    limits: '€50 – €100,000 / transfer',
    description: 'Pan-European SEPA Instant deposits with 0% bank fee. Funds clear directly to your Coincashy account with wholesale rates.',
    iconId: '#b-sepa'
  },
  {
    id: 'faster-payments',
    name: 'UK Faster Payments',
    badge: 'UK Instant',
    speed: '< 30 seconds',
    fee: '0.00% rail fee',
    limits: '£50 – £50,000 / transfer',
    description: 'Instant GBP deposits directly from any UK high-street bank (Revolut, Barclays, HSBC, Monzo) with immediate crypto execution.',
    iconId: '#i-landmark'
  }
];

const INITIAL_ASSETS: Record<
  SupportedSymbol,
  { sym: SupportedSymbol; name: string; icon: string; cls: string; price: string; change: string; min: string }
> = {
  BTC: { sym: 'BTC', name: 'Bitcoin', icon: '₿', cls: 'btc', price: '$81,311.95', change: '-0.9%', min: '€20' },
  ETH: { sym: 'ETH', name: 'Ethereum', icon: 'Ξ', cls: 'eth', price: '$2,414.58', change: '-0.8%', min: '€20' },
  SOL: { sym: 'SOL', name: 'Solana', icon: '◎', cls: 'sol', price: '$103.97', change: '-1.1%', min: '€15' },
  USDT: { sym: 'USDT', name: 'Tether USD', icon: '₮', cls: 'usdt', price: '$1.00', change: '0.0%', min: '€10' },
  USDC: { sym: 'USDC', name: 'USD Coin', icon: '$', cls: 'usdc', price: '$1.00', change: '0.0%', min: '€10' },
};

const FAQS = [
  {
    q: 'How fast do I receive my purchased crypto?',
    a: 'When paying with Apple Pay, Google Pay, or Visa/Mastercard, transactions execute immediately and crypto is dispatched to your destination address within 60 seconds once blockchain confirmations begin. Bank transfer orders execute the moment your SEPA Instant or Faster Payment lands.'
  },
  {
    q: 'Do I need to verify my identity (KYC) before buying?',
    a: 'Yes. In strict compliance with European and international AML/CFT regulations, we require a fast identity check. Powered by Sumsub, standard biometric verification takes less than 2 minutes directly on your phone.'
  },
  {
    q: 'Can I send purchased crypto directly to my own self-custody wallet?',
    a: 'Absolutely. You have 100% freedom to provide any external self-custody wallet address (such as Ledger, Trezor, MetaMask, Trust Wallet, or Phantom) or store your assets safely inside your Coincashy wallet.'
  },
  {
    q: 'Are there hidden FX fees or inflated exchange rates?',
    a: 'None. Every quote generated in our exchange widget locks in the exact price with 0% hidden spread markup. What you see on your confirmation screen is precisely what you receive.'
  },
  {
    q: 'What is the maximum purchase limit for high volume buyers?',
    a: 'Standard verified individual accounts can purchase up to €10,000 daily with card rails and up to €100,000 daily via SEPA Instant. For institutional or high-net-worth orders beyond €100,000, our dedicated OTC desk provides bespoke high-limit settlement.'
  }
];

export default function BuyCryptoView() {
  const [selectedRail, setSelectedRail] = useState<string>('apple-google');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [assetPrices, setAssetPrices] = useState(INITIAL_ASSETS);
  const [isLivePricing, setIsLivePricing] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPrices() {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && isMounted) {
            setAssetPrices((prev) => {
              const updated = { ...prev };
              SUPPORTED_SYMBOLS.forEach((sym) => {
                if (json.data[sym]) {
                  updated[sym] = {
                    ...updated[sym],
                    price: json.data[sym].formattedPrice,
                    change: json.data[sym].change,
                  };
                }
              });
              return updated;
            });
            setIsLivePricing(true);
            return;
          }
        }
      } catch {
        // Fallback to direct DIA API endpoint
      }

      // Direct DIA API fetch fallback for strictly the 5 displayed currencies
      try {
        const updates = await Promise.all(
          SUPPORTED_SYMBOLS.map(async (sym) => {
            const r = await fetch(`https://api.diadata.org/v1/quotation/${sym}`);
            if (!r.ok) return null;
            const d = await r.json();
            return {
              sym,
              price: formatCryptoPrice(sym, d.Price),
              change: compute24hChange(d.Price, d.PriceYesterday),
            };
          })
        );

        if (isMounted) {
          setAssetPrices((prev) => {
            const updated = { ...prev };
            updates.forEach((item) => {
              if (item && updated[item.sym]) {
                updated[item.sym] = {
                  ...updated[item.sym],
                  price: item.price,
                  change: item.change,
                };
              }
            });
            return updated;
          });
          setIsLivePricing(true);
        }
      } catch (err) {
        console.warn('Direct DIA pricing query error:', err);
      }
    }

    loadPrices();
    const timer = setInterval(loadPrices, 60000);
    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="page" id="buy-crypto-page" suppressHydrationWarning>
      {/* ============ Hero Section ============ */}
      <section className="p-hero" id="buy-hero">
        <div className="p-hero-glow" aria-hidden="true" />
        <div className="wrap p-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Instant On-Ramp</p>
            <h1 className="display">
              <span className="nw">Buy crypto with</span> <span className="nw">card, Apple Pay</span> <em className="nw">or SEPA bank rail.</em>
            </h1>
            <p className="lede">
              Acquire Bitcoin, Ethereum, Solana, and stablecoins in seconds with zero hidden spreads. Protected by bank-grade security, instant delivery, and compliance built in.
            </p>
            
            <div className="cta-row" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <a className="btn btn-solid" href="#exchange-widget">
                Start buying now
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
              <Link className="btn btn-line" href="/cards">
                Explore Crypto Card
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="dot live" />
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>Live OTC pricing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>Sub-60s settlement</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>Regulated VASP</span>
              </div>
            </div>
          </div>

          <div className="w-col" id="exchange-widget">
            <CryptoExchangeWidget defaultMode="buy" />
            <p className="p-caption">Guaranteed 30-second quote lock. 0% slippage on delivery.</p>
          </div>
        </div>
      </section>

      {/* ============ Popular Purchase Assets ============ */}
      <section className="sec" style={{ paddingBlock: '3rem' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="eyebrow" style={{ margin: 0 }}>Market Overview</span>
                {isLivePricing && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--fg-dim)',
                      background: 'var(--surface)',
                      padding: '3px 9px',
                      borderRadius: '100px',
                      border: '1px solid var(--line)',
                    }}
                    title="Verifiable live prices powered by DIA Oracle"
                  >
                    <span className="dot live" style={{ width: '6px', height: '6px' }} />
                    DIA Live Oracle
                  </span>
                )}
              </div>
              <h2 className="h3" style={{ margin: 0 }}>Supported Cryptocurrencies</h2>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)', fontFamily: 'var(--f-mono)' }}>100+ digital assets supported</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px' }}>
            {SUPPORTED_SYMBOLS.map((sym) => {
              const asset = assetPrices[sym];
              const isPositive = asset.change.startsWith('+');
              const isNegative = asset.change.startsWith('-');
              const changeColor = isPositive ? 'var(--jade)' : isNegative ? 'var(--coral)' : 'var(--fg-dim)';

              return (
                <div
                  key={sym}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                      <CryptoLogo symbol={sym} size={34} />
                      <div>
                        <b style={{ display: 'block', fontSize: '0.95rem' }}>{sym}</b>
                        <span style={{ fontSize: '0.78rem', color: 'var(--fg-dim)' }}>{asset.name}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: changeColor }}>
                      {asset.change}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginTop: '6px',
                      paddingTop: '8px',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {asset.price}
                    </span>
                    <a href="#exchange-widget" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--hi)' }}>
                      Buy {sym} →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Payment Rails Breakdown ============ */}
      <section className="sec" id="payment-rails">
        <div className="wrap">
          <div className="sec-split">
            <div className="sec-head">
              <p className="eyebrow">Payment Methods</p>
              <h2 className="h2">Pay your way. Anywhere in the world.</h2>
            </div>
            <p className="body">
              Whether you prefer instant biometric checkout on your smartphone or zero-fee bank transfers, Coincashy bridges global fiat rails to blockchain networks seamlessly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginTop: '2rem' }}>
            {PAYMENT_RAILS.map((rail) => {
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
                      <span style={{ display: 'block', color: 'var(--fg-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Speed</span>
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

      {/* ============ How It Works: 4 Step Acquisition ============ */}
      <section className="sec" style={{ background: 'var(--ground)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '700px' }}>
            <p className="eyebrow">Seamless Process</p>
            <h2 className="h2">How buying crypto works in four steps.</h2>
            <p className="lede">From initial quote to confirmed wallet delivery in under three minutes.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '20px', marginTop: '2.5rem' }}>
            <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>01</span>
              <h3 className="h3" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Select Amount &amp; Asset</h3>
              <p className="body" style={{ fontSize: '0.88rem', color: 'var(--fg-dim)', lineHeight: 1.5 }}>
                Choose your currency (EUR, USD, GBP) and digital asset (BTC, ETH, SOL, USDT). Real-time rates lock in for 30 seconds.
              </p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>02</span>
              <h3 className="h3" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Fast Identity Verification</h3>
              <p className="body" style={{ fontSize: '0.88rem', color: 'var(--fg-dim)', lineHeight: 1.5 }}>
                Complete a 90-second biometric check powered by Sumsub. Instant approval for verified European &amp; global residents.
              </p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>03</span>
              <h3 className="h3" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Authorize Payment</h3>
              <p className="body" style={{ fontSize: '0.88rem', color: 'var(--fg-dim)', lineHeight: 1.5 }}>
                Pay securely via Apple Pay, Google Pay, Visa, Mastercard, or zero-fee SEPA Instant. Protected by 3DS 2.0.
              </p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>04</span>
              <h3 className="h3" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Instant Wallet Delivery</h3>
              <p className="body" style={{ fontSize: '0.88rem', color: 'var(--fg-dim)', lineHeight: 1.5 }}>
                Crypto is dispatched to your provided wallet address or Coincashy account immediately upon transaction settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Security & Compliance Trust Bar ============ */}
      <section className="sec" style={{ paddingBlock: '3.5rem', background: 'var(--surface-2)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span className="eyebrow">Enterprise Security</span>
            <h2 className="h3">Compliant, regulated, and independently audited.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px' }}>
            <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', flexShrink: 0 }}>
                <svg className="ic" style={{ width: '20px', height: '20px' }}><use href="#i-file-check" /></svg>
              </div>
              <div>
                <b style={{ display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Registered VASP</b>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--fg-dim)', lineHeight: 1.45 }}>Operated under full compliance with EU Virtual Asset Service Provider directives.</p>
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', flexShrink: 0 }}>
                <svg className="ic" style={{ width: '20px', height: '20px' }}><use href="#i-lock" /></svg>
              </div>
              <div>
                <b style={{ display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Cold Storage Custody</b>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--fg-dim)', lineHeight: 1.45 }}>Assets backed by institutional MPC custody partners including BitGo &amp; Utila.</p>
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', flexShrink: 0 }}>
                <svg className="ic" style={{ width: '20px', height: '20px' }}><use href="#i-radar" /></svg>
              </div>
              <div>
                <b style={{ display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>Real-time AML Screening</b>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--fg-dim)', lineHeight: 1.45 }}>Every transaction and address is actively screened via Global Ledger &amp; Sumsub.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ Accordion ============ */}
      <section className="sec" id="faq">
        <div className="wrap" style={{ maxWidth: '840px' }}>
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
            <p className="eyebrow">Got Questions?</p>
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
              Start acquiring crypto <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>without friction.</em>
            </h2>
            <p className="lede" style={{ maxWidth: '620px', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>
              Join thousands of individuals and enterprises moving value with zero hidden fees and instant settlement.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <a className="btn btn-solid" href="#widget">
                Buy crypto now
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
