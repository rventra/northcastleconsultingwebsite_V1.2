import React from 'react';
import { Link } from 'react-router-dom';

export default function TargetIdentificationCaseStudyPage() {
  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-[#0D3BC3] py-2 px-6">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Corporate Development
          </a>
        </div>
      </div>

      {/* Compact Hero */}
      <div className="bg-[#0D3BC3] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-2 py-1 rounded mb-3">
              CORPORATE DEVELOPMENT
            </span>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Building an Acquisition Roadmap
            </h1>
            <p className="text-gray-300 text-sm">
              Target identification for a PE-backed consulting firm seeking growth through acquisitions.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">Consulting & Business Services</span></div>
          <div><span className="text-gray-500">Duration:</span> <span className="font-medium text-[#0D3BC3]">2 months</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#0D3BC3]">1 Director, 1 Vice President</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Corporate Development</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-50 py-10 px-6 md:px-10">
          <div className="max-w-md ml-auto">
            <h2 className="text-lg font-bold text-[#0D3BC3] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#0D3BC3] text-white rounded text-xs flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A PE-backed consulting firm sought to grow through acquisitions but <strong>lacked a clear picture</strong> of the investment universe:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> No systematic targeting approach</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Struggled to prioritize opportunities</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Unable to move efficiently on deals</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Needed repeatable M&A framework</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0D3BC3] py-10 px-6 md:px-10 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#EDB624] text-[#1A2234] rounded text-xs flex items-center justify-center">2</span>
              Our Solution
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              We developed a comprehensive target identification framework:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Market landscape analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Target universe development</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Prioritization framework</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Outreach strategy creation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <p className="text-gray-600 mb-6 text-sm">
            We worked closely with the client to develop a data-driven acquisition framework that aligned with their strategic goals:
          </p>
          <div className="space-y-3">
            {[
              { title: "Developed a Comprehensive Market Map", desc: "Built a broad initial list of firms within the investment universe, refining the list through stakeholder feedback and multiple iterations." },
              { title: "Enriched Data for Target Evaluation", desc: "Leveraged publicly available data to estimate firm size, revenue potential, and valuation ranges based on headcount and market positioning. Focused on keeping data clean and used each target's service offerings to assess synergies and competitive positioning." },
              { title: "Refined the Acquisition Criteria", desc: "Worked with the client to clarify their acquisition thesis, determining whether they sought new service lines or firms with overlapping expertise to expand their customer base." },
              { title: "Talent Pool & Expertise Analysis", desc: "Analyzed bios/ographies at target firms to evaluate how they complemented the client's workforce and identified potential gaps or strengths in high-value services." },
              { title: "Client Base & Positioning", desc: "Reviewed case studies and marketing materials from potential targets to assess client overlap and determine whether they sought new service lines or firms with overlapping expertise." },
              { title: "Target Ranking & Prioritization", desc: "Established a ranking system based on geographic footprint, client alignment, service compatibility, and employee size, creating a shortlist of high-priority acquisition targets." },
              { title: "Facilitated Initial Outreach", desc: "Provided detailed information on each target to support early engagement efforts, ensuring the client was prepared for the next phase of discussions." }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#0D3BC3]">
                <h3 className="text-sm font-bold text-[#0D3BC3] mb-1.5">○ {step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-4">The Results</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            The firm used the initial target list to gain a clearer understanding of the market landscape and refine its long-term acquisition strategy. Based on our analysis, the firm provided specific guidance on preferred target types, enabling us to build a more focused investment list with deeper diligence. The ongoing target list now serves as a resource for both competitive intelligence and long-term M&A planning, supporting the firm's ability to track potential acquisitions and industry shifts over time.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Clear Market Understanding</span>
              </div>
              <p className="text-xs text-gray-600">Comprehensive view of acquisition landscape with prioritized pipeline</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Refined Strategy</span>
              </div>
              <p className="text-xs text-gray-600">Specific guidance on target types enabled focused investment approach</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Ongoing Resource</span>
              </div>
              <p className="text-xs text-gray-600">Target list serves as foundation for competitive intelligence and M&A planning</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Looking to Build Your Acquisition Pipeline?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how we can help identify and prioritize your targets.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Target%20Identification%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
