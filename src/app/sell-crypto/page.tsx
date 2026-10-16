import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import SellCryptoView from '@/features/sell-crypto/components/SellCryptoView';

export const metadata: Metadata = {
  title: 'Sell Crypto to Bank Account – SEPA Instant & Faster Payments | Coincashy',
  description: 'Sell Bitcoin, Ethereum, and stablecoins directly to your bank account. Sub-10 second SEPA Instant EUR payouts, UK Faster Payments GBP, and global wires with guaranteed zero slippage quotes.',
  keywords: ['sell crypto', 'cash out bitcoin', 'crypto off ramp', 'sepa instant sell crypto', 'crypto to bank account', 'coincashy sell'],
  openGraph: {
    title: 'Sell Crypto to Bank Account – SEPA Instant | Coincashy',
    description: 'Convert crypto to EUR, GBP, or USD with guaranteed quotes and sub-10 second bank arrival.',
  }
};

export default function SellCryptoPage() {
  return (
    <>
      <SellCryptoView />
      <Footer />
    </>
  );
}
