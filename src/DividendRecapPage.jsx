import React from 'react';

export default function DividendRecapPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4a6f] text-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Dividend Recapitalization Prep
          </h1>
          <p className="text-lg md:text-xl font-light mb-3 text-slate-200">
            Maximize Liquidity While Retaining Control
          </p>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Unlock capital for LPs without sacrificing ownership. North Castle's Dividend Recapitalization Prep ensures a seamless, lender-ready process that strengthens your credit story and optimizes valuation.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Challenges (Grey) */}
        <div className="bg-slate-100 py-10 px-6 md:px-10">
          <div className="max-w-xl ml-auto">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Key Issues Sponsors Face</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span>LPs seek <strong>liquidity</strong>, but a full exit isn't always the best option.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span>The company has <strong>deleveraged</strong>, opening up recap opportunities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span>Sponsors want to continue <strong>value creation initiatives</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Debt capital is available</strong>, but securing optimal terms requires expertise.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions (Blue) */}
        <div className="bg-[#1e3a5f] py-10 px-6 md:px-10 text-white">
          <div className="max-w-xl mr-auto">
            <h2 className="text-xl font-bold mb-4">Our Solution</h2>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Lender-Ready Data Preparation</strong> — Organizing financials for lender due diligence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Diligence Management</strong> — Handling investor/lender Q&A, minimizing management distractions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Financial Modeling & Stress Testing</strong> — Ensuring leverage sustainability with scenario analysis.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Data Reconciliation & KPI Development</strong> — Strengthening your credit story with key performance indicators.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Market Positioning & Lender Negotiations</strong> — Identifying the optimal capital structure for success.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Why Work With Us?</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="text-[#1e3a5f] mt-1">•</span>
              <span><strong>Proven Track Record</strong> — Extensive experience in successful dividend recapitalization transactions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e3a5f] mt-1">•</span>
              <span><strong>Boosts IRR</strong> — Maximizing fund returns while maintaining flexibility.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e3a5f] mt-1">•</span>
              <span><strong>Faster Execution</strong> — We minimize delays, ensuring a swift, lender-ready process.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e3a5f] mt-1">•</span>
              <span><strong>Tailored Strategy</strong> — Custom solutions designed for your company's unique situation.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1e3a5f] text-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Unlock Capital?</h2>
          <p className="text-base text-slate-300 mb-5">
            Schedule a consultation to discuss your dividend recapitalization opportunity.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Dividend%20Recapitalization%20Inquiry"
            className="inline-block bg-amber-400 text-[#1e3a5f] px-8 py-3 rounded font-semibold hover:bg-amber-300 transition-all shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-4 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-[#1e3a5f] hover:text-amber-600 transition-colors font-medium text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
