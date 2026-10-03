// @ts-nocheck
import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy – Coincashy',
  description: 'Learn about the cookies and tracking technologies Coincashy uses and how to manage your preferences.',
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="Information about cookies and tracking technologies used on Coincashy's website and platform."
      effectiveDate="1 October 2025"
      sections={[
        {
          title: 'What Are Cookies?',
          content: [
            'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function correctly, work more efficiently, and provide information to site owners.',
            'We also use other similar tracking technologies such as web beacons, pixels, and local storage objects, collectively referred to as "cookies" in this policy.',
            'Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (stored on your device until they expire or you delete them).',
          ],
        },
        {
          title: 'Cookies We Use',
          content: [
            'Strictly necessary cookies: These are essential for the website to operate and cannot be disabled. They include cookies that remember your session login, security tokens, and load-balancing preferences. These are set in response to your actions, such as setting your privacy preferences or logging in.',
            'Functional cookies: These allow us to remember choices you make (such as your preferred language or theme setting) and provide enhanced, personalised features. They may be set by us or by third-party providers whose services we have added to our pages.',
            'Analytics cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use tools such as Google Analytics and Cloudflare Analytics to measure traffic, page views, and user journeys so we can improve performance.',
            'Marketing cookies: These may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not store personal information directly but uniquely identify your browser and device. We only use marketing cookies with your explicit consent.',
          ],
        },
        {
          title: 'Specific Cookies Used',
          content: [
            '__cc_session — Session cookie. Used to maintain your authenticated session on the Coincashy platform. Expires: session.',
            '__cc_theme — Functional cookie. Stores your preferred light/dark mode setting. Expires: 1 year.',
            '_ga, _gid — Google Analytics. Used to distinguish users and throttle request rates. Expires: 2 years / 24 hours respectively.',
            '_fbp — Facebook Pixel. Used to deliver advertisements on Facebook and measure effectiveness. Expires: 3 months. Only set with consent.',
            'cf_clearance — Cloudflare. Used for bot protection and DDoS mitigation. Expires: session.',
          ],
        },
        {
          title: 'Managing Your Cookie Preferences',
          content: [
            'When you first visit our website, you will be shown a cookie consent banner that allows you to accept or reject optional categories of cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer.',
            'You can also manage cookies directly in your browser. Most browsers allow you to view, block, or delete cookies. Please refer to your browser\'s help documentation for instructions. Note that blocking strictly necessary cookies may prevent the website from functioning correctly.',
            'To opt out of Google Analytics tracking specifically, you can install the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.',
          ],
        },
        {
          title: 'Third-Party Cookies',
          content: [
            'Some cookies are placed by third parties on our behalf. These third parties include analytics providers, advertising networks, and social media platforms. We require these third parties to respect your privacy and comply with applicable data protection law.',
            'We are not responsible for the content of third-party cookies or for the privacy practices of third-party websites. Please review the privacy policies of any third-party services you interact with.',
          ],
        },
        {
          title: 'Do Not Track',
          content: 'Some browsers transmit a "Do Not Track" (DNT) signal. We currently do not alter our data collection or use practices in response to DNT signals, as no uniform standard for this has been established. We encourage you to use our cookie preference centre to control your preferences instead.',
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.',
        },
        {
          title: 'Contact',
          content: 'If you have any questions about our use of cookies, please contact us at legal@coincashy.io or write to Coincashy Sp. z o.o., Warsaw, Poland.',
        },
      ]}
    />
  );
}
