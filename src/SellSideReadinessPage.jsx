import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  const services = [
    { name: 'Lender Due Diligence', desc: 'Supporting PE-backed financing with rigorous financial analysis', to: null },
    { name: 'Non-PE Financing Due Diligence', desc: 'Tailored diligence for corporate and independent sponsor transactions', to: null },
    { name: 'Challenged Credit Due Diligence', desc: 'Navigating complex credit situations with clarity', to: null },
    { name: 'Supply Chain Finance', desc: 'Optimizing working capital and supply chain structures', to: null },
    { name: 'Sell-Side Readiness', desc: 'Preparing companies for high-value, seamless exits', to: '/services/sell-side-readiness', active: true },
    { name: 'Corporate Development', desc: 'End-to-end M&A support for family offices and independent sponsors', to: '/services/corporate-development' },
    { name: 'Dividend Recapitalization', desc: 'Return capital to investors while retaining ownership', to: null },
  ];

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
    { title: 'Transaction Success', text: 'Over 95% of engagements result in a successful exit.' },
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
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      quote: 'I have helped scale our organization through five targeted acquisitions in just three years.',
      challenges: [
        'Incomplete post-merger integration',
        'Disparate data environment',
        'Multiple ERP, CRM, CPM, and BI tools in use',
        'Decentralized and misaligned F&A teams across BUs',
      ],
      hurdle: 'Our management team is unable to address simple diligence requests (e.g., we need help producing a streamlined revenue pipeline by product, customer, etc.)',
    },
    {
      label: 'Complex Data Environment',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      quote: 'I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making.',
      challenges: [
        'Insufficient systems',
        'Large unorganized data sets (millions of rows)',
        'Management lacks skills to extract and manipulate data',
      ],
      hurdle: 'Our management team lacks the requisite bandwidth to tackle a transaction without neglecting the business (e.g., we need to stay focused on running the business itself)',
    },
    {
      label: 'Understaffed Finance Team',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      quote: 'I manage finance at a company where the F&A team is currently running lean relative to operational demands.',
      challenges: [
        'Management team has significant bandwidth constraints',
        'F&A team is understaffed and struggling with day-to-day activities',
      ],
      hurdle: 'Our management team is unable to produce anticipated diligence analysis (e.g., we need to deliver an analysis of revenue/profitability by customer cohort)',
    },
  ];

  return (
    <div className="pt-16">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Full-bleed image with gradient overlay
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop"
            alt="Professional consulting team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051c2c] via-[#051c2c]/85 to-[#051c2c]/40"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20">
          <p className="text-[#60a5fa] text-sm font-semibold tracking-widest uppercase mb-4">
            Private Equity Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] max-w-3xl">
            Sell-Side Readiness
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-4 max-w-2xl leading-relaxed">
            Maximizing Value &amp; Ensuring a Seamless Transaction
          </p>
          <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed mb-10">
            We prepare companies for a smooth, efficient, and high-value exit by optimizing
            financial transparency, streamlining processes, and proactively addressing potential
            buyer concerns.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300 shadow-lg text-base"
          >
            Prepare Your Exit
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STATS BANNER — Authority trust bar
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-12 md:py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-2">95%+</p>
              <p className="text-sm text-white/60 font-medium">Successful Exits</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-2">100+</p>
              <p className="text-sm text-white/60 font-medium">Engagements Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-2">$5B+</p>
              <p className="text-sm text-white/60 font-medium">Transaction Value Supported</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-2">PE</p>
              <p className="text-sm text-white/60 font-medium">& Investment Banking Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES GRID — Visual cards with hover
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-12">Our Services</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const isActive = service.active;
              const cardClasses = isActive
                ? 'bg-[#051c2c] text-white p-6 md:p-8 transition-all duration-300 border border-[#051c2c]'
                : 'bg-white p-6 md:p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group';

              const inner = (
                <>
                  <h3 className={`text-lg font-semibold mb-2 ${isActive ? 'text-white' : 'text-[#051c2c] group-hover:text-[#2563EB]'} transition-colors`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-white/70' : 'text-[#051c2c]/60'}`}>
                    {service.desc}
                  </p>
                  {isActive && (
                    <span className="inline-block mt-4 text-xs font-semibold tracking-wider uppercase text-[#60a5fa]">
                      Currently Viewing
                    </span>
                  )}
                </>
              );

              if (service.to && !isActive) {
                return (
                  <Link key={service.name} to={service.to} className={cardClasses}>
                    {inner}
                  </Link>
                );
              }
              return (
                <div key={service.name} className={cardClasses}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CHALLENGES — Bold visual treatment
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-6">
                Sell-Side Transaction Challenges
              </h2>
              <p className="text-[#051c2c]/60 text-base leading-relaxed">
                Management teams preparing for a sale face competing demands: running the business
                while simultaneously satisfying the extensive requirements of due diligence.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {challenges.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white p-6 md:p-8 border-l-4 border-amber-500 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#051c2c] mb-3">{item.title}</h3>
                    <p className="text-[#051c2c]/60 text-base leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          OUR SOLUTION — Big stat + checkmark grid
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-4">Our Solution</h2>
            <p className="text-[#051c2c]/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We bring PE and investment banking expertise to every engagement, ensuring management
              teams are fully prepared for buyer scrutiny.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item) => (
              <div key={item.title} className="p-6 bg-[#FAFAFA] border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#051c2c] mb-2">{item.title}</h3>
                <p className="text-[#051c2c]/60 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          REAL WORLD SCENARIOS — Image-topped cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-[#051c2c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#60a5fa] text-sm font-semibold tracking-widest uppercase mb-3">Client Scenarios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real World Scenarios</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              See how companies like yours have navigated the sell-side process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <div key={scenario.label} className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={scenario.image}
                    alt={scenario.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c]/80 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase text-white bg-[#2563EB] px-3 py-1">
                    {scenario.label}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8">
                  <blockquote className="text-base text-[#051c2c]/70 italic leading-relaxed mb-6 border-l-3 border-[#2563EB] pl-4">
                    &ldquo;{scenario.quote}&rdquo;
                  </blockquote>

                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-3">
                      Business Challenges
                    </p>
                    <ul className="space-y-2">
                      {scenario.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-sm text-[#051c2c]/70">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-2">
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
          BUILDING CREDIBILITY — Full image-backed cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-10">
            Building Credibility &amp; Justifying Multiples
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group relative overflow-hidden min-h-[320px] md:min-h-[380px]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Venue management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/60 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  Hospitality
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  A private equity-backed venue management company preparing for sale
                </h3>
                <p className="text-white/70 text-base mb-4">
                  Finance team lacked expertise to handle complex due diligence...
                </p>
                <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View Case Study <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group relative overflow-hidden min-h-[320px] md:min-h-[380px]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=600&fit=crop"
                  alt="FinTech analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/60 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  FinTech
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  Enhancing Investment Credibility: Growth &amp; Churn Analysis for a FinTech Sale
                </h3>
                <p className="text-white/70 text-base mb-4">
                  A PE-backed payments company preparing for sale but lacking critical buyer analysis...
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
          SELECTED WORK — Case study list
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-20 px-6 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c] mb-8">Selected Work</h2>

          <div className="space-y-0 border-t border-gray-300">
            {[
              { to: '/case-studies/sell-side-kpi-data-cube', cat: 'Manufacturing', title: 'KPI Data Cube for a Company Sale' },
              { to: '/case-studies/sell-side-data-challenged-sale', cat: 'Business Services', title: 'Unlocking Value in a Data-Challenged Sale' },
              { to: '/case-studies/sell-side-credibility-multiples', cat: 'Hospitality', title: 'Building Credibility & Justifying Multiples' },
              { to: '/case-studies/sell-side-investment-credibility', cat: 'FinTech', title: 'Enhancing Investment Credibility' },
              { to: '/case-studies/sell-side-operations-marketing', cat: 'HVAC & Plumbing', title: 'Streamlining Operations and Marketing Insights' },
            ].map((study) => (
              <Link key={study.to} to={study.to} className="group block py-6 border-b border-gray-300">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-xs font-medium text-[#051c2c]/40 uppercase tracking-wider mb-1">{study.cat}</p>
                    <h3 className="text-lg font-semibold text-[#051c2c] group-hover:text-[#2563EB] transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <span className="text-[#2563EB] text-xl group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Image background with overlay
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=800&fit=crop"
            alt="City skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#051c2c]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to prepare for your exit?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300 shadow-lg text-base"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
