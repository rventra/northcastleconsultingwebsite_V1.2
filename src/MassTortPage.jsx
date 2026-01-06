import React from 'react';
import { Link } from 'react-router-dom';

export default function MassTortPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#0D3BC3] text-white py-12 md:py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Mass Tort Services</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Operational infrastructure and financial intelligence for law firms handling mass tort litigation at scale
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a
              href="#lifecycle"
              onClick={(e) => { e.preventDefault(); scrollToSection('lifecycle'); }}
              className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg text-lg"
            >
              Explore Our Solutions
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('newsletter-blog'); }}
              className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg text-lg"
            >
              Newsletter & Blog
            </a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3BC3] mb-4">Transform Your Mass Tort Operations</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Most mass tort practices struggle with operational chaos: disorganized case intake, inconsistent medical review, manual document workflows, and inability to respond quickly to defense data requests.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mt-3">
            We build the operational and data infrastructure that eliminates these bottlenecks—delivering faster case throughput, lower costs, and the portfolio analytics defense teams respect.
          </p>
        </div>
      </div>

      {/* Lifecycle Visual */}
      <div className="bg-gray-50 py-6 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-[#0D3BC3] mb-1">Mass Tort Case Lifecycle Coverage</h3>
            <p className="text-sm text-gray-600">We optimize 6 of 9 critical stages</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="px-3 py-1.5 bg-gray-300 rounded text-center opacity-60 min-w-[90px]">
              <div className="text-xs font-medium text-gray-600">1. Lead Acq.</div>
            </div>
            <span className="text-gray-400 text-sm">→</span>
            
            <div className="px-3 py-1.5 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">2. Quality</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">3. QA</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">4. Comms</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[90px]">
              <div className="text-xs font-semibold text-white">5. Medical</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">→</span>
            
            <div className="px-3 py-1.5 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[90px]">
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

      {/* Lifecycle Overview */}
      <div id="lifecycle" className="bg-white py-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0D3BC3] mb-4 text-center">Mass Tort Case Lifecycle Services</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Click any stage below to learn how we optimize your operations and accelerate outcomes</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <a 
              href="#stage-1" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-1'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 1</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Case Intake & Pre-Qualification</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Streamline initial screenings, eliminate bad cases early, reduce downstream rework</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Bad case rejection rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Intake cycle time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Downstream rework</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-[#0D3BC3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </a>

            {/* Stage 2 */}
            <a 
              href="#stage-2" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-2'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 2</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Docket QA & Deficiency Curing</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Verify criteria, cure gaps, reject/replace non-conforming cases before they clog your docket</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Docket compensability rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Average settlement value</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Time to settlement</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 3 */}
            <a 
              href="#stage-3" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-3'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 3</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Automated Claimant Communication</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Keep clients engaged for years with multi-channel, low-touch, high-scale outreach</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Claimant response rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Document cycle time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Case completion rate</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 4 */}
            <a 
              href="#stage-4" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-4'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 4</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Intelligent Medical Record Review</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">AI-assisted lens-based review turns records into defensible, negotiable evidence</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Medical review time/case</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Reviewer productivity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Negotiation strength</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 5 */}
            <a 
              href="#stage-5" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-5'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 5</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Medical Review & Tier Assignment</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Standardize medical review, eliminate tier disputes, accelerate settlement negotiations</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Tier consistency</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Defense tier disputes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Settlement velocity</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 6 */}
            <a 
              href="#stage-6" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-6'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 6</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Workflow Tracking & Version Control</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Eliminate rework, maintain audit trails, coordinate multi-party document workflows</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Rework elimination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Audit trail quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">AI efficiency gains</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 7 */}
            <a 
              href="#stage-7" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-7'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 7</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Document Intelligence & Data Extraction</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Convert documents to structured data, eliminate strike teams, respond to defense in hours</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">TAT: weeks → hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">OpEx -$50k-$100k/cycle</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Valuation accuracy</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Detailed Stage Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Stage 1 Details */}
        <div id="stage-1" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 1</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">Case Intake & Pre-Qualification</h2>
            <p className="text-xl opacity-90">Streamline initial screenings, eliminate bad cases early, reduce downstream rework</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most firms lack structured intake questionnaires, leading to incomplete information, inconsistent screening, and bad cases slipping through. Result: wasted staff time on non-viable cases, higher rejection rates downstream, and OpEx bloat.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Design custom intake forms:</strong> Capture all critical data points upfront</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Build automated scoring logic:</strong> Flag weak cases immediately based on exposure, diagnosis, statute of limitations</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Create decision trees:</strong> Route borderline cases to senior review; auto-reject clear non-qualifiers</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Track rejection reasons:</strong> Identify patterns (e.g. weak diagnosis criteria, expired statutes) and refine lead sources</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Reduced bad case intake by 30-50%</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Faster pre-qualification decisions</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Lower downstream rework costs</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Data-driven lead source optimization</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 2 Details */}
        <div id="stage-2" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 2</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">Case Prioritization & Resource Allocation</h2>
            <p className="text-xl opacity-90">Focus staff on high-value cases, reduce wasted effort, accelerate settlements</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Without prioritization frameworks, firms treat all cases equally—burning staff hours on low-value matters while high-value cases languish. Settlement velocity suffers, and ROI on case investment drops.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Build value scoring models:</strong> Estimate settlement potential based on diagnosis severity, exposure strength, jurisdiction, demographics</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Segment case portfolio:</strong> Tier 1 (high value, strong facts) gets priority; Tier 3 (weak facts) gets minimal investment</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Allocate staff strategically:</strong> Senior paralegals on Tier 1; junior staff on Tier 3; automation on routine tasks</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Monitor velocity by tier:</strong> Track time-to-settlement and adjust resource allocation to maximize throughput</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 25-40% increase in high-value case focus</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Faster settlement velocity for top-tier cases</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Reduced wasted effort on low-value cases</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Improved staff utilization and morale</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 3 Details */}
        <div id="stage-3" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 3</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">Document Collection & Deficiency Management</h2>
            <p className="text-xl opacity-90">Eliminate chase emails, automate reminders, reduce document collection time by 40%</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Document collection is a massive time sink: paralegals send repeated emails chasing claimants for medical records, affidavits, and proof of exposure. Cases stall for months waiting on missing documents. Manual tracking in spreadsheets creates errors and lost follow-ups.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Automated deficiency tracking:</strong> System identifies missing documents and flags cases requiring follow-up</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Scheduled reminder workflows:</strong> Auto-send emails/texts to claimants at intervals (Day 7, Day 14, Day 21)</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Claimant self-service portals:</strong> Let claimants upload documents directly, reducing paralegal coordination effort</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Escalation logic:</strong> After X reminders with no response, flag for paralegal intervention or case closure review</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 40% reduction in document collection time</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Eliminated manual chase emails</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Higher claimant response rates</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Faster case progression to settlement-ready status</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 4 Details */}
        <div id="stage-4" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 4</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">OCR, Document Parsing & Indexing</h2>
            <p className="text-xl opacity-90">Make all documents searchable, eliminate manual file hunting, enable instant retrieval</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Medical records and case files arrive as scanned PDFs with no text layer. Staff spend hours manually searching through documents to find specific diagnoses, test results, or exposure details. When defense requests specific information, teams must manually review hundreds of files.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>OCR all documents:</strong> Convert scanned PDFs to searchable text</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Auto-classify document types:</strong> Identify medical records, pathology reports, imaging results, affidavits automatically</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Build searchable index:</strong> Full-text search across entire case portfolio in seconds</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Tag key entities:</strong> Automatically identify and tag diagnoses, dates, provider names, medications</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 90% reduction in document search time</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Instant response to defense document requests</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Eliminated manual file hunting</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Foundation for AI-powered analysis and extraction</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 5 Details */}
        <div id="stage-5" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 5</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">Medical Review & Tier Assignment</h2>
            <p className="text-xl opacity-90">Standardize medical review, eliminate tier disputes, accelerate settlement negotiations</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Inconsistent medical review creates tier assignment disputes with defense counsel, delaying settlements. Manual review processes are slow, costly, and prone to human error. Without standardized schemas, firms can't prove their tier definitions to skeptical defense teams.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Build custom medical review schemas:</strong> Define tier criteria with specific diagnostic requirements, imaging findings, pathology results</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>AI-assisted review:</strong> Extract key medical data points automatically, flag cases for human QA</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Standardized tier assignment:</strong> Apply consistent logic across all cases to eliminate reviewer bias</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Audit trail documentation:</strong> Capture rationale for each tier decision with supporting evidence references</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Eliminated tier assignment disputes with defense</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 50-70% faster medical review cycle time</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Consistent, defensible tier definitions</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Accelerated settlement negotiations</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 6 Details */}
        <div id="stage-6" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 6</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">Workflow Tracking & Version Control</h2>
            <p className="text-xl opacity-90">Eliminate rework, maintain audit trails, coordinate multi-party document workflows</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Documents get uploaded, reviewed, revised, and re-uploaded with no version control. Result: staff work from outdated files, duplicate effort, and audit trail gaps that defense counsel exploits during discovery.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Implement version control:</strong> Every document gets version number, timestamp, uploader ID, approval status</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Define workflow states:</strong> Draft → Pending Review → Approved → Current vs. Superseded</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Integrate with downstream stages:</strong> Medical Review and Document Intelligence only process "Approved, Current" versions</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Build status dashboards:</strong> Case-level and portfolio-level views of bottlenecks and deadline risks</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Eliminated rework from version confusion</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Defensible audit trails for discovery</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 80% AI automation of completeness checks</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Clear visibility into workflow bottlenecks</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 7 Details */}
        <div id="stage-7" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-8 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 7</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">Document Intelligence & Data Extraction</h2>
            <p className="text-xl opacity-90">Convert documents to structured data, eliminate strike teams, respond to defense in hours not weeks</p>
          </div>
          <div className="bg-white p-8 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Key evidence lives in PDFs with no linkage to structured data. When defense requests portfolio-level cuts, firms resort to costly "strike teams" manually extracting data into spreadsheets. Cost: $50k-$100k per defense request. Timeline: 2-4 weeks.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Centralize and link artifacts:</strong> Every document linked to case ID in centralized repository</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Extract critical fields:</strong> Convert exposure proof, certifications, employment records to queryable database</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Pair with medical schema:</strong> Create comprehensive case profiles for advanced tier logic</span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Build on-demand exports:</strong> Query database to generate defense data rooms in hours, not weeks</span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Defense response time: weeks → hours</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> $50k-$100k strike team cost savings per cycle</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Portfolio-level analytics and scenario modeling</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Custom tier definitions with precision</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-[#0D3BC3] text-white py-20 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ready to Transform Your Mass Tort Practice?</h2>
          <p className="text-xl mb-10 opacity-90 text-center">
            Schedule a 30-minute consultation to discuss your specific challenges and how our solutions can help.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="john@lawfirm.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Law Firm / Company *</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Smith & Associates"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Tell us about your challenges</label>
              <textarea 
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                placeholder="Describe your current challenges with mass tort operations..."
              ></textarea>
            </div>


            <a  href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Mass%20Tort%20Services%20Inquiry"
              className="block w-full text-center bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Interest
            </a>

            <p className="text-sm text-center mt-4 opacity-75">
              We'll respond within 1 business day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
