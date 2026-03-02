"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { paymentMethods } from "@/lib/data/mock-methods";
import { formatCurrency, formatNumber, formatHours } from "@/lib/format";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const methodIcons: Record<string, string> = {
  "crypto-usdt": "₮",
  "crypto-btc": "₿",
  "bank-transfer": "🏦",
  rise: "↗",
  payoneer: "P",
};

const methodColors: Record<string, string> = {
  "crypto-usdt": "#26a17b",
  "crypto-btc": "#f7931a",
  "bank-transfer": "#3b82f6",
  rise: "#047857",
  payoneer: "#d97706",
};

export default function MethodsPage() {
  const totalVolume = paymentMethods.reduce((sum, m) => sum + m.totalVolume, 0);
  const fastestMethod = paymentMethods.reduce((prev, current) =>
    prev.avgProcessingHours < current.avgProcessingHours ? prev : current
  );
  const mostUsedMethod = paymentMethods.reduce((prev, current) =>
    prev.transactionCount > current.transactionCount ? prev : current
  );

  const chartData = paymentMethods
    .map((method) => ({
      name: method.name,
      hours: method.avgProcessingHours,
      id: method.id,
    }))
    .sort((a, b) => a.hours - b.hours);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--fn-foreground)]">
          Payment Methods
        </h1>
        <p className="mt-1 text-sm text-[var(--fn-muted)]">
          Processing times and volume by payment method
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <KpiCard
          label="Methods Available"
          value={paymentMethods.length.toString()}
          tooltip="Total number of active payment methods"
        />
        <KpiCard
          label="Fastest Method"
          value={fastestMethod.name}
          delta={{
            value: `${formatHours(fastestMethod.avgProcessingHours)} avg`,
            positive: true,
          }}
          tooltip="Payment method with the fastest average processing time"
        />
        <KpiCard
          label="Most Used"
          value={mostUsedMethod.name}
          delta={{
            value: `${formatNumber(mostUsedMethod.transactionCount)} txns`,
            positive: true,
          }}
          tooltip="Payment method with the highest transaction count"
        />
        <KpiCard
          label="Total Processed"
          value={formatCurrency(totalVolume)}
          tooltip="Total volume processed across all methods"
        />
      </div>

      {/* Processing Time Chart */}
      <Card className="border-[var(--fn-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--fn-foreground)]">
          Average Processing Time
        </h2>
        <p className="mt-1 text-sm text-[var(--fn-muted)]">
          Hours from request to completion
        </p>

        <div className="mt-6 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--fn-border)"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                type="number"
                tick={{ fill: "var(--fn-muted)", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                unit="h"
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "var(--fn-foreground)", fontSize: 13 }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip
                formatter={(value: number) => [`${value} hours`, "Avg Time"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid var(--fn-border)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Bar dataKey="hours" radius={[0, 4, 4, 0]} barSize={24}>
                {chartData.map((entry) => (
                  <Cell
                    key={entry.id}
                    fill={methodColors[entry.id] || "#3b82f6"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Methods Table */}
      <Card className="border-[var(--fn-border)] overflow-hidden">
        <div className="border-b border-[var(--fn-border)] px-6 py-4">
          <h2 className="text-lg font-semibold text-[var(--fn-foreground)]">
            All Payment Methods
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--fn-border)] bg-[var(--fn-background-page)]">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Method
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Volume
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Transactions
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Avg Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Availability
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Market Share
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--fn-border)]">
              {paymentMethods.map((method, index) => (
                <tr
                  key={method.id}
                  className={
                    index % 2 === 0
                      ? "bg-[var(--fn-grid-row)]"
                      : "bg-[var(--fn-grid-row-striped)]"
                  }
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-lg text-white"
                        style={{ backgroundColor: methodColors[method.id] }}
                      >
                        {methodIcons[method.id]}
                      </div>
                      <div>
                        <div className="font-medium text-[var(--fn-foreground)]">
                          {method.name}
                        </div>
                        <Badge
                          variant={
                            method.status === "active" ? "default" : "secondary"
                          }
                          className="mt-1 text-xs"
                        >
                          {method.status === "active" ? "Active" : "Coming Soon"}
                        </Badge>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-[var(--fn-foreground)]">
                    {formatCurrency(method.totalVolume)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-[var(--fn-foreground)]">
                    {formatNumber(method.transactionCount)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-[var(--fn-foreground)]">
                    {formatHours(method.avgProcessingHours)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {method.availability.map((region) => (
                        <Badge
                          key={region}
                          variant="outline"
                          className="text-xs"
                        >
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-[var(--fn-background-page)]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${method.marketShare}%`,
                            backgroundColor: methodColors[method.id],
                          }}
                        />
                      </div>
                      <span className="text-xs text-[var(--fn-muted)]">
                        {method.marketShare.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
