import React from 'react';
import { Link } from 'react-router-dom';

export default function BuildingCredibilityPage() {
  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-[#0D3BC3] py-3 px-6">
        <div className="max-w-5xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#EDB624] transition-colors text-sm"
          >
            <span>←</span>
            Back to Sell-Side Readiness
          </a>
        </div>
      </div>

      {/* Compact Hero */}
      <div className="bg-[#0D3BC3] text-white py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-3 py-1.5 rounded mb-4">
              SELL-SIDE READINESS
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Building Credibility & Justifying Multiples
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              Equipping a venue management company's finance team to support a premium EBITDA valuation.
            </p>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-[#F6F7F7] py-5 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-8 text-sm">
          <div><span className="text-[#1A2234]/60">Industry:</span> <span className="font-semibold text-[#1A2234]">Leisure & Hospitality (Venue Management)</span></div>
          <div><span className="text-[#1A2234]/60">Duration:</span> <span className="font-semibold text-[#1A2234]">5 months</span></div>
          <div><span className="text-[#1A2234]/60">Team:</span> <span className="font-semibold text-[#1A2234]">1 Director, 1 Vice President</span></div>
          <div><span className="text-[#1A2234]/60">Services:</span> <span className="font-semibold text-[#1A2234]">Sell-Side Readiness, FP&A Support</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-[#F6F7F7] py-14 px-6 md:px-12">
          <div className="max-w-md ml-auto">
            <h2 className="text-xl font-bold text-[#1A2234] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#0D3BC3] text-white rounded-lg text-sm flex items-center justify-center font-bold">1</span>
              The Challenge
            </h2>
            <p className="text-[#1A2234]/70 leading-relaxed mb-5">
              A PE-backed venue management company was preparing for sale, but its finance team <strong className="text-[#1A2234]">lacked the expertise</strong> to handle complex due diligence:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[#1A2234]/70"><span className="text-[#0D3BC3] font-bold">→</span>Finance team overwhelmed with basic analysis</li>
              <li className="flex gap-3 text-[#1A2234]/70"><span className="text-[#0D3BC3] font-bold">→</span>CFO and sponsor distracted from strategy</li>
              <li className="flex gap-3 text-[#1A2234]/70"><span className="text-[#0D3BC3] font-bold">→</span>High EBITDA multiple needed data justification</li>
              <li className="flex gap-3 text-[#1A2234]/70"><span className="text-[#0D3BC3] font-bold">→</span>Buyers questioning contract strength</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0D3BC3] py-14 px-6 md:px-12 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#EDB624] text-[#1A2234] rounded-lg text-sm flex items-center justify-center font-bold">2</span>
              Our Solution
            </h2>
            <p className="text-white/80 leading-relaxed mb-5">
              We built structured analyses addressing key buyer concerns and supporting the investment thesis:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/80"><span className="text-[#EDB624] font-bold">→</span>Contract leverage & negotiation analysis</li>
              <li className="flex gap-3 text-white/80"><span className="text-[#EDB624] font-bold">→</span>Cap Ex ROI & lease obligations analysis</li>
              <li className="flex gap-3 text-white/80"><span className="text-[#EDB624] font-bold">→</span>Operational improvement benchmarking</li>
              <li className="flex gap-3 text-white/80"><span className="text-[#EDB624] font-bold">→</span>Venue performance before/after analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <p className="text-gray-600 mb-6 text-sm">
            We built three critical analyses to address buyer concerns and justify the company's premium valuation:
          </p>
          <div className="space-y-3">
            {[
              { title: "Contract Leverage & Negotiation Analysis", desc: "Conducted a comprehensive audit of venue management agreements to demonstrate the company's strong contract leverage. Analyzed key performance indicators and contract terms across dozens of agreements, building models that showed how the company had consistently improved terms over time. This analysis directly addressed buyer concerns about the strength and defensibility of the contract portfolio, providing quantitative evidence of the company's negotiating power and relationship quality with venue partners." },
              { title: "Capital Expenditure ROI & Lease Obligations Analysis", desc: "Developed a detailed financial model that isolated capital investment decisions from broader market cycles and venue performance fluctuations. This allowed us to demonstrate clear long-term returns on CapEx investments and assess the economics of lease obligations. The model provided buyers with confidence that management was making disciplined investment decisions and that capital requirements were sustainable and value-creating." },
              { title: "Operational Improvement Benchmarking", desc: "Built comprehensive before-and-after analyses comparing venue performance and key operational metrics from before the company's management takeover to current performance. Benchmarked financial results, operational KPIs, customer satisfaction scores, and efficiency metrics to prove that the company's operational improvements were real, measurable, and sustainable. This analysis justified the premium multiple by demonstrating genuine value creation capability." }
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
            The structured analyses successfully justified the company's premium EBITDA multiple, providing buyers with the quantitative evidence they needed to support the valuation. By taking on the complex analytical work, we freed the CFO and PE sponsor to focus on strategic aspects of the transaction rather than getting bogged down in detailed financial modeling. The contract leverage analysis proved particularly valuable post-transaction—the acquiring company adopted our model as their standard framework for evaluating and negotiating future venue management agreements, demonstrating the lasting impact of our work.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Premium Exit Achieved</span>
              </div>
              <p className="text-xs text-gray-600">Successfully justified high EBITDA multiple with quantitative data</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Management Focus</span>
              </div>
              <p className="text-xs text-gray-600">CFO and sponsor freed to focus on strategic transaction aspects</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Lasting Framework</span>
              </div>
              <p className="text-xs text-gray-600">Contract model adopted as standard for future venue negotiations post-sale</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1A2234] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Justify Your Multiple?</h2>
          <p className="text-white/80 text-lg mb-8">Let's discuss how our structured approach can support your exit.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 hover:shadow-xl transition-all duration-300 shadow-lg text-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
