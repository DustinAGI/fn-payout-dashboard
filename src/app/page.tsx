"use client";

import { useState } from "react";
import { KpiRow } from "@/components/dashboard/kpi-row";
import { PayoutAreaChart } from "@/components/dashboard/area-chart";
import { LeagueTable } from "@/components/dashboard/league-table";
import { NewsFeed } from "@/components/dashboard/news-feed";
import { SegmentedToggle } from "@/components/screener/segmented-toggle";
import { timelineData, regionData } from "@/lib/data/mock-timeline";
import { paymentMethods } from "@/lib/data/mock-methods";
import { products } from "@/lib/data/mock-products";
import { milestones } from "@/lib/data/mock-milestones";

const kpiData = [
  {
    label: "Total Paid",
    value: "$312.7M",
    delta: { value: "+8.2%", positive: true, period: "30d ago" },
    tooltip: "Total amount paid to all traders since inception",
  },
  {
    label: "This Month",
    value: "$18.4M",
    delta: { value: "+12.1%", positive: true, period: "prev month" },
    tooltip: "Total payouts processed in the current month",
  },
  {
    label: "Avg Processing",
    value: "14h",
    delta: { value: "-2h", positive: true, period: "30d avg" },
    tooltip: "Average time from payout request to completion",
  },
  {
    label: "Traders Paid",
    value: "93,847",
    delta: { value: "+3.4%", positive: true, period: "30d ago" },
    tooltip: "Total unique traders who received at least one payout",
  },
  {
    label: "Approval Rate",
    value: "94.2%",
    tooltip: "Percentage of payout requests approved",
  },
];

type LeagueView = "method" | "region" | "product";

const leagueOptions: { value: LeagueView; label: string }[] = [
  { value: "method", label: "By Method" },
  { value: "region", label: "By Region" },
  { value: "product", label: "By Product" },
];

const methodIcons: Record<string, string> = {
  "crypto-usdt": "₮",
  "crypto-btc": "₿",
  "bank-transfer": "🏦",
  rise: "↗",
  payoneer: "P",
};

export default function Home() {
  const [leagueView, setLeagueView] = useState<LeagueView>("method");

  const methodLeagueData = paymentMethods.map((method, index) => ({
    rank: index + 1,
    name: method.name,
    icon: methodIcons[method.id] || "?",
    volume: method.totalVolume,
    count: method.transactionCount,
    avgTime: method.avgProcessingHours,
    marketShare: method.marketShare,
  }));

  const regionLeagueData = regionData.map((region, index) => ({
    rank: index + 1,
    name: region.name,
    icon: region.name.slice(0, 2).toUpperCase(),
    volume: region.totalPaid,
    count: region.traderCount,
    avgTime: 14,
    marketShare: region.marketShare,
  }));

  const productLeagueData = products.map((product, index) => ({
    rank: index + 1,
    name: product.name,
    icon: product.slug.charAt(0).toUpperCase(),
    volume: product.totalPaid,
    count: product.tradersPaid,
    avgTime: product.avgProcessingHours,
    marketShare: (product.totalPaid / 312700000) * 100,
  }));

  const leagueData =
    leagueView === "method"
      ? methodLeagueData
      : leagueView === "region"
        ? regionLeagueData
        : productLeagueData;

  const leagueTitle =
    leagueView === "method"
      ? "Top Payment Methods"
      : leagueView === "region"
        ? "Top Regions"
        : "Top Products";

  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <KpiRow data={kpiData} />

      {/* Main Chart */}
      <PayoutAreaChart data={timelineData} />

      {/* League Table + News Feed */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <SegmentedToggle
              options={leagueOptions}
              value={leagueView}
              onChange={setLeagueView}
            />
          </div>
          <LeagueTable title={leagueTitle} data={leagueData} type={leagueView} />
        </div>
        <div>
          <NewsFeed items={milestones} title="Updates" />
        </div>
      </div>
    </div>
  );
}
