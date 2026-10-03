// @ts-nocheck
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      ﻿<div>
  
  
  
  
  
  
  
  
  
  
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
  <Footer />
</div>
    </>
  );
}