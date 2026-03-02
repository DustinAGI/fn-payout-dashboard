"use client";

import { cn } from "@/lib/utils";

interface SegmentedToggleProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedToggleProps<T>) {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-[var(--fn-border)] bg-[var(--fn-background-page)] p-1",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-150",
            value === option.value
              ? "bg-white text-[var(--fn-foreground)] shadow-sm"
              : "text-[var(--fn-muted)] hover:text-[var(--fn-foreground)]"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
