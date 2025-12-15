import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sell-Side Readiness</h1>
          <p className="text-2xl md:text-3xl font-light mb-6">
            Maximizing Value & Ensuring a Seamless Transaction
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Challenges</h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Risk of Disruption</strong> – Management must balance day-to-day operations while preparing for due diligence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Data Complexity</strong> – Disparate systems, large, unstructured data, and post-merger misalignment can stall transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Buyer Scrutiny</strong> – Investors demand accuracy in financials and operations, and unexpected issues can derail valuations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Resource Constraints</strong> – Understaffed F&A teams struggle to meet the diligence requirements of a deal</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Solution</h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Transaction Success</strong> – Over 95% of engagements result in a successful exit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Management Focus</strong> – Allows leadership to prioritize daily operations without distraction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Maximize Valuation</strong> – Pre-sale diligence reduces surprises and improves deal terms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Buyer's Perspective</strong> – Our PE and investment banking expertise ensures management is well-prepared</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Process Optimization</strong> – Clean, organized financials create a competitive, efficient process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Data Validation</strong> – Rigorous verification of financial and operational metrics to instill buyer confidence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Elevate Credibility</strong> – Professional deliverables enhance the buyer's impression of the management team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-900 font-bold mt-1">•</span>
              <span><strong>Prevent Surprises</strong> – Proactively address operational, technology, and HR concerns before due diligence begins</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Real World Scenarios Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Real World Scenarios</h2>

          {/* Scenario 1 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Serial Acquirer</h3>
            <blockquote className="text-gray-600 italic border-l-4 border-blue-900 pl-4 mb-4">
              "I have helped scale our organization through five targeted acquisitions in just three years"
            </blockquote>
            <p className="text-sm font-semibold text-slate-700 mb-2">Business Challenges:</p>
            <ul className="space-y-1 text-gray-600 mb-4 ml-4">
              <li>• Incomplete post-merger integration</li>
              <li>• Disparate data environment</li>
              <li>• Multiple ERP, CRM, CPM, and BI tools in use</li>
              <li>• Decentralized and misaligned F&A teams across multiple BUs and subsidiaries</li>
            </ul>
            <p className="text-sm font-semibold text-slate-700 mb-2">Greatest Hurdle:</p>
            <p className="text-gray-600 ml-4">"Our management team is unable to address simple diligence requests (e.g. we need help producing a streamlined revenue pipeline by product, customer, etc.)"</p>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Scenario 2 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Understaffed Finance Team</h3>
            <blockquote className="text-gray-600 italic border-l-4 border-blue-900 pl-4 mb-4">
              "I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making"
            </blockquote>
            <p className="text-sm font-semibold text-slate-700 mb-2">Business Challenges:</p>
            <ul className="space-y-1 text-gray-600 mb-4 ml-4">
              <li>• Insufficient systems</li>
              <li>• Large and unorganized data sets (ex: millions of rows of transactional data)</li>
              <li>• Management lacks the requisite skills to extract data and manipulate it</li>
            </ul>
            <p className="text-sm font-semibold text-slate-700 mb-2">Greatest Hurdle:</p>
            <p className="text-gray-600 ml-4">"Our management team lacks the requisite bandwidth to tackle a transaction without the business being neglected (e.g. we need to stay focused on running the business itself)"</p>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Scenario 3 */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Complex Data Environment</h3>
            <blockquote className="text-gray-600 italic border-l-4 border-blue-900 pl-4 mb-4">
              "I manage finance at a company where the F&A team is currently running lean relative to our operational demands"
            </blockquote>
            <p className="text-sm font-semibold text-slate-700 mb-2">Business Challenges:</p>
            <ul className="space-y-1 text-gray-600 mb-4 ml-4">
              <li>• Management team has significant bandwidth constraints</li>
              <li>• F&A team is understaffed and struggling to keep up with their day-to-day activities</li>
            </ul>
            <p className="text-sm font-semibold text-slate-700 mb-2">Greatest Hurdle:</p>
            <p className="text-gray-600 ml-4">"Our management team is unable to produce anticipated diligence analysis (e.g. we need to deliver an analysis of revenue/profitability by customer cohort)"</p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Case Studies</h2>

          <div className="space-y-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
              className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 mb-2">Building Credibility & Justifying Multiples</h3>
              <p className="text-gray-600 mb-2">A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process.</p>
              <span className="text-blue-900 font-medium">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
              className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 mb-2">Enhancing Investment Credibility: FinTech Sale</h3>
              <p className="text-gray-600 mb-2">A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.</p>
              <span className="text-blue-900 font-medium">Read Case Study →</span>
            </a>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Related Services</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }}
              className="block p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <span className="text-blue-900 group-hover:text-blue-700 font-medium">Dividend Recapitalization Prep →</span>
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
              className="block p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <span className="text-blue-900 group-hover:text-blue-700 font-medium">Corporate Development →</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Prepare for Your Exit?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a consultation to discuss your sell-side readiness needs and how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-blue-900 hover:text-yellow-600 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
