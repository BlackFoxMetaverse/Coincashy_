export type FiatCurrency = 'USD' | 'EUR' | 'GBP';
export type CryptoCurrency = 'BTC' | 'ETH' | 'USDT' | 'USDC';
export type Currency = FiatCurrency | CryptoCurrency;

export const FIAT_RATES: Record<FiatCurrency, { sym: string, usd: number }> = {
  USD: { sym: '$', usd: 1 },
  EUR: { sym: '€', usd: 1.16 },
  GBP: { sym: '£', usd: 1.34 }
};

export const CRYPTO_RATES: Record<CryptoCurrency, { glyph: string, usd: number, dp: number, cls: string }> = {
  BTC: { glyph: '₿', usd: 84297.67, dp: 7, cls: 'btc' },
  ETH: { glyph: 'Ξ', usd: 2640.35, dp: 6, cls: 'eth' },
  USDT: { glyph: '₮', usd: 1, dp: 2, cls: 'usdt' },
  USDC: { glyph: '$', usd: 1, dp: 2, cls: 'usdc' }
};

export class OrderCalculator {
  static isFiat(c: Currency): c is FiatCurrency {
    return Object.prototype.hasOwnProperty.call(FIAT_RATES, c);
  }

  static getUsdValue(c: Currency, jitter: number = 1): number {
    if (this.isFiat(c)) return FIAT_RATES[c as FiatCurrency].usd;
    return CRYPTO_RATES[c as CryptoCurrency].usd * jitter;
  }

  static getDecimals(c: Currency): number {
    return this.isFiat(c) ? 2 : CRYPTO_RATES[c as CryptoCurrency].dp;
  }
  
  static convert(from: Currency, to: Currency, amount: number, jitter: number = 1): number {
    if (amount <= 0 || isNaN(amount)) return 0;
    const rate = this.getUsdValue(from, jitter) / this.getUsdValue(to, jitter);
    return amount * rate;
  }

  static formatValue(c: Currency, v: number): string {
    const dp = this.getDecimals(c);
    const minDp = this.isFiat(c) ? 2 : 0;
    return Number(v).toLocaleString('en-US', { minimumFractionDigits: minDp, maximumFractionDigits: dp });
  }

  static formatMoney(c: Currency, v: number): string {
    if (this.isFiat(c)) {
      return FIAT_RATES[c as FiatCurrency].sym + this.formatValue(c, v);
    }
    return `${this.formatValue(c, v)} ${c}`;
  }
}
