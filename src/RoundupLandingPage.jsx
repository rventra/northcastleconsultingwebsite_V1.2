import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MetaTags from './components/MetaTags.jsx';

const RoundupLandingPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [daysUntilScotus, setDaysUntilScotus] = useState(0);
  const [todayDate, setTodayDate] = useState('');
  const [exitPopupOpen, setExitPopupOpen] = useState(false);
  const [exitEmail, setExitEmail] = useState('');
  const [exitSubmitted, setExitSubmitted] = useState(false);
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  // Calculate days until SCOTUS arguments (April 27, 2026)
  useEffect(() => {
    const scotus = new Date('2026-04-27T00:00:00');
    const now = new Date();
    const days = Math.max(0, Math.ceil((scotus - now) / (1000 * 60 * 60 * 24)));
    setDaysUntilScotus(days);
    
    // Set today's date
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    setTodayDate(`${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
  }, []);

  // Sticky bar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !footerRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const footerRect = footerRef.current.getBoundingClientRect();
      const heroVisible = heroRect.bottom > 0;
      const footerVisible = footerRect.top < window.innerHeight;
      
      setShowSticky(!heroVisible && !footerVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setExitPopupOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Exit-intent popup
  useEffect(() => {
    let exitShown = false;
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !exitShown && !isModalOpen) {
        exitShown = true;
        setExitPopupOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const API_URL = 'https://8jl5xpty5g.execute-api.us-east-2.amazonaws.com/prod/request-report';
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: email.split('@')[0],
          email: email,
          firm: '',
          phone: '',
          caseCount: '',
          message: 'Requested via landing page modal'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        navigate(`/roundup-docket-intelligence-thank-you?email=${encodeURIComponent(email)}`);
        return;
      } else {
        setFormStatus({ 
          type: 'error', 
          message: data.error || 'Something went wrong. Please try again or email us directly at consult@northcastleconsulting.com'
        });
      }
    } catch (err) {
      setFormStatus({ 
        type: 'error', 
        message: 'Could not connect to server. Please email us directly at consult@northcastleconsulting.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setFormStatus({ type: '', message: '' });
    setEmail('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeExitPopup = () => {
    setExitPopupOpen(false);
  };

  const handleExitSubmit = async (e) => {
    e.preventDefault();
    if (!exitEmail || !exitEmail.includes('@')) return;
    
    const API_URL = 'https://8jl5xpty5g.execute-api.us-east-2.amazonaws.com/prod/request-report';
    
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: exitEmail.split('@')[0],
          email: exitEmail,
          firm: '',
          phone: '',
          caseCount: '',
          message: 'Requested via exit-intent popup'
        })
      });
      navigate(`/roundup-docket-intelligence-thank-you?source=pdf&email=${encodeURIComponent(exitEmail)}`);
      return;
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <>
      <MetaTags 
        title="Roundup Docket Intelligence | North Castle Consulting"
        description="Actionable intelligence and data infrastructure for Roundup mass tort litigation. Know what your docket is worth before you walk into settlement negotiations."
        ogImage="https://northcastleconsulting.com/images/roundup-og-image.jpg"
      />
      <div className="min-h-screen bg-white">
      {/* Ticker */}
      <div className="bg-[#0B1D3A] text-white text-center py-2.5 px-6 text-[13px] font-semibold tracking-wide">
        $7.25B Roundup settlement filed February 17, 2026.
        <span className="text-[#E2B45A] font-bold"> {daysUntilScotus}</span> days until SCOTUS oral arguments.
        &nbsp;|&nbsp;{' '}
        <button 
          onClick={openModal}
          className="text-[#E2B45A] underline hover:no-underline"
        >
          See a sample docket health report &rarr;
        </button>
        <span className="block text-[10px] font-normal text-[#5A6A85] mt-0.5 tracking-wide">
          Last updated: {lastUpdated}
        </span>
      </div>

      {/* Hero */}
      <section 
        ref={heroRef}
        id="top"
        className="bg-gradient-to-br from-[#0B1D3A] to-[#142D55] text-white text-center py-16 md:py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="font-sans text-[13px] font-bold tracking-[0.14em] uppercase text-[#C8973E] mb-4">
            For Plaintiff Firms Managing Roundup NHL Cases
          </div>
          <h1 className="text-[clamp(28px,5vw,44px)] leading-tight mb-5 font-bold">
            A $7.25B Roundup Settlement Is on the Table.<br />
            <em className="not-italic text-[#E2B45A]">Do You Know What Your Docket Is Worth?</em>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-[#C5CDDB]">
            The tiered scoring grid rewards data readiness. Firms that can value and verify
            their entire docket now will capture significantly more at settlement.
          </p>
          <div className="mb-3">
            <button 
              onClick={openModal}
              className="bg-[#C8973E] text-[#0B1D3A] px-10 py-4 font-sans text-base font-bold rounded hover:bg-[#E2B45A] transition-colors tracking-wide"
            >
              <span className="hidden sm:inline">Get a Free Sample Docket Report</span>
              <span className="sm:hidden">Get Sample Report</span>
            </button>
          </div>
          <div className="font-sans text-[11px] text-[#56687F] mb-2">
            No spam. No sharing. NDA executed before any data transfer.
          </div>
          <div className="font-sans text-xs text-[#8DA0BF] mt-2 tracking-wide">
            <svg className="w-3 h-3.5 inline-block -mt-0.5 mr-1" viewBox="0 0 16 20" fill="#8DA0BF">
              <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
              <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#142D55"/>
            </svg>
            All Data Housed in AWS &nbsp;&bull;&nbsp; NDA First &nbsp;&bull;&nbsp; 100% U.S.-Based Team
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F7F5F0] py-14 px-6 border-t-[3px] border-[#C8973E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A]">The Clock Is Running</h2>
          <p className="text-center text-[#5A5A5A] text-base max-w-2xl mx-auto mb-10">
            Court filings, Supreme Court arguments, and opt-in deadlines are converging.
            Firms without a data-ready docket will be negotiating blind.
          </p>
          
          {/* Desktop Timeline */}
          <div className="hidden md:flex justify-between items-start max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute top-3.5 left-10 right-10 h-[3px] bg-[#E8E6E1]" />
            
            {/* Milestones */}
            <div className="relative text-center flex-1 z-10">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#C8973E]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">FEB 17, 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Settlement Filed</div>
              <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">$7.25B class settlement with tiered scoring grid</div>
            </div>
            
            <div className="relative text-center flex-1 z-10">
              <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#C8973E] mb-1">You Are Here</div>
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#C8973E] animate-pulse" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">{todayDate}</div>
            </div>
            
            <div className="relative text-center flex-1 z-10">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">APR 27, 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Oral Arguments</div>
              <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto"><em>Monsanto v. Durnell</em>&mdash;preemption case</div>
              <div className="font-sans text-[11px] font-bold text-[#0B1D3A] mt-1.5">{daysUntilScotus} days away</div>
            </div>
            
            <div className="relative text-center flex-1 z-10">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">JUN 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Decision</div>
              <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">Ruling could preempt future claims</div>
            </div>
            
            <div className="relative text-center flex-1 z-10">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">Q3 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Preliminary Approval</div>
              <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">Opt-in deadlines set. Case readiness required.</div>
            </div>
            
            <div className="relative text-center flex-1 z-10">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">2026&ndash;2027</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">First Payouts</div>
              <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">Data-ready claims get prioritized disbursement</div>
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {[
              { date: 'FEB 17, 2026', title: 'Settlement Filed', desc: '$7.25B class settlement with tiered scoring grid', complete: true },
              { date: todayDate, title: 'You Are Here', desc: 'Current position in settlement timeline', now: true },
              { date: 'APR 27, 2026', title: 'SCOTUS Oral Arguments', desc: 'Monsanto v. Durnell—preemption case', countdown: daysUntilScotus },
              { date: 'JUN 2026', title: 'SCOTUS Decision', desc: 'Ruling could preempt future claims' },
              { date: 'Q3 2026', title: 'Preliminary Approval', desc: 'Opt-in deadlines set' },
              { date: '2026–2027', title: 'First Payouts', desc: 'Data-ready claims get prioritized' },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`w-7 h-7 rounded-full border-[3px] border-[#C8973E] flex-shrink-0 ${
                  milestone.complete || milestone.now ? 'bg-[#C8973E]' : 'bg-[#F7F5F0]'
                } ${milestone.now ? 'animate-pulse' : ''}`} />
                <div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-0.5">{milestone.date}</div>
                  <div className="text-[13px] font-bold text-[#0B1D3A] mb-0.5">{milestone.title}</div>
                  <div className="text-[11px] text-[#5A5A5A]">{milestone.desc}</div>
                  {milestone.countdown && (
                    <div className="font-sans text-[11px] font-bold text-[#0B1D3A] mt-1">{milestone.countdown} days away</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center max-w-2xl mx-auto mt-8 text-[15px] italic text-[#5A5A5A]">
            Every milestone is a data checkpoint. Firms that can't demonstrate case readiness at each stage
            lose negotiating leverage—and settlement dollars.
          </p>
        </div>
      </section>

      {/* Authority Quotes */}
      <section className="py-12 px-6 bg-white border-b border-[#E8E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-l-[3px] border-[#C8973E]">
              <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                "I believe this $7.25 billion proposed national class settlement... is the best path forward to finally bring the Roundup litigation to a closing chapter. Payments should begin in 2026."
              </blockquote>
              <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Joe Rice, Co-founder of Motley Rice</div>
              <div className="font-sans text-[11px] text-[#6B7B8D]">
                Lead Negotiator for Plaintiffs &nbsp;&bull;&nbsp;{' '}
                <a href="https://www.motleyrice.com/news" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Motley Rice Official News</a>
              </div>
            </div>
            <div className="p-6 border-l-[3px] border-[#C8973E]">
              <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                "The proposed class settlement agreement, together with the Supreme Court case, provides an essential path out of the litigation uncertainty."
              </blockquote>
              <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Bill Anderson, CEO of Bayer</div>
              <div className="font-sans text-[11px] text-[#6B7B8D]">
                Defense Perspective &nbsp;&bull;&nbsp;{' '}
                <a href="https://www.bayer.com/media/en-us/" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Bayer Press Release</a>
              </div>
            </div>
          </div>

          {/* Data Readiness Quotes */}
          <div className="mt-10 pt-8 border-t border-[#E8E6E1]">
            <div className="text-center mb-6">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E]">Why Data Readiness Matters</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-l-[3px] border-[#C8973E]">
                <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                  "Effective large-scale litigation and settlements rely on comprehensive, well-organized data and the ability to apply that data effectively within the context of a particular project."
                </blockquote>
                <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Steven Weisbrot, CEO, Angeion Group</div>
                <div className="font-sans text-[11px] text-[#6B7B8D]">
                  Internationally recognized class action notice expert &nbsp;&bull;&nbsp;{' '}
                  <a href="https://www.prnewswire.com/news-releases/angeion-group-expands-mass-tort-litigation-management-capabilities-through-merger-with-case-works-302410643.html" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">PR Newswire, Mar 2025</a>
                </div>
              </div>
              <div className="p-6 border-l-[3px] border-[#C8973E]">
                <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                  "When collecting data from claimants or plaintiffs, the data needs to be normalized for it to be useful to any party. These deliverables are powerful when the data is consistent to produce actionable insights."
                </blockquote>
                <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Megan Pizor, General Counsel & Chief Data Officer, LMI</div>
                <div className="font-sans text-[11px] text-[#6B7B8D]">
                  Litigation Management, Inc. &mdash; involved in most pending Mass Tort MDLs &nbsp;&bull;&nbsp;{' '}
                  <a href="https://www.lmiweb.com/article/fact-sheet-data-management-collecting-complex-data-mass-tort-multidistrict-litigation" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">LMI Article</a>
                </div>
              </div>
            </div>

            {/* Data readiness stat callout */}
            <div className="mt-7 p-5 bg-[#F7F5F0] rounded-lg max-w-3xl mx-auto text-center">
              <div className="font-sans text-[13px] text-[#5A5A5A] leading-relaxed">
                <strong className="text-[#0B1D3A] text-[15px]">In the Taxotere MDL, 80% of plaintiff cases were dismissed</strong> after 8 years of litigation because they lacked basic medical record documentation proving injury.
                <span className="block mt-2 text-[11px] text-[#6B7B8D]">Source: <a href="https://www.druganddevicelawblog.com/2024/03/yes-plaintiffs-medical-records-are-necessary.html" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Drug & Device Law Blog, March 2024</a> &nbsp;&bull;&nbsp; Underlying findings from federal court record</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A]">
            Settlement Value Is Tied to Documentation Quality.<br />Most Dockets Are Underwater.
          </h2>
          <p className="text-center text-[#5A5A5A] max-w-2xl mx-auto mb-10 text-base">
            The proposed tiering grid assigns payout value based on compensability matrices—exposure duration,
            NHL subtype, treatment intensity, and documentation completeness. Cases without structured data
            to satisfy these criteria will be valued at the lowest tier or excluded entirely.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Blind Docket Valuation', 
                desc: 'No structured data on tier distribution means no leverage at settlement. The gap between projected and actual recoverable value stays invisible until it\'s too late to close.',
                cost: 'Potential gap: $100K+ per case between upper-tier and lower-tier classification'
              },
              { 
                title: 'Lost Claimants, Dead Cases', 
                desc: 'Stale contact data closes out viable cases. Firms lose claimants not because claims are weak, but because they can\'t locate the people who qualify under the tiering grid.',
                cost: 'Each lost claimant = potential five-figure settlement value written off'
              },
              { 
                title: 'Incomplete Documentation', 
                desc: 'Missing medical records, unsigned affidavits, and incomplete questionnaires downgrade cases from upper tiers to minimum payouts—or disqualify them entirely.',
                cost: 'Documentation gaps can reduce a case from $150K+ to under $10K'
              },
              { 
                title: 'Reactive Strike Teams', 
                desc: 'Hiring temp staff weeks before a deadline to manually review thousands of files is expensive, error-prone, and creates malpractice exposure when cases are mis-tiered.',
                cost: 'Manual review: $200–250/record. Across 5,000 cases = $1M+ in review costs alone'
              },
            ].map((card, i) => (
              <div key={i} className="border-l-[3px] border-[#C8973E] p-5 bg-[#F7F5F0] rounded-r-lg">
                <h3 className="text-base font-bold text-[#0B1D3A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{card.desc}</p>
                <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">{card.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#0B1D3A] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] text-center mb-3">Know What Your Docket Is Worth Before You Walk Into the Room</h2>
          <p className="text-center text-[#8DA0BF] max-w-2xl mx-auto mb-9 text-base">
            We combine AI document review, data enrichment, and mass tort operations expertise
            to give your firm a complete, auditable picture of your Roundup docket—and
            the leverage to maximize every dollar at settlement.
          </p>
          <div className="bg-white/10 border-2 border-[#C8973E] rounded-lg p-7">
            <h3 className="text-xl text-[#E2B45A] mb-2">Docket Tiering & Valuation</h3>
            <p className="text-sm text-[#C5CDDB] mb-4"><em className="not-italic">Standardized medical review and predictive valuation</em></p>
            
            <div className="mt-5">
              <div className="text-[15px] font-bold text-[#E2B45A] mb-2">The Challenge</div>
              <p className="text-sm text-[#B0BFDB] leading-relaxed">
                Inconsistent medical review creates tier assignment disputes with defense counsel, delaying settlements. Manual review processes are slow, costly, and prone to human error. Without standardized schemas, firms can't prove their tier definitions to skeptical defense teams.
              </p>
            </div>
            <div className="mt-5">
              <div className="text-[15px] font-bold text-[#E2B45A] mb-2">Our Approach</div>
              <div className="font-sans text-[13px] text-[#B0BFDB] leading-7">
                <div>&#10003; Custom medical review schemas define tier criteria with specific diagnostic requirements</div>
                <div>&#10003; AI-assisted extraction with predictive settlement modeling</div>
                <div>&#10003; Consistent application of logic across all cases eliminates reviewer bias</div>
                <div>&#10003; Documentation captures rationale for each tier decision with supporting evidence references</div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-[15px] font-bold text-[#E2B45A] mb-2">Key Benefits</div>
              <div className="font-sans text-[13px] text-[#B0BFDB] leading-7">
                <div>&#10003; Eliminated tier assignment disputes with defense</div>
                <div>&#10003; 50–70% faster medical review cycle time</div>
                <div>&#10003; 90% portfolio forecast accuracy</div>
                <div>&#10003; Accelerated settlement negotiations</div>
              </div>
            </div>
            <div className="mt-6">
              <button 
                onClick={openModal}
                className="font-sans text-sm font-semibold text-[#E2B45A] hover:underline"
              >
                Request a free sample report &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] text-center mb-10 text-[#0B1D3A]">From Chaos to Clarity in Four Steps</h2>
          <div className="flex flex-col md:flex-row justify-center gap-0">
            {[
              { num: '1', title: 'Docket Audit', desc: 'We ingest your case data and run AI analysis against the settlement tiering criteria.', note: '5 days for 50-case sample' },
              { num: '2', title: 'Enrich & Recover', desc: 'Locate lost claimants, enrich missing data, revive written-off cases.', note: '2–3 weeks for full docket' },
              { num: '3', title: 'Document & Prepare', desc: 'AI reviews documents, flags deficiencies, builds a complete audit trail.', note: '24-hour turnaround per batch' },
              { num: '4', title: 'Negotiate & Settle', desc: 'Walk in with a fully valued, tiered docket and the data to maximize every case.', note: 'Settlement-ready docket' },
            ].map((step, i) => (
              <div key={i} className="flex-1 text-center relative px-3 pb-6 md:pb-0">
                {i < 3 && <div className="hidden md:block absolute top-5 right-0 w-[calc(100%-44px)] h-0.5 bg-[#E8E6E1] translate-x-1/2" />}
                <div className="w-11 h-11 bg-[#0B1D3A] text-[#C8973E] rounded-full inline-flex items-center justify-center font-sans text-lg font-bold mb-3.5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-[15px] text-[#0B1D3A] mb-1.5 font-bold">{step.title}</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{step.desc}</p>
                <div className="font-sans text-xs font-bold text-[#C8973E] mt-2">{step.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-[#FAF5EB] py-14 px-6 border-t-[3px] border-b-[3px] border-[#C8973E]" id="audit">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] text-[#0B1D3A] mb-3 text-center">See What a Docket Health Report Looks Like</h2>
          <p className="text-[#5A5A5A] max-w-xl mx-auto mb-9 text-base text-center">
            No data required. We'll send you a complete sample report so you can see exactly
            how we analyze tier distribution, documentation gaps, and settlement value—before you share a single case file.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Offer Card */}
            <div className="bg-white border-2 border-[#C8973E] rounded-lg p-7 shadow-lg">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E] mb-2.5 block">
                Free &mdash; No Data Required
              </span>
              <h3 className="text-lg text-[#0B1D3A] mb-2.5 font-bold">Sample Docket Health Report</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-3.5">
                See exactly what our AI-powered analysis delivers—a complete docket health report
                using the proposed settlement's tiering criteria, so you can evaluate the approach before sharing any data.
              </p>
              <div className="font-sans text-[13px] text-[#2C2C2C] leading-7">
                <div>&#10003; Full sample tier distribution analysis</div>
                <div>&#10003; Documentation completeness scoring methodology</div>
                <div>&#10003; Possible vs. actual settlement value framework</div>
                <div>&#10003; Remediation priority examples with recommended actions</div>
                <div>&#10003; Walkthrough of how the report applies to your docket</div>
              </div>
            </div>
            
            {/* Audit Mockup */}
            <div className="bg-white border border-[#E8E6E1] rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] font-sans text-4xl font-extrabold text-[#C8973E]/[0.08] tracking-widest uppercase pointer-events-none whitespace-nowrap">
                Sample Report
              </div>
              <div className="bg-[#0B1D3A] text-white py-3.5 px-5 font-sans text-xs font-bold tracking-wider uppercase">
                Docket Health Assessment &mdash; 50-Case Sample
              </div>
              <div className="p-5">
                <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#6B7B8D] mb-2.5">
                  Tier Distribution
                </div>
                <div className="mb-4 space-y-1.5">
                  {[
                    { label: 'Tier 1', width: '12%', color: 'bg-[#C8973E]' },
                    { label: 'Tier 2', width: '28%', color: 'bg-[#C8973E]/75' },
                    { label: 'Tier 3', width: '35%', color: 'bg-[#A0B4CC]' },
                    { label: 'Tier 4', width: '18%', color: 'bg-[#C5CDDB]' },
                  ].map((tier, i) => (
                    <div key={i} className="flex items-center gap-2 font-sans text-xs">
                      <span className="w-11 font-semibold text-[#0B1D3A] text-right">{tier.label}</span>
                      <div className="flex-1 h-4 bg-[#F0EDE6] rounded overflow-hidden">
                        <div className={`h-full ${tier.color}`} style={{ width: tier.width }} />
                      </div>
                      <span className="w-8 font-bold text-[#2C2C2C]">{tier.width}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {[
                    { val: '$4.2M', lbl: 'Projected Value' },
                    { val: '$750K+', lbl: 'Value at Risk' },
                    { val: '90%', lbl: 'Case Readiness' },
                  ].map((m, i) => (
                    <div key={i} className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                      <span className="font-sans text-lg font-bold text-[#0B1D3A] block">{m.val}</span>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-[#5A5A5A] mt-0.5 block">{m.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={openModal}
              className="bg-[#0B1D3A] text-[#E2B45A] px-10 py-4 font-sans text-base font-bold rounded border-2 border-[#C8973E] hover:bg-[#142D55] hover:border-[#E2B45A] transition-all tracking-wide"
            >
              <span className="hidden sm:inline">Get Your Free Sample Report</span>
              <span className="sm:hidden">Get Sample Report</span>
            </button>
            
            {/* Trust badges near CTA */}
            <div className="flex justify-center gap-2 flex-wrap mt-5">
              {[
                { icon: 'shield', text: 'All Data Housed in AWS' },
                { icon: 'shield', text: 'NDA First' },
                { icon: 'shield', text: 'NDA First' },
                { icon: 'check', text: 'U.S.-Based Team' }
              ].map((badge, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#6B7B8D]/25 rounded bg-white/60">
                  <svg className="w-4 h-4 text-[#6B7B8D]" viewBox="0 0 16 20" fill="currentColor">
                    <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                    <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
                  </svg>
                  <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">{badge.text}</span>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs text-[#5A5A5A] mt-3.5 text-center">
              This report is designed for plaintiff firms managing Roundup NHL cases.<br />
              Questions? <a href="mailto:info@northcastleconsulting.com" className="text-[#C8973E]">Reach out directly</a>—we respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-center mb-8 text-[#0B1D3A]">Who's Behind This</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ram — first (mass tort domain expert) */}
            <div className="flex gap-4 items-start">
              <div className="w-[72px] h-[72px] rounded-full border-2 border-[#C8973E] flex-shrink-0 overflow-hidden">
                <img src="/ram-photo.jpeg" alt="Ram Ventrapragada" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-sans text-[15px] font-bold text-[#0B1D3A]">Ram Ventrapragada</div>
                <div className="font-sans text-xs text-[#C8973E] font-semibold uppercase tracking-wider mb-1.5">Co-Founder</div>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  Over a decade of experience in data strategy, AI-enabled automation, and mass tort litigation operations.
                  At Wagstaff Law Firm, led AI-driven lead enrichment and document review initiatives—converting
                  unstructured claimant communications into structured Salesforce datasets with automated QA processes
                  and fallback logic at scale. Specializes in bridging data architecture, AI workflow orchestration,
                  and operational scalability for litigation environments.
                </p>
                <div className="font-sans text-[11px] text-[#6B7B8D] mt-1.5 font-semibold">
                  Purdue University &nbsp;&bull;&nbsp; MBA, Carnegie Mellon Tepper School of Business
                </div>
              </div>
            </div>
            {/* Nicholas — second (finance & analytics) */}
            <div className="flex gap-4 items-start">
              <div className="w-[72px] h-[72px] rounded-full border-2 border-[#C8973E] flex-shrink-0 overflow-hidden">
                <img src="/nick-photo.jpeg" alt="Nicholas Citrin" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-sans text-[15px] font-bold text-[#0B1D3A]">Nicholas Citrin</div>
                <div className="font-sans text-xs text-[#C8973E] font-semibold uppercase tracking-wider mb-1.5">Co-Founder</div>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  Nearly two decades in finance spanning investment banking, private equity, and equity research.
                  Former consultant at Accordion (Transaction Execution Services). Career started at Lehman Brothers
                  in Technology & Media M&A. Specializes in financial modeling, valuations,
                  and building outsourced analytics teams for complex data environments.
                </p>
                <div className="font-sans text-[11px] text-[#6B7B8D] mt-1.5 font-semibold">
                  University of Pennsylvania &nbsp;&bull;&nbsp; Economics, cum laude
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 font-sans text-[13px] text-[#5A5A5A]">
            Questions? We respond within 24 hours.{' '}
            <a href="mailto:info@northcastleconsulting.com" className="text-[#C8973E]">info@northcastleconsulting.com</a>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 px-6 max-w-3xl mx-auto">
        <h2 className="text-[28px] text-center mb-8 text-[#0B1D3A]">Common Questions</h2>
        <div className="divide-y divide-[#E8E6E1]">
          {[
            { q: 'How quickly can you audit our docket?', a: 'For a 50-case sample, we typically return results within 5 business days. For full docket reviews (thousands of cases), we scope a timeline during our initial call—most engagements deliver initial tier distribution data within 2–3 weeks.' },
            { q: 'What data do you need from us?', a: 'At minimum: case list with claimant identifiers, diagnosis information, and any available medical records or affidavits. We work with whatever state your data is in—messy spreadsheets, Salesforce exports, scanned documents. That\'s the point.' },
            { q: 'Our staff can handle this internally. Why would we outsource?', a: 'Your staff absolutely can—but at what speed and what cost? The settlement tiering grid requires structured data extraction from every case. Manual review runs $200–250/record and takes weeks. Our AI does it for $15–20/record in days. The question isn\'t capability—it\'s whether manual review is the best use of your team\'s time when settlement deadlines are approaching.' },
            { q: 'How much does this cost?', a: 'The 50-case Health Check is free. Full docket engagements are scoped to your portfolio size. Our analysis typically costs less than 2% of the incremental settlement value it identifies—and we walk through pricing on our initial call so there are no surprises.' },
            { q: 'Is our client data secure?', a: 'All data is hosted on encrypted AWS infrastructure within the United States—AES-256 encryption at rest, TLS 1.2+ in transit. Role-based access controls ensure only authorized team members touch your data. No offshore labor. Every interaction is logged and auditable. We execute NDAs and BAAs before any data is transferred, and all access credentials expire after engagement completion.' },
          ].map((faq, i) => (
            <details key={i} className="py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans flex justify-between items-center list-none">
                {faq.q}
                <span className="text-[#C8973E] text-xl group-open:hidden">+</span>
                <span className="text-[#C8973E] text-xl hidden group-open:inline">&minus;</span>
              </summary>
              <p className="mt-3 text-sm text-[#5A5A5A] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0B1D3A] text-white text-center py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[30px] mb-3.5">The Settlement Window Is Open.<br />Is Your Docket Ready?</h2>
          <p className="text-[#8DA0BF] max-w-xl mx-auto mb-7 text-base">
            The difference between a lower-tier case and a top-tier case is the data behind it.
            Let us show you what your docket is actually worth.
          </p>
          <button 
            onClick={openModal}
            className="bg-[#C8973E] text-[#0B1D3A] px-10 py-4 font-sans text-base font-bold rounded hover:bg-[#E2B45A] transition-colors tracking-wide"
          >
            Get Your Free Sample Docket Report
          </button>
          
          {/* Trust badges */}
          <div className="flex justify-center gap-2 flex-wrap mt-5">
            {[
              { text: 'All Data Housed in AWS' },
              { text: 'NDA First' },
              { text: 'Encrypted' }
            ].map((badge, i) => (
              <div key={i} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/15 rounded bg-white/5">
                <svg className="w-4 h-4 text-[#8DA0BF]" viewBox="0 0 16 20" fill="currentColor">
                  <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                  <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#142D55"/>
                </svg>
                <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[#080F1E] text-[#5A6A85] text-center py-8 px-6 font-sans text-[13px]">
        <p>&copy; 2026 North Castle Consulting. All rights reserved. &nbsp;|&nbsp; <a href="#" className="text-[#C8973E] hover:underline">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="text-[#C8973E] hover:underline">Terms</a></p>
        <p className="mt-2 text-xs tracking-wide text-[#4A5A72]">
          All Data Housed in AWS &bull; NDA First &bull; 100% U.S.-Based Team
        </p>
      </footer>

      {/* Sticky Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#142D55] py-3 px-6 flex justify-center items-center gap-4 z-50 shadow-[0_-2px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <span className="font-sans text-sm text-white font-semibold hidden sm:inline">
          Free Sample Docket Report &mdash; {daysUntilScotus} days until SCOTUS arguments
        </span>
        <button 
          onClick={openModal}
          className="bg-[#C8973E] text-[#0B1D3A] px-6 py-2.5 font-sans text-[13px] font-bold rounded hover:bg-[#E2B45A] transition-colors"
        >
          Request Audit
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-[#0B1D3A]/85 backdrop-blur-sm z-[1000] flex justify-center items-center p-6"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-xl p-10 max-w-md w-full text-center relative shadow-2xl">
            <button 
              onClick={closeModal}
              className="absolute top-3.5 right-4 bg-none border-none text-2xl text-[#6B7B8D] cursor-pointer leading-none"
            >
              &times;
            </button>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2">Get Your Free Sample Docket Report</h2>
            <p className="font-sans text-sm text-[#5A5A5A] mb-6">
              Enter your work email and we'll send the sample report within 24 hours. No data required.
            </p>
            
            {!formStatus.type && (
              <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@firmname.com"
                  required
                  className="flex-1 min-w-[200px] py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] focus:outline-none focus:border-[#C8973E]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#C8973E] text-[#0B1D3A] px-6 py-3.5 font-sans text-[15px] font-bold rounded hover:bg-[#E2B45A] transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Me the Report'}
                </button>
              </form>
            )}
            
            {formStatus.type === 'success' && (
              <div className="mt-4 font-sans">
                <div className="w-14 h-14 bg-[#FAF5EB] rounded-full inline-flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8973E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-[15px] text-[#0B1D3A] font-semibold mb-2">Success!</p>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{formStatus.message}</p>
              </div>
            )}
            
            {formStatus.type === 'error' && (
              <div className="mt-4 p-3 bg-red-50 rounded">
                <p className="text-sm text-red-600">{formStatus.message}</p>
              </div>
            )}
            
            {!formStatus.type && (
              <>
                {/* Trust badges in modal */}
                <div className="flex justify-center gap-2 flex-wrap mt-4">
                  {[
                    { text: 'AWS' },
                    { text: 'Encrypted' },
                    { text: 'NDA First' }
                  ].map((badge, i) => (
                    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#6B7B8D]/25 rounded bg-white/60">
                      <svg className="w-4 h-4 text-[#6B7B8D]" viewBox="0 0 16 20" fill="currentColor">
                        <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                        <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
                      </svg>
                      <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide">{badge.text}</span>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">
                  We never share your information. NDA executed before any data transfer.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Exit-Intent Popup */}
      {exitPopupOpen && (
        <div 
          className="fixed inset-0 bg-[#0B1D3A]/85 backdrop-blur-sm z-[1000] flex justify-center items-center p-6"
          onClick={(e) => e.target === e.currentTarget && closeExitPopup()}
        >
          <div className="bg-white rounded-xl p-10 max-w-md w-full text-center relative shadow-2xl">
            <button 
              onClick={closeExitPopup}
              className="absolute top-3.5 right-4 bg-none border-none text-2xl text-[#6B7B8D] cursor-pointer leading-none"
            >
              &times;
            </button>
            {!exitSubmitted ? (
              <>
                <h2 className="text-[22px] text-[#0B1D3A] mb-2">Before You Go</h2>
                <p className="font-sans text-sm text-[#5A5A5A] mb-6">
                  Download our Roundup Settlement Timeline & Tier Breakdown—free, no strings.
                </p>
                <form onSubmit={handleExitSubmit} className="flex flex-wrap gap-2.5">
                  <input
                    type="email"
                    value={exitEmail}
                    onChange={(e) => setExitEmail(e.target.value)}
                    placeholder="you@firmname.com"
                    required
                    className="flex-1 min-w-[200px] py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] focus:outline-none focus:border-[#C8973E]"
                  />
                  <button
                    type="submit"
                    className="bg-[#C8973E] text-[#0B1D3A] px-6 py-3.5 font-sans text-[15px] font-bold rounded hover:bg-[#E2B45A] transition-colors whitespace-nowrap"
                  >
                    Download PDF
                  </button>
                </form>
                <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">
                  No spam. Unsubscribe anytime. Your data stays private.
                </p>
              </>
            ) : (
              <div className="mt-4 font-sans">
                <div className="w-14 h-14 bg-[#FAF5EB] rounded-full inline-flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8973E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-[15px] text-[#0B1D3A] font-semibold mb-2">Check Your Inbox</p>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  We've sent the <strong>Roundup Settlement Timeline & Tier Breakdown</strong> to <strong>{exitEmail}</strong>.
                </p>
                <p className="text-xs text-[#6B7B8D] mt-3">Didn't see it? Check your spam folder.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default RoundupLandingPage;
