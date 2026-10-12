'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';

const PRODUCTS = [
  'Crypto processing',
  'OTC & liquidity',
  'On/off-ramp',
  'vIBANs',
  'Wallets',
  'Corporate cards',
  'Stablecoin settlement',
];

const CURRENCIES = [
  'EUR',
  'GBP',
  'USD',
  'USDT',
  'USDC',
  'BTC',
  'ETH',
  'Other',
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

    const selectedProducts: string[] = [];
    form.querySelectorAll<HTMLInputElement>('input[name="product"]:checked').forEach((cb) => {
      selectedProducts.push(cb.value);
    });

    const selectedCurrencies: string[] = [];
    form.querySelectorAll<HTMLInputElement>('input[name="ccy"]:checked').forEach((cb) => {
      selectedCurrencies.push(cb.value);
    });

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
        // Trigger toast if global helper exists
        if (typeof window !== 'undefined' && (window as unknown as { toast?: (msg: string) => void }).toast) {
          (window as unknown as { toast: (msg: string) => void }).toast('Message sent successfully! Our team will contact you soon.');
        }
      } else {
        alert('There was an issue submitting your inquiry. Please try again or reach us at support@coincashy.io.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      alert('Network error. Please try again or reach us at support@coincashy.io.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <main className="page" style={{ paddingTop: 'clamp(8.5rem, 16vw, 10.5rem)', background: 'var(--ground)', minHeight: '100vh' }}>
        <section className="wrap" style={{ maxWidth: '1200px', paddingBottom: 'clamp(3.5rem, 7vw, 6rem)' }}>
          <div className="contact-page-layout">
            {/* Left Column: Introduction & Direct Channels */}
            <div className="contact-info-card">
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Talk to Coincashy</p>
                <h1 className="display" style={{ marginBottom: '1.25rem', marginTop: '0.4rem', lineHeight: 1.12 }}>Start the conversation.</h1>
                <p className="lede" style={{ maxWidth: '620px', marginBottom: '2rem', lineHeight: 1.65, color: 'var(--fg-dim)' }}>
                  Tell us where you want to move money, what rails you need, and how much volume you expect. We’ll respond with the right fit for your flow.
                </p>
              </div>

              <div className="contact-meta-grid">
                <div className="contact-meta-item">
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-faint)', marginBottom: '0.4rem', fontWeight: 600 }}>Email</div>
                  <a href="mailto:support@coincashy.io" style={{ color: 'var(--hi)', fontWeight: 600, display: 'inline-block' }}>
                    support@coincashy.io
                  </a>
                </div>
                <div className="contact-meta-item">
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-faint)', marginBottom: '0.4rem', fontWeight: 600 }}>Phone</div>
                  <a href="tel:+447452022306" style={{ color: 'var(--hi)', fontWeight: 600, display: 'inline-block' }}>
                    +44 7452 022306
                  </a>
                </div>
                <div className="contact-meta-item">
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-faint)', marginBottom: '0.4rem', fontWeight: 600 }}>Response time</div>
                  <div style={{ color: 'var(--hi)', fontWeight: 600 }}>
                    Within 1 business day
                  </div>
                </div>
              </div>

              <div className="contact-perks">
                <div className="contact-perk">
                  <span className="contact-perk-icon">✓</span>
                  <span>Personal and business onboarding</span>
                </div>
                <div className="contact-perk">
                  <span className="contact-perk-icon">✓</span>
                  <span>Institutional compliance and settlement guidance</span>
                </div>
                <div className="contact-perk">
                  <span className="contact-perk-icon">✓</span>
                  <span>API, vIBAN, card and OTC support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <form className="form" id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="f-row">
                <div className="field">
                  <label htmlFor="cf-name">Full name</label>
                  <input
                    className="input"
                    id="cf-name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                    onChange={() => errors.name && setErrors(prev => ({ ...prev, name: undefined }))}
                  />
                  <span className="err" id="cf-name-err" style={{ display: errors.name ? 'block' : 'none' }}>
                    {errors.name}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Work email</label>
                  <input
                    className="input"
                    id="cf-email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                    onChange={() => errors.email && setErrors(prev => ({ ...prev, email: undefined }))}
                  />
                  <span className="err" id="cf-email-err" style={{ display: errors.email ? 'block' : 'none' }}>
                    {errors.email}
                  </span>
                </div>
              </div>

              <div className="f-row">
                <div className="field">
                  <label htmlFor="cf-company">Company</label>
                  <input
                    className="input"
                    id="cf-company"
                    autoComplete="organization"
                    placeholder="Company name"
                    aria-invalid={!!errors.company}
                    onChange={() => errors.company && setErrors(prev => ({ ...prev, company: undefined }))}
                  />
                  <span className="err" id="cf-company-err" style={{ display: errors.company ? 'block' : 'none' }}>
                    {errors.company}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="cf-markets">Countries or markets</label>
                  <input className="input" id="cf-markets" placeholder="EU, UK, UAE, US" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-volume">Monthly volume</label>
                <div className="sel-wrap">
                  <select className="input" id="cf-volume" defaultValue="">
                    <option value="" disabled>Select an estimate</option>
                    <option value="Under €25k">Under €25k</option>
                    <option value="€25k – €250k">€25k – €250k</option>
                    <option value="€250k – €2.5m">€250k – €2.5m</option>
                    <option value="€2.5m – €25m">€2.5m – €25m</option>
                    <option value="€25m+">€25m+</option>
                  </select>
                  <svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg>
                </div>
              </div>

              <div className="field">
                <span className="lbl" id="cf-prod-l">Relevant products</span>
                <div className="chips" role="group" aria-labelledby="cf-prod-l">
                  {PRODUCTS.map((item) => (
                    <label key={item} className="chip">
                      <input type="checkbox" name="product" value={item} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field">
                <span className="lbl" id="cf-ccy-l">Fiat or crypto currencies</span>
                <div className="chips" role="group" aria-labelledby="cf-ccy-l">
                  {CURRENCIES.map((item) => (
                    <label key={item} className="chip">
                      <input
                        type="checkbox"
                        name="ccy"
                        value={item}
                        defaultChecked={item === 'EUR' || item === 'USDT'}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-notes">How can we help?</label>
                <textarea
                  className="input"
                  id="cf-notes"
                  rows={4}
                  placeholder="Please share your use case, timeline and constraints."
                />
              </div>

              <div className="form-foot">
                <p className="fine">
                  Products and availability are subject to jurisdiction, onboarding and partner approval.
                </p>
                <button
                  className="btn btn-solid"
                  type="submit"
                  disabled={submitting || submitted}
                  style={submitted ? { backgroundColor: '#10B981', borderColor: '#10B981', color: '#fff' } : undefined}
                >
                  {submitted ? (
                    <>
                      Successfully sent
                      <svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>
                    </>
                  ) : submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send inquiry
                      <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
