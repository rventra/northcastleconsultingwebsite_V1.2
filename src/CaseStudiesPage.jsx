import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-16">
        <div className="bg-[#0D3BC3] px-6 md:px-12 py-14 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Case Studies</h1>
            <p className="text-white/90 text-base leading-relaxed">
              Proven results across industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sell-Side Readiness Card */}
            <Link to="/case-studies/sell-side-readiness" className="group block bg-gradient-to-br from-[#0D3BC3] to-[#0D3BC3]/90 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-3 py-1 rounded">
                  5 Case Studies
                </span>
                <svg className="w-6 h-6 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Sell-Side Readiness</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Preparing portfolio companies for optimal valuation and smooth transactions through financial streamlining, operational metrics validation, and enhanced management credibility.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>KPI Data Cube for Company Sale</span>
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>Unlocking Value in Data-Challenged Sale</span>
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>Building Credibility & Justifying Multiples</span>
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>Enhancing Investment Credibility</span>
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>Streamlining Operations and Marketing Insights</span>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-[#EDB624] font-semibold group-hover:gap-3 transition-all">
                View All Case Studies <span>→</span>
              </div>
            </Link>

            {/* Corporate Development Card */}
            <Link to="/case-studies/corporate-development" className="group block bg-gradient-to-br from-[#1A2234] to-[#1A2234]/90 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-3 py-1 rounded">
                  2 Case Studies
                </span>
                <svg className="w-6 h-6 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Corporate Development</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                End-to-end corporate development services including target screening, due diligence, deal structuring, and post-merger integration to accelerate growth and expand market presence.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>From Operations to Ownership</span>
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span>Building an Acquisition Roadmap</span>
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
