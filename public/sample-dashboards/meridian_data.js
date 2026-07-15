/* Meridian Protein Systems — shared sample data spec
 * Single source of truth for all NCC Industrial Dashboard Pack mockups.
 * Every dashboard reads from MERIDIAN; filter changes must produce distinct,
 * realistic values across periods, segments, regions, entities, and cohorts.
 *
 * Target: hypothetical $185M-revenue, $42M-EBITDA food-processing equipment
 * manufacturer, PE-owned ~4 years (Sponsor X), serving protein (poultry led),
 * with two acquisitions (NorthPlate 2023, VerdeCure 2024).
 */

const MERIDIAN = {
  meta: {
    target: "Meridian Protein Systems",
    sponsor: "Sponsor X",
    sponsorYears: 4,
    employees: 412,
    customers: 26,
    sites: 4,
    sampleNote: "Illustrative · Sample Data"
  },

  // ─── PERIODS ─────────────────────────────────────────────────────────────
  // Each period has its own snapshot. TTM = FY2025 - Q1-2025 + Q1-2026.
  periods: {
    TTM:    { revenue: 185.0, ebitda: 42.0, ebitdaMargin: 22.7, nwc: 15.5, nwcPct: 8.4, capex: 5.8, fcf: 36.2, fcfConv: 86, deposits: 34.2, depositPct: 18.5, netDebt: 130.2, leverage: 3.1, dso: 52, dio: 95, dpo: 45, blendedGM: 38.2, aftermarketRev: 51.8, aftermarketPct: 28.0, aftermarketGM: 52.1, newEqGM: 32.4, growthYoY: 1.6, tariffCost: 2.2, tariffBps: 50 },
    FY2025: { revenue: 182.0, ebitda: 41.0, ebitdaMargin: 22.5, nwc: 15.8, nwcPct: 8.7, capex: 5.5, fcf: 34.0, fcfConv: 83, deposits: 31.6, depositPct: 17.4, netDebt: 139.4, leverage: 3.4, dso: 54, dio: 96, dpo: 44, blendedGM: 37.9, aftermarketRev: 50.0, aftermarketPct: 27.5, aftermarketGM: 51.6, newEqGM: 32.2, growthYoY: 11.0, tariffCost: 2.0, tariffBps: 48 },
    FY2024: { revenue: 164.0, ebitda: 36.5, ebitdaMargin: 22.3, nwc: 15.6, nwcPct: 9.5, capex: 4.9, fcf: 28.8, fcfConv: 79, deposits: 27.4, depositPct: 16.7, netDebt: 153.3, leverage: 4.2, dso: 58, dio: 99, dpo: 42, blendedGM: 36.5, aftermarketRev: 42.6, aftermarketPct: 26.0, aftermarketGM: 50.2, newEqGM: 31.0, growthYoY: 10.8, tariffCost: 1.4, tariffBps: 38 },
    FY2023: { revenue: 148.0, ebitda: 32.5, ebitdaMargin: 22.0, nwc: 14.5, nwcPct: 9.8, capex: 4.4, fcf: 25.0, fcfConv: 77, deposits: 24.1, depositPct: 16.3, netDebt: 97.5, leverage: 3.0, dso: 60, dio: 102, dpo: 41, blendedGM: 35.8, aftermarketRev: 36.3, aftermarketPct: 24.5, aftermarketGM: 49.4, newEqGM: 30.5, growthYoY: 6.5, tariffCost: 0.6, tariffBps: 18 }
  },

  // ─── SEGMENTS ────────────────────────────────────────────────────────────
  // Share of revenue + segment-level KPIs, per period.
  segments: {
    Protein: {
      label: "Protein Solutions",
      sharePctByPeriod: { TTM: 58, FY2025: 59, FY2024: 60, FY2023: 64 },
      gmByPeriod:       { TTM: 39.4, FY2025: 39.0, FY2024: 37.8, FY2023: 36.9 },
      organicGrowthByPeriod: { TTM: 7.2, FY2025: 7.8, FY2024: 4.2, FY2023: 3.8 },
      priceContrib:    { TTM: 4.4, FY2025: 4.5, FY2024: 2.1, FY2023: 1.6 },
      volumeContrib:   { TTM: 3.0, FY2025: 3.5, FY2024: 2.3, FY2023: 2.4 },
      mixContrib:      { TTM: -0.2, FY2025: -0.2, FY2024: -0.2, FY2023: -0.2 },
      aftermarketShare:{ TTM: 30, FY2025: 29, FY2024: 28, FY2023: 26 },
      tariffExposure:  { TTM: 1.10, FY2025: 1.00, FY2024: 0.70, FY2023: 0.30 }   // $M
    },
    Prepared: {
      label: "Prepared Foods",
      sharePctByPeriod: { TTM: 30, FY2025: 30, FY2024: 31, FY2023: 32 },
      gmByPeriod:       { TTM: 36.1, FY2025: 36.0, FY2024: 35.0, FY2023: 34.5 },
      organicGrowthByPeriod: { TTM: 3.4, FY2025: 3.2, FY2024: 2.4, FY2023: 1.9 },
      priceContrib:    { TTM: 3.5, FY2025: 3.6, FY2024: 1.5, FY2023: 1.1 },
      volumeContrib:   { TTM: 0.0, FY2025: -0.2, FY2024: 1.1, FY2023: 1.0 },
      mixContrib:      { TTM: -0.1, FY2025: -0.2, FY2024: -0.2, FY2023: -0.2 },
      aftermarketShare:{ TTM: 26, FY2025: 25, FY2024: 24, FY2023: 22 },
      tariffExposure:  { TTM: 0.66, FY2025: 0.60, FY2024: 0.42, FY2023: 0.18 }
    },
    Coatings: {
      label: "Coatings (NorthPlate)",
      sharePctByPeriod: { TTM: 12, FY2025: 11, FY2024: 9, FY2023: 4 },     // grew with NorthPlate ramp
      gmByPeriod:       { TTM: 33.1, FY2025: 33.5, FY2024: 32.2, FY2023: 31.0 },
      organicGrowthByPeriod: { TTM: 4.8, FY2025: 5.5, FY2024: 3.1, FY2023: 2.0 },
      priceContrib:    { TTM: 4.0, FY2025: 4.2, FY2024: 1.9, FY2023: 1.0 },
      volumeContrib:   { TTM: 0.9, FY2025: 1.4, FY2024: 1.4, FY2023: 1.2 },
      mixContrib:      { TTM: -0.1, FY2025: -0.1, FY2024: -0.2, FY2023: -0.2 },
      aftermarketShare:{ TTM: 22, FY2025: 21, FY2024: 18, FY2023: 14 },
      tariffExposure:  { TTM: 0.44, FY2025: 0.40, FY2024: 0.28, FY2023: 0.12 }
    }
  },

  // ─── REGIONS ─────────────────────────────────────────────────────────────
  regions: {
    US:    { sharePct: 58, organicGrowth: 6.8, tariffExposure: 1.32, priceRealization: 4.5, fxImpact: 0.0 },
    EMEA:  { sharePct: 24, organicGrowth: 4.2, tariffExposure: 0.55, priceRealization: 3.8, fxImpact: -1.2 },
    LATAM: { sharePct: 12, organicGrowth: 8.1, tariffExposure: 0.22, priceRealization: 5.2, fxImpact: -2.4 },
    APAC:  { sharePct:  6, organicGrowth: 3.5, tariffExposure: 0.11, priceRealization: 3.0, fxImpact: -1.8 }
  },

  // ─── ENTITIES ────────────────────────────────────────────────────────────
  entities: {
    LegacyNCC: { revenueTTM: 149.0, share: 80.5, segments: ["Protein", "Prepared"], erp: "NetSuite (consolidated 2024)" },
    NorthPlate: { revenueTTM: 22.0, share: 11.9, acquiredQ: "Q1 2023", priceAtClose: 88.0, segments: ["Coatings"], erp: "Sage (legacy) → NetSuite migrated Q3 2024", synergyTargetCost: 4.0, synergyCaptured: 3.4, synergyTargetRev: 2.0, synergyRevCaptured: 0.9, irrUnderwritten: 22, irrMark: 19, moicUnderwritten: 2.4, moicMark: 2.1, milestonesPlanned: 28, milestonesHit: 24 },
    VerdeCure: { revenueTTM: 14.0, share: 7.6, acquiredQ: "Q2 2024", priceAtClose: 62.0, segments: ["Protein"], erp: "Excel/PowerPoint → consolidating", synergyTargetCost: 3.0, synergyCaptured: 1.1, synergyTargetRev: 1.5, synergyRevCaptured: 0.5, irrUnderwritten: 28, irrMark: 26, moicUnderwritten: 2.8, moicMark: 2.6, milestonesPlanned: 10, milestonesHit: 5 }
  },

  // ─── CUSTOMER COHORTS ────────────────────────────────────────────────────
  cohorts: {
    Top5:   { count: 5, revShare: 51, revTTM: 94.4, gm: 41.0, attachRate: 78, priceIncreaseStuck: 92 },
    Top10:  { count: 10, revShare: 65, revTTM: 120.3, gm: 40.2, attachRate: 72, priceIncreaseStuck: 88 },
    Top20:  { count: 20, revShare: 77, revTTM: 142.5, gm: 39.4, attachRate: 65, priceIncreaseStuck: 84 },
    Rest:   { count: 6,  revShare: 23, revTTM: 42.5, gm: 32.8, attachRate: 30, priceIncreaseStuck: 56 },
    NewIn3Y:{ count: 5,  revShare: 13, revTTM: 24.0, gm: 35.0, attachRate: 41, priceIncreaseStuck: 70 }
  },

  // ─── QUARTERLY SERIES (12 quarters: Q1-23 → Q4-25 + Q1-26) ──────────────
  quarters: [
    { q: "Q1-23", rev: 35.0, gm: 35.5, aftermarketPct: 24, deposits: 22.1, backlog: 38.0, ordersBookings: 36.0, priceIdx: 100.0, costIdx: 100.0 },
    { q: "Q2-23", rev: 37.0, gm: 35.8, aftermarketPct: 24, deposits: 23.5, backlog: 41.0, ordersBookings: 40.0, priceIdx: 100.6, costIdx: 100.9 },
    { q: "Q3-23", rev: 37.5, gm: 36.0, aftermarketPct: 25, deposits: 24.0, backlog: 42.5, ordersBookings: 39.5, priceIdx: 101.4, costIdx: 102.0 },
    { q: "Q4-23", rev: 38.5, gm: 36.2, aftermarketPct: 25, deposits: 24.1, backlog: 43.0, ordersBookings: 40.0, priceIdx: 102.3, costIdx: 103.2 },
    { q: "Q1-24", rev: 39.0, gm: 36.0, aftermarketPct: 25, deposits: 25.2, backlog: 44.0, ordersBookings: 42.0, priceIdx: 103.0, costIdx: 104.0 },
    { q: "Q2-24", rev: 40.5, gm: 36.4, aftermarketPct: 26, deposits: 26.4, backlog: 46.0, ordersBookings: 43.5, priceIdx: 103.8, costIdx: 105.4 },
    { q: "Q3-24", rev: 41.5, gm: 36.7, aftermarketPct: 26, deposits: 26.8, backlog: 47.5, ordersBookings: 43.0, priceIdx: 104.5, costIdx: 106.7 },
    { q: "Q4-24", rev: 43.0, gm: 36.9, aftermarketPct: 27, deposits: 27.4, backlog: 49.0, ordersBookings: 45.0, priceIdx: 105.2, costIdx: 107.5 },
    { q: "Q1-25", rev: 44.0, gm: 37.4, aftermarketPct: 27, deposits: 28.8, backlog: 51.0, ordersBookings: 46.5, priceIdx: 106.4, costIdx: 108.6 },
    { q: "Q2-25", rev: 45.5, gm: 37.8, aftermarketPct: 27, deposits: 30.2, backlog: 53.5, ordersBookings: 48.0, priceIdx: 107.5, costIdx: 110.0 },
    { q: "Q3-25", rev: 46.0, gm: 38.0, aftermarketPct: 28, deposits: 30.9, backlog: 54.0, ordersBookings: 47.5, priceIdx: 108.4, costIdx: 110.9 },
    { q: "Q4-25", rev: 46.5, gm: 38.2, aftermarketPct: 28, deposits: 31.6, backlog: 55.0, ordersBookings: 49.5, priceIdx: 109.1, costIdx: 111.8 },
    { q: "Q1-26", rev: 47.0, gm: 38.5, aftermarketPct: 28, deposits: 34.2, backlog: 57.0, ordersBookings: 50.5, priceIdx: 110.3, costIdx: 113.1 }
  ],

  // ─── PVM ────────────────────────────────────────────────────────────────
  pvm: {
    // FY24 → FY25 bridge (consolidated)
    fy24to25Bridge: { reported: 11.0, organic: 6.0, price: 4.2, volume: 2.0, mix: -0.2, mna: 3.0, fx: 1.0, mna_revenue_$M: 4.9, organic_revenue_$M: 9.8 },
    // FY25 → TTM bridge
    fy25toTTMBridge: { reported: 1.6, organic: 1.0, price: 0.8, volume: 0.4, mix: -0.2, mna: 0.4, fx: 0.2 },
    sameCustomerOrganic: { TTM: 3.2, FY2025: 3.6, FY2024: 1.8, FY2023: 1.4 },     // ex-new-logos, ex-pricing
    pricingCeiling: { realizedYoY: 4.2, costInflationYoY: 4.0, spreadBps: 20, trend: "tightening" },
    skuPriceMix: [
      { sku: "P-440 Cut-Up Line",        family: "Slicing",       priceYoY: 4.8, volumeYoY: 1.2, passThrough: 78, mixGap: -180 },
      { sku: "P-220 Inspection X-Ray",   family: "Inspection",    priceYoY: 5.4, volumeYoY: 3.8, passThrough: 110, mixGap: 60 },
      { sku: "C-300 Coating Tunnel",     family: "Coatings",      priceYoY: 4.1, volumeYoY: 1.1, passThrough: 82, mixGap: -90 },
      { sku: "S-100 Aftermarket Parts",  family: "Parts",         priceYoY: 5.8, volumeYoY: 6.2, passThrough: 115, mixGap: 110 },
      { sku: "K-510 Service Contract",   family: "Service",       priceYoY: 6.2, volumeYoY: 8.4, passThrough: 120, mixGap: 220 },
      { sku: "F-110 Forming Press",      family: "Forming",       priceYoY: 3.7, volumeYoY: 0.4, passThrough: 70, mixGap: -240 },
      { sku: "R-220 Retrofit Module",    family: "Retrofit",      priceYoY: 3.9, volumeYoY: 1.6, passThrough: 88, mixGap: -40 }
    ],
    customerPriceRealization: [
      { cohort: "Top 5",  priceAsked: 5.0, priceRealized: 4.6, stuckPct: 92 },
      { cohort: "6-10",   priceAsked: 5.0, priceRealized: 4.4, stuckPct: 88 },
      { cohort: "11-20",  priceAsked: 5.0, priceRealized: 4.2, stuckPct: 84 },
      { cohort: "21+",    priceAsked: 5.0, priceRealized: 2.8, stuckPct: 56 }
    ]
  },

  // ─── TARIFF + INPUT COSTS ────────────────────────────────────────────────
  tariff: {
    totalTTM_$M: 2.2,
    bpsImpact: 50,
    passThroughPct: 70,
    netImpactBps: 15,
    byRegion: [
      { region: "US",    impact_$M: 1.32, exposureRev: 107.3, sharePct: 60 },
      { region: "EMEA",  impact_$M: 0.55, exposureRev: 44.4,  sharePct: 25 },
      { region: "LATAM", impact_$M: 0.22, exposureRev: 22.2,  sharePct: 10 },
      { region: "APAC",  impact_$M: 0.11, exposureRev: 11.1,  sharePct:  5 }
    ],
    bySegment: [
      { segment: "Protein",  impact_$M: 1.10, passThrough: 75 },
      { segment: "Prepared", impact_$M: 0.66, passThrough: 68 },
      { segment: "Coatings", impact_$M: 0.44, passThrough: 60 }
    ],
    inputCostTrendYoY: { steel: 5.2, electronics: 3.8, motors: 4.1, hydraulics: 3.4, packaging: 2.6 },
    quarterlyTariff_$M: [0.12, 0.14, 0.16, 0.18, 0.22, 0.26, 0.32, 0.36, 0.46, 0.52, 0.56, 0.66],   // Q1-23 → Q4-25
    quarterlyPricing_$M_realized: [0.10, 0.12, 0.14, 0.16, 0.20, 0.24, 0.30, 0.34, 0.42, 0.46, 0.50, 0.58]
  },

  // ─── MULTI-ERP DATA SYSTEMS INVENTORY ────────────────────────────────────
  systems: [
    { name: "Sage 300 (Legacy NCC pre-Q3 2024)", role: "Financials + AR/Inv/AP", coverage: 30, status: "Archived; line-item detail truncated >18mo pre-migration", reconStatus: "Partial" },
    { name: "NetSuite (Current)",                role: "Financials + AR/Inv/AP", coverage: 100, status: "Live; consolidated Q3 2024", reconStatus: "Clean" },
    { name: "Salesforce CRM",                    role: "Customer master + opportunities", coverage: 100, status: "Live since 2018", reconStatus: "Partial — 14 customer-ID name variants vs ERP" },
    { name: "Salesforce Field Service",          role: "Service tickets + contracts (post-Q2 2024)", coverage: 60, status: "Live since Q2 2024; pre-2024 contracts in PDFs", reconStatus: "Partial" },
    { name: "Smartsheet (NorthPlate integration)", role: "Integration milestones",     coverage: 86, status: "24 of 28 milestones tracked", reconStatus: "Clean" },
    { name: "Excel/PPT (VerdeCure plan)",        role: "Integration plan + tracker",    coverage: 50, status: "5 of 10 milestones tracked", reconStatus: "Partial" },
    { name: "Workforce Mgmt (technician time)",  role: "Service-labor hours",           coverage: 100, status: "Closes weekly to department-level cost code", reconStatus: "Wrong shape — not per-ticket" },
    { name: "Inventory tracking (Plant B legacy)", role: "WIP/FG split",                coverage: 100, status: "Single 'in-process' bucket — manual reclass at month-end", reconStatus: "Wrong shape" },
    { name: "Treasury (FX rates)",               role: "Daily FX feed",                 coverage: 100, status: "Live for NetSuite; legacy Sage uses monthly avg", reconStatus: "Partial" },
    { name: "Purchasing (PO + landed cost)",     role: "Input cost + tariff capture",   coverage: 100, status: "Captures tariff at PO ingestion — not allocated to SKU", reconStatus: "Wrong shape" }
  ],

  // ─── DATA-QUALITY CHECKS (cross-cut, used by Multi-ERP Integrity dashboard) ──
  dataChecks: [
    { id: 1, area: "Customer ID",       check: "Single canonical ID across ERP/CRM/Service", threshold: "<2% mismatch", status: "warn",  detail: "14 customers under 3+ name variants across Sage + NetSuite + CRM" },
    { id: 2, area: "Revenue type tag",  check: "Aftermarket type tagged (parts/svc/contracts)", threshold: "100%", status: "warn", detail: "Post-2023 clean; pre-2023 lumped" },
    { id: 3, area: "Equipment serial",  check: "Serial captured on new-eq sales", threshold: "≥85%", status: "warn", detail: "92% post-2023; 67% pre-2023" },
    { id: 4, area: "Parts→serial link", check: "Parts orders linked to equipment serial", threshold: "≥60%", status: "fail", detail: "38% currently — walk-in / phone-in untagged" },
    { id: 5, area: "Service contracts", check: "Lifecycle fields (start/end/renewal)", threshold: "All active", status: "warn", detail: "Post-Q2 2024 clean; ~180 pre-2024 in PDFs" },
    { id: 6, area: "Multi-year stitch", check: "≥48mo continuous customer revenue", threshold: "≥48mo", status: "fail", detail: "Pre-2022 ERP migration broke line-item stitch" },
    { id: 7, area: "Aftermarket margin",check: "GM at line-item for parts/svc/contracts", threshold: "≥90%", status: "warn", detail: "Service labor allocated department-monthly, not per ticket" },
    { id: 8, area: "Equipment status",  check: "Active/decom/sold tagged", threshold: "≥80% accuracy", status: "fail", detail: "Defaults to 'active'" },
    { id: 9, area: "Installed base register", check: "Serial → customer → install date → status", threshold: "Exists", status: "fail", detail: "Doesn't exist; reconstructable from sales + service history" },
    { id: 10, area: "Price action log", check: "List-price catalog history captured", threshold: "≥24mo", status: "warn", detail: "Structured log started Jan 2024 — 18 months" },
    { id: 11, area: "Tariff allocation", check: "Tariff allocated to SKU at line-item", threshold: "≥90% of tariff $", status: "fail", detail: "Hits at PO landed cost only — no SKU allocation key" },
    { id: 12, area: "FX at transaction date", check: "Treasury FX applied at txn date", threshold: "≥90%", status: "warn", detail: "Legacy Sage uses monthly avg" },
    { id: 13, area: "Acquisition tag",  check: "Revenue partitionable by acquired entity", threshold: "≥95% of months", status: "pass", detail: "Clean since Q3 2024 NetSuite consolidation" },
    { id: 14, area: "Customer cohort",  check: "Acquisition date populated", threshold: "100%", status: "warn", detail: "32 legacy customers default 1/1/2018" },
    { id: 15, area: "Deposit cancellation", check: "Deposit returns tagged separately from bad-debt", threshold: "All cancellations", status: "fail", detail: "Currently lumped into bad-debt" },
    { id: 16, area: "Price catalog history", check: "List-price catalog snapshotted monthly", threshold: "≥24mo of snapshots", status: "fail",  detail: "Current file only — no version control on list prices" },
    { id: 17, area: "BOM master",            check: "Bills-of-materials complete + standardized across entities", threshold: "100% of SKUs", status: "warn", detail: "VerdeCure BOMs still in Excel — needs migration to standard format" },
    { id: 18, area: "Inventory category",    check: "Plant B WIP vs FG split", threshold: "Categorized at source", status: "warn", detail: "Single 'in-process' bucket; manual reclass at month-end" },
    { id: 19, area: "SKU master",            check: "NorthPlate SKUs rationalized to product family", threshold: "100% mapped", status: "warn", detail: "12% still in 'Coatings — General'" },
    { id: 20, area: "Service labor cost",    check: "Allocated per service ticket", threshold: "≥95% of labor", status: "warn", detail: "Tracked at department-monthly only" }
  ],

  // ─── ACTION ITEMS — what the sponsor / CFO / portco team needs to do ─────
  // Each maps to one or more dataChecks via the `unblocks` array.
  actionItems: [
    { id: "A1",  action: "Restore pre-2022 ERP archive (line-item revenue + cost)", owner: "Portco IT + Finance",       weeks: 6, cost_K: 25, priority: "Critical", unblocks: [6, 14], lever: "Mix / re-rate" },
    { id: "A2",  action: "Build installed-base register (serial → customer → install → status)", owner: "Portco Ops + Service",     weeks: 8, cost_K: 40, priority: "Critical", unblocks: [9, 8],  lever: "Defensibility" },
    { id: "A3",  action: "Build tariff-to-SKU allocation key via BOM mapping",      owner: "Portco Finance",              weeks: 3, cost_K: 8,  priority: "Critical", unblocks: [11, 17], lever: "Price" },
    { id: "A4",  action: "Complete NorthPlate SKU rationalization",                 owner: "Commercial Ops",              weeks: 2, cost_K: 6,  priority: "High",     unblocks: [19, 2],  lever: "Mix" },
    { id: "A5",  action: "Build customer-ID dedup table (Sage / NetSuite / CRM)",   owner: "Portco IT",                   weeks: 1, cost_K: 4,  priority: "High",     unblocks: [1],      lever: "Multiple cuts" },
    { id: "A6",  action: "Force serial entry at parts intake (UX change)",          owner: "Portco Ops + IT",             weeks: 2, cost_K: 3,  priority: "High",     unblocks: [4],      lever: "Defensibility" },
    { id: "A7",  action: "Extract pre-2024 service contracts from customer PDFs",   owner: "Portco Admin",                weeks: 4, cost_K: 9,  priority: "Medium",   unblocks: [5],      lever: "Defensibility" },
    { id: "A8",  action: "Stand up structured price-action log + monthly catalog snapshot", owner: "Commercial Ops",      weeks: 1, cost_K: 2,  priority: "Critical", unblocks: [10, 16], lever: "Price" },
    { id: "A9",  action: "Allocate service labor cost per service ticket",          owner: "Portco Finance + Service",    weeks: 4, cost_K: 4,  priority: "Medium",   unblocks: [7, 20],  lever: "Margin" },
    { id: "A10", action: "Re-apply FX at transaction date for legacy Sage entity",  owner: "Portco Finance",              weeks: 1, cost_K: 2,  priority: "Medium",   unblocks: [12],     lever: "Growth bridge" },
    { id: "A11", action: "Tag deposit returns separately from bad-debt",            owner: "Portco Finance + Treasury",   weeks: 1, cost_K: 2,  priority: "High",     unblocks: [15],     lever: "Cash" },
    { id: "A12", action: "Split Plant B inventory into WIP vs FG at source",        owner: "Portco Ops",                  weeks: 2, cost_K: 3,  priority: "Medium",   unblocks: [18],     lever: "Cash" },
    { id: "A13", action: "Track equipment status (active / decom / sold) quarterly", owner: "Sales Ops + Service",       weeks: 2, cost_K: 3,  priority: "Medium",   unblocks: [8],      lever: "Defensibility" },
    { id: "A14", action: "Populate customer acquisition dates for 32 legacy accounts", owner: "Commercial Ops",           weeks: 1, cost_K: 1,  priority: "Medium",   unblocks: [14],     lever: "Cohort math" },
    { id: "A15", action: "VerdeCure BOM master migration to standard format",       owner: "Portco Ops + IT",             weeks: 3, cost_K: 5,  priority: "Medium",   unblocks: [17],     lever: "Multiple" }
  ],

  // ─── PALETTE (match existing NCC pack) ──────────────────────────────────
  palette: {
    navy: "#1E2761", navyDeep: "#121A47", gold: "#C9A227", goldLite: "#E6C95B",
    slate: "#475569", slateLite: "#94A3B8", bg: "#F8FAFC", mist: "#EEF2FF",
    border: "#E5E7EB", white: "#FFFFFF", red: "#B22234", green: "#2C5F2D",
    amber: "#B07A00"
  }  ,

  // ─── GRANULAR FACT TABLE (156 rows: 13 quarters × 3 segments × 4 regions) ──
  // Used by query() helper as single source of truth for filter/aggregation.
  facts: [
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"US", rev:12.544, newEq:9.283, after:3.261, ebitda:2.688, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:2.321, nwcPct:9.8, fcfPct:77, tariff:0.045},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"EMEA", rev:5.376, newEq:3.978, after:1.398, ebitda:1.152, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.995, nwcPct:9.8, fcfPct:77, tariff:0.018},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"LATAM", rev:3.136, newEq:2.321, after:0.815, ebitda:0.672, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.58, nwcPct:9.8, fcfPct:77, tariff:0.01},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"APAC", rev:1.344, newEq:0.995, after:0.349, ebitda:0.288, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.249, nwcPct:9.8, fcfPct:77, tariff:0.004},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"US", rev:5.824, newEq:4.543, after:1.281, ebitda:1.248, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:1.077, nwcPct:9.8, fcfPct:77, tariff:0.021},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.136, newEq:2.446, after:0.69, ebitda:0.672, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.58, nwcPct:9.8, fcfPct:77, tariff:0.01},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.344, newEq:1.048, after:0.296, ebitda:0.288, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.249, nwcPct:9.8, fcfPct:77, tariff:0.004},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"APAC", rev:0.896, newEq:0.699, after:0.197, ebitda:0.192, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.166, nwcPct:9.8, fcfPct:77, tariff:0.003},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"US", rev:1.05, newEq:0.903, after:0.147, ebitda:0.225, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.194, nwcPct:9.8, fcfPct:77, tariff:0.004},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.21, newEq:0.181, after:0.029, ebitda:0.045, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.039, nwcPct:9.8, fcfPct:77, tariff:0.001},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.098, newEq:0.084, after:0.014, ebitda:0.021, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.018, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q1-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"APAC", rev:0.042, newEq:0.036, after:0.006, ebitda:0.009, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.008, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"US", rev:13.261, newEq:9.813, after:3.448, ebitda:2.867, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:2.453, nwcPct:9.8, fcfPct:77, tariff:0.053},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"EMEA", rev:5.683, newEq:4.206, after:1.478, ebitda:1.229, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:1.051, nwcPct:9.8, fcfPct:77, tariff:0.02},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"LATAM", rev:3.315, newEq:2.453, after:0.862, ebitda:0.717, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.613, nwcPct:9.8, fcfPct:77, tariff:0.012},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"APAC", rev:1.421, newEq:1.051, after:0.369, ebitda:0.307, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.263, nwcPct:9.8, fcfPct:77, tariff:0.005},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"US", rev:6.157, newEq:4.802, after:1.354, ebitda:1.331, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:1.139, nwcPct:9.8, fcfPct:77, tariff:0.024},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.315, newEq:2.586, after:0.729, ebitda:0.717, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.613, nwcPct:9.8, fcfPct:77, tariff:0.012},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.421, newEq:1.108, after:0.313, ebitda:0.307, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.263, nwcPct:9.8, fcfPct:77, tariff:0.005},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"APAC", rev:0.947, newEq:0.739, after:0.208, ebitda:0.205, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.175, nwcPct:9.8, fcfPct:77, tariff:0.003},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"US", rev:1.11, newEq:0.955, after:0.155, ebitda:0.24, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.205, nwcPct:9.8, fcfPct:77, tariff:0.004},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.222, newEq:0.191, after:0.031, ebitda:0.048, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.041, nwcPct:9.8, fcfPct:77, tariff:0.001},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.104, newEq:0.089, after:0.015, ebitda:0.022, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.019, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q2-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"APAC", rev:0.044, newEq:0.038, after:0.006, ebitda:0.01, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.008, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"US", rev:13.44, newEq:9.946, after:3.494, ebitda:2.975, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:2.486, nwcPct:9.8, fcfPct:77, tariff:0.06},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"EMEA", rev:5.76, newEq:4.262, after:1.498, ebitda:1.275, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:1.066, nwcPct:9.8, fcfPct:77, tariff:0.023},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"LATAM", rev:3.36, newEq:2.486, after:0.874, ebitda:0.744, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.622, nwcPct:9.8, fcfPct:77, tariff:0.014},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"APAC", rev:1.44, newEq:1.066, after:0.374, ebitda:0.319, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.266, nwcPct:9.8, fcfPct:77, tariff:0.006},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"US", rev:6.24, newEq:4.867, after:1.373, ebitda:1.381, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:1.154, nwcPct:9.8, fcfPct:77, tariff:0.028},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.36, newEq:2.621, after:0.739, ebitda:0.744, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.622, nwcPct:9.8, fcfPct:77, tariff:0.014},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.44, newEq:1.123, after:0.317, ebitda:0.319, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.266, nwcPct:9.8, fcfPct:77, tariff:0.006},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"APAC", rev:0.96, newEq:0.749, after:0.211, ebitda:0.212, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.178, nwcPct:9.8, fcfPct:77, tariff:0.004},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"US", rev:1.125, newEq:0.968, after:0.158, ebitda:0.249, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.208, nwcPct:9.8, fcfPct:77, tariff:0.005},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.225, newEq:0.193, after:0.031, ebitda:0.05, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.042, nwcPct:9.8, fcfPct:77, tariff:0.001},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.105, newEq:0.09, after:0.015, ebitda:0.023, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.019, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q3-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"APAC", rev:0.045, newEq:0.039, after:0.006, ebitda:0.01, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.008, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"US", rev:13.798, newEq:10.211, after:3.588, ebitda:3.118, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:2.553, nwcPct:9.8, fcfPct:77, tariff:0.068},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"EMEA", rev:5.914, newEq:4.376, after:1.538, ebitda:1.336, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:1.094, nwcPct:9.8, fcfPct:77, tariff:0.026},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"LATAM", rev:3.45, newEq:2.553, after:0.897, ebitda:0.78, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.638, nwcPct:9.8, fcfPct:77, tariff:0.015},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Protein", reg:"APAC", rev:1.478, newEq:1.094, after:0.384, ebitda:0.334, gm:36.9, neGm:30.9, aeGm:50.9, aftPct:26, deposits:0.274, nwcPct:9.8, fcfPct:77, tariff:0.007},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"US", rev:6.406, newEq:4.997, after:1.409, ebitda:1.448, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:1.185, nwcPct:9.8, fcfPct:77, tariff:0.031},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.45, newEq:2.691, after:0.759, ebitda:0.78, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.638, nwcPct:9.8, fcfPct:77, tariff:0.015},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.478, newEq:1.153, after:0.325, ebitda:0.334, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.274, nwcPct:9.8, fcfPct:77, tariff:0.007},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Prepared", reg:"APAC", rev:0.986, newEq:0.769, after:0.217, ebitda:0.223, gm:34.5, neGm:28.5, aeGm:48.5, aftPct:22, deposits:0.182, nwcPct:9.8, fcfPct:77, tariff:0.004},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"US", rev:1.155, newEq:0.993, after:0.162, ebitda:0.261, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.214, nwcPct:9.8, fcfPct:77, tariff:0.006},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.231, newEq:0.199, after:0.032, ebitda:0.052, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.043, nwcPct:9.8, fcfPct:77, tariff:0.001},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.108, newEq:0.093, after:0.015, ebitda:0.024, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.02, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q4-23", fy:"FY2023", ttm:false, seg:"Coatings", reg:"APAC", rev:0.046, newEq:0.04, after:0.006, ebitda:0.01, gm:31.0, neGm:25.0, aeGm:45.0, aftPct:14, deposits:0.009, nwcPct:9.8, fcfPct:77, tariff:0.0},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"US", rev:13.104, newEq:9.435, after:3.669, ebitda:2.856, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:2.424, nwcPct:9.5, fcfPct:79, tariff:0.078},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"EMEA", rev:5.616, newEq:4.044, after:1.572, ebitda:1.224, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:1.039, nwcPct:9.5, fcfPct:79, tariff:0.03},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"LATAM", rev:3.276, newEq:2.359, after:0.917, ebitda:0.714, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.606, nwcPct:9.5, fcfPct:79, tariff:0.018},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"APAC", rev:1.404, newEq:1.011, after:0.393, ebitda:0.306, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.26, nwcPct:9.5, fcfPct:79, tariff:0.008},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"US", rev:6.287, newEq:4.778, after:1.509, ebitda:1.37, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:1.163, nwcPct:9.5, fcfPct:79, tariff:0.037},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.385, newEq:2.573, after:0.812, ebitda:0.738, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.626, nwcPct:9.5, fcfPct:79, tariff:0.018},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.451, newEq:1.103, after:0.348, ebitda:0.316, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.268, nwcPct:9.5, fcfPct:79, tariff:0.008},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"APAC", rev:0.967, newEq:0.735, after:0.232, ebitda:0.211, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.179, nwcPct:9.5, fcfPct:79, tariff:0.005},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"US", rev:2.632, newEq:2.159, after:0.474, ebitda:0.574, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.487, nwcPct:9.5, fcfPct:79, tariff:0.016},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.526, newEq:0.432, after:0.095, ebitda:0.115, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.097, nwcPct:9.5, fcfPct:79, tariff:0.003},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.246, newEq:0.201, after:0.044, ebitda:0.054, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.045, nwcPct:9.5, fcfPct:79, tariff:0.001},
    {q:"Q1-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"APAC", rev:0.105, newEq:0.086, after:0.019, ebitda:0.023, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.019, nwcPct:9.5, fcfPct:79, tariff:0.001},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"US", rev:13.608, newEq:9.798, after:3.81, ebitda:3.024, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:2.517, nwcPct:9.5, fcfPct:79, tariff:0.092},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"EMEA", rev:5.832, newEq:4.199, after:1.633, ebitda:1.296, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:1.079, nwcPct:9.5, fcfPct:79, tariff:0.036},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"LATAM", rev:3.402, newEq:2.449, after:0.953, ebitda:0.756, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.629, nwcPct:9.5, fcfPct:79, tariff:0.021},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"APAC", rev:1.458, newEq:1.05, after:0.408, ebitda:0.324, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.27, nwcPct:9.5, fcfPct:79, tariff:0.009},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"US", rev:6.529, newEq:4.962, after:1.567, ebitda:1.451, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:1.208, nwcPct:9.5, fcfPct:79, tariff:0.044},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.515, newEq:2.672, after:0.844, ebitda:0.781, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.65, nwcPct:9.5, fcfPct:79, tariff:0.021},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.507, newEq:1.145, after:0.362, ebitda:0.335, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.279, nwcPct:9.5, fcfPct:79, tariff:0.009},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"APAC", rev:1.004, newEq:0.763, after:0.241, ebitda:0.223, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.186, nwcPct:9.5, fcfPct:79, tariff:0.006},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"US", rev:2.734, newEq:2.242, after:0.492, ebitda:0.607, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.506, nwcPct:9.5, fcfPct:79, tariff:0.018},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.547, newEq:0.448, after:0.098, ebitda:0.121, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.101, nwcPct:9.5, fcfPct:79, tariff:0.003},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.255, newEq:0.209, after:0.046, ebitda:0.057, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.047, nwcPct:9.5, fcfPct:79, tariff:0.002},
    {q:"Q2-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"APAC", rev:0.109, newEq:0.09, after:0.02, ebitda:0.024, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.02, nwcPct:9.5, fcfPct:79, tariff:0.001},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"US", rev:13.944, newEq:10.04, after:3.904, ebitda:3.125, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:2.58, nwcPct:9.5, fcfPct:79, tariff:0.113},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"EMEA", rev:5.976, newEq:4.303, after:1.673, ebitda:1.339, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:1.106, nwcPct:9.5, fcfPct:79, tariff:0.044},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"LATAM", rev:3.486, newEq:2.51, after:0.976, ebitda:0.781, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.645, nwcPct:9.5, fcfPct:79, tariff:0.026},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"APAC", rev:1.494, newEq:1.076, after:0.418, ebitda:0.335, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.276, nwcPct:9.5, fcfPct:79, tariff:0.011},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"US", rev:6.69, newEq:5.084, after:1.606, ebitda:1.499, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:1.238, nwcPct:9.5, fcfPct:79, tariff:0.054},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.602, newEq:2.738, after:0.865, ebitda:0.807, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.666, nwcPct:9.5, fcfPct:79, tariff:0.026},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.544, newEq:1.173, after:0.371, ebitda:0.346, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.286, nwcPct:9.5, fcfPct:79, tariff:0.011},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"APAC", rev:1.029, newEq:0.782, after:0.247, ebitda:0.231, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.19, nwcPct:9.5, fcfPct:79, tariff:0.008},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"US", rev:2.801, newEq:2.297, after:0.504, ebitda:0.628, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.518, nwcPct:9.5, fcfPct:79, tariff:0.023},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.56, newEq:0.459, after:0.101, ebitda:0.126, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.104, nwcPct:9.5, fcfPct:79, tariff:0.004},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.261, newEq:0.214, after:0.047, ebitda:0.059, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.048, nwcPct:9.5, fcfPct:79, tariff:0.002},
    {q:"Q3-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"APAC", rev:0.112, newEq:0.092, after:0.02, ebitda:0.025, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.021, nwcPct:9.5, fcfPct:79, tariff:0.001},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"US", rev:14.448, newEq:10.403, after:4.045, ebitda:3.259, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:2.673, nwcPct:9.5, fcfPct:79, tariff:0.127},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"EMEA", rev:6.192, newEq:4.458, after:1.734, ebitda:1.397, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:1.146, nwcPct:9.5, fcfPct:79, tariff:0.049},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"LATAM", rev:3.612, newEq:2.601, after:1.011, ebitda:0.815, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.668, nwcPct:9.5, fcfPct:79, tariff:0.029},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Protein", reg:"APAC", rev:1.548, newEq:1.115, after:0.433, ebitda:0.349, gm:37.8, neGm:31.8, aeGm:51.8, aftPct:28, deposits:0.286, nwcPct:9.5, fcfPct:79, tariff:0.012},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"US", rev:6.932, newEq:5.268, after:1.664, ebitda:1.564, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:1.282, nwcPct:9.5, fcfPct:79, tariff:0.061},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.732, newEq:2.837, after:0.896, ebitda:0.842, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.69, nwcPct:9.5, fcfPct:79, tariff:0.03},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.6, newEq:1.216, after:0.384, ebitda:0.361, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.296, nwcPct:9.5, fcfPct:79, tariff:0.013},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Prepared", reg:"APAC", rev:1.066, newEq:0.81, after:0.256, ebitda:0.241, gm:35.0, neGm:29.0, aeGm:49.0, aftPct:24, deposits:0.197, nwcPct:9.5, fcfPct:79, tariff:0.008},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"US", rev:2.902, newEq:2.38, after:0.522, ebitda:0.655, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.537, nwcPct:9.5, fcfPct:79, tariff:0.026},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.58, newEq:0.476, after:0.104, ebitda:0.131, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.107, nwcPct:9.5, fcfPct:79, tariff:0.005},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.271, newEq:0.222, after:0.049, ebitda:0.061, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.05, nwcPct:9.5, fcfPct:79, tariff:0.002},
    {q:"Q4-24", fy:"FY2024", ttm:false, seg:"Coatings", reg:"APAC", rev:0.116, newEq:0.095, after:0.021, ebitda:0.026, gm:32.2, neGm:26.2, aeGm:46.2, aftPct:18, deposits:0.021, nwcPct:9.5, fcfPct:79, tariff:0.001},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Protein", reg:"US", rev:14.538, newEq:10.322, after:4.216, ebitda:3.271, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:2.689, nwcPct:8.7, fcfPct:83, tariff:0.16},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Protein", reg:"EMEA", rev:6.23, newEq:4.424, after:1.807, ebitda:1.402, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:1.153, nwcPct:8.7, fcfPct:83, tariff:0.062},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Protein", reg:"LATAM", rev:3.634, newEq:2.58, after:1.054, ebitda:0.818, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.672, nwcPct:8.7, fcfPct:83, tariff:0.036},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Protein", reg:"APAC", rev:1.558, newEq:1.106, after:0.452, ebitda:0.35, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.288, nwcPct:8.7, fcfPct:83, tariff:0.015},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Prepared", reg:"US", rev:6.864, newEq:5.148, after:1.716, ebitda:1.544, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:1.27, nwcPct:8.7, fcfPct:83, tariff:0.075},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Prepared", reg:"EMEA", rev:3.696, newEq:2.772, after:0.924, ebitda:0.832, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.684, nwcPct:8.7, fcfPct:83, tariff:0.037},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Prepared", reg:"LATAM", rev:1.584, newEq:1.188, after:0.396, ebitda:0.356, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.293, nwcPct:8.7, fcfPct:83, tariff:0.016},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Prepared", reg:"APAC", rev:1.056, newEq:0.792, after:0.264, ebitda:0.238, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.195, nwcPct:8.7, fcfPct:83, tariff:0.01},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Coatings", reg:"US", rev:3.63, newEq:2.868, after:0.762, ebitda:0.817, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.672, nwcPct:8.7, fcfPct:83, tariff:0.04},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Coatings", reg:"EMEA", rev:0.726, newEq:0.574, after:0.152, ebitda:0.163, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.134, nwcPct:8.7, fcfPct:83, tariff:0.007},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Coatings", reg:"LATAM", rev:0.339, newEq:0.268, after:0.071, ebitda:0.076, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.063, nwcPct:8.7, fcfPct:83, tariff:0.003},
    {q:"Q1-25", fy:"FY2025", ttm:false, seg:"Coatings", reg:"APAC", rev:0.145, newEq:0.115, after:0.03, ebitda:0.033, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.027, nwcPct:8.7, fcfPct:83, tariff:0.001},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"US", rev:15.033, newEq:10.674, after:4.36, ebitda:3.403, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:2.781, nwcPct:8.7, fcfPct:83, tariff:0.18},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"EMEA", rev:6.443, newEq:4.574, after:1.868, ebitda:1.458, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:1.192, nwcPct:8.7, fcfPct:83, tariff:0.07},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"LATAM", rev:3.758, newEq:2.668, after:1.09, ebitda:0.851, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.695, nwcPct:8.7, fcfPct:83, tariff:0.041},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"APAC", rev:1.611, newEq:1.144, after:0.467, ebitda:0.365, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.298, nwcPct:8.7, fcfPct:83, tariff:0.017},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"US", rev:7.098, newEq:5.324, after:1.775, ebitda:1.607, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:1.313, nwcPct:8.7, fcfPct:83, tariff:0.085},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"EMEA", rev:3.822, newEq:2.867, after:0.956, ebitda:0.865, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.707, nwcPct:8.7, fcfPct:83, tariff:0.041},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"LATAM", rev:1.638, newEq:1.228, after:0.409, ebitda:0.371, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.303, nwcPct:8.7, fcfPct:83, tariff:0.018},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"APAC", rev:1.092, newEq:0.819, after:0.273, ebitda:0.247, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.202, nwcPct:8.7, fcfPct:83, tariff:0.012},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"US", rev:3.754, newEq:2.965, after:0.788, ebitda:0.85, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.694, nwcPct:8.7, fcfPct:83, tariff:0.045},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"EMEA", rev:0.751, newEq:0.593, after:0.158, ebitda:0.17, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.139, nwcPct:8.7, fcfPct:83, tariff:0.008},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"LATAM", rev:0.35, newEq:0.277, after:0.074, ebitda:0.079, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.065, nwcPct:8.7, fcfPct:83, tariff:0.004},
    {q:"Q2-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"APAC", rev:0.15, newEq:0.119, after:0.032, ebitda:0.034, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.028, nwcPct:8.7, fcfPct:83, tariff:0.002},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"US", rev:15.198, newEq:10.791, after:4.408, ebitda:3.436, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:2.812, nwcPct:8.7, fcfPct:83, tariff:0.194},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"EMEA", rev:6.514, newEq:4.625, after:1.889, ebitda:1.473, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:1.205, nwcPct:8.7, fcfPct:83, tariff:0.075},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"LATAM", rev:3.8, newEq:2.698, after:1.102, ebitda:0.859, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.703, nwcPct:8.7, fcfPct:83, tariff:0.044},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"APAC", rev:1.628, newEq:1.156, after:0.472, ebitda:0.368, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.301, nwcPct:8.7, fcfPct:83, tariff:0.019},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"US", rev:7.176, newEq:5.382, after:1.794, ebitda:1.622, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:1.328, nwcPct:8.7, fcfPct:83, tariff:0.092},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"EMEA", rev:3.864, newEq:2.898, after:0.966, ebitda:0.874, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.715, nwcPct:8.7, fcfPct:83, tariff:0.045},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"LATAM", rev:1.656, newEq:1.242, after:0.414, ebitda:0.374, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.306, nwcPct:8.7, fcfPct:83, tariff:0.019},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"APAC", rev:1.104, newEq:0.828, after:0.276, ebitda:0.25, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.204, nwcPct:8.7, fcfPct:83, tariff:0.013},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"US", rev:3.795, newEq:2.998, after:0.797, ebitda:0.858, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.702, nwcPct:8.7, fcfPct:83, tariff:0.049},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"EMEA", rev:0.759, newEq:0.6, after:0.159, ebitda:0.172, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.14, nwcPct:8.7, fcfPct:83, tariff:0.009},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"LATAM", rev:0.354, newEq:0.28, after:0.074, ebitda:0.08, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.066, nwcPct:8.7, fcfPct:83, tariff:0.004},
    {q:"Q3-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"APAC", rev:0.152, newEq:0.12, after:0.032, ebitda:0.034, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.028, nwcPct:8.7, fcfPct:83, tariff:0.002},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"US", rev:15.364, newEq:10.908, after:4.455, ebitda:3.469, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:2.842, nwcPct:8.7, fcfPct:83, tariff:0.229},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"EMEA", rev:6.584, newEq:4.675, after:1.909, ebitda:1.487, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:1.218, nwcPct:8.7, fcfPct:83, tariff:0.089},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"LATAM", rev:3.841, newEq:2.727, after:1.114, ebitda:0.867, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.711, nwcPct:8.7, fcfPct:83, tariff:0.052},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Protein", reg:"APAC", rev:1.646, newEq:1.169, after:0.477, ebitda:0.372, gm:39.0, neGm:33.0, aeGm:53.0, aftPct:29, deposits:0.305, nwcPct:8.7, fcfPct:83, tariff:0.022},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"US", rev:7.254, newEq:5.441, after:1.813, ebitda:1.638, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:1.342, nwcPct:8.7, fcfPct:83, tariff:0.108},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"EMEA", rev:3.906, newEq:2.929, after:0.977, ebitda:0.882, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.723, nwcPct:8.7, fcfPct:83, tariff:0.053},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"LATAM", rev:1.674, newEq:1.255, after:0.419, ebitda:0.378, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.31, nwcPct:8.7, fcfPct:83, tariff:0.023},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Prepared", reg:"APAC", rev:1.116, newEq:0.837, after:0.279, ebitda:0.252, gm:36.0, neGm:30.0, aeGm:50.0, aftPct:25, deposits:0.206, nwcPct:8.7, fcfPct:83, tariff:0.015},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"US", rev:3.836, newEq:3.031, after:0.806, ebitda:0.866, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.71, nwcPct:8.7, fcfPct:83, tariff:0.057},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"EMEA", rev:0.767, newEq:0.606, after:0.161, ebitda:0.173, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.142, nwcPct:8.7, fcfPct:83, tariff:0.01},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"LATAM", rev:0.358, newEq:0.283, after:0.075, ebitda:0.081, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.066, nwcPct:8.7, fcfPct:83, tariff:0.005},
    {q:"Q4-25", fy:"FY2025", ttm:true, seg:"Coatings", reg:"APAC", rev:0.153, newEq:0.121, after:0.032, ebitda:0.035, gm:33.5, neGm:27.5, aeGm:47.5, aftPct:21, deposits:0.028, nwcPct:8.7, fcfPct:83, tariff:0.002},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Protein", reg:"US", rev:15.266, newEq:10.686, after:4.58, ebitda:3.508, gm:39.4, neGm:33.4, aeGm:53.4, aftPct:30, deposits:2.824, nwcPct:8.4, fcfPct:86, tariff:0.232},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Protein", reg:"EMEA", rev:6.542, newEq:4.58, after:1.963, ebitda:1.503, gm:39.4, neGm:33.4, aeGm:53.4, aftPct:30, deposits:1.21, nwcPct:8.4, fcfPct:86, tariff:0.09},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Protein", reg:"LATAM", rev:3.816, newEq:2.671, after:1.145, ebitda:0.877, gm:39.4, neGm:33.4, aeGm:53.4, aftPct:30, deposits:0.706, nwcPct:8.4, fcfPct:86, tariff:0.052},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Protein", reg:"APAC", rev:1.636, newEq:1.145, after:0.491, ebitda:0.376, gm:39.4, neGm:33.4, aeGm:53.4, aftPct:30, deposits:0.303, nwcPct:8.4, fcfPct:86, tariff:0.022},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Prepared", reg:"US", rev:7.332, newEq:5.426, after:1.906, ebitda:1.685, gm:36.1, neGm:30.1, aeGm:50.1, aftPct:26, deposits:1.356, nwcPct:8.4, fcfPct:86, tariff:0.111},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Prepared", reg:"EMEA", rev:3.948, newEq:2.922, after:1.026, ebitda:0.907, gm:36.1, neGm:30.1, aeGm:50.1, aftPct:26, deposits:0.73, nwcPct:8.4, fcfPct:86, tariff:0.054},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Prepared", reg:"LATAM", rev:1.692, newEq:1.252, after:0.44, ebitda:0.389, gm:36.1, neGm:30.1, aeGm:50.1, aftPct:26, deposits:0.313, nwcPct:8.4, fcfPct:86, tariff:0.023},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Prepared", reg:"APAC", rev:1.128, newEq:0.835, after:0.293, ebitda:0.259, gm:36.1, neGm:30.1, aeGm:50.1, aftPct:26, deposits:0.209, nwcPct:8.4, fcfPct:86, tariff:0.016},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Coatings", reg:"US", rev:4.23, newEq:3.299, after:0.931, ebitda:0.972, gm:33.7, neGm:27.7, aeGm:47.7, aftPct:22, deposits:0.783, nwcPct:8.4, fcfPct:86, tariff:0.064},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Coatings", reg:"EMEA", rev:0.846, newEq:0.66, after:0.186, ebitda:0.194, gm:33.7, neGm:27.7, aeGm:47.7, aftPct:22, deposits:0.157, nwcPct:8.4, fcfPct:86, tariff:0.012},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Coatings", reg:"LATAM", rev:0.395, newEq:0.308, after:0.087, ebitda:0.091, gm:33.7, neGm:27.7, aeGm:47.7, aftPct:22, deposits:0.073, nwcPct:8.4, fcfPct:86, tariff:0.005},
    {q:"Q1-26", fy:"FY2026", ttm:true, seg:"Coatings", reg:"APAC", rev:0.169, newEq:0.132, after:0.037, ebitda:0.039, gm:33.7, neGm:27.7, aeGm:47.7, aftPct:22, deposits:0.031, nwcPct:8.4, fcfPct:86, tariff:0.002}
  ]
};

// ─── QUERY HELPER ─────────────────────────────────────────────────────────
// MERIDIAN.query({seg, reg}, period) — filters facts and returns aggregated view.
//   seg: "ALL" | "Protein" | "Prepared" | "Coatings"
//   reg: "ALL" | "US" | "EMEA" | "LATAM" | "APAC"
//   period: "TTM" | "FY2025" | "FY2024" | "FY2023"
// Returns: {rev, newEq, after, ebitda, gm, aftPct, aftGm, neGm, deposits, nwcPct, fcfPct, tariff, n}
MERIDIAN.query = function(filters, period){
  filters = filters || {};
  const seg = filters.seg || "ALL";
  const reg = filters.reg || "ALL";
  const facts = MERIDIAN.facts.filter(function(f){
    // Period filter
    if(period === "TTM"){ if(!f.ttm) return false; }
    else { if(f.fy !== period) return false; }
    // Segment filter
    if(seg !== "ALL" && f.seg !== seg) return false;
    // Region filter
    if(reg !== "ALL" && f.reg !== reg) return false;
    return true;
  });
  // Aggregation
  let rev = 0, newEq = 0, after = 0, ebitda = 0, deposits = 0, tariff = 0;
  let gmRevW = 0, neGmRevW = 0, aeGmRevW = 0;
  let neRev = 0, aeRev = 0;  // weight bases for new-eq GM and aftermarket GM
  facts.forEach(function(f){
    rev    += f.rev;
    newEq  += f.newEq;
    after  += f.after;
    ebitda += f.ebitda;
    deposits += f.deposits;
    tariff += f.tariff;
    gmRevW   += f.gm   * f.rev;
    neGmRevW += f.neGm * f.newEq;
    aeGmRevW += f.aeGm * f.after;
    neRev    += f.newEq;
    aeRev    += f.after;
  });
  const gm   = rev   > 0 ? +(gmRevW   / rev  ).toFixed(2) : 0;
  const neGm = neRev > 0 ? +(neGmRevW / neRev).toFixed(2) : 0;
  const aftGm= aeRev > 0 ? +(aeGmRevW / aeRev).toFixed(2) : 0;
  const aftPct = rev > 0 ? +((after / rev) * 100).toFixed(2) : 0;
  // Period-invariant metrics: read from first matching row (nwcPct & fcfPct vary by period only)
  const first = facts[0] || {nwcPct:0, fcfPct:0};
  return {
    rev:     +rev.toFixed(3),
    newEq:   +newEq.toFixed(3),
    after:   +after.toFixed(3),
    ebitda:  +ebitda.toFixed(3),
    gm:      gm,
    aftPct:  aftPct,
    aftGm:   aftGm,
    neGm:    neGm,
    deposits:+deposits.toFixed(3),
    nwcPct:  first.nwcPct,
    fcfPct:  first.fcfPct,
    tariff:  +tariff.toFixed(3),
    n:       facts.length
  };
};


// Expose globally for non-module pages
if (typeof window !== "undefined") { window.MERIDIAN = MERIDIAN; }
if (typeof module !== "undefined" && module.exports) { module.exports = MERIDIAN; }
