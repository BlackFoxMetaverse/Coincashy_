'use client';

import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How does spending crypto at a standard Visa/Mastercard terminal work?',
    a: 'When you tap your Coincashy card or pay online, the merchant terminal requests fiat currency (EUR, USD, GBP, etc.). Our real-time transaction engine instantly converts the precise equivalent amount from your chosen crypto balance (USDT, USDC, BTC, ETH) at institutional interbank rates in under 150 milliseconds. The merchant receives standard fiat, and your crypto wallet is debited without slippage.',
  },
  {
    q: 'Do I need to manually convert crypto to fiat before making a purchase?',
    a: 'No! You can keep your assets in cryptocurrency right up until the exact second of purchase. There is no need to manually pre-sell or hold idle fiat. If you prefer, you can also hold fiat balances in your account and set spending priorities.',
  },
  {
    q: 'Are there hidden foreign exchange (FX) fees when traveling abroad?',
    a: 'None. Traditional bank cards typically charge 3% to 4.5% foreign transaction fees when you spend outside your home currency. Coincashy uses the raw interbank mid-market exchange rate with 0% foreign transaction markup across 140+ countries.',
  },
  {
    q: 'Can I generate dedicated virtual cards for recurring software subscriptions?',
    a: 'Yes. With Coincashy Virtual Cards, you can generate dedicated virtual card numbers for specific services like AWS, OpenAI, GitHub, or streaming platforms. You can set individual spending caps or freeze a specific card anytime without affecting your main physical card.',
  },
  {
    q: 'How fast is physical metal card shipping, and which countries are eligible?',
    a: 'Physical metal cards are shipped via tracked DHL Express within 2 to 4 business days across the EEA, UK, Switzerland, and select global jurisdictions. While your physical metal card is in transit, your virtual card is activated instantly and can be added to Apple Pay or Google Pay immediately.',
  },
  {
    q: 'How are corporate cards managed for global remote teams?',
    a: 'Corporate administrators can batch-issue virtual cards to employees in seconds, assign individual budgets, whitelist permitted Merchant Category Codes (e.g., Cloud Hosting, Flights, Hotels), and automatically ingest transaction data and receipt images into accounting software like QuickBooks, Xero, and SAP.',
  },
];

export default function CardFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-accordion-list">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`faq-item ${isOpen ? 'is-open' : ''}`}
            style={{
              borderRadius: '18px',
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              marginBottom: '12px',
              overflow: 'hidden',
              transition: 'border-color 0.25s ease, background 0.25s ease',
            }}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="faq-question-btn"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: isOpen ? 'var(--hi)' : 'var(--fg)',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.q}
              </span>
              <span
                className="faq-icon-pill"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--line)',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease, background 0.25s ease',
                  color: 'var(--hi)',
                }}
              >
                <svg className="ic" style={{ width: '16px', height: '16px' }}><use href="#i-chevron-down" /></svg>
              </span>
            </button>

            {isOpen && (
              <div
                className="faq-answer-pane"
                style={{
                  padding: '0 24px 22px',
                  color: 'var(--low)',
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  borderTop: '1px solid var(--line)',
                  paddingTop: '16px',
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
