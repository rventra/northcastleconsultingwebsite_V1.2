import React from 'react';

export default function KPIDataCubeCaseStudyPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-[#1e3a5f] py-2 px-6">
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
      <div className="bg-[#1e3a5f] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="inline-block bg-amber-400 text-[#1e3a5f] text-xs font-bold px-2 py-1 rounded mb-3">
              SELL-SIDE READINESS
            </span>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Developing a KPI Data Cube For a Company Sale
            </h1>
            <p className="text-gray-300 text-sm">
              Transforming 2.7M data points from 6 ERP systems into actionable insights for a $250M auto parts manufacturer.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#1e3a5f]">Manufacturing (Auto Parts)</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#1e3a5f]">1 MD, 1 Director, 1 VP</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#1e3a5f]">Sell-Side Readiness, Transaction DD</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-50 py-10 px-6 md:px-10">
          <div className="max-w-md ml-auto">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#1e3a5f] text-white rounded text-xs flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A PE-backed auto parts manufacturer preparing for sale faced significant data integration challenges. The company had acquired <strong>five businesses over two years</strong>, creating:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> 2.7 million transaction-level data points</li>
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> Six disparate ERP systems</li>
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> No consolidated view of sales, margin, or KPIs</li>
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> Inability to respond to buyer inquiries</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#1e3a5f] py-10 px-6 md:px-10 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-400 text-[#1e3a5f] rounded text-xs flex items-center justify-center">2</span>
              Our Solution
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              We built a comprehensive KPI data cube using Power Pivot and Power Query to deliver:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Customer churn analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Price-volume mix by SKU</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Sales/profitability by customer, channel, category</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> SKU vintage performance tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-6">The Execution</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Stakeholder Collaboration", desc: "Partnered with CFO, VP Sales, CIO to validate ERP data" },
              { num: "02", title: "Requirements Discovery", desc: "Identified critical data fields for sales thesis" },
              { num: "03", title: "Data Cube Build", desc: "Built KPI cube with Power Pivot and Power Query" },
              { num: "04", title: "Diligence Management", desc: "Managed Q&A ensuring timely data delivery" },
              { num: "05", title: "Knowledge Transfer", desc: "Transitioned cube to FP&A as ongoing tool" }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <span className="text-amber-300 text-lg font-bold">{step.num}</span>
                <h3 className="text-sm font-bold text-[#1e3a5f] mt-1 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">The Results</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#1e3a5f] text-sm">Competitive Sale Process</span>
              </div>
              <p className="text-xs text-gray-600">Management equipped to confidently respond to buyer inquiries</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#1e3a5f] text-sm">Future-Ready Analytics</span>
              </div>
              <p className="text-xs text-gray-600">Transaction-level visibility for future acquisitions and integration</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#1e3a5f] text-sm">Ongoing Engagement</span>
              </div>
              <p className="text-xs text-gray-600">Post-sale, company engaged for BI system development</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1e3a5f] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how our data-driven approach can maximize your transaction value.</p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=KPI%20Data%20Cube%20Inquiry"
            className="inline-block bg-amber-400 text-[#1e3a5f] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
