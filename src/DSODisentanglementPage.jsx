import React from 'react';
import { Link } from 'react-router-dom';

export default function DSODisentanglementPage() {
  const challenges = [
    {
      num: '01',
      title: 'Cross-Owned Entities',
      desc: 'One partner holds a different ownership percentage in every practice, lab, and real-estate entity.',
      solution: 'We build entity-level equity waterfalls — from gross practice value to net settlement for each partner.',
    },
    {
      num: '02',
      title: 'Shared Services & Captive Labs',
      desc: 'A central lab or management entity serves every office, so its economics belong to no one — and everyone.',
      solution: 'We reallocate shared-service EBITDA to producing entities, with logic that adapts to each exit scenario.',
    },
    {
      num: '03',
      title: 'Intercompany Entanglement',
      desc: 'Years of due-to / due-from loans, partner draws, and accrued deferred compensation obscure who owes what.',
      solution: 'We forensically reconcile every balance — transaction by transaction, by entity and by partner.',
    },
    {
      num: '04',
      title: 'Lender Constraints',
      desc: 'Dozens of loan instruments and thin coverage mean a bank simply won\u2019t fund the buyout.',
      solution: 'We deliver CFADS / DSCR analysis and lender-ready seller-note structures that close the gap.',
    },
  ];

  const capabilities = [
    {
      tag: 'Valuation',
      title: 'Hybrid Multi-Entity Valuation',
      items: ['Going-concern entities on EBITDA multiples', 'Underperforming entities on NAV ex-goodwill floors', 'Formal multiple-justification memos', 'Goodwill embedded — no double counting'],
    },
    {
      tag: 'Scenario Modeling',
      title: 'Partner-Exit Scenario Analysis',
      items: ['Full exit vs. partial exit vs. asset retention', 'Equity waterfalls by scenario', 'Replacement-clinician compensation modeling', 'Downside and insolvency-trap stress tests'],
    },
    {
      tag: 'Forensics',
      title: 'Intercompany & Deferred-Comp Reconciliation',
      items: ['Transaction-level due-to / due-from mapping', 'Partner draw true-ups', 'Deferred compensation rollforwards', 'Balance-sheet adjustments by entity'],
    },
    {
      tag: 'Debt',
      title: 'Debt Disentanglement',
      items: ['Every instrument mapped to an entity', 'Allocated to partners by ownership %', 'Reconciled to lender schedules', 'Payoff and refinance sequencing'],
    },
    {
      tag: 'Credit',
      title: 'CFADS & DSCR Analysis',
      items: ['EBITDA-to-cash-flow bridges', 'Multi-year debt-service step-downs', 'DSCR under competing financing structures', 'Lender-grade covenant framing'],
    },
    {
      tag: 'Structuring',
      title: 'Seller-Note Engineering',
      items: ['PIK \u2192 interest-only \u2192 amortizing structures', 'Cash-flow payment gates and covenants', 'Subordination & standstill for senior lenders', 'Missed-payment mechanics and remedies'],
    },
  ];

  const phases = [
    {
      num: '01',
      title: 'Discover',
      duration: '2–4 weeks',
      desc: 'Entity map, ownership ledger, debt inventory, and intercompany data collection. We find every thread before we pull any of them.',
    },
    {
      num: '02',
      title: 'Model',
      duration: '4–8 weeks',
      desc: 'Entity-level valuations, shared-service reallocation, and full / partial / retention exit scenarios with equity waterfalls.',
    },
    {
      num: '03',
      title: 'Structure',
      duration: '2–4 weeks',
      desc: 'Buyout financing: DSCR-tested structures, seller-note terms, subordination packages, and lender presentations.',
    },
    {
      num: '04',
      title: 'Support',
      duration: 'Through close',
      desc: 'Negotiation support, lender Q&A, documentation tie-outs, and post-close settlement mechanics.',
    },
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Split: Image Left | Gray Panel Right
      ═══════════════════════════════════════════════════════════════ */}
      <div className="pt-16">
        <div className="grid lg:grid-cols-12 min-h-[600px] lg:min-h-[700px]">

          {/* Left — Image with Text Overlay */}
          <div className="lg:col-span-8 relative flex items-end">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop"
                alt="Modern dental practice operatory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
                Specialized Advisory
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Dental Partnership &amp; DSO Disentanglement
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light mb-6 max-w-2xl leading-relaxed">
                Unwinding a partner's economics across a web of cross-owned practices, captive labs, intercompany loans, and lender covenants — cleanly, credibly, and without breaking the practice.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:admin@northcastleconsulting.com?subject=DSO%20Disentanglement%20Inquiry"
                  className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Start a Conversation
                </a>
                <Link
                  to="/contact-us"
                  className="inline-block bg-transparent text-white px-8 py-4 font-semibold border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Gray Panel with Challenges */}
          <div className="lg:col-span-4 bg-[#F5F5F5] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051c2c] mb-2">
              Why Exits Get Stuck
            </h2>
            <p className="text-[#051c2c]/60 text-lg mb-8">
              &amp; How We Unstick Them
            </p>

            <div className="space-y-6">
              {challenges.map((item) => (
                <div key={item.num} className="border-l-2 border-[#2563EB] pl-5">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-[#2563EB]">{item.num}</span>
                    <h3 className="text-lg font-semibold text-[#051c2c]">{item.title}</h3>
                  </div>
                  <p className="text-base text-[#051c2c]/60 mb-2 leading-relaxed">{item.desc}</p>
                  <p className="text-base text-[#051c2c] font-medium leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT WE DO — 6 Capability Cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">
              One Engagement. Six Workstreams.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white border-l-4 border-[#2563EB] shadow-sm p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#2563EB] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {cap.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#051c2c] mb-4">{cap.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <span key={item} className="inline-block bg-[#F9F9F7] border border-gray-200 px-3 py-1.5 text-sm font-medium text-[#051c2c]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ENGAGEMENT SNAPSHOT — Anonymized Case Strip
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#051c2c]">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-3">Engagement Snapshot</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
            A Partner Buyout the Bank Wouldn&rsquo;t Fund
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl mb-12">
            A multi-location dental partnership group in the Mountain West — eight legal entities spanning seven practices and a captive central lab — needed to buy out a departing partner who held a different ownership stake in every entity. We valued each entity on a hybrid framework, modeled three exit scenarios, mapped more than 30 debt instruments, reconciled years of intercompany balances and deferred compensation, and structured a subordinated seller note with cash-flow payment gates that senior lenders could accept — enabling a buyout the bank wouldn&rsquo;t fund.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: '8', label: 'Legal Entities Unwound' },
              { value: '7', label: 'Practices + Captive Lab' },
              { value: '30+', label: 'Debt Instruments Mapped' },
              { value: '3', label: 'Exit Scenarios Modeled' },
            ].map((stat, i) => (
              <div key={i} className="text-center border-t-2 border-[#2563EB] pt-6">
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/50 mt-2 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/case-studies/corporate-dental-carve-out"
            className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            Read the Full Case Study <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WHO WE HELP — 3 Audience Cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Who We Help</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-4">
              Built for Both Sides of the Table
            </h2>
            <p className="text-lg text-[#051c2c]/60 max-w-3xl">
              Whether you are the partner leaving, the partners staying, or the platform separating from a practice — the math has to work for everyone, including the lenders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: 'Departing Partner',
                persona: 'Selling Dentist / Owner',
                kpis: ['Defensible valuation of every entity stake', 'Credit for intercompany loans & deferred comp', 'Seller-note terms that actually pay out', 'Tax-aware settlement sequencing'],
              },
              {
                role: 'Remaining Partners',
                persona: 'Practice Group / Partnership',
                kpis: ['Buyout structured within debt capacity', 'DSCR headroom preserved for operations', 'Senior-lender consent secured', 'No insolvency trap post-close'],
              },
              {
                role: 'Platforms & Sponsors',
                persona: 'DSO / Investor',
                kpis: ['Practice-level separations & carve-outs', 'Shared-service & lab disentanglement', 'Lender-ready credit packages', 'Audit-grade diligence support'],
              },
            ].map((a, i) => (
              <div key={i} className="bg-[#051c2c] text-white p-8">
                <p className="text-white/50 text-sm mb-1">{a.role}</p>
                <h3 className="text-xl font-bold mb-4">{a.persona}</h3>
                <ul className="space-y-2">
                  {a.kpis.map((kpi) => (
                    <li key={kpi} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-white/60" />
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ENGAGEMENT MODEL — 4 Phases
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Engagement Model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-4">
              Discover. Model. Structure. Support.
            </h2>
            <p className="text-lg text-[#051c2c]/60 max-w-3xl">
              A defined path from entangled to closed — with lender-grade analysis at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-white p-8 border-t-4 border-[#2563EB] shadow-sm">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-[#2563EB]">{phase.num}</span>
                  <span className="text-sm font-semibold text-[#051c2c]/50 uppercase tracking-wider">{phase.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-[#051c2c] mb-3">{phase.title}</h3>
                <p className="text-[#051c2c]/60 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Facing a partner exit or practice separation?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Let&rsquo;s discuss how to unwind the entities, satisfy the lenders, and get to a clean close.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=DSO%20Disentanglement%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-10 py-5 font-semibold text-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#051c2c] transition-colors text-base">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
