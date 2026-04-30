import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section - Enhanced */}
      <div className="bg-gradient-to-br from-[#1A2234] via-[#1A2234] to-[#0D3BC3]/30 text-white py-20 md:py-28 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D3BC3]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EDB624]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-[#EDB624] rounded-full"></span>
            <span className="text-white/90 text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">About Us</h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
            Meet the experienced professionals behind North Castle Consulting
          </p>
        </div>
      </div>

      {/* Team Members Section - Enhanced */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#0D3BC3] text-sm font-bold uppercase tracking-wider mb-3">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234]">Our Team</h2>
          </div>

          <div className="space-y-24">

            {/* Nicholas Citrin */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#0D3BC3]/10 shadow-lg">
                  <img
                    src="/images/nick-headshot.png"
                    alt="Nicholas Citrin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-[#1A2234]">Nicholas Citrin</h2>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center hover:bg-[#0D3BC3] hover:text-white transition-all text-[#0D3BC3]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-[#0D3BC3] text-sm font-bold tracking-wider uppercase mb-6">Founder</p>

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
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1A2234]/10 shadow-lg">
                  <img
                    src="/images/ram-headshot.jpg"
                    alt="Ram Ventrapragada"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-[#1A2234]">Ram Ventrapragada</h2>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0D3BC3]/10 rounded-lg flex items-center justify-center hover:bg-[#0D3BC3] hover:text-white transition-all text-[#0D3BC3]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>

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
                    <p>
                      Over his career, Ram has designed and implemented advanced financial and data systems that translate complex logic into structured, decision-ready outputs for senior leadership. At Wagstaff Law Firm, he led AI-driven lead enrichment and document review initiatives, converting unstructured claimant communications into structured Salesforce datasets and developing automated QA processes and fallback logic to ensure data integrity at scale.
                    </p>
                    <p>
                      At Capital One, he managed CCAR stress testing, mortgage origination forecasts, and variance analysis to identify key profitability drivers. Earlier, at Ernst & Young and Doral Financial, he built fully integrated 3-statement and liquidity models, supported process documentation, and implemented software solutions to enhance operational efficiency and regulatory compliance.
                    </p>
                    <p>
                      Ram is highly skilled in Excel, Python, Power BI, Salesforce, and AI workflow orchestration tools. He excels at bridging finance, data strategy, and automation to deliver models, dashboards, and workflows that are analytically rigorous, operationally scalable, and actionable for executive decision-making.
                    </p>
                  </div>
                </details>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1e4bd9] text-white py-20 px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#EDB624] rounded-full translate-y-1/2 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our expertise can help drive your business forward and achieve your strategic goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-xl font-bold hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              View Our Results
            </Link>
          </div>
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
