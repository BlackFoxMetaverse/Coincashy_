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

    const cleanedData = {
      name,
      company,
      email,
      markets: typeof data.markets === 'string' ? data.markets.trim() : 'Not specified',
      currencies: typeof data.currencies === 'string' ? data.currencies : 'Not specified',
      monthlyVolume: typeof data.monthlyVolume === 'string' ? data.monthlyVolume : 'Not specified',
      products: typeof data.products === 'string' ? data.products : 'Not specified',
      notes: typeof data.notes === 'string' ? data.notes.trim() : 'Not specified',
      createdAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not set. Local simulation accepted for:', cleanedData.email);
      return NextResponse.json({ success: true, message: 'Simulated success: webhook URL not configured in this environment.' });
    }

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData),
      redirect: 'follow',
    });

    const text = await res.text();

    if (!res.ok && !text.toLowerCase().includes('success')) {
      console.error('Google Sheets Webhook Error:', text);
      return NextResponse.json({ success: false, message: 'Google Sheets integration failed', error: text }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save message', error: String(error) },
      { status: 500 }
    );
  }
}
