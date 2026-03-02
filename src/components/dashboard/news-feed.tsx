"use client";

import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/format";
import { Newspaper, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  type: "rule-change" | "new-feature" | "policy-update" | "milestone";
}

interface NewsFeedProps {
  items: NewsItem[];
  title?: string;
}

const typeLabels: Record<NewsItem["type"], { label: string; color: string }> = {
  "rule-change": { label: "Rule", color: "bg-amber-100 text-amber-700" },
  "new-feature": { label: "New", color: "bg-blue-100 text-blue-700" },
  "policy-update": { label: "Policy", color: "bg-purple-100 text-purple-700" },
  milestone: { label: "Milestone", color: "bg-green-100 text-green-700" },
};

export function NewsFeed({ items, title = "Updates" }: NewsFeedProps) {
  return (
    <Card className="border-[var(--fn-border)]">
      <div className="flex items-center justify-between border-b border-[var(--fn-border)] px-6 py-4">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-[var(--fn-muted)]" />
          <h3 className="text-lg font-semibold text-[var(--fn-foreground)]">
            {title}
          </h3>
        </div>
        <Link
          href="/transparency"
          className="flex items-center gap-1 text-xs font-medium text-[var(--fn-primary)] hover:underline"
        >
          View all
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="divide-y divide-[var(--fn-border)]">
        {items.map((item) => {
          const typeInfo = typeLabels[item.type];
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 px-6 py-4 transition-colors hover:bg-[var(--fn-background-hover)]"
            >
              <span
                className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-xs font-medium ${typeInfo.color}`}
              >
                {typeInfo.label}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--fn-foreground)] truncate">
                  {item.title}
                </p>
                <p className="text-xs text-[var(--fn-muted)] mt-0.5">
                  {formatDate(item.date)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
