import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#051c2c] text-white py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Private Equity Services</p>
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            Sell-Side Readiness
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            We prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency and proactively addressing buyer concerns.
          </p>
        </div>
      </div>

      {/* The Challenge */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">Why exits stall</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#051c2c]/70 leading-relaxed mb-8">
                Management teams preparing for a sale face competing demands: running the business while simultaneously satisfying the extensive requirements of due diligence. The result is often delays, missed opportunities, and compromised valuations.
              </p>

              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Operational Disruption</h3>
                  <p className="text-[#051c2c]/60 text-sm">Leadership distracted from core business while preparing data rooms and responding to buyer requests.</p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Data Complexity</h3>
                  <p className="text-[#051c2c]/60 text-sm">Disparate systems, unstructured data, and incomplete post-merger integration create information gaps.</p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Buyer Scrutiny</h3>
                  <p className="text-[#051c2c]/60 text-sm">Sophisticated investors demand accuracy. Unexpected issues discovered late in diligence derail valuations.</p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Resource Constraints</h3>
                  <p className="text-[#051c2c]/60 text-sm">Lean finance teams lack the bandwidth and specialized skills to manage transaction-level analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">How we help</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">01</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Pre-Sale Diligence</h3>
                    <p className="text-[#051c2c]/60 text-sm">We identify and address potential issues before buyers do—reducing surprises and protecting your valuation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">02</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Data Room Preparation</h3>
                    <p className="text-[#051c2c]/60 text-sm">Organize financials, validate KPIs, and build the analytical foundation buyers expect to see.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">03</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Management Support</h3>
                    <p className="text-[#051c2c]/60 text-sm">Handle diligence requests and Q&A, freeing leadership to focus on running the business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">04</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Investment Thesis Support</h3>
                    <p className="text-[#051c2c]/60 text-sm">Build the analyses that justify your multiple—growth drivers, customer cohorts, margin trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-10 md:py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-light text-[#051c2c] mb-6">Selected work</h2>

          <div className="space-y-0 border-t border-gray-200">
            <Link to="/case-studies/sell-side-kpi-data-cube" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Manufacturing</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">KPI Data Cube for a Company Sale</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-data-challenged-sale" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Business Services</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">Unlocking Value in a Data-Challenged Sale</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-credibility-multiples" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Hospitality</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">Building Credibility & Justifying Multiples</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-investment-credibility" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">FinTech</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">Enhancing Investment Credibility</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-operations-marketing" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">HVAC & Plumbing</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">Streamlining Operations and Marketing Insights</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#051c2c] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light text-white mb-3">Ready to prepare for your exit?</h2>
          <p className="text-white/60 mb-6">Let's discuss how we can help maximize your transaction value.</p>
          <a href="mailto:admin@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry" className="inline-flex items-center gap-2 bg-white text-[#051c2c] px-6 py-3 font-medium hover:bg-gray-100 transition-colors text-sm">
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-4 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
