import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import MassTortPage from './MassTortPage.jsx';
import DividendRecapPage from './DividendRecapPage.jsx';
import SellSideReadinessPage from './SellSideReadinessPage.jsx';
import CorporateDevPage from './CorporateDevPage.jsx';
import BuildingCredibilityPage from './BuildingCredibilityPage.jsx';
import EnhancingInvestmentCredibilityPage from './EnhancingInvestmentCredibilityPage.jsx';
import StreamliningOperationsCaseStudyPage from './StreamliningOperationsCaseStudyPage.jsx';
import CarRentalCaseStudyPage from './CarRentalCaseStudyPage.jsx';
import TargetIdentificationCaseStudyPage from './TargetIdentificationCaseStudyPage.jsx';
import KPIDataCubeCaseStudyPage from './KPIDataCubeCaseStudyPage.jsx';
import DataChallengedCaseStudyPage from './DataChallengedCaseStudyPage.jsx';
import SellSideReadinessCaseStudiesPage from './SellSideReadinessCaseStudiesPage.jsx';
import CorporateDevelopmentCaseStudiesPage from './CorporateDevelopmentCaseStudiesPage.jsx';
import MassTortDigestTemplate from './components/newsletters/MassTortDigestTemplate.jsx';
import AboutUsPage from './AboutUsPage.jsx';
import ContactUsPage from './ContactUsPage.jsx';
import BlogPage from './BlogPage.jsx';
import DataVisibilityBlogPost from './DataVisibilityBlogPost.jsx';
import CaseStudiesPage from './CaseStudiesPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSelector = (selector) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1A2234] bg-opacity-98 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white hover:text-[#EDB624] transition-colors">
            North Castle Consulting
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Home</Link>

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
                    <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Private Equity Services</p>
                  </div>
                  <Link to="/services/sell-side-readiness" className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Sell-Side Readiness</Link>
                  <Link to="/services/dividend-recap-prep" className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Dividend Recap Prep</Link>

                  <div className="border-t border-gray-200 my-1.5"></div>
                  <div className="px-4 py-1.5">
                    <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Family Office / Independent Sponsor</p>
                  </div>
                  <Link to="/services/corporate-development" className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Corporate Development</Link>

                  <div className="border-t border-gray-200 my-1.5"></div>
                  <div className="px-4 py-1.5">
                    <p className="text-xs font-bold text-[#0D3BC3] uppercase tracking-wider">Litigation Services</p>
                  </div>
                  <Link to="/services/mass-tort" className="block px-4 py-1.5 text-sm text-[#1A2234] hover:bg-[#F6F7F7] hover:text-[#0D3BC3]">Mass Tort</Link>
                </div>
              </div>
            </div>

            <Link to="/about-us" className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">About Us</Link>
            <Link to="/case-studies" className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Case Studies</Link>
            <Link to="/blog" className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Blog</Link>
            <Link to="/contact-us" className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Contact</Link>
          </div>

          <button className="md:hidden text-white text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 flex flex-col gap-2 text-sm">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#EDB624]">Home</Link>
            <div className="border-t border-white/20 pt-2">
              <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider mb-1">Private Equity</p>
              <Link to="/services/sell-side-readiness" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Sell-Side Readiness</Link>
              <Link to="/services/dividend-recap-prep" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Dividend Recap Prep</Link>
            </div>
            <div className="border-t border-white/20 pt-2">
              <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider">Family Office</p>
              <Link to="/services/corporate-development" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Corporate Development</Link>
            </div>
            <div className="border-t border-white/20 pt-2">
              <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider">Litigation</p>
              <Link to="/services/mass-tort" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-white hover:text-[#EDB624]">Mass Tort</Link>
            </div>
            <div className="border-t border-white/20 pt-2">
              <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#EDB624]">About Us</Link>
            </div>
            <div className="border-t border-white/20 pt-2">
              <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#EDB624]">Case Studies</Link>
            </div>
            <div className="border-t border-white/20 pt-2">
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#EDB624]">Blog</Link>
            </div>
            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#EDB624]">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const scrollToSelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section - Redesigned for Impact */}
      <section className="pt-16 relative overflow-hidden">
        {/* Main Content - Blue with Gradient */}
        <div className="bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1e4bd9] px-6 md:px-12 py-16 md:py-24 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-[#EDB624] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Trusted by PE Firms & Family Offices</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unlocking Value Through<br />
              <span className="text-[#EDB624]">Financial Expertise</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams to maximize value, reduce risk, and drive successful outcomes.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSelector('#contact')}
                className="inline-flex items-center gap-2 bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-bold hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                View Our Results
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#EDB624]">95%+</div>
                <div className="text-white/70 text-sm mt-1">Deal Success Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#EDB624]">20+</div>
                <div className="text-white/70 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#EDB624]">7</div>
                <div className="text-white/70 text-sm mt-1">Case Studies</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#EDB624]">24hr</div>
                <div className="text-white/70 text-sm mt-1">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="bg-[#F6F7F7] px-6 md:px-12 py-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#1A2234]/60 text-sm font-medium uppercase tracking-wider mb-6">Explore What We Offer</p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Services Offered Card */}
              <button 
                onClick={() => scrollToSelector('#services')}
                className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-200 hover:border-[#0D3BC3]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#0D3BC3]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D3BC3] transition-colors duration-300">
                    <svg className="w-7 h-7 text-[#0D3BC3] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Services Offered</h3>
                    <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">
                      Comprehensive solutions for Private Equity, Family Offices, and Litigation support—from sell-side readiness to corporate development.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#0D3BC3] font-semibold text-sm group-hover:gap-2 transition-all">
                      View Services <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </button>

              {/* Case Studies Card */}
              <Link 
                to="/case-studies"
                className="group text-left bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-200 hover:border-[#0D3BC3]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#EDB624]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#EDB624] transition-colors duration-300">
                    <svg className="w-7 h-7 text-[#EDB624] group-hover:text-[#1A2234] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Case Studies</h3>
                    <p className="text-[#1A2234]/70 text-sm leading-relaxed mb-3">
                      Real results from real engagements. See how we've helped clients achieve optimal valuations and successful exits.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#0D3BC3] font-semibold text-sm group-hover:gap-2 transition-all">
                      See Results <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section id="services" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#0D3BC3] text-sm font-bold uppercase tracking-wider mb-3">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2234] mb-4">Tailored Financial Solutions</h2>
            <p className="text-[#1A2234]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              From private debt advisory to M&A support, we deliver services that drive growth, mitigate risks, and maximize value for private equity firms, family offices, and independent sponsors.
            </p>
          </div>

          {/* Private Equity Services */}
          <div id="pe-services" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0D3BC3]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0D3BC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2234]">Private Equity Services</h3>
                <p className="text-[#1A2234]/60 text-sm">Maximize returns and optimize exits</p>
              </div>
            </div>
            <p className="text-[#1A2234]/70 text-base mb-8 leading-relaxed max-w-3xl pl-16">
              We partner with private equity firms to unlock value, optimize capital structures, and drive successful exits. Our tailored services ensure seamless transactions and maximize returns for sponsors and investors.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-16">
              <Link to="/services/sell-side-readiness" className="group block p-8 bg-[#F6F7F7] rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0D3BC3]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3BC3] uppercase tracking-wider bg-[#0D3BC3]/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#0D3BC3] rounded-full"></span>
                    Most Popular
                  </span>
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#0D3BC3] transition-colors">
                    <svg className="w-4 h-4 text-[#0D3BC3] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#1A2234] mb-3 group-hover:text-[#0D3BC3] transition-colors">Sell-Side Readiness</h4>
                <p className="text-[#1A2234]/70 text-base mb-6 leading-relaxed">
                  Preparing your portfolio company for sale is critical to achieving optimal valuation. We streamline financials, validate operational metrics, and enhance management credibility to attract buyers and minimize surprises.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <span>→</span>
                  </span>
                </div>
              </Link>

              <Link to="/services/dividend-recap-prep" className="group block p-8 bg-[#F6F7F7] rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0D3BC3]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EDB624] uppercase tracking-wider bg-[#EDB624]/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#EDB624] rounded-full"></span>
                    Capital Return
                  </span>
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#0D3BC3] transition-colors">
                    <svg className="w-4 h-4 text-[#0D3BC3] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#1A2234] mb-3 group-hover:text-[#0D3BC3] transition-colors">Dividend Recapitalization</h4>
                <p className="text-[#1A2234]/70 text-base mb-6 leading-relaxed">
                  We help sponsors return capital to LPs through strategic dividend recaps. Our team assesses cash flow stability, debt capacity, and market conditions to structure optimal transactions.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <span>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Family Office Services */}
          <div id="fo-services" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1A2234]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1A2234]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2234]">Family Office & Independent Sponsor</h3>
                <p className="text-[#1A2234]/60 text-sm">Strategic growth initiatives</p>
              </div>
            </div>
            <p className="text-[#1A2234]/70 text-base mb-8 leading-relaxed max-w-3xl pl-16">
              We empower family offices and independent sponsors to execute strategic growth initiatives with confidence. From M&A to corporate development, our expertise ensures seamless transactions and long-term value creation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-16">
              <Link to="/services/corporate-development" className="group block p-8 bg-[#F6F7F7] rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0D3BC3]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 uppercase tracking-wider bg-green-100 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    Growth
                  </span>
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#0D3BC3] transition-colors">
                    <svg className="w-4 h-4 text-[#0D3BC3] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#1A2234] mb-3 group-hover:text-[#0D3BC3] transition-colors">Corporate Development</h4>
                <p className="text-[#1A2234]/70 text-base mb-6 leading-relaxed">
                  Accelerate growth through strategic acquisitions and partnerships. Our end-to-end services include target screening, due diligence, deal structuring, and post-merger integration.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <span>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Litigation Services */}
          <div id="lit-services" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2234]">Litigation Services</h3>
                <p className="text-[#1A2234]/60 text-sm">Case infrastructure & support</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-16">
              <Link to="/services/mass-tort" className="group block p-8 bg-[#F6F7F7] rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0D3BC3]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                    Case Infrastructure
                  </span>
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#0D3BC3] transition-colors">
                    <svg className="w-4 h-4 text-[#0D3BC3] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#1A2234] mb-3 group-hover:text-[#0D3BC3] transition-colors">Mass Tort Case Management</h4>
                <p className="text-[#1A2234]/70 text-base mb-6 leading-relaxed">
                  End-to-end operational support for mass tort litigation. We provide data management, financial analysis, and strategic infrastructure to help legal teams manage complex cases.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <span>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Enhanced */}
      <section id="case-studies" className="py-20 md:py-28 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#0D3BC3] text-sm font-bold uppercase tracking-wider mb-3">Proven Results</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2234] mb-4">Case Studies</h2>
            <p className="text-[#1A2234]/70 text-lg max-w-2xl mx-auto">
              Real outcomes from real engagements. See how we've helped clients achieve optimal valuations and successful exits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sell-Side Readiness Card */}
            <Link to="/case-studies/sell-side-readiness" className="group block bg-gradient-to-br from-[#0D3BC3] via-[#0D3BC3] to-[#1e4bd9] p-8 md:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 Case Studies
                  </span>
                  <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sell-Side Readiness</h3>
                <p className="text-blue-100 text-base leading-relaxed mb-6">
                  Preparing portfolio companies for optimal valuation and smooth transactions through financial streamlining, operational metrics validation, and enhanced management credibility.
                </p>
                
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider">Featured Success Stories:</p>
                  <ul className="space-y-2.5">
                    <li className="flex gap-3 items-center text-sm text-blue-100 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>KPI Data Cube for Company Sale</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm text-blue-100 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Unlocking Value in Data-Challenged Sale</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm text-blue-100 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Building Credibility & Justifying Multiples</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>

            {/* Corporate Development Card */}
            <Link to="/case-studies/corporate-development" className="group block bg-gradient-to-br from-[#1A2234] via-[#1A2234] to-[#2a3244] p-8 md:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    2 Case Studies
                  </span>
                  <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Corporate Development</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  End-to-end corporate development services including target screening, due diligence, deal structuring, and post-merger integration to accelerate growth and expand market presence.
                </p>
                
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#EDB624] uppercase tracking-wider">Featured Success Stories:</p>
                  <ul className="space-y-2.5">
                    <li className="flex gap-3 items-center text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>From Operations to Ownership</span>
                    </li>
                    <li className="flex gap-3 items-center text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 text-[#EDB624] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Building an Acquisition Roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-white text-[#0D3BC3] px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-200"
            >
              View All Case Studies
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form - Enhanced */}
      <section id="contact" className="py-20 md:py-28 px-6 bg-[#1A2234] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D3BC3] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EDB624] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <span className="inline-block text-[#EDB624] text-sm font-bold uppercase tracking-wider mb-3">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Drive Your Business Forward</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Schedule your consultation today. Our team provides tailored solutions to meet your organization's unique needs.
              </p>
              
              {/* Quick Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#EDB624]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <a href="mailto:admin@northcastleconsulting.com" className="text-white hover:text-[#EDB624] transition-colors">admin@northcastleconsulting.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#EDB624]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <a href="tel:3144404931" className="text-white hover:text-[#EDB624] transition-colors">314.440.4931</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form
                action="https://formsubmit.co/admin@northcastleconsulting.com"
                method="POST"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_cc" value="rventrapragada@northcastleconsulting.com" />
                <input type="hidden" name="_subject" value="New Website Inquiry - North Castle Consulting" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent focus:bg-white/15 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent focus:bg-white/15 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent focus:bg-white/15 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent focus:bg-white/15 transition-all"
                    >
                      <option value="" className="text-[#1A2234]">Select a service</option>
                      <option value="Sell-Side Readiness" className="text-[#1A2234]">Sell-Side Readiness</option>
                      <option value="Dividend Recapitalization" className="text-[#1A2234]">Dividend Recapitalization</option>
                      <option value="Corporate Development" className="text-[#1A2234]">Corporate Development</option>
                      <option value="Mass Tort Services" className="text-[#1A2234]">Mass Tort Services</option>
                      <option value="Other" className="text-[#1A2234]">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">How Can We Help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent focus:bg-white/15 transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="block w-full text-center bg-[#EDB624] text-[#1A2234] px-6 py-4 rounded-lg font-bold hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer"
                >
                  Send Message
                </button>
                <p className="text-center text-white/60 text-sm mt-4 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  We typically respond within 1 business day
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-[#0f1520] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link to="/" className="inline-block">
                <h4 className="text-[#EDB624] font-bold text-xl mb-4">North Castle Consulting</h4>
              </Link>
              <p className="text-white/60 leading-relaxed text-sm mb-6">
                Actionable insights for Private Equity, Private Debt, and Corporate Development teams.
              </p>
              {/* Social/Contact Icons */}
              <div className="flex items-center gap-3">
                <a href="mailto:admin@northcastleconsulting.com" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EDB624] hover:text-[#1A2234] transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="tel:3144404931" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EDB624] hover:text-[#1A2234] transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h5>
              <div className="space-y-3">
                <Link to="/services/sell-side-readiness" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Sell-Side Readiness</Link>
                <Link to="/services/dividend-recap-prep" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Dividend Recap Prep</Link>
                <Link to="/services/corporate-development" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Corporate Development</Link>
                <Link to="/services/mass-tort" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Mass Tort Services</Link>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h5>
              <div className="space-y-3">
                <Link to="/about-us" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">About Us</Link>
                <Link to="/case-studies" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Case Studies</Link>
                <Link to="/blog" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Blog & Insights</Link>
                <Link to="/contact-us" className="block text-white/60 hover:text-[#EDB624] transition-colors text-sm">Contact</Link>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h5>
              <div className="space-y-3 text-sm">
                <p className="text-white/60">admin@northcastleconsulting.com</p>
                <p className="text-white/60">314.440.4931</p>
                <p className="text-white/60">St. Louis, MO</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 North Castle Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/" className="text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function NorthCastleConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />

        {/* Service Pages */}
        <Route path="/services/sell-side-readiness" element={<SellSideReadinessPage />} />
        <Route path="/services/dividend-recap-prep" element={<DividendRecapPage />} />
        <Route path="/services/corporate-development" element={<CorporateDevPage />} />
        <Route path="/services/mass-tort" element={<MassTortPage />} />

        {/* Case Studies Landing Page */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />

        {/* Case Study Category Pages */}
        <Route path="/case-studies/sell-side-readiness" element={<SellSideReadinessCaseStudiesPage />} />
        <Route path="/case-studies/corporate-development" element={<CorporateDevelopmentCaseStudiesPage />} />

        {/* Case Study Pages */}
        <Route path="/case-studies/sell-side-kpi-data-cube" element={<KPIDataCubeCaseStudyPage />} />
        <Route path="/case-studies/sell-side-data-challenged-sale" element={<DataChallengedCaseStudyPage />} />
        <Route path="/case-studies/sell-side-credibility-multiples" element={<BuildingCredibilityPage />} />
        <Route path="/case-studies/sell-side-investment-credibility" element={<EnhancingInvestmentCredibilityPage />} />
        <Route path="/case-studies/sell-side-operations-marketing" element={<StreamliningOperationsCaseStudyPage />} />
        <Route path="/case-studies/corporate-operations-to-ownership" element={<CarRentalCaseStudyPage />} />
        <Route path="/case-studies/corporate-acquisition-roadmap" element={<TargetIdentificationCaseStudyPage />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/data-visibility-roi-driver" element={<DataVisibilityBlogPost />} />

        {/* Newsletter */}
        <Route path="/newsletter" element={<MassTortDigestTemplate />} />
      </Routes>
    </div>
  );
}