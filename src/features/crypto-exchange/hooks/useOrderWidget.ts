"use client";
import { useState, useEffect } from 'react';
import { OrderCalculator, Currency, FiatCurrency, FIAT_RATES, CRYPTO_RATES } from '../domain/OrderCalculator';

export type OrderMode = 'buy' | 'sell' | 'convert';
export type PaymentMethod = 'Card' | 'Apple Pay' | 'Google Pay' | 'Bank transfer';

export function useOrderWidget() {
  const [mode, setMode] = useState<OrderMode>('buy');
  const [from, setFrom] = useState<Currency>('USD');
  const [to, setTo] = useState<Currency>('BTC');
  const [fromAmt, setFromAmt] = useState<string>('1000.00');
  const [toAmt, setToAmt] = useState<string>('0.0118627');
  const [side, setSide] = useState<'from' | 'to'>('from');
  const [method, setMethod] = useState<PaymentMethod>('Apple Pay');
  const [isReview, setIsReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [jitter, setJitter] = useState(1);

  const parseNum = (val: string) => {
    const n = parseFloat(val.replace(/,/g, '').replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  };

  useEffect(() => {
    const fromVal = parseNum(fromAmt);
    const toVal = parseNum(toAmt);
    
    const t = setTimeout(() => {
      if (side === 'from') {
        const calculatedTo = OrderCalculator.convert(from, to, fromVal, jitter);
        setToAmt(OrderCalculator.formatValue(to, calculatedTo));
      } else {
        const calculatedFrom = OrderCalculator.convert(to, from, toVal, jitter);
        setFromAmt(OrderCalculator.formatValue(from, calculatedFrom));
      }
    }, 0);
    return () => clearTimeout(t);
  }, [from, to, fromAmt, toAmt, side, jitter, mode]);

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
    if (newMode === 'buy') {
      setFrom('USD'); setTo('BTC'); setFromAmt('1000'); setSide('from');
    } else if (newMode === 'sell') {
      setFrom('BTC'); setTo('USD'); setFromAmt('0.025'); setSide('from');
    } else if (newMode === 'convert') {
      setFrom('BTC'); setTo('USDC'); setFromAmt('0.05'); setSide('from');
    }
  };

  const handleSwap = () => {
    const nextMode = mode === 'buy' ? 'sell' : mode === 'sell' ? 'buy' : mode;
    if (mode !== nextMode) setMode(nextMode);
    
    setFrom(to);
    setTo(from);
    setFromAmt(toAmt);
    setToAmt(fromAmt);
    setSide('from');
  };

  const rateRate = OrderCalculator.getUsdValue(from, jitter) / OrderCalculator.getUsdValue(to, jitter);
  const rateText = mode === 'convert'
    ? `1 ${from} ≈ ${Number(rateRate).toLocaleString('en-US', { minimumFractionDigits: rateRate < 1 ? 6 : 2, maximumFractionDigits: rateRate < 1 ? 6 : 2 })} ${to}`
    : `1 ${mode === 'buy' ? to : from} ≈ ${FIAT_RATES[(mode === 'buy' ? from : to) as FiatCurrency].sym}${OrderCalculator.formatValue((mode === 'buy' ? from : to) as Currency, OrderCalculator.getUsdValue(mode === 'buy' ? to : from, jitter) / OrderCalculator.getUsdValue(mode === 'buy' ? from : to, jitter))}`;

  return {
    mode, from, to, fromAmt, toAmt, method, isReview, timeLeft, rateText,
    setFrom, setTo, setFromAmt, setToAmt, setSide, setMethod, setIsReview,
    handleModeChange, handleSwap,
    fromOptions: (mode === 'buy' ? Object.keys(FIAT_RATES) : mode === 'sell' ? Object.keys(CRYPTO_RATES) : Object.keys(CRYPTO_RATES)) as Currency[],
    toOptions: (mode === 'sell' ? Object.keys(FIAT_RATES) : Object.keys(CRYPTO_RATES)) as Currency[]
  };
}
