"use client";

import { recentPayouts } from "@/lib/data/mock-payouts";
import { formatCurrency } from "@/lib/format";
import { CheckCircle2 } from "lucide-react";

export function Ticker() {
  const tickerItems = recentPayouts.map((payout) => ({
    id: payout.id,
    traderName: payout.traderName,
    amount: payout.amount,
    method: payout.method,
    hours: payout.processingHours,
  }));

  // Duplicate items for seamless loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  const methodLabels: Record<string, string> = {
    "crypto-btc": "BTC",
    "crypto-usdt": "USDT",
    "bank-transfer": "Bank",
    rise: "Rise",
    payoneer: "Payoneer",
  };

  return (
    <div className="flex h-9 items-center overflow-hidden border-b border-[var(--fn-border)] bg-[var(--fn-background-page)]">
      <div className="flex shrink-0 items-center gap-1.5 border-r border-[var(--fn-border)] bg-[var(--fn-paid-light)] px-3 h-full">
        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--fn-paid)]" />
        <span className="text-xs font-medium text-[var(--fn-paid)]">Live</span>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-2 text-xs"
            >
              <span className="font-medium text-[var(--fn-foreground)]">
                {item.traderName}
              </span>
              <span className="text-[var(--fn-paid)] font-semibold">
                {formatCurrency(item.amount, false)}
              </span>
              <span className="text-[var(--fn-muted)]">
                via {methodLabels[item.method]}
              </span>
              <span className="text-[var(--fn-muted)]">
                {item.hours}h
              </span>
              <span className="text-[var(--fn-border)]">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
