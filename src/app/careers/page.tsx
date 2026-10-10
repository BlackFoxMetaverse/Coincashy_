import Footer from '@/components/Footer';

const roles = [
  {
    title: 'Senior Product Manager',
    description: 'Shape the roadmap for global payment rails, treasury automation and wallet infrastructure.',
  },
  {
    title: 'Compliance Analyst',
    description: 'Support onboarding, screening and risk operations across crypto and fiat flows.',
  },
  {
    title: 'Back-End Engineer',
    description: 'Build the infrastructure behind payments, FX logic and settlement orchestration.',
  },
  {
    title: 'Operations Lead',
    description: 'Guide execution quality, service reliability and partner support for critical flows.',
  },
];

export default function CareersPage() {
  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '1100px', paddingBottom: '2rem' }}>
          <p className="eyebrow">Careers</p>
          <h1 className="display">Build the next generation of money movement.</h1>
          <p className="lede" style={{ maxWidth: '720px' }}>
            Join a team connecting traditional finance and digital assets with the focus, discipline and speed institutions need.
          </p>
        </section>

        <section className="wrap" style={{ maxWidth: '1100px', paddingBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {roles.map((role) => (
              <div key={role.title} style={{ padding: '1.5rem', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <h2 className="h4" style={{ marginBottom: '0.7rem' }}>{role.title}</h2>
                <p className="body" style={{ color: 'var(--low)', marginBottom: '1rem' }}>{role.description}</p>
                <a href="mailto:careers@coincashy.io" className="btn btn-line btn-sm">Apply</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
