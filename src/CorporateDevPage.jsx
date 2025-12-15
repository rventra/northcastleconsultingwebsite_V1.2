import React from 'react';

export default function CorporateDevPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Corporate Development</h1>
          <p className="text-2xl md:text-3xl font-light mb-6">
            Strategic M&A Execution for Growth & Value Creation
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            North Castle's Corporate Development services provide structured M&A strategy, due diligence, and execution to help companies maximize acquisition value and minimize risks.
          </p>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Challenges</h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Strategic Alignment</strong> – Companies must ensure acquisitions align with growth objectives, market positioning, and financial goals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Risk Mitigation</strong> – Poor due diligence can lead to overvaluation, operational disruptions, and integration failures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Resource Constraints</strong> – Many firms lack in-house M&A expertise, slowing execution and increasing risk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Complex Deal Structuring</strong> – Understanding valuation, synergies, and negotiation strategies is critical for success</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Our Solutions Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Solutions</h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Target Screening</strong> – Identify and evaluate potential acquisition targets based on strategic fit, financial performance, and market positioning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Preliminary Diligence</strong> – Assess investment opportunities through financial analysis, synergy evaluation, and structuring options</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Confirmatory Diligence</strong> – Conduct comprehensive due diligence, validate key assumptions, and quantify value drivers and risks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Valuation & Deal Structuring</strong> – Develop financial models, assess transaction risks, and negotiate optimal deal terms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Transaction Execution</strong> – Manage the LOI, purchase agreements, and closing procedures for a seamless transaction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Post-Deal Integration</strong> – Identify integration challenges, define synergy strategies, and support execution planning</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Case Studies</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-2">From Operations to Ownership: Car Rental Franchise Acquisition</h3>
              <p className="text-gray-600">A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business by implementing more efficient rental models.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Building an Acquisition Roadmap: Target Identification for a Consulting Firm</h3>
              <p className="text-gray-600">A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Related Services</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <span className="text-blue-900 group-hover:text-blue-700 font-medium">Sell-Side Readiness →</span>
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <span className="text-blue-900 group-hover:text-blue-700 font-medium">Dividend Recapitalization Prep →</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a consultation to discuss your corporate development strategy and M&A objectives.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
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
