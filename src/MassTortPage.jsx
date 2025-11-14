import React from 'react';

export default function MassTortPage({ navigateToPage, scrollToSection }) {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mass Tort Services</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-8">
            Operational infrastructure and financial intelligence for law firms handling mass tort litigation at scale
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a 
              href="#lifecycle" 
              onClick={(e) => { e.preventDefault(); scrollToSection('lifecycle'); }}
              className="inline-block bg-yellow-600 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Transform Your Mass Tort Operations</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Most mass tort practices struggle with operational chaos: disorganized case intake, inconsistent medical review, manual document workflows, and inability to respond quickly to defense data requests. These inefficiencies drive up OpEx, slow settlement cycles, and undermine negotiation leverage.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            We build the operational and data infrastructure that eliminates these bottlenecks—delivering faster case throughput, lower costs, and the portfolio analytics defense teams respect.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-6 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Mass Tort Case Lifecycle Coverage</h3>
            <p className="text-sm text-gray-600">We optimize 6 of 9 critical stages</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="px-3 py-1.5 bg-gray-300 rounded text-center opacity-60 min-w-[90px]">
              <div className="text-xs font-medium text-gray-600">1. Lead Acq.</div>
            </div>
            <span className="text-gray-400 text-sm">→</span>
            
            <div className="px-3 py-1.5 bg-blue-900 rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">2. Quality</div>
            </div>
            <span className="text-blue-900 text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-blue-900 rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">3. QA</div>
            </div>
            <span className="text-blue-900 text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-blue-900 rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">4. Comms</div>
            </div>
            <span className="text-blue-900 text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-blue-900 rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">5. Medical</div>
            </div>
            <span className="text-blue-900 text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-blue-900 rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">6. Doc Intel</div>
            </div>
            <span className="text-gray-400 text-sm">→</span>
            
            <div className="px-3 py-1.5 bg-gray-300 rounded text-center opacity-60 min-w-[90px]">
              <div className="text-xs font-medium text-gray-600">7. Analytics</div>
            </div>
            <span className="text-gray-400 text-sm">→</span>
            
            <div className="px-3 py-1.5 bg-gray-300 rounded text-center opacity-60 min-w-[90px]">
              <div className="text-xs font-medium text-gray-600">8. Settlement</div>
            </div>
            <span className="text-gray-400 text-sm">→</span>
            
            <div className="px-3 py-1.5 bg-gray-300 rounded text-center opacity-60 min-w-[90px]">
              <div className="text-xs font-medium text-gray-600">9. Post-Settle</div>
            </div>
          </div>
        </div>
      </div>

      <div id="lifecycle" className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">Mass Tort Case Lifecycle Services</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Our comprehensive solutions for each critical stage</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Case Intake & Qualification</h3>
              <p className="text-gray-700 mb-4">Streamline initial screenings and eliminate bad cases early.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Custom intake forms</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Automated scoring logic</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Decision trees for routing</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Document Intelligence</h3>
              <p className="text-gray-700 mb-4">Convert documents to structured data, respond to defense in hours.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> OCR and parsing</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Automated extraction</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Portfolio analytics</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Medical Review & Tiering</h3>
              <p className="text-gray-700 mb-4">Standardize medical review and accelerate settlement negotiations.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> AI-assisted review</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Consistent tier assignment</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Audit trail documentation</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Workflow Automation</h3>
              <p className="text-gray-700 mb-4">Eliminate rework and maintain complete audit trails.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Version control</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Status tracking</li>
                <li className="flex items-center gap-2"><span className="text-blue-900">✓</span> Automated reminders</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-8 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
              <p className="text-xl mb-10 opacity-90">
                Schedule a 30-minute consultation to discuss your specific challenges.
              </p>
              <a 
                href="mailto:contact@northcastleconsulting.com?subject=Mass%20Tort%20Services%20Inquiry" 
                className="inline-block bg-yellow-600 text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
              >
                Contact Us Today
              </a>
              <p className="text-sm mt-6 opacity-75">
                We'll respond within 1 business day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
