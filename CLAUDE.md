# CLAUDE.md — Agent Instructions

## Project: payout.fundednext.com

A public analytics dashboard showcasing FundedNext's payout track record. Inspired by app.rwa.xyz's design system and architecture.

## Brand Context

**Territory:** "You always know where you stand."
**Archetype:** The Engineer — precision, transparency, reliability, restraint, utility.
**Voice:** Straight, clear, informed. No hype. No performative emotion.

Read `docs/brand/` for the full brand strategy. Read `docs/SPEC.md` for the complete dashboard specification. Read `docs/design/RWA-DESIGN-SYSTEM.md` for the reverse-engineered design tokens from app.rwa.xyz.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Charts:** Recharts (with shadcn chart components)
- **Icons:** Lucide React
- **Font:** Inter (via next/font/google)
- **Deployment:** Vercel

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with sidebar + topbar
│   ├── page.tsx            # Home / Payout Overview
│   ├── products/
│   │   └── [slug]/page.tsx # Per-product payout pages
│   ├── methods/
│   │   └── page.tsx        # Payment methods
│   ├── screener/
│   │   └── page.tsx        # Payout screener (filterable)
│   └── transparency/
│       └── page.tsx        # Rules, change log, dispute process
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx     # Left navigation
│   │   ├── topbar.tsx      # Top bar with search + actions
│   │   └── ticker.tsx      # Live payout ticker marquee
│   ├── dashboard/
│   │   ├── kpi-card.tsx    # KPI metric card component
│   │   ├── kpi-row.tsx     # Row of KPI cards
│   │   ├── area-chart.tsx  # Stacked area chart
│   │   ├── donut-chart.tsx # Donut/pie chart
│   │   ├── league-table.tsx # Ranked entity table
│   │   ├── payout-feed.tsx # Live payout feed/ticker
│   │   └── news-feed.tsx   # Milestones/announcements
│   ├── screener/
│   │   ├── filter-bar.tsx  # Multi-row filter system
│   │   ├── payout-card.tsx # Individual payout result card
│   │   └── segmented-toggle.tsx
│   └── ui/                 # shadcn/ui primitives
├── lib/
│   ├── data/
│   │   ├── mock-payouts.ts # Realistic mock payout data
│   │   ├── mock-products.ts
│   │   └── mock-methods.ts
│   └── utils.ts
└── styles/
    └── globals.css         # Tailwind + custom properties
```

## Design Tokens (from RWA.xyz, adapted for FundedNext)

```css
/* In globals.css */
:root {
  /* FundedNext semantic colors */
  --fn-paid: #047857;
  --fn-paid-light: #daf3ec;
  --fn-processing: #d97706;
  --fn-processing-light: #fef3c7;
  --fn-denied: #dc2626;
  --fn-denied-light: #fee2e2;
  
  /* Backgrounds (from RWA.xyz) */
  --background: #ffffff;
  --background-page: #f8fbff;
  --background-hover: #f0f5fe;
  
  /* Borders */
  --border: #dae2f0;
  
  /* Text */
  --foreground: #14171c;
  --muted: #5a6f8f;
  
  /* Primary accent */
  --primary: #3b82f6;
  
  /* Data grid */
  --grid-row: #ffffff;
  --grid-row-striped: #f8fbff;
  --grid-row-active: #dfebff;
}
```

## Design Quality Standards

This is a PREMIUM dashboard. Think Bloomberg terminal meets Stripe's documentation.

1. **Pixel-perfect spacing** — Use Tailwind's spacing scale consistently. 4px base unit.
2. **Typography hierarchy** — Large bold KPI numbers, medium labels, small muted context.
3. **Color = meaning** — Green for paid, amber for processing, red for denied. Never decorative color.
4. **White space** — Generous. Confidence through breathing room.
5. **Animations** — Subtle. 150ms transitions. Counter animations on KPI numbers.
6. **Responsive** — Sidebar collapses on mobile. Cards stack. Tables scroll horizontally.
7. **No placeholder text** — Use realistic mock data. Real product names (Stellar, Express, Evaluation). Real-looking amounts.

## Mock Data Guidelines

Generate realistic-looking data:
- Total paid: ~$300M+ across 93,000+ traders
- Products: Stellar Challenge, Express Challenge, Evaluation
- Payment methods: Crypto (BTC, USDT), Bank Transfer, Rise (fintech)
- Regions: Bangladesh, UAE, Nigeria, India, Pakistan, Turkey, Egypt, Indonesia, Malaysia
- Average payout: $2,000-$5,000
- Processing time: 8-24 hours average
- Approval rate: ~94%

## Anti-Patterns (BANNED)

- ❌ No "GET FUNDED NOW" or aggressive CTAs
- ❌ No 🔥🚀💰 emoji
- ❌ No "We're proud/excited/thrilled"
- ❌ No stock photos or lifestyle imagery
- ❌ No dark mode with neon glow
- ❌ No countdown timers
- ❌ No competitor mentions
- ❌ No decorative gradients

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Lint
```

## When Done

Commit with descriptive messages. Push to main. The Vercel deployment will auto-trigger.
