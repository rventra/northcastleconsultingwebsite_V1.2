import React, { useState } from 'react';

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
              
              <div className="relative">
                <button 
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="text-white hover:text-yellow-600 transition-colors font-medium flex items-center gap-1"
                >
                  Services ▾
                </button>
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Mass Tort</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Lender Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Corporate Development</a>
                  </div>
                )}
              </div>

              {currentPage === 'home' && (
                <>
                  <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Case Studies</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Contact</a>
                </>
              )}
            </div>

            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors">Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="text-white hover:text-yellow-600 transition-colors">Mass Tort</a>
              {currentPage === 'home' && (
                <>
                  <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="text-white hover:text-yellow-600 transition-colors">Case Studies</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white hover:text-yellow-600 transition-colors">Contact</a>
                </>
              )}
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
                Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams.
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
                  Comprehensive financial advisory services tailored to your specific needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">⚖️</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mass Tort</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Specialized financial advisory and operational solutions for mass tort litigation.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">Learn More →</a>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Lender Due Diligence</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Comprehensive credit assessment and financial analysis.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">Learn More →</a>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">📈</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Sell-Side Readiness</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Prepare your business for sale to achieve optimal valuation.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">Learn More →</a>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">🎯</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate Development</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Strategic M&A advisory from target screening through integration.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">Learn More →</a>
                </div>
              </div>
            </div>
          </section>

          <section id="case-studies" className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Proven Results</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real-world success stories demonstrating our impact and expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-6xl text-white">📊</div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">KPI Data Cube for Company Sale</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A private equity-backed auto parts manufacturer preparing for sale required a consolidated view of KPIs. We developed a comprehensive data analytics solution.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-6xl text-white">🎯</div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Unlocking Value in Data-Challenged Business</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We restructured data systems, validated financials, and successfully positioned the company for a competitive exit.
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
                    Delivering actionable insights for Private Equity, Private Debt, and Corporate Development teams.
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">Services</h4>
                  <div className="space-y-2">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Mass Tort</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Lender Due Diligence</a>
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
        <div className="pt-20">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Mass Tort Services</h1>
              <p className="text-xl md:text-2xl opacity-95 mb-8">
                Operational infrastructure and financial intelligence for law firms handling mass tort litigation at scale
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Transform Your Mass Tort Operations</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Most mass tort practices struggle with operational chaos: disorganized case intake, inconsistent medical review, manual document workflows, and inability to respond quickly to defense data requests.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We build the operational and data infrastructure that eliminates these bottlenecks—delivering faster case throughput, lower costs, and the portfolio analytics defense teams respect.
              </p>
            </div>

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

      {currentPage === 'sell-side' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Sell-Side Readiness</h1>
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

      {currentPage === 'corporate-dev' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Corporate Development</h1>
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
    </div>
  );
}
