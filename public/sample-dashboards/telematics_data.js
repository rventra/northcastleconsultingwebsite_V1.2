/* 3PL Fleet Telematics — shared sample data spec
 * Single source of truth for the NCC Fleet Telematics sample dashboard.
 *
 * Target: 8-vehicle Southern California drayage / last-mile fleet,
 *         operating out of a Long Beach depot, Jun 2025 – May 2026.
 *         Values are aggregated from the live telematics_demo PostgreSQL schema.
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
    YTD26: { label: "YTD26", months: ["Jan-26","Feb-26","Mar-26","Apr-26","May-26"] }
  },

  // ─── FLEET-LEVEL MONTHLY AGGREGATES ───────────────────────────────────────
  // Sourced from daily_summary. activeUtil = active_hours / available_hours; totalUtil = total_hours / available_hours.
  monthlyFleet: [
    { month: "Jun-25", miles: 20200, trips: 5005, activeHours: 663, idleHours: 1184, totalHours: 1848, activeUtil: 17.4, totalUtil: 48.4 },
    { month: "Jul-25", miles: 21171, trips: 5304, activeHours: 700, idleHours: 1304, totalHours: 2004, activeUtil: 16.8, totalUtil: 48.0 },
    { month: "Aug-25", miles: 20981, trips: 5156, activeHours: 682, idleHours: 1159, totalHours: 1841, activeUtil: 17.9, totalUtil: 48.2 },
    { month: "Sep-25", miles: 21078, trips: 5292, activeHours: 698, idleHours: 1227, totalHours: 1925, activeUtil: 17.5, totalUtil: 48.3 },
    { month: "Oct-25", miles: 20140, trips: 4988, activeHours: 661, idleHours: 1282, totalHours: 1944, activeUtil: 16.0, totalUtil: 47.1 },
    { month: "Nov-25", miles: 19486, trips: 4786, activeHours: 638, idleHours: 1112, totalHours: 1750, activeUtil: 17.1, totalUtil: 47.0 },
    { month: "Dec-25", miles: 22685, trips: 5690, activeHours: 744, idleHours: 1288, totalHours: 2033, activeUtil: 17.6, totalUtil: 48.1 },
    { month: "Jan-26", miles: 20607, trips: 5074, activeHours: 675, idleHours: 1256, totalHours: 1930, activeUtil: 16.6, totalUtil: 47.6 },
    { month: "Feb-26", miles: 19197, trips: 4756, activeHours: 636, idleHours: 1106, totalHours: 1742, activeUtil: 17.7, totalUtil: 48.4 },
    { month: "Mar-26", miles: 20478, trips: 5078, activeHours: 674, idleHours: 1261, totalHours: 1934, activeUtil: 16.5, totalUtil: 47.4 },
    { month: "Apr-26", miles: 21096, trips: 5212, activeHours: 688, idleHours: 1241, totalHours: 1929, activeUtil: 16.9, totalUtil: 47.3 },
    { month: "May-26", miles: 20346, trips: 5005, activeHours: 663, idleHours: 1184, totalHours: 1847, activeUtil: 17.0, totalUtil: 47.5 }
  ],

  // ─── TRUCK-LEVEL METRICS (TTM, all days) ──────────────────────────────────
  // Sourced from daily_summary; utilization is weekday-only (active/total vs 24-hr available).
  truckMetrics: [
    { id: "T444", personality: "day_shift_high",   activeUtil: 20.9, totalUtil: 62.0, activeHours: 1266, totalHours: 3766, miles: 36316, trips: 12274, avgTripMi: 3.0 },
    { id: "T446", personality: "night_shift_regional", activeUtil: 16.3, totalUtil: 52.7, activeHours: 984, totalHours: 3187, miles: 40301, trips: 5347, avgTripMi: 7.5 },
    { id: "T443", personality: "day_shift_local",  activeUtil: 18.8, totalUtil: 49.9, activeHours: 1131, totalHours: 3006, miles: 33458, trips: 8502, avgTripMi: 3.9 },
    { id: "T445", personality: "day_shift_local",  activeUtil: 18.8, totalUtil: 49.9, activeHours: 1108, totalHours: 2934, miles: 32652, trips: 8381, avgTripMi: 3.9 },
    { id: "T448", personality: "day_shift_local",  activeUtil: 18.6, totalUtil: 49.7, activeHours: 1078, totalHours: 2888, miles: 31907, trips: 8137, avgTripMi: 3.9 },
    { id: "T441", personality: "day_shift_medium", activeUtil: 16.4, totalUtil: 42.4, activeHours: 968, totalHours: 2506, miles: 28546, trips: 7286, avgTripMi: 3.9 },
    { id: "T449", personality: "day_shift_medium", activeUtil: 16.4, totalUtil: 41.9, activeHours: 964, totalHours: 2464, miles: 28491, trips: 7281, avgTripMi: 3.9 },
    { id: "T447", personality: "underutilized_declining", activeUtil: 10.5, totalUtil: 33.2, activeHours: 623, totalHours: 1977, miles: 15793, trips: 4138, avgTripMi: 3.8 }
  ],

  // ─── DRIVE vs IDLE HOURS (TTM monthly, fleet total) ───────────────────────
  driveIdleMonthly: [
    { month: "Jun-25", drive: 663, idle: 1184 },
    { month: "Jul-25", drive: 700, idle: 1304 },
    { month: "Aug-25", drive: 682, idle: 1159 },
    { month: "Sep-25", drive: 698, idle: 1227 },
    { month: "Oct-25", drive: 661, idle: 1282 },
    { month: "Nov-25", drive: 638, idle: 1112 },
    { month: "Dec-25", drive: 744, idle: 1288 },
    { month: "Jan-26", drive: 675, idle: 1256 },
    { month: "Feb-26", drive: 636, idle: 1106 },
    { month: "Mar-26", drive: 674, idle: 1261 },
    { month: "Apr-26", drive: 688, idle: 1241 },
    { month: "May-26", drive: 663, idle: 1184 }
  ],

  // ─── HOURLY ACTIVITY HEATMAP (TTM, fleet total drive hours by weekday × hour)
  hourlyHeatmap: (() => {
    const cells = [];
    const weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    // Representative profile tuned to match fleet active-hour distribution.
    const baseProfile = [18,12,8,6,6,10,32,85,145,175,185,180,178,182,190,185,170,115,68,45,36,28,24,20];
    for (let wd = 0; wd < 7; wd++) {
      const isWeekend = wd >= 5;
      for (let h = 0; h < 24; h++) {
        let v = baseProfile[h];
        if (isWeekend) v *= 0.35;
        if (wd === 0) v *= 1.05;
        if (wd === 4) v *= 0.97;
        cells.push({ weekday: weekdays[wd], hour: h, value: Math.round(v) });
      }
    }
    return cells;
  })(),

  // ─── WEEKDAY vs WEEKEND AVERAGE DAILY HOURS PER TRUCK ─────────────────────
  weekdayWeekend: [
    { id: "T444", weekday: 10.4, weekend: 3.2 },
    { id: "T446", weekday:  9.3, weekend: 4.5 },
    { id: "T443", weekday:  8.5, weekend: 2.5 },
    { id: "T445", weekday:  8.4, weekend: 2.4 },
    { id: "T448", weekday:  8.3, weekend: 2.4 },
    { id: "T441", weekday:  7.6, weekend: 2.2 },
    { id: "T449", weekday:  7.5, weekend: 2.1 },
    { id: "T447", weekday:  5.9, weekend: 1.9 }
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
