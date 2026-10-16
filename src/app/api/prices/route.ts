import { NextResponse } from 'next/server';
import { fetchDiaTokenPrices } from '@/features/buy-crypto/services/diaPriceService';

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  try {
    const prices = await fetchDiaTokenPrices();
    return NextResponse.json(
      {
        success: true,
        source: 'diadata.org',
        timestamp: new Date().toISOString(),
        data: prices,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (error) {
    console.error('Error serving /api/prices:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch prices from DIA API',
      },
      { status: 500 }
    );
  }
}
