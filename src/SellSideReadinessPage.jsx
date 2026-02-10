import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  const challengeSolutionPairs = [
    {
      number: '01',
      challenge: {
        title: 'Operational Disruption',
        text: 'Management must balance day-to-day operations while preparing for due diligence.',
      },
      solution: {
        title: 'We Take on the Heavy Lifting',
        text: 'Our team handles the diligence preparation, allowing leadership to stay focused on running the business.',
      },
    },
    {
      number: '02',
      challenge: {
        title: 'Data Complexity',
        text: 'Disparate systems, large unstructured data, and post-merger misalignment can stall transactions.',
      },
      solution: {
        title: 'We Structure the Unstructured',
        text: 'We consolidate fragmented data into clean, buyer-ready analytics and reporting packages.',
      },
    },
    {
      number: '03',
      challenge: {
        title: 'Buyer Scrutiny',
        text: 'Investors demand accuracy in financials and operations; unexpected issues derail valuations.',
      },
      solution: {
        title: 'We See It From Their Side',
        text: 'Our PE and investment banking experience means we anticipate buyer questions before they ask.',
      },
    },
    {
      number: '04',
      challenge: {
        title: 'Resource Constraints',
        text: 'Understaffed F&A teams struggle to meet diligence requirements.',
      },
      solution: {
        title: 'We Augment Your Team',
        text: 'We embed with your finance team as an extension, not a replacement—filling bandwidth gaps.',
      },
    },
  ];

  const valueAdds = [
    { title: 'Transaction Success', text: 'Proven track record of guiding companies to successful exits.' },
    { title: 'Management Focus', text: 'Leadership stays focused on operations, not spreadsheets.' },
    { title: 'Maximize Valuation', text: 'Pre-sale diligence reduces surprises and improves deal terms.' },
    { title: 'Process Optimization', text: 'Clean, organized financials create a competitive process.' },
    { title: 'Data Validation', text: 'Rigorous verification of metrics to instill buyer confidence.' },
    { title: 'Elevate Credibility', text: 'Professional deliverables enhance buyer impression.' },
    { title: 'Prevent Surprises', text: 'Proactively address concerns before diligence begins.' },
    { title: 'Speed to Market', text: 'Accelerated preparation timelines for time-sensitive deals.' },
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
          HERO — Full-bleed editorial style like landing page
      ═══════════════════════════════════════════════════════════════ */}
      <div className="pt-16">
        {/* Top Headline Area — McKinsey Blue Gradient */}
        <div className="relative min-h-[450px] md:min-h-[550px] flex items-end">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
              alt="Professional consulting team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/80 to-[#051c2c]/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full px-6 md:px-12 py-12 md:py-16">
            <div className="max-w-6xl mx-auto">
              <p className="text-[#60a5fa] text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
                Private Equity Services
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] max-w-4xl">
                Sell-Side Readiness
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-6 max-w-3xl leading-snug">
                Maximize valuation and ensure a seamless exit by addressing buyer concerns before they arise.
              </p>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
                We prepare companies for high-value transactions through financial transparency, 
                operational optimization, and proactive diligence readiness.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
                  className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold text-base hover:shadow-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
                >
                  Prepare Your Exit
                </a>
                <Link
                  to="/case-studies/sell-side-readiness"
                  className="inline-block bg-transparent text-white px-8 py-4 font-semibold text-base border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CHALLENGE + SOLUTION — Side by Side Professional Layout
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-[#2563EB] text-sm md:text-base font-semibold tracking-widest uppercase mb-3">The Opportunity</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#051c2c] max-w-4xl leading-tight">
              Common Obstacles—and How We Remove Them
            </h2>
          </div>

          {/* Paired Grid — Challenge | Solution Side by Side */}
          <div className="space-y-1">
            {challengeSolutionPairs.map((item, index) => (
              <div 
                key={item.number} 
                className={`grid md:grid-cols-12 gap-0 ${index !== challengeSolutionPairs.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {/* Number Column */}
                <div className="md:col-span-1 py-8 md:py-12 flex items-start">
                  <span className="text-4xl md:text-5xl font-bold text-gray-200">{item.number}</span>
                </div>

                {/* Challenge Column */}
                <div className="md:col-span-5 py-8 md:py-12 pr-0 md:pr-12 border-l-4 border-amber-500 md:border-l-0 md:border-r border-gray-200">
                  <div className="md:border-l-4 md:border-amber-500 md:pl-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">The Challenge</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#051c2c] mb-4 leading-tight">
                      {item.challenge.title}
                    </h3>
                    <p className="text-lg text-[#051c2c]/70 leading-relaxed">
                      {item.challenge.text}
                    </p>
                  </div>
                </div>

                {/* Solution Column */}
                <div className="md:col-span-6 py-8 md:py-12 pl-0 md:pl-12 bg-[#FAFAFA] md:bg-transparent">
                  <div className="md:border-l-4 md:border-[#2563EB] md:pl-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">How We Help</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#051c2c] mb-4 leading-tight">
                      {item.solution.title}
                    </h3>
                    <p className="text-lg text-[#051c2c]/70 leading-relaxed">
                      {item.solution.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          VALUE ADDS — Dark Section
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#051c2c]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#60a5fa] text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Why Work With Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The North Castle Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {valueAdds.map((item) => (
              <div key={item.title} className="bg-[#051c2c] p-8">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-base text-white/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          REAL WORLD SCENARIOS
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#2563EB] text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Client Scenarios</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">Real World Scenarios</h2>
          </div>

          <div className="space-y-8">
            {scenarios.map((scenario) => (
              <div key={scenario.label} className="bg-[#FAFAFA] p-8 md:p-12 border-l-4 border-[#2563EB]">
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Label & Quote */}
                  <div className="md:col-span-4">
                    <span className="inline-block text-sm font-bold tracking-widest uppercase text-white bg-[#2563EB] px-4 py-2 mb-6">
                      {scenario.label}
                    </span>
                    <blockquote className="text-xl md:text-2xl text-[#051c2c]/70 italic leading-relaxed">
                      &ldquo;{scenario.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Challenges */}
                  <div className="md:col-span-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#051c2c]/40 mb-4">
                      Business Challenges
                    </p>
                    <ul className="space-y-3">
                      {scenario.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-3 text-base text-[#051c2c]/70">
                          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hurdle */}
                  <div className="md:col-span-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#051c2c]/40 mb-4">
                      Greatest Hurdle
                    </p>
                    <p className="text-base text-[#051c2c]/60 leading-relaxed">{scenario.hurdle}</p>
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
      <div className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2563EB] text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-12">
            Building Credibility &amp; Justifying Multiples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group relative overflow-hidden min-h-[400px] bg-[#051c2c]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Venue management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <span className="inline-block px-4 py-2 bg-white text-[#051c2c] text-sm font-semibold uppercase tracking-wider mb-4 w-fit">
                  Hospitality
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  Venue Management Company Preparing for Sale
                </h3>
                <p className="text-white/70 text-base mb-4">
                  Finance team lacked expertise to handle complex due diligence...
                </p>
                <span className="inline-flex items-center text-white text-base font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View Case Study <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group relative overflow-hidden min-h-[400px] bg-[#051c2c]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=600&fit=crop"
                  alt="FinTech analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <span className="inline-block px-4 py-2 bg-white text-[#051c2c] text-sm font-semibold uppercase tracking-wider mb-4 w-fit">
                  FinTech
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  Growth &amp; Churn Analysis for a FinTech Sale
                </h3>
                <p className="text-white/70 text-base mb-4">
                  A PE-backed payments company preparing for sale but lacking critical buyer analysis...
                </p>
                <span className="inline-flex items-center text-white text-base font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
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
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-base">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
