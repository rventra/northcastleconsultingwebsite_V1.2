import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function QualityOfEarningsPage() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const obstacles = [
    {
      num: '01',
      title: 'Unsustainable Earnings',
      desc: 'Reported profits driven by one-time gains, accounting adjustments, or non-recurring events.',
      solution: 'We reconstruct the true earnings baseline, normalizing for non-recurring items and accounting anomalies.',
    },
    {
      num: '02',
      title: 'Working Capital Manipulation',
      desc: 'Pre-transaction window dressing—accelerated collections, delayed payables, inventory liquidation.',
      solution: 'We analyze 24+ months of trends to identify artificial cash flow boosts and true NWC requirements.',
    },
    {
      num: '03',
      title: 'Revenue Quality Issues',
      desc: 'Concentrated customers, declining renewals, or revenue recognized before contractual certainty.',
      solution: 'We assess revenue by tier—contracted, recurring, project-based, one-time—to determine sustainability.',
    },
    {
      num: '04',
      title: 'Hidden Liabilities',
      desc: 'Unrecorded obligations—unpaid taxes, warranty reserves, litigation exposure, related-party debt.',
      solution: 'We conduct forensic analysis to surface unrecorded liabilities before they become post-close surprises.',
    },
  ];

  const frameworkItems = [
    {
      id: 'bridge',
      num: '1',
      title: 'Adjusted EBITDA Bridge',
      short: 'Comprehensive earnings normalization from reported to sustainable cash flow',
      details: {
        sections: [
          {
            subtitle: '1a. Expense Add-Backs (+)',
            items: [
              'Owner compensation above market rates',
              'Personal/family expenses run through business',
              'One-time transaction costs',
              'Non-recurring litigation/settlements',
              'Facility relocation/restructuring costs'
            ]
          },
          {
            subtitle: '1b. Revenue Adjustments (-)',
            items: [
              'One-time asset sales',
              'Insurance recoveries',
              'Related party above-market pricing',
              'Pull-forward revenue recognition'
            ]
          },
          {
            subtitle: '1c. Operational Normalizations (±)',
            items: [
              'Below-market rent adjustments',
              'Deferred maintenance catch-up',
              'Inventory write-downs (one-time vs ongoing)'
            ]
          },
          {
            subtitle: '1d. Run-Rate Adjustments (±)',
            items: [
              'New signed contracts not yet producing',
              'Lost customers post-close',
              'Recent management hires (full cost)',
              'Regulatory/compliance cost increases'
            ]
          }
        ]
      }
    },
    {
      id: 'revenue',
      num: '2',
      title: 'Revenue Quality Assessment',
      short: 'Five-tier taxonomy from contracted recurring to windfall/spot market',
      details: {
        sections: [
          {
            subtitle: '2a. Revenue Quality Tiers',
            items: [
              'Tier 1: Recurring Contracted (90%+ renewal) - SaaS, multi-year agreements',
              'Tier 2: Sticky Repeat Business - Industrial consumables, trade relationships',
              'Tier 3: Project-Based w/ Backlog - AEC, government (12-24 mo visibility)',
              'Tier 4: One-Time Project - Custom implementations, event-driven',
              'Tier 5: Windfall/Spot Market - Commodity, distressed sales'
            ]
          },
          {
            subtitle: '2b. Concentration Risk Analysis',
            items: [
              'Red Flag: Single customer >30% of revenue',
              'Yellow Flag: Top 5 customers >50% of revenue',
              'Critical: Customer churn rate >20% annually',
              'Cohort analysis by customer vintage'
            ]
          }
        ]
      }
    },
    {
      id: 'working',
      num: '3',
      title: 'Working Capital Deep Dive',
      short: 'DSO/DIO/DPO analysis with manipulation detection algorithms',
      details: {
        sections: [
          {
            subtitle: '3a. Key Metrics Calculated',
            items: [
              'DSO (Days Sales Outstanding): (Avg A/R / Revenue) × 365 - Red flag >75 days',
              'DIO (Days Inventory Outstanding): (Avg Inventory / COGS) × 365 - Red flag >90 days',
              'DPO (Days Payable Outstanding): (Avg A/P / COGS) × 365 - Red flag <30 days',
              'Cash Conversion Cycle: DSO + DIO - DPO - Red flag >120 days'
            ]
          },
          {
            subtitle: '3b. Manipulation Detection',
            items: [
              'Unusual A/R decrease pre-close (pulling forward collections)',
              'Sudden inventory liquidation (one-time cash boost)',
              'Extended payables terms (delaying payments)',
              'Compare last 90 days to trailing 12-month average'
            ]
          }
        ]
      }
    },
    {
      id: 'cashflow',
      num: '4',
      title: 'Cash Flow Reconciliation',
      short: 'Net income to free cash flow bridge with variance analysis',
      details: {
        sections: [
          {
            subtitle: '4a. The Reconciliation Bridge',
            items: [
              'Start: Net Income',
              'Add: Depreciation & Amortization',
              'Add/Less: Changes in Working Capital',
              'Less: Capital Expenditures (sustaining only)',
              'Equals: Free Cash Flow'
            ]
          },
          {
            subtitle: '4b. Variance Analysis',
            items: [
              'Compare: Adjusted EBITDA - CapEx vs Operating Cash Flow',
              'Variance >15% requires investigation',
              'Identify timing differences vs structural issues',
              'True cash conversion vs accounting earnings'
            ]
          }
        ]
      }
    },
    {
      id: 'addback',
      num: '5',
      title: 'Add-Back Validation',
      short: 'Confidence scoring framework—high, medium, low evidence tiers',
      details: {
        sections: [
          {
            subtitle: '5a. High Confidence Adjustments',
            items: [
              'Documented one-time legal settlement with court records',
              'Owner compensation clearly above market (industry salary surveys)',
              'Facility closure costs with lease termination agreements'
            ]
          },
          {
            subtitle: '5b. Medium Confidence Adjustments',
            items: [
              'Below-market rent (appraisal required for certainty)',
              'Deferred maintenance (inspection report supports)',
              'Recent hire run-rate (offer letters on file)'
            ]
          },
          {
            subtitle: '5c. Low Confidence (Excluded)',
            items: [
              'Synergies (not appropriate for QoE)',
              'Projected revenue from pipeline (not signed)',
              '"Normalized" growth rate assumptions'
            ]
          }
        ]
      }
    },
    {
      id: 'mgmt',
      num: '6',
      title: 'Management Q&A',
      short: 'Targeted questions based on analytical findings and interview prep',
      details: {
        sections: [
          {
            subtitle: '6a. Question Development',
            items: [
              'Targeted questions based on specific analytical anomalies',
              'Follow-up questions for gaps in supporting documentation',
              'Clarification requests for unusual transactions or trends',
              'Confirmation questions for verbal representations'
            ]
          },
          {
            subtitle: '6b. Interview Support',
            items: [
              'Management interview preparation and logistics',
              'Real-time follow-up question generation',
              'Documentation of responses and inconsistencies',
              'Integration of findings into final report'
            ]
          }
        ]
      }
    },
    {
      id: 'deliverables',
      num: '7',
      title: 'Deliverables Package',
      short: 'Interactive dashboard and comprehensive written report with findings',
      details: {
        sections: [
          {
            subtitle: '7a. Executive Dashboard',
            items: [
              'Adjusted EBITDA waterfall visualization (monthly/TTM)',
              'Key ratio trends: Gross margin, EBITDA margin, FCF conversion',
              'Red/Yellow/Green risk flag summary with drill-down capability',
              'Revenue quality breakdown by tier and concentration metrics',
              'Working capital dashboard: DSO/DIO/DPO trends vs industry'
            ]
          },
          {
            subtitle: '7b. Comprehensive Written Report',
            items: [
              'Executive Summary: Key findings and deal impact assessment',
              'Detailed Adjusted EBITDA Bridge with supporting schedules',
              'Revenue Quality Analysis: Customer cohorts, churn, backlog',
              'Working Capital Assessment: NWC peg recommendation',
              'Risk Matrix: Categorized findings with mitigants and recommendations',
              'Management Q&A Summary: Questions asked and responses documented'
            ]
          }
        ]
      }
    }
  ];

  const scenarios = [
    {
      label: 'Rapid Growth SaaS',
      quote: 'Our ARR grew 150% last year, but our cash position barely moved. We need to understand why.',
      challenges: [
        'Deferred revenue creating cash flow timing disconnects',
        'High customer acquisition costs masking unit economics',
        'Implementation revenue vs. subscription revenue mix',
        'Churn rates varying significantly by cohort',
      ],
      hurdle: 'Investors questioning sustainability of growth and true cash generation ability',
    },
    {
      label: 'Family-Owned Manufacturer',
      quote: 'We have run this business for 30 years. The books are clean, but we know there are adjustments.',
      challenges: [
        'Owner compensation significantly above market rates',
        'Personal expenses run through the business',
        'Related-party transactions with unclear pricing',
        'No segregation of duties in accounting',
      ],
      hurdle: 'Separating true business earnings from owner lifestyle benefits for buyer presentation',
    },
    {
      label: 'Healthcare Services Platform',
      quote: 'Our payer mix is shifting, and reimbursement rates are under pressure. We need clarity on forward earnings.',
      challenges: [
        'Government vs. commercial reimbursement rate changes',
        'Prior authorization requirements increasing',
        'Bad debt from self-pay patients rising',
        'Provider contract renewals with rate uncertainty',
      ],
      hurdle: 'Quantifying regulatory and reimbursement headwinds in forward projections',
    },
  ];

  return (
    <div>
      {/* HERO — Split: Image Left | Gray Panel Right */}
      <div className="pt-16">
        <div className="grid lg:grid-cols-12 min-h-[600px] lg:min-h-[700px]">
          
          {/* Left — Image with Text Overlay */}
          <div className="lg:col-span-8 relative flex items-end">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
                alt="Financial analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051c2c] via-[#051c2c]/70 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
                Financial Due Diligence
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Quality of Earnings
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light mb-6 max-w-2xl leading-relaxed">
                Forensic financial analysis to determine if earnings will persist under new ownership.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:admin@northcastleconsulting.com?subject=Quality%20of%20Earnings%20Inquiry"
                  className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Start Your Analysis
                </a>
                <Link
                  to="/case-studies"
                  className="inline-block bg-transparent text-white px-8 py-4 font-semibold border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Gray Panel with Obstacles */}
          <div className="lg:col-span-4 bg-[#F5F5F5] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051c2c] mb-2">
              Common Challenges
            </h2>
            <p className="text-[#051c2c]/60 text-lg mb-8">
              &amp; How We Address Them
            </p>
            
            <div className="space-y-6">
              {obstacles.map((item) => (
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

      {/* SPLIT SECTION: Framework */}
      <div className="py-16 md:py-20 px-4 md:px-6 bg-[#F9F9F7]">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-2">Our Approach</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#051c2c]">
              Challenge by Challenge, Component by Component
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* LEFT: Challenge Cards */}
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  challenge: 'Unsustainable Earnings',
                  framework: ['1. Adjusted EBITDA Bridge', '5. Add-Back Validation', '4. Cash Flow Reconciliation'],
                  desc: 'We reconstruct true earnings baseline through comprehensive normalization and confidence-scored adjustments.',
                },
                {
                  num: '02',
                  challenge: 'Working Capital Manipulation',
                  framework: ['3. Working Capital Deep Dive', '4. Cash Flow Reconciliation', '6. Data Room Index'],
                  desc: 'We analyze 24+ months of DSO/DIO/DPO trends to identify artificial cash flow boosts and determine true NWC requirements.',
                },
                {
                  num: '03',
                  challenge: 'Revenue Quality Issues',
                  framework: ['2. Revenue Quality Assessment', '6. Management Q&A'],
                  desc: 'We apply five-tier revenue taxonomy and concentration analysis to assess sustainability and customer risk.',
                },
                {
                  num: '04',
                  challenge: 'Hidden Liabilities',
                  framework: ['6. Management Q&A'],
                  desc: 'We conduct forensic analysis with targeted management questions to surface unrecorded obligations.',
                },
              ].map((item) => (
                <div key={item.num} className="bg-white border-l-4 border-[#2563EB] shadow-sm overflow-hidden">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 bg-[#051c2c] p-5 text-white">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-[#2563EB]">{item.num}</span>
                        <h3 className="text-base font-bold leading-tight">{item.challenge}</h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    
                    <div className="md:col-span-8 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-2">Framework Applied</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.framework.map((component) => (
                          <span key={component} className="inline-block bg-[#F9F9F7] border border-gray-200 px-2 py-1 text-xs font-semibold text-[#051c2c]">
                            {component}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[#051c2c]/70">
                        <span className="text-[#2563EB] font-semibold">Result:</span> {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Interactive Framework Components */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#051c2c]/40 mb-2">The QoE Framework — Click to Expand</p>
              
              {frameworkItems.map((item) => (
                <div key={item.id} className="bg-white border-l-4 border-[#EDB624] shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-4 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-[#2563EB]">{item.num}</span>
                        <h4 className="font-bold text-[#051c2c]">{item.title}</h4>
                      </div>
                      <p className="text-sm text-[#051c2c]/60">{item.short}</p>
                    </div>
                    <div className="ml-3 mt-1">
                      <svg 
                        className={`w-5 h-5 text-[#2563EB] transition-transform ${expanded[item.id] ? 'rotate-45' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>
                  
                  {expanded[item.id] && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      {item.details.sections.map((section, idx) => (
                        <div key={idx} className="mt-4">
                          <h5 className="text-sm font-bold text-[#051c2c] mb-2">{section.subtitle}</h5>
                          <ul className="space-y-1.5">
                            {section.items.map((listItem, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[#051c2c]/70">
                                <span className="text-[#2563EB] mt-1">•</span>
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* REVENUE QUALITY TIERS */}
      <div className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Revenue Assessment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c]">Revenue Quality Tiers</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { tier: '1', title: 'Recurring Contracted', desc: '90%+ renewal', color: '#22c55e', examples: 'SaaS, multi-year agreements' },
              { tier: '2', title: 'Sticky Repeat Business', desc: 'High switching costs', color: '#2563EB', examples: 'Industrial consumables' },
              { tier: '3', title: 'Project-Based w/ Backlog', desc: '12-24 mo visibility', color: '#EDB624', examples: 'AEC, government' },
              { tier: '4', title: 'One-Time Project', desc: 'Non-repeating', color: '#f97316', examples: 'Custom implementations' },
              { tier: '5', title: 'Windfall/Spot Market', desc: 'Unpredictable', color: '#ef4444', examples: 'Commodity, distressed' },
            ].map((item) => (
              <div key={item.tier} className="bg-[#FAFAFA] p-4 border-t-4" style={{ borderColor: item.color }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: item.color }}>{item.tier}</span>
                  <h3 className="text-xs font-bold text-[#051c2c] leading-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-[#051c2c]/50 uppercase mb-1">{item.desc}</p>
                <p className="text-xs text-[#051c2c]/70">{item.examples}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-[#FAFAFA] border-l-4 border-red-500">
            <p className="text-sm font-bold text-[#051c2c] uppercase tracking-wider mb-3">Concentration Risk Thresholds</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <p><span className="text-red-500 font-bold">Red Flag:</span> Single customer &gt;30% of revenue</p>
              <p><span className="text-[#EDB624] font-bold">Yellow Flag:</span> Top 5 customers &gt;50% of revenue</p>
              <p><span className="text-red-500 font-bold">Critical:</span> Customer churn &gt;20% annually</p>
            </div>
          </div>
        </div>
      </div>

      {/* REAL WORLD SCENARIOS */}
      <div className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Client Scenarios</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051c2c]">Real World Scenarios</h2>
          </div>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div key={scenario.label} className="bg-[#051c2c] text-white p-8 md:p-10">
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-5">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase bg-[#EDB624] text-[#051c2c] px-3 py-1.5 mb-4">
                      {scenario.label}
                    </span>
                    <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed text-white/90">
                      &ldquo;{scenario.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="md:col-span-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                      Business Challenges
                    </p>
                    <ul className="space-y-2">
                      {scenario.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-white/80">
                          <span className="mt-1.5 flex-shrink-0 w-1 h-1 bg-white/60" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                      Greatest Hurdle
                    </p>
                    <p className="text-base text-white leading-relaxed">{scenario.hurdle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SELL-SIDE VS BUY-SIDE */}
      <div className="py-16 md:py-20 px-4 md:px-6 bg-[#F9F9F7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#051c2c]/50 text-sm font-semibold tracking-widest uppercase mb-3">Engagement Types</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051c2c]">Sell-Side vs. Buy-Side QoE</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border-l-4 border-[#2563EB] shadow-sm">
              <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider mb-4">
                Sell-Side (Vendor Due Diligence)
              </span>
              <h3 className="text-xl font-bold text-[#051c2c] mb-3">Maximize Valuation</h3>
              <p className="text-[#051c2c]/70 mb-4 text-sm">6-12 months pre-market. Control the narrative, identify favorable add-backs, speed the process.</p>
              <ul className="space-y-2 text-sm text-[#051c2c]/80">
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Clean up related party transactions</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Eliminate owner perks pre-sale</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Establish market-rate compensation benchmarks</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">→</span> Document one-time expenses with evidence</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-200 text-xs text-[#051c2c]/60">
                <strong>Deliverable:</strong> Recast financials for Confidential Information Memorandum (CIM)
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#EDB624] shadow-sm">
              <span className="inline-block px-3 py-1 bg-[#EDB624] text-[#051c2c] text-xs font-bold uppercase tracking-wider mb-4">
                Buy-Side (Confirmatory Due Diligence)
              </span>
              <h3 className="text-xl font-bold text-[#051c2c] mb-3">Validate & Protect</h3>
              <p className="text-[#051c2c]/70 mb-4 text-sm">Post-LOI, during exclusivity (30-45 day window). Validate investment thesis, find price reductions.</p>
              <ul className="space-y-2 text-sm text-[#051c2c]/80">
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Transaction-level revenue analysis</li>
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Customer interview verification (top 10-20)</li>
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Vendor payment pattern analysis</li>
                <li className="flex items-start gap-2"><span className="text-[#EDB624]">→</span> Tax authority confirmation letters</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-200 text-xs text-[#051c2c]/60">
                <strong>Deal Impact:</strong> Price reduction, earnout structure, escrow increase, NWC adjustment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#051c2c] py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to validate earnings quality?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Whether preparing for sale or evaluating a target, we provide the forensic analysis to support confident decisions.
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com?subject=Quality%20of%20Earnings%20Inquiry"
            className="inline-block bg-white text-[#051c2c] px-8 py-4 font-semibold text-base hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
          >
            Start Your Analysis
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
