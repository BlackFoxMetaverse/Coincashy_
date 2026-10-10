'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <section className="wrap" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: 'var(--hi)' }}>500</p>
            <h1 className="display" style={{ color: 'var(--hi)' }}>A critical error occurred.</h1>
            <p className="lede" style={{ margin: '1rem auto 2rem', color: 'var(--low)' }}>
              We're having trouble loading this application. Please try refreshing or go back home.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={() => reset()} className="btn btn-solid" style={{ padding: '0.75rem 1.5rem', borderRadius: '99px', background: 'var(--hi)', color: 'var(--ground)', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Try again</button>
              <Link href="/" className="btn btn-line" style={{ padding: '0.75rem 1.5rem', borderRadius: '99px', border: '1px solid var(--line)', color: 'var(--hi)', textDecoration: 'none', fontWeight: 600 }}>Back to home</Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
