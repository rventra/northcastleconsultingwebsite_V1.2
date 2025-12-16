import React from 'react';

export default function CorporateDevPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4a6f] text-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Corporate Development
          </h1>
          <p className="text-lg md:text-xl font-light mb-3 text-slate-200">
            Strategic M&A Execution for Growth & Value Creation
          </p>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            North Castle's Corporate Development services provide structured M&A strategy, due diligence, and execution to help companies maximize acquisition value and minimize risks.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Challenges (Grey) */}
        <div className="bg-slate-100 py-10 px-6 md:px-10">
          <div className="max-w-xl ml-auto">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Challenges</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Strategic Alignment</strong> — Companies must ensure acquisitions align with growth objectives, market positioning, and financial goals.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Risk Mitigation</strong> — Poor due diligence can lead to overvaluation, operational disruptions, and integration failures.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Resource Constraints</strong> — Many firms lack in-house M&A expertise, slowing execution and increasing risk.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Complex Deal Structuring</strong> — Understanding valuation, synergies, and negotiation strategies is critical for success.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions (Blue) */}
        <div className="bg-[#1e3a5f] py-10 px-6 md:px-10 text-white">
          <div className="max-w-xl mr-auto">
            <h2 className="text-xl font-bold mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Target Screening</strong> — Identify and evaluate potential acquisition targets based on strategic fit, financial performance, and market positioning.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Preliminary Diligence</strong> — Assess investment opportunities through financial analysis, synergy evaluation, and structuring options.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Confirmatory Diligence</strong> — Conduct comprehensive due diligence, validate key assumptions, and quantify value drivers and risks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Valuation & Deal Structuring</strong> — Develop financial models, assess transaction risks, and negotiate optimal deal terms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Transaction Execution</strong> — Manage the LOI, purchase agreements, and closing procedures for a seamless transaction.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Post-Deal Integration</strong> — Identify integration challenges, define synergy strategies, and support execution planning.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-10 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Case Studies</h2>

          <div className="space-y-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-car-rental'); }}
              className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#1e3a5f]/30"
            >
              <h3 className="text-base font-bold text-[#1e3a5f] mb-1">From Operations to Ownership: Car Rental Franchise Acquisition</h3>
              <p className="text-slate-600 text-sm mb-2">A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business.</p>
              <span className="text-[#1e3a5f] font-medium text-sm">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }}
              className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#1e3a5f]/30"
            >
              <h3 className="text-base font-bold text-[#1e3a5f] mb-1">Building an Acquisition Roadmap: Target Identification for a Consulting Firm</h3>
              <p className="text-slate-600 text-sm mb-2">A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.</p>
              <span className="text-[#1e3a5f] font-medium text-sm">Read Case Study →</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1e3a5f] text-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Accelerate Your Growth?</h2>
          <p className="text-base text-slate-300 mb-5">
            Schedule a consultation to discuss your corporate development strategy and M&A objectives.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
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
