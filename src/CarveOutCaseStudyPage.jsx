import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Carve-Out',
  backTo: '/case-studies/corporate-development',
  backLabel: 'Corporate Development Case Studies',
  title: 'Unwinding a Multi-Entity Dental Partnership',
  standfirst: 'A partner buyout across eight legal entities — seven practices, a captive lab, and 30+ debt instruments.',
  image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'Dental Services / DSO' },
    { label: 'Duration', value: '2 months' },
    { label: 'Team', value: 'Director-led deal team' },
    { label: 'Services', value: 'Carve-Out / Corporate Development' },
  ],
  situationTitle: 'A buyout the bank wouldn\u2019t fund',
  situationIntro: 'A multi-location dental partnership group in the Mountain West needed to buy out a departing partner whose economics were entangled across the entire organization: a different ownership percentage in every one of eight legal entities, years of intercompany loans and deferred compensation, and more than 30 debt instruments spread across entities and lenders. The group\u2019s bank declined to finance the buyout.',
  challenges: [
    { title: 'Cross-owned entities', desc: 'Seven practices plus a captive central lab — and a different ownership stake in each.' },
    { title: 'Intercompany entanglement', desc: 'Years of due-to / due-from loans, partner draws, and accrued deferred compensation with no clean ledger.' },
    { title: 'Shared lab economics', desc: 'The central lab served every office, so its value belonged to no one — and everyone.' },
    { title: 'Lender constraints', desc: 'Thin coverage and dozens of instruments meant conventional financing was off the table.' },
  ],
  approachTitle: 'Entity by entity. Transaction by transaction.',
  steps: [
    { title: 'Mapped the Entity & Ownership Web', desc: 'All eight legal entities, cross-ownership percentages, and every economic relationship between practices, the captive lab, and the partners — the master map for everything that followed.' },
    { title: 'Valued Each Entity on a Hybrid Framework', desc: 'Going-concern practices on EBITDA multiples supported by a formal multiple-justification memo; underperforming entities at net asset value excluding goodwill — a tangible floor instead of negative enterprise values.' },
    { title: 'Reallocated the Captive Lab\u2019s EBITDA', desc: 'The central lab treated as a pass-through, its EBITDA redistributed to producing practices by revenue share — with allocation logic that shifted correctly under each exit scenario, including one where the departing partner retained the lab.' },
    { title: 'Reconciled Intercompany & Deferred Compensation', desc: 'Due-to / due-from balances classified transaction by transaction, by entity and by partner; accrued-but-unpaid doctor compensation rolled forward by quarter; partner draws trued up against the balance sheet.' },
    { title: 'Disentangled the Debt', desc: 'All 30+ loan instruments mapped to specific entities, allocated to the departing partner by ownership percentage, and reconciled to the practice\u2019s debt schedule and lender records.' },
    { title: 'Modeled Three Exit Scenarios', desc: 'Full exit, partial exit, and asset retention — complete equity waterfalls from gross practice value to net settlement, including replacement-clinician compensation and downside stress tests.' },
    { title: 'Engineered a Lender-Ready Seller Note', desc: 'A subordinated note (PIK \u2192 interest-only \u2192 amortizing) with cash-flow payment gates, DSCR covenants, and standstill provisions senior lenders could accept — packaged with the CFADS / DSCR analysis to present it.' },
  ],
  impactTitle: 'Three quantified paths to a clean close.',
  impactText: 'The remaining partners received a defensible valuation of every entity, a fully reconciled picture of who owed what, and three clearly quantified exit scenarios. The seller-note structure — tested against multi-year DSCR projections — made the buyout financeable without insolventing the practice, and gave senior lenders the protections they needed to consent. Every model was independently re-verified before delivery, so the numbers held up in front of partners, counsel, and lenders alike.',
  stats: [
    { value: '8', label: 'Entities valued & unwound' },
    { value: '30+', label: 'Debt instruments mapped' },
    { value: '3', label: 'Exit scenarios delivered' },
    { value: '100%', label: 'Models independently re-verified' },
  ],
  ctaTitle: 'Facing a carve-out or partner exit?',
  ctaText: 'Let\u2019s discuss how to unwind the entities, satisfy the lenders, and get to a clean close.',
  ctaSubject: 'Carve-Out%20Inquiry',
  relatedTo: '/services/dso-disentanglement',
  relatedLabel: 'Related Service: Dental & DSO Disentanglement',
};

export default function CarveOutCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
