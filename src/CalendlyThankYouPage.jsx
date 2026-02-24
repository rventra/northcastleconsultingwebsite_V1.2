// NO NAV BAR - This page intentionally has no navigation for clean redirect from Calendly
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CalendlyThankYouPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeEmail, setInviteeEmail] = useState('');
  const [eventTime, setEventTime] = useState('');

  useEffect(() => {
    // Read Calendly URL parameters
    const name = searchParams.get('invitee_full_name') || searchParams.get('invitee_first_name') || '';
    const email = searchParams.get('invitee_email') || '';
    const startTime = searchParams.get('event_start_time') || '';

    if (name) setInviteeName(name);
    if (email) setInviteeEmail(email);
    if (startTime) {
      try {
        const date = new Date(startTime);
        setEventTime(date.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          timeZoneName: 'short'
        }));
      } catch (e) {
        setEventTime(startTime);
      }
    }
  }, [searchParams]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/roundup-docket-intelligence');
  };

  return (
    <>
      {/* NO NAV BAR - Explicitly no navigation component on this page */}
      <div className="min-h-screen flex flex-col bg-white font-['Georgia','Times_New_Roman',serif] text-[#2C2C2C]">
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 pb-10 text-center">
          {/* Success Icon */}
          <div
            className="w-[88px] h-[88px] bg-[#FAF5EB] border-[3px] border-[#C8973E] rounded-full inline-flex items-center justify-center mb-7"
            style={{
              animation: 'scaleIn 0.5s ease-out'
            }}
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
            Your Call is Confirmed
          </h1>

          {/* Booking Details from Calendly */}
          {(inviteeName || inviteeEmail || eventTime) && (
            <div className="bg-[#FAF5EB] border border-[#C8973E] rounded-[8px] py-4 px-6 max-w-[450px] w-full mb-6 text-left">
              <div className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#C8973E] mb-3">
                Booking Details
              </div>
              {inviteeName && (
                <p className="font-sans text-[15px] text-[#0B1D3A] mb-1">
                  <span className="text-[#6B7B8D]">Name:</span> {inviteeName}
                </p>
              )}
              {inviteeEmail && (
                <p className="font-sans text-[15px] text-[#0B1D3A] mb-1">
                  <span className="text-[#6B7B8D]">Email:</span> {inviteeEmail}
                </p>
              )}
              {eventTime && (
                <p className="font-sans text-[15px] text-[#0B1D3A]">
                  <span className="text-[#6B7B8D]">Scheduled:</span> {eventTime}
                </p>
              )}
            </div>
          )}

          {/* Body Text */}
          <p className="text-[17px] text-[#5A5A5A] max-w-[540px] mx-auto mb-2 leading-relaxed">
            We've sent a calendar invite to your email with the Zoom link and call details. Check your inbox (and spam folder) to confirm.
          </p>

          {/* Note */}
          <p className="font-sans text-[13px] text-[#6B7B8D] mt-2 mb-10">
            Questions before the call? Reach out to{' '}
            <a
              href="mailto:consult@northcastleconsulting.com"
              className="text-[#C8973E] no-underline hover:underline"
            >
              consult@northcastleconsulting.com
            </a>
          </p>

          {/* What to expect */}
          <div className="bg-[#FAF5EB] border-2 border-[#C8973E] rounded-[10px] py-8 px-9 max-w-[520px] w-full mb-10 text-left">
            <div className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#C8973E] mb-2.5">
              What to Expect
            </div>
            <ul className="font-sans text-[14px] text-[#5A5A5A] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#C8973E]">✓</span>
                <span>30-minute consultation with our team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8973E]">✓</span>
                <span>Review of your specific docket challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8973E]">✓</span>
                <span>Scope a free 50-case audit of your actual docket</span>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            {/* 100% U.S.-Based Team */}
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 20" fill="#6B7B8D">
                <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
              </svg>
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">
                100% U.S.-Based Team
              </span>
            </div>

            {/* NDA First */}
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 20" fill="#6B7B8D">
                <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
              </svg>
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">
                NDA First
              </span>
            </div>

            {/* All Data Housed in AWS */}
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[rgba(107,123,141,0.25)] rounded bg-[rgba(255,255,255,0.6)]">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 20" fill="#6B7B8D">
                <path d="M8 0L0 3v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V3L8 0z"/>
                <path d="M6.5 13.5L3.5 10.5l1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="white"/>
              </svg>
              <span className="font-sans text-[11px] font-bold text-[#6B7B8D] uppercase tracking-wide whitespace-nowrap">
                All Data Housed in AWS
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
            © 2026 North Castle Consulting. All rights reserved.  | {' '}
            <a href="#" className="text-[#C8973E] no-underline">Privacy Policy</a>
             | {' '}
            <a href="#" className="text-[#C8973E] no-underline">Terms</a>
          </p>
          <p className="mt-2 text-xs tracking-wide text-[#4A5A72]">
            All Data Housed in AWS • NDA First • 100% U.S.-Based Team
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
}