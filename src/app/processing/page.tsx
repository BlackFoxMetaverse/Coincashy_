import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Crypto Payment Processing – Accept Crypto at Checkout | Coincashy',
  description: 'Accept Bitcoin, Ethereum, and stablecoins at checkout with instant fiat settlement in EUR, USD, and GBP. Zero chargebacks, lower fees, and simple API integration.',
};

export default function ProcessingPage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="proc-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Payment Gateway &amp; Processing</p>
              <h1 className="display">
                Accept crypto. Settle in <em>fiat instantly.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Turn global crypto holders into active customers. Accept BTC, ETH, USDT, and USDC with zero volatility risk—funds auto-convert and settle directly into your bank account.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=processing">
                  Get Started with Processing<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/developers#04">
                  View Checkout API Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-repeat" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Zero Volatility Risk</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Lock exchange rates at the moment of customer checkout. We absorb market price fluctuations so you receive exactly what you billed in your base fiat currency.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-lock" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>No Chargebacks or Fraud</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Blockchain transactions are final and irreversible. Eliminate fraudulent card chargebacks, disputed payments, and friendly fraud entirely.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-circle-dollar-sign" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Lower Processing Fees</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Dramatically reduce interchange costs. Processing fees start from 0.5% per successful transaction—a fraction of typical 2.9% + 30¢ credit card interchange rates.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--hi)' }}>
                  <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-globe" /></svg>
                </div>
                <h3 className="h4" style={{ marginBottom: '0.75rem' }}>Global Customer Reach</h3>
                <p className="body" style={{ color: 'var(--low)' }}>
                  Accept payments from customers in over 150 countries without regional banking friction, currency conversion declines, or cross-border card blocks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
                <p className="eyebrow">Flexible Integration</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Integrate the way your stack needs.</h2>
                <p className="body" style={{ color: 'var(--low)' }}>Choose between our hosted payment links, drop-in modal widget, or full headless REST API.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <h3 className="h4" style={{ marginBottom: '0.5rem' }}>Hosted Payment Link</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem', marginBottom: '1rem' }}>Generate payment URLs server-side and redirect customers to a branded, high-converting Coincashy checkout.</p>
                  <code style={{ fontSize: '0.8rem', color: 'var(--hi)', background: 'var(--ground)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>POST /v3/payments/guests/onramp</code>
                </div>

                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <h3 className="h4" style={{ marginBottom: '0.5rem' }}>Embedded Widget</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem', marginBottom: '1rem' }}>Embed our checkout modal directly inside your web or mobile app using our lightweight JS/React SDK.</p>
                  <code style={{ fontSize: '0.8rem', color: 'var(--hi)', background: 'var(--ground)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>trade.coincashy.io/widget</code>
                </div>

                <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                  <h3 className="h4" style={{ marginBottom: '0.5rem' }}>Real-time Webhooks</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem', marginBottom: '1rem' }}>Receive instant cryptographic webhook callbacks upon payment authorization, confirmation, and settlement.</p>
                  <code style={{ fontSize: '0.8rem', color: 'var(--hi)', background: 'var(--ground)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>event: payment.confirmed</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'linear-gradient(180deg, var(--surface), var(--ground))', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Ready to Accept Crypto Payments?</h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--low)' }}>
                Contact our merchant integrations team to configure test credentials and review custom fee tiers.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=processing">
                  Talk to Sales<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/developers">
                  Explore Full Developer Documentation
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
