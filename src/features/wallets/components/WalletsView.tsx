"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type TabId = 'create-wallet' | 'gasless' | 'policy' | 'webhook';
type LangId = 'ts' | 'python' | 'curl';

interface CodeSample {
  title: string;
  endpoint: string;
  code: Record<LangId, string>;
  response: string;
}

const SAMPLES: Record<TabId, CodeSample> = {
  'create-wallet': {
    title: 'Create MPC Wallet',
    endpoint: 'POST /v1/wallets/mpc',
    code: {
      ts: `import { CoincashyClient } from '@coincashy/sdk';

const client = new CoincashyClient({ apiKey: process.env.COINCASHY_API_KEY });

// Provision an enterprise MPC smart wallet in <120ms
const wallet = await client.wallets.create({
  userId: 'usr_9428ad10f',
  chains: ['ethereum', 'polygon', 'arbitrum', 'solana', 'bitcoin'],
  keyScheme: 'MPC-CMP-2of3',
  metadata: { tier: 'premium_user', country: 'DE' }
});

console.log('Wallet Created:', wallet.address, wallet.id);`,
      python: `from coincashy import CoincashyClient

client = CoincashyClient(api_key="your_api_key")

# Provision an enterprise MPC smart wallet in <120ms
wallet = client.wallets.create(
    user_id="usr_9428ad10f",
    chains=["ethereum", "polygon", "arbitrum", "solana", "bitcoin"],
    key_scheme="MPC-CMP-2of3",
    metadata={"tier": "premium_user", "country": "DE"}
)

print(f"Wallet Created: {wallet.address} ({wallet.id})")`,
      curl: `curl -X POST https://api.coincashy.io/v1/wallets/mpc \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userId": "usr_9428ad10f",
    "chains": ["ethereum", "polygon", "arbitrum", "solana", "bitcoin"],
    "keyScheme": "MPC-CMP-2of3",
    "metadata": { "tier": "premium_user", "country": "DE" }
  }'`
    },
    response: `{
  "id": "wlt_77a98c0b2f",
  "userId": "usr_9428ad10f",
  "status": "active",
  "addresses": {
    "evm": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
    "solana": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "bitcoin": "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq"
  },
  "keyScheme": "MPC-CMP-2of3",
  "createdAt": "2026-10-16T14:32:01Z"
}`
  },
  'gasless': {
    title: 'Gasless Transfer (ERC-4337)',
    endpoint: 'POST /v1/transactions/user-op',
    code: {
      ts: `// Sponsor gas fees for your users via Paymaster
const tx = await client.transactions.sendSponsored({
  walletId: 'wlt_77a98c0b2f',
  to: '0x388C818CA8B9251b393131C08a73683246A16633',
  asset: 'USDC',
  amount: '250.00',
  chain: 'polygon',
  paymaster: {
    sponsorGas: true,
    policyId: 'pol_new_user_welcome'
  }
});

console.log('Transaction Confirmed:', tx.txHash);`,
      python: `# Sponsor gas fees for your users via Paymaster
tx = client.transactions.send_sponsored(
    wallet_id="wlt_77a98c0b2f",
    to="0x388C818CA8B9251b393131C08a73683246A16633",
    asset="USDC",
    amount="250.00",
    chain="polygon",
    paymaster={"sponsor_gas": True, "policy_id": "pol_new_user_welcome"}
)

print(f"Transaction Confirmed: {tx.tx_hash}")`,
      curl: `curl -X POST https://api.coincashy.io/v1/transactions/user-op \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "walletId": "wlt_77a98c0b2f",
    "to": "0x388C818CA8B9251b393131C08a73683246A16633",
    "asset": "USDC",
    "amount": "250.00",
    "chain": "polygon",
    "paymaster": { "sponsorGas": true, "policyId": "pol_new_user_welcome" }
  }'`
    },
    response: `{
  "txId": "tx_op_8819af1e",
  "txHash": "0x5d9326f2bb60faec34e565ad716d004d445ebcb9c0",
  "status": "settled",
  "gasSponsored": true,
  "gasCostUsd": "0.0042",
  "blockNumber": 62910482
}`
  },
  'policy': {
    title: 'Governance & Policy Engine',
    endpoint: 'PUT /v1/wallets/{id}/policies',
    code: {
      ts: `// Configure automated multi-signature quorum & velocity limits
await client.policies.setPolicy('wlt_77a98c0b2f', {
  spendingLimits: {
    dailyUsd: 100000,
    perTransactionUsd: 25000
  },
  approvals: {
    quorum: 2,
    approvers: ['adm_finance_lead', 'adm_compliance_officer']
  },
  amlScreening: {
    enforceSumsubCheck: true,
    blockHighRiskScoreAbove: 75
  }
});`,
      python: `# Configure automated multi-signature quorum & velocity limits
client.policies.set_policy(
    wallet_id="wlt_77a98c0b2f",
    spending_limits={"daily_usd": 100000, "per_transaction_usd": 25000},
    approvals={"quorum": 2, "approvers": ["adm_finance_lead", "adm_compliance_officer"]},
    aml_screening={"enforce_sumsub_check": True, "block_high_risk_score_above": 75}
)`,
      curl: `curl -X PUT https://api.coincashy.io/v1/wallets/wlt_77a98c0b2f/policies \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "spendingLimits": { "dailyUsd": 100000, "perTransactionUsd": 25000 },
    "approvals": { "quorum": 2, "approvers": ["adm_finance_lead", "adm_compliance_officer"] },
    "amlScreening": { "enforceSumsubCheck": true, "blockHighRiskScoreAbove": 75 }
  }'`
    },
    response: `{
  "policyId": "pol_9921_custom",
  "walletId": "wlt_77a98c0b2f",
  "activeRules": 3,
  "status": "enforced",
  "updatedAt": "2026-10-16T14:35:10Z"
}`
  },
  'webhook': {
    title: 'Webhook Event Listener',
    endpoint: 'POST /api/webhooks/coincashy',
    code: {
      ts: `import { verifyWebhookSignature } from '@coincashy/sdk';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('x-coincashy-signature')!;
  
  const event = verifyWebhookSignature(body, signature, process.env.WEBHOOK_SECRET!);
  
  if (event.type === 'wallet.deposit.confirmed') {
    const { walletId, asset, amount, txHash } = event.data;
    console.log(\`Received \${amount} \${asset} in \${walletId}\`);
    // Credit your internal user ledger automatically
  }
  
  return new Response('OK', { status: 200 });
}`,
      python: `from coincashy import verify_webhook_signature
from flask import request

@app.route("/api/webhooks/coincashy", methods=["POST"])
def webhook():
    signature = request.headers.get("x-coincashy-signature")
    event = verify_webhook_signature(request.data, signature, "YOUR_WEBHOOK_SECRET")
    
    if event["type"] == "wallet.deposit.confirmed":
        data = event["data"]
        print(f"Received {data['amount']} {data['asset']} in {data['wallet_id']}")
        # Credit user database
        
    return ("OK", 200)`,
      curl: `# Test webhook delivery with Coincashy CLI
coincashy webhooks trigger \\
  --event wallet.deposit.confirmed \\
  --target http://localhost:3000/api/webhooks/coincashy`
    },
    response: `{
  "id": "evt_98412e6a",
  "type": "wallet.deposit.confirmed",
  "data": {
    "walletId": "wlt_77a98c0b2f",
    "asset": "USDC",
    "amount": "25000.00",
    "chain": "polygon",
    "txHash": "0x8fa2...b991",
    "confirmations": 64
  },
  "timestamp": "2026-10-16T14:38:00Z"
}`
  }
};

const FAQS = [
  {
    q: 'How does Coincashy MPC protect private keys from exposure?',
    a: 'We implement state-of-the-art MPC-CMP (Multi-Party Computation) with a 2-of-3 threshold signature scheme. The private key never exists in full at any point in time or on any single server. One key share is encrypted on your client device/app enclave, one sits in Coincashy HSM cloud enclaves, and one is held with an independent recovery agent.'
  },
  {
    q: 'How does Account Abstraction (ERC-4337) benefit my end-users?',
    a: 'Account Abstraction eliminates seed phrases, allows you to sponsor gas fees with our built-in Paymaster (so users can transact without holding native ETH or MATIC), enables 1-click social logins (Google, Apple), and allows transaction batching (e.g. Approve + Swap in one click).'
  },
  {
    q: 'Can we deploy Coincashy WaaS inside our own private cloud / VPC?',
    a: 'Yes. Enterprise customers can deploy Coincashy dedicated HSM signer nodes directly inside their AWS, GCP, or Azure private VPC clusters with custom KMS HSM module isolation and dedicated throughput.'
  },
  {
    q: 'What blockchains and token standards are supported out-of-the-box?',
    a: 'We support over 40+ Layer 1 and Layer 2 blockchains, including Ethereum, Bitcoin, Solana, Polygon, Arbitrum, Optimism, Base, Avalanche, BSC, and Tron, with automatic tracking for all ERC-20, SPL, and native tokens.'
  },
  {
    q: 'How are compliance, sanctions, and AML handled for wallet addresses?',
    a: 'Every wallet provisioned through Coincashy integrates automated real-time screening powered by Global Ledger and Sumsub. Inbound and outbound transactions are scored for risk, sanctions, and illicit provenance before broadcast.'
  }
];

export default function WalletsView() {
  const [activeTab, setActiveTab] = useState<TabId>('create-wallet');
  const [activeLang, setActiveLang] = useState<LangId>('ts');
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sample = SAMPLES[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(sample.code[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="page" id="wallets-page" suppressHydrationWarning>
      {/* ============ Hero Section ============ */}
      <section className="hero subpage-hero" id="waas-hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-orb" />
          <span className="hero-veil" />
        </div>
        <div className="wrap hero-inner">
          <div className="hero-copy hero-copy-center">
            <p className="eyebrow">Enterprise Digital Asset Infrastructure</p>
            <h1 className="display">
              Wallet as a Service. <span className="nw">Programmable,</span> <em className="nw">secure, &amp; compliant.</em>
            </h1>
            <p className="lede" style={{ maxWidth: '780px', margin: '0 auto 2rem' }}>
              Deploy institutional-grade MPC wallets, account abstraction, and automated treasury infrastructure directly into your app, exchange, or fintech platform with a single developer API.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <Link className="btn btn-solid" href="/contact?topic=wallets">
                Get API Credentials
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
              <Link className="btn btn-line" href="/developers#07">
                Read Wallet Docs
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="dot live" />
                <span style={{ fontSize: '0.88rem', color: 'var(--fg-dim)' }}>&lt;120ms Key Generation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-check" /></svg>
                <span style={{ fontSize: '0.88rem', color: 'var(--fg-dim)' }}>ERC-4337 Account Abstraction</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="ic" style={{ width: '16px', height: '16px', color: 'var(--jade)' }}><use href="#i-lock" /></svg>
                <span style={{ fontSize: '0.88rem', color: 'var(--fg-dim)' }}>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Interactive Developer Code Playground ============ */}
      <section className="sec" id="developer-studio" style={{ paddingBottom: '4rem' }}>
        <div className="wrap">
          <div className="sec-split" style={{ alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Developer Experience</p>
              <h2 className="h2">Built for high-velocity engineering teams.</h2>
            </div>
            <p className="body" style={{ color: 'var(--fg-dim)' }}>
              Integrate enterprise custody and smart wallets in hours, not months. Battle-tested SDKs for Node, Python, and Go.
            </p>
          </div>

          <div
            style={{
              borderRadius: '24px',
              background: '#0B0F17',
              border: '1px solid var(--line)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.7)'
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              {/* Feature Tabs */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {[
                  { id: 'create-wallet', label: 'Create MPC Wallet' },
                  { id: 'gasless', label: 'Gasless (ERC-4337)' },
                  { id: 'policy', label: 'Policy Engine' },
                  { id: 'webhook', label: 'Webhooks' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as TabId)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      background: activeTab === tab.id ? 'var(--surface-2)' : 'transparent',
                      color: activeTab === tab.id ? '#FFF' : 'var(--fg-dim)',
                      border: `1px solid ${activeTab === tab.id ? 'var(--line)' : 'transparent'}`,
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Language Switcher & Copy */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '3px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {(['ts', 'python', 'curl'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setActiveLang(lang)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: activeLang === lang ? 'rgba(255,255,255,0.1)' : 'transparent',
                        color: activeLang === lang ? '#FFF' : 'var(--fg-faint)',
                        border: 'none',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textTransform: 'uppercase'
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-sm btn-line"
                  style={{ height: '32px', fontSize: '0.75rem', padding: '0 12px' }}
                >
                  <svg className="ic" style={{ width: '13px', height: '13px' }}><use href="#i-copy" /></svg>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Code Body Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))' }}>
              {/* Request Code */}
              <div style={{ padding: '24px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', overflowX: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.75rem', color: 'var(--fg-faint)', fontFamily: 'var(--f-mono)' }}>
                  <span style={{ color: 'var(--jade)', fontWeight: 700 }}>REQUEST</span>
                  <span>·</span>
                  <span>{sample.endpoint}</span>
                </div>
                <pre style={{ margin: 0, fontFamily: 'var(--f-mono)', fontSize: '0.84rem', lineHeight: 1.6, color: '#E2E8F0' }}>
                  <code>{sample.code[activeLang]}</code>
                </pre>
              </div>

              {/* Response Preview */}
              <div style={{ padding: '24px', background: 'rgba(0, 0, 0, 0.25)', overflowX: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.75rem', color: 'var(--fg-faint)', fontFamily: 'var(--f-mono)' }}>
                  <span style={{ color: 'var(--hi)', fontWeight: 700 }}>RESPONSE 200 OK</span>
                  <span>·</span>
                  <span>JSON Payload</span>
                </div>
                <pre style={{ margin: 0, fontFamily: 'var(--f-mono)', fontSize: '0.84rem', lineHeight: 1.6, color: '#A0AEC0' }}>
                  <code>{sample.response}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Architectural Pillars Bento Grid ============ */}
      <section className="sec" style={{ background: 'var(--surface-2)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '700px' }}>
            <p className="eyebrow">Enterprise Foundations</p>
            <h2 className="h2">Engineered for security, compliance, and scale.</h2>
            <p className="lede">Every component designed to eliminate counterparty risk and simplify user experience.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', marginTop: '2.5rem' }}>
            {/* Pillar 1: MPC-CMP */}
            <div style={{ padding: '2.25rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
                <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-lock" /></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>MPC-CMP Key Security</h3>
              <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.9rem', lineHeight: 1.55, flexGrow: 1 }}>
                2-of-3 threshold signature computation eliminates seed phrase liabilities. Key shares are encrypted and isolated across client devices and secure HSM enclaves.
              </p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>✓ Zero single point of failure</span>
              </div>
            </div>

            {/* Pillar 2: Account Abstraction */}
            <div style={{ padding: '2.25rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
                <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-repeat" /></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>ERC-4337 Smart Accounts</h3>
              <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.9rem', lineHeight: 1.55, flexGrow: 1 }}>
                Delight Web2 users with gas sponsorship (Paymaster), batch transactions (multi-call), session keys, and automated biometric social recovery.
              </p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>✓ Web2-grade user onboarding</span>
              </div>
            </div>

            {/* Pillar 3: Policy & Governance */}
            <div style={{ padding: '2.25rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
                <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-file-check" /></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Granular Policy Engine</h3>
              <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.9rem', lineHeight: 1.55, flexGrow: 1 }}>
                Enforce corporate governance with multi-signature approval quorums, IP whitelists, transaction velocity limits, and automated Sumsub AML screening.
              </p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>✓ Programmatic treasury control</span>
              </div>
            </div>

            {/* Pillar 4: Omnichain */}
            <div style={{ padding: '2.25rem', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--surface-2)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--hi)', marginBottom: '1.25rem' }}>
                <svg className="ic" style={{ width: '24px', height: '24px' }}><use href="#i-globe" /></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>40+ Omnichain Networks</h3>
              <p className="body" style={{ color: 'var(--fg-dim)', fontSize: '0.9rem', lineHeight: 1.55, flexGrow: 1 }}>
                Unified address structures across Ethereum, Polygon, Arbitrum, Solana, Bitcoin, Tron, and Base. Single integration for all Layer 1s and Layer 2s.
              </p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--line)', fontSize: '0.82rem', color: 'var(--jade)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>✓ Unified multi-chain balances</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Enterprise Comparison Table ============ */}
      <section className="sec" id="comparison">
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '720px' }}>
            <p className="eyebrow">Enterprise Evaluation</p>
            <h2 className="h2">Coincashy WaaS vs Alternative Solutions.</h2>
          </div>

          <div style={{ marginTop: '2.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '20px', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <thead>
                <tr style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)', textAlign: 'left' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-faint)' }}>Evaluation Metric</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--jade)' }}>Coincashy WaaS</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-faint)' }}>Traditional Custody</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-faint)' }}>In-House KMS Build</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Time to Market</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>&lt; 1 week (Turnkey SDK)</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>2–3 months onboarding</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>9–14 months dev cycle</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Key Architecture</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>MPC-CMP 2-of-3 Shares</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Centralized custodian</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Single AWS/GCP KMS key</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Account Abstraction</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>Native ERC-4337 &amp; Paymaster</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Not supported</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Custom contracts required</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Regulatory Compliance</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>Automated Sumsub &amp; AML</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Manual compliance reports</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>Requires external vendors</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Total Upfront Cost</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--jade)', fontWeight: 600 }}>€0 upfront · Pay-as-you-go</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>$50k+ setup + AUM fees</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--fg-dim)' }}>$500k+ in team salaries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ FAQ Accordion ============ */}
      <section className="sec" id="faq">
        <div className="wrap" style={{ maxWidth: '840px' }}>
          <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
            <p className="eyebrow">WaaS Architecture</p>
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '2rem' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      color: 'var(--fg)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <svg
                      className="ic"
                      style={{
                        width: '18px',
                        height: '18px',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '12px'
                      }}
                    >
                      <use href="#i-chevron-down" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--fg-dim)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Enterprise CTA ============ */}
      <section className="sec" style={{ paddingBlock: '4rem 6rem' }}>
        <div className="wrap">
          <div
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, var(--surface), var(--surface-2))',
              border: '1px solid var(--line)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div className="p-hero-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.25 }} aria-hidden="true" />
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
              Build on institutional <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>wallet infrastructure.</em>
            </h2>
            <p className="lede" style={{ maxWidth: '640px', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>
              Schedule an architecture deep dive with our engineering leads or test the API directly in your staging environment.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <Link className="btn btn-solid" href="/contact?topic=wallets">
                Schedule Architecture Call
                <svg className="ic" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </Link>
              <Link className="btn btn-line" href="/developers#07">
                Explore Wallet API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
