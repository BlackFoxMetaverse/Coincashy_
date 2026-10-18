"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CryptoExchangeWidget from '@/features/crypto-exchange/components/CryptoExchangeWidget';
import { selectExchangePair } from '@/features/crypto-exchange/hooks/useOrderWidget';
import { Currency } from '@/features/crypto-exchange/domain/OrderCalculator';

interface SwapPairConfig {
  from: string;
  to: string;
  fromName: string;
  toName: string;
  badge: string;
  computeRate: (p: Record<string, { price: number; change: string }>) => { rate: string; change: string };
}

const SWAP_PAIRS_CONFIG: SwapPairConfig[] = [
  {
    from: 'BTC',
    to: 'USDT',
    fromName: 'Bitcoin',
    toName: 'Tether USD',
    badge: 'High Volume',
    computeRate: (p) => {
      const btc = p.BTC?.price || 84297;
      const usdt = p.USDT?.price || 1;
      return {
        rate: `1 BTC ≈ ${Math.round(btc / usdt).toLocaleString('en-US')} USDT`,
        change: p.BTC?.change || '+2.8%',
      };
    },
  },
  {
    from: 'ETH',
    to: 'USDC',
    fromName: 'Ethereum',
    toName: 'USD Coin',
    badge: 'DeFi Standard',
    computeRate: (p) => {
      const eth = p.ETH?.price || 2640.35;
      const usdc = p.USDC?.price || 1;
      return {
        rate: `1 ETH ≈ ${(eth / usdc).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDC`,
        change: p.ETH?.change || '+3.4%',
      };
    },
  },
  {
    from: 'SOL',
    to: 'USDC',
    fromName: 'Solana',
    toName: 'USD Coin',
    badge: 'Fastest',
    computeRate: (p) => {
      const sol = p.SOL?.price || 154.2;
      const usdc = p.USDC?.price || 1;
      return {
        rate: `1 SOL ≈ ${(sol / usdc).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDC`,
        change: p.SOL?.change || '+5.1%',
      };
    },
  },
  {
    from: 'USDT',
    to: 'EURC',
    fromName: 'Tether USD',
    toName: 'Euro Coin',
    badge: 'FX Swap',
    computeRate: () => ({
      rate: '1 USDT ≈ 0.92 EURC',
      change: '+0.1%',
    }),
  },
  {
    from: 'BTC',
    to: 'ETH',
    fromName: 'Bitcoin',
    toName: 'Ethereum',
    badge: 'Core Pair',
    computeRate: (p) => {
      const btc = p.BTC?.price || 84297;
      const eth = p.ETH?.price || 2640.35;
      return {
        rate: `1 BTC ≈ ${(btc / eth).toFixed(4)} ETH`,
        change: p.BTC?.change || '-0.4%',
      };
    },
  },
  {
    from: 'USDC',
    to: 'USDT',
    fromName: 'USD Coin',
    toName: 'Tether USD',
    badge: '1:1 Peg',
    computeRate: () => ({
      rate: '1 USDC ≈ 1.0000 USDT',
      change: '0.0%',
    }),
  },
];

const INITIAL_PRICES: Record<string, { price: number; change: string }> = {
  BTC: { price: 84297.67, change: '+1.8%' },
  ETH: { price: 2640.35, change: '+2.4%' },
  SOL: { price: 154.2, change: '+4.2%' },
  USDT: { price: 1.0, change: '0.0%' },
  USDC: { price: 1.0, change: '0.0%' },
};

const FAQS = [
  {
    q: 'How does Coincashy achieve 0% price slippage?',
    a: 'Unlike automated market maker (AMM) decentralized exchanges that adjust prices based on pool liquidity ratios, Coincashy utilizes atomic RFQ (Request for Quote) routing directly into institutional order books. The rate you see on your review screen is guaranteed and executed atomically.'
  },
  {
    q: 'Do I need native gas tokens (like ETH or SOL) to pay network fees?',
    a: 'No. Coincashy eliminates the gas token headache. All execution costs and network fees are bundled into your transparent swap quote, meaning you can convert 100% of an asset without needing separate native tokens in your wallet.'
  },
  {
    q: 'Can MEV sandwich bots or front-runners interfere with my swap?',
    a: 'Zero chance. All Coincashy conversions execute through private institutional liquidity routing and off-chain atomic matching, completely shielding transactions from public mempool sandwich attacks and toxic MEV arbitrage.'
  },
  {
    q: 'What is the minimum and maximum conversion size?',
    a: 'You can convert as little as €10 worth of supported tokens. There is no ceiling for standard verified users up to €50,000 per transaction, and our institutional OTC desk handles multi-million-dollar block swaps seamlessly.'
  },
  {
    q: 'Can I download transaction history for tax accounting?',
    a: 'Yes. Every swap generated produces an audit-ready cryptographic receipt, complete with timestamp, exact fill price, and exchange rate, exportable via CSV or API for tools like CoinTracker, Koinly, and standard ERPs.'
  }
];

export default function ConvertCryptoView() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [prices, setPrices] = useState(INITIAL_PRICES);

  useEffect(() => {
    let isMounted = true;
    async function fetchPrices() {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && isMounted) {
            setPrices((prev) => ({
              ...prev,
              ...json.data,
            }));
          }
        }
      } catch (err) {
        console.warn('ConvertCryptoView failed to fetch /api/prices:', err);
      }
    }
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const popularPairs = SWAP_PAIRS_CONFIG.map((cfg) => ({
    ...cfg,
    ...cfg.computeRate(prices),
  }));

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="page" id="convert-crypto-page" suppressHydrationWarning>
      {/* ============ Hero Section ============ */}
      <section className="p-hero" id="convert-hero">
        <div className="p-hero-glow" aria-hidden="true" />
        <div className="wrap p-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Atomic Token Swaps</p>
            <h1 className="display">
              <span className="nw">Convert crypto.</span> <span className="nw">0% slippage</span> <em className="nw">instant swaps.</em>
            </h1>
            <p className="lede">
              Move effortlessly between Bitcoin, Ethereum, Solana, and top stablecoins with zero price slippage, zero gas surprises, and instant execution.
            </p>
            
            <div className="cta-row" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <a className="btn btn-solid" href="#widget">
                Start converting
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
              <a className="btn btn-line" href="#pairs">
                Explore Swap Pairs
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="dot live" />
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>0.00% Slippage</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-lock" /></svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>MEV Protected</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)' }}>Zero gas friction</span>
              </div>
            </div>
          </div>

          <div className="w-col" id="exchange-widget">
            <CryptoExchangeWidget defaultMode="convert" />
            <p className="p-caption">Guaranteed atomic RFQ execution. 30-second locked rates.</p>
          </div>
        </div>
      </section>

      {/* ============ Popular Swap Pairs Matrix ============ */}
      <section className="sec" id="pairs" style={{ background: 'var(--surface-2)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '4px' }}>Liquidity Hub</span>
              <h2 className="h3" style={{ margin: 0 }}>Trending Conversion Pairs</h2>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--fg-dim)', fontFamily: 'var(--f-mono)' }}>Instant settlement · Deep liquidity</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '16px' }}>
            {popularPairs.map((pair, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  borderRadius: '20px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--fg)' }}>{pair.from}</span>
                    <svg className="ic" style={{ width: '14px', height: '14px', color: 'var(--fg-faint)' }}><use href="#i-arrow-right" /></svg>
                    <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--jade)' }}>{pair.to}</span>
                  </div>
                  <span style={{ padding: '3px 8px', borderRadius: '99px', background: 'var(--surface-2)', border: '1px solid var(--line)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--hi)' }}>
                    {pair.badge}
                  </span>
                </div>

                <div style={{ padding: '10px 14px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.88rem', fontWeight: 600 }}>{pair.rate}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: pair.change.startsWith('+') ? 'var(--jade)' : 'var(--fg-dim)' }}>
                    {pair.change}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => selectExchangePair(pair.from as Currency, pair.to as Currency, 'convert')}
                  className="btn btn-line btn-sm"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '4px', cursor: 'pointer' }}
                >
                  Convert {pair.from} to {pair.to}
                  <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Smart Order Routing Comparison ============ */}
      <section className="sec" id="technology">
        <div className="wrap">
          <div className="sec-split">
            <div className="sec-head">
              <p className="eyebrow">Better Than DEXs</p>
              <h2 className="h2">Atomic RFQ vs Traditional AMMs.</h2>
            </div>
            <p className="body">
              Standard decentralized exchanges expose you to slippage loss, sandwich attacks, and costly gas fee burns. Coincashy re-engineers token conversions with institutional certainty.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '20px', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <thead>
                <tr style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)', textAlign: 'left' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-faint)' }}>Feature</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--jade)' }}>Coincashy Conversion</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-faint)' }}>Traditional AMM / DEX</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Price Slippage</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>0.00% Guaranteed</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>0.5% – 3.0% loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>MEV &amp; Front-Running</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>100% Protected (Private fills)</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Vulnerable to sandwich bots</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Gas Volatility</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>Zero gas tokens needed</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Requires native ETH/SOL</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Failed Transactions</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>Zero failed swaps</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Fails on price moves, loses gas</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Settlement Speed</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>Sub-second execution</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Minutes depending on mempool</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ How It Works Bento ============ */}
      <section className="sec" style={{ background: 'var(--ground)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '700px' }}>
            <p className="eyebrow">Frictionless Flow</p>
            <h2 className="h2">Convert tokens in three atomic steps.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', marginTop: '2.5rem' }}>
            <div style={{ padding: '2.25rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>01</span>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Select Pair &amp; Amount</h3>
              <p className="body" style={{ fontSize: '0.9rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
                Choose any two supported cryptocurrencies (e.g., BTC to USDT or ETH to USDC). Enter your swap amount.
              </p>
            </div>

            <div style={{ padding: '2.25rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>02</span>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lock Guaranteed Quote</h3>
              <p className="body" style={{ fontSize: '0.9rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
                Our liquidity engine queries institutional partners and locks the exact conversion price for 30 seconds.
              </p>
            </div>

            <div style={{ padding: '2.25rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.85rem', color: 'var(--jade)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>03</span>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Instant Atomic Settlement</h3>
              <p className="body" style={{ fontSize: '0.9rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
                Confirm the swap. The output tokens are credited immediately to your balance with complete audit confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ Accordion ============ */}
      <section className="sec" id="faq">
        <div className="wrap" style={{ maxWidth: '840px' }}>
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
            <p className="eyebrow">Swap FAQ</p>
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
              Swap any digital asset <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>with zero slippage.</em>
            </h2>
            <p className="lede" style={{ maxWidth: '620px', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>
              Join institutional traders and everyday users converting tokens with guaranteed fills and instant settlement.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <a className="btn btn-solid" href="#widget">
                Convert tokens now
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
