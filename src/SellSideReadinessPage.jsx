import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero - Clean and Simple */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-4">Private Equity Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sell-Side Readiness
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            We prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency and proactively addressing buyer concerns.
          </p>
        </div>
      </div>

      {/* The Problem */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">The Challenge</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-8">Why exits stall</h2>

          <div className="prose prose-lg max-w-none text-[#1A2234]/70">
            <p className="text-lg leading-relaxed mb-6">
              Management teams preparing for a sale face competing demands: running the business while simultaneously satisfying the extensive requirements of due diligence. The result is often delays, missed opportunities, and compromised valuations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Operational Disruption</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Leadership distracted from core business while preparing data rooms and responding to buyer requests.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Data Complexity</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Disparate systems, unstructured data, and incomplete post-merger integration create information gaps.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Buyer Scrutiny</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Sophisticated investors demand accuracy. Unexpected issues discovered late in diligence derail valuations.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Resource Constraints</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Lean finance teams lack the bandwidth and specialized skills to manage transaction-level analysis.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Our Approach */}
      <div className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Our Approach</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-8">How we help</h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">01</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Pre-Sale Diligence</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">We identify and address potential issues before buyers do—reducing surprises and protecting your valuation.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">02</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Data Room Preparation</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Organize financials, validate KPIs, and build the analytical foundation buyers expect to see.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">03</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Management Support</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Handle diligence requests and Q&A, freeing leadership to focus on running the business.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">04</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Investment Thesis Support</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Build the analyses that justify your multiple—growth drivers, customer cohorts, margin trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Banner */}
      <div className="bg-[#0D3BC3] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-lg">
            Our engagements consistently result in successful exits with management teams positioned to confidently navigate buyer diligence.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Case Studies</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-12">Selected work</h2>

          <div className="space-y-8">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-kpi-data-cube'); }}
              className="group block border-b border-gray-200 pb-8"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#1A2234]/50 mb-2">Manufacturing</p>
                  <h3 className="text-xl font-semibold text-[#1A2234] group-hover:text-[#0D3BC3] transition-colors mb-2">KPI Data Cube for a Company Sale</h3>
                  <p className="text-[#1A2234]/60">Unified 2.7M data points from 6 ERP systems for a $250M auto parts manufacturer.</p>
                </div>
                <span className="text-[#0D3BC3] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-data-challenged'); }}
              className="group block border-b border-gray-200 pb-8"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#1A2234]/50 mb-2">Business Services</p>
                  <h3 className="text-xl font-semibold text-[#1A2234] group-hover:text-[#0D3BC3] transition-colors mb-2">Unlocking Value in a Data-Challenged Sale</h3>
                  <p className="text-[#1A2234]/60">Turned a stalled deal into a successful exit in 7 months.</p>
                </div>
                <span className="text-[#0D3BC3] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }}
              className="group block border-b border-gray-200 pb-8"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#1A2234]/50 mb-2">Hospitality</p>
                  <h3 className="text-xl font-semibold text-[#1A2234] group-hover:text-[#0D3BC3] transition-colors mb-2">Building Credibility & Justifying Multiples</h3>
                  <p className="text-[#1A2234]/60">Supported a premium EBITDA multiple for a venue management company.</p>
                </div>
                <span className="text-[#0D3BC3] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }}
              className="group block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#1A2234]/50 mb-2">FinTech</p>
                  <h3 className="text-xl font-semibold text-[#1A2234] group-hover:text-[#0D3BC3] transition-colors mb-2">Enhancing Investment Credibility</h3>
                  <p className="text-[#1A2234]/60">Built growth and churn analyses for a payments company preparing for sale.</p>
                </div>
                <span className="text-[#0D3BC3] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1A2234] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to prepare for your exit?</h2>
          <p className="text-white/60 mb-8">Let's discuss how we can help maximize your transaction value.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-white text-[#1A2234] px-8 py-4 rounded font-semibold hover:bg-[#EDB624] transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
