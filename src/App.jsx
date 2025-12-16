import React, { useState } from 'react';
import MassTortPage from './MassTortPage.jsx';
import DividendRecapPage from './DividendRecapPage.jsx';
import SellSideReadinessPage from './SellSideReadinessPage.jsx';
import CorporateDevPage from './CorporateDevPage.jsx';
import BuildingCredibilityPage from './BuildingCredibilityPage.jsx';
import EnhancingInvestmentCredibilityPage from './EnhancingInvestmentCredibilityPage.jsx';
import CarRentalCaseStudyPage from './CarRentalCaseStudyPage.jsx';
import TargetIdentificationCaseStudyPage from './TargetIdentificationCaseStudyPage.jsx';
import KPIDataCubeCaseStudyPage from './KPIDataCubeCaseStudyPage.jsx';
import DataChallengedCaseStudyPage from './DataChallengedCaseStudyPage.jsx';
import MassTortDigestTemplate from './components/newsletters/MassTortDigestTemplate.jsx';

export default function NorthCastleConsulting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-[#1A2234] bg-opacity-98 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-white" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              North Castle Consulting
            </a>

            <div className="hidden md:flex gap-6 items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Home</a>

              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium flex items-center gap-1 py-2">
                  Services
                  <svg className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="w-72 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Lender Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Lender Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Lender DD For Non-PE Financing</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Challenged Credit Due Diligence</a>

                    <div className="border-t border-gray-200 my-1.5"></div>
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Private Equity Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Dividend Recapitalization Prep</a>

                    <div className="border-t border-gray-200 my-1.5"></div>
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Family Office / Independent Sponsor</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Corporate Development</a>

                    <div className="border-t border-gray-200 my-1.5"></div>
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Litigation Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Mass Tort</a>
                  </div>
                </div>
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('case-studies') : navigateToPage('home'); }} className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Case Studies</a>
              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('contact') : navigateToPage('home'); }} className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Contact</a>
            </div>

            <button className="md:hidden text-white text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 flex flex-col gap-2 text-sm">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-[#EDB624]">Home</a>
              <div className="border-t border-white/20 pt-2">
                <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider mb-1">Lender Services</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Lender Due Diligence</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Lender DD For Non-PE</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Challenged Credit DD</a>
              </div>
              <div className="border-t border-white/20 pt-2">
                <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider mb-1">Private Equity</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Sell-Side Readiness</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Dividend Recap Prep</a>
              </div>
              <div className="border-t border-white/20 pt-2">
                <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider mb-1">Family Office</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Corporate Development</a>
              </div>
              <div className="border-t border-white/20 pt-2">
                <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider mb-1">Litigation</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Mass Tort</a>
              </div>
              <div className="border-t border-white/20 pt-2">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); setMobileMenuOpen(false); }} className="text-white hover:text-[#EDB624]">Case Studies</a>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setMobileMenuOpen(false); }} className="text-white hover:text-[#EDB624]">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="pt-16 bg-[#0D3BC3]">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
              <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-center">
                {/* Left: Main Content */}
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Unlocking Value Through<br />
                    <span className="text-[#EDB624]">Financial Expertise</span>
                  </h1>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                    Actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams.
                  </p>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                    className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold hover:bg-[#EDB624]/90 transition-all shadow-lg"
                  >
                    Explore Our Solutions
                  </a>
                </div>

                {/* Right: Services List */}
                <div className="space-y-6">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
                    className="group block border-l-4 border-[#EDB624] pl-4 py-2 hover:border-white transition-all duration-300"
                  >
                    <div className="text-[#EDB624] text-xs font-bold uppercase tracking-wider mb-1">Private Equity</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#EDB624] transition-colors">Sell-Side Readiness & Portfolio Support</div>
                  </a>

                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
                    className="group block border-l-4 border-[#EDB624] pl-4 py-2 hover:border-white transition-all duration-300"
                  >
                    <div className="text-[#EDB624] text-xs font-bold uppercase tracking-wider mb-1">Corporate Dev</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#EDB624] transition-colors">Target Identification & Transaction Support</div>
                  </a>

                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }}
                    className="group block border-l-4 border-[#EDB624] pl-4 py-2 hover:border-white transition-all duration-300"
                  >
                    <div className="text-[#EDB624] text-xs font-bold uppercase tracking-wider mb-1">Litigation</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#EDB624] transition-colors">Expert Financial Analysis & Support</div>
                  </a>

                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
                    className="group block border-l-4 border-[#EDB624] pl-4 py-2 hover:border-white transition-all duration-300"
                  >
                    <div className="text-[#EDB624] text-xs font-bold uppercase tracking-wider mb-1">Family Office</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#EDB624] transition-colors">Investment & Acquisition Advisory</div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-10 px-6 bg-[#F6F7F7]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-1">Our Services</h2>
                <p className="text-[#1A2234]/70">Comprehensive financial advisory for middle-market transactions</p>
              </div>

              {/* Private Equity Services */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1A2234] mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#0D3BC3] rounded"></span>
                  Private Equity Services
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#0D3BC3]/30">
                    <h4 className="text-base font-bold text-[#1A2234] mb-1.5">Dividend Recapitalization Prep</h4>
                    <p className="text-[#1A2234]/70 text-sm mb-2 line-clamp-2">Return capital to LPs through strategic recaps. We assess cash flow stability and debt capacity.</p>
                    <span className="text-[#0D3BC3] font-medium text-sm">Learn more →</span>
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#0D3BC3]/30">
                    <h4 className="text-base font-bold text-[#1A2234] mb-1.5">Sell-Side Readiness</h4>
                    <p className="text-[#1A2234]/70 text-sm mb-2 line-clamp-2">Position your portfolio company for optimal valuation. We streamline financials and validate metrics.</p>
                    <span className="text-[#0D3BC3] font-medium text-sm">Learn more →</span>
                  </a>
                </div>
              </div>

              {/* Family Office Services */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1A2234] mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#0D3BC3] rounded"></span>
                  Family Office / Independent Sponsor
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#0D3BC3]/30">
                    <h4 className="text-base font-bold text-[#1A2234] mb-1.5">Corporate Development</h4>
                    <p className="text-[#1A2234]/70 text-sm mb-2 line-clamp-2">End-to-end M&A support including target screening, due diligence, and deal structuring.</p>
                    <span className="text-[#0D3BC3] font-medium text-sm">Learn more →</span>
                  </a>
                </div>
              </div>

              {/* Mass Tort */}
              <div>
                <h3 className="text-lg font-bold text-[#1A2234] mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#0D3BC3] rounded"></span>
                  Litigation Services
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 hover:border-[#0D3BC3]/30">
                    <h4 className="text-base font-bold text-[#1A2234] mb-1.5">Mass Tort</h4>
                    <p className="text-[#1A2234]/70 text-sm mb-2 line-clamp-2">Financial analysis and expert support for mass tort litigation, including damages quantification.</p>
                    <span className="text-[#0D3BC3] font-medium text-sm">Learn more →</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="py-10 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-1">Case Studies</h2>
                <p className="text-[#1A2234]/70">Proven results across industries</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-kpi-data-cube'); }} className="block bg-[#F6F7F7] p-4 rounded-lg border border-slate-200 hover:border-[#0D3BC3]/30 hover:shadow-sm transition-all">
                  <span className="text-xs font-semibold text-[#0D3BC3] uppercase tracking-wider">Sell-Side Readiness</span>
                  <h3 className="text-base font-bold text-[#1A2234] mt-1 mb-1">KPI Data Cube for Company Sale</h3>
                  <p className="text-[#1A2234]/70 text-sm">$250M auto parts manufacturer - 2.7M data points unified</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-data-challenged'); }} className="block bg-[#F6F7F7] p-4 rounded-lg border border-slate-200 hover:border-[#0D3BC3]/30 hover:shadow-sm transition-all">
                  <span className="text-xs font-semibold text-[#0D3BC3] uppercase tracking-wider">Sell-Side Readiness</span>
                  <h3 className="text-base font-bold text-[#1A2234] mt-1 mb-1">Unlocking Value in Data-Challenged Sale</h3>
                  <p className="text-[#1A2234]/70 text-sm">Vending & catering company - stalled to sold in 7 months</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }} className="block bg-[#F6F7F7] p-4 rounded-lg border border-slate-200 hover:border-[#0D3BC3]/30 hover:shadow-sm transition-all">
                  <span className="text-xs font-semibold text-[#0D3BC3] uppercase tracking-wider">Sell-Side Readiness</span>
                  <h3 className="text-base font-bold text-[#1A2234] mt-1 mb-1">Building Credibility & Justifying Multiples</h3>
                  <p className="text-[#1A2234]/70 text-sm">PE-backed venue management company sale preparation</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }} className="block bg-[#F6F7F7] p-4 rounded-lg border border-slate-200 hover:border-[#0D3BC3]/30 hover:shadow-sm transition-all">
                  <span className="text-xs font-semibold text-[#0D3BC3] uppercase tracking-wider">Sell-Side Readiness</span>
                  <h3 className="text-base font-bold text-[#1A2234] mt-1 mb-1">Enhancing Investment Credibility</h3>
                  <p className="text-[#1A2234]/70 text-sm">FinTech payments company growth and churn analysis</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-car-rental'); }} className="block bg-[#F6F7F7] p-4 rounded-lg border border-slate-200 hover:border-[#0D3BC3]/30 hover:shadow-sm transition-all">
                  <span className="text-xs font-semibold text-[#0D3BC3] uppercase tracking-wider">Corporate Development</span>
                  <h3 className="text-base font-bold text-[#1A2234] mt-1 mb-1">From Operations to Ownership</h3>
                  <p className="text-[#1A2234]/70 text-sm">Enabling executives to acquire a car rental franchise</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }} className="block bg-[#F6F7F7] p-4 rounded-lg border border-slate-200 hover:border-[#0D3BC3]/30 hover:shadow-sm transition-all">
                  <span className="text-xs font-semibold text-[#0D3BC3] uppercase tracking-wider">Corporate Development</span>
                  <h3 className="text-base font-bold text-[#1A2234] mt-1 mb-1">Building an Acquisition Roadmap</h3>
                  <p className="text-[#1A2234]/70 text-sm">Target identification for a PE-backed consulting firm</p>
                </a>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-10 px-6 bg-[#1A2234] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Unlock Value?</h2>
              <p className="text-white/80 mb-5">Let's discuss how our expertise can drive success for your organization.</p>
              <a href="mailto:contact@northcastleconsulting.com" className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold hover:bg-[#EDB624]/90 transition-all shadow-lg">
                Contact Us
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#0D3BC3] text-white py-8 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-[#EDB624] font-semibold mb-2">North Castle Consulting</h4>
                  <p className="text-white/70 text-sm">Actionable insights for Private Equity, Private Debt, and Corporate Development teams.</p>
                </div>
                <div>
                  <h4 className="text-[#EDB624] font-semibold mb-2">Services</h4>
                  <div className="space-y-1 text-sm">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block text-white/70 hover:text-[#EDB624]">Dividend Recap Prep</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block text-white/70 hover:text-[#EDB624]">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block text-white/70 hover:text-[#EDB624]">Corporate Development</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block text-white/70 hover:text-[#EDB624]">Mass Tort</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-[#EDB624] font-semibold mb-2">Contact</h4>
                  <p className="text-white/70 text-sm">contact@northcastleconsulting.com</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4 text-center text-white/60 text-sm">
                © 2025 North Castle Consulting. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}

      {currentPage === 'mass-tort' && (
        <MassTortPage navigateToPage={navigateToPage} scrollToSection={scrollToSection} />
      )}

      {currentPage === 'lender-due-diligence' && (
        <div className="pt-16 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-[#1A2234] mb-3">Lender Due Diligence</h1>
            <p className="text-[#1A2234]/70">Content coming soon...</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="inline-block mt-4 text-[#0D3BC3] hover:text-[#EDB624] font-medium text-sm">← Back to Home</a>
          </div>
        </div>
      )}

      {currentPage === 'lender-dd-non-pe' && (
        <div className="pt-16 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-[#1A2234] mb-3">Lender Due Diligence For Non-PE Financing</h1>
            <p className="text-[#1A2234]/70">Content coming soon...</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="inline-block mt-4 text-[#0D3BC3] hover:text-[#EDB624] font-medium text-sm">← Back to Home</a>
          </div>
        </div>
      )}

      {currentPage === 'challenged-credit' && (
        <div className="pt-16 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-[#1A2234] mb-3">Challenged Credit Due Diligence</h1>
            <p className="text-[#1A2234]/70">Content coming soon...</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="inline-block mt-4 text-[#0D3BC3] hover:text-[#EDB624] font-medium text-sm">← Back to Home</a>
          </div>
        </div>
      )}

      {currentPage === 'sell-side' && (
        <SellSideReadinessPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'corporate-dev' && (
        <CorporateDevPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'dividend-recap' && (
        <DividendRecapPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'newsletter-blog' && (
        <MassTortDigestTemplate navigateToPage={navigateToPage} />
      )}

      {currentPage === 'case-study-credibility' && (
        <BuildingCredibilityPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'case-study-fintech' && (
        <EnhancingInvestmentCredibilityPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'case-study-car-rental' && (
        <CarRentalCaseStudyPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'case-study-target-id' && (
        <TargetIdentificationCaseStudyPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'case-study-kpi-data-cube' && (
        <KPIDataCubeCaseStudyPage navigateToPage={navigateToPage} />
      )}

      {currentPage === 'case-study-data-challenged' && (
        <DataChallengedCaseStudyPage navigateToPage={navigateToPage} />
      )}
    </div>
  );
}
