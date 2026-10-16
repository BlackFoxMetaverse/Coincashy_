import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import BuyCryptoView from '@/features/buy-crypto/components/BuyCryptoView';

export const metadata: Metadata = {
  title: 'Buy Crypto with Card, Apple Pay & SEPA | Coincashy',
  description: 'Buy Bitcoin, Ethereum, Solana, and stablecoins instantly with credit/debit card, Apple Pay, Google Pay, or SEPA Instant. Guaranteed quotes, low fees, and direct wallet delivery.',
  keywords: ['buy crypto', 'buy bitcoin with card', 'buy crypto apple pay', 'sepa instant crypto', 'crypto on ramp', 'coincashy buy'],
  openGraph: {
    title: 'Buy Crypto with Card, Apple Pay & SEPA | Coincashy',
    description: 'Instant crypto purchases with 0% hidden markups. Delivered directly to your personal wallet.',
  }
};

export default function BuyCryptoPage() {
  return (
    <>
      <BuyCryptoView />
      <Footer />
    </>
  );
}
