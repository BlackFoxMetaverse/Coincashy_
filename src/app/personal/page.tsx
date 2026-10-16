import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import PersonalView from '@/features/landing/components/PersonalView';

export const metadata: Metadata = {
  title: 'Personal Crypto – Buy, Sell, Convert & Spend Crypto | Coincashy',
  description: 'A simple, secure way to buy and sell crypto, fund your digital wallet, and spend globally with a personal crypto card.',
};

export default function PersonalPage() {
  return (
    <>
      <PersonalView standalone={true} />
      <Footer />
    </>
  );
}
