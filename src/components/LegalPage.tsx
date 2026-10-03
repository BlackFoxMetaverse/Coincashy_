// @ts-nocheck
import Nav from '@/components/Nav';

interface Section {
  title: string;
  content: string | string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: Section[];
}

export default function LegalPage({ title, subtitle, effectiveDate, sections }: LegalPageProps) {
  return (
    <>
      <div>
        <Nav />
        <main style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="wrap" style={{ maxWidth: '800px' }}>

            {/* Page header */}
            <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '2.5rem', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--hi)', marginBottom: '0.75rem' }}>
                Legal
              </p>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                {title}
              </h1>
              <p style={{ color: 'var(--low)', fontSize: '1rem' }}>{subtitle}</p>
              <p style={{ color: 'var(--low)', fontSize: '0.875rem', marginTop: '1rem' }}>
                Effective date: <strong style={{ color: 'var(--fg)' }}>{effectiveDate}</strong>
              </p>
            </div>

            {/* Table of contents */}
            <nav aria-label="Page contents" style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '12px', padding: '1.5rem 2rem', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--low)', marginBottom: '1rem' }}>Contents</p>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i + 1}`}
                      style={{ color: 'var(--fg)', textDecoration: 'none', fontSize: '0.9375rem', display: 'flex', gap: '0.75rem' }}
                    >
                      <span style={{ color: 'var(--low)', minWidth: '1.5rem' }}>{i + 1}.</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {sections.map((s, i) => (
                <section key={i} id={`section-${i + 1}`}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--low)', fontSize: '0.875rem', minWidth: '1.75rem' }}>{i + 1}.</span>
                    {s.title}
                  </h2>
                  {Array.isArray(s.content) ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingLeft: '2.5rem' }}>
                      {s.content.map((para, j) => (
                        <p key={j} style={{ color: 'var(--low)', lineHeight: 1.75, fontSize: '0.9375rem' }}>{para}</p>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: 'var(--low)', lineHeight: 1.75, fontSize: '0.9375rem', paddingLeft: '2.5rem' }}>{s.content}</p>
                  )}
                </section>
              ))}
            </div>

            {/* Contact block */}
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '12px' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Questions about this document?</p>
              <p style={{ color: 'var(--low)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Contact our legal team at{' '}
                <a href="mailto:legal@coincashy.io" style={{ color: 'var(--hi)' }}>legal@coincashy.io</a>{' '}
                or write to Coincashy Sp. z o.o., ul. Example 1, Warsaw, Poland.
              </p>
            </div>

          </div>
        </main>

        {/* Footer — same as about page */}
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
                <li><a href="/cookies">Cookie Policy</a></li>
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

        <div className="toast" id="toast" role="status" aria-live="polite" />
      </div>
    </>
  );
}
