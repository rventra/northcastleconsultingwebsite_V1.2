import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardingCaseStudiesPage() {
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
            Dashboarding &amp; Reporting
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Custom dashboards and data portals for real-time visibility into portfolio performance. See how we transform fragmented data into actionable intelligence that drives value creation.
          </p>
        </div>
      </div>

      {/* Featured Case Study */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Manufacturing data automation"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                Driving PE Value Through Operational Visibility and Data Automation
              </h1>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                A PE-backed $100M revenue manufacturer had no ERP, limited Excel usage, and no centralized reporting. With 40,000+ SKUs lacking a product hierarchy, leadership had no visibility into margins, win rates, or operational performance.
              </p>
              <Link
                to="/case-studies/dashboarding-pe-value-visibility"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-300 transition-all duration-300 self-start"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#0D3BC3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Transform Your Data Into Action?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Let's discuss how our dashboarding and reporting services can give you real-time visibility into your business.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Dashboarding%20%26%20Reporting%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
