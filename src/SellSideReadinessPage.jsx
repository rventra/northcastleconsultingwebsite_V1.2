import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  const challenges = [
    {
      title: 'Risk of Disruption',
      text: 'Management must balance day-to-day operations while preparing for due diligence.',
    },
    {
      title: 'Data Complexity',
      text: 'Disparate systems, large unstructured data, and post-merger misalignment can stall transactions.',
    },
    {
      title: 'Buyer Scrutiny',
      text: 'Investors demand accuracy in financials and operations; unexpected issues derail valuations.',
    },
    {
      title: 'Resource Constraints',
      text: 'Understaffed F&A teams struggle to meet diligence requirements.',
    },
  ];

  const solutions = [
    { title: 'Transaction Success', text: 'Proven track record of guiding companies to successful exits.' },
    { title: 'Management Focus', text: 'Allows leadership to prioritize daily operations without distraction.' },
    { title: 'Maximize Valuation', text: 'Pre-sale diligence reduces surprises and improves deal terms.' },
    { title: "Buyer's Perspective", text: 'PE and investment banking expertise ensures management is well-prepared.' },
    { title: 'Process Optimization', text: 'Clean, organized financials create a competitive, efficient process.' },
    { title: 'Data Validation', text: 'Rigorous verification of financial and operational metrics to instill buyer confidence.' },
    { title: 'Elevate Credibility', text: "Professional deliverables enhance the buyer's impression of management." },
    { title: 'Prevent Surprises', text: 'Proactively address operational, technology, and HR concerns before due diligence.' },
  ];

  const scenarios = [
    {
      label: 'Serial Acquirer',
      quote: 'I have helped scale our organization through five targeted acquisitions in just three years.',
      challenges: [
        'Incomplete post-merger integration',
        'Disparate data environment',
        'Multiple ERP, CRM, CPM, and BI tools in use',
        'Decentralized and misaligned F&A teams across BUs and subsidiaries',
      ],
      hurdle: 'Our management team is unable to address simple diligence requests (e.g., we need help producing a streamlined revenue pipeline by product, customer, etc.)',
    },
    {
      label: 'Understaffed Finance Team',
      quote: 'I manage finance at a company where the F&A team is currently running lean relative to our operational demands.',
      challenges: [
        'Management team has significant bandwidth constraints',
        'F&A team is understaffed and struggling to keep up with day-to-day activities',
      ],
      hurdle: 'Our management team is unable to produce anticipated diligence analysis (e.g., we need to deliver an analysis of revenue/profitability by customer cohort)',
    },
    {
      label: 'Complex Data Environment',
      quote: 'I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making.',
      challenges: [
        'Insufficient systems',
        'Large and unorganized data sets (ex: millions of rows of transactional data)',
        'Management lacks the requisite skills to extract data and manipulate it',
      ],
      hurdle: 'Our management team lacks the requisite bandwidth to tackle a transaction without the business being neglected (e.g., we need to stay focused on running the business itself)',
    },
  ];

  return (
    <div className="pt-16">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Clean, compact header
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#60a5fa] text-sm font-semibold tracking-widest uppercase mb-4">
            Private Equity Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Sell-Side Readiness
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-6 max-w-2xl">
            Maximizing Value &amp; Ensuring a Seamless Transaction
          </p>
          <p className="text-base text-white/60 max-w-2xl leading-relaxed mb-8">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit 
            by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            Prepare Your Exit
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE CHALLENGE — 2x2 compact grid
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c]">
                Sell-Side Transaction Challenges
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {challenges.map((item) => (
                  <div key={item.title} className="border-l-4 border-amber-500 pl-5">
                    <h3 className="text-lg font-semibold text-[#051c2c] mb-2">{item.title}</h3>
                    <p className="text-[#051c2c]/60 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          OUR SOLUTION — 4-column compact grid
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-4">Our Solution</h2>
            <p className="text-[#051c2c]/60 text-base max-w-2xl mx-auto leading-relaxed">
              We bring PE and investment banking expertise to every engagement, ensuring management
              teams are fully prepared for buyer scrutiny.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((item) => (
              <div key={item.title} className="bg-white p-5 border border-gray-100">
                <h3 className="text-base font-semibold text-[#051c2c] mb-2">{item.title}</h3>
                <p className="text-[#051c2c]/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          REAL WORLD SCENARIOS — Compact horizontal cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Client Scenarios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c]">Real World Scenarios</h2>
          </div>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div key={scenario.label} className="bg-[#FAFAFA] p-6 md:p-8 border-l-4 border-[#2563EB]">
                <div className="grid md:grid-cols-12 gap-6">
                  {/* Label & Quote */}
                  <div className="md:col-span-4">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-[#2563EB] px-3 py-1 mb-4">
                      {scenario.label}
                    </span>
                    <blockquote className="text-base text-[#051c2c]/70 italic leading-relaxed">
                      &ldquo;{scenario.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Challenges */}
                  <div className="md:col-span-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-3">
                      Business Challenges
                    </p>
                    <ul className="space-y-1.5">
                      {scenario.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-[#051c2c]/70">
                          <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-amber-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hurdle */}
                  <div className="md:col-span-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-3">
                      Greatest Hurdle
                    </p>
                    <p className="text-sm text-[#051c2c]/60 leading-relaxed">{scenario.hurdle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CASE STUDIES — Featured cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-[#051c2c]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#60a5fa] text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Building Credibility &amp; Justifying Multiples
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group relative overflow-hidden min-h-[300px]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Venue management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                  Hospitality
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                  A private equity-backed venue management company preparing for sale
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  Finance team lacked expertise to handle complex due diligence...
                </p>
                <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View More <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group relative overflow-hidden min-h-[300px]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=600&fit=crop"
                  alt="FinTech analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                  FinTech
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                  Enhancing Investment Credibility: Growth &amp; Churn Analysis for a FinTech Sale
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  A PE-backed payments company preparing for sale but lacking critical buyer analysis...
                </p>
                <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View More <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Clean, simple
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white py-16 md:py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-4">
            Ready to prepare for your exit?
          </h2>
          <p className="text-[#051c2c]/60 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-[#051c2c] text-white px-8 py-4 font-semibold hover:shadow-xl transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-[#FAFAFA] py-6 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
