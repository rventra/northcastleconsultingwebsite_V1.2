import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sell-Side Readiness
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-gray-200">
            Maximizing Value & Ensuring a Seamless Transaction
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Challenges</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Risk of Disruption</strong> — Management must balance day-to-day operations while preparing for due diligence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Data Complexity</strong> — Disparate systems, large, unstructured data, and post-merger misalignment can stall transactions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Buyer Scrutiny</strong> — Investors demand accuracy in financials and operations, and unexpected issues can derail valuations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Resource Constraints</strong> — Understaffed F&A teams struggle to meet the diligence requirements of a deal.</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Solution</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Transaction Success</strong> — Proven track record of engagements resulting in successful exits.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Management Focus</strong> — Allows leadership to prioritize daily operations without distraction.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Maximize Valuation</strong> — Pre-sale diligence reduces surprises and improves deal terms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Data Validation</strong> — Rigorous verification of financial and operational metrics to instill buyer confidence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Elevate Credibility</strong> — Professional deliverables enhance the buyer's impression of the management team.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 mt-1">•</span>
                  <span><strong>Prevent Surprises</strong> — Proactively address operational, technology, and HR concerns before due diligence begins.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Real World Scenarios Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Real World Scenarios</h2>

          <div className="space-y-8">
            {/* Scenario 1 */}
            <div className="border-l-4 border-blue-900 pl-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Serial Acquirer</h3>
              <p className="text-gray-600 italic mb-3">"I have helped scale our organization through five targeted acquisitions in just three years"</p>
              <p className="text-sm font-semibold text-slate-700 mb-2">Business Challenges:</p>
              <ul className="text-gray-600 mb-3 space-y-1 ml-4">
                <li>• Incomplete post-merger integration</li>
                <li>• Disparate data environment</li>
                <li>• Multiple ERP, CRM, CPM, and BI tools in use</li>
                <li>• Decentralized and misaligned F&A teams across multiple BUs and subsidiaries</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-1">Greatest Hurdle:</p>
              <p className="text-gray-600 italic">"Our management team is unable to address simple diligence requests (e.g. we need help producing a streamlined revenue pipeline by product, customer, etc.)"</p>
            </div>

            {/* Scenario 2 */}
            <div className="border-l-4 border-blue-900 pl-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Understaffed Finance Team</h3>
              <p className="text-gray-600 italic mb-3">"I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making"</p>
              <p className="text-sm font-semibold text-slate-700 mb-2">Business Challenges:</p>
              <ul className="text-gray-600 mb-3 space-y-1 ml-4">
                <li>• Insufficient systems</li>
                <li>• Large and unorganized data sets (ex: millions of rows of transactional data)</li>
                <li>• Management lacks the requisite skills to extract data and manipulate it</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-1">Greatest Hurdle:</p>
              <p className="text-gray-600 italic">"Our management team lacks the requisite bandwidth to tackle a transaction without the business being neglected"</p>
            </div>

            {/* Scenario 3 */}
            <div className="border-l-4 border-blue-900 pl-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Complex Data Environment</h3>
              <p className="text-gray-600 italic mb-3">"I manage finance at a company where the F&A team is currently running lean relative to our operational demands"</p>
              <p className="text-sm font-semibold text-slate-700 mb-2">Business Challenges:</p>
              <ul className="text-gray-600 mb-3 space-y-1 ml-4">
                <li>• Management team has significant bandwidth constraints</li>
                <li>• F&A team is understaffed and struggling to keep up with their day-to-day activities</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-1">Greatest Hurdle:</p>
              <p className="text-gray-600 italic">"Our management team is unable to produce anticipated diligence analysis (e.g. we need to deliver an analysis of revenue/profitability by customer cohort)"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Case Studies</h2>

          <div className="space-y-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
              className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Building Credibility & Justifying Multiples</h3>
              <p className="text-gray-600 mb-2">A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process.</p>
              <span className="text-blue-900 font-medium">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
              className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Enhancing Investment Credibility: FinTech Sale</h3>
              <p className="text-gray-600 mb-2">A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.</p>
              <span className="text-blue-900 font-medium">Read Case Study →</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Prepare for Your Exit?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a consultation to discuss your sell-side readiness needs and how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all"
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
