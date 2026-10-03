// @ts-nocheck
import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service – Coincashy',
  description: 'Read the Coincashy Terms of Service governing your use of our crypto, stablecoin, and fiat financial services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="Please read these terms carefully before using Coincashy's products and services."
      effectiveDate="1 October 2025"
      sections={[
        {
          title: 'Agreement to Terms',
          content: [
            'These Terms of Service ("Terms") form a legally binding agreement between you and Coincashy Sp. z o.o. ("Coincashy", "we", "us", or "our"), a company incorporated under the laws of Poland, with its registered office at Warsaw, Poland.',
            'By accessing or using any Coincashy product, platform, API, or service (collectively, the "Services"), you agree to be bound by these Terms. If you do not agree, you must not use our Services.',
            'We may update these Terms from time to time. Continued use of our Services after any changes constitutes your acceptance of the revised Terms. We will notify you of material changes via email or in-platform notice.',
          ],
        },
        {
          title: 'Eligibility',
          content: [
            'You must be at least 18 years of age to use our Services. By agreeing to these Terms, you confirm that you are of legal age in your jurisdiction to enter into a binding agreement.',
            'Our Services are not available to persons who are subject to sanctions administered by the EU, OFAC, HMRC, or other relevant authorities. You confirm that you are not on any such sanctions list and that your use of the Services does not violate any applicable laws.',
            'Coincashy reserves the right to refuse service, close accounts, or restrict access to anyone at its sole discretion, including based on jurisdiction or regulatory requirements.',
          ],
        },
        {
          title: 'Account Registration & Security',
          content: [
            'To access certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information and to update it promptly if it changes.',
            'You are solely responsible for maintaining the security of your account credentials. Coincashy will never ask for your password. You must notify us immediately at support@coincashy.io if you suspect any unauthorised access to your account.',
            'You are responsible for all activity that occurs under your account. Coincashy is not liable for any loss or damage arising from your failure to comply with this security obligation.',
          ],
        },
        {
          title: 'Know Your Customer (KYC) & AML',
          content: [
            'As a regulated financial services provider, Coincashy is required to verify the identity of its users ("Know Your Customer" or KYC) and to conduct Anti-Money Laundering (AML) checks in accordance with applicable law.',
            'You agree to provide any documentation or information we request for identity verification. Failure to complete verification may result in suspension or termination of your account.',
            'Coincashy may file Suspicious Activity Reports (SARs) with relevant authorities where required by law. We are prohibited by law from notifying you that such a report has been made.',
          ],
        },
        {
          title: 'Permitted Use',
          content: [
            'You may only use the Services for lawful purposes and in accordance with these Terms. You agree not to use the Services to engage in money laundering, terrorist financing, fraud, market manipulation, or any other illegal activity.',
            'You must not reverse engineer, scrape, decompile, or attempt to extract source code from any of our software, APIs, or systems.',
            'You must not use the Services to transmit unsolicited communications, malware, or otherwise interfere with the operation of our platform or the experience of other users.',
          ],
        },
        {
          title: 'Crypto-Asset Risks',
          content: [
            'Crypto-assets are highly volatile. The value of any crypto-asset can decrease significantly, and you may lose all of the money you invest. Past performance is not indicative of future results.',
            'Crypto-asset transactions are irreversible. Once a transaction is confirmed on the blockchain, it cannot be undone. You are solely responsible for verifying recipient addresses and transaction details before confirming.',
            'Coincashy is not responsible for blockchain network delays, forks, or failures that may affect your transactions. We do not provide investment advice and nothing on our platform constitutes a recommendation to buy or sell any asset.',
          ],
        },
        {
          title: 'Fees',
          content: [
            'Coincashy charges fees for certain transactions and services. Current fees are displayed within the platform before you confirm any transaction. Fees may vary depending on the product, transaction type, volume, and jurisdiction.',
            'We reserve the right to change our fee schedule at any time. We will provide reasonable notice of any fee changes through our website or by email.',
            'Third-party services (including blockchain network fees, banking fees, or partner card fees) may apply in addition to Coincashy fees. These are outside our control and may change without notice.',
          ],
        },
        {
          title: 'Intellectual Property',
          content: [
            'All content, software, trademarks, logos, and other intellectual property on the Coincashy platform are owned by or licensed to Coincashy and protected under applicable intellectual property laws.',
            'You are granted a limited, non-exclusive, non-transferable licence to use the Services for personal or business purposes as permitted under these Terms. You may not copy, modify, distribute, or create derivative works without our express written consent.',
          ],
        },
        {
          title: 'Limitation of Liability',
          content: [
            'To the maximum extent permitted by applicable law, Coincashy and its directors, officers, employees, partners, and licensors shall not be liable for any indirect, incidental, consequential, exemplary, or punitive damages arising from your use of, or inability to use, the Services.',
            'Our total aggregate liability for any claim arising from or related to these Terms or the Services shall not exceed the greater of (a) the fees you paid to Coincashy in the twelve (12) months prior to the event giving rise to the claim, or (b) EUR 100.',
            'Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities, so some of the above limitations may not apply to you.',
          ],
        },
        {
          title: 'Termination',
          content: [
            'You may close your Coincashy account at any time by contacting support@coincashy.io, provided there are no outstanding transactions, balances, or obligations on your account.',
            'Coincashy may suspend or terminate your account and access to the Services at any time, with or without notice, if we believe you have violated these Terms or if required to do so by applicable law or regulatory authority.',
            'Upon termination, your right to use the Services ceases immediately. Sections of these Terms that by their nature should survive termination (including intellectual property, limitation of liability, and governing law) shall do so.',
          ],
        },
        {
          title: 'Governing Law & Dispute Resolution',
          content: [
            'These Terms are governed by and construed in accordance with the laws of Poland, without regard to conflict of law principles.',
            'Any dispute arising from or relating to these Terms or your use of the Services shall first be subject to an informal resolution process. You must contact us at legal@coincashy.io and give us 30 days to resolve the issue before pursuing any formal proceeding.',
            'If a dispute cannot be resolved informally, it shall be resolved by arbitration in Warsaw, Poland, under the rules of the Court of Arbitration at the Polish Chamber of Commerce, unless applicable consumer protection laws in your jurisdiction require otherwise.',
          ],
        },
        {
          title: 'Contact',
          content: 'If you have questions about these Terms, please contact us at legal@coincashy.io or write to Coincashy Sp. z o.o., Warsaw, Poland. We aim to respond to all legal enquiries within 10 business days.',
        },
      ]}
    />
  );
}
