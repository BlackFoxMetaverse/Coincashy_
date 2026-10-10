'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';

const personalFaqs = [
  {
    question: 'How do I buy crypto?',
    answer: 'You can buy crypto easily through our platform using credit/debit cards, Apple Pay, Google Pay, or bank transfers (SEPA/FPS). Once your account is verified, you can select the asset, enter the amount, and confirm the quote. Fees are always included in the quote.',
  },
  {
    question: 'What are the fees for personal accounts?',
    answer: 'Account opening, crypto deposits, and fiat deposits (SEPA/FPS) are completely free. When you trade or swap assets, the fee is transparently included in your quote. Crypto withdrawals incur only the standard network fee.',
  },
  {
    question: 'How do I get a Coincashy crypto card?',
    answer: 'Personal crypto cards are available to eligible verified users. You can join the waitlist or apply directly from your dashboard. Once approved, you will receive a virtual card instantly and a physical card within 7-10 business days.',
  },
  {
    question: 'Is my personal data secure?',
    answer: 'Yes. We employ bank-grade encryption and strictly adhere to GDPR and other relevant privacy regulations. Your data is only used for verification and service provision.',
  }
];

const businessFaqs = [
  {
    question: 'Who can open a Coincashy Business account?',
    answer: 'We support registered businesses globally, subject to our compliance and jurisdiction restrictions. This includes fintechs, platforms, merchants, PSPs, and OTC desks looking for regulated, secure, and scalable crypto infrastructure.',
  },
  {
    question: 'How quickly can my business get onboarded?',
    answer: 'Most business onboarding flows begin with a short review of your entity, use case, and expected volume. Standard onboarding takes 2-5 business days depending on the complexity of your corporate structure.',
  },
  {
    question: 'Can Coincashy support enterprise treasury flows?',
    answer: 'Yes. Treasury, suite-level settlement, and payment routing are designed for clients that need more control, documentation, and operational clarity. We support large-scale stablecoin settlement.',
  },
  {
    question: 'How do vIBANs work for businesses?',
    answer: 'We issue dedicated virtual IBANs (vIBANs) to your business, allowing you to send and receive fiat (EUR, GBP) seamlessly via SEPA or Faster Payments, directly connected to your crypto liquidity.',
  }
];

const apiFaqs = [
  {
    question: 'Where can I find the API documentation?',
    answer: 'Our comprehensive API documentation is available at coincashy.io/developers. It covers Payments, Wallets, Quotes, and Webhooks.',
  },
  {
    question: 'Do you provide a sandbox environment?',
    answer: 'Yes, we provide a full sandbox environment for developers to test integrations, webhooks, and API calls without risking real funds.',
  }
];

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)', minHeight: '80vh' }}>
        <section className="wrap" style={{ maxWidth: '980px', paddingBottom: '1.5rem' }}>
          <p className="eyebrow">Help center</p>
          <h1 className="display">Answers for customers, partners and operators.</h1>
          
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
            <button 
              onClick={() => setActiveTab('personal')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: activeTab === 'personal' ? 600 : 400, color: activeTab === 'personal' ? 'var(--hi)' : 'var(--low)', paddingBottom: '0.5rem', borderBottom: activeTab === 'personal' ? '2px solid var(--hi)' : '2px solid transparent', marginBottom: '-1rem' }}
            >
              Personal
            </button>
            <button 
              onClick={() => setActiveTab('business')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: activeTab === 'business' ? 600 : 400, color: activeTab === 'business' ? 'var(--hi)' : 'var(--low)', paddingBottom: '0.5rem', borderBottom: activeTab === 'business' ? '2px solid var(--hi)' : '2px solid transparent', marginBottom: '-1rem' }}
            >
              Business
            </button>
            <button 
              onClick={() => setActiveTab('api')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontWeight: activeTab === 'api' ? 600 : 400, color: activeTab === 'api' ? 'var(--hi)' : 'var(--low)', paddingBottom: '0.5rem', borderBottom: activeTab === 'api' ? '2px solid var(--hi)' : '2px solid transparent', marginBottom: '-1rem' }}
            >
              Developers & API
            </button>
          </div>
        </section>

        <section className="wrap" style={{ maxWidth: '980px', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {activeTab === 'personal' && personalFaqs.map((item) => (
              <details key={item.question} style={{ padding: '1.2rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--hi)' }}>{item.question}</summary>
                <p className="body" style={{ marginTop: '0.8rem', color: 'var(--low)' }}>{item.answer}</p>
              </details>
            ))}

            {activeTab === 'business' && businessFaqs.map((item) => (
              <details key={item.question} style={{ padding: '1.2rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--hi)' }}>{item.question}</summary>
                <p className="body" style={{ marginTop: '0.8rem', color: 'var(--low)' }}>{item.answer}</p>
              </details>
            ))}

            {activeTab === 'api' && apiFaqs.map((item) => (
              <details key={item.question} style={{ padding: '1.2rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--hi)' }}>{item.question}</summary>
                <p className="body" style={{ marginTop: '0.8rem', color: 'var(--low)' }}>{item.answer}</p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--line)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Still need help?</h3>
            <p style={{ color: 'var(--low)', marginBottom: '1.5rem' }}>Our support team is available 24/7 to assist you.</p>
            <a href="/contact" className="btn btn-solid">Contact Support</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
