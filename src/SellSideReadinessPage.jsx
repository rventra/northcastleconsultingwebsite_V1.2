import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sell-Side Readiness
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
            Maximizing Value & Ensuring a Seamless Transaction
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Challenges */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Challenges</h2>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    <strong className="text-slate-900">Risk of Disruption</strong> — Management must balance day-to-day operations while preparing for due diligence.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    <strong className="text-slate-900">Data Complexity</strong> — Disparate systems, large, unstructured data, and post-merger misalignment can stall transactions.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    <strong className="text-slate-900">Buyer Scrutiny</strong> — Investors demand accuracy in financials and operations, and unexpected issues can derail valuations.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    <strong className="text-slate-900">Resource Constraints</strong> — Understaffed F&A teams struggle to meet the diligence requirements of a deal.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Solutions */}
            <div className="bg-blue-900 rounded-2xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Solution</h2>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-100">
                    <strong className="text-white">Transaction Success</strong> — Over 95% of engagements result in a successful exit.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-100">
                    <strong className="text-white">Management Focus</strong> — Allows leadership to prioritize daily operations without distraction.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-gray-100">
                    <strong className="text-white">Maximize Valuation</strong> — Pre-sale diligence reduces surprises and improves deal terms.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-100">
                    <strong className="text-white">Data Validation</strong> — Rigorous verification of financial and operational metrics to instill buyer confidence.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="text-gray-100">
                    <strong className="text-white">Elevate Credibility</strong> — Professional deliverables enhance the buyer's impression of the management team.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="text-gray-100">
                    <strong className="text-white">Prevent Surprises</strong> — Proactively address operational, technology, and HR concerns before due diligence begins.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-slate-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-sell" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-sell)" />
          </svg>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-4xl md:text-5xl font-bold mb-2">&gt;95%</p>
            <p className="text-xl text-gray-300">Success Rate on Sell-Side Engagements</p>
          </div>
        </div>
      </div>

      {/* Real World Scenarios Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real World Scenarios</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Scenario 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Serial Acquirer</h3>
                  <p className="text-gray-500 italic">"I have helped scale our organization through five targeted acquisitions in just three years"</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-sm font-semibold text-blue-900 mb-2">Business Challenges:</p>
                <ul className="text-gray-600 mb-4 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Incomplete post-merger integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Disparate data environment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Multiple ERP, CRM, CPM, and BI tools in use
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Decentralized and misaligned F&A teams across multiple BUs and subsidiaries
                  </li>
                </ul>
                <p className="text-sm font-semibold text-blue-900 mb-2">Greatest Hurdle:</p>
                <p className="text-gray-600 italic">"Our management team is unable to address simple diligence requests (e.g. we need help producing a streamlined revenue pipeline by product, customer, etc.)"</p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Understaffed Finance Team</h3>
                  <p className="text-gray-500 italic">"I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making"</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-sm font-semibold text-blue-900 mb-2">Business Challenges:</p>
                <ul className="text-gray-600 mb-4 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Insufficient systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Large and unorganized data sets (ex: millions of rows of transactional data)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Management lacks the requisite skills to extract data and manipulate it
                  </li>
                </ul>
                <p className="text-sm font-semibold text-blue-900 mb-2">Greatest Hurdle:</p>
                <p className="text-gray-600 italic">"Our management team lacks the requisite bandwidth to tackle a transaction without the business being neglected (e.g. we need to stay focused on running the business itself)"</p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Complex Data Environment</h3>
                  <p className="text-gray-500 italic">"I manage finance at a company where the F&A team is currently running lean relative to our operational demands"</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-sm font-semibold text-blue-900 mb-2">Business Challenges:</p>
                <ul className="text-gray-600 mb-4 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    Management team has significant bandwidth constraints
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                    F&A team is understaffed and struggling to keep up with their day-to-day activities
                  </li>
                </ul>
                <p className="text-sm font-semibold text-blue-900 mb-2">Greatest Hurdle:</p>
                <p className="text-gray-600 italic">"Our management team is unable to produce anticipated diligence analysis (e.g. we need to deliver an analysis of revenue/profitability by customer cohort)"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all border border-gray-100 hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 mb-3">Building Credibility & Justifying Multiples</h3>
              <p className="text-gray-600 mb-4">A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process.</p>
              <span className="inline-flex items-center gap-2 text-blue-900 font-semibold group-hover:gap-3 transition-all">
                Read Case Study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all border border-gray-100 hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 mb-3">Enhancing Investment Credibility: FinTech Sale</h3>
              <p className="text-gray-600 mb-4">A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.</p>
              <span className="inline-flex items-center gap-2 text-blue-900 font-semibold group-hover:gap-3 transition-all">
                Read Case Study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Prepare for Your Exit?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Schedule a consultation to discuss your sell-side readiness needs and how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-8 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="inline-flex items-center gap-2 text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
