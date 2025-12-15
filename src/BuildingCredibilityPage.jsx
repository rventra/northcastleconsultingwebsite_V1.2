import React from 'react';

export default function BuildingCredibilityPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white py-24 px-6">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-yellow-600 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider mb-6">
            CASE STUDY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Building Credibility</h1>
          <p className="text-xl opacity-90">Venue Management | Sell-Side Readiness</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-gray-50 py-8 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Industry</h4>
              <p className="text-gray-600 text-sm">— Leisure and Hospitality</p>
              <p className="text-gray-600 text-sm">— Venue Management</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Duration</h4>
              <p className="text-gray-600 text-sm">— 5 months</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Team</h4>
              <p className="text-gray-600 text-sm">— 1 Director</p>
              <p className="text-gray-600 text-sm">— 1 Vice President</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Services</h4>
              <p className="text-gray-600 text-sm">— Sell Side Readiness</p>
              <p className="text-gray-600 text-sm">— FP&A Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Building Credibility & Justifying Multiples</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process. The CFO and private equity sponsor found themselves deeply involved in basic financial analysis, which slowed progress. They engaged our team to manage the finance function, prepare critical analysis, and provide data-backed support to justify the high EBITDA multiple sought for the transaction.
        </p>

        {/* The Execution */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white text-lg">1</span>
            The Execution
          </h3>
          <p className="text-gray-700 mb-6">
            We worked closely with internal teams to build structured analyses that addressed key buyer concerns and supported the investment thesis:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-slate-900 mb-2">Contract Leverage & Negotiation Analysis</h4>
              <p className="text-gray-600 leading-relaxed">
                Buyers questioned whether the company's contracts consistently secured favorable terms. We audited agreements, analyzed key performance indicators (KPIs), and built models incorporating dozens of agreements and amendments. This provided a contract-level financial model that demonstrated the strength of terms over time and enabled scenario analysis for future negotiations. The company ultimately adopted our contract model for ongoing use in valuation and deal structuring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-slate-900 mb-2">Cap Ex ROI & Lease Obligations Analysis</h4>
              <p className="text-gray-600 leading-relaxed">
                Many new venue agreements required capital commitments, and management claimed high returns but lacked supporting data. We developed a detailed Cap Ex ROI model that isolated the impact of investment decisions from broader market cycles, allowing for a clear long-term return assessment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900">
              <h4 className="font-bold text-slate-900 mb-2">Operational Improvement Benchmarking</h4>
              <p className="text-gray-600 leading-relaxed">
                The company marketed itself on its ability to enhance venue performance after taking over operations. To validate this claim, we benchmarked KPIs and financial performance for venues before and after the company assumed management, providing quantifiable proof of operational improvements.
              </p>
            </div>
          </div>
        </div>

        {/* The Results */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white text-lg">2</span>
            The Results
          </h3>
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <p className="text-gray-700 leading-relaxed">
              The firm successfully completed its sale with a well-supported investment thesis. Our involvement allowed the CFO and sponsor to focus on strategic aspects of the transaction while we managed finance and operational teams. The company adopted our contract modeling tools for future negotiations, enabling long-term value creation post-transaction.
            </p>
          </div>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-40 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-2">🔧</div>
                  <p className="text-sm opacity-75">Auto Parts Manufacturing</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Developing a KPI Data Cube For a Company Sale</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A private equity-backed auto parts manufacturer preparing for a sale required a consolidated, enterprise-level view of sales, gross margin, and KPIs across customers, SKUs, and other dimensions.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigateToPage('case-study-kpi-data-cube'); }}
                  className="inline-block bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all"
                >
                  View More →
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-40 bg-gradient-to-br from-green-900 via-teal-800 to-slate-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-2">💳</div>
                  <p className="text-sm opacity-75">FinTech Payments</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Enhancing Investment Credibility: Structuring Key Growth & Churn Analysis for a FinTech Sale</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
                  className="inline-block bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all"
                >
                  View More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Drive Your Business Forward</h2>
          <p className="text-xl mb-10 opacity-90">
            Schedule your consultation today to leverage our expert insights and drive your business forward. Our dedicated team is ready to provide tailored solutions to meet your organization's unique needs.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Case%20Study%20Inquiry%20-%20Building%20Credibility"
            className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-8 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
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
