"use client";
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

const navItems = [
  { id: '00', title: 'Overview' },
  { id: '01', title: 'Headers on every call' },
  { id: '02', title: 'Log in (JWT)' },
  { id: '03', title: 'Create the guest' },
  { id: '04', title: 'Create the onramp link' },
  { id: '05', title: 'Payload reference' },
  { id: '06', title: 'What happens next' },
  { id: '07', title: 'Withdrawal to external wallet' },
  { id: '08', title: 'Status codes' },
  { id: '09', title: 'To verify' }
];

const SectionTitle = ({ id, title }: { id: string, title: string }) => (
  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '2rem' }}>
    <span style={{ background: 'var(--surface-2)', color: 'var(--accent)', border: '1px solid var(--line)', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '1rem', fontFamily: 'monospace' }}>{id}</span>
    {title}
  </h2>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre style={{ background: '#111', color: '#eee', padding: '1.5rem', borderRadius: '12px', overflowX: 'auto', fontSize: '0.85rem', fontFamily: 'monospace', border: '1px solid var(--line)', marginBottom: '1.5rem' }}>
    {children}
  </pre>
);

const RequestBlock = ({ method, path, body }: { method: string, path: string, body?: string }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', alignItems: 'center' }}>
      <span style={{ color: 'var(--fg)', fontWeight: 600, fontSize: '0.85rem' }}>Request</span>
      <span style={{ background: 'var(--surface-2)', color: 'var(--accent)', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid var(--line)' }}>{method}</span>
      <code style={{ color: 'var(--fg-dim)', fontSize: '0.85rem' }}>{path}</code>
    </div>
    {body && <CodeBlock>{body}</CodeBlock>}
  </div>
);

const ResponseBlock = ({ status, subtitle, body }: { status: string, subtitle?: string, body: string }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', alignItems: 'center' }}>
      <span style={{ color: 'var(--fg)', fontWeight: 600, fontSize: '0.85rem' }}>Response · {status}</span>
      {subtitle && <span style={{ color: 'var(--fg-dim)', fontSize: '0.85rem' }}>{subtitle}</span>}
    </div>
    <CodeBlock>{body}</CodeBlock>
  </div>
);

const Alert = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div style={{ background: 'var(--surface-2)', border: '1px solid var(--line)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
    <h4 style={{ color: 'var(--accent)', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{title}</h4>
    <p style={{ color: 'var(--fg-dim)', margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

export default function DevelopersPage() {
  const [activeId, setActiveId] = useState('00');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleRatio = 0;
        let mostVisibleId = activeId;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (entry.intersectionRatio > maxVisibleRatio) {
              maxVisibleRatio = entry.intersectionRatio;
              mostVisibleId = id;
            }
          }
        });
        
        if (maxVisibleRatio > 0) {
          setActiveId(mostVisibleId);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeId]);

  return (
    <>
      <main className="page" style={{ paddingTop: '100px', background: 'var(--ground)' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '1200px', gap: '3rem' }}>
          
          <aside style={{ position: 'sticky', top: '100px', width: '260px', flexShrink: 0, height: 'calc(100vh - 120px)', overflowY: 'auto', paddingRight: '1rem' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveId(item.id);
                  }}
                  style={{ 
                    padding: '0.6rem 1rem', 
                    borderRadius: '8px', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: activeId === item.id ? 'var(--accent)' : 'var(--fg-dim)',
                    background: activeId === item.id ? 'var(--surface)' : 'transparent',
                    border: activeId === item.id ? '1px solid var(--line)' : '1px solid transparent',
                    fontWeight: activeId === item.id ? 600 : 400,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', opacity: activeId === item.id ? 1 : 0.5, fontFamily: 'monospace' }}>{item.id}</span>
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          <div style={{ flexGrow: 1, paddingBottom: '6rem', maxWidth: '800px', color: 'var(--fg)' }}>
             
             <section id="00" style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--fg)' }}>Overview</h1>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  Three calls mint a payment link a Coincashy guest can open to buy crypto with fiat. This page walks the calls in order, then documents every field and everything that comes back. Every path below is called against <code style={{ color: 'var(--accent)', background: 'var(--surface-2)', padding: '0.2rem 0.4rem', borderRadius: '4px', border: '1px solid var(--line)' }}>trade.coincashy.io</code>.
                </p>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--line)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                  <img src="https://mermaid.ink/svg/pako:eNptk91q4zAQhV9l0EVJwbHvDW5JdkMoLKRLyvZmoUylcTxrWfJKcrOm9N1XihOaNvWVrfPN0fz5VUirSJTC09-BjKTvjDuH3W8D8enRBZbcowmwBPTwzbKR6JsRnlG2ZNQlt0jcxkSPHhb3d5fA4xmwZ7WjcMmsE7MeyEdtUpfzm5tFCfeb7QMUf_ah2JEhh4Fghj0_tTRmkF48SUchg8GTM9jR9RS-mMf4ZQlLQkcOgo3Jf2GMQ2iKaBB957t0_XzPoZn3zDCjDll_sjswh7vAkbf6hdQXrj2OHZngiwPuCzsVP4vn2qLKwNjANUsMbM2nG46xP9i0UEFwqCiXpynkbIuphcWhotsjfaeqXpd5nr8nsy5BkeaXmOmZ5aSvo_5Ygu3JnIsZaLsDNidooqID1yOwihSHEWY1u9iDYxxYo8frD7Y9yxYQOgqNVYBGJfZjkef153t6bqxtnwanIXqThzQDCA2lHg_6uC7a2j6mnEJQx9mbEQJ3NIlnI1iv0gR8f-z6bb2sJKur-ldF_0LaEf2UPh-q7VW9qVY_3w1O2cnBuVSaDxgGP-lx9UUmOnJxKZQoX0VMr0v_kULXirdMxE2y29FIUQY3UCaGXsWlWikO1omyRu3p7T8xHCaK" alt="System architecture flow" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                  <p style={{ color: 'var(--fg-dim)', fontStyle: 'italic', margin: '1rem 0 0 0' }}>System architecture flow</p>
                </div>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6 }}>
                  Steps 1-3 are yours to call from the Coincashy backend. Everything from "guest opens link" onward is the widget's job — it's covered in <a href="#06" style={{ color: 'var(--accent)', textDecoration: 'none' }}>§06</a> so you know what to expect on the other end, not because you need to build it. Once the fiat lands, paying the crypto out is a separate call you make yourself — <a href="#07" style={{ color: 'var(--accent)', textDecoration: 'none' }}>§07</a>.
                </p>
             </section>

             <section id="01" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="01" title="Headers on every call" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>One header. Send it on every call and you're covered.</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '1rem', color: 'var(--fg-dim)' }}>HEADER</th>
                        <th style={{ padding: '1rem', color: 'var(--fg-dim)' }}>VALUE</th>
                        <th style={{ padding: '1rem', color: 'var(--fg-dim)' }}>APPLIES TO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '1rem', borderBottom: '1px solid var(--line)' }}><code>Authorization</code></td>
                        <td style={{ padding: '1rem', borderBottom: '1px solid var(--line)' }}><code>Bearer &lt;token&gt;</code> from <a href="#02" style={{ color: 'var(--accent)' }}>login</a></td>
                        <td style={{ padding: '1rem', borderBottom: '1px solid var(--line)', color: 'var(--fg-dim)' }}>Every <code>/api/v3/*</code> call — §03 and §04. You won't have one yet when calling <code>/jwt/generate</code> itself.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
             </section>

             <section id="02" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="02" title="Log in and get a JWT" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Server-to-server — no password, no OTP screen. <code>api_key</code> / <code>api_secret</code> are the integration credentials the platform team issues to Coincashy; <code>username</code> is the merchant account they're tied to.
                </p>
                
                <RequestBlock method="POST" path="/api/jwt/generate" body={`{
  "api_key": "<coincashy api key>",
  "api_secret": "<coincashy api secret>",
  "username": "ops@coincashy.io"
}`} />

                <ResponseBlock status="200" subtitle="JWTController::getToken" body={`{
  "iat": 1758100000,
  "exp": 1758103600,
  "type": "Bearer",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "scopes": [ "..." ],
  "api_data": {
    "user": { "user_type": "customer" }
  }
}`} />

                <Alert title="Note the path">
                  This one call lives at <code>/api/jwt/generate</code> — not under <code>/api/v3/</code> like everything else in this guide. From here on, use token exactly the same way: <code>Authorization: Bearer &lt;token&gt;</code> on every call in §03 and §04.
                </Alert>
                <Alert title="Two things worth knowing">
                  The token is good for 1 hour, fixed. There's no separate refresh call — minting a new token immediately invalidates whichever one was last issued to that username, so just call <code>/jwt/generate</code> again when you need a fresh one (don't run two of these at once for the same username).<br/><br/>
                  A wrong api_key / api_secret / username combination comes back as a plain 401 with the text <em>Invalid Credentials</em> — not the JSON error body used elsewhere in this guide.
                </Alert>
             </section>

             <section id="03" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="03" title="Create the guest" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  The guest is the person who'll open the link and buy crypto. You have two options, depending on whether you want the link to auto-log them in.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Option A — pre-create the guest (auto-login link)</h3>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Register the guest's email against your merchant account before minting the link. Pass this guest's email as <code>payload.username</code> in step 4 and the widget skips straight to the purchase — no OTP screen.
                </p>
                <RequestBlock method="POST" path="/api/v3/auth/create-guest-with-pii" body={`{
  "email": "demo.guest@coincashy.io"
}`} />
                <ResponseBlock status="200" subtitle="per the route's Swagger contract" body={`{
  "message": "Guest user created/updated successfully",
  "userId": "10432",
  "isNew": true
}`} />

                <Alert title="Confirm before relying on this">
                  <code>auth.controller.ts</code> currently declares two handlers on the identical route <code>POST /auth/create-guest-with-pii</code> — one bare-bones (just writes a PII blob), one full-featured (also accepts KYC files/questionnaire answers, links the guest to your merchant account, and kicks off Sumsub onboarding). Express/Nest only ever runs the first-declared handler for a duplicated route — the second is dead code. So the response you actually get, and whether the guest ends up linked to your merchant, may not match what the fuller description promises. Worth one live test against staging before depending on it.
                </Alert>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>Option B — let the guest self-register (no pre-creation)</h3>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Omit <code>username</code> entirely in step 4. The link still works — opening it returns <code>login_required</code>, and the widget itself calls the guest self-onboarding routes (<code>/auth/guest/register</code> then <code>/auth/guest/login</code> with an emailed OTP). Simplest option if you don't already know the guest's email ahead of time, or don't need an auto-login link.
                </p>
             </section>

             <section id="04" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="04" title="Create the onramp link" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  This is the endpoint you started with — corrected. The body needs a <code>payload</code> wrapper; a bare <code>{'{ flow, username }'}</code> object at the top level fails validation.
                </p>
                <RequestBlock method="POST" path="/api/v3/payments/guests/onramp" body={`{
  "payload": {
    "flow": "onramp",
    "username": "demo.guest@coincashy.io",
    "user_id": "<coincashy merchant id>",
    "fiat_currency": "EUR",
    "receive_currency": "USDT",
    "network": "TRON"
  }
}`} />
                <ResponseBlock status="201" subtitle="CreateGuestPaymentResponseDto" body={`{
  "paymentLink": "https://trade.coincashy.io/widget/token?paymentId=pl%3A6f9c9a2e-3b7a-4e2b-9a1e-2c9b6a5b9f10"
}`} />

                <Alert title="Where trade.coincashy.io comes from">
                  The link's host isn't a request field — it's read from the target merchant's <code>WIDGET_URI</code> setting server-side (falling back to a platform-wide default if unset). If the returned link doesn't point at trade.coincashy.io, that's a setting to fix on the merchant record you're logged in as, not a payload option.
                </Alert>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  The token after <code>pl:</code> is an opaque, server-minted secret — not an encrypted id you decode. It's the credential: whoever presents it gets the guest session it's bound to, so treat the whole link like a bearer token in transit (send over HTTPS, don't log it in plaintext, don't put it somewhere it'll be cached or indexed).
                </p>
             </section>

             <section id="05" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="05" title="Payload reference" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Everything <code>payload</code> and the optional <code>notification</code> object accept.
                </p>

                <h4 style={{ marginBottom: '1rem' }}>payload</h4>
                <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Field</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Type</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Notes</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'var(--fg-dim)' }}>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>flow</td><td style={{ padding: '0.75rem' }}>string (req)</td><td style={{ padding: '0.75rem' }}>always "onramp" for Coincashy</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>user_id</td><td style={{ padding: '0.75rem' }}>string (req)</td><td style={{ padding: '0.75rem' }}>the Coincashy merchant id — scopes the link to your merchant account. The caller must be an operator authorized to target it.</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>username</td><td style={{ padding: '0.75rem' }}>email</td><td style={{ padding: '0.75rem' }}>an existing guest's email → auto-login link. Absent → self-service link.</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>external_id</td><td style={{ padding: '0.75rem' }}>string</td><td style={{ padding: '0.75rem' }}>your idempotency / reference key. Must be unique. Server generates a UUID if omitted.</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>fiat_currency</td><td style={{ padding: '0.75rem' }}>string</td><td style={{ padding: '0.75rem' }}>one of USD, EUR, AED</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>fiat_amount</td><td style={{ padding: '0.75rem' }}>num str</td><td style={{ padding: '0.75rem' }}>positive, up to 2 decimal places, e.g. "250.00"</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>receive_currency</td><td style={{ padding: '0.75rem' }}>string</td><td style={{ padding: '0.75rem' }}>one of USDC, USDT, BTC, TRX — the crypto the guest ends up with</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>network</td><td style={{ padding: '0.75rem' }}>string</td><td style={{ padding: '0.75rem' }}>one of ETHEREUM, BITCOIN, TRON, BINANCE_SMART_CHAIN</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>vendor_id</td><td style={{ padding: '0.75rem' }}>string</td><td style={{ padding: '0.75rem' }}>pre-selects a PSP provider — skips the picker screen</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>method</td><td style={{ padding: '0.75rem' }}>string</td><td style={{ padding: '0.75rem' }}>pre-selects a payment method, e.g. "Wire Transfer"</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 style={{ marginBottom: '1rem' }}>notification (optional)</h4>
                <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Field</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Type</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Notes</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'var(--fg-dim)' }}>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>webhook_url</td><td style={{ padding: '0.75rem' }}>URL</td><td style={{ padding: '0.75rem' }}>server-to-server callback once the payment settles</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>success_url</td><td style={{ padding: '0.75rem' }}>URL</td><td style={{ padding: '0.75rem' }}>where the widget redirects the guest on success</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>fail_url</td><td style={{ padding: '0.75rem' }}>URL</td><td style={{ padding: '0.75rem' }}>where the widget redirects the guest on failure</td></tr>
                    </tbody>
                  </table>
                </div>

                <Alert title="Access Control">
                  Only a non-guest caller can hit this endpoint — a guest JWT gets a flat 403. That's an identity check on you (the caller), separate from the guest the link is being created for.
                </Alert>
             </section>

             <section id="06" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="06" title="What happens after you send the link" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>In plain terms:</p>
                <ol style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '2rem', paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem' }}>
                  <li>The guest opens the link.</li>
                  <li>If you set <code>username</code> in step 04, they're logged straight in. Otherwise they get a one-time code by email first.</li>
                  <li>First payment ever on this account? They're asked to verify their identity (KYC) before they can continue. Returning guests skip this.</li>
                  <li>They pick a payment method and pay.</li>
                  <li>Done — success or fail. You find out two ways: your <code>notification.webhook_url</code> gets called, and you can poll for the status yourself any time.</li>
                  <li>Fiat confirmed — the merchant's crypto balance updates. Withdrawing it to an external wallet is a separate step you trigger — §07.</li>
                </ol>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Checking payment status — poll or wait for the webhook</h3>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  <code>notification.webhook_url</code> fires once the payment reaches a final state. If you'd rather check directly — or the webhook never arrives — poll this endpoint with the <code>external_id</code> you set in step 04.
                </p>

                <RequestBlock method="GET" path="/api/v3/psp/onramp?fB=cid&fV=3fa1c2e0-...-uuid&fT=S&fO=EQ" />
                <p style={{ color: 'var(--fg-dim)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>fB/fV/fT/fO = filter field / value / type / operator · S = string, EQ = equals</p>

                <ResponseBlock status="200" subtitle="PspOnrampListResponseDto" body={`{
  "totalItems": 1,
  "result": [
    {
      "id": "58213",
      "status": "PENDING_PAYMENT",
      "cid": "3fa1c2e0-...-uuid",
      "external_payment_id": "psp-ref-88213",
      "merchant_id": "77",
      "created_at": "2026-09-17T16:02:11.000Z",
      "updated_at": "2026-09-17T16:04:40.000Z"
    }
  ]
}`} />

                <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>status</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Means</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'var(--fg-dim)' }}>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>PENDING_PAYMENT</td><td style={{ padding: '0.75rem' }}>still in progress — guest is somewhere in checkout</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>PENDING_SIGNATURE, PENDING_TRANSFER</td><td style={{ padding: '0.75rem' }}>still in progress</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#22c55e' }}>COMPLETED</td><td style={{ padding: '0.75rem' }}>done — the guest has their crypto</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>REJECTED / REJECTED_BY_ADMIN</td><td style={{ padding: '0.75rem' }}>failed / closed out</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>expired / EXPIERD</td><td style={{ padding: '0.75rem' }}>guest never finished it in time</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>FULL_REFUND / CHARGEBACKED</td><td style={{ padding: '0.75rem' }}>money went back — treat as failed</td></tr>
                    </tbody>
                  </table>
                </div>

                <Alert title="It won't exist right away">
                  This row only appears once the guest actually reaches the PSP checkout step inside the widget — not the moment you create the link. An empty result right after sending the link usually just means the guest hasn't gotten that far yet.
                  <br/><br/>
                  One more thing worth knowing: the link's expiry mirrors the access-token lifetime, so it dies on the same clock as the JWT it hands out — ask the platform team for the current <code>JWT_ACCESS_EXPIRE_IN</code> value rather than assuming one. Past that, opening the link fails with "payment link expired".
                </Alert>
             </section>

             <section id="07" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="07" title="Withdrawal to external wallet" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Once the fiat deposit is approved (§06), the Coincashy merchant's crypto balance updates. From there, the merchant can withdraw that balance to an external wallet — the usual three things: wallet address, currency, and network.
                </p>

                <Alert title="Whose balance this spends">
                  This pays out of Coincashy's own account balance on the platform — not an amount escrowed per deposit. A confirmed fiat deposit credits that balance; the merchant then chooses to withdraw from it. Keep it funded, or the call fails with <code>INSUFFICIENT_FUNDS</code>.
                </Alert>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>Look up the currency_id</h3>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Public, no auth needed. The same currency can appear several times — once per network it's issued on — each with its own id. Match the network the destination wallet is actually on.
                </p>

                <RequestBlock method="GET" path="/api/currencies" />
                <ResponseBlock status="200" subtitle="api_message: CURRENCY_GET_LIST_SUCCESS" body={`{
  "api_data": {
    "currencies": [
      { "id": "bkE0RmNjbEhCUmc9", "name": "USD",  "network": "FIAT",   "type": "FIAT" },
      { "id": "eGFCV203K3VSOGM9", "name": "BTC",  "network": "BITCOIN", "type": "CRYPTO" },
      { "id": "ckk3THQ2KzVmd009", "name": "USDC", "network": "BINANCE_SMART_CHAIN", "type": "CRYPTO" },
      { "id": "aFpaK2ViQlVob0U9", "name": "USDC", "network": "TRON",     "type": "CRYPTO" },
      { "id": "OTJqTmNBRk1LMVU9", "name": "USDC", "network": "ETHEREUM", "type": "CRYPTO" }
    ]
  }
}`} />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Three rows above are all named "USDC" with three different ids — one per network. Sending the wrong one doesn't fail loudly; it just tries to pay out on the wrong chain. Always pick by network, never by name alone.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>Send it</h3>
                <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Field</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Type</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Notes</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'var(--fg-dim)' }}>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>amount</td><td style={{ padding: '0.75rem' }}>num str (req)</td><td style={{ padding: '0.75rem' }}>plain decimal in the currency's normal units, e.g. "1" = 1 USDC — not base units</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>recipient_address</td><td style={{ padding: '0.75rem' }}>string (req)</td><td style={{ padding: '0.75rem' }}>the destination wallet — validated against the address format for the resolved network</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>currency_id</td><td style={{ padding: '0.75rem' }}>string (rec)</td><td style={{ padding: '0.75rem' }}>the id from the currency list above — pins the exact network</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>currency</td><td style={{ padding: '0.75rem' }}>string (fallback)</td><td style={{ padding: '0.75rem' }}>a bare name like "USDC" — only use without currency_id; falls back to a platform default network</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>initial_rate</td><td style={{ padding: '0.75rem' }}>num str (opt)</td><td style={{ padding: '0.75rem' }}>the exchange rate to lock in for this payout</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>initial_rate_currency_id</td><td style={{ padding: '0.75rem' }}>string (opt)</td><td style={{ padding: '0.75rem' }}>which currency initial_rate is priced against</td></tr>
                    </tbody>
                  </table>
                </div>

                <RequestBlock method="POST" path="/api/transfers" body={`{
  "amount": "1",
  "currency": "USDC",
  "currency_id": "ckk3THQ2KzVmd009",
  "recipient_address": "0xA10fC656A5c470A5A45b5a468E774E46FC039Ffb",
  "initial_rate": "0.99985735",
  "initial_rate_currency_id": "bkE0RmNjbEhCUmc9"
}`} />
                <ResponseBlock status="200" subtitle="api_message: TRANSFER_POST_SUCCESS" body={`{
  "api_data": {
    "transfer": {
      "id": "94217",
      "status": "PENDING",
      "amount": "1",
      "currency": "USDC",
      "recipient_address": "0xA10fC656A5c470A5A45b5a468E774E46FC039Ffb"
    }
  }
}`} />
                
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>Checking withdrawal status</h3>
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Poll by the id the create call returned. A webhook also fires on status changes — ask the platform team how Coincashy's is configured, since (unlike the onramp link) this call has no per-request <code>webhook_url</code> field of its own.
                </p>

                <RequestBlock method="GET" path="/api/transfers/94217" />
                <ResponseBlock status="200" subtitle="transfer.status" body={`{
  "api_data": {
    "transfer": {
      "id": "94217",
      "status": "CONFIRMED"
    }
  }
}`} />
             </section>

             <section id="08" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="08" title="Status codes" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>For §04's onramp-link call.</p>
                <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Code</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Meaning here</th>
                        <th style={{ padding: '0.75rem', color: 'var(--fg-dim)' }}>Typical cause</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'var(--fg-dim)' }}>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#22c55e' }}>201</td><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>Link created</td><td style={{ padding: '0.75rem' }}>—</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>400</td><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>Bad request</td><td style={{ padding: '0.75rem' }}>unknown fiat_currency / receive_currency / network, a reused external_id, a username that isn't a guest, or missing payload/flow</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>401</td><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>Unauthorized</td><td style={{ padding: '0.75rem' }}>missing or expired bearer token</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>403</td><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>Forbidden</td><td style={{ padding: '0.75rem' }}>caller is a guest, or a non-operator caller passed someone else's user_id</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '0.75rem', color: '#ef4444' }}>500</td><td style={{ padding: '0.75rem', color: 'var(--fg)' }}>Server error</td><td style={{ padding: '0.75rem' }}>unhandled — worth reporting with the request id / timestamp</td></tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 style={{ marginBottom: '1rem', color: 'var(--fg-dim)' }}>Example error body</h4>
                <CodeBlock>{`{
  "statusCode": 400,
  "timestamp": "2026-09-17T10:04:12.441Z",
  "path": "/api/v3/payments/guests/onramp",
  "method": "POST",
  "error": "Bad Request",
  "message": "invalid EURX fiat_currency"
}`}</CodeBlock>
             </section>

             <section id="09" style={{ marginBottom: '4rem' }}>
                <SectionTitle id="09" title="To verify against a live call" />
                <p style={{ color: 'var(--fg-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Everything on this page is read straight from the current source. These points are flagged because the code disagrees with itself, or because the value isn't in the code at all — confirm them once against staging, then this list is done.
                </p>
                <ol style={{ color: 'var(--fg-dim)', lineHeight: 1.6, paddingLeft: '1.5rem', display: 'grid', gap: '1rem' }}>
                  <li>Get the Coincashy <code>api_key</code> / <code>api_secret</code> from the platform team — they don't come back from any endpoint.</li>
                  <li>Confirm a <code>/jwt/generate</code> token is actually accepted as <code>Authorization: Bearer</code> on <code>/api/v3/*</code> calls — it's issued by a different, older auth system than the rest of the API.</li>
                  <li>Confirm the exact <code>fB</code>/<code>fV</code>/<code>fT</code>/<code>fO</code> filter query on <code>GET /psp/onramp</code> (§06) still resolves by <code>cid</code> the way it's documented here.</li>
                  <li>Test <code>/auth/create-guest-with-pii</code> live (§03) — confirm which of the two duplicate handlers actually answers, and whether the guest ends up linked to your merchant.</li>
                  <li>Confirm the Coincashy merchant's <code>WIDGET_URI</code> is set to <code>trade.coincashy.io</code>, so links resolve to the right domain.</li>
                  <li>Get the live <code>JWT_ACCESS_EXPIRE_IN</code> value from the platform team — it's the actual onramp-link TTL.</li>
                  <li>Confirm the Coincashy merchant account is pre-funded with enough crypto balance to cover payouts (§07) — <code>/transfers</code> pays out of that balance and returns <code>INSUFFICIENT_FUNDS</code> when it's short.</li>
                </ol>
             </section>
             
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
