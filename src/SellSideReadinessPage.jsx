import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4a6f] text-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Sell-Side Readiness
          </h1>
          <p className="text-lg md:text-xl font-light mb-3 text-slate-200">
            Maximizing Value & Ensuring a Seamless Transaction
          </p>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Challenges (Grey) */}
        <div className="bg-slate-100 py-10 px-6 md:px-10">
          <div className="max-w-xl ml-auto">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Challenges</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Risk of Disruption</strong> — Management must balance day-to-day operations while preparing for due diligence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Data Complexity</strong> — Disparate systems, large, unstructured data, and post-merger misalignment can stall transactions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Buyer Scrutiny</strong> — Investors demand accuracy in financials and operations, and unexpected issues can derail valuations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e3a5f] mt-1">•</span>
                <span><strong>Resource Constraints</strong> — Understaffed F&A teams struggle to meet the diligence requirements of a deal.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions (Blue) */}
        <div className="bg-[#1e3a5f] py-10 px-6 md:px-10 text-white">
          <div className="max-w-xl mr-auto">
            <h2 className="text-xl font-bold mb-4">Our Solution</h2>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Transaction Success</strong> — Proven track record of engagements resulting in successful exits.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Management Focus</strong> — Allows leadership to prioritize daily operations without distraction.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Maximize Valuation</strong> — Pre-sale diligence reduces surprises and improves deal terms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Data Validation</strong> — Rigorous verification of financial and operational metrics to instill buyer confidence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Elevate Credibility</strong> — Professional deliverables enhance the buyer's impression of the management team.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-300 mt-1">•</span>
                <span><strong className="text-white">Prevent Surprises</strong> — Proactively address operational, technology, and HR concerns before due diligence begins.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Real World Scenarios Section */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Real World Scenarios</h2>

          <div className="space-y-6">
            {/* Scenario 1 */}
            <div className="border-l-4 border-[#1e3a5f] pl-5">
              <h3 className="text-base font-bold text-[#1e3a5f] mb-1">Serial Acquirer</h3>
              <p className="text-slate-600 italic mb-2 text-sm">"I have helped scale our organization through five targeted acquisitions in just three years"</p>
              <p className="text-sm font-semibold text-slate-700 mb-1">Business Challenges:</p>
              <ul className="text-slate-600 mb-2 space-y-0.5 ml-4 text-sm">
                <li>• Incomplete post-merger integration</li>
                <li>• Disparate data environment</li>
                <li>• Multiple ERP, CRM, CPM, and BI tools in use</li>
                <li>• Decentralized and misaligned F&A teams across multiple BUs and subsidiaries</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-0.5">Greatest Hurdle:</p>
              <p className="text-slate-600 italic text-sm">"Our management team is unable to address simple diligence requests (e.g. we need help producing a streamlined revenue pipeline by product, customer, etc.)"</p>
            </div>

            {/* Scenario 2 */}
            <div className="border-l-4 border-[#1e3a5f] pl-5">
              <h3 className="text-base font-bold text-[#1e3a5f] mb-1">Understaffed Finance Team</h3>
              <p className="text-slate-600 italic mb-2 text-sm">"I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making"</p>
              <p className="text-sm font-semibold text-slate-700 mb-1">Business Challenges:</p>
              <ul className="text-slate-600 mb-2 space-y-0.5 ml-4 text-sm">
                <li>• Insufficient systems</li>
                <li>• Large and unorganized data sets (ex: millions of rows of transactional data)</li>
                <li>• Management lacks the requisite skills to extract data and manipulate it</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-0.5">Greatest Hurdle:</p>
              <p className="text-slate-600 italic text-sm">"Our management team lacks the requisite bandwidth to tackle a transaction without the business being neglected"</p>
            </div>

            {/* Scenario 3 */}
            <div className="border-l-4 border-[#1e3a5f] pl-5">
              <h3 className="text-base font-bold text-[#1e3a5f] mb-1">Complex Data Environment</h3>
              <p className="text-slate-600 italic mb-2 text-sm">"I manage finance at a company where the F&A team is currently running lean relative to our operational demands"</p>
              <p className="text-sm font-semibold text-slate-700 mb-1">Business Challenges:</p>
              <ul className="text-slate-600 mb-2 space-y-0.5 ml-4 text-sm">
                <li>• Management team has significant bandwidth constraints</li>
                <li>• F&A team is understaffed and struggling to keep up with their day-to-day activities</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-0.5">Greatest Hurdle:</p>
              <p className="text-slate-600 italic text-sm">"Our management team is unable to produce anticipated diligence analysis (e.g. we need to deliver an analysis of revenue/profitability by customer cohort)"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-10 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-kpi-data-cube'); }}
              className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#1e3a5f]/30"
            >
              <span className="text-xs font-semibold text-[#1e3a5f]/70 uppercase tracking-wider">Manufacturing</span>
              <h3 className="text-base font-bold text-[#1e3a5f] mt-1 mb-1">KPI Data Cube for a Company Sale</h3>
              <p className="text-slate-600 text-sm mb-2">Transformed 2.7M data points from 6 ERP systems into actionable insights for a $250M auto parts manufacturer.</p>
              <span className="text-[#1e3a5f] font-medium text-sm">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-data-challenged'); }}
              className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#1e3a5f]/30"
            >
              <span className="text-xs font-semibold text-[#1e3a5f]/70 uppercase tracking-wider">Business Services</span>
              <h3 className="text-base font-bold text-[#1e3a5f] mt-1 mb-1">Unlocking Value in a Data-Challenged Sale</h3>
              <p className="text-slate-600 text-sm mb-2">Turned a year-long stalled deal into a successful exit in 7 months for a vending & catering company.</p>
              <span className="text-[#1e3a5f] font-medium text-sm">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
              className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#1e3a5f]/30"
            >
              <span className="text-xs font-semibold text-[#1e3a5f]/70 uppercase tracking-wider">Hospitality</span>
              <h3 className="text-base font-bold text-[#1e3a5f] mt-1 mb-1">Building Credibility & Justifying Multiples</h3>
              <p className="text-slate-600 text-sm mb-2">Equipped a venue management company's finance team to support a premium EBITDA multiple.</p>
              <span className="text-[#1e3a5f] font-medium text-sm">Read Case Study →</span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
              className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#1e3a5f]/30"
            >
              <span className="text-xs font-semibold text-[#1e3a5f]/70 uppercase tracking-wider">FinTech</span>
              <h3 className="text-base font-bold text-[#1e3a5f] mt-1 mb-1">Enhancing Investment Credibility</h3>
              <p className="text-slate-600 text-sm mb-2">Built key growth and churn analyses for a payments company that had never operated with these insights.</p>
              <span className="text-[#1e3a5f] font-medium text-sm">Read Case Study →</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1e3a5f] text-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Prepare for Your Exit?</h2>
          <p className="text-base text-slate-300 mb-5">
            Schedule a consultation to discuss your sell-side readiness needs and how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-amber-400 text-[#1e3a5f] px-8 py-3 rounded font-semibold hover:bg-amber-300 transition-all shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-4 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-[#1e3a5f] hover:text-amber-600 transition-colors font-medium text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
