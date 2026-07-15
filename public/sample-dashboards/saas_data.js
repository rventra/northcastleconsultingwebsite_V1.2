/* Halcyon Software Group — shared sample data spec
 * Single source of truth for the NCC Software Dashboard Pack mockups.
 * Every dashboard reads from SAAS; filter changes must produce distinct,
 * realistic values across periods, ICP segments, contract-size bands, and
 * cohort vintages.
 *
 * Target: hypothetical $25M-ARR enterprise B2B software company with mixed
 * subscription + professional services revenue, ~105 customers, mid-market
 * focus, modest growth, capital constrained (founder/management owned).
 * NOT a VC hyper-growth profile.
 */

const SAAS = {
  meta: {
    target: "Halcyon Software Group",
    profile: "Enterprise B2B software · subscription + professional services",
    arrTTM: 25.0,
    customers: 315,
    employees: 140,
    ownership: "Founder / management owned",
    sampleNote: "Illustrative · Sample Data"
  },

  // ─── PERIODS ─────────────────────────────────────────────────────────────
  // Each period aggregates a 4-quarter window of the fact table.
  // TTM = Q2-25 → Q1-26. FY2022 exists in facts as the prior-year base only.
  periodQuarters: {
    TTM:    ["Q2-25","Q3-25","Q4-25","Q1-26"],
    FY2025: ["Q1-25","Q2-25","Q3-25","Q4-25"],
    FY2024: ["Q1-24","Q2-24","Q3-24","Q4-24"],
    FY2023: ["Q1-23","Q2-23","Q3-23","Q4-23"],
    FY2022: ["Q1-22","Q2-22","Q3-22","Q4-22"]
  },

  // 13 display quarters for trend charts (facts carry 17, incl. FY2022 base)
  displayQuarters: ["Q1-23","Q2-23","Q3-23","Q4-23","Q1-24","Q2-24","Q3-24","Q4-24","Q1-25","Q2-25","Q3-25","Q4-25","Q1-26"],

  // ─── SEGMENTS (ICP) ──────────────────────────────────────────────────────
  segments: {
    Enterprise: { label: "Enterprise",  story: "Healthy cohort — expansion-dominant, NDR climbing, near-zero logo churn" },
    Midmarket:  { label: "Mid-market",  story: "Flat cohort — expansion and attrition roughly offset; growth is new logos" },
    SMB:        { label: "SMB",         story: "Broken cohort — contraction and churn compound; net ARR decline by TTM" }
  },

  // ─── CONTRACT SIZE BANDS ─────────────────────────────────────────────────
  sizes: {
    L: { label: ">$100K ACV" },
    M: { label: "$25-100K ACV" },
    S: { label: "<$25K ACV" }
  },

  // ─── COHORT VINTAGES — new-logo retention curves ─────────────────────────
  // Revenue held (index, initial cohort ARR = 100) at N years since acquisition.
  // Arrays truncated by vintage age. Initial cohort ARR ($M) from fact table
  // new-logo flows, per segment per acquisition FY.
  vintages: {
    curves: {
      Enterprise: {
        FY2022: [100, 105, 111, 118, 124],
        FY2023: [100, 106, 113, 121],
        FY2024: [100, 107, 115],
        FY2025: [100, 108]
      },
      Midmarket: {
        FY2022: [100, 99, 97, 95, 93],
        FY2023: [100, 98, 96, 94],
        FY2024: [100, 98, 95],
        FY2025: [100, 97]
      },
      SMB: {
        FY2022: [100, 89, 75, 60, 47],
        FY2023: [100, 86, 70, 54],
        FY2024: [100, 81, 62],
        FY2025: [100, 74]
      }
    },
    initialARR: {
      "Enterprise": {
        "FY2022": 0.627,
        "FY2023": 0.771,
        "FY2024": 0.914,
        "FY2025": 1.057
      },
      "Midmarket": {
        "FY2022": 0.72,
        "FY2023": 0.657,
        "FY2024": 0.713,
        "FY2025": 0.675
      },
      "SMB": {
        "FY2022": 0.7,
        "FY2023": 0.578,
        "FY2024": 0.456,
        "FY2025": 0.334
      }
    }
  },

  // ─── SAMPLE CUSTOMER PANEL — expansion decomposition ─────────────────────
  // Top customers by TTM ARR. Expansion $ split into price-up / seat-up /
  // product-add. psShare = professional services as % of total account revenue.
  // PS-heavy accounts expand on price only — product-add collapses.
  customers: [
    { name: "Ardent Logistics Group",     seg: "Enterprise", size: "L", arrK: 1650, expK: 210, split: { price: 0.18, seat: 0.34, product: 0.48 }, psShare: 12 },
    { name: "Corvus Financial",           seg: "Enterprise", size: "L", arrK: 1480, expK: 185, split: { price: 0.15, seat: 0.40, product: 0.45 }, psShare: 18 },
    { name: "Bluepeak Utilities",         seg: "Enterprise", size: "L", arrK: 1320, expK: 85,  split: { price: 0.62, seat: 0.30, product: 0.08 }, psShare: 55 },
    { name: "Stonebridge Insurance",      seg: "Enterprise", size: "L", arrK: 1210, expK: 160, split: { price: 0.20, seat: 0.42, product: 0.38 }, psShare: 15 },
    { name: "Helix Manufacturing",        seg: "Enterprise", size: "M", arrK: 480,  expK: 55,  split: { price: 0.25, seat: 0.45, product: 0.30 }, psShare: 22 },
    { name: "Nordwind Freight",           seg: "Midmarket",  size: "L", arrK: 420,  expK: 48,  split: { price: 0.30, seat: 0.38, product: 0.32 }, psShare: 25 },
    { name: "Cardinal Claims Services",   seg: "Midmarket",  size: "L", arrK: 385,  expK: 34,  split: { price: 0.58, seat: 0.34, product: 0.08 }, psShare: 60 },
    { name: "Silverline Media",           seg: "Midmarket",  size: "M", arrK: 165,  expK: 18,  split: { price: 0.35, seat: 0.45, product: 0.20 }, psShare: 20 },
    { name: "Ravenscroft Legal",          seg: "Midmarket",  size: "M", arrK: 140,  expK: 12,  split: { price: 0.42, seat: 0.40, product: 0.18 }, psShare: 30 },
    { name: "Pinnacle Foods Distribution",seg: "Midmarket",  size: "M", arrK: 120,  expK: 9,   split: { price: 0.40, seat: 0.35, product: 0.25 }, psShare: 15 },
    { name: "Quill & Co",                 seg: "SMB",        size: "M", arrK: 95,   expK: 4,   split: { price: 0.70, seat: 0.25, product: 0.05 }, psShare: 10 },
    { name: "Beacon Property Group",      seg: "SMB",        size: "S", arrK: 40,   expK: 1.5, split: { price: 0.85, seat: 0.15, product: 0.00 }, psShare: 5 }
  ],

  // Period scaling for the customer panel (TTM = 1.00 by definition)
  customerPeriodScale: { TTM: 1.00, FY2025: 0.94, FY2024: 0.78, FY2023: 0.62 },

  // ─── CONTRACTION REASON MIX — share of contraction $ by segment ──────────
  // pricing = pushed back on renewal uplift / negotiated down
  // competition = partial displacement by competitor
  // sunset = no longer needed / project ended / descoped
  // oob = customer went out of business / acquired away
  contractionReasons: {
    Enterprise: { pricing: 0.16, competition: 0.34, sunset: 0.40, oob: 0.10 },
    Midmarket:  { pricing: 0.30, competition: 0.30, sunset: 0.26, oob: 0.14 },
    SMB:        { pricing: 0.36, competition: 0.14, sunset: 0.20, oob: 0.30 }
  },
  // Period tilt on the pricing share (renewal-uplift pushback grew over time)
  contractionPeriodTilt: { TTM: 1.10, FY2025: 1.05, FY2024: 0.95, FY2023: 0.85 },

  // ─── STUCK-TIER METRICS — Tab 2 tiles ────────────────────────────────────
  // Per segment per period. ALL is computed at render time as the true
  // ARR-weighted average via SAAS.query() revenue weights — never 1.00.
  stuckTiers: {
    // % of new-logo ARR signed 4+ quarters ago still active today
    newLogoRetention: {
      Enterprise: { TTM: 97, FY2025: 96, FY2024: 95, FY2023: 94 },
      Midmarket:  { TTM: 88, FY2025: 89, FY2024: 90, FY2023: 91 },
      SMB:        { TTM: 71, FY2025: 74, FY2024: 79, FY2023: 84 }
    },
    // % of expansion $ that persisted at the following renewal
    expansionPersistence: {
      Enterprise: { TTM: 95, FY2025: 94, FY2024: 93, FY2023: 92 },
      Midmarket:  { TTM: 84, FY2025: 84, FY2024: 85, FY2023: 85 },
      SMB:        { TTM: 58, FY2025: 62, FY2024: 67, FY2023: 71 }
    },
    // % of segment ARR sitting in at-risk accounts (late renewal, declining usage)
    atRiskShare: {
      Enterprise: { TTM: 3, FY2025: 3, FY2024: 4, FY2023: 4 },
      Midmarket:  { TTM: 10, FY2025: 9, FY2024: 9, FY2023: 8 },
      SMB:        { TTM: 31, FY2025: 27, FY2024: 22, FY2023: 18 }
    }
  },
  // Contract-size multipliers for the stuck-tier tiles. ALL key is the
  // ARR-weighted average of the three bands (L 0.52 / M 0.33 / S 0.15 at TTM),
  // NOT 1.00 — no band collapses onto ALL.
  stuckSizeMult: {
    retention:   { ALL: 1.006, L: 1.04, M: 1.00, S: 0.90 },
    persistence: { ALL: 1.004, L: 1.05, M: 1.00, S: 0.86 },
    atRisk:      { ALL: 0.988, L: 0.80, M: 1.00, S: 1.62 }
  },
  // Retention-curve tilt by contract size (multiplier applied to the gain/loss
  // away from 100). ALL = ARR-weighted average of bands, not 1.00.
  vintageSizeTilt: {
    gain: { ALL: 1.02, L: 1.12, M: 1.00, S: 0.72 },
    loss: { ALL: 0.97, L: 0.80, M: 1.00, S: 1.35 }
  },

  // ─── DATA-QUALITY CHECKS — ARR Performance Bridge analysis stack ────────
  dataChecks: [
    { id: 1,  area: "Customer master canonicalization", check: "Single canonical customer ID across CRM / billing / GL", threshold: "<2% of ARR unmatched", status: "warn", detail: "9 customers appear under 2+ name variants between QuickBooks and the CRM; subsidiaries billed separately" },
    { id: 2,  area: "Contract dates populated", check: "Start / end / renewal / auto-renew terms structured for every active contract", threshold: "100% of active contracts", status: "warn", detail: "Terms live in executed PDFs; ~60% keyed into the contract spreadsheet, rest read manually at renewal" },
    { id: 3,  area: "MRR-to-ARR reconciliation", check: "Mixed monthly / quarterly / annual billing normalized to one ARR definition", threshold: "ARR schedule ties to billing within 0.5%", status: "fail", detail: "Subscription schedule maintained by hand in Excel; monthly and quarterly billers annualized inconsistently" },
    { id: 4,  area: "Multi-year deal amortization", check: "Multi-year TCV recognized ratably — not front-loaded into booking-period ARR", threshold: "100% of multi-year deals", status: "warn", detail: "3 of 7 multi-year deals carry full TCV in the year-one line of the schedule" },
    { id: 5,  area: "Deal-level expansion decomposition", check: "Expansion $ split into price-up vs seat-up vs product-add at the deal line", threshold: "≥90% of expansion $", status: "fail", detail: "Upsells booked as a single amended invoice line — no component split captured" },
    { id: 6,  area: "Contraction reason coding", check: "Downgrades categorized: pricing / competition / no-longer-needed / out-of-business", threshold: "100% of contraction events", status: "fail", detail: "No reason field exists; downgrade context lives in account-manager email threads" },
    { id: 7,  area: "Churn reason capture", check: "Lost-logo reason recorded at offboarding with a structured code", threshold: "100% of churned logos", status: "warn", detail: "Post-2024 exits captured in CRM notes free-text; earlier exits undocumented" },
    { id: 8,  area: "Cohort acquisition dates", check: "First-contract date populated per customer — no placeholder-date pollution", threshold: "100% of customers", status: "warn", detail: "11 long-tenured customers default to the 2019 system-migration date" },
    { id: 9,  area: "Segment and size tagging", check: "ICP segment + ACV band maintained on every account", threshold: "100% of accounts", status: "warn", detail: "Segment tag exists in CRM only; not carried into billing, so finance cuts are manual" },
    { id: 10, area: "Subscription vs PS revenue split", check: "Revenue-type tag at invoice line — subscription vs professional services", threshold: "≥99% of invoice lines", status: "warn", detail: "Split inferred from item descriptions; ~8% of lines are mixed-scope invoices" },
    { id: 11, area: "Revenue-to-billings tie-out", check: "Deferred revenue roll-forward reconciles billings to recognized revenue", threshold: "Ties monthly within 0.5%", status: "fail", detail: "No roll-forward maintained; deferred balance trued up annually at review" },
    { id: 12, area: "Renewal event log", check: "Renewal outcomes captured with pricing — uplift asked vs realized", threshold: "≥24 months of renewal events", status: "fail", detail: "Renewals processed as continued billing; no event record, no uplift history" }
  ],

  // ─── ACTION ITEMS — work NCC executes, Portco contact for data access ────
  actionItems: [
    { id: "A1", action: "Stand up ARR schedule normalizing all billing frequencies", owner: "Portco Finance", weeks: 3, cost_K: 9,  priority: "Critical", unblocks: [3, 4],  lever: "ARR credibility" },
    { id: "A2", action: "Extract contract terms from executed PDFs into a structured register", owner: "Portco Admin + Finance", weeks: 4, cost_K: 10, priority: "Critical", unblocks: [2, 12], lever: "Renewal visibility" },
    { id: "A3", action: "Build customer master dedup table (CRM / billing / GL)", owner: "Portco Finance + IT", weeks: 2, cost_K: 5,  priority: "Critical", unblocks: [1, 9],  lever: "Every cut" },
    { id: "A4", action: "Recode trailing-8-quarter expansion events into price / seat / product components", owner: "Portco Finance + Sales Ops", weeks: 3, cost_K: 7,  priority: "High", unblocks: [5],  lever: "Expansion quality" },
    { id: "A5", action: "Implement contraction and churn reason taxonomy; backfill 8 quarters", owner: "Portco Customer Success", weeks: 2, cost_K: 4,  priority: "High", unblocks: [6, 7], lever: "Churn defensibility" },
    { id: "A6", action: "Tag every invoice line subscription vs professional services", owner: "Portco Finance (bookkeeper)", weeks: 2, cost_K: 3,  priority: "High", unblocks: [10], lever: "Revenue quality" },
    { id: "A7", action: "Build deferred revenue roll-forward tying billings to recognized revenue", owner: "Portco Finance", weeks: 3, cost_K: 6,  priority: "High", unblocks: [11], lever: "Cash conversion" },
    { id: "A8", action: "Populate cohort acquisition dates from first-invoice history", owner: "Portco Finance", weeks: 1, cost_K: 2,  priority: "Medium", unblocks: [8],  lever: "Cohort math" }
  ],

  // ─── FULL CHECK UNIVERSE — the software-pack master library ──────────────
  // Checks 1-12 above serve this ARR Performance Bridge analysis. The library
  // below completes the 22-check master spec across the software dashboard
  // pack; these serve other analyses and render dimmed in the universe panel.
  checkUniverse: [
    { id: 13, area: "Billings-to-cash lag capture",       check: "Invoice date → cash date captured per invoice", status: "warn", usedIn: "Cash conversion analysis — Billings-to-cash waterfall" },
    { id: 14, area: "PS project margin at engagement level", check: "Services cost tracked per engagement, not per department-month", status: "fail", usedIn: "Services economics analysis — PS margin bridge" },
    { id: 15, area: "PS-to-subscription attach tracking", check: "Services engagements linked to the subscriptions they seed or expand", status: "fail", usedIn: "Services economics analysis — Attach funnel chart" },
    { id: 16, area: "Renewal calendar completeness",      check: "Every active contract visible on a forward renewal calendar", status: "warn", usedIn: "Renewal risk analysis — Renewal calendar heatmap" },
    { id: 17, area: "Pipeline-to-bookings history",       check: "Opportunity stage history retained for conversion analysis", status: "warn", usedIn: "Bookings quality analysis — Conversion trend chart" },
    { id: 18, area: "Discount approval log",              check: "Discounts off list captured with approver and reason", status: "fail", usedIn: "Pricing power analysis — Discount waterfall" },
    { id: 19, area: "Usage telemetry per account",        check: "Product usage metrics tied to customer ID monthly", status: "fail", usedIn: "Product stickiness analysis — Usage cohort chart" },
    { id: 20, area: "CAC by acquisition channel",         check: "Sales and marketing cost allocated to logo source", status: "warn", usedIn: "Go-to-market efficiency analysis — CAC payback chart" },
    { id: 21, area: "AR aging by customer",               check: "Receivables aged per customer with dispute flags", status: "pass", usedIn: "Cash conversion analysis — DSO trend chart" },
    { id: 22, area: "Rev-rec policy documentation",       check: "ASC 606 treatment documented per contract type", status: "warn", usedIn: "Revenue quality analysis — Rev-rec waterfall" }
  ],

  // ─── PALETTE (match NCC pack) ────────────────────────────────────────────
  palette: {
    navy: "#1E2761", navyDeep: "#121A47", gold: "#C9A227", goldLite: "#E6C95B",
    slate: "#475569", slateLite: "#94A3B8", bg: "#F8FAFC", mist: "#EEF2FF",
    border: "#E5E7EB", white: "#FFFFFF", red: "#B22234", green: "#2C5F2D",
    amber: "#B07A00"
  },

  // ─── GRANULAR FACT TABLE (153 rows: 17 quarters × 3 segments × 3 bands) ──
  // Q1-22 → Q1-26. FY2022 rows exist as the prior-year base for FY2023 math
  // and to give the trailing-NDR series a full 13-quarter display window.
  // Flows reconcile by construction: close = open + newL + exp − contr − churn
  // (the rounded close of quarter N is the open of quarter N+1 — $0 gap at
  // every aggregation).
  facts: [
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"L", open:4.2495, newL:0.1004, exp:0.0852, contr:0.0107, churn:0.0129, close:4.4115, cust:8, deals:1, psRev:0.4632, psMargin:24.0, deferred:1.0808, billings:1.6039},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"M", open:0.9806, newL:0.0344, exp:0.0167, contr:0.0034, churn:0.0041, close:1.0242, cust:12, deals:2, psRev:0.1075, psMargin:24.0, deferred:0.2509, billings:0.3723},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"S", open:0.2179, newL:0.0086, exp:0.0027, contr:0.0012, churn:0.0014, close:0.2266, cust:10, deals:2, psRev:0.0238, psMargin:24.0, deferred:0.0555, billings:0.0824},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"L", open:1.3548, newL:0.0447, exp:0.0240, contr:0.0045, churn:0.0055, close:1.4135, cust:8, deals:1, psRev:0.1060, psMargin:21.0, deferred:0.2474, billings:0.4680},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"M", open:2.4839, newL:0.0963, exp:0.0373, contr:0.0114, churn:0.0139, close:2.5922, cust:32, deals:6, psRev:0.1944, psMargin:21.0, deferred:0.4536, billings:0.8583},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"S", open:0.6774, newL:0.0310, exp:0.0075, contr:0.0048, churn:0.0059, close:0.7052, cust:31, deals:6, psRev:0.0529, psMargin:21.0, deferred:0.1234, billings:0.2335},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"SMB", size:"L", open:0.1756, newL:0.0075, exp:0.0020, contr:0.0004, churn:0.0006, close:0.1841, cust:1, deals:0, psRev:0.0078, psMargin:15.0, deferred:0.0156, billings:0.0544},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"SMB", size:"M", open:1.2645, newL:0.0634, exp:0.0120, contr:0.0038, churn:0.0063, close:1.3298, cust:21, deals:4, psRev:0.0565, psMargin:15.0, deferred:0.1130, billings:0.3929},
    {q:"Q1-22", fy:"FY2022", ttm:false, seg:"SMB", size:"S", open:2.0724, newL:0.1156, exp:0.0146, contr:0.0096, churn:0.0161, close:2.1769, cust:104, deals:23, psRev:0.0925, psMargin:15.0, deferred:0.1850, billings:0.6432},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"L", open:4.4115, newL:0.1066, exp:0.0953, contr:0.0108, churn:0.0128, close:4.5898, cust:8, deals:1, psRev:0.4819, psMargin:24.3, deferred:1.1245, billings:1.6731},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"M", open:1.0242, newL:0.0366, exp:0.0188, contr:0.0035, churn:0.0041, close:1.0720, cust:13, deals:2, psRev:0.1126, psMargin:24.3, deferred:0.2626, billings:0.3923},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"S", open:0.2266, newL:0.0091, exp:0.0031, contr:0.0012, churn:0.0014, close:0.2362, cust:10, deals:2, psRev:0.0248, psMargin:24.3, deferred:0.0579, billings:0.0862},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"L", open:1.4135, newL:0.0477, exp:0.0268, contr:0.0047, churn:0.0053, close:1.4780, cust:9, deals:1, psRev:0.1108, psMargin:21.3, deferred:0.2586, billings:0.4915},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"M", open:2.5922, newL:0.1026, exp:0.0417, contr:0.0119, churn:0.0134, close:2.7112, cust:34, deals:6, psRev:0.2033, psMargin:21.3, deferred:0.4745, billings:0.9020},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"S", open:0.7052, newL:0.0330, exp:0.0084, contr:0.0050, churn:0.0057, close:0.7359, cust:32, deals:6, psRev:0.0552, psMargin:21.3, deferred:0.1288, billings:0.2446},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"SMB", size:"L", open:0.1841, newL:0.0072, exp:0.0020, contr:0.0004, churn:0.0007, close:0.1922, cust:1, deals:0, psRev:0.0082, psMargin:14.7, deferred:0.0163, billings:0.0570},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"SMB", size:"M", open:1.3298, newL:0.0608, exp:0.0125, contr:0.0041, churn:0.0069, close:1.3921, cust:22, deals:5, psRev:0.0592, psMargin:14.7, deferred:0.1183, billings:0.4125},
    {q:"Q2-22", fy:"FY2022", ttm:false, seg:"SMB", size:"S", open:2.1769, newL:0.1108, exp:0.0151, contr:0.0105, churn:0.0174, close:2.2749, cust:108, deals:22, psRev:0.0967, psMargin:14.7, deferred:0.1934, billings:0.6738},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"L", open:4.5898, newL:0.1129, exp:0.1063, contr:0.0109, churn:0.0128, close:4.7853, cust:8, deals:1, psRev:0.5025, psMargin:24.6, deferred:1.1724, billings:1.7467},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"M", open:1.0720, newL:0.0387, exp:0.0210, contr:0.0035, churn:0.0042, close:1.1240, cust:14, deals:2, psRev:0.1180, psMargin:24.6, deferred:0.2754, billings:0.4118},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"S", open:0.2362, newL:0.0097, exp:0.0034, contr:0.0012, churn:0.0014, close:0.2467, cust:11, deals:2, psRev:0.0259, psMargin:24.6, deferred:0.0604, billings:0.0901},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"L", open:1.4780, newL:0.0484, exp:0.0279, contr:0.0049, churn:0.0055, close:1.5439, cust:9, deals:1, psRev:0.1158, psMargin:21.4, deferred:0.2702, billings:0.5134},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"M", open:2.7112, newL:0.1042, exp:0.0433, contr:0.0125, churn:0.0141, close:2.8321, cust:35, deals:7, psRev:0.2124, psMargin:21.4, deferred:0.4956, billings:0.9415},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"S", open:0.7359, newL:0.0335, exp:0.0087, contr:0.0052, churn:0.0059, close:0.7670, cust:33, deals:6, psRev:0.0575, psMargin:21.4, deferred:0.1342, billings:0.2547},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"SMB", size:"L", open:0.1922, newL:0.0068, exp:0.0021, contr:0.0005, churn:0.0008, close:0.1998, cust:1, deals:0, psRev:0.0085, psMargin:14.3, deferred:0.0170, billings:0.0592},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"SMB", size:"M", open:1.3921, newL:0.0582, exp:0.0127, contr:0.0047, churn:0.0078, close:1.4505, cust:23, deals:5, psRev:0.0616, psMargin:14.3, deferred:0.1233, billings:0.4292},
    {q:"Q3-22", fy:"FY2022", ttm:false, seg:"SMB", size:"S", open:2.2749, newL:0.1061, exp:0.0154, contr:0.0119, churn:0.0196, close:2.3649, cust:113, deals:23, psRev:0.1005, psMargin:14.3, deferred:0.2010, billings:0.6993},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"L", open:4.7853, newL:0.1192, exp:0.1182, contr:0.0110, churn:0.0128, close:4.9989, cust:9, deals:1, psRev:0.5249, psMargin:24.8, deferred:1.2247, billings:1.8269},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"M", open:1.1240, newL:0.0409, exp:0.0235, contr:0.0036, churn:0.0042, close:1.1806, cust:14, deals:2, psRev:0.1240, psMargin:24.8, deferred:0.2892, billings:0.4330},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"Enterprise", size:"S", open:0.2467, newL:0.0102, exp:0.0038, contr:0.0012, churn:0.0014, close:0.2581, cust:11, deals:2, psRev:0.0271, psMargin:24.8, deferred:0.0632, billings:0.0944},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"L", open:1.5439, newL:0.0463, exp:0.0270, contr:0.0051, churn:0.0063, close:1.6058, cust:9, deals:1, psRev:0.1204, psMargin:21.3, deferred:0.2810, billings:0.5326},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"M", open:2.8321, newL:0.0998, exp:0.0419, contr:0.0130, churn:0.0161, close:2.9447, cust:37, deals:7, psRev:0.2209, psMargin:21.3, deferred:0.5153, billings:0.9768},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"Midmarket", size:"S", open:0.7670, newL:0.0321, exp:0.0084, contr:0.0055, churn:0.0067, close:0.7953, cust:35, deals:7, psRev:0.0596, psMargin:21.3, deferred:0.1392, billings:0.2634},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"SMB", size:"L", open:0.1998, newL:0.0065, exp:0.0021, contr:0.0005, churn:0.0009, close:0.2070, cust:2, deals:0, psRev:0.0088, psMargin:14.0, deferred:0.0176, billings:0.0611},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"SMB", size:"M", open:1.4505, newL:0.0556, exp:0.0129, contr:0.0055, churn:0.0090, close:1.5045, cust:24, deals:5, psRev:0.0639, psMargin:14.0, deferred:0.1279, billings:0.4446},
    {q:"Q4-22", fy:"FY2022", ttm:false, seg:"SMB", size:"S", open:2.3649, newL:0.1014, exp:0.0155, contr:0.0139, churn:0.0227, close:2.4452, cust:116, deals:24, psRev:0.1039, psMargin:14.0, deferred:0.2078, billings:0.7220},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"L", open:4.9989, newL:0.1254, exp:0.1312, contr:0.0111, churn:0.0128, close:5.2316, cust:9, deals:1, psRev:0.5493, psMargin:25.1, deferred:1.2817, billings:1.9142},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"M", open:1.1806, newL:0.0430, exp:0.0263, contr:0.0036, churn:0.0042, close:1.2421, cust:15, deals:3, psRev:0.1304, psMargin:25.1, deferred:0.3043, billings:0.4560},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"S", open:0.2581, newL:0.0108, exp:0.0042, contr:0.0012, churn:0.0014, close:0.2705, cust:12, deals:2, psRev:0.0284, psMargin:25.1, deferred:0.0663, billings:0.0991},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"L", open:1.6058, newL:0.0431, exp:0.0263, contr:0.0053, churn:0.0070, close:1.6629, cust:10, deals:2, psRev:0.1247, psMargin:21.0, deferred:0.2910, billings:0.5504},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"M", open:2.9447, newL:0.0928, exp:0.0408, contr:0.0135, churn:0.0178, close:3.0470, cust:38, deals:7, psRev:0.2285, psMargin:21.0, deferred:0.5332, billings:1.0082},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"S", open:0.7953, newL:0.0298, exp:0.0082, contr:0.0057, churn:0.0075, close:0.8201, cust:36, deals:7, psRev:0.0615, psMargin:21.0, deferred:0.1435, billings:0.2708},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"SMB", size:"L", open:0.2070, newL:0.0062, exp:0.0021, contr:0.0006, churn:0.0010, close:0.2137, cust:2, deals:0, psRev:0.0091, psMargin:13.6, deferred:0.0182, billings:0.0631},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"SMB", size:"M", open:1.5045, newL:0.0530, exp:0.0129, contr:0.0065, churn:0.0105, close:1.5534, cust:25, deals:5, psRev:0.0660, psMargin:13.6, deferred:0.1320, billings:0.4584},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"SMB", size:"S", open:2.4452, newL:0.0967, exp:0.0155, contr:0.0164, churn:0.0265, close:2.5145, cust:120, deals:24, psRev:0.1069, psMargin:13.6, deferred:0.2137, billings:0.7414},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"L", open:5.2316, newL:0.1317, exp:0.1455, contr:0.0112, churn:0.0128, close:5.4848, cust:9, deals:1, psRev:0.5759, psMargin:25.4, deferred:1.3438, billings:2.0092},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"M", open:1.2421, newL:0.0452, exp:0.0293, contr:0.0037, churn:0.0042, close:1.3087, cust:16, deals:4, psRev:0.1374, psMargin:25.4, deferred:0.3206, billings:0.4809},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"S", open:0.2705, newL:0.0113, exp:0.0047, contr:0.0012, churn:0.0014, close:0.2839, cust:12, deals:2, psRev:0.0298, psMargin:25.4, deferred:0.0696, billings:0.1041},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"L", open:1.6629, newL:0.0411, exp:0.0278, contr:0.0055, churn:0.0071, close:1.7192, cust:10, deals:2, psRev:0.1289, psMargin:20.7, deferred:0.3009, billings:0.5686},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"M", open:3.0470, newL:0.0885, exp:0.0431, contr:0.0140, churn:0.0181, close:3.1465, cust:39, deals:7, psRev:0.2360, psMargin:20.7, deferred:0.5506, billings:1.0400},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"S", open:0.8201, newL:0.0284, exp:0.0086, contr:0.0058, churn:0.0075, close:0.8438, cust:37, deals:7, psRev:0.0633, psMargin:20.7, deferred:0.1477, billings:0.2784},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"SMB", size:"L", open:0.2137, newL:0.0059, exp:0.0021, contr:0.0008, churn:0.0012, close:0.2197, cust:2, deals:0, psRev:0.0093, psMargin:13.3, deferred:0.0187, billings:0.0647},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"SMB", size:"M", open:1.5534, newL:0.0504, exp:0.0128, contr:0.0077, churn:0.0124, close:1.5965, cust:26, deals:5, psRev:0.0679, psMargin:13.3, deferred:0.1357, billings:0.4707},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"SMB", size:"S", open:2.5145, newL:0.0919, exp:0.0153, contr:0.0194, churn:0.0310, close:2.5713, cust:122, deals:24, psRev:0.1093, psMargin:13.3, deferred:0.2186, billings:0.7570},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"L", open:5.4848, newL:0.1380, exp:0.1610, contr:0.0113, churn:0.0127, close:5.7598, cust:10, deals:2, psRev:0.6048, psMargin:25.7, deferred:1.4112, billings:2.1121},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"M", open:1.3087, newL:0.0473, exp:0.0326, contr:0.0037, churn:0.0042, close:1.3807, cust:17, deals:4, psRev:0.1450, psMargin:25.7, deferred:0.3383, billings:0.5079},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"S", open:0.2839, newL:0.0118, exp:0.0052, contr:0.0013, churn:0.0014, close:0.2982, cust:13, deals:3, psRev:0.0313, psMargin:25.7, deferred:0.0731, billings:0.1094},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"L", open:1.7192, newL:0.0419, exp:0.0312, contr:0.0057, churn:0.0067, close:1.7799, cust:10, deals:2, psRev:0.1335, psMargin:20.6, deferred:0.3115, billings:0.5891},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"M", open:3.1465, newL:0.0901, exp:0.0484, contr:0.0145, churn:0.0171, close:3.2534, cust:41, deals:8, psRev:0.2440, psMargin:20.6, deferred:0.5693, billings:1.0760},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"S", open:0.8438, newL:0.0290, exp:0.0096, contr:0.0060, churn:0.0071, close:0.8693, cust:38, deals:7, psRev:0.0652, psMargin:20.6, deferred:0.1521, billings:0.2869},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"SMB", size:"L", open:0.2197, newL:0.0056, exp:0.0020, contr:0.0009, churn:0.0014, close:0.2250, cust:2, deals:0, psRev:0.0096, psMargin:12.9, deferred:0.0191, billings:0.0663},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"SMB", size:"M", open:1.5965, newL:0.0478, exp:0.0125, contr:0.0092, churn:0.0145, close:1.6331, cust:26, deals:5, psRev:0.0694, psMargin:12.9, deferred:0.1388, billings:0.4808},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"SMB", size:"S", open:2.5713, newL:0.0872, exp:0.0149, contr:0.0229, churn:0.0363, close:2.6142, cust:124, deals:24, psRev:0.1111, psMargin:12.9, deferred:0.2222, billings:0.7682},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"L", open:5.7598, newL:0.1443, exp:0.1780, contr:0.0114, churn:0.0127, close:6.0580, cust:10, deals:2, psRev:0.6361, psMargin:26.0, deferred:1.4842, billings:2.2236},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"M", open:1.3807, newL:0.0495, exp:0.0362, contr:0.0038, churn:0.0042, close:1.4584, cust:18, deals:4, psRev:0.1531, psMargin:26.0, deferred:0.3573, billings:0.5367},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Enterprise", size:"S", open:0.2982, newL:0.0124, exp:0.0058, contr:0.0013, churn:0.0014, close:0.3137, cust:14, deals:3, psRev:0.0329, psMargin:26.0, deferred:0.0769, billings:0.1151},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"L", open:1.7799, newL:0.0448, exp:0.0340, contr:0.0059, churn:0.0066, close:1.8462, cust:11, deals:2, psRev:0.1385, psMargin:20.7, deferred:0.3231, billings:0.6117},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"M", open:3.2534, newL:0.0965, exp:0.0527, contr:0.0150, churn:0.0167, close:3.3709, cust:42, deals:8, psRev:0.2528, psMargin:20.7, deferred:0.5899, billings:1.1161},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Midmarket", size:"S", open:0.8693, newL:0.0310, exp:0.0104, contr:0.0062, churn:0.0069, close:0.8976, cust:39, deals:7, psRev:0.0673, psMargin:20.7, deferred:0.1571, billings:0.2967},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"SMB", size:"L", open:0.2250, newL:0.0053, exp:0.0020, contr:0.0011, churn:0.0017, close:0.2295, cust:2, deals:0, psRev:0.0098, psMargin:12.6, deferred:0.0195, billings:0.0676},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"SMB", size:"M", open:1.6331, newL:0.0452, exp:0.0122, contr:0.0108, churn:0.0170, close:1.6627, cust:27, deals:5, psRev:0.0707, psMargin:12.6, deferred:0.1413, billings:0.4889},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"SMB", size:"S", open:2.6142, newL:0.0825, exp:0.0144, contr:0.0268, churn:0.0422, close:2.6421, cust:126, deals:24, psRev:0.1123, psMargin:12.6, deferred:0.2246, billings:0.7752},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"L", open:6.0580, newL:0.1505, exp:0.1966, contr:0.0116, churn:0.0126, close:6.3809, cust:11, deals:2, psRev:0.6700, psMargin:26.2, deferred:1.5633, billings:2.3443},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"M", open:1.4584, newL:0.0516, exp:0.0401, contr:0.0039, churn:0.0042, close:1.5420, cust:19, deals:4, psRev:0.1619, psMargin:26.2, deferred:0.3778, billings:0.5679},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"S", open:0.3137, newL:0.0129, exp:0.0064, contr:0.0013, churn:0.0014, close:0.3303, cust:14, deals:3, psRev:0.0347, psMargin:26.2, deferred:0.0809, billings:0.1213},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"L", open:1.8462, newL:0.0477, exp:0.0342, contr:0.0061, churn:0.0071, close:1.9149, cust:11, deals:2, psRev:0.1436, psMargin:21.0, deferred:0.3351, billings:0.6343},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"M", open:3.3709, newL:0.1027, exp:0.0529, contr:0.0155, churn:0.0179, close:3.4931, cust:44, deals:8, psRev:0.2620, psMargin:21.0, deferred:0.6113, billings:1.1567},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"S", open:0.8976, newL:0.0330, exp:0.0104, contr:0.0064, churn:0.0074, close:0.9272, cust:40, deals:7, psRev:0.0695, psMargin:21.0, deferred:0.1623, billings:0.3065},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"SMB", size:"L", open:0.2295, newL:0.0050, exp:0.0019, contr:0.0013, churn:0.0020, close:0.2331, cust:2, deals:0, psRev:0.0099, psMargin:12.2, deferred:0.0198, billings:0.0685},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"SMB", size:"M", open:1.6627, newL:0.0427, exp:0.0117, contr:0.0126, churn:0.0198, close:1.6847, cust:27, deals:5, psRev:0.0716, psMargin:12.2, deferred:0.1432, billings:0.4947},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"SMB", size:"S", open:2.6421, newL:0.0778, exp:0.0138, contr:0.0311, churn:0.0487, close:2.6539, cust:126, deals:24, psRev:0.1128, psMargin:12.2, deferred:0.2256, billings:0.7773},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"L", open:6.3809, newL:0.1568, exp:0.2169, contr:0.0117, churn:0.0126, close:6.7303, cust:12, deals:2, psRev:0.7067, psMargin:26.5, deferred:1.6489, billings:2.4749},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"M", open:1.5420, newL:0.0538, exp:0.0444, contr:0.0039, churn:0.0042, close:1.6321, cust:20, deals:4, psRev:0.1714, psMargin:26.5, deferred:0.3999, billings:0.6015},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"S", open:0.3303, newL:0.0134, exp:0.0070, contr:0.0013, churn:0.0014, close:0.3480, cust:15, deals:3, psRev:0.0365, psMargin:26.5, deferred:0.0853, billings:0.1279},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"L", open:1.9149, newL:0.0483, exp:0.0327, contr:0.0063, churn:0.0080, close:1.9816, cust:12, deals:2, psRev:0.1486, psMargin:21.3, deferred:0.3468, billings:0.6557},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"M", open:3.4931, newL:0.1041, exp:0.0505, contr:0.0161, churn:0.0203, close:3.6113, cust:45, deals:8, psRev:0.2708, psMargin:21.3, deferred:0.6320, billings:1.1943},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"S", open:0.9272, newL:0.0335, exp:0.0099, contr:0.0066, churn:0.0084, close:0.9556, cust:42, deals:8, psRev:0.0717, psMargin:21.3, deferred:0.1672, billings:0.3155},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"SMB", size:"L", open:0.2331, newL:0.0047, exp:0.0018, contr:0.0015, churn:0.0023, close:0.2358, cust:2, deals:0, psRev:0.0100, psMargin:11.9, deferred:0.0200, billings:0.0692},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"SMB", size:"M", open:1.6847, newL:0.0401, exp:0.0111, contr:0.0146, churn:0.0228, close:1.6985, cust:27, deals:5, psRev:0.0722, psMargin:11.9, deferred:0.1444, billings:0.4980},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"SMB", size:"S", open:2.6539, newL:0.0731, exp:0.0130, contr:0.0357, churn:0.0556, close:2.6487, cust:126, deals:23, psRev:0.1126, psMargin:11.9, deferred:0.2251, billings:0.7743},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"L", open:6.7303, newL:0.1631, exp:0.2392, contr:0.0118, churn:0.0125, close:7.1083, cust:12, deals:2, psRev:0.7464, psMargin:26.8, deferred:1.7415, billings:2.6161},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"M", open:1.6321, newL:0.0559, exp:0.0492, contr:0.0040, churn:0.0042, close:1.7290, cust:21, deals:4, psRev:0.1815, psMargin:26.8, deferred:0.4236, billings:0.6375},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"S", open:0.3480, newL:0.0140, exp:0.0078, contr:0.0013, churn:0.0014, close:0.3671, cust:16, deals:4, psRev:0.0385, psMargin:26.8, deferred:0.0899, billings:0.1349},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"L", open:1.9816, newL:0.0463, exp:0.0323, contr:0.0066, churn:0.0087, close:2.0449, cust:12, deals:2, psRev:0.1534, psMargin:21.4, deferred:0.3579, billings:0.6757},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"M", open:3.6113, newL:0.0997, exp:0.0498, contr:0.0166, churn:0.0220, close:3.7222, cust:47, deals:9, psRev:0.2792, psMargin:21.4, deferred:0.6514, billings:1.2291},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"S", open:0.9556, newL:0.0320, exp:0.0098, contr:0.0068, churn:0.0090, close:0.9816, cust:43, deals:8, psRev:0.0736, psMargin:21.4, deferred:0.1718, billings:0.3236},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"SMB", size:"L", open:0.2358, newL:0.0044, exp:0.0017, contr:0.0017, churn:0.0026, close:0.2376, cust:2, deals:0, psRev:0.0101, psMargin:11.6, deferred:0.0202, billings:0.0697},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"SMB", size:"M", open:1.6985, newL:0.0375, exp:0.0104, contr:0.0168, churn:0.0260, close:1.7036, cust:27, deals:5, psRev:0.0724, psMargin:11.6, deferred:0.1448, billings:0.4987},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"SMB", size:"S", open:2.6487, newL:0.0683, exp:0.0120, contr:0.0405, churn:0.0628, close:2.6257, cust:125, deals:23, psRev:0.1116, psMargin:11.6, deferred:0.2232, billings:0.7661},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"L", open:7.1083, newL:0.1694, exp:0.2637, contr:0.0119, churn:0.0123, close:7.5172, cust:13, deals:2, psRev:0.7893, psMargin:27.1, deferred:1.8417, billings:2.7688},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"M", open:1.7290, newL:0.0581, exp:0.0544, contr:0.0040, churn:0.0042, close:1.8333, cust:22, deals:5, psRev:0.1925, psMargin:27.1, deferred:0.4492, billings:0.6764},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Enterprise", size:"S", open:0.3671, newL:0.0145, exp:0.0085, contr:0.0013, churn:0.0014, close:0.3874, cust:17, deals:4, psRev:0.0407, psMargin:27.1, deferred:0.0949, billings:0.1426},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"L", open:2.0449, newL:0.0430, exp:0.0349, contr:0.0068, churn:0.0086, close:2.1074, cust:12, deals:2, psRev:0.1581, psMargin:21.2, deferred:0.3688, billings:0.6959},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"M", open:3.7222, newL:0.0927, exp:0.0538, contr:0.0171, churn:0.0216, close:3.8300, cust:48, deals:9, psRev:0.2873, psMargin:21.2, deferred:0.6703, billings:1.2637},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Midmarket", size:"S", open:0.9816, newL:0.0298, exp:0.0105, contr:0.0070, churn:0.0088, close:1.0061, cust:44, deals:8, psRev:0.0755, psMargin:21.2, deferred:0.1761, billings:0.3313},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"SMB", size:"L", open:0.2376, newL:0.0041, exp:0.0016, contr:0.0019, churn:0.0029, close:0.2385, cust:2, deals:0, psRev:0.0101, psMargin:11.2, deferred:0.0203, billings:0.0698},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"SMB", size:"M", open:1.7036, newL:0.0349, exp:0.0096, contr:0.0190, churn:0.0293, close:1.6998, cust:27, deals:5, psRev:0.0722, psMargin:11.2, deferred:0.1445, billings:0.4968},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"SMB", size:"S", open:2.6257, newL:0.0636, exp:0.0110, contr:0.0454, churn:0.0701, close:2.5848, cust:123, deals:23, psRev:0.1099, psMargin:11.2, deferred:0.2197, billings:0.7526},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Enterprise", size:"L", open:7.5172, newL:0.1756, exp:0.2905, contr:0.0120, churn:0.0122, close:7.9591, cust:14, deals:2, psRev:0.8357, psMargin:27.4, deferred:1.9500, billings:2.9338},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Enterprise", size:"M", open:1.8333, newL:0.0602, exp:0.0600, contr:0.0041, churn:0.0041, close:1.9453, cust:24, deals:5, psRev:0.2043, psMargin:27.4, deferred:0.4766, billings:0.7180},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Enterprise", size:"S", open:0.3874, newL:0.0151, exp:0.0094, contr:0.0013, churn:0.0014, close:0.4092, cust:18, deals:4, psRev:0.0430, psMargin:27.4, deferred:0.1003, billings:0.1507},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Midmarket", size:"L", open:2.1074, newL:0.0411, exp:0.0391, contr:0.0070, churn:0.0081, close:2.1725, cust:13, deals:2, psRev:0.1629, psMargin:20.9, deferred:0.3802, billings:0.7174},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Midmarket", size:"M", open:3.8300, newL:0.0885, exp:0.0602, contr:0.0176, churn:0.0204, close:3.9407, cust:49, deals:9, psRev:0.2956, psMargin:20.9, deferred:0.6896, billings:1.3001},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Midmarket", size:"S", open:1.0061, newL:0.0284, exp:0.0117, contr:0.0072, churn:0.0083, close:1.0307, cust:45, deals:8, psRev:0.0773, psMargin:20.9, deferred:0.1804, billings:0.3393},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"SMB", size:"L", open:0.2385, newL:0.0038, exp:0.0015, contr:0.0022, churn:0.0033, close:0.2383, cust:2, deals:0, psRev:0.0101, psMargin:10.9, deferred:0.0203, billings:0.0697},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"SMB", size:"M", open:1.6998, newL:0.0323, exp:0.0088, contr:0.0213, churn:0.0328, close:1.6868, cust:27, deals:5, psRev:0.0717, psMargin:10.9, deferred:0.1434, billings:0.4923},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"SMB", size:"S", open:2.5848, newL:0.0589, exp:0.0099, contr:0.0502, churn:0.0773, close:2.5261, cust:120, deals:22, psRev:0.1074, psMargin:10.9, deferred:0.2147, billings:0.7339},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"L", open:7.9591, newL:0.1819, exp:0.3199, contr:0.0121, churn:0.0120, close:8.4368, cust:15, deals:2, psRev:0.8859, psMargin:27.7, deferred:2.0670, billings:3.1121},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"M", open:1.9453, newL:0.0624, exp:0.0663, contr:0.0041, churn:0.0041, close:2.0658, cust:25, deals:5, psRev:0.2169, psMargin:27.7, deferred:0.5061, billings:0.7628},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"S", open:0.4092, newL:0.0156, exp:0.0103, contr:0.0013, churn:0.0013, close:0.4325, cust:19, deals:4, psRev:0.0454, psMargin:27.7, deferred:0.1060, billings:0.1592},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"L", open:2.1725, newL:0.0419, exp:0.0415, contr:0.0072, churn:0.0080, close:2.2407, cust:13, deals:2, psRev:0.1681, psMargin:20.7, deferred:0.3921, billings:0.7402},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"M", open:3.9407, newL:0.0902, exp:0.0638, contr:0.0181, churn:0.0202, close:4.0564, cust:51, deals:9, psRev:0.3042, psMargin:20.7, deferred:0.7099, billings:1.3386},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"S", open:1.0307, newL:0.0290, exp:0.0123, contr:0.0073, churn:0.0082, close:1.0565, cust:46, deals:8, psRev:0.0792, psMargin:20.7, deferred:0.1849, billings:0.3478},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"SMB", size:"L", open:0.2383, newL:0.0035, exp:0.0013, contr:0.0024, churn:0.0037, close:0.2370, cust:2, deals:0, psRev:0.0101, psMargin:10.5, deferred:0.0201, billings:0.0692},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"SMB", size:"M", open:1.6868, newL:0.0297, exp:0.0078, contr:0.0236, churn:0.0363, close:1.6644, cust:27, deals:4, psRev:0.0707, psMargin:10.5, deferred:0.1415, billings:0.4849},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"SMB", size:"S", open:2.5261, newL:0.0542, exp:0.0087, contr:0.0549, churn:0.0842, close:2.4499, cust:117, deals:22, psRev:0.1041, psMargin:10.5, deferred:0.2082, billings:0.7101},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"L", open:8.4368, newL:0.1882, exp:0.3522, contr:0.0122, churn:0.0117, close:8.9533, cust:15, deals:2, psRev:0.9401, psMargin:27.9, deferred:2.1936, billings:3.3050},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"M", open:2.0658, newL:0.0645, exp:0.0731, contr:0.0042, churn:0.0040, close:2.1952, cust:27, deals:5, psRev:0.2305, psMargin:27.9, deferred:0.5378, billings:0.8110},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"S", open:0.4325, newL:0.0161, exp:0.0113, contr:0.0013, churn:0.0013, close:0.4573, cust:20, deals:4, psRev:0.0480, psMargin:27.9, deferred:0.1120, billings:0.1683},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"L", open:2.2407, newL:0.0449, exp:0.0406, contr:0.0074, churn:0.0088, close:2.3100, cust:14, deals:2, psRev:0.1732, psMargin:20.6, deferred:0.4042, billings:0.7628},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"M", open:4.0564, newL:0.0966, exp:0.0623, contr:0.0187, churn:0.0221, close:4.1745, cust:52, deals:9, psRev:0.3131, psMargin:20.6, deferred:0.7305, billings:1.3773},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"S", open:1.0565, newL:0.0311, exp:0.0120, contr:0.0075, churn:0.0089, close:1.0832, cust:47, deals:9, psRev:0.0812, psMargin:20.6, deferred:0.1896, billings:0.3567},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"SMB", size:"L", open:0.2370, newL:0.0032, exp:0.0011, contr:0.0027, churn:0.0041, close:0.2345, cust:2, deals:0, psRev:0.0100, psMargin:10.2, deferred:0.0199, billings:0.0684},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"SMB", size:"M", open:1.6644, newL:0.0271, exp:0.0068, contr:0.0259, churn:0.0397, close:1.6327, cust:26, deals:4, psRev:0.0694, psMargin:10.2, deferred:0.1388, billings:0.4749},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"SMB", size:"S", open:2.4499, newL:0.0494, exp:0.0074, contr:0.0592, churn:0.0907, close:2.3568, cust:112, deals:20, psRev:0.1002, psMargin:10.2, deferred:0.2003, billings:0.6815},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"L", open:8.9533, newL:0.1944, exp:0.3876, contr:0.0123, churn:0.0114, close:9.5116, cust:16, deals:3, psRev:0.9987, psMargin:28.2, deferred:2.3303, billings:3.5133},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"M", open:2.1952, newL:0.0667, exp:0.0805, contr:0.0042, churn:0.0039, close:2.3343, cust:28, deals:5, psRev:0.2451, psMargin:28.2, deferred:0.5719, billings:0.8628},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Enterprise", size:"S", open:0.4573, newL:0.0167, exp:0.0124, contr:0.0014, churn:0.0012, close:0.4838, cust:21, deals:4, psRev:0.0508, psMargin:28.2, deferred:0.1185, billings:0.1783},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"L", open:2.3100, newL:0.0477, exp:0.0386, contr:0.0077, churn:0.0099, close:2.3787, cust:14, deals:2, psRev:0.1784, psMargin:20.8, deferred:0.4163, billings:0.7852},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"M", open:4.1745, newL:0.1028, exp:0.0591, contr:0.0192, churn:0.0248, close:4.2924, cust:54, deals:10, psRev:0.3219, psMargin:20.8, deferred:0.7512, billings:1.4157},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Midmarket", size:"S", open:1.0832, newL:0.0330, exp:0.0113, contr:0.0077, churn:0.0100, close:1.1098, cust:48, deals:9, psRev:0.0832, psMargin:20.8, deferred:0.1942, billings:0.3653},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"SMB", size:"L", open:0.2345, newL:0.0029, exp:0.0010, contr:0.0029, churn:0.0045, close:0.2310, cust:2, deals:0, psRev:0.0098, psMargin:9.8, deferred:0.0196, billings:0.0673},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"SMB", size:"M", open:1.6327, newL:0.0245, exp:0.0058, contr:0.0282, churn:0.0431, close:1.5917, cust:26, deals:4, psRev:0.0676, psMargin:9.8, deferred:0.1353, billings:0.4620},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"SMB", size:"S", open:2.3568, newL:0.0447, exp:0.0062, contr:0.0630, churn:0.0963, close:2.2484, cust:107, deals:19, psRev:0.0956, psMargin:9.8, deferred:0.1911, billings:0.6485},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Enterprise", size:"L", open:9.5116, newL:0.2007, exp:0.4265, contr:0.0123, churn:0.0110, close:10.1155, cust:17, deals:3, psRev:1.0621, psMargin:28.5, deferred:2.4783, billings:3.7390},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Enterprise", size:"M", open:2.3343, newL:0.0688, exp:0.0887, contr:0.0042, churn:0.0037, close:2.4839, cust:30, deals:6, psRev:0.2608, psMargin:28.5, deferred:0.6086, billings:0.9185},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Enterprise", size:"S", open:0.4838, newL:0.0172, exp:0.0136, contr:0.0013, churn:0.0012, close:0.5121, cust:22, deals:5, psRev:0.0538, psMargin:28.5, deferred:0.1255, billings:0.1888},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Midmarket", size:"L", open:2.3787, newL:0.0483, exp:0.0389, contr:0.0079, churn:0.0104, close:2.4476, cust:14, deals:2, psRev:0.1836, psMargin:21.1, deferred:0.4283, billings:0.8075},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Midmarket", size:"M", open:4.2924, newL:0.1041, exp:0.0595, contr:0.0197, churn:0.0260, close:4.4103, cust:55, deals:10, psRev:0.3308, psMargin:21.1, deferred:0.7718, billings:1.4540},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Midmarket", size:"S", open:1.1098, newL:0.0335, exp:0.0114, contr:0.0079, churn:0.0104, close:1.1364, cust:49, deals:9, psRev:0.0852, psMargin:21.1, deferred:0.1989, billings:0.3740},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"SMB", size:"L", open:0.2310, newL:0.0026, exp:0.0008, contr:0.0032, churn:0.0048, close:0.2264, cust:2, deals:0, psRev:0.0096, psMargin:9.5, deferred:0.0192, billings:0.0658},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"SMB", size:"M", open:1.5917, newL:0.0219, exp:0.0048, contr:0.0302, churn:0.0462, close:1.5420, cust:25, deals:4, psRev:0.0655, psMargin:9.5, deferred:0.1311, billings:0.4468},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"SMB", size:"S", open:2.2484, newL:0.0400, exp:0.0050, contr:0.0662, churn:0.1011, close:2.1261, cust:101, deals:18, psRev:0.0904, psMargin:9.5, deferred:0.1807, billings:0.6115}
  ]
};

// ─── QUERY HELPER ───────────────────────────────────────────────────────────
// SAAS.query({seg, size}, period) — filters facts and returns the aggregated view.
//   seg:    "ALL" | "Enterprise" | "Midmarket" | "SMB"
//   size:   "ALL" | "L" | "M" | "S"
//   period: "TTM" | "FY2025" | "FY2024" | "FY2023" | "FY2022"
// Returns {open, close, newL, exp, contr, churn, reported, ndr, grr,
//          cust, deals, psRev, psMargin, deferred, billings, n}
SAAS.query = function(filters, period){
  filters = filters || {};
  const seg  = filters.seg  || "ALL";
  const size = filters.size || "ALL";
  const qs = SAAS.periodQuarters[period];
  if(!qs) return null;
  const firstQ = qs[0], lastQ = qs[qs.length-1];
  const sel = SAAS.facts.filter(function(f){
    if(qs.indexOf(f.q) === -1) return false;
    if(seg  !== "ALL" && f.seg  !== seg)  return false;
    if(size !== "ALL" && f.size !== size) return false;
    return true;
  });
  let open=0, close=0, newL=0, exp=0, contr=0, churn=0;
  let cust=0, deals=0, psRev=0, psmW=0, deferred=0, billings=0;
  sel.forEach(function(f){
    if(f.q === firstQ) open += f.open;
    if(f.q === lastQ){ close += f.close; cust += f.cust; deferred += f.deferred; }
    newL += f.newL; exp += f.exp; contr += f.contr; churn += f.churn;
    deals += f.deals; psRev += f.psRev; psmW += f.psMargin * f.psRev;
    billings += f.billings;
  });
  const reported = open > 0 ? +(((close/open) - 1) * 100).toFixed(2) : 0;
  const ndr = open > 0 ? +(((open + exp - contr - churn) / open) * 100).toFixed(1) : 0;
  const grr = open > 0 ? +(((open - contr - churn) / open) * 100).toFixed(1) : 0;
  const psMargin = psRev > 0 ? +(psmW / psRev).toFixed(1) : 0;
  return {
    open: +open.toFixed(4), close: +close.toFixed(4),
    newL: +newL.toFixed(4), exp: +exp.toFixed(4),
    contr: +contr.toFixed(4), churn: +churn.toFixed(4),
    reported: reported, ndr: ndr, grr: grr,
    cust: cust, deals: deals,
    psRev: +psRev.toFixed(3), psMargin: psMargin,
    deferred: +deferred.toFixed(3), billings: +billings.toFixed(3),
    n: sel.length
  };
};

// ─── QUARTER SERIES HELPER ─────────────────────────────────────────────────
// SAAS.quarterSeries({seg, size}) — per-quarter aggregates over the 13 display
// quarters, plus trailing-4-quarter NDR / GRR (the FY2022 base rows make the
// trailing window available for every displayed quarter).
SAAS.quarterSeries = function(filters){
  filters = filters || {};
  const seg  = filters.seg  || "ALL";
  const size = filters.size || "ALL";
  const match = function(f){
    if(seg  !== "ALL" && f.seg  !== seg)  return false;
    if(size !== "ALL" && f.size !== size) return false;
    return true;
  };
  // Aggregate per quarter across ALL 17 fact quarters first
  const allQ = [];
  SAAS.facts.forEach(function(f){ if(allQ.indexOf(f.q) === -1) allQ.push(f.q); });
  const byQ = {};
  allQ.forEach(function(q){
    let open=0, close=0, newL=0, exp=0, contr=0, churn=0, cust=0, psRev=0, deferred=0, billings=0;
    SAAS.facts.forEach(function(f){
      if(f.q !== q || !match(f)) return;
      open += f.open; close += f.close; newL += f.newL; exp += f.exp;
      contr += f.contr; churn += f.churn; cust += f.cust; psRev += f.psRev;
      deferred += f.deferred; billings += f.billings;
    });
    byQ[q] = {open:open, close:close, newL:newL, exp:exp, contr:contr, churn:churn,
              cust:cust, psRev:psRev, deferred:deferred, billings:billings};
  });
  // Trailing-4Q NDR/GRR per displayed quarter
  return SAAS.displayQuarters.map(function(q){
    const i = allQ.indexOf(q);
    const w = [allQ[i-3], allQ[i-2], allQ[i-1], q];
    const base = byQ[w[0]].open;
    let e4=0, c4=0, h4=0, n4=0;
    w.forEach(function(wq){ e4 += byQ[wq].exp; c4 += byQ[wq].contr; h4 += byQ[wq].churn; n4 += byQ[wq].newL; });
    const d = byQ[q];
    return {
      q: q, arr: +d.close.toFixed(3), newL: +d.newL.toFixed(4), exp: +d.exp.toFixed(4),
      contr: +d.contr.toFixed(4), churn: +d.churn.toFixed(4), cust: d.cust,
      psRev: +d.psRev.toFixed(3), deferred: +d.deferred.toFixed(3), billings: +d.billings.toFixed(3),
      ndr: base > 0 ? +(((base + e4 - c4 - h4) / base) * 100).toFixed(1) : 0,
      grr: base > 0 ? +(((base - c4 - h4) / base) * 100).toFixed(1) : 0,
      newLogoT4: +n4.toFixed(4)
    };
  });
};

// Expose globally for non-module pages
if (typeof window !== "undefined") { window.SAAS = SAAS; }
if (typeof module !== "undefined" && module.exports) { module.exports = SAAS; }
