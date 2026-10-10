import Footer from '@/components/Footer';

export default function StatusPage() {
  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '760px', paddingBottom: '4rem' }}>
          <p className="eyebrow">System Status</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}></div>
            <h1 className="display" style={{ fontSize: '2.5rem', margin: 0 }}>All systems operational</h1>
          </div>
          <p className="lede" style={{ marginBottom: '3rem' }}>
            Coincashy's services are currently running smoothly. Last updated: Just now.
          </p>

          <div style={{ background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: 'var(--hi)' }}>API & Webhooks</span>
              <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '0.9rem' }}>Operational</span>
            </div>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Trading & OTC</span>
              <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '0.9rem' }}>Operational</span>
            </div>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Fiat Gateways (SEPA/FPS)</span>
              <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '0.9rem' }}>Operational</span>
            </div>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Crypto Deposits/Withdrawals</span>
              <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '0.9rem' }}>Operational</span>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Web Application</span>
              <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '0.9rem' }}>Operational</span>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--line)', textAlign: 'center' }}>
            <p style={{ color: 'var(--low)', margin: 0 }}>Experiencing an issue not listed here? <a href="/contact" style={{ color: 'var(--hi)', textDecoration: 'underline' }}>Contact Support</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
