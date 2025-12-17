import React from 'react';

export default function DividendRecapPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#0D3BC3] text-white py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Dividend Recapitalization Prep
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-white/90">
            Maximize Liquidity While Retaining Control
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Unlock capital for LPs without sacrificing ownership. North Castle's Dividend Recapitalization Prep ensures a seamless, lender-ready process that strengthens your credit story and optimizes valuation.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Challenges */}
        <div className="bg-[#F6F7F7] py-14 px-6 md:px-12">
          <div className="max-w-lg ml-auto">
            <h2 className="text-2xl font-bold text-[#1A2234] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#0D3BC3] rounded-full"></span>
              Key Issues Sponsors Face
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">1</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">LP Liquidity Demands</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">LPs seek liquidity, but a full exit isn't always the best option.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">2</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Debt Capacity</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">The company has deleveraged, opening up recap opportunities.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">3</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Value Creation</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Sponsors want to continue value creation initiatives.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">4</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Optimal Terms</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Debt capital is available, but securing optimal terms requires expertise.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions */}
        <div className="bg-[#0D3BC3] py-14 px-6 md:px-12 text-white">
          <div className="max-w-lg mr-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#EDB624] rounded-full"></span>
              Our Solution
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Lender-Ready Data Preparation</strong>
                  <span className="text-white/80 leading-relaxed">Organizing financials for lender due diligence.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Diligence Management</strong>
                  <span className="text-white/80 leading-relaxed">Handling investor/lender Q&A, minimizing management distractions.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Financial Modeling & Stress Testing</strong>
                  <span className="text-white/80 leading-relaxed">Ensuring leverage sustainability with scenario analysis.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Data Reconciliation & KPI Development</strong>
                  <span className="text-white/80 leading-relaxed">Strengthening your credit story with key performance indicators.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Market Positioning & Lender Negotiations</strong>
                  <span className="text-white/80 leading-relaxed">Identifying the optimal capital structure for success.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Why Work With Us?</h2>
            <p className="text-[#1A2234]/70 text-lg">Key advantages of partnering with North Castle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F6F7F7] rounded-xl p-6 text-center border-t-4 border-[#0D3BC3]">
              <div className="w-12 h-12 bg-[#0D3BC3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0D3BC3] text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2">Proven Track Record</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed">Extensive experience in successful dividend recapitalization transactions.</p>
            </div>

            <div className="bg-[#F6F7F7] rounded-xl p-6 text-center border-t-4 border-[#EDB624]">
              <div className="w-12 h-12 bg-[#EDB624]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#EDB624] text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2">Boosts IRR</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed">Maximizing fund returns while maintaining flexibility.</p>
            </div>

            <div className="bg-[#F6F7F7] rounded-xl p-6 text-center border-t-4 border-[#0D3BC3]">
              <div className="w-12 h-12 bg-[#0D3BC3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0D3BC3] text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2">Faster Execution</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed">We minimize delays, ensuring a swift, lender-ready process.</p>
            </div>

            <div className="bg-[#F6F7F7] rounded-xl p-6 text-center border-t-4 border-[#EDB624]">
              <div className="w-12 h-12 bg-[#EDB624]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#EDB624] text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2">Tailored Strategy</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed">Custom solutions designed for your company's unique situation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A2234] text-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Unlock Capital?</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation to discuss your dividend recapitalization opportunity.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Dividend%20Recapitalization%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-6 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="inline-flex items-center gap-2 text-[#0D3BC3] hover:text-[#EDB624] transition-colors font-medium"
          >
            <span>←</span> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
