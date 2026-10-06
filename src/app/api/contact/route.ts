import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbxkMv8V_zvNKcnybsFWP-jKAZgbvgHaheLdoK7L-LrFK0cfhZbg-bCEMsaDdGyDQ4G1Qg/exec';
    
    if (!webhookUrl) {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not set. Data received:', data);
      // We return success to the frontend anyway to test the flow, but log the warning.
      return NextResponse.json({ success: true, message: 'Simulated success: Webhook URL missing' });
    }

    // Send to Google Sheets Webhook
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    });

    const text = await res.text();
    
    // Google Apps Script can sometimes return an HTML error page even on success (due to redirect issues). 
    // We check if the response is completely an error.
    if (!res.ok && !text.includes('success')) {
      console.error('Google Sheets Webhook Error:', text);
      // Don't throw 500 immediately, let the user know it failed gracefully
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
