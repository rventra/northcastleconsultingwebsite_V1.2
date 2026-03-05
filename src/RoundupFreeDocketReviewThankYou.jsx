import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PageMeta } from './components/MetaTags.jsx';

const RoundupFreeDocketReviewThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    const sourceParam = searchParams.get('source');
    if (emailParam) setEmail(emailParam);
    if (sourceParam) setSource(sourceParam);

    // Push conversion event to dataLayer for GTM/LinkedIn tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversionType: 'free_docket_review_lead',
        source: sourceParam || 'docket_review',
        email: emailParam || null,
        pagePath: window.location.pathname
      });
    }

    // LinkedIn conversion event
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 19726596 });
    }
  }, [searchParams]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/roundup-free-docket-review');
  };

  const ShieldCheckIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 20" fill="#6B7B8D">
      <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
      <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
    </svg>
  );

  const LockIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="#6B7B8D">
      <path d="M8 1a3 3 0 00-3 3v2H4a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-1V4a3 3 0 00-3-3zm-1 3a1 1 0 012 0v2H7V4zm1 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
    </svg>
  );

  const CheckListIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="#6B7B8D">
      <path d="M2 3h12v1H2V3zm0 3h12v1H2V6zm0 3h8v1H2V9zm10.5.5l1 1L11 13l-2.5-2.5 1-1L11 11l1.5-1.5z"/>
    </svg>
  );

  const bodyText = source === 'pdf'
    ? 'The Roundup Settlement Timeline & Tier Breakdown PDF is on its way to your inbox. Look for an email from our team within 24 hours.'
    : 'A sample docket report is on its way to your inbox. Look for an email from our team within 24 hours with your sample report and next steps.';

  return (
    <>
      <PageMeta pageKey="roundupFreeDocketReviewThankYou" />
      <div className="min-h-screen flex flex-col bg-white font-['Georgia','Times_New_Roman',serif] text-[#2C2C2C]">


        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 pb-10 text-center">
          {/* Success Icon */}
          <div
            className="w-[88px] h-[88px] bg-[#FAF5EB] border-[3px] border-[#C8973E] rounded-full inline-flex items-center justify-center mb-7"
            style={{ animation: 'scaleIn 0.5s ease-out' }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C8973E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(28px,4vw,38px)] text-[#0B1D3A] mb-4 leading-tight">
            You're All Set
          </h1>

          {/* Email Echo */}
          {email && (
            <div className="font-sans text-[15px] font-bold text-[#C8973E] mb-2">
              {email}
            </div>
          )}

          {/* Body Text */}
          <p className="text-[17px] text-[#5A5A5A] max-w-[540px] mx-auto mb-2 leading-relaxed">
            {bodyText}
          </p>

          {/* Note */}
          <p className="font-sans text-[13px] text-[#6B7B8D] mt-2 mb-10">
            Didn't see it? Check your spam folder or reach out to{' '}
            <a
              href="mailto:info@northcastleconsulting.com"
              className="text-[#C8973E] no-underline hover:underline"
            >
              info@northcastleconsulting.com
            </a>
          </p>

          {/* Calendly Section */}
          <div className="bg-[#FAF5EB] border-2 border-[#C8973E] rounded-[10px] py-8 px-9 max-w-[520px] w-full mb-10 text-center">
            <div className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#C8973E] mb-2.5">
              While You Wait
            </div>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2.5 leading-tight">
              Schedule Your 30-Minute Walkthrough Call
            </h2>
            <p className="font-sans text-[14px] text-[#5A5A5A] mb-5 leading-relaxed">
              One of our team members will walk you through the audit methodology, discuss your docket's specific needs, and answer any questions about the tiering process.
            </p>
            <a
              href="https://calendly.com/rventrapragada-northcastleconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0B1D3A] text-[#E2B45A] py-4 px-10 font-sans text-base font-bold no-underline rounded border-2 border-[#C8973E] hover:bg-[#142D55] hover:border-[#E2B45A] hover:text-white transition-all tracking-wide"
            >
              Schedule My Call
            </a>
          </div>

          {/* Trust Badge Strip */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <ShieldCheckIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">HIPAA-Ready</span>
            </div>
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <ShieldCheckIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">NDA First</span>
            </div>
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <LockIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">Encrypted</span>
            </div>
            <div className="inline-flex items-center gap-1.5 py-[7px] px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <CheckListIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">U.S.-Based Team</span>
            </div>
          </div>

          {/* Back Link */}
          <button
            onClick={handleBackClick}
            className="font-sans text-[14px] font-semibold text-[#C8973E] no-underline hover:text-[#E2B45A] hover:underline transition-colors bg-transparent border-none cursor-pointer"
          >
            &#8592; Back to homepage
          </button>
        </main>

        {/* Footer */}
        <footer className="bg-[#080F1E] text-[#5A6A85] text-center py-7 px-6 font-sans text-[13px]">
          <p>&#169; 2026 North Castle Consulting. All rights reserved. &nbsp;|&nbsp; <a href="#" className="text-[#C8973E] no-underline">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="text-[#C8973E] no-underline">Terms</a></p>
          <p className="mt-2 text-[12px] tracking-wide text-[#4A5A72]">HIPAA-Ready &#8226; 256-bit SSL &#8226; 100% U.S.-Based Team &#8226; No Offshore Data Handling</p>
        </footer>
      </div>

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default RoundupFreeDocketReviewThankYou;
