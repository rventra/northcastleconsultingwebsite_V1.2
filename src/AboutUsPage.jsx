import React from 'react';

export default function AboutUsPage({ navigateToPage }) {
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
                      <h4 className="font-semibold text-[#1A2234] mb-2">Education</h4>
                      <p>University of Pennsylvania, B.A. Economics</p>
                    </div>
                    <p>
                      Over the course of his career, Nicholas has led multiple consulting engagements that required building and managing outsourced teams focused on finance and data analytics. Prior to founding North Castle, Nicholas was a consultant at Accordion in the Transaction Execution Services group focused on sell side readiness and corporate development projects. Prior to Accordion, Nicholas consulted private equity and hedge fund clients on investment analysis and buy-side engagements, conducting extensive due diligence and modeling support for investments across diverse industries. He has worked on capital raising, corporate development, and investment analysis. He is skilled at leveraging tools such as Excel, Power Query, and Power BI to create dynamic, data-driven dashboards and analyses. Nicholas has analyzed companies in the technology, software, media, retail, service, and real estate sectors.
                    </p>
                    <p>
                      Nicholas began his career at Lehman Brothers in the Technology & Media M&A Investment Banking group, where he was involved in evaluating strategic and financial sponsor transactions. Nicholas graduated cum laude from the University of Pennsylvania with a degree in Economics.
                    </p>
                  </div>
                </details>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1A2234] mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">Financial Modeling & Analytics</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">Valuation & Due Diligence</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">Transaction Advisory</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">Capital Structure Optimization</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">Business Intelligence & Dashboards</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">Investment Analysis</span>
                  </div>
                </div>
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
                <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-6">Title/Role</p>

                <div className="space-y-4 text-[#1A2234]/70 leading-relaxed">
                  <p>
                    [Biography and professional background to be added]
                  </p>
                  <p>
                    [Additional details about experience, expertise, and achievements]
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1A2234] mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 1]</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 2]</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 3]</span>
                  </div>
                </div>
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
          <button
            onClick={() => navigateToPage('home')}
            className="bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 hover:shadow-xl transition-all duration-300 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
