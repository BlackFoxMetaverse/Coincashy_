'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';

const PRODUCTS = [
  'Corporate cards',
  'Crypto processing',
  'OTC & liquidity',
  'On/off-ramp',
  'vIBANs',
  'Wallets',
  'Stablecoin settlement',
];

const CURRENCIES = [
  'EUR',
  'USD',
  'GBP',
  'USDT',
  'USDC',
  'BTC',
  'ETH',
  'Other',
];

const TOPIC_CONFIG: Record<
  string,
  {
    product: string;
    badge: string;
    headline: string;
    lede: string;
    placeholder: string;
  }
> = {
  'corporate-cards': {
    product: 'Corporate cards',
    badge: 'Corporate Card Program',
    headline: 'Deploy crypto cards for your global team.',
    lede: 'Move corporate stablecoin treasury directly into virtual and metal team cards. Tell us your employee count and expected volume.',
    placeholder: 'Team size, estimated card volume, and target currencies (EUR, USD, USDC)...',
  },
  'cards': {
    product: 'Corporate cards',
    badge: 'Corporate Card Program',
    headline: 'Deploy crypto cards for your global team.',
    lede: 'Move corporate stablecoin treasury directly into virtual and metal team cards. Tell us your employee count and expected volume.',
    placeholder: 'Team size, estimated card volume, and target currencies (EUR, USD, USDC)...',
  },
  'otc': {
    product: 'OTC & liquidity',
    badge: 'Institutional OTC Desk',
    headline: 'Deep liquidity with zero slippage.',
    lede: 'Trade large-block crypto and fiat with dedicated private liquidity, same-day settlement, and multi-currency banking rails.',
    placeholder: 'Ticket sizes (e.g. €100k+), currency pairs, and settlement bank rails...',
  },
  'vibans': {
    product: 'vIBANs',
    badge: 'Dedicated Virtual IBANs',
    headline: 'Segregated fiat collection accounts.',
    lede: 'Open named virtual IBANs in EUR and GBP for automated B2B treasury collection, SEPA Instant, and SWIFT settlement.',
    placeholder: 'Expected deposit volume, customer countries, and preferred fiat currencies...',
  },
  'processing': {
    product: 'Crypto processing',
    badge: 'Merchant Payment Gateway',
    headline: 'Accept crypto online with instant fiat payout.',
    lede: 'Integrate sub-second crypto checkouts with automated conversion to EUR, USD, or stablecoins with zero chargeback risk.',
    placeholder: 'E-commerce platform, average transaction value, and target customer geographies...',
  },
  'settlement': {
    product: 'Stablecoin settlement',
    badge: 'Treasury & Settlement',
    headline: 'Cross-border supplier payouts at the speed of code.',
    lede: 'Automate global vendor payments in USDT, USDC, and fiat with programmable REST APIs and institutional compliance.',
    placeholder: 'Payout corridors, frequency, and current cross-border banking bottlenecks...',
  },
  'compliance': {
    product: 'Corporate cards',
    badge: 'Regulatory & Compliance',
    headline: 'Compliance and institutional onboarding.',
    lede: 'Inquire regarding our VASP licensing, FATF Travel Rule architecture, MiCA readiness, and custody controls.',
    placeholder: 'Compliance questions, jurisdiction requirements, or institutional due diligence requests...',
  },
  'enterprise-fees': {
    product: 'OTC & liquidity',
    badge: 'Enterprise Volume Pricing',
    headline: 'Tailored institutional fee schedules.',
    lede: 'We provide bespoke tier pricing for high-volume merchants, market makers, and enterprise treasuries.',
    placeholder: 'Expected monthly run-rate volume to receive an enterprise tier fee schedule...',
  },
};

function ContactFormInner({ rawTopic }: { rawTopic: string }) {
  const topicConfig = TOPIC_CONFIG[rawTopic];

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});

  // Default to Corporate cards if no topic is specified, or to the topic-specific product
  const [selectedProducts, setSelectedProducts] = useState<string[]>(() => {
    if (topicConfig?.product) return [topicConfig.product];
    return ['Corporate cards'];
  });

  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>(['EUR', 'USDT']);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleProduct = (item: string) => {
    setSelectedProducts((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  const toggleCurrency = (item: string) => {
    setSelectedCurrencies((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const form = e.currentTarget;
    const nameInput = form.querySelector('#cf-name') as HTMLInputElement | null;
    const emailInput = form.querySelector('#cf-email') as HTMLInputElement | null;
    const companyInput = form.querySelector('#cf-company') as HTMLInputElement | null;
    const marketsInput = form.querySelector('#cf-markets') as HTMLInputElement | null;
    const volumeSelect = form.querySelector('#cf-volume') as HTMLSelectElement | null;
    const notesInput = form.querySelector('#cf-notes') as HTMLTextAreaElement | null;

    const name = nameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const company = companyInput?.value.trim() || '';

    const newErrors: { name?: string; email?: string; company?: string } = {};
    if (name.length < 2) {
      newErrors.name = 'Enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid work email, like name@company.com.';
    }
    if (company.length < 2) {
      newErrors.company = 'Enter your company name.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name && nameInput) nameInput.focus();
      else if (newErrors.email && emailInput) emailInput.focus();
      else if (newErrors.company && companyInput) companyInput.focus();
      return;
    }

    const payload = {
      name,
      company,
      email,
      markets: marketsInput?.value.trim() || 'Not specified',
      currencies: selectedCurrencies.join(', ') || 'Not specified',
      monthlyVolume: volumeSelect?.value || 'Not specified',
      products: selectedProducts.join(', ') || 'Not specified',
      notes: notesInput?.value.trim() || 'Not specified',
    };

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrorMessage(
          'There was an issue submitting your inquiry. Please try again or reach us at support@coincashy.io.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Network connection error. Please try again or reach us directly at support@coincashy.io.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page-layout">
      {/* Left Column: Contextual Overview & Direct Channels */}
      <div className="contact-info-card">
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '99px',
              background: 'var(--surface-2)',
              border: '1px solid var(--line-2)',
              marginBottom: '0.75rem',
              fontSize: '0.76rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--jade)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--jade)',
                boxShadow: '0 0 8px var(--jade)',
              }}
            />
            {topicConfig ? topicConfig.badge : 'Direct Enterprise Desk'}
          </div>

          <h1
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(1.85rem, 2.8vw, 2.5rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              marginBottom: '0.75rem',
              marginTop: '0.2rem',
              letterSpacing: '-0.02em',
            }}
          >
            {topicConfig ? topicConfig.headline : 'Start the conversation.'}
          </h1>

          <p style={{ fontSize: '0.92rem', color: 'var(--fg-dim)', lineHeight: 1.55, margin: '0 0 1.25rem 0' }}>
            {topicConfig
              ? topicConfig.lede
              : 'Tell us where you want to move money, what rails you need, and how much volume you expect. We’ll respond within 2 hours.'}
          </p>
        </div>

        {/* Contact channels with quick copy */}
        <div className="contact-meta-grid">
          <div className="contact-meta-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg-faint)', fontWeight: 600 }}>
                Email
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('support@coincashy.io', 'email')}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '0.7rem', color: copiedEmail ? 'var(--jade)' : 'var(--fg-faint)', transition: 'color 0.2s' }}
                title="Copy email"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <a href="mailto:support@coincashy.io" style={{ color: 'var(--hi)', fontWeight: 600, fontSize: '0.84rem' }}>
              support@coincashy.io
            </a>
          </div>

          <div className="contact-meta-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg-faint)', fontWeight: 600 }}>
                Direct Phone
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('+44 7452 022306', 'phone')}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '0.7rem', color: copiedPhone ? 'var(--jade)' : 'var(--fg-faint)', transition: 'color 0.2s' }}
                title="Copy phone"
              >
                {copiedPhone ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <a href="tel:+447452022306" style={{ color: 'var(--hi)', fontWeight: 600, fontSize: '0.84rem' }}>
              +44 7452 022306
            </a>
          </div>

          <div className="contact-meta-item">
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg-faint)', fontWeight: 600, marginBottom: '0.25rem' }}>
              Response SLA
            </div>
            <div style={{ color: 'var(--hi)', fontWeight: 600, fontSize: '0.84rem' }}>
              &lt; 2 hours (London Desk)
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div style={{ display: 'grid', gap: '8px', paddingTop: '0.5rem', borderTop: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--fg-dim)' }}>
            <span style={{ color: 'var(--jade)', fontWeight: 700 }}>✓</span>
            <span>Licensed VASP (EU Regulated) • FATF Travel Rule</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--fg-dim)' }}>
            <span style={{ color: 'var(--jade)', fontWeight: 700 }}>✓</span>
            <span>Dedicated account manager &amp; VIP Telegram/Slack</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--fg-dim)' }}>
            <span style={{ color: 'var(--jade)', fontWeight: 700 }}>✓</span>
            <span>SEPA Instant, SWIFT &amp; Visa/Mastercard settlement</span>
          </div>
        </div>
      </div>

      {/* Right Column: Compact High-Converting Form */}
      <form className="contact-form-card" id="contact-form" onSubmit={handleSubmit} noValidate>
        {errorMessage && (
          <div
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid #ef4444',
              color: '#f87171',
              fontSize: '0.86rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <svg className="ic" style={{ width: '16px', height: '16px', flexShrink: 0 }} aria-hidden="true">
              <use href="#i-x" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {submitted && (
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid #10b981',
              color: '#34d399',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#10b981',
                color: '#000',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <svg className="ic" style={{ width: '16px', height: '16px' }} aria-hidden="true">
                <use href="#i-check" />
              </svg>
            </div>
            <div>
              <strong style={{ display: 'block', color: '#fff', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                Inquiry Submitted Successfully
              </strong>
              <p style={{ margin: 0, color: 'var(--fg-dim)', lineHeight: 1.45, fontSize: '0.84rem' }}>
                Thank you for reaching out. A senior onboarding partner from our Warsaw/London team will contact you shortly.
              </p>
            </div>
          </div>
        )}

        {/* Row 1: Name & Email */}
        <div className="f-row">
          <div className="field">
            <label htmlFor="cf-name">Full name *</label>
            <input
              className="input"
              id="cf-name"
              autoComplete="name"
              placeholder="e.g. Jane Doe"
              aria-invalid={!!errors.name}
              onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: undefined }))}
            />
            <span className="err" id="cf-name-err" style={{ display: errors.name ? 'block' : 'none' }}>
              {errors.name}
            </span>
          </div>
          <div className="field">
            <label htmlFor="cf-email">Work email *</label>
            <input
              className="input"
              id="cf-email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              aria-invalid={!!errors.email}
              onChange={() => errors.email && setErrors((prev) => ({ ...prev, email: undefined }))}
            />
            <span className="err" id="cf-email-err" style={{ display: errors.email ? 'block' : 'none' }}>
              {errors.email}
            </span>
          </div>
        </div>

        {/* Row 2: Company & Jurisdictions */}
        <div className="f-row">
          <div className="field">
            <label htmlFor="cf-company">Company name *</label>
            <input
              className="input"
              id="cf-company"
              autoComplete="organization"
              placeholder="e.g. Acme Treasury Ltd"
              aria-invalid={!!errors.company}
              onChange={() => errors.company && setErrors((prev) => ({ ...prev, company: undefined }))}
            />
            <span className="err" id="cf-company-err" style={{ display: errors.company ? 'block' : 'none' }}>
              {errors.company}
            </span>
          </div>
          <div className="field">
            <label htmlFor="cf-markets">Operating countries</label>
            <input className="input" id="cf-markets" placeholder="e.g. EEA, UK, UAE, Global" />
          </div>
        </div>

        {/* Row 3: Monthly Volume & Primary Currencies (Side-by-Side to save vertical height) */}
        <div className="f-row">
          <div className="field">
            <label htmlFor="cf-volume">Expected monthly volume</label>
            <div className="sel-wrap">
              <select className="input" id="cf-volume" defaultValue="">
                <option value="" disabled>
                  Select estimated volume
                </option>
                <option value="Under €25k">Under €25k / month</option>
                <option value="€25k – €250k">€25k – €250k / month</option>
                <option value="€250k – €2.5m">€250k – €2.5m / month</option>
                <option value="€2.5m – €25m">€2.5m – €25m / month</option>
                <option value="€25m+">€25m+ (Enterprise tier)</option>
              </select>
              <svg className="ic" aria-hidden="true">
                <use href="#i-chevron-down" />
              </svg>
            </div>
          </div>

          <div className="field">
            <label>Primary currencies</label>
            <div className="chips-compact">
              {CURRENCIES.slice(0, 5).map((item) => {
                const isChecked = selectedCurrencies.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleCurrency(item)}
                    className={`chip-btn ${isChecked ? 'is-active' : ''}`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 4: Relevant Products */}
        <div className="field">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
            <span className="lbl" id="cf-prod-l">
              Relevant products of interest
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--fg-faint)' }}>Click to toggle</span>
          </div>
          <div className="chips-compact">
            {PRODUCTS.map((item) => {
              const isChecked = selectedProducts.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleProduct(item)}
                  className={`chip-btn ${isChecked ? 'is-active' : ''}`}
                >
                  {isChecked && (
                    <svg
                      className="ic"
                      style={{ width: '12px', height: '12px', marginRight: '4px', strokeWidth: 3 }}
                      aria-hidden="true"
                    >
                      <use href="#i-check" />
                    </svg>
                  )}
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 5: Contextual Notes */}
        <div className="field">
          <label htmlFor="cf-notes">Project requirements &amp; timeline</label>
          <textarea
            className="input"
            id="cf-notes"
            rows={2}
            placeholder={
              topicConfig ? topicConfig.placeholder : 'Tell us about your team size, timeline, and rails needed...'
            }
          />
        </div>

        {/* Row 6: Submit Button & Fine print */}
        <div className="form-foot">
          <p className="fine" style={{ margin: 0, fontSize: '0.76rem', color: 'var(--fg-faint)', maxWidth: '340px' }}>
            Institutional KYB onboarding • Encrypted transmission
          </p>
          <button
            className="btn btn-solid"
            type="submit"
            disabled={submitting || submitted}
            style={
              submitted
                ? { backgroundColor: '#10B981', borderColor: '#10B981', color: '#fff', height: '42px', padding: '0 1.25rem' }
                : { minWidth: '160px', height: '42px', padding: '0 1.25rem', justifyContent: 'center' }
            }
          >
            {submitted ? (
              <>
                Sent Successfully
                <svg className="ic" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </>
            ) : submitting ? (
              'Transmitting...'
            ) : (
              <>
                Send inquiry
                <svg className="ic" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const rawTopic = searchParams?.get('topic')?.toLowerCase().trim() || '';
  return <ContactFormInner key={rawTopic} rawTopic={rawTopic} />;
}

export default function ContactPage() {
  return (
    <>
      <main
        className="page"
        style={{
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 104px)',
          background: 'var(--ground)',
          minHeight: '100vh',
        }}
      >
        <section className="wrap" style={{ maxWidth: '1240px', paddingBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <Suspense
            fallback={
              <div
                style={{
                  minHeight: '50vh',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--fg-dim)',
                  fontSize: '0.95rem',
                }}
              >
                Loading contact options...
              </div>
            }
          >
            <ContactFormContent />
          </Suspense>
        </section>
      </main>
      <Footer />

      {/* Scoped CSS adjustments for high-density, viewport-fitted contact experience */}
      <style>{`
        .contact-page-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(16px, 2.5vw, 28px);
          align-items: stretch;
          width: 100%;
        }
        .contact-info-card {
          padding: clamp(20px, 2.5vw, 28px);
          border-radius: 22px;
          background: linear-gradient(165deg, var(--surface), var(--ground));
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
        }
        .contact-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .contact-meta-item {
          padding: 10px 12px;
          border-radius: 14px;
          background: var(--surface-2);
          border: 1px solid var(--line);
          min-width: 0;
          overflow: hidden;
        }
        .contact-meta-item a,
        .contact-meta-item div {
          word-break: break-word;
          overflow-wrap: anywhere;
        }
        .contact-form-card {
          padding: clamp(18px, 2.4vw, 26px);
          border-radius: 22px;
          background: var(--surface);
          border: 1px solid var(--line);
          display: grid;
          gap: 10px;
        }
        .contact-form-card .f-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .contact-form-card .field {
          display: grid;
          gap: 4px;
          min-width: 0;
        }
        .contact-form-card .field > label,
        .contact-form-card .field .lbl {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--fg-dim);
        }
        .contact-form-card .input {
          height: 40px;
          padding: 0 14px;
          font-size: 0.86rem;
          border-radius: 10px;
          background: var(--ground);
          border: 1px solid var(--line-2);
          color: var(--fg);
        }
        .contact-form-card textarea.input {
          height: auto;
          min-height: 56px;
          padding: 8px 12px;
          font-size: 0.86rem;
          resize: vertical;
          line-height: 1.45;
        }
        .contact-form-card .sel-wrap .ic {
          right: 12px;
          width: 14px;
          height: 14px;
        }
        .chips-compact {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .chip-btn {
          display: inline-flex;
          align-items: center;
          height: 30px;
          padding: 0 11px;
          border-radius: 99px;
          border: 1px solid var(--line-2);
          background: transparent;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--fg-dim);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .chip-btn:hover {
          color: var(--fg);
          border-color: var(--fg-dim);
        }
        .chip-btn.is-active {
          background: var(--fg);
          color: var(--ground);
          border-color: var(--fg);
          font-weight: 600;
        }
        .contact-form-card .form-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 2px;
        }
        @media (max-width: 980px) {
          .contact-page-layout {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .contact-form-card .f-row {
            grid-template-columns: 1fr;
          }
          .contact-meta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
