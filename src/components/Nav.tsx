"use client";

import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileOpen]);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <header className={"nav" + (isMobileOpen ? " menu-open" : "") + (isScrolled ? " is-scrolled" : "")} id="nav">
        <div id="top-ticker" className="top-ticker">
          <div className="ticker-inner">
            <div className="ticker-logo">
              <span>TOKEN2049</span>
              <span className="ticker-logo-sub">SINGAPORE</span>
            </div>
            <span className="ticker-text">See you at the event &middot; <strong>7-8 October</strong>, Singapore <a href="https://token2049.com/singapore" target="_blank" rel="noopener" className="ticker-link">Meet us there ↗</a></span>
          </div>
          <button className="ticker-close" data-close-ticker aria-label="Close banner">
            <svg className="ic"><use href="#i-x" /></svg>
          </button>
        </div>
        <div className="nav-bar">
          <a className="brand" href="/#home" aria-label="Coincashy home" onClick={closeMobile}>
            <img className="brand-logo logo-on-dark" src="media/logo-white.png" alt="Coincashy" /><img className="brand-logo logo-on-paper" src="media/logo-black.png" alt="" />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <div className="nav-item has-menu">
              <a className="nav-link" href="/#personal" data-nav="personal">Personal<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></a>
              <div className="menu">
                <div className="menu-grid cols-2">
                  <a className="menu-item" href="/#buy"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-arrow-down-left" /></svg></span><span><b>Buy crypto</b></span></a>
                  <a className="menu-item" href="/#sell"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-arrow-up-right" /></svg></span><span><b>Sell crypto</b></span></a>
                  <a className="menu-item" href="/#convert"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><span><b>Convert crypto</b></span></a>
                  <a className="menu-item" href="/#card"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span><span><b>Personal crypto card</b></span></a>
                </div>
                <a className="menu-foot" href="/#how">How it works, in four steps<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
              </div>
            </div>
            <div className="nav-item has-menu">
              <a className="nav-link" href="/#business" data-nav="business">Business<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></a>
              <div className="menu menu-wide">
                <div className="menu-grid cols-2">
                  <a className="menu-item" href="/#processing"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-qr-code" /></svg></span><span><b>Crypto processing</b></span></a>
                  <a className="menu-item" href="/#otc"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-chart-candlestick" /></svg></span><span><b>OTC &amp; liquidity</b></span></a>
                  <a className="menu-item" href="/#ramp"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-arrow-left-right" /></svg></span><span><b>On/off-ramp</b></span></a>
                  <a className="menu-item" href="/#vibans"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><span><b>vIBANs</b></span></a>
                  <a className="menu-item" href="/#wallets"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg></span><span><b>Wallet as a Service</b></span></a>
                  <a className="menu-item" href="/#cards"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span><span><b>Corporate cards</b></span></a>
                  <a className="menu-item" href="/#settlement"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-globe" /></svg></span><span><b>Stablecoin settlement</b></span></a>
                  <a className="menu-item" href="/#developers"><span className="menu-ic"><svg className="ic" aria-hidden="true"><use href="#i-code-xml" /></svg></span><span><b>APIs &amp; webhooks</b></span></a>
                </div>
                <div className="menu-feature">
                  <p>Tell us how your money needs to move.</p>
                  <small>Share your markets, currencies, volumes and settlement requirements.</small>
                  <a className="btn btn-solid btn-sm" href="/#contact">Talk to our team</a>
                </div>
              </div>
            </div>
            <div className="nav-item has-menu">
              <a className="nav-link" href="/#solutions" data-nav="solutions">Solutions<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></a>
              <div className="menu menu-wide">
                <div className="menu-grid cols-2">
                  <div className="menu-col">
                    <h4>By Audience</h4>
                    <a className="menu-link" href="/#personal">Individuals</a>
                    <a className="menu-link" href="/#business">Fintechs &amp; Platforms</a>
                    <a className="menu-link" href="/#business">Merchants &amp; PSPs</a>
                    <a className="menu-link" href="/#otc">OTC Desks &amp; Brokers</a>
                  </div>
                  <div className="menu-col">
                    <h4>By Use Case</h4>
                    <a className="menu-link" href="/#processing">Crypto Payment Processing</a>
                    <a className="menu-link" href="/#ramp">On/Off Ramp Integration</a>
                    <a className="menu-link" href="/#settlement">Treasury &amp; Settlement</a>
                    <a className="menu-link" href="/#wallets">Wallet as a Service</a>
                  </div>
                </div>
                <div className="menu-feature">
                  <p>Tell us how your money needs to move.</p>
                  <small>Share your markets, currencies, volumes and settlement requirements.</small>
                  <a className="btn btn-solid btn-sm" href="/#contact">Talk to our team</a>
                </div>
              </div>
            </div>
            <div className="nav-item has-menu">
              <a className="nav-link" href="/#company" data-nav="company">Company<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></a>
              <div className="menu" style={{ width: '680px' }}>
                <div className="menu-grid cols-3">
                  <div className="menu-col">
                    <h4>Discover Coincashy</h4>
                    <a className="menu-link" href="/about">About Us</a>
                    <a className="menu-link" href="/#blog">Blog &amp; Insights</a>
                    <a className="menu-link" href="/#compliance">Compliance &amp; Security</a>
                    <a className="menu-link" href="/#media">Press &amp; Media</a>
                  </div>
                  <div className="menu-col">
                    <h4>Careers</h4>
                    <a className="menu-link" href="/#careers">Open Roles</a>
                    <a className="menu-link" href="/#culture">Life at Coincashy</a>
                    <a className="menu-link" href="/#diversity">Diversity &amp; Inclusion</a>
                  </div>
                  <div className="menu-col">
                    <h4>Resources</h4>
                    <a className="menu-link" href="/#help">Help Center</a>
                    <a className="menu-link" href="/#developers">API Documentation</a>
                    <a className="menu-link" href="/#legal">Legal &amp; Privacy</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="nav-actions">
            <a className="nav-link nav-signin" href="https://trade.coincashy.io/auth/login" target="_blank" rel="noopener">Log in</a>
            <a className="btn btn-line btn-sm nav-contact" href="/#contact">Talk to sales</a>
            <a className="btn btn-solid btn-sm" id="nav-cta" href="https://trade.coincashy.io/auth/signup" target="_blank" rel="noopener"><span className="l-long">Get started</span><span className="l-short">Get started</span></a>
            <button className="theme-btn" type="button" data-theme-toggle aria-label="Switch to light mode" title="Switch theme" onClick={() => { if (typeof window !== 'undefined' && (window as any).__toggleTheme) (window as any).__toggleTheme(); }}><svg className="ic ic-sun" aria-hidden="true"><use href="#i-sun" /></svg><svg className="ic ic-moon" aria-hidden="true"><use href="#i-moon" /></svg></button>
            <button className="burger" id="burger" type="button" aria-label={isMobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileOpen} aria-controls="mnav" onClick={toggleMobile}><span /><span /></button>
          </div>
        </div>
      </header>
      <div className={"mnav " + (isMobileOpen ? 'open' : '')} id="mnav" aria-hidden={!isMobileOpen}>
        <nav className="mnav-list" aria-label="Mobile" onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) closeMobile();
        }}>
          <a className="m-link" href="#home">Home</a>
          <details>
            <summary>Personal<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></summary>
            <div className="m-sub"><a href="#personal">Overview</a><a href="#buy">Buy crypto</a><a href="#sell">Sell crypto</a><a href="#convert">Convert crypto</a><a href="#card">Personal crypto card</a><a href="#how">How it works</a></div>
          </details>
          <details>
            <summary>Business<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></summary>
            <div className="m-sub"><a href="/#processing">Crypto processing</a><a href="/#otc">OTC &amp; liquidity</a><a href="/#ramp">On/off-ramp</a><a href="/#vibans">vIBANs</a><a href="/#wallets">Wallet as a Service</a><a href="/#cards">Corporate cards</a><a href="/#settlement">Stablecoin settlement</a><a href="/#developers">APIs &amp; webhooks</a></div>
          </details>
          <details>
            <summary>Solutions<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></summary>
            <div className="m-sub"><a href="#personal">Individuals</a><a href="#business">Fintechs &amp; Platforms</a><a href="#business">Merchants &amp; PSPs</a><a href="#otc">OTC Desks</a><a href="#processing">Payment Processing</a><a href="#ramp">On/Off Ramp</a><a href="#settlement">Treasury</a><a href="#wallets">Wallet as a Service</a></div>
          </details>
          <details>
            <summary>Company<svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></summary>
            <div className="m-sub"><a href="/about" data-mnav-close>About Us</a><a href="#blog">Blog &amp; Insights</a><a href="#compliance">Security</a><a href="#media">Media</a><a href="#careers">Careers</a><a href="#culture">Culture</a><a href="#help">Help Center</a><a href="#developers">API Docs</a><a href="#legal">Legal</a></div>
          </details>
          <div className="m-cta"><a className="btn btn-solid" href="#buy">Buy crypto</a><a className="btn btn-solid" href="https://trade.coincashy.io/auth/login" target="_blank" rel="noopener">Login</a><a className="btn btn-line" href="#contact">Talk to our team</a><button className="btn btn-line" type="button" data-theme-toggle onClick={() => { if (typeof window !== 'undefined' && (window as any).__toggleTheme) (window as any).__toggleTheme(); }}><svg className="ic ic-sun" aria-hidden="true"><use href="#i-sun" /></svg><svg className="ic ic-moon" aria-hidden="true"><use href="#i-moon" /></svg><span data-theme-label>Light mode</span></button></div>
        </nav>
      </div>
    </>
  );
}
