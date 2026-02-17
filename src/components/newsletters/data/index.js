// Registry of all newsletter weeks
// TO ADD A NEW WEEK:
// 1. Create file: week-YYYY-MM-DD.js with data matching schema
// 2. Import it here
// 3. Add to WEEKS_REGISTRY array (newest first)

import week20251117 from './week-2025-11-17';
import week20251124 from './week-2025-11-24';
import week20251202 from './week-2025-12-02';
import week20251208 from './week-2025-12-08';
import week20251216 from './week-2025-12-16';
import week20251222 from './week-2025-12-22';
import week20251229 from './week-2025-12-29';
import week20260107 from './week-2026-01-07';
import week20260112 from './week-2026-01-12';
import week20260120 from './week-2026-01-20';
import week20260126 from './week-2026-01-26';
import week20260202 from './week-2026-02-02';
import week20260209 from './week-2026-02-09';
import week20260217 from './week-2026-02-17';

export const WEEKS_REGISTRY = [
  week20260217,  // Newest first
  week20260209,
  week20260202,
  week20260126,
  week20260120,
  week20260112,
  week20260107,
  week20251229,
  week20251222,
  week20251216,
  week20251208,
  week20251202,
  week20251124,
  week20251117,
];

export const getWeekById = (id) => WEEKS_REGISTRY.find(w => w.metadata.id === id);
export const getMostRecentWeek = () => WEEKS_REGISTRY[0];
export const getAllWeeksMeta = () => WEEKS_REGISTRY.map(w => ({
  id: w.metadata.id,
  publishDate: w.metadata.publishDate,
  title: w.metadata.title
}));
