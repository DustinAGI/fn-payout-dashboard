import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data/mock-products";
import { formatCurrency, formatNumber } from "@/lib/format";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--fn-foreground)]">
          Products
        </h1>
        <p className="mt-1 text-sm text-[var(--fn-muted)]">
          Payout analytics by challenge type
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <Card className="border-[var(--fn-border)] p-6 transition-all duration-150 hover:border-[var(--fn-primary)] hover:shadow-md">
              <div className="flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-white font-bold text-lg"
                  style={{ backgroundColor: product.color }}
                >
                  {product.slug.charAt(0).toUpperCase()}
                </div>
                <Badge variant="secondary">{product.profitSplit}</Badge>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[var(--fn-foreground)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--fn-muted)] line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-[var(--fn-muted)]">Total Paid</div>
                  <div className="text-xl font-bold text-[var(--fn-foreground)]">
                    {formatCurrency(product.totalPaid)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[var(--fn-muted)]">Traders</div>
                  <div className="text-xl font-bold text-[var(--fn-foreground)]">
                    {formatNumber(product.tradersPaid)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[var(--fn-muted)]">Avg Payout</div>
                  <div className="text-lg font-semibold text-[var(--fn-foreground)]">
                    {formatCurrency(product.avgPayout, false)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[var(--fn-muted)]">Avg Time</div>
                  <div className="text-lg font-semibold text-[var(--fn-foreground)]">
                    {product.avgProcessingHours}h
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm font-medium text-[var(--fn-primary)]">
                View details
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
