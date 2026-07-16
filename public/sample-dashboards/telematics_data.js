/* 3PL Fleet Telematics — shared sample data spec
 * Single source of truth for the NCC Fleet Telematics sample dashboard.
 *
 * Target: hypothetical 8-vehicle Southern California drayage / last-mile fleet,
 *         operating out of a Long Beach depot, Jun 2025 – May 2026.
 *         Representative of the live telematics_demo PostgreSQL schema.
 *
 * Live data source:
 *   RDS: telematics-demo-db.cv20ayo6ag7n.us-east-2.rds.amazonaws.com:5432
 *   DB:  telematics_demo
 *   Schema: 6 tables / 4 layers (gps_pings → trips → daily_summary → hourly_pattern)
 *   Interactive dashboard: https://main.d2pzfdprrzy6zu.amplifyapp.com/
 */

const TELEMATICS = {
  meta: {
    target: "Pacific Drayage Fleet",
    profile: "3PL fleet · 8 vehicles · Long Beach depot",
    depot: "Long Beach Depot",
    depotAddress: "111 W Ocean Blvd, Long Beach, CA 90802",
    periodStart: "2025-06-01",
    periodEnd: "2026-05-31",
    totalTrips: 61346,
    totalPings: 720970,
    sampleNote: "Illustrative · Sample Data",
    dataSource:
      "https://telematics-demo-db.cv20ayo6ag7n.us-east-2.rds.amazonaws.com:5432/telematics_demo",
    liveDashboard: "https://main.d2pzfdprrzy6zu.amplifyapp.com/"
  },

  // ─── VEHICLES ─────────────────────────────────────────────────────────────
  trucks: [
    { id: "T441", model: "Freightliner M2 106", year: 2022, personality: "day_shift_medium", label: "T441 · day_shift_medium" },
    { id: "T443", model: "Hino L7 Series",      year: 2021, personality: "day_shift_local",  label: "T443 · day_shift_local" },
    { id: "T444", model: "Freightliner M2 106", year: 2023, personality: "day_shift_high",   label: "T444 · day_shift_high" },
    { id: "T445", model: "Isuzu NRR",           year: 2020, personality: "day_shift_local",  label: "T445 · day_shift_local" },
    { id: "T446", model: "Volvo VNL 300",       year: 2022, personality: "night_shift_regional", label: "T446 · night_shift_regional" },
    { id: "T447", model: "Hino L6 Series",      year: 2019, personality: "underutilized_declining", label: "T447 · underutilized_declining" },
    { id: "T448", model: "Freightliner M2 112", year: 2024, personality: "day_shift_local",  label: "T448 · day_shift_local" },
    { id: "T449", model: "Hino L7 Series",      year: 2023, personality: "day_shift_medium", label: "T449 · day_shift_medium" }
  ],

  personalities: {
    day_shift_high:   { label: "Day Shift — High",   color: "#5B21B6" },
    day_shift_medium: { label: "Day Shift — Medium", color: "#7C3AED" },
    day_shift_local:  { label: "Day Shift — Local",  color: "#C084FC" },
    night_shift_regional: { label: "Night Shift — Regional", color: "#EC4899" },
    underutilized_declining: { label: "Underutilized / Declining", color: "#F43F5E" }
  },

  // ─── PERIODS ──────────────────────────────────────────────────────────────
  periods: {
    TTM:   { label: "TTM",   months: ["Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25","Jan-26","Feb-26","Mar-26","Apr-26","May-26"] },
    FY25:  { label: "FY25",  months: ["Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25"] },
    CY25:  { label: "CY25",  months: ["Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25"] },
    YTD26: { label: "YTD26", months: ["Jan-26","Feb-26","Mar-26","Apr-26","May-26"] }
  },

  // ─── FLEET-LEVEL MONTHLY AGGREGATES ───────────────────────────────────────
  // All weekday + weekend combined. Values derived from daily_summary rollup.
  monthlyFleet: [
    { month: "Jun-25", miles: 58400, trips: 4850, activeHours: 3720, idleHours: 1840, utilization: 46.2 },
    { month: "Jul-25", miles: 60200, trips: 5010, activeHours: 3840, idleHours: 1910, utilization: 47.1 },
    { month: "Aug-25", miles: 59100, trips: 4920, activeHours: 3760, idleHours: 1870, utilization: 46.5 },
    { month: "Sep-25", miles: 61300, trips: 5100, activeHours: 3910, idleHours: 1940, utilization: 48.3 },
    { month: "Oct-25", miles: 59800, trips: 4970, activeHours: 3820, idleHours: 1890, utilization: 47.4 },
    { month: "Nov-25", miles: 57600, trips: 4790, activeHours: 3680, idleHours: 1820, utilization: 45.8 },
    { month: "Dec-25", miles: 55200, trips: 4590, activeHours: 3520, idleHours: 1740, utilization: 44.1 },
    { month: "Jan-26", miles: 56800, trips: 4720, activeHours: 3630, idleHours: 1790, utilization: 45.3 },
    { month: "Feb-26", miles: 59400, trips: 4940, activeHours: 3790, idleHours: 1870, utilization: 46.9 },
    { month: "Mar-26", miles: 62100, trips: 5160, activeHours: 3960, idleHours: 1960, utilization: 49.1 },
    { month: "Apr-26", miles: 60800, trips: 5050, activeHours: 3880, idleHours: 1920, utilization: 48.0 },
    { month: "May-26", miles: 63246, trips: 5246, activeHours: 4030, idleHours: 1990, utilization: 49.8 }
  ],

  // ─── TRUCK-LEVEL METRICS (TTM, all days) ──────────────────────────────────
  truckMetrics: [
    { id: "T444", personality: "day_shift_high",   utilization: 62.3, activeHours: 1520, miles: 142800, trips: 11860, avgTripMi: 12.0 },
    { id: "T446", personality: "night_shift_regional", utilization: 53.1, activeHours: 1210, miles: 118400, trips: 7320,  avgTripMi: 16.2 },
    { id: "T443", personality: "day_shift_local",  utilization: 50.2, activeHours: 1180, miles:  95600, trips: 10020, avgTripMi:  9.5 },
    { id: "T445", personality: "day_shift_local",  utilization: 49.8, activeHours: 1160, miles:  94400, trips:  9920, avgTripMi:  9.5 },
    { id: "T448", personality: "day_shift_local",  utilization: 49.5, activeHours: 1150, miles:  93800, trips:  9860, avgTripMi:  9.5 },
    { id: "T441", personality: "day_shift_medium", utilization: 42.1, activeHours: 1050, miles:  82200, trips:  8240, avgTripMi: 10.0 },
    { id: "T449", personality: "day_shift_medium", utilization: 41.8, activeHours: 1040, miles:  81600, trips:  8160, avgTripMi: 10.0 },
    { id: "T447", personality: "underutilized_declining", utilization: 31.4, activeHours:  760, miles:  60400, trips:  5966, avgTripMi: 10.1 }
  ],

  // ─── DRIVE vs IDLE HOURS (TTM monthly, fleet total) ───────────────────────
  driveIdleMonthly: [
    { month: "Jun-25", drive: 2820, idle: 1740 },
    { month: "Jul-25", drive: 2910, idle: 1800 },
    { month: "Aug-25", drive: 2850, idle: 1770 },
    { month: "Sep-25", drive: 2960, idle: 1830 },
    { month: "Oct-25", drive: 2890, idle: 1790 },
    { month: "Nov-25", drive: 2790, idle: 1720 },
    { month: "Dec-25", drive: 2670, idle: 1640 },
    { month: "Jan-26", drive: 2750, idle: 1690 },
    { month: "Feb-26", drive: 2870, idle: 1760 },
    { month: "Mar-26", drive: 3000, idle: 1840 },
    { month: "Apr-26", drive: 2940, idle: 1800 },
    { month: "May-26", drive: 3050, idle: 1870 }
  ],

  // ─── HOURLY ACTIVITY HEATMAP (TTM, fleet total drive hours by weekday × hour)
  // 7 weekdays × 24 hours = 168 cells. Values are annual fleet drive hours.
  hourlyHeatmap: (() => {
    const cells = [];
    const weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    // Base shape: day-shift peak 08-16, night-shift peak 20-02, low weekend
    const baseProfile = [
      12,8,5,4,4,8,25,68,120,145,155,150,148,152,160,155,140,95,55,35,28,22,18,14
    ];
    for (let wd = 0; wd < 7; wd++) {
      const isWeekend = wd >= 5;
      for (let h = 0; h < 24; h++) {
        let v = baseProfile[h];
        if (isWeekend) v *= 0.35;
        // slight daily variation
        if (wd === 0) v *= 1.05;
        if (wd === 4) v *= 0.97;
        cells.push({ weekday: weekdays[wd], hour: h, value: Math.round(v) });
      }
    }
    return cells;
  })(),

  // ─── WEEKDAY vs WEEKEND AVERAGE DAILY HOURS PER TRUCK ─────────────────────
  weekdayWeekend: [
    { id: "T444", weekday: 10.2, weekend: 3.1 },
    { id: "T446", weekday:  9.1, weekend: 4.4 },
    { id: "T443", weekday:  8.4, weekend: 2.4 },
    { id: "T445", weekday:  8.3, weekend: 2.4 },
    { id: "T448", weekday:  8.2, weekend: 2.3 },
    { id: "T441", weekday:  7.5, weekend: 2.1 },
    { id: "T449", weekday:  7.4, weekend: 2.1 },
    { id: "T447", weekday:  5.8, weekend: 1.9 }
  ],

  // ─── DATA AUDIT / SOURCE INFO ─────────────────────────────────────────────
  dataAudit: {
    readiness: [
      { input: "gps_pings (source of truth)",          usedIn: "Trip boundaries, speed, location",       haveIt: "Ready",   rightFormat: "Ready",   clean: "Ready" },
      { input: "trips (derived from pings)",           usedIn: "Miles, drive/stop time, trip counts",    haveIt: "Ready",   rightFormat: "Ready",   clean: "Ready" },
      { input: "daily_summary (derived from trips)",   usedIn: "Utilization, active/idle hours",         haveIt: "Ready",   rightFormat: "Ready",   clean: "Ready" },
      { input: "hourly_pattern (derived from pings)",  usedIn: "Heatmap, peak-hour analysis",            haveIt: "Ready",   rightFormat: "Ready",   clean: "Ready" },
      { input: "trucks (static metadata)",             usedIn: "Vehicle profile, personality filters",   haveIt: "Ready",   rightFormat: "Ready",   clean: "Ready" }
    ]
  }
};
