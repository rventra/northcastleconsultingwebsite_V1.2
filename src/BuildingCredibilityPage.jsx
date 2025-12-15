import React from 'react';

export default function BuildingCredibilityPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-yellow-500 text-sm font-semibold tracking-wider mb-4">
            CASE STUDY
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Building Credibility & Justifying Multiples
          </h1>
          <p className="text-lg text-gray-300">Venue Management | Sell-Side Readiness</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-gray-50 py-8 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Industry</p>
              <p className="text-gray-600">Leisure and Hospitality</p>
              <p className="text-gray-600">Venue Management</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-gray-600">5 months</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Team</p>
              <p className="text-gray-600">1 Director</p>
              <p className="text-gray-600">1 Vice President</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Services</p>
              <p className="text-gray-600">Sell Side Readiness</p>
              <p className="text-gray-600">FP&A Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process. The CFO and private equity sponsor found themselves deeply involved in basic financial analysis, which slowed progress. They engaged our team to manage the finance function, prepare critical analysis, and provide data-backed support to justify the high EBITDA multiple sought for the transaction.
          </p>

          {/* The Execution */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Execution</h2>
          <p className="text-gray-700 mb-6">
            We worked closely with internal teams to build structured analyses that addressed key buyer concerns and supported the investment thesis:
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-gray-700">
                <strong>Contract Leverage & Negotiation Analysis</strong> — Buyers questioned whether the company's contracts consistently secured favorable terms. We audited agreements, analyzed key performance indicators (KPIs), and built models incorporating dozens of agreements and amendments. This provided a contract-level financial model that demonstrated the strength of terms over time and enabled scenario analysis for future negotiations. The company ultimately adopted our contract model for ongoing use in valuation and deal structuring.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Cap Ex ROI & Lease Obligations Analysis</strong> — Many new venue agreements required capital commitments, and management claimed high returns but lacked supporting data. We developed a detailed Cap Ex ROI model that isolated the impact of investment decisions from broader market cycles, allowing for a clear long-term return assessment.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Operational Improvement Benchmarking</strong> — The company marketed itself on its ability to enhance venue performance after taking over operations. To validate this claim, we benchmarked KPIs and financial performance for venues before and after the company assumed management, providing quantifiable proof of operational improvements.
              </p>
            </div>
          </div>

          {/* The Results */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Results</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The firm successfully completed its sale with a well-supported investment thesis. Our involvement allowed the CFO and sponsor to focus on strategic aspects of the transaction while we managed finance and operational teams. The company adopted our contract modeling tools for future negotiations, enabling long-term value creation post-transaction.
          </p>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Case Studies</h2>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
            className="block p-6 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">Enhancing Investment Credibility: FinTech Sale</h3>
            <p className="text-gray-600 mb-2">A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.</p>
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
            onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
            className="text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            ← Back to Sell-Side Readiness
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
