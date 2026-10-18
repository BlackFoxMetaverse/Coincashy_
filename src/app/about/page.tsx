import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Coincashy – Regulated European Crypto-Fiat Infrastructure',
  description: 'Coincashy Sp. z o.o. powers institutional crypto-fiat settlement, multi-currency vIBANs, and deep liquidity across Europe. Registered Polish VASP (KRS: 0001135823).',
};

export default function About() {
  return (
    <>
      <div>
        <main className="page" id="about" style={{ background: 'var(--ground)' }}>
          
          {/* ============ HERO SECTION ============ */}
          <section className="hero subpage-hero" id="top">
            <div className="hero-bg" aria-hidden="true">
              <span className="hero-orb" />
              <span className="hero-veil" />
              <svg className="hero-rings" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMax meet">
                <g fill="none" stroke="currentColor" strokeWidth={1}>
                  <circle cx={700} cy={700} r={300} />
                  <circle cx={700} cy={700} r={460} />
                  <circle cx={700} cy={700} r={620} />
                  <circle cx={700} cy={700} r={780} />
                </g>
              </svg>
            </div>
            <div className="wrap hero-inner">
              <div className="hero-copy hero-copy-center">
                
                {/* Live Regulatory Pill */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'var(--surface-2)', border: '1px solid var(--line-2)', marginBottom: '1.5rem', fontSize: '0.82rem', color: 'var(--fg)', fontWeight: 500, backdropFilter: 'blur(12px)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--coin-usdt)', boxShadow: '0 0 10px var(--coin-usdt)' }} />
                  <span>Polish VASP Registered · KRS: 0001135823 · EU MiCA Framework</span>
                </div>

                <h1 className="display" id="hero-title" style={{ opacity: 1, animation: 'none' }}>
                  The institutional standard for <em>crypto-fiat settlement.</em>
                </h1>
                
                <p className="lede" style={{ maxWidth: '820px', margin: '0 auto 2rem', opacity: 1, animation: 'none' }}>
                  Coincashy bridges European banking rails and digital asset liquidity. Whether executing high-volume OTC blocks or deploying automated multi-currency virtual IBANs, our platform provides regulated, sub-second execution for modern financial enterprises. Digital asset services are operated by Coincashy Sp. z o.o., registered in Poland under KRS 0001135823.
                </p>

                <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link className="btn btn-solid" href="/contact?topic=otc">
                    Talk to Trading Desk<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                  </Link>
                  <a className="btn btn-line" href="tel:+447452022306">
                    <svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>+44 7452 022306
                  </a>
                </div>

                {/* Quick Navigation Anchor Bar */}
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
                  <a href="#thesis" className="btn btn-sm btn-line" style={{ borderRadius: '999px', fontSize: '0.78rem', height: '34px', padding: '0 0.95rem' }}>Our Thesis</a>
                  <a href="#metrics" className="btn btn-sm btn-line" style={{ borderRadius: '999px', fontSize: '0.78rem', height: '34px', padding: '0 0.95rem' }}>Scale &amp; Metrics</a>
                  <a href="#pillars" className="btn btn-sm btn-line" style={{ borderRadius: '999px', fontSize: '0.78rem', height: '34px', padding: '0 0.95rem' }}>Core Pillars</a>
                  <a href="#timeline" className="btn btn-sm btn-line" style={{ borderRadius: '999px', fontSize: '0.78rem', height: '34px', padding: '0 0.95rem' }}>Our Journey</a>
                  <a href="#hubs" className="btn btn-sm btn-line" style={{ borderRadius: '999px', fontSize: '0.78rem', height: '34px', padding: '0 0.95rem' }}>European Hubs</a>
                  <a href="#governance" className="btn btn-sm btn-line" style={{ borderRadius: '999px', fontSize: '0.78rem', height: '34px', padding: '0 0.95rem' }}>Standards</a>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 1: THE THESIS & BRIDGE ============ */}
          <section className="sec" id="thesis" style={{ scrollMarginTop: '80px' }}>
            <div className="wrap">
              <div style={{ borderRadius: '24px', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3.5rem)', background: 'linear-gradient(155deg, var(--surface), var(--ground))', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at top right, var(--surface-2), transparent 70%)', pointerEvents: 'none' }} />

                <div className="sec-head" style={{ position: 'relative', zIndex: 1, marginBottom: '2.5rem' }}>
                  <p className="eyebrow">Our Architectural Thesis</p>
                  <h2 className="h2" style={{ maxWidth: '720px' }}>The bottleneck isn't blockchain. It's the fiat bridge.</h2>
                </div>

                <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 10px', borderRadius: '6px', background: 'rgba(242, 154, 136, 0.12)', color: 'var(--coral)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                      The Challenge
                    </div>
                    <p className="body" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: 'var(--hi)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      Traditional financial institutions and digital asset networks exist in disconnected silos. For corporate treasuries, brokers, and global fintechs, converting between fiat and crypto has historically meant multi-day wire delays, counterparty opacity, severe market slippage, and fragmented banking relationships.
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 10px', borderRadius: '6px', background: 'rgba(0, 0, 255, 0.12)', color: 'var(--jade-text-d)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                      The Coincashy Solution
                    </div>
                    <p className="body" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: 'var(--low)', lineHeight: 1.6 }}>
                      We built an automated settlement layer that integrates directly into European clearing houses (SEPA Instant, Faster Payments) and institutional liquidity aggregators. Counterparties obtain sub-second RFQ rates, dedicated virtual IBAN accounts, and segregated MPC custodial protection—all supervised under European VASP regulatory standards.
                    </p>
                  </div>
                </div>

                {/* Architectural Bridge Diagram */}
                <div style={{ position: 'relative', zIndex: 1, marginTop: '3rem', padding: '1.75rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line-2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-faint)', fontFamily: 'var(--f-mono)' }}>
                      SETTLEMENT ARCHITECTURE · UNIFIED ROUTING
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--coin-usdt)', fontWeight: 500 }}>
                      <svg className="ic" style={{ width: 14, height: 14 }}><use href="#i-check" /></svg>
                      Automated Reconciliation
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', alignItems: 'stretch' }}>
                    
                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--ground)', border: '1px solid var(--line)' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--hi)' }}>
                        <svg className="ic" style={{ width: 16, height: 16 }}><use href="#i-landmark" /></svg>
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--hi)', marginBottom: '0.25rem' }}>1. Client Inbound</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--low)', lineHeight: 1.4 }}>SEPA Instant, Faster Payments, or direct on-chain deposit.</div>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--ground)', border: '1px solid var(--line)' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--jade-text-d)' }}>
                        <svg className="ic" style={{ width: 16, height: 16 }}><use href="#i-gauge" /></svg>
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--hi)', marginBottom: '0.25rem' }}>2. RFQ Engine</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--low)', lineHeight: 1.4 }}>Instant price aggregation across institutional pools.</div>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--ground)', border: '1px solid var(--line)' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--brass)' }}>
                        <svg className="ic" style={{ width: 16, height: 16 }}><use href="#i-user-check" /></svg>
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--hi)', marginBottom: '0.25rem' }}>3. Compliance Gate</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--low)', lineHeight: 1.4 }}>Sumsub KYB &amp; real-time blockchain screening.</div>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--ground)', border: '1px solid var(--line)' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--coin-usdt)' }}>
                        <svg className="ic" style={{ width: 16, height: 16 }}><use href="#i-lock" /></svg>
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--hi)', marginBottom: '0.25rem' }}>4. Final Settlement</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--low)', lineHeight: 1.4 }}>Direct bank payout or BitGo/Utila MPC vault credit.</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 2: OPERATIONAL BENTO METRICS ============ */}
          <section className="sec" id="metrics" style={{ scrollMarginTop: '80px' }}>
            <div className="wrap">
              <header className="sec-head" style={{ textAlign: 'center', margin: '0 auto 2.5rem', alignItems: 'center', justifyItems: 'center' }}>
                <p className="eyebrow">Operational Metrics</p>
                <h2 className="h2">Engineered for institutional scale and velocity.</h2>
              </header>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem' }}>
                
                {/* Metric 1 */}
                <div style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', transition: 'transform .3s var(--ease), border-color .3s', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="display mono num" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hi)', lineHeight: 1 }}>100+</div>
                    <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: 20, height: 20 }}><use href="#i-coins" /></svg>
                    </div>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.35rem', color: 'var(--hi)' }}>Supported Digital Assets</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Deep liquidity across majors (BTC, ETH, SOL), leading stablecoins (USDT, USDC, EURC), and institutional settlement tokens.
                  </p>
                </div>

                {/* Metric 2 */}
                <div style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', transition: 'transform .3s var(--ease), border-color .3s', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="display mono num" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hi)', lineHeight: 1 }}>&lt; 1s</div>
                    <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--jade-text-d)' }}>
                      <svg className="ic" style={{ width: 20, height: 20 }}><use href="#i-gauge" /></svg>
                    </div>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.35rem', color: 'var(--hi)' }}>RFQ Execution Engine</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Sub-second algorithmic quote aggregation with guaranteed 30-second locked rates across global market-maker order books.
                  </p>
                </div>

                {/* Metric 3 */}
                <div style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', transition: 'transform .3s var(--ease), border-color .3s', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="display mono num" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hi)', lineHeight: 1 }}>30+</div>
                    <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brass)' }}>
                      <svg className="ic" style={{ width: 20, height: 20 }}><use href="#i-globe" /></svg>
                    </div>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.35rem', color: 'var(--hi)' }}>EEA &amp; Global Fiat Corridors</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Automated clearing in EUR, GBP, USD, and PLN via SEPA Instant, Faster Payments, and international SWIFT rails.
                  </p>
                </div>

                {/* Metric 4 */}
                <div style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', transition: 'transform .3s var(--ease), border-color .3s', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--hi)', lineHeight: 1 }}>VASP</div>
                    <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--coin-usdt)' }}>
                      <svg className="ic" style={{ width: 20, height: 20 }}><use href="#i-file-check" /></svg>
                    </div>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.35rem', color: 'var(--hi)' }}>Regulated in Poland (KRS)</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Coincashy Sp. z o.o. is entered into the Polish Register of Virtual Asset Service Providers under KRS no. 0001135823.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 3: THE 4 INFRASTRUCTURE PILLARS ============ */}
          <section className="sec" id="pillars" style={{ scrollMarginTop: '80px' }}>
            <div className="wrap">
              <header className="sec-head" style={{ textAlign: 'center', margin: '0 auto 3rem', alignItems: 'center', justifyItems: 'center' }}>
                <p className="eyebrow">Institutional Architecture</p>
                <h2 className="h2">The four pillars of our infrastructure.</h2>
              </header>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                
                {/* Pillar 1 */}
                <div style={{ borderRadius: '22px', padding: 'clamp(1.75rem, 4vw, 2.5rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '14px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                      <svg className="ic" aria-hidden="true" style={{ width: '24px', height: '24px' }}><use href="#i-chart-candlestick" /></svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', background: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--jade-text-d)', letterSpacing: '0.04em' }}>
                      Zero Slippage OTC
                    </span>
                  </div>
                  <h3 className="h3" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>Institutional RFQ &amp; Liquidity</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Direct connection to deep institutional liquidity pools. Counterparties execute large blocks across majors and stablecoins with zero price impact and guaranteed rate locks.
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--fg-dim)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--jade-text-d)' }}><use href="#i-check" /></svg>
                      Multi-venue algorithmic aggregation
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--jade-text-d)' }}><use href="#i-check" /></svg>
                      30-second fixed quote lock
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div style={{ borderRadius: '22px', padding: 'clamp(1.75rem, 4vw, 2.5rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '14px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                      <svg className="ic" aria-hidden="true" style={{ width: '24px', height: '24px' }}><use href="#i-landmark" /></svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', background: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--brass)', letterSpacing: '0.04em' }}>
                      SEPA Instant &amp; FPS
                    </span>
                  </div>
                  <h3 className="h3" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>Dedicated Virtual IBANs</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Dedicated named virtual IBANs issued under European partner banking rails for automated corporate treasury, supplier invoicing, and seamless multi-currency reconciliation.
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--fg-dim)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--brass)' }}><use href="#i-check" /></svg>
                      Named EUR, GBP, PLN account numbers
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--brass)' }}><use href="#i-check" /></svg>
                      Instant automated ledger credit
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div style={{ borderRadius: '22px', padding: 'clamp(1.75rem, 4vw, 2.5rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '14px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                      <svg className="ic" aria-hidden="true" style={{ width: '24px', height: '24px' }}><use href="#i-lock" /></svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', background: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--coin-usdt)', letterSpacing: '0.04em' }}>
                      BitGo &amp; Utila MPC
                    </span>
                  </div>
                  <h3 className="h3" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>Institutional MPC Custody</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Private keys are secured via Multi-Party Computation (MPC) with hardware-isolated signing shards, eliminating single points of failure with multi-tier approval policies.
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--fg-dim)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--coin-usdt)' }}><use href="#i-check" /></svg>
                      Hardware-isolated signer quorums
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--coin-usdt)' }}><use href="#i-check" /></svg>
                      Configurable corporate approval rules
                    </li>
                  </ul>
                </div>

                {/* Pillar 4 */}
                <div style={{ borderRadius: '22px', padding: 'clamp(1.75rem, 4vw, 2.5rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '14px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                      <svg className="ic" aria-hidden="true" style={{ width: '24px', height: '24px' }}><use href="#i-user-check" /></svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', background: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--jade-text-d)', letterSpacing: '0.04em' }}>
                      Sumsub &amp; Global Ledger
                    </span>
                  </div>
                  <h3 className="h3" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>Automated Compliance Layer</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Continuous blockchain analytics scanning all inbound and outbound transactions, integrated with FATF Travel Rule protocol and accelerated automated KYB verification.
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--fg-dim)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--jade-text-d)' }}><use href="#i-check" /></svg>
                      100% on-chain risk scoring
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: 14, height: 14, color: 'var(--jade-text-d)' }}><use href="#i-check" /></svg>
                      FATF Travel Rule protocol compliance
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 4: OUR JOURNEY & TIMELINE ============ */}
          <section className="sec" id="timeline" style={{ scrollMarginTop: '80px' }}>
            <div className="wrap">
              <header className="sec-head" style={{ textAlign: 'center', margin: '0 auto 3rem', alignItems: 'center', justifyItems: 'center' }}>
                <p className="eyebrow">Our Evolution</p>
                <h2 className="h2">A track record of regulated execution.</h2>
              </header>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem', position: 'relative' }}>
                
                {/* Milestone 2022 */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--f-mono)', color: 'var(--jade-text-d)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                      2022 · INCEPTION
                    </div>
                    <h3 className="h4" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>Algorithmic Core</h3>
                    <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                      Founded with a dedicated focus on institutional crypto-to-fiat routing, solving high market slippage and manual execution bottlenecks.
                    </p>
                  </div>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.78rem', color: 'var(--fg-faint)' }}>
                    Core OTC RFQ engine deployed
                  </div>
                </div>

                {/* Milestone 2023 */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--f-mono)', color: 'var(--brass)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                      2023 · BANKING EXPANSION
                    </div>
                    <h3 className="h4" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>European Rails</h3>
                    <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                      Integrated direct clearing channels with European banking institutions, unlocking automated SEPA Instant and UK Faster Payments settlement.
                    </p>
                  </div>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.78rem', color: 'var(--fg-faint)' }}>
                    Sub-minute bank clearing live
                  </div>
                </div>

                {/* Milestone 2024 */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--f-mono)', color: 'var(--coin-usdt)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                      2024 · POLISH REGULATION
                    </div>
                    <h3 className="h4" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>Polish VASP Entity</h3>
                    <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                      Incorporated Coincashy Sp. z o.o. and obtained entry into the Polish Register of Virtual Asset Service Providers (KRS: 0001135823), preparing for EU MiCA alignment.
                    </p>
                  </div>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.78rem', color: 'var(--fg-faint)' }}>
                    Official VASP Registry Listing
                  </div>
                </div>

                {/* Milestone 2025+ */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--f-mono)', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                      2025+ · NEXT-GEN EXPANSION
                    </div>
                    <h3 className="h4" style={{ marginBottom: '0.75rem', color: 'var(--hi)' }}>vIBANs &amp; Cards</h3>
                    <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                      Rolling out multi-currency dedicated virtual IBANs, launching EEA crypto card pilot programs, and expanding programmatic RFQ APIs for institutional platforms.
                    </p>
                  </div>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.78rem', color: 'var(--fg-faint)' }}>
                    Enterprise Card &amp; API Pilots
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 5: EUROPEAN HUBS & PRESENCE ============ */}
          <section className="sec" id="hubs" style={{ scrollMarginTop: '80px' }}>
            <div className="wrap">
              <header className="sec-head" style={{ textAlign: 'center', margin: '0 auto 3rem', alignItems: 'center', justifyItems: 'center' }}>
                <p className="eyebrow">European Footprint</p>
                <h2 className="h2">Rooted in Europe. Connected globally.</h2>
              </header>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
                
                {/* Warsaw Hub */}
                <div style={{ padding: '2rem', borderRadius: '20px', background: 'linear-gradient(155deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-landmark" /></svg>
                    </div>
                    <div>
                      <h3 className="h4" style={{ color: 'var(--hi)' }}>Warsaw, Poland</h3>
                      <p className="eyebrow" style={{ fontSize: '0.7rem', color: 'var(--coin-usdt)' }}>HQ &amp; Regulatory Base</p>
                    </div>
                  </div>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                    Corporate headquarters of Coincashy Sp. z o.o., housing executive leadership, compliance operations, and European regulatory liaisons under KRS no. 0001135823.
                  </p>
                </div>

                {/* London Hub */}
                <div style={{ padding: '2rem', borderRadius: '20px', background: 'linear-gradient(155deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-chart-candlestick" /></svg>
                    </div>
                    <div>
                      <h3 className="h4" style={{ color: 'var(--hi)' }}>London, United Kingdom</h3>
                      <p className="eyebrow" style={{ fontSize: '0.7rem', color: 'var(--brass)' }}>OTC &amp; Market Relations</p>
                    </div>
                  </div>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                    Dedicated OTC desk operations and international partnership coordination, powering GBP Faster Payments connectivity and global trading relationships.
                  </p>
                </div>

                {/* Frankfurt Hub */}
                <div style={{ padding: '2rem', borderRadius: '20px', background: 'linear-gradient(155deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-globe" /></svg>
                    </div>
                    <div>
                      <h3 className="h4" style={{ color: 'var(--hi)' }}>Frankfurt, Germany</h3>
                      <p className="eyebrow" style={{ fontSize: '0.7rem', color: 'var(--jade-text-d)' }}>Euro Clearing Gateway</p>
                    </div>
                  </div>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.55 }}>
                    Strategic clearing routing for SEPA Instant EUR liquidity, maintaining low latency connections to core European financial settlement infrastructure.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 6: GOVERNANCE, SECURITY & STANDARDS ============ */}
          <section className="sec" id="governance" style={{ scrollMarginTop: '80px' }}>
            <div className="wrap">
              <header className="sec-head" style={{ textAlign: 'center', margin: '0 auto 3rem', alignItems: 'center', justifyItems: 'center' }}>
                <p className="eyebrow">Trust &amp; Compliance</p>
                <h2 className="h2">Governance built on verifiable institutional controls.</h2>
              </header>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
                
                <div style={{ padding: '1.75rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--jade-text-d)' }}>
                    <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-lock" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>GDPR Data Protection</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Strict adherence to EU Regulation 2016/679. Client identity records and financial logs are encrypted, minimized, and never commercialized.
                  </p>
                </div>

                <div style={{ padding: '1.75rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--brass)' }}>
                    <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-landmark" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>1:1 Segregated Fiat</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Client fiat balances are safeguarded in segregated accounts with regulated European credit institutions, ring-fenced from operational capital.
                  </p>
                </div>

                <div style={{ padding: '1.75rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--coin-usdt)' }}>
                    <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-scan-search" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Real-Time AML Screening</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    100% of blockchain deposits are monitored in real time via Global Ledger against sanctioned entities, darknet clusters, and high-risk mixers.
                  </p>
                </div>

                <div style={{ padding: '1.75rem', borderRadius: '18px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--hi)' }}>
                    <svg className="ic" style={{ width: 18, height: 18 }}><use href="#i-users" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Dedicated Account SLAs</h3>
                  <p className="body" style={{ fontSize: '0.88rem', color: 'var(--low)', lineHeight: 1.5 }}>
                    Counterparties transacting institutional volumes have dedicated relationship managers, guaranteed execution SLAs, and private communication channels.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ============ SECTION 7: DUAL HIGH-CONVERSION CTA ============ */}
          <section className="sec" id="cta-bottom" style={{ marginBottom: '4rem', scrollMarginTop: '80px' }}>
            <div className="wrap">
              <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 3rem)', background: 'linear-gradient(180deg, var(--surface), var(--ground))', border: '1px solid var(--line-2)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 120%, color-mix(in srgb, var(--jade) 14%, transparent), transparent 60%)', pointerEvents: 'none' }} />
                
                <p className="eyebrow" style={{ position: 'relative', zIndex: 1, marginBottom: '0.75rem', color: 'var(--jade-text-d)' }}>Institutional Onboarding</p>
                <h2 className="h2" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '1rem', color: 'var(--hi)', position: 'relative', zIndex: 1 }}>
                  Ready to upgrade your crypto-fiat settlement?
                </h2>
                
                <p className="body" style={{ maxWidth: '640px', margin: '0 auto 2.25rem', color: 'var(--low)', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', position: 'relative', zIndex: 1 }}>
                  Whether executing high-volume OTC blocks or embedding programmatic virtual IBANs, our Warsaw and London desks are ready to assist.
                </p>

                <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                  <Link className="btn btn-solid" href="/contact?topic=otc">
                    Speak with OTC Desk<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                  </Link>
                  <a className="btn btn-line" href="tel:+447452022306">
                    <svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>+44 7452 022306
                  </a>
                  <Link className="btn btn-line" href="/developers">
                    Developer API Docs<svg className="ic" aria-hidden="true"><use href="#i-code-xml" /></svg>
                  </Link>
                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--fg-faint)', position: 'relative', zIndex: 1 }}>
                  Coincashy Sp. z o.o. is registered in Poland under KRS 0001135823 · Virtual Asset Service Provider (VASP)
                </div>

              </div>
            </div>
          </section>
          
        </main>
        <Footer />
      </div>
    </>
  );
}