import React from 'react';
import { Link } from 'react-router-dom';

export default function DividendRecapPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-4">Private Equity Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dividend Recapitalization
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Return capital to investors while retaining ownership and control. We help sponsors evaluate and execute dividend recaps with confidence.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">The Opportunity</p>
              <h2 className="text-3xl font-bold text-[#1A2234] mb-6">Why dividend recaps</h2>
              <p className="text-[#1A2234]/60 leading-relaxed mb-6">
                Dividend recapitalizations allow PE sponsors to realize returns without selling. When a portfolio company has strong, stable cash flows and debt capacity, a recap can return capital to LPs while preserving upside.
              </p>
              <p className="text-[#1A2234]/60 leading-relaxed">
                But execution requires rigorous analysis. Lenders scrutinize cash flow sustainability, and sponsors need confidence that added leverage won't constrain future growth.
              </p>
            </div>

            <div>
              <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Key Questions</p>
              <h2 className="text-3xl font-bold text-[#1A2234] mb-6">What's at stake</h2>
              <ul className="space-y-4">
                <li className="text-[#1A2234]/60 leading-relaxed">
                  <span className="font-semibold text-[#1A2234]">Cash Flow Stability</span> — Can the business reliably service increased debt through economic cycles?
                </li>
                <li className="text-[#1A2234]/60 leading-relaxed">
                  <span className="font-semibold text-[#1A2234]">Debt Capacity</span> — What's the optimal structure that balances returns with flexibility?
                </li>
                <li className="text-[#1A2234]/60 leading-relaxed">
                  <span className="font-semibold text-[#1A2234]">Lender Confidence</span> — Is the financial story clear enough to secure favorable terms?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Our Role */}
      <div className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Our Role</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-12">How we support dividend recaps</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-[#0D3BC3] font-bold text-2xl mb-4">01</div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-3">Financial Analysis</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Deep dive into cash flow patterns, working capital dynamics, and historical performance to stress-test debt capacity.</p>
            </div>

            <div>
              <div className="text-[#0D3BC3] font-bold text-2xl mb-4">02</div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-3">Lender Materials</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Build the CIM, financial model, and supporting analyses that lenders need to underwrite the transaction.</p>
            </div>

            <div>
              <div className="text-[#0D3BC3] font-bold text-2xl mb-4">03</div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-3">Process Support</h3>
              <p className="text-[#1A2234]/60 leading-relaxed">Manage lender Q&A, coordinate diligence, and ensure the deal stays on track through closing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Prop */}
      <div className="bg-[#0D3BC3] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-white font-semibold mb-2">Management Focus</p>
              <p className="text-white/60 text-sm">Leadership stays focused on operations</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Better Terms</p>
              <p className="text-white/60 text-sm">Thorough preparation leads to competitive pricing</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Faster Execution</p>
              <p className="text-white/60 text-sm">Organized process reduces time to close</p>
            </div>
          </div>
        </div>
      </div>

      {/* When It Makes Sense */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-3">Fit Assessment</p>
          <h2 className="text-3xl font-bold text-[#1A2234] mb-8">Is a dividend recap right for you?</h2>

          <p className="text-[#1A2234]/60 leading-relaxed mb-8">
            Dividend recaps work best for portfolio companies with predictable cash flows, manageable existing leverage, and sponsors seeking liquidity without a full exit.
          </p>

          <div className="bg-[#FAFAFA] p-8 rounded-lg">
            <p className="font-semibold text-[#1A2234] mb-4">Good candidates typically have:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="text-[#1A2234]/60 flex gap-3">
                <span className="text-[#0D3BC3]">—</span>
                Stable, recurring revenue streams
              </li>
              <li className="text-[#1A2234]/60 flex gap-3">
                <span className="text-[#0D3BC3]">—</span>
                Strong EBITDA margins
              </li>
              <li className="text-[#1A2234]/60 flex gap-3">
                <span className="text-[#0D3BC3]">—</span>
                Limited existing debt
              </li>
              <li className="text-[#1A2234]/60 flex gap-3">
                <span className="text-[#0D3BC3]">—</span>
                Proven management team
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1A2234] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Considering a dividend recap?</h2>
          <p className="text-white/60 mb-8">Let's discuss whether it's the right move and how we can help.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Dividend%20Recapitalization%20Inquiry"
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
