import React from 'react';

export default function CarRentalCaseStudyPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-yellow-500 text-sm font-semibold tracking-wider mb-4">
            CASE STUDY
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            From Operations to Ownership
          </h1>
          <p className="text-lg text-gray-300">Travel & Car Rental | Corporate Development</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-gray-50 py-8 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Industry</p>
              <p className="text-gray-600">Travel</p>
              <p className="text-gray-600">Car Rental</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-gray-600">6 months</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Team</p>
              <p className="text-gray-600">1 Managing Director</p>
              <p className="text-gray-600">1 Vice President</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Services</p>
              <p className="text-gray-600">Corporate Development</p>
              <p className="text-gray-600">Investor Relations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Enabling Executives to Acquire a Car Rental Franchise</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business by implementing more efficient rental models. However, they lacked the dedicated deal resources to structure and execute the acquisition. We partnered with the team to lead critical aspects of the transaction, from financial modeling to investor outreach.
          </p>

          {/* The Execution */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Execution</h2>
          <p className="text-gray-700 mb-6">
            To help the executives transition from operators to owners, we provided structured financial and strategic support, including:
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-gray-700">
                <strong>Valuation & Financial Modeling</strong> — Built comprehensive valuation models that captured the operational improvements the buyers planned to implement, demonstrating upside potential to lenders and equity partners.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Capital Structuring & Investor Outreach</strong> — Designed the capital stack and identified potential debt and equity partners aligned with the sponsor's thesis, facilitating introductions and managing the fundraising process.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Due Diligence Coordination</strong> — Led financial and operational diligence workstreams, coordinating with third-party advisors to validate assumptions and identify risks before closing.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Transaction Execution</strong> — Supported negotiations and closing procedures, ensuring the buyers could focus on planning post-acquisition operations while we managed deal mechanics.
              </p>
            </div>
          </div>

          {/* The Results */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Results</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The executive team successfully acquired the franchise and began implementing their operational improvement plan. By providing deal execution support, we enabled experienced operators to become owners without building a full-time M&A team. The transaction structure provided the flexibility needed to pursue their growth initiatives while meeting investor return expectations.
          </p>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Case Studies</h2>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }}
            className="block p-6 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">Building an Acquisition Roadmap: Target Identification</h3>
            <p className="text-gray-600 mb-2">A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.</p>
            <span className="text-blue-900 font-medium">Read Case Study →</span>
          </a>
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

      {/* Back Navigation */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
            className="text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            ← Back to Corporate Development
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
