import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import MassTortPage from './MassTortPage.jsx';
import DashboardingDataPortalPage from './DashboardingDataPortalPage.jsx';
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
import NewsletterPage from './components/newsletters/NewsletterPage.jsx';
// import NewslettersListPage from './components/newsletters/NewslettersListPage.jsx';  // Unused - now using MassTortDigestTemplate
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
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-[#051c2c] hover:text-[#2563EB] transition-colors tracking-tight">
            North Castle Consulting
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <div className="relative group">
              <button className="text-[#051c2c] hover:text-[#2563EB] transition-colors text-sm font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 w-56 hidden group-hover:block z-50"><div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <Link to="/services/sell-side-readiness" className="block px-4 py-2 text-sm text-[#051c2c] hover:bg-gray-50 hover:text-[#2563EB]">Sell-Side Readiness</Link>
                <Link to="/services/corporate-development" className="block px-4 py-2 text-sm text-[#051c2c] hover:bg-gray-50 hover:text-[#2563EB]">Corporate Development</Link>
                <Link to="/services/mass-tort" className="block px-4 py-2 text-sm text-[#051c2c] hover:bg-gray-50 hover:text-[#2563EB]">Mass Tort</Link>
                <Link to="/services/dashboarding-data-portal" className="block px-4 py-2 text-sm text-[#051c2c] hover:bg-gray-50 hover:text-[#2563EB]">Dashboarding & Data Portal</Link>
              </div></div>
            </div>
            <Link to="/case-studies" className="text-[#051c2c] hover:text-[#2563EB] transition-colors text-sm font-medium">Case Studies</Link>
            <Link to="/blog" className="text-[#051c2c] hover:text-[#2563EB] transition-colors text-sm font-medium">Insights</Link>
            <Link to="/about-us" className="text-[#051c2c] hover:text-[#2563EB] transition-colors text-sm font-medium">About</Link>
            <Link to="/contact-us" className="bg-[#051c2c] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#2563EB] transition-colors">Contact</Link>
          </div>

          <button className="md:hidden text-[#051c2c] text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 flex flex-col gap-2 text-sm border-t border-gray-100 pt-3">
            <div className="font-medium text-[#051c2c] py-1">Services</div>
            <div className="pl-4 flex flex-col gap-1 border-l-2 border-gray-200 ml-2">
              <Link to="/services/sell-side-readiness" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c]/80 hover:text-[#2563EB] py-1">Sell-Side Readiness</Link>
              <Link to="/services/corporate-development" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c]/80 hover:text-[#2563EB] py-1">Corporate Development</Link>
              <Link to="/services/mass-tort" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c]/80 hover:text-[#2563EB] py-1">Mass Tort</Link>
              <Link to="/services/dashboarding-data-portal" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c]/80 hover:text-[#2563EB] py-1">Dashboarding & Data Portal</Link>
            </div>
            <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c] hover:text-[#2563EB] py-1">Case Studies</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c] hover:text-[#2563EB] py-1">Insights</Link>
            <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c] hover:text-[#2563EB] py-1">About</Link>
            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c] hover:text-[#2563EB] py-1">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function HomePage() {
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
  };

  return (
    <>
      {/* Hero Section - McKinsey Style Editorial Layout with Images + SVGs */}
      <section className="pt-16 bg-white">
        {/* Top Headline Area - McKinsey Blue Gradient */}
        <div className="px-6 md:px-12 py-12 md:py-16 bg-gradient-to-r from-[#051c2c] to-[#0c4a6e]">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight max-w-4xl">
              Financial expertise for Private Equity and Corporate Development teams seeking <em className="text-[#60a5fa]">measurable outcomes</em>.
            </h1>
          </div>
        </div>

        {/* Featured Content Grid - Mix of Images and SVGs */}
        <div className="px-6 md:px-12 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-4">
              
              {/* Featured Article - Large (8 cols) with External Image */}
              <Link to="/blog/data-visibility-roi-driver" className="group md:col-span-8 relative overflow-hidden min-h-[400px] md:min-h-[500px]">
                {/* External Image Background */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" 
                    alt="Data Analytics Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider mb-4 w-fit">Article</span>
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-3 leading-tight">
                    Data Visibility as an ROI Driver
                  </h2>
                  <p className="text-white/80 text-lg mb-4 max-w-xl leading-relaxed">
                    How PE firms can leverage data infrastructure to unlock portfolio company value.
                  </p>
                  <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                    Read the article
                  </span>
                </div>
              </Link>

              {/* Right Column - Stacked Cards (4 cols) with External Images */}
              <div className="md:col-span-4 flex flex-col gap-4">
                
                {/* Case Study Card - With External Image */}
                <Link to="/case-studies/sell-side-readiness" className="group relative overflow-hidden flex-1 min-h-[240px]">
                  {/* External Image Background */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                      alt="Business Growth Chart"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/50 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider w-fit">Case Study</span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        Preparing Portfolio Companies
                      </h3>
                      <span className="inline-flex items-center text-white/90 text-sm font-medium">
                        Explore <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Service Offering Card - With External Image */}
                <Link to="/services/sell-side-readiness" className="group relative overflow-hidden flex-1 min-h-[240px]">
                  {/* External Image Background */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                      alt="Professional Consulting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/50 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <span className="inline-block px-3 py-1 bg-white text-[#051c2c] text-xs font-semibold uppercase tracking-wider w-fit">Service Offering</span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        Sell-Side Readiness
                      </h3>
                      <span className="inline-flex items-center text-white/90 text-sm font-medium">
                        Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                      </span>
                    </div>
                  </div>
                </Link>

              </div>
            </div>

            {/* Secondary Row - 3 Column Grid with Graphics */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              
              {/* Article Card - Data Cube Graphic */}
              <Link to="/blog" className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#2563EB] transition-colors duration-300">
                {/* Data Cube Illustration */}
                <div className="h-40 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* 3D Cube structure */}
                      <path d="M 60 10 L 100 30 L 100 70 L 60 90 L 20 70 L 20 30 Z" fill="white" stroke="#2563EB" strokeWidth="2"/>
                      <path d="M 60 10 L 60 50" stroke="#2563EB" strokeWidth="2" opacity="0.5"/>
                      <path d="M 100 30 L 60 50" stroke="#2563EB" strokeWidth="2" opacity="0.5"/>
                      <path d="M 20 30 L 60 50" stroke="#2563EB" strokeWidth="2" opacity="0.5"/>
                      {/* Inner grid lines */}
                      <path d="M 40 20 L 40 60" stroke="#2563EB" strokeWidth="1" opacity="0.3"/>
                      <path d="M 80 20 L 80 60" stroke="#2563EB" strokeWidth="1" opacity="0.3"/>
                      <path d="M 30 45 L 90 45" stroke="#2563EB" strokeWidth="1" opacity="0.3"/>
                      {/* Data points */}
                      <circle cx="60" cy="50" r="5" fill="#2563EB"/>
                      <circle cx="40" cy="35" r="3" fill="#60a5fa"/>
                      <circle cx="80" cy="40" r="3" fill="#60a5fa"/>
                      <circle cx="50" cy="65" r="3" fill="#60a5fa"/>
                      <circle cx="70" cy="60" r="3" fill="#60a5fa"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-[#051c2c] text-xs font-medium uppercase tracking-wider mb-3">Insight</span>
                  <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                    The Power of the Data Cube
                  </h3>
                  <p className="text-[#051c2c]/60 text-sm mb-3">Streamline exit preparation with unified data architecture.</p>
                  <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                    Read <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </span>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
              </Link>

              {/* Case Study Card 2 - M&A Handshake/Target Graphic */}
              <Link to="/case-studies/corporate-development" className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#2563EB] transition-colors duration-300">
                {/* Corporate Development Illustration */}
                <div className="h-40 bg-gradient-to-br from-[#051c2c] to-[#1e3a5f] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Connected nodes representing M&A */}
                      <circle cx="30" cy="50" r="20" fill="#2563EB" opacity="0.3"/>
                      <circle cx="30" cy="50" r="12" fill="#2563EB"/>
                      <circle cx="110" cy="30" r="15" fill="#60a5fa" opacity="0.8"/>
                      <circle cx="110" cy="70" r="15" fill="#60a5fa" opacity="0.6"/>
                      <circle cx="80" cy="50" r="10" fill="white" opacity="0.9"/>
                      {/* Connection lines */}
                      <line x1="42" y1="50" x2="70" y2="50" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2"/>
                      <line x1="88" y1="45" x2="98" y2="35" stroke="#60a5fa" strokeWidth="2"/>
                      <line x1="88" y1="55" x2="98" y2="65" stroke="#60a5fa" strokeWidth="2"/>
                      {/* Target/bullseye on right nodes */}
                      <circle cx="110" cy="30" r="6" fill="none" stroke="#051c2c" strokeWidth="2"/>
                      <circle cx="110" cy="30" r="2" fill="#051c2c"/>
                      {/* Plus signs indicating growth */}
                      <path d="M 130 20 L 130 30 M 125 25 L 135 25" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M 130 60 L 130 70 M 125 65 L 135 65" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-[#051c2c] text-xs font-medium uppercase tracking-wider mb-3">Case Study</span>
                  <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                    Corporate Development
                  </h3>
                  <p className="text-[#051c2c]/60 text-sm mb-3">End-to-end M&A support for independent sponsors.</p>
                  <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                    Explore <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
              </Link>

              {/* Service Card 2 - Dashboard Monitor Graphic */}
              <Link to="/services/dashboarding-data-portal" className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#2563EB] transition-colors duration-300">
                {/* Dashboard Illustration */}
                <div className="h-40 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Monitor frame */}
                      <rect x="10" y="5" width="120" height="70" rx="4" fill="white" opacity="0.95"/>
                      <rect x="10" y="5" width="120" height="70" rx="4" stroke="#051c2c" strokeWidth="2"/>
                      {/* Screen content */}
                      <rect x="18" y="15" width="104" height="50" fill="#f5f5f5"/>
                      {/* Dashboard elements */}
                      {/* Chart 1 - Bar */}
                      <rect x="25" y="45" width="15" height="12" fill="#2563EB" opacity="0.8"/>
                      <rect x="25" y="35" width="15" height="8" fill="#60a5fa"/>
                      {/* Chart 2 - Line */}
                      <path d="M 50 50 L 60 42 L 70 45 L 80 35" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="80" cy="35" r="3" fill="#2563EB"/>
                      {/* Chart 3 - Pie */}
                      <circle cx="105" cy="42" r="12" fill="#e8e8e8"/>
                      <path d="M 105 42 L 105 30 A 12 12 0 0 1 115 48 Z" fill="#2563EB"/>
                      <path d="M 105 42 L 115 48 A 12 12 0 0 1 105 54 Z" fill="#60a5fa"/>
                      {/* Stand */}
                      <rect x="60" y="75" width="20" height="8" fill="#051c2c"/>
                      <rect x="50" y="83" width="40" height="4" rx="2" fill="#051c2c"/>
                      {/* Data pulse indicator */}
                      <circle cx="125" y="12" r="3" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-[#051c2c] text-xs font-medium uppercase tracking-wider mb-3">Service</span>
                  <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                    Dashboarding & Data Portal
                  </h3>
                  <p className="text-[#051c2c]/60 text-sm mb-3">Real-time visibility into portfolio performance.</p>
                  <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                    Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
              </Link>

            </div>
          </div>
        </div>
      </section>



      {/* Services Overview - Clean Professional Style */}
      <section id="services" className="py-10 md:py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium text-[#051c2c]">What we do</h2>
            <Link to="/services/sell-side-readiness" className="text-sm text-[#051c2c] hover:text-[#2563EB] transition-colors font-medium">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            <Link to="/services/sell-side-readiness" className="group bg-white p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Sell-Side Readiness</h3>
              <p className="text-[#051c2c]/60 text-sm">
                Preparing portfolio companies for optimal valuation and successful exits.
              </p>
            </Link>

            <Link to="/services/corporate-development" className="group bg-white p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Corporate Development</h3>
              <p className="text-[#051c2c]/60 text-sm">
                End-to-end M&A support for family offices and independent sponsors.
              </p>
            </Link>

            <Link to="/services/dashboarding-data-portal" className="group bg-white p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Dashboarding & Data Portal</h3>
              <p className="text-[#051c2c]/60 text-sm">
                Custom dashboards for real-time portfolio visibility.
              </p>
            </Link>

            <Link to="/services/mass-tort" className="group bg-white p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Mass Tort</h3>
              <p className="text-[#051c2c]/60 text-sm">
                End-to-end litigation intelligence and operational infrastructure for law firms.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies - McKinsey Style */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Proven Results</span>
              <h2 className="text-2xl font-normal text-[#051c2c] mt-2">Case Studies</h2>
            </div>
            <Link to="/case-studies" className="text-sm font-medium text-[#051c2c] hover:text-[#2563EB] transition-colors flex items-center gap-1">
              View all <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/case-studies/sell-side-readiness" className="group block border-t-2 border-[#051c2c] pt-4 hover:border-[#2563EB] transition-colors">
              <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">5 Case Studies</span>
              <h3 className="text-lg font-medium text-[#051c2c] mt-2 mb-2 group-hover:text-[#2563EB] transition-colors">
                Sell-Side Readiness
              </h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">
                Preparing portfolio companies for optimal valuation through financial streamlining and metrics validation.
              </p>
            </Link>

            <Link to="/case-studies/corporate-development" className="group block border-t-2 border-[#051c2c] pt-4 hover:border-[#2563EB] transition-colors">
              <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">2 Case Studies</span>
              <h3 className="text-lg font-medium text-[#051c2c] mt-2 mb-2 group-hover:text-[#2563EB] transition-colors">
                Corporate Development
              </h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">
                End-to-end corporate development including target screening, due diligence, and deal structuring.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - McKinsey Style */}
      <section id="contact" className="py-12 md:py-16 px-6 bg-[#051c2c] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#60a5fa]">Get In Touch</span>
              <h2 className="text-2xl font-normal mt-2 mb-4">Contact Us</h2>
              <p className="text-white/70 text-base mb-8 leading-relaxed">
                Ready to discuss your next transaction? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm mb-1">Email</p>
                  <a href="mailto:admin@northcastleconsulting.com" className="text-white hover:text-[#60a5fa] transition-colors">admin@northcastleconsulting.com</a>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Phone</p>
                  <a href="tel:3144404931" className="text-white hover:text-[#60a5fa] transition-colors">314.440.4931</a>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Location</p>
                  <p className="text-white">St. Louis, MO</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form
                action="https://formsubmit.co/admin@northcastleconsulting.com"
                method="POST"
                className="bg-white/5 rounded p-6"
              >
                <input type="hidden" name="_cc" value="rventrapragada@northcastleconsulting.com" />
                <input type="hidden" name="_subject" value="New Website Inquiry - North Castle Consulting" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#60a5fa] transition-all text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-1.5">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#60a5fa] transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className="block text-sm text-white/70 mb-1.5">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#60a5fa] transition-all text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-white/70 mb-1.5">Interest</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#60a5fa] transition-all text-sm"
                    >
                      <option value="" className="text-[#051c2c]">Select...</option>
                      <option value="Sell-Side Readiness" className="text-[#051c2c]">Sell-Side Readiness</option>
                      <option value="Corporate Development" className="text-[#051c2c]">Corporate Development</option>
                      <option value="Dashboarding & Data Portal" className="text-[#051c2c]">Dashboarding & Data Portal</option>
                      <option value="Other" className="text-[#051c2c]">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm text-white/70 mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#60a5fa] transition-all resize-none text-sm"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="block w-full text-center bg-white text-[#051c2c] px-4 py-3 font-medium hover:bg-[#60a5fa] transition-all duration-300 cursor-pointer text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - McKinsey Style */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <Link to="/" className="font-semibold text-[#051c2c]">North Castle Consulting</Link>
              <p className="text-[#051c2c]/60 text-sm mt-1">Financial advisory for Private Equity and Corporate Development.</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/services/sell-side-readiness" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Services</Link>
              <Link to="/case-studies" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Case Studies</Link>
              <Link to="/blog" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Insights</Link>
              <Link to="/contact-us" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 text-center text-[#051c2c]/40 text-sm">
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
        <Route path="/services/dashboarding-data-portal" element={<DashboardingDataPortalPage />} />
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
        <Route path="/newsletter/:weekId" element={<NewsletterPage />} />
        <Route path="/newsletters" element={<MassTortDigestTemplate />} />
      </Routes>
    </div>
  );
}