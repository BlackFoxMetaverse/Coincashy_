import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy – Coincashy',
  description: 'Learn how Coincashy uses cookies, local storage, and similar technologies to provide, protect, and improve our services.',
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="How Coincashy uses cookies, local storage, and related technologies to keep our platform secure, fast, and reliable."
      effectiveDate="October 1, 2026"
      sections={[
        {
          title: 'What Are Cookies?',
          content: [
            'Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work efficiently, recognize your device across visits, provide secure authentication, and supply reporting data to site operators.',
            'In addition to HTTP cookies, we may use related web technologies such as local storage, session storage, and pixel tags. In this Policy, we refer to all such technologies collectively as "cookies".',
          ],
        },
        {
          title: 'How Coincashy Uses Cookies',
          content: [
            'Coincashy Sp. z o.o. uses cookies to ensure our digital asset gateway, trading calculators, and portal operate smoothly, reliably, and in compliance with financial security standards.',
            'We categorize the cookies we use into the following types:',
            <ul key="cookie-cats-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <strong>1. Strictly Necessary Cookies:</strong> Essential for you to browse the website and use its features, such as accessing secure areas, processing session routing, managing authentication tokens, and maintaining platform uptime. Without these cookies, services you have requested cannot be provided.
              </li>
              <li>
                <strong>2. Preference & Functional Cookies:</strong> Enable the website to remember choices you make (such as your theme setting—dark or light mode, selected trading pair, or language) and provide enhanced, personalized features.
              </li>
              <li>
                <strong>3. Performance & Analytical Cookies:</strong> Collect aggregate, anonymous information about how visitors interact with our pages, which sections are visited most frequently, and if error messages occur. This data helps us improve the user experience and optimize page speed.
              </li>
              <li>
                <strong>4. Security & Fraud Prevention Cookies:</strong> Used as part of our regulatory and risk operations to detect suspicious behavior, prevent bot attacks, and protect customer accounts against unauthorized access.
              </li>
            </ul>,
          ],
        },
        {
          title: 'Cookies We Set',
          content: [
            'The table below illustrates common cookies that may be set during your visit to coincashy.io:',
            <div key="cookie-table" style={{ overflowX: 'auto', margin: '1rem 0' }}>
              <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '0.75rem', color: 'var(--fg)' }}>Cookie Name</th>
                    <th style={{ padding: '0.75rem', color: 'var(--fg)' }}>Category</th>
                    <th style={{ padding: '0.75rem', color: 'var(--fg)' }}>Purpose</th>
                    <th style={{ padding: '0.75rem', color: 'var(--fg)' }}>Duration</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--fg-dim)' }}>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '0.75rem', color: 'var(--fg)' }}><code>cc_theme</code></td>
                    <td style={{ padding: '0.75rem' }}>Functional</td>
                    <td style={{ padding: '0.75rem' }}>Remembers your preferred color scheme (dark / light)</td>
                    <td style={{ padding: '0.75rem' }}>1 year</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '0.75rem', color: 'var(--fg)' }}><code>cc_session</code></td>
                    <td style={{ padding: '0.75rem' }}>Strictly Necessary</td>
                    <td style={{ padding: '0.75rem' }}>Maintains temporary session state and security tokens</td>
                    <td style={{ padding: '0.75rem' }}>Session</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '0.75rem', color: 'var(--fg)' }}><code>cc_consent</code></td>
                    <td style={{ padding: '0.75rem' }}>Strictly Necessary</td>
                    <td style={{ padding: '0.75rem' }}>Stores your cookie consent preferences</td>
                    <td style={{ padding: '0.75rem' }}>6 months</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '0.75rem', color: 'var(--fg)' }}><code>_ga, _gid</code></td>
                    <td style={{ padding: '0.75rem' }}>Analytics</td>
                    <td style={{ padding: '0.75rem' }}>Aggregated site telemetry and visit metrics</td>
                    <td style={{ padding: '0.75rem' }}>Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>,
          ],
        },
        {
          title: 'Third-Party Services',
          content: [
            'In certain cases, we utilize trusted third-party providers to enhance security and streamline operational verification. For example, when you undergo customer due diligence or identity onboarding, Sumsub may set cookies necessary to perform secure document and liveness checks.',
            'We do not sell, rent, or trade your personal browsing activity to third-party advertising data brokers.',
          ],
        },
        {
          title: 'Managing and Controlling Cookies',
          content: [
            'You have the right to decide whether to accept or reject non-essential cookies. You can exercise your cookie preferences by adjusting your browser settings.',
            'Most web browsers automatically accept cookies by default, but you can modify your settings to block cookies or notify you when a cookie is placed on your device. Instructions for popular browsers:',
            <ul key="browsers-ul" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies</li>
              <li><strong>Apple Safari:</strong> Preferences → Privacy → Block all cookies</li>
              <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Enhanced Tracking Protection</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
            </ul>,
            'Please note that if you disable strictly necessary cookies, some features of our website (including order calculation and secure portal login) may not function as intended.',
          ],
        },
        {
          title: 'Updates & Questions',
          content: [
            'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. The date at the top of this document indicates when it was last updated.',
            'If you have any questions about our use of cookies or tracking technologies, please contact our Data Protection and Compliance team at legal@coincashy.io or support@coincashy.io.',
          ],
        },
      ]}
    />
  );
}
