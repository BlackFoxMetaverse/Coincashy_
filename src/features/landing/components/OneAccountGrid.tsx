"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OneAccountGrid() {
  const [selectedPay, setSelectedPay] = useState<'card' | 'apple' | 'google' | 'bank'>('apple');
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const [cardHoverTilt, setCardHoverTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setCardHoverTilt({ rx: -py * 16, ry: px * 20 });
  };

  const handleCardMouseLeave = () => {
    setCardHoverTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      className="one-account-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '16px',
        alignItems: 'stretch',
      }}
    >
      {/* ============ Card 1: Buy Crypto ============ */}
      <article
        className="prod rv"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '22px 20px',
          borderRadius: '24px',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div
          className="prod-vis"
          aria-hidden="true"
          style={{
            height: '175px',
            borderRadius: '16px',
            background: 'var(--surface-2)',
            border: '1px solid var(--line)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '12px 14px',
            marginBottom: '14px',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'grid', gap: '6px', width: '100%' }}>
            {/* Card row */}
            <div
              onClick={() => setSelectedPay('card')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '32px',
                padding: '0 10px',
                borderRadius: '8px',
                border: `1px solid ${selectedPay === 'card' ? 'var(--fg)' : 'var(--line)'}`,
                background: selectedPay === 'card' ? 'rgba(255,255,255,0.06)' : 'var(--surface)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <svg className="ic" style={{ width: '14px', height: '14px', color: 'var(--fg-dim)' }}>
                <use href="#i-credit-card" />
              </svg>
              <span>Card</span>
              <em style={{ marginLeft: 'auto', fontStyle: 'normal', fontFamily: 'var(--f-mono)', fontSize: '0.72rem', color: 'var(--fg-faint)' }}>
                Visa · MC
              </em>
            </div>

            {/* Apple Pay row */}
            <div
              onClick={() => setSelectedPay('apple')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '32px',
                padding: '0 10px',
                borderRadius: '8px',
                border: `1px solid ${selectedPay === 'apple' ? 'var(--fg)' : 'var(--line)'}`,
                background: selectedPay === 'apple' ? 'rgba(255,255,255,0.06)' : 'var(--surface)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <svg className="ic" style={{ width: '14px', height: '14px', color: 'var(--fg-dim)' }}>
                <use href="#i-smartphone" />
              </svg>
              <span>Apple Pay</span>
              <em style={{ marginLeft: 'auto', fontStyle: 'normal', fontFamily: 'var(--f-mono)', fontSize: '0.72rem', color: selectedPay === 'apple' ? 'var(--jade)' : 'var(--fg-faint)' }}>
                {selectedPay === 'apple' ? 'Selected' : ''}
              </em>
            </div>

            {/* Google Pay row */}
            <div
              onClick={() => setSelectedPay('google')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '32px',
                padding: '0 10px',
                borderRadius: '8px',
                border: `1px solid ${selectedPay === 'google' ? 'var(--fg)' : 'var(--line)'}`,
                background: selectedPay === 'google' ? 'rgba(255,255,255,0.06)' : 'var(--surface)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <svg className="ic" style={{ width: '14px', height: '14px', color: 'var(--fg-dim)' }}>
                <use href="#i-smartphone" />
              </svg>
              <span>Google Pay</span>
              <em style={{ marginLeft: 'auto', fontStyle: 'normal', fontFamily: 'var(--f-mono)', fontSize: '0.72rem', color: selectedPay === 'google' ? 'var(--jade)' : 'var(--fg-faint)' }}>
                {selectedPay === 'google' ? 'Selected' : ''}
              </em>
            </div>

            {/* Bank row */}
            <div
              onClick={() => setSelectedPay('bank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '32px',
                padding: '0 10px',
                borderRadius: '8px',
                border: `1px solid ${selectedPay === 'bank' ? 'var(--fg)' : 'var(--line)'}`,
                background: selectedPay === 'bank' ? 'rgba(255,255,255,0.06)' : 'var(--surface)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <svg className="ic" style={{ width: '14px', height: '14px', color: 'var(--fg-dim)' }}>
                <use href="#i-landmark" />
              </svg>
              <span>Bank transfer</span>
              <em style={{ marginLeft: 'auto', fontStyle: 'normal', fontFamily: 'var(--f-mono)', fontSize: '0.72rem', color: selectedPay === 'bank' ? 'var(--jade)' : 'var(--fg-faint)' }}>
                SEPA
              </em>
            </div>
          </div>
        </div>
        <h3 className="h3" style={{ fontSize: '1.45rem', marginBottom: '8px', fontWeight: 650 }}>Buy crypto</h3>
        <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.88rem', lineHeight: 1.5, minHeight: '44px', margin: 0 }}>
          Purchase supported assets using card, Apple Pay, Google Pay or bank transfer.
        </p>
        <a className="link-arrow" href="#buy" style={{ marginTop: 'auto', paddingTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--fg)' }}>
          Start buying
          <svg className="ic" aria-hidden="true" style={{ width: '15px', height: '15px', transition: 'transform 0.2s ease' }}><use href="#i-arrow-right" /></svg>
        </a>
      </article>

      {/* ============ Card 2: Sell Crypto ============ */}
      <article
        className="prod rv"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '22px 20px',
          borderRadius: '24px',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div
          className="prod-vis"
          aria-hidden="true"
          style={{
            height: '175px',
            borderRadius: '16px',
            background: 'var(--surface-2)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 8px',
            marginBottom: '14px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1.15fr) auto minmax(0, 1fr)',
              alignItems: 'center',
              gap: '4px',
              width: '100%',
            }}
          >
            {/* Step 1: Crypto */}
            <div style={{ display: 'grid', justifyItems: 'center', gap: '4px', textAlign: 'center', minWidth: 0 }}>
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--line-2)',
                  background: 'var(--surface)',
                }}
              >
                <span className="coin sm eth" style={{ fontSize: '0.9rem' }}>Ξ</span>
              </span>
              <b style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '0.74rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>
                0.75 ETH
              </b>
              <span style={{ fontSize: '0.68rem', color: 'var(--fg-dim)', whiteSpace: 'nowrap' }}>You sell</span>
            </div>

            {/* Pulse arrow 1 */}
            <svg
              className="ic"
              style={{
                width: '13px',
                height: '13px',
                color: 'var(--fg-dim)',
                animation: 'pulseShift 2s ease-in-out infinite',
              }}
            >
              <use href="#i-arrow-right" />
            </svg>

            {/* Step 2: Converted */}
            <div style={{ display: 'grid', justifyItems: 'center', gap: '4px', textAlign: 'center', minWidth: 0 }}>
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--line-2)',
                  background: 'var(--surface)',
                }}
              >
                <svg className="ic" style={{ width: '15px', height: '15px', color: 'var(--jade)' }}>
                  <use href="#i-repeat" />
                </svg>
              </span>
              <b style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '0.74rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>
                €1,706.90
              </b>
              <span style={{ fontSize: '0.68rem', color: 'var(--fg-dim)', whiteSpace: 'nowrap' }}>Converted</span>
            </div>

            {/* Pulse arrow 2 */}
            <svg
              className="ic"
              style={{
                width: '13px',
                height: '13px',
                color: 'var(--fg-dim)',
                animation: 'pulseShift 2s ease-in-out infinite 0.3s',
              }}
            >
              <use href="#i-arrow-right" />
            </svg>

            {/* Step 3: Bank */}
            <div style={{ display: 'grid', justifyItems: 'center', gap: '4px', textAlign: 'center', minWidth: 0 }}>
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--line-2)',
                  background: 'var(--surface)',
                }}
              >
                <svg className="ic" style={{ width: '15px', height: '15px', color: 'var(--fg-dim)' }}>
                  <use href="#i-landmark" />
                </svg>
              </span>
              <b style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '0.74rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>
                •••• 4821
              </b>
              <span style={{ fontSize: '0.68rem', color: 'var(--fg-dim)', whiteSpace: 'nowrap' }}>Your bank</span>
            </div>
          </div>
        </div>
        <h3 className="h3" style={{ fontSize: '1.45rem', marginBottom: '8px', fontWeight: 650 }}>Sell crypto</h3>
        <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.88rem', lineHeight: 1.5, minHeight: '44px', margin: 0 }}>
          Convert supported digital assets and receive funds through available payout methods.
        </p>
        <a className="link-arrow" href="#sell" style={{ marginTop: 'auto', paddingTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--fg)' }}>
          Start selling
          <svg className="ic" aria-hidden="true" style={{ width: '15px', height: '15px', transition: 'transform 0.2s ease' }}><use href="#i-arrow-right" /></svg>
        </a>
      </article>

      {/* ============ Card 3: Convert Crypto ============ */}
      <article
        className="prod rv"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '22px 20px',
          borderRadius: '24px',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div
          className="prod-vis"
          aria-hidden="true"
          style={{
            height: '175px',
            borderRadius: '16px',
            background: 'var(--surface-2)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 14px',
            marginBottom: '14px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              width: '100%',
            }}
          >
            {/* Token A */}
            <div style={{ display: 'grid', justifyItems: 'center', gap: '4px', textAlign: 'center' }}>
              <span
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--line-2)',
                  background: 'var(--surface)',
                }}
              >
                <span className={`coin sm ${isSwapped ? 'usdc' : 'btc'}`} style={{ fontSize: '0.95rem' }}>
                  {isSwapped ? '$' : '₿'}
                </span>
              </span>
              <b style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '0.78rem', color: 'var(--fg)' }}>
                {isSwapped ? '4,215 USDC' : '0.05 BTC'}
              </b>
              <span style={{ fontSize: '0.7rem', color: 'var(--fg-dim)' }}>From</span>
            </div>

            {/* Interactive swap button */}
            <button
              type="button"
              onClick={() => setIsSwapped((prev) => !prev)}
              aria-label="Swap pairs"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--surface)',
                border: '1px solid var(--line-2)',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                color: 'var(--fg)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isSwapped ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <svg className="ic" style={{ width: '15px', height: '15px' }}>
                <use href="#i-arrow-left-right" />
              </svg>
            </button>

            {/* Token B */}
            <div style={{ display: 'grid', justifyItems: 'center', gap: '4px', textAlign: 'center' }}>
              <span
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--line-2)',
                  background: 'var(--surface)',
                }}
              >
                <span className={`coin sm ${isSwapped ? 'btc' : 'usdc'}`} style={{ fontSize: '0.95rem' }}>
                  {isSwapped ? '₿' : '$'}
                </span>
              </span>
              <b style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, fontSize: '0.78rem', color: 'var(--fg)' }}>
                {isSwapped ? '0.05 BTC' : '4,215 USDC'}
              </b>
              <span style={{ fontSize: '0.7rem', color: 'var(--fg-dim)' }}>To</span>
            </div>
          </div>
        </div>
        <h3 className="h3" style={{ fontSize: '1.45rem', marginBottom: '8px', fontWeight: 650 }}>Convert crypto</h3>
        <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.88rem', lineHeight: 1.5, minHeight: '44px', margin: 0 }}>
          Move between supported assets with clear quotes, zero slippage, and instant delivery.
        </p>
        <a className="link-arrow" href="#convert" style={{ marginTop: 'auto', paddingTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--fg)' }}>
          Try a conversion
          <svg className="ic" aria-hidden="true" style={{ width: '15px', height: '15px', transition: 'transform 0.2s ease' }}><use href="#i-arrow-right" /></svg>
        </a>
      </article>

      {/* ============ Card 4: Spend with Card ============ */}
      <article
        className="prod rv"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '22px 20px',
          borderRadius: '24px',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div
          className="prod-vis"
          aria-hidden="true"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            height: '175px',
            borderRadius: '16px',
            background: 'var(--surface-2)',
            border: '1px solid var(--line)',
            display: 'grid',
            placeItems: 'center',
            padding: '12px',
            marginBottom: '14px',
            overflow: 'hidden',
            perspective: '800px',
          }}
        >
          <div
            style={{
              width: '80%',
              maxWidth: '220px',
              aspectRatio: '1.586',
              position: 'relative',
              transform: `rotate(-6deg) rotateX(${cardHoverTilt.rx}deg) rotateY(${cardHoverTilt.ry}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <div className="card finish-paper is-physical" style={{ width: '100%', height: '100%', borderRadius: '12px' }}>
              <div className="card-tex" />
              <div className="card-foil" />
              <div className="card-sheen" />
              <div className="card-body" style={{ padding: '10px 12px' }}>
                <div className="card-row">
                  <span className="card-word">
                    <Image className="cw-dark" src="/media/logo-white.png" alt="Coincashy" width={1217} height={157} />
                    <Image className="cw-light" src="/media/logo-black.png" alt="" width={1217} height={157} />
                  </span>
                  <span className="card-type" style={{ fontSize: '0.55rem' }}>PHYSICAL</span>
                </div>
                <div className="card-mid">
                  <span className="card-chip" style={{ width: '22px', height: '16px' }} />
                  <svg className="ic card-nfc" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                    <use href="#i-nfc" />
                  </svg>
                </div>
                <div className="card-num" style={{ fontSize: '0.66rem', letterSpacing: '0.1em' }}>
                  •••• •••• •••• 2049
                </div>
                <div className="card-foot" style={{ fontSize: '0.56rem' }}>
                  <span>Your name</span>
                  <span>09/29</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="h3" style={{ fontSize: '1.45rem', marginBottom: '8px', fontWeight: 650 }}>Spend with card</h3>
        <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.88rem', lineHeight: 1.5, minHeight: '44px', margin: 0 }}>
          Use a partner-enabled virtual or physical card for eligible everyday purchases.
        </p>
        <Link className="link-arrow" href="/cards" style={{ marginTop: 'auto', paddingTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--fg)' }}>
          Explore the card
          <svg className="ic" aria-hidden="true" style={{ width: '15px', height: '15px', transition: 'transform 0.2s ease' }}><use href="#i-arrow-right" /></svg>
        </Link>
      </article>
    </div>
  );
}
