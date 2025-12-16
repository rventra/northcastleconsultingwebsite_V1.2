import React from 'react';

export default function TargetIdentificationCaseStudyPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-[#1e3a5f] py-2 px-6">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Corporate Development
          </a>
        </div>
      </div>

      {/* Compact Hero */}
      <div className="bg-[#1e3a5f] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="inline-block bg-amber-400 text-[#1e3a5f] text-xs font-bold px-2 py-1 rounded mb-3">
              CORPORATE DEVELOPMENT
            </span>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Building an Acquisition Roadmap
            </h1>
            <p className="text-gray-300 text-sm">
              Target identification for a PE-backed consulting firm seeking growth through acquisitions.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#1e3a5f]">Consulting & Business Services</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#1e3a5f]">1 Director, 1 VP</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#1e3a5f]">Corporate Development</span></div>
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
              A PE-backed consulting firm sought to grow through acquisitions but <strong>lacked a clear picture</strong> of the investment universe:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> No systematic targeting approach</li>
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> Struggled to prioritize opportunities</li>
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> Unable to move efficiently on deals</li>
              <li className="flex gap-2"><span className="text-[#1e3a5f]">•</span> Needed repeatable M&A framework</li>
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
              We developed a comprehensive target identification framework:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Market landscape analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Target universe development</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Prioritization framework</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Outreach strategy creation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-6">Multi-Phase Target Identification Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Market Analysis", desc: "Mapped competitive landscape, identified key players, market dynamics, consolidation trends" },
              { title: "Target Universe", desc: "Built database of candidates using research, industry databases, and network intelligence" },
              { title: "Prioritization", desc: "Developed scoring methodology ranking targets by strategic value and integration complexity" },
              { title: "Outreach Strategy", desc: "Created tailored materials and approach strategies for priority targets" }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-bold text-[#1e3a5f] mb-1">{step.title}</h3>
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
                <span className="font-medium text-[#1e3a5f] text-sm">50+ Qualified Targets</span>
              </div>
              <p className="text-xs text-gray-600">Clear view of acquisition landscape with prioritized pipeline</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#1e3a5f] text-sm">Faster Execution</span>
              </div>
              <p className="text-xs text-gray-600">Framework enabled quick action when opportunities arose</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#1e3a5f] text-sm">Ongoing Strategy</span>
              </div>
              <p className="text-xs text-gray-600">Process became foundation for company's ongoing M&A strategy</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1e3a5f] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Looking to Build Your Acquisition Pipeline?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how we can help identify and prioritize your targets.</p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Target%20Identification%20Inquiry"
            className="inline-block bg-amber-400 text-[#1e3a5f] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
