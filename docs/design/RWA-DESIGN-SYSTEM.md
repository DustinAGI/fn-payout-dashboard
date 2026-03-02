# RWA.xyz Design System — Reverse Engineered
## For: payout.fundednext.com

*Extracted from app.rwa.xyz on 2026-03-02*

---

## 1. Typography

### Font Family
```css
--font-sans: "Lausanne", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

**Lausanne** is the primary typeface — a clean, geometric Swiss-style sans-serif from [Extraset](https://extraset.ch/typefaces/lausanne/). It's a premium font ($$$). 

**Alternative for FundedNext:** Inter, Geist, or DM Sans would give a similar feel without licensing costs.

### Type Scale
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `--text-xs` | 0.75rem (12px) | 1.33 | Labels, badges, timestamps |
| `--text-sm` | 0.875rem (14px) | 1.43 | Body text, table cells, nav items |
| `--text-base` | 1rem (16px) | 1.5 | Default body, descriptions |
| `--text-lg` | 1.125rem (18px) | 1.56 | Card titles, section subtitles |
| `--text-xl` | 1.25rem (20px) | 1.4 | Section headings |
| `--text-2xl` | 1.5rem (24px) | 1.33 | Page section titles |
| `--text-3xl` | 1.875rem (30px) | 1.2 | Large KPI values |
| `--text-4xl` | 2.25rem (36px) | 1.11 | Page titles |
| `--text-5xl` | 3rem (48px) | 1.0 | Hero numbers (rare) |

### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-thin` | 100 | — |
| `--font-weight-extralight` | 200 | — |
| `--font-weight-light` | 300 | Subtle labels |
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Nav items, button text, labels |
| `--font-weight-semibold` | 600 | KPI values, table headers |
| `--font-weight-bold` | 700 | Page titles, large metrics |
| `--font-weight-extrabold` | 800 | — |

### Letter Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tight` | -0.025em | Headings |
| `--tracking-wide` | 0.025em | Labels |
| `--tracking-wider` | 0.05em | Section headers, badges |
| `--tracking-widest` | 0.1em | Uppercase labels |

### Line Heights
| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.25 | Headings |
| `--leading-snug` | 1.375 | Subheadings |
| `--leading-normal` | 1.5 | Body text |
| `--leading-relaxed` | 1.625 | Descriptions |

---

## 2. Color System

### Brand Colors (Custom)
```css
/* Blues (Primary) */
--blue-50:  #eff6ff;
--blue-100: #dfebff;
--blue-200: #b9d4ff;
--blue-300: #90baff;
--blue-400: #5c97f7;
--blue-500: #3b82f6;  /* Primary blue */
--blue-600: #316ccd;
--blue-700: #2757a4;
--blue-800: #1e417b;
--blue-900: #142b52;

/* Grays */
--gray-50:  #f1f1f2;
--gray-100: #d0d0d3;
--gray-200: #b8b8bd;
--gray-300: #a1a1a7;
--gray-400: #898991;
--gray-500: #71717b;
--gray-600: #42424f;
--gray-700: #2b2b39;
--gray-800: #151525;
--gray-900: #101021;

/* Brand Grays (Slate-based) */
--brand-gray-50:  #f1f1f2;
--brand-gray-100: #f8fbff;
--brand-gray-200: #f0f5fe;
--brand-gray-300: #dae2f0;
--brand-gray-400: #98a7bd;
--brand-gray-500: #5a6f8f;
--brand-gray-600: #465873;
--brand-gray-700: #324157;
--brand-gray-800: #1e293c;
--brand-gray-900: #131e2e;
```

### Semantic Colors
```css
/* Backgrounds */
--background:    oklch(100% 0 0);       /* Pure white */
--background-01: #fff;                   /* White */
--background-02: #f8fbff;               /* Off-white blue tint */
--background-03: #f0f5fe;               /* Light blue wash */
--background-hover: #f8fbff;            /* Hover state */
--app-background: #f8fbff;              /* Page background */

/* Foregrounds */
--foreground: oklch(14.1% .005 285.823);  /* Near black: #14171c */
--black: #14171c;

/* Primary (Blue) */
--primary: oklch(62.3% .214 259.815);    /* ~#3b82f6 */
--primary-foreground: oklch(97% .014 254.604);  /* Light blue-white */

/* Secondary */
--secondary: oklch(96.7% .001 286.375);  /* Very light gray */
--secondary-foreground: oklch(21% .006 285.885);  /* Dark gray */

/* Muted */
--muted: oklch(96.7% .001 286.375);
--muted-foreground: oklch(55.2% .016 285.938);  /* Medium gray */

/* Destructive (Red) */
--destructive: oklch(57.7% .245 27.325);  /* ~#dc2626 */
--destructive-foreground: oklch(98.5% 0 0);

/* Borders */
--border: #dae2f0;
--color-border: #dae2f0;
--input: oklch(92% .004 286.32);

/* Special */
--dollar-green: #047857;           /* Money/positive */
--dollar-green-light: #daf3ec;     /* Money background */

/* Labels */
--label-light-blue: #dbeafe;
--label-dark-blue: #1e40af;

/* Data Grid */
--grid-row: #fff;
--grid-row-striped: #f8fbff;
--grid-row-active: #dfebff;
```

### Chart Colors (5-color palette)
```css
--chart-1: oklch(64.6% .222 41.116);   /* Orange */
--chart-2: oklch(60% .118 184.704);     /* Teal */
--chart-3: oklch(39.8% .07 227.392);    /* Dark blue-gray */
--chart-4: oklch(82.8% .189 84.429);    /* Amber/Gold */
--chart-5: oklch(76.9% .188 70.08);     /* Yellow-orange */
```

### Sidebar
```css
--sidebar: oklch(100% 0 0);             /* White */
--sidebar-foreground: #465873;           /* Muted blue-gray text */
--sidebar-primary: oklch(62.3% .214 259.815);  /* Blue (active items) */
--sidebar-primary-foreground: oklch(97% .014 254.604);  /* White on blue */
--sidebar-accent: oklch(96.7% .001 286.375);  /* Light gray hover */
--sidebar-accent-foreground: oklch(21% .006 285.885);  /* Dark text */
--sidebar-ring: oklch(62.3% .214 259.815);  /* Focus ring blue */
```

---

## 3. Spacing System

Base unit: `--spacing: 0.25rem` (4px)

Tailwind-based spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px

---

## 4. Border Radius

```css
--radius:     0.25rem  (4px)   /* Base */
--radius-xs:  0.125rem (2px)   /* Tiny elements */
--radius-sm:  0.25rem  (4px)   /* Buttons, inputs */
--radius-md:  0.375rem (6px)   /* Cards */
--radius-lg:  0.5rem   (8px)   /* Modals, larger cards */
--radius-xl:  0.75rem  (12px)  /* Containers */
--radius-2xl: 1rem     (16px)  /* Pills, badges */
```

---

## 5. Container Widths

```css
--container-xs:  20rem (320px)
--container-sm:  24rem (384px)
--container-md:  28rem (448px)
--container-lg:  32rem (512px)
--container-xl:  36rem (576px)
--container-2xl: 42rem (672px)
--container-3xl: 48rem (768px)
--container-4xl: 56rem (896px)
--container-5xl: 64rem (1024px)
--container-6xl: 72rem (1152px)
--container-7xl: 80rem (1280px)
```

### Breakpoints
```css
--breakpoint-lg:  64rem  (1024px)
--breakpoint-xl:  80rem  (1280px)
--breakpoint-2xl: 96rem  (1536px)
```

---

## 6. Animations & Transitions

```css
--default-transition-duration: 0.15s;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--ease-in: cubic-bezier(.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, .2, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
```

---

## 7. Icons

**Font Awesome 7 Pro** — Full suite including:
- Regular, Solid, Light, Thin
- Sharp variants (regular, solid, light, thin)
- Duotone variants
- Brands

**Usage pattern:** Primarily line-style icons at ~16-20px for navigation, 12-14px for inline indicators.

---

## 8. Component Library

### 8.1 Layout Shell
```
┌─────────────────────────────────────────────────────────┐
│ TOP BAR (fixed, ~56px height)                            │
│ [Logo] [Tagline] [Search ⌘K] [Feedback] [CTA] [Sign in]│
├─────────────────────────────────────────────────────────┤
│ TICKER BAR (optional, ~36px, scrolling marquee)          │
├─────────────────────────────────────────────────────────┤
│ ANNOUNCEMENT BANNER (dismissible, full-width, colored)   │
├──────────┬──────────────────────────────────────────────┤
│ SIDEBAR  │ MAIN CONTENT                                  │
│ ~240px   │ (fluid)                                       │
│ fixed    │                                               │
│ scrolls  │ [Breadcrumbs]                                 │
│ independently│ [Page Title + Description]                │
│          │ [KPI Cards Row]                               │
│          │ [Charts Section]                              │
│          │ [Data Table]                                  │
│          │ [Footer]                                      │
└──────────┴──────────────────────────────────────────────┘
```

### 8.2 Sidebar Navigation
**Sections:** Grouped by labeled headers (small, uppercase, muted gray)
**Item anatomy:** `[icon 20px] [label 14px medium] [optional NEW badge]`
**States:**
- Default: transparent bg, `--sidebar-foreground` text
- Hover: `--sidebar-accent` bg
- Active: `--sidebar-primary` bg (blue), white text + icon
- NEW badge: small pill, green/coral text

### 8.3 KPI Metric Cards
```
┌────────────────────────────────┐
│ Label Text  (ⓘ)                │  ← 14px, muted, optional tooltip
│                                │
│ $25.90B                        │  ← 28-32px, bold, --foreground
│ ▲ +7.00% from 30d ago         │  ← 12px, green/red + muted
└────────────────────────────────┘
```
- No visible card borders (borderless, separated by spacing)
- 4-6 cards per row depending on page
- Responsive: stack on mobile
- Tooltip (ⓘ) on labels needing definition
- Delta: ▲ green for positive, ▼ red for negative

### 8.4 Chart Section
**Header:** `[Title 20px bold]` ... `[Download btn] [⋯ overflow]`
**Filter row 1:** Segmented toggle (Distributed | Represented | All)
**Filter row 2:** Metric tabs (Total Value | Holders | Active Addresses | Transfer Volume)
**Optional:** Checkbox toggles (Include Stablecoins), Switch (Show % of Total), Dropdown (Group By)
**Chart:** Stacked area chart with color legend (right side, vertical)
**Range selector:** Mini brush chart below main chart for time range selection

### 8.5 Segmented Button Group (Toggle)
```css
/* Container */
display: inline-flex;
border: 1px solid var(--border);
border-radius: var(--radius-lg);
overflow: hidden;

/* Button - Default */
padding: 8px 16px;
font-size: 14px;
font-weight: 500;
color: var(--foreground);
background: transparent;

/* Button - Active */
background: var(--primary);  /* or dark/filled */
color: white;
```

### 8.6 Metric Tab Bar
Horizontal tabs, underline style for active:
- Active: red/dark underline, bold text
- Inactive: no underline, muted text
- Locked (🔒): lock icon prefix, same styling as inactive

### 8.7 Data Table
**Structure:**
| # | Entity (icon+name) | Metric 1 | Metric 2 | Metric 3 | Change | Market Share (bar) |
|---|---|---|---|---|---|---|

**Row anatomy:**
- Rank number (muted)
- Entity: circular logo (24-32px) + name (linked, 14px semibold) + optional sub-info
- Metrics: right-aligned numbers, formatted ($ + B/M/K)
- Change: colored ▲/▼ + percentage
- Market share: inline progress bar + percentage text
- Chain icons: small (16px) circular logos, multiple per row

**Table styling:**
- Alternating rows: `--grid-row` / `--grid-row-striped`
- Active/hover row: `--grid-row-active` (#dfebff)
- Header: sticky, muted text, uppercase labels
- Borders: subtle horizontal dividers (`--border`)

### 8.8 Asset Screener Card
```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo 48px]  Asset Name (bold 18px)     │ 30D APY  │ AUM       │
│              by Issuer (muted 14px)     │ --       │ $3.03B    │
│              [Category Pill]             │          │           │
│              Description preview...      │ INVESTORS│ REDEMPTION│
│                                         │ 33,905   │ Daily     │
│              [Visit Product] [Analytics]│          │           │
└──────────────────────────────────────────────────────────────────┘
```

### 8.9 Filter System (Asset Screener)
**Types used:**
1. **Preset pills** — apply multiple filters at once
2. **Search input** — text with magnifying glass icon
3. **Dropdown selectors** — `⊕ icon + "All X"` pattern, opens multi-select
4. **Segmented radio group** — single-select styled as pills ($1M+ | $10M+ | $100M+ | $1B+)
5. **Multi-select chip display** — shows selected item + `+ N more` overflow
6. **Range dropdown** — for yield ranges
7. **Sort dropdown** — `↕ sort icon + value`
8. **Clear filters** — `✕ Clear N filters` with dynamic count
9. **Result counter** — right-aligned `"113 assets"`

### 8.10 Announcement Banner
```css
width: 100%;
background: var(--destructive); /* or brand red/coral */
color: white;
padding: 12px 24px;
font-size: 14px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
/* Dismiss X button on right */
```

### 8.11 Donut/Pie Chart
Used for composition breakdowns (e.g., asset class distribution, network share)
- Positioned as companion chart (~30% width) alongside main area chart (~70%)
- Labels on slices with values
- Independent "Group By" dropdown

### 8.12 News Feed
Vertical list of linked headlines:
```
[Source icon] Headline text                          5 hours ago
```
- Clickable full-row links
- Relative timestamps
- "View All" link at bottom

### 8.13 Ticker Marquee
Horizontal auto-scrolling strip:
```
[Badge USYC] $1.8B ▲+4.39%  |  [Badge USDT] $145.2B ▲+0.12%
```
- Pause on hover
- Badge: rounded rectangle, light gray bg, dark text

---

## 9. Page Templates

### Template A: Asset Class Page (Stablecoins, Treasuries, etc.)
1. Page title + description
2. 4-6 KPI cards
3. Chart section with metric tabs + filters
4. Full data table with all assets in category

### Template B: Market Overview (Landing)
1. Hero KPI row (5 metrics)
2. Main chart (Total RWA Value) with time range selector
3. League table (Networks/Managers/Platforms tabs)
4. Donut chart (composition)
5. News feed
6. Asset table with investment tier filters ($0-100K, $100K-1M, etc.)

### Template C: Entity Page (Networks, Platforms)
1. Breadcrumbs
2. Page title + description + blog link
3. 6 KPI cards
4. Entity metrics chart with classification toggles
5. Entity data table with progress bar market share

### Template D: Asset Screener
1. Page title + BETA badge
2. Preset pills
3. Multi-row filter system
4. Sort + clear + count bar
5. Vertical card list results

---

## 10. Tech Stack (Inferred)

- **Framework:** Next.js (React) — based on routing patterns, SSR behavior
- **Styling:** Tailwind CSS v4 — CSS variables follow Tailwind convention exactly
- **Charts:** Likely Recharts or Nivo (React chart libraries)
- **Icons:** Font Awesome 7 Pro
- **UI Components:** shadcn/ui — CSS variable naming matches shadcn exactly (--primary, --card, --popover, --muted, --accent, --destructive, --sidebar-*)
- **Font:** Lausanne (custom) — needs licensing or substitute

---

## 11. Mapping to payout.fundednext.com

### RWA.xyz → FundedNext Payout Dashboard Mapping

| RWA.xyz Component | FundedNext Equivalent |
|---|---|
| Market Overview | Payout Dashboard Home |
| KPI Cards (Total Value, Holders...) | Total Payouts, Active Traders, Avg Payout, Success Rate |
| Stacked Area Chart (RWA Value over time) | Cumulative Payouts Over Time |
| Asset Class pages (Treasuries, Stablecoins) | Payout Categories (Phase 1, Phase 2, Scale-Up, etc.) |
| Asset Screener | Trader Payout Search/Filter |
| Networks page | Payment Methods / Processors |
| Data Table (assets with logos, metrics) | Payout Records (trader info, amount, status, method) |
| Ticker Marquee | Live Payout Feed / Recent Payouts |
| Segmented toggles (Distributed/Represented) | Payout Status (Pending/Processed/All) |
| Metric tabs (Total Value/Holders/Volume) | Metrics (Amount/Count/Average/Frequency) |
| Donut chart (composition) | Payout Distribution by Region/Account Type |
| News feed | Payout Milestones / Announcements |
| Login to Unlock (gated content) | Detailed Analytics (logged-in traders only) |

### Recommended Tech Stack for FundedNext
- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **shadcn/ui** (matches RWA.xyz's component architecture exactly)
- **Recharts** or **Tremor** (dashboard-optimized React charts)
- **Inter** or **Geist** font (free Lausanne alternative)
- **Lucide Icons** (free FA alternative, pairs with shadcn)

---

## 12. Screenshots Reference

All annotated screenshots saved in:
```
dogfood-output/rwa-xyz/screenshots/
├── landing.png           # Market Overview
├── landing-scroll1.png   # Market Overview (scrolled)
├── stablecoins.png       # Stablecoins asset class
├── us-treasuries.png     # U.S. Treasuries asset class
├── asset-screener.png    # Asset Screener with filters
└── networks.png          # Networks entity page
```
