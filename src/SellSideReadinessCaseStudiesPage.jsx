import React from 'react';
import { Link } from 'react-router-dom';

export default function SellSideReadinessCaseStudiesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#0D3BC3] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sell-Side Readiness
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Preparing your portfolio company for sale is critical to achieving optimal valuation and a smooth transaction. Explore our proven case studies demonstrating how we streamline financials, validate operational metrics, and enhance management credibility to attract buyers and minimize last-minute surprises.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/case-studies/sell-side-kpi-data-cube" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-[#0D3BC3]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded">Sell-Side Readiness</span>
              <h3 className="text-lg font-bold text-[#1A2234] mt-3 mb-2 group-hover:text-[#0D3BC3] transition-colors">KPI Data Cube for Company Sale</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">$250M auto parts manufacturer - 2.7M data points unified</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><span className="font-medium">Industry:</span> Manufacturing (Auto Parts)</div>
                <div><span className="font-medium">Duration:</span> 4 months</div>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-data-challenged-sale" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-[#0D3BC3]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded">Sell-Side Readiness</span>
              <h3 className="text-lg font-bold text-[#1A2234] mt-3 mb-2 group-hover:text-[#0D3BC3] transition-colors">Unlocking Value in Data-Challenged Sale</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">Vending & catering company - stalled to sold in 7 months</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><span className="font-medium">Industry:</span> Business Services (Vending)</div>
                <div><span className="font-medium">Duration:</span> 7 months</div>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-credibility-multiples" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-[#0D3BC3]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded">Sell-Side Readiness</span>
              <h3 className="text-lg font-bold text-[#1A2234] mt-3 mb-2 group-hover:text-[#0D3BC3] transition-colors">Building Credibility & Justifying Multiples</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">PE-backed venue management company sale preparation</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><span className="font-medium">Industry:</span> Leisure & Hospitality</div>
                <div><span className="font-medium">Duration:</span> 5 months</div>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-investment-credibility" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-[#0D3BC3]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded">Sell-Side Readiness</span>
              <h3 className="text-lg font-bold text-[#1A2234] mt-3 mb-2 group-hover:text-[#0D3BC3] transition-colors">Enhancing Investment Credibility</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">FinTech payments company growth and churn analysis</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><span className="font-medium">Industry:</span> FinTech (Payments)</div>
                <div><span className="font-medium">Duration:</span> 2 months</div>
              </div>
            </Link>

            <Link to="/case-studies/sell-side-operations-marketing" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-[#0D3BC3]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="inline-block text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-2 py-1 rounded">Sell-Side Readiness</span>
              <h3 className="text-lg font-bold text-[#1A2234] mt-3 mb-2 group-hover:text-[#0D3BC3] transition-colors">Streamlining Operations and Marketing Insights</h3>
              <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">HVAC & plumbing company - comprehensive analysis for successful exit</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><span className="font-medium">Industry:</span> HVAC & Plumbing</div>
                <div><span className="font-medium">Duration:</span> 6 months</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#0D3BC3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Maximize Your Exit Value?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Let's discuss how our sell-side readiness services can position your portfolio company for optimal valuation and a smooth transaction.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
