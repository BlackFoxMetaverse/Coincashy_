// @ts-nocheck
import Footer from '@/components/Footer';

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

        <Footer />
      </div>
    </>
  );
}
