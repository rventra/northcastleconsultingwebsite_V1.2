import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PageMeta } from './components/MetaTags.jsx';

const RoundupClaimantCommunicationEnrichmentThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    const sourceParam = searchParams.get('source');
    
    if (emailParam) {
      setEmail(emailParam);
    }
    if (sourceParam) {
      setSource(sourceParam);
    }
    
    // Push GTM event for thank you page view (Thank You Page - Enrichment Lead)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'enrichment_thank_you_page_view',
      'conversion_id': '26409026',
      'source': sourceParam || 'enrichment',
      'email': emailParam || null
    });

  }, [searchParams]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/roundup-claimant-communication-enrichment');
  };

  const isPdfSource = source === 'pdf';
  
  const headline = isPdfSource ? "You're All Set" : "Your Free Enrichment Is Underway";
  const bodyText = isPdfSource 
    ? "The Roundup Settlement Timeline & Tier Breakdown PDF is on its way to your inbox. You should receive it within 24 hours."
    : "Your free 100-case claimant enrichment request has been received. We'll reach out within 24 hours to coordinate your data transfer and begin enrichment.";

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

  return (
    <>
      <PageMeta pageKey="roundupEnrichmentThankYou" />
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
            {headline}
          </h1>

          {/* Email echo */}
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
              Ready to Get Started Faster?
            </div>
            <h2 className="text-[22px] text-[#0B1D3A] mb-2.5 leading-snug">
              Coordinate Your Free Enrichment Now
            </h2>
            <p className="font-sans text-[14px] text-[#5A5A5A] mb-5 leading-snug">
              Skip the wait. Schedule a 30-minute call and we&apos;ll walk through the enrichment process,
              set up your secure data transfer, and have results back within 5–7 business days.
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

export default RoundupClaimantCommunicationEnrichmentThankYou;
