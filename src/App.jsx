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
      {/* Hero Section - Professional B2B */}
      <section className="pt-16">
        <div className="bg-[#0D3BC3] px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Unlocking Value Through <span className="text-[#EDB624]">Financial Expertise</span>
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
              Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams to maximize value, reduce risk, and drive successful outcomes.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSelector('#contact')}
                className="inline-flex items-center gap-2 bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold hover:bg-white transition-all duration-300"
              >
                Schedule a Consultation
              </button>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded font-medium border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="bg-[#F6F7F7] px-6 md:px-12 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Services Offered Card */}
              <button 
                onClick={() => scrollToSelector('#services')}
                className="group text-left bg-white rounded-lg p-5 shadow-sm hover:shadow-md border border-gray-200 hover:border-[#0D3BC3]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D3BC3] transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-1 group-hover:text-[#0D3BC3] transition-colors">Services Offered</h3>
                    <p className="text-[#1A2234]/60 text-sm leading-relaxed">
                      Comprehensive solutions for Private Equity, Family Offices, and Litigation support.
                    </p>
                  </div>
                </div>
              </button>

              {/* Case Studies Card */}
              <Link 
                to="/case-studies"
                className="group text-left bg-white rounded-lg p-5 shadow-sm hover:shadow-md border border-gray-200 hover:border-[#0D3BC3]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D3BC3] transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-1 group-hover:text-[#0D3BC3] transition-colors">Case Studies</h3>
                    <p className="text-[#1A2234]/60 text-sm leading-relaxed">
                      Real results from real engagements and successful client outcomes.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Professional B2B */}
      <section id="services" className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2234] mb-3">Our Services</h2>
            <p className="text-[#1A2234]/70 text-base max-w-2xl">
              From private debt advisory to M&A support, we deliver tailored services that drive growth, mitigate risks, and maximize value.
            </p>
          </div>

          {/* Private Equity Services */}
          <div id="pe-services" className="mb-10 scroll-mt-24">
            <h3 className="text-lg font-semibold text-[#1A2234] mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#0D3BC3] rounded"></span>
              Private Equity Services
            </h3>
            <p className="text-[#1A2234]/70 text-sm mb-4 leading-relaxed max-w-3xl">
              We partner with private equity firms to unlock value, optimize capital structures, and drive successful exits.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/services/sell-side-readiness" className="group block p-5 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-200">
                <h4 className="text-base font-semibold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Sell-Side Readiness</h4>
                <p className="text-[#1A2234]/60 text-sm mb-3 leading-relaxed">
                  Preparing portfolio companies for sale through financial streamlining, metrics validation, and credibility enhancement.
                </p>
                <span className="text-[#0D3BC3] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span>→</span>
                </span>
              </Link>

              <Link to="/services/dividend-recap-prep" className="group block p-5 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-200">
                <h4 className="text-base font-semibold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Dividend Recapitalization</h4>
                <p className="text-[#1A2234]/60 text-sm mb-3 leading-relaxed">
                  Strategic dividend recapitalizations to return capital to LPs while assessing cash flow stability and debt capacity.
                </p>
                <span className="text-[#0D3BC3] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span>→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Family Office Services */}
          <div id="fo-services" className="mb-10 scroll-mt-24">
            <h3 className="text-lg font-semibold text-[#1A2234] mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#1A2234] rounded"></span>
              Family Office & Independent Sponsor
            </h3>
            <p className="text-[#1A2234]/70 text-sm mb-4 leading-relaxed max-w-3xl">
              We empower family offices and independent sponsors to execute strategic growth initiatives with confidence.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/services/corporate-development" className="group block p-5 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-200">
                <h4 className="text-base font-semibold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Corporate Development</h4>
                <p className="text-[#1A2234]/60 text-sm mb-3 leading-relaxed">
                  End-to-end services including target screening, due diligence, deal structuring, and post-merger integration.
                </p>
                <span className="text-[#0D3BC3] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span>→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Litigation Services */}
          <div id="lit-services" className="scroll-mt-24">
            <h3 className="text-lg font-semibold text-[#1A2234] mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-slate-500 rounded"></span>
              Litigation Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/services/mass-tort" className="group block p-5 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-200">
                <h4 className="text-base font-semibold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Mass Tort Case Management</h4>
                <p className="text-[#1A2234]/60 text-sm mb-3 leading-relaxed">
                  Operational support for mass tort litigation including data management and financial analysis.
                </p>
                <span className="text-[#0D3BC3] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span>→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Professional B2B */}
      <section id="case-studies" className="py-12 md:py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2234] mb-3">Case Studies</h2>
            <p className="text-[#1A2234]/70 text-base max-w-2xl">
              Real outcomes from real engagements. See how we've helped clients achieve optimal valuations and successful exits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Sell-Side Readiness Card */}
            <Link to="/case-studies/sell-side-readiness" className="group block bg-white p-6 rounded-lg hover:shadow-sm transition-all duration-300 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">5 Case Studies</span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#0D3BC3] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Sell-Side Readiness</h3>
              <p className="text-[#1A2234]/60 text-sm leading-relaxed mb-4">
                Preparing portfolio companies for optimal valuation through financial streamlining and metrics validation.
              </p>
              <ul className="space-y-2 text-sm text-[#1A2234]/70">
                <li className="flex gap-2 items-center">
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>KPI Data Cube for Company Sale</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>Unlocking Value in Data-Challenged Sale</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>Building Credibility & Justifying Multiples</span>
                </li>
              </ul>
            </Link>

            {/* Corporate Development Card */}
            <Link to="/case-studies/corporate-development" className="group block bg-white p-6 rounded-lg hover:shadow-sm transition-all duration-300 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">2 Case Studies</span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#0D3BC3] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Corporate Development</h3>
              <p className="text-[#1A2234]/60 text-sm leading-relaxed mb-4">
                End-to-end corporate development including target screening, due diligence, and deal structuring.
              </p>
              <ul className="space-y-2 text-sm text-[#1A2234]/70">
                <li className="flex gap-2 items-center">
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>From Operations to Ownership</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span>Building an Acquisition Roadmap</span>
                </li>
              </ul>
            </Link>
          </div>

          <div className="mt-6">
            <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[#0D3BC3] font-medium hover:gap-3 transition-all"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form - Professional B2B */}
      <section id="contact" className="py-12 md:py-16 px-6 bg-[#1A2234] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="text-white/70 text-base mb-6">
                Schedule your consultation. Our team provides tailored solutions to meet your organization's unique needs.
              </p>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-white/50">Email</p>
                  <a href="mailto:admin@northcastleconsulting.com" className="text-white hover:text-[#EDB624] transition-colors">admin@northcastleconsulting.com</a>
                </div>
                <div>
                  <p className="text-white/50">Phone</p>
                  <a href="tel:3144404931" className="text-white hover:text-[#EDB624] transition-colors">314.440.4931</a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form
                action="https://formsubmit.co/admin@northcastleconsulting.com"
                method="POST"
                className="bg-white/5 rounded-lg p-6 border border-white/10"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_cc" value="rventrapragada@northcastleconsulting.com" />
                <input type="hidden" name="_subject" value="New Website Inquiry - North Castle Consulting" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1.5">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1.5">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2.5 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all text-sm"
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

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">How Can We Help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all resize-none text-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="block w-full text-center bg-[#EDB624] text-[#1A2234] px-4 py-3 rounded font-semibold hover:bg-white transition-all duration-300 cursor-pointer text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional B2B */}
      <footer className="bg-[#0D3BC3] text-white py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <Link to="/" className="font-semibold text-white">North Castle Consulting</Link>
              <p className="text-white/60 text-sm mt-1">Financial advisory for Private Equity and Corporate Development.</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/services/sell-side-readiness" className="text-white/70 hover:text-white transition-colors">Services</Link>
              <Link to="/case-studies" className="text-white/70 hover:text-white transition-colors">Case Studies</Link>
              <Link to="/about-us" className="text-white/70 hover:text-white transition-colors">About</Link>
              <Link to="/contact-us" className="text-white/70 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6 text-center text-white/50 text-sm">
            © 2025 North Castle Consulting. All rights reserved.
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