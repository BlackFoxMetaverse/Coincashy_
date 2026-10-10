import Image from 'next/image';
import CryptoExchangeWidget from '../../crypto-exchange/components/CryptoExchangeWidget';

export default function PersonalView() {
  return (
  <main className="page" id="personal" hidden suppressHydrationWarning>
    <section className="p-hero" id="p-hero">
      <div className="p-hero-glow" aria-hidden="true" />
      <div className="wrap p-hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Crypto for everyday life</p>
          <h1 className="display"><span className="nw">Buy it.</span> <span className="nw">Move it.</span> <em className="nw">Spend it.</em></h1>
          <p className="lede">A simple way to buy and sell crypto, fund your wallet and use a personal crypto card, all from one connected experience.</p>
          <div className="cta-row">
            <a className="btn btn-solid" href="#buy">Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            <a className="btn btn-line" href="#card">Explore the card<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </div>
          <p className="fine">Product availability depends on country, eligibility and partner approval.</p>
        </div>
        <div className="w-col">
          <CryptoExchangeWidget />
          <p className="p-caption">Indicative rates for illustration. Your final quote is shown before you pay.</p>
        </div>
      </div>
    </section>
    <section className=" strip-sec">
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
    <section className="sec" id="account">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">One account</p>
            <h2 className="h2">Buy, sell and spend from one place.</h2>
          </div>
          <p className="body rv">Start with familiar payment methods, follow clear transaction steps and manage your digital value without unnecessary complexity.</p>
        </div>
        <div className="prod-grid">
          <article className="prod rv">
            <div className="prod-vis" aria-hidden="true">
              <div className="pm-stack">
                <div className="pm-row"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Card<em>Visa · Mastercard</em></div>
                <div className="pm-row sel"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Apple Pay<em>Selected</em></div>
                <div className="pm-row"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Google Pay</div>
                <div className="pm-row"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>Bank transfer</div>
              </div>
            </div>
            <h3 className="h3">Buy crypto</h3>
            <p className="body">Purchase supported assets using card, Apple Pay, Google Pay or bank transfer.</p>
            <a className="link-arrow" href="#buy">Start buying<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </article>
          <article className="prod rv">
            <div className="prod-vis" aria-hidden="true">
              <div className="sellflow">
                <div className="sf-node"><span className="ico"><span className="coin sm eth">╬₧</span></span><b>0.75 ETH</b>You sell</div>
                <svg className="ic sf-arrow" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                <div className="sf-node"><span className="ico"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><b>€1,706.90</b>Converted</div>
                <svg className="ic sf-arrow" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                <div className="sf-node"><span className="ico"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><b>•••• 4821</b>Your bank</div>
              </div>
            </div>
            <h3 className="h3">Sell crypto</h3>
            <p className="body">Convert supported digital assets and receive funds through available payout methods.</p>
            <a className="link-arrow" href="#sell">Start selling<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </article>
          <article className="prod rv">
            <div className="prod-vis" aria-hidden="true">
              <div className="prod-card">
                <div className="card finish-paper is-physical">
                  <div className="card-tex" /><div className="card-foil" /><div className="card-sheen" />
                  <div className="card-body">
                    <div className="card-row"><span className="card-word"><Image className="cw-dark" src="/media/logo-white.png" alt="Coincashy" width={1217} height={157} /><Image className="cw-light" src="/media/logo-black.png" alt="" width={1217} height={157} /></span><span className="card-type">PHYSICAL</span></div>
                    <div className="card-mid"><span className="card-chip" /><svg className="ic card-nfc" aria-hidden="true"><use href="#i-nfc" /></svg></div>
                    <div className="card-num">•••• •••• •••• 2049</div>
                    <div className="card-foot"><span>Your name</span><span>09/29</span></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="h3">Personal crypto card</h3>
            <p className="body">Use a partner-enabled virtual or physical card for eligible everyday purchases.</p>
            <a className="link-arrow" href="#card">Explore the card<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </article>
        </div>
      </div>
    </section>
    <section className="sec" id="card">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Personal crypto card</p>
            <h2 className="h2">Your crypto. Ready for real life.</h2>
          </div>
          <p className="body rv">Move supported balances into everyday spending through a personal card experience designed for clarity and control. Try the controls.</p>
        </div>
        <div className="lab-grid" id="card-lab">
          <div>
            <div className="lab-stage" data-tilt>
              <div className="card-tilt">
                <div className="card finish-vault" id="lab-card">
                  <div className="card-tex" /><div className="card-foil" /><div className="card-sheen" />
                  <div className="card-body">
                    <div className="card-row"><span className="card-word"><Image className="cw-dark" src="/media/logo-white.png" alt="Coincashy" width={1217} height={157} /><Image className="cw-light" src="/media/logo-black.png" alt="" width={1217} height={157} /></span><span className="card-type" id="lab-type">VIRTUAL</span></div>
                    <div className="card-mid"><span className="card-chip" /><svg className="ic card-nfc" aria-hidden="true"><use href="#i-nfc" /></svg></div>
                    <div className="card-num">•••• •••• •••• 2049</div>
                    <div className="card-foot"><span><small>Cardholder</small>Your name</span><span><small>Valid thru</small>09/29</span></div>
                  </div>
                  <div className="card-frost"><span><svg className="ic" aria-hidden="true"><use href="#i-snowflake" /></svg>Card frozen</span></div>
                </div>
              </div>
            </div>
            <ul className="lab-feats">
              <li><svg className="ic" aria-hidden="true"><use href="#i-layers" /></svg>Virtual and physical card options</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-eye" /></svg>Transaction and balance visibility</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-nfc" /></svg>Contactless and online spending</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-gauge" /></svg>Personal spending controls</li>
            </ul>
          </div>
          <div className="lab-panel">
            <div className="lab-group">
              <span className="lab-lbl" id="lbl-format">Format</span>
              <div className="seg" role="radiogroup" aria-labelledby="lbl-format" id="lab-format">
                <button type="button" role="radio" aria-checked="true" data-format="virtual">Virtual</button>
                <button type="button" role="radio" aria-checked="false" data-format="physical" tabIndex={-1}>Physical</button>
              </div>
            </div>
            <div className="lab-group">
              <span className="lab-lbl" id="lbl-finish">Finish</span>
              <div className="swatches" role="radiogroup" aria-labelledby="lbl-finish" id="lab-finish">
                <button type="button" className="swatch sw-vault" role="radio" aria-checked="true" data-finish="vault" aria-label="Vault" />
                <button type="button" className="swatch sw-sky" role="radio" aria-checked="false" data-finish="sky" aria-label="Sky" tabIndex={-1} />
                <button type="button" className="swatch sw-paper" role="radio" aria-checked="false" data-finish="paper" aria-label="Paper" tabIndex={-1} />
                <span className="sw-name" id="lab-finish-name">Vault</span>
              </div>
            </div>
            <div className="lab-group">
              <span className="lab-lbl">Controls</span>
              <div>
                <div className="switch-row"><span><b id="sw-freeze-l">Freeze card</b><small>Pause new payments straight away</small></span><button type="button" className="switch" id="sw-freeze" role="switch" aria-checked="false" aria-labelledby="sw-freeze-l" data-switch="frozen" /></div>
                <div className="switch-row"><span><b id="sw-online-l">Online payments</b><small>Shop on websites and in apps</small></span><button type="button" className="switch" id="sw-online" role="switch" aria-checked="true" aria-labelledby="sw-online-l" data-switch="online" /></div>
                <div className="switch-row"><span><b id="sw-nfc-l">Contactless</b><small>Tap to pay in store</small></span><button type="button" className="switch" id="sw-nfc" role="switch" aria-checked="true" aria-labelledby="sw-nfc-l" data-switch="contactless" /></div>
              </div>
            </div>
            <div className="range-row">
              <div className="top"><label className="lab-lbl" htmlFor="lab-limit">Monthly spending limit</label><output id="lab-limit-out" htmlFor="lab-limit">€1,500</output></div>
              <input type="range" id="lab-limit" min={100} max={5000} step={100} defaultValue={1500} />
            </div>
            <div className="lab-banner" id="lab-banner" hidden><svg className="ic" aria-hidden="true"><use href="#i-snowflake" /></svg><span>Your card is frozen. New payments are declined until you unfreeze it.</span></div>
            <div className="lab-group">
              <span className="lab-lbl">Recent activity</span>
              <div className="lab-activity">
                <div className="la-row"><span>Coffee shop<small>Today · Contactless</small></span><b>−€4.20</b></div>
                <div className="la-row"><span>Metro top-up<small>Yesterday · Online</small></span><b>−€20.00</b></div>
                <div className="la-row"><span>Available balance<small>Updated just now</small></span><b>€1,240.50</b></div>
              </div>
            </div>
            <form className="waitlist" id="waitlist" noValidate>
              <label className="lab-lbl" htmlFor="wl-email">Join the waitlist</label>
              <div className="wl-row"><input className="input" id="wl-email" type="email" placeholder="you@example.com" autoComplete="email" /><button className="btn btn-solid" type="submit">Join the waitlist</button></div>
              <span className="err" id="wl-email-err" />
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="sec" id="how">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">Simple by design</p>
          <h2 className="h2">From payment to crypto in four clear steps.</h2>
          <p className="lede">Exact verification, processing time and availability depend on the selected product and country.</p>
        </div>
        <div className="how-grid" id="how-grid">
          <div className="how-steps" role="tablist" aria-label="Steps to buy crypto" aria-orientation="vertical">
            <button className="how-step is-active" type="button" role="tab" aria-selected="true" aria-controls="hp-0" id="hs-0" suppressHydrationWarning><span className="n">01</span><span><span className="hs-t h3">Choose</span><span className="hs-d">Select an asset and enter the amount.</span></span><span className="bar" /></button>
            <button className="how-step" type="button" role="tab" aria-selected="false" aria-controls="hp-1" id="hs-1" tabIndex={-1} suppressHydrationWarning><span className="n">02</span><span><span className="hs-t h3">Pay</span><span className="hs-d">Use an available card, wallet or bank rail.</span></span><span className="bar" /></button>
            <button className="how-step" type="button" role="tab" aria-selected="false" aria-controls="hp-2" id="hs-2" tabIndex={-1} suppressHydrationWarning><span className="n">03</span><span><span className="hs-t h3">Verify</span><span className="hs-d">Complete the required identity and payment checks.</span></span><span className="bar" /></button>
            <button className="how-step" type="button" role="tab" aria-selected="false" aria-controls="hp-3" id="hs-3" tabIndex={-1} suppressHydrationWarning><span className="n">04</span><span><span className="hs-t h3">Receive</span><span className="hs-d">Your crypto moves to the supported destination.</span></span><span className="bar" /></button>
          </div>
          <div className="how-vis">
            <div className="how-pane is-active" id="hp-0" role="tabpanel" aria-labelledby="hs-0" suppressHydrationWarning>
              <div className="hp-card">
                <div className="hp-title">Choose an asset<small>Step 1 of 4</small></div>
                <div className="hp-row sel"><span className="coin sm btc">₿</span>Bitcoin<em>BTC</em></div>
                <div className="hp-row"><span className="coin sm eth">╬₧</span>Ether<em>ETH</em></div>
                <div className="hp-row"><span className="coin sm usdt">₮</span>Tether<em>USDT</em></div>
                <div className="hp-row"><span className="coin sm usdc">$</span>USD Coin<em>USDC</em></div>
                <div className="hp-row sel"><svg className="ic" aria-hidden="true"><use href="#i-euro" /></svg>Amount<em>€250.00</em></div>
              </div>
            </div>
            <div className="how-pane" id="hp-1" role="tabpanel" aria-labelledby="hs-1" aria-hidden="true" suppressHydrationWarning>
              <div className="hp-card">
                <div className="hp-title">Pay €250.00<small>Step 2 of 4</small></div>
                <div className="hp-grid">
                  <div className="hp-row"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Card</div>
                  <div className="hp-row sel"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Apple Pay</div>
                  <div className="hp-row"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg>Google Pay</div>
                  <div className="hp-row"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>Bank transfer</div>
                </div>
                <div className="hp-row"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg>Quote held<em>00:30</em></div>
              </div>
            </div>
            <div className="how-pane" id="hp-2" role="tabpanel" aria-labelledby="hs-2" aria-hidden="true" suppressHydrationWarning>
              <div className="hp-card">
                <div className="hp-title">Verify<small>Step 3 of 4</small></div>
                <div className="hp-check"><i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i>Identity check<em>Done</em></div>
                <div className="hp-check"><i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i>Payment check<em>Done</em></div>
                <div className="hp-check wait"><i />Wallet screening<em>In progress</em></div>
              </div>
            </div>
            <div className="how-pane" id="hp-3" role="tabpanel" aria-labelledby="hs-3" aria-hidden="true" suppressHydrationWarning>
              <div className="hp-card">
                <div className="hp-title">Received<small>Step 4 of 4</small></div>
                <div className="hp-big">+0.0034402 <span className="small mono">BTC</span></div>
                <div className="hp-row"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg>Your Coincashy wallet<em>Received</em></div>
                <div className="hp-row"><svg className="ic" aria-hidden="true"><use href="#i-receipt" /></svg>You paid<em>€250.00</em></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec sec-flush-top" id="faq-personal">
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
    {/* Personal · Closing: sonar grid */}
    <section className="sec sonar" data-sonar>
      <canvas className="sonar-canvas" aria-hidden="true" suppressHydrationWarning />
      <div className="sonar-wash" aria-hidden="true" />
      <div className="wrap sonar-inner">
        <p className="eyebrow">Get started</p>
        <h2 className="h2">Crypto that fits your life.</h2>
        <p className="lede">Choose your asset and preferred payment method to begin. Tap anywhere to send a ping.</p>
        <div className="cta-row"><a className="btn btn-solid" href="#buy">Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a><a className="btn btn-line" href="https://coincashy.io" target="_blank" rel="noopener">Visit Coincashy.io<svg className="ic" aria-hidden="true"><use href="#i-arrow-up-right" /></svg></a></div>
      </div>
    </section>
  </main>
  );
}
