import React from 'react';

export default function TargetIdentificationCaseStudyPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Back Navigation - Top */}
      <div className="bg-slate-900 py-3 px-6">
        <div className="max-w-6xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Corporate Development
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-yellow-500 text-sm font-semibold tracking-wider mb-4">
            CASE STUDY
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Building an Acquisition Roadmap
          </h1>
          <p className="text-lg text-gray-300">Consulting & Business Services | Corporate Development</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-gray-50 py-8 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Industry</p>
              <p className="text-gray-600">Consulting</p>
              <p className="text-gray-600">Business Services</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-gray-600">2 months</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Team</p>
              <p className="text-gray-600">1 Director</p>
              <p className="text-gray-600">1 Vice President</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Services</p>
              <p className="text-gray-600">Corporate Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Target Identification for a Consulting Firm</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe. Without a systematic approach to identifying and evaluating targets, the company struggled to prioritize opportunities and move efficiently on attractive deals. We were engaged to develop a comprehensive target identification framework and build a pipeline of actionable acquisition candidates.
          </p>

          {/* The Execution */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Execution</h2>
          <p className="text-gray-700 mb-6">
            To establish a structured M&A pipeline, we implemented a multi-phase target identification process:
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-gray-700">
                <strong>Market Landscape Analysis</strong> — Mapped the competitive landscape across relevant consulting segments, identifying key players, market dynamics, and consolidation trends to inform targeting criteria.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Target Universe Development</strong> — Built a comprehensive database of potential acquisition candidates using proprietary research, industry databases, and network intelligence, screening for strategic fit, size, and ownership structure.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Prioritization Framework</strong> — Developed a scoring methodology to rank targets based on strategic value, integration complexity, and likelihood of transaction, enabling the management team to focus resources on highest-potential opportunities.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Outreach Strategy</strong> — Created tailored outreach materials and approach strategies for priority targets, positioning the company as an attractive acquirer and facilitating initial conversations.
              </p>
            </div>
          </div>

          {/* The Results */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Results</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The firm gained a clear view of its acquisition landscape with a prioritized pipeline of over 50 qualified targets. The structured framework enabled the management team to move quickly when opportunities arose, ultimately leading to productive conversations with several high-priority candidates. The target identification process became the foundation for the company's ongoing M&A strategy, providing a repeatable approach to pipeline development.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Drive Your Business Forward</h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule your consultation today to leverage our expert insights and drive your business forward.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Case%20Study%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
}
