import React, { useState } from 'react';
import MassTortPage from './MassTortPage.jsx';
import DividendRecapPage from './DividendRecapPage.jsx';
import SellSideReadinessPage from './SellSideReadinessPage.jsx';
import CorporateDevPage from './CorporateDevPage.jsx';
import BuildingCredibilityPage from './BuildingCredibilityPage.jsx';
import EnhancingInvestmentCredibilityPage from './EnhancingInvestmentCredibilityPage.jsx';
import CarRentalCaseStudyPage from './CarRentalCaseStudyPage.jsx';
import TargetIdentificationCaseStudyPage from './TargetIdentificationCaseStudyPage.jsx';
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
      <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-white" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              North Castle Consulting
            </a>

            <div className="hidden md:flex gap-6 items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors text-sm font-medium">Home</a>

              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="text-white hover:text-yellow-600 transition-colors text-sm font-medium flex items-center gap-1 py-2">
                  Services
                  <svg className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="w-72 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Lender Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Lender Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Lender DD For Non-PE Financing</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Challenged Credit Due Diligence</a>

                    <div className="border-t border-gray-200 my-1.5"></div>
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Private Equity Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Dividend Recapitalization Prep</a>

                    <div className="border-t border-gray-200 my-1.5"></div>
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Family Office / Independent Sponsor</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Corporate Development</a>

                    <div className="border-t border-gray-200 my-1.5"></div>
                    <div className="px-4 py-1.5">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Litigation Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">Mass Tort</a>
                  </div>
                </div>
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('case-studies') : navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors text-sm font-medium">Case Studies</a>
              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('contact') : navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors text-sm font-medium">Contact</a>
            </div>

            <button className="md:hidden text-white text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 text-sm">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600">Home</a>
              <div className="border-t border-slate-700 pt-2">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1">Lender Services</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Lender Due Diligence</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Lender DD For Non-PE</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Challenged Credit DD</a>
              </div>
              <div className="border-t border-slate-700 pt-2">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1">Private Equity</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Sell-Side Readiness</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Dividend Recap Prep</a>
              </div>
              <div className="border-t border-slate-700 pt-2">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1">Family Office</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Corporate Development</a>
              </div>
              <div className="border-t border-slate-700 pt-2">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1">Litigation</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block pl-3 py-1 text-white hover:text-yellow-600">Mass Tort</a>
              </div>
              <div className="border-t border-slate-700 pt-2">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); setMobileMenuOpen(false); }} className="text-white hover:text-yellow-600">Case Studies</a>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setMobileMenuOpen(false); }} className="text-white hover:text-yellow-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          {/* Compact Hero */}
          <section className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Unlocking Value Through Financial Expertise
                  </h1>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams to maximize value, reduce risk, and drive success.
                  </p>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                    className="inline-block bg-yellow-600 text-slate-900 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-all"
                  >
                    Explore Our Solutions
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-yellow-500 text-2xl font-bold">PE</div>
                      <div className="text-white text-sm">Private Equity Services</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-yellow-500 text-2xl font-bold">M&A</div>
                      <div className="text-white text-sm">Corporate Development</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-yellow-500 text-2xl font-bold">DD</div>
                      <div className="text-white text-sm">Due Diligence</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-yellow-500 text-2xl font-bold">FO</div>
                      <div className="text-white text-sm">Family Office</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Services</h2>
                <p className="text-gray-600">Comprehensive financial advisory for middle-market transactions</p>
              </div>

              {/* Private Equity Services */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-900"></span>
                  Private Equity Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Dividend Recapitalization Prep</h4>
                    <p className="text-gray-600 text-sm mb-3">Return capital to LPs through strategic recaps. We assess cash flow stability, debt capacity, and structure transactions that balance leverage and returns.</p>
                    <span className="text-blue-900 font-medium text-sm">Learn more →</span>
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Sell-Side Readiness</h4>
                    <p className="text-gray-600 text-sm mb-3">Position your portfolio company for optimal valuation. We streamline financials, validate metrics, and enhance credibility for competitive exits.</p>
                    <span className="text-blue-900 font-medium text-sm">Learn more →</span>
                  </a>
                </div>
              </div>

              {/* Family Office Services */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-900"></span>
                  Family Office / Independent Sponsor
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Corporate Development</h4>
                    <p className="text-gray-600 text-sm mb-3">End-to-end M&A support including target screening, due diligence, deal structuring, and post-merger integration.</p>
                    <span className="text-blue-900 font-medium text-sm">Learn more →</span>
                  </a>
                </div>
              </div>

              {/* Mass Tort */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-900"></span>
                  Litigation Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Mass Tort</h4>
                    <p className="text-gray-600 text-sm mb-3">Financial analysis and expert support for mass tort litigation, including damages quantification and settlement structuring.</p>
                    <span className="text-blue-900 font-medium text-sm">Learn more →</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Case Studies</h2>
                <p className="text-gray-600">Proven results across industries</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-credibility'); }} className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">Sell-Side Readiness</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">Building Credibility & Justifying Multiples</h3>
                  <p className="text-gray-600 text-sm">PE-backed venue management company sale preparation</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-fintech'); }} className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">Sell-Side Readiness</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">Enhancing Investment Credibility</h3>
                  <p className="text-gray-600 text-sm">FinTech payments company growth and churn analysis</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-car-rental'); }} className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">Corporate Development</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">From Operations to Ownership</h3>
                  <p className="text-gray-600 text-sm">Enabling executives to acquire a car rental franchise</p>
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('case-study-target-id'); }} className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">Corporate Development</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">Building an Acquisition Roadmap</h3>
                  <p className="text-gray-600 text-sm">Target identification for a PE-backed consulting firm</p>
                </a>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Unlock Value?</h2>
              <p className="text-gray-300 mb-8">Let's discuss how our expertise can drive success for your organization.</p>
              <a href="mailto:contact@northcastleconsulting.com" className="inline-block bg-yellow-600 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition-all">
                Contact Us
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-950 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-yellow-600 font-bold mb-3">North Castle Consulting</h4>
                  <p className="text-gray-400 text-sm">Actionable insights for Private Equity, Private Debt, and Corporate Development teams.</p>
                </div>
                <div>
                  <h4 className="text-yellow-600 font-bold mb-3">Services</h4>
                  <div className="space-y-1 text-sm">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block text-gray-400 hover:text-yellow-600">Dividend Recap Prep</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block text-gray-400 hover:text-yellow-600">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block text-gray-400 hover:text-yellow-600">Corporate Development</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block text-gray-400 hover:text-yellow-600">Mass Tort</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-yellow-600 font-bold mb-3">Contact</h4>
                  <p className="text-gray-400 text-sm">contact@northcastleconsulting.com</p>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
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
        <div className="pt-20 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Lender Due Diligence</h1>
            <p className="text-gray-600">Content coming soon...</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="inline-block mt-6 text-blue-900 font-medium">← Back to Home</a>
          </div>
        </div>
      )}

      {currentPage === 'lender-dd-non-pe' && (
        <div className="pt-20 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Lender Due Diligence For Non-PE Financing</h1>
            <p className="text-gray-600">Content coming soon...</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="inline-block mt-6 text-blue-900 font-medium">← Back to Home</a>
          </div>
        </div>
      )}

      {currentPage === 'challenged-credit' && (
        <div className="pt-20 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Challenged Credit Due Diligence</h1>
            <p className="text-gray-600">Content coming soon...</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="inline-block mt-6 text-blue-900 font-medium">← Back to Home</a>
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
    </div>
  );
}
