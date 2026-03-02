import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NewsletterTicker from './components/NewsletterTicker';

export default function MassTortPage() {
  const navigate = useNavigate();
  const [showSticky, setShowSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  // Sticky bar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !footerRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const footerRect = footerRef.current.getBoundingClientRect();
      const heroVisible = heroRect.bottom > 0;
      const footerVisible = footerRect.top < window.innerHeight;
      
      setShowSticky(!heroVisible && !footerVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const scrollToSelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Newsletter Ticker */}
      <div className="bg-[#0B1D3A] border-b border-[#C8973E]/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">Latest Intelligence</span>
            <span className="text-[#5A6A85] hidden sm:inline">|</span>
            <span className="text-[#8DA0BF] text-sm hidden sm:inline">Weekly litigation updates for plaintiff firms</span>
          </div>
          <Link 
            to="/newsletter" 
            className="inline-flex items-center gap-1.5 text-[#C8973E] hover:text-[#E2B45A] transition-colors font-sans text-sm font-semibold"
          >
            View Newsletter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Hero Section - QoE Style Split Design */}
      <div ref={heroRef}>
        <div className="grid lg:grid-cols-12 min-h-[700px] lg:min-h-[800px]">
          
          {/* Left — Split Top/Bottom (50/50 Balance) */}
          <div className="lg:col-span-8 relative flex flex-col">
            {/* Top: Image with Hero Content (50%) */}
            <div className="relative h-1/2 min-h-[300px] flex items-end">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=900&fit=crop"
                  alt="Legal documents and courthouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/70 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6 md:p-10 lg:p-12 w-full">
                <p className="text-[#C8973E] text-sm font-semibold tracking-widest uppercase mb-3">
                  End-to-End Litigation Intelligence
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.05] max-w-3xl">
                  Mass Tort Operations<br />
                  <span className="text-[#E2B45A]">Built for Scale</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
                  Operational infrastructure and financial intelligence for law firms handling mass tort litigation at scale.
                </p>
              </div>
            </div>
            
            {/* Bottom: The Challenge Section (50%) - Slate Navy */}
            <div className="relative h-1/2 min-h-[350px] bg-[#142D55] flex items-center">
              <div className="p-6 md:p-10 lg:p-12 w-full">
                <p className="text-[#C8973E] text-sm font-semibold tracking-widest uppercase mb-3">
                  The Challenge
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Most Mass Tort Practices Struggle With Operational Chaos
                </h2>
                
                <p className="text-white/80 text-base mb-6 leading-relaxed max-w-2xl">
                  Disorganized case intake, inconsistent medical review, manual document workflows, and inability to respond 
                  quickly to defense data requests. These bottlenecks cost firms millions in lost settlement value.
                </p>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { text: 'All Data Housed in AWS' },
                    { text: 'NDA First' },
                    { text: '100% U.S.-Based Team' }
                  ].map((badge, i) => (
                    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 rounded bg-white/5">
                      <svg className="w-4 h-4 text-[#C8973E]" viewBox="0 0 16 20" fill="currentColor">
                        <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                        <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#142D55"/>
                      </svg>
                      <span className="font-sans text-[11px] font-bold text-white/80 uppercase tracking-wide whitespace-nowrap">{badge.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSelector('#lifecycle')}
                    className="inline-flex items-center justify-center gap-2 bg-[#C8973E] text-[#0B1D3A] px-6 py-3 font-bold text-base hover:shadow-xl hover:bg-[#E2B45A] transition-all duration-300"
                  >
                    <span>Explore Our Solutions</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  <Link
                    to="/newsletter"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 font-bold text-base hover:bg-white hover:text-[#0B1D3A] transition-all duration-300"
                  >
                    Newsletter & Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Service Overview Panel */}
          <div className="lg:col-span-4 bg-[#F7F5F0] p-8 md:p-10 lg:p-12">
            <h3 className="text-lg font-bold text-[#0B1D3A] mb-6 uppercase tracking-wide">
              8-Stage Platform
            </h3>
            <p className="text-[#5A5A5A] text-sm mb-8 leading-relaxed">
              We optimize 8 of 9 critical stages in the mass tort case lifecycle—from intake through settlement.
            </p>
            
            <div className="space-y-4">
              {[
                { num: '01', title: 'Intake & Doc QA' },
                { num: '02', title: 'Claimant Communication' },
                { num: '03', title: 'AI Medical Review' },
                { num: '04', title: 'Docket Tiering' },
                { num: '05', title: 'Workflow Tracking' },
                { num: '06', title: 'OCR & Data Conversion' },
                { num: '07', title: 'Dashboarding & Portals' },
              ].map((stage, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="text-[#C8973E] font-bold text-sm">{stage.num}</span>
                  <span className="text-[#0B1D3A] font-medium text-sm">{stage.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#E8E6E1]">
              <p className="text-[#5A5A5A] text-sm mb-4">
                Ready to transform your mass tort operations?
              </p>
              <button 
                onClick={openModal}
                className="w-full bg-[#0B1D3A] text-[#C8973E] px-6 py-3 font-bold text-sm hover:bg-[#142D55] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Overview */}
      <section id="lifecycle" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E] mb-3 block">Our Solutions</span>
            <h2 className="text-[32px] text-[#0B1D3A] mb-3 font-bold">Mass Tort Case Lifecycle Services</h2>
            <p className="text-[#5A5A5A] text-lg max-w-2xl mx-auto">
              Click any stage below to learn how we optimize your operations and accelerate outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {/* Stage 1 - Combined Intake & Doc QA */}
            <a 
              href="#stage-1" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-1'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 1</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  Intake & Doc QA
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Disorganized intake, inconsistent doc verification, wasted resources on bad leads
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>40-60% ↑ doc comp rate</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>30-50% ↓ bad case rejection</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>50% faster pre-qual decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Stage 2 - Automated Claimant Communication */}
            <a 
              href="#stage-2" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-2'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 2</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  Automated Claimant Communication
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Manual outreach consuming paralegal time, clients missing deadlines, dropping out before settlement
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>60-80% claimant response rate</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>75% reduction in document cycle time</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>$150-250 cost savings per case annually</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Stage 3 - Injury Confirmation with AI Medical Record Review */}
            <a 
              href="#stage-3" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-3'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 3</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  AI Medical Record Review
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Medical records consume hours per case, reviewers miss critical diagnoses, inconsistent quality
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>50% reduction in medical review time</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>40% improvement in reviewer productivity</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>HIPAA compliant process for discovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Stage 4 - Docket Tiering & Valuation */}
            <a 
              href="#stage-4" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-4'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 4</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  Docket Tiering & Valuation
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Inconsistent medical review creates tier disputes with defense counsel, delaying settlements
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Eliminated tier assignment disputes</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>50-70% faster medical review cycle time</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>90% portfolio forecast accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Stage 5 - Workflow Tracking & Version Control */}
            <a 
              href="#stage-5" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-5'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 5</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  Workflow Tracking & Version Control
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Documents get uploaded, reviewed, revised and re-uploaded with no version control
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Every document versioned with timestamp & ID</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Structured workflow ensures "Approved, Current"</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>80% AI automation of completeness checks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Stage 6 - OCR & Unstructured Data Conversion */}
            <a 
              href="#stage-6" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-6'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 6</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  OCR & Unstructured Data Conversion
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Key evidence lives in unstructured documents requiring manual review to extract data
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Medical-grade OCR for medical terminology</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Validation rules ensure extraction accuracy</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>HL7/FHIR structured output for integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Stage 7 - Dashboarding & Data Portals */}
            <a 
              href="#stage-7" 
              onClick={(e) => { e.preventDefault(); scrollToSelector('#stage-7'); }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E8E6E1] hover:border-[#C8973E] cursor-pointer md:col-span-2 lg:col-span-1"
            >
              <div className="bg-[#0B1D3A] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C8973E] tracking-wider">STAGE 7</span>
                <svg className="w-5 h-5 text-[#C8973E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#0B1D3A] mb-3">
                  Dashboarding & Data Portals
                </h4>
                <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">⚠ The Problem</p>
                  <p className="text-xs text-gray-700 leading-tight">
                    Firms lack real-time visibility into performance, claimant engagement and settlement forecasting
                  </p>
                </div>
                <div className="bg-[#F7F5F0] border-l-2 border-[#C8973E] p-3 rounded">
                  <p className="text-xs font-semibold text-[#0B1D3A] mb-1">✓ The Solution</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Live portfolio metrics with settlement velocity</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>Claimant portals enable secure self-service</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#C8973E] font-bold">•</span>
                      <span>90% portfolio forecast accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Stage Sections */}
      <section className="bg-[#F7F5F0] py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Stage 1 Details */}
          <div id="stage-1" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 1</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Intake & Doc QA Overview</h2>
              <p className="text-lg text-[#C5CDDB]">Streamline intake screening and doc qualification in unified workflow</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Most firms lack structured intake questionnaires and standardized doc verification processes, leading to inconsistent case evaluation and resource drain from pursuing poor-quality leads.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Capture all critical data points upfront with custom intake forms</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Flag weak cases within 24 hours based on exposure, diagnosis, SOL</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Automatically verify criteria and cure deficiencies rapidly</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Score each case on completeness and medical evidence strength</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 40-60% improvement in doc completeness rate</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 30-50% bad case rejection reduction</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 50% faster pre-qualification decisions</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Data-driven lead source optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 2 Details */}
          <div id="stage-2" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 2</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Automated Claimant Communication</h2>
              <p className="text-lg text-[#C5CDDB]">Keep clients engaged for years with multi-channel, low-touch, high-scale outreach</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Mass tort claimants need ongoing communication for 2-5 years, but manual outreach consumes massive paralegal time. Claimants miss document deadlines, fail to respond to medical record requests, and become disengaged.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Multi-channel campaigns triggered by case milestones</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Smart scheduling based on demographics and response patterns</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Secure portals enable two-way communication</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Early identification of at-risk claimants</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 60-80% claimant response rate (vs 30-40% industry)</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 75% reduction in document cycle time</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 85% case completion rate</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> $150-250 cost savings per case annually</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 3 Details */}
          <div id="stage-3" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 3</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">AI Medical Record Review</h2>
              <p className="text-lg text-[#C5CDDB]">AI-assisted, lens-based review with flexible delivery and confounder handling</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Medical record review consumes 4-8 hours per case at $75-150/hour. Reviewers miss critical diagnoses, procedure dates, and causation links. Inconsistent quality creates tier disputes with defense counsel.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> AI identifies 200+ medical data points</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Lens-based chronological review with causation analysis</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> QA focused on AI-flagged issues for senior paralegals</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Rescreening capability for new medical developments</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 50% reduction in medical review time per case</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 40% improvement in reviewer productivity</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Rescreening for new medical developments</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Defensible review process for discovery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 4 Details */}
          <div id="stage-4" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 4</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Docket Tiering & Valuation</h2>
              <p className="text-lg text-[#C5CDDB]">Standardized medical review and predictive valuation</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Inconsistent medical review creates tier assignment disputes with defense counsel, delaying settlements. Manual processes are slow, costly, and prone to error. Without standardized schemas, firms can't prove tier definitions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Custom medical review schemas define tier criteria</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> AI-assisted extraction with predictive settlement modeling</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Consistent application eliminates reviewer bias</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Documentation captures rationale for each tier decision</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Eliminated tier assignment disputes with defense</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 50-70% faster medical review cycle time</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 90% portfolio forecast accuracy</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Accelerated settlement negotiations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 5 Details */}
          <div id="stage-5" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 5</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Workflow Tracking & Version Control</h2>
              <p className="text-lg text-[#C5CDDB]">Eliminate rework, maintain audit trails, coordinate multi-party document flows</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Documents get uploaded, reviewed, revised and re-uploaded with no version control. Result: staff work from outdated files, duplicate effort, and audit trail gaps that defense counsel exploits.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Every document gets version, timestamp, uploader ID</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Structured workflow: Draft → Pending Review → Approved</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Only "Approved, Current" versions reach downstream</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Dashboards provide case-level visibility of bottlenecks</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Eliminated rework from version confusion</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Defensible audit trails for discovery</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 80% AI automation of completeness checks</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Clear visibility into workflow bottlenecks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 6 Details */}
          <div id="stage-6" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 6</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">OCR & Unstructured Data Conversion</h2>
              <p className="text-lg text-[#C5CDDB]">Medical-grade OCR, structured pipelines, 90% time reduction</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Key evidence lives in unstructured medical documents. When defense requests portfolio-level cuts, firms resort to costly "strike teams" performing manual extraction. Traditional OCR struggles with medical terminology.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Medical-grade OCR specialized for medical terminology</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Structured data pipelines organize extracted information</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Validation rules ensure accuracy of extraction</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> HL7/FHIR structured output enables integration</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 90% time reduction vs. manual extraction</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Defense response time: weeks → hours</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Elimination of strike team costs ($50k-$100k/cycle)</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Portfolio-level analytics and scenario modeling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 7 Details */}
          <div id="stage-7" className="scroll-mt-20">
            <div className="bg-[#0B1D3A] text-white p-5 rounded-t-xl">
              <span className="text-sm font-semibold bg-[#C8973E] text-[#0B1D3A] px-3 py-1 rounded-full">STAGE 7</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">Dashboarding & Data Portals</h2>
              <p className="text-lg text-[#C5CDDB]">Real-time reporting, claimant portals, API feeds, and rescreening pipeline</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">The Challenge</h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    Firms lack real-time visibility into portfolio performance, claimant engagement, and settlement forecasting. Manual reporting consumes hours weekly. No systematic approach to rescreen cases when new evidence arises.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1D3A] mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-[#5A5A5A]">
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Live portfolio metrics with settlement velocity</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Claimant portals enable secure self-service upload</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> API data feeds integrate with settlement administrators</li>
                    <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Automated rescreening triggers for new evidence</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#F7F5F0] border-l-4 border-[#C8973E] p-5 rounded">
                <h4 className="font-bold text-[#0B1D3A] mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-[#5A5A5A]">
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 90% reduction in manual reporting time</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> 24/7 claimant engagement without staff overhead</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Portfolio forecast accuracy: 90%</li>
                  <li className="flex gap-2"><span className="text-[#C8973E]">✓</span> Automated case escalation and rescreening</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B1D3A] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] mb-4 font-bold">
            Ready to Transform Your<br />Mass Tort Operations?
          </h2>
          <p className="text-[#C5CDDB] text-lg max-w-2xl mx-auto mb-8">
            Schedule a 30-minute consultation to discuss your specific challenges and how our solutions can help.
          </p>
          <button 
            onClick={openModal}
            className="bg-[#C8973E] text-[#0B1D3A] px-10 py-4 font-sans text-base font-bold rounded hover:bg-[#E2B45A] transition-colors tracking-wide"
          >
            Schedule a Consultation
          </button>
          
          {/* Trust badges */}
          <div className="flex justify-center gap-2 flex-wrap mt-6">
            {[
              { text: 'All Data Housed in AWS' },
              { text: 'NDA First' },
              { text: '100% U.S.-Based Team' }
            ].map((badge, i) => (
              <div key={i} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/15 rounded bg-white/5">
                <svg className="w-4 h-4 text-[#8DA0BF]" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#142D55"/>
                </svg>
                <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[#080F1E] text-[#5A6A85] text-center py-8 px-6 font-sans text-[13px]">
        <p>&copy; 2026 North Castle Consulting. All rights reserved.</p>
        <p className="mt-2 text-xs tracking-wide text-[#4A5A72]">
          All Data Housed in AWS &bull; NDA First &bull; 100% U.S.-Based Team
        </p>
      </footer>

      {/* Sticky Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#142D55] py-3 px-6 flex justify-center items-center gap-4 z-50 shadow-[0_-2px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <span className="font-sans text-sm text-white font-semibold hidden sm:inline">
          Ready to optimize your mass tort operations?
        </span>
        <button 
          onClick={openModal}
          className="bg-[#C8973E] text-[#0B1D3A] px-6 py-2.5 font-sans text-[13px] font-bold rounded hover:bg-[#E2B45A] transition-colors"
        >
          Schedule Consultation
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-[#0B1D3A]/85 backdrop-blur-sm z-[1000] flex justify-center items-center p-6"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-xl p-8 md:p-10 max-w-md w-full text-center relative shadow-2xl">
            <button 
              onClick={closeModal}
              className="absolute top-3.5 right-4 bg-none border-none text-2xl text-[#6B7B8D] cursor-pointer leading-none hover:text-[#0B1D3A]"
            >
              &times;
            </button>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2 font-bold">Schedule a Consultation</h2>
            <p className="font-sans text-sm text-[#5A5A5A] mb-6">
              Enter your work email and we'll reach out within 24 hours to schedule your consultation.
            </p>
            
            <form 
              action="https://formsubmit.co/admin@northcastleconsulting.com" 
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="Mass Tort Services Consultation Request" />
              <input type="hidden" name="_template" value="table" />
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                className="w-full py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] focus:outline-none focus:border-[#C8973E]"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="you@firmname.com" 
                required
                className="w-full py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] focus:outline-none focus:border-[#C8973E]"
              />
              <input 
                type="text" 
                name="firm" 
                placeholder="Law Firm / Company" 
                required
                className="w-full py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] focus:outline-none focus:border-[#C8973E]"
              />
              <button
                type="submit"
                className="w-full bg-[#C8973E] text-[#0B1D3A] px-6 py-3.5 font-sans text-[15px] font-bold rounded hover:bg-[#E2B45A] transition-colors"
              >
                Request Consultation
              </button>
            </form>
            
            <div className="flex justify-center gap-2 flex-wrap mt-4">
              {[
                { text: 'AWS' },
                { text: 'NDA First' },
                { text: 'U.S.-Based' }
              ].map((badge, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#6B7B8D]/25 rounded bg-white/60">
                  <svg className="w-4 h-4 text-[#6B7B8D]" viewBox="0 0 16 20" fill="currentColor">
                    <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                    <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
                  </svg>
                  <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide">{badge.text}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">
              We never share your information. NDA executed before any data transfer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
