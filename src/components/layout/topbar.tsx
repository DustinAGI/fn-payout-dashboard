"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[var(--fn-border)] bg-white px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-[var(--fn-foreground)]">
          Payout Analytics
        </h1>
        <span className="text-xs text-[var(--fn-muted)]">
          Real-time data
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--fn-muted)]" />
          <Input
            type="search"
            placeholder="Search payouts..."
            className="w-64 pl-9 bg-[var(--fn-background-page)] border-[var(--fn-border)] text-sm"
          />
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/transparency">View Rules</Link>
        </Button>
      </div>
    </header>
  );
}
