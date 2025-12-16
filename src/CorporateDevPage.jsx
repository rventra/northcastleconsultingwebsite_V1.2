import React from 'react';

export default function CorporateDevPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1A2234] text-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Corporate Development
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-white/90">
            Strategic M&A Execution for Growth & Value Creation
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            North Castle's Corporate Development services provide structured M&A strategy, due diligence, and execution to help companies maximize acquisition value and minimize risks.
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
              Challenges
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">1</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Strategic Alignment</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Companies must ensure acquisitions align with growth objectives, market positioning, and financial goals.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">2</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Risk Mitigation</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Poor due diligence can lead to overvaluation, operational disruptions, and integration failures.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">3</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Resource Constraints</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Many firms lack in-house M&A expertise, slowing execution and increasing risk.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">4</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Complex Deal Structuring</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Understanding valuation, synergies, and negotiation strategies is critical for success.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions */}
        <div className="bg-gradient-to-br from-[#0D3BC3] to-[#1A2234] py-14 px-6 md:px-12 text-white">
          <div className="max-w-lg mr-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#EDB624] rounded-full"></span>
              Our Solutions
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Target Screening</strong>
                  <span className="text-white/80 leading-relaxed">Identify and evaluate potential acquisition targets based on strategic fit, financial performance, and market positioning.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Preliminary Diligence</strong>
                  <span className="text-white/80 leading-relaxed">Assess investment opportunities through financial analysis, synergy evaluation, and structuring options.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Confirmatory Diligence</strong>
                  <span className="text-white/80 leading-relaxed">Conduct comprehensive due diligence, validate key assumptions, and quantify value drivers and risks.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Valuation & Deal Structuring</strong>
                  <span className="text-white/80 leading-relaxed">Develop financial models, assess transaction risks, and negotiate optimal deal terms.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Transaction Execution</strong>
                  <span className="text-white/80 leading-relaxed">Manage the LOI, purchase agreements, and closing procedures for a seamless transaction.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 md:py-20 px-6 bg-[#F6F7F7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Case Studies</h2>
            <p className="text-[#1A2234]/70 text-lg">See how we've helped clients execute successful M&A strategies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-car-rental'); }}
              className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-bold text-[#EDB624] uppercase tracking-wider bg-[#EDB624]/10 px-2 py-1 rounded mb-3">Acquisition Support</span>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">From Operations to Ownership: Car Rental Franchise Acquisition</h3>
              <p className="text-[#1A2234]/70 mb-4 leading-relaxed">A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business.</p>
              <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Case Study <span>→</span></span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }}
              className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded mb-3">Target Identification</span>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Building an Acquisition Roadmap: Target Identification for a Consulting Firm</h3>
              <p className="text-[#1A2234]/70 mb-4 leading-relaxed">A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.</p>
              <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Case Study <span>→</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#1A2234] to-[#0D3BC3] text-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation to discuss your corporate development strategy and M&A objectives.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
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
