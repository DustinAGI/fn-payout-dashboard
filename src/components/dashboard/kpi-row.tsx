import { KpiCard } from "./kpi-card";

interface KpiData {
  label: string;
  value: string;
  delta?: {
    value: string;
    positive: boolean;
    period?: string;
  };
  tooltip?: string;
}

interface KpiRowProps {
  data: KpiData[];
}

export function KpiRow({ data }: KpiRowProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {data.map((kpi, index) => (
        <KpiCard
          key={index}
          label={kpi.label}
          value={kpi.value}
          delta={kpi.delta}
          tooltip={kpi.tooltip}
        />
      ))}
    </div>
  );
}
