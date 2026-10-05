import React from 'react';

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <a className="brand" href="/" aria-label="Coincashy home">
              <img className="brand-logo logo-on-dark" src="/media/logo-on-dark.png" alt="Coincashy" />
              <img className="brand-logo logo-on-paper" src="/media/logo-on-paper.png" alt="" />
            </a>
            <p className="f-desc">Crypto, stablecoins and fiat rails for people and businesses. Buy, sell and spend, or accept, convert and settle at scale.</p>
            <div className="f-social">
              <a href="https://x.com/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on X"><svg className="bm" aria-hidden="true"><use href="#b-x" /></svg></a>
              <a href="https://t.me/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on Telegram"><svg className="bm" aria-hidden="true"><use href="#b-telegram" /></svg></a>
              <a href="https://www.facebook.com/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on Facebook"><svg className="bm" aria-hidden="true"><use href="#b-facebook" /></svg></a>
              <a href="https://www.instagram.com/coin.cashy/" target="_blank" rel="noopener" aria-label="Coincashy on Instagram"><svg className="bm" aria-hidden="true"><use href="#b-instagram" /></svg></a>
              <a href="https://www.linkedin.com/company/coincashy/" target="_blank" rel="noopener" aria-label="Coincashy on LinkedIn"><svg className="bm" aria-hidden="true"><use href="#b-linkedin" /></svg></a>
              <a href="mailto:support@coincashy.io" aria-label="Email Coincashy"><svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg></a>
            </div>
          </div>
          <div className="f-cols">
            <div className="f-col"><h4>Products</h4><a href="/#buy">Buy crypto</a><a href="/#sell">Sell crypto</a><a href="/#convert">Convert crypto</a><a href="/#card">Crypto card</a><a href="/#processing">Crypto processing</a><a href="/#otc">OTC &amp; liquidity</a><a href="/#ramp">On/off-ramp</a><a href="/#vibans">vIBANs</a><a href="/#wallets">Wallet as a Service</a><a href="/#cards">Corporate cards</a><a href="/#settlement">Stablecoin settlement</a></div>
            <div className="f-col"><h4>Solutions</h4><a href="/#personal">Individuals</a><a href="/#models">Merchants &amp; PSPs</a><a href="/#models">OTC desks &amp; brokers</a><a href="/#models">Fintechs &amp; platforms</a><a href="/#rails">Treasury &amp; accounts</a></div>
            <div className="f-col"><h4>Developers</h4><a href="/#developers">API overview</a><a href="/#developers">Payments API</a><a href="/#developers">Wallet API</a><a href="/#developers">Quotes API</a><a href="/#developers">Webhooks</a></div>
            <div className="f-col"><h4>Resources</h4><a href="/#how">How it works</a><a href="/#pipeline">How value moves</a><a href="/#trust">Technology ecosystem</a><a href="/#faq-personal">Personal FAQ</a><a href="/#faq-business">Business FAQ</a></div>
            <div className="f-col"><h4>Company</h4><a href="/about">About Coincashy</a><a href="/#compliance">Compliance</a><a href="/#contact">Contact</a><a href="https://trade.coincashy.io/auth/login" target="_blank" rel="noopener">Log in</a><a href="https://trade.coincashy.io/auth/signup" target="_blank" rel="noopener">Get started</a></div>
          </div>
        </div>
        <div className="f-mid">
          <div className="f-contact"><span>Support</span><code>support@coincashy.io</code></div>
          <ul className="f-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/aml">AML Policy</a></li>
            <li><a href="/complaints">Complaints &amp; disclosures</a></li>
          </ul>
        </div>
        <div className="f-legal">
          <p>© 2026 Coincashy. All rights reserved. Products and availability are subject to jurisdiction, onboarding and partner approval.</p>
          <p>Crypto-assets are volatile and their value can go down as well as up. Card, account and vIBAN services are partner-enabled and subject to eligibility. Visa, Mastercard, Apple Pay, Google Pay, SEPA, Bitcoin, Ethereum and Tether are marks of their respective owners, shown as accepted methods.</p>
          <p><strong>Disclaimer</strong><br />Coincashy Sp. z o.o. only provides services to customers resident in the UK who fall within an exemption available under the UK financial promotion regime (Investment professionals, High net worth companies, unincorporated associations etc., Certified sophisticated investors, Communication to overseas recipients, etc).</p>
        </div>
      </div>
    </footer>
    <dialog className="mail-dialog" id="mail-dialog" aria-labelledby="md-title">
      <div className="md-inner">
        <div className="md-top"><h2 id="md-title">Your message is ready</h2><button className="md-x" type="button" id="md-close" aria-label="Close"><svg className="ic" aria-hidden="true"><use href="#i-x" /></svg></button></div>
        <p className="md-note">Nothing has been sent yet. Send it from your email app, or copy it into any email.</p>
        <div className="md-fields">
          <div className="md-field"><span>To</span><code>support@coincashy.io</code></div>
          <div className="md-field"><span>Subject</span><code id="md-subject" /></div>
          <div className="md-field"><span>Message</span><pre className="md-body" id="md-body" /></div>
        </div>
        <div className="md-actions">
          <button className="btn btn-solid btn-sm" type="button" id="md-copy"><svg className="ic" aria-hidden="true"><use href="#i-copy" /></svg>Copy message</button>
          <a className="btn btn-line btn-sm" id="md-open" href="mailto:support@coincashy.io"><svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg>Open email app</a>
        </div>
      </div>
    </dialog>
    <div className="toast" id="toast" role="status" aria-live="polite" />
    </>
  );
}
