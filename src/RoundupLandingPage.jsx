import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsletterTicker from './components/NewsletterTicker';

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
    alert(`Thank you! We'll send audit details to ${email} within 24 hours.`);
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

  return (
    <div className="pt-16">
      <NewsletterTicker />

      {/* Ticker Bar */}
      <div className="bg-[#051c2c] text-white text-center py-3 px-6">
        <p className="text-sm font-semibold tracking-wide">
          $7.25B Roundup settlement filed February 17, 2026.{' '}
          <span className="text-[#EDB624] font-bold">{daysUntilScotus}</span> days until SCOTUS oral arguments.
          <span className="mx-2">|</span>
          <button onClick={openModal} className="text-[#EDB624] underline hover:no-underline">
            How many of your cases are upper-tier? Find out free →
          </button>
        </p>
        <p className="text-xs text-white/50 mt-1">Last updated: February 18, 2026</p>
      </div>

      {/* Hero Section - QoE Style Split Layout */}
      <section id="hero" className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Primary Message */}
        <div className="relative bg-[#051c2c] flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
              For Plaintiff Firms Managing Roundup NHL Cases
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.05] max-w-2xl">
              A $7.25B Roundup Settlement Is on the Table.
              <span className="text-[#EDB624]"> Do You Know What Your Docket Is Worth?</span>
            </h1>
            <p className="text-lg text-white/80 font-light max-w-xl leading-relaxed mb-6">
              The tiered scoring grid rewards data readiness. Firms that can value and verify
              their entire docket now will capture significantly more at settlement.
            </p>

            {/* Email Capture */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EDB624]"
              />
              <button
                onClick={submitHeroEmail}
                className="bg-[#EDB624] text-[#051c2c] px-6 py-3 font-bold hover:shadow-xl hover:bg-[#f5c430] transition-all whitespace-nowrap"
              >
                Get My Free Audit
              </button>
            </div>
            <p className="text-sm text-white/50 mb-4">Enter your work email — we'll send audit details within 24 hours</p>
            <p className="text-xs text-white/40 mb-6">No spam. No sharing. NDA executed before any data transfer.</p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#051c2c"/>
                </svg>
                SOC 2 Compliant
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#051c2c"/>
                </svg>
                HIPAA-Ready
              </span>
              <span>•</span>
              <span>256-bit SSL</span>
            </div>
          </div>
        </div>

        {/* Right Side - Secondary Content */}
        <div className="bg-[#475569] flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Data Readiness Matters
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            The Gap Between Upper-Tier and Lower-Tier Cases Is Your Documentation
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#EDB624] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white font-bold text-base">AI-Powered Tier Analysis</p>
                <p className="text-white/60 text-sm">Map cases to settlement scoring criteria in days, not weeks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#EDB624] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white font-bold text-base">Claimant Re-Engagement</p>
                <p className="text-white/60 text-sm">Locate lost claimants and revive cases before opt-in deadlines</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#EDB624] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white font-bold text-base">Documentation Remediation</p>
                <p className="text-white/60 text-sm">Close gaps that downgrade cases from $150K+ to under $10K</p>
              </div>
            </div>
          </div>
          <p className="text-white/80 text-base leading-relaxed">
            Firms that can't demonstrate case readiness at each settlement milestone
            lose negotiating leverage—and leave millions on the table.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#F9F9F7] py-16 md:py-20 px-6 border-t-4 border-[#EDB624]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">Settlement Timeline</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-4">
            The Clock Is Running
          </h2>
          <p className="text-center text-[#051c2c]/60 max-w-2xl mx-auto mb-12">
            Court filings, Supreme Court arguments, and opt-in deadlines are converging.
            Firms without a data-ready docket will be negotiating blind.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-[#E2E8F0]">
              <div className="w-1/5 h-full bg-[#EDB624]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Milestone 1 */}
              <div className="text-center relative">
                <div className="w-8 h-8 rounded-full bg-[#EDB624] mx-auto mb-4 relative z-10"></div>
                <p className="text-xs font-bold text-[#EDB624] uppercase tracking-wider mb-1">FEB 17, 2026</p>
                <h3 className="text-sm font-bold text-[#051c2c] mb-1">Settlement Filed</h3>
                <p className="text-xs text-[#051c2c]/50">$7.25B class settlement with tiered scoring grid</p>
              </div>

              {/* Milestone 2 - Current */}
              <div className="text-center relative">
                <p className="text-xs font-bold text-[#EDB624] uppercase tracking-wider mb-1">You Are Here</p>
                <div className="w-8 h-8 rounded-full bg-[#EDB624] mx-auto mb-4 relative z-10 ring-4 ring-[#EDB624]/30"></div>
                <p className="text-xs font-bold text-[#EDB624] uppercase tracking-wider mb-1">APR 27, 2026</p>
                <h3 className="text-sm font-bold text-[#051c2c] mb-1">SCOTUS Oral Arguments</h3>
                <p className="text-xs text-[#051c2c]/50"><em>Monsanto v. Durnell</em>—preemption case</p>
                <p className="text-xs font-bold text-[#2563EB] mt-2">{daysUntilScotus} days away</p>
              </div>

              {/* Milestone 3 */}
              <div className="text-center relative">
                <div className="w-8 h-8 rounded-full bg-white border-4 border-[#E2E8F0] mx-auto mb-4 relative z-10"></div>
                <p className="text-xs font-bold text-[#051c2c]/40 uppercase tracking-wider mb-1">JUN 2026</p>
                <h3 className="text-sm font-bold text-[#051c2c] mb-1">SCOTUS Decision</h3>
                <p className="text-xs text-[#051c2c]/50">Ruling could preempt future claims and reshape payouts</p>
              </div>

              {/* Milestone 4 */}
              <div className="text-center relative">
                <div className="w-8 h-8 rounded-full bg-white border-4 border-[#E2E8F0] mx-auto mb-4 relative z-10"></div>
                <p className="text-xs font-bold text-[#051c2c]/40 uppercase tracking-wider mb-1">Q3 2026</p>
                <h3 className="text-sm font-bold text-[#051c2c] mb-1">Preliminary Approval</h3>
                <p className="text-xs text-[#051c2c]/50">Opt-in deadlines set. Case readiness required.</p>
              </div>

              {/* Milestone 5 */}
              <div className="text-center relative">
                <div className="w-8 h-8 rounded-full bg-white border-4 border-[#E2E8F0] mx-auto mb-4 relative z-10"></div>
                <p className="text-xs font-bold text-[#051c2c]/40 uppercase tracking-wider mb-1">2026–2027</p>
                <h3 className="text-sm font-bold text-[#051c2c] mb-1">First Payouts</h3>
                <p className="text-xs text-[#051c2c]/50">Data-ready claims get prioritized disbursement</p>
              </div>
            </div>
          </div>

          <p className="text-center text-[#051c2c]/50 italic mt-12 max-w-2xl mx-auto">
            Every milestone is a data checkpoint. Firms that can't demonstrate case readiness at each stage
            lose negotiating leverage—and settlement dollars.
          </p>
        </div>
      </section>

      {/* Authority Quotes */}
      <section className="bg-white py-12 px-6 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#2563EB] pl-6">
              <blockquote className="text-[#051c2c]/70 italic mb-4 leading-relaxed">
                "I believe this $7.25 billion proposed national class settlement… is the best path forward to finally bring the Roundup litigation to a closing chapter. Payments should begin in 2026."
              </blockquote>
              <p className="font-bold text-[#051c2c]">Joe Rice, Co-founder of Motley Rice</p>
              <p className="text-sm text-[#051c2c]/50">
                Lead Negotiator for Plaintiffs • <a href="https://www.motleyrice.com/news" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Motley Rice Official News</a>
              </p>
            </div>
            <div className="border-l-4 border-[#2563EB] pl-6">
              <blockquote className="text-[#051c2c]/70 italic mb-4 leading-relaxed">
                "The proposed class settlement agreement, together with the Supreme Court case, provides an essential path out of the litigation uncertainty."
              </blockquote>
              <p className="font-bold text-[#051c2c]">Bill Anderson, CEO of Bayer</p>
              <p className="text-sm text-[#051c2c]/50">
                Defense Perspective • <a href="https://www.bayer.com/media/en-us/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Bayer Press Release</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#051c2c] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">Our Track Record</p>
          <h2 className="text-2xl font-bold text-center mb-10">Built for Mass Tort Scale</h2>

          {/* Metrics */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-[#EDB624]">[X,000+]</span>
              <span className="text-sm text-white/50 uppercase tracking-wider">Case Records Reviewed</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-[#EDB624]">[Y]</span>
              <span className="text-sm text-white/50 uppercase tracking-wider">Active MDLs Supported</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-[#EDB624]">[$Z]M+</span>
              <span className="text-sm text-white/50 uppercase tracking-wider">Docket Value Assessed</span>
            </div>
          </div>

          {/* Platforms */}
          <div className="text-center mb-8">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Platforms & Data Sources</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Salesforce', 'PACER', 'AWS', 'Python / AI', 'Power BI'].map((platform) => (
                <span key={platform} className="px-4 py-2 border border-white/20 rounded text-sm font-semibold text-white/60">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Quote */}
          <div className="bg-white/10 border-l-4 border-[#EDB624] p-6 rounded-r-lg max-w-2xl mx-auto">
            <blockquote className="text-white/70 italic mb-2">
              "[Client testimonial about the docket audit — e.g., 'We had 3,000 Roundup cases and no idea how many were upper-tier. North Castle's audit identified $X.XM in recoverable value we would have left on the table.']"
            </blockquote>
            <cite className="text-sm text-white/50 not-italic">
              — [Name], Managing Partner, [Firm Name] — [X,000+ Roundup cases]
            </cite>
          </div>

          <p className="text-center text-xs text-white/30 mt-4">
            Ram: Update the metrics and testimonial above with real data before launch.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">The Challenge</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-4">
            Settlement Value Is Tied to Documentation Quality.<br />Most Dockets Are Underwater.
          </h2>
          <p className="text-center text-[#051c2c]/60 max-w-3xl mx-auto mb-12">
            The proposed tiering grid assigns payout value based on compensability matrices—exposure duration,
            NHL subtype, treatment intensity, and documentation completeness. Cases without structured data
            to satisfy these criteria will be valued at the lowest tier or excluded entirely.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F9F9F7] border-l-4 border-[#2563EB] p-6">
              <h3 className="text-lg font-bold text-[#051c2c] mb-2">Blind Docket Valuation</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                No structured data on tier distribution means no leverage at settlement. The gap between
                projected and actual recoverable value stays invisible until it's too late to close.
              </p>
              <p className="text-sm font-bold text-[#2563EB]">
                Potential gap: $100K+ per case between upper-tier and lower-tier classification
              </p>
            </div>

            <div className="bg-[#F9F9F7] border-l-4 border-[#2563EB] p-6">
              <h3 className="text-lg font-bold text-[#051c2c] mb-2">Lost Claimants, Dead Cases</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Stale contact data closes out viable cases. Firms lose claimants not because claims
                are weak, but because they can't locate the people who qualify under the tiering grid.
              </p>
              <p className="text-sm font-bold text-[#2563EB]">
                Each lost claimant = potential five-figure settlement value written off
              </p>
            </div>

            <div className="bg-[#F9F9F7] border-l-4 border-[#2563EB] p-6">
              <h3 className="text-lg font-bold text-[#051c2c] mb-2">Incomplete Documentation</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Missing medical records, unsigned affidavits, and incomplete questionnaires
                downgrade cases from upper tiers to minimum payouts—or disqualify them entirely.
              </p>
              <p className="text-sm font-bold text-[#2563EB]">
                Documentation gaps can reduce a case from $150K+ to under $10K
              </p>
            </div>

            <div className="bg-[#F9F9F7] border-l-4 border-[#2563EB] p-6">
              <h3 className="text-lg font-bold text-[#051c2c] mb-2">Reactive Strike Teams</h3>
              <p className="text-[#051c2c]/60 text-sm mb-3">
                Hiring temp staff weeks before a deadline to manually review thousands of files
                is expensive, error-prone, and creates malpractice exposure when cases are mis-tiered.
              </p>
              <p className="text-sm font-bold text-[#2563EB]">
                Manual review: $200–250/record. Across 5,000 cases = $1M+ in review costs alone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#051c2c] text-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">Our Solution</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Know What Your Docket Is Worth Before You Walk Into the Room
          </h2>
          <p className="text-center text-white/60 max-w-3xl mx-auto mb-12">
            We combine AI document review, data enrichment, and mass tort operations expertise
            to give your firm a complete, auditable picture of your Roundup docket—and
            the leverage to maximize every dollar at settlement.
          </p>

          {/* Main Service Card */}
          <div className="bg-white/10 border-2 border-[#EDB624] rounded-lg p-6 md:p-8 mb-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-[#EDB624] mb-3">Docket Review & Valuation</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Our primary service. AI extracts data from affidavits, questionnaires, and medical records,
                then maps each case to its projected payout tier against the settlement's scoring criteria.
                You get a complete financial picture of your docket—tier distribution, documentation gaps,
                and estimated settlement value—before you negotiate.
              </p>
              <p className="text-sm font-bold text-[#EDB624] mb-4">$15–20/record vs. industry $200–250 for manual review</p>
              <button onClick={openModal} className="text-[#EDB624] font-semibold hover:underline">
                Request a free 50-case sample →
              </button>
            </div>
            <div className="text-center md:border-l md:border-white/20 md:pl-6 flex flex-col justify-center">
              <span className="text-4xl font-bold text-[#EDB624]">90%</span>
              <span className="text-sm text-white/50 uppercase tracking-wider">Cost reduction<br />vs. manual review</span>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#EDB624] mb-3">Claimant Enrichment & Re-Engagement</h3>
              <p className="text-white/60 text-sm mb-4">
                Locate lost claimants via data enrichment, then run multi-channel campaigns
                (SMS, email, mail) to revive cases your firm had written off.
              </p>
              <p className="text-sm font-bold text-[#EDB624] mb-2">Firms report 2x compensability after enrichment</p>
              <button onClick={openModal} className="text-[#EDB624] text-sm font-semibold hover:underline">
                Learn more →
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#EDB624] mb-3">Document Enrichment & Workflow</h3>
              <p className="text-white/60 text-sm mb-4">
                AI reviews documents for completeness within 24 hours, flags deficiencies,
                and triggers automated follow-up with full version control and audit trails.
              </p>
              <p className="text-sm font-bold text-[#EDB624] mb-2">1 manager + 2–3 assistants can oversee millions of cases</p>
              <button onClick={openModal} className="text-[#EDB624] text-sm font-semibold hover:underline">
                Learn more →
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#EDB624] mb-3">Case Triage & Documentation Remediation</h3>
              <p className="text-white/60 text-sm mb-4">
                Every case triaged as valid-and-complete, non-qualified, or incomplete-but-curable.
                Catch gaps at intake—not three years later at settlement.
              </p>
              <p className="text-sm font-bold text-[#EDB624] mb-2">Transform incomplete cases into settlement-ready assets</p>
              <button onClick={openModal} className="text-[#EDB624] text-sm font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">Process</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-12">
            From Chaos to Clarity in Four Steps
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-[#051c2c] mb-2">Docket Audit</h3>
              <p className="text-sm text-[#051c2c]/60 mb-2">
                We ingest your case data and run AI analysis against the settlement tiering criteria.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">5 days for 50-case sample</p>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-[#051c2c] mb-2">Enrich & Recover</h3>
              <p className="text-sm text-[#051c2c]/60 mb-2">
                Locate lost claimants, enrich missing data, revive written-off cases.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">2–3 weeks for full docket</p>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-[#051c2c] mb-2">Document & Prepare</h3>
              <p className="text-sm text-[#051c2c]/60 mb-2">
                AI reviews documents, flags deficiencies, builds a complete audit trail.
              </p>
              <p className="text-xs font-bold text-[#2563EB]">24-hour turnaround per batch</p>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#051c2c] text-[#EDB624] flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-[#051c2c] mb-2">Negotiate & Settle</h3>
              <p className="text-sm text-[#051c2c]/60 mb-2">
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
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">Free Offer</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-4">
            See What Your Docket Is Actually Worth
          </h2>
          <p className="text-center text-[#051c2c]/60 max-w-2xl mx-auto mb-12">
            Send us 50 cases. We'll run AI-powered analysis against the settlement tiering grid
            and show you exactly where the value is—and where it's leaking.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Offer Card */}
            <div className="bg-white border-2 border-[#EDB624] rounded-lg p-6 md:p-8 shadow-lg">
              <span className="text-xs font-bold text-[#EDB624] uppercase tracking-wider mb-2 block">
                Free — Limited to 20 Audits per Month
              </span>
              <h3 className="text-xl font-bold text-[#051c2c] mb-3">50-Case Docket Health Check</h3>
              <p className="text-[#051c2c]/60 text-sm mb-4">
                We apply the proposed settlement's tiering criteria to a sample of your portfolio and
                deliver a full report showing where your cases stand—and what's being left on the table.
              </p>
              <div className="space-y-2 text-sm text-[#051c2c]/70">
                <p className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">✓</span> Tier distribution analysis (50 cases)
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
            <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-4xl font-extrabold text-[#EDB624] opacity-10 -rotate-12 uppercase tracking-widest">Sample Report</span>
              </div>
              <div className="bg-[#051c2c] text-white p-4">
                <p className="text-xs font-bold uppercase tracking-wider">Docket Health Assessment — 50-Case Sample</p>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-[#051c2c]/50 uppercase tracking-wider mb-3">Tier Distribution</p>
                <div className="space-y-2 mb-6">
                  {[
                    { label: 'Tier 1', pct: '12%', color: 'bg-[#EDB624]' },
                    { label: 'Tier 2', pct: '28%', color: 'bg-[#EDB624]/75' },
                    { label: 'Tier 3', pct: '35%', color: 'bg-[#2563EB]/50' },
                    { label: 'Tier 4', pct: '25%', color: 'bg-[#E2E8F0]' },
                  ].map((tier) => (
                    <div key={tier.label} className="flex items-center gap-2 text-sm">
                      <span className="w-12 text-right font-semibold text-[#051c2c]">{tier.label}</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
                        <div className={`h-full ${tier.color}`} style={{ width: tier.pct }}></div>
                      </div>
                      <span className="w-10 font-bold">{tier.pct}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#F9F9F7] p-3 rounded text-center">
                    <span className="block text-lg font-bold text-[#051c2c]">$4.2M</span>
                    <span className="text-xs text-[#051c2c]/50 uppercase">Projected Value</span>
                  </div>
                  <div className="bg-[#F9F9F7] p-3 rounded text-center">
                    <span className="block text-lg font-bold text-[#051c2c]">$1.8M</span>
                    <span className="text-xs text-[#051c2c]/50 uppercase">Value at Risk</span>
                  </div>
                  <div className="bg-[#F9F9F7] p-3 rounded text-center">
                    <span className="block text-lg font-bold text-[#051c2c]">62%</span>
                    <span className="text-xs text-[#051c2c]/50 uppercase">Doc Completeness</span>
                  </div>
                </div>

                <p className="text-xs font-bold text-[#051c2c]/50 uppercase tracking-wider mb-2">Top Remediation Priorities</p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-[#E2E8F0]">
                      <th className="text-left py-1 text-[#051c2c]">Case</th>
                      <th className="text-left py-1 text-[#051c2c]">Current</th>
                      <th className="text-left py-1 text-[#051c2c]">Potential</th>
                      <th className="text-left py-1 text-[#051c2c]">Gap</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#051c2c]/60">
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="py-1">#0023</td>
                      <td>Tier 3</td>
                      <td>Tier 1</td>
                      <td className="text-[#2563EB] font-semibold">Missing pathology report</td>
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="py-1">#0041</td>
                      <td>Tier 4</td>
                      <td>Tier 2</td>
                      <td className="text-[#2563EB] font-semibold">Incomplete exposure history</td>
                    </tr>
                    <tr>
                      <td className="py-1">#0017</td>
                      <td>Tier 3</td>
                      <td>Tier 2</td>
                      <td className="text-[#2563EB] font-semibold">Unsigned plaintiff affidavit</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-[#051c2c]/30 text-center mt-3 italic">… 47 more cases analyzed in full report</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={openModal}
              className="bg-[#051c2c] text-[#EDB624] px-10 py-4 rounded font-bold text-lg border-2 border-[#EDB624] hover:bg-[#0a2a42] transition-colors"
            >
              Request Your Free 50-Case Audit
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['SOC 2', 'HIPAA-Ready', 'NDA First', '256-bit SSL', 'U.S.-Based Team'].map((badge) => (
                <span key={badge} className="flex items-center gap-1 px-3 py-1.5 border border-[#E2E8F0] rounded bg-white text-xs font-semibold text-[#051c2c]/60">
                  <svg className="w-4 h-4" viewBox="0 0 16 20" fill="currentColor">
                    <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                    <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#051c2c]/50 mt-6">
              This audit is designed for plaintiff firms managing 100+ active Roundup NHL cases.<br />
              Solo practitioners or pre-litigation inquiries—<a href="mailto:info@northcastleconsulting.com" className="text-[#2563EB] hover:underline">reach out directly</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">Our Team</p>
          <h2 className="text-2xl font-bold text-center text-[#051c2c] mb-10">Who's Behind This</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ram */}
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-[#2563EB] overflow-hidden flex-shrink-0 bg-gray-200">
                <img src="/ram-photo.jpeg" alt="Ram Ventrapragada" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#051c2c]">Ram Ventrapragada</p>
                <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">Co-Founder</p>
                <p className="text-sm text-[#051c2c]/60 leading-relaxed">
                  Over a decade of experience in data strategy, AI-enabled automation, and mass tort litigation operations.
                  At Wagstaff Law Firm, led AI-driven lead enrichment and document review initiatives—converting
                  unstructured claimant communications into structured Salesforce datasets with automated QA processes
                  and fallback logic at scale.
                </p>
                <p className="text-xs text-[#051c2c]/40 mt-2 font-semibold">
                  Purdue University • MBA, Carnegie Mellon Tepper School of Business
                </p>
              </div>
            </div>

            {/* Nicholas */}
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-[#2563EB] overflow-hidden flex-shrink-0 bg-gray-200">
                <img src="/nick-photo.jpeg" alt="Nicholas Citrin" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#051c2c]">Nicholas Citrin</p>
                <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">Co-Founder</p>
                <p className="text-sm text-[#051c2c]/60 leading-relaxed">
                  Nearly two decades in finance spanning investment banking, private equity, and equity research.
                  Former consultant at Accordion (Transaction Execution Services). Career started at Lehman Brothers
                  in Technology & Media M&A. Specializes in financial modeling, valuations,
                  and building outsourced analytics teams for complex data environments.
                </p>
                <p className="text-xs text-[#051c2c]/40 mt-2 font-semibold">
                  University of Pennsylvania • Economics, cum laude
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[#051c2c]/50 mt-8">
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
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2 text-center">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051c2c] mb-10">Common Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you audit our docket?",
                a: "For a 50-case sample, we typically return results within 5 business days. For full docket reviews (thousands of cases), we scope a timeline during our initial call—most engagements deliver initial tier distribution data within 2–3 weeks."
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
                a: "The 50-case Health Check is free. Full docket engagements are scoped to your portfolio size. Our analysis typically costs less than 2% of the incremental settlement value it identifies—and we walk through pricing on our initial call so there are no surprises."
              },
              {
                q: "Is our client data secure?",
                a: "All data is hosted on SOC 2 compliant AWS infrastructure within the United States. No offshore labor. Every interaction is logged and auditable. We execute NDAs and BAAs before any data is transferred."
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[#051c2c] hover:bg-gray-50">
                  {faq.q}
                  <span className="text-[#2563EB] text-xl group-open:hidden">+</span>
                  <span className="text-[#2563EB] text-xl hidden group-open:inline">−</span>
                </summary>
                <p className="px-4 pb-4 text-[#051c2c]/60 text-sm leading-relaxed">{faq.a}</p>
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
          <p className="text-white/60 mb-8 text-lg">
            The difference between a lower-tier case and a top-tier case is the data behind it.
            Let us show you what your docket is actually worth.
          </p>
          <button
            onClick={openModal}
            className="bg-[#EDB624] text-[#051c2c] px-10 py-4 rounded font-bold text-lg hover:bg-[#f5c430] transition-colors mb-6"
          >
            Get Your Free 50-Case Docket Audit
          </button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {['SOC 2', 'HIPAA-Ready', 'NDA First'].map((badge) => (
              <span key={badge} className="flex items-center gap-1 px-3 py-1.5 border border-white/20 rounded bg-white/10 text-xs font-semibold text-white/50">
                <svg className="w-4 h-4" viewBox="0 0 16 20" fill="currentColor">
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
      <footer id="footer" className="bg-[#080F1E] text-white/30 py-8 px-6 text-center text-sm">
        <p className="mb-2">
          © 2026 North Castle Consulting. All rights reserved. •{' '}
          <Link to="/privacy" className="text-[#EDB624] hover:underline">Privacy Policy</Link> •{' '}
          <Link to="/terms" className="text-[#EDB624] hover:underline">Terms</Link>
        </p>
        <p className="text-xs text-white/20">
          SOC 2 Compliant • HIPAA-Ready • 256-bit SSL • 100% U.S.-Based Team • No Offshore Data Handling
        </p>
      </footer>

      {/* Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#051c2c] py-3 px-6 flex justify-center items-center gap-4 shadow-lg transform transition-transform duration-300 z-50 ${stickyVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <span className="text-white font-semibold hidden sm:inline">
          Free 50-Case Docket Audit — <span className="text-[#EDB624]">{daysUntilScotus}</span> days until SCOTUS arguments
        </span>
        <button
          onClick={openModal}
          className="bg-[#EDB624] text-[#051c2c] px-6 py-2 rounded font-bold text-sm hover:bg-[#f5c430] transition-colors"
        >
          Request Audit
        </button>
      </div>

      {/* Primary Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#051c2c]/85 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-[#051c2c]/40 hover:text-[#051c2c] text-2xl">&times;</button>
            <h2 className="text-xl font-bold text-[#051c2c] mb-2 text-center">Request Your Free 50-Case Audit</h2>
            <p className="text-[#051c2c]/60 text-sm text-center mb-6">Enter your work email and we'll send audit details within 24 hours.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@firmname.com"
                required
                className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button type="submit" className="bg-[#EDB624] text-[#051c2c] px-6 py-3 rounded font-bold hover:bg-[#f5c430] transition-colors whitespace-nowrap">
                Get My Audit
              </button>
            </form>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {['SOC 2', 'HIPAA', 'Encrypted', 'NDA First'].map((badge) => (
                <span key={badge} className="text-xs font-semibold text-[#051c2c]/40 uppercase tracking-wider">{badge}</span>
              ))}
            </div>
            <p className="text-xs text-[#051c2c]/40 text-center mt-4">We never share your information. NDA executed before any data transfer.</p>
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {exitPopupOpen && (
        <div className="fixed inset-0 bg-[#051c2c]/85 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={closeExitPopup}>
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeExitPopup} className="absolute top-4 right-4 text-[#051c2c]/40 hover:text-[#051c2c] text-2xl">&times;</button>
            <h2 className="text-xl font-bold text-[#051c2c] mb-2 text-center">Before You Go</h2>
            <p className="text-[#051c2c]/60 text-sm text-center mb-6">
              Download our Roundup Settlement Timeline & Tier Breakdown—free, no strings.
            </p>
            <form onSubmit={handleExitSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@firmname.com"
                required
                className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button type="submit" className="bg-[#EDB624] text-[#051c2c] px-6 py-3 rounded font-bold hover:bg-[#f5c430] transition-colors whitespace-nowrap">
                Download PDF
              </button>
            </form>
            <p className="text-xs text-[#051c2c]/40 text-center mt-4">No spam. Unsubscribe anytime. Your data stays private.</p>
          </div>
        </div>
      )}
    </div>
  );
}
