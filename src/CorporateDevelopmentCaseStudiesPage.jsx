import React from 'react';
import { Link } from 'react-router-dom';

const studies = [
  { to: '/case-studies/corporate-operations-to-ownership', tag: 'Travel & Car Rental', title: 'From Operations to Ownership' },
  { to: '/case-studies/corporate-acquisition-roadmap', tag: 'Consulting & Business Services', title: 'Building an Acquisition Roadmap' },
  { to: '/case-studies/corporate-dental-carve-out', tag: 'Dental Services / DSO — Carve-Out', title: 'Unwinding a Multi-Entity Dental Partnership' },
];

export default function CorporateDevelopmentCaseStudiesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#051c2c] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-[1.15] mb-6">Corporate Development</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
            End-to-end support across the deal lifecycle — target screening, diligence, deal structuring, carve-outs, and divestitures.
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
          <h2 className="font-serif text-2xl md:text-3xl text-[#051c2c] mb-4">Planning an acquisition — or a separation?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">Let&rsquo;s discuss how we can help you find, evaluate, and close the right deal.</p>
          <Link to="/services/corporate-development" className="inline-flex items-center text-[#051c2c] text-sm font-semibold border-b border-[#051c2c]/30 pb-1 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
            Related Service: Corporate Development <span className="ml-2">&rarr;</span>
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
