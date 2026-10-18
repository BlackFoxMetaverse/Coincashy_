import Link from 'next/link';
import CryptoExchangeWidget from '../../crypto-exchange/components/CryptoExchangeWidget';
import HowItWorksStepper from './HowItWorksStepper';
import CardLabSection from './CardLabSection';
import OneAccountGrid from './OneAccountGrid';

export default function PersonalView({ standalone = false }: { standalone?: boolean } = {}) {
  return (
  <main className="page" id="personal" hidden={!standalone ? true : undefined} suppressHydrationWarning>
    {/* ============ Hero Section with Exchange Widget ============ */}
    <section className="p-hero" id="p-hero">
      <div className="p-hero-glow" aria-hidden="true" />
      <div className="wrap p-hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Crypto for everyday life</p>
          <h1 className="display"><span className="nw">Buy it.</span> <span className="nw">Move it.</span> <em className="nw">Spend it.</em></h1>
          <p className="lede">A simple way to buy and sell crypto, fund your wallet and use a personal crypto card, all from one connected experience.</p>
          <div className="cta-row" style={{ flexWrap: 'wrap', gap: '10px' }}>
            <a className="btn btn-solid" href="#buy">Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            <a className="btn btn-line" href="#sell">Sell crypto</a>
            <a className="btn btn-line" href="#convert">Convert crypto</a>
            <Link className="btn btn-line" href="/cards">Explore the card<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
          </div>
          <p className="fine">Product availability depends on country, eligibility and partner approval.</p>
        </div>
        <div className="w-col" id="exchange-widget">
          <CryptoExchangeWidget />
          <p className="p-caption">Indicative rates for illustration. Your final quote is shown before you pay.</p>
        </div>
      </div>
    </section>

    {/* ============ Marquee Strip ============ */}
    <section className="strip-sec">
      <div className="wrap">
        <div className="strip">
          <span className="strip-label">One connected experience</span>
          <div className="marquee" style={{'--dur': '36s'} as React.CSSProperties}>
            <div className="marquee-track">
              <div className="marquee-group">
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Buy with card</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Apple Pay &amp; Google Pay</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>Sell to bank</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg>Convert crypto</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-nfc" /></svg>Spend with your card</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Buy with card</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Apple Pay &amp; Google Pay</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>Sell to bank</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg>Convert crypto</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-nfc" /></svg>Spend with your card</span><span className="m-sep" />
              </div>
              <div className="marquee-group" aria-hidden="true">
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Buy with card</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Apple Pay &amp; Google Pay</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>Sell to bank</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg>Convert crypto</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-nfc" /></svg>Spend with your card</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Buy with card</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Apple Pay &amp; Google Pay</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>Sell to bank</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg>Convert crypto</span><span className="m-sep" />
                <span className="m-item"><svg className="ic" aria-hidden="true"><use href="#i-nfc" /></svg>Spend with your card</span><span className="m-sep" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ============ One Account Grid (Buy, Sell, Convert, Spend) ============ */}
    <section className="sec" id="account">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">One account</p>
            <h2 className="h2">Buy, sell, convert and spend from one place.</h2>
          </div>
          <p className="body rv">Start with familiar payment methods, follow clear transaction steps and manage your digital value without unnecessary complexity.</p>
        </div>
        <OneAccountGrid />
      </div>
    </section>

    {/* ============ Dedicated Section: Buy Crypto ============ */}
    <section className="sec" id="buy" style={{ scrollMarginTop: '110px' }}>
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Instant On-Ramp</p>
            <h2 className="h2">Buy crypto with card, Apple Pay, or bank rail.</h2>
          </div>
          <p className="body rv">
            Acquire Bitcoin, Ethereum, Solana, and stablecoins in seconds with zero hidden markups. Delivered straight to your self-custody or Coincashy wallet.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px', marginTop: '2rem' }}>
          {/* Rail 1: Apple & Google Pay */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
              <svg className="ic" style={{ width: '22px', height: '22px' }}><use href="#b-applepay" /></svg>
            </div>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>Apple Pay &amp; Google Pay</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55, flexGrow: 1 }}>
              1-tap checkout directly from your iPhone, Mac, or Android device. Biometric Face ID verification and instant crypto delivery.
            </p>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ Instant sub-60s credit</span>
            </div>
          </div>

          {/* Rail 2: Visa & Mastercard */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
              <svg className="ic" style={{ width: '22px', height: '22px' }}><use href="#i-credit-card" /></svg>
            </div>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>Credit &amp; Debit Cards</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55, flexGrow: 1 }}>
              Universal global support for Visa and Mastercard in 140+ countries. Protected by 3D-Secure 2.0 anti-fraud protocols.
            </p>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ Fixed locked-in quotes</span>
            </div>
          </div>

          {/* Rail 3: SEPA Instant */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
              <svg className="ic" style={{ width: '22px', height: '22px' }}><use href="#b-sepa" /></svg>
            </div>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>SEPA Instant &amp; Bank Wire</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55, flexGrow: 1 }}>
              Deposit EUR in under 10 seconds with 0% bank rail fees across 36 European nations. UK Faster Payments for instant GBP.
            </p>
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ 0% deposit transaction fee</span>
            </div>
          </div>
        </div>

        {/* Quick Buy Asset Row */}
        <div style={{ marginTop: '2.5rem', padding: '1.75rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg-faint)', fontWeight: 600 }}>Supported Purchase Assets</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '99px', background: 'var(--surface-2)', fontSize: '0.86rem', fontWeight: 600 }}>
                <span className="coin sm btc">₿</span> Bitcoin (BTC)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '99px', background: 'var(--surface-2)', fontSize: '0.86rem', fontWeight: 600 }}>
                <span className="coin sm eth">Ξ</span> Ethereum (ETH)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '99px', background: 'var(--surface-2)', fontSize: '0.86rem', fontWeight: 600 }}>
                <span className="coin sm usdt">₮</span> Tether (USDT)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '99px', background: 'var(--surface-2)', fontSize: '0.86rem', fontWeight: 600 }}>
                <span className="coin sm usdc">$</span> USD Coin (USDC)
              </span>
            </div>
          </div>
          <a className="btn btn-solid" href="#exchange-widget" style={{ minWidth: '160px' }}>
            Buy with Widget
            <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
          </a>
        </div>
      </div>
    </section>

    {/* ============ Dedicated Section: Sell Crypto ============ */}
    <section className="sec" id="sell" style={{ scrollMarginTop: '110px' }}>
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Direct Bank Off-Ramp</p>
            <h2 className="h2">Sell crypto. Cash out directly to your bank account.</h2>
          </div>
          <p className="body rv">
            Convert supported cryptocurrencies and receive fiat funds in your bank account via SEPA Instant or Faster Payments with guaranteed locked quotes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px', marginTop: '2rem' }}>
          {/* Sell Step 1 */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.8rem', color: 'var(--jade)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>STEP 01</span>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>Select Asset &amp; Currency</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Choose to sell BTC, ETH, USDT, USDC, or SOL and select whether you want EUR, GBP, or USD payout.
            </p>
          </div>

          {/* Sell Step 2 */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.8rem', color: 'var(--jade)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>STEP 02</span>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>Enter Your Bank Details</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Provide your IBAN or bank account details. We verify account ownership in real time for compliance and safety.
            </p>
          </div>

          {/* Sell Step 3 */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.8rem', color: 'var(--jade)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>STEP 03</span>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>Instant Fiat Transfer</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Send your crypto to the designated escrow address. As soon as confirmed, fiat lands in your bank in seconds via SEPA Instant.
            </p>
          </div>
        </div>

        {/* Sell visual simulation & CTA */}
        <div style={{ marginTop: '2.5rem', padding: '2rem', borderRadius: '24px', background: 'linear-gradient(145deg, var(--surface), var(--ground))', border: '1px solid var(--line)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--jade)', fontWeight: 600 }}>• Instant Off-Ramp Simulation</span>
            <h3 className="h3" style={{ margin: '0.5rem 0 0.75rem' }}>From Blockchain to European IBAN in &lt;10s</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem' }}>
              No days-long bank delays or broker freezes. Experience true institutional liquidity with wholesale OTC exchange rates.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px 18px', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--fg-dim)', fontSize: '0.9rem' }}>You send</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 600 }}>1.0000 ETH</span>
            </div>
            <div style={{ padding: '14px 18px', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--fg-dim)', fontSize: '0.9rem' }}>Your bank receives</span>
              <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 600, color: 'var(--jade)' }}>€2,284.50 EUR (SEPA)</span>
            </div>
            <a className="btn btn-solid btn-block" href="#exchange-widget" style={{ justifyContent: 'center', marginTop: '6px' }}>
              Start Selling with Widget
              <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ============ Dedicated Section: Convert Crypto ============ */}
    <section className="sec" id="convert" style={{ scrollMarginTop: '110px' }}>
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Zero-Slippage Swaps</p>
            <h2 className="h2">Convert between 50+ crypto assets seamlessly.</h2>
          </div>
          <p className="body rv">
            Move between Bitcoin, stablecoins, and leading tokens with a single click. Guaranteed quotes, 0 gas volatility, and no complex order book charts.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px', marginTop: '2rem' }}>
          {/* Feature 1 */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--jade)', marginBottom: '1.25rem' }}>
              <svg className="ic" style={{ width: '22px', height: '22px' }}><use href="#i-gauge" /></svg>
            </div>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>0% Slippage Guarantee</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              DEX swaps frequently suffer from MEV bots and 2–5% slippage. Coincashy locks your execution rate for 30 seconds: what you see is exactly what lands in your wallet.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--brass)', marginBottom: '1.25rem' }}>
              <svg className="ic" style={{ width: '22px', height: '22px' }}><use href="#i-repeat" /></svg>
            </div>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>50+ Cross-Chain Pairs</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Swap between Bitcoin, Ethereum, Solana, USDT, USDC, and EURC without multi-bridge wrapping risks or native gas token prerequisites.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{ padding: '2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
              <svg className="ic" style={{ width: '22px', height: '22px' }}><use href="#i-lock" /></svg>
            </div>
            <h3 className="h3" style={{ marginBottom: '0.6rem' }}>Deep OTC Liquidity</h3>
            <p className="body" style={{ color: 'var(--low)', fontSize: '0.92rem', lineHeight: 1.55 }}>
              Whether converting €50 or €500,000, our institutional liquidity aggregation routes your swap through deep order books with zero price impact.
            </p>
          </div>
        </div>

        {/* Convert CTA banner */}
        <div style={{ marginTop: '2.5rem', padding: '1.75rem 2rem', borderRadius: '22px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--hi)', marginBottom: '4px' }}>Ready to swap between assets?</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--low)' }}>Select any two crypto assets in our exchange terminal to preview real-time locked rates.</div>
          </div>
          <a className="btn btn-solid" href="#exchange-widget" style={{ minWidth: '160px' }}>
            Convert with Widget
            <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
          </a>
        </div>
      </div>
    </section>

    {/* ============ Personal Crypto Card Lab ============ */}
    <section className="sec" id="card" style={{ scrollMarginTop: '110px' }}>
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Personal crypto card</p>
            <h2 className="h2">Your crypto. Ready for real life.</h2>
          </div>
          <p className="body rv">Move supported balances into everyday spending through a personal card experience designed for clarity and control. Try the controls below or visit our dedicated Card Studio.</p>
        </div>
        <CardLabSection />
      </div>
    </section>

    {/* ============ How It Works ============ */}
    <section className="sec" id="how" style={{ scrollMarginTop: '110px' }}>
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">Simple by design</p>
          <h2 className="h2">From payment to crypto in four clear steps.</h2>
          <p className="lede">Exact verification, processing time and availability depend on the selected product and country.</p>
        </div>
        <HowItWorksStepper />
      </div>
    </section>

    {/* ============ FAQ Section ============ */}
    <section className="sec sec-flush-top" id="faq-personal" style={{ scrollMarginTop: '110px' }}>
      <div className="wrap faq-grid">
        <div className="sec-head">
          <p className="eyebrow">Questions</p>
          <h2 className="h2">Good to know before you start.</h2>
        </div>
        <div className="faq">
          <details><summary>What can I do with Coincashy?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Buy and sell supported crypto, convert between assets, fund your wallet and, where available, spend with a personal crypto card. Everything runs from one connected account.</p></details>
          <details><summary>Which payment methods can I use?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Card, Apple Pay, Google Pay and bank transfer, depending on your country and the product you choose. The options available to you are shown before you pay.</p></details>
          <details><summary>Are fees included?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Fees are included in the quote. You see the full quote before you confirm, and each quote is held for a short time before it refreshes.</p></details>
          <details><summary>Why do I need to verify my identity?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Identity and payment checks keep accounts secure and are required before you can buy or sell. The exact checks depend on your country and the product you use.</p></details>
          <details><summary>How long does a purchase take?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">It depends on the product, your payment method and your country. You can follow each step as it happens: choose, pay, verify and receive.</p></details>
          <details><summary>When can I get the crypto card?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">The card is partner-enabled, and availability depends on your country and eligibility. Join the waitlist and the team will contact you when it is available to you.</p></details>
        </div>
      </div>
    </section>

    {/* ============ Closing Sonar ============ */}
    <section className="sec sonar" data-sonar>
      <canvas className="sonar-canvas" aria-hidden="true" suppressHydrationWarning />
      <div className="sonar-wash" aria-hidden="true" />
      <div className="wrap sonar-inner">
        <p className="eyebrow">Get started</p>
        <h2 className="h2">Crypto that fits your life.</h2>
        <p className="lede">Choose your asset and preferred payment method to begin. Get started in minutes with secure on-ramps and transparent pricing.</p>
        <div className="cta-row"><a className="btn btn-solid" href="#exchange-widget">Launch Exchange Terminal<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a><Link className="btn btn-line" href="/cards">Explore Cards<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
      </div>
    </section>
  </main>
  );
}
