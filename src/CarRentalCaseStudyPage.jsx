import React from 'react';

export default function CarRentalCaseStudyPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Back Navigation */}
      <div className="bg-slate-900 py-2 px-6">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Corporate Development
          </a>
        </div>
      </div>

      {/* Compact Hero */}
      <div className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="inline-block bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded mb-3">
              CORPORATE DEVELOPMENT
            </span>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              From Operations to Ownership
            </h1>
            <p className="text-gray-300 text-sm">
              Enabling car rental executives to acquire a franchise of a major global brand.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-slate-900">Travel & Car Rental</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-slate-900">1 MD, 1 VP</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-slate-900">Corporate Development, Investor Relations</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-50 py-10 px-6 md:px-10">
          <div className="max-w-md ml-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-900 text-white rounded text-xs flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              An independent sponsor team of car rental executives had <strong>deep operational expertise</strong> and a vision to acquire a franchise. However, they lacked:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-blue-900">•</span> Dedicated deal resources</li>
              <li className="flex gap-2"><span className="text-blue-900">•</span> Financial modeling expertise</li>
              <li className="flex gap-2"><span className="text-blue-900">•</span> Capital structuring experience</li>
              <li className="flex gap-2"><span className="text-blue-900">•</span> Investor outreach capabilities</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 py-10 px-6 md:px-10 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-yellow-500 text-slate-900 rounded text-xs flex items-center justify-center">2</span>
              Our Solution
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              We partnered to lead critical aspects of the transaction:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-yellow-500">•</span> Valuation & financial modeling</li>
              <li className="flex gap-2"><span className="text-yellow-500">•</span> Capital structuring & investor outreach</li>
              <li className="flex gap-2"><span className="text-yellow-500">•</span> Due diligence coordination</li>
              <li className="flex gap-2"><span className="text-yellow-500">•</span> Transaction execution support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 mb-6">The Execution</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Valuation Models", desc: "Built comprehensive models capturing operational improvements and upside potential" },
              { title: "Capital Structuring", desc: "Designed capital stack, identified debt and equity partners aligned with thesis" },
              { title: "Due Diligence", desc: "Led financial and operational diligence, coordinated with third-party advisors" },
              { title: "Transaction Execution", desc: "Supported negotiations and closing while buyers planned post-acquisition ops" }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 mb-4">The Results</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-slate-900 text-sm">Successful Acquisition</span>
              </div>
              <p className="text-xs text-gray-600">Executive team acquired the franchise and began implementing their plan</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-slate-900 text-sm">Operators to Owners</span>
              </div>
              <p className="text-xs text-gray-600">Enabled experienced operators to become owners without building M&A team</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-slate-900 text-sm">Flexible Structure</span>
              </div>
              <p className="text-xs text-gray-600">Transaction provided flexibility for growth while meeting investor expectations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Make the Leap to Ownership?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how we can support your acquisition journey.</p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
            className="inline-block bg-yellow-500 text-slate-900 px-6 py-3 rounded font-semibold text-sm hover:bg-yellow-400 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
