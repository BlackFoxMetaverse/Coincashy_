import Link from 'next/link';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '760px', textAlign: 'center', paddingBottom: '4rem' }}>
          <p className="eyebrow">404</p>
          <h1 className="display">This page isn’t available.</h1>
          <p className="lede" style={{ margin: '1rem auto 2rem' }}>
            We couldn’t find the page you were looking for, but we can get you back on track.
          </p>
          <div className="cta-row" style={{ justifyContent: 'center', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-solid">Back to home</Link>
            <Link href="/contact" className="btn btn-line">Contact support</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
