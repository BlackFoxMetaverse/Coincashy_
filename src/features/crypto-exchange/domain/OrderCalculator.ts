export type FiatCurrency = 'USD' | 'EUR' | 'GBP';
export type CryptoCurrency = 'BTC' | 'ETH' | 'SOL' | 'USDT' | 'USDC';
export type Currency = FiatCurrency | CryptoCurrency;

export const FIAT_RATES: Record<FiatCurrency, { sym: string, usd: number }> = {
  USD: { sym: '$', usd: 1 },
  EUR: { sym: '€', usd: 1.16 },
  GBP: { sym: '£', usd: 1.34 }
};

export const CRYPTO_RATES: Record<CryptoCurrency, { glyph: string, usd: number, dp: number, cls: string }> = {
  BTC: { glyph: '₿', usd: 84297.67, dp: 7, cls: 'btc' },
  ETH: { glyph: 'Ξ', usd: 2640.35, dp: 6, cls: 'eth' },
  SOL: { glyph: '◎', usd: 154.20, dp: 4, cls: 'sol' },
  USDT: { glyph: '₮', usd: 1, dp: 2, cls: 'usdt' },
  USDC: { glyph: '$', usd: 1, dp: 2, cls: 'usdc' }
};

export class OrderCalculator {
  static updateCryptoRates(rates: Partial<Record<CryptoCurrency, number>>) {
    (Object.keys(rates) as CryptoCurrency[]).forEach((sym) => {
      if (CRYPTO_RATES[sym] && typeof rates[sym] === 'number' && rates[sym]! > 0) {
        CRYPTO_RATES[sym].usd = rates[sym]!;
      }
    });
  }

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

  static parseNum(val: string | number): number {
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    if (!val) return 0;
    const cleaned = String(val).replace(/,/g, '').replace(/[^0-9.]/g, '');
    const n = parseFloat(cleaned);
    return Number.isFinite(n) ? n : 0;
  }

  static formatValue(c: Currency, v: number): string {
    const dp = this.getDecimals(c);
    const minDp = this.isFiat(c) ? 2 : (c === 'USDC' || c === 'USDT' ? 2 : 0);
    return Number(v).toLocaleString('en-US', { minimumFractionDigits: minDp, maximumFractionDigits: dp });
  }

  static formatMoney(c: Currency, v: number | string): string {
    const num = this.parseNum(v);
    if (this.isFiat(c)) {
      return FIAT_RATES[c as FiatCurrency].sym + this.formatValue(c, num);
    }
    return `${this.formatValue(c, num)} ${c}`;
  }
}
