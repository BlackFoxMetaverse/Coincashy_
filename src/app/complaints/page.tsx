import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complaints & Disclosures – Coincashy',
  description: 'How to raise a complaint with Coincashy and our regulatory disclosures including financial promotion, risk warnings, and firm details.',
};

export default function ComplaintsPage() {
  return (
    <LegalPage
      title="Complaints & Disclosures"
      subtitle="How to raise a complaint, our regulatory disclosures, and important risk information."
      effectiveDate="1 October 2025"
      sections={[
        {
          title: 'How to Make a Complaint',
          content: [
            'We are committed to resolving complaints fairly, consistently, and promptly. If you are unhappy with any aspect of our service, we want to hear from you.',
            'Step 1 — Contact Us: Email us at complaints@coincashy.io with your full name, account email, a clear description of your complaint, and any supporting evidence. Alternatively, you can write to us at Coincashy Sp. z o.o., Warsaw, Poland.',
            'Step 2 — Acknowledgement: We will acknowledge receipt of your complaint within 5 business days and provide you with a reference number.',
            'Step 3 — Investigation & Response: We will investigate your complaint thoroughly and aim to provide a final written response within 15 business days. In complex cases, we may take up to 35 business days and will keep you updated on progress.',
          ],
        },
        {
          title: 'Escalation',
          content: [
            'If you are not satisfied with our final response, or if we have not resolved your complaint within the timeframes above, you may escalate to the relevant authority depending on your jurisdiction.',
            'UK customers may refer their complaint to the Financial Ombudsman Service (FOS) at financial-ombudsman.org.uk or by calling 0800 023 4567. The FOS provides a free, independent service for resolving disputes.',
            'Polish customers or those in other EU jurisdictions may refer their complaint to the relevant national financial supervisory authority. For Poland, this is the Komisja Nadzoru Finansowego (KNF).',
            'EU customers may also use the European Commission\'s Online Dispute Resolution (ODR) platform at ec.europa.eu/consumers/odr.',
          ],
        },
        {
          title: 'Regulatory Status & Authorisation',
          content: [
            'Coincashy Sp. z o.o. is incorporated in Poland. We operate as a Virtual Asset Service Provider (VASP) and are registered with the relevant Polish regulatory authority for the provision of crypto-asset exchange and custody services.',
            'Our activities in the United Kingdom are conducted on the basis that our communications are directed only at, and may be acted upon only by, persons who fall within an applicable exemption under the UK Financial Services and Markets Act 2000 (Financial Promotion) Order 2005.',
            'Coincashy is not authorised or regulated by the UK Financial Conduct Authority (FCA) for the purposes of the Financial Services and Markets Act 2000. We are not covered by the Financial Services Compensation Scheme (FSCS).',
          ],
        },
        {
          title: 'UK Financial Promotion Disclosure',
          content: [
            'The information and services on this platform are directed only at persons who fall within one or more of the following categories of exemption under the UK Financial Promotion Order 2005:',
            '(a) Investment professionals (Article 19): persons with professional experience in matters relating to investments.',
            '(b) High net worth companies, unincorporated associations, etc. (Article 49): companies with net assets of at least £500,000, unincorporated associations or partnerships with net assets of at least £500,000, or trustees of high value trusts.',
            '(c) Certified sophisticated investors (Article 50A): persons who have been certified by an authorised person as having appropriate knowledge and experience to understand the risks associated with the relevant type of investment.',
            '(d) Self-certified sophisticated investors (Article 50): persons who meet specific criteria and have signed a self-certification statement.',
            '(e) Communication to overseas recipients (Article 12): where the communication originates outside the UK.',
            'If you do not fall within one of the above categories, this service is not directed at you and you should not use it.',
          ],
        },
        {
          title: 'Risk Warnings',
          content: [
            'Crypto-assets are highly speculative and volatile. The value of your investment can go down as well as up, and you may lose the entire amount you invest. You should only invest money that you can afford to lose.',
            'Crypto-asset transactions on blockchain networks are irreversible. Coincashy cannot reverse a transaction once confirmed on-chain. Always verify all transaction details carefully before confirming.',
            'Crypto-assets are not covered by the Financial Services Compensation Scheme (FSCS) or any equivalent investor protection scheme. If Coincashy were to become insolvent, you may not recover funds held with us.',
            'Regulatory frameworks for crypto-assets are evolving. Changes in law or regulation may adversely affect the availability, use, or value of crypto-assets.',
            'Tax treatment of crypto-assets varies by jurisdiction and is subject to change. You are responsible for your own tax obligations. We recommend seeking independent tax advice.',
          ],
        },
        {
          title: 'Anti-Money Laundering Disclosures',
          content: [
            'Coincashy is committed to combating money laundering, terrorist financing, and financial crime. We operate an AML programme that includes customer due diligence (CDD), enhanced due diligence (EDD) for higher-risk customers, ongoing transaction monitoring, and suspicious activity reporting.',
            'We are required by law to file Suspicious Activity Reports (SARs) with the relevant financial intelligence unit where we suspect money laundering or terrorist financing. We are prohibited by law from disclosing the existence or content of any SAR to the subject of the report ("tipping off").',
            'All customers are subject to screening against international sanctions lists, including those maintained by the EU, OFAC, UN, and HMRC. We will block transactions and may report activity where sanctions matches are identified.',
          ],
        },
        {
          title: 'Conflicts of Interest',
          content: [
            'Coincashy has a Conflicts of Interest Policy designed to identify and manage conflicts that may arise in the course of providing services to clients.',
            'Where we act as principal in a transaction (buying or selling crypto-assets for our own account), a conflict may exist between our interests and yours. We manage this through price transparency, best execution policies, and internal controls.',
            'A copy of our Conflicts of Interest Policy is available on request by emailing legal@coincashy.io.',
          ],
        },
        {
          title: 'Data Protection Officer',
          content: 'Coincashy has appointed a Data Protection Officer (DPO) to oversee compliance with data protection law. You can contact the DPO at dpo@coincashy.io.',
        },
        {
          title: 'Contact for Legal & Regulatory Matters',
          content: 'For regulatory enquiries or legal notices, please contact legal@coincashy.io. For complaints, contact complaints@coincashy.io. For data protection matters, contact dpo@coincashy.io.',
        },
      ]}
    />
  );
}
