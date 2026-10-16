"use client";
import { useState, useEffect } from 'react';
import { OrderCalculator, Currency, FiatCurrency, FIAT_RATES, CRYPTO_RATES } from '../domain/OrderCalculator';

export type OrderMode = 'buy' | 'sell' | 'convert';
export type PaymentMethod = 'Card' | 'Apple Pay' | 'Google Pay' | 'Bank transfer';

export function useOrderWidget() {
  const [mode, setMode] = useState<OrderMode>('buy');
  const [from, setFrom] = useState<Currency>('USD');
  const [to, setTo] = useState<Currency>('BTC');
  const [fromInput, setFromInput] = useState<string>('1000.00');
  const [toInput, setToInput] = useState<string>('');
  const [side, setSide] = useState<'from' | 'to'>('from');
  const [method, setMethod] = useState<PaymentMethod>('Apple Pay');
  const [isReview, setIsReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [jitter, setJitter] = useState(1);

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
    syncHash();
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
    ? `1 ${from} ≈ ${Number(rateRate).toLocaleString('en-US', { minimumFractionDigits: rateRate < 1 ? 6 : 2, maximumFractionDigits: rateRate < 1 ? 6 : 2 })} ${to}`
    : `1 ${mode === 'buy' ? to : from} ≈ ${FIAT_RATES[(mode === 'buy' ? from : to) as FiatCurrency].sym}${OrderCalculator.formatValue((mode === 'buy' ? from : to) as Currency, OrderCalculator.getUsdValue(mode === 'buy' ? to : from, jitter) / OrderCalculator.getUsdValue(mode === 'buy' ? from : to, jitter))}`;

  return {
    mode, from, to, fromAmt, toAmt, method, isReview, timeLeft, rateText,
    setFrom, setTo, setFromAmt: handleSetFromAmt, setToAmt: handleSetToAmt, setSide, setMethod, setIsReview,
    handleModeChange, handleSwap,
    fromOptions: (mode === 'buy' ? Object.keys(FIAT_RATES) : mode === 'sell' ? Object.keys(CRYPTO_RATES) : Object.keys(CRYPTO_RATES)) as Currency[],
    toOptions: (mode === 'sell' ? Object.keys(FIAT_RATES) : Object.keys(CRYPTO_RATES)) as Currency[]
  };
}
