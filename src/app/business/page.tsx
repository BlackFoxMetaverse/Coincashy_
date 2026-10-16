import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import BusinessView from '@/features/landing/components/BusinessView';

export const metadata: Metadata = {
  title: 'Business Infrastructure – Crypto Rails, OTC, vIBANs & Settlement | Coincashy',
  description: 'Enterprise digital asset infrastructure. Accept crypto payments, access OTC liquidity, issue dedicated vIBANs, and settle stablecoins globally.',
};

export default function BusinessPage() {
  return (
    <>
      <BusinessView standalone={true} />
      <Footer />
    </>
  );
}
