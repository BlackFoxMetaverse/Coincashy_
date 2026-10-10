import Footer from '@/components/Footer';

export default function FeesPage() {
  return (
    <>
      <main className="page" style={{ paddingTop: '7rem', background: 'var(--ground)' }}>
        <section className="wrap" style={{ maxWidth: '980px', paddingBottom: '3rem' }}>
          <p className="eyebrow">Fees & Limits</p>
          <h1 className="display">Transparent pricing. No hidden costs.</h1>
          <p className="lede" style={{ margin: '1rem 0 3rem' }}>
            We believe in upfront pricing. Whether you are buying crypto for the first time or settling millions in stablecoins, you always see the cost before you confirm.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Personal Tier */}
            <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--hi)' }}>Personal Accounts</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>Account opening</span>
                  <span style={{ fontWeight: 600 }}>Free</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>Crypto deposits</span>
                  <span style={{ fontWeight: 600 }}>Free</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>Fiat deposits (SEPA/FPS)</span>
                  <span style={{ fontWeight: 600 }}>Free</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>Trading & Swaps</span>
                  <span style={{ fontWeight: 600 }}>Included in quote</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--low)' }}>Crypto withdrawals</span>
                  <span style={{ fontWeight: 600 }}>Network fee only</span>
                </li>
              </ul>
            </div>

            {/* Business Tier */}
            <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--hi)' }}>Business Accounts</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>Onboarding</span>
                  <span style={{ fontWeight: 600 }}>Custom</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>OTC Trading</span>
                  <span style={{ fontWeight: 600 }}>Custom spread</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>Crypto processing</span>
                  <span style={{ fontWeight: 600 }}>From 0.5%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--low)' }}>vIBAN & Accounts</span>
                  <span style={{ fontWeight: 600 }}>Tiered pricing</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--low)' }}>API & Webhooks</span>
                  <span style={{ fontWeight: 600 }}>Included</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--low)', marginBottom: '1rem' }}>Need custom pricing for enterprise volumes?</p>
            <a href="/contact" className="btn btn-solid">Talk to Sales</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
