import Footer from '@/components/Footer';

const pillars = [
  {
    title: 'KYC and KYB verification',
    description: 'Review identity, beneficial ownership and sanctions context before activation.',
  },
  {
    title: 'Screening and monitoring',
    description: 'Cross-check counterparties and transaction patterns against sanctions and risk lists.',
  },
  {
    title: 'Operational controls',
    description: 'Capture settlement details, wallet actions and approvals with traceable records.',
  },
  {
    title: 'Partner-enforced eligibility',
    description: 'Apply regional restrictions, account-level controls and payment-rail rules consistently.',
  },
];

export default function CompliancePage() {
  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '1100px', paddingBottom: '2rem' }}>
          <p className="eyebrow">Compliance</p>
          <h1 className="display" style={{ maxWidth: '760px' }}>Built for regulated flows, not just fast execution.</h1>
          <p className="lede" style={{ maxWidth: '760px' }}>
            Coincashy combines crypto infrastructure with control layers that help businesses move money within risk limits and reporting requirements.
          </p>
        </section>

        <section className="wrap" style={{ maxWidth: '1100px', paddingBottom: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {pillars.map((item) => (
              <div key={item.title} style={{ padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--line)', background: 'linear-gradient(180deg, var(--surface), var(--ground))' }}>
                <h2 className="h4" style={{ marginBottom: '0.6rem' }}>{item.title}</h2>
                <p className="body" style={{ color: 'var(--low)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap" style={{ maxWidth: '1100px', paddingBottom: '4rem' }}>
          <div style={{ border: '1px solid var(--line)', borderRadius: '28px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'var(--surface)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              <div>
                <p className="eyebrow">Why it matters</p>
                <h2 className="h2">Risk and speed must work together.</h2>
              </div>
              <div>
                <p className="body" style={{ color: 'var(--low)' }}>
                  We help teams move between crypto, fiat and settlement rails while preserving the controls required by investors, partners and regulators.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
