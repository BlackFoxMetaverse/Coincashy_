import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import WalletsView from '@/features/wallets/components/WalletsView';

export const metadata: Metadata = {
  title: 'Wallet as a Service – Enterprise MPC & Smart Account API | Coincashy',
  description: 'Deploy institutional-grade MPC-CMP wallets, ERC-4337 account abstraction, and automated policy engines into your app or exchange with Coincashy Wallet as a Service.',
  keywords: ['wallet as a service', 'waas', 'mpc wallet api', 'erc-4337 smart accounts', 'institutional crypto custody', 'embedded wallets', 'coincashy wallets'],
  openGraph: {
    title: 'Wallet as a Service – Enterprise MPC & Smart Account API | Coincashy',
    description: 'Programmable, secure, and compliant wallet infrastructure for high-velocity fintechs and Web3 platforms.',
  }
};

export default function WalletsPage() {
  return (
    <>
      <WalletsView />
      <Footer />
    </>
  );
}
