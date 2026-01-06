import React from 'react';
import { Link } from 'react-router-dom';

export default function CarRentalCaseStudyPage() {
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
              From Operations to Ownership
            </h1>
            <p className="text-gray-300 text-sm">
              Enabling car rental executives to acquire a franchise of a major global brand.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">Travel & Car Rental</span></div>
          <div><span className="text-gray-500">Duration:</span> <span className="font-medium text-[#0D3BC3]">6 months</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#0D3BC3]">1 Managing Director, 1 Vice President</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Corporate Development, Investor Relations</span></div>
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
              An independent sponsor team of car rental executives had <strong>deep operational expertise</strong> and a vision to acquire a franchise. However, they lacked:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Dedicated deal resources</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Financial modeling expertise</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Capital structuring experience</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Investor outreach capabilities</li>
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
              We partnered to lead critical aspects of the transaction:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Valuation & financial modeling</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Capital structuring & investor outreach</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Due diligence coordination</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Transaction execution support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <p className="text-gray-600 mb-6 text-sm">
            To support the independent sponsor team, we developed key financial tools and structured a financing approach:
          </p>
          <div className="space-y-3">
            {[
              { title: "Built a Detailed Bottom-Up Financial Model", desc: "Developed a granular model segmented by location, business line (insurance, maintenance), and key KPIs (such as revenue per car, revenue per transaction, and cost per transaction). This allowed the operations team to evaluate the business through their operational framework and assess where their strategic vision could enhance value." },
              { title: "Developed a BI Dashboard for Data-Driven Decision-Making", desc: "Created an interactive business intelligence (BI) dashboard that provided insights the independent sponsor team hadn't planned for. This helped the management team effectively communicate their value-creation strategy to investors." },
              { title: "Structured a Tax-Advantaged Financing Strategy", desc: "Identified a tax exchange opportunity that enabled the business to refinance its car fleet at a higher loan-to-value (LTV) ratio. This significantly reduced the equity capital required from investors. We also assisted in negotiating financing terms with alternative fleet lenders, further optimizing the capital structure." },
              { title: "Enhanced Investor Confidence & Negotiated Terms", desc: "The granular insights from our financial model and BI dashboard allowed the investor to better understand the business than the existing management. Armed with this data, they successfully convinced investors of the superior returns their operational strategies could generate and secured favorable investment terms." }
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
            The operations team secured multiple investors for both fleet financing and equity investment, allowing them to submit a credible and competitive bid for the franchise. The financial model and KPI dashboards developed were transitioned into the operational foundation for managing the business post-acquisition. By minimizing the required equity investment and showcasing strong upside potential, the sponsor team positioned themselves to generate significant long-term value as operators.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Multiple Investors Secured</span>
              </div>
              <p className="text-xs text-gray-600">Fleet financing and equity investment enabled credible competitive bid</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Operational Foundation</span>
              </div>
              <p className="text-xs text-gray-600">Financial model and dashboards transitioned to post-acquisition management tools</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Long-Term Value</span>
              </div>
              <p className="text-xs text-gray-600">Minimized equity investment while demonstrating strong upside potential</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Make the Leap to Ownership?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how we can support your acquisition journey.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
