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
          title: 'Introduction',
          content: [
            <>We welcome you to the Privacy Policy of the Coincashy sp zoo (<a href="https://wheat-alpaca-977386.hostingersite.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>wheat-alpaca-977386.hostingersite.com</a>) website (hereinafter: the “Service”). The privacy policy we implement, as described in this document, is based on the following principles:</>,
            <ul key="intro-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> personal data is processed lawfully, fairly and in a transparent manner for you;</li>
              <li><strong>b.</strong> personal data is collected for specific, explicit and legitimate purposes and not further processed in a way incompatible with those purposes;</li>
              <li><strong>c.</strong> the personal data collected are adequate, relevant and limited to what is necessary for the purposes for which they are processed;</li>
              <li><strong>d.</strong> personal data shall be accurate and, where necessary, kept up to date; inaccurate data shall be deleted or rectified without delay;</li>
              <li><strong>e.</strong> personal data shall be kept in a form which permits identification of the data subject for no longer than is necessary for the purposes for which the data are processed;</li>
              <li><strong>f.</strong> personal data shall be processed in a manner that ensures appropriate security of your personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, by means of appropriate technical or organisational measures;</li>
            </ul>,
            <>Your personal data is processed in accordance with: <strong>(i.)</strong> Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation) (OJ EU. L. 2016, No. 119, p. 1 as amended), hereinafter referred to as “RODO”, <strong>(ii.)</strong> the Act of 10 May 2018 on the protection of personal data (i.e. Journal of Laws of 2019, item 1781), <strong>(iii.)</strong> the Act of 18 July 2002 on the provision of services by electronic means (Journal of Laws of 2020, item 344), <strong>(iv.)</strong> the Act of 16 July 2004 Telecommunications Law (Journal of Laws of 2022, item 1648).</>,
            'The Administrator of the Website is Coincashy sp. z o.o. with the registered office in ul. Korytnicka, nr 46, lok. 52, miejsc. Warsaw, Poland 04-10, entered into the Register of Entrepreneurs of the National Court Register, VII Economic Division of the National Court Register under KRS no. 0001135823, share capital PLN 5,000 paid in full (hereinafter referred to as the Administrator).',
            <>If you have any questions about the operation of the Service, please contact us via the form on the website <a href="https://wheat-alpaca-977386.hostingersite.com/contact" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://wheat-alpaca-977386.hostingersite.com/contact</a>.</>
          ],
        },
        {
          title: 'Purpose and legal basis for processing personal data',
          content: [
            '1. We process your data for the following purpose and on the following basis:',
            <ul key="purpose-ul-1" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> In order to provide services electronically through wheat-alpaca-977386.hostingersite.com website, in accordance with the Terms of Service available at: <a href="https://wheat-alpaca-977386.hostingersite.com/terms-conditions/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://wheat-alpaca-977386.hostingersite.com/terms-conditions/</a> including for the handling of complaints concerning the services provided, as well as for the provision of services within the Service and contacting you – Article 6(1)(b) RODO;</li>
              <li><strong>b.</strong> for web traffic analysis, direct marketing, including direct marketing of third parties, for the display of behavioural advertising on the basis of Article 6(1)(f) RODO.</li>
            </ul>,
            '2. If:',
            <ul key="purpose-ul-2" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> you contact us via email address, this is how you provide us with your personal data such as email, but also other data contained in the content of the correspondence, in particular your name. The provision of this data is voluntary, but necessary in order to make contact. Your data is processed in this case for the purpose of contacting you, and the basis for the processing is Article 6(1)(f) RODO, i.e. a legitimate interest. The legal basis for the processing after the end of contact is also the legitimate interest of archiving the correspondence for the purpose of ensuring that we can prove certain facts in the future (Article 6(1)(f) RODO).</li>
              <li><strong>b.</strong> you make a complaint, you provide personal data in the body of the complaint, which includes your name, postal address (if you indicate that you want a written reply), telephone number (optional), e-mail address. The provision of data is voluntary, but necessary to make a complaint. In connection with having an account, you can also contact us and ask questions. With regard to the above, we refer to Article 6(1)(b) of the DPA.</li>
            </ul>,
            '3. The data shall be stored for the period of existence of the legitimate interest pursued by the Administrator, but no longer than for the period of limitation of the Administrator’s claims against the data subject in respect of the Administrator’s business activities. The limitation period is determined by law, in particular the Civil Code (the basic limitation period for claims related to the conduct of business activities is three years). In this respect, we rely on the legitimate interest referred to in Article 6(1)(f) of the RODO, which is the archiving of information for the possible establishment, investigation or defence of claims.',
            '4. The content of your correspondence may be subject to archiving and we are not in a position to determine unequivocally when it will be deleted. You may request its deletion unless its archiving is justified by the interests of the Administrator and its overriding interests, e.g. defence against potential claims on your part.',
            '5. Your data and the data of other Users will not be transferred to third countries or international organisations. On the other hand, your data will be transferred to and processed by entities with which the Website cooperates in its operation, i.e. the hosting provider who stores the data on the server, the entity providing technical support services, subcontractors having access for the purpose necessary for the proper provision of services by the Website, as well as partners and companies related to the Administrator for whom the Administrator provides services.'
          ],
        },
        {
          title: 'Information on non-profiling of data',
          content: [
            '1. Your data will not be subject to profiling. Profiling is the automated processing of personal data which makes it possible to evaluate personal factors of an individual and, in particular, to analyse or predict aspects relating to work performance, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements of the data subject – insofar as it produces legal effects in relation to the data subject or similarly significantly affects the data subject.',
            '2. The website uses automatic data processing tools or the collection and analysis of certain information about users, but this has no legal consequences for users.'
          ],
        },
        {
          title: 'Rights with regard to the processing of personal data',
          content: [
            'In relation to the Administrator’s processing of your personal data, you have the right to:',
            <ul key="rights-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> access to their data and receive a copy of their data,</li>
              <li><strong>b.</strong> rectification (amendment) of your data,</li>
              <li><strong>c.</strong> deletion of data,</li>
              <li><strong>d.</strong> restriction of data processing,</li>
              <li><strong>e.</strong> to object to the processing of data,</li>
              <li><strong>f.</strong> data portability,</li>
              <li><strong>g.</strong> revoke your consent to the processing of personal data, if you have previously given such consent,</li>
              <li><strong>h.</strong> the right to lodge a complaint with a supervisory authority.</li>
            </ul>
          ],
        },
        {
          title: 'Use of cookies',
          content: [
            <>1. When you use our Service, we collect information about your visit and how you navigate our Service. We use cookies for this purpose. Cookies according to the Wikipedia website (<a href="https://pl.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://pl.wikipedia.org/wiki/HTTP_cookie</a>) are: “a small piece of text that a website sends to your browser and that the browser sends back the next time you visit the site. It is mainly used to maintain a session, e.g. by generating and sending back a temporary identifier after login. However, it can be used more widely by storing any data that can be encoded as a string. This prevents the user from having to enter the same information every time they return to that page or move from one page to another.”</>,
            '2. We use two basic types of cookies: session and persistent. Session cookies expire at the end of a session, the duration and exact expiry parameters of which are determined by the web browser you are using and our analytics systems. Persistent cookies are not deleted when you close your browser window, mainly so that information about your choices is not lost.',
            '3. In addition to the cookies referred to in paragraph 3 above, we also use so-called “essential” cookies that enable the display of the website and the use of the services available on the Website, which cannot be deactivated.',
            '4. Cookies enable us to:',
            <ul key="cookies-ul-1" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> to optimise the use of the Website, including in particular to improve the performance of the Website and enhance your experience on the Website;</li>
              <li><strong>b.</strong> to recognise your device and display the Website accordingly, tailored to your individual needs;</li>
              <li><strong>c.</strong> to create statistics, improve the performance and efficiency of the Website;</li>
              <li><strong>d.</strong> Some of the cookies placed on your browser are for marketing purposes. These cookies allow us to obtain information about what content you may be interested in and to display advertisements based on these interests. Adverts may therefore be displayed on the Website based on your behaviour on other websites. The behavioural marketing carried out on the Website does not involve the collection of personal data such as your name, surname, home address or other personally identifiable information.</li>
            </ul>,
            '5. Cookies are processed on the basis of your consent, which you have given via your browser settings. You can deactivate the acceptance of cookies in your browser at any time; however, the effect of such a change may be that some features of the Website may be impaired. You can delete stored cookies by using the appropriate functions of your browser. You can read about cookies and their use in web browsers on the websites of their providers:',
            <ul key="cookies-ul-2" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>– Chrome – <a href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://support.google.com/chrome/answer/95647?hl=pl</a>;</li>
              <li>– Firefox – <a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop</a>;</li>
              <li>– Opera – <a href="https://help.opera.com/pl/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://help.opera.com/pl/latest/web-preferences/#cookies</a>;</li>
              <li>– Safari – <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://support.apple.com/pl-pl/guide/safari/sfri11471/mac</a>;</li>
            </ul>,
            'If you do not change your browser’s “cookie management” settings, cookies will be placed automatically on your terminal equipment. If you do not change the settings of your browser resulting in the deactivation of cookies, this means that you consent to the use of cookies in accordance with the principles described in this Policy.',
            '6. Installing or accessing cookies does not alter your device or the software installed on that device.',
            '7. Third-party cookies, i.e.:',
            <ul key="cookies-ul-3" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>a.</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</li>
              <li>– Google Analytics – automatically collects information about the use of the website and provides analytical data on website visit statistics. Google Analytics does not collect data that identifies you personally. Detailed information on the scope and principles of data collection in connection with this service can be found at the following link: <a href="https://www.google.com/intl/pl/policies/privacy/partners" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://www.google.com/intl/pl/policies/privacy/partners</a>; At this link you will find a Google Analytics blocking tool: <a href="https://tools.google.com/dlpage/gaoptout?hl=pl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://tools.google.com/dlpage/gaoptout?hl=pl</a>.</li>
              <li>– Google Ads – Within the tool, when an ad is clicked, cookies are added to track sales and other conversions from the ad, it is a tool that targets adverts to specific target groups defined on the basis of various criteria such as age, gender, interests, profession, job, activities previously undertaken on Our site;</li>
              <li>– Google Adsense – enables publishers to monetise online content. AdSense matches ads to your site based on its content and the users who visit it. Ads are created and paid for by advertisers promoting their products. The amount of earnings can vary because advertisers pay different prices for different types of advertising.</li>
              <li>– You can find detailed information on the use of cookies by the Google Adsense tool at this link: <a href="https://support.google.com/adsense/answer/7549925?hl=pl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://support.google.com/adsense/answer/7549925?hl=pl</a></li>
            </ul>,
            <>If you opt out of personalisation in the Ads Settings, Google will stop showing you personalised ads. You can find information about opting out of ad personalisation at this link: <a href="http://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>http://www.google.com/settings/ads</a></>,
            <>For more information on Google’s use of data from sites and applications that use Google services, please see this link: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hi)' }}>https://policies.google.com/technologies/partner-sites</a></>
          ],
        },
      ]}
    />
  );
}
