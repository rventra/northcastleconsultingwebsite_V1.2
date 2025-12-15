import React from 'react';

export default function KPIDataCubeCaseStudyPage({ navigateToPage }) {
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

      {/* Hero Section with Animated Gradient */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite'
          }}
        />
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Grid Pattern Overlay */}
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
                Developing a KPI Data Cube For a Company Sale
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                How we transformed 2.7 million transaction-level data points from six disparate ERP systems into actionable insights for a $250M manufacturing company sale.
              </p>
            </div>

            {/* Data Visualization Graphic */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                {/* Animated Cube Graphic */}
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  {/* Background glow */}
                  <defs>
                    <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8"/>
                    </linearGradient>
                    <linearGradient id="cubeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6"/>
                    </linearGradient>
                    <linearGradient id="cubeGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e40af" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9"/>
                    </linearGradient>
                  </defs>
                  {/* Cube faces */}
                  <polygon points="100,30 170,70 170,130 100,170 30,130 30,70" fill="url(#cubeGradient1)" className="animate-pulse"/>
                  <polygon points="100,30 170,70 100,110 30,70" fill="url(#cubeGradient2)"/>
                  <polygon points="100,110 170,70 170,130 100,170" fill="url(#cubeGradient3)"/>
                  <polygon points="100,110 30,70 30,130 100,170" fill="#1e3a8a" fillOpacity="0.7"/>
                  {/* Data points */}
                  <circle cx="100" cy="70" r="4" fill="#fbbf24" className="animate-ping"/>
                  <circle cx="130" cy="90" r="3" fill="#fbbf24" opacity="0.8"/>
                  <circle cx="70" cy="90" r="3" fill="#fbbf24" opacity="0.8"/>
                  <circle cx="100" cy="130" r="3" fill="#fbbf24" opacity="0.6"/>
                  {/* Chart bars inside cube */}
                  <rect x="60" y="100" width="10" height="30" fill="#fbbf24" opacity="0.7"/>
                  <rect x="80" y="90" width="10" height="40" fill="#fbbf24" opacity="0.8"/>
                  <rect x="100" y="80" width="10" height="50" fill="#fbbf24" opacity="0.9"/>
                  <rect x="120" y="95" width="10" height="35" fill="#fbbf24" opacity="0.7"/>
                </svg>
                {/* Floating labels */}
                <div className="absolute -top-2 -right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white border border-white/20">
                  2.7M Data Points
                </div>
                <div className="absolute -bottom-2 -left-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-yellow-300 border border-yellow-500/30">
                  6 ERP Systems
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
              <p className="text-yellow-500 text-2xl font-bold">$250M</p>
              <p className="text-gray-400 text-sm">Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">9</p>
              <p className="text-gray-400 text-sm">Months</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">5</p>
              <p className="text-gray-400 text-sm">Acquisitions Integrated</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-2xl font-bold">2.7M</p>
              <p className="text-gray-400 text-sm">Data Points</p>
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
              <p className="text-slate-900 font-medium">Manufacturing</p>
              <p className="text-gray-600 text-sm">Auto Parts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Duration</p>
              <p className="text-slate-900 font-medium">9 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Team</p>
              <p className="text-slate-900 font-medium">1 Managing Director</p>
              <p className="text-gray-600 text-sm">1 Director, 1 VP</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Services</p>
              <p className="text-slate-900 font-medium">Sell-Side Readiness</p>
              <p className="text-gray-600 text-sm">Transaction DD</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Data Chaos from Rapid Growth</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A private equity-backed auto parts manufacturer preparing for sale faced significant data integration challenges. The company had acquired <strong>five businesses over two years</strong>, creating a complex web of disconnected systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The challenge: create a consolidated, enterprise-level view of sales, gross margin, and KPIs across customers, SKUs, and other dimensions from <strong>over 2.7 million transaction-level data points</strong> scattered across <strong>six disparate ERP systems</strong>.
              </p>
            </div>

            {/* Challenge Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500">ERP {i}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <svg className="w-6 h-6 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="bg-blue-900 text-white rounded-lg px-4 py-3 inline-block">
                    <span className="font-bold">Unified KPI Data Cube</span>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">Our Strategic Approach</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A methodical, five-phase approach to transform fragmented data into strategic insights.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Stakeholder Collaboration", desc: "Partnered with Sponsor and leadership to access and validate ERP data" },
              { num: "02", title: "Requirements Discovery", desc: "Conducted interviews to identify critical data fields and structures" },
              { num: "03", title: "Data Cube Development", desc: "Built KPI data cube using Power Pivot and Power Query" },
              { num: "04", title: "Diligence Management", desc: "Managed information requests ensuring accurate, timely delivery" },
              { num: "05", title: "Knowledge Transfer", desc: "Transitioned the data cube to FP&A as an ongoing tool" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all h-full">
                  <span className="text-yellow-500 text-2xl font-bold">{step.num}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights Generated */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-900 text-sm font-bold tracking-wider uppercase mb-3">Deliverables</span>
            <h2 className="text-3xl font-bold text-slate-900">Key Insights Generated</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📊", title: "Customer Churn Analysis", desc: "Identified retention patterns and risk factors across acquired entities" },
              { icon: "💰", title: "Price-Volume Mix", desc: "SKU-level analysis revealing margin optimization opportunities" },
              { icon: "📈", title: "Sales Breakdowns", desc: "Profitability analysis by customer, channel, and product category" },
              { icon: "🏷️", title: "SKU Vintage Analysis", desc: "Performance tracking of product lifecycle and introduction timing" }
            ].map((insight, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <span className="text-4xl mb-4 block">{insight.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm">{insight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Results Graphic */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-800 font-bold text-lg">Successful Exit</p>
                    <p className="text-green-600 text-sm">Competitive sale process completed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700 text-sm">Equipped management to respond confidently to buyer inquiries</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700 text-sm">Transaction-level visibility for future acquisitions</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700 text-sm">Post-sale engagement for BI enhancement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block text-green-600 text-sm font-bold tracking-wider uppercase mb-3">The Results</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Driving a Successful Exit</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our data cube became the foundation for a competitive sale process, enabling management to confidently address buyer inquiries with accurate, validated data.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Facilitated competitive sale process with comprehensive data insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Provided ongoing transaction-level visibility for future acquisitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Post-sale, the company engaged North Castle for BI system development</span>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how our data-driven approach can maximize your transaction value.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=KPI%20Data%20Cube%20Inquiry"
            className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>

      {/* Keyframes for gradient animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
