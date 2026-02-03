import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardingDataPortalPage() {
  return (
    <div className="pt-16">
      {/* Hero - Clean and Simple */}
      <div className="bg-[#051c2c] text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-3">Data Solutions</p>
          <h1 className="text-3xl md:text-4xl font-normal mb-4 leading-tight">
            Dashboarding & Data Portal
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Custom dashboards and data portals for real-time visibility into portfolio performance.
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="py-20 md:py-28 px-6 bg-[#f5f5f5]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 md:p-16">
            <div className="w-16 h-16 bg-[#051c2c] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-normal text-[#051c2c] mb-4">Coming Soon</h2>
            <p className="text-[#051c2c]/60 leading-relaxed mb-8">
              We are currently developing comprehensive dashboarding and data portal solutions 
              to help you visualize and manage your portfolio data in real-time.
            </p>
            <p className="text-[#051c2c]/60 leading-relaxed mb-8">
              Interested in learning more? Contact us for early access and custom solutions.
            </p>
            <a
              href="mailto:admin@northcastleconsulting.com?subject=Dashboarding%20%26%20Data%20Portal%20Inquiry"
              className="inline-flex items-center gap-2 bg-[#051c2c] text-white px-6 py-3 rounded font-medium hover:bg-[#2563EB] transition-all duration-300 text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-[#051c2c]/50 hover:text-[#2563EB] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
