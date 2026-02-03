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
            <Link to="/services/sell-side-readiness" className="text-[#051c2c] hover:text-[#2563EB] transition-colors text-sm font-medium">Services</Link>
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
            <Link to="/services/sell-side-readiness" onClick={() => setMobileMenuOpen(false)} className="text-[#051c2c] hover:text-[#2563EB] py-1">Services</Link>
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
      {/* Hero Section - McKinsey Style Editorial Layout */}
      <section className="pt-16 bg-white">
        {/* Top Headline Area */}
        <div className="px-6 md:px-12 py-12 md:py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#051c2c] leading-[1.15] tracking-tight max-w-4xl">
              Financial expertise for Private Equity and Corporate Development teams seeking <em className="text-[#2563EB]">measurable outcomes</em>.
            </h1>
          </div>
        </div>

        {/* Featured Content Grid - McKinsey Style with Hover Effects */}
        <div className="px-6 md:px-12 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-4">
              
              {/* Featured Article - Large (8 cols) */}
              <Link to="/blog/data-visibility-roi-driver" className="group md:col-span-8 relative overflow-hidden bg-[#051c2c] min-h-[400px] md:min-h-[500px]">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#051c2c] via-[#0a2540] to-[#1e3a5f]"></div>
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-medium uppercase tracking-wider mb-4">Article</span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-normal text-white mb-3 group-hover:translate-x-2 transition-transform duration-500">
                      Data Visibility as an ROI Driver
                    </h2>
                    <p className="text-white/70 text-base max-w-lg mb-4">
                      How PE firms can leverage data infrastructure to unlock portfolio company value and streamline exit preparation.
                    </p>
                    <span className="inline-flex items-center text-[#60a5fa] text-sm font-medium group-hover:gap-3 transition-all">
                      Read more <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </span>
                  </div>
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 transition-colors duration-500"></div>
              </Link>

              {/* Right Column - Stacked Cards (4 cols) */}
              <div className="md:col-span-4 flex flex-col gap-4">
                
                {/* Case Study Card */}
                <Link to="/case-studies/sell-side-readiness" className="group relative overflow-hidden bg-[#f5f5f5] flex-1 min-h-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <span className="inline-block px-3 py-1 bg-[#051c2c] text-white text-xs font-medium uppercase tracking-wider w-fit">Case Study</span>
                    <div>
                      <h3 className="text-lg font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                        Preparing Portfolio Companies for Optimal Valuation
                      </h3>
                      <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                        Explore <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                      </span>
                    </div>
                  </div>
                  {/* Recess effect on hover */}
                  <div className="absolute inset-0 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] transition-shadow duration-500"></div>
                </Link>

                {/* Service Offering Card */}
                <Link to="/services/sell-side-readiness" className="group relative overflow-hidden bg-[#2563EB] flex-1 min-h-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8]"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium uppercase tracking-wider w-fit">Service Offering</span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        Sell-Side Readiness
                      </h3>
                      <p className="text-white/80 text-sm mb-2">End-to-end exit preparation support.</p>
                      <span className="inline-flex items-center text-white text-sm font-medium">
                        Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                      </span>
                    </div>
                  </div>
                  {/* Scale effect on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500"></div>
                </Link>

              </div>
            </div>

            {/* Secondary Row - 3 Column Grid */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              
              {/* Article Card */}
              <Link to="/blog" className="group relative overflow-hidden bg-white border border-gray-200 p-6 hover:border-[#2563EB] transition-colors duration-300">
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-[#051c2c] text-xs font-medium uppercase tracking-wider mb-3">Insight</span>
                <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                  The Power of the Data Cube
                </h3>
                <p className="text-[#051c2c]/60 text-sm mb-3">Streamline exit preparation with unified data architecture.</p>
                <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                  Read <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
              </Link>

              {/* Case Study Card 2 */}
              <Link to="/case-studies/corporate-development" className="group relative overflow-hidden bg-white border border-gray-200 p-6 hover:border-[#2563EB] transition-colors duration-300">
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-[#051c2c] text-xs font-medium uppercase tracking-wider mb-3">Case Study</span>
                <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                  Corporate Development
                </h3>
                <p className="text-[#051c2c]/60 text-sm mb-3">End-to-end M&A support for independent sponsors.</p>
                <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                  Explore <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
              </Link>

              {/* Service Card 2 */}
              <Link to="/services/dashboarding-data-portal" className="group relative overflow-hidden bg-white border border-gray-200 p-6 hover:border-[#2563EB] transition-colors duration-300">
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-[#051c2c] text-xs font-medium uppercase tracking-wider mb-3">Service</span>
                <h3 className="text-base font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">
                  Dashboarding & Data Portal
                </h3>
                <p className="text-[#051c2c]/60 text-sm mb-3">Real-time visibility into portfolio performance.</p>
                <span className="inline-flex items-center text-[#2563EB] text-sm font-medium">
                  Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
              </Link>

            </div>
          </div>
        </div>
      </section>



      {/* Services Overview - McKinsey Style */}
      <section id="services" className="py-12 md:py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">What We Do</span>
            <h2 className="text-2xl font-normal text-[#051c2c] mt-2">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/services/sell-side-readiness" className="group bg-white p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Sell-Side Readiness</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">
                Preparing portfolio companies for optimal valuation and successful exits.
              </p>
            </Link>

            <Link to="/services/corporate-development" className="group bg-white p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Corporate Development</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">
                End-to-end M&A support for family offices and independent sponsors.
              </p>
            </Link>

            <Link to="/services/dashboarding-data-portal" className="group bg-white p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-medium text-[#051c2c] mb-2 group-hover:text-[#2563EB] transition-colors">Dashboarding & Data Portal</h3>
              <p className="text-[#051c2c]/60 text-sm leading-relaxed">
                Custom dashboards and data portals for real-time visibility into portfolio performance.
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link to="/services/sell-side-readiness" className="inline-flex items-center gap-2 text-[#051c2c] font-medium hover:text-[#2563EB] transition-colors text-sm border-b border-[#051c2c] hover:border-[#2563EB] pb-0.5">
              View all services <span>→</span>
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
      </Routes>
    </div>
  );
}