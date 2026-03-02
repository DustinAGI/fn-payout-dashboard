import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { Ticker } from "@/components/layout/ticker";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payout Analytics | FundedNext",
  description: "Real-time payout data and analytics for FundedNext traders. $312M+ paid to 93,000+ traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <TooltipProvider delayDuration={200}>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
              <Topbar />
              <Ticker />
              <main className="flex-1 overflow-auto bg-[var(--fn-background-page)]">
                <div className="mx-auto max-w-7xl px-6 py-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
