import React from 'react';
import { Link } from 'react-router-dom';

export default function DataChallengedCaseStudyPage() {
  return (
    <div className="pt-16">
      {/* Hero with Background Image */}
      <div
        className="text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/747fe8f0-9a4c-4411-a7b4-927b373ac2ac/getty-images-y1mJOq-cq3Q-unsplash.jpg?format=2500w)' }}
      >
        {/* Subtle blue overlay for readability */}
        <div className="absolute inset-0 bg-[#0D3BC3]/40"></div>

        {/* Back Navigation */}
        <div className="relative z-10 py-2 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/case-studies/sell-side-readiness"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-300 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Sell-Side Readiness
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-2 py-1 rounded mb-3">
                SELL-SIDE READINESS
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Unlocking Value in a Data-Challenged Business Sale
              </h1>
              <p className="text-gray-300 text-sm">
                Transforming a stalled year-long sale process into a successful exit for a vending & catering company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">Business Services (Vending & Catering)</span></div>
          <div><span className="text-gray-500">Duration:</span> <span className="font-medium text-[#0D3BC3]">7 months</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#0D3BC3]">1 Vice President</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Sell-Side Readiness, FP&A, Transaction DD</span></div>
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
              A PE-backed vending and catering company faced significant obstacles completing its sale. Despite <strong>a year of effort</strong> by the investment banker:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Understaffed finance department</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Fragmented legacy systems</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Incomplete post-acquisition integrations</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Unable to present confidently to market</li>
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
              We served as a strategic finance partner, working alongside the CFO to extract, organize, and analyze critical data:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Site conversion analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Same store growth review</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Pricing, volume, mix analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> CapEx ROI assessment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Working alongside the CFO as a strategic finance partner, we executed six targeted analytical initiatives to organize the business narrative and prepare for buyer diligence:
          </p>
          <div className="space-y-3">
            {[
              { title: "Site Conversion Analysis", desc: "Examined the conversion of vending locations to higher-revenue full-service cafeterias. Analyzed conversion economics, ranked non-converted sites by revenue potential, and demonstrated the value creation opportunity from continued conversions." },
              { title: "Same Store Growth Review", desc: "Built cohort analyses showing revenue growth at established locations over multiple years. Demonstrated the company's strategic shift toward higher-margin, recession-resistant cafeteria services, providing confidence in revenue sustainability." },
              { title: "Pricing, Volume, and Mix Analysis", desc: "Isolated the drivers of revenue growth by separating price increases from volume expansion and product mix shifts. Proved that customer count expansion, not just price increases, fueled growth—a key indicator of business health." },
              { title: "CapEx ROI Assessment", desc: "Evaluated the return on investment for site conversion buildouts and equipment maintenance. Showed that capital investments generated attractive returns and supported the company's growth strategy." },
              { title: "Staffing Profitability Analysis", desc: "Allocated personnel costs to business units and geographic regions to identify optimal staffing levels. Provided insights into operational efficiency and areas for margin improvement." },
              { title: "Route Effectiveness Review", desc: "Analyzed logistics efficiency and created a roadmap for integrating recently acquired locations into the company's route structure. Identified cost savings opportunities and operational synergies." }
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
            The sale that had stalled for over a year successfully closed within seven months of our engagement. Our structured analytical approach transformed disorganized financial data into a compelling business narrative, enabling management to confidently respond to buyer questions and the investment bank to focus on transaction execution rather than data remediation. The comprehensive analyses we developed facilitated a smooth due diligence process and demonstrated the company's true value drivers despite its initial data challenges.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Successful Exit in 7 Months</span>
              </div>
              <p className="text-xs text-gray-600">Transaction completed after year-long stall, overcoming financial disorganization</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Bank Focus Restored</span>
              </div>
              <p className="text-xs text-gray-600">Investment bank able to focus on transaction execution vs. data remediation</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Compelling Narrative</span>
              </div>
              <p className="text-xs text-gray-600">Transformed disorganized data into clear story demonstrating true value drivers</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Facing Data Challenges in Your Exit?</h2>
          <p className="text-gray-400 text-sm mb-6">Don't let disorganized data derail your transaction. Let's discuss how we can help.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Data%20Challenges%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
