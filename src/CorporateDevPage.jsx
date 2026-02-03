import React from 'react';
import { Link } from 'react-router-dom';

export default function CorporateDevPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#051c2c] text-white py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Family Office & Independent Sponsor</p>
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            Corporate Development
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            End-to-end M&A support from target identification through closing. We help independent sponsors and family offices execute acquisitions with the rigor of institutional buyers.
          </p>
        </div>
      </div>

      {/* The Challenge */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">Why M&A is hard without a team</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#051c2c]/70 leading-relaxed mb-8">
                Independent sponsors and family offices often have deep industry expertise and clear investment theses—but lack the dedicated resources to execute. Sourcing targets, running diligence, and managing a process takes bandwidth that operators don't have.
              </p>

              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Target Identification</h3>
                  <p className="text-[#051c2c]/60 text-sm">Building a qualified pipeline requires systematic research and sustained outreach.</p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Diligence Depth</h3>
                  <p className="text-[#051c2c]/60 text-sm">Missed risks in diligence become expensive problems post-close.</p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Process Management</h3>
                  <p className="text-[#051c2c]/60 text-sm">Deals require coordination across legal, financial, and operational workstreams.</p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#051c2c] mb-2">Credibility Gap</h3>
                  <p className="text-[#051c2c]/60 text-sm">Sellers and intermediaries take process-ready buyers more seriously.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-10 md:py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-xl font-light text-[#051c2c]">How we support acquisitions</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">01</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Target Screening</h3>
                    <p className="text-[#051c2c]/60 text-sm">Define criteria, map the landscape, and build a prioritized pipeline of actionable targets.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">02</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Preliminary Analysis</h3>
                    <p className="text-[#051c2c]/60 text-sm">Quick-turn assessment of fit, valuation range, and key risks before committing resources.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">03</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Due Diligence</h3>
                    <p className="text-[#051c2c]/60 text-sm">Comprehensive financial, operational, and commercial diligence to validate the thesis and size risks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2563EB] font-semibold text-sm">04</div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#051c2c] mb-1">Transaction Execution</h3>
                    <p className="text-[#051c2c]/60 text-sm">Support through LOI, purchase agreement, and closing—coordinating workstreams and managing the process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-10 md:py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-light text-[#051c2c] mb-6">Selected work</h2>

          <div className="space-y-0 border-t border-gray-200">
            <Link to="/case-studies/corporate-operations-to-ownership" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Travel & Transportation</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">From Operations to Ownership</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>

            <Link to="/case-studies/corporate-acquisition-roadmap" className="group block py-5 border-b border-gray-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Business Services</p>
                  <h3 className="text-base font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors">Building an Acquisition Roadmap</h3>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#051c2c] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light text-white mb-3">Planning an acquisition?</h2>
          <p className="text-white/60 mb-6">Let's discuss how we can help you find, evaluate, and close the right deal.</p>
          <a href="mailto:admin@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry" className="inline-flex items-center gap-2 bg-white text-[#051c2c] px-6 py-3 font-medium hover:bg-gray-100 transition-colors text-sm">
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-4 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
