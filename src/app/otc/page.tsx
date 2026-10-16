import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Institutional OTC Desk – Deep Liquidity & Instant Settlement | Coincashy',
  description: 'Execute high-volume crypto and fiat trades with zero slippage, tight institutional spreads, and same-day bank settlement from our Warsaw trading desk.',
};

export default function OtcPage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="otc-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Institutional OTC Trading</p>
              <h1 className="display">
                Large-block execution with <em>zero slippage.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Born in Warsaw in 2022 as an institutional trading desk, Coincashy provides deep liquidity, fixed quotes, and instant bank settlement for trades from $50,000 to $10,000,000+.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=otc">
                  Request OTC Quote<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <a className="btn btn-line" href="tel:+447452022306">
                  <svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>+44 7452 022306
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="sec" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
              <div style={{ padding: '2rem 1.5rem', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: 'var(--hi)', marginBottom: '0.4rem' }}>T+0</div>
                <p className="eyebrow" style={{ margin: 0 }}>Same-Day Bank Settlement</p>
              </div>
              <div style={{ padding: '2rem 1.5rem', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: 'var(--hi)', marginBottom: '0.4rem' }}>$0</div>
                <p className="eyebrow" style={{ margin: 0 }}>Slippage on Locked Quotes</p>
              </div>
              <div style={{ padding: '2rem 1.5rem', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: 'var(--hi)', marginBottom: '0.4rem' }}>$50k+</div>
                <p className="eyebrow" style={{ margin: 0 }}>Block Order Minimum</p>
              </div>
              <div style={{ padding: '2rem 1.5rem', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: 'var(--hi)', marginBottom: '0.4rem' }}>24/7</div>
                <p className="eyebrow" style={{ margin: 0 }}>Dedicated Warsaw Traders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div className="sec-split" style={{ marginBottom: '3rem' }}>
              <div className="sec-head">
                <p className="eyebrow">Institutional Advantage</p>
                <h2 className="h2">Built for funds, corporates and high-net-worth desks.</h2>
              </div>
              <p className="body" style={{ color: 'var(--low)' }}>
                Traditional exchanges suffer from order book slippage and withdrawal limits. Coincashy OTC executes off-market with bilateral settlement directly into your corporate bank accounts.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-chart-candlestick" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Guaranteed Pricing</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Lock in your all-inclusive executable price. The quote you accept is the exact amount settled to your account, with zero spread surprises or hidden fees.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-landmark" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Direct Banking Rails</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Settle EUR via SEPA / SEPA Instant, GBP via Faster Payments / CHAPS, and USD / PLN via local clearing or SWIFT. Institutional wires processed promptly.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-lock" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Regulated &amp; Compliant</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Registered Polish VASP with rigorous KYC/AML onboarding, transaction screening via Global Ledger, and institutional custody powered by BitGo and Utila.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Assets */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px', background: 'linear-gradient(145deg, var(--surface), var(--ground))', border: '1px solid var(--line)' }}>
              <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                <p className="eyebrow">Liquidity Coverage</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Liquid Pairs &amp; Currencies</h2>
                <p className="body" style={{ color: 'var(--low)' }}>We support high-volume block conversions between leading digital assets and international fiat currencies.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {['BTC / EUR', 'BTC / USD', 'BTC / GBP', 'BTC / PLN', 'USDT / EUR', 'USDT / USD', 'USDT / PLN', 'USDC / EUR', 'USDC / USD', 'ETH / EUR', 'ETH / USD'].map((pair) => (
                  <span key={pair} style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', color: 'var(--hi)', fontWeight: 600, fontSize: '0.95rem' }}>
                    {pair}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Open an Institutional OTC Account</h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--low)' }}>
                Speak directly with our Warsaw trading desk. We’ll review your volume requirements and set up your tailored onboarding path.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=otc">
                  Contact OTC Desk<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/compliance">
                  Review Compliance Standards
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
