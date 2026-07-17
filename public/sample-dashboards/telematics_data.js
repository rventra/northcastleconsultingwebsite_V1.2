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
 *
 * Utilization methodology: AVG(daily_hours / 24) across weekdays.
 * Denominator = 24 hrs/day (trucks available 24h on weekdays).
 *
 * Generated: 2026-07-17 from RDS live data
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
    day_shift_high:          { label: "Day Shift — High",              color: "#5B21B6" },
    day_shift_medium:        { label: "Day Shift — Medium",            color: "#7C3AED" },
    day_shift_local:         { label: "Day Shift — Local",             color: "#C084FC" },
    night_shift_regional:    { label: "Night Shift — Regional",        color: "#EC4899" },
    underutilized_declining: { label: "Underutilized / Declining", color: "#F43F5E" }
  },

  periods: {
    TTM:   { label: "TTM",   months: ["Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25","Jan-26","Feb-26","Mar-26","Apr-26","May-26"] },
    FY25:  { label: "FY25",  months: ["Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25"] },
    YTD26: { label: "YTD26", months: ["Jan-26","Feb-26","Mar-26","Apr-26","May-26"] }
  },

  // Fleet-level monthly aggregates (from RDS daily_summary)
  // Utilization = AVG(daily_total_hours / 24) across weekdays
  monthlyFleet: [
    { month: "Jun-25", miles: 20200, trips: 5005, activeHours: 663.3, idleHours: 1184.5, totalHours: 1847.7, activeUtil: 17.2, totalUtil: 47.9 },
    { month: "Jul-25", miles: 21171, trips: 5304, activeHours: 699.8, idleHours: 1304.1, totalHours: 2003.9, activeUtil: 16.5, totalUtil: 47.5 },
    { month: "Aug-25", miles: 20981, trips: 5156, activeHours: 682.5, idleHours: 1158.7, totalHours: 1841.2, activeUtil: 17.8, totalUtil: 48.0 },
    { month: "Sep-25", miles: 21078, trips: 5292, activeHours: 698.2, idleHours: 1227.3, totalHours: 1925.5, activeUtil: 17.5, totalUtil: 48.1 },
    { month: "Oct-25", miles: 20140, trips: 4988, activeHours: 661.3, idleHours: 1282.3, totalHours: 1943.6, activeUtil: 16.0, totalUtil: 47.1 },
    { month: "Nov-25", miles: 19486, trips: 4786, activeHours: 637.9, idleHours: 1112.1, totalHours: 1750.0, activeUtil: 17.0, totalUtil: 46.6 },
    { month: "Dec-25", miles: 22685, trips: 5690, activeHours: 744.3, idleHours: 1288.3, totalHours: 2032.5, activeUtil: 17.6, totalUtil: 47.9 },
    { month: "Jan-26", miles: 20607, trips: 5074, activeHours: 674.6, idleHours: 1255.5, totalHours: 1930.2, activeUtil: 16.6, totalUtil: 47.2 },
    { month: "Feb-26", miles: 19197, trips: 4756, activeHours: 635.8, idleHours: 1106.1, totalHours: 1741.9, activeUtil: 17.4, totalUtil: 47.9 },
    { month: "Mar-26", miles: 20478, trips: 5078, activeHours: 673.6, idleHours: 1260.9, totalHours: 1934.5, activeUtil: 16.5, totalUtil: 47.2 },
    { month: "Apr-26", miles: 21096, trips: 5212, activeHours: 687.5, idleHours: 1241.1, totalHours: 1928.6, activeUtil: 16.8, totalUtil: 47.1 },
    { month: "May-26", miles: 20346, trips: 5005, activeHours: 662.8, idleHours: 1184.3, totalHours: 1847.1, activeUtil: 16.8, totalUtil: 46.6 }
  ],

  // Per-vehicle monthly (from RDS daily_summary)
  monthlyByTruck: [
    { id: "T441", month: "Jun-25", miles: 2217, trips: 561, activeHours: 75.7, idleHours: 127.3, totalHours: 203.0 },
    { id: "T441", month: "Jul-25", miles: 2637, trips: 654, activeHours: 89.1, idleHours: 149.5, totalHours: 238.6 },
    { id: "T441", month: "Aug-25", miles: 1943, trips: 491, activeHours: 65.7, idleHours: 94.2, totalHours: 159.9 },
    { id: "T441", month: "Sep-25", miles: 2850, trips: 708, activeHours: 97.3, idleHours: 125.5, totalHours: 222.8 },
    { id: "T441", month: "Oct-25", miles: 2378, trips: 607, activeHours: 80.4, idleHours: 141.1, totalHours: 221.5 },
    { id: "T441", month: "Nov-25", miles: 2303, trips: 597, activeHours: 78.2, idleHours: 110.8, totalHours: 189.0 },
    { id: "T441", month: "Dec-25", miles: 2624, trips: 689, activeHours: 87.7, idleHours: 135.4, totalHours: 223.1 },
    { id: "T441", month: "Jan-26", miles: 2197, trips: 571, activeHours: 74.4, idleHours: 143.8, totalHours: 218.3 },
    { id: "T441", month: "Feb-26", miles: 2170, trips: 559, activeHours: 74.5, idleHours: 113.9, totalHours: 188.4 },
    { id: "T441", month: "Mar-26", miles: 2495, trips: 651, activeHours: 85.1, idleHours: 136.3, totalHours: 221.4 },
    { id: "T441", month: "Apr-26", miles: 2151, trips: 537, activeHours: 72.3, idleHours: 126.1, totalHours: 198.4 },
    { id: "T441", month: "May-26", miles: 2581, trips: 661, activeHours: 87.5, idleHours: 133.8, totalHours: 221.3 },
    { id: "T443", month: "Jun-25", miles: 2633, trips: 667, activeHours: 89.5, idleHours: 150.4, totalHours: 239.9 },
    { id: "T443", month: "Jul-25", miles: 3066, trips: 794, activeHours: 104.2, idleHours: 171.5, totalHours: 275.7 },
    { id: "T443", month: "Aug-25", miles: 2981, trips: 757, activeHours: 100.3, idleHours: 150.3, totalHours: 250.6 },
    { id: "T443", month: "Sep-25", miles: 2503, trips: 628, activeHours: 84.2, idleHours: 153.6, totalHours: 237.8 },
    { id: "T443", month: "Oct-25", miles: 2882, trips: 717, activeHours: 98.1, idleHours: 174.5, totalHours: 272.6 },
    { id: "T443", month: "Nov-25", miles: 2678, trips: 694, activeHours: 90.5, idleHours: 148.5, totalHours: 239.0 },
    { id: "T443", month: "Dec-25", miles: 2954, trips: 775, activeHours: 100.0, idleHours: 164.8, totalHours: 264.8 },
    { id: "T443", month: "Jan-26", miles: 2678, trips: 659, activeHours: 89.5, idleHours: 152.2, totalHours: 241.7 },
    { id: "T443", month: "Feb-26", miles: 2570, trips: 645, activeHours: 86.5, idleHours: 140.5, totalHours: 227.0 },
    { id: "T443", month: "Mar-26", miles: 2894, trips: 729, activeHours: 98.2, idleHours: 165.5, totalHours: 263.7 },
    { id: "T443", month: "Apr-26", miles: 3004, trips: 781, activeHours: 102.0, idleHours: 151.7, totalHours: 253.7 },
    { id: "T443", month: "May-26", miles: 2615, trips: 656, activeHours: 87.7, idleHours: 152.1, totalHours: 239.8 },
    { id: "T444", month: "Jun-25", miles: 2737, trips: 941, activeHours: 96.2, idleHours: 200.2, totalHours: 296.4 },
    { id: "T444", month: "Jul-25", miles: 3162, trips: 1076, activeHours: 109.9, idleHours: 232.1, totalHours: 342.0 },
    { id: "T444", month: "Aug-25", miles: 3338, trips: 1115, activeHours: 115.8, idleHours: 197.5, totalHours: 313.3 },
    { id: "T444", month: "Sep-25", miles: 3110, trips: 1067, activeHours: 108.5, idleHours: 218.0, totalHours: 326.5 },
    { id: "T444", month: "Oct-25", miles: 2881, trips: 994, activeHours: 100.4, idleHours: 213.1, totalHours: 313.5 },
    { id: "T444", month: "Nov-25", miles: 2687, trips: 918, activeHours: 93.9, idleHours: 175.5, totalHours: 269.4 },
    { id: "T444", month: "Dec-25", miles: 3438, trips: 1173, activeHours: 119.9, idleHours: 221.9, totalHours: 341.7 },
    { id: "T444", month: "Jan-26", miles: 3082, trips: 1020, activeHours: 107.3, idleHours: 221.5, totalHours: 328.8 },
    { id: "T444", month: "Feb-26", miles: 2904, trips: 956, activeHours: 100.5, idleHours: 182.1, totalHours: 282.6 },
    { id: "T444", month: "Mar-26", miles: 3079, trips: 1012, activeHours: 107.6, idleHours: 220.0, totalHours: 327.6 },
    { id: "T444", month: "Apr-26", miles: 2935, trips: 1003, activeHours: 103.3, idleHours: 207.8, totalHours: 311.2 },
    { id: "T444", month: "May-26", miles: 2964, trips: 999, activeHours: 102.8, idleHours: 210.2, totalHours: 313.0 },
    { id: "T445", month: "Jun-25", miles: 2932, trips: 754, activeHours: 99.4, idleHours: 152.5, totalHours: 251.9 },
    { id: "T445", month: "Jul-25", miles: 2504, trips: 659, activeHours: 84.4, idleHours: 142.1, totalHours: 226.5 },
    { id: "T445", month: "Aug-25", miles: 2578, trips: 689, activeHours: 87.9, idleHours: 151.5, totalHours: 239.4 },
    { id: "T445", month: "Sep-25", miles: 2996, trips: 771, activeHours: 102.3, idleHours: 153.2, totalHours: 255.5 },
    { id: "T445", month: "Oct-25", miles: 2700, trips: 705, activeHours: 91.2, idleHours: 171.0, totalHours: 262.2 },
    { id: "T445", month: "Nov-25", miles: 2554, trips: 629, activeHours: 86.8, idleHours: 140.6, totalHours: 227.4 },
    { id: "T445", month: "Dec-25", miles: 2961, trips: 760, activeHours: 100.3, idleHours: 162.0, totalHours: 262.3 },
    { id: "T445", month: "Jan-26", miles: 2857, trips: 726, activeHours: 97.8, idleHours: 152.4, totalHours: 250.2 },
    { id: "T445", month: "Feb-26", miles: 2486, trips: 623, activeHours: 84.4, idleHours: 144.1, totalHours: 228.5 },
    { id: "T445", month: "Mar-26", miles: 2917, trips: 735, activeHours: 98.9, idleHours: 164.0, totalHours: 262.9 },
    { id: "T445", month: "Apr-26", miles: 2690, trips: 698, activeHours: 90.4, idleHours: 161.8, totalHours: 252.2 },
    { id: "T445", month: "May-26", miles: 2476, trips: 632, activeHours: 84.2, idleHours: 130.4, totalHours: 214.6 },
    { id: "T446", month: "Jun-25", miles: 3312, trips: 438, activeHours: 81.5, idleHours: 172.1, totalHours: 253.6 },
    { id: "T446", month: "Jul-25", miles: 3162, trips: 422, activeHours: 78.0, idleHours: 209.2, totalHours: 287.1 },
    { id: "T446", month: "Aug-25", miles: 3781, trips: 488, activeHours: 92.3, idleHours: 176.3, totalHours: 268.5 },
    { id: "T446", month: "Sep-25", miles: 2811, trips: 375, activeHours: 68.5, idleHours: 180.6, totalHours: 249.1 },
    { id: "T446", month: "Oct-25", miles: 3273, trips: 441, activeHours: 79.6, idleHours: 199.1, totalHours: 278.7 },
    { id: "T446", month: "Nov-25", miles: 3312, trips: 437, activeHours: 80.9, idleHours: 171.2, totalHours: 252.2 },
    { id: "T446", month: "Dec-25", miles: 3793, trips: 500, activeHours: 92.1, idleHours: 188.7, totalHours: 280.8 },
    { id: "T446", month: "Jan-26", miles: 3372, trips: 451, activeHours: 82.6, idleHours: 184.2, totalHours: 266.8 },
    { id: "T446", month: "Feb-26", miles: 2820, trips: 378, activeHours: 69.2, idleHours: 170.3, totalHours: 239.6 },
    { id: "T446", month: "Mar-26", miles: 3180, trips: 419, activeHours: 76.9, idleHours: 187.8, totalHours: 264.7 },
    { id: "T446", month: "Apr-26", miles: 3784, trips: 508, activeHours: 92.2, idleHours: 186.6, totalHours: 278.8 },
    { id: "T446", month: "May-26", miles: 3702, trips: 490, activeHours: 90.5, idleHours: 176.8, totalHours: 267.3 },
    { id: "T447", month: "Jun-25", miles: 1255, trips: 329, activeHours: 48.4, idleHours: 125.1, totalHours: 173.5 },
    { id: "T447", month: "Jul-25", miles: 1549, trips: 398, activeHours: 62.0, idleHours: 119.4, totalHours: 181.4 },
    { id: "T447", month: "Aug-25", miles: 1313, trips: 345, activeHours: 51.8, idleHours: 121.2, totalHours: 173.0 },
    { id: "T447", month: "Sep-25", miles: 1679, trips: 430, activeHours: 65.3, idleHours: 128.0, totalHours: 193.4 },
    { id: "T447", month: "Oct-25", miles: 1427, trips: 373, activeHours: 56.5, idleHours: 106.0, totalHours: 162.5 },
    { id: "T447", month: "Nov-25", miles: 1103, trips: 280, activeHours: 44.1, idleHours: 90.8, totalHours: 134.9 },
    { id: "T447", month: "Dec-25", miles: 1685, trips: 453, activeHours: 66.4, idleHours: 120.6, totalHours: 187.0 },
    { id: "T447", month: "Jan-26", miles: 1141, trips: 289, activeHours: 45.0, idleHours: 108.3, totalHours: 153.3 },
    { id: "T447", month: "Feb-26", miles: 1537, trips: 408, activeHours: 60.8, idleHours: 105.4, totalHours: 166.2 },
    { id: "T447", month: "Mar-26", miles: 1068, trips: 281, activeHours: 42.7, idleHours: 113.5, totalHours: 156.1 },
    { id: "T447", month: "Apr-26", miles: 1033, trips: 286, activeHours: 40.9, idleHours: 110.2, totalHours: 151.1 },
    { id: "T447", month: "May-26", miles: 1003, trips: 266, activeHours: 39.4, idleHours: 105.1, totalHours: 144.5 },
    { id: "T448", month: "Jun-25", miles: 2861, trips: 747, activeHours: 96.5, idleHours: 143.7, totalHours: 240.2 },
    { id: "T448", month: "Jul-25", miles: 2570, trips: 656, activeHours: 86.9, idleHours: 153.0, totalHours: 239.9 },
    { id: "T448", month: "Aug-25", miles: 2495, trips: 621, activeHours: 82.7, idleHours: 141.5, totalHours: 224.2 },
    { id: "T448", month: "Sep-25", miles: 2713, trips: 701, activeHours: 91.4, idleHours: 147.5, totalHours: 239.0 },
    { id: "T448", month: "Oct-25", miles: 2430, trips: 601, activeHours: 81.8, idleHours: 155.2, totalHours: 236.9 },
    { id: "T448", month: "Nov-25", miles: 2456, trips: 626, activeHours: 83.3, idleHours: 153.7, totalHours: 237.0 },
    { id: "T448", month: "Dec-25", miles: 2656, trips: 689, activeHours: 90.7, idleHours: 161.6, totalHours: 252.3 },
    { id: "T448", month: "Jan-26", miles: 2899, trips: 736, activeHours: 97.3, idleHours: 154.2, totalHours: 251.5 },
    { id: "T448", month: "Feb-26", miles: 2833, trips: 714, activeHours: 96.3, idleHours: 143.8, totalHours: 240.2 },
    { id: "T448", month: "Mar-26", miles: 2424, trips: 624, activeHours: 82.0, idleHours: 145.9, totalHours: 227.9 },
    { id: "T448", month: "Apr-26", miles: 2952, trips: 743, activeHours: 100.1, idleHours: 162.0, totalHours: 262.1 },
    { id: "T448", month: "May-26", miles: 2618, trips: 679, activeHours: 88.7, idleHours: 147.9, totalHours: 236.5 },
    { id: "T449", month: "Jun-25", miles: 2252, trips: 568, activeHours: 76.1, idleHours: 113.2, totalHours: 189.3 },
    { id: "T449", month: "Jul-25", miles: 2522, trips: 645, activeHours: 85.4, idleHours: 127.3, totalHours: 212.7 },
    { id: "T449", month: "Aug-25", miles: 2552, trips: 650, activeHours: 86.0, idleHours: 126.2, totalHours: 212.2 },
    { id: "T449", month: "Sep-25", miles: 2415, trips: 612, activeHours: 80.7, idleHours: 120.8, totalHours: 201.5 },
    { id: "T449", month: "Oct-25", miles: 2169, trips: 550, activeHours: 73.3, idleHours: 122.4, totalHours: 195.7 },
    { id: "T449", month: "Nov-25", miles: 2393, trips: 605, activeHours: 80.2, idleHours: 121.0, totalHours: 201.2 },
    { id: "T449", month: "Dec-25", miles: 2574, trips: 651, activeHours: 87.1, idleHours: 133.3, totalHours: 220.5 },
    { id: "T449", month: "Jan-26", miles: 2382, trips: 622, activeHours: 80.8, idleHours: 138.9, totalHours: 219.7 },
    { id: "T449", month: "Feb-26", miles: 1877, trips: 473, activeHours: 63.6, idleHours: 105.9, totalHours: 169.5 },
    { id: "T449", month: "Mar-26", miles: 2422, trips: 627, activeHours: 82.2, idleHours: 127.9, totalHours: 210.0 },
    { id: "T449", month: "Apr-26", miles: 2546, trips: 656, activeHours: 86.3, idleHours: 134.8, totalHours: 221.2 },
    { id: "T449", month: "May-26", miles: 2387, trips: 622, activeHours: 82.1, idleHours: 128.1, totalHours: 210.2 }
  ],

  // Truck-level TTM (utilization = AVG(daily_hours / 24) across weekdays)
  truckMetrics: [
    { id: "T444", personality: "day_shift_high", activeUtil: 20.9, totalUtil: 62.0, activeHours: 1266, totalHours: 3766, miles: 36316, trips: 12274, avgTripMi: 3.0 },
    { id: "T445", personality: "day_shift_local", activeUtil: 18.8, totalUtil: 49.9, activeHours: 1108, totalHours: 2934, miles: 32652, trips: 8381, avgTripMi: 3.9 },
    { id: "T443", personality: "day_shift_local", activeUtil: 18.8, totalUtil: 49.9, activeHours: 1131, totalHours: 3006, miles: 33458, trips: 8502, avgTripMi: 3.9 },
    { id: "T448", personality: "day_shift_local", activeUtil: 18.6, totalUtil: 49.7, activeHours: 1078, totalHours: 2888, miles: 31907, trips: 8137, avgTripMi: 3.9 },
    { id: "T449", personality: "day_shift_medium", activeUtil: 16.4, totalUtil: 41.7, activeHours: 964, totalHours: 2464, miles: 28491, trips: 7281, avgTripMi: 3.9 },
    { id: "T446", personality: "night_shift_regional", activeUtil: 16.3, totalUtil: 52.7, activeHours: 984, totalHours: 3187, miles: 40301, trips: 5347, avgTripMi: 7.5 },
    { id: "T441", personality: "day_shift_medium", activeUtil: 16.1, totalUtil: 41.8, activeHours: 968, totalHours: 2506, miles: 28546, trips: 7286, avgTripMi: 3.9 },
    { id: "T447", personality: "underutilized_declining", activeUtil: 10.0, totalUtil: 31.2, activeHours: 623, totalHours: 1977, miles: 15793, trips: 4138, avgTripMi: 3.8 }
  ],

  // Drive vs idle hours (fleet monthly)
  driveIdleMonthly: [
    { month: "Jun-25", drive: 663, idle: 1184 },
    { month: "Jul-25", drive: 699, idle: 1304 },
    { month: "Aug-25", drive: 682, idle: 1158 },
    { month: "Sep-25", drive: 698, idle: 1227 },
    { month: "Oct-25", drive: 661, idle: 1282 },
    { month: "Nov-25", drive: 637, idle: 1112 },
    { month: "Dec-25", drive: 744, idle: 1288 },
    { month: "Jan-26", drive: 674, idle: 1255 },
    { month: "Feb-26", drive: 635, idle: 1106 },
    { month: "Mar-26", drive: 673, idle: 1260 },
    { month: "Apr-26", drive: 687, idle: 1241 },
    { month: "May-26", drive: 662, idle: 1184 }
  ],

  // Hourly activity heatmap (real data from RDS hourly_pattern)
  hourlyHeatmap: [
    { weekday: "Mon", hour: 0, value: 15 },
    { weekday: "Mon", hour: 1, value: 16 },
    { weekday: "Mon", hour: 2, value: 18 },
    { weekday: "Mon", hour: 3, value: 16 },
    { weekday: "Mon", hour: 4, value: 17 },
    { weekday: "Mon", hour: 5, value: 39 },
    { weekday: "Mon", hour: 6, value: 73 },
    { weekday: "Mon", hour: 7, value: 104 },
    { weekday: "Mon", hour: 8, value: 120 },
    { weekday: "Mon", hour: 9, value: 122 },
    { weekday: "Mon", hour: 10, value: 122 },
    { weekday: "Mon", hour: 11, value: 118 },
    { weekday: "Mon", hour: 12, value: 117 },
    { weekday: "Mon", hour: 13, value: 122 },
    { weekday: "Mon", hour: 14, value: 121 },
    { weekday: "Mon", hour: 15, value: 120 },
    { weekday: "Mon", hour: 16, value: 121 },
    { weekday: "Mon", hour: 17, value: 87 },
    { weekday: "Mon", hour: 18, value: 37 },
    { weekday: "Mon", hour: 19, value: 35 },
    { weekday: "Mon", hour: 20, value: 18 },
    { weekday: "Mon", hour: 21, value: 18 },
    { weekday: "Mon", hour: 22, value: 16 },
    { weekday: "Mon", hour: 23, value: 17 },
    { weekday: "Tue", hour: 0, value: 15 },
    { weekday: "Tue", hour: 1, value: 14 },
    { weekday: "Tue", hour: 2, value: 15 },
    { weekday: "Tue", hour: 3, value: 15 },
    { weekday: "Tue", hour: 4, value: 15 },
    { weekday: "Tue", hour: 5, value: 36 },
    { weekday: "Tue", hour: 6, value: 74 },
    { weekday: "Tue", hour: 7, value: 111 },
    { weekday: "Tue", hour: 8, value: 123 },
    { weekday: "Tue", hour: 9, value: 119 },
    { weekday: "Tue", hour: 10, value: 123 },
    { weekday: "Tue", hour: 11, value: 119 },
    { weekday: "Tue", hour: 12, value: 124 },
    { weekday: "Tue", hour: 13, value: 123 },
    { weekday: "Tue", hour: 14, value: 124 },
    { weekday: "Tue", hour: 15, value: 117 },
    { weekday: "Tue", hour: 16, value: 123 },
    { weekday: "Tue", hour: 17, value: 86 },
    { weekday: "Tue", hour: 18, value: 37 },
    { weekday: "Tue", hour: 19, value: 28 },
    { weekday: "Tue", hour: 20, value: 15 },
    { weekday: "Tue", hour: 21, value: 13 },
    { weekday: "Tue", hour: 22, value: 16 },
    { weekday: "Tue", hour: 23, value: 16 },
    { weekday: "Wed", hour: 0, value: 16 },
    { weekday: "Wed", hour: 1, value: 14 },
    { weekday: "Wed", hour: 2, value: 14 },
    { weekday: "Wed", hour: 3, value: 16 },
    { weekday: "Wed", hour: 4, value: 18 },
    { weekday: "Wed", hour: 5, value: 36 },
    { weekday: "Wed", hour: 6, value: 76 },
    { weekday: "Wed", hour: 7, value: 110 },
    { weekday: "Wed", hour: 8, value: 120 },
    { weekday: "Wed", hour: 9, value: 121 },
    { weekday: "Wed", hour: 10, value: 125 },
    { weekday: "Wed", hour: 11, value: 118 },
    { weekday: "Wed", hour: 12, value: 121 },
    { weekday: "Wed", hour: 13, value: 120 },
    { weekday: "Wed", hour: 14, value: 120 },
    { weekday: "Wed", hour: 15, value: 117 },
    { weekday: "Wed", hour: 16, value: 122 },
    { weekday: "Wed", hour: 17, value: 85 },
    { weekday: "Wed", hour: 18, value: 37 },
    { weekday: "Wed", hour: 19, value: 29 },
    { weekday: "Wed", hour: 20, value: 14 },
    { weekday: "Wed", hour: 21, value: 14 },
    { weekday: "Wed", hour: 22, value: 13 },
    { weekday: "Wed", hour: 23, value: 14 },
    { weekday: "Thu", hour: 0, value: 15 },
    { weekday: "Thu", hour: 1, value: 15 },
    { weekday: "Thu", hour: 2, value: 16 },
    { weekday: "Thu", hour: 3, value: 15 },
    { weekday: "Thu", hour: 4, value: 20 },
    { weekday: "Thu", hour: 5, value: 36 },
    { weekday: "Thu", hour: 6, value: 75 },
    { weekday: "Thu", hour: 7, value: 115 },
    { weekday: "Thu", hour: 8, value: 125 },
    { weekday: "Thu", hour: 9, value: 123 },
    { weekday: "Thu", hour: 10, value: 120 },
    { weekday: "Thu", hour: 11, value: 126 },
    { weekday: "Thu", hour: 12, value: 122 },
    { weekday: "Thu", hour: 13, value: 127 },
    { weekday: "Thu", hour: 14, value: 124 },
    { weekday: "Thu", hour: 15, value: 127 },
    { weekday: "Thu", hour: 16, value: 126 },
    { weekday: "Thu", hour: 17, value: 87 },
    { weekday: "Thu", hour: 18, value: 37 },
    { weekday: "Thu", hour: 19, value: 32 },
    { weekday: "Thu", hour: 20, value: 17 },
    { weekday: "Thu", hour: 21, value: 16 },
    { weekday: "Thu", hour: 22, value: 15 },
    { weekday: "Thu", hour: 23, value: 16 },
    { weekday: "Fri", hour: 0, value: 14 },
    { weekday: "Fri", hour: 1, value: 15 },
    { weekday: "Fri", hour: 2, value: 13 },
    { weekday: "Fri", hour: 3, value: 15 },
    { weekday: "Fri", hour: 4, value: 17 },
    { weekday: "Fri", hour: 5, value: 35 },
    { weekday: "Fri", hour: 6, value: 74 },
    { weekday: "Fri", hour: 7, value: 109 },
    { weekday: "Fri", hour: 8, value: 124 },
    { weekday: "Fri", hour: 9, value: 121 },
    { weekday: "Fri", hour: 10, value: 124 },
    { weekday: "Fri", hour: 11, value: 124 },
    { weekday: "Fri", hour: 12, value: 121 },
    { weekday: "Fri", hour: 13, value: 125 },
    { weekday: "Fri", hour: 14, value: 126 },
    { weekday: "Fri", hour: 15, value: 120 },
    { weekday: "Fri", hour: 16, value: 125 },
    { weekday: "Fri", hour: 17, value: 89 },
    { weekday: "Fri", hour: 18, value: 38 },
    { weekday: "Fri", hour: 19, value: 32 },
    { weekday: "Fri", hour: 20, value: 16 },
    { weekday: "Fri", hour: 21, value: 14 },
    { weekday: "Fri", hour: 22, value: 14 },
    { weekday: "Fri", hour: 23, value: 16 },
    { weekday: "Sat", hour: 6, value: 0 },
    { weekday: "Sat", hour: 7, value: 1 },
    { weekday: "Sat", hour: 8, value: 3 },
    { weekday: "Sat", hour: 9, value: 2 },
    { weekday: "Sat", hour: 10, value: 2 },
    { weekday: "Sat", hour: 11, value: 3 },
    { weekday: "Sat", hour: 12, value: 2 },
    { weekday: "Sat", hour: 13, value: 2 },
    { weekday: "Sat", hour: 14, value: 2 },
    { weekday: "Sat", hour: 15, value: 2 },
    { weekday: "Sat", hour: 16, value: 2 },
    { weekday: "Sat", hour: 17, value: 0 },
    { weekday: "Sun", hour: 6, value: 0 },
    { weekday: "Sun", hour: 7, value: 1 },
    { weekday: "Sun", hour: 8, value: 3 },
    { weekday: "Sun", hour: 9, value: 3 },
    { weekday: "Sun", hour: 10, value: 3 },
    { weekday: "Sun", hour: 11, value: 3 },
    { weekday: "Sun", hour: 12, value: 2 },
    { weekday: "Sun", hour: 13, value: 3 },
    { weekday: "Sun", hour: 14, value: 3 },
    { weekday: "Sun", hour: 15, value: 3 },
    { weekday: "Sun", hour: 16, value: 3 },
    { weekday: "Sun", hour: 17, value: 0 }
  ],

  // Weekday vs weekend avg daily hours per truck (from RDS)
  weekdayWeekend: [
    { id: "T441", weekday: 10.0, weekend: 10.1 },
    { id: "T443", weekday: 12.0, weekend: 0.0 },
    { id: "T444", weekday: 14.9, weekend: 0.0 },
    { id: "T445", weekday: 12.0, weekend: 0.0 },
    { id: "T446", weekday: 12.6, weekend: 0.0 },
    { id: "T447", weekday: 7.5, weekend: 8.5 },
    { id: "T448", weekday: 11.9, weekend: 0.0 },
    { id: "T449", weekday: 10.0, weekend: 9.4 }
  ],

  // Per-truck hourly drive-hour profile (avg per weekday, 24 values per truck).
  // Day-shift trucks: plateau 08:00–16:00 peaking 13:00.
  // T446 (night_shift_regional): peaks 23:00, ~90% of hours in 18:00–06:00.
  // T447 (underutilized_declining): low amplitude across the day.
  // Amplitudes scale with each truck's share of TTM active hours / 260 weekdays.
  truckHourly: (function(){
    const truckActiveHours = {
      T441: 968, T443: 1131, T444: 1266, T445: 1108,
      T446: 984,  T447: 623,  T448: 1078, T449: 964
    };
    const personalities = {
      T441: "day_shift_medium", T443: "day_shift_local", T444: "day_shift_high",
      T445: "day_shift_local", T446: "night_shift_regional",
      T447: "underutilized_declining", T448: "day_shift_local", T449: "day_shift_medium"
    };
    // Day-shift profile (relative weights; renormalized below so sum=1.0)
    const dayShiftShape = [
      0.005, 0.005, 0.005, 0.005, 0.005, 0.005,
      0.020, 0.050, 0.075, 0.075, 0.075, 0.075,
      0.075, 0.100, 0.075, 0.075, 0.075, 0.040,
      0.020, 0.015, 0.010, 0.010, 0.010, 0.005
    ];
    // Night-shift profile (T446) — peak at hour 23 (index 23)
    const nightShiftShape = [
      0.080, 0.050, 0.030, 0.020, 0.010, 0.010,
      0.020, 0.010, 0.005, 0.005, 0.005, 0.005,
      0.005, 0.005, 0.010, 0.020, 0.060, 0.080,
      0.090, 0.110, 0.120, 0.140, 0.150, 0.160
    ];
    // Underutilized profile (T447) — low amplitude, mild day shape
    const underutilizedShape = [
      0.020, 0.020, 0.020, 0.020, 0.020, 0.020,
      0.040, 0.070, 0.100, 0.110, 0.110, 0.100,
      0.100, 0.110, 0.100, 0.100, 0.090, 0.060,
      0.030, 0.030, 0.020, 0.020, 0.020, 0.020
    ];
    const profiles = {
      day_shift_high:          dayShiftShape,
      day_shift_medium:        dayShiftShape,
      day_shift_local:         dayShiftShape,
      night_shift_regional:    nightShiftShape,
      underutilized_declining: underutilizedShape
    };
    const normalize = (arr) => {
      const s = arr.reduce((a,b) => a+b, 0);
      return arr.map(v => v / s);
    };
    const daysPerYear = 260; // weekdays in TTM
    return Object.keys(truckActiveHours).map(id => {
      const shape = normalize(profiles[personalities[id]]);
      const perHourAvg = truckActiveHours[id] / daysPerYear;
      const hours = shape.map(s => +(s * perHourAvg).toFixed(3));
      return { id: id, hours: hours };
    });
  })(),

  // Trip economics per truck — drive min/trip, stop min/trip, avg trip miles
  tripEconomics: [
    { id: "T441", driveMin: 8.0,  stopMin: 12.7, avgTripMi: 3.9 },
    { id: "T443", driveMin: 8.0,  stopMin: 13.2, avgTripMi: 3.9 },
    { id: "T444", driveMin: 6.2,  stopMin: 12.2, avgTripMi: 3.0 },
    { id: "T445", driveMin: 7.9,  stopMin: 13.1, avgTripMi: 3.9 },
    { id: "T446", driveMin: 11.0, stopMin: 24.7, avgTripMi: 7.5 },
    { id: "T447", driveMin: 9.0,  stopMin: 19.6, avgTripMi: 3.8 },
    { id: "T448", driveMin: 7.9,  stopMin: 13.3, avgTripMi: 3.9 },
    { id: "T449", driveMin: 7.9,  stopMin: 12.4, avgTripMi: 3.9 }
  ],

  // Weekly miles per truck (52 weeks, deterministic sine/noise).
  // Each truck's weekly average = its TTM miles / 52, gentle monthly seasonality,
  // T447 trends downward across the year.
  weeklyMiles: (function(){
    const truckTTMMiles = {
      T441: 28546, T443: 33458, T444: 36316, T445: 32652,
      T446: 40301, T447: 15793, T448: 31907, T449: 28491
    };
    const out = {};
    Object.keys(truckTTMMiles).forEach((id, ti) => {
      const avg = truckTTMMiles[id] / 52;
      const arr = [];
      for (let w = 0; w < 52; w++){
        const seasonality = 1 + 0.10 * Math.sin((w / 52) * Math.PI * 2);
        const phase = ti * 0.7;
        const noise = 0.05 * Math.sin((w + phase) * 1.3) + 0.03 * Math.cos((w + phase) * 2.7);
        const trend = (id === "T447") ? (1 - (w / 52) * 0.25) : 1;
        arr.push(+(avg * seasonality * (1 + noise) * trend).toFixed(1));
      }
      out[id] = arr;
    });
    return out;
  })(),

  // Daily fleet trip count (365 days). Weekly cycle (weekday ≈195, weekend ≈30)
  // scaled so each calendar month sums to the monthlyFleet.trips total.
  dailyTrips: (function(){
    const monthlyTrips = {
      "Jun-25": 5005, "Jul-25": 5304, "Aug-25": 5156, "Sep-25": 5292,
      "Oct-25": 4988, "Nov-25": 4786, "Dec-25": 5690, "Jan-26": 5074,
      "Feb-26": 4756, "Mar-26": 5078, "Apr-26": 5212, "May-26": 5005
    };
    const daysInMonth = {
      "Jun-25": 30, "Jul-25": 31, "Aug-25": 31, "Sep-25": 30,
      "Oct-25": 31, "Nov-25": 30, "Dec-25": 31, "Jan-26": 31,
      "Feb-26": 28, "Mar-26": 31, "Apr-26": 30, "May-26": 31
    };
    const months = ["Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25","Jan-26","Feb-26","Mar-26","Apr-26","May-26"];
    const result = [];
    let dayIdx = 0;
    // Jun 1 2025 = Sunday → dayIdx%7 = 0 (Sun), 6 (Sat) are weekend
    for (const m of months){
      const dim = daysInMonth[m];
      const total = monthlyTrips[m];
      const monthly = [];
      let monthSum = 0;
      for (let d = 0; d < dim; d++){
        const dow = (dayIdx + d) % 7;
        const isWeekend = (dow === 0 || dow === 6);
        const target = isWeekend ? 30 : 195;
        monthly.push(target);
        monthSum += target;
      }
      const scale = total / monthSum;
      for (let d = 0; d < dim; d++){
        const noise = 1 + 0.04 * Math.sin((dayIdx + d) * 0.9);
        result.push(+((monthly[d] * scale) * noise).toFixed(1));
      }
      dayIdx += dim;
    }
    return result;
  })(),

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