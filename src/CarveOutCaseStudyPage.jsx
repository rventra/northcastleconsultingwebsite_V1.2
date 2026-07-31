import React from 'react';
import { Link } from 'react-router-dom';

export default function CarveOutCaseStudyPage() {
  const steps = [
    { num: '01', title: 'Mapped the Entity & Ownership Web', desc: 'All eight legal entities, cross-ownership percentages, and every economic relationship between practices, the captive lab, and the partners — the master map for everything that followed.' },
    { num: '02', title: 'Valued Each Entity on a Hybrid Framework', desc: 'Going-concern practices on EBITDA multiples supported by a formal multiple-justification memo; underperforming entities at net asset value excluding goodwill — a tangible floor instead of negative enterprise values.' },
    { num: '03', title: 'Reallocated the Captive Lab\u2019s EBITDA', desc: 'The central lab treated as a pass-through, its EBITDA redistributed to producing practices by revenue share — with allocation logic that shifted correctly under each exit scenario, including one where the departing partner retained the lab.' },
    { num: '04', title: 'Reconciled Intercompany & Deferred Compensation', desc: 'Due-to / due-from balances classified transaction by transaction, by entity and by partner; accrued-but-unpaid doctor compensation rolled forward by quarter; partner draws trued up against the balance sheet.' },
    { num: '05', title: 'Disentangled the Debt', desc: 'All 30+ loan instruments mapped to specific entities, allocated to the departing partner by ownership percentage, and reconciled to the practice\u2019s debt schedule and lender records.' },
    { num: '06', title: 'Modeled Three Exit Scenarios', desc: 'Full exit, partial exit, and asset retention — complete equity waterfalls from gross practice value to net settlement, including replacement-clinician compensation and downside stress tests.' },
    { num: '07', title: 'Engineered a Lender-Ready Seller Note', desc: 'A subordinated note (PIK → interest-only → amortizing) with cash-flow payment gates, DSCR covenants, and standstill provisions senior lenders could accept — packaged with the CFADS / DSCR analysis to present it.' },
  ];

  return (
    <div className="pt-16">
      {/* ═══════════════════════════════════════════════════════════════
          HERO 1 — Full-viewport navy title screen (McKinsey style)
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#051c2c] min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Blurred dental background image + navy overlay */}
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-[#051c2c]/80"></div>

        {/* Back Navigation */}
        <div className="absolute top-6 left-0 right-0 px-6 z-10">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/case-studies/corporate-development"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Corporate Development Case Studies
            </Link>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto py-24">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            Case Study — Carve-Out
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-[1.15] mb-8">
            Unwinding a Multi-Entity Dental Partnership
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            A partner buyout across eight legal entities — seven practices, a captive lab, and 30+ debt instruments.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PROJECT META — Quiet info bar
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-6 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div><span className="text-[#051c2c]/50">Industry:</span> <span className="font-medium text-[#051c2c]">Dental Services / DSO</span></div>
          <div><span className="text-[#051c2c]/50">Duration:</span> <span className="font-medium text-[#051c2c]">2 months</span></div>
          <div><span className="text-[#051c2c]/50">Team:</span> <span className="font-medium text-[#051c2c]">Director-led deal team</span></div>
          <div><span className="text-[#051c2c]/50">Services:</span> <span className="font-medium text-[#051c2c]">Carve-Out / Corporate Development</span></div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE SITUATION — Narrow editorial column
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Situation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">
            A buyout the bank wouldn&rsquo;t fund
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            A multi-location dental partnership group in the Mountain West needed to buy out a departing partner whose economics were entangled across the entire organization: a different ownership percentage in every one of eight legal entities, years of intercompany loans and deferred compensation, and more than 30 debt instruments spread across entities and lenders. The group&rsquo;s bank declined to finance the buyout.
          </p>

          <div>
            {[
              { title: 'Cross-owned entities', desc: 'Seven practices plus a captive central lab — and a different ownership stake in each.' },
              { title: 'Intercompany entanglement', desc: 'Years of due-to / due-from loans, partner draws, and accrued deferred compensation with no clean ledger.' },
              { title: 'Shared lab economics', desc: 'The central lab served every office, so its value belonged to no one — and everyone.' },
              { title: 'Lender constraints', desc: 'Thin coverage and dozens of instruments meant conventional financing was off the table.' },
            ].map((c, i) => (
              <div key={i} className="border-t border-gray-200 py-5">
                <h3 className="text-base font-semibold text-[#051c2c] mb-1">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO 2 — Full-viewport blue section divider
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#2563EB] min-h-[55vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto py-24">
          <p className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            The Approach
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.15]">
            Entity by entity. Transaction by transaction.
          </h2>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          EXECUTION — Numbered hairline rows
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {steps.map((s) => (
            <div key={s.num} className="border-t border-gray-200 py-4 md:py-5 flex gap-6">
              <span className="text-sm font-semibold text-[#2563EB] mt-0.5 flex-shrink-0">{s.num}</span>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#051c2c] mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE IMPACT — Stats + outcomes on navy
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Impact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 max-w-2xl">
            Three quantified paths to a clean close.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-12">
            The remaining partners received a defensible valuation of every entity, a fully reconciled picture of who owed what, and three clearly quantified exit scenarios. The seller-note structure — tested against multi-year DSCR projections — made the buyout financeable without insolventing the practice, and gave senior lenders the protections they needed to consent. Every model was independently re-verified before delivery, so the numbers held up in front of partners, counsel, and lenders alike.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '8', label: 'Entities valued & unwound' },
              { value: '30+', label: 'Debt instruments mapped' },
              { value: '3', label: 'Exit scenarios delivered' },
              { value: '100%', label: 'Models independently re-verified' },
            ].map((stat, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <p className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          GET IN TOUCH — Quiet CTA + related service
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-14 md:py-16 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">
            Facing a carve-out or partner exit?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Let&rsquo;s discuss how to unwind the entities, satisfy the lenders, and get to a clean close.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="mailto:admin@northcastleconsulting.com?subject=Carve-Out%20Inquiry"
              className="inline-block bg-[#051c2c] text-white px-8 py-3 text-sm font-semibold hover:bg-[#2563EB] transition-colors self-start"
            >
              Contact Us
            </a>
            <Link
              to="/services/dso-disentanglement"
              className="inline-flex items-center text-[#051c2c] text-sm font-semibold border-b border-[#051c2c]/30 pb-1 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors self-start"
            >
              Related Service: Dental &amp; DSO Disentanglement <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Link to="/case-studies" className="text-[#051c2c]/50 hover:text-[#051c2c] transition-colors text-sm">
            &larr; Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
