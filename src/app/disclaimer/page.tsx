import LegalPage from '@/components/LegalPage';

export default function DisclaimerPage() {
  const sections = [
    {
      title: 'General Risk Warning',
      content: 'Crypto-assets are highly volatile and largely unregulated. The value of your investments can go down as well as up. You may lose all the money you invest. You should only invest what you can afford to lose and ensure you fully understand the risks involved before trading.'
    },
    {
      title: 'UK Financial Promotion Regime',
      content: 'Coincashy Sp. z o.o. only provides services to customers resident in the UK who fall within an exemption available under the UK financial promotion regime. This includes Investment Professionals, High Net Worth Companies, Unincorporated Associations, and Certified Sophisticated Investors.'
    },
    {
      title: 'No Investment Advice',
      content: 'The information provided on our platform does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the website\'s content as such. Coincashy does not recommend that any cryptocurrency should be bought, sold, or held by you. Conduct your own due diligence and consult your financial advisor before making any investment decisions.'
    },
    {
      title: 'Regulatory Status',
      content: 'Coincashy Sp. z o.o. is a registered entity. Crypto-assets are not covered by the Financial Services Compensation Scheme (FSCS) and you will not have recourse to the Financial Ombudsman Service (FOS) in the event of a complaint.'
    },
    {
      title: 'Platform Limitations',
      content: 'While we strive for 100% uptime, trading and processing of crypto-assets may be halted or limited due to network congestion, extreme volatility, or system maintenance. Coincashy is not liable for any losses incurred during such downtime.'
    }
  ];

  return (
    <LegalPage
      title="Risk Warning & Disclaimer"
      subtitle="Important information regarding the risks of trading crypto-assets."
      effectiveDate="October 1, 2026"
      sections={sections}
    />
  );
}
