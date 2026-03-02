export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  totalVolume: number;
  transactionCount: number;
  avgProcessingHours: number;
  availability: string[];
  marketShare: number;
  status: "active" | "coming-soon";
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "crypto-usdt",
    name: "USDT (TRC-20)",
    icon: "₮",
    totalVolume: 128_400_000,
    transactionCount: 42_300,
    avgProcessingHours: 8,
    availability: ["Global"],
    marketShare: 41.1,
    status: "active",
  },
  {
    id: "crypto-btc",
    name: "Bitcoin",
    icon: "₿",
    totalVolume: 72_100_000,
    transactionCount: 18_900,
    avgProcessingHours: 12,
    availability: ["Global"],
    marketShare: 23.1,
    status: "active",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    icon: "🏦",
    totalVolume: 58_300_000,
    transactionCount: 15_400,
    avgProcessingHours: 24,
    availability: ["BD", "AE", "NG", "IN", "PK", "TR", "EG", "MY"],
    marketShare: 18.7,
    status: "active",
  },
  {
    id: "rise",
    name: "Rise",
    icon: "↗",
    totalVolume: 38_200_000,
    transactionCount: 12_100,
    avgProcessingHours: 10,
    availability: ["BD", "IN", "PK", "NG", "KE"],
    marketShare: 12.2,
    status: "active",
  },
  {
    id: "payoneer",
    name: "Payoneer",
    icon: "P",
    totalVolume: 15_700_000,
    transactionCount: 5_147,
    avgProcessingHours: 18,
    availability: ["Global"],
    marketShare: 5.0,
    status: "active",
  },
];
