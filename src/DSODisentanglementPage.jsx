import React from 'react';
import { Link } from 'react-router-dom';

export default function DSODisentanglementPage() {
  const challenges = [
    {
      title: 'Cross-Owned Entities',
      desc: 'One partner holds a different ownership percentage in every practice, lab, and real-estate entity. We build entity-level equity waterfalls — from gross practice value to net settlement.',
    },
    {
      title: 'Shared Services & Captive Labs',
      desc: 'A central lab or management entity serves every office, so its economics belong to no one — and everyone. We reallocate shared-service EBITDA to producing entities, with logic that adapts to each exit scenario.',
    },
    {
      title: 'Intercompany Entanglement',
      desc: 'Years of due-to / due-from loans, partner draws, and accrued deferred compensation obscure who owes what. We forensically reconcile every balance — transaction by transaction, by entity and by partner.',
    },
    {
      title: 'Lender Constraints',
      desc: 'Dozens of loan instruments and thin coverage mean a bank simply won\u2019t fund the buyout. We deliver CFADS / DSCR analysis and lender-ready seller-note structures that close the gap.',
    },
  ];

  const workstreams = [
    {
      num: '01',
      title: 'Hybrid Multi-Entity Valuation',
      desc: 'Going-concern entities on EBITDA multiples; underperforming entities on net-asset-value floors excluding goodwill — supported by formal multiple-justification memos, with goodwill embedded rather than double counted.',
    },
    {
      num: '02',
      title: 'Partner-Exit Scenario Analysis',
      desc: 'Full exit vs. partial exit vs. asset retention — complete equity waterfalls by scenario, replacement-clinician compensation modeling, and downside insolvency-trap stress tests.',
    },
    {
      num: '03',
      title: 'Intercompany & Deferred-Comp Reconciliation',
      desc: 'Transaction-level due-to / due-from mapping by entity and partner, partner draw true-ups, deferred compensation rollforwards, and the balance-sheet adjustments that follow.',
    },
    {
      num: '04',
      title: 'Debt Disentanglement',
      desc: 'Every loan instrument mapped to an entity, allocated to partners by ownership percentage, reconciled to lender schedules, and sequenced for payoff or refinance.',
    },
    {
      num: '05',
      title: 'CFADS & DSCR Analysis',
      desc: 'EBITDA-to-cash-flow bridges, multi-year debt-service step-downs, and DSCR under competing financing structures — framed the way lenders underwrite.',
    },
    {
      num: '06',
      title: 'Seller-Note Engineering',
      desc: 'PIK \u2192 interest-only \u2192 amortizing structures with cash-flow payment gates, covenants, subordination and standstill provisions senior lenders can accept — and missed-payment mechanics that protect everyone.',
    },
  ];

  const phases = [
    { num: '01', title: 'Discover', duration: '2–4 weeks', desc: 'Entity map, ownership ledger, debt inventory, and intercompany data collection.' },
    { num: '02', title: 'Model', duration: '4–8 weeks', desc: 'Entity-level valuations, shared-service reallocation, and exit scenarios with equity waterfalls.' },
    { num: '03', title: 'Structure', duration: '2–4 weeks', desc: 'DSCR-tested financing, seller-note terms, subordination packages, lender presentations.' },
    { num: '04', title: 'Support', duration: 'Through close', desc: 'Negotiation support, lender Q&A, documentation tie-outs, settlement mechanics.' },
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          HERO 1 — Full-viewport navy title screen (McKinsey style)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="pt-16">
        <div className="relative bg-[#051c2c] min-h-[85vh] flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto py-24">
            <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
              Specialized Advisory
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white leading-[1.15] mb-8">
              Dental Partnership &amp; DSO Disentanglement
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Unwinding a partner&rsquo;s economics across cross-owned practices, captive labs, intercompany loans, and lender covenants — cleanly, credibly, and without breaking the practice.
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STATEMENT — Large blue pull-quote style engagement snapshot
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563EB] text-2xl md:text-3xl leading-snug font-normal mb-8">
            &ldquo;A multi-location dental partnership group — eight legal entities spanning seven practices and a captive central lab — needed to buy out a departing partner who held a different ownership stake in every entity. The bank wouldn&rsquo;t fund it.&rdquo;
          </p>
          <p className="text-[#2563EB] text-sm font-medium">
            — Engagement Snapshot
          </p>
          <p className="text-[#2563EB]/70 text-sm">
            Multi-location dental partnership group, Mountain West
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE CHALLENGE — Narrow editorial column
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white pb-20 md:pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Challenge
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-8">
            Why partner exits get stuck
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12">
            In a multi-entity dental group, a partner is never just a partner. They are a shareholder in every practice, a lender to some entities and a borrower from others, owed deferred compensation by the group, and jointly liable on debt held against equipment, build-outs, and real estate. Untangling one person&rsquo;s economics without destabilizing the whole organization is the real work of a carve-out.
          </p>

          <div>
            {challenges.map((c, i) => (
              <div key={i} className="border-t border-gray-200 py-8">
                <h3 className="text-lg font-semibold text-[#051c2c] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO 2 — Full-viewport blue section divider (McKinsey style)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#2563EB] min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto py-24">
          <p className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            The Approach
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.15]">
            One engagement. Six workstreams.
          </h2>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WORKSTREAMS — Hairline numbered rows, editorial column
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {workstreams.map((w) => (
            <div key={w.num} className="border-t border-gray-200 py-4 md:py-5 flex gap-6">
              <span className="text-sm font-semibold text-[#2563EB] mt-0.5 flex-shrink-0">{w.num}</span>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#051c2c] mb-1">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FULL-BLEED IMAGE — with navy caption card (McKinsey style)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        {/* Blurred background image + navy opacity overlay for readability */}
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-[#051c2c]/70"></div>

        {/* Centered statement across the image */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-white text-2xl md:text-4xl font-light leading-snug md:leading-snug">
            Every thread mapped before any is pulled — entities, ownership, intercompany balances, deferred compensation, and debt.
          </p>
          <p className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mt-8">
            Verified against source records
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ENGAGEMENT MODEL — 4 quiet phases
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Engagement Model
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-12">
            Discover. Model. Structure. Support.
          </h2>
          <div>
            {phases.map((p) => (
              <div key={p.num} className="border-t border-gray-200 py-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <div className="flex items-baseline gap-4 md:w-56 flex-shrink-0">
                  <span className="text-sm font-semibold text-[#2563EB]">{p.num}</span>
                  <h3 className="text-lg font-semibold text-[#051c2c]">{p.title}</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed flex-1">{p.desc}</p>
                <span className="text-sm text-[#051c2c]/50 md:w-32 md:text-right flex-shrink-0">{p.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE IMPACT — Stats + outcomes on navy
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Impact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 max-w-2xl">
            A buyout the bank wouldn&rsquo;t fund — made financeable.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
            Three exit scenarios modeled, every intercompany balance reconciled, and a subordinated seller note — structured with cash-flow payment gates and DSCR covenants — that senior lenders could accept. The remaining partners got a defensible settlement; the departing partner got terms that actually pay out.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '8', label: 'Legal entities unwound' },
              { value: '30+', label: 'Debt instruments mapped' },
              { value: '3', label: 'Exit scenarios modeled' },
              { value: '100%', label: 'Models independently re-verified' },
            ].map((stat, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <p className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/case-studies/corporate-dental-carve-out"
              className="inline-flex items-center text-white text-sm font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors"
            >
              Read the full case study <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          GET IN TOUCH — Quiet CTA
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-20 md:py-24 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">
            Facing a partner exit or practice separation?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Let&rsquo;s discuss how to unwind the entities, satisfy the lenders, and get to a clean close.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=DSO%20Disentanglement%20Inquiry"
            className="inline-block bg-[#051c2c] text-white px-8 py-3 text-sm font-semibold hover:bg-[#2563EB] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#051c2c] transition-colors text-sm">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
