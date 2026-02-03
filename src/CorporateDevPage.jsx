import React from 'react';
import { Link } from 'react-router-dom';

export default function CorporateDevPage() {
  return (
    <div className="pt-16">
      {/* Hero - Consistent with homepage */}
      <div className="bg-[#051c2c] text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">Family Office & Independent Sponsor</p>
          <h1 className="text-3xl md:text-4xl font-normal mb-4 leading-tight">
            Corporate Development
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            End-to-end M&A support from target identification through closing. We help independent sponsors and family offices execute acquisitions with the rigor of institutional buyers.
          </p>
        </div>
      </div>

      {/* The Challenge - Reduced spacing */}
      <div className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">The Challenge</span>
          <h2 className="text-2xl font-normal text-[#051c2c] mt-2 mb-6">Why M&A is hard without a team</h2>

          <p className="text-[#051c2c]/70 leading-relaxed mb-8">
            Independent sponsors and family offices often have deep industry expertise and clear investment theses—but lack the dedicated resources to execute. Sourcing targets, running diligence, and managing a process takes bandwidth that operators don't have.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Target Identification</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Building a qualified pipeline requires systematic research and sustained outreach.</p>
            </div>
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Diligence Depth</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Missed risks in diligence become expensive problems post-close.</p>
            </div>
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Process Management</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Deals require coordination across legal, financial, and operational workstreams.</p>
            </div>
            <div className="p-4 bg-[#f5f5f5]">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Credibility Gap</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Sellers and intermediaries take process-ready buyers more seriously.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach - Reduced spacing */}
      <div className="py-12 md:py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Our Approach</span>
          <h2 className="text-2xl font-normal text-[#051c2c] mt-2 mb-8">How we support acquisitions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Target Screening</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Define criteria, map the landscape, and build a prioritized pipeline of actionable targets.</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Preliminary Analysis</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Quick-turn assessment of fit, valuation range, and key risks before committing resources.</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Due Diligence</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Comprehensive financial, operational, and commercial diligence to validate the thesis and size risks.</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium text-[#051c2c] mb-2">Transaction Execution</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">Support through LOI, purchase agreement, and closing—coordinating workstreams and managing the process.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner - Consistent */}
      <div className="bg-[#051c2c] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80">
            We've helped independent sponsors and family offices close acquisitions across business services, healthcare, and industrial sectors.
          </p>
        </div>
      </div>

      {/* Case Studies - Reduced spacing */}
      <div className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Case Studies</span>
          <h2 className="text-2xl font-normal text-[#051c2c] mt-2 mb-8">Selected work</h2>

          <div className="space-y-4">
            <Link
              to="/case-studies/corporate-operations-to-ownership"
              className="group block border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Travel & Transportation</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">From Operations to Ownership</h3>
                  <p className="text-[#051c2c]/60 text-sm">Enabled car rental executives to acquire a franchise of a major global brand.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              to="/case-studies/corporate-acquisition-roadmap"
              className="group block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[#051c2c]/50 mb-1">Business Services</p>
                  <h3 className="text-lg font-medium text-[#051c2c] group-hover:text-[#2563EB] transition-colors mb-1">Building an Acquisition Roadmap</h3>
                  <p className="text-[#051c2c]/60 text-sm">Target identification for a PE-backed consulting firm seeking growth through M&A.</p>
                </div>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA - Consistent */}
      <div className="bg-[#051c2c] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-normal text-white mb-3">Planning an acquisition?</h2>
          <p className="text-white/60 mb-6">Let's discuss how we can help you find, evaluate, and close the right deal.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
            className="inline-flex items-center gap-2 bg-white text-[#051c2c] px-6 py-3 rounded font-medium hover:bg-[#2563EB] hover:text-white transition-all duration-300 text-sm"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
