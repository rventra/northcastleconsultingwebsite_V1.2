import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-4">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Us</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Meet the team behind North Castle Consulting
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">

            {/* Nicholas Citrin */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-[#F6F7F7] aspect-square rounded-lg flex items-center justify-center">
                  <span className="text-6xl text-[#0D3BC3]/20">NC</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-[#1A2234] mb-2">Nicholas Citrin</h2>
                <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-6">Founder</p>

                <div className="space-y-4 text-[#1A2234]/70 leading-relaxed">
                  <p>
                    Nicholas has nearly two decades of finance experience spanning investment banking, private equity, hedge funds, and equity research. He specializes in understanding key business drivers and performing valuations to guide critical decision-making for clients and stakeholders. Leveraging a deep skill set in financial modeling and analytics, Nicholas provides actionable insights that help organizations optimize their capital structures and identify growth opportunities.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-6 space-y-2">
                  <p className="text-[#1A2234]/70">
                    <a href="mailto:ncitrin@northcastleconsulting.com" className="hover:text-[#0D3BC3] transition-colors">
                      Email: ncitrin@northcastleconsulting.com
                    </a>
                  </p>
                  <p className="text-[#1A2234]/70">
                    <a href="tel:3144404931" className="hover:text-[#0D3BC3] transition-colors">
                      Phone: 314.440.4931
                    </a>
                  </p>
                </div>

                {/* Prior Experience */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1A2234] mb-4">Prior Experience</h3>
                  <ul className="space-y-2 text-[#1A2234]/70">
                    <li>• Accordion</li>
                    <li>• 8C Partners</li>
                    <li>• Wedbush Securities</li>
                    <li>• Valo Group</li>
                    <li>• Barclays Capital</li>
                    <li>• Lehman Brothers</li>
                  </ul>
                </div>

                {/* Education & Extended Bio */}
                <details className="mt-8 pt-8 border-t border-gray-200">
                  <summary className="text-lg font-semibold text-[#1A2234] mb-4 cursor-pointer hover:text-[#0D3BC3] transition-colors">
                    Know More
                  </summary>
                  <div className="mt-4 space-y-4 text-[#1A2234]/70 leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-[#1A2234] mb-2 underline">Education</h4>
                      <ul className="space-y-2">
                        <li>• University of Pennsylvania, B.A. Economics</li>
                      </ul>
                    </div>
                    <p>
                      Over the course of his career, Nicholas has led multiple consulting engagements that required building and managing outsourced teams focused on finance and data analytics. Prior to founding North Castle, Nicholas was a consultant at Accordion in the Transaction Execution Services group focused on sell-side readiness and corporate development projects. Prior to Accordion, Nicholas consulted private equity and hedge fund clients on investment analysis and buy-side engagements, conducting extensive due diligence and modeling support for investments across diverse industries. He has worked on capital raising, corporate development, and investment analysis. He is skilled at leveraging tools such as Excel, Power Query, and Power BI to create dynamic, data-driven dashboards and analyses. Nicholas has analyzed companies in the technology, software, media, retail, service, and real estate sectors.
                    </p>
                    <p>
                      Nicholas began his career at Lehman Brothers in the Technology & Media M&A Investment Banking group, where he was involved in evaluating strategic and financial sponsor transactions. Nicholas graduated cum laude from the University of Pennsylvania with a degree in Economics.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Ram Ventrapragada */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-[#F6F7F7] aspect-square rounded-lg flex items-center justify-center">
                  <span className="text-6xl text-[#0D3BC3]/20">RV</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-[#1A2234] mb-2">Ram Ventrapragada</h2>

                <div className="space-y-4 text-[#1A2234]/70 leading-relaxed">
                  <p>
                    Ram has over a decade of experience spanning financial modeling, data strategy, and AI-enabled automation across banking, consulting, and data-intensive legal environments. He specializes in designing and implementing complex financial and data systems that translate abstract logic into structured, decision-ready outputs for senior leadership.
                  </p>
                  <p>
                    Leveraging a deep skill set in CCAR stress testing, 3-statement modeling, liquidity forecasting, valuation, and data architecture, Ram has supported major institutions including Capital One and Doral Financial. More recently, he has led advanced data strategy initiatives using Python, APIs, and AI-driven workflows to convert large volumes of unstructured information into structured, CRM-ready datasets. His work enables organizations to improve forecasting accuracy, operational scalability, and data-driven decision-making.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-6 space-y-2">
                  <p className="text-[#1A2234]/70">
                    <a href="mailto:rventrapragada@northcastleconsulting.com" className="hover:text-[#0D3BC3] transition-colors">
                      Email: rventrapragada@northcastleconsulting.com
                    </a>
                  </p>
                </div>

                {/* Prior Experience */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1A2234] mb-4">Prior Experience</h3>
                  <ul className="space-y-2 text-[#1A2234]/70">
                    <li>• Wagstaff Law Firm</li>
                    <li>• Capital One</li>
                    <li>• Ernst & Young (EY)</li>
                    <li>• Doral Financial Corporation</li>
                  </ul>
                </div>

                {/* Education & Extended Bio */}
                <details className="mt-8 pt-8 border-t border-gray-200">
                  <summary className="text-lg font-semibold text-[#1A2234] mb-4 cursor-pointer hover:text-[#0D3BC3] transition-colors">
                    Know More
                  </summary>
                  <div className="mt-4 space-y-4 text-[#1A2234]/70 leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-[#1A2234] mb-2">Education</h4>
                      <p>
                        Over the course of his career, Ram has led multiple initiatives requiring the design, validation, and governance of high-complexity financial and analytical models. At Wagstaff Law Firm, he served as Head of Data Strategy & Analytics, where he architected AI-driven lead enrichment and document review systems, transforming unstructured claimant communications into structured Salesforce uploads at scale. He designed automated logic, fallback processes, and QA protocols to ensure data integrity while supporting high-volume operational workflows.
                      </p>
                      <p>
                        Prior to this, Ram was a Senior Financial Analyst at Capital One, where he developed and maintained CCAR models under baseline and adverse economic scenarios, owned mortgage origination forecasts, and performed detailed variance and NPV analyses to identify key profitability drivers. Earlier in his career, he worked as a Management Consultant at Ernst & Young, supporting process documentation and software implementations, and as a Financial Analyst at Doral Financial, where he built fully integrated 3-statement and liquidity models to support regulatory compliance and board-level capital planning.
                      </p>
                      <p>
                        Ram is highly proficient in Excel, Python, Power BI, Salesforce, and AI workflow orchestration tools, and is known for his ability to bridge finance, data, and automation to create systems that are both analytically rigorous and operationally scalable.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Optional CTA Section */}
      <div className="bg-[#0D3BC3] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch to discuss how we can help your business
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 hover:shadow-xl transition-all duration-300 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
