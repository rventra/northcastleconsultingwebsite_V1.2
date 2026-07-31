import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardingCaseStudyPage() {
  return (
    <div className="pt-16">
      {/* Hero with Background Image */}
      <div
        className="text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop)' }}
      >
        {/* Subtle blue overlay for readability */}
        <div className="absolute inset-0 bg-[#0D3BC3]/40"></div>

        {/* Back Navigation */}
        <div className="relative z-10 py-2 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/case-studies/dashboarding-reporting"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-300 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboarding &amp; Reporting
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-2 py-1 rounded mb-3">
                DASHBOARDING &amp; REPORTING
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Driving PE Value Through Operational Visibility and Data Automation
              </h1>
              <p className="text-gray-300 text-sm">
                Transforming a $100M manufacturer from zero data visibility to automated, enterprise-grade dashboards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">Manufacturing</span></div>
          <div><span className="text-gray-500">Revenue:</span> <span className="font-medium text-[#0D3BC3]">$100M</span></div>
          <div><span className="text-gray-500">Duration:</span> <span className="font-medium text-[#0D3BC3]">Multi-phase (extended 3x)</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Dashboarding &amp; Reporting, Data Architecture</span></div>
        </div>
      </div>

      {/* Challenge & Solution - Two Column */}
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-50 py-10 px-6 md:px-10">
          <div className="max-w-md ml-auto">
            <h2 className="text-lg font-bold text-[#0D3BC3] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#0D3BC3] text-white rounded text-xs flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A PE-backed $100M revenue manufacturer had <strong>no ERP, limited Excel usage, and no centralized reporting</strong>. With 40,000+ SKUs lacking a product hierarchy, leadership had no visibility into margins, win rates, or operational performance.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> No ERP system in place</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> 40,000+ SKUs without product hierarchy</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Monthly KPI reporting took 5+ hours of manual effort</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Required outside consultants just to read their own data</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> No visibility into margins, win rates, or ops performance</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0D3BC3] py-10 px-6 md:px-10 text-white">
          <div className="max-w-md mr-auto">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#EDB624] text-[#1A2234] rounded text-xs flex items-center justify-center">2</span>
              Our Solution
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              We built end-to-end data infrastructure — from automated reporting to ERP integration — giving every functional team tailored dashboards tied to their portion of the value-creation plan.
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Automated Power BI dashboards across commercial, financial, and operational KPIs</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Win/loss tracking and quoted-vs-unquoted margin analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Unified data pipeline bridging historical Excel with new ERP</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Fuzzy-matched 40,000+ part numbers into product hierarchy</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Board-ready monthly outputs with full knowledge transfer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <p className="text-gray-600 mb-6 text-sm">
            We partnered with stakeholders across the organization to build comprehensive data infrastructure from the ground up:
          </p>
          <div className="space-y-3">
            {[
              { title: "Automated Performance Reporting", desc: "Replaced manual monthly processes with automated Power BI dashboards across commercial, financial, and operational KPIs. Python scripts eliminated outside-consultant dependence. Delivered a Monthly Management Business Review to the executive team and PE sponsor." },
              { title: "Win/Loss & Commercial Analysis", desc: "Built win/loss tracking, quote pipeline aging, and quoted-vs-unquoted margin analysis from data never before systematically analyzed. Tailored dashboards for ops, sales, and procurement — each team saw the metrics tied to their portion of the value-creation plan." },
              { title: "Data Architecture & ERP Integration", desc: "Designed a unified data pipeline bridging historical Excel with the new ERP. Fuzzy-matched 40,000+ part numbers to build the product hierarchy. Post-go-live, built a Microsoft Fabric Lakehouse with automated daily API pulls and bronze-to-gold governance." },
              { title: "Board Reporting & Knowledge Transfer", desc: "Produced monthly board-ready outputs. Created training guides with videos. Fully documented the system so the internal team can maintain it independently — ensuring the engagement's impact outlasts our involvement." },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#0D3BC3]">
                <h3 className="text-sm font-bold text-[#0D3BC3] mb-1.5">○ {step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-4">The Results</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Transformed the company from zero data visibility to automated, enterprise-grade dashboards. Each functional team — ops, sales, procurement — received tailored views to measure KPIs tied to their portion of the value-creation plan, giving leadership the accountability framework needed to execute. Management had believed quoted work carried lower margins than emergency unquoted jobs; the dashboards proved the opposite, and leadership trained the sales team to implement a new quoting process for emergency projects. Unquoted margins improved dramatically, directly lifting EBITDA. Engagement extended three times based on demonstrated impact. The PE sponsor explored replicating the model across other portfolio companies.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Zero to Enterprise Dashboards</span>
              </div>
              <p className="text-xs text-gray-600">Transformed from no data visibility to automated, enterprise-grade dashboards across all functions</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Margin Insights Lifted EBITDA</span>
              </div>
              <p className="text-xs text-gray-600">Dashboards reversed a key management assumption, enabling a new quoting process that improved unquoted margins</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Extended 3x &amp; Replicable</span>
              </div>
              <p className="text-xs text-gray-600">Engagement extended three times based on demonstrated impact; PE sponsor explored replication across portfolio</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how our dashboarding approach can transform visibility into value.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Dashboarding%20%26%20Reporting%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
