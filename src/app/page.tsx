// @ts-nocheck
import Nav from '@/components/Nav';
export default function Home() {
  return (
    <>
      ﻿<div>
  
  
  
  
  
  
  
  
  
  <Nav />
  {/* =========================================================== HOME */}
  <main className="page" id="home">
    {/* Home · Hero: simple statement with a quiet glow, proof row of accepted methods */}
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-orb" />
        <span className="hero-veil" />
        <svg className="hero-rings" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMax meet"><g fill="none" stroke="currentColor" strokeWidth={1}><circle cx={700} cy={700} r={300} /><circle cx={700} cy={700} r={460} /><circle cx={700} cy={700} r={620} /><circle cx={700} cy={700} r={780} /></g></svg>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy hero-copy-center">
          <h1 className="display" id="hero-title"><span className="rw" style={{'--i': 0}}><span>Move</span></span> <span className="rw" style={{'--i': 1}}><span>money</span></span> <span className="rw" style={{'--i': 2}}><span>between</span></span><br /><span className="rw" style={{'--i': 3}}><span><em>crypto and Fiat.</em></span></span></h1>
          <p className="lede">Buy, sell and spend crypto. Accept, convert and settle it at scale. One gateway, with compliance built in.</p>
          <div className="cta-row">
            <a className="btn btn-solid" href="#business">For business<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            <a className="btn btn-line" href="#personal">For individuals<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </div>
        </div>
        <div className="hero-proof" aria-label="Trusted by clients and partners" style={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
          <span className="hero-proof-label" style={{ marginBottom: 10 }}>TRUSTED BY CLIENTS AND PARTNERS</span>
          <div className="marquee">
            <div className="marquee-track" style={{ '--dur': '40s' } as React.CSSProperties}>
              <div className="marquee-group">
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-faint)' }}>200+</span>
              <img src="media/partners/wintermute.png" alt="Wintermute" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/sumsub.png" alt="Sumsub" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bcb-group.png" alt="BCB Group" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/mercuryo.png" alt="Mercuryo" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/yellow-card.png" alt="Yellow Card" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/global-ledger.png" alt="Global Ledger" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/payswix.png" alt="Payswix" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bitgo.png" alt="BitGo" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bitliv.png" alt="Bitliv" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bybit.png" alt="Bybit" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/utila.png" alt="Utila" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              </div>
              <div className="marquee-group" aria-hidden="true">
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-faint)' }}>200+</span>
              <img src="media/partners/wintermute.png" alt="Wintermute" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/sumsub.png" alt="Sumsub" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bcb-group.png" alt="BCB Group" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/mercuryo.png" alt="Mercuryo" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/yellow-card.png" alt="Yellow Card" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/global-ledger.png" alt="Global Ledger" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/payswix.png" alt="Payswix" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bitgo.png" alt="BitGo" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bitliv.png" alt="Bitliv" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/bybit.png" alt="Bybit" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              <img src="media/partners/utila.png" alt="Utila" className="partner-logo" style={{ height: 26, width: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Home · The gateway: the Coincashy gateway wired into the client's ecosystem (canvas "gateway flow") */}
    <section className="sec gw" id="gateway">
      <canvas className="flow-canvas" id="flow-canvas" aria-hidden="true" />
      <div className="wrap gw-inner">
        <div className="sec-head gw-head">
          <p className="eyebrow">The gateway</p>
          <h2 className="h2">Plug one gateway into your ecosystem.</h2>
          <p className="lede">Your checkout, app, customers and treasury on one side. Crypto networks, stablecoins, card rails and bank rails on the other. Coincashy screens, converts, routes and settles in between.</p>
        </div>
        <div className="flow-stage" id="flow-stage">
          <span className="flow-side fs-l"><i />Your ecosystem</span>
          <span className="flow-side fs-r">Networks &amp; rails<i /></span>
          <div className="hub" id="hub">
            <svg className="hub-ring" viewBox="0 0 160 160" aria-hidden="true"><circle cx={80} cy={80} r={76} fill="none" stroke="currentColor" strokeWidth={1} opacity=".35" /><circle className="hub-orbit" cx={80} cy={80} r={70} fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 6" opacity=".6" /><circle className="hub-arc" cx={80} cy={80} r={76} fill="none" stroke="var(--jade)" strokeWidth="1.5" strokeDasharray="70 408" strokeLinecap="round" /></svg>
            <div className="hub-core"><img src="media/logo-mark-white.png" alt="" width={149} height={157} /></div>
            <div className="hub-label"><span className="hub-word">Coincashy gateway</span><span className="hub-tick" id="hub-tick" aria-live="polite">Screen · Convert · Route · Settle</span></div>
          </div>
          <nav className="fnodes" aria-label="How the gateway connects">
            <a className="fnode fn-l" href="#processing" style={{'--x': '6%', '--y': '13%'}} data-tick="Accept crypto at checkout, settle in EUR, GBP or USD"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-store" /></svg></span><span><b>Your checkout</b></span></a>
            <a className="fnode fn-l" href="#developers" style={{'--x': '0%', '--y': '39%'}} data-tick="Payments, wallet and quote APIs, with webhooks"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-code-xml" /></svg></span><span><b>Your app &amp; website</b></span></a>
            <a className="fnode fn-l" href="#buy" style={{'--x': '0%', '--y': '65%'}} data-tick="Pay by card, Apple Pay, Google Pay or wallet"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-users" /></svg></span><span><b>Your customers</b></span></a>
            <a className="fnode fn-l" href="#rails" style={{'--x': '6%', '--y': '91%'}} data-tick="Fiat accounts, vIBANs and balances in one view"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><span><b>Your treasury</b></span></a>
            <a className="fnode fn-r" href="#platform" style={{'--x': '6%', '--y': '13%'}} data-tick="Bitcoin, Ethereum and supported networks"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-bitcoin" /></svg></span><span><b>Crypto networks</b></span></a>
            <a className="fnode fn-r" href="#settlement" style={{'--x': '0%', '--y': '39%'}} data-tick="USDC and USDT settlement"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-coins" /></svg></span><span><b>Stablecoins</b></span></a>
            <a className="fnode fn-r" href="#card" style={{'--x': '0%', '--y': '65%'}} data-tick="Visa and Mastercard crypto cards"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span><span><b>Card rails</b></span></a>
            <a className="fnode fn-r" href="#vibans" style={{'--x': '6%', '--y': '91%'}} data-tick="EUR, GBP, USD and local rails"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-banknote" /></svg></span><span><b>Bank rails</b></span></a>
          </nav>
          <p className="flow-hint" id="flow-hint"><span className="dot live" />Tap anywhere to send a pulse through the network</p>
        </div>
      </div>
    </section>
    <section className="sec" id="products">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">One account</p>
          <h2 className="h2">Everything you need to move between money and crypto.</h2>
          <p className="lede">Start with familiar payment methods, follow clear transaction steps and manage your digital value without unnecessary complexity.</p>
        </div>
        <div className="story-grid" id="story">
          <ol className="story-steps" aria-label="Product tour">
            <li className="story-step is-active" data-step={0}>
              <span className="story-kicker">Buy</span>
              <h3 className="h3">Buy crypto</h3>
              <p className="body">Purchase supported assets using card, Apple Pay, Google Pay or bank transfer.</p>
              <a className="link-arrow" href="#buy">Start buying<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </li>
            <li className="story-step" data-step={1}>
              <span className="story-kicker">Sell</span>
              <h3 className="h3">Sell crypto</h3>
              <p className="body">Convert supported digital assets and receive funds through available payout methods.</p>
              <a className="link-arrow" href="#sell">Start selling<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </li>
            <li className="story-step" data-step={2}>
              <span className="story-kicker">Convert</span>
              <h3 className="h3">Convert crypto</h3>
              <p className="body">Move between supported assets with a clear quote, shown before you confirm.</p>
              <a className="link-arrow" href="#convert">Try a conversion<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </li>
            <li className="story-step" data-step={3}>
              <span className="story-kicker">Spend</span>
              <h3 className="h3">Spend with your card</h3>
              <p className="body">Use a partner-enabled virtual or physical card for eligible everyday purchases.</p>
              <a className="link-arrow" href="#card">Explore the card<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </li>
          </ol>
          <div className="story-stage" aria-hidden="true">
            <div className="phone">
              <div className="phone-screen scope-dark">
                <div className="phone-status"><span>9:41</span><span className="sig"><span className="bars"><span /><span /><span /><span /></span><span className="batt" /></span></div>
                <div className="screen is-active" data-screen={0}>
                  <div className="app-top"><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span><b>Buy BTC</b><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span></div>
                  <div className="app-hero"><small>You spend</small><div className="app-amt">$1,000<span>.00</span></div><span className="app-sub">≈ 0.0118627 BTC</span></div>
                  <div className="app-list">
                    <div className="app-row is-sel"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-smartphone" /></svg></span><span>Apple Pay</span><span className="app-radio" /></div>
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span><span>Card<small>•••• 2049</small></span><span className="app-radio" /></div>
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><span>Bank transfer</span><span className="app-radio" /></div>
                  </div>
                  <div className="app-foot"><div className="app-note">Fees included in the quote · 00:24</div><div className="app-btn">Buy BTC</div></div>
                </div>
                <div className="screen" data-screen={1}>
                  <div className="app-top"><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span><b>Sell ETH</b><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span></div>
                  <div className="app-hero"><small>You sell</small><div className="app-amt">0.75<span> ETH</span></div><span className="app-sub">≈ €1,706.90</span></div>
                  <div className="app-row is-sel"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><span>Bank account<small>EUR · •••• 4821</small></span><span className="app-radio" /></div>
                  <div className="app-steps">
                    <div className="app-step"><i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i><span>Order placed</span><small>14:02</small></div>
                    <div className="app-step"><i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i><span>Converted to EUR</span><small>14:02</small></div>
                    <div className="app-step todo"><i /><span>Paid to your bank</span><small>Pending</small></div>
                  </div>
                  <div className="app-foot"><div className="app-btn">Sell to bank</div></div>
                </div>
                <div className="screen" data-screen={2}>
                  <div className="app-top"><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span><b>Convert</b><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span></div>
                  <div className="app-box mt-s"><small>From</small><div className="v"><span>0.05</span><span className="tk"><span className="coin sm btc">₿</span>BTC</span></div></div>
                  <div className="app-swapico"><svg className="ic" aria-hidden="true"><use href="#i-arrow-down-up" /></svg></div>
                  <div className="app-box"><small>To</small><div className="v"><span>4,214.88</span><span className="tk"><span className="coin sm usdc">$</span>USDC</span></div></div>
                  <div className="app-list">
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><span>Rate<small>1 BTC ≈ 84,297.67 USDC</small></span><span /></div>
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-clock" /></svg></span><span>Quote<small>Refreshes in 00:18</small></span><span /></div>
                  </div>
                  <div className="app-foot"><div className="app-btn">Convert to USDC</div></div>
                </div>
                <div className="screen" data-screen={3}>
                  <div className="app-top"><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-chevron-left" /></svg></span><b>Card</b><span className="app-circ"><svg className="ic" aria-hidden="true"><use href="#i-lock" /></svg></span></div>
                  <div className="app-cardwrap">
                    <div className="card finish-sky">
                      <div className="card-tex" /><div className="card-foil" /><div className="card-sheen" />
                      <div className="card-body">
                        <div className="card-row"><span className="card-word"><img className="cw-dark" src="media/logo-white.png" alt="Coincashy" width={1217} height={157} /><img className="cw-light" src="media/logo-black.png" alt="" width={1217} height={157} /></span><span className="card-type">VIRTUAL</span></div>
                        <div className="card-mid"><span className="card-chip" /><svg className="ic card-nfc" aria-hidden="true"><use href="#i-nfc" /></svg></div>
                        <div className="card-num">•••• 2049</div>
                        <div className="card-foot"><span>Your name</span><span>09/29</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="app-bal"><small>Available to spend</small><b>€1,240.50</b></div>
                  <div className="app-list">
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-shopping-bag" /></svg></span><span>Coffee shop<small>Today · Contactless</small></span><span className="amt">−€4.20</span></div>
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-send" /></svg></span><span>Metro top-up<small>Yesterday · Online</small></span><span className="amt">−€20.00</span></div>
                    <div className="app-row"><span className="app-ic"><svg className="ic" aria-hidden="true"><use href="#i-store" /></svg></span><span>Grocery market<small>Mon · Contactless</small></span><span className="amt">−€36.80</span></div>
                  </div>
                </div>
              </div>
              <img className="phone-frame" src="media/phone-frame.png" alt="" width={600} height={1219} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec" id="paths">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Two ways in</p>
            <h2 className="h2">Built for people and for businesses.</h2>
          </div>
          <p className="body rv">Individuals get a simple way into crypto. Businesses get the infrastructure to accept, convert and settle value at scale.</p>
        </div>
        <div className="paths">
          <article className="path">
            <p className="eyebrow">Personal</p>
            <h3 className="h3">Crypto for everyday life.</h3>
            <p className="body">Buy it, move it and spend it, all from one connected experience.</p>
            <ul>
              <li><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>Buy with card, Apple Pay, Google Pay or bank transfer</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>Sell supported assets to your bank account</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>Spend with a personal crypto card</li>
            </ul>
            <div className="path-vis">
              <div className="pv-row"><span>You spend</span><b>1,000.00 USD</b></div>
              <div className="pv-row"><span>You receive</span><b>0.0118627 BTC</b></div>
              <div className="pv-sep" />
              <div className="pv-row"><span><span className="dot live" />Quote <span data-quote-timer>00:30</span></span><b>Fees included</b></div>
            </div>
            <a className="btn btn-solid" href="#personal">Explore Personal<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </article>
          <article className="path">
            <p className="eyebrow">Business</p>
            <h3 className="h3">Digital asset infrastructure.</h3>
            <p className="body">Accept, convert, hold and settle value through one connected operating layer.</p>
            <ul>
              <li><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>Crypto processing, OTC and on/off-ramp</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>vIBANs and multi-currency accounts</li>
              <li><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg>APIs, wallets and stablecoin settlement</li>
            </ul>
            <div className="path-vis">
              <div className="pv-row"><span><span className="dot" />25,000 USDC → EUR</span><b>Completed</b></div>
              <div className="pv-row"><span><span className="dot pending" />10.4 BTC → USD</span><b>Quoted</b></div>
              <div className="pv-row"><span><span className="dot" />vIBAN collection</span><b>€16,820</b></div>
            </div>
            <a className="btn btn-solid" href="#business">Explore Business<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </article>
        </div>
      </div>
    </section>
    <section className="sec" id="moves">
      <div className="wrap">
        <div className="sec-head mb-0">
          <p className="eyebrow">How value moves</p>
          <p className="statement" id="statement">Pay in with fiat or crypto. Screen every customer and wallet. Convert through <em>OTC and liquidity.</em> Route to a wallet or account. Settle in <em>fiat or stablecoin.</em></p>
        </div>
        <div className="flow flow-mini" role="list" aria-label="Stages of a payment">
          <div className="flow-track" aria-hidden="true"><span className="flow-packet" /><span className="flow-packet" /><span className="flow-packet" /></div>
          <a className="flow-node" role="listitem" href="#pipeline" data-stage={0}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-arrow-down-left" /></svg></span><b>Pay in</b></a>
          <a className="flow-node" role="listitem" href="#pipeline" data-stage={1}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-scan-search" /></svg></span><b>Screen</b></a>
          <a className="flow-node" role="listitem" href="#pipeline" data-stage={2}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><b>Convert</b></a>
          <a className="flow-node" role="listitem" href="#pipeline" data-stage={3}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg></span><b>Route</b></a>
          <a className="flow-node" role="listitem" href="#pipeline" data-stage={4}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><b>Settle</b></a>
        </div>
        <div className="cta-row mt-l"><a className="link-arrow" href="#pipeline">See how the business platform works<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a></div>
      </div>
    </section>
    <section className="sec" id="trust">
      <div className="wrap">
        <div className="strip mb-xl">
          <span className="strip-label">Technology and service ecosystem</span>
          <div className="marquee" style={{'--dur': '44s'}}>
            <div className="marquee-track">
              <div className="marquee-group">
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
              </div>
              <div className="marquee-group" aria-hidden="true">
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
              </div>
            </div>
          </div>
        </div>
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Compliance by design</p>
            <h2 className="h2">Controls built into every stage.</h2>
          </div>
          <p className="body rv">Customer and business checks scale with product, geography, transaction size and risk profile.</p>
        </div>
        <ul className="ctrl-list">
          <li><svg className="ic" aria-hidden="true"><use href="#i-user-check" /></svg>KYC and KYB verification</li>
          <li><svg className="ic" aria-hidden="true"><use href="#i-scan-search" /></svg>Sanctions and PEP screening</li>
          <li><svg className="ic" aria-hidden="true"><use href="#i-radar" /></svg>Wallet risk screening</li>
          <li><svg className="ic" aria-hidden="true"><use href="#i-activity" /></svg>Transaction monitoring</li>
          <li><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg>Operational reconciliation</li>
          <li><svg className="ic" aria-hidden="true"><use href="#i-file-check" /></svg>Audit-ready records</li>
        </ul>
        <div className="cta-row mt-l"><a className="link-arrow" href="#compliance">How compliance works at Coincashy<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a></div>
      </div>
    </section>
    {/* Home · Closing: sonar grid (dots answer taps with expanding rings) */}
    <section className="sec sonar" data-sonar>
      <canvas className="sonar-canvas" aria-hidden="true" />
      <div className="sonar-wash" aria-hidden="true" />
      <div className="wrap sonar-inner">
        <p className="eyebrow">Get started</p>
        <h2 className="h2">Tell us how your money needs to move.</h2>
        <p className="lede">Every ring is a payment settling somewhere on the network. Tap anywhere to send one, then tell us about your markets, currencies, volumes and settlement needs.</p>
        <div className="cta-row"><a className="btn btn-solid" href="#contact">Talk to our team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a><a className="btn btn-line" href="#buy">Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a></div>
      </div>
    </section>
  </main>
  {/* =========================================================== PERSONAL */}
  <main className="page" id="personal" hidden>
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
          <div className="widget scope-dark scope-dark" id="widget" role="group" aria-label="Buy, sell or convert crypto">
            <div id="w-form">
              <div className="w-head">
                <div className="seg" role="radiogroup" aria-label="Order type" id="w-modes">
                  <button type="button" role="radio" aria-checked="true" data-wmode="buy">Buy</button>
                  <button type="button" role="radio" aria-checked="false" data-wmode="sell" tabIndex={-1}>Sell</button>
                  <button type="button" role="radio" aria-checked="false" data-wmode="convert" tabIndex={-1}>Convert</button>
                </div>
                <div className="w-timer">
                  <svg className="w-ring" viewBox="0 0 22 22" aria-hidden="true"><circle className="bg" cx={11} cy={11} r={9} /><circle className="fg" id="w-ring" cx={11} cy={11} r={9} /></svg>
                  <span><span className="sr-only">Quote refreshes in </span><span id="w-timer-txt">00:30</span></span>
                </div>
              </div>
              <div className="w-stack">
                <div className="w-box">
                  <label htmlFor="w-from" id="w-from-label">You spend</label>
                  <div className="w-row">
                    <input className="w-input" id="w-from" inputMode="decimal" autoComplete="off" defaultValue="1,000.00" aria-describedby="w-rate" />
                    <span className="asset" id="w-from-chip"><span className="coin fiat">$</span><span className="code scope-dark scope-dark">USD</span><svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg><select id="w-from-asset" aria-label="Currency you spend"><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option></select></span>
                  </div>
                </div>
                <div className="w-swapwrap"><button className="w-swap" id="w-swap" type="button" aria-label="Switch direction"><svg className="ic" aria-hidden="true"><use href="#i-arrow-down-up" /></svg></button></div>
                <div className="w-box">
                  <label htmlFor="w-to">You receive</label>
                  <div className="w-row">
                    <input className="w-input" id="w-to" inputMode="decimal" autoComplete="off" defaultValue="0.0118627" />
                    <span className="asset" id="w-to-chip"><span className="coin btc">₿</span><span className="code scope-dark scope-dark">BTC</span><svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg><select id="w-to-asset" aria-label="Asset you receive"><option value="BTC">BTC</option><option value="ETH">ETH</option><option value="USDT">USDT</option><option value="USDC">USDC</option></select></span>
                  </div>
                </div>
              </div>
              <div className="w-methods" id="w-methods" role="radiogroup" aria-label="Payment method">
                <button type="button" className="w-method" role="radio" aria-checked="false" data-method="Card" tabIndex={-1}>Card</button>
                <button type="button" className="w-method" role="radio" aria-checked="true" data-method="Apple Pay">Apple Pay</button>
                <button type="button" className="w-method" role="radio" aria-checked="false" data-method="Google Pay" tabIndex={-1}>Google Pay</button>
                <button type="button" className="w-method" role="radio" aria-checked="false" data-method="Bank transfer" tabIndex={-1}>Bank transfer</button>
              </div>
              <div className="w-dest" id="w-dest" hidden><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg><span id="w-dest-txt">Payout to your bank account</span></div>
              <div className="w-rate" id="w-rate"><span>Indicative rate <b id="w-rate-txt">1 BTC ≈ $84,297.67</b></span><span>Fees are included in the quote</span></div>
              <button className="btn btn-solid btn-block w-go" id="w-go" type="button">Buy BTC</button>
            </div>
            <div className="w-review" id="w-review" hidden>
              <h3 id="wr-title" tabIndex={-1}>Review your order</h3>
              <dl className="wr-list">
                <div><dt id="wr-l1">You spend</dt><dd id="wr-v1">$1,000.00</dd></div>
                <div><dt>You receive</dt><dd id="wr-v2">≈ 0.0118627 BTC</dd></div>
                <div><dt id="wr-l3">Paid with</dt><dd id="wr-v3">Apple Pay</dd></div>
                <div><dt>Quote</dt><dd>Fees included</dd></div>
              </dl>
              <ol className="wr-steps" aria-label="Order progress"><li className="done">Choose</li><li className="now">Pay</li><li>Verify</li><li>Receive</li></ol>
              <p className="w-note">Identity and payment checks are required before your first order. The exact steps depend on your country and the product you choose.</p>
              <div className="cta-row"><a className="btn btn-solid" href="https://coincashy.io" target="_blank" rel="noopener">Continue on Coincashy.io<svg className="ic" aria-hidden="true"><use href="#i-external-link" /></svg></a><button className="btn btn-line" type="button" id="wr-back">Edit order</button></div>
            </div>
          </div>
          <p className="p-caption">Indicative rates for illustration. Your final quote is shown before you pay.</p>
        </div>
      </div>
    </section>
    <section className=" strip-sec">
      <div className="wrap">
        <div className="strip">
          <span className="strip-label">One connected experience</span>
          <div className="marquee" style={{'--dur': '36s'}}>
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
                    <div className="card-row"><span className="card-word"><img className="cw-dark" src="media/logo-white.png" alt="Coincashy" width={1217} height={157} /><img className="cw-light" src="media/logo-black.png" alt="" width={1217} height={157} /></span><span className="card-type">PHYSICAL</span></div>
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
                    <div className="card-row"><span className="card-word"><img className="cw-dark" src="media/logo-white.png" alt="Coincashy" width={1217} height={157} /><img className="cw-light" src="media/logo-black.png" alt="" width={1217} height={157} /></span><span className="card-type" id="lab-type">VIRTUAL</span></div>
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
            <button className="how-step is-active" type="button" role="tab" aria-selected="true" aria-controls="hp-0" id="hs-0"><span className="n">01</span><span><span className="hs-t h3">Choose</span><span className="hs-d">Select an asset and enter the amount.</span></span><span className="bar" /></button>
            <button className="how-step" type="button" role="tab" aria-selected="false" aria-controls="hp-1" id="hs-1" tabIndex={-1}><span className="n">02</span><span><span className="hs-t h3">Pay</span><span className="hs-d">Use an available card, wallet or bank rail.</span></span><span className="bar" /></button>
            <button className="how-step" type="button" role="tab" aria-selected="false" aria-controls="hp-2" id="hs-2" tabIndex={-1}><span className="n">03</span><span><span className="hs-t h3">Verify</span><span className="hs-d">Complete the required identity and payment checks.</span></span><span className="bar" /></button>
            <button className="how-step" type="button" role="tab" aria-selected="false" aria-controls="hp-3" id="hs-3" tabIndex={-1}><span className="n">04</span><span><span className="hs-t h3">Receive</span><span className="hs-d">Your crypto moves to the supported destination.</span></span><span className="bar" /></button>
          </div>
          <div className="how-vis">
            <div className="how-pane is-active" id="hp-0" role="tabpanel" aria-labelledby="hs-0">
              <div className="hp-card">
                <div className="hp-title">Choose an asset<small>Step 1 of 4</small></div>
                <div className="hp-row sel"><span className="coin sm btc">₿</span>Bitcoin<em>BTC</em></div>
                <div className="hp-row"><span className="coin sm eth">╬₧</span>Ether<em>ETH</em></div>
                <div className="hp-row"><span className="coin sm usdt">₮</span>Tether<em>USDT</em></div>
                <div className="hp-row"><span className="coin sm usdc">$</span>USD Coin<em>USDC</em></div>
                <div className="hp-row sel"><svg className="ic" aria-hidden="true"><use href="#i-euro" /></svg>Amount<em>€250.00</em></div>
              </div>
            </div>
            <div className="how-pane" id="hp-1" role="tabpanel" aria-labelledby="hs-1" aria-hidden="true">
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
            <div className="how-pane" id="hp-2" role="tabpanel" aria-labelledby="hs-2" aria-hidden="true">
              <div className="hp-card">
                <div className="hp-title">Verify<small>Step 3 of 4</small></div>
                <div className="hp-check"><i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i>Identity check<em>Done</em></div>
                <div className="hp-check"><i><svg className="ic" aria-hidden="true"><use href="#i-check" /></svg></i>Payment check<em>Done</em></div>
                <div className="hp-check wait"><i />Wallet screening<em>In progress</em></div>
              </div>
            </div>
            <div className="how-pane" id="hp-3" role="tabpanel" aria-labelledby="hs-3" aria-hidden="true">
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
      <canvas className="sonar-canvas" aria-hidden="true" />
      <div className="sonar-wash" aria-hidden="true" />
      <div className="wrap sonar-inner">
        <p className="eyebrow">Get started</p>
        <h2 className="h2">Crypto that fits your life.</h2>
        <p className="lede">Choose your asset and preferred payment method to begin. Tap anywhere to send a ping.</p>
        <div className="cta-row"><a className="btn btn-solid" href="#buy">Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a><a className="btn btn-line" href="https://coincashy.io" target="_blank" rel="noopener">Visit Coincashy.io<svg className="ic" aria-hidden="true"><use href="#i-arrow-up-right" /></svg></a></div>
      </div>
    </section>
  </main>
  {/* =========================================================== BUSINESS */}
  <main className="page" id="business" hidden>
    <section className="p-hero" id="b-hero">
      <div className="p-hero-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="p-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Digital asset infrastructure</p>
            <h1 className="display">One platform to move value <em>globally.</em></h1>
            <p className="lede">Accept crypto, convert fiat and digital assets, access liquidity, manage wallets, collect through vIBANs and settle through one connected operating layer.</p>
            <div className="cta-row">
              <a className="btn btn-solid" href="#contact">Talk to our team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
              <a className="btn btn-line" href="#developers">Explore APIs<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </div>
          </div>
          <div className="w-col">
            <div className="ops scope-dark scope-dark" id="ops">
              <div className="ops-head"><span>Operations overview</span><span className="live-tag"><span className="dot live" />Live</span></div>
              <div className="kpis">
                <div className="kpi"><span>Processed today</span><b id="k-proc">$1,840,000</b></div>
                <div className="kpi"><span>Settlement</span><b id="k-set">$946,000</b></div>
                <div className="kpi"><span>Wallets</span><b id="k-wal">248</b></div>
              </div>
              <div className="bars" id="ops-bars" aria-hidden="true" />
              <div className="bars-axis" aria-hidden="true"><span>00:00</span><span>Now</span></div>
              <ul className="feed" id="ops-feed">
                <li><span className="f-ic"><svg className="ic" aria-hidden="true"><use href="#i-store" /></svg></span><span className="f-txt"><b>Merchant payment</b></span><span className="pill">Completed</span></li>
                <li><span className="f-ic"><svg className="ic" aria-hidden="true"><use href="#i-chart-candlestick" /></svg></span><span className="f-txt"><b>OTC conversion</b></span><span className="pill pending">Quoted</span></li>
                <li><span className="f-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><span className="f-txt"><b>vIBAN collection</b></span><span className="pill">Received</span></li>
              </ul>
            </div>
            <p className="p-caption">Product preview with illustrative figures.</p>
          </div>
        </div>
        <div className="ops-strip">
          <span className="strip-label">Built for global operations</span>
          <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-qr-code" /></svg>Crypto processing</span>
          <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-chart-candlestick" /></svg>OTC</span>
          <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-arrow-left-right" /></svg>On/off-ramp</span>
          <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>vIBANs</span>
          <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg>Wallets</span>
          <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-globe" /></svg>Stablecoin settlement</span>
        </div>
      </div>
    </section>
    <section className="sec" id="pipeline">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">How value moves</p>
            <h2 className="h2">From pay-in to settlement in five stages.</h2>
          </div>
          <p className="body rv">Every flow passes through the same stages, with checks built into each one. Select a stage to see what happens there.</p>
        </div>
        <div className="flow" role="tablist" aria-label="Payment stages" data-tabs id="flow-tabs">
          <div className="flow-track" aria-hidden="true"><span className="flow-packet" /><span className="flow-packet" /><span className="flow-packet" /></div>
          <button className="flow-node" type="button" role="tab" aria-selected="true" aria-controls="fp-0" id="ft-0"><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-arrow-down-left" /></svg></span><b>Pay in</b></button>
          <button className="flow-node" type="button" role="tab" aria-selected="false" aria-controls="fp-1" id="ft-1" tabIndex={-1}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-scan-search" /></svg></span><b>Screen</b></button>
          <button className="flow-node" type="button" role="tab" aria-selected="false" aria-controls="fp-2" id="ft-2" tabIndex={-1}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><b>Convert</b></button>
          <button className="flow-node" type="button" role="tab" aria-selected="false" aria-controls="fp-3" id="ft-3" tabIndex={-1}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg></span><b>Route</b></button>
          <button className="flow-node" type="button" role="tab" aria-selected="false" aria-controls="fp-4" id="ft-4" tabIndex={-1}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><b>Settle</b></button>
        </div>
        <div className="flow-panel" id="fp-0" role="tabpanel" aria-labelledby="ft-0">
          <div><h3 className="h3">Pay in with fiat or crypto.</h3><p className="body">Collect through hosted checkout, payment links or API, connect card and bank-payment rails, or receive funds into named vIBANs.</p></div>
          <div><p className="lbl">Controls at this stage</p><div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-radar" /></svg>Wallet risk screening</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-activity" /></svg>Transaction monitoring</span></div></div>
        </div>
        <div className="flow-panel" id="fp-1" role="tabpanel" aria-labelledby="ft-1" hidden>
          <div><h3 className="h3">Screen customers, businesses and wallets.</h3><p className="body">Customer and business checks scale with product, geography, transaction size and risk profile, before any value moves on.</p></div>
          <div><p className="lbl">Controls at this stage</p><div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-user-check" /></svg>KYC and KYB verification</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-scan-search" /></svg>Sanctions and PEP screening</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-radar" /></svg>Wallet risk screening</span></div></div>
        </div>
        <div className="flow-panel" id="fp-2" role="tabpanel" aria-labelledby="ft-2" hidden>
          <div><h3 className="h3">Convert through OTC and liquidity.</h3><p className="body">Execute fiat, stablecoin and crypto conversions through quote-driven workflows, with clear quotes, execution status and records.</p></div>
          <div><p className="lbl">Controls at this stage</p><div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-activity" /></svg>Transaction monitoring</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-file-check" /></svg>Audit-ready records</span></div></div>
        </div>
        <div className="flow-panel" id="fp-3" role="tabpanel" aria-labelledby="ft-3" hidden>
          <div><h3 className="h3">Route to a wallet or account.</h3><p className="body">Send value to a digital-asset wallet or a multi-currency account, depending on how the flow needs to settle.</p></div>
          <div><p className="lbl">Controls at this stage</p><div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-radar" /></svg>Wallet risk screening</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg>Operational reconciliation</span></div></div>
        </div>
        <div className="flow-panel" id="fp-4" role="tabpanel" aria-labelledby="ft-4" hidden>
          <div><h3 className="h3">Settle in fiat or stablecoin.</h3><p className="body">Settle through EUR, GBP, USD and supported local rails, or coordinate treasury, supplier and cross-border settlement in stablecoins.</p></div>
          <div><p className="lbl">Controls at this stage</p><div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg>Operational reconciliation</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-file-check" /></svg>Audit-ready records</span></div></div>
        </div>
      </div>
    </section>
    <section className="sec" id="platform">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">The platform</p>
            <h2 className="h2">Every capability your digital-asset business needs.</h2>
          </div>
          <p className="body rv">Configure the right combination of payment, conversion, account, wallet and settlement infrastructure for your operating model.</p>
        </div>
        <div className="caps">
          <article className="cap" id="processing"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-qr-code" /></svg></span><h3>Crypto processing</h3><p>Accept supported crypto through hosted checkout, payment links or API and track each settlement.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="Crypto processing"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="otc"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-chart-candlestick" /></svg></span><h3>OTC &amp; liquidity</h3><p>Execute larger fiat, stablecoin and crypto conversions through quote-driven workflows.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="OTC & liquidity"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="ramp"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-arrow-left-right" /></svg></span><h3>On/off-ramp</h3><p>Connect card and bank-payment rails to supported digital assets in both directions.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="On/off-ramp"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="c2c"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><h3>Crypto-to-crypto</h3><p>Convert supported digital assets with clear quotes, execution status and records.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="Crypto-to-crypto"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="vibans"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><h3>vIBANs</h3><p>Partner-enabled named virtual accounts for eligible collection and payout flows.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="vIBANs"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="wallets"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg></span><h3>Wallet as a Service</h3><p>Create addresses, view balances and embed wallet workflows into your product.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="Wallet as a Service"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="cards"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span><h3>Corporate cards</h3><p>Partner-enabled physical and virtual card programmes with configurable controls.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="Corporate cards"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
          <article className="cap" id="settlement"><span className="cap-ic"><svg className="ic" aria-hidden="true"><use href="#i-globe" /></svg></span><h3>Stablecoin settlement</h3><p>Coordinate treasury, supplier and cross-border settlement through supported rails.</p><button className="cap-add" type="button" aria-pressed="false" data-interest="Stablecoin settlement"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg><span>Add to inquiry</span></button></article>
        </div>
      </div>
    </section>
    <section className="sec" id="rails">
      <div className="wrap rails-grid">
        <div>
          <div className="sec-head rv mb-0">
            <p className="eyebrow">Connected rails</p>
            <h2 className="h2">Fiat and crypto, working as one system.</h2>
            <p className="lede">Hold, convert and settle across currencies and assets from a single treasury view.</p>
          </div>
          <div className="rail-list">
            <div className="rail"><span className="rail-ic">€</span><span><b>Multi-currency accounts</b></span></div>
            <div className="rail"><span className="rail-ic">◎</span><span><b>Digital-asset wallets</b></span></div>
            <div className="rail"><span className="rail-ic">⇄</span><span><b>Conversion and settlement</b></span></div>
          </div>
        </div>
        <div className="treasury" id="treasury">
          <div className="t-head"><b>Business treasury</b></div>
          <div><div className="t-lbl" id="t-lbl">Total balance</div><div className="t-total" id="t-total">$2,481,904.28</div></div>
          <div className="t-seg">
            <div className="seg" role="radiogroup" aria-label="Account" id="t-accts">
              <button type="button" role="radio" aria-checked="true" data-acct="all">All</button>
              <button type="button" role="radio" aria-checked="false" data-acct="EUR" tabIndex={-1}>EUR</button>
              <button type="button" role="radio" aria-checked="false" data-acct="USD" tabIndex={-1}>USD</button>
              <button type="button" role="radio" aria-checked="false" data-acct="USDC" tabIndex={-1}>USDC</button>
            </div>
          </div>
          <svg className="spark" id="spark" viewBox="0 0 320 96" role="img" aria-label="Balance trend across September">
            <defs><linearGradient id="spFill" x1={0} y1={0} x2={0} y2={1}><stop offset={0} className="sp-stop-a" /><stop offset={1} className="sp-stop-b" /></linearGradient></defs>
            <line className="grid" x1={0} x2={320} y1={12} y2={12} /><line className="grid" x1={0} x2={320} y1={51} y2={51} /><line className="grid" x1={0} x2={320} y1={90} y2={90} />
            <path className="sp-area" d="M4 90 L316 90 Z" /><path className="sp-line" d="M4 90 L316 90" /><circle className="sp-end" r="3.5" cx={316} cy={90} /></svg>
          <div className="spark-axis" aria-hidden="true"><span>1 Sep</span><span>30 Sep</span></div>
          <div className="accts">
            <div className="acct" data-row="EUR"><span className="coin sm fiat">€</span><span>EUR account</span><b>€804,220</b></div>
            <div className="acct" data-row="USD"><span className="coin sm fiat">$</span><span>USD account</span><b>$626,400</b></div>
            <div className="acct" data-row="USDC"><span className="coin sm usdc">$</span><span>USDC wallet</span><b>420,850 USDC</b></div>
          </div>
          <div className="t-act-h">Recent activity</div>
          <ul className="t-act">
            <li data-ccy="USDC EUR"><span>USDC → EUR conversion</span><b>€92,400</b></li>
            <li data-ccy="USD"><span>Merchant settlement</span><b>$48,000</b></li>
            <li data-ccy="EUR"><span>vIBAN collection</span><b>€16,820</b></li>
          </ul>
        </div>
      </div>
    </section>
    <section className="sec" id="developers">
      <div className="wrap dev-grid">
        <div>
          <div className="sec-head rv mb-0">
            <p className="eyebrow">Developer platform</p>
            <h2 className="h2">Integrate once. Build many money flows.</h2>
            <p className="lede">Use modular APIs and webhooks for payments, wallets, quotes, conversions and settlement reporting.</p>
          </div>
          <div className="api-list">
            <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-circle-dollar-sign" /></svg>Payments API</span>
            <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg>Wallet API</span>
            <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg>Quotes API</span>
            <span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-webhook" /></svg>Webhooks</span>
          </div>
          <a className="btn btn-solid" href="#contact" data-interest-link="APIs & webhooks">Request API access<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
        </div>
        <div className="code scope-dark scope-dark">
          <div className="code-head">
            <div className="code-tabs" role="tablist" aria-label="API examples" data-tabs>
              <button type="button" role="tab" aria-selected="true" aria-controls="code-0" id="ct-0">Payments</button>
              <button type="button" role="tab" aria-selected="false" aria-controls="code-1" id="ct-1" tabIndex={-1}>Wallets</button>
              <button type="button" role="tab" aria-selected="false" aria-controls="code-2" id="ct-2" tabIndex={-1}>Quotes</button>
              <button type="button" role="tab" aria-selected="false" aria-controls="code-3" id="ct-3" tabIndex={-1}>Webhooks</button>
            </div>
            <button className="copy-btn" type="button" id="code-copy"><svg className="ic" aria-hidden="true"><use href="#i-copy" /></svg><span>Copy</span></button>
          </div>
          <pre id="code-0" role="tabpanel" aria-labelledby="ct-0" tabIndex={0}><code><span className="tk-m">POST</span> /v1/payments{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"amount"</span>: <span className="tk-s">"25000.00"</span>,{"\n"}{"  "}<span className="tk-k">"pay_currency"</span>: <span className="tk-s">"USDC"</span>,{"\n"}{"  "}<span className="tk-k">"settle_currency"</span>: <span className="tk-s">"EUR"</span>,{"\n"}{"  "}<span className="tk-k">"network"</span>: <span className="tk-s">"ethereum"</span>,{"\n"}{"  "}<span className="tk-k">"reference"</span>: <span className="tk-s">"INV-2049"</span>{"\n"}{"}"}{"\n"}{"\n"}<span className="tk-st">201</span> payment.created{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"status"</span>: <span className="tk-s">"awaiting_payment"</span>,{"\n"}{"  "}<span className="tk-k">"expires_in"</span>: <span className="tk-n">900</span>{"\n"}{"}"}</code></pre>
          <pre id="code-1" role="tabpanel" aria-labelledby="ct-1" tabIndex={0} hidden><code><span className="tk-m">POST</span> /v1/wallets/addresses{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"asset"</span>: <span className="tk-s">"USDC"</span>,{"\n"}{"  "}<span className="tk-k">"network"</span>: <span className="tk-s">"ethereum"</span>,{"\n"}{"  "}<span className="tk-k">"label"</span>: <span className="tk-s">"customer-8841"</span>{"\n"}{"}"}{"\n"}{"\n"}<span className="tk-st">201</span> address.created{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"address"</span>: <span className="tk-s">"0x7a3f…c91e"</span>,{"\n"}{"  "}<span className="tk-k">"asset"</span>: <span className="tk-s">"USDC"</span>,{"\n"}{"  "}<span className="tk-k">"status"</span>: <span className="tk-s">"active"</span>{"\n"}{"}"}</code></pre>
          <pre id="code-2" role="tabpanel" aria-labelledby="ct-2" tabIndex={0} hidden><code><span className="tk-m">POST</span> /v1/quotes{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"sell_currency"</span>: <span className="tk-s">"BTC"</span>,{"\n"}{"  "}<span className="tk-k">"buy_currency"</span>: <span className="tk-s">"USD"</span>,{"\n"}{"  "}<span className="tk-k">"sell_amount"</span>: <span className="tk-s">"10.4"</span>{"\n"}{"}"}{"\n"}{"\n"}<span className="tk-st">201</span> quote.created{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"rate"</span>: <span className="tk-s">"84297.67"</span>,{"\n"}{"  "}<span className="tk-k">"buy_amount"</span>: <span className="tk-s">"876695.77"</span>,{"\n"}{"  "}<span className="tk-k">"expires_in"</span>: <span className="tk-n">30</span>{"\n"}{"}"}</code></pre>
          <pre id="code-3" role="tabpanel" aria-labelledby="ct-3" tabIndex={0} hidden><code><span className="tk-c"># Sent to your endpoint when a payment settles</span>{"\n"}<span className="tk-m">POST</span> https://your-app.example/webhooks{"\n"}{"{"}{"\n"}{"  "}<span className="tk-k">"type"</span>: <span className="tk-s">"payment.completed"</span>,{"\n"}{"  "}<span className="tk-k">"data"</span>: {"{"}{"\n"}{"    "}<span className="tk-k">"reference"</span>: <span className="tk-s">"INV-2049"</span>,{"\n"}{"    "}<span className="tk-k">"paid"</span>: <span className="tk-s">"25000.00 USDC"</span>,{"\n"}{"    "}<span className="tk-k">"settled"</span>: <span className="tk-s">"21551.72 EUR"</span>{"\n"}{"  "}{"}"}{"\n"}{"}"}{"\n"}{"\n"}<span className="tk-c"># Respond with 200 to acknowledge</span></code></pre>
        </div>
      </div>
    </section>
    <section className="sec" id="models">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Built for your model</p>
            <h2 className="h2">Infrastructure for businesses moving real value.</h2>
          </div>
          <p className="body rv">From merchant acceptance to treasury execution, Coincashy adapts to different transaction and settlement needs.</p>
        </div>
        <div className="model-tabs">
          <div className="seg" role="tablist" aria-label="Business type" data-tabs>
            <button type="button" role="tab" aria-selected="true" aria-controls="mp-0" id="mt-0">Merchants &amp; PSPs</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="mp-1" id="mt-1" tabIndex={-1}>OTC desks &amp; brokers</button>
            <button type="button" role="tab" aria-selected="false" aria-controls="mp-2" id="mt-2" tabIndex={-1}>Fintechs &amp; platforms</button>
          </div>
        </div>
        <div className="model-panel" id="mp-0" role="tabpanel" aria-labelledby="mt-0">
          <div>
            <h3 className="h3">Merchants &amp; PSPs</h3>
            <p className="body">Accept crypto, auto-convert where supported and reconcile settlements across customers and markets.</p>
            <div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-qr-code" /></svg>Crypto processing</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-globe" /></svg>Stablecoin settlement</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>vIBANs</span></div>
          </div>
          <div className="m-flow">
            <p className="lbl">Example flow</p>
            <div className="m-step"><i>1</i><span><b>Customer pays</b></span><em>25,000 USDC</em></div>
            <div className="m-step"><i>2</i><span><b>Auto-convert</b></span><em>USDC → EUR</em></div>
            <div className="m-step"><i>3</i><span><b>Settle and reconcile</b></span><em>€21,551.72</em></div>
          </div>
        </div>
        <div className="model-panel" id="mp-1" role="tabpanel" aria-labelledby="mt-1" hidden>
          <div>
            <h3 className="h3">OTC desks &amp; brokers</h3>
            <p className="body">Access quote-driven liquidity, wallets, fiat rails and settlement support through one relationship.</p>
            <div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-chart-candlestick" /></svg>OTC &amp; liquidity</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg>Wallet as a Service</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-arrow-left-right" /></svg>On/off-ramp</span></div>
          </div>
          <div className="m-flow">
            <p className="lbl">Example flow</p>
            <div className="m-step"><i>1</i><span><b>Request a quote</b></span><em>10.4 BTC</em></div>
            <div className="m-step"><i>2</i><span><b>Execute</b></span><em>BTC → USD</em></div>
            <div className="m-step"><i>3</i><span><b>Settle</b></span><em>$876,695.77</em></div>
          </div>
        </div>
        <div className="model-panel" id="mp-2" role="tabpanel" aria-labelledby="mt-2" hidden>
          <div>
            <h3 className="h3">Fintechs &amp; platforms</h3>
            <p className="body">Embed wallets, ramps, accounts, card programmes and programmable settlement through APIs.</p>
            <div className="tags"><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-wallet" /></svg>Wallet as a Service</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-arrow-left-right" /></svg>On/off-ramp</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg>Corporate cards</span><span className="tag"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg>vIBANs</span></div>
          </div>
          <div className="m-flow">
            <p className="lbl">Example flow</p>
            <div className="m-step"><i>1</i><span><b>Create a wallet</b></span><em>USDC</em></div>
            <div className="m-step"><i>2</i><span><b>Fund it</b></span><em>€500.00</em></div>
            <div className="m-step"><i>3</i><span><b>Spend or settle</b></span><em>Webhook</em></div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec" id="compliance">
      <div className="wrap">
        <div className="sec-split">
          <div className="sec-head rv">
            <p className="eyebrow">Compliance by design</p>
            <h2 className="h2">Controls built into every stage.</h2>
          </div>
          <p className="body rv">Customer and business checks scale with product, geography, transaction size and risk profile.</p>
        </div>
        <div className="ctrl-grid">
          <div className="ctrl"><span className="ctrl-ic"><svg className="ic" aria-hidden="true"><use href="#i-user-check" /></svg></span><div><h3 className="h4">KYC and KYB verification</h3><p>Identity checks for individuals and businesses before accounts go live.</p></div></div>
          <div className="ctrl"><span className="ctrl-ic"><svg className="ic" aria-hidden="true"><use href="#i-scan-search" /></svg></span><div><h3 className="h4">Sanctions and PEP screening</h3><p>Screening against sanctions lists and politically exposed persons.</p></div></div>
          <div className="ctrl"><span className="ctrl-ic"><svg className="ic" aria-hidden="true"><use href="#i-radar" /></svg></span><div><h3 className="h4">Wallet risk screening</h3><p>Risk checks on wallet addresses before funds move.</p></div></div>
          <div className="ctrl"><span className="ctrl-ic"><svg className="ic" aria-hidden="true"><use href="#i-activity" /></svg></span><div><h3 className="h4">Transaction monitoring</h3><p>Ongoing review of payment activity and patterns.</p></div></div>
          <div className="ctrl"><span className="ctrl-ic"><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg></span><div><h3 className="h4">Operational reconciliation</h3><p>Payments, conversions and settlements matched across rails.</p></div></div>
          <div className="ctrl"><span className="ctrl-ic"><svg className="ic" aria-hidden="true"><use href="#i-file-check" /></svg></span><div><h3 className="h4">Audit-ready records</h3><p>A complete record of every transaction and check.</p></div></div>
        </div>
        <div className="strip mt-xl">
          <span className="strip-label">Technology and service ecosystem</span>
          <div className="marquee" style={{'--dur': '44s'}}>
            <div className="marquee-track">
              <div className="marquee-group">
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
              </div>
              <div className="marquee-group" aria-hidden="true">
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
                <span className="eco-item">BITGO</span><span className="m-sep" /><span className="eco-item">SUMSUB</span><span className="m-sep" /><span className="eco-item">GLOBAL LEDGER</span><span className="m-sep" /><span className="eco-item">UTILA</span><span className="m-sep" /><span className="eco-item">MERCURYO</span><span className="m-sep" /><span className="eco-item">YELLOW CARD</span><span className="m-sep" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec" id="faq-business">
      <div className="wrap faq-grid">
        <div className="sec-head">
          <p className="eyebrow">Questions</p>
          <h2 className="h2">What businesses ask us first.</h2>
        </div>
        <div className="faq">
          <details><summary>Which businesses do you work with?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Merchants and payment service providers, OTC desks and brokers, and fintechs and platforms that need to accept, convert, hold or settle digital assets.</p></details>
          <details><summary>How does onboarding work?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Onboarding includes KYB verification. Checks scale with the products you need, the markets you operate in, your transaction sizes and your risk profile.</p></details>
          <details><summary>Can we settle in fiat?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Yes. Settle in EUR, GBP, USD and supported local rails, or in stablecoins, depending on the flow and your eligibility.</p></details>
          <details><summary>What are vIBANs?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Partner-enabled named virtual accounts for eligible collection and payout flows. Availability depends on jurisdiction and onboarding.</p></details>
          <details><summary>Do you offer APIs?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Yes. Modular APIs cover payments, wallets and quotes, with webhooks for status updates and settlement reporting. Request API access to get started.</p></details>
          <details><summary>Can we run corporate cards?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Partner-enabled physical and virtual card programmes are available with configurable controls, subject to eligibility and partner approval.</p></details>
          <details><summary>Where are your services available?<span className="pm"><svg className="ic" aria-hidden="true"><use href="#i-plus" /></svg></span></summary><p className="ans">Products and availability are subject to jurisdiction, onboarding and partner approval. Tell us your markets and we will confirm what is possible.</p></details>
        </div>
      </div>
    </section>
    <section className="sec" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-aside">
          <div className="sec-head mb-0">
            <p className="eyebrow">Talk to our team</p>
            <h2 className="h2">Tell us how your money needs to move.</h2>
            <p className="lede">Share your markets, currencies, volumes and settlement requirements.</p>
          </div>
          <ol className="next-steps">
            <li><i>1</i><span>Share your markets, currencies and monthly volumes.</span></li>
            <li><i>2</i><span>We confirm which products are available in your jurisdiction.</span></li>
            <li><i>3</i><span>Onboarding starts with KYB verification.</span></li>
          </ol>
          <div className="mailbox"><small>Prefer email? Write to business sales</small><div className="row"><code>support@coincashy.io</code><button className="copy-btn" type="button" data-copy="support@coincashy.io"><svg className="ic" aria-hidden="true"><use href="#i-copy" /></svg><span>Copy</span></button></div></div>
        </div>
        <form className="form" id="contact-form" noValidate>
          <div className="f-row">
            <div className="field"><label htmlFor="cf-name">Full name</label><input className="input" id="cf-name" autoComplete="name" placeholder="Jane Doe" /><span className="err" id="cf-name-err" /></div>
            <div className="field"><label htmlFor="cf-email">Work email</label><input className="input" id="cf-email" type="email" autoComplete="email" placeholder="jane@company.com" /><span className="err" id="cf-email-err" /></div>
          </div>
          <div className="f-row">
            <div className="field"><label htmlFor="cf-company">Company</label><input className="input" id="cf-company" autoComplete="organization" placeholder="Company name" /><span className="err" id="cf-company-err" /></div>
            <div className="field"><label htmlFor="cf-markets">Markets</label><input className="input" id="cf-markets" placeholder="For example EU, UK, UAE" /></div>
          </div>
          <div className="field">
            <span className="lbl" id="cf-ccy-l">Currencies</span>
            <div className="chips" role="group" aria-labelledby="cf-ccy-l">
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-eur" defaultValue="EUR" defaultChecked /><span>EUR</span></label>
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-gbp" defaultValue="GBP" /><span>GBP</span></label>
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-usd" defaultValue="USD" /><span>USD</span></label>
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-usdc" defaultValue="USDC" defaultChecked /><span>USDC</span></label>
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-usdt" defaultValue="USDT" /><span>USDT</span></label>
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-btc" defaultValue="BTC" /><span>BTC</span></label>
              <label className="chip"><input type="checkbox" name="ccy" id="ccy-eth" defaultValue="ETH" /><span>ETH</span></label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="cf-volume">Monthly volume</label>
            <div className="sel-wrap"><select className="input" id="cf-volume"><option>Under $100K</option><option>$100K to $1M</option><option>$1M to $10M</option><option>Over $10M</option></select><svg className="ic" aria-hidden="true"><use href="#i-chevron-down" /></svg></div>
          </div>
          <div className="field">
            <span className="lbl" id="cf-prod-l">Products of interest</span>
            <div className="chips" role="group" aria-labelledby="cf-prod-l">
              <label className="chip"><input type="checkbox" name="product" id="pr-processing" defaultValue="Crypto processing" /><span>Crypto processing</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-otc" defaultValue="OTC & liquidity" /><span>OTC &amp; liquidity</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-ramp" defaultValue="On/off-ramp" /><span>On/off-ramp</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-c2c" defaultValue="Crypto-to-crypto" /><span>Crypto-to-crypto</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-vibans" defaultValue="vIBANs" /><span>vIBANs</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-wallets" defaultValue="Wallet as a Service" /><span>Wallet as a Service</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-cards" defaultValue="Corporate cards" /><span>Corporate cards</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-settlement" defaultValue="Stablecoin settlement" /><span>Stablecoin settlement</span></label>
              <label className="chip"><input type="checkbox" name="product" id="pr-apis" defaultValue="APIs & webhooks" /><span>APIs &amp; webhooks</span></label>
            </div>
          </div>
          <div className="field"><label htmlFor="cf-notes">Settlement requirements</label><textarea className="input" id="cf-notes" rows={4} placeholder="What do you need to accept, convert and settle, and how often?" defaultValue={""} /></div>
          <div className="form-foot">
            <p className="fine">Products and availability are subject to jurisdiction, onboarding and partner approval.</p>
            <button className="btn btn-solid" type="submit">Prepare email<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></button>
          </div>
        </form>
      </div>
    </section>
  </main>
  <footer className="footer">
    <div className="wrap">
      <div className="f-top">
        <div className="f-brand">
          <a className="brand" href="#home" aria-label="Coincashy home">
            <img className="brand-logo logo-on-dark" src="media/logo-on-dark.png" alt="Coincashy" /><img className="brand-logo logo-on-paper" src="media/logo-on-paper.png" alt="" />
          </a>
          <p className="f-desc">Crypto, stablecoins and fiat rails for people and businesses. Buy, sell and spend, or accept, convert and settle at scale.</p>
          <div className="f-social">
            <a href="https://x.com/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on X"><svg className="bm" aria-hidden="true"><use href="#b-x" /></svg></a>
            <a href="https://t.me/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on Telegram"><svg className="bm" aria-hidden="true"><use href="#b-telegram" /></svg></a>
            <a href="https://www.facebook.com/coincashy" target="_blank" rel="noopener" aria-label="Coincashy on Facebook"><svg className="bm" aria-hidden="true"><use href="#b-facebook" /></svg></a>
            <a href="https://www.instagram.com/coin.cashy/" target="_blank" rel="noopener" aria-label="Coincashy on Instagram"><svg className="bm" aria-hidden="true"><use href="#b-instagram" /></svg></a>
            <a href="mailto:support@coincashy.io" aria-label="Email Coincashy"><svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg></a>
          </div>
        </div>
        <div className="f-cols">
          <div className="f-col"><h4>Products</h4><a href="#buy">Buy crypto</a><a href="#sell">Sell crypto</a><a href="#convert">Convert crypto</a><a href="#card">Crypto card</a><a href="#processing">Crypto processing</a><a href="#otc">OTC &amp; liquidity</a><a href="#ramp">On/off-ramp</a><a href="#vibans">vIBANs</a><a href="#wallets">Wallet as a Service</a><a href="#cards">Corporate cards</a><a href="#settlement">Stablecoin settlement</a></div>
          <div className="f-col"><h4>Solutions</h4><a href="#personal">Individuals</a><a href="#models">Merchants &amp; PSPs</a><a href="#models">OTC desks &amp; brokers</a><a href="#models">Fintechs &amp; platforms</a><a href="#rails">Treasury &amp; accounts</a></div>
          <div className="f-col"><h4>Developers</h4><a href="#developers">API overview</a><a href="#developers">Payments API</a><a href="#developers">Wallet API</a><a href="#developers">Quotes API</a><a href="#developers">Webhooks</a></div>
          <div className="f-col"><h4>Resources</h4><a href="#how">How it works</a><a href="#pipeline">How value moves</a><a href="#trust">Technology ecosystem</a><a href="#faq-personal">Personal FAQ</a><a href="#faq-business">Business FAQ</a></div>
          <div className="f-col"><h4>Company</h4><a href="/about">About Coincashy</a><a href="#compliance">Compliance</a><a href="#contact">Contact</a><a href="https://trade.coincashy.io/auth/login" target="_blank" rel="noopener">Log in</a><a href="https://trade.coincashy.io/auth/signup" target="_blank" rel="noopener">Get started</a></div>
        </div>
      </div>
      <div className="f-mid">
        <div className="f-contact"><span>Support</span><code>support@coincashy.io</code><button className="copy-btn" type="button" data-copy="support@coincashy.io"><svg className="ic" aria-hidden="true"><use href="#i-copy" /></svg><span>Copy</span></button></div>
        <ul className="f-links"><li><a href="/terms">Terms of Service</a></li><li><a href="/privacy">Privacy Policy</a></li><li><a href="/cookies">Cookie Policy</a></li><li><a href="/complaints">Complaints &amp; disclosures</a></li></ul>
      </div>
      <div className="f-legal">
        <p>© 2026 Coincashy. All rights reserved. Products and availability are subject to jurisdiction, onboarding and partner approval.</p>
        <p>Crypto-assets are volatile and their value can go down as well as up. Card, account and vIBAN services are partner-enabled and subject to eligibility. Visa, Mastercard, Apple Pay, Google Pay, SEPA, Bitcoin, Ethereum and Tether are marks of their respective owners, shown as accepted methods.</p>
        <p><strong>Disclaimer</strong><br/>Coincashy Sp. z o.o. only provides services to customers resident in the UK who fall within an exemption available under the UK financial promotion regime (Investment professionals, High net worth companies, unincorporated associations etc., Certified sophisticated investors, Communication to overseas recipients, etc).</p>
      </div>
          </div>
    </footer>
  <dialog className="mail-dialog" id="mail-dialog" aria-labelledby="md-title">
    <div className="md-inner">
      <div className="md-top"><h2 id="md-title">Your message is ready</h2><button className="md-x" type="button" id="md-close" aria-label="Close"><svg className="ic" aria-hidden="true"><use href="#i-x" /></svg></button></div>
      <p className="md-note">Nothing has been sent yet. Send it from your email app, or copy it into any email.</p>
      <div className="md-fields">
        <div className="md-field"><span>To</span><code>support@coincashy.io</code></div>
        <div className="md-field"><span>Subject</span><code id="md-subject" /></div>
        <div className="md-field"><span>Message</span><pre className="md-body" id="md-body" /></div>
      </div>
      <div className="md-actions">
        <button className="btn btn-solid btn-sm" type="button" id="md-copy"><svg className="ic" aria-hidden="true"><use href="#i-copy" /></svg>Copy message</button>
        <a className="btn btn-line btn-sm" id="md-open" href="mailto:support@coincashy.io"><svg className="ic" aria-hidden="true"><use href="#i-mail" /></svg>Open email app</a>
      </div>
    </div>
  </dialog>
  <div className="toast" id="toast" role="status" aria-live="polite" />
</div>


    </>
  );
}