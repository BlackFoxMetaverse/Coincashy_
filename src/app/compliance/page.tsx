import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Compliance & Security – Regulated Infrastructure | Coincashy',
  description: 'Learn how Coincashy combines institutional speed with rigorous VASP compliance, MPC custody, on-chain AML monitoring, and segregated fiat safeguarding.',
};

const pillars = [
  {
    icon: '#i-user-check',
    title: 'KYC & KYB Verification',
    badge: 'Sumsub Powered',
    description: 'Comprehensive identity verification, corporate registry checks, Ultimate Beneficial Owner (UBO) discovery, and global PEP & sanctions screening completed in minutes.',
  },
  {
    icon: '#i-lock',
    title: 'Institutional MPC Custody',
    badge: 'BitGo & Utila',
    description: 'Multi-party computation (MPC) private key management with hardware-isolated signers. Eliminates single points of failure with multi-tier approval policies and time locks.',
  },
  {
    icon: '#i-scan-search',
    title: 'On-Chain AML Monitoring',
    badge: 'Global Ledger',
    description: 'Continuous blockchain analytics scanning all inbound and outbound transactions against illicit clusters, darknet exposure, mixer addresses, and sanctioned entities.',
  },
  {
    icon: '#i-landmark',
    title: 'Segregated Fiat Safeguarding',
    badge: 'Tier-1 Banking',
    description: 'Client fiat balances are safeguarded 1:1 in regulated European banking institutions (BCB Group, Payswix). Funds are strictly ring-fenced from operational corporate accounts.',
  },
];

const frameworks = [
  {
    title: 'Polish VASP Registration',
    detail: 'Coincashy Sp. z o.o. is entered into the Register of Virtual Asset Service Providers in Poland under KRS no. 0001135823.',
  },
  {
    title: 'European MiCA Readiness',
    detail: 'Active alignment with the EU Markets in Crypto-Assets (MiCA) regulation, governing stablecoin transparency and reserve requirements.',
  },
  {
    title: 'FATF Travel Rule Compliance',
    detail: 'Full interoperability with the Travel Rule protocol for counterparty verification on all inter-VASP crypto transfers.',
  },
  {
    title: 'GDPR Data Protection',
    detail: 'Strict adherence to EU Regulation 2016/679 (GDPR), ensuring user personal data is encrypted, minimized, and protected.',
  },
];

export default function CompliancePage() {
  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="comp-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Institutional Compliance &amp; Trust</p>
              <h1 className="display">
                Built for regulated flows, not just <em>fast execution.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                Coincashy bridges digital assets and traditional finance with an uncompromising compliance layer. From Polish VASP registration to institutional custody and on-chain screening, risk management is our core foundation.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=compliance">
                  Speak to Compliance Officer<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/aml">
                  Review AML Policy
                </Link>
              </div>

              <div className="hero-proof" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)', width: '100%', maxWidth: '840px' }}>
                <span className="hero-proof-label">REGULATORY STATUS &amp; STANDARDS</span>
                <ul className="hero-marks" style={{ gap: '1.25rem 2rem' }}>
                  <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--fg-dim)' }}>
                    <svg className="ic" style={{ color: 'var(--jade)', width: 16, height: 16 }}><use href="#i-shield-check" /></svg>
                    <span>VASP Licensed (EU)</span>
                  </li>
                  <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--jade)' }}>
                    <svg className="ic" style={{ color: 'var(--jade)', width: 16, height: 16 }}><use href="#i-check" /></svg>
                    <span>FATF Travel Rule</span>
                  </li>
                  <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--fg-dim)' }}>
                    <svg className="ic" style={{ color: 'var(--jade)', width: 16, height: 16 }}><use href="#i-lock" /></svg>
                    <span>GDPR Compliant</span>
                  </li>
                  <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--fg-dim)' }}>
                    <svg className="ic" style={{ color: 'var(--jade)', width: 16, height: 16 }}><use href="#i-scan-search" /></svg>
                    <span>MiCA Ready</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Pillars */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div className="sec-split" style={{ marginBottom: '3rem' }}>
              <div className="sec-head">
                <p className="eyebrow">The 4 Trust Pillars</p>
                <h2 className="h2">Zero compromises on institutional risk.</h2>
              </div>
              <p className="body" style={{ color: 'var(--low)' }}>
                Every transaction, account opening, and settlement instruction is processed through our multi-layered risk and verification framework.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {pillars.map((item) => (
                <div key={item.title} style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hi)' }}>
                      <svg className="ic" style={{ width: '24px', height: '24px' }}><use href={item.icon} /></svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hi)', background: 'var(--surface-2)', padding: '0.25rem 0.6rem', borderRadius: '999px', border: '1px solid var(--line)' }}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="h4" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p className="body" style={{ color: 'var(--low)', flexGrow: 1, fontSize: '0.925rem' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Status & Frameworks */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
                <p className="eyebrow">Regulatory Framework</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Clear licensing &amp; jurisdiction posture.</h2>
                <p className="body" style={{ color: 'var(--low)' }}>Operating under European virtual asset guidelines and local financial directives.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
                {frameworks.map((fw) => (
                  <div key={fw.title} style={{ padding: '1.5rem', borderRadius: '18px', background: 'var(--surface-2)', border: '1px solid var(--line)' }}>
                    <h3 className="h4" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{fw.title}</h3>
                    <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem' }}>{fw.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Entity Details */}
        <section className="sec" style={{ paddingBottom: '4rem' }}>
          <div className="wrap">
            <div style={{ border: '1px solid var(--line)', borderRadius: '24px', padding: '2rem 2.5rem', background: 'linear-gradient(145deg, var(--surface), var(--ground))', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2rem' }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Registered Entity</p>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>Coincashy Sp. z o.o.</div>
                <div style={{ color: 'var(--low)', fontSize: '0.9rem' }}>KRS: 0001135823</div>
                <div style={{ color: 'var(--low)', fontSize: '0.9rem' }}>VAT/NIP: Registered in Poland</div>
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Headquarters</p>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>Warsaw, Poland</div>
                <div style={{ color: 'var(--low)', fontSize: '0.9rem' }}>ul. Korytnicka 46, lok. 52</div>
                <div style={{ color: 'var(--low)', fontSize: '0.9rem' }}>04-109 Warsaw</div>
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Direct Inquiries</p>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>Compliance &amp; Legal</div>
                <a href="mailto:legal@coincashy.io" style={{ color: 'var(--hi)', fontSize: '0.9rem', display: 'block' }}>legal@coincashy.io</a>
                <a href="tel:+447452022306" style={{ color: 'var(--hi)', fontSize: '0.9rem', display: 'block' }}>+44 7452 022306</a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="sec" style={{ paddingBottom: '5rem' }}>
          <div className="wrap">
            <div style={{ borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'var(--surface)', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Need Institutional Due Diligence Materials?</h2>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--low)' }}>
                Our compliance team provides comprehensive KYB packages, partner risk assessments, and compliance overviews for institutional counterparties.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-solid" href="/contact?topic=compliance">
                  Request Compliance Pack<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </Link>
                <Link className="btn btn-line" href="/complaints">
                  Disclosures &amp; Complaints
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
