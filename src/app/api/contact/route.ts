import { NextResponse } from 'next/server';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => null);

    if (!data || typeof data !== 'object') {
      return NextResponse.json({ success: false, message: 'Request body is required.' }, { status: 400 });
    }

    const name = typeof data.name === 'string' ? data.name.trim() : '';
    const company = typeof data.company === 'string' ? data.company.trim() : '';
    const email = typeof data.email === 'string' ? data.email.trim() : '';

    if (!name || !company || !email) {
      return NextResponse.json({ success: false, message: 'Name, company and email are required.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: 'A valid work email is required.' }, { status: 400 });
    }

    const markets = typeof data.markets === 'string' ? data.markets.trim() : 'Not specified';
    const currencies = typeof data.currencies === 'string' ? data.currencies : 'Not specified';
    const monthlyVolume = typeof data.monthlyVolume === 'string' ? data.monthlyVolume : 'Not specified';
    const products = typeof data.products === 'string' ? data.products : 'Not specified';
    const notes = typeof data.notes === 'string' ? data.notes.trim() : 'Not specified';

    // Parse first name and last name
    const nameParts = name.split(/\s+/);
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(' ') || '';

    // Build structured message body for HubSpot contact record
    const messageLines = [
      notes && notes !== 'Not specified' ? `Inquiry / Notes:\n${notes}` : '',
      '--- Submission Details ---',
      `Interested Products: ${products}`,
      `Monthly Volume: ${monthlyVolume}`,
      `Settlement Currencies: ${currencies}`,
      `Target Markets: ${markets}`,
      `Submitted At: ${new Date().toISOString()}`,
    ].filter(Boolean);

    const formattedMessage = messageLines.join('\n\n');

    const portalId = process.env.HUBSPOT_PORTAL_ID || '247718972';
    const formId = process.env.HUBSPOT_FORM_ID || '1ad4e660-49c7-4823-b932-bb20c3872d76';
    const region = (process.env.HUBSPOT_REGION || 'na2').toLowerCase();

    const baseHost = region === 'na2'
      ? 'https://api-na2.hsforms.com'
      : region === 'eu1'
      ? 'https://api-eu1.hsforms.com'
      : 'https://api.hsforms.com';

    const hubspotEndpoint = `${baseHost}/submissions/v3/integration/submit/${portalId}/${formId}`;

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields: [
        { name: 'firstname', value: firstName },
        { name: 'lastname', value: lastName },
        { name: 'email', value: email },
        { name: 'company', value: company },
        { name: 'message', value: formattedMessage },
        { name: 'notes', value: notes },
        { name: 'monthly_volume', value: monthlyVolume },
        { name: 'interested_products', value: products },
        { name: 'target_markets', value: markets },
        { name: 'preferred_currencies', value: currencies },
      ],
      context: {
        pageUri: 'https://coincashy.io/contact',
        pageName: 'Coincashy - Contact Sales',
      },
    };

    const res = await fetch(hubspotEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubspotPayload),
    });

    const responseText = await res.text();

    if (!res.ok) {
      console.error('HubSpot Forms API Error:', res.status, responseText);
      return NextResponse.json(
        { success: false, message: 'HubSpot submission failed', error: responseText },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully and forwarded to HubSpot CRM',
    });
  } catch (error) {
    console.error('Error forwarding contact form to HubSpot:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry', error: String(error) },
      { status: 500 }
    );
  }
}
