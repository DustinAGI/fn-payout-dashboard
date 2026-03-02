"use client";

import { Card } from "@/components/ui/card";
import { formatCurrency, formatNumber, formatHours } from "@/lib/format";

interface LeagueItem {
  rank: number;
  name: string;
  icon: string;
  volume: number;
  count: number;
  avgTime: number;
  marketShare: number;
}

interface LeagueTableProps {
  title: string;
  data: LeagueItem[];
  type: "method" | "region" | "product";
}

export function LeagueTable({ title, data, type }: LeagueTableProps) {
  return (
    <Card className="border-[var(--fn-border)] overflow-hidden">
      <div className="border-b border-[var(--fn-border)] px-6 py-4">
        <h3 className="text-lg font-semibold text-[var(--fn-foreground)]">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--fn-border)] bg-[var(--fn-background-page)]">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                {type === "method" ? "Method" : type === "region" ? "Region" : "Product"}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                Volume
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                Count
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                Avg Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                Share
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--fn-border)]">
            {data.map((item, index) => (
              <tr
                key={item.name}
                className={
                  index % 2 === 0
                    ? "bg-[var(--fn-grid-row)]"
                    : "bg-[var(--fn-grid-row-striped)]"
                }
              >
                <td className="px-6 py-4 text-sm text-[var(--fn-muted)]">
                  {item.rank}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--fn-background-page)] text-lg">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-[var(--fn-foreground)]">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-[var(--fn-foreground)]">
                  {formatCurrency(item.volume)}
                </td>
                <td className="px-6 py-4 text-right text-sm text-[var(--fn-foreground)]">
                  {formatNumber(item.count)}
                </td>
                <td className="px-6 py-4 text-right text-sm text-[var(--fn-foreground)]">
                  {formatHours(item.avgTime)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-[var(--fn-background-page)]">
                      <div
                        className="h-full rounded-full bg-[var(--fn-primary)]"
                        style={{ width: `${item.marketShare}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--fn-muted)]">
                      {item.marketShare.toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
