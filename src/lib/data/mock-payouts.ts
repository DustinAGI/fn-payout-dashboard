export interface Payout {
  id: string;
  traderId: string;
  amount: number;
  product: "stellar" | "express" | "evaluation";
  method: "crypto-btc" | "crypto-usdt" | "bank-transfer" | "rise" | "payoneer";
  region: string;
  status: "completed" | "processing" | "denied";
  processingHours: number;
  date: string;
  reason?: string;
}

const regions = [
  "Bangladesh", "UAE", "Nigeria", "India", "Pakistan",
  "Turkey", "Egypt", "Indonesia", "Malaysia", "Philippines",
  "Kenya", "South Africa", "Vietnam", "Thailand", "Morocco"
];

const firstNames = [
  "Ahmed", "Muhammed", "Fatima", "Oluwaseun", "Raj",
  "Aisha", "Ibrahim", "Chioma", "Yusuf", "Wei",
  "Sanjay", "Hassan", "Priya", "Abdul", "Grace"
];

function generatePayouts(count: number): Payout[] {
  const payouts: Payout[] = [];
  const products: Payout["product"][] = ["stellar", "express", "evaluation"];
  const methods: Payout["method"][] = ["crypto-btc", "crypto-usdt", "bank-transfer", "rise", "payoneer"];
  const statuses: Payout["status"][] = ["completed", "completed", "completed", "completed", "completed",
    "completed", "completed", "completed", "completed", "processing", "processing", "denied"];

  for (let i = 0; i < count; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const product = products[Math.floor(Math.random() * products.length)];
    const baseAmount = product === "stellar" ? 3500 : product === "express" ? 1800 : 5200;
    const amount = Math.round(baseAmount + (Math.random() * baseAmount * 2));

    payouts.push({
      id: `PAY-${String(100000 + i).slice(1)}`,
      traderId: `TR-${String(Math.floor(Math.random() * 90000) + 10000)}`,
      amount,
      product,
      method: methods[Math.floor(Math.random() * methods.length)],
      region: regions[Math.floor(Math.random() * regions.length)],
      status,
      processingHours: status === "completed" ? Math.round(4 + Math.random() * 20) : Math.round(1 + Math.random() * 8),
      date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      reason: status === "denied" ? "One-sided betting pattern detected" : undefined,
    });
  }

  return payouts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const mockPayouts = generatePayouts(100);

export const recentPayouts = mockPayouts
  .filter(p => p.status === "completed")
  .slice(0, 20)
  .map(p => ({
    ...p,
    traderName: firstNames[Math.floor(Math.random() * firstNames.length)],
  }));
