import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '1180px', paddingBottom: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem', alignItems: 'stretch' }}>
            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', border: '1px solid var(--line)', borderRadius: '28px', background: 'linear-gradient(180deg, var(--surface), var(--ground))' }}>
              <p className="eyebrow">Talk to Coincashy</p>
              <h1 className="display" style={{ marginBottom: '1rem' }}>Start the conversation.</h1>
              <p className="lede" style={{ maxWidth: '620px', marginBottom: '1.5rem' }}>
                Tell us where you want to move money, what rails you need, and how much volume you expect. We’ll respond with the right fit for your flow.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem 1.1rem', borderRadius: '16px', border: '1px solid var(--line)', background: 'var(--surface)' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--low)', marginBottom: '0.5rem' }}>Email</div>
                  <a href="mailto:support@coincashy.io" style={{ color: 'var(--hi)', fontWeight: 600 }}>support@coincashy.io</a>
                </div>
                <div style={{ padding: '1rem 1.1rem', borderRadius: '16px', border: '1px solid var(--line)', background: 'var(--surface)' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--low)', marginBottom: '0.5rem' }}>Phone</div>
                  <a href="tel:+447452022306" style={{ color: 'var(--hi)', fontWeight: 600 }}>+44 7452 022306</a>
                </div>
                <div style={{ padding: '1rem 1.1rem', borderRadius: '16px', border: '1px solid var(--line)', background: 'var(--surface)' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--low)', marginBottom: '0.5rem' }}>Response time</div>
                  <div style={{ color: 'var(--hi)', fontWeight: 600 }}>Usually within 1 business day</div>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '0.8rem', color: 'var(--low)' }}>
                <div>✓ Personal and business onboarding</div>
                <div>✓ Institutional compliance and settlement guidance</div>
                <div>✓ API, vIBAN, card and OTC support</div>
              </div>
            </div>

            <div style={{ padding: 'clamp(1.3rem,4vw,2rem)', border: '1px solid var(--line)', borderRadius: '28px', background: 'var(--surface)' }}>
              <form className="form" id="contact-form" noValidate>
                <div className="field">
                  <label htmlFor="cf-name">Full name</label>
                  <input className="input" id="cf-name" autoComplete="name" placeholder="Jane Doe" />
                  <span className="err" id="cf-name-err" />
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Work email</label>
                  <input className="input" id="cf-email" type="email" autoComplete="email" placeholder="jane@company.com" />
                  <span className="err" id="cf-email-err" />
                </div>
                <div className="field">
                  <label htmlFor="cf-company">Company</label>
                  <input className="input" id="cf-company" autoComplete="organization" placeholder="Company name" />
                  <span className="err" id="cf-company-err" />
                </div>
                <div className="field">
                  <label htmlFor="cf-markets">Countries or markets</label>
                  <input className="input" id="cf-markets" placeholder="EU, UK, UAE, US" />
                </div>
                <div className="field">
                  <label htmlFor="cf-volume">Monthly volume</label>
                  <select className="input" id="cf-volume" defaultValue="">
                    <option value="" disabled>Select an estimate</option>
                    <option value="Under €25k">Under €25k</option>
                    <option value="€25k – €250k">€25k – €250k</option>
                    <option value="€250k – €2.5m">€250k – €2.5m</option>
                    <option value="€2.5m – €25m">€2.5m – €25m</option>
                    <option value="€25m+">€25m+</option>
                  </select>
                </div>

                <div className="field">
                  <label>Relevant products</label>
                  <div className="check-grid" style={{ display: 'grid', gap: '0.5rem', marginTop: '0.6rem' }}>
                    {['Crypto processing', 'OTC & liquidity', 'On/off-ramp', 'vIBANs', 'Wallets', 'Corporate cards', 'Stablecoin settlement'].map((item) => (
                      <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                        <input type="checkbox" name="product" value={item} />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>Fiat or crypto currencies</label>
                  <div className="check-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.5rem', marginTop: '0.6rem' }}>
                    {['EUR', 'GBP', 'USD', 'USDT', 'USDC', 'BTC', 'ETH', 'Other'].map((item) => (
                      <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                        <input type="checkbox" name="ccy" value={item} />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="cf-notes">How can we help?</label>
                  <textarea className="input" id="cf-notes" rows={5} placeholder="Please share your use case, timeline and constraints." />
                </div>

                <button className="btn btn-solid" type="submit">Send inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
