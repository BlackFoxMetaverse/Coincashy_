"use client";
import { useState, useEffect } from 'react';
import { OrderCalculator, Currency, CryptoCurrency, FiatCurrency, FIAT_RATES, CRYPTO_RATES } from '../domain/OrderCalculator';

export type OrderMode = 'buy' | 'sell' | 'convert';
export type PaymentMethod = 'Card' | 'Apple Pay' | 'Google Pay' | 'Bank transfer';

export function selectExchangePair(from: Currency, to: Currency, mode: OrderMode = 'convert') {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('coincashy:select-pair', {
        detail: { from, to, mode },
      })
    );
    const widgetEl = document.getElementById('widget') || document.getElementById('exchange-widget');
    if (widgetEl) {
      widgetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

export function useOrderWidget(
  defaultMode: OrderMode = 'buy',
  initialFrom?: Currency,
  initialTo?: Currency
) {
  const [mode, setMode] = useState<OrderMode>(defaultMode);
  const [from, setFrom] = useState<Currency>(initialFrom || (defaultMode === 'sell' ? 'BTC' : 'USD'));
  const [to, setTo] = useState<Currency>(initialTo || (defaultMode === 'sell' ? 'EUR' : defaultMode === 'convert' ? 'USDT' : 'BTC'));
  const [fromInput, setFromInput] = useState<string>(
    defaultMode === 'sell' ? '0.5' : defaultMode === 'convert' ? '0.25' : '1000.00'
  );
  const [toInput, setToInput] = useState<string>('');
  const [side, setSide] = useState<'from' | 'to'>('from');
  const [method, setMethod] = useState<PaymentMethod>('Apple Pay');
  const [isReview, setIsReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [jitter, setJitter] = useState(1);
  const [, setPriceRevision] = useState(0);

  // Fetch live oracle prices on mount and refresh periodically
  useEffect(() => {
    let isMounted = true;
    async function loadLivePrices() {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && isMounted) {
            const updates: Partial<Record<CryptoCurrency, number>> = {};
            (['BTC', 'ETH', 'SOL', 'USDT', 'USDC'] as const).forEach((sym) => {
              if (json.data[sym]?.price) {
                updates[sym] = json.data[sym].price;
              }
            });
            OrderCalculator.updateCryptoRates(updates);
            setPriceRevision((prev) => prev + 1);
          }
        }
      } catch (err) {
        console.warn('Could not fetch live oracle prices for order widget:', err);
      }
    }

    loadLivePrices();
    const interval = setInterval(loadLivePrices, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Listen for programmatic pair selection (e.g. from Trending Pairs matrix)
  useEffect(() => {
    const handleCustomPair = (e: Event) => {
      const detail = (e as CustomEvent<{ from: Currency; to: Currency; mode?: OrderMode }>).detail;
      if (detail?.from && detail?.to) {
        if (detail.mode) setMode(detail.mode);
        else setMode('convert');
        setFrom(detail.from);
        setTo(detail.to);
        setIsReview(false);
        setSide('from');
      }
    };
    window.addEventListener('coincashy:select-pair', handleCustomPair);
    return () => window.removeEventListener('coincashy:select-pair', handleCustomPair);
  }, []);

  const parseNum = (val: string) => {
    const cleaned = val.replace(/,/g, '').replace(/[^0-9.]/g, '');
    const n = parseFloat(cleaned);
    return Number.isFinite(n) ? n : 0;
  };

  const handleSetFromAmt = (val: string) => {
    setSide('from');
    setFromInput(val);
  };

  const handleSetToAmt = (val: string) => {
    setSide('to');
    setToInput(val);
  };

  let fromAmt = fromInput;
  let toAmt = toInput;

  if (side === 'from') {
    const fromVal = parseNum(fromInput);
    if (!fromInput || fromInput === '.' || fromVal === 0) {
      toAmt = '';
    } else {
      const calculatedTo = OrderCalculator.convert(from, to, fromVal, jitter);
      toAmt = OrderCalculator.formatValue(to, calculatedTo);
    }
  } else {
    const toVal = parseNum(toInput);
    if (!toInput || toInput === '.' || toVal === 0) {
      fromAmt = '';
    } else {
      const calculatedFrom = OrderCalculator.convert(to, from, toVal, jitter);
      fromAmt = OrderCalculator.formatValue(from, calculatedFrom);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setJitter(1 + (Math.random() - 0.5) * 0.003);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleModeChange = (newMode: OrderMode) => {
    setMode(newMode);
    setIsReview(false);
    setSide('from');
    if (newMode === 'buy') {
      setFrom('USD'); setTo('BTC'); setFromInput('1000');
    } else if (newMode === 'sell') {
      setFrom('BTC'); setTo('USD'); setFromInput('0.025');
    } else if (newMode === 'convert') {
      setFrom('BTC'); setTo('USDC'); setFromInput('0.05');
    }
  };

  useEffect(() => {
    const syncHash = () => {
      if (typeof window === 'undefined') return;
      const h = window.location.hash.toLowerCase();
      if (h === '#sell') {
        handleModeChange('sell');
      } else if (h === '#convert') {
        handleModeChange('convert');
      } else if (h === '#buy') {
        handleModeChange('buy');
      }
    };
    if (typeof window !== 'undefined' && window.location.hash) {
      syncHash();
    }
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const handleSwap = () => {
    const nextMode = mode === 'buy' ? 'sell' : mode === 'sell' ? 'buy' : mode;
    if (mode !== nextMode) setMode(nextMode);
    
    const prevTo = to;
    const prevFrom = from;
    const prevToAmt = toAmt;
    setFrom(prevTo);
    setTo(prevFrom);
    setFromInput(prevToAmt);
    setSide('from');
  };

  const rateRate = OrderCalculator.getUsdValue(from, jitter) / OrderCalculator.getUsdValue(to, jitter);
  const rateText = mode === 'convert'
    ? `1 ${from} ≈ ${Number(rateRate).toLocaleString('en-US', { minimumFractionDigits: rateRate < 1 ? 4 : 2, maximumFractionDigits: rateRate < 1 ? 4 : 2 })} ${to}`
    : `1 ${mode === 'buy' ? to : from} ≈ ${FIAT_RATES[(mode === 'buy' ? from : to) as FiatCurrency].sym}${OrderCalculator.formatValue((mode === 'buy' ? from : to) as Currency, OrderCalculator.getUsdValue(mode === 'buy' ? to : from, jitter) / OrderCalculator.getUsdValue(mode === 'buy' ? from : to, jitter))}`;

  return {
    mode, from, to, fromAmt, toAmt, method, isReview, timeLeft, rateText,
    setFrom, setTo, setFromAmt: handleSetFromAmt, setToAmt: handleSetToAmt, setSide, setMethod, setIsReview,
    handleModeChange, handleSwap,
    fromOptions: (mode === 'buy' ? Object.keys(FIAT_RATES) : Object.keys(CRYPTO_RATES)) as Currency[],
    toOptions: (mode === 'sell' ? Object.keys(FIAT_RATES) : Object.keys(CRYPTO_RATES)) as Currency[]
  };
}
