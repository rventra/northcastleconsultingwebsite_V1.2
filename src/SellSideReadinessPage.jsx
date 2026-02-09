import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  const services = [
    { name: 'Lender Due Diligence', to: null },
    { name: 'Lender Due Diligence For Non-PE Financing', to: null },
    { name: 'Challenged Credit Due Diligence', to: null },
    { name: 'Supply Chain Finance', to: null },
    { name: 'Sell-Side Readiness', to: '/services/sell-side-readiness', active: true },
    { name: 'Corporate Development', to: '/services/corporate-development' },
    { name: 'Dividend Recapitalization Prep', to: null },
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
    {
      title: 'Transaction Success',
      text: 'Over 95% of engagements result in a successful exit.',
    },
    {
      title: 'Management Focus',
      text: 'Allows leadership to prioritize daily operations without distraction.',
    },
    {
      title: 'Maximize Valuation',
      text: 'Pre-sale diligence reduces surprises and improves deal terms.',
    },
    {
      title: "Buyer's Perspective",
      text: 'PE and investment banking expertise ensures management is well-prepared.',
    },
    {
      title: 'Process Optimization',
      text: 'Clean, organized financials create a competitive, efficient process.',
    },
    {
      title: 'Data Validation',
      text: 'Rigorous verification of financial and operational metrics to instill buyer confidence.',
    },
    {
      title: 'Elevate Credibility',
      text: "Professional deliverables enhance the buyer's impression of management.",
    },
    {
      title: 'Prevent Surprises',
      text: 'Proactively address operational, technology, and HR concerns before due diligence.',
    },
  ];

  const scenarios = [
    {
      label: 'Serial Acquirer',
      quote:
        'I have helped scale our organization through five targeted acquisitions in just three years.',
      challenges: [
        'Incomplete post-merger integration',
        'Disparate data environment',
        'Multiple ERP, CRM, CPM, and BI tools in use',
        'Decentralized and misaligned F&A teams across BUs',
      ],
      hurdle:
        'Our management team is unable to address simple diligence requests (e.g., we need help producing a streamlined revenue pipeline by product, customer, etc.)',
    },
    {
      label: 'Complex Data Environment',
      quote:
        'I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making.',
      challenges: [
        'Insufficient systems',
        'Large unorganized data sets (millions of rows)',
        'Management lacks skills to extract and manipulate data',
      ],
      hurdle:
        'Our management team lacks the requisite bandwidth to tackle a transaction without neglecting the business (e.g., we need to stay focused on running the business itself)',
    },
    {
      label: 'Understaffed Finance Team',
      quote:
        'I manage finance at a company where the F&A team is currently running lean relative to operational demands.',
      challenges: [
        'Management team has significant bandwidth constraints',
        'F&A team is understaffed and struggling with day-to-day activities',
      ],
      hurdle:
        'Our management team is unable to produce anticipated diligence analysis (e.g., we need to deliver an analysis of revenue/profitability by customer cohort)',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#051c2c] text-white py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
            Private Equity Services
          </p>
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            Sell-Side Readiness
          </h1>
          <p className="text-xl text-white/80 mb-2 font-light">
            Maximizing Value &amp; Ensuring a Seamless Transaction
          </p>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl mb-8">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient,
            and high-value exit by optimizing financial transparency, streamlining processes, and
            proactively addressing potential buyer concerns.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-flex items-center gap-2 bg-white text-[#051c2c] px-6 py-3 font-medium hover:bg-gray-100 transition-colors text-sm"
          >
            Prepare Your Exit
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">Our services</h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
                {services.map((service) => {
                  const inner = (
                    <>
                      <h3
                        className={`text-sm font-semibold mb-1 ${
                          service.active
                            ? 'text-[#2563EB]'
                            : 'text-[#051c2c] group-hover:text-[#2563EB]'
                        } transition-colors`}
                      >
                        {service.name}
                      </h3>
                      {service.active && (
                        <span className="inline-block mt-1 text-xs text-[#2563EB]/70 font-medium">
                          Currently viewing
                        </span>
                      )}
                    </>
                  );

                  if (service.to && !service.active) {
                    return (
                      <Link
                        key={service.name}
                        to={service.to}
                        className="group bg-white p-5 hover:bg-gray-50 transition-colors"
                      >
                        {inner}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={service.name}
                      className={`p-5 ${
                        service.active
                          ? 'bg-[#051c2c]/[0.03] border-l-2 border-[#2563EB]'
                          : 'bg-white'
                      }`}
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">
                Sell-Side Transaction Challenges
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {challenges.map((item) => (
                  <div key={item.title} className="bg-white p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <div>
                        <h3 className="text-sm font-semibold text-[#051c2c] mb-2">{item.title}</h3>
                        <p className="text-[#051c2c]/60 text-sm">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Solution */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">Our Solution</h2>
              <div className="mt-4 inline-flex items-center gap-2 bg-[#051c2c] text-white px-4 py-2 text-sm font-medium">
                <span className="text-[#60a5fa] font-semibold text-lg">95%+</span>
                <span className="text-white/80 text-xs">Successful exits</span>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
                {solutions.map((item) => (
                  <div key={item.title} className="bg-white p-5">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2563EB]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <h3 className="text-sm font-semibold text-[#051c2c] mb-1">{item.title}</h3>
                        <p className="text-[#051c2c]/60 text-sm">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real World Scenarios */}
      <div className="py-10 md:py-12 px-6 bg-[#f8f9fa] border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-light text-[#051c2c] mb-8">Real World Scenarios</h2>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {scenarios.map((scenario) => (
              <div key={scenario.label} className="bg-white p-6 flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
                  {scenario.label}
                </span>

                <blockquote className="text-sm text-[#051c2c]/70 italic leading-relaxed mb-5 border-l-2 border-[#2563EB]/30 pl-4">
                  &ldquo;{scenario.quote}&rdquo;
                </blockquote>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#051c2c]/50 mb-2">
                    Business Challenges
                  </p>
                  <ul className="space-y-1.5">
                    {scenario.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#051c2c]/60">
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-amber-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#051c2c]/50 mb-2">
                    Greatest Hurdle
                  </p>
                  <p className="text-sm text-[#051c2c]/60 leading-relaxed">{scenario.hurdle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Building Credibility */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-light text-[#051c2c] mb-6">
            Building Credibility &amp; Justifying Multiples
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group bg-white p-6 hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs text-[#051c2c]/50 mb-2 block">Hospitality</span>
              <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                A private equity-backed venue management company preparing for sale
              </h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Finance team lacked expertise to handle complex due diligence...
              </p>
              <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                View More{' '}
                <span className="ml-1 group-hover:ml-2 transition-all">&rarr;</span>
              </span>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group bg-white p-6 hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs text-[#051c2c]/50 mb-2 block">FinTech</span>
              <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                Enhancing Investment Credibility: Structuring Key Growth &amp; Churn Analysis for a
                FinTech Sale
              </h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                A private equity-backed FinTech payments company preparing for sale but lacking
                critical buyer analysis...
              </p>
              <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                View More{' '}
                <span className="ml-1 group-hover:ml-2 transition-all">&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Selected Work */}
      <div className="py-10 md:py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-light text-[#051c2c] mb-6">Selected work</h2>

          <div className="space-y-0 border-t border-gray-200">
            <Link
              to="/case-studies/sell-side-kpi-data-cube"
              className="group block py-5 border-b border-gray-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Manufacturing</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">
                    KPI Data Cube for a Company Sale
                  </h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-data-challenged-sale"
              className="group block py-5 border-b border-gray-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Business Services</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">
                    Unlocking Value in a Data-Challenged Sale
                  </h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group block py-5 border-b border-gray-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Hospitality</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">
                    Building Credibility &amp; Justifying Multiples
                  </h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group block py-5 border-b border-gray-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">FinTech</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">
                    Enhancing Investment Credibility
                  </h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-operations-marketing"
              className="group block py-5 border-b border-gray-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">HVAC &amp; Plumbing</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">
                    Streamlining Operations and Marketing Insights
                  </h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#051c2c] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light text-white mb-3">Ready to prepare for your exit?</h2>
          <p className="text-white/60 mb-6">
            Let's discuss how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-flex items-center gap-2 bg-white text-[#051c2c] px-6 py-3 font-medium hover:bg-gray-100 transition-colors text-sm"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-4 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
