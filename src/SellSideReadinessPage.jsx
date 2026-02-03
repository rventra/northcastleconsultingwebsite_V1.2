import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessPage() {
  return (
    <div className="pt-16">
      {/* Hero - Consistent with homepage */}
      <div className="bg-[#051c2c] text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">Private Equity Services</p>
          <h1 className="text-3xl md:text-4xl font-normal mb-4 leading-tight">
            Sell-Side Readiness
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            We prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency and proactively addressing buyer concerns.
          </p>
        </div>
      </div>

      {/* The Problem - Reduced spacing */}
      <div className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">The Challenge</span>
          <h2 className="text-2xl font-normal text-[#051c2c] mt-2 mb-6">Why exits stall</h2>

          <p className="text-[#051c2c]/70 leading-relaxed mb-8">
            Management teams preparing for a sale face competing demands: running the business while simultaneously satisfying the extensive requirements of due diligence. The result is often delays, missed opportunities, and compromised valuations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Operational Disruption</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Leadership distracted from core business while preparing data rooms and responding to buyer requests.</p>
            </div>
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Data Complexity</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Disparate systems, unstructured data, and incomplete post-merger integration create information gaps.</p>
            </div>
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Buyer Scrutiny</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Sophisticated investors demand accuracy. Unexpected issues discovered late in diligence derail valuations.</p>
            </div>
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Resource Constraints</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Lean finance teams lack the bandwidth and specialized skills to manage transaction-level analysis.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach - Reduced spacing */}
      <div className="py-12 md:py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Our Approach</span>
          <h2 className="text-2xl font-normal text-[#051c2c] mt-2 mb-8">How we help</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Pre-Sale Diligence</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">We identify and address potential issues before buyers do—reducing surprises and protecting your valuation.</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Data Room Preparation</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Organize financials, validate KPIs, and build the analytical foundation buyers expect to see.</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Management Support</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Handle diligence requests and Q&A, freeing leadership to focus on running the business.</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Investment Thesis Support</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Build the analyses that justify your multiple—growth drivers, customer cohorts, margin trends.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Results Banner - Consistent */}
      <div className="bg-[#051c2c] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80">
            Our engagements consistently result in successful exits with management teams positioned to confidently navigate buyer diligence.
          </p>
        </div>
      </div>

      {/* Case Studies - Reduced spacing */}
      <div className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Case Studies</span>
          <h2 className="text-2xl font-normal text-[#051c2c] mt-2 mb-8">Selected work</h2>

          <div className="space-y-4">
            <Link
              to="/case-studies/sell-side-kpi-data-cube"
              className="group block border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Manufacturing</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">KPI Data Cube for a Company Sale</h3>
                  <p className="text-[#051c2c]/60 text-sm">Unified 2.7M data points from 6 ERP systems for a $250M auto parts manufacturer.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-data-challenged-sale"
              className="group block border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Business Services</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">Unlocking Value in a Data-Challenged Sale</h3>
                  <p className="text-[#051c2c]/60 text-sm">Turned a stalled deal into a successful exit in 7 months.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-credibility-multiples"
              className="group block border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Hospitality</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">Building Credibility & Justifying Multiples</h3>
                  <p className="text-[#051c2c]/60 text-sm">Supported a premium EBITDA multiple for a venue management company.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-investment-credibility"
              className="group block border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">FinTech</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">Enhancing Investment Credibility</h3>
                  <p className="text-[#051c2c]/60 text-sm">Built growth and churn analyses for a payments company preparing for sale.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              to="/case-studies/sell-side-operations-marketing"
              className="group block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">HVAC & Plumbing</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">Streamlining Operations and Marketing Insights</h3>
                  <p className="text-[#051c2c]/60 text-sm">Comprehensive analysis for a PE-owned HVAC and plumbing company preparing for successful exit.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA - Consistent */}
      <div className="bg-[#051c2c] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-normal text-white mb-3">Ready to prepare for your exit?</h2>
          <p className="text-white/60 mb-6">Let's discuss how we can help maximize your transaction value.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-flex items-center gap-2 bg-white text-[#051c2c] px-6 py-3 rounded font-medium hover:bg-[#2563EB] hover:text-white transition-all duration-300 text-sm"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
