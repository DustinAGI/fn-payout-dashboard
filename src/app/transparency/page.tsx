"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/data/mock-products";
import { changelogEntries } from "@/lib/data/mock-timeline";
import { supportSLAs, disputeSteps } from "@/lib/data/mock-milestones";
import { formatDate } from "@/lib/format";
import {
  FileText,
  History,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const typeColors = {
  "rule-change": "bg-amber-100 text-amber-700",
  "new-feature": "bg-blue-100 text-blue-700",
  "policy-update": "bg-purple-100 text-purple-700",
};

export default function TransparencyPage() {
  const [activeTab, setActiveTab] = useState("rules");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--fn-foreground)]">
          Transparency Hub
        </h1>
        <p className="mt-1 text-sm text-[var(--fn-muted)]">
          Full visibility into rules, changes, and processes
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
          <TabsTrigger value="rules" className="gap-2">
            <FileText className="h-4 w-4" />
            Rules
          </TabsTrigger>
          <TabsTrigger value="changelog" className="gap-2">
            <History className="h-4 w-4" />
            Change Log
          </TabsTrigger>
          <TabsTrigger value="dispute" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Dispute Process
          </TabsTrigger>
          <TabsTrigger value="slas" className="gap-2">
            <Clock className="h-4 w-4" />
            Support SLAs
          </TabsTrigger>
        </TabsList>

        {/* Rules Tab */}
        <TabsContent value="rules" className="mt-6 space-y-6">
          <p className="text-sm text-[var(--fn-muted)]">
            Complete rule sets for each product. These rules are visible before
            purchase and apply to all traders equally.
          </p>

          {products.map((product) => (
            <Card key={product.slug} className="border-[var(--fn-border)] overflow-hidden">
              <div
                className="flex items-center gap-4 border-b border-[var(--fn-border)] px-6 py-4"
                style={{ backgroundColor: `${product.color}10` }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-white font-bold"
                  style={{ backgroundColor: product.color }}
                >
                  {product.slug.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--fn-foreground)]">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant="secondary">{product.profitSplit}</Badge>
                    <span className="text-xs text-[var(--fn-muted)]">
                      {product.accountSizes.length} account sizes
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {product.rules.map((rule) => (
                    <div
                      key={rule.id}
                      className="rounded-lg border border-[var(--fn-border)] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[var(--fn-background-page)] text-xs font-medium text-[var(--fn-muted)]">
                          {rule.id}
                        </div>
                        <div>
                          <h4 className="font-medium text-[var(--fn-foreground)]">
                            {rule.name}
                          </h4>
                          <p className="mt-1 text-sm text-[var(--fn-muted)]">
                            {rule.description}
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {rule.threshold}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Change Log Tab */}
        <TabsContent value="changelog" className="mt-6 space-y-6">
          <p className="text-sm text-[var(--fn-muted)]">
            All rule changes are published with at least 30 days notice (except
            emergency risk/regulatory changes). Each entry includes the rationale
            and effective date.
          </p>

          <div className="space-y-4">
            {changelogEntries.map((entry) => (
              <Card key={entry.id} className="border-[var(--fn-border)] p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--fn-background-page)]">
                      <History className="h-5 w-5 text-[var(--fn-muted)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-1.5 py-0.5 text-xs font-medium ${typeColors[entry.type]}`}
                        >
                          {entry.type === "rule-change"
                            ? "Rule Change"
                            : entry.type === "new-feature"
                              ? "New Feature"
                              : "Policy Update"}
                        </span>
                        {entry.grandfathered && (
                          <Badge variant="outline" className="text-xs">
                            Grandfathered
                          </Badge>
                        )}
                      </div>
                      <h3 className="mt-2 font-semibold text-[var(--fn-foreground)]">
                        {entry.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--fn-muted)]">
                        {entry.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--fn-muted)]">
                        <span>Announced: {formatDate(entry.date)}</span>
                        <span>Effective: {formatDate(entry.effectiveDate)}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {entry.affectedProducts.map((product) => (
                          <Badge
                            key={product}
                            variant="secondary"
                            className="text-xs"
                          >
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[var(--fn-muted)]">
                    {entry.id}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Dispute Process Tab */}
        <TabsContent value="dispute" className="mt-6 space-y-6">
          <p className="text-sm text-[var(--fn-muted)]">
            Clear, structured dispute resolution process. Every trader has the
            right to dispute a payout decision and receive a written response.
          </p>

          <Card className="border-[var(--fn-border)] p-6">
            <h3 className="text-lg font-semibold text-[var(--fn-foreground)]">
              Dispute Resolution Steps
            </h3>

            <div className="mt-6 space-y-0">
              {disputeSteps.map((step, index) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--fn-primary)] text-white font-bold">
                      {step.step}
                    </div>
                    {index < disputeSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[var(--fn-border)] my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-[var(--fn-foreground)]">
                        {step.title}
                      </h4>
                      <Badge variant="outline">{step.timeframe}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-[var(--fn-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-[var(--fn-border)] p-6 bg-[var(--fn-paid-light)]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[var(--fn-paid)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--fn-paid)]">
                  Commitment to Fair Resolution
                </h4>
                <p className="mt-1 text-sm text-[var(--fn-paid)]">
                  Every dispute receives a written decision with detailed
                  explanation. If your payout is approved on dispute, it will be
                  processed within 24 hours.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Support SLAs Tab */}
        <TabsContent value="slas" className="mt-6 space-y-6">
          <p className="text-sm text-[var(--fn-muted)]">
            Published response time commitments for all support channels. These
            are targets we hold ourselves accountable to.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {supportSLAs.map((sla) => (
              <Card key={sla.channel} className="border-[var(--fn-border)] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--fn-foreground)]">
                      {sla.channel}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--fn-muted)]">
                      {sla.availability}
                    </p>
                  </div>
                  <Badge
                    variant={
                      sla.priority === "High"
                        ? "default"
                        : sla.priority === "Critical"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {sla.priority}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[var(--fn-primary)]" />
                  <span className="text-xl font-bold text-[var(--fn-foreground)]">
                    {sla.responseTime}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <Card className="border-[var(--fn-border)] p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-[var(--fn-processing)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--fn-foreground)]">
                  Escalation Path
                </h4>
                <p className="mt-1 text-sm text-[var(--fn-muted)]">
                  If your issue is not resolved within the stated SLA, you can
                  request escalation to a senior team member. Escalated tickets
                  receive priority handling within 24 hours.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
