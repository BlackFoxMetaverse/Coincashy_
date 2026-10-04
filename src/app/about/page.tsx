import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <div>
        <main className="page" id="about">
          
          <section className="hero" id="top">
            <div className="hero-bg" aria-hidden="true">
              <span className="hero-orb" />
              <span className="hero-veil" />
              <svg className="hero-rings" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMax meet"><g fill="none" stroke="currentColor" strokeWidth={1}><circle cx={700} cy={700} r={300} /><circle cx={700} cy={700} r={460} /><circle cx={700} cy={700} r={620} /><circle cx={700} cy={700} r={780} /></g></svg>
            </div>
            <div className="wrap hero-inner">
              <div className="hero-copy hero-copy-center">
                <h1 className="display" id="hero-title" style={{ opacity: 1, animation: 'none' }}>
                  Bridging the gap between traditional finance and the future of money.
                </h1>
                <p className="lede" style={{ maxWidth: '800px', margin: '0 auto', opacity: 1, animation: 'none' }}>
                  Founded in Warsaw in 2022, we built Coincashy to provide what the market was missing: a secure, instant, and institutional-grade gateway between crypto and fiat. Whether you need seamless OTC execution or robust B2B infrastructure, we move your money at the speed of the modern web.
                </p>
              </div>
            </div>
          </section>

          <section className="sec" id="origin-story">
            <div className="wrap">
              <div style={{ borderRadius: '24px', padding: 'clamp(2rem, 6vw, 5rem) clamp(1.25rem, 4vw, 4rem)', background: 'linear-gradient(145deg, var(--surface), var(--ground))', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', background: 'radial-gradient(ellipse at top right, var(--surface-2), transparent 70%)', pointerEvents: 'none' }} />
                
                <div className="sec-head" style={{ position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
                  <p className="eyebrow">Our Story</p>
                  <h2 className="h2" style={{ maxWidth: '600px' }}>Built for the future.</h2>
                </div>
                <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
                  <p className="body" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: 'var(--hi)' }}>
                    Born in Warsaw in 2022, Coincashy started with a clear focus: to create the perfect OTC desk for selling Bitcoin and USDT securely at the best market rates. We saw that businesses and individuals struggled with slow transactions and unreliable payouts. 
                  </p>
                  <p className="body" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: 'var(--low)' }}>
                    We built our infrastructure to guarantee quick transactions and instant payouts, whether in crypto or direct bank transfer. Today, we've grown into a team of dedicated financial and tech professionals providing full B2B infrastructure—from vIBANs to stablecoin settlement—for clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="sec" id="numbers">
            <div className="wrap">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div style={{ padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div className="display" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--hi)', marginBottom: '0.5rem' }}>2022</div>
                  <p className="eyebrow" style={{ color: 'var(--low)', margin: 0 }}>Year Founded</p>
                </div>
                <div style={{ padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div className="display" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--hi)', marginBottom: '0.5rem' }}>11-50</div>
                  <p className="eyebrow" style={{ color: 'var(--low)', margin: 0 }}>Team of Experts</p>
                </div>
                <div style={{ padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div className="display" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--hi)', marginBottom: '0.5rem' }}>$10B+</div>
                  <p className="eyebrow" style={{ color: 'var(--low)', margin: 0 }}>Quarterly Volume</p>
                </div>
                <div style={{ padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div className="display" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--hi)', marginBottom: '0.5rem' }}>150+</div>
                  <p className="eyebrow" style={{ color: 'var(--low)', margin: 0 }}>Countries Supported</p>
                </div>
              </div>
            </div>
          </section>

          <section className="sec" id="mission">
            <div className="wrap">
              <header className="sec-head rv" style={{ textAlign: 'center', margin: '0 auto 3rem', alignItems: 'center', justifyItems: 'center' }}>
                <p className="eyebrow">Our Values</p>
                <h2 className="h2">The foundations of our infrastructure.</h2>
              </header>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                <div style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 5vw, 2rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ marginBottom: '1.25rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                    <svg className="ic" aria-hidden="true" style={{ width: '20px', height: '20px' }}><use href="#i-lock" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Institutional Security</h3>
                  <p className="body" style={{ color: 'var(--low)' }}>Compliance and security aren't afterthoughts—they are the foundation of our OTC and B2B services.</p>
                </div>
                
                <div style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 5vw, 2rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ marginBottom: '1.25rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                    <svg className="ic" aria-hidden="true" style={{ width: '20px', height: '20px' }}><use href="#i-clock" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Instant Execution</h3>
                  <p className="body" style={{ color: 'var(--low)' }}>Quick transactions and instant payouts. In crypto or via direct bank transfer, we don't do delays.</p>
                </div>

                <div style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 5vw, 2rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ marginBottom: '1.25rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                    <svg className="ic" aria-hidden="true" style={{ width: '20px', height: '20px' }}><use href="#i-chart-candlestick" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Best Market Rates</h3>
                  <p className="body" style={{ color: 'var(--low)' }}>Our liquidity solutions ensure you always get the optimal price for your Bitcoin and USDT.</p>
                </div>

                <div style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 5vw, 2rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ marginBottom: '1.25rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                    <svg className="ic" aria-hidden="true" style={{ width: '20px', height: '20px' }}><use href="#i-globe" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Borderless Infrastructure</h3>
                  <p className="body" style={{ color: 'var(--low)' }}>From on/off ramps to vIBANs, we build the rails that connect fiat and crypto globally.</p>
                </div>

                <div style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 5vw, 2rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ marginBottom: '1.25rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                    <svg className="ic" aria-hidden="true" style={{ width: '20px', height: '20px' }}><use href="#i-users" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Dedicated Support</h3>
                  <p className="body" style={{ color: 'var(--low)' }}>A team of financial experts based in Warsaw, delivering boutique service at scale.</p>
                </div>

                <div style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 5vw, 2rem)', background: 'linear-gradient(160deg, var(--surface-2), var(--ground))', border: '1px solid var(--line)' }}>
                  <div style={{ marginBottom: '1.25rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--line)', color: 'var(--hi)' }}>
                    <svg className="ic" aria-hidden="true" style={{ width: '20px', height: '20px' }}><use href="#i-layers" /></svg>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>Radical Simplicity</h3>
                  <p className="body" style={{ color: 'var(--low)' }}>One gateway. Zero confusion. Manage everything you need to move between money and crypto.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="sec" id="culture">
            <div className="wrap">
              <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 4vw, 4rem)', background: 'var(--surface-2)', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 120%, color-mix(in srgb, var(--jade) 15%, transparent), transparent 60%)', pointerEvents: 'none' }} />
                
                <div style={{ position: 'relative', zIndex: 1, width: '64px', height: '64px', background: 'var(--ground)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--line)' }}>
                  <svg className="ic" style={{ width: '28px', height: '28px', color: 'var(--hi)' }} aria-hidden="true"><use href="#i-users" /></svg>
                </div>
                <p className="eyebrow" style={{ position: 'relative', zIndex: 1, marginBottom: '0.75rem' }}>Built in Warsaw</p>
                <h2 className="h2" style={{ position: 'relative', zIndex: 1, marginBottom: '1.25rem', maxWidth: '700px', margin: '0 auto 1.25rem' }}>Our strength lies in our people.</h2>
                <p className="body" style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', position: 'relative', zIndex: 1, color: 'var(--low)' }}>
                  From compliance officers to core engineers and OTC traders, our Warsaw-based team ensures that Coincashy operates with uncompromising standards, day in and day out. We combine deep European financial expertise with cutting-edge crypto technology.
                </p>
              </div>
            </div>
          </section>

          <section className="sec" id="cta-bottom" style={{ marginBottom: '4rem' }}>
            <div className="wrap">
              <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2rem)', background: 'linear-gradient(180deg, var(--surface), var(--ground))', border: '1px solid var(--line)', textAlign: 'center' }}>
                <h2 className="h2" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '1rem', color: 'var(--hi)' }}>Ready for secure OTC execution?</h2>
                <p className="body" style={{ marginBottom: '2rem', color: 'var(--low)', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>Reach out to our experts and let's build the future together.</p>
                <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a className="btn btn-solid" href="tel:+447452022306" style={{ flex: '1 1 auto', maxWidth: '100%' }}><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>+44 7452 022306</a>
                  <a className="btn btn-line" href="/#contact" style={{ flex: '1 1 auto', maxWidth: '100%' }}>Integrate our API<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
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