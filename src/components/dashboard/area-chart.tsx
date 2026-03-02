"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Brush,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";

interface DataPoint {
  month: string;
  stellar: number;
  express: number;
  evaluation: number;
  total: number;
}

interface PayoutAreaChartProps {
  data: DataPoint[];
  title?: string;
}

const chartConfig = {
  stellar: {
    label: "Stellar",
    color: "#3b82f6",
  },
  express: {
    label: "Express",
    color: "#047857",
  },
  evaluation: {
    label: "Evaluation",
    color: "#7c3aed",
  },
} satisfies ChartConfig;

export function PayoutAreaChart({ data, title = "Cumulative Payouts" }: PayoutAreaChartProps) {
  return (
    <Card className="p-6 border-[var(--fn-border)]">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--fn-foreground)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--fn-muted)]">
          Monthly payouts by product type over time
        </p>
      </div>

      <ChartContainer config={chartConfig} className="h-[350px] w-full">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="fillStellar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillExpress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#047857" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#047857" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillEvaluation" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--fn-border)" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--fn-muted)", fontSize: 12 }}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--fn-muted)", fontSize: 12 }}
            tickMargin={8}
            tickFormatter={(value) => formatCurrency(value)}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(value) => value}
                formatter={(value) => (
                  <span className="font-medium">
                    {formatCurrency(value as number, false)}
                  </span>
                )}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="stellar"
            stackId="1"
            stroke="#3b82f6"
            fill="url(#fillStellar)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="express"
            stackId="1"
            stroke="#047857"
            fill="url(#fillExpress)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="evaluation"
            stackId="1"
            stroke="#7c3aed"
            fill="url(#fillEvaluation)"
            strokeWidth={2}
          />
          <Brush
            dataKey="month"
            height={30}
            stroke="var(--fn-border)"
            fill="var(--fn-background-page)"
            tickFormatter={(value) => value}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
