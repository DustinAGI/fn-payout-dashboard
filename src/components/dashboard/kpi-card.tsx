"use client";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  delta?: {
    value: string;
    positive: boolean;
    period?: string;
  };
  tooltip?: string;
}

export function KpiCard({ label, value, delta, tooltip }: KpiCardProps) {
  return (
    <Card className="flex flex-col gap-1 p-5 border-[var(--fn-border)]">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium text-[var(--fn-muted)]">
          {label}
        </span>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-3.5 w-3.5 text-[var(--fn-muted)] cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-[200px] text-xs">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <span className="text-3xl font-bold tracking-tight text-[var(--fn-foreground)]">
        {value}
      </span>
      {delta && (
        <div className="flex items-center gap-1 mt-0.5">
          {delta.positive ? (
            <TrendingUp className="h-3.5 w-3.5 text-[var(--fn-paid)]" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5 text-[var(--fn-denied)]" />
          )}
          <span
            className={`text-xs font-medium ${
              delta.positive ? "text-[var(--fn-paid)]" : "text-[var(--fn-denied)]"
            }`}
          >
            {delta.value}
          </span>
          {delta.period && (
            <span className="text-xs text-[var(--fn-muted)]">
              from {delta.period}
            </span>
          )}
        </div>
      )}
    </Card>
  );
}
