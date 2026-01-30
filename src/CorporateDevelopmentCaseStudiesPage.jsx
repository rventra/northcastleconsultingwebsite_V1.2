import React from 'react';
import { Link } from 'react-router-dom';

export default function CorporateDevelopmentCaseStudiesPage() {
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
            Corporate Development
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Accelerate growth and expand market presence through strategic acquisitions and partnerships. Our end-to-end corporate development services include target screening, due diligence, deal structuring, and post-merger integration. Explore how we help identify the right opportunities, mitigate risks, and maximize synergies.
          </p>
        </div>
      </div>

      {/* Featured Case Study - From Operations to Ownership */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/72a1e0b6-d9e8-45b0-b95f-d4002cc6921a/Car+rental+Franchise?format=2500w"
                alt="From Operations to Ownership: Enabling Executives to Acquire a Car Rental Franchise"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                From Operations to Ownership: Enabling Executives to Acquire a Car Rental Franchise
              </h1>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business by implementing more efficient rental models.
              </p>
              <Link
                to="/case-studies/corporate-operations-to-ownership"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-300 transition-all duration-300 self-start"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Building an Acquisition Roadmap */}
      <section className="py-12 md:py-16 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/1741738068173-OFGOTPZGCUD0UQ05C3QO/unsplash-image-FVwG5OzPuzo.jpg?format=2500w"
                alt="Building an Acquisition Roadmap: Target Identification for a Consulting Firm"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content - Right */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-4">
                Building an Acquisition Roadmap: Target Identification for a Consulting Firm
              </h1>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.
              </p>
              <Link
                to="/case-studies/corporate-acquisition-roadmap"
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Accelerate Your Growth Strategy?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Let's discuss how our corporate development services can help you identify strategic acquisition opportunities and maximize synergies.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
