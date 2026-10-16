import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dedicated Virtual IBANs – Multi-Currency Fiat Rails | Coincashy',
  description: 'Issue dedicated virtual IBANs in EUR and GBP in your company or customer name. Collect fiat payments seamlessly and convert to digital assets on demand.',
};

export default function VibansPage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="vibans-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Virtual IBANs &amp; Banking Rails</p>
              <h1 className="display">
                Dedicated vIBANs for <em>frictionless fiat.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Open virtual IBAN accounts in your business or customer's name. Collect EUR via SEPA / SEPA Instant and GBP via Faster Payments, directly linked to crypto liquidity.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=vibans">
                  Get Dedicated vIBANs<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/compliance">
                  View Compliance &amp; Eligibility
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Grid */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-landmark" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Named Account Issuance</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Accounts issued in your corporate name or designated sub-entity. Prevent third-party sender rejections and simplify accounting reconciliation.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-clock" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Instant SEPA &amp; FPS</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Euro settlements land in seconds via SEPA Instant. Sterling collections clear 24/7 via the UK Faster Payments Service (FPS).
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-repeat" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Auto-Sweep &amp; Conversion</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Configure automated rules to automatically convert inbound fiat deposits into stablecoins (USDT/USDC) and sweep them to designated multi-sig treasuries.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-file-check" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Automated Reconciliation</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Every unique client receives a dedicated vIBAN. Inbound deposits are automatically matched to customer records without reference code errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Rails Specs */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
                <p className="eyebrow">Banking Rail Specifications</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Clear settlement timelines.</h2>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <th style={{ padding: '1rem', color: 'var(--fg)' }}>Currency</th>
                      <th style={{ padding: '1rem', color: 'var(--fg)' }}>Rail Type</th>
                      <th style={{ padding: '1rem', color: 'var(--fg)' }}>Clearing Speed</th>
                      <th style={{ padding: '1rem', color: 'var(--fg)' }}>Coverage</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: 'var(--fg-dim)' }}>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '1rem', color: 'var(--fg)', fontWeight: 600 }}>EUR</td>
                      <td style={{ padding: '1rem' }}>SEPA Instant / SEPA Credit</td>
                      <td style={{ padding: '1rem', color: '#22c55e' }}>Instant (10 seconds) / T+1</td>
                      <td style={{ padding: '1rem' }}>36 SEPA member countries</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '1rem', color: 'var(--fg)', fontWeight: 600 }}>GBP</td>
                      <td style={{ padding: '1rem' }}>Faster Payments (FPS) / BACS</td>
                      <td style={{ padding: '1rem', color: '#22c55e' }}>Real-time / Same day</td>
                      <td style={{ padding: '1rem' }}>United Kingdom</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '1rem', color: 'var(--fg)', fontWeight: 600 }}>USD</td>
                      <td style={{ padding: '1rem' }}>SWIFT Wire / Local ACH</td>
                      <td style={{ padding: '1rem' }}>Same day / T+1</td>
                      <td style={{ padding: '1rem' }}>Global correspondent network</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'linear-gradient(180deg, var(--surface), var(--ground))', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Upgrade Your Banking Infrastructure</h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--low)' }}>
                Connect your business to Tier-1 European banking rails with built-in crypto liquidity.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=vibans">
                  Speak to Banking Team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/about">
                  Learn About Coincashy
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
