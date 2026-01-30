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

      {/* Featured Case Study - KPI Data Cube */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/f358c6ff-8466-4cc0-93c1-929f421f131a/getty-images-idzNvTzu7R0-unsplash.jpg?format=2500w"
                alt="Developing a KPI Data Cube For a Company Sale"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                Developing a KPI Data Cube For a Company Sale
              </h3>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                A private equity-backed auto parts manufacturer preparing for a sale required a consolidated, enterprise-level view of sales, gross margin, and KPIs across customers, SKUs, and other dimensions.
              </p>
              <Link
                to="/case-studies/sell-side-kpi-data-cube"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-300 transition-all duration-300 self-start"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Unlocking Value in a Data-Challenged Business Sale */}
      <section className="py-12 md:py-16 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/747fe8f0-9a4c-4411-a7b4-927b373ac2ac/getty-images-y1mJOq-cq3Q-unsplash.jpg?format=2500w"
                alt="Unlocking Value in a Data-Challenged Business Sale"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                Unlocking Value in a Data-Challenged Business Sale
              </h3>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                Transforming complex, fragmented data into actionable insights to drive value and operational clarity for portfolio companies.
              </p>
              <Link
                to="/case-studies/sell-side-data-challenged-sale"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-300 transition-all duration-300 self-start"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Building Credibility & Justifying Multiples */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/336a2faf-57ab-4af7-b678-6f89d365ec55/nighttime-concert-musicians-play-excited-crowd-generated-by-ai.jpg?format=2500w"
                alt="Building Credibility & Justifying Multiples"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                Building Credibility & Justifying Multiples
              </h1>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                A private equity-backed venue management company, was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process.
              </p>
              <Link
                to="/case-studies/sell-side-credibility-multiples"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-300 transition-all duration-300 self-start"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Enhancing Investment Credibility */}
      <section className="py-12 md:py-16 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/8172fd02-4248-41ad-9ff3-32fd06784f0e/Fintech+payment.jpg?format=2500w"
                alt="Enhancing Investment Credibility: Structuring Key Growth & Churn Analysis for a FinTech Sale"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                Enhancing Investment Credibility: Structuring Key Growth & Churn Analysis for a FinTech Sale
              </h1>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.
              </p>
              <Link
                to="/case-studies/sell-side-investment-credibility"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-300 transition-all duration-300 self-start"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
