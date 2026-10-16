export const SUPPORTED_SYMBOLS = ['BTC', 'ETH', 'SOL', 'USDT', 'USDC'] as const;
export type SupportedSymbol = (typeof SUPPORTED_SYMBOLS)[number];

export interface DiaQuotationResponse {
  Symbol: string;
  Name: string;
  Address: string;
  Blockchain: string;
  Price: number;
  PriceYesterday?: number;
  VolumeYesterdayUSD?: number;
  Time: string;
  Source: string;
}

export interface TokenMarketData {
  symbol: SupportedSymbol;
  name: string;
  price: number;
  priceYesterday?: number;
  change: string;
  formattedPrice: string;
  updatedAt: string;
}

export function formatCryptoPrice(sym: SupportedSymbol, price: number): string {
  if (sym === 'USDT' || sym === 'USDC') {
    if (Math.abs(price - 1) < 0.015) {
      return '$1.00';
    }
    return `$${price.toFixed(2)}`;
  }
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function compute24hChange(price: number, priceYesterday?: number): string {
  if (!priceYesterday || priceYesterday <= 0) return '0.0%';
  const pct = ((price - priceYesterday) / priceYesterday) * 100;
  if (Math.abs(pct) < 0.05) return '0.0%';
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(1)}%`;
}

// In-memory cache for server-side fetches (60 seconds TTL)
let cachedPrices: Record<SupportedSymbol, TokenMarketData> | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 60 * 1000;

export async function fetchDiaTokenPrices(): Promise<Record<SupportedSymbol, TokenMarketData>> {
  const now = Date.now();
  if (cachedPrices && now - lastFetchTime < CACHE_TTL_MS) {
    return cachedPrices;
  }

  const results: Partial<Record<SupportedSymbol, TokenMarketData>> = {};

  await Promise.all(
    SUPPORTED_SYMBOLS.map(async (symbol) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const res = await fetch(`https://api.diadata.org/v1/quotation/${symbol}`, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
          next: { revalidate: 60 },
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`DIA API returned status ${res.status} for ${symbol}`);
        }

        const data: DiaQuotationResponse = await res.json();
        const change = compute24hChange(data.Price, data.PriceYesterday);
        const formattedPrice = formatCryptoPrice(symbol, data.Price);

        results[symbol] = {
          symbol,
          name: data.Name || symbol,
          price: data.Price,
          priceYesterday: data.PriceYesterday,
          change,
          formattedPrice,
          updatedAt: data.Time || new Date().toISOString(),
        };
      } catch (err) {
        console.warn(`Failed to fetch DIA price for ${symbol}:`, err);
        // If fetch fails, keep cached value if available, or fallback to sensible defaults
        if (cachedPrices && cachedPrices[symbol]) {
          results[symbol] = cachedPrices[symbol];
        } else {
          const fallbackDefaults: Record<SupportedSymbol, { price: number; change: string }> = {
            BTC: { price: 81311.95, change: '-0.9%' },
            ETH: { price: 2414.58, change: '-0.8%' },
            SOL: { price: 103.97, change: '-1.1%' },
            USDT: { price: 1.0, change: '0.0%' },
            USDC: { price: 1.0, change: '0.0%' },
          };
          const fb = fallbackDefaults[symbol];
          results[symbol] = {
            symbol,
            name: symbol,
            price: fb.price,
            change: fb.change,
            formattedPrice: formatCryptoPrice(symbol, fb.price),
            updatedAt: new Date().toISOString(),
          };
        }
      }
    })
  );

  cachedPrices = results as Record<SupportedSymbol, TokenMarketData>;
  lastFetchTime = now;
  return cachedPrices;
}
