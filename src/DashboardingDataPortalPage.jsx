import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardingDataPortalPage() {
  const challenges = [
    {
      num: '01',
      title: 'Fragmented Data',
      desc: 'Disparate systems and spreadsheets create conflicting views of the business.',
      solution: 'We unify everything into one data model that powers every dashboard.',
    },
    {
      num: '02',
      title: 'Manual Reporting',
      desc: 'Finance teams spend hours each month pulling and formatting reports.',
      solution: 'We automate reporting so your team focuses on decisions, not data entry.',
    },
    {
      num: '03',
      title: 'Stale Insights',
      desc: 'Leadership makes decisions on week-old or month-old data.',
      solution: 'We deliver real-time dashboards refreshed daily — or in real time.',
    },
    {
      num: '04',
      title: 'No Single Source of Truth',
      desc: 'Every department has its own numbers; nobody agrees on the basics.',
      solution: 'One underlying model, tailored views for every stakeholder.',
    },
  ];

  const dashboardTypes = [
    {
      audience: 'Board / Sponsor',
      title: 'Value-Creation Plan Tracker',
      metrics: ['TTM EBITDA', 'EBITDA vs. Plan', 'Net Leverage', 'Working Capital'],
      cadence: 'Monthly',
    },
    {
      audience: 'Operating Team',
      title: 'Daily Ops Cockpit',
      metrics: ['Service Level', 'Cash on Hand', 'AR Aging', 'Pipeline Coverage'],
      cadence: 'Daily',
    },
    {
      audience: 'Sales Team',
      title: 'Pipeline & Win-Rate',
      metrics: ['Quarter Coverage', 'Win Rate', 'Cycle Length', 'Quoted Margin'],
      cadence: 'Daily',
    },
    {
      audience: 'Lender',
      title: 'Covenant Pack',
      metrics: ['DSCR', '13-Week Forward', 'Covenant Headroom', 'Scenario Stress'],
      cadence: 'Monthly + Event',
    },
  ];

  const audiences = [
    {
      role: 'Operating Leadership',
      persona: 'CEO / CFO',
      cadence: 'Weekly',
      kpis: ['Cash', 'Working Capital', 'Run-rate EBITDA', 'Headcount Productivity', 'Pricing Actions', 'Customer Concentration'],
    },
    {
      role: 'Sponsor / OP Partner',
      persona: 'PE Sponsor',
      cadence: 'Monthly',
      kpis: ['Cross-portco Scorecard', 'Value-Creation Plan Progress', 'Net Leverage', 'Multiple Build', 'Add-on Pipeline'],
    },
    {
      role: 'Functional Owners',
      persona: 'Dept Head',
      cadence: 'Daily',
      kpis: ['Sales Pipeline & Win Rate', 'Ops Throughput', 'Inventory Turns', 'Customer Success', 'Marketing ROI'],
    },
    {
      role: 'Board / Directors',
      persona: 'Board',
      cadence: 'Quarterly',
      kpis: ['Quarterly Performance', 'Strategic Initiative Tracking', 'Risk Register', 'Exec Comp Linkage'],
    },
    {
      role: 'Bank / Debt Provider',
      persona: 'Lender',
      cadence: 'Monthly + Event',
      kpis: ['Covenant Headroom', 'DSCR', 'Forward 13-Week Cash', 'Borrowing Base', 'Scenario Stress'],
    },
    {
      role: 'Operating Units',
      persona: 'GM / Site Head',
      cadence: 'Daily',
      kpis: ['Site-level P&L', 'Labor Productivity', 'Equipment Utilization', 'Local Customer Trends', 'Daily KPIs'],
    },
  ];

  const phases = [
    {
      num: '01',
      title: 'Discover',
      duration: '1–2 weeks',
      desc: 'Data audit, KPI inventory, stakeholder interviews. Align on the value-creation levers to instrument first.',
    },
    {
      num: '02',
      title: 'Build',
      duration: '6–10 weeks',
      desc: 'Model design, transformations, first dashboards live. Defined scope, defined timeline.',
    },
    {
      num: '03',
      title: 'Run',
      duration: 'Ongoing',
      desc: 'Embedded fractional team. Weekly cadence, monthly board pack, quarterly LP-ready output. Your team owns the model.',
    },
    {
      num: '04',
      title: 'Iterate',
      duration: 'Continuous',
      desc: 'New KPIs, audiences, use cases as the plan evolves. AI / GenAI overlay as it matures.',
    },
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Split: Image Left | Gray Panel Right
      ═══════════════════════════════════════════════════════════════ */}
      <div className="pt-16">
        <div className="grid lg:grid-cols-12 min-h-[600px] lg:min-h-[700px]">

          {/* Left — Image with Text Overlay */}
          <div className="lg:col-span-8 relative flex items-end">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
                alt="Data analytics dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
                Data Solutions
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Business Information Dashboarding &amp; Reporting
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light mb-6 max-w-2xl leading-relaxed">
                See where the value-creation plan is working — and where it isn't. Daily for your team. Monthly for your sponsor. One data model behind every view.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:admin@northcastleconsulting.com?subject=Dashboarding%20%26%20Reporting%20Inquiry"
                  className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Start Building
                </a>
                <Link
                  to="/case-studies/dashboarding-reporting"
                  className="inline-block bg-transparent text-white px-8 py-4 font-semibold border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Gray Panel with Challenges */}
          <div className="lg:col-span-4 bg-[#F5F5F5] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051c2c] mb-2">
              Common Data Challenges
            </h2>
            <p className="text-[#051c2c]/60 text-lg mb-8">
              &amp; How We Solve Them
            </p>

            <div className="space-y-6">
              {challenges.map((item) => (
                <div key={item.num} className="border-l-2 border-[#2563EB] pl-5">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-[#2563EB]">{item.num}</span>
                    <h3 className="text-lg font-semibold text-[#051c2c]">{item.title}</h3>
                  </div>
                  <p className="text-base text-[#051c2c]/60 mb-2 leading-relaxed">{item.desc}</p>
                  <p className="text-base text-[#051c2c] font-medium leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE NCC APPROACH — 4 Dashboard Types
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">The NCC Approach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">
              One Data Model. Four Tailored Views.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dashboardTypes.map((db, i) => (
              <div key={i} className="bg-white border-l-4 border-[#2563EB] shadow-sm p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#2563EB] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {db.audience}
                  </span>
                  <span className="text-xs text-[#051c2c]/50 font-medium">{db.cadence}</span>
                </div>
                <h3 className="text-xl font-bold text-[#051c2c] mb-4">{db.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {db.metrics.map((m) => (
                    <span key={m} className="inline-block bg-[#F9F9F7] border border-gray-200 px-3 py-1.5 text-sm font-medium text-[#051c2c]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          USE CASES BY AUDIENCE — 6 Audience Cards
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Use Cases by Audience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-4">
              Same Data. Right View. Every Stakeholder.
            </h2>
            <p className="text-lg text-[#051c2c]/60 max-w-3xl">
              Six audiences. Each gets a tailored cadence and KPI set — drawn from one underlying model. Self-service: every audience can drill in, slice by segment, ask the next question — without waiting on finance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div key={i} className="bg-[#051c2c] text-white p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#EDB624] text-[#051c2c] px-3 py-1">
                    {a.cadence}
                  </span>
                </div>
                <p className="text-white/50 text-sm mb-1">{a.role}</p>
                <h3 className="text-xl font-bold mb-4">{a.persona}</h3>
                <ul className="space-y-2">
                  {a.kpis.map((kpi) => (
                    <li key={kpi} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-white/60" />
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ENGAGEMENT MODEL — 4 Phases
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Engagement Model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-4">
              Discover. Build. Run. Iterate.
            </h2>
            <p className="text-lg text-[#051c2c]/60 max-w-3xl">
              Live in weeks. Owned by your team. Evolved through the hold.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-white p-8 border-t-4 border-[#2563EB] shadow-sm">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-[#2563EB]">{phase.num}</span>
                  <span className="text-sm font-semibold text-[#051c2c]/50 uppercase tracking-wider">{phase.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-[#051c2c] mb-3">{phase.title}</h3>
                <p className="text-[#051c2c]/60 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CASE STUDY PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c] mb-12">
            Driving PE Value Through Operational Visibility
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/case-studies/dashboarding-pe-value-visibility"
              className="group relative overflow-hidden min-h-[400px] bg-[#051c2c]"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Manufacturing data automation"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  Manufacturing
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  $100M Manufacturer: From Zero Visibility to Enterprise Dashboards
                </h3>
                <p className="text-white/70 text-base mb-4">
                  No ERP, 40,000+ SKUs without hierarchy, and five hours of manual reporting monthly — transformed into automated Power BI dashboards.
                </p>
                <span className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 pb-1 w-fit group-hover:border-white transition-colors">
                  View Case Study <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          LIVE DEMO — Fleet Telematics Dashboard
      ═══════════════════════════════════════════════════════════════ */}
      <div className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left — CTA Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] rounded-2xl p-10 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Fleet Dashboard</h3>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">
                  Explore a live demo powered by 720,000+ GPS data points across an 8-vehicle fleet. Real-time KPIs, utilization heatmaps, trip analytics, and filterable trend analysis.
                </p>
                <a
                  href="https://main.d2pzfdprrzy6zu.amplifyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#5B21B6] px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors text-base"
                >
                  Launch Dashboard
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Stats + Features */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { value: '720,970', label: 'GPS Data Points' },
                  { value: '61,346', label: 'Trips Analyzed' },
                  { value: '8', label: 'Fleet Vehicles' },
                  { value: '12', label: 'Months of Data' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold text-[#5B21B6]">{stat.value}</p>
                    <p className="text-xs text-[#051c2c]/50 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-[#051c2c] mb-6">What's Inside the Demo</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Fleet utilization trends across 8 vehicles with personality filters',
                  'Trip volume, duration, and mileage analytics by vehicle',
                  'Hourly activity heatmaps by vehicle and day of week',
                  'Drive vs idle time breakdowns with interactive drill-down',
                  'Filterable by date range, vehicle, personality, and day type',
                  'Exportable charts and shareable URL state for every filter combination',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[#051c2c]/70 text-sm">
                    <span className="mt-0.5 w-5 h-5 bg-[#5B21B6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#5B21B6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#051c2c] py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to see your business clearly?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how we can build the data infrastructure to execute your value-creation plan.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Dashboarding%20%26%20Reporting%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-10 py-5 font-semibold text-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-[#051c2c]/50 hover:text-[#051c2c] transition-colors text-base">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
