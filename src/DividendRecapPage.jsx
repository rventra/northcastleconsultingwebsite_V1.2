import React from 'react';

export default function DividendRecapPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dividend Recapitalization Prep
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-gray-200">
            Maximize Liquidity While Retaining Control
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock capital for LPs without sacrificing ownership. North Castle's Dividend Recapitalization Prep ensures a seamless, lender-ready process that strengthens your credit story and optimizes valuation.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Issues Sponsors Face</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>LPs seek <strong>liquidity</strong>, but a full exit isn't always the best option.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>The company has <strong>deleveraged</strong>, opening up recap opportunities.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span>Sponsors want to continue <strong>value creation initiatives</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Debt capital is available</strong>, but securing optimal terms requires expertise.</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Solution</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Lender-Ready Data Preparation</strong> — Organizing financials for lender due diligence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Diligence Management</strong> — Handling investor/lender Q&A, minimizing management distractions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Financial Modeling & Stress Testing</strong> — Ensuring leverage sustainability with scenario analysis.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Data Reconciliation & KPI Development</strong> — Strengthening your credit story with key performance indicators.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Market Positioning & Lender Negotiations</strong> — Identifying the optimal capital structure for success.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Work With Us?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-900 mt-1">•</span>
              <span><strong>Proven Track Record</strong> — Extensive experience in successful dividend recapitalization transactions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-900 mt-1">•</span>
              <span><strong>Boosts IRR</strong> — Maximizing fund returns while maintaining flexibility.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-900 mt-1">•</span>
              <span><strong>Faster Execution</strong> — We minimize delays, ensuring a swift, lender-ready process.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-900 mt-1">•</span>
              <span><strong>Tailored Strategy</strong> — Custom solutions designed for your company's unique situation.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Unlock Capital?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a consultation to discuss your dividend recapitalization opportunity.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Dividend%20Recapitalization%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
