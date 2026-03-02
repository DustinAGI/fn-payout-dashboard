"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate, formatHours } from "@/lib/format";
import type { Payout } from "@/lib/data/mock-payouts";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

interface PayoutCardProps {
  payout: Payout;
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    label: "Completed",
    color: "bg-[var(--fn-paid-light)] text-[var(--fn-paid)]",
  },
  processing: {
    icon: Clock,
    label: "Processing",
    color: "bg-[var(--fn-processing-light)] text-[var(--fn-processing)]",
  },
  denied: {
    icon: XCircle,
    label: "Denied",
    color: "bg-[var(--fn-denied-light)] text-[var(--fn-denied)]",
  },
};

const productLabels: Record<string, string> = {
  stellar: "Stellar Challenge",
  express: "Express Challenge",
  evaluation: "Evaluation",
};

const methodLabels: Record<string, string> = {
  "crypto-btc": "Bitcoin",
  "crypto-usdt": "USDT",
  "bank-transfer": "Bank Transfer",
  rise: "Rise",
  payoneer: "Payoneer",
};

const productColors: Record<string, string> = {
  stellar: "#3b82f6",
  express: "#047857",
  evaluation: "#7c3aed",
};

export function PayoutCard({ payout }: PayoutCardProps) {
  const status = statusConfig[payout.status];
  const StatusIcon = status.icon;

  return (
    <Card className="border-[var(--fn-border)] p-5 transition-all duration-150 hover:border-[var(--fn-primary)] hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg text-white font-bold text-sm"
            style={{ backgroundColor: productColors[payout.product] }}
          >
            {payout.product.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[var(--fn-foreground)]">
                {payout.id}
              </span>
              <Badge variant="secondary" className="text-xs">
                {productLabels[payout.product]}
              </Badge>
            </div>
            <div className="mt-1 flex items-center gap-3 text-xs text-[var(--fn-muted)]">
              <span>{payout.region}</span>
              <span>|</span>
              <span>{formatDate(payout.date)}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xl font-bold text-[var(--fn-foreground)]">
            {formatCurrency(payout.amount, false)}
          </div>
          <div className="mt-0.5 text-xs text-[var(--fn-muted)]">
            via {methodLabels[payout.method]}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--fn-border)] pt-4">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-xs text-[var(--fn-muted)]">Processing Time</div>
            <div className="text-sm font-medium text-[var(--fn-foreground)]">
              {formatHours(payout.processingHours)}
            </div>
          </div>
          <div>
            <div className="text-xs text-[var(--fn-muted)]">Trader ID</div>
            <div className="text-sm font-medium text-[var(--fn-foreground)]">
              {payout.traderId}
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${status.color}`}>
          <StatusIcon className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{status.label}</span>
        </div>
      </div>

      {payout.reason && (
        <div className="mt-3 rounded-lg bg-[var(--fn-denied-light)] p-3">
          <p className="text-xs text-[var(--fn-denied)]">
            Reason: {payout.reason}
          </p>
        </div>
      )}
    </Card>
  );
}
