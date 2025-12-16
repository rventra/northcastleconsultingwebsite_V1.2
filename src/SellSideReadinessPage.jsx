import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1A2234] text-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Sell-Side Readiness
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-white/90">
            Maximizing Value & Ensuring a Seamless Transaction
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
        </div>
      </div>

      {/* Two-Column Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Challenges */}
        <div className="bg-[#F6F7F7] py-14 px-6 md:px-12">
          <div className="max-w-lg ml-auto">
            <h2 className="text-2xl font-bold text-[#1A2234] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#0D3BC3] rounded-full"></span>
              Challenges
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">1</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Risk of Disruption</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Management must balance day-to-day operations while preparing for due diligence.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">2</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Data Complexity</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Disparate systems, large, unstructured data, and post-merger misalignment can stall transactions.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">3</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Buyer Scrutiny</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Investors demand accuracy in financials and operations, and unexpected issues can derail valuations.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center text-[#0D3BC3] font-bold">4</span>
                <div>
                  <strong className="text-[#1A2234] block mb-1">Resource Constraints</strong>
                  <span className="text-[#1A2234]/70 leading-relaxed">Understaffed F&A teams struggle to meet the diligence requirements of a deal.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Solutions */}
        <div className="bg-gradient-to-br from-[#0D3BC3] to-[#1A2234] py-14 px-6 md:px-12 text-white">
          <div className="max-w-lg mr-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#EDB624] rounded-full"></span>
              Our Solution
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Transaction Success</strong>
                  <span className="text-white/80 leading-relaxed">Proven track record of engagements resulting in successful exits.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Management Focus</strong>
                  <span className="text-white/80 leading-relaxed">Allows leadership to prioritize daily operations without distraction.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Maximize Valuation</strong>
                  <span className="text-white/80 leading-relaxed">Pre-sale diligence reduces surprises and improves deal terms.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Data Validation</strong>
                  <span className="text-white/80 leading-relaxed">Rigorous verification of financial and operational metrics to instill buyer confidence.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#EDB624] rounded-lg flex items-center justify-center text-[#1A2234] font-bold text-sm">✓</span>
                <div>
                  <strong className="text-white block mb-1">Elevate Credibility</strong>
                  <span className="text-white/80 leading-relaxed">Professional deliverables enhance the buyer's impression of the management team.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Real World Scenarios Section */}
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Real World Scenarios</h2>
            <p className="text-[#1A2234]/70 text-lg">Common challenges our clients face</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <div className="bg-[#F6F7F7] rounded-xl p-6 border-l-4 border-[#0D3BC3]">
              <h3 className="text-lg font-bold text-[#1A2234] mb-3">Serial Acquirer</h3>
              <p className="text-[#1A2234]/60 italic mb-4 text-sm leading-relaxed">"I have helped scale our organization through five targeted acquisitions in just three years"</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#0D3BC3] mb-2">Business Challenges</p>
                <ul className="text-[#1A2234]/70 space-y-1.5 text-sm">
                  <li className="flex gap-2"><span className="text-[#0D3BC3]">→</span>Incomplete post-merger integration</li>
                  <li className="flex gap-2"><span className="text-[#0D3BC3]">→</span>Disparate data environment</li>
                  <li className="flex gap-2"><span className="text-[#0D3BC3]">→</span>Multiple ERP, CRM, CPM, and BI tools</li>
                  <li className="flex gap-2"><span className="text-[#0D3BC3]">→</span>Decentralized F&A teams</li>
                </ul>
              </div>
              <div className="bg-[#0D3BC3]/5 rounded-lg p-3">
                <p className="text-xs font-semibold text-[#0D3BC3] mb-1">Greatest Hurdle</p>
                <p className="text-[#1A2234]/70 italic text-sm">"Unable to produce a streamlined revenue pipeline by product, customer, etc."</p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-[#F6F7F7] rounded-xl p-6 border-l-4 border-[#EDB624]">
              <h3 className="text-lg font-bold text-[#1A2234] mb-3">Understaffed Finance Team</h3>
              <p className="text-[#1A2234]/60 italic mb-4 text-sm leading-relaxed">"I lead finance at a company where navigating a multi-layered, data-rich environment is critical"</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#EDB624] mb-2">Business Challenges</p>
                <ul className="text-[#1A2234]/70 space-y-1.5 text-sm">
                  <li className="flex gap-2"><span className="text-[#EDB624]">→</span>Insufficient systems</li>
                  <li className="flex gap-2"><span className="text-[#EDB624]">→</span>Millions of rows of transactional data</li>
                  <li className="flex gap-2"><span className="text-[#EDB624]">→</span>Team lacks data extraction skills</li>
                </ul>
              </div>
              <div className="bg-[#EDB624]/10 rounded-lg p-3">
                <p className="text-xs font-semibold text-[#EDB624] mb-1">Greatest Hurdle</p>
                <p className="text-[#1A2234]/70 italic text-sm">"Lack bandwidth to tackle a transaction without neglecting the business"</p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-[#F6F7F7] rounded-xl p-6 border-l-4 border-[#0D3BC3]">
              <h3 className="text-lg font-bold text-[#1A2234] mb-3">Complex Data Environment</h3>
              <p className="text-[#1A2234]/60 italic mb-4 text-sm leading-relaxed">"I manage finance at a company where the F&A team is running lean relative to demands"</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#0D3BC3] mb-2">Business Challenges</p>
                <ul className="text-[#1A2234]/70 space-y-1.5 text-sm">
                  <li className="flex gap-2"><span className="text-[#0D3BC3]">→</span>Significant bandwidth constraints</li>
                  <li className="flex gap-2"><span className="text-[#0D3BC3]">→</span>F&A team struggling with day-to-day</li>
                </ul>
              </div>
              <div className="bg-[#0D3BC3]/5 rounded-lg p-3">
                <p className="text-xs font-semibold text-[#0D3BC3] mb-1">Greatest Hurdle</p>
                <p className="text-[#1A2234]/70 italic text-sm">"Unable to produce revenue/profitability analysis by customer cohort"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 md:py-20 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Case Studies</h2>
            <p className="text-[#1A2234]/70 text-lg">See how we've helped similar clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-kpi-data-cube'); }}
              className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded mb-3">Manufacturing</span>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">KPI Data Cube for a Company Sale</h3>
              <p className="text-[#1A2234]/70 mb-4 leading-relaxed">Transformed 2.7M data points from 6 ERP systems into actionable insights for a $250M auto parts manufacturer.</p>
              <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Case Study <span>→</span></span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-data-challenged'); }}
              className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded mb-3">Business Services</span>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Unlocking Value in a Data-Challenged Sale</h3>
              <p className="text-[#1A2234]/70 mb-4 leading-relaxed">Turned a year-long stalled deal into a successful exit in 7 months for a vending & catering company.</p>
              <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Case Study <span>→</span></span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
              className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded mb-3">Hospitality</span>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Building Credibility & Justifying Multiples</h3>
              <p className="text-[#1A2234]/70 mb-4 leading-relaxed">Equipped a venue management company's finance team to support a premium EBITDA multiple.</p>
              <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Case Study <span>→</span></span>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
              className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded mb-3">FinTech</span>
              <h3 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Enhancing Investment Credibility</h3>
              <p className="text-[#1A2234]/70 mb-4 leading-relaxed">Built key growth and churn analyses for a payments company that had never operated with these insights.</p>
              <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Case Study <span>→</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#1A2234] to-[#0D3BC3] text-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Prepare for Your Exit?</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation to discuss your sell-side readiness needs and how we can help maximize your transaction value.
          </p>
          <a
            href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-6 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="inline-flex items-center gap-2 text-[#0D3BC3] hover:text-[#EDB624] transition-colors font-medium"
          >
            <span>←</span> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
