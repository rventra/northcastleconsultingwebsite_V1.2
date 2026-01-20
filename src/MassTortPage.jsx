import React from 'react';
import { Link } from 'react-router-dom';

export default function MassTortPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#0D3BC3] text-white py-12 md:py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">End-to-End Litigation Intelligence: 8-Stage Platform</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
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
            <Link
              to="/newsletter"
              className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg text-lg"
            >
              Newsletter & Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3BC3] mb-4">Transform Your Mass Tort Operations</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Most mass tort practices struggle with operational chaos: disorganized case intake, inconsistent medical review, manual document workflows, and inability to respond quickly to defense data requests.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mt-2">
            We build the operational and data infrastructure that eliminates these bottlenecks—delivering faster case throughput, lower costs, and the portfolio analytics defense teams respect.
          </p>
        </div>
      </div>

      {/* Lifecycle Visual */}
      <div className="bg-gray-50 py-4 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-[#0D3BC3] mb-1">End-to-End Litigation Intelligence: 8-Stage Platform</h3>
            <p className="text-sm text-gray-600">We optimize 8 of 9 critical stages</p>
          </div>
          
          <div className="flex items-center justify-center gap-1 flex-wrap">
            <div className="px-2 py-1 bg-gray-300 rounded text-center opacity-60 min-w-[80px]">
              <div className="text-xs font-medium text-gray-600">1. Lead Acq.</div>
            </div>
            <span className="text-gray-400 text-sm">—</span>
            
            <div className="px-2 py-1 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[80px]">
              <div className="text-xs font-semibold text-white">2. Quality</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">—</span>
            
            <div className="px-2 py-1 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[80px]">
              <div className="text-xs font-semibold text-white">3. QA</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">—</span>
            
            <div className="px-2 py-1 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[80px]">
              <div className="text-xs font-semibold text-white">4. Comms</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">—</span>
            
            <div className="px-2 py-1 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[80px]">
              <div className="text-xs font-semibold text-white">5. Medical</div>
            </div>
            <span className="text-[#0D3BC3] text-sm font-bold">—</span>
            
            <div className="px-2 py-1 bg-[#0D3BC3] rounded text-center shadow-sm min-w-[80px]">
              <div className="text-xs font-semibold text-white">6. Doc Intel</div>
            </div>
            <span className="text-gray-400 text-sm">—</span>
            
            <div className="px-2 py-1 bg-gray-300 rounded text-center opacity-60 min-w-[80px]">
              <div className="text-xs font-medium text-gray-600">7. Analytics</div>
            </div>
            <span className="text-gray-400 text-sm">—</span>
            
            <div className="px-2 py-1 bg-gray-300 rounded text-center opacity-60 min-w-[80px]">
              <div className="text-xs font-medium text-gray-600">8. Settlement</div>
            </div>
            <span className="text-gray-400 text-sm">—</span>
            
            <div className="px-2 py-1 bg-gray-300 rounded text-center opacity-60 min-w-[80px]">
              <div className="text-xs font-medium text-gray-600">9. Post-Settle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Overview */}
      <div id="lifecycle" className="bg-white py-12 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0D3BC3] mb-4 text-center">Mass Tort Case Lifecycle Services</h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Click any stage below to learn how we optimize your operations and accelerate outcomes</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stage 1 - Combined Intake & Dock QA */}
            <a 
              href="#stage-1" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-1'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 1</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Intake & Dock QA Overview</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Streamline intake screening and dock qualification in unified workflow</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Dock comp rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Bad case rejection rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Time to settlement</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-[#0D3BC3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </a>

            {/* Stage 2 - Former Stage 3 */}
            <a 
              href="#stage-2" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-2'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 2</span>
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
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Document cycle time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Case completion rate</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 3 - Former Stage 4 */}
            <a 
              href="#stage-3" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-3'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 3</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Injury Confirmation with AI Medical Record Review</h4>
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
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 4 - Former Stage 5 */}
            <a 
              href="#stage-4" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-4'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 4</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Docket Tiering & Valuation</h4>
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
                    <span className="font-medium">Portfolio forecast accuracy</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 5 - Former Stage 6 */}
            <a 
              href="#stage-5" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-5'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 5</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Workflow Tracking & Version Control</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Eliminate rework, maintain audit trails, coordinate multi-party document workflows</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
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
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 6 - Former Stage 7 */}
            <a 
              href="#stage-6" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-6'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 6</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">OCR & Unstructured Data Conversion</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Medical-grade OCR with structured data pipelines</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">TAT: weeks → hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Strike team cost: $50k-$100k</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">90% time reduction vs. manual extraction</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[#0D3BC3] font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Stage 7 - New Dashboard section */}
            <a 
              href="#stage-7" 
              onClick={(e) => { e.preventDefault(); scrollToSection('stage-7'); }} 
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0D3BC3] transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D3BC3] opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#0D3BC3] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">STAGE 7</span>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">→</div>
                </div>
                <h4 className="text-2xl font-bold text-[#0D3BC3] mb-3 group-hover:text-[#0D3BC3] transition-colors">Dashboarding & Data Portals</h4>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">Real-time portfolio analytics and claimant self-service</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↓</span>
                    <span className="font-medium">Manual reporting time 90%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">24/7 claimant engagement</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#0D3BC3] font-bold text-lg">↑</span>
                    <span className="font-medium">Portfolio forecast accuracy 90%</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
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
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Stage 1 Details - Combined Intake & Dock QA */}
        <div id="stage-1" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 1</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">Intake & Dock QA Overview</h2>
            <p className="text-xl opacity-90">Streamline intake screening and dock qualification in unified workflow</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most firms lack structured intake questionnaires and standardized dock verification processes, leading to inconsistent case evaluation and resource drain from pursuing poor-quality leads.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Capture all critical data points upfront with custom intake forms</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Flag weak cases based on exposure, diagnosis, statute of limitations within 24 hours</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Automatically verify criteria and cure deficiencies rapidly</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Score each case on completeness and medical evidence strength</strong></span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 40-60% improvement in dock compensability rate</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 30-50% bad case rejection reduction</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 50% faster pre-qualification decisions</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Data-driven lead source optimization</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 2 Details - Former Stage 3 */}
        <div id="stage-2" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 2</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">Automated Claimant Communication</h2>
            <p className="text-xl opacity-90">Keep clients engaged for years with multi-channel, low-touch, high-scale outreach</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mass tort claimants need ongoing communication for 2-5 years, but manual outreach consumes massive paralegal time. Claimants miss document deadlines, fail to respond to medical record requests, and become disengaged, dropping out before settlement. Firms spend $200-400 per case annually on manual communication tasks.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Multi-channel campaigns trigger by case milestones</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Smart scheduling based on claimant demographics and response patterns</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Secure portals enable two-way communication and case updates</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Early identification of at-risk claimants for paralegal intervention</strong></span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 60-80% claimant response rate (vs. 30-40% industry average)</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 70% reduction in document cycle time</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 85% case completion rate</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> $150-250 cost savings per case annually</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 3 Details - Former Stage 4 with injury confirmation */}
        <div id="stage-3" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 3</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">Injury Confirmation with AI Medical Record Review</h2>
            <p className="text-xl opacity-90">AI-assisted, lens-based review with flexible delivery and confounder handling</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Medical record review consumes 4-8 hours per case at $75-150/hour paralegal rates. Reviewers miss critical diagnoses, procedure dates, and causation links. Inconsistent review quality creates tier assignment disputes with defense counsel, delaying settlements by months. Additionally, handling of confounders and new developments requires rescreening.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>AI identifies 200+ medical data points (diagnoses, providers, dates, medications, injury types)</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Lens-based chronological review with causation analysis and exposure correlation</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Quality assurance focused on AI-flagged issues for senior paralegals</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Rescreening capability for new medical developments or confounder identification</strong></span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 50% reduction in medical review time per case</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 40% improvement in reviewer productivity</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Rescreening capability for new medical developments</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Defensible review process for discovery</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 4 Details - Former Stage 5 */}
        <div id="stage-4" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 4</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">Docket Tiering & Valuation</h2>
            <p className="text-xl opacity-90">Standardized medical review and predictive valuation</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Inconsistent medical review creates tier assignment disputes with defense counsel, delaying settlements. Manual review processes are slow, costly, and prone to human error. Without standardized schemas, firms can't prove their tier definitions to skeptical defense teams.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Custom medical review schemas define tier criteria with specific diagnostic requirements</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>AI-assisted extraction with predictive settlement modeling</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Consistent application of logic across all cases eliminates reviewer bias</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Documentation captures rationale for each tier decision with supporting evidence references</strong></span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Eliminated tier assignment disputes with defense</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 50-70% faster medical review cycle time</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 90% portfolio forecast accuracy</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Accelerated settlement negotiations</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 5 Details - Former Stage 6 */}
        <div id="stage-5" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 5</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">Workflow Tracking & Version Control</h2>
            <p className="text-xl opacity-90">Eliminate rework, maintain audit trails, coordinate multi-party document workflows</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Documents get uploaded, reviewed, revised, and re-uploaded with no version control. Result: staff work from outdated files, duplicate effort, and audit trial gaps that defense counsel exploits during discovery.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Every document gets version number, timestamp, uploader ID, and approval status</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Structured workflow states include Draft → Pending Review → Approved → Current vs. Superseded</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Integration ensures only "Approved, Current" versions reach downstream processes</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Dashboards provide case-level and portfolio-level visibility of bottlenecks</strong></span></li>
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

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 6 Details - OCR & Unstructured Data Conversion */}
        <div id="stage-6" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 6</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">OCR & Unstructured Data Conversion</h2>
            <p className="text-xl opacity-90">Medical-grade OCR, structured pipelines, 90% time reduction</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Key evidence lives in unstructured medical documents including PDFs, handwritten records, and faxed materials. These documents require extensive manual review to extract meaningful data. When defense requests portfolio-level cuts, firms resort to costly "strike teams" performing manual extraction. Traditional OCR systems struggle with medical terminology accuracy.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Medical-grade optical character recognition specialized for medical terminology and formats</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Structured data pipelines organize extracted information into queryable databases</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Validation rules ensure accuracy of medical term extraction</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>HL7/FHIR structured output enables seamless integration with systems</strong></span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 90% time reduction vs. manual extraction</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Defense response time: weeks → hours</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Elimination of strike team costs ($50k-$100k/cycle)</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Portfolio-level analytics and scenario modeling</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>

        {/* Stage 7 Details - New Dashboard section */}
        <div id="stage-7" className="scroll-mt-24">
          <div className="bg-[#0D3BC3] text-white p-6 rounded-t-xl">
            <span className="text-sm font-semibold bg-[#EDB624] text-[#1A2234] px-3 py-1 rounded-full">STAGE 7</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">Dashboarding & Data Portals</h2>
            <p className="text-xl opacity-90">Real-time reporting, claimant portals, API feeds, and rescreening pipelines</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Firms lack real-time visibility into portfolio performance, claimant engagement, and settlement forecasting. Manual reporting consumes hours weekly, and claimant status requests burden paralegals. There's no systematic approach to rescreen cases when new medical evidence arises.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0D3BC3] mb-4">Our Approach</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Live portfolio metrics with settlement velocity, tier distribution</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Claimant portals enable secure self-service document upload and status tracking</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>API data feeds integrate with settlement administrators, medical vendors, counsel</strong></span></li>
              <li className="flex gap-3"><span className="text-[#0D3BC3] font-bold">→</span><span><strong>Automated rescreening triggers when new medical evidence or exposure data emerges</strong></span></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0D3BC3] p-6 rounded">
              <h4 className="font-bold text-[#0D3BC3] mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 90% reduction in manual reporting time</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> 24/7 claimant engagement without staff overhead</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Portfolio forecast accuracy: 90%</li>
                <li className="flex gap-2"><span className="text-[#0D3BC3]">✓</span> Automated case escalation and rescreening triggers</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all">
                Learn More About This Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-[#0D3BC3] text-white py-12 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ready to Transform Your Mass Tort Practice?</h2>
          <p className="text-xl mb-6 opacity-90 text-center">
            Schedule a 30-minute consultation to discuss your specific challenges and how our solutions can help.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="john@lawfirm.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Law Firm / Company *</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Smith & Associates"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Tell us about your challenges</label>
              <textarea 
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                placeholder="Describe your current challenges with mass tort operations..."
              ></textarea>
            </div>


            <a  href="mailto:admin@northcastleconsulting.com,rventrada@northcastleconsulting.com?subject=Mass%20Tort%20Services%20Inquiry"
              className="block w-full text-center bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Interest
            </a>

            <p className="text-sm text-center mt-2 opacity-75">
              We'll respond within 1 business day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}