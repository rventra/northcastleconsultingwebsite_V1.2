import React from 'react';

export default function EnhancingInvestmentCredibilityPage({ navigateToPage }) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800" />
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Tech Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Enhancing Investment Credibility
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                How we structured key growth and churn analysis for a FinTech payments company to build data-driven confidence with buyers.
              </p>
            </div>

            {/* FinTech/Payment Graphic */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  <defs>
                    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  {/* Credit Card */}
                  <rect x="40" y="60" width="120" height="80" rx="8" fill="url(#cardGrad)" />
                  {/* Chip */}
                  <rect x="55" y="80" width="25" height="20" rx="3" fill="#fbbf24" opacity="0.9" />
                  {/* Lines */}
                  <rect x="55" y="110" width="60" height="6" rx="2" fill="white" opacity="0.3" />
                  <rect x="55" y="120" width="40" height="6" rx="2" fill="white" opacity="0.2" />
                  {/* Graph overlay */}
                  <path d="M50 170 L80 150 L110 160 L140 130 L170 140" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="170" cy="140" r="5" fill="#10b981" className="animate-ping" />
                  {/* Data points */}
                  <circle cx="80" cy="50" r="4" fill="#fbbf24" className="animate-pulse" />
                  <circle cx="120" cy="45" r="3" fill="#fbbf24" opacity="0.7" />
                  <circle cx="160" cy="55" r="3" fill="#fbbf24" opacity="0.5" />
                </svg>
                <div className="absolute -top-2 -right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white border border-white/20">
                  2 Months
                </div>
                <div className="absolute -bottom-2 -left-4 bg-cyan-500/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-cyan-200 border border-cyan-500/30">
                  FinTech Payments
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
              <p className="text-cyan-400 text-2xl font-bold">2</p>
              <p className="text-gray-400 text-sm">Months</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-400 text-2xl font-bold">4</p>
              <p className="text-gray-400 text-sm">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-400 text-2xl font-bold">3</p>
              <p className="text-gray-400 text-sm">Key Analyses</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-400 text-2xl font-bold">First</p>
              <p className="text-gray-400 text-sm">Time Data Cube</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Industry</p>
              <p className="text-slate-900 font-medium">FinTech</p>
              <p className="text-gray-600 text-sm">Payments</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Duration</p>
              <p className="text-slate-900 font-medium">2 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Team</p>
              <p className="text-slate-900 font-medium">1 MD, 1 Director</p>
              <p className="text-gray-600 text-sm">1 VP, 1 Associate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <span className="inline-block text-cyan-700 text-sm font-bold tracking-wider uppercase mb-3">The Challenge</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Missing the Data Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A private equity-backed FinTech payments company was preparing for a sale but <strong>lacked the critical analysis that buyers required</strong>. The company had never operated with these data-driven insights.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With no prior experience building these analyses, the finance and operations teams struggled to provide clear explanations for revenue growth, customer retention, and sales pipeline effectiveness. They needed help constructing the key analyses that would support the investment thesis and educate stakeholders.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Questions Unanswered
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-cyan-100">
                  <p className="text-gray-700 text-sm font-medium">What's driving revenue growth?</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-cyan-100">
                  <p className="text-gray-700 text-sm font-medium">How sticky are customers?</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-cyan-100">
                  <p className="text-gray-700 text-sm font-medium">Is the sales pipeline reliable?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Execution Section */}
      <div className="py-16 px-6 bg-gradient-to-br from-cyan-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-300 text-sm font-bold tracking-wider uppercase mb-3">The Execution</span>
            <h2 className="text-3xl font-bold mb-4">Building the Data Foundation</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We constructed investment-grade analyses to bridge the gap between operational data and buyer requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Key Growth Driver Analysis",
                desc: "Built a data cube segmenting revenue and gross profit by customer and service line, connecting revenue streams with issuance data at granular level.",
                highlight: "First-ever revenue/issuance linkage"
              },
              {
                icon: "🎯",
                title: "Sales Pipeline Analysis",
                desc: "Integrated marketing CRM data to build sales pipeline model tracking customer conversion rates at each stage.",
                highlight: "Justified revenue projections"
              },
              {
                icon: "🔄",
                title: "Churn & Retention Analysis",
                desc: "Developed customer lifecycle model assessing long-term retention trends across product and service lines.",
                highlight: "Proved low churn, high stickiness"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
                <div className="bg-cyan-500/20 rounded-lg px-3 py-2 text-xs text-cyan-200 inline-block">
                  ✓ {item.highlight}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-800 font-bold text-lg">Data-Driven Credibility</p>
                  <p className="text-green-600 text-sm">Investment thesis strengthened</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 text-sm">Clear financial story for buyers</p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 text-sm">Management confidence in Q&A</p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 text-sm">Smoother transaction process</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-green-600 text-sm font-bold tracking-wider uppercase mb-3">The Results</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Confidence in Every Answer</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The company successfully leveraged these newly developed insights to strengthen its investment thesis and provide buyers with a clearer financial story.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Deeper understanding of key revenue drivers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Clear visibility into customer behaviors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Confident responses to diligence questions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Transaction backed by data credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-3xl mx-auto text-center py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Data-Driven Credibility for Your Sale?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can build the analyses buyers are looking for.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=FinTech%20Analysis%20Inquiry"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
