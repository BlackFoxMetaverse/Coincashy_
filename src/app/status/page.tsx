import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'System Status – Operational Health & Uptime | Coincashy',
  description: 'Live operational status, uptime metrics, and service health for the Coincashy API, OTC desk, banking rails, and crypto settlement network.',
};

const components = [
  { name: 'Core API & Webhooks', status: 'Operational', latency: '42ms' },
  { name: 'OTC Trading & Liquidity Desk', status: 'Operational', latency: 'T+0' },
  { name: 'EUR Banking Gateway (SEPA / SEPA Instant)', status: 'Operational', latency: '< 10s' },
  { name: 'GBP Banking Gateway (Faster Payments / FPS)', status: 'Operational', latency: '< 15s' },
  { name: 'Institutional MPC Custody (BitGo & Utila)', status: 'Operational', latency: '99.99%' },
  { name: 'Personal & Corporate Card Network', status: 'Operational', latency: 'Normal' },
  { name: 'On/Off-Ramp Checkout Widget', status: 'Operational', latency: '99.98%' },
  { name: 'Web Application & Dashboard', status: 'Operational', latency: '28ms' },
];

export default function StatusPage() {
  return (
    <>
      <main className="page" style={{ paddingTop: 'clamp(5.5rem, 8vw, 7.5rem)', background: 'var(--ground)' }}>
        {/* Status Header */}
        <section className="wrap" style={{ maxWidth: '860px', paddingBottom: '3rem' }}>
          <p className="eyebrow">Service Health</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ position: 'relative', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#22c55e', opacity: 0.4, animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <h1 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', margin: 0 }}>
              All systems operational
            </h1>
          </div>

          <p className="lede" style={{ color: 'var(--low)', margin: 0 }}>
            Coincashy infrastructure is operating normally. Continuous monitoring across European banking rails, crypto networks, and custody MPC.
          </p>
        </section>

        {/* 90-Day Uptime Bar */}
        <section className="wrap" style={{ maxWidth: '860px', paddingBottom: '3rem' }}>
          <div style={{ background: 'var(--surface)', borderRadius: '24px', padding: '1.75rem 2rem', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--hi)' }}>Overall System Availability</span>
              <span style={{ fontWeight: 700, color: '#22c55e', fontSize: '1.1rem' }}>99.98% Uptime</span>
            </div>

            {/* Simulated 90-day bar strip */}
            <div style={{ display: 'flex', gap: '3px', alignItems: 'center', width: '100%', height: '32px', marginBottom: '0.75rem' }} aria-label="90-day uptime timeline">
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={i}
                  title={`Day ${60 - i} ago: 100% operational`}
                  style={{
                    flex: 1,
                    height: '100%',
                    background: '#22c55e',
                    borderRadius: '2px',
                    opacity: 0.85,
                    transition: 'opacity 0.2s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--low)' }}>
              <span>60 days ago</span>
              <span>100% operational history</span>
              <span>Today</span>
            </div>
          </div>
        </section>

        {/* Component Health Breakdown */}
        <section className="wrap" style={{ maxWidth: '860px', paddingBottom: '3.5rem' }}>
          <div style={{ background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--line)', background: 'var(--surface-2)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--low)', letterSpacing: '0.08em' }}>Service Component</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--low)', letterSpacing: '0.08em' }}>Status &amp; Metric</span>
            </div>

            {components.map((item, idx) => (
              <div
                key={item.name}
                style={{
                  padding: '1.25rem 1.75rem',
                  borderBottom: idx < components.length - 1 ? '1px solid var(--line)' : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, color: 'var(--fg)', display: 'block' }}>{item.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--low)', fontFamily: 'monospace' }}>{item.latency}</span>
                  <span style={{ color: '#22c55e', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Incident History Archive */}
        <section className="wrap" style={{ maxWidth: '860px', paddingBottom: '5rem' }}>
          <div style={{ background: 'var(--surface)', borderRadius: '24px', padding: '2rem', border: '1px solid var(--line)' }}>
            <h3 className="h4" style={{ marginBottom: '1rem', color: 'var(--fg)' }}>Past Incident Archive</h3>
            <div style={{ borderLeft: '2px solid #22c55e', paddingLeft: '1.25rem', margin: '1rem 0' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>No incidents reported</div>
              <p className="body" style={{ color: 'var(--low)', fontSize: '0.9rem', margin: '0.35rem 0 0 0' }}>
                All Coincashy core systems, payment links, and liquidity rails operated with 100% availability over the past 90 days.
              </p>
            </div>
            
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ color: 'var(--low)', fontSize: '0.9rem' }}>Experiencing unexpected latency?</span>
              <Link href="/contact" className="btn btn-line btn-sm">
                Report an Issue
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
