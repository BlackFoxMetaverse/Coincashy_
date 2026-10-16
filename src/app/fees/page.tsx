'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function FeesPage() {
  const [calcVolume, setCalcVolume] = useState<number>(100000);

  const getEstimatedRate = (vol: number) => {
    if (vol < 25000) return { fee: 0.9, tier: 'Starter' };
    if (vol < 100000) return { fee: 0.65, tier: 'Growth' };
    if (vol < 500000) return { fee: 0.45, tier: 'Pro' };
    if (vol < 2000000) return { fee: 0.25, tier: 'Institutional' };
    return { fee: 0.15, tier: 'Custom Enterprise' };
  };

  const est = getEstimatedRate(calcVolume);
  const estCost = ((calcVolume * est.fee) / 100).toFixed(0);

  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="fees-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Transparent Pricing</p>
              <h1 className="display">
                Upfront rates. <em>Zero hidden surprises.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Whether you are buying your first crypto or settling millions in stablecoins, you always see the complete all-in rate before confirming.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a className="btn btn-solid" href="#fee-tiers">
                  Compare Account Tiers<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </a>
                <Link className="btn btn-line" href="/contact">
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Calculator */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap" style={{ maxWidth: '960px' }}>
            <div style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '24px', background: 'linear-gradient(145deg, var(--surface), var(--ground))', border: '1px solid var(--line)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p className="eyebrow">Interactive Estimator</p>
                <h2 className="h2" style={{ marginBottom: '0.5rem' }}>Estimate Your Volume Rate</h2>
                <p className="body" style={{ color: 'var(--low)' }}>Slide to your expected monthly turnover to preview your volume tier.</p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <label htmlFor="vol-slider" style={{ fontWeight: 600, fontSize: '1rem' }}>Monthly Volume</label>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--hi)' }}>
                    €{calcVolume.toLocaleString('en-US')}
                  </span>
                </div>
                <input
                  id="vol-slider"
                  type="range"
                  min={5000}
                  max={2500000}
                  step={5000}
                  value={calcVolume}
                  onChange={(e) => setCalcVolume(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--hi)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--low)', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                  <span>€5k</span>
                  <span>€500k</span>
                  <span>€1m</span>
                  <span>€2.5m+</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', textAlign: 'center', background: 'var(--surface-2)', padding: '1.5rem', borderRadius: '18px', border: '1px solid var(--line)' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--low)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Assigned Tier</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--fg)' }}>{est.tier}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--low)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Effective Rate</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#22c55e' }}>{est.fee}%</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--low)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Est. Monthly Cost</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--hi)' }}>≈ €{Number(estCost).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Account Tiers */}
        <section className="sec" id="fee-tiers" style={{ paddingBottom: '4rem' }}>
          <div className="wrap" style={{ maxWidth: '1060px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
              {/* Personal Tier */}
              <div style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hi)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Retail</span>
                  <h3 className="h3" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Personal Account</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem' }}>Everything for everyday crypto buying, selling, and card spending.</p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Account opening</span>
                    <span style={{ fontWeight: 600, color: '#22c55e' }}>Free (€0)</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Crypto deposits</span>
                    <span style={{ fontWeight: 600, color: '#22c55e' }}>Free (€0)</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>SEPA / FPS fiat deposits</span>
                    <span style={{ fontWeight: 600, color: '#22c55e' }}>Free (€0)</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Card payment fee</span>
                    <span style={{ fontWeight: 600 }}>Included in quote</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Swaps &amp; Conversions</span>
                    <span style={{ fontWeight: 600 }}>Transparent spread</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--low)' }}>Crypto withdrawals</span>
                    <span style={{ fontWeight: 600 }}>Network gas only</span>
                  </li>
                </ul>

                <Link className="btn btn-solid btn-block" href="/personal#buy">
                  Open Personal Account
                </Link>
              </div>

              {/* Business Tier */}
              <div style={{ background: 'linear-gradient(160deg, var(--surface-2), var(--surface))', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--hi)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hi)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Enterprise</span>
                  <h3 className="h3" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Business &amp; Institutional</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem' }}>High-volume payment processing, vIBAN rails, and OTC execution.</p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Corporate KYB Onboarding</span>
                    <span style={{ fontWeight: 600 }}>Included</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>OTC Execution ($50k+)</span>
                    <span style={{ fontWeight: 600 }}>From 0.15%</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Crypto Processing</span>
                    <span style={{ fontWeight: 600 }}>From 0.5%</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>Dedicated vIBAN Accounts</span>
                    <span style={{ fontWeight: 600 }}>Volume-tiered</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--low)' }}>API &amp; Webhook Access</span>
                    <span style={{ fontWeight: 600, color: '#22c55e' }}>Free (€0)</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--low)' }}>Dedicated Account Manager</span>
                    <span style={{ fontWeight: 600, color: '#22c55e' }}>Included</span>
                  </li>
                </ul>

                <Link className="btn btn-solid btn-block" href="/contact?topic=enterprise-fees">
                  Talk to Institutional Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Network Fees Transparency */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap" style={{ maxWidth: '1060px' }}>
            <div style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
                <p className="eyebrow">Network Gas Policy</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Direct blockchain pass-through.</h2>
                <p className="body" style={{ color: 'var(--low)' }}>We do not mark up blockchain network fees. What the miner or validator charges is passed through directly.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>TRON (TRC-20)</div>
                  <div style={{ color: 'var(--low)', fontSize: '0.85rem' }}>USDT withdrawal: ≈ 1-2 USDT</div>
                </div>
                <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Polygon (POS)</div>
                  <div style={{ color: 'var(--low)', fontSize: '0.85rem' }}>USDC withdrawal: ≈ $0.05 - $0.20</div>
                </div>
                <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>BNB Chain (BEP-20)</div>
                  <div style={{ color: 'var(--low)', fontSize: '0.85rem' }}>USDT / USDC: ≈ $0.20 - $0.50</div>
                </div>
                <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Ethereum (ERC-20)</div>
                  <div style={{ color: 'var(--low)', fontSize: '0.85rem' }}>Dynamic based on gas price</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
