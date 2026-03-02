# payout.fundednext.com — Dashboard Specification
## RWA.xyz Design System × FundedNext Brand Strategy

*This spec maps the reverse-engineered RWA.xyz architecture to FundedNext's brand positioning ("You always know where you stand"), The Engineer archetype, and the systemic clarity territory.*

---

## Why RWA.xyz Is The Right Reference

RWA.xyz and FundedNext's payout dashboard share the same DNA:
- **Data IS the product** — not marketing, not lifestyle imagery
- **Trust through infrastructure** — dashboards, live counters, verifiable data
- **The Engineer archetype** — precision, restraint, utility, no hype
- **Systemic proof over claims** — "Here's the data. Verify it yourself."

RWA.xyz is essentially doing for tokenized assets what FundedNext needs to do for payouts: making the system visible.

---

## Brand Alignment: Design Principles

From the Brand Voice doc, Section 07 (Visual Identity):

| Brand Principle | RWA.xyz Pattern | Payout Dashboard Implementation |
|---|---|---|
| **Information density over decoration** | KPI cards, data tables, charts — zero stock photos | Every pixel serves a payout data point. No hero banners. No lifestyle imagery. |
| **Structure communicates trust** | Clean grids, clear hierarchy, sidebar + main content | Fixed sidebar nav, consistent card grid, logical flow from overview → detail |
| **Data as visual identity** | Live counters, progress bars, status indicators | Live payout counter, processing time gauges, approval rates — these ARE the brand |
| **Restrained color usage** | Neutral base, blue primary, green/red for data meaning | FundedNext palette with color = meaning only (green=paid, amber=processing, red=denied) |
| **Typography as authority** | Lausanne/clean sans-serif, generous sizes, clear hierarchy | Inter or Geist, large KPI numbers, readable body text |
| **White space as confidence** | Generous spacing, information breathes | No cramming. FN doesn't need to convince — the data speaks. |

---

## Page Architecture

### Page 1: Payout Overview (Home)
*Maps to: RWA.xyz Market Overview*

**KPI Cards (top row, 5 metrics):**
```
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ Total Paid   │ This Month   │ Avg Process  │ Traders Paid │ Approval     │
│ $XXX.XXM     │ $X.XM        │ XX hours     │ XX,XXX       │ XX.X%        │
│ ▲ +X% m/m    │ ▲ +X% m/m    │ ▼ improved   │ ▲ +X% m/m    │              │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```

**Voice alignment:** No "We're proud to have paid..." — just the number. "$300M paid to traders. The number speaks." (Brand Voice, Celebration tone)

**Main Chart: Cumulative Payouts Over Time**
*Maps to: RWA.xyz Total RWA Value stacked area chart*
- Stacked area chart showing payouts by product type (Stellar, Express, Evaluation)
- Time range selector (brush chart below)
- Group By dropdown: Product | Region | Payment Method
- Metric tabs: Total Amount | Count | Average Size

**League Table: Top Payment Methods/Regions**
*Maps to: RWA.xyz Networks league table*
- Segmented toggle: By Region | By Method | By Product
- Table with rank, entity, total paid, count, avg time, market share (progress bar)

**Live Payout Feed**
*Maps to: RWA.xyz Ticker Marquee*
- Scrolling ticker of recent anonymized payouts: "[Trader #XXXX] $X,XXX via [method] — XX hours"
- This is the "Public Data Layer" from Commitment 6 in the brand positioning doc

**News/Milestones Section**
*Maps to: RWA.xyz News feed*
- Milestone announcements: "$300M milestone hit", "New payment method added"
- Rule change log entries with dates (Commitment 2: Rule Change Protocol)

---

### Page 2: Payout Products
*Maps to: RWA.xyz Asset Class pages (Stablecoins, Treasuries)*

One page per challenge type (Stellar, Express, Evaluation, etc.):

**KPI Cards:**
- Total Paid (this product)
- Active Funded Traders
- Avg Payout Size
- Avg Processing Time
- Payout Frequency

**Chart Section:**
- Metric tabs: Payout Volume | Count | Avg Size | Processing Time
- Stacked area chart over time
- Donut chart: distribution by region or tier

**Data Table:**
- Anonymized payout records
- Columns: Date | Amount | Processing Time | Method | Status | Region
- Sortable, filterable

---

### Page 3: Payment Methods
*Maps to: RWA.xyz Networks page*

**KPI Cards:**
- Total Methods Available
- Fastest Method (avg time)
- Most Used Method
- Total Processed Volume

**Chart: Processing Time by Method**
- Bar chart comparing average processing times
- Or stacked area showing volume through each method over time

**Entity Table:**
- Payment method icon + name
- Volume processed
- Avg processing time
- Transaction count
- Availability by region
- Market share (progress bar)

---

### Page 4: Payout Screener (Trader View)
*Maps to: RWA.xyz Asset Screener*

**For public visitors exploring FundedNext's payout track record:**

**Filter System:**
- Search (by date range, amount range)
- Product type (segmented radio: Stellar | Express | Evaluation | All)
- Amount range (segmented: $0-1K | $1K-10K | $10K-50K | $50K+)
- Payment method (dropdown multi-select)
- Region (dropdown multi-select)
- Sort by: Newest | Largest | Fastest Processing

**Results: Card list** (like RWA.xyz Asset Screener cards)
```
┌──────────────────────────────────────────────────────────────────┐
│ [Product Icon]  Payout #XXXXX          │ AMOUNT    │ PROCESSED  │
│                 Stellar Challenge       │ $12,450   │ 14 hours   │
│                 [Region Badge]          │           │            │
│                 March 1, 2026           │ METHOD    │ STATUS     │
│                                        │ Crypto    │ ✅ Complete │
└──────────────────────────────────────────────────────────────────┘
```

---

### Page 5: Transparency Hub
*This is unique to FundedNext — no RWA.xyz equivalent needed*
*Directly implements Brand Positioning Commitments 1-6*

**Sub-sections:**
1. **Rules** — Full rule set per product, visible before purchase (Commitment 1)
2. **Change Log** — Published rule changes with dates, rationale, effective dates (Commitment 2)
3. **Dispute Process** — Step-by-step dispute resolution flow (Commitment 3)
4. **Support SLAs** — Published response time commitments (Commitment 5)
5. **Aggregate Data** — Denial/approval ratios, processing time distributions (Commitment 6)

---

## Visual Identity Mapping

### Color Palette (FundedNext × RWA.xyz patterns)

RWA.xyz uses blue primary on white. FundedNext should use its own brand colors but follow the same structural approach:

```css
/* Semantic colors — meaning, not decoration */
--fn-paid:        #047857;  /* Green — completed payouts */
--fn-paid-light:  #daf3ec;  /* Green bg for positive metrics */
--fn-processing:  #d97706;  /* Amber — in-progress */  
--fn-denied:      #dc2626;  /* Red — denied/flagged */
--fn-neutral:     #14171c;  /* Near-black text */

/* Backgrounds — clean, structured, professional */
--fn-bg:          #f8fbff;  /* Page background (same as RWA.xyz) */
--fn-card:        #ffffff;  /* Card surfaces */
--fn-border:      #dae2f0;  /* Borders/dividers */

/* Primary — FundedNext brand accent (replace with actual FN color) */
--fn-primary:     #3b82f6;  /* Blue (placeholder — use FN brand blue) */
```

### Typography
```css
/* Match RWA.xyz's Lausanne feel with a free alternative */
--fn-font: "Inter", ui-sans-serif, system-ui, sans-serif;
/* Or "Geist" for a more modern feel */
```

### Component Reuse from RWA.xyz

| RWA.xyz Component | Payout Dashboard Use | Voice Alignment |
|---|---|---|
| KPI Card (value + delta + tooltip) | Payout metrics | Fact first. Number speaks. |
| Stacked Area Chart + brush selector | Payout volume over time | Show the mechanism, not just the outcome |
| Segmented Toggle (3-way) | Product/Region/Method filter | Clear, structured filtering |
| League Table with progress bars | Payment method comparison | Data as visual identity |
| Asset Screener filter system | Payout record search | Every filter serves a purpose |
| Ticker Marquee | Live payout feed | Track record in real-time |
| Announcement Banner | Rule changes, milestones | Fact first, context second |
| Lock/Gated content pattern | Detailed analytics (logged-in traders) | Freemium depth |
| Donut/Pie chart | Distribution breakdowns | Composition at a glance |
| Breadcrumbs | Navigation context | "You always know where you stand" — even in navigation |

---

## Anti-Patterns (from Brand Voice doc)

The dashboard MUST NOT have:
- ❌ "GET FUNDED NOW!!!" CTAs
- ❌ Stock photos of traders at screens
- ❌ 🔥🚀💰 emoji anywhere
- ❌ "We're proud to announce..." language
- ❌ Motivational quotes
- ❌ Testimonial carousels with headshots
- ❌ Dark mode with neon glow
- ❌ Countdown timers or artificial urgency
- ❌ "Unlike other firms..." competitor comparisons

The dashboard MUST have:
- ✅ Live, verifiable numbers
- ✅ "Here's the data. Verify it yourself." energy
- ✅ Same data, same process, same for every trader
- ✅ Rules visible before purchase
- ✅ Change log with dates and rationale
- ✅ Process transparency (dispute steps, SLAs)
- ✅ The restraint of confidence — white space, no cramming

---

## Tech Stack (Recommended)

```
Framework:    Next.js 15 (App Router)
Styling:      Tailwind CSS v4
Components:   shadcn/ui (matches RWA.xyz architecture exactly)
Charts:       Recharts or Tremor (dashboard-optimized)
Icons:        Lucide (free, pairs with shadcn)
Font:         Inter (free Lausanne alternative)
Hosting:      Vercel (payout.fundednext.com subdomain)
Data:         API from FundedNext backend (or static JSON for MVP)
```

---

## Implementation Phases

### Phase 1: MVP (1-2 weeks)
- Layout shell (sidebar + topbar + main content)
- Home page with KPI cards + main chart + live feed
- Static/demo data
- Deploy to Vercel

### Phase 2: Product Pages (1 week)
- Challenge type pages with per-product metrics
- Payment methods page
- Payout screener with filter system

### Phase 3: Transparency Hub (1 week)
- Rules display per product
- Change log
- Dispute process flow
- Support SLAs

### Phase 4: Live Data (depends on API)
- Connect to FundedNext backend
- Real-time payout counter
- Live feed
- Aggregate statistics

---

## The Brand Test

Before shipping any page, apply the Brand Voice quality checks:

1. **The ban check:** Any banned words? ("excited", "promise", "family", "revolutionary")
2. **The fact-first check:** Does the first thing a trader sees contain data?
3. **The mechanism check:** Does it show HOW, not just WHAT?
4. **The engineer check:** Does it look engineered, or marketed?
5. **The clarity check:** Does the trader know where they stand?

If all five pass, ship it.
