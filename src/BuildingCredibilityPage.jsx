import React from 'react';

export default function BuildingCredibilityPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Back Navigation - Top */}
      <div className="bg-slate-900 py-3 px-6">
        <div className="max-w-6xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Sell-Side Readiness
          </a>
        </div>
      </div>

      {/* Hero Section with Visual Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Building Credibility & Justifying Multiples
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                How we equipped a venue management company's finance team to support a premium valuation through data-backed analysis.
              </p>
            </div>

            {/* Contract/Building Graphic */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  <defs>
                    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  {/* Building */}
                  <rect x="60" y="60" width="80" height="120" rx="4" fill="url(#buildingGrad)" />
                  {/* Windows */}
                  <rect x="70" y="75" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.8" className="animate-pulse" />
                  <rect x="95" y="75" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.6" />
                  <rect x="120" y="75" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.8" />
                  <rect x="70" y="100" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.6" />
                  <rect x="95" y="100" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.8" className="animate-pulse" />
                  <rect x="120" y="100" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.6" />
                  <rect x="70" y="125" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.8" />
                  <rect x="95" y="125" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.6" />
                  <rect x="120" y="125" width="15" height="15" rx="2" fill="#fbbf24" opacity="0.8" className="animate-pulse" />
                  {/* Door */}
                  <rect x="90" y="155" width="20" height="25" rx="2" fill="#1e3a8a" />
                  {/* Chart rising */}
                  <path d="M35 150 L50 130 L65 140 L80 110" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="80" cy="110" r="4" fill="#10b981" className="animate-ping" />
                  {/* Dollar sign */}
                  <circle cx="165" cy="80" r="20" fill="#10b981" opacity="0.2" />
                  <text x="165" y="87" textAnchor="middle" fill="#10b981" fontSize="24" fontWeight="bold">$</text>
                </svg>
                <div className="absolute -top-2 -right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white border border-white/20">
                  5 Months
                </div>
                <div className="absolute -bottom-2 -left-4 bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-green-300 border border-green-500/30">
                  Premium Multiple
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-slate-800 py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">5</p>
              <p className="text-gray-400 text-sm">Months</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">3</p>
              <p className="text-gray-400 text-sm">Key Analyses</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">Dozens</p>
              <p className="text-gray-400 text-sm">Contracts Audited</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">High</p>
              <p className="text-gray-400 text-sm">EBITDA Multiple</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Industry</p>
              <p className="text-slate-900 font-medium">Leisure & Hospitality</p>
              <p className="text-gray-600 text-sm">Venue Management</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Duration</p>
              <p className="text-slate-900 font-medium">5 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Team</p>
              <p className="text-slate-900 font-medium">1 Director</p>
              <p className="text-gray-600 text-sm">1 Vice President</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Services</p>
              <p className="text-slate-900 font-medium">Sell-Side Readiness</p>
              <p className="text-gray-600 text-sm">FP&A Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-900 text-sm font-bold tracking-wider uppercase mb-3">The Challenge</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Team Stretched Too Thin</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A private equity-backed venue management company was preparing for a sale, but its <strong>finance team lacked the expertise</strong> to handle the complex due diligence process.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The CFO and private equity sponsor found themselves deeply involved in basic financial analysis, which slowed progress. They needed support to manage the finance function, prepare critical analysis, and provide <strong>data-backed support to justify the high EBITDA multiple</strong> sought for the transaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-100">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500">⚠️</span>
                  </div>
                  <p className="text-gray-700 text-sm">Finance team overwhelmed with basic analysis</p>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-100">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500">⚠️</span>
                  </div>
                  <p className="text-gray-700 text-sm">CFO and sponsor distracted from strategy</p>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-100">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500">⚠️</span>
                  </div>
                  <p className="text-gray-700 text-sm">High multiple needed data justification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Execution Section */}
      <div className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-yellow-500 text-sm font-bold tracking-wider uppercase mb-3">The Execution</span>
            <h2 className="text-3xl font-bold mb-4">Three Critical Analyses</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We built structured analyses that addressed key buyer concerns and supported the investment thesis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                title: "Contract Leverage Analysis",
                desc: "Audited agreements, analyzed KPIs, and built models incorporating dozens of agreements and amendments to demonstrate strength of terms over time.",
                outcome: "Company adopted our model for ongoing use"
              },
              {
                icon: "📊",
                title: "Cap Ex ROI Analysis",
                desc: "Developed detailed model isolating investment decisions from broader market cycles for clear long-term return assessment.",
                outcome: "Validated management's ROI claims"
              },
              {
                icon: "📈",
                title: "Operational Benchmarking",
                desc: "Benchmarked KPIs and financial performance for venues before and after management takeover.",
                outcome: "Quantifiable proof of improvements"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
                <div className="bg-green-500/20 rounded-lg px-3 py-2 text-xs text-green-300 inline-block">
                  ✓ {item.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-800 font-bold text-lg">Sale Completed</p>
                  <p className="text-green-600 text-sm">With well-supported thesis</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 text-sm">CFO freed to focus on strategic aspects</p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 text-sm">Contract model adopted for future use</p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 text-sm">Long-term value creation enabled</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-green-600 text-sm font-bold tracking-wider uppercase mb-3">The Results</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Premium Exit Achieved</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The firm successfully completed its sale with a well-supported investment thesis. Our involvement allowed the CFO and sponsor to focus on strategic aspects of the transaction.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Justified high EBITDA multiple with data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Management freed from finance workload</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Contract tools adopted post-transaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-3xl mx-auto text-center py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Justify Your Multiple?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how our structured approach can support your exit.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
