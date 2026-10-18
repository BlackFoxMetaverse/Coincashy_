import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CardStudio from '@/features/cards/components/CardStudio';
import CardFaq from '@/features/cards/components/CardFaq';

export const metadata: Metadata = {
  title: 'Personal & Corporate Crypto Cards | Coincashy',
  description:
    'Spend crypto in everyday life with virtual and physical Visa & Mastercard payment cards. Apple Pay, Google Pay, real-time controls, zero FX fees, and corporate expense programs.',
};

export default function CardsPage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* ================= Hero Section ================= */}
        <section className="hero subpage-hero" id="cards-hero" style={{ paddingBottom: '3rem' }}>
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Card Programs</p>

              <h1 className="display">
                Your crypto. Ready for <em>real-world spending.</em>
              </h1>

              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Seamless personal cards and scalable corporate expense cards. Tap to pay in store, shop online, and manage limits with instantaneous freeze and unfreeze controls.
              </p>

              <div className="cta-row">
                <a className="btn btn-solid" href="#card-studio">
                  Design Your Card
                  <svg className="ic" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </a>
                <a className="btn btn-line" href="#corporate">
                  Corporate Programs
                </a>
              </div>

              {/* Program Availability & Status Banner */}
              <div
                style={{
                  margin: '1.75rem auto 0',
                  maxWidth: '720px',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '99px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--jade)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Pilot Program
                </span>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--low)', lineHeight: 1.45 }}>
                  Available in select EEA jurisdictions. Cards are partner-enabled and issued under authorized Visa &amp; Mastercard programs. Join the waitlist for immediate rollout notification in your country.
                </p>
              </div>

              {/* Horizontal Metrics Trust Bar */}
              <div className="hero-metrics-bar">
                <div className="metric-item">
                  <div className="metric-val">&lt; 150ms</div>
                  <div className="metric-lbl">POS Conversion</div>
                </div>
                <div className="metric-sep" />
                <div className="metric-item">
                  <div className="metric-val">140+</div>
                  <div className="metric-lbl">Global Currencies</div>
                </div>
                <div className="metric-sep" />
                <div className="metric-item">
                  <div className="metric-val highlight">0%</div>
                  <div className="metric-lbl">Foreign FX Markups</div>
                </div>
                <div className="metric-sep" />
                <div className="metric-item">
                  <div className="metric-val gold">60s</div>
                  <div className="metric-lbl">Virtual Issuance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Interactive 3D Card Studio ================= */}
        <section className="sec" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
          <div className="wrap">
            <div className="sec-split" style={{ marginBottom: '2.5rem' }}>
              <div className="sec-head">
                <p className="eyebrow">Interactive Card Lab</p>
                <h2 className="h2">Craft your card. Experience the controls.</h2>
              </div>
              <p className="body" style={{ color: 'var(--low)', maxWidth: '520px' }}>
                Test our real-time gyroscopic card preview. Switch between obsidian Vault, electric Sky, and titanium Paper finishes, adjust your monthly allowance, and test instant security freeze.
              </p>
            </div>

            <CardStudio />
          </div>
        </section>

        {/* ================= Bento Grid Architecture Showcase ================= */}
        <section className="sec" id="features" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
              <p className="eyebrow">Engineered for Commerce</p>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>
                Sovereign crypto control. Universal terminal acceptance.
              </h2>
              <p className="body" style={{ color: 'var(--low)' }}>
                Traditional cards make you pre-fund fiat days in advance. Coincashy converts atomically at the split-second of authorization.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '20px',
              }}
            >
              {/* Bento 1: Sub-150ms POS Settlement (Large) */}
              <div
                style={{
                  gridColumn: 'span 12',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  borderRadius: '24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--line)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--jade)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <svg className="ic" style={{ width: '22px', height: '22px' }}>
                      <use href="#i-gauge" />
                    </svg>
                  </div>
                  <h3 className="h3" style={{ marginBottom: '0.75rem' }}>
                    Sub-150ms Point-of-Sale Liquidation
                  </h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    When you tap your card at a terminal, our liquidity engine automatically matches the order book, locks an atomic quote, and settles in fiat currency before your coffee is poured. Zero price slippage, zero delays.
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.5rem',
                    borderRadius: '18px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line-2)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--jade)' }}>
                      • POS Terminal Stream
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--f-mono)', color: 'var(--fg-faint)' }}>
                      AUTH #98241
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem', padding: '12px', borderRadius: '12px', background: 'var(--surface)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: '18px', height: '18px' }}><use href="#i-store" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Merchant Terminal Request</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--low)' }}>Vienna International Airport • Gate G</div>
                    </div>
                    <div style={{ fontFamily: 'var(--f-mono)', fontWeight: 600 }}>€38.50 EUR</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--jade)', paddingLeft: '4px' }}>
                    <svg className="ic" style={{ width: '16px', height: '16px' }}><use href="#i-check" /></svg>
                    <span>Instant debit: 38.50 USDC from Vault (0.00% slippage)</span>
                  </div>
                </div>
              </div>

              {/* Bento 2: Zero Foreign FX Fees */}
              <div
                style={{
                  gridColumn: 'span 6',
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--brass)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <svg className="ic" style={{ width: '22px', height: '22px' }}>
                    <use href="#i-globe" />
                  </svg>
                </div>
                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>
                  Zero Foreign FX Markups
                </h3>
                <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  Traditional cards impose 3% to 4.5% foreign exchange surcharges when you travel abroad. Coincashy passes through direct wholesale interbank rates across 140+ countries.
                </p>
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--hi)',
                  }}
                >
                  <span style={{ color: 'var(--jade)', fontWeight: 700 }}>✓</span>
                  Spend EUR, USD, GBP, JPY, CHF without cross-border penalties
                </div>
              </div>

              {/* Bento 3: Biometric 3D-Secure 2.0 */}
              <div
                style={{
                  gridColumn: 'span 6',
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--jade)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <svg className="ic" style={{ width: '22px', height: '22px' }}>
                    <use href="#i-lock" />
                  </svg>
                </div>
                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>
                  Biometric 3D-Secure 2.0
                </h3>
                <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  Protect your online checkout from SIM swap fraud. Online transactions prompt an encrypted mobile push notification with Face ID or fingerprint sign-off.
                </p>
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--hi)',
                  }}
                >
                  <span style={{ color: 'var(--jade)', fontWeight: 700 }}>✓</span>
                  Hardware-bound cryptographic keys • Zero plaintext OTPs
                </div>
              </div>

              {/* Bento 4: Apple Pay & Google Pay */}
              <div
                style={{
                  gridColumn: 'span 4',
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--hi)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <svg className="ic" style={{ width: '22px', height: '22px' }}>
                    <use href="#i-smartphone" />
                  </svg>
                </div>
                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>
                  Instant Mobile Wallets
                </h3>
                <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  Add your virtual card to Apple Wallet or Google Wallet in 60 seconds with 1 tap. Tap to pay right from your iPhone, Apple Watch, or Android phone.
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '1.25rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', background: 'var(--surface-2)', fontSize: '0.8rem', color: 'var(--hi)' }}>
                    <svg className="ic" style={{ width: '16px', height: '16px' }}><use href="#b-applepay" /></svg> Apple Pay
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', background: 'var(--surface-2)', fontSize: '0.8rem', color: 'var(--hi)' }}>
                    <svg className="ic" style={{ width: '16px', height: '16px' }}><use href="#b-googlepay" /></svg> Google Pay
                  </span>
                </div>
              </div>

              {/* Bento 5: Worldwide ATM Access */}
              <div
                style={{
                  gridColumn: 'span 4',
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--hi)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <svg className="ic" style={{ width: '22px', height: '22px' }}>
                    <use href="#i-banknote" />
                  </svg>
                </div>
                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>
                  Worldwide ATM Cash
                </h3>
                <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  Need physical cash while traveling? Withdraw local currency notes at over 40 million Visa &amp; Mastercard ATMs worldwide with generous fee-free allowances.
                </p>
                <div style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: 'var(--fg-dim)' }}>
                  Up to €400/month fee-free cash withdrawals
                </div>
              </div>

              {/* Bento 6: Multi-Asset Fallback */}
              <div
                style={{
                  gridColumn: 'span 4',
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--hi)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <svg className="ic" style={{ width: '22px', height: '22px' }}>
                    <use href="#i-layers" />
                  </svg>
                </div>
                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>
                  Smart Multi-Asset Fallback
                </h3>
                <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  Configure your primary and reserve funding assets (e.g. USDT → USDC → ETH). If your primary token runs low, checkout succeeds without decline.
                </p>
                <div style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: 'var(--fg-dim)' }}>
                  Zero declined transactions due to split balances
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Comparison: Personal vs Corporate ================= */}
        <section className="sec" id="corporate" style={{ paddingBottom: '5rem', scrollMarginTop: '100px' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
              <p className="eyebrow">Tailored For Scale</p>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Personal Freedom or Corporate Scale</h2>
              <p className="body" style={{ color: 'var(--low)' }}>
                Select the card program designed specifically for your personal lifestyle or your enterprise treasury workflows.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '2rem',
              }}
            >
              {/* Personal Card Card */}
              <div
                id="personal"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  borderRadius: '28px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--line)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--hi)',
                    }}
                  >
                    <svg className="ic" style={{ width: '24px', height: '24px' }}>
                      <use href="#i-credit-card" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '99px',
                      background: 'var(--surface-2)',
                      color: 'var(--jade)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    Personal Edition
                  </span>
                </div>

                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>Personal Crypto Card</h3>
                <p className="body" style={{ color: 'var(--low)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                  Direct non-custodial or managed wallet linkage. Everyday coffee, flights, online subscriptions, and ATM cash worldwide.
                </p>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'var(--surface-2)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Virtual Card Issuance</span>
                    <span style={{ fontWeight: 600, color: 'var(--jade)' }}>Free (€0)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--low)' }}>18g Metal Physical Card</span>
                    <span style={{ fontWeight: 600 }}>€29 one-off</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Monthly Maintenance</span>
                    <span style={{ fontWeight: 600, color: 'var(--jade)' }}>€0 / month</span>
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 2rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    fontSize: '0.92rem',
                    flexGrow: 1,
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--jade)' }}>✓</span> Instant Apple Pay &amp; Google Pay credential generation
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--jade)' }}>✓</span> Vault, Sky &amp; Paper bespoke finishes
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--jade)' }}>✓</span> Instant freeze, limit changes, and contactless controls
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--jade)' }}>✓</span> Spend USDT, USDC, BTC, ETH directly with zero manual swaps
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--jade)' }}>✓</span> Fee-free ATM cash withdrawals up to €400/month
                  </li>
                </ul>

                <a className="btn btn-solid btn-block" href="#card-studio">
                  Configure Personal Card
                  <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </a>
              </div>

              {/* Corporate Cards Card */}
              <div
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  borderRadius: '28px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--line)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--brass)',
                    }}
                  >
                    <svg className="ic" style={{ width: '24px', height: '24px' }}>
                      <use href="#i-layers" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '99px',
                      background: 'var(--surface-2)',
                      color: 'var(--brass)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    Enterprise Treasury
                  </span>
                </div>

                <h3 className="h3" style={{ marginBottom: '0.75rem' }}>Corporate Expense Program</h3>
                <p className="body" style={{ color: 'var(--low)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                  Issue unlimited team cards funded directly from your corporate stablecoin treasury, SEPA vIBANs, or OTC liquidity pools.
                </p>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'var(--surface-2)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Team Card Capacity</span>
                    <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Unlimited Virtual &amp; Metal</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Developer Card API</span>
                    <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Programmatic Issuance</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Accounting Integration</span>
                    <span style={{ fontWeight: 600, color: 'var(--jade)' }}>Xero, QuickBooks &amp; SAP</span>
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 2rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    fontSize: '0.92rem',
                    flexGrow: 1,
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--brass)' }}>✓</span> Batch virtual card generation via REST API &amp; webhooks
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--brass)' }}>✓</span> Granular per-employee allowances &amp; merchant MCC whitelisting
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--brass)' }}>✓</span> Direct spend from EUR, USD &amp; USDC corporate sub-accounts
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--brass)' }}>✓</span> Custom logo laser-embossing for executive metal cards
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--brass)' }}>✓</span> Automated receipt capture OCR with instant employee notifications
                  </li>
                </ul>

                <Link className="btn btn-line btn-block" href="/contact?topic=corporate-cards">
                  Request Corporate Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Transparent Fees & Limits Table ================= */}
        <section className="sec" id="pricing" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
              <p className="eyebrow">Clear Economics</p>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Transparent Fees. No Surprises.</h2>
              <p className="body" style={{ color: 'var(--low)' }}>
                Compare key features and fee schedules across our card tiers.
              </p>
            </div>

            <div
              style={{
                borderRadius: '24px',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                overflowX: 'auto',
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  fontSize: '0.92rem',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)', background: 'var(--surface-2)' }}>
                    <th style={{ padding: '18px 24px', color: 'var(--fg-faint)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                      Feature / Service
                    </th>
                    <th style={{ padding: '18px 24px', color: 'var(--fg-faint)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                      Virtual Instant
                    </th>
                    <th style={{ padding: '18px 24px', color: 'var(--fg-faint)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                      Physical Metal
                    </th>
                    <th style={{ padding: '18px 24px', color: 'var(--fg-faint)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                      Corporate Expense
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Card Issuance Fee</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>Free (€0)</td>
                    <td style={{ padding: '18px 24px' }}>€29 (one-time)</td>
                    <td style={{ padding: '18px 24px' }}>Custom volume tier</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Monthly Maintenance Fee</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>€0 / month</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>€0 / month</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>€0 / month</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Domestic POS Transactions</td>
                    <td style={{ padding: '18px 24px' }}>0.00% fee</td>
                    <td style={{ padding: '18px 24px' }}>0.00% fee</td>
                    <td style={{ padding: '18px 24px' }}>0.00% fee</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Foreign Currency FX Markup</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>0% (Mid-market)</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>0% (Mid-market)</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)', fontWeight: 600 }}>0% (Mid-market)</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Crypto Conversion at POS</td>
                    <td style={{ padding: '18px 24px' }}>0.50% flat</td>
                    <td style={{ padding: '18px 24px' }}>0.50% flat</td>
                    <td style={{ padding: '18px 24px' }}>Institutional volume tier</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>ATM Cash Withdrawals</td>
                    <td style={{ padding: '18px 24px', color: 'var(--fg-faint)' }}>N/A (Virtual)</td>
                    <td style={{ padding: '18px 24px' }}>Free up to €400/mo, then 1.5%</td>
                    <td style={{ padding: '18px 24px' }}>Configurable per-card</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Daily Spending Limit</td>
                    <td style={{ padding: '18px 24px' }}>Up to €5,000</td>
                    <td style={{ padding: '18px 24px' }}>Up to €15,000</td>
                    <td style={{ padding: '18px 24px' }}>Up to €250,000 / day</td>
                  </tr>

                  <tr>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>Apple Pay &amp; Google Pay</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)' }}>Included</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)' }}>Included</td>
                    <td style={{ padding: '18px 24px', color: 'var(--jade)' }}>Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= Frequently Asked Questions ================= */}
        <section className="sec" id="faq" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
              <p className="eyebrow">Everything You Need to Know</p>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h2>
              <p className="body" style={{ color: 'var(--low)' }}>
                Got questions regarding crypto conversions, physical card shipping, or security? We have answers.
              </p>
            </div>

            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              <CardFaq />
            </div>
          </div>
        </section>

        {/* ================= Bottom CTA ================= */}
        <section className="sec" style={{ paddingBottom: '6rem' }}>
          <div className="wrap">
            <div
              style={{
                borderRadius: '32px',
                padding: 'clamp(2.5rem, 6vw, 4.5rem)',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.12) 0%, transparent 70%), var(--surface)',
                border: '1px solid var(--line)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <p className="eyebrow" style={{ color: 'var(--jade)' }}>Instant Activation</p>
              <h2 className="h2" style={{ maxWidth: '640px', margin: '0 auto 1rem' }}>
                Ready to spend your crypto without friction?
              </h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2.25rem', color: 'var(--low)' }}>
                Generate your virtual card in under 60 seconds with Apple Pay and Google Pay support, or order a bespoke laser-etched metal card.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center', gap: '14px' }}>
                <a className="btn btn-solid" href="#card-studio">
                  Design Your Card Now
                  <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </a>
                <Link className="btn btn-line" href="/contact?topic=cards">
                  Talk to Card Specialists
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Scoped CSS adjustments for responsive bento & hero metrics */}
      <style>{`
        .hero-metrics-bar {
          width: 100%;
          max-width: 820px;
          margin: 1.5rem auto 0;
          padding: 14px 22px;
          border-radius: 20px;
          background: var(--surface);
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
        }
        .metric-item {
          flex: 1;
          text-align: center;
        }
        .metric-val {
          font-family: var(--f-mono);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--hi);
          line-height: 1.2;
        }
        .metric-val.highlight {
          color: var(--jade);
        }
        .metric-val.gold {
          color: var(--brass);
        }
        .metric-lbl {
          font-size: 0.76rem;
          color: var(--low);
          margin-top: 4px;
          white-space: nowrap;
        }
        .metric-sep {
          width: 1px;
          height: 28px;
          background: var(--line-2);
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .hero-metrics-bar {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px 10px;
            padding: 14px 16px;
          }
          .metric-sep {
            display: none;
          }
        }
        @media (max-width: 900px) {
          #features [style*="grid-column: span 6"],
          #features [style*="grid-column: span 4"] {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </>
  );
}
