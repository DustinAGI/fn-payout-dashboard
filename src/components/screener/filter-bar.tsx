"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SegmentedToggle } from "./segmented-toggle";
import { Search, X } from "lucide-react";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  productFilter: string;
  onProductFilterChange: (value: string) => void;
  amountFilter: string;
  onAmountFilterChange: (value: string) => void;
  methodFilter: string;
  onMethodFilterChange: (value: string) => void;
  regionFilter: string;
  onRegionFilterChange: (value: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  activeFilterCount: number;
  onClearFilters: () => void;
  resultCount: number;
}

const productOptions = [
  { value: "all", label: "All" },
  { value: "stellar", label: "Stellar" },
  { value: "express", label: "Express" },
  { value: "evaluation", label: "Evaluation" },
];

const amountOptions = [
  { value: "all", label: "All" },
  { value: "0-1000", label: "$0-1K" },
  { value: "1000-10000", label: "$1K-10K" },
  { value: "10000-50000", label: "$10K-50K" },
  { value: "50000+", label: "$50K+" },
];

const regions = [
  "All Regions",
  "Bangladesh",
  "Nigeria",
  "India",
  "Pakistan",
  "UAE",
  "Turkey",
  "Egypt",
  "Indonesia",
  "Malaysia",
  "Philippines",
];

const methods = [
  "All Methods",
  "Bitcoin",
  "USDT",
  "Bank Transfer",
  "Rise",
  "Payoneer",
];

const sortOptions = [
  "Newest",
  "Oldest",
  "Largest",
  "Smallest",
  "Fastest",
];

export function FilterBar({
  search,
  onSearchChange,
  productFilter,
  onProductFilterChange,
  amountFilter,
  onAmountFilterChange,
  methodFilter,
  onMethodFilterChange,
  regionFilter,
  onRegionFilterChange,
  sortBy,
  onSortByChange,
  activeFilterCount,
  onClearFilters,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="space-y-4 rounded-lg border border-[var(--fn-border)] bg-white p-4">
      {/* Row 1: Search + Product toggle */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--fn-muted)]" />
          <Input
            type="search"
            placeholder="Search by ID, trader, or region..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 bg-[var(--fn-background-page)] border-[var(--fn-border)]"
          />
        </div>
        <SegmentedToggle
          options={productOptions}
          value={productFilter}
          onChange={onProductFilterChange}
        />
      </div>

      {/* Row 2: Amount toggle + Dropdowns */}
      <div className="flex flex-wrap items-center gap-4">
        <SegmentedToggle
          options={amountOptions}
          value={amountFilter}
          onChange={onAmountFilterChange}
        />

        <Select value={methodFilter} onValueChange={onMethodFilterChange}>
          <SelectTrigger className="w-40 bg-[var(--fn-background-page)] border-[var(--fn-border)]">
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent>
            {methods.map((method) => (
              <SelectItem key={method} value={method}>
                {method}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={regionFilter} onValueChange={onRegionFilterChange}>
          <SelectTrigger className="w-40 bg-[var(--fn-background-page)] border-[var(--fn-border)]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortByChange}>
          <SelectTrigger className="w-32 bg-[var(--fn-background-page)] border-[var(--fn-border)]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Row 3: Clear filters + Result count */}
      <div className="flex items-center justify-between border-t border-[var(--fn-border)] pt-4">
        {activeFilterCount > 0 ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-[var(--fn-muted)] hover:text-[var(--fn-foreground)]"
          >
            <X className="mr-1 h-4 w-4" />
            Clear {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
          </Button>
        ) : (
          <div />
        )}
        <span className="text-sm text-[var(--fn-muted)]">
          {resultCount} payout{resultCount !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
