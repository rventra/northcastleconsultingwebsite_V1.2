import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RoundupLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [exitPopupOpen, setExitPopupOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [daysUntilScotus, setDaysUntilScotus] = useState(0);
  const [email, setEmail] = useState('');

  // Calculate days until SCOTUS (April 27, 2026)
  useEffect(() => {
    const scotus = new Date('2026-04-27T00:00:00');
    const now = new Date();
    const days = Math.max(0, Math.ceil((scotus - now) / (1000 * 60 * 60 * 24)));
    setDaysUntilScotus(days);
  }, []);

  // Sticky bar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const footer = document.getElementById('footer');
      if (hero && footer) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const footerTop = footer.getBoundingClientRect().top;
        setStickyVisible(heroBottom < 0 && footerTop > window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exit intent popup
  useEffect(() => {
    let shown = false;
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !shown && !modalOpen) {
        shown = true;
        setExitPopupOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [modalOpen]);

  const openModal = () => {
    setExitPopupOpen(false);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const closeExitPopup = () => setExitPopupOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll send sample report details to ${email} within 24 hours.`);
    closeModal();
  };

  const handleExitSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Check ${email} for the Settlement Timeline PDF.`);
    closeExitPopup();
  };

  const submitHeroEmail = () => {
    if (email) {
      openModal();
    } else {
      openModal();
    }
  };

  const scrollToConsultation = () => {
    window.location.href = 'mailto:info@northcastleconsulting.com?subject=Schedule%20Roundup%20Docket%20Consultation';
  };

  return (
    <div>
      {/* Breaking News Bar */}
      <div className="bg-[#EDB624] text-[#051c2c] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs font-bold">
          <span className="bg-[#051c2c] text-[#EDB624] px-1.5 py-0.5 text-[10px] uppercase tracking-wider">Breaking</span>
          <span className="whitespace-nowrap">$7.25B Roundup Settlement Filed — {daysUntilScotus} Days Until SCOTUS Arguments</span>
          <button onClick={openModal} className="underline hover:no-underline ml-2">Get Free Sample Report →</button>
        </div>
      </div>

      {/* Settlement Timeline - Visual Urgency Strip */}
      <div className="bg-[#475569] text-white py-4 px-4 border-y-2 border-[#EDB624]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs">
            {/* Milestone 1 - Complete */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EDB624]"></div>
              <div>
                <p className="text-[#EDB624] font-bold">FEB 17</p>
                <p className="text-white/50 hidden sm:block">Settlement Filed</p>
              </div>
            </div>
            
            {/* Connector */}
            <div className="flex-1 h-0.5 bg-[#EDB624] max-w-[60px]"></div>
            
            {/* Milestone 2 - NOW */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#EDB624] ring-2 ring-[#EDB624]/50 animate-pulse"></div>
              <div>
                <p className="text-[#EDB624] font-bold">APR 27</p>
                <p className="text-white font-semibold hidden sm:block">SCOTUS Arguments</p>
                <p className="text-[10px] text-[#2563EB]">{daysUntilScotus} days</p>
              </div>
            </div>
            
            {/* Connector */}
            <div className="flex-1 h-0.5 bg-white/20 max-w-[60px]"></div>
            
            {/* Milestone 3 */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-white/30"></div>
              <div>
                <p className="text-white/50 font-bold">JUN 2026</p>
                <p className="text-white/30 hidden sm:block">Decision</p>
              </div>
            </div>
            
            {/* Connector */}
            <div className="flex-1 h-0.5 bg-white/20 max-w-[60px]"></div>
            
            {/* Milestone 4 */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-white/30"></div>
              <div>
                <p className="text-white/50 font-bold">Q3 2026</p>
                <p className="text-white/30 hidden sm:block">Opt-In Deadline</p>
              </div>
            </div>
            
            {/* Connector */}
            <div className="flex-1 h-0.5 bg-white/20 max-w-[60px]"></div>
            
            {/* Milestone 5 */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-white/30"></div>
              <div>
                <p className="text-white/50 font-bold">2026-27</p>
                <p className="text-white/30 hidden sm:block">First Payouts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - QoE Style Split Layout */}
      <section id="hero" className="grid lg:grid-cols-2 min-h-[650px]">
        {/* Left Side - Primary Message */}
        <div className="relative bg-[#051c2c] flex flex-col justify-center p-8 md:p-12 lg:p-16 pt-12">
          <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              For Plaintiff Firms Managing Roundup NHL Cases
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-[1.1] max-w-2xl">
              A $7.25B Roundup Settlement Is on the Table.
              <span className="text-[#EDB624]"> Do You Know What Your Docket Is Worth?</span>
            </h1>
            <p className="text-base text-white/70 font-light max-w-lg leading-relaxed mb-8">
              The tiered scoring grid rewards data readiness. Firms that can value and verify
              their entire docket now will capture significantly more at settlement.
            </p>

            {/* Email Capture */}
            <div className="flex flex-col gap-3 max-w-md mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EDB624] text-sm"
              />
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={submitHeroEmail}
                  className="bg-[#EDB624] text-[#051c2c] px-6 py-3 font-bold hover:shadow-xl hover:bg-[#f5c430] transition-all whitespace-nowrap text-sm"
                >
                  Get A Sample Report
                </button>
                <button
                  onClick={scrollToConsultation}
                  className="border-2 border-white/50 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-all whitespace-nowrap text-sm"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
            <p className="text-xs text-white/40 mb-6">No spam. No sharing. NDA executed before any data transfer.</p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 text-[10px] text-white/40">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#051c2c"/>
                </svg>
                SOC 2
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#051c2c"/>
                </svg>
                HIPAA
              </span>
              <span>•</span>
              <span>256-bit SSL</span>
              <span>•</span>
              <span>U.S.-Based Team</span>
            </div>
          </div>
        </div>

        {/* Right Side - Clean Value Props */}
        <div className="bg-[#F5F5F5] flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-xl md:text-2xl font-bold text-[#051c2c] mb-8 leading-tight">
              The Gap Between Upper-Tier and Lower-Tier Cases Is Your Documentation
            </h2>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4 pb-5 border-b border-[#051c2c]/10">
                <div className="w-10 h-10 rounded-full bg-[#051c2c]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#051c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#051c2c] font-bold text-sm mb-1">AI-Powered Tier Analysis</p>
                  <p className="text-[#051c2c]/60 text-sm leading-relaxed">Map cases to settlement scoring criteria in days, not weeks</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-5 border-b border-[#051c2c]/10">
                <div className="w-10 h-10 rounded-full bg-[#051c2c]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#051c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#051c2c] font-bold text-sm mb-1">Claimant Re-Engagement</p>
                  <p className="text-[#051c2c]/60 text-sm leading-relaxed">Locate lost claimants and revive cases before opt-in deadlines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#051c2c]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#051c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#051c2c] font-bold text-sm mb-1">Documentation Remediation</p>
                  <p className="text-[#051c2c]/60 text-sm leading-relaxed">Close gaps that downgrade cases from $150K+ to under $10K</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#051c2c]/10">
              <p className="text-[#051c2c]/60 text-sm italic">
                "Firms that can't demonstrate case readiness at each settlement milestone
                lose negotiating leverage—and leave millions on the table."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Quotes */}
      <section className="bg-white py-12 px-6 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#2563EB] pl-6">
              <blockquote className="text-[#051c2c]/70 italic mb-4 leading-relaxed text-sm">
                "I believe this $7.25 billion proposed national class settlement… is the best path forward to finally bring the Roundup litigation to a closing chapter. Payments should begin in 2026."
              </blockquote>
              <p className="font-bold text-[#051c2c] text-sm">Joe Rice, Co-founder of Motley Rice</p>
              <p className="text-xs text-[#051c2c]/50">
                Lead Negotiator for Plaintiffs • <a href="https://www.motleyrice.com/news" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Motley Rice Official News</a>
              </p>
            </div>
            <div className="border-l-4 border-[#2563EB] pl-6">
              <blockquote className="text-[#051c2c]/70 italic mb-4 leading-relaxed text-sm">
                "The proposed class settlement agreement, together with the Supreme Court case, provides an essential path out of the litigation uncertainty."
              </blockquote>
              <p className="font-bold text-[#051c2c] text-sm">Bill Anderson, CEO of Bayer</p>
              <p className="text-xs text-[#051c2c]/50">
                Defense Perspective • <a href="https://www.bayer.com/media/en-us/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Bayer Press Release</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-6 bg-[#F9F9F7]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">The Challenge</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-4">
            Settlement Value Is Tied to Documentation Quality.<br />Most Dockets Are Underwater.
          </h2>
          <p className="text-center text-[#051c2c]/60 max-w-3xl mx-auto mb-12 text-sm">
            The proposed tiering grid assigns payout value based on compensability matrices—exposure duration,
            NHL subtype, treatment intensity, and documentation completeness. Cases without structured data
            to satisfy these criteria will be valued at the lowest tier or excluded entirely.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border-l-4 border-[#2563EB] p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#051c2c] mb-2">Blind Docket Valuation</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                No structured data on tier distribution means no leverage at settlement. The gap between
                projected and actual recoverable value stays invisible until it's too late to close.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">
                Potential gap: $100K+ per case between upper-tier and lower-tier classification
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#2563EB] p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#051c2c] mb-2">Lost Claimants, Dead Cases</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Stale contact data closes out viable cases. Firms lose claimants not because claims
                are weak, but because they can't locate the people who qualify under the tiering grid.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">
                Each lost claimant = potential five-figure settlement value written off
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#2563EB] p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#051c2c] mb-2">Incomplete Documentation</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Missing medical records, unsigned affidavits, and incomplete questionnaires
                downgrade cases from upper tiers to minimum payouts—or disqualify them entirely.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">
                Documentation gaps can reduce a case from $150K+ to under $10K
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#2563EB] p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#051c2c] mb-2">Reactive Strike Teams</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Hiring temp staff weeks before a deadline to manually review thousands of files
                is expensive, error-prone, and creates malpractice exposure when cases are mis-tiered.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">
                Manual review: $200–250/record. Across 5,000 cases = $1M+ in review costs alone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#051c2c] text-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">Our Solution</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Know What Your Docket Is Worth Before You Walk Into the Room
          </h2>
          <p className="text-center text-white/50 max-w-3xl mx-auto mb-12 text-sm">
            We combine AI document review, data enrichment, and mass tort operations expertise
            to give your firm a complete, auditable picture of your Roundup docket—and
            the leverage to maximize every dollar at settlement.
          </p>

          {/* Main Service Card */}
          <div className="bg-white/5 border border-[#EDB624]/50 rounded-lg p-6 md:p-8 mb-6">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold text-[#EDB624] mb-3">Docket Review & Valuation</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  Our primary service. AI extracts data from affidavits, questionnaires, and medical records,
                  then maps each case to its projected payout tier against the settlement's scoring criteria.
                  You get a complete financial picture of your docket—tier distribution, documentation gaps,
                  and estimated settlement value—before you negotiate.
                </p>
                <p className="text-xs font-bold text-[#EDB624] mb-3">$15–20/record vs. industry $200–250 for manual review</p>
                <button onClick={openModal} className="text-[#EDB624] text-sm font-semibold hover:underline">
                  Request a free 100-case sample →
                </button>
              </div>
              <div className="text-center md:border-l md:border-white/10 md:pl-6">
                <span className="text-3xl font-bold text-[#EDB624]">90%</span>
                <span className="text-xs text-white/40 uppercase tracking-wider block mt-1">Cost reduction<br />vs. manual review</span>
              </div>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-base font-bold text-[#EDB624] mb-2">Claimant Enrichment & Re-Engagement</h3>
              <p className="text-white/50 text-sm mb-3">
                Locate lost claimants via data enrichment, then run multi-channel campaigns
                (SMS, email, mail) to revive cases your firm had written off.
              </p>
              <p className="text-xs font-bold text-[#EDB624]">Firms report 2x compensability after enrichment</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-base font-bold text-[#EDB624] mb-2">Document Enrichment & Workflow</h3>
              <p className="text-white/50 text-sm mb-3">
                AI reviews documents for completeness within 24 hours, flags deficiencies,
                and triggers automated follow-up with full version control and audit trails.
              </p>
              <p className="text-xs font-bold text-[#EDB624]">1 manager + 2–3 assistants can oversee millions of cases</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-base font-bold text-[#EDB624] mb-2">Case Triage & Documentation Remediation</h3>
              <p className="text-white/50 text-sm mb-3">
                Every case triaged as valid-and-complete, non-qualified, or incomplete-but-curable.
                Catch gaps at intake—not three years later at settlement.
              </p>
              <p className="text-xs font-bold text-[#EDB624]">Transform incomplete cases into settlement-ready assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">Process</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-12">
            From Chaos to Clarity in Four Steps
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-[#051c2c] mb-2 text-sm">Docket Audit</h3>
              <p className="text-xs text-[#051c2c]/60 mb-2">
                We ingest your case data and run AI analysis against the settlement tiering criteria.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">5 days for 100-case sample</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-[#051c2c] mb-2 text-sm">Enrich & Recover</h3>
              <p className="text-xs text-[#051c2c]/60 mb-2">
                Locate lost claimants, enrich missing data, revive written-off cases.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">2–3 weeks for full docket</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-[#051c2c] mb-2 text-sm">Document & Prepare</h3>
              <p className="text-xs text-[#051c2c]/60 mb-2">
                AI reviews documents, flags deficiencies, builds a complete audit trail.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">24-hour turnaround per batch</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-lg font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-[#051c2c] mb-2 text-sm">Negotiate & Settle</h3>
              <p className="text-xs text-[#051c2c]/60 mb-2">
                Walk in with a fully valued, tiered docket and the data to maximize every case.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">Settlement-ready docket</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="audit" className="bg-[#F9F9F7] py-16 md:py-20 px-6 border-y-4 border-[#EDB624]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">Free Offer</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-4">
            See What Your Docket Is Actually Worth
          </h2>
          <p className="text-center text-[#051c2c]/60 max-w-2xl mx-auto mb-12 text-sm">
            Send us 100 cases. We'll run AI-powered analysis against the settlement tiering grid
            and show you exactly where the value is—and where it's leaking.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Offer Card */}
            <div className="bg-white border-2 border-[#EDB624] rounded-lg p-6 md:p-8 shadow-sm">
              <span className="text-xs font-bold text-[#EDB624] uppercase tracking-wider mb-2 block">
                Free — Limited to 20 per Month
              </span>
              <h3 className="text-lg font-bold text-[#051c2c] mb-3">100-Case Docket Health Check</h3>
              <p className="text-[#051c2c]/60 text-sm mb-4">
                We apply the proposed settlement's tiering criteria to a sample of your portfolio and
                deliver a full report showing where your cases stand—and what's being left on the table.
              </p>
              <div className="space-y-2 text-sm text-[#051c2c]/70">
                <p className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">✓</span> Tier distribution analysis (100 cases)
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">✓</span> Documentation completeness score
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">✓</span> Projected vs. actual settlement value gap
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">✓</span> Prioritized remediation roadmap
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">✓</span> 30-minute walkthrough call with our team
                </p>
              </div>
            </div>

            {/* Mockup */}
            <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-sm relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-3xl font-extrabold text-[#EDB624] opacity-10 -rotate-12 uppercase tracking-widest">Sample Report</span>
              </div>
              <div className="bg-[#051c2c] text-white p-3">
                <p className="text-xs font-bold uppercase tracking-wider">Docket Health Assessment — 100-Case Sample</p>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-[#051c2c]/50 uppercase tracking-wider mb-3">Tier Distribution</p>
                <div className="space-y-2 mb-5">
                  {[
                    { label: 'Tier 1', pct: '12%', color: 'bg-[#EDB624]' },
                    { label: 'Tier 2', pct: '28%', color: 'bg-[#EDB624]/75' },
                    { label: 'Tier 3', pct: '35%', color: 'bg-[#2563EB]/50' },
                    { label: 'Tier 4', pct: '25%', color: 'bg-[#E2E8F0]' },
                  ].map((tier) => (
                    <div key={tier.label} className="flex items-center gap-2 text-xs">
                      <span className="w-10 text-right font-semibold text-[#051c2c]">{tier.label}</span>
                      <div className="flex-1 h-3 bg-gray-100 rounded overflow-hidden">
                        <div className={`h-full ${tier.color}`} style={{ width: tier.pct }}></div>
                      </div>
                      <span className="w-8 font-bold">{tier.pct}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-[#F9F9F7] p-2 rounded text-center">
                    <span className="block text-base font-bold text-[#051c2c]">$8.4M</span>
                    <span className="text-[10px] text-[#051c2c]/50 uppercase">Projected Value</span>
                  </div>
                  <div className="bg-[#F9F9F7] p-2 rounded text-center">
                    <span className="block text-base font-bold text-[#051c2c]">$3.6M</span>
                    <span className="text-[10px] text-[#051c2c]/50 uppercase">Value at Risk</span>
                  </div>
                  <div className="bg-[#F9F9F7] p-2 rounded text-center">
                    <span className="block text-base font-bold text-[#051c2c]">62%</span>
                    <span className="text-[10px] text-[#051c2c]/50 uppercase">Doc Complete</span>
                  </div>
                </div>

                <p className="text-[10px] font-bold text-[#051c2c]/50 uppercase tracking-wider mb-2">Top Remediation Priorities</p>
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="border-b-2 border-[#E2E8F0]">
                      <th className="text-left py-1 text-[#051c2c]">Case</th>
                      <th className="text-left py-1 text-[#051c2c]">Current</th>
                      <th className="text-left py-1 text-[#051c2c]">Potential</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#051c2c]/60">
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="py-1">#0023</td>
                      <td>Tier 3</td>
                      <td className="text-[#2563EB] font-semibold">Tier 1</td>
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="py-1">#0041</td>
                      <td>Tier 4</td>
                      <td className="text-[#2563EB] font-semibold">Tier 2</td>
                    </tr>
                    <tr>
                      <td className="py-1">#0017</td>
                      <td>Tier 3</td>
                      <td className="text-[#2563EB] font-semibold">Tier 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openModal}
                className="bg-[#051c2c] text-[#EDB624] px-8 py-3 rounded font-bold text-base border-2 border-[#EDB624] hover:bg-[#0a2a42] transition-colors"
              >
                Get A Sample Report
              </button>
              <button
                onClick={scrollToConsultation}
                className="bg-white text-[#051c2c] px-8 py-3 rounded font-bold text-base border-2 border-[#051c2c] hover:bg-gray-50 transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['SOC 2', 'HIPAA-Ready', 'NDA First', '256-bit SSL', 'U.S.-Based Team'].map((badge) => (
                <span key={badge} className="flex items-center gap-1 px-2 py-1 border border-[#E2E8F0] rounded bg-white text-[10px] font-semibold text-[#051c2c]/50">
                  <svg className="w-3 h-3" viewBox="0 0 16 20" fill="currentColor">
                    <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                    <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#051c2c]/40 mt-6">
              This audit is designed for plaintiff firms managing 100+ active Roundup NHL cases.
              Solo practitioners or pre-litigation inquiries—<a href="mailto:info@northcastleconsulting.com" className="text-[#2563EB] hover:underline">reach out directly</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">Our Team</p>
          <h2 className="text-2xl font-bold text-center text-[#051c2c] mb-10">Who's Behind This</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ram */}
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#2563EB] overflow-hidden flex-shrink-0 bg-gray-200">
                <img src="/ram-photo.jpeg" alt="Ram Ventrapragada" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#051c2c] text-sm">Ram Ventrapragada</p>
                <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider mb-2">Co-Founder</p>
                <p className="text-xs text-[#051c2c]/60 leading-relaxed">
                  Over a decade of experience in data strategy, AI-enabled automation, and mass tort litigation operations.
                  At Wagstaff Law Firm, led AI-driven lead enrichment and document review initiatives at scale.
                </p>
                <p className="text-[10px] text-[#051c2c]/40 mt-2 font-semibold">
                  Purdue University • MBA, Carnegie Mellon Tepper School of Business
                </p>
              </div>
            </div>

            {/* Nicholas */}
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#2563EB] overflow-hidden flex-shrink-0 bg-gray-200">
                <img src="/nick-photo.jpeg" alt="Nicholas Citrin" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#051c2c] text-sm">Nicholas Citrin</p>
                <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider mb-2">Co-Founder</p>
                <p className="text-xs text-[#051c2c]/60 leading-relaxed">
                  Nearly two decades in finance spanning investment banking, private equity, and equity research.
                  Former consultant at Accordion. Specializes in financial modeling and valuations.
                </p>
                <p className="text-[10px] text-[#051c2c]/40 mt-2 font-semibold">
                  University of Pennsylvania • Economics, cum laude
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#051c2c]/40 mt-8">
            Questions? We respond within 24 hours.{' '}
            <a href="mailto:info@northcastleconsulting.com" className="text-[#2563EB] hover:underline">
              info@northcastleconsulting.com
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-6 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">FAQ</p>
          <h2 className="text-2xl font-bold text-center text-[#051c2c] mb-10">Common Questions</h2>

          <div className="space-y-3">
            {[
              {
                q: "How quickly can you audit our docket?",
                a: "For a 100-case sample, we typically return results within 5 business days. For full docket reviews (thousands of cases), we scope a timeline during our initial call—most engagements deliver initial tier distribution data within 2–3 weeks."
              },
              {
                q: "What data do you need from us?",
                a: "At minimum: case list with claimant identifiers, diagnosis information, and any available medical records or affidavits. We work with whatever state your data is in—messy spreadsheets, Salesforce exports, scanned documents. That's the point."
              },
              {
                q: "Our staff can handle this internally. Why would we outsource?",
                a: "Your staff absolutely can—but at what speed and what cost? The settlement tiering grid requires structured data extraction from every case. Manual review runs $200–250/record and takes weeks. Our AI does it for $15–20/record in days. The question isn't capability—it's whether manual review is the best use of your team's time when settlement deadlines are approaching."
              },
              {
                q: "How much does this cost?",
                a: "The 100-case Health Check is free. Full docket engagements are scoped to your portfolio size. Our analysis typically costs less than 2% of the incremental settlement value it identifies—and we walk through pricing on our initial call so there are no surprises."
              },
              {
                q: "Is our client data secure?",
                a: "All data is hosted on SOC 2 compliant AWS infrastructure within the United States. No offshore labor. Every interaction is logged and auditable. We execute NDAs and BAAs before any data is transferred."
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[#051c2c] text-sm hover:bg-gray-50">
                  {faq.q}
                  <span className="text-[#2563EB] text-lg group-open:hidden">+</span>
                  <span className="text-[#2563EB] text-lg hidden group-open:inline">−</span>
                </summary>
                <p className="px-4 pb-4 text-[#051c2c]/60 text-xs leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#051c2c] text-white py-16 md:py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            The Settlement Window Is Open.<br />Is Your Docket Ready?
          </h2>
          <p className="text-white/50 mb-8 text-base">
            The difference between a lower-tier case and a top-tier case is the data behind it.
            Let us show you what your docket is actually worth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openModal}
              className="bg-[#EDB624] text-[#051c2c] px-8 py-3 rounded font-bold text-base hover:bg-[#f5c430] transition-colors"
            >
              Get A Sample Report
            </button>
            <button
              onClick={scrollToConsultation}
              className="border-2 border-white/50 text-white px-8 py-3 rounded font-bold text-base hover:bg-white/10 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['SOC 2', 'HIPAA-Ready', 'NDA First'].map((badge) => (
              <span key={badge} className="flex items-center gap-1 px-2 py-1 border border-white/20 rounded bg-white/10 text-[10px] font-semibold text-white/40">
                <svg className="w-3 h-3" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#051c2c"/>
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#080F1E] text-white/30 py-6 px-6 text-center text-xs">
        <p className="mb-1">
          © 2026 North Castle Consulting. All rights reserved. •{' '}
          <Link to="/privacy" className="text-[#EDB624] hover:underline">Privacy Policy</Link> •{' '}
          <Link to="/terms" className="text-[#EDB624] hover:underline">Terms</Link>
        </p>
        <p className="text-[10px] text-white/20">
          SOC 2 Compliant • HIPAA-Ready • 256-bit SSL • 100% U.S.-Based Team
        </p>
      </footer>

      {/* Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#051c2c] py-2 px-4 flex justify-center items-center gap-3 shadow-lg transform transition-transform duration-300 z-50 ${stickyVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <span className="text-white font-semibold hidden sm:inline text-xs">
          Free 100-Case Sample Report — <span className="text-[#EDB624]">{daysUntilScotus}</span> days until SCOTUS
        </span>
        <div className="flex gap-2">
          <button
            onClick={openModal}
            className="bg-[#EDB624] text-[#051c2c] px-4 py-2 rounded font-bold text-xs hover:bg-[#f5c430] transition-colors"
          >
            Get Sample Report
          </button>
          <button
            onClick={scrollToConsultation}
            className="border border-white/50 text-white px-4 py-2 rounded font-semibold text-xs hover:bg-white/10 transition-colors"
          >
            Schedule Consult
          </button>
        </div>
      </div>

      {/* Primary Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#051c2c]/85 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-3 right-4 text-[#051c2c]/40 hover:text-[#051c2c] text-xl">&times;</button>
            <h2 className="text-lg font-bold text-[#051c2c] mb-2 text-center">Get Your Free 100-Case Sample Report</h2>
            <p className="text-[#051c2c]/60 text-xs text-center mb-4">Enter your work email and we'll send details within 24 hours.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@firmname.com"
                required
                className="px-3 py-2 border border-[#E2E8F0] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button type="submit" className="bg-[#EDB624] text-[#051c2c] px-4 py-2 rounded font-bold text-sm hover:bg-[#f5c430] transition-colors">
                Get Sample Report
              </button>
            </form>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {['SOC 2', 'HIPAA', 'Encrypted', 'NDA First'].map((badge) => (
                <span key={badge} className="text-[10px] font-semibold text-[#051c2c]/40 uppercase tracking-wider">{badge}</span>
              ))}
            </div>
            <p className="text-[10px] text-[#051c2c]/40 text-center mt-3">We never share your information. NDA executed before any data transfer.</p>
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {exitPopupOpen && (
        <div className="fixed inset-0 bg-[#051c2c]/85 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={closeExitPopup}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeExitPopup} className="absolute top-3 right-4 text-[#051c2c]/40 hover:text-[#051c2c] text-xl">&times;</button>
            <h2 className="text-lg font-bold text-[#051c2c] mb-2 text-center">Before You Go</h2>
            <p className="text-[#051c2c]/60 text-xs text-center mb-4">
              Download our Roundup Settlement Timeline & Tier Breakdown—free, no strings.
            </p>
            <form onSubmit={handleExitSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@firmname.com"
                required
                className="px-3 py-2 border border-[#E2E8F0] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button type="submit" className="bg-[#EDB624] text-[#051c2c] px-4 py-2 rounded font-bold text-sm hover:bg-[#f5c430] transition-colors">
                Download PDF
              </button>
            </form>
            <p className="text-[10px] text-[#051c2c]/40 text-center mt-3">No spam. Unsubscribe anytime. Your data stays private.</p>
          </div>
        </div>
      )}
    </div>
  );
}
