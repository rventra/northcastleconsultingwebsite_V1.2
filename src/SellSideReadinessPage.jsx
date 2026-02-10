import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  const obstacles = [
    {
      num: '01',
      title: 'Operational Disruption',
      desc: 'Management balancing day-to-day while preparing for diligence.',
      solution: 'We handle the heavy lifting so leadership stays focused.',
    },
    {
      num: '02',
      title: 'Data Complexity',
      desc: 'Disparate systems and unstructured data stall transactions.',
      solution: 'We consolidate fragmented data into buyer-ready analytics.',
    },
    {
      num: '03',
      title: 'Buyer Scrutiny',
      desc: 'Investors demand accuracy; unexpected issues derail valuations.',
      solution: 'Our PE experience means we anticipate questions before asked.',
    },
    {
      num: '04',
      title: 'Resource Constraints',
      desc: 'Understaffed F&A teams struggle to meet diligence requirements.',
      solution: 'We embed as an extension, filling bandwidth gaps seamlessly.',
    },
  ];

  const valueAdds = [
    { title: 'Transaction Success', text: 'Proven track record guiding companies to successful exits' },
    { title: 'Management Focus', text: 'Leadership stays focused on operations, not spreadsheets' },
    { title: 'Maximize Valuation', text: 'Pre-sale diligence reduces surprises and improves terms' },
    { title: 'Process Optimization', text: 'Clean financials create a competitive, efficient process' },
    { title: 'Data Validation', text: 'Rigorous verification of metrics to instill buyer confidence' },
    { title: 'Elevate Credibility', text: 'Professional deliverables enhance buyer impression' },
    { title: 'Prevent Surprises', text: 'Proactively address concerns before diligence begins' },
    { title: 'Speed to Market', text: 'Accelerated timelines for time-sensitive deals' },
  ];

  const scenarios = [
    {
      label: 'Serial Acquirer',
      quote: 'I have helped scale our organization through five targeted acquisitions in just three years.',
      challenges: [
        'Incomplete post-merger integration',
        'Disparate data environment',
        'Multiple ERP, CRM, CPM, and BI tools',
        'Decentralized F&A teams across BUs',
      ],
      hurdle: 'Management is unable to address simple diligence requests (e.g., streamlined revenue pipeline by product, customer)',
    },
    {
      label: 'Understaffed Finance Team',
      quote: 'I manage finance at a company where the F&A team is currently running lean relative to operational demands.',
      challenges: [
        'Management has significant bandwidth constraints',
        'F&A team struggling to keep up with day-to-day',
      ],
      hurdle: 'Unable to produce anticipated diligence analysis (e.g., revenue/profitability by customer cohort)',
    },
    {
      label: 'Complex Data Environment',
      quote: 'I lead finance at a company where navigating a multi-layered, data-rich environment is critical.',
      challenges: [
        'Insufficient systems',
        'Millions of rows of unorganized transactional data',
        'Management lacks skills to extract and manipulate data',
      ],
      hurdle: 'Lacks bandwidth to tackle transaction without business being neglected',
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
                alt="Professional consulting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
                Private Equity Services
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Sell-Side Readiness
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light mb-6 max-w-2xl leading-relaxed">
                Maximize valuation and ensure a seamless exit by addressing buyer concerns before they arise.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
                  className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Prepare Your Exit
                </a>
                <Link
                  to="/case-studies/sell-side-readiness"
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
              Common Obstacles
            </h2>
            <p className="text-[#051c2c]/60 text-lg mb-8">
              &amp; How We Remove Them
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
          WHY WORK WITH US — Bone White Background
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Why Work With Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">
              The North Castle Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAdds.map((item) => (
              <div key={item.title} className="bg-white p-8 border-t-4 border-[#EDB624] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-[#051c2c] mb-3">{item.title}</h3>
                <p className="text-base text-[#051c2c]/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          REAL WORLD SCENARIOS — White Background, Large Navy Cards
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
          CASE STUDIES
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-12">
            Building Credibility &amp; Justifying Multiples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group relative overflow-hidden min-h-[400px] bg-[#051c2c]"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Venue management"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  Hospitality
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Venue Management Company Preparing for Sale
                </h3>
                <p className="text-white/70 text-base mb-4">
                  Finance team lacked expertise to handle complex due diligence
                </p>
                <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View Case Study <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group relative overflow-hidden min-h-[400px] bg-[#051c2c]"
            >
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=600&fit=crop"
                alt="FinTech analytics"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  FinTech
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Growth &amp; Churn Analysis for a FinTech Sale
                </h3>
                <p className="text-white/70 text-base mb-4">
                  PE-backed payments company lacking critical buyer analysis
                </p>
                <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View Case Study <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to prepare for your exit?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
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
