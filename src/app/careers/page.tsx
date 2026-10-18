'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface Role {
  id: string;
  title: string;
  dept: 'Engineering' | 'Compliance' | 'Product' | 'Operations';
  location: string;
  type: string;
  desc: string;
  reqs: string[];
}

const roles: Role[] = [
  {
    id: 'pm-lead',
    title: 'Senior Product Manager – Payment Rails',
    dept: 'Product',
    location: 'Warsaw / Hybrid',
    type: 'Full-time',
    desc: 'Lead the roadmap for multi-currency vIBANs, stablecoin treasury automation, and institutional payment routing.',
    reqs: [
      '5+ years in fintech, banking, or crypto payments',
      'Deep understanding of SEPA, Faster Payments, and SWIFT rails',
      'Demonstrated experience shipping B2B API integrations',
    ],
  },
  {
    id: 'compliance-analyst',
    title: 'Senior Compliance & AML Analyst',
    dept: 'Compliance',
    location: 'Warsaw, Poland',
    type: 'Full-time',
    desc: 'Perform institutional KYB reviews, blockchain transaction investigations via Global Ledger, and ensure regulatory alignment.',
    reqs: [
      '3+ years in AML/CTF compliance at a VASP or financial institution',
      'Experience with Sumsub, Chainalysis, or Global Ledger',
      'Fluency in Polish and English regulations (EU AML directives, MiCA)',
    ],
  },
  {
    id: 'backend-eng',
    title: 'Lead Backend Engineer (Go / Node.js)',
    dept: 'Engineering',
    location: 'Warsaw / Remote (EU)',
    type: 'Full-time',
    desc: 'Architect high-throughput settlement systems, exchange rate lock engines, and cryptographic ledger integrations.',
    reqs: [
      '5+ years building distributed financial backends',
      'Expertise in Go, TypeScript, PostgreSQL, and event-driven architecture (Kafka/RabbitMQ)',
      'Experience with MPC custody (BitGo/Utila) or blockchain RPC nodes',
    ],
  },
  {
    id: 'otc-trader',
    title: 'Institutional OTC Trader',
    dept: 'Operations',
    location: 'Warsaw, Poland',
    type: 'Full-time',
    desc: 'Manage day-to-day liquidity desk execution, provide competitive RFQ pricing, and oversee bilateral fiat/crypto settlements.',
    reqs: [
      'Proven track record in crypto OTC trading or FX spot desk execution',
      'Strong network of institutional counterparties, brokers, and market makers',
      'Comfortable managing risk and liquidity in high-volatility scenarios',
    ],
  },
  {
    id: 'frontend-eng',
    title: 'Senior Frontend Engineer (React / Next.js)',
    dept: 'Engineering',
    location: 'Warsaw / Remote (EU)',
    type: 'Full-time',
    desc: 'Craft ultra-fast, responsive web interfaces, interactive financial calculators, and developer portals.',
    reqs: [
      '4+ years building production Next.js & React web applications',
      'Mastery of modern CSS, micro-interactions, responsive design, and accessibility',
      'Experience building financial dashboards or checkout widgets',
    ],
  },
];

const perks = [
  {
    title: 'Flexible & Hybrid',
    desc: 'Work from our modern Warsaw office or remote across European time zones.',
  },
  {
    title: 'Multi-Currency Pay',
    desc: 'Option to receive your compensation in EUR, PLN, or stablecoins (USDT/USDC).',
  },
  {
    title: 'Tech & Workspace Stipend',
    desc: 'Top-of-the-line MacBook Pro, 4K displays, and ergonomic home office allowance.',
  },
  {
    title: 'Health & Wellness',
    desc: 'Comprehensive private medical care, dental coverage, and sports club passes.',
  },
  {
    title: 'Conference Attendance',
    desc: 'Annual learning budget and tickets to premier crypto events like Token2049.',
  },
  {
    title: 'Equity & Bonuses',
    desc: 'Competitive incentive plans aligning your success directly with Coincashy growth.',
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeModalRole, setActiveModalRole] = useState<Role | null>(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantLinkedin, setApplicantLinkedin] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const filteredRoles = selectedDept === 'All' 
    ? roles 
    : roles.filter((r) => r.dept === selectedDept);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setApplied(true);
    setTimeout(() => {
      // simulate success
    }, 500);
  };

  const closeModal = () => {
    setActiveModalRole(null);
    setApplied(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantLinkedin('');
    setApplicantNote('');
  };

  return (
    <>
      <main className="page" style={{ background: 'var(--ground)' }}>
        {/* Hero */}
        <section className="hero subpage-hero" id="careers-hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="hero-orb" />
            <span className="hero-veil" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy hero-copy-center">
              <p className="eyebrow">Careers at Coincashy</p>
              <h1 className="display">
                Build the next generation of <em>money movement.</em>
              </h1>
              <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
                We are a passionate team of engineers, traders, and compliance experts connecting traditional banking and digital assets. Join us in Warsaw or remotely across Europe.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a className="btn btn-solid" href="#open-roles">
                  Explore Open Roles<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                </a>
                <Link className="btn btn-line" href="/about">
                  Life at Coincashy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Perks Grid */}
        <section className="sec" id="why-join" style={{ paddingBottom: '4rem', scrollMarginTop: '100px' }}>
          <div className="wrap">
            <div className="sec-split" style={{ marginBottom: '3rem' }}>
              <div className="sec-head">
                <p className="eyebrow">Life &amp; Culture</p>
                <h2 className="h2">Why join our team?</h2>
              </div>
              <p className="body" style={{ color: 'var(--low)' }}>
                We believe in high autonomy, fast feedback loops, and rewarding craftsmanship. We take compliance seriously, move fast, and support each other.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {perks.map((p) => (
                <div key={p.title} style={{ padding: '2rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  <h3 className="h4" style={{ marginBottom: '0.5rem', color: 'var(--hi)' }}>{p.title}</h3>
                  <p className="body" style={{ color: 'var(--low)', fontSize: '0.925rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="sec" id="open-roles" style={{ paddingBottom: '5rem', scrollMarginTop: '100px' }}>
          <div className="wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <p className="eyebrow">Current Openings</p>
                <h2 className="h2">Find your next role.</h2>
              </div>

              {/* Department Filters */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['All', 'Engineering', 'Compliance', 'Product', 'Operations'].map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDept(dept)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '999px',
                      border: '1px solid var(--line)',
                      background: selectedDept === dept ? 'var(--hi)' : 'var(--surface)',
                      color: selectedDept === dept ? 'var(--ground)' : 'var(--fg)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Roles List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {filteredRoles.map((role) => (
                <div
                  key={role.id}
                  style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hi)', background: 'var(--surface-2)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>{role.dept}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--low)' }}>• {role.location}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--low)' }}>• {role.type}</span>
                      </div>
                      <h3 className="h3" style={{ fontSize: '1.35rem', margin: 0 }}>{role.title}</h3>
                    </div>
                    <button
                      type="button"
                      className="btn btn-solid btn-sm"
                      onClick={() => setActiveModalRole(role)}
                    >
                      Apply Now<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                    </button>
                  </div>

                  <p className="body" style={{ color: 'var(--low)', margin: 0, fontSize: '0.95rem' }}>{role.desc}</p>

                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Requirements:</span>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--low)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {role.reqs.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Speculative Application */}
            <div style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '24px', background: 'linear-gradient(145deg, var(--surface), var(--ground))', border: '1px solid var(--line)', textAlign: 'center' }}>
              <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Don't see your exact role?</h3>
              <p className="body" style={{ maxWidth: '600px', margin: '0 auto 1.5rem', color: 'var(--low)' }}>
                We are always eager to meet outstanding engineers, liquidity specialists, and compliance experts. Send us your CV and tell us what you'd like to build.
              </p>
              <a className="btn btn-line" href="mailto:careers@coincashy.io?subject=General%20Application%20-%20Coincashy">
                Email General Application<svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Application Modal */}
        {activeModalRole && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '560px',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <button
                type="button"
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--fg)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                }}
                aria-label="Close modal"
              >
                <svg className="ic" style={{ width: '20px', height: '20px' }}><use href="#i-x" /></svg>
              </button>

              {!applied ? (
                <>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hi)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Application</span>
                    <h3 className="h3" style={{ fontSize: '1.35rem', marginTop: '0.25rem', marginBottom: '0.25rem' }}>{activeModalRole.title}</h3>
                    <div style={{ color: 'var(--low)', fontSize: '0.85rem' }}>{activeModalRole.location} • {activeModalRole.type}</div>
                  </div>

                  <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="field">
                      <label htmlFor="app-name">Full name *</label>
                      <input
                        id="app-name"
                        className="input"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="app-email">Email address *</label>
                      <input
                        id="app-email"
                        type="email"
                        className="input"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="app-linkedin">LinkedIn / GitHub Profile</label>
                      <input
                        id="app-linkedin"
                        type="url"
                        className="input"
                        value={applicantLinkedin}
                        onChange={(e) => setApplicantLinkedin(e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="app-note">Tell us about your experience</label>
                      <textarea
                        id="app-note"
                        className="input"
                        rows={3}
                        value={applicantNote}
                        onChange={(e) => setApplicantNote(e.target.value)}
                        placeholder="Brief summary of relevant projects and why you'd like to join Coincashy."
                      />
                    </div>

                    <button type="submit" className="btn btn-solid btn-block" style={{ marginTop: '0.5rem' }}>
                      Submit Application<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <svg className="ic" style={{ width: '28px', height: '28px' }}><use href="#i-check" /></svg>
                  </div>
                  <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Application Received!</h3>
                  <p className="body" style={{ color: 'var(--low)', marginBottom: '2rem' }}>
                    Thank you, <strong>{applicantName}</strong>. We've received your application for <strong>{activeModalRole.title}</strong>. Our recruiting team will review your profile and reach out within 3 business days.
                  </p>
                  <button type="button" className="btn btn-line" onClick={closeModal}>
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
