import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Crypto On/Off-Ramp – Fiat to Crypto Gateway | Coincashy',
  description: 'Embed high-converting on/off-ramp flows directly into your app. Enable users in 150+ countries to buy and sell crypto via Apple Pay, Google Pay, cards, and bank transfers.',
};

export default function RampPage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="ramp-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">On/Off-Ramp Infrastructure</p>
              <h1 className="display">
                The fastest bridge between <em>fiat &amp; crypto.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Allow your users to seamlessly buy and cash out crypto within your application. High authorization rates, localized payment rails, and frictionless Sumsub compliance.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=ramp">
                  Integrate On/Off-Ramp<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/developers#04">
                  View Onramp API Spec
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-credit-card" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Familiar Payment Methods</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Support Apple Pay, Google Pay, Visa, Mastercard, SEPA, Faster Payments, and local wire transfers with optimal checkout conversion.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-user-check" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Frictionless Onboarding</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Automated Sumsub identity verification takes under 60 seconds. Returning guests skip verification entirely with one-click tokenized checkout.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-arrow-left-right" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Bi-directional Liquidity</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Provide both buy (onramp) and sell (offramp) capabilities. Users can deposit fiat to purchase assets or off-ramp crypto directly into bank accounts.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-code-xml" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>White-Label Flexibility</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Brand the experience as your own. Custom themes, custom domain support, and automated webhook reporting keep your branding front and center.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Flow */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
                <p className="eyebrow">How It Works</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>3 simple steps for developers.</h2>
                <p className="body" style={{ color: 'var(--low)' }}>Minting a payment session takes a single API call from your backend.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'monospace', color: 'var(--hi)', fontWeight: 700, marginBottom: '0.5rem' }}>01. Authenticate</div>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem' }}>Obtain a secure server JWT using your merchant API credentials via <code>/api/jwt/generate</code>.</p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'monospace', color: 'var(--hi)', fontWeight: 700, marginBottom: '0.5rem' }}>02. Create Link</div>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem' }}>Specify fiat currency, amount, and crypto network. Receive a scoped payment link URL.</p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'monospace', color: 'var(--hi)', fontWeight: 700, marginBottom: '0.5rem' }}>03. Settle</div>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem' }}>Guest completes payment. Your webhook triggers instantly and crypto is credited to your balance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'linear-gradient(180deg, var(--surface), var(--ground))', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Bring Crypto Rails into Your App</h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--low)' }}>
                Test our on/off ramp in our staging environment or speak with our solutions engineers.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=ramp">
                  Request Sandbox Access<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/developers">
                  Read API Guide
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
