export interface Milestone {
  id: string;
  date: string;
  title: string;
  type: "rule-change" | "new-feature" | "policy-update" | "milestone";
}

export const milestones: Milestone[] = [
  {
    id: "MS-001",
    date: "2026-02-28",
    title: "$310M total payouts milestone reached",
    type: "milestone",
  },
  {
    id: "MS-002",
    date: "2026-02-15",
    title: "Consistency score threshold adjusted for Express Challenge",
    type: "rule-change",
  },
  {
    id: "MS-003",
    date: "2026-02-01",
    title: "Rise payment method now available in 5 countries",
    type: "new-feature",
  },
  {
    id: "MS-004",
    date: "2026-01-20",
    title: "XAU/USD leverage updated to 1:50",
    type: "rule-change",
  },
  {
    id: "MS-005",
    date: "2026-01-15",
    title: "90,000 traders paid milestone",
    type: "milestone",
  },
  {
    id: "MS-006",
    date: "2026-01-10",
    title: "Dispute resolution timeline reduced to 48 hours",
    type: "policy-update",
  },
  {
    id: "MS-007",
    date: "2025-12-15",
    title: "Weekend holding rule clarified",
    type: "rule-change",
  },
  {
    id: "MS-008",
    date: "2025-12-01",
    title: "Public payout dashboard launched",
    type: "new-feature",
  },
];

export interface SupportSLA {
  channel: string;
  responseTime: string;
  availability: string;
  priority: string;
}

export const supportSLAs: SupportSLA[] = [
  {
    channel: "Live Chat",
    responseTime: "Under 2 minutes",
    availability: "24/7",
    priority: "High",
  },
  {
    channel: "Email",
    responseTime: "Under 4 hours",
    availability: "24/7",
    priority: "Medium",
  },
  {
    channel: "Dashboard Ticket",
    responseTime: "Under 12 hours",
    availability: "24/7",
    priority: "Medium",
  },
  {
    channel: "Escalation",
    responseTime: "Under 24 hours",
    availability: "Business Days",
    priority: "Critical",
  },
];

export interface DisputeStep {
  step: number;
  title: string;
  description: string;
  timeframe: string;
}

export const disputeSteps: DisputeStep[] = [
  {
    step: 1,
    title: "Submit Dispute",
    description: "Open a dispute through your trader dashboard. Provide payout ID and detailed explanation.",
    timeframe: "Immediate",
  },
  {
    step: 2,
    title: "Initial Review",
    description: "Our payout team reviews the dispute and requests any additional documentation.",
    timeframe: "Within 48 hours",
  },
  {
    step: 3,
    title: "Investigation",
    description: "Full investigation of trading activity, rule compliance, and payout eligibility.",
    timeframe: "2-5 business days",
  },
  {
    step: 4,
    title: "Decision",
    description: "Written decision with detailed explanation. If approved, payout processed within 24 hours.",
    timeframe: "Within 7 days total",
  },
  {
    step: 5,
    title: "Appeal (Optional)",
    description: "If unsatisfied, request escalation to senior review team with additional evidence.",
    timeframe: "5 additional days",
  },
];
