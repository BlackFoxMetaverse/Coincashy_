import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stablecoin Settlement & Global Treasury | Coincashy',
  description: 'Execute instant cross-border settlement in USDC and USDT. Eliminate 3-5 day banking delays, reduce FX costs, and automate global payroll and vendor payouts.',
};

export default function SettlementPage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="settlement-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Stablecoin Settlement &amp; Treasury</p>
              <h1 className="display">
                Global settlement at the speed of <em>the internet.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Replace slow correspondent banking networks with 24/7 programmable stablecoin rails. Move value internationally in USDC and USDT with sub-second finality and guaranteed delivery.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=settlement">
                  Talk to Treasury Team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/business#treasury">
                  Preview Treasury Dashboard
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison: Legacy Banking vs Coincashy Stablecoins */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div className="sec-split" style={{ marginBottom: '3rem' }}>
              <div className="sec-head">
                <p className="eyebrow">Modern Treasury</p>
                <h2 className="h2">Why leading enterprises settle on-chain.</h2>
              </div>
              <p className="body" style={{ color: 'var(--low)' }}>
                Correspondent banking locks capital in transit for days and incurs multiple intermediary cuts. Coincashy stablecoin settlement provides instant finality and transparent liquidity.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
              {/* Legacy Rails */}
              <div style={{ padding: '2.5rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', opacity: 0.85 }}>
                <h3 className="h4" style={{ color: 'var(--bad)', marginBottom: '1.25rem' }}>Legacy Correspondent Banking</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--bad)' }}>✕</span> 3 to 5 business days settlement window</li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--bad)' }}>✕</span> Unpredictable intermediary bank deductions ($25-$75 per wire)</li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--bad)' }}>✕</span> Closed on weekends, bank holidays, and after 4 PM cutoffs</li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--bad)' }}>✕</span> Trapped working capital and delayed vendor fulfillment</li>
                </ul>
              </div>

              {/* Coincashy Rails */}
              <div style={{ padding: '2.5rem', borderRadius: '24px', background: 'linear-gradient(145deg, var(--surface-2), var(--surface))', border: '1px solid var(--hi)' }}>
                <h3 className="h4" style={{ color: 'var(--ok)', marginBottom: '1.25rem' }}>Coincashy Stablecoin Rails</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--ok)' }}>✓</span> Instant finality (under 60 seconds 24/7/365)</li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--ok)' }}>✓</span> Flat, predictable network fees with zero middleman deductions</li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--ok)' }}>✓</span> Programmatic batch payouts and automated treasury sweeps</li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--ok)' }}>✓</span> Seamless conversion to EUR, USD, and GBP bank rails</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Chain Support */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
                <p className="eyebrow">Multi-Network Support</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Settlement on your preferred chain.</h2>
                <p className="body" style={{ color: 'var(--low)' }}>We support USDT and USDC across all major blockchain ecosystems with automated balance routing.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Ethereum</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--low)' }}>ERC-20 USDT &amp; USDC</div>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>TRON</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--low)' }}>TRC-20 USDT</div>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>BNB Chain</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--low)' }}>BEP-20 Stablecoins</div>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Polygon</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Fast Layer-2 Payouts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'linear-gradient(180deg, var(--surface), var(--ground))', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Accelerate Your Treasury Operations</h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--low)' }}>
                Discuss your settlement corridors, liquidity requirements, and corporate account onboarding with our team.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=settlement">
                  Talk to Our Team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/compliance">
                  Review Risk Controls
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
