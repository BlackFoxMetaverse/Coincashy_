// @ts-nocheck
import Nav from '@/components/Nav';
export default function Home() {
  return (
    <>
      ﻿<div>
  
  
  
  
  
  
  
  
  
  <Nav />
  {/* =========================================================== HOME */}
  <main className="page" id="about">
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-orb" />
        <span className="hero-veil" />
        <svg className="hero-rings" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMax meet"><g fill="none" stroke="currentColor" strokeWidth={1}><circle cx={700} cy={700} r={300} /><circle cx={700} cy={700} r={460} /><circle cx={700} cy={700} r={620} /><circle cx={700} cy={700} r={780} /></g></svg>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy hero-copy-center">
          <h1 className="display" id="hero-title">
            <span className="rw" style={{'--i': 0}}><span>Bridging</span></span> <span className="rw" style={{'--i': 1}}><span>the gap</span></span> <span className="rw" style={{'--i': 2}}><span>between</span></span><br /><span className="rw" style={{'--i': 3}}><span>traditional finance</span></span><br /><span className="rw" style={{'--i': 4}}><span>and the</span></span> <span className="rw" style={{'--i': 5}}><span><em>future of money.</em></span></span>
          </h1>
          <p className="lede">Coincashy is a global financial technology company. We build the infrastructure that allows individuals to spend freely and businesses to settle globally using crypto and stablecoins.</p>
        </div>
      </div>
    </section>

    <section className="sec" id="mission">
      <div className="wrap">
        <header className="section-head">
          <h2 className="title">Our Mission &amp; Values</h2>
        </header>
        <div className="about-grid-3">
          <div className="about-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-lock" /></svg></div>
            <h3 className="about-title">Uncompromising Security</h3>
            <p className="about-desc">Compliance isn't an afterthought—it's our foundation. We employ bank-grade security and strict regulatory standards to keep your assets safe.</p>
          </div>
          <div className="about-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-globe" /></svg></div>
            <h3 className="about-title">Borderless Accessibility</h3>
            <p className="about-desc">Money shouldn't have borders. We provide seamless fiat on/off ramps to make crypto accessible to everyone, everywhere.</p>
          </div>
          <div className="about-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-layers" /></svg></div>
            <h3 className="about-title">Enterprise Scalability</h3>
            <p className="about-desc">From a personal crypto card to corporate treasury and OTC desks, our infrastructure is built to handle volume at any scale.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="sec" id="numbers">
      <div className="wrap">
        <header className="section-head">
          <h2 className="title">By the Numbers</h2>
        </header>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center', margin: '4rem 0' }}>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$10B+</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Quarterly Volume</p>
          </div>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>150+</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Countries Supported</p>
          </div>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50+</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Fiat Currencies</p>
          </div>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>99.99%</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Uptime Reliability</p>
          </div>
        </div>
      </div>
    </section>

    <section className="sec" id="leadership">
      <div className="wrap">
        <header className="section-head">
          <h2 className="title">The Team Behind the Tech</h2>
          <p className="subtitle">Built by veterans from global finance, tech, and security.</p>
        </header>
        <div className="about-grid-3">
          <div className="about-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ height: '240px', background: 'var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg className="ic" style={{ width: '48px', height: '48px', opacity: 0.2 }} aria-hidden="true"><use href="#i-users" /></svg>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 className="about-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                John Doe
                <a href="#" style={{ color: 'var(--hi)' }}><svg className="ic" aria-hidden="true"><use href="#i-external-link" /></svg></a>
              </h3>
              <p className="about-desc" style={{ marginTop: '0.25rem', color: 'var(--hi)' }}>Chief Executive Officer</p>
            </div>
          </div>
          <div className="about-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ height: '240px', background: 'var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg className="ic" style={{ width: '48px', height: '48px', opacity: 0.2 }} aria-hidden="true"><use href="#i-users" /></svg>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 className="about-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Jane Smith
                <a href="#" style={{ color: 'var(--hi)' }}><svg className="ic" aria-hidden="true"><use href="#i-external-link" /></svg></a>
              </h3>
              <p className="about-desc" style={{ marginTop: '0.25rem', color: 'var(--hi)' }}>Chief Technology Officer</p>
            </div>
          </div>
          <div className="about-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ height: '240px', background: 'var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg className="ic" style={{ width: '48px', height: '48px', opacity: 0.2 }} aria-hidden="true"><use href="#i-users" /></svg>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 className="about-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Alex Johnson
                <a href="#" style={{ color: 'var(--hi)' }}><svg className="ic" aria-hidden="true"><use href="#i-external-link" /></svg></a>
              </h3>
              <p className="about-desc" style={{ marginTop: '0.25rem', color: 'var(--hi)' }}>Chief Operating Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sec" id="cta-bottom" style={{ marginBottom: '4rem' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '24px' }}>
          <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>We're building the financial rails of tomorrow.</h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>Want to help us shape the future of money, or partner with us?</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a className="btn btn-solid" href="/careers">View Open Roles<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            <a className="btn btn-line" href="/contact">Talk to Sales<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer">
    <div className="wrap">
      <div className="f-top">
        <div className="f-brand">
          <a className="brand" href="/" aria-label="Coincashy home">
            <img className="brand-logo logo-on-dark" src="media/logo-on-dark.png" alt="Coincashy" /><img className="brand-logo logo-on-paper" src="media/logo-on-paper.png" alt="" />
          </a>
          <p className="f-desc">Crypto, stablecoins and fiat rails for people and businesses. Buy, sell and spend, or accept, convert and settle at scale.</p>
          <div className="f-social">
            <a href="https://x.com/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on X"><svg className="bm" aria-hidden="true"><use href="#b-x" /></svg></a>
            <a href="https://t.me/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on Telegram"><svg className="bm" aria-hidden="true"><use href="#b-telegram" /></svg></a>
            <a href="https://www.facebook.com/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on Facebook"><svg className="bm" aria-hidden="true"><use href="#b-facebook" /></svg></a>
            <a href="https://www.instagram.com/coin.cashy/" target="_blank" rel="noopener" aria-label="Coincashy on Instagram"><svg className="bm" aria-hidden="true"><use href="#b-instagram" /></svg></a>
            <a href="mailto:support@coincashy.io" aria-label="Email Coincashy"><svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg></a>
          </div>
        </div>
        <div className="f-cols">
          <div className="f-col"><h4>Products</h4><a href="#buy">Buy crypto</a><a href="#sell">Sell crypto</a><a href="#convert">Convert crypto</a><a href="#card">Crypto card</a><a href="#processing">Crypto processing</a><a href="#otc">OTC &amp; liquidity</a><a href="#ramp">On/off-ramp</a><a href="#vibans">vIBANs</a><a href="#wallets">Wallet as a Service</a><a href="#cards">Corporate cards</a><a href="#settlement">Stablecoin settlement</a></div>
          <div className="f-col"><h4>Solutions</h4><a href="#personal">Individuals</a><a href="#models">Merchants &amp; PSPs</a><a href="#models">OTC desks &amp; brokers</a><a href="#models">Fintechs &amp; platforms</a><a href="#rails">Treasury &amp; accounts</a></div>
          <div className="f-col"><h4>Developers</h4><a href="#developers">API overview</a><a href="#developers">Payments API</a><a href="#developers">Wallet API</a><a href="#developers">Quotes API</a><a href="#developers">Webhooks</a></div>
          <div className="f-col"><h4>Resources</h4><a href="#how">How it works</a><a href="#pipeline">How value moves</a><a href="#trust">Technology ecosystem</a><a href="#faq-personal">Personal FAQ</a><a href="#faq-business">Business FAQ</a></div>
          <div className="f-col"><h4>Company</h4><a href="/about">About Coincashy</a><a href="#compliance">Compliance</a><a href="#contact">Contact</a><a href="https://trade.coincashy.io/auth/login" target="_blank" rel="noopener">Log in</a><a href="https://trade.coincashy.io/auth/signup" target="_blank" rel="noopener">Get started</a></div>
        </div>
      </div>
      <div className="f-mid">
        <div className="f-contact"><span>Support</span><code>support@coincashy.io</code><button className="copy-btn" type="button" data-copy="support@coincashy.io"><svg className="ic" aria-hidden="true"><use href="#i-copy" /></svg><span>Copy</span></button></div>
        <ul className="f-links"><li><a href="/terms">Terms of Service</a></li><li><a href="/privacy">Privacy Policy</a></li><li><a href="/cookies">Cookie Policy</a></li><li><a href="/complaints">Complaints &amp; disclosures</a></li></ul>
      </div>
      <div className="f-legal">
        <p>© 2026 Coincashy. All rights reserved. Products and availability are subject to jurisdiction, onboarding and partner approval.</p>
        <p>Crypto-assets are volatile and their value can go down as well as up. Card, account and vIBAN services are partner-enabled and subject to eligibility. Visa, Mastercard, Apple Pay, Google Pay, SEPA, Bitcoin, Ethereum and Tether are marks of their respective owners, shown as accepted methods.</p>
        <p><strong>Disclaimer</strong><br/>Coincashy Sp. z o.o. only provides services to customers resident in the UK who fall within an exemption available under the UK financial promotion regime (Investment professionals, High net worth companies, unincorporated associations etc., Certified sophisticated investors, Communication to overseas recipients, etc).</p>
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
</div>


    </>
  );
}