import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="pt-16">
        <div className="bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1e4bd9] px-6 md:px-12 py-20 md:py-28 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EDB624] rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <svg className="w-4 h-4 text-[#EDB624]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Proven Track Record</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Case Studies</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Real results from real engagements. See how we've helped clients achieve optimal valuations, successful exits, and strategic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Enhanced */}
      <section className="py-20 md:py-28 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sell-Side Readiness Card */}
            <Link to="/case-studies/sell-side-readiness" className="group block bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1e4bd9] p-8 md:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 Case Studies
                  </span>
                  <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sell-Side Readiness</h3>
                <p className="text-blue-100 text-base leading-relaxed mb-6">
                  Preparing portfolio companies for optimal valuation and smooth transactions through financial streamlining, operational metrics validation, and enhanced management credibility.
                </p>
                
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider">Featured Stories:</p>
                  <ul className="space-y-2.5">
                    <li className="flex gap-3 items-center text-sm text-blue-100 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>KPI Data Cube for Company Sale</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm text-blue-100 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Unlocking Value in Data-Challenged Sale</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm text-blue-100 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Building Credibility & Justifying Multiples</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>

            {/* Corporate Development Card */}
            <Link to="/case-studies/corporate-development" className="group block bg-gradient-to-br from-[#1A2234] via-[#1A2234] to-[#2a3244] p-8 md:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    2 Case Studies
                  </span>
                  <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Corporate Development</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  End-to-end corporate development services including target screening, due diligence, deal structuring, and post-merger integration to accelerate growth and expand market presence.
                </p>
                
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider">Featured Stories:</p>
                  <ul className="space-y-2.5">
                    <li className="flex gap-3 items-center text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>From Operations to Ownership</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Building an Acquisition Roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-4">Have a Similar Challenge?</h2>
          <p className="text-[#1A2234]/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with tailored financial solutions.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-[#0D3BC3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0D3BC3]/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
