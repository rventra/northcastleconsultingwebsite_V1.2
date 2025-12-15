import React from 'react';

export default function CorporateDevPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate Development
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-gray-200">
            Strategic M&A Execution for Growth & Value Creation
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            North Castle's Corporate Development services provide structured M&A strategy, due diligence, and execution to help companies maximize acquisition value and minimize risks.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Challenges (Grey) */}
        <div className="bg-gray-100 py-16 px-6 md:px-12">
          <div className="max-w-xl ml-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Challenges</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-900 mt-1">•</span>
                <span><strong>Strategic Alignment</strong> — Companies must ensure acquisitions align with growth objectives, market positioning, and financial goals.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-900 mt-1">•</span>
                <span><strong>Risk Mitigation</strong> — Poor due diligence can lead to overvaluation, operational disruptions, and integration failures.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-900 mt-1">•</span>
                <span><strong>Resource Constraints</strong> — Many firms lack in-house M&A expertise, slowing execution and increasing risk.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-900 mt-1">•</span>
                <span><strong>Complex Deal Structuring</strong> — Understanding valuation, synergies, and negotiation strategies is critical for success.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions (Blue) */}
        <div className="bg-blue-900 py-16 px-6 md:px-12 text-white">
          <div className="max-w-xl mr-auto">
            <h2 className="text-2xl font-bold mb-6">Our Solutions</h2>
            <ul className="space-y-4 text-blue-100">
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong className="text-white">Target Screening</strong> — Identify and evaluate potential acquisition targets based on strategic fit, financial performance, and market positioning.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong className="text-white">Preliminary Diligence</strong> — Assess investment opportunities through financial analysis, synergy evaluation, and structuring options.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong className="text-white">Confirmatory Diligence</strong> — Conduct comprehensive due diligence, validate key assumptions, and quantify value drivers and risks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong className="text-white">Valuation & Deal Structuring</strong> — Develop financial models, assess transaction risks, and negotiate optimal deal terms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong className="text-white">Transaction Execution</strong> — Manage the LOI, purchase agreements, and closing procedures for a seamless transaction.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span><strong className="text-white">Post-Deal Integration</strong> — Identify integration challenges, define synergy strategies, and support execution planning.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Case Studies</h2>

          <div className="space-y-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-car-rental'); }}
              className="block p-6 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">From Operations to Ownership: Car Rental Franchise Acquisition</h3>
              <p className="text-gray-600 mb-2">A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business by implementing more efficient rental models.</p>
              <span className="text-blue-900 font-medium">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }}
              className="block p-6 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Building an Acquisition Roadmap: Target Identification for a Consulting Firm</h3>
              <p className="text-gray-600 mb-2">A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.</p>
              <span className="text-blue-900 font-medium">Read Case Study →</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a consultation to discuss your corporate development strategy and M&A objectives.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
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
