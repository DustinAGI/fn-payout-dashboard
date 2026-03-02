"use client";

import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";

interface DonutDataItem {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutDataItem[];
  title: string;
  subtitle?: string;
}

export function DonutChart({ data, title, subtitle }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="border-[var(--fn-border)] p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[var(--fn-foreground)]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-[var(--fn-muted)]">{subtitle}</p>
        )}
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => formatCurrency(value, false)}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid var(--fn-border)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={(value) => {
                const item = data.find((d) => d.name === value);
                if (!item) return value;
                const percentage = ((item.value / total) * 100).toFixed(1);
                return (
                  <span className="text-sm text-[var(--fn-foreground)]">
                    {value} ({percentage}%)
                  </span>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
