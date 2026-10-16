import Image from 'next/image';
import Link from 'next/link';
import GatewaySection from './GatewaySection';
import StorySection from './StorySection';
import SonarSection from './SonarSection';
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
            <Link className="btn btn-solid" href="/business">For business<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            <Link className="btn btn-line" href="/personal">For individuals<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
          </div>
        </div>
        <div className="hero-proof" aria-label="Trusted by clients and partners">
          <span className="hero-proof-label">TRUSTED BY CLIENTS AND PARTNERS</span>
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
    <GatewaySection />
    {/* Home · Products tour: Sticky phone story */}
    <StorySection />
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
            <Link className="btn btn-solid" href="/personal">Explore Personal<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
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
            <Link className="btn btn-solid" href="/business">Explore Business<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
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
          <Link className="flow-node" role="listitem" href="/business?stage=0#pipeline" data-stage={0}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-arrow-down-left" /></svg></span><b>Pay in</b></Link>
          <Link className="flow-node" role="listitem" href="/business?stage=1#pipeline" data-stage={1}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-scan-search" /></svg></span><b>Screen</b></Link>
          <Link className="flow-node" role="listitem" href="/business?stage=2#pipeline" data-stage={2}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-repeat" /></svg></span><b>Convert</b></Link>
          <Link className="flow-node" role="listitem" href="/business?stage=3#pipeline" data-stage={3}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-git-merge" /></svg></span><b>Route</b></Link>
          <Link className="flow-node" role="listitem" href="/business?stage=4#pipeline" data-stage={4}><span className="flow-dot"><svg className="ic" aria-hidden="true"><use href="#i-landmark" /></svg></span><b>Settle</b></Link>
        </div>
        <div className="cta-row mt-l"><Link className="link-arrow" href="/business#pipeline">See how the business platform works<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
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
        <div className="cta-row mt-l"><Link className="link-arrow" href="/compliance">How compliance works at Coincashy<svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
      </div>
    </section>
    {/* Home · Closing: sonar grid (dots answer taps with expanding rings) */}
    <SonarSection />
  </main>
  );
}
