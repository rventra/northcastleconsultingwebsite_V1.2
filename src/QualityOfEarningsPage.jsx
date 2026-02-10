import React from 'react';
import { Link } from 'react-router-dom';

export default function QualityOfEarningsPage() {
  const obstacles = [
    {
      num: '01',
      title: 'Unsustainable Earnings',
      desc: 'Reported profits driven by one-time gains, accounting adjustments, or non-recurring events.',
      solution: 'We reconstruct the true earnings baseline, normalizing for non-recurring items and accounting anomalies.',
    },
    {
      num: '02',
      title: 'Working Capital Manipulation',
      desc: 'Pre-transaction window dressing—accelerated collections, delayed payables, inventory liquidation.',
      solution: 'We analyze 24+ months of trends to identify artificial cash flow boosts and true NWC requirements.',
    },
    {
      num: '03',
      title: 'Revenue Quality Issues',
      desc: 'Concentrated customers, declining renewals, or revenue recognized before contractual certainty.',
      solution: 'We assess revenue by tier—contracted, recurring, project-based, one-time—to determine sustainability.',
    },
    {
      num: '04',
      title: 'Hidden Liabilities',
      desc: 'Unrecorded obligations—unpaid taxes, warranty reserves, litigation exposure, related-party debt.',
      solution: 'We conduct forensic analysis to surface unrecorded liabilities before they become post-close surprises.',
    },
  ];

  const qoeComponents = [
    { 
      title: 'Adjusted EBITDA Bridge', 
      text: 'Comprehensive normalization of earnings—expense add-backs, revenue adjustments, operational normalizations, and run-rate impacts.' 
    },
    { 
      title: 'Revenue Quality Assessment', 
      text: 'Five-tier taxonomy from contracted recurring to windfall/spot market. Customer concentration and churn analysis.' 
    },
    { 
      title: 'Working Capital Deep Dive', 
      text: 'DSO, DIO, DPO analysis with manipulation detection. Cash conversion cycle and NWC peg recommendations.' 
    },
    { 
      title: 'Cash Flow Reconciliation', 
      text: 'Net income to free cash flow bridge. Variance analysis between EBITDA and operating cash flow.' 
    },
    { 
      title: 'Add-Back Validation', 
      text: 'Confidence scoring for adjustments—high, medium, low evidence. Supporting documentation requirements.' 
    },
    { 
      title: 'Risk Matrix', 
      text: 'Red, yellow, green flag categorization. Deal impact assessment with price reduction or structure recommendations.' 
    },
    { 
      title: 'Management Q&A', 
      text: 'Targeted questions based on analytical findings. Management interview preparation and support.' 
    },
    { 
      title: 'Data Room Index', 
      text: 'Cross-reference supporting documents to every adjustment. Audit trail for due diligence defense.' 
    },
  ];

  const scenarios = [
    {
      label: 'Rapid Growth SaaS',
      quote: 'Our ARR grew 150% last year, but our cash position barely moved. We need to understand why.',
      challenges: [
        'Deferred revenue creating cash flow timing disconnects',
        'High customer acquisition costs masking unit economics',
        'Implementation revenue vs. subscription revenue mix',
        'Churn rates varying significantly by cohort',
      ],
      hurdle: 'Investors questioning sustainability of growth and true cash generation ability',
    },
    {
      label: 'Family-Owned Manufacturer',
      quote: 'We have run this business for 30 years. The books are clean, but we know there are adjustments.',
      challenges: [
        'Owner compensation significantly above market rates',
        'Personal expenses run through the business',
        'Related-party transactions with unclear pricing',
        'No segregation of duties in accounting',
      ],
      hurdle: 'Separating true business earnings from owner lifestyle benefits for buyer presentation',
    },
    {
      label: 'Healthcare Services Platform',
      quote: 'Our payer mix is shifting, and reimbursement rates are under pressure. We need clarity on forward earnings.',
      challenges: [
        'Government vs. commercial reimbursement rate changes',
        'Prior authorization requirements increasing',
        'Bad debt from self-pay patients rising',
        'Provider contract renewals with rate uncertainty',
      ],
      hurdle: 'Quantifying regulatory and reimbursement headwinds in forward projections',
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
                alt="Financial analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
                Financial Due Diligence
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Quality of Earnings
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light mb-6 max-w-2xl leading-relaxed">
                Forensic financial analysis to determine if earnings will persist under new ownership.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:admin@northcastleconsulting.com?subject=Quality%20of%20Earnings%20Inquiry"
                  className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Start Your Analysis
                </a>
                <Link
                  to="/case-studies"
                  className="inline-block bg-transparent text-white px-8 py-4 font-semibold border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Gray Panel with Obstacles */}
          <div className="lg:col-span-4 bg-[#F5F5F5] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051c2c] mb-2">
              Common Challenges
            </h2>
            <p className="text-[#051c2c]/60 text-lg mb-8">
              &amp; How We Address Them
            </p>
            
            <div className="space-y-6">
              {obstacles.map((item) => (
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
          QoE FRAMEWORK — Connected to Challenges
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">How We Address Each Challenge</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">
              The QoE Analysis Framework
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '01',
                challenge: 'Unsustainable Earnings',
                framework: ['Adjusted EBITDA Bridge', 'Add-Back Validation', 'Cash Flow Reconciliation'],
                desc: 'We reconstruct true earnings baseline through comprehensive normalization and confidence-scored adjustments.',
              },
              {
                num: '02',
                challenge: 'Working Capital Manipulation',
                framework: ['Working Capital Deep Dive', 'Cash Flow Reconciliation', 'Data Room Index'],
                desc: 'We analyze 24+ months of DSO/DIO/DPO trends to identify artificial cash flow boosts and determine true NWC requirements.',
              },
              {
                num: '03',
                challenge: 'Revenue Quality Issues',
                framework: ['Revenue Quality Assessment', 'Risk Matrix', 'Management Q&A'],
                desc: 'We apply five-tier revenue taxonomy and concentration analysis to assess sustainability and customer risk.',
              },
              {
                num: '04',
                challenge: 'Hidden Liabilities',
                framework: ['Risk Matrix', 'Data Room Index', 'Management Q&A'],
                desc: 'We conduct forensic analysis with red/yellow/green flag categorization to surface unrecorded obligations.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white border-l-4 border-[#2563EB] shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-12 gap-0">
                  {/* Challenge Side */}
                  <div className="md:col-span-4 bg-[#051c2c] p-8 text-white">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-4xl font-bold text-[#2563EB]">{item.num}</span>
                      <h3 className="text-xl font-bold">{item.challenge}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                  
                  {/* Framework Components */}
                  <div className="md:col-span-8 p-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-4">Framework Components Applied</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {item.framework.map((component) => (
                        <span key={component} className="inline-block bg-[#F9F9F7] border border-gray-200 px-4 py-2 text-sm font-semibold text-[#051c2c]">
                          {component}
                        </span>
                      ))}
                    </div>
                    <div className="h-px bg-gray-200 mb-6"></div>
                    <p className="text-[#051c2c]/70 leading-relaxed">
                      <span className="text-[#2563EB] font-semibold">Result:</span> {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ADJUSTED EBITDA BRIDGE — Dark Section
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#051c2c]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#60a5fa] text-sm font-semibold tracking-widest uppercase mb-3">The Output</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The Adjusted EBITDA Bridge
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Reported EBITDA</span>
                <span className="text-white/40">(from financial statements)</span>
              </div>
              
              <div className="pl-8 space-y-4 border-l-2 border-[#2563EB]">
                <div>
                  <span className="text-[#60a5fa] font-semibold">+ Expense Add-Backs</span>
                  <p className="text-white/60 text-sm mt-1">Owner compensation above market, personal expenses, one-time costs, litigation settlements, restructuring</p>
                </div>
                <div>
                  <span className="text-amber-400 font-semibold">- Revenue Adjustments</span>
                  <p className="text-white/60 text-sm mt-1">One-time asset sales, insurance recoveries, related-party above-market pricing, pull-forward revenue</p>
                </div>
                <div>
                  <span className="text-[#60a5fa] font-semibold">± Operational Normalizations</span>
                  <p className="text-white/60 text-sm mt-1">Below-market rent, deferred maintenance, inventory write-downs</p>
                </div>
                <div>
                  <span className="text-[#60a5fa] font-semibold">± Run-Rate Adjustments</span>
                  <p className="text-white/60 text-sm mt-1">New contracts not yet producing, lost customers, recent hires, regulatory cost increases</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <span className="text-2xl font-bold text-white">= Adjusted EBITDA</span>
                <p className="text-white/60 mt-2">Sustainable, transferrable cash flow under new ownership</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          REVENUE QUALITY TIERS
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Revenue Assessment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">Revenue Quality Tiers</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { tier: '1', title: 'Recurring Contracted', desc: '90%+ renewal rates', color: 'bg-green-500', examples: 'SaaS subscriptions, multi-year agreements' },
              { tier: '2', title: 'Sticky Repeat Business', desc: 'High switching costs', color: 'bg-[#2563EB]', examples: 'Industrial consumables, trade relationships' },
              { tier: '3', title: 'Project-Based w/ Backlog', desc: '12-24 month visibility', color: 'bg-[#EDB624]', examples: 'AEC, government contracting' },
              { tier: '4', title: 'One-Time Project', desc: 'Non-repeating', color: 'bg-orange-500', examples: 'Custom implementations' },
              { tier: '5', title: 'Windfall/Spot Market', desc: 'Unpredictable', color: 'bg-red-500', examples: 'Commodity, distressed sales' },
            ].map((item) => (
              <div key={item.tier} className="bg-[#FAFAFA] p-6 border-t-4" style={{ borderColor: item.color === 'bg-green-500' ? '#22c55e' : item.color === 'bg-[#2563EB]' ? '#2563EB' : item.color === 'bg-[#EDB624]' ? '#EDB624' : item.color === 'bg-orange-500' ? '#f97316' : '#ef4444' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-8 h-8 rounded-full ${item.color} text-white flex items-center justify-center text-sm font-bold`}>{item.tier}</span>
                  <h3 className="text-sm font-bold text-[#051c2c] leading-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-[#051c2c]/50 uppercase tracking-wider mb-2">{item.desc}</p>
                <p className="text-sm text-[#051c2c]/70">{item.examples}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#FAFAFA] border-l-4 border-red-500">
            <p className="text-sm font-bold text-[#051c2c] uppercase tracking-wider mb-2">Concentration Risk Thresholds</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <p><span className="text-red-500 font-bold">Red Flag:</span> Single customer &gt;30% of revenue</p>
              <p><span className="text-[#EDB624] font-bold">Yellow Flag:</span> Top 5 customers &gt;50% of revenue</p>
              <p><span className="text-red-500 font-bold">Critical:</span> Customer churn &gt;20% annually</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          REAL WORLD SCENARIOS
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Client Scenarios</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#051c2c]">Real World Scenarios</h2>
          </div>

          <div className="space-y-8">
            {scenarios.map((scenario) => (
              <div key={scenario.label} className="bg-[#051c2c] text-white p-10 md:p-14">
                <div className="grid md:grid-cols-12 gap-10">
                  {/* Label & Quote */}
                  <div className="md:col-span-5">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase bg-[#EDB624] text-[#051c2c] px-4 py-2 mb-6">
                      {scenario.label}
                    </span>
                    <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-white/90">
                      &ldquo;{scenario.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Challenges */}
                  <div className="md:col-span-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">
                      Business Challenges
                    </p>
                    <ul className="space-y-3">
                      {scenario.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-3 text-base text-white/80">
                          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 bg-white/60" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hurdle */}
                  <div className="md:col-span-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">
                      Greatest Hurdle
                    </p>
                    <p className="text-lg text-white leading-relaxed">{scenario.hurdle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SELL-SIDE VS BUY-SIDE
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Engagement Types</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">Sell-Side vs. Buy-Side QoE</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sell-Side */}
            <div className="bg-white p-10 border-l-4 border-[#2563EB] shadow-sm">
              <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider mb-4">
                Sell-Side (Vendor Due Diligence)
              </span>
              <h3 className="text-2xl font-bold text-[#051c2c] mb-4">Maximize Valuation</h3>
              <p className="text-[#051c2c]/70 mb-6">6-12 months pre-market. Control the narrative, identify favorable add-backs, speed the process.</p>
              <ul className="space-y-3 text-[#051c2c]/80">
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Clean up related party transactions</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Eliminate owner perks pre-sale</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Establish market-rate compensation benchmarks</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Document one-time expenses with evidence</li>
              </ul>
              <p className="mt-6 pt-6 border-t border-gray-200 text-sm text-[#051c2c]/60">
                <strong>Deliverable:</strong> Recast financials for Confidential Information Memorandum (CIM)
              </p>
            </div>

            {/* Buy-Side */}
            <div className="bg-white p-10 border-l-4 border-[#EDB624] shadow-sm">
              <span className="inline-block px-3 py-1 bg-[#EDB624] text-[#051c2c] text-xs font-bold uppercase tracking-wider mb-4">
                Buy-Side (Confirmatory Due Diligence)
              </span>
              <h3 className="text-2xl font-bold text-[#051c2c] mb-4">Validate & Protect</h3>
              <p className="text-[#051c2c]/70 mb-6">Post-LOI, during exclusivity (30-45 day window). Validate investment thesis, find price reductions.</p>
              <ul className="space-y-3 text-[#051c2c]/80">
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Transaction-level revenue analysis</li>
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Customer interview verification (top 10-20)</li>
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Vendor payment pattern analysis</li>
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Tax authority confirmation letters</li>
              </ul>
              <p className="mt-6 pt-6 border-t border-gray-200 text-sm text-[#051c2c]/60">
                <strong>Deal Impact:</strong> Price reduction, earnout structure, escrow increase, NWC adjustment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to validate earnings quality?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Whether preparing for sale or evaluating a target, we provide the forensic analysis to support confident decisions.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Quality%20of%20Earnings%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-10 py-5 font-semibold text-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
          >
            Start Your Analysis
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
