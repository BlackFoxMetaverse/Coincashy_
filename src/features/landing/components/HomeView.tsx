import Image from 'next/image';
export default function HomeView() {
  return (
  <main className="page" id="home" suppressHydrationWarning>
    {/* Home · Hero: simple statement with a quiet glow, proof row of accepted methods */}
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-orb" />
        <span className="hero-veil" />
        <svg className="hero-rings" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMax meet"><g fill="none" stroke="currentColor" strokeWidth={1}><circle cx={700} cy={700} r={300} /><circle cx={700} cy={700} r={460} /><circle cx={700} cy={700} r={620} /><circle cx={700} cy={700} r={780} /></g></svg>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy hero-copy-center">
          <h1 className="display" id="hero-title"><span className="rw" style={{'--i': 0} as React.CSSProperties}><span>Move</span></span> <span className="rw" style={{'--i': 1} as React.CSSProperties}><span>money</span></span> <span className="rw" style={{'--i': 2} as React.CSSProperties}><span>between</span></span> <span className="rw" style={{'--i': 3} as React.CSSProperties}><span><em>crypto and fiat.</em></span></span></h1>
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
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-faint)' } as React.CSSProperties}>200+</span>
              <Image src="/media/partners/wintermute.png" alt="Wintermute" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/sumsub.png" alt="Sumsub" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bcb-group.png" alt="BCB Group" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/mercuryo.png" alt="Mercuryo" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/yellow-card.png" alt="Yellow Card" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/global-ledger.png" alt="Global Ledger" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/payswix.png" alt="Payswix" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bitgo.png" alt="BitGo" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bitliv.png" alt="Bitliv" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bybit.png" alt="Bybit" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/utila.png" alt="Utila" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              </div>
              <div className="marquee-group" aria-hidden="true">
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-faint)' } as React.CSSProperties}>200+</span>
              <Image src="/media/partners/wintermute.png" alt="Wintermute" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/sumsub.png" alt="Sumsub" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bcb-group.png" alt="BCB Group" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/mercuryo.png" alt="Mercuryo" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/yellow-card.png" alt="Yellow Card" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/global-ledger.png" alt="Global Ledger" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/payswix.png" alt="Payswix" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bitgo.png" alt="BitGo" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bitliv.png" alt="Bitliv" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/bybit.png" alt="Bybit" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              <Image src="/media/partners/utila.png" alt="Utila" className="partner-logo" style={{ height: 26, width: 'auto' }}  height={26} width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Home · The gateway: the Coincashy gateway wired into the client's ecosystem (canvas "gateway flow") */}
    <section className="sec gw" id="gateway">
      <canvas className="flow-canvas" id="flow-canvas" aria-hidden="true" suppressHydrationWarning />
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
            <div className="hub-core"><Image src="/media/logo-mark-white.png" alt="" width={149} height={157} /></div>
            <div className="hub-label"><span className="hub-word">Coincashy gateway</span><span className="hub-tick" id="hub-tick" aria-live="polite">Screen · Convert · Route · Settle</span></div>
          </div>
          <nav className="fnodes" aria-label="How the gateway connects">
            <a className="fnode fn-l" href="#processing" style={{'--x': '6%', '--y': '13%'} as React.CSSProperties} data-tick="Accept crypto at checkout, settle in EUR, GBP or USD"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-store" /></svg></span><span><b>Your checkout</b></span></a>
            <a className="fnode fn-l" href="#developers" style={{'--x': '0%', '--y': '39%'} as React.CSSProperties} data-tick="Payments, wallet and quote APIs, with webhooks"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-code-xml" /></svg></span><span><b>Your app &amp; website</b></span></a>
            <a className="fnode fn-l" href="#buy" style={{'--x': '0%', '--y': '65%'} as React.CSSProperties} data-tick="Pay by card, Apple Pay, Google Pay or wallet"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-users" /></svg></span><span><b>Your customers</b></span></a>
            <a className="fnode fn-l" href="#rails" style={{'--x': '6%', '--y': '91%'} as React.CSSProperties} data-tick="Fiat accounts, vIBANs and balances in one view"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><span><b>Your treasury</b></span></a>
            <a className="fnode fn-r" href="#platform" style={{'--x': '6%', '--y': '13%'} as React.CSSProperties} data-tick="Bitcoin, Ethereum and supported networks"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-bitcoin" /></svg></span><span><b>Crypto networks</b></span></a>
            <a className="fnode fn-r" href="#settlement" style={{'--x': '0%', '--y': '39%'} as React.CSSProperties} data-tick="USDC and USDT settlement"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-coins" /></svg></span><span><b>Stablecoins</b></span></a>
            <a className="fnode fn-r" href="#card" style={{'--x': '0%', '--y': '65%'} as React.CSSProperties} data-tick="Visa and Mastercard crypto cards"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-credit-card" /></svg></span><span><b>Card rails</b></span></a>
            <a className="fnode fn-r" href="#vibans" style={{'--x': '6%', '--y': '91%'} as React.CSSProperties} data-tick="EUR, GBP, USD and local rails"><span className="fn-ic"><svg className="ic" aria-hidden="true"><use href="#i-banknote" /></svg></span><span><b>Bank rails</b></span></a>
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
                        <div className="card-row"><span className="card-word"><Image className="cw-dark" src="/media/logo-white.png" alt="Coincashy" width={1217} height={157} /><Image className="cw-light" src="/media/logo-black.png" alt="" width={1217} height={157} /></span><span className="card-type">VIRTUAL</span></div>
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
              <Image className="phone-frame" src="/media/phone-frame.png" alt="" width={600} height={1219} loading="lazy" decoding="async" />
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
          <p className="statement" id="statement" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: 'Pay in with fiat or crypto. Screen every customer and wallet. Convert through <em>OTC and liquidity.</em> Route to a wallet or account. Settle in <em>fiat or stablecoin.</em>' }} />
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
          <div className="marquee" style={{'--dur': '44s'} as React.CSSProperties}>
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
      <canvas className="sonar-canvas" aria-hidden="true" suppressHydrationWarning />
      <div className="sonar-wash" aria-hidden="true" />
      <div className="wrap sonar-inner">
        <p className="eyebrow">Get started</p>
        <h2 className="h2">Tell us how your money needs to move.</h2>
        <p className="lede">Every ring is a payment settling somewhere on the network. Tap anywhere to send one, then tell us about your markets, currencies, volumes and settlement needs.</p>
        <div className="cta-row"><a className="btn btn-solid" href="#contact">Talk to our team<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a><a className="btn btn-line" href="#buy">Buy crypto<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></a></div>
      </div>
    </section>
  </main>
  );
}
