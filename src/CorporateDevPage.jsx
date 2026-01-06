import React from 'react';
import { Link } from 'react-router-dom';

export default function CorporateDevPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-4">Family Office & Independent Sponsor</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Corporate Development
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            End-to-end M&A support from target identification through closing. We help independent sponsors and family offices execute acquisitions with the rigor of institutional buyers.
          </p>
        </div>
      </div>

      {/* The Challenge */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">The Challenge</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-8">Why M&A is hard without a team</h2>

          <p className="text-[#1A2234]/60 leading-relaxed mb-8 text-lg">
            Independent sponsors and family offices often have deep industry expertise and clear investment theses—but lack the dedicated resources to execute. Sourcing targets, running diligence, and managing a process takes bandwidth that operators don't have.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Target Identification</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Building a qualified pipeline requires systematic research and sustained outreach.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Diligence Depth</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Missed risks in diligence become expensive problems post-close.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Process Management</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Deals require coordination across legal, financial, and operational workstreams.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Credibility Gap</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Sellers and intermediaries take process-ready buyers more seriously.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Our Approach */}
      <div className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Our Approach</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-12">How we support acquisitions</h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">01</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Target Screening</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Define criteria, map the landscape, and build a prioritized pipeline of actionable targets.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">02</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Preliminary Analysis</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Quick-turn assessment of fit, valuation range, and key risks before committing resources.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">03</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Due Diligence</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Comprehensive financial, operational, and commercial diligence to validate the thesis and size risks.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#0D3BC3] font-bold text-lg">04</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2234] mb-2">Transaction Execution</h3>
                <p className="text-[#1A2234]/60 leading-relaxed">Support through LOI, purchase agreement, and closing—coordinating workstreams and managing the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-[#0D3BC3] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-lg">
            We've helped independent sponsors and family offices close acquisitions across business services, healthcare, and industrial sectors.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Case Studies</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-12">Selected work</h2>

          <div className="space-y-8">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-car-rental'); }}
              className="group block border-b border-gray-200 pb-8"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#1A2234]/50 mb-2">Travel & Transportation</p>
                  <h3 className="text-xl font-semibold text-[#1A2234] group-hover:text-[#0D3BC3] transition-colors mb-2">From Operations to Ownership</h3>
                  <p className="text-[#1A2234]/60">Enabled car rental executives to acquire a franchise of a major global brand.</p>
                </div>
                <span className="text-[#0D3BC3] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }}
              className="group block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#1A2234]/50 mb-2">Business Services</p>
                  <h3 className="text-xl font-semibold text-[#1A2234] group-hover:text-[#0D3BC3] transition-colors mb-2">Building an Acquisition Roadmap</h3>
                  <p className="text-[#1A2234]/60">Target identification for a PE-backed consulting firm seeking growth through M&A.</p>
                </div>
                <span className="text-[#0D3BC3] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1A2234] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Planning an acquisition?</h2>
          <p className="text-white/60 mb-8">Let's discuss how we can help you find, evaluate, and close the right deal.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:bg-amber-300 transition-all duration-300 shadow-lg"
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
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
