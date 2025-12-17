import React from 'react';

export default function BuildingCredibilityPage({ navigateToPage }) {
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
          <div><span className="text-[#1A2234]/60">Team:</span> <span className="font-semibold text-[#1A2234]">1 Director, 1 VP</span></div>
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
      <div className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-8 text-center">Three Critical Analyses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Contract Leverage Analysis", desc: "Audited agreements, analyzed KPIs, built models with dozens of agreements to demonstrate strength of terms over time." },
              { title: "Cap Ex ROI Analysis", desc: "Developed detailed model isolating investment decisions from market cycles for clear long-term return assessment." },
              { title: "Operational Benchmarking", desc: "Benchmarked KPIs and financial performance before and after management takeover to prove improvements." }
            ].map((step, i) => (
              <div key={i} className="bg-[#F6F7F7] rounded-xl p-6 border-t-4 border-[#0D3BC3]">
                <div className="w-10 h-10 bg-[#0D3BC3]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#0D3BC3] font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1A2234] mb-3">{step.title}</h3>
                <p className="text-[#1A2234]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-16 md:py-20 px-6 bg-[#F6F7F7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-8 text-center">The Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</span>
                <span className="font-bold text-[#1A2234]">Premium Exit</span>
              </div>
              <p className="text-[#1A2234]/70 leading-relaxed">Successfully justified high EBITDA multiple with data</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</span>
                <span className="font-bold text-[#1A2234]">Management Focus</span>
              </div>
              <p className="text-[#1A2234]/70 leading-relaxed">CFO and sponsor freed to focus on strategic aspects</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</span>
                <span className="font-bold text-[#1A2234]">Lasting Value</span>
              </div>
              <p className="text-[#1A2234]/70 leading-relaxed">Contract model adopted for future negotiations post-sale</p>
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
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg text-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
