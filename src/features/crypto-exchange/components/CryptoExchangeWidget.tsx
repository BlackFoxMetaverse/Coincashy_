"use client";
import React from 'react';
import { useOrderWidget, PaymentMethod } from '../hooks/useOrderWidget';
import { FIAT_RATES, CRYPTO_RATES, Currency, OrderCalculator } from '../domain/OrderCalculator';

export default function CryptoExchangeWidget() {
  const {
    mode, from, to, fromAmt, toAmt, method, isReview, timeLeft, rateText,
    setFrom, setTo, setFromAmt, setToAmt, setSide, setMethod, setIsReview,
    handleModeChange, handleSwap,
    fromOptions, toOptions
  } = useOrderWidget();

  const getChipUI = (c: Currency) => {
    if (OrderCalculator.isFiat(c)) {
      return { cls: 'fiat', glyph: FIAT_RATES[c].sym };
    }
    return { cls: CRYPTO_RATES[c as keyof typeof CRYPTO_RATES].cls, glyph: CRYPTO_RATES[c as keyof typeof CRYPTO_RATES].glyph };
  };

  const fromChipUI = getChipUI(from);
  const toChipUI = getChipUI(to);

  return (
    <div className="widget scope-dark scope-dark" id="widget" role="group" aria-label="Buy, sell or convert crypto" suppressHydrationWarning>
      {!isReview ? (
        <div id="w-form">
          <div className="w-head">
            <div className="seg" role="radiogroup" aria-label="Order type" id="w-modes">
              <button type="button" role="radio" aria-checked={mode === 'buy'} onClick={() => handleModeChange('buy')}>Buy</button>
              <button type="button" role="radio" aria-checked={mode === 'sell'} onClick={() => handleModeChange('sell')} tabIndex={mode === 'sell' ? 0 : -1}>Sell</button>
              <button type="button" role="radio" aria-checked={mode === 'convert'} onClick={() => handleModeChange('convert')} tabIndex={mode === 'convert' ? 0 : -1}>Convert</button>
            </div>
            <div className="w-timer">
              <svg className="w-ring" viewBox="0 0 22 22" aria-hidden="true">
                <circle className="bg" cx={11} cy={11} r={9} />
                <circle className="fg" id="w-ring" cx={11} cy={11} r={9} style={{ strokeDashoffset: (2 * Math.PI * 9 * (1 - timeLeft / 30)).toFixed(2) }} />
              </svg>
              <span><span className="sr-only">Quote refreshes in </span><span id="w-timer-txt">00:{String(timeLeft).padStart(2, '0')}</span></span>
            </div>
          </div>
          
          <div className="w-stack">
            <div className="w-box">
              <label htmlFor="w-from" id="w-from-label">{mode === 'buy' ? 'You spend' : mode === 'sell' ? 'You sell' : 'You convert'}</label>
              <div className="w-row">
                <input className="w-input" id="w-from" inputMode="decimal" autoComplete="off" value={fromAmt} onChange={(e) => { setFromAmt(e.target.value); setSide('from'); }} />
                <span className="asset" id="w-from-chip">
                  <span className={`coin ${fromChipUI.cls}`}>{fromChipUI.glyph}</span>
                  <span className="code scope-dark scope-dark">{from}</span>
                  <svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg>
                  <select id="w-from-asset" aria-label={mode === 'buy' ? 'Currency you spend' : `Asset you ${mode === 'sell' ? 'sell' : 'convert'}`} value={from} onChange={(e) => setFrom(e.target.value as Currency)}>
                    {fromOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </span>
              </div>
            </div>
            <div className="w-swapwrap">
              <button className="w-swap" id="w-swap" type="button" aria-label="Switch direction" onClick={handleSwap}>
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-down-up" /></svg>
              </button>
            </div>
            <div className="w-box">
              <label htmlFor="w-to">You receive</label>
              <div className="w-row">
                <input className="w-input" id="w-to" inputMode="decimal" autoComplete="off" value={toAmt} onChange={(e) => { setToAmt(e.target.value); setSide('to'); }} />
                <span className="asset" id="w-to-chip">
                  <span className={`coin ${toChipUI.cls}`}>{toChipUI.glyph}</span>
                  <span className="code scope-dark scope-dark">{to}</span>
                  <svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg>
                  <select id="w-to-asset" aria-label={mode === 'sell' ? 'Currency you receive' : 'Asset you receive'} value={to} onChange={(e) => setTo(e.target.value as Currency)}>
                    {toOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </span>
              </div>
            </div>
          </div>

          <div className="w-methods" id="w-methods" role="radiogroup" aria-label="Payment method" hidden={mode !== 'buy'}>
            {['Card', 'Apple Pay', 'Google Pay', 'Bank transfer'].map((m) => (
              <button key={m} type="button" className="w-method" role="radio" aria-checked={method === m} onClick={() => setMethod(m as PaymentMethod)} tabIndex={method === m ? 0 : -1}>{m}</button>
            ))}
          </div>

          <div className="w-dest" id="w-dest" hidden={mode === 'buy'}>
            <svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>
            <span id="w-dest-txt">{mode === 'sell' ? 'Payout to your bank account' : 'Converted inside your Coincashy wallet'}</span>
          </div>

          <div className="w-rate" id="w-rate">
            <span>Indicative rate <b id="w-rate-txt">{rateText}</b></span>
            <span>Fees are included in the quote</span>
          </div>

          <button className="btn btn-solid btn-block w-go" id="w-go" type="button" onClick={() => setIsReview(true)}>
            {mode === 'buy' ? `Buy ${to}` : mode === 'sell' ? `Sell ${from}` : `Convert to ${to}`}
          </button>
        </div>
      ) : (
        <div className="w-review" id="w-review">
          <h3 id="wr-title" tabIndex={-1}>Review your order</h3>
          <dl className="wr-list">
            <div><dt id="wr-l1">{mode === 'buy' ? 'You spend' : mode === 'sell' ? 'You sell' : 'You convert'}</dt><dd id="wr-v1">{OrderCalculator.formatMoney(from, parseFloat(fromAmt) || 0)}</dd></div>
            <div><dt>You receive</dt><dd id="wr-v2">≈ {OrderCalculator.formatMoney(to, parseFloat(toAmt) || 0)}</dd></div>
            <div><dt id="wr-l3">{mode === 'buy' ? 'Paid with' : mode === 'sell' ? 'Paid to' : 'Held in'}</dt><dd id="wr-v3">{mode === 'buy' ? method : mode === 'sell' ? 'Your bank account' : 'Your Coincashy wallet'}</dd></div>
            <div><dt>Quote</dt><dd>Fees included</dd></div>
          </dl>
          <ol className="wr-steps" aria-label="Order progress"><li className="done">Choose</li><li className="now">Pay</li><li>Verify</li><li>Receive</li></ol>
          <p className="w-note">Identity and payment checks are required before your first order. The exact steps depend on your country and the product you choose.</p>
          <div className="cta-row">
            <a className="btn btn-solid" href="https://coincashy.io" target="_blank" rel="noopener">Continue on Coincashy.io<svg className="ic" aria-hidden="true"><use href="#i-external-link" /></svg></a>
            <button className="btn btn-line" type="button" id="wr-back" onClick={() => setIsReview(false)}>Edit order</button>
          </div>
        </div>
      )}
    </div>
  );
}
