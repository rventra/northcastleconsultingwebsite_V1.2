import React from 'react';

export default function EnhancingInvestmentCredibilityPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-yellow-500 text-sm font-semibold tracking-wider mb-4">
            CASE STUDY
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Enhancing Investment Credibility
          </h1>
          <p className="text-lg text-gray-300">FinTech Payments | Sell-Side Readiness</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-gray-50 py-8 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Industry</p>
              <p className="text-gray-600">FinTech</p>
              <p className="text-gray-600">Payments</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-gray-600">2 months</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 uppercase tracking-wider mb-1">Team</p>
              <p className="text-gray-600">1 Managing Director</p>
              <p className="text-gray-600">1 Director</p>
              <p className="text-gray-600">1 Vice President</p>
              <p className="text-gray-600">1 Associate</p>
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
          <h2 className="text-xl font-bold text-slate-900 mb-4">Structuring Key Growth & Churn Analysis for a FinTech Sale</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required. The company had never operated with these data-driven insights, making it difficult for the sponsor to align internal teams and produce the necessary diligence materials. With no prior experience building these analyses, the finance and operations teams struggled to provide clear explanations for revenue growth, customer retention, and sales pipeline effectiveness.
          </p>

          <p className="text-gray-700 mb-10">
            We were engaged to step in and construct the key analyses that would support the investment thesis, educate stakeholders, and provide a data-backed foundation for a successful sale.
          </p>

          {/* The Execution */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Execution</h2>
          <p className="text-gray-700 mb-6">
            To bridge the gap between operational data and investment-grade analysis, we built structured financial models and insights, including:
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-gray-700">
                <strong>Key Growth Driver Analysis</strong> — Constructed a data cube that segmented revenue and gross profit by customer and service line, integrating data from multiple sources. This model allowed us to connect revenue streams with issuance data at a granular level—something the company had never done before. The analysis pinpointed revenue-driving levers, explaining trends in gross revenue, net revenue, and issuance by product, service, and customer. This also helped normalize post-COVID revenue expectations.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Sales Pipeline & Win Rate Analysis</strong> — Integrated data from marketing CRM tools to build a sales pipeline model, tracking customer conversion rates at each stage. This allowed the company to justify its revenue projections with historical win rates, sales cycle lengths, and overall funnel efficiency, building credibility with potential buyers.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Customer Churn & Retention Analysis</strong> — Developed a customer lifecycle model to assess long-term retention trends across product and service lines. This analysis demonstrated that while some customers transacted infrequently, they remained consistent revenue contributors, smoothing out seasonality and substantiating claims of low churn and high product stickiness.
              </p>
            </div>
          </div>

          {/* The Results */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Results</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The company successfully leveraged these newly developed insights to strengthen its investment thesis and provide buyers with a clearer financial story. The sponsor and management team gained a deeper understanding of key revenue drivers, customer behaviors, and long-term business stability, improving their ability to answer diligence questions with confidence. The transaction process proceeded more smoothly, backed by data-driven credibility.
          </p>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Case Studies</h2>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
            className="block p-6 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">Building Credibility & Justifying Multiples</h3>
            <p className="text-gray-600 mb-2">A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process.</p>
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
