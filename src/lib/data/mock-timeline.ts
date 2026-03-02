export interface TimelineEntry {
  month: string;
  stellar: number;
  express: number;
  evaluation: number;
  total: number;
}

export const timelineData: TimelineEntry[] = [
  { month: "Mar 2024", stellar: 2_100_000, express: 1_400_000, evaluation: 1_200_000, total: 4_700_000 },
  { month: "Apr 2024", stellar: 2_800_000, express: 1_900_000, evaluation: 1_500_000, total: 6_200_000 },
  { month: "May 2024", stellar: 3_200_000, express: 2_300_000, evaluation: 1_800_000, total: 7_300_000 },
  { month: "Jun 2024", stellar: 3_600_000, express: 2_600_000, evaluation: 2_000_000, total: 8_200_000 },
  { month: "Jul 2024", stellar: 4_100_000, express: 3_000_000, evaluation: 2_200_000, total: 9_300_000 },
  { month: "Aug 2024", stellar: 4_500_000, express: 3_200_000, evaluation: 2_400_000, total: 10_100_000 },
  { month: "Sep 2024", stellar: 4_800_000, express: 3_500_000, evaluation: 2_600_000, total: 10_900_000 },
  { month: "Oct 2024", stellar: 5_200_000, express: 3_800_000, evaluation: 2_800_000, total: 11_800_000 },
  { month: "Nov 2024", stellar: 5_500_000, express: 4_100_000, evaluation: 2_900_000, total: 12_500_000 },
  { month: "Dec 2024", stellar: 5_800_000, express: 4_300_000, evaluation: 3_100_000, total: 13_200_000 },
  { month: "Jan 2025", stellar: 6_200_000, express: 4_600_000, evaluation: 3_200_000, total: 14_000_000 },
  { month: "Feb 2025", stellar: 6_500_000, express: 4_800_000, evaluation: 3_300_000, total: 14_600_000 },
  { month: "Mar 2025", stellar: 6_800_000, express: 5_000_000, evaluation: 3_400_000, total: 15_200_000 },
  { month: "Apr 2025", stellar: 7_100_000, express: 5_200_000, evaluation: 3_500_000, total: 15_800_000 },
  { month: "May 2025", stellar: 7_400_000, express: 5_400_000, evaluation: 3_600_000, total: 16_400_000 },
  { month: "Jun 2025", stellar: 7_800_000, express: 5_600_000, evaluation: 3_700_000, total: 17_100_000 },
  { month: "Jul 2025", stellar: 8_100_000, express: 5_800_000, evaluation: 3_800_000, total: 17_700_000 },
  { month: "Aug 2025", stellar: 8_400_000, express: 6_000_000, evaluation: 3_900_000, total: 18_300_000 },
  { month: "Sep 2025", stellar: 8_700_000, express: 6_200_000, evaluation: 4_000_000, total: 18_900_000 },
  { month: "Oct 2025", stellar: 9_000_000, express: 6_400_000, evaluation: 4_100_000, total: 19_500_000 },
  { month: "Nov 2025", stellar: 9_300_000, express: 6_600_000, evaluation: 4_200_000, total: 20_100_000 },
  { month: "Dec 2025", stellar: 9_600_000, express: 6_800_000, evaluation: 4_300_000, total: 20_700_000 },
  { month: "Jan 2026", stellar: 9_900_000, express: 7_000_000, evaluation: 4_400_000, total: 21_300_000 },
  { month: "Feb 2026", stellar: 10_200_000, express: 7_200_000, evaluation: 4_500_000, total: 21_900_000 },
];

export interface RegionData {
  name: string;
  totalPaid: number;
  traderCount: number;
  avgPayout: number;
  marketShare: number;
}

export const regionData: RegionData[] = [
  { name: "Bangladesh", totalPaid: 62_500_000, traderCount: 18_700, avgPayout: 3_342, marketShare: 20.0 },
  { name: "Nigeria", totalPaid: 46_800_000, traderCount: 14_200, avgPayout: 3_296, marketShare: 15.0 },
  { name: "India", totalPaid: 37_500_000, traderCount: 11_800, avgPayout: 3_178, marketShare: 12.0 },
  { name: "Pakistan", totalPaid: 31_200_000, traderCount: 9_400, avgPayout: 3_319, marketShare: 10.0 },
  { name: "UAE", totalPaid: 28_100_000, traderCount: 5_600, avgPayout: 5_018, marketShare: 9.0 },
  { name: "Turkey", totalPaid: 21_900_000, traderCount: 7_500, avgPayout: 2_920, marketShare: 7.0 },
  { name: "Egypt", totalPaid: 18_700_000, traderCount: 6_300, avgPayout: 2_968, marketShare: 6.0 },
  { name: "Indonesia", totalPaid: 15_600_000, traderCount: 5_800, avgPayout: 2_690, marketShare: 5.0 },
  { name: "Malaysia", totalPaid: 12_500_000, traderCount: 4_200, avgPayout: 2_976, marketShare: 4.0 },
  { name: "Philippines", totalPaid: 9_400_000, traderCount: 3_500, avgPayout: 2_686, marketShare: 3.0 },
];

export interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  affectedProducts: string[];
  type: "rule-change" | "new-feature" | "policy-update";
  effectiveDate: string;
  grandfathered: boolean;
}

export const changelogEntries: ChangelogEntry[] = [
  {
    id: "CL-010",
    date: "2026-02-15",
    title: "Consistency score threshold adjusted for Express Challenge",
    description: "The consistency score minimum has been adjusted from 60% to 55% for Express Challenge accounts. This change reflects updated analysis of trading patterns and aims to better align with realistic trading behavior. Existing active accounts are grandfathered under previous thresholds.",
    affectedProducts: ["Express Challenge"],
    type: "rule-change",
    effectiveDate: "2026-03-15",
    grandfathered: true,
  },
  {
    id: "CL-009",
    date: "2026-02-01",
    title: "New payment method: Rise",
    description: "Rise is now available as a payment method for payouts. Currently supported in Bangladesh, India, Pakistan, Nigeria, and Kenya. Average processing time: 10 hours.",
    affectedProducts: ["All Products"],
    type: "new-feature",
    effectiveDate: "2026-02-01",
    grandfathered: false,
  },
  {
    id: "CL-008",
    date: "2026-01-20",
    title: "Leverage adjustment on XAU/USD",
    description: "Maximum leverage on XAU/USD (Gold) changes from 1:100 to 1:50 across all products. This change is due to updated margin requirements from our execution broker. All new challenges purchased after February 1 will have the updated leverage. Existing active accounts are not affected.",
    affectedProducts: ["Stellar Challenge", "Express Challenge", "Evaluation"],
    type: "rule-change",
    effectiveDate: "2026-02-01",
    grandfathered: true,
  },
  {
    id: "CL-007",
    date: "2026-01-10",
    title: "Dispute resolution timeline reduced to 48 hours",
    description: "All payout disputes will now receive initial review within 48 hours of submission. Previously, the standard timeline was 72 hours. This improvement applies to all dispute channels (dashboard, email, support ticket).",
    affectedProducts: ["All Products"],
    type: "policy-update",
    effectiveDate: "2026-01-10",
    grandfathered: false,
  },
  {
    id: "CL-006",
    date: "2025-12-15",
    title: "Weekend holding rule clarification",
    description: "Clarified that all positions must be closed by the Friday market close time of the relevant instrument. Previously, the specific close time varied. The rule now explicitly references each instrument's Friday close schedule, available in the dashboard.",
    affectedProducts: ["Stellar Challenge", "Express Challenge", "Evaluation"],
    type: "rule-change",
    effectiveDate: "2026-01-01",
    grandfathered: false,
  },
  {
    id: "CL-005",
    date: "2025-12-01",
    title: "Payout dashboard launched",
    description: "The public payout analytics dashboard is now live. Traders and prospective traders can view aggregate payout data, processing times, approval rates, and payment method availability. Updated in real time.",
    affectedProducts: ["All Products"],
    type: "new-feature",
    effectiveDate: "2025-12-01",
    grandfathered: false,
  },
  {
    id: "CL-004",
    date: "2025-11-15",
    title: "Maximum lot size on indices reduced",
    description: "Maximum position size on index instruments changes from 20 lots to 15 lots per position. This aligns with updated execution broker margin requirements. Existing active accounts evaluated under purchase-date rules.",
    affectedProducts: ["Stellar Challenge", "Express Challenge"],
    type: "rule-change",
    effectiveDate: "2025-12-01",
    grandfathered: true,
  },
  {
    id: "CL-003",
    date: "2025-11-01",
    title: "Profit split increase for Stellar Challenge",
    description: "Maximum profit split for Stellar Challenge accounts increased from 90% to 95%. Applies to all new and existing funded accounts effective immediately.",
    affectedProducts: ["Stellar Challenge"],
    type: "rule-change",
    effectiveDate: "2025-11-01",
    grandfathered: false,
  },
  {
    id: "CL-002",
    date: "2025-10-15",
    title: "Support SLAs published",
    description: "Published response time commitments: Live chat — under 2 minutes. Email — under 4 hours. Dashboard ticket — under 12 hours. Escalation — under 24 hours.",
    affectedProducts: ["All Products"],
    type: "policy-update",
    effectiveDate: "2025-10-15",
    grandfathered: false,
  },
  {
    id: "CL-001",
    date: "2025-10-01",
    title: "Rule Change Protocol established",
    description: "FundedNext now publishes all rule changes with a minimum 30-day notice period for non-emergency changes. Emergency changes (risk/regulatory) take effect immediately with same-day notification. All changes logged in this public change log.",
    affectedProducts: ["All Products"],
    type: "policy-update",
    effectiveDate: "2025-10-01",
    grandfathered: false,
  },
];
