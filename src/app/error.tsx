'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '760px', textAlign: 'center', paddingBottom: '4rem' }}>
          <p className="eyebrow">500</p>
          <h1 className="display">Something went wrong.</h1>
          <p className="lede" style={{ margin: '1rem auto 2rem' }}>
            An unexpected error has occurred on our end. We've been notified and are looking into it.
          </p>
          <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={() => reset()} className="btn btn-solid">Try again</button>
            <Link href="/" className="btn btn-line">Back to home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
