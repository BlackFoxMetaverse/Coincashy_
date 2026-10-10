import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions – Coincashy',
  description: 'Read the official Terms and Conditions governing the use of the Coincashy website and services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      subtitle="Technical terms and conditions governing the use of the Coincashy website and services."
      effectiveDate="1 October 2025"
      sections={[
        {
          title: 'General Provisions',
          content: [
            <>1. These Terms and Conditions (hereinafter: “Terms and Conditions”) set out the technical terms and conditions for the use of the website managed by the Service Provider (hereinafter: “Website”). The Terms and Conditions are made available to the Service Recipient free of charge, via the website <a href="https://wheat-alpaca-977386.hostingersite.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://wheat-alpaca-977386.hostingersite.com</a>.</>,
            <>2. The Service Provider is Coincashy sp. z o.o. with the registered office in ul. Korytnicka, nr 46, lok. 52, miejsc. Warsaw, Poland 04-10, entered into the Register of Entrepreneurs of the National Court Register, VII Economic Division of the National Court Register under KRS no. 0001135823, share capital PLN 5,000 paid in full (hereinafter referred to as “Service Provider”), website address: <a href="https://wheat-alpaca-977386.hostingersite.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://wheat-alpaca-977386.hostingersite.com/</a>, contact form: <a href="https://wheat-alpaca-977386.hostingersite.com/contact" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://wheat-alpaca-977386.hostingersite.com/contact</a>.</>,
            '3. The provision of services by electronic means, including the use of the Website, shall take place on the basis of the Regulations. The Regulations are the regulations referred to in Article 8 of the Act of 18 July 2002 on the provision of services by electronic means (Dz.U.2020.344 t.j. of 2020.03.03) (hereinafter: “Services”).',
            '4. The Customer may be a natural person, a legal person or an organisational unit without legal personality who uses the Services provided by the Service Provider (hereinafter: “Customer”).',
            '5. Any content made available on the Service is for informational or informational and educational purposes only. Any content made available on the Service does not constitute investment advice or investment recommendations within the meaning of Regulation (EU) No 596/2014 of the European Parliament and of the Council of 16 April 2014 on market abuse (Market Abuse Regulation) and repealing Directive 2003/6/EC of the European Parliament and of the Council and Commission Directives 2003/124/EC, 2003/125/EC and 2004/72/EC.',
            '6. The Service Provider reserves the right to display advertisements and sponsored content on the Website.',
            '7. The Service Provider is not responsible for the content of the advertisements posted on the Website, subject to mandatory provisions.',
          ],
        },
        {
          title: 'Technical Requirements & Website Access',
          content: [
            '1. The Website may be accessible to the Service Recipients in their web browser – at the address of the Website and on all subpages of this Website, as well as via third-party websites linking to the addresses or subpages of the Website.',
            '2. The services are provided to customers who have access to the Internet and a web browser.',
          ],
        },
        {
          title: 'Services Provided & Rules of Use',
          content: [
            '1. As part of the provision of the Services, the Service Provider enables the Service Recipients:',
            <ul key="services-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> to view the content of the Website free of charge,</li>
              <li><strong>b.</strong> access to materials made available by the Service Provider on the Website (hereinafter referred to as “Content”). The Content may consist of text materials, photographs, graphics – according to the Service Provider’s offer presented on the pages of the Site dedicated to the Content,</li>
              <li><strong>c.</strong> the sharing of Content or other materials from the Service Provider by sending them to the Client’s e-mail address (“Content Sharing”). The Content Sharing relates primarily to responses to requests from Service Recipients.</li>
            </ul>,
            '2. The use of the Service is voluntary and free of charge (except for the fee resulting from Internet access), however, it requires prior reading and acceptance of the Terms and Conditions. By using the Service, the User declares that he/she has read the Rules and Regulations and accepts their content.',
            '3. The conclusion of the Contract for Provision of Services between the Service Provider and the User occurs when the User enters the relevant URL of the website in the Internet browser, while the termination of the Contract for Provision of Services occurs when the User closes the website in the browser.',
            '4. The Service Provider will endeavour to make the Website available 24 hours a day, however, the Service Provider does not guarantee uninterrupted access to the Website.',
            '5. The Service, including in particular all content, source code, logos are protected by copyright and any copying or use contrary to these Terms and Conditions is prohibited.',
            '6. The Service Provider shall not be liable for any interruption in the provision of electronic services that occurs, where this is due to force majeure or is caused by the actions of third parties for which it is not responsible.',
            '7. The Service Provider is not responsible for content originating from and distributed on the Website by other parties, subject to mandatory regulations.',
          ],
        },
        {
          title: 'Complaints Procedure',
          content: [
            '1. The Service Recipient has the right to lodge a complaint with the Service Provider regarding the operation of the Service provided.',
            <>2. The Service Provider accepts complaints by e-mail via the contact form: <a href="https://wheat-alpaca-977386.hostingersite.com/contact" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://wheat-alpaca-977386.hostingersite.com/contact</a>.</>,
            '3. When submitting a complaint, the User shall provide his/her name and surname, as complete a description as possible of the subject of the complaint, the demand related to the handling of the complaint and the manner in which the User is to provide a response to the complaint. If the User requests that the complaint be sent in writing, the User is obliged to provide the address to which the complaint should be sent in writing.',
            '4. The Service Provider is obliged to respond to the Client’s complaint within 14 days of receipt. The Service Provider shall send the response to the complaint on paper to the address provided by the User or electronically, depending on the form of the complaint or the User’s choice.',
            <>5. The user is entitled under Regulation 524/2013 of the European Parliament and of the Council of 21 May 2013 on online dispute resolution for consumer disputes and amending Regulation EC No 2006/2004 and Directive 2009/22/EC (Regulation on ODR in consumer disputes) to use the online dispute resolution platform (ODR platform). The ODR platform can be accessed at: <a href="http://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&lng=PL" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>http://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&lng=PL</a>.</>,
          ],
        },
        {
          title: 'Limitation of Liability',
          content: [
            '1. Under no circumstances shall the Service Provider be liable for:',
            <ul key="liability-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> any incidental, consequential or indirect damages (in particular, damages in the form of lost profits, business interruption, loss of programmes or information, etc.) resulting from the use or inability to use the site or any information or transactions made available on or downloaded from the site, even if the Service Provider or its authorised representatives have been informed of the possibility of such damages,</li>
              <li><strong>b.</strong> any claims relating to errors, omissions or other irregularities within the Service and/or materials or information downloaded through the Service.</li>
            </ul>,
          ],
        },
        {
          title: 'Final Provisions',
          content: [
            '1. The Service Provider processes the User’s personal data in accordance with the processing rules set out in the Privacy Policy.',
            '2. The Service Provider reserves the right to amend the Terms and Conditions. In such case, the Service Provider will inform the Users of the validity of the amended version of the Terms and Conditions via the Website.',
            '3. In all matters not covered by these Terms and Conditions, the provisions of generally applicable Polish law shall apply.',
            '4. Unless otherwise stipulated by mandatory provisions of law, the entire agreement for the provision of services by electronic means under the terms and conditions specified in these Terms and Conditions shall be governed by Polish law. The Service Provider may transfer its rights and obligations under this Agreement to any person at any time without notifying the Service Recipient.',
          ],
        },
        {
          title: 'Third-Party Access and Representation',
          content: [
            '1. By creating an account, you confirm that you are acting on your own behalf or, where applicable, on behalf of an entity you are duly authorised to represent. You confirm that no third party has opened the account on your behalf and that you will not permit any unauthorised third party to access or operate your account.',
          ],
        },
      ]}
    />
  );
}
