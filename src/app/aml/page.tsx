import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AML Policy – Coincashy',
  description: 'Learn about Coincashy Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) procedures and compliance policies.',
};

export default function AMLPage() {
  return (
    <LegalPage
      title="AML Policy"
      subtitle="Internal procedure for counteracting money laundering and terrorist financing."
      effectiveDate="1 October 2025"
      sections={[
        {
          title: 'General Provisions & Compliance Scope',
          content: [
            <>COINCASHY Sp. z o.o. operating a portal in the <a href="https://wheat-alpaca-977386.hostingersite.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>wheat-alpaca-977386.hostingersite.com</a> domain (hereinafter: the Website), in accordance with the relevant laws of Counteracting Money Laundering and Terrorist Financing (hereinafter: the Act), is an obligated entity. Therefore, the company has implemented an internal procedure for counteracting money laundering and terrorist financing (hereinafter referred to as the “AML Procedure”) aimed at preventing the occurrence of money laundering and terrorist financing.</>,
            'Questions regarding the details of the implemented procedure and related doubts should be sent to the company’s address: ul. Korytnicka, nr 46, lok. 52, miejsc. Warsaw, Poland 04-109.',
            'The implemented AML Procedure aims to ensure compliance of the Website operated by the company with current legal requirements and regulations. The main goal is to eliminate customers who use the Website to violate applicable law. The company’s management board has appointed a person holding a managerial position in the company as the person responsible for ensuring compliance of the Website’s operation with the implemented AML Procedure and its employees and other persons performing activities on its behalf.',
          ],
        },
        {
          title: 'Risk Assessment & Financial Security Measures',
          content: [
            'One of the main goals of implementing the AML Procedure is to establish an approach to assessing and managing the risk of money laundering and terrorist financing on the Website. Financial security measures are applied to each client appropriate to the risk of money laundering and terrorist financing. The website maintains the highest level of control to ensure proper identification of the ultimate owner of funds and uses enhanced financial security measures in cases of increased risk of money laundering and terrorist financing.',
            'The service has developed risk-based procedures and monitoring systems to filter customer and employee activities. Each case of risky behavior is intercepted, marked and reported to the appropriate units.',
          ],
        },
        {
          title: 'Customer Obligations & Website Rights',
          content: [
            'Transactions of the Website’s clients to whom it cannot apply the financial security measures are not processed by the Website.',
            'The Website reserves the right to suspend the User’s account and freeze his or her funds until an internal examination is carried out and the risk of any abuse or money laundering and terrorist financing is excluded. It also reserves the right to report any suspicious activity to a third party involved in the transaction process or to legal authorities without the customer’s knowledge. It also reserves the right to terminate the contract in the event of suspicion of illegal activities.',
            'Each customer of the Website is obliged to consent to the provision of services subject to the AML Procedure.',
          ],
        },
        {
          title: 'Reporting, Verification & Data Retention',
          content: [
            'The AML procedure obliges a designated employee of the Website to submit notifications about the possibility of committing a crime to the competent law enforcement authorities and to report suspicious transactions to the relevant Inspector General of Financial Information. In such cases, all information stored by the Website is made available, such as: bank account numbers, transaction numbers, IP addresses, transaction history and any other relevant information.',
            'As part of the provision of services, the Website reserves the right to request at any time additional information from the Website User in order to verify his/her identity and additional information obtained from external suppliers in order to comply with the provisions on counteracting money laundering and terrorist financing.',
            'The website is obliged to store data for a period of 5 years.',
            'Each Service employee responsible for performing duties related to counteracting money laundering and terrorism financing is provided with training regarding these duties.',
          ],
        },
        {
          title: 'Legal Basis',
          content: [
            'The legal basis for the implemented AML Procedure includes:',
            <ul key="legal-basis-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>– Polish Act of March 1, 2018 on counteracting money laundering and terrorism financing.</li>
              <li>– Regulation (EU) 2015/847 of the European Parliament and of the Council of 20 May 2015 on information accompanying transfers of funds and repealing Regulation (EC) No 1781/2006.</li>
            </ul>,
          ],
        },
      ]}
    />
  );
}
