import React, { useState } from 'react';
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
            <button onClick={() => scrollToSelector('#case-studies')} className="text-white hover:text-[#EDB624] transition-colors text-sm font-medium">Case Studies</button>
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
              <button onClick={ () => { scrollToSelector('#case-studies'); setMobileMenuOpen(false); }} className="text-white hover:text-[#EDB624]">Case Studies</button>
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
      {/* Hero Section */}
      <section className="pt-16">
        <div className="grid lg:grid-cols-2">
          {/* Left: Main Content - Blue */}
          <div className="bg-[#0D3BC3] px-6 md:px-12 py-14 md:py-20">
            <div className="max-w-xl ml-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Unlocking Value Through<br />
                <span className="text-[#EDB624]">Financial Expertise</span>
              </h1>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                Delivering actionable insights and tailored solutions for Private Equity and Corporate Development teams to maximize value, reduce risk, and drive success.
              </p>
              <button
                onClick={() => scrollToSelector('#contact')}
                className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right: Quick Links - White */}
          <div className="bg-white px-6 md:px-12 py-14 md:py-20">
            <div className="max-w-md mr-auto space-y-6">
              <button
                onClick={() => scrollToSelector('#pe-services')}
                className="group block w-full text-left"
              >
                <div className="text-[#0D3BC3] text-xs font-semibold uppercase tracking-wider mb-1">Private Equity</div>
                <div className="text-[#1A2234] font-medium group-hover:text-[#0D3BC3] transition-colors">Sell-Side Readiness & Portfolio Support</div>
                <div className="text-[#1A2234]/60 text-sm mt-1">Position your portfolio company for optimal valuation</div>
              </button>

              <div className="border-t border-slate-300"></div>

              <button
                onClick={() => scrollToSelector('#fo-services')}
                className="group block w-full text-left"
              >
                <div className="text-[#0D3BC3] text-xs font-semibold uppercase tracking-wider mb-1">Family Office</div>
                <div className="text-[#1A2234] font-medium group-hover:text-[#0D3BC3] transition-colors">Corporate Development & M&A</div>
                <div className="text-[#1A2234]/60 text-sm mt-1">End-to-end transaction support and advisory</div>
              </button>

              <div className="border-t border-slate-300"></div>

              <button
                onClick={() => scrollToSelector('#lit-services')}
                className="group block w-full text-left"
              >
                <div className="text-[#0D3BC3] text-xs font-semibold uppercase tracking-wider mb-1">Litigation</div>
                <div className="text-[#1A2234] font-medium group-hover:text-[#0D3BC3] transition-colors">Mass Tort Financial Analysis</div>
                <div className="text-[#1A2234]/60 text-sm mt-1">Operational infrastructure for law firms at scale</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-20 px-6 bg-[#F6F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Explore Our Tailored Financial Solutions</h2>
            <p className="text-[#1A2234]/70 text-lg max-w-2xl mx-auto">
              We deliver tailored services that drive growth, mitigate risk, and maximize value for private equity firms, family offices, and independent sponsors.
            </p>
          </div>

          {/* Private Equity Services */}
          <div id="pe-services" className="mb-12 scroll-mt-24">
            <h3 className="text-xl font-bold text-[#1A2234] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#0D3BC3] rounded-full"></span>
              Private Equity Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/services/dividend-recap-prep" className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <p className="block text-xs font-bold text-[#1A2234] uppercase tracking-wider">Revenue Assurance</p>
                  <div className="h-6 w-0.5 bg-current rotate-12"></div>
                </div>
                <h4 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">KPI Data Cube for Company Sale</h4>
                <p className="text-[#1A2234]/70 text-base mb-4 leading-relaxed">
                  Actionable data cube for revenue & expense validation during diligence
                </p>
                <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
              
              <Link to="/services/sell-side-readiness" className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <p className="block text-xs font-bold text-[#1A2234] uppercase tracking-wider">Portfolio Value</p>
                  <div className="h-6 w-0.5 bg-current rotate-12"></div>
                </div>
                <h4 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Unlocking Value in Data-Challenged Sale</h4>
                <p className="text-[#1A2234]/70 text-base mb-4 leading-relaxed">
                  Navigate data challenges during sell-side process with our solutions
                </p>
                <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Family Office Services */}
          <div id="fo-services" className="mb-12 scroll-mt-24">
            <h3 className="text-xl font-bold text-[#1A2234] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#0D3BC3] rounded-full"></span>
              Family Office / Independent Sponsor
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/services/corporate-development" className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <p className="block text-xs font-bold text-[#1A2234] uppercase tracking-wider">Growth Acceleration</p>
                  <div className="h-6 w-0.5 bg-current rotate-12"></div>
                </div>
                <h4 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">From Operations to Ownership</h4>
                <p className="text-[#1A2234]/70 text-base mb-4 leading-relaxed">
                  Strategic guidance for transitioning from operating company to investment holding
                </p>
                <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
                
            </div>
          </div>

          {/* Litigation Services */}
          <div id="lit-services" className="scroll-mt-24">
            <h3 className="text-xl font-bold text-[#1A2234] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#0D3BC3] rounded-full"></span>
              Litigation Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/services/mass-tort" className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <p className="block text-xs font-bold text-[#1A2234] uppercase tracking-wider">Case Infrastructure</p>
                  <div className="h-6 w-0.5 bg-current rotate-12"></div>
                </div>
                <h4 className="text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">Mass Tort Case Management</h4>
                <p className="text-[#1A2234]/70 text-base mb-4 leading-relaxed">
                  End-to-end operational support for mass tort litigation
                </p>
                <span className="text-[#0D3BC3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Case Studies</h2>
            <p className="text-[#1A2234]/70 text-lg">
              Proven results across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sell-Side Readiness Card */}
            <Link to="/case-studies/sell-side-readiness" className="group block bg-gradient-to-br from-[#0D3BC3] to-[#0D3BC3]/90 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-3 py-1 rounded">
                  5 Case Studies
                </span>
                <svg className="w-6 h-6 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Sell-Side Readiness</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Preparing portfolio companies for optimal valuation and smooth transactions through financial streamlining, operational metrics validation, and enhanced management credibility.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>KPI Data Cube for Company Sale</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>Unlocking Value in Data-Challenged Sale</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>Building Credibility & Justifying Multiples</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>Enhancing Investment Credibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>Streamlining Operations and Marketing Insights</span>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-[#EDB624] font-semibold group-hover:gap-3 transition-all">
                View All Case Studies <span>→</span>
              </div>
            </Link>

            {/* Corporate Development Card */}
            <Link to="/case-studies/corporate-development" className="group block bg-gradient-to-br from-[#1A2234] to-[#1A2234]/90 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-[#EDB624] px-3 py-1 rounded">
                  2 Case Studies
                </span>
                <svg className="w-6 h-6 text-[#EDB624] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Corporate Development</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                End-to-end corporate development services including target screening, due diligence, deal structuring, and post-merger integration to accelerate growth and expand market presence.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>From Operations to Ownership</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EDB624]">-chevron-right</span>
                  <span>Building an Acquisition Roadmap</span>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-[#EDB624] font-semibold group-hover:gap-3 transition-all">
                View All Case Studies <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-20 px-6 bg-[#1A2234] text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Drive Your Business Forward</h2>
            <p className="text-white/80 text-lg">
              Schedule your consultation today to leverage our expert insights and drive your business forward. Our team provides tailored solutions to meet your organization's unique needs.
            </p>
          </div>

          <form
            action="https://formsubmit.co/admin@northcastleconsulting.com"
            method="POST"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent"
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

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-medium mb-2">How Can We Help? *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624] focus:border-transparent resize-none"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full text-center bg-[#EDB624] text-[#1A2234] px-6 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg text-lg cursor-pointer"
            >
              Contact Us
            </button>
            <p className="text-center text-white/60 text-sm mt-4">We typically respond within 1 business day</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2234] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-[#EDB624] font-bold text-lg mb-3">North Castle Consulting</h4>
              <p className="text-white/70 leading-relaxed">
                Actionable insights for Private Equity, Private Debt, and Corporate Development teams.
              </p>
            </div>
            <div>
              <h4 className="text-[#EDB624] font-bold text-lg mb-3">Services</h4>
              <div className="space-y-2">
                <Link to="/services/dividend-recap-prep" className="block text-white/70 hover:text-[#EDB624] transition-colors">Dividend Recap Prep</Link>
                <Link to="/services/sell-side-readiness" className="block text-white/70 hover:text-[#EDB624] transition-colors">Sell-Side Readiness</Link>
                <Link to="/services/corporate-development" className="block text-white/70 hover:text-[#EDB624] transition-colors">Corporate Development</Link>
                <Link to="/services/mass-tort" className="block text-white/70 hover:text-[#EDB624] transition-colors">Mass Tort</Link>
              </div>
            </div>
            <div>
              <h4 className="text-[#EDB624] font-bold text-lg mb-3">Contact</h4>
              <p className="text-white/70">contact@northcastleconsulting.com</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
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

        {/* Case Study Category Pages */}
        <Route path="/case-studies/sell-side-readiness" element={<SellSideReadinessCaseStudiesPage />} />
        <Route path="/case-studies/corporate-development" element={<CorporateDevelopmentCaseStudiesPage />} />

        {/* Case Study Pages */}
        <Route path="/case-studies/sell-side-kpi-data-cube" element={<KPIDataCubeCaseStudyPage />} />
        <Route path="/case-studies/sell-side-data-challenged-sale" element={<DataChallengedCaseStudyPage />} />
        <Route path="/case-studies/sell-side-credibility-multiples" element={<BuildingCredibilityPage />} />
        <Route path="/case-studies/sell-side-investment-credibility" element={<EnhancingInvestmentCredibilityPage />} />
        <Route path="/case-studies/sell-side-operations-marketing" element={<StreamliningOperationsCaseStudyPage />} />
        <Route path="/case-studies/corporate-operations-ownership" element={<CarRentalCaseStudyPage />} />
        <Route path="/case-studies/corporate-acquisition-roadmap" element={<TargetIdentificationCaseStudyPage />} />

        {/* Newsletter */}
        <Route path="/newsletter" element={<MassTortDigestTemplate />} />
      </Routes>
    </div>
  );
}