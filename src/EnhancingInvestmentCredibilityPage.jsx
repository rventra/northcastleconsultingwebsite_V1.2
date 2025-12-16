import React from 'react';

export default function EnhancingInvestmentCredibilityPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-[#0D3BC3] py-2 px-6">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Sell-Side Readiness
          </a>
        </div>
      </div>

      {/* Compact Hero */}
      <div className="bg-[#0D3BC3] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-2 py-1 rounded mb-3">
              SELL-SIDE READINESS
            </span>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Enhancing Investment Credibility
            </h1>
            <p className="text-gray-300 text-sm">
              Structuring key growth and churn analysis for a FinTech payments company to build data-driven buyer confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">FinTech (Payments)</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#0D3BC3]">1 MD, 1 Director, 1 VP, 1 Associate</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Sell-Side Readiness, FP&A Support</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-50 py-10 px-6 md:px-10">
          <div className="max-w-md ml-auto">
            <h2 className="text-lg font-bold text-[#0D3BC3] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#0D3BC3] text-white rounded text-xs flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A PE-backed FinTech payments company was preparing for sale but <strong>lacked the critical analysis</strong> buyers required. They had never operated with data-driven insights:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> No clear explanation for revenue growth</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Customer retention unclear</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Sales pipeline effectiveness unknown</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Sponsor couldn't align internal teams</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0D3BC3] py-10 px-6 md:px-10 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#EDB624] text-[#1A2234] rounded text-xs flex items-center justify-center">2</span>
              Our Solution
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              We constructed investment-grade analyses to bridge operational data and buyer requirements:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Key growth driver analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Sales pipeline & win rate analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Customer churn & retention analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Revenue/issuance data cube</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">Building the Data Foundation</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Key Growth Driver Analysis", desc: "Built data cube segmenting revenue by customer and service line, connecting revenue streams with issuance data at granular level." },
              { title: "Sales Pipeline Analysis", desc: "Integrated CRM data to track customer conversion rates at each stage, justifying revenue projections with historical win rates." },
              { title: "Churn & Retention Analysis", desc: "Developed customer lifecycle model demonstrating low churn and high product stickiness across product lines." }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-bold text-[#0D3BC3] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-4">The Results</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Stronger Thesis</span>
              </div>
              <p className="text-xs text-gray-600">Investment thesis strengthened with data-driven credibility</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Confident Answers</span>
              </div>
              <p className="text-xs text-gray-600">Management able to respond confidently to diligence questions</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Smooth Process</span>
              </div>
              <p className="text-xs text-gray-600">Transaction proceeded smoothly backed by data credibility</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need Data-Driven Credibility for Your Sale?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how we can build the analyses buyers are looking for.</p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=FinTech%20Analysis%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
