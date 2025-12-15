import React from 'react';

export default function DataChallengedCaseStudyPage({ navigateToPage }) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800" />
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          {/* Mesh pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Unlocking Value in a Data-Challenged Business Sale
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                How we transformed a stalled year-long sale process into a successful exit by bringing order to financial chaos.
              </p>
            </div>

            {/* Unlock Graphic */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  <defs>
                    <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  {/* Lock body */}
                  <rect x="50" y="90" width="100" height="80" rx="10" fill="url(#lockGradient)" />
                  {/* Lock shackle (unlocked) */}
                  <path d="M70 90 V60 A30 30 0 0 1 130 60" fill="none" stroke="#fbbf24" strokeWidth="12" strokeLinecap="round" className="animate-pulse" />
                  {/* Keyhole */}
                  <circle cx="100" cy="125" r="12" fill="#1e1b4b" />
                  <rect x="96" y="125" width="8" height="20" fill="#1e1b4b" />
                  {/* Sparkles */}
                  <circle cx="145" cy="70" r="3" fill="#fbbf24" className="animate-ping" />
                  <circle cx="160" cy="90" r="2" fill="#fbbf24" opacity="0.6" />
                  <circle cx="155" cy="110" r="2" fill="#fbbf24" opacity="0.4" />
                </svg>
                {/* Floating labels */}
                <div className="absolute -top-2 -right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white border border-white/20">
                  7 Months
                </div>
                <div className="absolute -bottom-2 -left-4 bg-purple-500/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-purple-200 border border-purple-500/30">
                  Value Unlocked
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
              <p className="text-purple-400 text-2xl font-bold">1 Year</p>
              <p className="text-gray-400 text-sm">Stalled Before Us</p>
            </div>
            <div className="text-center">
              <p className="text-purple-400 text-2xl font-bold">7</p>
              <p className="text-gray-400 text-sm">Months to Close</p>
            </div>
            <div className="text-center">
              <p className="text-purple-400 text-2xl font-bold">6</p>
              <p className="text-gray-400 text-sm">Analytical Initiatives</p>
            </div>
            <div className="text-center">
              <p className="text-purple-400 text-2xl font-bold">1</p>
              <p className="text-gray-400 text-sm">VP Deployed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Industry</p>
              <p className="text-slate-900 font-medium">Business Services</p>
              <p className="text-gray-600 text-sm">Vending & Catering</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Duration</p>
              <p className="text-slate-900 font-medium">7 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Team</p>
              <p className="text-slate-900 font-medium">1 Vice President</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Services</p>
              <p className="text-slate-900 font-medium">Sell-Side Readiness</p>
              <p className="text-gray-600 text-sm">FP&A, Transaction DD</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-purple-700 text-sm font-bold tracking-wider uppercase mb-3">The Challenge</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Stalled Deal in Crisis</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A private equity-backed vending and catering company faced significant obstacles in completing its sale. The organization struggled with:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong>Understaffed finance department</strong> unable to meet diligence demands</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong>Fragmented legacy systems</strong> with no unified data source</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong>Incomplete post-acquisition integrations</strong> creating data gaps</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">
                Despite a <strong>year of effort</strong> by the investment banker, these operational and financial shortcomings prevented the business from being confidently presented to the market.
              </p>
            </div>

            {/* Challenge Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Deal Stalled for 1 Year
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center border border-red-100">
                    <div className="text-3xl mb-2">👥</div>
                    <p className="text-xs text-gray-600">Understaffed Team</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-red-100">
                    <div className="text-3xl mb-2">💾</div>
                    <p className="text-xs text-gray-600">Legacy Systems</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-red-100">
                    <div className="text-3xl mb-2">🔗</div>
                    <p className="text-xs text-gray-600">Incomplete Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Execution Section */}
      <div className="py-16 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-purple-300 text-sm font-bold tracking-wider uppercase mb-3">The Execution</span>
            <h2 className="text-3xl font-bold mb-4">Six Targeted Analytical Initiatives</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              North Castle served as a strategic finance partner, working alongside the CFO to extract, organize, and analyze critical data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏪", title: "Site Conversion Analysis", desc: "Examined historical conversions to higher-revenue locations and ranked non-converted sites to validate growth assumptions" },
              { icon: "📈", title: "Same Store Growth Review", desc: "Demonstrated how new locations drove expansion while revealing shift toward higher-margin, recession-resistant segments" },
              { icon: "💵", title: "Pricing, Volume, Mix Analysis", desc: "Isolated revenue drivers, proving that customer expansion—not inflation—fueled growth" },
              { icon: "🏗️", title: "Capital Expenditure Assessment", desc: "Evaluated ROI on conversion buildouts and maintenance investments" },
              { icon: "👔", title: "Staffing Profitability Study", desc: "Allocated personnel to specific units and regions to optimize staffing levels and reduce costs" },
              { icon: "🚚", title: "Route Effectiveness Analysis", desc: "Created operational roadmap for integrating acquired locations into corporate logistics" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
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
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Successful Exit Achieved
                  </div>
                </div>

                <div className="relative">
                  {/* Timeline visualization */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-red-500 text-lg">⏸</span>
                      </div>
                      <p className="text-xs text-gray-500">Stalled</p>
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-red-200 via-yellow-200 to-green-400 mx-4 rounded" />
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-500 text-lg">✓</span>
                      </div>
                      <p className="text-xs text-gray-500">Closed</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
                    <p className="text-green-700 font-semibold">From 1 Year Stalled → 7 Month Close</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block text-green-600 text-sm font-bold tracking-wider uppercase mb-3">The Results</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">From Stalled to Sold</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The company successfully completed its sale despite initial financial disorganization. Our structured approach transformed a stalled process into a successful exit.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong>Enabled investment bank</strong> to focus on transaction execution</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong>Managed finance team coordination</strong> and data compilation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong>Facilitated efficient due diligence</strong> with organized deliverables</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong>Supported a successful exit</strong> after year-long stall</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <svg className="w-12 h-12 text-purple-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Insight</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              "Sometimes the difference between a failed exit and a successful one isn't the business itself—it's having the right expertise to <strong>tell the story</strong> the data is hiding."
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-3xl mx-auto text-center py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Facing Data Challenges in Your Exit?</h2>
          <p className="text-gray-300 mb-8">
            Don't let disorganized data derail your transaction. Let's discuss how we can help.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Data%20Challenges%20Inquiry"
            className="inline-block bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
