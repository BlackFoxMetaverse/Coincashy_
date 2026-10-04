const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
const aboutPath = path.join(__dirname, 'src', 'app', 'about', 'page.tsx');

const content = fs.readFileSync(pagePath, 'utf8');
const lines = content.split('\n');

const mainStartIndex = lines.findIndex(l => l.includes('<main className="page" id="home">'));
const footerStartIndex = lines.findIndex(l => l.includes('<Footer />'));
const mainEndIndex = footerStartIndex - 1;

const headerLines = lines.slice(0, mainStartIndex);
const footerLines = lines.slice(footerStartIndex); // From <Footer /> onwards

const aboutMain = `  <main className="page" id="about">
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
          <p className="lede" style={{ maxWidth: '800px', margin: '0 auto' }}>Founded in Warsaw in 2022, we built Coincashy to provide what the market was missing: a secure, instant, and institutional-grade gateway between crypto and fiat. Whether you need seamless OTC execution or robust B2B infrastructure, we move your money at the speed of the modern web.</p>
        </div>
      </div>
    </section>

    <section className="section" id="origin-story">
      <div className="wrap">
        <div className="card" style={{ padding: '4rem', background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '24px', textAlign: 'center' }}>
          <h2 className="title" style={{ marginBottom: '1.5rem' }}>Our Story</h2>
          <p className="bc-desc" style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            Born in Warsaw in 2022, Coincashy started with a clear focus: to create the perfect OTC desk for selling Bitcoin and USDT securely at the best market rates. We saw that businesses and individuals struggled with slow transactions and unreliable payouts. We built our infrastructure to guarantee quick transactions and instant payouts, whether in crypto or direct bank transfer. Today, we've grown into a team of dedicated financial and tech professionals providing full B2B infrastructure—from vIBANs to stablecoin settlement—for clients worldwide.
          </p>
        </div>
      </div>
    </section>

    <section className="section" id="numbers">
      <div className="wrap">
        <header className="section-head">
          <h2 className="title">By the Numbers</h2>
        </header>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'center', margin: '4rem 0' }}>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2022</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Year Founded in Warsaw</p>
          </div>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>11-50</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Team of Experts</p>
          </div>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$10B+</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Quarterly Volume</p>
          </div>
          <div className="stat-item">
            <div style={{ fontSize: '4rem', fontWeight: 600, letterSpacing: '-0.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>150+</div>
            <p style={{ color: 'var(--low)', fontSize: '1.125rem' }}>Countries Supported</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="mission">
      <div className="wrap">
        <header className="section-head">
          <h2 className="title">Our Values</h2>
        </header>
        <div className="b-grid b-grid-3">
          <div className="card b-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-lock" /></svg></div>
            <h3 className="bc-title">Institutional Security</h3>
            <p className="bc-desc">Compliance and security aren't afterthoughts—they are the foundation of our OTC and B2B services.</p>
          </div>
          <div className="card b-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></div>
            <h3 className="bc-title">Instant Execution</h3>
            <p className="bc-desc">Quick transactions and instant payouts. In crypto or via direct bank transfer, we don't do delays.</p>
          </div>
          <div className="card b-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-chart-candlestick" /></svg></div>
            <h3 className="bc-title">Best Market Rates</h3>
            <p className="bc-desc">Our liquidity solutions ensure you always get the optimal price for your Bitcoin and USDT.</p>
          </div>
          <div className="card b-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-globe" /></svg></div>
            <h3 className="bc-title">Borderless Infrastructure</h3>
            <p className="bc-desc">From on/off ramps to vIBANs, we build the rails that connect fiat and crypto globally.</p>
          </div>
          <div className="card b-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-users" /></svg></div>
            <h3 className="bc-title">Dedicated Support</h3>
            <p className="bc-desc">A team of financial experts based in Warsaw, delivering boutique service at scale.</p>
          </div>
          <div className="card b-card">
            <div className="bc-ic"><svg className="ic" aria-hidden="true"><use href="#i-layers" /></svg></div>
            <h3 className="bc-title">Radical Simplicity</h3>
            <p className="bc-desc">One gateway. Zero confusion. Manage everything you need to move between money and crypto.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="culture">
      <div className="wrap">
        <header className="section-head">
          <h2 className="title">Built in Warsaw</h2>
          <p className="subtitle">Driven by a dedicated team of 11-50 fintech professionals.</p>
        </header>
        <div className="card" style={{ padding: '4rem 2rem', background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'var(--grad)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <svg className="ic" style={{ width: '32px', height: '32px', color: '#fff' }} aria-hidden="true"><use href="#i-users" /></svg>
          </div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--hi)' }}>Our Team</h3>
          <p style={{ maxWidth: '600px', color: 'var(--low)', fontSize: '1.125rem', lineHeight: '1.6' }}>
            Our strength lies in our people. From compliance officers to core engineers and OTC traders, our Warsaw-based team ensures that Coincashy operates with uncompromising standards, day in and day out. We combine deep European financial expertise with cutting-edge crypto technology.
          </p>
        </div>
      </div>
    </section>

    <section className="section" id="cta-bottom" style={{ marginBottom: '4rem' }}>
      <div className="wrap">
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '24px' }}>
          <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready for secure OTC execution and seamless B2B infrastructure?</h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>Reach out to our experts and let's build the future together.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a className="btn btn-solid" href="tel:+447452022306"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>+44 7452 022306</a>
            <a className="btn btn-line" href="/#contact">Integrate our API<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  </main>`;

const newFileContent = headerLines.join('\n') + '\n' + aboutMain + '\n' + footerLines.join('\n');
fs.writeFileSync(aboutPath, newFileContent, 'utf8');

console.log("Successfully generated about/page.tsx");
