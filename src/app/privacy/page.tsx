// @ts-nocheck
import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – Coincashy',
  description: 'Learn how Coincashy collects, uses, and protects your personal data in accordance with GDPR and applicable privacy law.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How Coincashy collects, uses, and protects your personal information."
      effectiveDate="1 October 2025"
      sections={[
        {
          title: 'Who We Are',
          content: [
            'Coincashy Sp. z o.o. ("Coincashy", "we", "us", or "our") is the data controller responsible for your personal data. We are incorporated in Poland and operate globally, providing crypto, stablecoin, and fiat payment infrastructure.',
            'We process personal data in accordance with the EU General Data Protection Regulation (GDPR), the UK GDPR, and other applicable data protection laws.',
            'For privacy enquiries, contact our Data Protection Officer at dpo@coincashy.io.',
          ],
        },
        {
          title: 'Personal Data We Collect',
          content: [
            'Identity data: full name, date of birth, nationality, government-issued ID documents, selfie or video verification data collected during KYC.',
            'Contact data: email address, phone number, postal address.',
            'Financial data: bank account details, transaction history, wallet addresses, source of funds information.',
            'Technical data: IP address, browser type, device identifiers, cookies, and usage data when you interact with our platform.',
            'Communications data: messages you send to our support team and records of consent you have given.',
          ],
        },
        {
          title: 'How We Use Your Data',
          content: [
            'To provide and operate the Services: processing transactions, maintaining your account, and delivering the products you have requested.',
            'Legal obligations: verifying your identity (KYC), conducting AML checks, filing regulatory reports, and complying with requests from competent authorities.',
            'Legitimate interests: preventing fraud and abuse, improving our platform, ensuring network security, and analysing usage patterns to enhance the user experience.',
            'With your consent: sending you marketing communications and updates about new products or features. You may withdraw consent at any time.',
          ],
        },
        {
          title: 'Legal Basis for Processing',
          content: [
            'Performance of a contract (Article 6(1)(b) GDPR): processing necessary to provide you with the Services.',
            'Legal obligation (Article 6(1)(c) GDPR): processing required to comply with AML, KYC, and financial regulations.',
            'Legitimate interests (Article 6(1)(f) GDPR): fraud prevention, security monitoring, and service improvement, where these interests are not overridden by your rights.',
            'Consent (Article 6(1)(a) GDPR): where you have given clear consent, such as for marketing emails.',
          ],
        },
        {
          title: 'Sharing Your Data',
          content: [
            'We share your personal data with carefully selected third parties who help us deliver the Services, including identity verification providers (e.g. Onfido, Sumsub), banking and payment partners, cloud infrastructure providers (e.g. AWS, Google Cloud), and fraud prevention services.',
            'We may disclose your data to law enforcement, regulators, or government bodies where required by law or where necessary to prevent crime.',
            'We do not sell your personal data to third parties for their own marketing purposes.',
            'Any third party with whom we share data is required to process it in accordance with GDPR and to implement appropriate security measures.',
          ],
        },
        {
          title: 'International Data Transfers',
          content: [
            'Some of our partners and service providers are based outside the European Economic Area (EEA). Where we transfer your data internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.',
            'You can obtain a copy of the relevant safeguards by contacting dpo@coincashy.io.',
          ],
        },
        {
          title: 'Data Retention',
          content: [
            'We retain your personal data for as long as your account is active and for a further period of at least five (5) years after account closure, as required by AML and financial regulations.',
            'KYC documents may be retained for up to ten (10) years where required by applicable law.',
            'Data processed solely on the basis of consent will be deleted upon withdrawal of consent, unless another legal basis applies.',
          ],
        },
        {
          title: 'Your Rights',
          content: [
            'Under GDPR, you have the following rights: the right to access your personal data, the right to rectify inaccurate data, the right to erasure ("right to be forgotten") in certain circumstances, the right to restrict processing, the right to data portability, and the right to object to processing based on legitimate interests.',
            'You also have the right to lodge a complaint with your local supervisory authority. In Poland, this is the Urząd Ochrony Danych Osobowych (UODO). In the UK, this is the Information Commissioner\'s Office (ICO).',
            'To exercise any of your rights, please contact dpo@coincashy.io. We will respond within 30 days.',
          ],
        },
        {
          title: 'Cookies',
          content: 'We use cookies and similar tracking technologies on our website and platform. For detailed information about the cookies we use and how to manage them, please see our Cookie Policy at coincashy.io/cookies.',
        },
        {
          title: 'Security',
          content: [
            'We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include encryption in transit (TLS) and at rest, access controls, multi-factor authentication for internal systems, and regular security audits.',
            'Despite our efforts, no method of transmission over the internet is 100% secure. You use our Services at your own risk and should take appropriate steps to protect your own devices and credentials.',
          ],
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by email or by posting a notice on our platform. The "Effective date" at the top of this page indicates when the current version came into force.',
        },
        {
          title: 'Contact',
          content: 'For privacy-related enquiries, contact our Data Protection Officer at dpo@coincashy.io or write to Coincashy Sp. z o.o., Warsaw, Poland.',
        },
      ]}
    />
  );
}
