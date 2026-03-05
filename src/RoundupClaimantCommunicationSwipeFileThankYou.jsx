import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PageMeta } from './components/MetaTags.jsx';

const RoundupClaimantCommunicationSwipeFileThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/roundup-claimant-communication-swipe-file');
  };

  const ShieldCheckIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 20" fill="#6B7B8D">
      <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
      <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
    </svg>
  );

  return (
    <>
      <PageMeta pageKey="roundupSwipeFileThankYou" />
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

          {/* Email echo */}
          {email && (
            <div className="font-sans text-[15px] font-bold text-[#C8973E] mb-2">
              {email}
            </div>
          )}

          {/* Body Text */}
          <p className="text-[17px] text-[#5A5A5A] max-w-[540px] mx-auto mb-2 leading-relaxed">
            Your Roundup Plaintiff Fact Sheet (PFS) Template is on its way to your inbox. Look for an email from our team within 24 hours.
          </p>

          {/* Additional Templates Note */}
          <p className="text-[15px] text-[#5A5A5A] max-w-[540px] mx-auto mb-2 leading-relaxed italic">
            Need Exposure Questionnaires, HIPAA/HITECH Authorizations, CFAs, or Affidavits? Reply to the email and we'll send those too.
          </p>

          {/* Note */}
          <p className="font-sans text-[13px] text-[#6B7B8D] mt-2 mb-10">
            Questions? Reach out to{' '}
            <a 
              href="mailto:consult@northcastleconsulting.com" 
              className="text-[#C8973E] no-underline hover:underline"
            >
              consult@northcastleconsulting.com
            </a>
          </p>

          {/* Calendly CTA */}
          <div className="bg-[#FAF5EB] border-2 border-[#C8973E] rounded-[10px] py-8 px-9 max-w-[520px] w-full mb-10 text-center">
            <div className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#C8973E] mb-2.5">
              Need Additional Templates?
            </div>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2.5 leading-snug">
              Get Exposure Questionnaires, HIPAA/HITECH, CFAs & Affidavits
            </h2>
            <p className="font-sans text-[14px] text-[#5A5A5A] mb-5 leading-snug">
              On a 30-minute call, we'll discuss your documentation needs and provide access to our complete template library—including Exposure Questionnaires, HIPAA/HITECH Authorizations, Contingency Fee Agreements, and Affidavits.
            </p>
            <a 
              href="https://calendly.com/rventrapragada-northcastleconsulting/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#0B1D3A] text-[#E2B45A] py-4 px-10 font-sans text-base font-bold no-underline rounded border-2 border-[#C8973E] cursor-pointer transition-all duration-200 tracking-wide hover:bg-[#142D55] hover:border-[#E2B45A] hover:text-white"
            >
              Schedule My Call
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <ShieldCheckIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">
                All Data Housed in AWS
              </span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <ShieldCheckIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">
                NDA First
              </span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <ShieldCheckIcon />
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">
                100% U.S.-Based Team
              </span>
            </div>
          </div>

          {/* Back Link */}
          <a 
            href="#" 
            onClick={handleBackClick}
            className="font-sans text-[14px] text-[#C8973E] no-underline font-semibold transition-colors duration-200 hover:text-[#E2B45A] hover:underline"
          >
            ← Back to homepage
          </a>
        </main>

        {/* Footer */}
        <footer className="bg-[#080F1E] text-[#5A6A85] text-center py-7 px-6 font-sans text-[13px]">
          <p>
            © 2026 North Castle Consulting. All rights reserved. &nbsp;|&nbsp;{' '}
            <a href="#" className="text-[#C8973E] no-underline">Privacy Policy</a>{' '}
            &nbsp;|&nbsp;{' '}
            <a href="#" className="text-[#C8973E] no-underline">Terms</a>
          </p>
          <p className="mt-2 text-xs tracking-wide text-[#4A5A72]">
            All Data Housed in AWS &bull; NDA First &bull; 100% U.S.-Based Team
          </p>
        </footer>

        {/* Keyframes for success icon animation */}
        <style>{`
          @keyframes scaleIn {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.08); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </>
  );
};

export default RoundupClaimantCommunicationSwipeFileThankYou;
