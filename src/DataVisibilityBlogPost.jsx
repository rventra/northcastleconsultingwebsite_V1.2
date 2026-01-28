import React from 'react';
import { Link } from 'react-router-dom';

export default function DataVisibilityBlogPost() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-white/50 mb-4">10/29/25</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Data Visibility as a Core ROI Driver for PE Portfolio Companies
          </h1>
          <p className="text-[#EDB624] text-xl font-semibold">Don't Drive Blind</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="space-y-0">

            {/* Section 1 - Opening */}
            <div className="pb-10">
              <p className="text-[#1A2234]/70 text-base leading-relaxed">
                Before you drive a car on a cold morning, you defrost the windshield and clean your mirrors. You wouldn't throw it in drive and speed onto the highway without being able to see clearly and have reliable instrumentation. Yet that's exactly how many portfolio companies approach value creation. The deal closes, initiatives are launched, and everyone starts "driving" fast — without clear visibility into the metrics that matter. Yes, they might have some basic reports pulled from the ERP, maybe a few dashboards. But it's almost always the bare minimum: fragmented, inconsistent, and too shallow to actually run the business against the investment thesis. The data isn't clean, it's not structured, and it doesn't tie back to the levers that drive ROI. The result? Leadership is making critical decisions with a fogged-up windshield, no reliable speedometer, and no clear sense of what's happening under the hood.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 2 - The Real Pain Point */}
            <div className="py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-6">The Real Pain Point: Figuring Out What Matters</h2>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                The starting point isn't technology or dashboards. It's asking:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-[#1A2234]/70">
                  <span className="text-[#0D3BC3] mr-3 mt-1 font-bold">&bull;</span>
                  <span>What are the core value drivers behind the investment thesis?</span>
                </li>
                <li className="flex items-start text-[#1A2234]/70">
                  <span className="text-[#0D3BC3] mr-3 mt-1 font-bold">&bull;</span>
                  <span>What data do we need to track to know if those levers are working?</span>
                </li>
                <li className="flex items-start text-[#1A2234]/70">
                  <span className="text-[#0D3BC3] mr-3 mt-1 font-bold">&bull;</span>
                  <span>Where does that data live today — and in what condition?</span>
                </li>
              </ul>
              <p className="text-[#1A2234]/70 text-base leading-relaxed">
                The first step is identifying the few critical questions that actually drive value, then pulling the right data together from ERPs, CRMs, spreadsheets, and other silos to answer them reliably. Only after that does visualization become meaningful.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 3 - Case Studies Intro */}
            <div className="py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-6">Case Studies: Start With What Matters</h2>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-8">
                The most effective analytics initiatives begin by defining the business question first, then structuring the data to answer it. A few examples from our work with mid-market PE firms:
              </p>

              {/* Case Study 1 */}
              <div className="bg-[#FAFAFA] p-6 md:p-8 rounded-lg border border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-[#1A2234] mb-4">Vending Machine Conversions – Prioritizing Rollouts by ROI</h3>
                <p className="text-[#1A2234]/70 text-base leading-relaxed">
                  A vending business wanted to upgrade its locations from vending machines to mini markets but didn't know which locations to convert first. We identified KPIs—location traffic, revenue per machine, conversion uplift, and payback period—and structured the data pipeline accordingly. A simple ranking dashboard then allowed leadership to confidently prioritize conversions based on ROI and payback timeline, accelerating returns on capital and providing key backup for the investment thesis.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Case Study 2 */}
            <div className="py-10">
              <div className="bg-[#FAFAFA] p-6 md:p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#1A2234] mb-4">Construction Materials Manufacturer – Smarter Pricing Through Order Type Visibility</h3>
                <p className="text-[#1A2234]/70 text-base leading-relaxed">
                  The executive team lacked visibility into quoted vs. unquoted orders, missing opportunities to price strategically. By defining KPIs to separate urgent unquoted demand (where pricing leverage is highest) from standard quoted business, and cleaning the data to make this distinction clear, we delivered real-time dashboards that guided the company toward higher-margin pricing decisions.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Case Study 3 */}
            <div className="py-10">
              <div className="bg-[#FAFAFA] p-6 md:p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#1A2234] mb-4">Turning Data Into Relationships: Engaging the Mechanics Behind the Sale</h3>
                <p className="text-[#1A2234]/70 text-base leading-relaxed">
                  For this auto-parts manufacturer, the real opportunity wasn't just in selling more parts—it was in understanding who was actually installing them. While most sales flowed through distributors and retailers, the professional mechanic was the ultimate decision-maker. Yet by the time a sale reached the end user, that connection was lost — along with valuable insight into buying behavior and product fit. We built a sales analytics model to uncover when parts were being purchased by mechanics indirectly through other channels. That visibility helped the company identify key installer segments, promote complete product bundles, and simplify the buying process so mechanics could finish jobs faster. The result was a data-driven marketing and sales tool that reconnected the company with its most important customers—helping build stronger relationships, faster sales cycles, and repeat business grounded in trust and real-world use.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Section 4 - From Siloed Data */}
            <div className="py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-6">From Siloed Data to Value-Driving Insight</h2>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-8">
                Most middle-market companies have data scattered across ERPs, CRMs, Excel sheets, and legacy systems. Critical KPIs live in different places with inconsistent definitions. The path to unlocking value is straightforward:
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">1.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Identify the Data That Matters</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      Start with the investment thesis (i.e., pricing power, margin expansion, operational improvements, working capital) and translate it into concrete KPIs and business questions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">2.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Pull It Together From Disparate Systems</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      Extract data from all relevant systems. Harmonize definitions, keys, and hierarchies. This is the heavy lift that creates the backbone for insight.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">3.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Clean, Standardize, and Structure</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      Establish reliable pipelines, fix master data, and define metrics clearly. This turns raw information into something trustworthy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">4.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Weave Analyses Around Value Drivers</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      With clean data in place, build targeted dashboards and models that track the levers that actually move Revenue, Gross Profit, and EBITDA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Section 5 - Data Visibility Is a Core ROI Driver */}
            <div className="py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-6">Data Visibility Is a Core ROI Driver — Not Bells and Whistles</h2>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                Data foundation work is often misunderstood. It's treated as "IT" or a reporting cost center. But in reality, it's one of the highest-leverage ROI drivers in the entire value creation plan. Think of it like the instrumentation on a car: you need a clear windshield, a functioning speedometer, a rear-view mirror, and a gas gauge. Running a portfolio company without structured, reliable data is like driving blind. We see this clearly in sell-side readiness work. As part of prepping a company for sale, we often spin up a lightweight BI tool—just enough to answer diligence questions efficiently and show investors the key levers. Almost without fail, almost everyone on the leadership team (CEO, sponsor, CFO, operations) says:
              </p>
              <blockquote className="border-l-4 border-[#0D3BC3] pl-6 py-2 my-6">
                <p className="text-[#1A2234] text-lg italic font-medium leading-relaxed">
                  "Why didn't we have this from day one? If we'd had this visibility earlier, we could have executed our strategy so much better."
                </p>
              </blockquote>
              <p className="text-[#1A2234]/70 text-base leading-relaxed">
                That reaction says it all. This isn't extra credit—it's the instrumentation required to operate the business intelligently. The companies that build this visibility early are the ones that drive pricing initiatives faster, integrate acquisitions more cleanly, manage working capital better, and execute with precision.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 6 - The Right Sequence */}
            <div className="py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-6">The Right Sequence: Assess &rarr; Fix &rarr; Build</h2>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-8">
                At North Castle Consulting, we use a disciplined approach:
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">1.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Investment Thesis & Strategic Priorities</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      Every engagement begins with clarity on the core value drivers: what creates or destroys margin, growth, or cash flow. We align on the investment thesis and the key strategic questions—which levers matter most and what decisions the leadership team needs to make. This ensures every subsequent analysis focuses on what moves the needle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">2.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Landscape Assessment</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      Map every data source, identify quality issues, and document how metrics are calculated today. Find critical paths and breakpoints.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">3.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Foundation Remediation</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      Tackle critical data quality and integration issues: consolidate master data, standardize hierarchies, implement validation rules, and define metrics clearly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="text-[#0D3BC3] font-bold text-lg">4.</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Reporting & Analytics</h3>
                    <p className="text-[#1A2234]/70 leading-relaxed">
                      With a solid foundation, dashboards can now deliver trusted, actionable insights tied directly to the investment thesis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Section 7 - The Bottom Line */}
            <div className="py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-6">The Bottom Line</h2>
              <p className="text-[#1A2234]/70 text-base leading-relaxed">
                This work isn't about building pretty dashboards. It's about creating the visibility required to execute the investment thesis effectively. It's not a cost center; it's a high-leverage ROI framework that leadership will inevitably wish they'd built sooner.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Closing CTA */}
            <div className="pt-10">
              <p className="text-[#1A2234]/70 text-base leading-relaxed">
                At North Castle Consulting, we help mid-market PE firms and their portfolio companies build reliable data foundations that drive value creation, improve execution, and support stronger exits. If you'd like to talk about your portfolio company's data landscape, let's connect.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1A2234] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Talk About Your Data Landscape</h2>
          <p className="text-white/60 mb-8">Connect with us to discuss how data visibility can drive ROI for your portfolio companies.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Blog%20Inquiry%20-%20Data%20Visibility%20ROI"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:bg-amber-300 transition-all duration-300 shadow-lg"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            to="/blog"
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            &larr; Back to Blog
          </Link>
          <Link
            to="/"
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
