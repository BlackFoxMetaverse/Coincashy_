import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ConvertCryptoView from '@/features/convert-crypto/components/ConvertCryptoView';

export const metadata: Metadata = {
  title: 'Convert Crypto – 0% Slippage Instant Token Swaps | Coincashy',
  description: 'Convert Bitcoin, Ethereum, Solana, USDT, and USDC with guaranteed zero price slippage and instant settlement. Private RFQ routing, zero gas fee surprises, and institutional liquidity.',
  keywords: ['convert crypto', 'crypto swap', '0 slippage swap', 'btc to usdt', 'eth to usdc', 'instant crypto exchange', 'coincashy convert'],
  openGraph: {
    title: 'Convert Crypto – 0% Slippage Instant Swaps | Coincashy',
    description: 'Guaranteed quotes, zero slippage, and instant atomic settlement between 100+ digital assets.',
  }
};

export default function ConvertCryptoPage() {
  return (
    <>
      <ConvertCryptoView />
      <Footer />
    </>
  );
}
