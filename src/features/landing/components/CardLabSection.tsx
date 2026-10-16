"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FinishType = 'vault' | 'sky' | 'paper';
type FormatType = 'virtual' | 'physical';

export default function CardLabSection() {
  const [format, setFormat] = useState<FormatType>('virtual');
  const [finish, setFinish] = useState<FinishType>('vault');
  const [isFrozen, setIsFrozen] = useState<boolean>(false);
  const [onlineEnabled, setOnlineEnabled] = useState<boolean>(true);
  const [contactlessEnabled, setContactlessEnabled] = useState<boolean>(true);
  const [spendingLimit, setSpendingLimit] = useState<number>(1500);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    const ry = ((px - 0.5) * 20).toFixed(2);
    const rx = ((0.5 - py) * 16).toFixed(2);

    cardRef.current.style.setProperty('--ry', `${ry}deg`);
    cardRef.current.style.setProperty('--rx', `${rx}deg`);
    cardRef.current.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rx', '0deg');
    cardRef.current.style.setProperty('--ry', '0deg');
    cardRef.current.style.setProperty('--mx', '30%');
    cardRef.current.style.setProperty('--my', '20%');
  };

  const finishNames: Record<FinishType, string> = {
    vault: 'Vault',
    sky: 'Sky',
    paper: 'Paper',
  };

  return (
    <div className="lab-grid" id="card-lab">
      <div>
        <div
          className="lab-stage"
          data-tilt
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={cardRef}
        >
          <div className="card-tilt">
            <div
              className={`card finish-${finish} ${format === 'physical' ? 'is-physical' : ''} ${
                isFrozen ? 'is-frozen' : ''
              } ${!contactlessEnabled ? 'no-nfc' : ''}`}
              id="lab-card"
            >
              <div className="card-tex" />
              <div className="card-foil" />
              <div className="card-sheen" />
              <div className="card-body">
                <div className="card-row">
                  <span className="card-word">
                    <Image
                      className="cw-dark"
                      src="/media/logo-white.png"
                      alt="Coincashy"
                      width={1217}
                      height={157}
                    />
                    <Image
                      className="cw-light"
                      src="/media/logo-black.png"
                      alt=""
                      width={1217}
                      height={157}
                    />
                  </span>
                  <span className="card-type" id="lab-type">
                    {format === 'physical' ? 'PHYSICAL' : 'VIRTUAL'}
                  </span>
                </div>
                <div className="card-mid">
                  <span className="card-chip" />
                  <svg className="ic card-nfc" aria-hidden="true">
                    <use href="#i-nfc" />
                  </svg>
                </div>
                <div className="card-num">•••• •••• •••• 2049</div>
                <div className="card-foot">
                  <span>
                    <small>Cardholder</small>Your name
                  </span>
                  <span>
                    <small>Valid thru</small>09/29
                  </span>
                </div>
              </div>
              <div className="card-frost" style={{ opacity: isFrozen ? 1 : 0, pointerEvents: isFrozen ? 'auto' : 'none' }}>
                <span>
                  <svg className="ic" aria-hidden="true">
                    <use href="#i-snowflake" />
                  </svg>
                  Card frozen
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul className="lab-feats">
          <li>
            <svg className="ic" aria-hidden="true">
              <use href="#i-layers" />
            </svg>
            Virtual and physical card options
          </li>
          <li>
            <svg className="ic" aria-hidden="true">
              <use href="#i-eye" />
            </svg>
            Transaction and balance visibility
          </li>
          <li>
            <svg className="ic" aria-hidden="true">
              <use href="#i-nfc" />
            </svg>
            Contactless and online spending
          </li>
          <li>
            <svg className="ic" aria-hidden="true">
              <use href="#i-gauge" />
            </svg>
            Personal spending controls
          </li>
        </ul>
      </div>

      <div className="lab-panel">
        <div className="lab-group">
          <span className="lab-lbl" id="lbl-format">Format</span>
          <div className="seg" role="radiogroup" aria-labelledby="lbl-format" id="lab-format">
            <button
              type="button"
              role="radio"
              aria-checked={format === 'virtual'}
              className={format === 'virtual' ? 'is-active' : ''}
              onClick={() => setFormat('virtual')}
            >
              Virtual
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={format === 'physical'}
              className={format === 'physical' ? 'is-active' : ''}
              onClick={() => setFormat('physical')}
            >
              Physical
            </button>
          </div>
        </div>

        <div className="lab-group">
          <span className="lab-lbl" id="lbl-finish">Finish</span>
          <div className="swatches" role="radiogroup" aria-labelledby="lbl-finish" id="lab-finish">
            <button
              type="button"
              className={`swatch sw-vault ${finish === 'vault' ? 'is-active' : ''}`}
              role="radio"
              aria-checked={finish === 'vault'}
              aria-label="Vault"
              onClick={() => setFinish('vault')}
            />
            <button
              type="button"
              className={`swatch sw-sky ${finish === 'sky' ? 'is-active' : ''}`}
              role="radio"
              aria-checked={finish === 'sky'}
              aria-label="Sky"
              onClick={() => setFinish('sky')}
            />
            <button
              type="button"
              className={`swatch sw-paper ${finish === 'paper' ? 'is-active' : ''}`}
              role="radio"
              aria-checked={finish === 'paper'}
              aria-label="Paper"
              onClick={() => setFinish('paper')}
            />
            <span className="sw-name" id="lab-finish-name">
              {finishNames[finish]}
            </span>
          </div>
        </div>

        <div className="lab-group">
          <span className="lab-lbl">Controls</span>
          <div>
            <div className="switch-row">
              <span>
                <b id="sw-freeze-l">Freeze card</b>
                <small>Pause new payments straight away</small>
              </span>
              <button
                type="button"
                className="switch"
                id="sw-freeze"
                role="switch"
                aria-checked={isFrozen}
                aria-labelledby="sw-freeze-l"
                onClick={() => setIsFrozen((prev) => !prev)}
              />
            </div>
            <div className="switch-row">
              <span>
                <b id="sw-online-l">Online payments</b>
                <small>Shop on websites and in apps</small>
              </span>
              <button
                type="button"
                className="switch"
                id="sw-online"
                role="switch"
                aria-checked={onlineEnabled}
                aria-labelledby="sw-online-l"
                onClick={() => setOnlineEnabled((prev) => !prev)}
              />
            </div>
            <div className="switch-row">
              <span>
                <b id="sw-nfc-l">Contactless</b>
                <small>Tap to pay in store</small>
              </span>
              <button
                type="button"
                className="switch"
                id="sw-nfc"
                role="switch"
                aria-checked={contactlessEnabled}
                aria-labelledby="sw-nfc-l"
                onClick={() => setContactlessEnabled((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        <div className="range-row">
          <div className="top">
            <label className="lab-lbl" htmlFor="lab-limit">Monthly spending limit</label>
            <output id="lab-limit-out" htmlFor="lab-limit">€{spendingLimit.toLocaleString()}</output>
          </div>
          <input
            type="range"
            id="lab-limit"
            min={100}
            max={5000}
            step={100}
            value={spendingLimit}
            onChange={(e) => setSpendingLimit(Number(e.target.value))}
          />
        </div>

        {isFrozen && (
          <div className="lab-banner" id="lab-banner">
            <svg className="ic" aria-hidden="true">
              <use href="#i-snowflake" />
            </svg>
            <span>Your card is frozen. New payments are declined until you unfreeze it.</span>
          </div>
        )}

        <div style={{ marginTop: '1rem' }}>
          <Link className="btn btn-solid btn-block" href="/cards" style={{ justifyContent: 'center' }}>
            Open Full Card Studio
            <svg className="ic" aria-hidden="true">
              <use href="#i-arrow-right" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
