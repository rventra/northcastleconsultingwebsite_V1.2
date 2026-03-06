import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageMeta } from './components/MetaTags.jsx';

const RoundupFreeDocketReview = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [daysUntilScotus, setDaysUntilScotus] = useState(0);
  const [todayDate, setTodayDate] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [progressWidth, setProgressWidth] = useState('5%');
  const [exitPopupOpen, setExitPopupOpen] = useState(false);
  const [exitEmail, setExitEmail] = useState('');
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  // Calculate days until SCOTUS arguments (April 27, 2026) and dynamic dates
  useEffect(() => {
    const scotus = new Date('2026-04-27T00:00:00');
    const now = new Date();
    const days = Math.max(0, Math.ceil((scotus - now) / (1000 * 60 * 60 * 24)));
    setDaysUntilScotus(days);

    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    setTodayDate(`${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);

    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    setLastUpdated(`Last updated: ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);

    // Dynamic timeline progress
    const settlementDate = new Date('2026-02-17');
    const endDate = new Date('2027-06-30');
    const totalSpan = endDate - settlementDate;
    const elapsed = now - settlementDate;
    const pct = Math.max(0, Math.min(100, (elapsed / totalSpan) * 100));
    setProgressWidth(pct + '%');
  }, []);

  // Sticky bar visibility
  useEffect(() => {
    const heroEl = heroRef.current;
    const footerEl = footerRef.current;
    if (!heroEl || !footerEl) return;

    let heroVisible = true;
    let footerVisible = false;

    const updateSticky = () => {
      setShowSticky(!heroVisible && !footerVisible);
    };

    const heroObserver = new IntersectionObserver((entries) => {
      heroVisible = entries[0].isIntersecting;
      updateSticky();
    }, { threshold: 0 });

    const footerObserver = new IntersectionObserver((entries) => {
      footerVisible = entries[0].isIntersecting;
      updateSticky();
    }, { threshold: 0 });

    heroObserver.observe(heroEl);
    footerObserver.observe(footerEl);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  // Escape key
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

  // Exit intent
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

  const openModal = () => {
    setExitPopupOpen(false);
    setIsModalOpen(true);
    setEmail('');
    setFormStatus({ type: '', message: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeExitPopup = () => {
    setExitPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email.' });
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
          email,
          firm: '',
          phone: '',
          caseCount: '',
          message: 'Requested via Free Docket Review landing page',
          source: 'docket_review'
        })
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/roundup-free-docket-review-thank-you?email=' + encodeURIComponent(email));
      } else {
        setFormStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setFormStatus({ type: 'error', message: 'Network error. Please try again.' });
    }
    setIsSubmitting(false);
  };

  const handleExitSubmit = async (e) => {
    e.preventDefault();
    if (!exitEmail || !exitEmail.includes('@')) return;
    try {
      await fetch('https://8jl5xpty5g.execute-api.us-east-2.amazonaws.com/prod/request-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: exitEmail.split('@')[0],
          email: exitEmail,
          firm: '',
          phone: '',
          caseCount: '',
          message: 'Requested via exit-intent PDF download',
          source: 'docket_review'
        })
      });
      navigate('/roundup-free-docket-review-thank-you?source=pdf&email=' + encodeURIComponent(exitEmail));
    } catch (err) {
      // silent fail
    }
  };

  // Reusable SVG components
  const ShieldCheckSvg = ({ fill = '#6B7B8D', checkFill = 'white', className = '' }) => (
    <svg viewBox="0 0 16 20" fill={fill} className={className}>
      <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z" />
      <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill={checkFill} />
    </svg>
  );

  const LockSvg = ({ fill = '#6B7B8D', className = '' }) => (
    <svg viewBox="0 0 16 16" fill={fill} className={className}>
      <path d="M8 1a3 3 0 00-3 3v2H4a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-1V4a3 3 0 00-3-3zm-1 3a1 1 0 012 0v2H7V4zm1 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  );

  const UsTeamSvg = ({ fill = '#6B7B8D', className = '' }) => (
    <svg viewBox="0 0 16 16" fill={fill} className={className}>
      <path d="M2 3h12v1H2V3zm0 3h12v1H2V6zm0 3h8v1H2V9zm10.5.5l1 1L11 13l-2.5-2.5 1-1L11 11l1.5-1.5z" />
    </svg>
  );

  return (
    <>
      <PageMeta pageKey="roundupFreeDocketReview" />
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,151,62,0.5); }
          50% { box-shadow: 0 0 0 10px rgba(200,151,62,0); }
        }
      `}</style>

      {/* TICKER */}
      <div className="bg-[#0B1D3A] text-white text-center py-2.5 px-6 font-sans text-[13px] font-semibold tracking-wide">
        $7.25B Roundup settlement filed February 17, 2026.{' '}
        <span className="text-[#E2B45A] font-bold">{daysUntilScotus}</span> days until SCOTUS oral arguments.
        {' '}&nbsp;|&nbsp;{' '}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); openModal(); }}
          className="text-[#E2B45A] underline"
        >
          How many of your cases are upper-tier? Find out free {'\u2192'}
        </a>
        <span className="block text-[10px] font-normal text-[#5A6A85] mt-0.5 tracking-wide">
          {lastUpdated}
        </span>
      </div>

      {/* HERO */}
      <section
        ref={heroRef}
        id="top"
        className="text-white text-center py-[72px] px-6"
        style={{
          background: 'linear-gradient(172deg, rgba(11,29,58,0.92) 0%, rgba(20,45,85,0.88) 100%), url(/roundup-bottle.jpg) center/cover no-repeat'
        }}
      >
        <div className="max-w-[960px] mx-auto px-6">
          <div className="font-sans text-[13px] font-bold tracking-[0.14em] uppercase text-[#C8973E] mb-[18px]">
            For Plaintiff Firms Managing Roundup NHL Cases
          </div>
          <h1 className="font-serif text-[clamp(28px,5vw,44px)] leading-[1.15] mb-5 font-bold">
            A $7.25B Roundup Settlement Is on the Table.<br />
            <em className="not-italic text-[#E2B45A]">Do You Know What Your Docket Is Worth?</em>
          </h1>
          <p className="text-[18px] leading-[1.55] max-w-[640px] mx-auto mb-8 text-[#C5CDDB]">
            The tiered scoring grid rewards data readiness. Firms that can value and verify
            their entire docket now will capture significantly more at settlement.
          </p>
          <div className="mb-3">
            <button
              onClick={openModal}
              className="inline-block bg-[#C8973E] text-[#0B1D3A] py-4 px-10 font-sans text-[16px] font-bold rounded border-none cursor-pointer tracking-wide hover:bg-[#E2B45A] transition-colors"
            >
              <span className="hidden sm:inline">Get My Free 50-Case Audit</span>
              <span className="inline sm:hidden">Get My Free Audit</span>
            </button>
          </div>
          <div className="font-sans text-[12px] text-[#6B7F9F] mb-1">
            No spam. No sharing. NDA executed before any data transfer.
          </div>
          <div className="font-sans text-[12px] text-[#8DA0BF] mt-2 tracking-wide">
            <svg style={{ width: '12px', height: '14px', verticalAlign: '-2px', marginRight: '2px' }} viewBox="0 0 16 20" fill="#8DA0BF" className="inline">
              <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z" />
              <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#142D55" />
            </svg>
            HIPAA-Ready &nbsp;{'\u2022'}&nbsp; 256-bit SSL &nbsp;{'\u2022'}&nbsp; NDA First &nbsp;{'\u2022'}&nbsp; 100% U.S.-Based Team
          </div>
        </div>
      </section>

      {/* LINEAR TIMELINE */}
      <section className="bg-[#F7F5F0] py-14 px-6 border-t-[3px] border-[#C8973E]">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A] font-serif font-bold">The Clock Is Running</h2>
          <p className="text-center text-[#5A5A5A] text-[16px] max-w-[640px] mx-auto mb-10 font-serif">
            Court filings, Supreme Court arguments, and opt-in deadlines are converging.
            Firms without a data-ready docket will be negotiating blind.
          </p>

          {/* Timeline - Desktop */}
          <div className="relative max-w-[880px] mx-auto hidden md:flex justify-between items-start px-[10px]">
            <div className="absolute top-[14px] left-[40px] right-[40px] h-[3px] bg-[#E8E6E1]" />
            <div className="absolute top-[14px] left-[40px] h-[3px] bg-[#C8973E]" style={{ width: progressWidth }} />

            <div className="relative text-center flex-1 z-[1]">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#C8973E]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">FEB 17, 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Settlement Filed</div>
              <div className="text-[11px] text-[#5A5A5A] leading-[1.4] max-w-[140px] mx-auto">$7.25B class settlement with tiered scoring grid</div>
            </div>

            <div className="relative text-center flex-1 z-[1]">
              <div className="font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1">You Are Here</div>
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#C8973E]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">{todayDate}</div>
            </div>

            <div className="relative text-center flex-1 z-[1]">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">APR 27, 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Oral Arguments</div>
              <div className="text-[11px] text-[#5A5A5A] leading-[1.4] max-w-[140px] mx-auto"><em>Monsanto v. Durnell</em>{'\u2014'}preemption case</div>
              <div className="font-sans text-[11px] font-bold text-[#0B1D3A] mt-1.5">{daysUntilScotus} days away</div>
            </div>

            <div className="relative text-center flex-1 z-[1]">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">JUN 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Decision</div>
              <div className="text-[11px] text-[#5A5A5A] leading-[1.4] max-w-[140px] mx-auto">Ruling could preempt future claims and reshape payouts</div>
            </div>

            <div className="relative text-center flex-1 z-[1]">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">Q3 2026</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Preliminary Approval</div>
              <div className="text-[11px] text-[#5A5A5A] leading-[1.4] max-w-[140px] mx-auto">Opt-in deadlines set. Case readiness required.</div>
            </div>

            <div className="relative text-center flex-1 z-[1]">
              <div className="w-7 h-7 rounded-full mx-auto mb-3 border-[3px] border-[#C8973E] bg-[#F7F5F0]" />
              <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">2026{'\u2013'}2027</div>
              <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">First Payouts</div>
              <div className="text-[11px] text-[#5A5A5A] leading-[1.4] max-w-[140px] mx-auto">Data-ready claims get prioritized disbursement</div>
            </div>
          </div>

          {/* Timeline - Mobile */}
          <div className="md:hidden flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#C8973E] flex-shrink-0" />
              <div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">FEB 17, 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Settlement Filed</div>
                <div className="text-[11px] text-[#5A5A5A] leading-[1.4]">$7.25B class settlement with tiered scoring grid</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#C8973E] flex-shrink-0" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <div>
                <div className="font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1">You Are Here</div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">{todayDate}</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0" />
              <div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">APR 27, 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Oral Arguments</div>
                <div className="text-[11px] text-[#5A5A5A] leading-[1.4]"><em>Monsanto v. Durnell</em>{'\u2014'}preemption case</div>
                <div className="font-sans text-[11px] font-bold text-[#0B1D3A] mt-1.5">{daysUntilScotus} days away</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0" />
              <div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">JUN 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">SCOTUS Decision</div>
                <div className="text-[11px] text-[#5A5A5A] leading-[1.4]">Ruling could preempt future claims and reshape payouts</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0" />
              <div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">Q3 2026</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">Preliminary Approval</div>
                <div className="text-[11px] text-[#5A5A5A] leading-[1.4]">Opt-in deadlines set. Case readiness required.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full border-[3px] border-[#C8973E] bg-[#F7F5F0] flex-shrink-0" />
              <div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-[#C8973E] mb-1.5">2026{'\u2013'}2027</div>
                <div className="text-[13px] font-bold text-[#0B1D3A] mb-1">First Payouts</div>
                <div className="text-[11px] text-[#5A5A5A] leading-[1.4]">Data-ready claims get prioritized disbursement</div>
              </div>
            </div>
          </div>

          <p className="text-center max-w-[700px] mx-auto mt-8 text-[15px] italic text-[#5A5A5A] font-serif">
            Every milestone is a data checkpoint. Firms that can{'\u2019'}t demonstrate case readiness at each stage
            lose negotiating leverage{'\u2014'}and settlement dollars.
          </p>
        </div>
      </section>

      {/* AUTHORITY QUOTES */}
      <section className="py-12 px-6 bg-white border-b border-[#E8E6E1]">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            <div className="pl-6 border-l-[3px] border-[#C8973E]">
              <blockquote className="text-[14px] italic text-[#2C2C2C] leading-[1.6] mb-3 font-serif">
                {'\u201C'}I believe this $7.25 billion proposed national class settlement{'\u2026'} is the best path forward to finally bring the Roundup litigation to a closing chapter. Payments should begin in 2026.{'\u201D'}
              </blockquote>
              <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Joe Rice, Co-founder of Motley Rice</div>
              <div className="font-sans text-[11px] text-[#6B7B8D]">
                Lead Negotiator for Plaintiffs &nbsp;{'\u2022'}&nbsp;{' '}
                <a href="https://www.motleyrice.com/news" target="_blank" rel="noopener noreferrer" className="text-[#C8973E] no-underline hover:underline">Motley Rice Official News</a>
              </div>
            </div>
            <div className="pl-6 border-l-[3px] border-[#C8973E]">
              <blockquote className="text-[14px] italic text-[#2C2C2C] leading-[1.6] mb-3 font-serif">
                {'\u201C'}The proposed class settlement agreement, together with the Supreme Court case, provides an essential path out of the litigation uncertainty.{'\u201D'}
              </blockquote>
              <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Bill Anderson, CEO of Bayer</div>
              <div className="font-sans text-[11px] text-[#6B7B8D]">
                Defense Perspective &nbsp;{'\u2022'}&nbsp;{' '}
                <a href="https://www.bayer.com/media/en-us/" target="_blank" rel="noopener noreferrer" className="text-[#C8973E] no-underline hover:underline">Bayer Press Release</a>
              </div>
            </div>
          </div>

          {/* Data Readiness Quotes */}
          <div className="mt-10 border-t border-[#E8E6E1] pt-8">
            <div className="text-center mb-6">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E]">Why Data Readiness Matters</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
              <div className="pl-6 border-l-[3px] border-[#C8973E]">
                <blockquote className="text-[14px] italic text-[#2C2C2C] leading-[1.6] mb-3 font-serif">
                  {'\u201C'}Effective large-scale litigation and settlements rely on comprehensive, well-organized data and the ability to apply that data effectively within the context of a particular project.{'\u201D'}
                </blockquote>
                <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Steven Weisbrot, CEO, Angeion Group</div>
                <div className="font-sans text-[11px] text-[#6B7B8D]">
                  Internationally recognized class action notice expert &nbsp;{'\u2022'}&nbsp;{' '}
                  <a href="https://www.prnewswire.com/news-releases/angeion-group-expands-mass-tort-litigation-management-capabilities-through-merger-with-case-works-302410643.html" target="_blank" rel="noopener noreferrer" className="text-[#C8973E] no-underline hover:underline">PR Newswire, Mar 2025</a>
                </div>
              </div>
              <div className="pl-6 border-l-[3px] border-[#C8973E]">
                <blockquote className="text-[14px] italic text-[#2C2C2C] leading-[1.6] mb-3 font-serif">
                  {'\u201C'}When collecting data from claimants or plaintiffs, the data needs to be normalized for it to be useful to any party. These deliverables are powerful when the data is consistent to produce actionable insights.{'\u201D'}
                </blockquote>
                <div className="font-sans text-[13px] font-semibold text-[#0B1D3A] mb-1">Megan Pizor, General Counsel &amp; Chief Data Officer, LMI</div>
                <div className="font-sans text-[11px] text-[#6B7B8D]">
                  Litigation Management, Inc. {'\u2014'} involved in most pending Mass Tort MDLs &nbsp;{'\u2022'}&nbsp;{' '}
                  <a href="https://www.lmiweb.com/article/fact-sheet-data-management-collecting-complex-data-mass-tort-multidistrict-litigation" target="_blank" rel="noopener noreferrer" className="text-[#C8973E] no-underline hover:underline">LMI Article</a>
                </div>
              </div>
            </div>

            <div className="text-center mt-7 p-5 bg-[#F7F5F0] rounded-md max-w-[700px] mx-auto">
              <div className="font-sans text-[13px] text-[#5A5A5A] leading-[1.6]">
                <strong className="text-[#0B1D3A] text-[15px]">In the Taxotere MDL, 80% of plaintiff cases were dismissed</strong> after 8 years of litigation because they lacked basic medical record documentation proving injury.
                <span className="block mt-2 text-[11px] text-[#6B7B8D]">
                  Source:{' '}
                  <a href="https://www.druganddevicelawblog.com/2024/03/yes-plaintiffs-medical-records-are-necessary.html" target="_blank" rel="noopener noreferrer" className="text-[#C8973E] no-underline hover:underline">Drug &amp; Device Law Blog, March 2024</a>
                  {' '}&nbsp;{'\u2022'}&nbsp; Underlying findings from federal court record
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-6">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] text-center mb-3 text-[#0B1D3A] font-serif font-bold">
            Settlement Value Is Tied to Documentation Quality.<br />Most Dockets Are Underwater.
          </h2>
          <p className="text-center text-[#5A5A5A] max-w-[680px] mx-auto mb-10 text-[16px] font-serif">
            The proposed tiering grid assigns payout value based on compensability matrices{'\u2014'}exposure duration,
            NHL subtype, treatment intensity, and documentation completeness. Cases without structured data
            to satisfy these criteria will be valued at the lowest tier or excluded entirely.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="border-l-[3px] border-[#C8973E] py-5 px-6 bg-[#F7F5F0] rounded-r-md">
              <h3 className="text-[16px] text-[#0B1D3A] mb-2 font-serif font-bold">Blind Docket Valuation</h3>
              <p className="text-[14px] text-[#5A5A5A] leading-[1.55] font-serif">No structured data on tier distribution means no leverage at settlement. The gap between projected and actual recoverable value stays invisible until it{'\u2019'}s too late to close.</p>
              <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Potential gap: $100K+ per case between upper-tier and lower-tier classification</div>
            </div>
            <div className="border-l-[3px] border-[#C8973E] py-5 px-6 bg-[#F7F5F0] rounded-r-md">
              <h3 className="text-[16px] text-[#0B1D3A] mb-2 font-serif font-bold">Lost Claimants, Dead Cases</h3>
              <p className="text-[14px] text-[#5A5A5A] leading-[1.55] font-serif">Stale contact data closes out viable cases. Firms lose claimants not because claims are weak, but because they can{'\u2019'}t locate the people who qualify under the tiering grid.</p>
              <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Each lost claimant = potential five-figure settlement value written off</div>
            </div>
            <div className="border-l-[3px] border-[#C8973E] py-5 px-6 bg-[#F7F5F0] rounded-r-md">
              <h3 className="text-[16px] text-[#0B1D3A] mb-2 font-serif font-bold">Incomplete Documentation</h3>
              <p className="text-[14px] text-[#5A5A5A] leading-[1.55] font-serif">Missing medical records, unsigned affidavits, and incomplete questionnaires downgrade cases from upper tiers to minimum payouts{'\u2014'}or disqualify them entirely.</p>
              <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Documentation gaps can reduce a case from $150K+ to under $10K</div>
            </div>
            <div className="border-l-[3px] border-[#C8973E] py-5 px-6 bg-[#F7F5F0] rounded-r-md">
              <h3 className="text-[16px] text-[#0B1D3A] mb-2 font-serif font-bold">Reactive Strike Teams</h3>
              <p className="text-[14px] text-[#5A5A5A] leading-[1.55] font-serif">Hiring temp staff weeks before a deadline to manually review thousands of files is expensive, error-prone, and creates malpractice exposure when cases are mis-tiered.</p>
              <div className="font-sans text-[13px] font-bold text-[#0B1D3A] mt-2.5">Manual review: $200{'\u2013'}250/record. Across 5,000 cases = $1M+ in review costs alone</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#0B1D3A] text-white py-14 px-6">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] text-center mb-3 font-serif font-bold">Know What Your Docket Is Worth Before You Walk Into the Room</h2>
          <p className="text-center text-[#8DA0BF] max-w-[640px] mx-auto mb-9 text-[16px] font-serif">
            We combine AI document review, data enrichment, and mass tort operations expertise
            to give your firm a complete, auditable picture of your Roundup docket{'\u2014'}and
            the leverage to maximize every dollar at settlement.
          </p>
          <div className="bg-white/[0.08] border-2 border-[#C8973E] rounded-lg p-7 mb-6">
            <h3 className="text-[20px] text-[#E2B45A] mb-2.5 font-serif font-bold">Docket Tiering &amp; Valuation</h3>
            <p className="text-[14px] text-[#B0BFDB] leading-[1.55] mb-1.5 font-serif">
              <em className="not-italic text-[#C5CDDB]">Standardized medical review and predictive valuation</em>
            </p>
            <div className="mt-5">
              <div className="text-[15px] font-bold text-[#E2B45A] mb-2">The Challenge</div>
              <p className="text-[14px] text-[#B0BFDB] leading-[1.55] font-serif">
                Inconsistent medical review creates tier assignment disputes with defense counsel, delaying settlements. Manual review processes are slow, costly, and prone to human error. Without standardized schemas, firms can{'\u2019'}t prove their tier definitions to skeptical defense teams.
              </p>
            </div>
            <div className="mt-5">
              <div className="text-[15px] font-bold text-[#E2B45A] mb-2">Our Approach</div>
              <div className="font-sans text-[13px] text-[#B0BFDB] leading-[1.8]">
                <div>{'\u2713'} Custom medical review schemas define tier criteria with specific diagnostic requirements</div>
                <div>{'\u2713'} AI-assisted extraction with predictive settlement modeling</div>
                <div>{'\u2713'} Consistent application of logic across all cases eliminates reviewer bias</div>
                <div>{'\u2713'} Documentation captures rationale for each tier decision with supporting evidence references</div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-[15px] font-bold text-[#E2B45A] mb-2">Key Benefits</div>
              <div className="font-sans text-[13px] text-[#B0BFDB] leading-[1.8]">
                <div>{'\u2713'} Eliminated tier assignment disputes with defense</div>
                <div>{'\u2713'} 50{'\u2013'}70% faster medical review cycle time</div>
                <div>{'\u2713'} 90% portfolio forecast accuracy</div>
                <div>{'\u2713'} Accelerated settlement negotiations</div>
              </div>
            </div>
            <div className="mt-6">
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }} className="font-sans text-[14px] font-semibold text-[#E2B45A] no-underline hover:underline">
                Request a free 50-case sample {'\u2192'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] text-center mb-10 text-[#0B1D3A] font-serif font-bold">From Chaos to Clarity in Four Steps</h2>
          <div className="flex flex-col md:flex-row justify-center max-w-[840px] mx-auto text-center">
            {[
              { num: '1', title: 'Docket Audit', desc: 'We ingest your case data and run AI analysis against the settlement tiering criteria.', note: '5 days for 50-case sample' },
              { num: '2', title: 'Enrich & Recover', desc: 'Locate lost claimants, enrich missing data, revive written-off cases.', note: '2\u20133 weeks for full docket' },
              { num: '3', title: 'Document & Prepare', desc: 'AI reviews documents, flags deficiencies, builds a complete audit trail.', note: '24-hour turnaround per batch' },
              { num: '4', title: 'Negotiate & Settle', desc: 'Walk in with a fully valued, tiered docket and the data to maximize every case.', note: 'Settlement-ready docket' },
            ].map((step, i) => (
              <div key={i} className="flex-1 relative px-3 mb-6 md:mb-0">
                {i < 3 && (
                  <div className="hidden md:block absolute top-[22px] right-[-2px] h-[2px] bg-[#E8E6E1]" style={{ width: 'calc(100% - 44px)', transform: 'translateX(50%)' }} />
                )}
                <div className="w-11 h-11 bg-[#0B1D3A] text-[#C8973E] rounded-full inline-flex items-center justify-center font-sans text-[18px] font-bold mb-3.5 relative z-[1]">
                  {step.num}
                </div>
                <h3 className="text-[15px] text-[#0B1D3A] mb-1.5 font-serif font-bold">{step.title}</h3>
                <p className="text-[13px] text-[#5A5A5A] leading-[1.5] font-serif">{step.desc}</p>
                <div className="font-sans text-[12px] font-bold text-[#C8973E] mt-2">{step.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="audit" className="bg-[#FAF5EB] py-14 px-6 border-t-[3px] border-b-[3px] border-[#C8973E]">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[28px] text-[#0B1D3A] mb-3 text-center font-serif font-bold">See What Your Docket Is Actually Worth</h2>
          <p className="text-[#5A5A5A] max-w-[600px] mx-auto mb-9 text-[16px] text-center font-serif">
            Send us 50 cases. We{'\u2019'}ll run AI-powered analysis against the settlement tiering grid
            and show you exactly where the value is{'\u2014'}and where it{'\u2019'}s leaking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[880px] mx-auto mb-8 items-start">
            {/* Offer Card */}
            <div className="bg-white border-2 border-[#C8973E] rounded-lg py-7 px-6 text-left shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#C8973E] mb-2.5 block">
                Free {'\u2014'} Limited to 20 Audits per Month
              </span>
              <h3 className="text-[18px] text-[#0B1D3A] mb-2.5 font-serif font-bold">50-Case Docket Health Check</h3>
              <p className="text-[14px] text-[#5A5A5A] leading-[1.55] mb-3.5 font-serif">
                We apply the proposed settlement{'\u2019'}s tiering criteria to a sample of your portfolio and
                deliver a full report showing where your cases stand{'\u2014'}and what{'\u2019'}s being left on the table.
              </p>
              <div className="font-sans text-[13px] text-[#2C2C2C] leading-[1.7]">
                <div><span className="text-[#C8973E] font-bold">{'\u2713'}&nbsp;</span>Tier distribution analysis (50 cases)</div>
                <div><span className="text-[#C8973E] font-bold">{'\u2713'}&nbsp;</span>Documentation completeness score</div>
                <div><span className="text-[#C8973E] font-bold">{'\u2713'}&nbsp;</span>Possible vs. actual settlement value</div>
                <div><span className="text-[#C8973E] font-bold">{'\u2713'}&nbsp;</span>Prioritized remediation roadmap</div>
                <div><span className="text-[#C8973E] font-bold">{'\u2713'}&nbsp;</span>30-minute walkthrough call with our team</div>
              </div>
            </div>

            {/* Audit Mockup */}
            <div className="bg-white border border-[#E8E6E1] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] font-sans text-[36px] font-extrabold text-[rgba(200,151,62,0.08)] tracking-[0.1em] uppercase pointer-events-none whitespace-nowrap">
                Sample Report
              </div>
              <div className="bg-[#0B1D3A] text-white py-3.5 px-5 font-sans text-[12px] font-bold tracking-[0.06em] uppercase">
                Docket Health Assessment {'\u2014'} 50-Case Sample
              </div>
              <div className="p-5">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7B8D] mb-2.5">Tier Distribution</div>
                <div className="mb-4">
                  {[
                    { label: 'Tier 1', width: '12%', pct: '12%', colorClass: 'bg-[#C8973E]' },
                    { label: 'Tier 2', width: '28%', pct: '28%', colorClass: 'bg-[#C8973E]/75' },
                    { label: 'Tier 3', width: '35%', pct: '35%', colorClass: 'bg-[#A0B4CC]' },
                    { label: 'Tier 4', width: '18%', pct: '18%', colorClass: 'bg-[#C5CDDB]' },
                  ].map((tier, i) => (
                    <div key={i} className="flex items-center gap-2 mb-1.5 font-sans text-[12px]">
                      <span className="w-11 font-semibold text-[#0B1D3A] text-right">{tier.label}</span>
                      <div className="flex-1 h-4 bg-[#F0EDE6] rounded-sm overflow-hidden">
                        <div className={`h-full rounded-sm ${tier.colorClass}`} style={{ width: tier.width }} />
                      </div>
                      <span className="w-8 font-bold text-[#2C2C2C]">{tier.pct}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 mb-1.5 font-sans text-[12px]">
                    <span className="w-11 font-semibold text-[#0B1D3A] text-right text-[10px]">Undef.</span>
                    <div className="flex-1 h-4 bg-[#F0EDE6] rounded-sm overflow-hidden">
                      <div className="h-full rounded-sm bg-[#9B8E82]" style={{ width: '7%' }} />
                    </div>
                    <span className="w-8 font-bold text-[#2C2C2C]">7%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                  <div className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                    <span className="font-sans text-[18px] font-bold text-[#0B1D3A] block">$4.2M</span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.06em] text-[#5A5A5A] mt-0.5">Projected Value</span>
                  </div>
                  <div className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                    <span className="font-sans text-[18px] font-bold text-[#0B1D3A] block">$1.8M</span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.06em] text-[#5A5A5A] mt-0.5">Value at Risk</span>
                  </div>
                  <div className="text-center py-2.5 px-2 bg-[#F7F5F0] rounded">
                    <span className="font-sans text-[18px] font-bold text-[#0B1D3A] block">62%</span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.06em] text-[#5A5A5A] mt-0.5">Doc Completeness</span>
                  </div>
                </div>

                <div className="font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7B8D] mb-2.5">Top Remediation Priorities</div>
                <table className="w-full border-collapse font-sans text-[11px]">
                  <thead>
                    <tr>
                      <th className="text-left py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-wide text-[10px]">Case</th>
                      <th className="text-left py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-wide text-[10px]">Current</th>
                      <th className="text-left py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-wide text-[10px]">Gap</th>
                      <th className="text-left py-1.5 px-2 font-bold text-[#0B1D3A] border-b-2 border-[#E8E6E1] uppercase tracking-wide text-[10px]">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">#0023</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Tier 3</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#C8973E] font-semibold">Missing pathology report</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Request records from oncologist</td></tr>
                    <tr><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">#0041</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Undefined</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#C8973E] font-semibold">Incomplete exposure history</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Claimant re-interview needed</td></tr>
                    <tr><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">#0017</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Undefined</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#C8973E] font-semibold">Unsigned plaintiff affidavit</td><td className="py-1 px-2 border-b border-[#F0EDE6] text-[#5A5A5A]">Send e-sign via DocuSign</td></tr>
                  </tbody>
                </table>
                <div className="font-sans text-[10px] text-[#6B7B8D] mt-2.5 text-center italic">{'\u2026'} 47 more cases analyzed in full report</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={openModal} className="inline-block bg-[#0B1D3A] text-[#E2B45A] py-4 px-10 font-sans text-[16px] font-bold rounded border-2 border-[#C8973E] cursor-pointer transition-all hover:bg-[#142D55] hover:border-[#E2B45A] tracking-wide">
              <span className="hidden sm:inline">Request Your Free 50-Case Audit</span>
              <span className="inline sm:hidden">Request Free Audit</span>
            </button>

            <div className="flex justify-center gap-2 flex-wrap mt-5">
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <ShieldCheckSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">HIPAA-Ready</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <ShieldCheckSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">NDA First</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <LockSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">256-bit SSL</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <UsTeamSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">U.S.-Based Team</span>
              </div>
            </div>

            <p className="font-sans text-[12px] text-[#5A5A5A] mt-3.5 text-center">
              This audit is designed for plaintiff firms managing 100+ active Roundup NHL cases.<br />
              Solo practitioners or pre-litigation inquiries{'\u2014'}<a href="mailto:info@northcastleconsulting.com" className="text-[#C8973E]">reach out directly</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-14 px-6">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[24px] text-center mb-8 text-[#0B1D3A] font-serif font-bold">Who{'\u2019'}s Behind This</h2>
          <div className="grid md:grid-cols-2 md:gap-8 items-start max-w-[800px] mx-auto">
            <div className="pr-6 border-r border-[#C8973E]">
              <div className="font-sans text-[15px] font-bold text-[#0B1D3A]">Ram Ventrapragada</div>
              <div className="font-sans text-[12px] text-[#C8973E] font-semibold uppercase tracking-[0.06em] mb-1.5">Co-Founder</div>
              <p className="text-[13px] text-[#5A5A5A] leading-[1.5] font-serif">
                Over a decade of experience in data strategy, AI-enabled automation, and mass tort litigation operations.
                At Wagstaff Law Firm, led AI-driven lead enrichment and document review initiatives{'\u2014'}converting
                unstructured claimant communications into structured Salesforce datasets with automated QA processes
                and fallback logic at scale. Specializes in bridging data architecture, AI workflow orchestration,
                and operational scalability for litigation environments.
              </p>
              <div className="font-sans text-[11px] text-[#6B7B8D] mt-1.5 font-semibold">Purdue University &nbsp;{'\u2022'}&nbsp; MBA, Carnegie Mellon Tepper School of Business</div>
            </div>
            <div className="pl-6">
              <div className="font-sans text-[15px] font-bold text-[#0B1D3A]">Nicholas Citrin</div>
              <div className="font-sans text-[12px] text-[#C8973E] font-semibold uppercase tracking-[0.06em] mb-1.5">Co-Founder</div>
              <p className="text-[13px] text-[#5A5A5A] leading-[1.5] font-serif">
                Nearly two decades in finance spanning investment banking, private equity, and equity research.
                Former consultant at Accordion (Transaction Execution Services). Career started at Lehman Brothers
                in Technology &amp; Media M&amp;A. Specializes in financial modeling, valuations,
                and building outsourced analytics teams for complex data environments.
              </p>
              <div className="font-sans text-[11px] text-[#6B7B8D] mt-1.5 font-semibold">University of Pennsylvania &nbsp;{'\u2022'}&nbsp; Economics, cum laude</div>
            </div>
          </div>
          <p className="text-center mt-6 font-sans text-[13px] text-[#5A5A5A]">
            Questions? We respond within 24 hours.{' '}
            <a href="mailto:info@northcastleconsulting.com" className="text-[#C8973E] no-underline hover:underline">info@northcastleconsulting.com</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 max-w-[720px] mx-auto">
        <h2 className="text-[28px] text-center mb-8 text-[#0B1D3A] font-serif font-bold">Common Questions</h2>
        <details className="border-b border-[#E8E6E1] py-5">
          <summary className="text-[16px] font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">How quickly can you audit our docket?</summary>
          <p className="mt-3 text-[14px] text-[#5A5A5A] leading-[1.6] font-serif">For a 50-case sample, we typically return results within 5 business days. For full docket reviews (thousands of cases), we scope a timeline during our initial call{'\u2014'}most engagements deliver initial tier distribution data within 2{'\u2013'}3 weeks.</p>
        </details>
        <details className="border-b border-[#E8E6E1] py-5">
          <summary className="text-[16px] font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">What data do you need from us?</summary>
          <p className="mt-3 text-[14px] text-[#5A5A5A] leading-[1.6] font-serif">At minimum: case list with claimant identifiers, diagnosis information, and any available medical records or affidavits. We work with whatever state your data is in{'\u2014'}messy spreadsheets, Salesforce exports, scanned documents. That{'\u2019'}s the point.</p>
        </details>
        <details className="border-b border-[#E8E6E1] py-5">
          <summary className="text-[16px] font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">Our staff can handle this internally. Why would we outsource?</summary>
          <p className="mt-3 text-[14px] text-[#5A5A5A] leading-[1.6] font-serif">Your staff absolutely can{'\u2014'}but at what speed and what cost? The settlement tiering grid requires structured data extraction from every case. Manual review runs $200{'\u2013'}250/record and takes weeks. Our AI does it for $15{'\u2013'}20/record in days. The question isn{'\u2019'}t capability{'\u2014'}it{'\u2019'}s whether manual review is the best use of your team{'\u2019'}s time when settlement deadlines are approaching.</p>
        </details>
        <details className="border-b border-[#E8E6E1] py-5">
          <summary className="text-[16px] font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">How much does this cost?</summary>
          <p className="mt-3 text-[14px] text-[#5A5A5A] leading-[1.6] font-serif">The 50-case Health Check is free. Full docket engagements are scoped to your portfolio size. Our analysis typically costs less than 2% of the incremental settlement value it identifies{'\u2014'}and we walk through pricing on our initial call so there are no surprises.</p>
        </details>
        <details className="border-b border-[#E8E6E1] py-5">
          <summary className="text-[16px] font-semibold text-[#0B1D3A] cursor-pointer font-sans list-none flex justify-between items-center">Is our client data secure?</summary>
          <p className="mt-3 text-[14px] text-[#5A5A5A] leading-[1.6] font-serif">All data is hosted on encrypted AWS infrastructure within the United States{'\u2014'}AES-256 encryption at rest, TLS 1.2+ in transit. Role-based access controls ensure only authorized team members touch your data. No offshore labor. Every interaction is logged and auditable. We execute NDAs and BAAs before any data is transferred, and all access credentials expire after engagement completion.</p>
        </details>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B1D3A] text-white text-center py-14 px-6">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[30px] mb-3.5 font-serif font-bold">The Settlement Window Is Open.<br />Is Your Docket Ready?</h2>
          <p className="text-[#8DA0BF] max-w-[560px] mx-auto mb-7 text-[16px] font-serif">
            The difference between a lower-tier case and a top-tier case is the data behind it. Let us show you what your docket is actually worth.
          </p>
          <button onClick={openModal} className="inline-block bg-[#C8973E] text-[#0B1D3A] py-3.5 px-8 font-sans text-[15px] font-bold rounded border-none cursor-pointer transition-colors hover:bg-[#E2B45A] tracking-wide">
            Get Your Free 50-Case Docket Audit
          </button>
          <div className="flex justify-center gap-3 flex-wrap mt-5">
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-white/15 rounded bg-white/[0.06]">
              <ShieldCheckSvg fill="#8DA0BF" checkFill="#142D55" className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">HIPAA-Ready</span>
            </div>
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-white/15 rounded bg-white/[0.06]">
              <ShieldCheckSvg fill="#8DA0BF" checkFill="#142D55" className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">NDA First</span>
            </div>
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-white/15 rounded bg-white/[0.06]">
              <LockSvg fill="#8DA0BF" className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span className="font-sans text-[11px] font-bold text-[#8DA0BF] uppercase tracking-wide whitespace-nowrap">Encrypted</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer ref={footerRef} className="bg-[#080F1E] text-[#5A6A85] text-center py-8 px-6 font-sans text-[13px]">
        <p>{'\u00A9'} 2026 North Castle Consulting. All rights reserved. &nbsp;|&nbsp; <a href="#" className="text-[#C8973E] no-underline hover:underline">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="text-[#C8973E] no-underline hover:underline">Terms</a></p>
        <p className="mt-2 text-[12px] tracking-wide text-[#4A5A72]">HIPAA-Ready {'\u2022'} 256-bit SSL {'\u2022'} 100% U.S.-Based Team {'\u2022'} No Offshore Data Handling</p>
      </footer>

      {/* STICKY BAR */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#142D55] py-3 px-6 flex justify-center items-center gap-4 z-[900] shadow-[0_-2px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <span className="font-sans text-[14px] text-white font-semibold hidden sm:inline">
          Free 50-Case Docket Audit {'\u2014'} {daysUntilScotus} days until SCOTUS arguments
        </span>
        <button onClick={openModal} className="inline-block bg-[#C8973E] text-[#0B1D3A] py-2.5 px-6 font-sans text-[13px] font-bold rounded border-none cursor-pointer transition-colors hover:bg-[#E2B45A] tracking-wide">
          Request Audit
        </button>
      </div>

      {/* MODAL (Primary) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(11,29,58,0.85)] backdrop-blur-[4px] z-[1000] flex justify-center items-center p-6" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="bg-white rounded-[10px] py-10 px-9 max-w-[440px] w-full text-center relative shadow-[0_12px_48px_rgba(0,0,0,0.25)]">
            <button onClick={closeModal} className="absolute top-3.5 right-[18px] bg-none border-none text-[24px] text-[#6B7B8D] cursor-pointer leading-none">{'\u00D7'}</button>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2 font-serif font-bold">Request Your Free 50-Case Audit</h2>
            <p className="font-sans text-[14px] text-[#5A5A5A] mb-6">Enter your work email and we{'\u2019'}ll send audit details within 24 hours.</p>
            <form onSubmit={handleSubmit} className="flex gap-2.5 flex-wrap">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@firmname.com" required className="flex-1 min-w-[200px] py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] placeholder:text-[#A0A8B4]" />
              <button type="submit" disabled={isSubmitting} className="inline-block bg-[#C8973E] text-[#0B1D3A] py-3.5 px-8 font-sans text-[15px] font-bold rounded border-none cursor-pointer transition-colors hover:bg-[#E2B45A] tracking-wide whitespace-nowrap disabled:opacity-50">
                {isSubmitting ? 'Sending...' : 'Get My Audit'}
              </button>
            </form>
            {formStatus.message && (
              <p className={`font-sans text-[13px] mt-3 ${formStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{formStatus.message}</p>
            )}
            <div className="flex justify-center gap-2 flex-wrap mt-4">
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <ShieldCheckSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">HIPAA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <LockSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">Encrypted</span>
              </div>
              <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-white/60">
                <ShieldCheckSvg className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">NDA First</span>
              </div>
            </div>
            <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">We never share your information. NDA executed before any data transfer.</p>
          </div>
        </div>
      )}

      {/* MODAL (Exit-Intent) */}
      {exitPopupOpen && (
        <div className="fixed inset-0 bg-[rgba(11,29,58,0.85)] backdrop-blur-[4px] z-[1000] flex justify-center items-center p-6" onClick={(e) => { if (e.target === e.currentTarget) closeExitPopup(); }}>
          <div className="bg-white rounded-[10px] py-10 px-9 max-w-[440px] w-full text-center relative shadow-[0_12px_48px_rgba(0,0,0,0.25)]">
            <button onClick={closeExitPopup} className="absolute top-3.5 right-[18px] bg-none border-none text-[24px] text-[#6B7B8D] cursor-pointer leading-none">{'\u00D7'}</button>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2 font-serif font-bold">Before You Go</h2>
            <p className="font-sans text-[14px] text-[#5A5A5A] mb-6">Download our Roundup Settlement Timeline &amp; Tier Breakdown{'\u2014'}free, no strings.</p>
            <form onSubmit={handleExitSubmit} className="flex gap-2.5 flex-wrap">
              <input type="email" value={exitEmail} onChange={(e) => setExitEmail(e.target.value)} placeholder="you@firmname.com" required className="flex-1 min-w-[200px] py-3.5 px-4 border border-[#E8E6E1] rounded text-[15px] font-sans text-[#2C2C2C] placeholder:text-[#A0A8B4]" />
              <button type="submit" className="inline-block bg-[#C8973E] text-[#0B1D3A] py-3.5 px-8 font-sans text-[15px] font-bold rounded border-none cursor-pointer transition-colors hover:bg-[#E2B45A] tracking-wide whitespace-nowrap">Download PDF</button>
            </form>
            <p className="font-sans text-[11px] text-[#6B7B8D] mt-3">No spam. Unsubscribe anytime. Your data stays private.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RoundupFreeDocketReview;
