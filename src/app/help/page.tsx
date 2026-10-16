'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface FaqItem {
  id: string;
  category: 'personal' | 'business' | 'api' | 'security';
  question: string;
  answer: string;
}

const allFaqs: FaqItem[] = [
  {
    id: 'buy-methods',
    category: 'personal',
    question: 'How do I buy crypto on Coincashy?',
    answer: 'You can buy crypto easily using credit/debit cards (Visa, Mastercard), Apple Pay, Google Pay, or direct bank transfer (SEPA in the EU, Faster Payments in the UK). Choose your fiat currency, select the asset you want (BTC, ETH, USDT, USDC), and review the guaranteed quote before confirming.',
  },
  {
    id: 'sell-payout',
    category: 'personal',
    question: 'How do crypto sell payouts work?',
    answer: 'When you sell crypto on Coincashy, you can route the fiat proceeds directly to your verified bank account via SEPA Instant or Faster Payments. Most domestic and European transfers land within minutes of blockchain transaction confirmation.',
  },
  {
    id: 'card-waitlist',
    category: 'personal',
    question: 'How do I get a Coincashy crypto card?',
    answer: 'Personal crypto cards are available to verified users in eligible European jurisdictions. You can customize your card finish (Vault, Sky, Paper) and join the priority access list directly on our Personal page. Virtual cards activate instantly upon approval.',
  },
  {
    id: 'personal-fees',
    category: 'personal',
    question: 'What fees apply to personal accounts?',
    answer: 'Account opening, crypto deposits, and fiat SEPA/FPS deposits are 100% free. When buying or swapping assets, our fee is all-inclusive and clearly presented in the quote. Withdrawals incur only standard blockchain network gas fees.',
  },
  {
    id: 'business-onboarding',
    category: 'business',
    question: 'Who can open a Coincashy Business account?',
    answer: 'We support registered corporate entities worldwide, subject to standard KYB risk and sanctions checks. Our business clients include e-commerce merchants, Web3 platforms, fintechs, payment service providers (PSPs), and OTC trading desks.',
  },
  {
    id: 'viban-how',
    category: 'business',
    question: 'How do dedicated virtual IBANs (vIBANs) work?',
    answer: 'We issue dedicated EUR and GBP IBANs in your business name. When your customers or partners transfer funds to your vIBAN, the funds are automatically identified and can be auto-converted into stablecoins (USDT/USDC) or swept to your master treasury account.',
  },
  {
    id: 'otc-minimum',
    category: 'business',
    question: 'What is the minimum volume for the OTC Desk?',
    answer: 'Our Warsaw OTC desk specializes in block execution starting at $50,000 up to $10,000,000+. Trades are executed with zero order book slippage, locked executable quotes, and same-day T+0 bank settlement.',
  },
  {
    id: 'merchant-processing',
    category: 'business',
    question: 'How does crypto payment processing protect merchants from volatility?',
    answer: 'When a customer pays in Bitcoin, Ethereum, or Tether at your checkout, Coincashy locks the exchange rate in real time. We automatically convert the crypto and credit your account in your preferred fiat currency (EUR, USD, GBP), completely eliminating volatility risk.',
  },
  {
    id: 'api-sandbox',
    category: 'api',
    question: 'Do you provide an API sandbox for developers?',
    answer: 'Yes! We provide full sandbox credentials and simulation endpoints for testing payment links, webhooks, and quote generation without risking live funds. You can inspect full request/response schemas in our Developer Documentation.',
  },
  {
    id: 'webhook-retries',
    category: 'api',
    question: 'How do webhook retries and signatures work?',
    answer: 'Webhooks are sent with cryptographic HMAC-SHA256 signatures in the headers so your backend can verify authenticity. If your server returns a non-200 status code, our delivery engine automatically retries with exponential backoff for up to 24 hours.',
  },
  {
    id: 'security-vasp',
    category: 'security',
    question: 'Is Coincashy a regulated financial entity?',
    answer: 'Yes. Coincashy Sp. z o.o. is a registered Virtual Asset Service Provider (VASP) in Poland under KRS no. 0001135823. We strictly adhere to European AML/CTF directives, FATF Travel Rule regulations, and EU GDPR privacy laws.',
  },
  {
    id: 'custody-mpc',
    category: 'security',
    question: 'How are client crypto funds safeguarded?',
    answer: 'We partner with leading institutional custody providers BitGo and Utila, leveraging Multi-Party Computation (MPC) technology and hardware isolation. Client assets are backed 1:1 and never lent, rehypothecated, or commingled with corporate funds.',
  },
  {
    id: 'kyc-time',
    category: 'security',
    question: 'How long does identity verification take?',
    answer: 'Our automated onboarding powered by Sumsub takes under 60 seconds for individual verification (ID document + biometric liveness). Corporate KYB verification typically completes within 1 to 2 business days.',
  },
];

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <main className="page" style={{ background: 'var(--ground)', minHeight: '80vh' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="help-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Support &amp; FAQ</p>
              <h1 className="display">
                How can we <em>help you today?</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Instant answers for individuals, developers, and institutional partners. Search questions or explore categories below.
              </p>

              {/* Search Bar */}
              <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
                <input
                  type="search"
                  className="input"
                  placeholder="Search questions (e.g. fees, vIBAN, KYC, cards)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem 1rem 3rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                  }}
                />
                <svg
                  className="ic"
                  style={{
                    position: 'absolute',
                    left: '1.25rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    color: 'var(--low)',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                >
                  <use href="#i-scan-search" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="wrap" style={{ maxWidth: '980px', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'personal', label: 'Personal & Cards' },
              { id: 'business', label: 'Business & OTC' },
              { id: 'api', label: 'Developers & API' },
              { id: 'security', label: 'Security & Compliance' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '999px',
                  border: '1px solid var(--line)',
                  background: activeCategory === cat.id ? 'var(--hi)' : 'var(--surface)',
                  color: activeCategory === cat.id ? 'var(--ground)' : 'var(--fg)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordions */}
        <section className="wrap" style={{ maxWidth: '980px', paddingBottom: '4rem' }}>
          {filteredFaqs.length > 0 ? (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {filteredFaqs.map((item) => (
                <details
                  key={item.id}
                  style={{
                    padding: '1.35rem 1.5rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: '20px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--hi)', fontSize: '1.05rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item.question}</span>
                  </summary>
                  <p className="body" style={{ marginTop: '1rem', color: 'var(--low)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          ) : (
            <div style={{ padding: '3rem', textAlign: 'center', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--line)' }}>
              <p className="body" style={{ color: 'var(--low)', marginBottom: '1rem' }}>
                No questions found matching "<strong>{searchQuery}</strong>".
              </p>
              <button
                type="button"
                className="btn btn-line btn-sm"
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Direct Support Drawer */}
          <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'linear-gradient(145deg, var(--surface), var(--ground))', borderRadius: '24px', border: '1px solid var(--line)', textAlign: 'center' }}>
            <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Still have questions?</h3>
            <p className="body" style={{ color: 'var(--low)', marginBottom: '1.5rem', maxWidth: '560px', margin: '0 auto 1.5rem' }}>
              Our Warsaw support team and institutional account managers are available 24/7 to assist with your specific questions.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-solid">
                Contact Support<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
              <a href="mailto:support@coincashy.io" className="btn btn-line">
                <svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg>support@coincashy.io
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
