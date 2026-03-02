import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { getProduct, products } from "@/lib/data/mock-products";
import { mockPayouts } from "@/lib/data/mock-payouts";
import { formatCurrency, formatNumber, formatDate, formatHours } from "@/lib/format";
import { ArrowLeft, CheckCircle2, Clock, XCircle } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const productPayouts = mockPayouts.filter((p) => p.product === slug);

  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      color: "text-[var(--fn-paid)]",
      bg: "bg-[var(--fn-paid-light)]",
    },
    processing: {
      icon: Clock,
      color: "text-[var(--fn-processing)]",
      bg: "bg-[var(--fn-processing-light)]",
    },
    denied: {
      icon: XCircle,
      color: "text-[var(--fn-denied)]",
      bg: "bg-[var(--fn-denied-light)]",
    },
  };

  const methodLabels: Record<string, string> = {
    "crypto-btc": "Bitcoin",
    "crypto-usdt": "USDT",
    "bank-transfer": "Bank Transfer",
    rise: "Rise",
    payoneer: "Payoneer",
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm text-[var(--fn-muted)] hover:text-[var(--fn-foreground)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-white font-bold text-xl"
          style={{ backgroundColor: product.color }}
        >
          {product.slug.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[var(--fn-foreground)]">
              {product.name}
            </h1>
            <Badge variant="secondary">{product.profitSplit}</Badge>
          </div>
          <p className="mt-1 text-sm text-[var(--fn-muted)]">
            {product.description}
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <KpiCard
          label="Total Paid"
          value={formatCurrency(product.totalPaid)}
          tooltip="Total payouts for this product"
        />
        <KpiCard
          label="Traders Paid"
          value={formatNumber(product.tradersPaid)}
          tooltip="Unique traders who received payouts"
        />
        <KpiCard
          label="Avg Payout"
          value={formatCurrency(product.avgPayout, false)}
          tooltip="Average payout amount"
        />
        <KpiCard
          label="Avg Time"
          value={`${product.avgProcessingHours}h`}
          tooltip="Average processing time"
        />
        <KpiCard
          label="Approval Rate"
          value={`${product.approvalRate}%`}
          tooltip="Percentage of payout requests approved"
        />
      </div>

      {/* Account Sizes */}
      <Card className="border-[var(--fn-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--fn-foreground)]">
          Account Sizes
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.accountSizes.map((size) => (
            <Badge key={size} variant="outline" className="text-sm">
              {size}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Rules */}
      <Card className="border-[var(--fn-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--fn-foreground)]">
          Rules
        </h2>
        <div className="mt-4 space-y-4">
          {product.rules.map((rule) => (
            <div
              key={rule.id}
              className="flex items-start gap-4 border-b border-[var(--fn-border)] pb-4 last:border-0 last:pb-0"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--fn-background-page)] text-sm font-medium text-[var(--fn-muted)]">
                {rule.id}
              </div>
              <div className="flex-1">
                <div className="font-medium text-[var(--fn-foreground)]">
                  {rule.name}
                </div>
                <div className="mt-0.5 text-sm text-[var(--fn-muted)]">
                  {rule.description}
                </div>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {rule.threshold}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Payouts Table */}
      <Card className="border-[var(--fn-border)] overflow-hidden">
        <div className="border-b border-[var(--fn-border)] px-6 py-4">
          <h2 className="text-lg font-semibold text-[var(--fn-foreground)]">
            Recent Payouts
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--fn-border)] bg-[var(--fn-background-page)]">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  ID
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Amount
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--fn-muted)]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--fn-border)]">
              {productPayouts.slice(0, 10).map((payout, index) => {
                const status = statusConfig[payout.status];
                const StatusIcon = status.icon;
                return (
                  <tr
                    key={payout.id}
                    className={
                      index % 2 === 0
                        ? "bg-[var(--fn-grid-row)]"
                        : "bg-[var(--fn-grid-row-striped)]"
                    }
                  >
                    <td className="px-6 py-4 text-sm text-[var(--fn-foreground)]">
                      {formatDate(payout.date)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[var(--fn-foreground)]">
                      {payout.id}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-[var(--fn-foreground)]">
                      {formatCurrency(payout.amount, false)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-[var(--fn-foreground)]">
                      {formatHours(payout.processingHours)}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--fn-foreground)]">
                      {methodLabels[payout.method]}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--fn-foreground)]">
                      {payout.region}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${status.bg}`}
                      >
                        <StatusIcon className={`h-3.5 w-3.5 ${status.color}`} />
                        <span className={`text-xs font-medium ${status.color}`}>
                          {payout.status.charAt(0).toUpperCase() +
                            payout.status.slice(1)}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
