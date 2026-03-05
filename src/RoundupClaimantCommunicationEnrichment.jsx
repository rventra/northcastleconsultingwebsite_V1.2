import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageMeta } from './components/MetaTags.jsx';

const RoundupClaimantCommunicationEnrichment = () => {
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
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  // Calculate days until SCOTUS arguments (April 27, 2026)
  useEffect(() => {
    const scotus = new Date('2026-04-27T00:00:00');
    const now = new Date();
    const days = Math.max(0, Math.ceil((scotus - now) / (1000 * 60 * 60 * 24)));
    setDaysUntilScotus(days);
    
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
          message: 'Requested via Claimant Communication Enrichment landing page',
          source: 'enrichment'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        navigate(`/roundup-claimant-communication-enrichment-thank-you?email=${encodeURIComponent(email)}`);
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
          message: 'Requested via exit-intent popup - Enrichment page',
          source: 'enrichment'
        })
      });
      navigate(`/roundup-claimant-communication-enrichment-thank-you?source=pdf&email=${encodeURIComponent(exitEmail)}`);
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

  // Trust badge icons
  const ShieldCheckIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 20" fill="currentColor">
      <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
      <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#142D55"/>
    </svg>
  );

  return (
    <>
      <PageMeta pageKey="roundupEnrichment" />
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
            See how enrichment recovers lost Roundup claimants &rarr;
          </button>
          <span className="block text-[10px] font-normal text-[#5A6A85] mt-0.5 tracking-wide">
            Last updated: {lastUpdated}
          </span>
        </div>

        {/* Hero */}
        <section 
          ref={heroRef}
          id="top"
          className="text-white text-center py-16 md:py-20 px-6"
          style={{
            background: 'linear-gradient(172deg, rgba(11,29,58,0.92) 0%, rgba(20,45,85,0.88) 100%), url(/roundup-bottle.jpg) center/cover no-repeat'
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="font-sans text-[13px] font-bold tracking-[0.14em] uppercase text-[#C8973E] mb-4">
              For Plaintiff Firms Managing Roundup NHL Cases
            </div>
            <h1 className="text-[clamp(28px,5vw,44px)] leading-tight mb-5 font-bold">
              Your Claimants Are Going Silent.<br />
              <em className="not-italic text-[#E2B45A]">Every Lost Contact Is a Lost Settlement.</em>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-[#C5CDDB]">
              Your Roundup NHL claimants signed retainers 3–5 years ago. Half your phone numbers are dead.
              SCOTUS oral arguments are <span className="text-[#E2B45A] font-bold">{daysUntilScotus}</span> days away—and
              claimants you can&apos;t reach are cases you can&apos;t settle from the{' '}
              <a 
                href="https://www.classaction.org/news/7.25b-roundup-settlement-proposed-to-end-litigation-over-allegations-weed-killer-causes-non-hodgkins-lymphoma" 
                target="_blank" 
                rel="noopener"
                className="text-[#E2B45A] underline"
              >
                $7.25B settlement pool
              </a>.
            </p>
            <button 
              onClick={openModal}
              className="bg-[#C8973E] text-[#0B1D3A] px-10 py-4 font-sans text-base font-bold rounded hover:bg-[#E2B45A] transition-colors tracking-wide"
            >
              <span className="hidden md:inline">Get Free 100-Case Enrichment</span>
              <span className="md:hidden">Free Enrichment</span>
            </button>
            <div className="font-sans text-xs text-[#56687F] mt-3 mb-2">
              No spam. No sharing. See results within 5 business days.
            </div>
            <div className="font-sans text-xs text-[#8DA0BF] mt-2 tracking-wide flex items-center justify-center gap-2">
              <ShieldCheckIcon />
              <span>All Data Housed in AWS &nbsp;&bull;&nbsp; NDA First &nbsp;&bull;&nbsp; 100% U.S.-Based Team</span>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[#F7F5F0] py-14 px-6 border-t-[3px] border-[#C8973E]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A]">The Clock Is Running</h2>
            <p className="text-center text-[#5A5A5A] text-base max-w-2xl mx-auto mb-10">
              Court filings, Supreme Court arguments, and opt-in deadlines are converging.
              Firms that can&apos;t reach and engage their claimants at each milestone will lose cases to attrition.
            </p>
            
            {/* Desktop Timeline */}
            <div className="hidden md:flex justify-between items-start max-w-5xl mx-auto relative">
              <div className="absolute top-3.5 left-10 right-10 h-[3px] bg-[#E8E6E1]" />
              
              {/* Milestone 1 */}
              <div className="relative text-center flex-1 z-10">
                <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#C8973E]" />
                <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">FEB 17, 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Settlement Filed</div>
                <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">$7.25B class settlement with tiered scoring grid</div>
              </div>
              
              {/* Today */}
              <div className="relative text-center flex-1 z-10">
                <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#C8973E] mb-1">You Are Here</div>
                <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#C8973E] animate-pulse" />
                <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">{todayDate}</div>
              </div>
              
              {/* Milestone 3 */}
              <div className="relative text-center flex-1 z-10">
                <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
                <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">APR 27, 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Oral Arguments</div>
                <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto"><em>Monsanto v. Durnell</em>—preemption case</div>
                <div className="font-sans text-[11px] font-bold text-[#0B1D3A] mt-1.5">{daysUntilScotus} days away</div>
              </div>
              
              {/* Milestone 4 */}
              <div className="relative text-center flex-1 z-10">
                <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
                <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">JUN 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Decision</div>
                <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">Ruling could preempt future claims and reshape payouts</div>
              </div>
              
              {/* Milestone 5 */}
              <div className="relative text-center flex-1 z-10">
                <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
                <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">Q3 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Preliminary Approval</div>
                <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">Opt-in deadlines set. Claimant engagement required.</div>
              </div>
              
              {/* Milestone 6 */}
              <div className="relative text-center flex-1 z-10">
                <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
                <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E] mb-1.5">2026–2027</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">First Payouts</div>
                <div className="text-[11px] text-[#5A5A5A] leading-tight max-w-[140px] mx-auto">Engaged claimants with complete files get prioritized disbursement</div>
              </div>
            </div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6 max-w-md mx-auto">
              {/* Same milestones as desktop but stacked */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#C8973E] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">FEB 17, 2026</div>
                  <div className="text-[13px] font-bold text-[#0B1D3A]">Settlement Filed</div>
                  <div className="text-[11px] text-[#5A5A5A]">$7.25B class settlement with tiered scoring grid</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#C8973E] flex-shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#C8973E]">You Are Here</div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">{todayDate}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">APR 27, 2026</div>
                  <div className="text-[13px] font-bold text-[#0B1D3A]">SCOTUS Oral Arguments</div>
                  <div className="text-[11px] text-[#5A5A5A]"><em>Monsanto v. Durnell</em>—preemption case</div>
                  <div className="font-sans text-[11px] font-bold text-[#0B1D3A] mt-1">{daysUntilScotus} days away</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">JUN 2026</div>
                  <div className="text-[13px] font-bold text-[#0B1D3A]">SCOTUS Decision</div>
                  <div className="text-[11px] text-[#5A5A5A]">Ruling could preempt future claims and reshape payouts</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">Q3 2026</div>
                  <div className="text-[13px] font-bold text-[#0B1D3A]">Preliminary Approval</div>
                  <div className="text-[11px] text-[#5A5A5A]">Opt-in deadlines set. Claimant engagement required.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#C8973E]">2026–2027</div>
                  <div className="text-[13px] font-bold text-[#0B1D3A]">First Payouts</div>
                  <div className="text-[11px] text-[#5A5A5A]">Engaged claimants with complete files get prioritized disbursement</div>
                </div>
              </div>
            </div>
            
            <p className="text-center max-w-[700px] mx-auto mt-8 text-[15px] italic text-[#5A5A5A]">
              Every milestone requires claimant engagement. Firms that can&apos;t reach their claimants
              for documentation, signatures, and opt-in decisions lose cases—and settlement dollars.
            </p>
          </div>
        </section>

        {/* Authority Quotes */}
        <section className="py-12 px-6 bg-white border-b border-[#E8E6E1]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-l-[3px] border-[#C8973E]">
                <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                  &ldquo;I believe this $7.25 billion proposed national class settlement… is the best path forward to finally bring the Roundup litigation to a closing chapter. Payments should begin in 2026.&rdquo;
                </blockquote>
                <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Joe Rice, Co-founder of Motley Rice</div>
                <div className="font-sans text-[11px] text-[#6B7B8D]">
                  Lead Negotiator for Plaintiffs &nbsp;&bull;&nbsp; <a href="https://www.motleyrice.com/news" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Motley Rice Official News</a>
                </div>
              </div>
              <div className="p-6 border-l-[3px] border-[#C8973E]">
                <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                  &ldquo;The proposed class settlement agreement, together with the Supreme Court case, provides an essential path out of the litigation uncertainty.&rdquo;
                </blockquote>
                <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Bill Anderson, CEO of Bayer</div>
                <div className="font-sans text-[11px] text-[#6B7B8D]">
                  Defense Perspective &nbsp;&bull;&nbsp; <a href="https://www.bayer.com/media/en-us/" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Bayer Press Release</a>
                </div>
              </div>
            </div>
            
            {/* Communication Quotes */}
            <div className="mt-10 pt-8 border-t border-[#E8E6E1]">
              <div className="text-center mb-6">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E]">Why Claimant Communication Matters</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border-l-[3px] border-[#C8973E]">
                  <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                    &ldquo;When firms do not maintain relationships with their claimants, they could lose contact with them altogether. Outdated information leads to missed deadlines and abandoned cases—losses that are entirely preventable.&rdquo;
                  </blockquote>
                  <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Kim Lavin, Verus LLC</div>
                  <div className="font-sans text-[11px] text-[#6B7B8D]">
                    Mass Tort Claims Administration &nbsp;&bull;&nbsp; <a href="https://www.verusllc.com" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Verus LLC</a>
                  </div>
                </div>
                <div className="p-6 border-l-[3px] border-[#C8973E]">
                  <blockquote className="text-sm italic text-[#2C2C2C] leading-relaxed mb-3">
                    &ldquo;Consistent communication is key. Plaintiffs who understand what&apos;s happening and why are more likely to remain engaged throughout the life of their case—and far less likely to abandon viable claims.&rdquo;
                  </blockquote>
                  <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Broughton Partners</div>
                  <div className="font-sans text-[11px] text-[#6B7B8D]">
                    Mass Tort Case Management &nbsp;&bull;&nbsp; <a href="https://broughtonpartners.com" target="_blank" rel="noopener" className="text-[#C8973E] hover:underline">Broughton Partners</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Problem Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A]">
              You Can&apos;t Settle Cases You Can&apos;t Reach.<br />Most Dockets Are Losing Claimants.
            </h2>
            <p className="text-center text-[#5A5A5A] text-base max-w-2xl mx-auto mb-10">
              Roundup litigation has dragged on since 2018. Your claimants have moved, changed numbers, and lost interest.
              With the <a href="https://www.classaction.org/news/7.25b-roundup-settlement-proposed-to-end-litigation-over-allegations-weed-killer-causes-non-hodgkins-lymphoma" target="_blank" rel="noopener" className="text-[#C8973E] underline">$7.25B settlement</a> filed and SCOTUS arguments
              in <span className="text-[#C8973E] font-bold">{daysUntilScotus}</span> days, every unreachable claimant
              is a case that won&apos;t score against the <a href="https://www.lawsuit-information-center.com/roundup-lawsuit.html" target="_blank" rel="noopener" className="text-[#C8973E] underline">9-tier compensation grid</a>—and settlement money your firm will never see.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-[3px] border-[#C8973E] p-5 bg-[#F7F5F0] rounded-r-lg">
                <h3 className="text-base font-bold text-[#0B1D3A] mb-2">Silent Roundup Claimants, Stale Data</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  Half your contact data may already be wrong. SMS bounce rates hit 50% in Roundup dockets.
                  Claimants who signed retainers in 2019–2022 have moved, changed phones, or simply forgotten
                  they&apos;re part of the largest glyphosate litigation in history.
                </p>
                <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Reopening just 10 lost Roundup NHL cases can recover ~$500K+ in settlement value</div>
              </div>
              
              <div className="border-l-[3px] border-[#C8973E] p-5 bg-[#F7F5F0] rounded-r-lg">
                <h3 className="text-base font-bold text-[#0B1D3A] mb-2">Case Closures from Non-Response</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  When Roundup claimants don&apos;t respond to Plaintiff Fact Sheets, NHL medical record authorizations,
                  or glyphosate exposure questionnaires, their cases are closed—not because the claims are weak, but
                  because the firm can&apos;t make contact.
                </p>
                <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">As many as 70% of purchased signed claimants may require disengagement — ZeroRisk Cases</div>
              </div>
              
              <div className="border-l-[3px] border-[#C8973E] p-5 bg-[#F7F5F0] rounded-r-lg">
                <h3 className="text-base font-bold text-[#0B1D3A] mb-2">Manual Outreach Doesn&apos;t Scale</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  You can&apos;t one-by-one contact thousands of Roundup claimants monthly. Paralegals burn out chasing
                  PFS completions and medical record authorizations that go nowhere, while SCOTUS deadlines
                  and opt-in windows close around you.
                </p>
                <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Firms spend $200–400/case annually on manual communication tasks</div>
              </div>
              
              <div className="border-l-[3px] border-[#C8973E] p-5 bg-[#F7F5F0] rounded-r-lg">
                <h3 className="text-base font-bold text-[#0B1D3A] mb-2">Incomplete Files = Lower Tier Placement</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  The $7.25B settlement uses a <a href="https://www.lawsuit-information-center.com/roundup-lawsuit.html" target="_blank" rel="noopener" className="text-[#C8973E] underline">9-tier compensation grid</a> scoring NHL subtype, exposure type, and age at diagnosis.
                  Claimants with incomplete documentation—missing medical records, unverified exposure history—score
                  lower or get placed in Quick-Pay tiers ($6K–$14.5K) instead of standard awards (up to $165K+).
                </p>
                <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Difference between Tier 1 and Tier 9 can be $150K+ per claimant</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-10 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
          <div className="max-w-3xl mx-auto">
            <div className="border-2 border-[#C8973E] rounded-lg p-8 text-center">
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#C8973E] mb-3">Why This Can&apos;t Wait</div>
              <h2 className="text-white text-[22px] mb-4 leading-snug">SCOTUS Oral Arguments Are <span className="text-[#E2B45A] font-bold">{daysUntilScotus}</span> Days Away</h2>
              <p className="text-[15px] text-[#B0BFDB] leading-relaxed mb-4">
                On April 27, the Supreme Court hears <em>Monsanto v. Durnell</em>—a preemption case that could
                reshape the entire <a href="https://www.classaction.org/news/7.25b-roundup-settlement-proposed-to-end-litigation-over-allegations-weed-killer-causes-non-hodgkins-lymphoma" target="_blank" rel="noopener" className="text-[#E2B45A] underline">$7.25B settlement</a>.
                If the Court rules to preempt state failure-to-warn claims, claimants with incomplete files
                and unverified exposure histories will be locked out of the highest compensation tiers.
              </p>
              <p className="text-[14px] text-[#8DA0BF] leading-relaxed">
                Firms that can&apos;t reach their claimants for Plaintiff Fact Sheets, NHL medical records,
                and glyphosate exposure documentation <strong className="text-white">before preliminary approval</strong>
                risk losing cases worth $10K–$165K+ each to administrative closure.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-[#0B1D3A] text-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] text-center mb-3">Keep Clients Engaged for Years—Without Burning Your Team</h2>
            <p className="text-center text-[#8DA0BF] text-base max-w-2xl mx-auto mb-9">
              Multi-channel, low-touch, high-scale outreach that keeps claimants responsive
              from retainer to settlement—so your firm never loses a case to silence.
            </p>
            
            <div className="bg-[rgba(255,255,255,0.08)] border-2 border-[#C8973E] rounded-lg p-7">
              <h3 className="text-xl text-[#E2B45A] mb-2">Automated Claimant Communication</h3>
              <p className="text-[14px] text-[#C5CDDB] mb-5"><em className="not-italic">Keep clients engaged for years with multi-channel, low-touch, high-scale outreach</em></p>
              
              <div className="space-y-5">
                <div>
                  <div className="text-[15px] font-bold text-[#E2B45A] mb-2">The Challenge</div>
                  <p className="text-[14px] text-[#B0BFDB] leading-relaxed">
                    Roundup NHL claimants need ongoing communication throughout the litigation lifecycle—gathering Plaintiff Fact Sheets, NHL medical records proving diagnosis, and glyphosate exposure documentation. With <a href="https://www.lawsuit-information-center.com/roundup-lawsuit.html" target="_blank" rel="noopener" className="text-[#E2B45A] underline">9 compensation tiers</a> ranging from $6,000 to $165,000+, incomplete files mean lower tier placement and lost revenue. Firms spend $200–400 annually per case on manual communication—and still lose claimants to silence.
                  </p>
                </div>
                
                <div>
                  <div className="text-[15px] font-bold text-[#E2B45A] mb-2">Our Approach</div>
                  <div className="font-sans text-[13px] text-[#B0BFDB] leading-relaxed space-y-1">
                    <div>✓ Multi-channel campaigns triggered by Roundup case milestones—PFS filing, medical record collection, settlement opt-in</div>
                    <div>✓ Roundup-specific templates for NHL medical authorizations and glyphosate exposure documentation</div>
                    <div>✓ Smart scheduling based on claimant demographics and response patterns</div>
                    <div>✓ Early identification of at-risk claimants before SCOTUS and opt-in deadlines</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-[15px] font-bold text-[#E2B45A] mb-2">Key Benefits</div>
                  <div className="font-sans text-[13px] text-[#B0BFDB] leading-relaxed space-y-1">
                    <div>✓ 60–80% claimant response rate (vs 30–40% industry average)</div>
                    <div>✓ 75% reduction in document cycle time</div>
                    <div>✓ 85% case completion rate</div>
                    <div>✓ $150–250 cost savings per case annually</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button onClick={openModal} className="font-sans text-[14px] font-semibold text-[#E2B45A] hover:underline">
                  See how enrichment recovers lost Roundup claimants &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] text-center mb-10 text-[#0B1D3A]">From Silent Claimants to Settled Cases in Four Steps</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="w-11 h-11 bg-[#0B1D3A] text-[#C8973E] rounded-full inline-flex items-center justify-center font-sans text-lg font-bold mb-3.5 relative z-10">1</div>
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5">Data Assessment</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed mb-2">
                  We audit your Roundup NHL claimant contact data—phone numbers, emails, addresses—and identify stale, invalid, or missing records across your docket.
                </p>
                <div className="font-sans text-[12px] font-bold text-[#C8973E]">48-hour data quality report</div>
              </div>
              
              <div className="text-center relative">
                <div className="w-11 h-11 bg-[#0B1D3A] text-[#C8973E] rounded-full inline-flex items-center justify-center font-sans text-lg font-bold mb-3.5 relative z-10">2</div>
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5">Contact Enrichment</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed mb-2">
                  Our enrichment engine locates updated contact info for unreachable claimants—reducing SMS bounce rates from 50% to under 15%.
                </p>
                <div className="font-sans text-[12px] font-bold text-[#C8973E]">5–7 days for full docket</div>
              </div>
              
              <div className="text-center relative">
                <div className="w-11 h-11 bg-[#0B1D3A] text-[#C8973E] rounded-full inline-flex items-center justify-center font-sans text-lg font-bold mb-3.5 relative z-10">3</div>
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5">Automated Outreach</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed mb-2">
                  Roundup-specific campaigns (SMS, email, secure portal) for PFS collection, NHL medical record authorization, glyphosate exposure documentation, and settlement opt-in—triggered by case milestones.
                </p>
                <div className="font-sans text-[12px] font-bold text-[#C8973E]">Live within 2 weeks</div>
              </div>
              
              <div className="text-center relative">
                <div className="w-11 h-11 bg-[#0B1D3A] text-[#C8973E] rounded-full inline-flex items-center justify-center font-sans text-lg font-bold mb-3.5 relative z-10">4</div>
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-1.5">Monitor & Optimize</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed mb-2">
                  Real-time dashboards track response rates, flag at-risk Roundup claimants for paralegal follow-up, and monitor documentation completeness against the 9-tier scoring criteria.
                </p>
                <div className="font-sans text-[12px] font-bold text-[#C8973E]">Ongoing optimization</div>
              </div>
            </div>
          </div>
        </section>


        {/* Offer Section */}
        <section className="bg-[#FAF5EB] py-14 px-6 border-y-[3px] border-[#C8973E]" id="audit">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A]">See What Enrichment Can Recover From Your Roundup Docket</h2>
            <p className="text-center text-[#5A5A5A] text-base max-w-2xl mx-auto mb-9">
              We&apos;ll enrich 100 of your Roundup NHL claimant records for free—updating stale phone numbers,
              emails, and addresses so you can see exactly how many &ldquo;lost&rdquo; cases are recoverable
              before the SCOTUS deadline.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Offer Card */}
              <div className="bg-white border-2 border-[#C8973E] rounded-lg p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E] mb-2.5 block">Free — 100 Cases Enriched</span>
                <h3 className="text-lg text-[#0B1D3A] mb-2.5">Free 100-Case Roundup Claimant Enrichment</h3>
                <p className="text-[14px] text-[#5A5A5A] leading-relaxed mb-4">
                  Send us 100 Roundup NHL claimant records and we&apos;ll run them through our multi-source enrichment engine.
                  You&apos;ll get back updated contact information, deliverability scores, and a recovery
                  forecast—so you can see how many &ldquo;lost&rdquo; Roundup cases are reachable before preliminary approval.
                </p>
                <div className="font-sans text-[13px] text-[#2C2C2C] leading-relaxed space-y-1">
                  <div className="before:content-['✓_'] before:text-[#C8973E] before:font-bold">Updated phone numbers, emails, and addresses for 100 claimants</div>
                  <div className="before:content-['✓_'] before:text-[#C8973E] before:font-bold">Deliverability scoring for each contact channel</div>
                  <div className="before:content-['✓_'] before:text-[#C8973E] before:font-bold">Recovery forecast showing how many &ldquo;lost&rdquo; Roundup NHL cases are reachable before SCOTUS</div>
                  <div className="before:content-['✓_'] before:text-[#C8973E] before:font-bold">Before/after comparison of your contact data quality</div>
                  <div className="before:content-['✓_'] before:text-[#C8973E] before:font-bold">Walkthrough call to review results and discuss full-docket enrichment</div>
                </div>
              </div>
              
              {/* Mockup */}
              <div className="bg-white border border-[#E8E6E1] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] font-sans text-[36px] font-extrabold text-[rgba(200,151,62,0.08)] uppercase tracking-[0.1em] pointer-events-none whitespace-nowrap">Sample Results</div>
                <div className="bg-[#0B1D3A] text-white py-3.5 px-5 font-sans text-[12px] font-bold tracking-[0.06em] uppercase">Claimant Enrichment Results — 100-Case Sample</div>
                <div className="p-5">
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7B8D] mb-2.5">Enrichment Status</div>
                  
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 font-sans text-[12px]">
                      <span className="w-[72px] font-semibold text-[#0B1D3A] text-right">Updated</span>
                      <div className="flex-1 h-4 bg-[#F0EDE6] rounded overflow-hidden">
                        <div className="h-full bg-[#C8973E] rounded" style={{width: '42%'}} />
                      </div>
                      <span className="w-8 font-bold text-[#2C2C2C]">42%</span>
                    </div>
                    <div className="flex items-center gap-2 font-sans text-[12px]">
                      <span className="w-[72px] font-semibold text-[#0B1D3A] text-right">Verified</span>
                      <div className="flex-1 h-4 bg-[#F0EDE6] rounded overflow-hidden">
                        <div className="h-full bg-[#C8973E] opacity-75 rounded" style={{width: '28%'}} />
                      </div>
                      <span className="w-8 font-bold text-[#2C2C2C]">28%</span>
                    </div>
                    <div className="flex items-center gap-2 font-sans text-[12px]">
                      <span className="w-[72px] font-semibold text-[#0B1D3A] text-right">New Match</span>
                      <div className="flex-1 h-4 bg-[#F0EDE6] rounded overflow-hidden">
                        <div className="h-full bg-[#5BAD6F] rounded" style={{width: '18%'}} />
                      </div>
                      <span className="w-8 font-bold text-[#2C2C2C]">18%</span>
                    </div>
                    <div className="flex items-center gap-2 font-sans text-[12px]">
                      <span className="w-[72px] font-semibold text-[#0B1D3A] text-right">Not Found</span>
                      <div className="flex-1 h-4 bg-[#F0EDE6] rounded overflow-hidden">
                        <div className="h-full bg-[#A0B4CC] rounded" style={{width: '12%'}} />
                      </div>
                      <span className="w-8 font-bold text-[#2C2C2C]">12%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    <div className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                      <span className="font-sans text-lg font-bold text-[#0B1D3A] block">88%</span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.06em] text-[#5A5A5A]">Match Rate</span>
                    </div>
                    <div className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                      <span className="font-sans text-lg font-bold text-[#0B1D3A] block">42</span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.06em] text-[#5A5A5A]">Updated Contacts</span>
                    </div>
                    <div className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                      <span className="font-sans text-lg font-bold text-[#0B1D3A] block">$2.1M</span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.06em] text-[#5A5A5A]">Recoverable Value</span>
                    </div>
                  </div>
                  
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7B8D] mb-2.5">Enrichment Results Log</div>
                  <table className="w-full font-sans text-[11px]">
                    <thead>
                      <tr className="text-left">
                        <th className="py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-[0.04em] text-[10px]">Claimant</th>
                        <th className="py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-[0.04em] text-[10px]">Before</th>
                        <th className="py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-[0.04em] text-[10px]">After</th>
                        <th className="py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-[0.04em] text-[10px]">Recovery</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">#0023</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Phone disconnected</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#C8973E] font-semibold">New mobile verified</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Reachable</td></tr>
                      <tr><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">#0041</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Email bounced</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#C8973E] font-semibold">Updated email + phone</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Reachable</td></tr>
                      <tr><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">#0017</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Address invalid</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#C8973E] font-semibold">New address confirmed</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Reachable</td></tr>
                    </tbody>
                  </table>
                  <div className="font-sans text-[10px] text-[#6B7B8D] mt-2.5 text-center italic">… 97 more claimants enriched in full report</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={openModal}
                className="bg-[#0B1D3A] text-[#E2B45A] px-10 py-4 font-sans text-base font-bold rounded border-2 border-[#C8973E] hover:bg-[#142D55] hover:border-[#E2B45A] transition-all"
              >
                <span className="hidden md:inline">Get Free 100-Case Enrichment</span>
                <span className="md:hidden">Free Enrichment</span>
              </button>
              
              <div className="flex justify-center gap-2 flex-wrap mt-5">
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
                  <ShieldCheckIcon />
                  <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">All Data Housed in AWS</span>
                </div>
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
                  <ShieldCheckIcon />
                  <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">NDA First</span>
                </div>
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
                  <ShieldCheckIcon />
                  <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">100% U.S.-Based Team</span>
                </div>
              </div>
              
              <p className="font-sans text-[12px] text-[#5A5A5A] mt-3.5 text-center">
                Designed for plaintiff firms managing Roundup NHL cases with 100+ claimants.<br />
                Questions? <a href="mailto:info@northcastleconsulting.com" className="text-[#C8973E]">Reach out directly</a>—we respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl text-center mb-8 text-[#0B1D3A]">Who&apos;s Behind This</h2>
            
            <div className="grid md:grid-cols-2 md:gap-8 items-start">
              <div className="pr-6 border-r border-[#C8973E]">
                <div className="font-sans text-[15px] font-bold text-[#0B1D3A]">Ram Ventrapragada</div>
                <div className="font-sans text-[12px] text-[#C8973E] font-semibold uppercase tracking-[0.06em] mb-1.5">Co-Founder</div>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  Over a decade of experience in data strategy, AI-enabled automation, and mass tort litigation operations.
                  At Wagstaff Law Firm, led AI-driven lead enrichment and document review initiatives—converting
                  unstructured claimant communications into structured Salesforce datasets with automated QA processes
                  and fallback logic at scale.
                </p>
                <div className="font-sans text-[11px] text-[#6B7B8D] mt-1.5 font-semibold">Purdue University &nbsp;&bull;&nbsp; MBA, Carnegie Mellon Tepper School of Business</div>
              </div>
              <div className="pl-6">
                <div className="font-sans text-[15px] font-bold text-[#0B1D3A]">Nicholas Citrin</div>
                <div className="font-sans text-[12px] text-[#C8973E] font-semibold uppercase tracking-[0.06em] mb-1.5">Co-Founder</div>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  Nearly two decades in finance spanning investment banking, private equity, and equity research.
                  Former consultant at Accordion (Transaction Execution Services). Career started at Lehman Brothers
                  in Technology & Media M&A. Specializes in financial modeling, valuations,
                  and building outsourced analytics teams for complex data environments.
                </p>
                <div className="font-sans text-[11px] text-[#6B7B8D] mt-1.5 font-semibold">University of Pennsylvania &nbsp;&bull;&nbsp; Economics, cum laude</div>
              </div>
            </div>
            
            <p className="text-center mt-6 font-sans text-[13px] text-[#5A5A5A]">
              Questions? We respond within 24 hours. <a href="mailto:info@northcastleconsulting.com" className="text-[#C8973E]">info@northcastleconsulting.com</a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-6 max-w-3xl mx-auto">
          <h2 className="text-[28px] text-center mb-8 text-[#0B1D3A]">Common Questions</h2>
          
          <div className="space-y-0">
            <details className="border-b border-[#E8E6E1] py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">
                How long does enrichment take for 100 Roundup cases?
                <span className="text-[#C8973E] text-[22px] group-open:hidden">+</span>
                <span className="text-[#C8973E] text-[22px] hidden group-open:block">−</span>
              </summary>
              <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                5–7 business days from the time we receive your claimant records. You&apos;ll get back a complete
                enrichment report with updated phone numbers, emails, addresses, deliverability scores, and a
                recovery forecast—plus a walkthrough call to review results.
              </p>
            </details>
            
            <details className="border-b border-[#E8E6E1] py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">
                What data do we need to send you?
                <span className="text-[#C8973E] text-[22px] group-open:hidden">+</span>
                <span className="text-[#C8973E] text-[22px] hidden group-open:block">−</span>
              </summary>
              <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                Name and last known contact information (phone, email, and/or address) for 100 Roundup claimants.
                We handle the rest—running records through our multi-source enrichment engine to locate updated
                contact data. No Plaintiff Fact Sheets or medical records required for the enrichment step.
              </p>
            </details>
            
            <details className="border-b border-[#E8E6E1] py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">
                What if our Roundup data is really old (3+ years)?
                <span className="text-[#C8973E] text-[22px] group-open:hidden">+</span>
                <span className="text-[#C8973E] text-[22px] hidden group-open:block">−</span>
              </summary>
              <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                That&apos;s where enrichment shines. Many Roundup retainers were signed in 2019–2022. The older
                the data, the more contacts have gone stale—and the higher the recovery rate from enrichment.
                We routinely recover 40–60% of &ldquo;lost&rdquo; contacts from aging dockets.
              </p>
            </details>
            
            <details className="border-b border-[#E8E6E1] py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">
                Is our claimant data secure when we send it to you?
                <span className="text-[#C8973E] text-[22px] group-open:hidden">+</span>
                <span className="text-[#C8973E] text-[22px] hidden group-open:block">−</span>
              </summary>
              <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                We execute NDAs and BAAs before any data transfer. All claimant data is hosted on encrypted AWS
                infrastructure within the United States—AES-256 encryption at rest, TLS 1.2+ in transit.
                Role-based access controls, no offshore labor, and all access credentials expire after engagement
                completion. Every data touchpoint is logged and auditable.
              </p>
            </details>
            
            <details className="border-b border-[#E8E6E1] py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">
                How much does full-docket enrichment cost?
                <span className="text-[#C8973E] text-[22px] group-open:hidden">+</span>
                <span className="text-[#C8973E] text-[22px] hidden group-open:block">−</span>
              </summary>
              <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                We scope pricing to your docket size on our initial call—no surprises. The 100-case enrichment
                is completely free, so you see the ROI before committing. Full-docket enrichment typically pays for
                itself by recovering cases worth $10K–$165K+ each from the
                <a href="https://www.lawsuit-information-center.com/roundup-lawsuit.html" target="_blank" rel="noopener" className="text-[#C8973E]"> 9-tier settlement grid</a>.
              </p>
            </details>
            
            <details className="border-b border-[#E8E6E1] py-5 group">
              <summary className="text-base font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">
                Can enrichment help with claimants who never completed their Plaintiff Fact Sheet?
                <span className="text-[#C8973E] text-[22px] group-open:hidden">+</span>
                <span className="text-[#C8973E] text-[22px] hidden group-open:block">−</span>
              </summary>
              <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                Absolutely. Updated contact info is the first step to re-engaging silent claimants for PFS completion,
                NHL medical record authorization, and glyphosate exposure documentation. You can&apos;t collect
                settlement-critical documents from claimants you can&apos;t reach.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#0B1D3A] text-white text-center py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[30px] mb-3.5">
              Your Roundup Claimants Are Waiting.<br />SCOTUS Arguments Are <span className="text-[#E2B45A] font-bold">{daysUntilScotus}</span> Days Away.
            </h2>
            <p className="text-[#8DA0BF] max-w-xl mx-auto mb-7 text-base">
              Enrichment can recover claimants you&apos;ve lost contact with—turning closed cases into
              settlement-ready files. Let us prove it with 100 of your Roundup NHL cases—free.
            </p>
            <button 
              onClick={openModal}
              className="bg-[#C8973E] text-[#0B1D3A] px-10 py-4 font-sans text-base font-bold rounded hover:bg-[#E2B45A] transition-colors"
            >
              Get Free 100-Case Enrichment
            </button>
            
            <div className="flex justify-center gap-2 flex-wrap mt-5">
              <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(255,255,255,0.15)] rounded bg-[rgba(255,255,255,0.06)]">
                <ShieldCheckIcon />
                <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">All Data Housed in AWS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(255,255,255,0.15)] rounded bg-[rgba(255,255,255,0.06)]">
                <ShieldCheckIcon />
                <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">NDA First</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(255,255,255,0.15)] rounded bg-[rgba(255,255,255,0.06)]">
                <ShieldCheckIcon />
                <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">100% U.S.-Based Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer ref={footerRef} className="bg-[#080F1E] text-[#5A6A85] text-center py-8 px-6 font-sans text-[13px]">
          <p>&copy; 2026 North Castle Consulting. All rights reserved. &nbsp;|&nbsp; <a href="#" className="text-[#C8973E]">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="text-[#C8973E]">Terms</a></p>
          <p className="mt-2 text-xs tracking-wide text-[#4A5A72]">All Data Housed in AWS &bull; NDA First &bull; 100% U.S.-Based Team</p>
        </footer>

        {/* Sticky Bar */}
        <div className={`fixed bottom-0 left-0 right-0 bg-[#142D55] py-3 px-6 flex justify-center items-center gap-4 z-[900] shadow-[0_-2px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
          <span className="hidden md:block font-sans text-[14px] text-white font-semibold">
            Free 100-Case Enrichment — <span>{daysUntilScotus}</span> days until SCOTUS arguments
          </span>
          <button 
            onClick={openModal}
            className="bg-[#C8973E] text-[#0B1D3A] px-6 py-2.5 font-sans text-[13px] font-bold rounded hover:bg-[#E2B45A] transition-colors"
          >
            Get Enrichment
          </button>
        </div>

        {/* Primary Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-[rgba(11,29,58,0.85)] backdrop-blur-sm z-[1000] flex justify-center items-center p-6"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="bg-white rounded-xl p-10 max-w-md w-full text-center relative shadow-2xl">
              <button 
                onClick={closeModal}
                className="absolute top-3.5 right-4 bg-none border-none text-2xl text-[#6B7B8D] cursor-pointer leading-none"
              >
                &times;
              </button>
              
              <h2 className="text-[22px] text-[#0B1D3A] mb-2">Get Your Free 100-Case Enrichment</h2>
              <p className="font-sans text-[14px] text-[#5A5A5A] mb-6">Enter your work email and we&apos;ll reach out within 24 hours to coordinate your free enrichment.</p>
              
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
                  {isSubmitting ? 'Sending...' : 'Start My Free Enrichment'}
                </button>
              </form>
              
              {formStatus.message && (
                <div className={`mt-3 text-sm ${formStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                <span className="font-sans text-[11px] font-semibold text-[#6B7B8D] uppercase tracking-[0.04em]">All Data Housed in AWS</span>
                <span className="font-sans text-[11px] font-semibold text-[#6B7B8D] uppercase tracking-[0.04em]">NDA First</span>
                <span className="font-sans text-[11px] font-semibold text-[#6B7B8D] uppercase tracking-[0.04em]">100% U.S.-Based Team</span>
              </div>
              
              <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">We never share your information. Your data stays private.</p>
            </div>
          </div>
        )}

        {/* Exit Intent Popup */}
        {exitPopupOpen && (
          <div 
            className="fixed inset-0 bg-[rgba(11,29,58,0.85)] backdrop-blur-sm z-[1000] flex justify-center items-center p-6"
            onClick={(e) => e.target === e.currentTarget && closeExitPopup()}
          >
            <div className="bg-white rounded-xl p-10 max-w-md w-full text-center relative shadow-2xl">
              <button 
                onClick={closeExitPopup}
                className="absolute top-3.5 right-4 bg-none border-none text-2xl text-[#6B7B8D] cursor-pointer leading-none"
              >
                &times;
              </button>
              
              <h2 className="text-[22px] text-[#0B1D3A] mb-2">Before You Go</h2>
              <p className="font-sans text-[14px] text-[#5A5A5A] mb-6">Download our Roundup Settlement Timeline & Tier Breakdown—free, no strings.</p>
              
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
              
              <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">No spam. Unsubscribe anytime. Your data stays private.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RoundupClaimantCommunicationEnrichment;
