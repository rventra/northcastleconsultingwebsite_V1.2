import React from 'react';
import { Link } from 'react-router-dom';

export default function CarveOutCaseStudyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop')`
        }}
      >
        {/* Subtle Blue Overlay */}
        <div className="absolute inset-0 bg-[#0D3BC3]/75"></div>

        {/* Back Navigation */}
        <div className="relative py-2 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/case-studies/corporate-development"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-300 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Corporate Development
            </Link>
          </div>
        </div>

        {/* Compact Hero */}
        <div className="relative text-white py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-2 py-1 rounded mb-3">
                CORPORATE DEVELOPMENT — CARVE-OUT
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Carve-Out: Unwinding a Multi-Entity Dental Partnership
              </h1>
              <p className="text-gray-300 text-sm">
                Partner buyout across an eight-entity dental group — seven practices, a captive lab, and 30+ debt instruments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">Dental Services / DSO</span></div>
          <div><span className="text-gray-500">Duration:</span> <span className="font-medium text-[#0D3BC3]">2 months</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#0D3BC3]">Director-led deal team</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Corporate Development / Carve-Out</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-50 py-10 px-6 md:px-10">
          <div className="max-w-md ml-auto">
            <h2 className="text-lg font-bold text-[#0D3BC3] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#0D3BC3] text-white rounded text-xs flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A multi-location dental partnership group in the Mountain West needed to <strong>buy out a departing partner</strong> whose economics were entangled across the entire organization:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Eight legal entities — seven practices plus a captive central lab</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> A different ownership percentage in every single entity</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Years of intercompany loans, partner draws, and accrued deferred compensation</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> 30+ debt instruments spread across entities and lenders</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> A buyout price the bank simply wouldn't fund</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0D3BC3] py-10 px-6 md:px-10 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#EDB624] text-[#1A2234] rounded text-xs flex items-center justify-center">2</span>
              Our Solution
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              We built a complete carve-out and settlement framework:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Hybrid entity-level valuation — EBITDA multiples for going-concern practices, NAV ex-goodwill floors for underperformers</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Three exit scenarios: full exit, partial exit, and asset retention</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Transaction-level intercompany and deferred-comp reconciliation</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> CFADS / DSCR credit analysis across financing structures</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Subordinated seller note engineered for senior-lender acceptance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <p className="text-gray-600 mb-6 text-sm">
            We worked entity by entity — and transaction by transaction — to turn an entangled partnership into clean settlement math:
          </p>
          <div className="space-y-3">
            {[
              { title: "Mapped the Entity & Ownership Web", desc: "Documented all eight legal entities, cross-ownership percentages, and every economic relationship between practices, the captive lab, and the partners — the master map for everything that followed." },
              { title: "Valued Each Entity on a Hybrid Framework", desc: "Going-concern practices valued on EBITDA multiples supported by a formal multiple-justification memo; underperforming entities valued at net asset value excluding goodwill — a tangible floor instead of negative enterprise values." },
              { title: "Reallocated the Captive Lab's EBITDA", desc: "Treated the central lab as a pass-through and redistributed its EBITDA to the producing practices by revenue share — with allocation logic that shifted correctly under each exit scenario, including one where the departing partner retained the lab." },
              { title: "Reconciled Intercompany & Deferred Compensation", desc: "Classified due-to / due-from balances transaction by transaction, by entity and by partner; rolled forward accrued-but-unpaid doctor compensation by quarter; and trued up partner draws against the balance sheet." },
              { title: "Disentangled the Debt", desc: "Mapped all 30+ loan instruments to specific entities, allocated each to the departing partner by ownership percentage, and reconciled the result to the practice's debt schedule and lender records." },
              { title: "Modeled Three Exit Scenarios", desc: "Built full-exit, partial-exit, and asset-retention scenarios with complete equity waterfalls — from gross practice value down to net settlement — including replacement-clinician compensation and downside stress tests." },
              { title: "Engineered a Lender-Ready Seller Note", desc: "Structured a subordinated seller note (PIK → interest-only → amortizing) with cash-flow payment gates, DSCR covenants, and standstill provisions senior lenders could accept — then packaged the CFADS / DSCR analysis to present it." }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#0D3BC3]">
                <h3 className="text-sm font-bold text-[#0D3BC3] mb-1.5">○ {step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-4">The Results</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            The remaining partners received a defensible valuation of every entity, a fully reconciled picture of who owed what, and three clearly quantified paths to complete the buyout. The seller-note structure — tested against multi-year DSCR projections — gave the group a way to fund the exit without insolventing the practice, and gave senior lenders the protections they needed to consent. Every model was independently re-verified before delivery, so the numbers held up in front of partners, counsel, and lenders alike.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { value: '8', label: 'Entities Valued & Unwound' },
              { value: '30+', label: 'Debt Instruments Mapped' },
              { value: '3', label: 'Exit Scenarios Delivered' },
              { value: '100%', label: 'Models Independently Re-Verified' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-2xl font-bold text-[#0D3BC3]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Clean Settlement Math</span>
              </div>
              <p className="text-xs text-gray-600">Equity waterfalls from gross entity value to net partner settlement, by scenario</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Lender-Ready Structure</span>
              </div>
              <p className="text-xs text-gray-600">Subordinated seller note with payment gates and DSCR covenants senior lenders could accept</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Path to Close</span>
              </div>
              <p className="text-xs text-gray-600">A buyout the bank wouldn't fund — made financeable without insolventing the practice</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Facing a Carve-Out or Partner Exit?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how to unwind the entities, satisfy the lenders, and get to a clean close.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Carve-Out%20Inquiry"
              className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
            >
              Start the Conversation
            </a>
            <Link
              to="/services/dso-disentanglement"
              className="inline-block text-gray-300 px-6 py-3 text-sm font-semibold border-b border-gray-500 hover:border-white hover:text-white transition-colors"
            >
              Related Service: Dental &amp; DSO Disentanglement &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
