// @ts-nocheck
export default function BusinessView() {
  return (
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
  );
}
