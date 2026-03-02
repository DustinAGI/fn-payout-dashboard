export interface Product {
  slug: string;
  name: string;
  totalPaid: number;
  tradersPaid: number;
  avgPayout: number;
  avgProcessingHours: number;
  approvalRate: number;
  monthlyPayouts: number;
  description: string;
  rules: Rule[];
  accountSizes: string[];
  profitSplit: string;
  color: string;
}

export interface Rule {
  id: number;
  name: string;
  description: string;
  threshold: string;
}

export const products: Product[] = [
  {
    slug: "stellar",
    name: "Stellar Challenge",
    totalPaid: 142_300_000,
    tradersPaid: 38_420,
    avgPayout: 3_704,
    avgProcessingHours: 12,
    approvalRate: 95.1,
    monthlyPayouts: 4_200,
    description: "2-step evaluation with the highest profit split. Designed for consistent, disciplined traders.",
    accountSizes: ["$6,000", "$15,000", "$25,000", "$50,000", "$100,000", "$200,000"],
    profitSplit: "Up to 95%",
    color: "#3b82f6",
    rules: [
      { id: 1, name: "Daily Drawdown", description: "Maximum daily loss limit based on starting equity", threshold: "3% / 4% depending on phase" },
      { id: 2, name: "Maximum Drawdown", description: "Maximum overall loss limit from highest equity", threshold: "6% / 8% depending on phase" },
      { id: 3, name: "Profit Target", description: "Required profit to pass each phase", threshold: "8% Phase 1, 5% Phase 2" },
      { id: 4, name: "Minimum Trading Days", description: "Minimum calendar days with at least one trade", threshold: "5 days per phase" },
      { id: 5, name: "Consistency Rule", description: "No single day profit exceeds defined percentage of total", threshold: "Score must remain above threshold" },
      { id: 6, name: "One-Sided Betting", description: "Positions must show genuine market analysis, not pure directional gambling", threshold: "Reviewed at payout" },
      { id: 7, name: "News Trading", description: "High-impact news event restrictions during specified windows", threshold: "No positions 2 min before/after" },
      { id: 8, name: "Weekend Holding", description: "Positions must be closed before market weekend close", threshold: "All positions closed by Friday close" },
    ],
  },
  {
    slug: "express",
    name: "Express Challenge",
    totalPaid: 98_700_000,
    tradersPaid: 34_250,
    avgPayout: 2_881,
    avgProcessingHours: 16,
    approvalRate: 93.4,
    monthlyPayouts: 3_800,
    description: "1-step fast-track evaluation. Lower barrier to entry, get funded faster.",
    accountSizes: ["$6,000", "$15,000", "$25,000", "$50,000", "$100,000"],
    profitSplit: "Up to 80%",
    color: "#047857",
    rules: [
      { id: 1, name: "Daily Drawdown", description: "Maximum daily loss limit based on starting equity", threshold: "5%" },
      { id: 2, name: "Maximum Drawdown", description: "Maximum overall loss limit from highest equity", threshold: "10%" },
      { id: 3, name: "Profit Target", description: "Required profit to pass evaluation", threshold: "10%" },
      { id: 4, name: "Minimum Trading Days", description: "Minimum calendar days with at least one trade", threshold: "10 days" },
      { id: 5, name: "Consistency Rule", description: "No single day profit exceeds defined percentage of total", threshold: "Score must remain above threshold" },
      { id: 6, name: "One-Sided Betting", description: "Positions must show genuine market analysis", threshold: "Reviewed at payout" },
      { id: 7, name: "News Trading", description: "High-impact news event restrictions", threshold: "No positions 2 min before/after" },
      { id: 8, name: "Weekend Holding", description: "Positions must be closed before weekend", threshold: "All positions closed by Friday close" },
    ],
  },
  {
    slug: "evaluation",
    name: "Evaluation",
    totalPaid: 71_700_000,
    tradersPaid: 21_177,
    avgPayout: 3_386,
    avgProcessingHours: 14,
    approvalRate: 94.8,
    monthlyPayouts: 2_400,
    description: "Classic 2-step evaluation with balanced rules. The original FundedNext pathway.",
    accountSizes: ["$6,000", "$15,000", "$25,000", "$50,000", "$100,000", "$200,000"],
    profitSplit: "Up to 90%",
    color: "#7c3aed",
    rules: [
      { id: 1, name: "Daily Drawdown", description: "Maximum daily loss limit based on starting equity", threshold: "5%" },
      { id: 2, name: "Maximum Drawdown", description: "Maximum overall loss limit from highest equity", threshold: "10%" },
      { id: 3, name: "Profit Target", description: "Required profit to pass each phase", threshold: "10% Phase 1, 5% Phase 2" },
      { id: 4, name: "Minimum Trading Days", description: "Minimum calendar days with at least one trade", threshold: "5 days per phase" },
      { id: 5, name: "Consistency Rule", description: "No single day profit exceeds defined percentage", threshold: "Score must remain above threshold" },
      { id: 6, name: "One-Sided Betting", description: "Positions must show genuine market analysis", threshold: "Reviewed at payout" },
      { id: 7, name: "News Trading", description: "High-impact news event restrictions", threshold: "No positions 2 min before/after" },
      { id: 8, name: "Weekend Holding", description: "Positions must be closed before weekend", threshold: "All positions closed by Friday close" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
