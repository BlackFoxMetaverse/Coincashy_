import React from 'react';
import Footer from '@/components/Footer';

interface Section {
  title: string;
  content: React.ReactNode | React.ReactNode[];
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
        <main className="legal-page-main">
          <div className="wrap" style={{ maxWidth: '800px' }}>

            {/* Page header */}
            <div className="legal-header">
              <p className="legal-badge">
                Legal
              </p>
              <h1 className="legal-title">
                {title}
              </h1>
              <p className="legal-subtitle">{subtitle}</p>
              <p className="legal-effective">
                Effective date: <strong style={{ color: 'var(--fg)' }}>{effectiveDate}</strong>
              </p>
            </div>

            {/* Table of contents */}
            <nav aria-label="Page contents" className="legal-toc">
              <p className="legal-toc-title">Contents</p>
              <ol className="legal-toc-list">
                {sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i + 1}`}
                      className="legal-toc-link"
                    >
                      <span className="legal-section-num">{i + 1}.</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="legal-sections">
              {sections.map((s, i) => (
                <section key={i} id={`section-${i + 1}`}>
                  <h2 className="legal-section-h2">
                    <span className="legal-section-num">{i + 1}.</span>
                    <span>{s.title}</span>
                  </h2>
                  {Array.isArray(s.content) ? (
                    <div className="legal-section-body">
                      {s.content.map((item, j) => (
                        <React.Fragment key={j}>
                          {typeof item === 'string' ? (
                            <p className="legal-text">{item}</p>
                          ) : (
                            <div className="legal-text">{item}</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <div className="legal-section-body">
                      {typeof s.content === 'string' ? (
                        <p className="legal-text">{s.content}</p>
                      ) : (
                        <div className="legal-text">{s.content}</div>
                      )}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Contact block */}
            <div className="legal-contact">
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Questions about this document?</p>
              <p style={{ color: 'var(--low)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Contact our legal team at{' '}
                <a href="mailto:legal@coincashy.io" style={{ color: 'var(--hi)' }}>legal@coincashy.io</a>{' '}
                or write to Coincashy Sp. z o.o., ul. Korytnicka 46/52, Warsaw, Poland.
              </p>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
