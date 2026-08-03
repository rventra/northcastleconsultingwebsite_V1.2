import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    to: '/case-studies/sell-side-readiness',
    count: '5 Case Studies',
    title: 'Sell-Side Readiness',
    blurb: 'Preparing portfolio companies for optimal valuation and smooth transactions through financial streamlining, operational metrics validation, and enhanced management credibility.',
    stories: ['KPI Data Cube for Company Sale', 'Unlocking Value in Data-Challenged Sale', 'Building Credibility & Justifying Multiples'],
  },
  {
    to: '/case-studies/corporate-development',
    count: '3 Case Studies',
    title: 'Corporate Development',
    blurb: 'End-to-end corporate development services including target screening, due diligence, deal structuring, carve-outs, and post-merger integration.',
    stories: ['From Operations to Ownership', 'Building an Acquisition Roadmap', 'DSO Partner Carve-Out'],
  },
  {
    to: '/case-studies/dashboarding-reporting',
    count: '1 Case Study',
    title: 'Dashboarding & Reporting',
    blurb: 'Custom dashboards and data portals for real-time visibility into portfolio performance and value-creation plan execution.',
    stories: ['$100M Manufacturer: Zero to Enterprise Dashboards'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#051c2c] py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">Proven Results</p>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-[1.15] mb-6">Case Studies</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
            Real results from real engagements — optimal valuations, successful exits, and strategic growth.
          </p>
        </div>
      </div>

      {/* Category cards */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {categories.map((c) => (
            <Link key={c.to} to={c.to} className="group block border-t-2 border-[#051c2c] pt-5 hover:border-[#2563EB] transition-colors">
              <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">{c.count}</span>
              <h3 className="text-xl font-medium text-[#051c2c] mt-2 mb-3 group-hover:text-[#2563EB] transition-colors">{c.title}</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed mb-4">{c.blurb}</p>
              <p className="text-xs font-semibold text-[#051c2c]/50 uppercase tracking-wider mb-2">Featured:</p>
              <ul className="space-y-1.5">
                {c.stories.map((s) => (
                  <li key={s} className="text-sm text-[#051c2c]/70 flex gap-2">
                    <span className="text-[#2563EB]">&rarr;</span> {s}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-14 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-[#051c2c] mb-4">Have a similar challenge?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">Let&rsquo;s discuss how we can help you achieve your goals with tailored financial solutions.</p>
          <Link to="/contact-us" className="inline-block bg-[#051c2c] text-white px-8 py-3 text-sm font-semibold hover:bg-[#2563EB] transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
