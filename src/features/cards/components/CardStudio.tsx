'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

type CardFinish = 'vault' | 'sky' | 'paper';
type CardNetwork = 'visa' | 'mastercard';

export default function CardStudio() {
  const [finish, setFinish] = useState<CardFinish>('vault');
  const [isPhysical, setIsPhysical] = useState<boolean>(false);
  const [network, setNetwork] = useState<CardNetwork>('visa');
  const [cardholderName, setCardholderName] = useState<string>('ALEXANDER VANCE');
  const [isFrozen, setIsFrozen] = useState<boolean>(false);
  const [onlinePayments, setOnlinePayments] = useState<boolean>(true);
  const [contactless, setContactless] = useState<boolean>(true);
  const [atmWithdrawals, setAtmWithdrawals] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(3500);

  // Modal / Order state
  const [showOrderModal, setShowOrderModal] = useState<boolean>(false);
  const [orderEmail, setOrderEmail] = useState<string>('');
  const [orderStatus, setOrderStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // 3D Gyroscopic tilt container ref
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const px = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const py = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!tiltRef.current) return;
      const rx = ((0.5 - py) * 22).toFixed(2);
      const ry = ((px - 0.5) * 26).toFixed(2);
      const mx = (px * 100).toFixed(1);
      const my = (py * 100).toFixed(1);

      tiltRef.current.style.setProperty('--rx', `${rx}deg`);
      tiltRef.current.style.setProperty('--ry', `${ry}deg`);
      tiltRef.current.style.setProperty('--mx', `${mx}%`);
      tiltRef.current.style.setProperty('--my', `${my}%`);
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!tiltRef.current) return;
    tiltRef.current.style.setProperty('--rx', '0deg');
    tiltRef.current.style.setProperty('--ry', '0deg');
    tiltRef.current.style.setProperty('--mx', '30%');
    tiltRef.current.style.setProperty('--my', '20%');
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderEmail || !orderEmail.includes('@')) return;
    setOrderStatus('loading');
    setTimeout(() => {
      setOrderStatus('success');
    }, 900);
  };

  const displayName = cardholderName.trim().toUpperCase() || 'YOUR NAME';

  return (
    <div className="card-studio-wrapper" id="card-studio">
      <div className="card-studio-grid">
        {/* Left Column: Interactive 3D Card Display */}
        <div className="card-display-column">
          <div className="card-preview-header">
            <span className="live-badge">
              <span className="live-dot" /> LIVE 3D PREVIEW
            </span>
            <span className="spec-label">
              {isPhysical ? '18g Laser-Etched Metal' : 'Instant Virtual Provisioning'}
            </span>
          </div>

          <div
            className="card-stage-container"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div
              ref={tiltRef}
              className="card-tilt studio-tilt"
              style={{
                width: 'min(100%, 460px)',
                aspectRatio: '1.586',
                margin: '0 auto',
              }}
            >
              <div
                className={`card finish-${finish} ${isPhysical ? 'is-physical' : ''} ${
                  isFrozen ? 'is-frozen' : ''
                } ${!contactless ? 'no-nfc' : ''}`}
                style={{
                  transition: 'transform 0.15s ease-out, box-shadow 0.4s ease',
                }}
              >
                <div className="card-tex" />
                <div className="card-foil" />
                <div className="card-sheen" />

                <div className="card-body">
                  {/* Card Header */}
                  <div className="card-row">
                    <span className="card-word">
                      <Image
                        className="cw-dark"
                        src="/media/logo-white.png"
                        alt="Coincashy"
                        width={1217}
                        height={157}
                        priority
                      />
                      <Image
                        className="cw-light"
                        src="/media/logo-black.png"
                        alt="Coincashy"
                        width={1217}
                        height={157}
                        priority
                      />
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="card-type">
                        {isPhysical ? 'PHYSICAL METAL' : 'VIRTUAL INSTANT'}
                      </span>
                      {network === 'visa' ? (
                        <svg
                          className="ic"
                          style={{ width: '38px', height: '20px', fill: 'currentColor' }}
                          aria-label="Visa"
                        >
                          <use href="#b-visa" />
                        </svg>
                      ) : (
                        <svg
                          className="ic"
                          style={{ width: '28px', height: '20px', fill: 'currentColor' }}
                          aria-label="Mastercard"
                        >
                          <use href="#b-mastercard" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Card Middle: Chip & Contactless */}
                  <div className="card-mid">
                    <span className="card-chip" title="EMV Smart Chip" />
                    <svg
                      className="ic card-nfc"
                      aria-hidden="true"
                    >
                      <use href="#i-nfc" />
                    </svg>
                  </div>

                  {/* Card Number */}
                  <div className="card-num" style={{ letterSpacing: '0.16em' }}>
                    •••• •••• •••• 8842
                  </div>

                  {/* Card Footer: Name & Date */}
                  <div className="card-foot">
                    <span>
                      <small>Cardholder</small>
                      <span style={{ display: 'block', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {displayName}
                      </span>
                    </span>
                    <span style={{ textAlign: 'right' }}>
                      <small>Valid thru</small>
                      09/31
                    </span>
                  </div>
                </div>

                {/* Frosted Glass Frozen Overlay */}
                <div className="card-frost">
                  <span>
                    <svg className="ic" aria-hidden="true">
                      <use href="#i-snowflake" />
                    </svg>
                    Card Temporarily Frozen
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Perks Strip */}
          <div className="studio-perks-strip">
            <div className="perk-pill">
              <svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>
              <span>Sub-150ms POS Settlement</span>
            </div>
            <div className="perk-pill">
              <svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>
              <span>0% Foreign FX Markups</span>
            </div>
            <div className="perk-pill">
              <svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>
              <span>Apple Pay &amp; Google Pay</span>
            </div>
            <div className="perk-pill">
              <svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>
              <span>Biometric 3D-Secure</span>
            </div>
          </div>

          {/* Real-time Frozen Status Banner */}
          {isFrozen && (
            <div className="lab-banner" style={{ marginTop: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.25)', color: '#f87171' }}>
              <svg className="ic" aria-hidden="true"><use href="#i-snowflake" /></svg>
              <span>Card is currently frozen. All inbound authorizations will be declined until unfrozen.</span>
            </div>
          )}

          {/* Spending Allocation Meter */}
          <div className="spending-meter-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--fg-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Monthly Spending Envelope
              </span>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.9rem', color: 'var(--hi)' }}>
                {formatCurrency(limit)} / mo
              </span>
            </div>
            <div style={{ height: '6px', borderRadius: '99px', background: 'var(--line-2)', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${Math.min(100, Math.max(10, (limit / 15000) * 100))}%`,
                  background: 'linear-gradient(90deg, var(--jade), var(--brass))',
                  borderRadius: '99px',
                  transition: 'width 0.2s ease',
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.78rem', color: 'var(--fg-faint)' }}>
              <span>Daily allowance: ~{formatCurrency(Math.round(limit / 30))}</span>
              <span>Self-custody liquidation threshold</span>
            </div>
          </div>
        </div>

        {/* Right Column: Customization & Security Controls */}
        <div className="card-controls-column">
          <div className="controls-card">
            <div className="control-section-header">
              <h3 className="h3" style={{ fontSize: '1.4rem', margin: 0 }}>Configure Your Card</h3>
              <p className="body" style={{ color: 'var(--low)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                Personalize card material, cardholder embossing, and real-time security rules.
              </p>
            </div>

            {/* Finish Picker */}
            <div className="lab-group" style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="lab-lbl">Card Material &amp; Finish</span>
                <span className="sw-name" style={{ fontWeight: 600, color: 'var(--hi)' }}>
                  {finish === 'vault' ? 'Obsidian Vault' : finish === 'sky' ? 'Cobalt Sky' : 'Titanium Paper'}
                </span>
              </div>
              <div className="finish-selector-row">
                <button
                  type="button"
                  onClick={() => setFinish('vault')}
                  className={`finish-option-btn ${finish === 'vault' ? 'is-selected' : ''}`}
                  aria-label="Obsidian Vault"
                >
                  <span className="swatch sw-vault" />
                  <div className="finish-meta">
                    <b>Vault</b>
                    <small>Obsidian Matte</small>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFinish('sky')}
                  className={`finish-option-btn ${finish === 'sky' ? 'is-selected' : ''}`}
                  aria-label="Cobalt Sky"
                >
                  <span className="swatch sw-sky" />
                  <div className="finish-meta">
                    <b>Sky</b>
                    <small>Electric Cobalt</small>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFinish('paper')}
                  className={`finish-option-btn ${finish === 'paper' ? 'is-selected' : ''}`}
                  aria-label="Titanium Paper"
                >
                  <span className="swatch sw-paper" />
                  <div className="finish-meta">
                    <b>Paper</b>
                    <small>Minimal Titanium</small>
                  </div>
                </button>
              </div>
            </div>

            {/* Format: Virtual vs Physical */}
            <div className="lab-group" style={{ marginTop: '1.25rem' }}>
              <span className="lab-lbl">Card Form Factor</span>
              <div className="format-toggle-grid">
                <button
                  type="button"
                  onClick={() => setIsPhysical(false)}
                  className={`format-card-btn ${!isPhysical ? 'is-active' : ''}`}
                >
                  <div className="format-card-top">
                    <span className="format-title">Virtual Instant</span>
                    <span className="format-price">Free</span>
                  </div>
                  <p className="format-desc">Ready in 60s for Apple Pay, Google Pay &amp; online checkouts.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setIsPhysical(true)}
                  className={`format-card-btn ${isPhysical ? 'is-active' : ''}`}
                >
                  <div className="format-card-top">
                    <span className="format-title">Physical Metal</span>
                    <span className="format-price">€29</span>
                  </div>
                  <p className="format-desc">18g laser-etched tungsten core with worldwide ATM access.</p>
                </button>
              </div>
            </div>

            {/* Network Selector */}
            <div className="lab-group" style={{ marginTop: '1.25rem' }}>
              <span className="lab-lbl">Payment Network</span>
              <div className="network-row">
                <button
                  type="button"
                  onClick={() => setNetwork('visa')}
                  className={`network-btn ${network === 'visa' ? 'is-active' : ''}`}
                >
                  <svg className="ic" style={{ width: '42px', height: '22px', fill: 'currentColor' }}><use href="#b-visa" /></svg>
                  <span>Visa Infinite Global</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNetwork('mastercard')}
                  className={`network-btn ${network === 'mastercard' ? 'is-active' : ''}`}
                >
                  <svg className="ic" style={{ width: '32px', height: '22px', fill: 'currentColor' }}><use href="#b-mastercard" /></svg>
                  <span>Mastercard World Elite</span>
                </button>
              </div>
            </div>

            {/* Cardholder Name Customization */}
            <div className="lab-group" style={{ marginTop: '1.25rem' }}>
              <label className="lab-lbl" htmlFor="cardholder-name-input">
                Embossed Name on Card
              </label>
              <div className="custom-input-box">
                <input
                  id="cardholder-name-input"
                  type="text"
                  maxLength={24}
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                  placeholder="E.G. ALEXANDER VANCE"
                  className="input"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--f-mono)' }}
                />
                <span className="char-count">{cardholderName.length}/24</span>
              </div>
            </div>

            {/* Security Switches */}
            <div className="lab-group" style={{ marginTop: '1.25rem' }}>
              <span className="lab-lbl">Granular Controls &amp; Security</span>
              <div className="switches-container">
                <div className="switch-row">
                  <span>
                    <b>Instant Freeze / Unfreeze</b>
                    <small>Temporarily lock authorizations in real time</small>
                  </span>
                  <button
                    type="button"
                    className="switch"
                    role="switch"
                    aria-checked={isFrozen}
                    onClick={() => setIsFrozen(!isFrozen)}
                  />
                </div>

                <div className="switch-row">
                  <span>
                    <b>Online E-Commerce Payments</b>
                    <small>3D-Secure 2.0 biometric mobile authorization</small>
                  </span>
                  <button
                    type="button"
                    className="switch"
                    role="switch"
                    aria-checked={onlinePayments}
                    onClick={() => setOnlinePayments(!onlinePayments)}
                  />
                </div>

                <div className="switch-row">
                  <span>
                    <b>Contactless NFC Payments</b>
                    <small>Tap-to-pay at physical point of sale</small>
                  </span>
                  <button
                    type="button"
                    className="switch"
                    role="switch"
                    aria-checked={contactless}
                    onClick={() => setContactless(!contactless)}
                  />
                </div>

                <div className="switch-row">
                  <span>
                    <b>Worldwide ATM Cash Access</b>
                    <small>Allow cash withdrawals with zero dynamic currency conversion</small>
                  </span>
                  <button
                    type="button"
                    className="switch"
                    role="switch"
                    aria-checked={atmWithdrawals}
                    onClick={() => setAtmWithdrawals(!atmWithdrawals)}
                  />
                </div>
              </div>
            </div>

            {/* Limit Slider */}
            <div className="lab-group" style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label className="lab-lbl" htmlFor="spending-limit-range">
                  Monthly Spending Cap
                </label>
                <output htmlFor="spending-limit-range" style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, color: 'var(--hi)' }}>
                  {formatCurrency(limit)}
                </output>
              </div>
              <input
                id="spending-limit-range"
                type="range"
                min={200}
                max={15000}
                step={100}
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--jade)', marginTop: '8px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--fg-faint)', marginTop: '4px' }}>
                <span>€200</span>
                <span>€7,500</span>
                <span>€15,000</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div style={{ marginTop: '1.75rem' }}>
              <button
                type="button"
                className="btn btn-solid btn-block"
                style={{ height: '48px', fontSize: '1rem', justifyContent: 'center' }}
                onClick={() => setShowOrderModal(true)}
              >
                <span>{isPhysical ? 'Order Physical Metal Card (€29)' : 'Issue Instant Virtual Card (Free)'}</span>
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--fg-faint)', marginTop: '8px' }}>
                Instant KYC approval with passport or national ID • Zero recurring maintenance fees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order / Application Modal */}
      {showOrderModal && (
        <div className="modal-backdrop" onClick={() => setShowOrderModal(false)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowOrderModal(false)}
              aria-label="Close modal"
            >
              <svg className="ic" aria-hidden="true"><use href="#i-x" /></svg>
            </button>

            {orderStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', display: 'grid', placeItems: 'center', margin: '0 auto 1.25rem' }}>
                  <svg className="ic" style={{ width: '28px', height: '28px' }}><use href="#i-check" /></svg>
                </div>
                <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Card Reserved Successfully</h3>
                <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  We sent a confirmation link and identity verification instructions to <strong>{orderEmail}</strong>. Your {finish.toUpperCase()} finish {isPhysical ? 'Physical Metal' : 'Virtual'} card is reserved.
                </p>
                <div style={{ padding: '1rem', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--fg-faint)' }}>Cardholder</span>
                    <span style={{ fontWeight: 600 }}>{displayName}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--fg-faint)' }}>Form Factor</span>
                    <span style={{ fontWeight: 600 }}>{isPhysical ? 'Physical Metal (18g)' : 'Virtual Card'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--fg-faint)' }}>Network</span>
                    <span style={{ fontWeight: 600 }}>{network === 'visa' ? 'Visa Infinite' : 'Mastercard World Elite'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--fg-faint)' }}>Monthly Limit</span>
                    <span style={{ fontWeight: 600 }}>{formatCurrency(limit)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-solid btn-block"
                  onClick={() => {
                    setShowOrderModal(false);
                    setOrderStatus('idle');
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)' }}>
                    <svg className="ic"><use href="#i-credit-card" /></svg>
                  </div>
                  <div>
                    <h3 className="h3" style={{ fontSize: '1.25rem', margin: 0 }}>
                      {isPhysical ? 'Order Physical Metal Card' : 'Activate Instant Virtual Card'}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--fg-faint)' }}>
                      Finish: <span style={{ textTransform: 'capitalize', color: 'var(--hi)' }}>{finish}</span> • Name: {displayName}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleOrderSubmit}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label className="lab-lbl" htmlFor="modal-email-input" style={{ marginBottom: '6px', display: 'block' }}>
                      Email Address for KYC &amp; Card Delivery
                    </label>
                    <input
                      id="modal-email-input"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      className="input"
                      style={{ width: '100%' }}
                    />
                  </div>

                  <div style={{ padding: '0.85rem 1rem', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', marginBottom: '1.25rem', fontSize: '0.82rem', color: 'var(--fg-dim)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <svg className="ic" style={{ width: '15px', height: '15px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                      <span>No credit checks or bank account requirements</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <svg className="ic" style={{ width: '15px', height: '15px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                      <span>Direct connection to USDT, USDC, BTC, ETH balances</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg className="ic" style={{ width: '15px', height: '15px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                      <span>Apple Pay &amp; Google Pay credentials issued in 60s</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={orderStatus === 'loading'}
                    className="btn btn-solid btn-block"
                    style={{ height: '46px', justifyContent: 'center' }}
                  >
                    {orderStatus === 'loading' ? 'Reserving...' : isPhysical ? 'Continue to Shipping Address (€29)' : 'Confirm & Generate Virtual Card (Free)'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dedicated Card Studio Styles scoped */}
      <style jsx>{`
        .card-studio-wrapper {
          width: 100%;
          position: relative;
        }
        .card-studio-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: clamp(28px, 4vw, 56px);
          align-items: start;
        }
        @media (max-width: 980px) {
          .card-studio-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        .card-display-column {
          position: sticky;
          top: 96px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 980px) {
          .card-display-column {
            position: relative;
            top: auto;
          }
        }
        .card-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-radius: 99px;
          background: var(--surface);
          border: 1px solid var(--line);
        }
        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--f-label);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          font-weight: 600;
          color: var(--jade);
        }
        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--jade);
          box-shadow: 0 0 8px var(--jade);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .spec-label {
          font-size: 0.78rem;
          color: var(--fg-dim);
        }
        .card-stage-container {
          position: relative;
          display: grid;
          place-items: center;
          padding: clamp(24px, 5vw, 64px) 16px;
          border-radius: 28px;
          background: radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 68%), var(--surface);
          border: 1px solid var(--line);
          cursor: grab;
          user-select: none;
        }
        .studio-perks-strip {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        @media (max-width: 480px) {
          .studio-perks-strip {
            grid-template-columns: 1fr;
          }
        }
        .perk-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--line);
          font-size: 0.82rem;
          color: var(--fg-dim);
          font-weight: 500;
        }
        .perk-pill .ic {
          width: 14px;
          height: 14px;
          color: var(--jade);
          flex-shrink: 0;
        }
        .spending-meter-box {
          padding: 16px 20px;
          border-radius: 18px;
          background: var(--surface);
          border: 1px solid var(--line);
        }
        .controls-card {
          padding: clamp(20px, 3.5vw, 32px);
          border-radius: 28px;
          background: var(--surface);
          border: 1px solid var(--line);
          box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
        }
        .finish-selector-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 6px;
        }
        .finish-option-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          background: var(--surface-2);
          border: 1.5px solid var(--line);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .finish-option-btn:hover {
          border-color: var(--line-2);
          transform: translateY(-1px);
        }
        .finish-option-btn.is-selected {
          border-color: var(--fg);
          background: color-mix(in srgb, var(--surface-2) 80%, var(--jade) 20%);
        }
        .finish-meta b {
          display: block;
          font-size: 0.85rem;
          color: var(--fg);
          line-height: 1.2;
        }
        .finish-meta small {
          display: block;
          font-size: 0.72rem;
          color: var(--fg-faint);
        }
        .format-toggle-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 6px;
        }
        .format-card-btn {
          padding: 14px;
          border-radius: 16px;
          background: var(--surface-2);
          border: 1.5px solid var(--line);
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }
        .format-card-btn:hover {
          border-color: var(--line-2);
        }
        .format-card-btn.is-active {
          border-color: var(--fg);
          background: color-mix(in srgb, var(--surface-2) 85%, var(--brass) 15%);
        }
        .format-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .format-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--fg);
        }
        .format-price {
          font-family: var(--f-mono);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--jade);
          padding: 2px 8px;
          border-radius: 99px;
          background: var(--surface);
          border: 1px solid var(--line);
        }
        .format-desc {
          margin: 0;
          font-size: 0.78rem;
          color: var(--fg-faint);
          line-height: 1.4;
        }
        .network-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 6px;
        }
        .network-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 14px;
          background: var(--surface-2);
          border: 1.5px solid var(--line);
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--fg);
          transition: all 0.2s ease;
        }
        .network-btn.is-active {
          border-color: var(--fg);
          background: var(--surface);
        }
        .custom-input-box {
          position: relative;
          margin-top: 6px;
        }
        .char-count {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.75rem;
          color: var(--fg-faint);
          pointer-events: none;
        }
        .switches-container {
          background: var(--surface-2);
          border-radius: 16px;
          padding: 6px 16px;
          border: 1px solid var(--line);
          margin-top: 6px;
        }
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: grid;
          place-items: center;
          padding: 20px;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }
        .modal-card {
          width: min(100%, 480px);
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: clamp(24px, 4vw, 36px);
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.8);
          animation: slideUp 0.25s ease;
        }
        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--surface-2);
          border: 1px solid var(--line);
          display: grid;
          place-items: center;
          color: var(--fg-dim);
          cursor: pointer;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
