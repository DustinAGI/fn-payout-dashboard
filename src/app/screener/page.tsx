"use client";

import { useState, useMemo } from "react";
import { FilterBar } from "@/components/screener/filter-bar";
import { PayoutCard } from "@/components/screener/payout-card";
import { mockPayouts } from "@/lib/data/mock-payouts";

const methodNameToId: Record<string, string> = {
  Bitcoin: "crypto-btc",
  USDT: "crypto-usdt",
  "Bank Transfer": "bank-transfer",
  Rise: "rise",
  Payoneer: "payoneer",
};

export default function ScreenerPage() {
  const [search, setSearch] = useState("");
  const [productFilter, setProductFilter] = useState("all");
  const [amountFilter, setAmountFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("All Methods");
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredPayouts = useMemo(() => {
    let results = [...mockPayouts];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.id.toLowerCase().includes(searchLower) ||
          p.traderId.toLowerCase().includes(searchLower) ||
          p.region.toLowerCase().includes(searchLower)
      );
    }

    // Product filter
    if (productFilter !== "all") {
      results = results.filter((p) => p.product === productFilter);
    }

    // Amount filter
    if (amountFilter !== "all") {
      results = results.filter((p) => {
        switch (amountFilter) {
          case "0-1000":
            return p.amount < 1000;
          case "1000-10000":
            return p.amount >= 1000 && p.amount < 10000;
          case "10000-50000":
            return p.amount >= 10000 && p.amount < 50000;
          case "50000+":
            return p.amount >= 50000;
          default:
            return true;
        }
      });
    }

    // Method filter
    if (methodFilter !== "All Methods") {
      const methodId = methodNameToId[methodFilter];
      if (methodId) {
        results = results.filter((p) => p.method === methodId);
      }
    }

    // Region filter
    if (regionFilter !== "All Regions") {
      results = results.filter((p) => p.region === regionFilter);
    }

    // Sort
    results.sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "Largest":
          return b.amount - a.amount;
        case "Smallest":
          return a.amount - b.amount;
        case "Fastest":
          return a.processingHours - b.processingHours;
        default:
          return 0;
      }
    });

    return results;
  }, [search, productFilter, amountFilter, methodFilter, regionFilter, sortBy]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (search) count++;
    if (productFilter !== "all") count++;
    if (amountFilter !== "all") count++;
    if (methodFilter !== "All Methods") count++;
    if (regionFilter !== "All Regions") count++;
    if (sortBy !== "Newest") count++;
    return count;
  }, [search, productFilter, amountFilter, methodFilter, regionFilter, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setProductFilter("all");
    setAmountFilter("all");
    setMethodFilter("All Methods");
    setRegionFilter("All Regions");
    setSortBy("Newest");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--fn-foreground)]">
          Payout Screener
        </h1>
        <p className="mt-1 text-sm text-[var(--fn-muted)]">
          Search and filter payout records
        </p>
      </div>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        productFilter={productFilter}
        onProductFilterChange={setProductFilter}
        amountFilter={amountFilter}
        onAmountFilterChange={setAmountFilter}
        methodFilter={methodFilter}
        onMethodFilterChange={setMethodFilter}
        regionFilter={regionFilter}
        onRegionFilterChange={setRegionFilter}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        activeFilterCount={activeFilterCount}
        onClearFilters={clearFilters}
        resultCount={filteredPayouts.length}
      />

      <div className="space-y-4">
        {filteredPayouts.length === 0 ? (
          <div className="rounded-lg border border-[var(--fn-border)] bg-white p-12 text-center">
            <p className="text-sm text-[var(--fn-muted)]">
              No payouts match your filters. Try adjusting your search criteria.
            </p>
          </div>
        ) : (
          filteredPayouts.map((payout) => (
            <PayoutCard key={payout.id} payout={payout} />
          ))
        )}
      </div>
    </div>
  );
}
