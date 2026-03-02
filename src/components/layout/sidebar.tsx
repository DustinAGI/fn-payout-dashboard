"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Boxes,
  CreditCard,
  Search,
  Shield,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    href: "/products",
    icon: Boxes,
  },
  {
    label: "Methods",
    href: "/methods",
    icon: CreditCard,
  },
  {
    label: "Screener",
    href: "/screener",
    icon: Search,
  },
  {
    label: "Transparency",
    href: "/transparency",
    icon: Shield,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-[var(--fn-border)] bg-white transition-all duration-150",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b border-[var(--fn-border)] px-4">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--fn-primary)] text-white font-bold text-sm">
              FN
            </div>
            <span className="font-semibold text-[var(--fn-foreground)]">
              Payouts
            </span>
          </Link>
        )}
        {collapsed && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--fn-primary)] text-white font-bold text-sm mx-auto">
            FN
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                isActive
                  ? "bg-[var(--fn-primary)] text-white"
                  : "text-[var(--fn-muted)] hover:bg-[var(--fn-background-hover)] hover:text-[var(--fn-foreground)]",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[var(--fn-border)] p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--fn-muted)] transition-colors hover:bg-[var(--fn-background-hover)] hover:text-[var(--fn-foreground)]",
            collapsed && "justify-center px-2"
          )}
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 shrink-0 transition-transform duration-150",
              collapsed && "rotate-180"
            )}
          />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
