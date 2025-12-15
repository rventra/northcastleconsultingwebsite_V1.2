import React from 'react';

export default function BuildingCredibilityPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-yellow-600/20 text-yellow-500 text-sm font-semibold tracking-wider px-4 py-2 rounded-full mb-6">
            CASE STUDY
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building Credibility & Justifying Multiples
          </h1>
          <p className="text-xl text-gray-300">Venue Management | Sell-Side Readiness</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-gray-50 py-10 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto md:mx-0">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">Industry</p>
              <p className="text-gray-600 text-sm">Leisure and Hospitality</p>
              <p className="text-gray-600 text-sm">Venue Management</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto md:mx-0">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-gray-600 text-sm">5 months</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto md:mx-0">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">Team</p>
              <p className="text-gray-600 text-sm">1 Director</p>
              <p className="text-gray-600 text-sm">1 Vice President</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto md:mx-0">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">Services</p>
              <p className="text-gray-600 text-sm">Sell Side Readiness</p>
              <p className="text-gray-600 text-sm">FP&A Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-900">
            <p className="text-lg text-gray-700 leading-relaxed">
              A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process. The CFO and private equity sponsor found themselves deeply involved in basic financial analysis, which slowed progress. They engaged our team to manage the finance function, prepare critical analysis, and provide data-backed support to justify the high EBITDA multiple sought for the transaction.
            </p>
          </div>

          {/* The Execution */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">The Execution</h2>
            </div>
            <p className="text-gray-700 mb-8">
              We worked closely with internal teams to build structured analyses that addressed key buyer concerns and supported the investment thesis:
            </p>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-900 text-sm font-bold">1</span>
                  Contract Leverage & Negotiation Analysis
                </h3>
                <p className="text-gray-700">
                  Buyers questioned whether the company's contracts consistently secured favorable terms. We audited agreements, analyzed key performance indicators (KPIs), and built models incorporating dozens of agreements and amendments. This provided a contract-level financial model that demonstrated the strength of terms over time and enabled scenario analysis for future negotiations. The company ultimately adopted our contract model for ongoing use in valuation and deal structuring.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-900 text-sm font-bold">2</span>
                  Cap Ex ROI & Lease Obligations Analysis
                </h3>
                <p className="text-gray-700">
                  Many new venue agreements required capital commitments, and management claimed high returns but lacked supporting data. We developed a detailed Cap Ex ROI model that isolated the impact of investment decisions from broader market cycles, allowing for a clear long-term return assessment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-900 text-sm font-bold">3</span>
                  Operational Improvement Benchmarking
                </h3>
                <p className="text-gray-700">
                  The company marketed itself on its ability to enhance venue performance after taking over operations. To validate this claim, we benchmarked KPIs and financial performance for venues before and after the company assumed management, providing quantifiable proof of operational improvements.
                </p>
              </div>
            </div>
          </div>

          {/* The Results */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">The Results</h2>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              The firm successfully completed its sale with a well-supported investment thesis. Our involvement allowed the CFO and sponsor to focus on strategic aspects of the transaction while we managed finance and operational teams. The company adopted our contract modeling tools for future negotiations, enabling long-term value creation post-transaction.
            </p>
          </div>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Case Studies</h2>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
            className="group block bg-white rounded-2xl p-8 hover:bg-blue-50 transition-all border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 mb-2">Enhancing Investment Credibility: FinTech Sale</h3>
                <p className="text-gray-600 mb-4">A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.</p>
                <span className="inline-flex items-center gap-2 text-blue-900 font-semibold group-hover:gap-3 transition-all">
                  Read Case Study
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Drive Your Business Forward</h2>
          <p className="text-lg text-gray-300 mb-10">
            Schedule your consultation today to leverage our expert insights and drive your business forward. Our dedicated team is ready to provide tailored solutions to meet your organization's unique needs.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Case%20Study%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-8 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
            className="inline-flex items-center gap-2 text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Sell-Side Readiness
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
