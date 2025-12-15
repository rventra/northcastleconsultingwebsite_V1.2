import React, { useState } from 'react';
import MassTortPage from './MassTortPage.jsx';
import DividendRecapPage from './DividendRecapPage.jsx';
import SellSideReadinessPage from './SellSideReadinessPage.jsx';
import CorporateDevPage from './CorporateDevPage.jsx';
import BuildingCredibilityPage from './BuildingCredibilityPage.jsx';
import EnhancingInvestmentCredibilityPage from './EnhancingInvestmentCredibilityPage.jsx';
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
            <a href="#" className="text-2xl font-bold text-white" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              North Castle Consulting
            </a>
            
            <div className="hidden md:flex gap-8 items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Home</a>
              
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className="text-white hover:text-yellow-600 transition-colors font-medium flex items-center gap-1 py-2"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                  <div className="w-80 bg-white rounded-lg shadow-xl py-3 border border-gray-100">
                    <div className="px-4 py-2">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Lender Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Lender Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Lender Due Diligence For Non-PE Financing</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Challenged Credit Due Diligence</a>

                    <div className="border-t border-gray-200 my-2"></div>

                    <div className="px-4 py-2">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Private Equity Services</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Dividend Recapitalization Prep</a>

                    <div className="border-t border-gray-200 my-2"></div>

                    <div className="px-4 py-2">
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Family Office / Independent Sponsor</p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">Corporate Development</a>
                  </div>
                </div>
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('case-studies') : navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Case Studies</a>
              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('contact') : navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Contact</a>
            </div>

            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors">Home</a>

              <div className="border-t border-slate-700 pt-3">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">Lender Services</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block pl-4 py-1 text-white hover:text-yellow-600 transition-colors text-sm">Lender Due Diligence</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block pl-4 py-1 text-white hover:text-yellow-600 transition-colors text-sm">Lender Due Diligence For Non-PE Financing</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block pl-4 py-1 text-white hover:text-yellow-600 transition-colors text-sm">Challenged Credit Due Diligence</a>
              </div>

              <div className="border-t border-slate-700 pt-3">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">Private Equity Services</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block pl-4 py-1 text-white hover:text-yellow-600 transition-colors text-sm">Sell-Side Readiness</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block pl-4 py-1 text-white hover:text-yellow-600 transition-colors text-sm">Dividend Recapitalization Prep</a>
              </div>

              <div className="border-t border-slate-700 pt-3">
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">Family Office / Independent Sponsor</p>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block pl-4 py-1 text-white hover:text-yellow-600 transition-colors text-sm">Corporate Development</a>
              </div>

              <div className="border-t border-slate-700 pt-3">
                <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('case-studies') : navigateToPage('home'); setMobileMenuOpen(false); }} className="text-white hover:text-yellow-600 transition-colors">Case Studies</a>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); currentPage === 'home' ? scrollToSection('contact') : navigateToPage('home'); setMobileMenuOpen(false); }} className="text-white hover:text-yellow-600 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          <section id="home" className="pt-24 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Unlocking Value Through Financial Expertise
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams to maximize value, reduce risk, and drive success.
              </p>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
              >
                Explore Our Solutions
              </a>
            </div>
          </section>

          <section id="services" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive financial advisory services tailored to middle-market PE portfolio companies, family offices, and independent sponsors.
                </p>
              </div>

              {/* Private Equity Services Section */}
              <div className="mb-20">
                <div className="mb-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Private Equity Services</h3>
                  <div className="h-1 w-24 bg-blue-900"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Dividend Recapitalization Preparation */}
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">💰</div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Dividend Recapitalization Preparation</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      We help private equity sponsors return capital to LPs through strategic dividend recapitalizations. Our team assesses cash flow stability, debt capacity, and market conditions to structure transactions that balance leverage and returns—all while preserving ownership and operational focus.
                    </p>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }}
                      className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                    >
                      Read More →
                    </a>
                  </div>

                  {/* Sell-Side Readiness */}
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">📈</div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Sell-Side Readiness</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Preparing your portfolio company for sale is critical to achieving optimal valuation and a smooth transaction. We streamline financials, validate operational metrics, and enhance management credibility to attract buyers and minimize last-minute surprises. With a &gt;95% success rate, we ensure your business is positioned for a competitive and successful exit.
                    </p>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }}
                      className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              {/* Family Office / Independent Sponsor Services Section */}
              <div>
                <div className="mb-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Family Office / Independent Sponsor Services</h3>
                  <div className="h-1 w-24 bg-blue-900"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Corporate Development */}
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">🎯</div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Corporate Development</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Accelerate growth and expand market presence through strategic acquisitions and partnerships. Our end-to-end corporate development services include target screening, due diligence, deal structuring, and post-merger integration. We help you identify the right opportunities, mitigate risks, and maximize synergies to achieve your strategic goals.
                    </p>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }}
                      className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="case-studies" className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Sell-Side Readiness: Proven Results</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">
                  Our track record in preparing companies for successful exits
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-900">
                  <span className="text-3xl font-bold">&gt;95%</span>
                  <span className="text-lg">Success Rate</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-blue-900">
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-6xl text-white">📊</div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">KPI Data Cube for Company Sale</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A private equity-backed auto parts manufacturer preparing for sale required a consolidated view of KPIs. We developed a comprehensive data analytics solution that streamlined reporting and enhanced buyer confidence.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-blue-900">
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-6xl text-white">🎯</div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Unlocking Value in Data-Challenged Business</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A private equity-backed business services company struggled to complete its sale due to significant challenges. We restructured their data systems, validated financials, and successfully positioned the company for a competitive exit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Unlock Value?</h2>
              <p className="text-xl md:text-2xl mb-10 text-gray-200">
                Let's discuss how our expertise can drive success for your organization.
              </p>
              <a 
                href="mailto:contact@northcastleconsulting.com" 
                className="inline-block bg-yellow-600 text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg"
              >
                Contact Us Today
              </a>
            </div>
          </section>

          <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 mb-8">
                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">North Castle Consulting</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams.
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">Services</h4>
                  <div className="space-y-2">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Dividend Recapitalization Preparation</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Corporate Development</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">Contact</h4>
                  <div className="space-y-2 text-gray-400">
                    <p>Email: contact@northcastleconsulting.com</p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                <p>&copy; 2025 North Castle Consulting. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}

     {currentPage === 'mass-tort' && (
      <MassTortPage navigateToPage={navigateToPage} scrollToSection={scrollToSection} />
     )}

      {currentPage === 'lender-due-diligence' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Lender Due Diligence</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} 
              className="inline-block mt-8 bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      )}

      {currentPage === 'lender-dd-non-pe' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Lender Due Diligence For Non-PE Financing</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} 
              className="inline-block mt-8 bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      )}

      {currentPage === 'challenged-credit' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Challenged Credit Due Diligence</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} 
              className="inline-block mt-8 bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all"
            >
              ← Back to Home
            </a>
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
    </div>
  );
}
