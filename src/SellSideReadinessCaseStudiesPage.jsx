import React from 'react';
import { Link } from 'react-router-dom';

const studies = [
  { to: '/case-studies/sell-side-kpi-data-cube', tag: 'Manufacturing (Auto Parts)', title: 'Developing a KPI Data Cube for a Company Sale' },
  { to: '/case-studies/sell-side-data-challenged-sale', tag: 'Business Services (Vending & Catering)', title: 'Unlocking Value in a Data-Challenged Business Sale' },
  { to: '/case-studies/sell-side-credibility-multiples', tag: 'Leisure & Hospitality', title: 'Building Credibility & Justifying Multiples' },
  { to: '/case-studies/sell-side-investment-credibility', tag: 'FinTech (Payments)', title: 'Enhancing Investment Credibility' },
  { to: '/case-studies/sell-side-operations-marketing', tag: 'HVAC & Plumbing', title: 'Streamlining Operations & Marketing Insights' },
];

export default function SellSideReadinessCaseStudiesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#051c2c] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-[1.15] mb-6">Sell-Side Readiness</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
            Preparing portfolio companies for optimal valuation and smooth transactions — financial streamlining, metrics validation, and the analyses buyers need to say yes.
          </p>
        </div>
      </div>

      {/* Study rows */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto border-t border-gray-200">
          {studies.map((s) => (
            <Link key={s.to} to={s.to} className="group flex items-center gap-6 py-5 border-b border-gray-200">
              <div className="flex-1">
                <p className="text-xs text-[#051c2c]/50 mb-1">{s.tag}</p>
                <h3 className="text-base md:text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">{s.title}</h3>
              </div>
              <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-14 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-[#051c2c] mb-4">Preparing for a sale?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">Let&rsquo;s discuss how we can help you demonstrate value and run a confident process.</p>
          <Link to="/services/sell-side-readiness" className="inline-flex items-center text-[#051c2c] text-sm font-semibold border-b border-[#051c2c]/30 pb-1 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
            Related Service: Sell-Side Readiness <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Link to="/case-studies" className="text-[#051c2c]/50 hover:text-[#051c2c] transition-colors text-sm">&larr; Back to Case Studies</Link>
        </div>
      </div>
    </div>
  );
}
