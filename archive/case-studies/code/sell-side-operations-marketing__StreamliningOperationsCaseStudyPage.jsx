import React from 'react';
import { Link } from 'react-router-dom';

export default function StreamliningOperationsCaseStudyPage() {
  return (
    <div className="pt-16">
      {/* Hero with Background Image */}
      <div
        className="text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/e4fa03d3-8b0d-421a-9cc9-1da61e74ba9e/getty-images-4PPY1v2xChU-unsplash.jpg?format=2500w)' }}
      >
        {/* Subtle blue overlay for readability */}
        <div className="absolute inset-0 bg-[#0D3BC3]/40"></div>

        {/* Back Navigation */}
        <div className="relative z-10 py-3 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/case-studies/sell-side-readiness"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#EDB624] transition-colors text-sm"
            >
              <span>←</span>
              Back to Sell-Side Readiness
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-12 md:py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-[#EDB624] text-[#1A2234] text-xs font-bold px-3 py-1.5 rounded mb-4">
                SELL-SIDE READINESS
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                Streamlining Operations and Marketing Insights for a Successful Exit
              </h1>
              <p className="text-white/80 text-lg max-w-3xl">
                Comprehensive data analysis for a private equity-owned HVAC and plumbing company preparing for sale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm">
          <div><span className="text-gray-500">Industry:</span> <span className="font-medium text-[#0D3BC3]">HVAC & Plumbing / Consumer Services</span></div>
          <div><span className="text-gray-500">Duration:</span> <span className="font-medium text-[#0D3BC3]">6 months</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium text-[#0D3BC3]">1 Managing Director, 1 Vice President</span></div>
          <div><span className="text-gray-500">Services:</span> <span className="font-medium text-[#0D3BC3]">Sell-Side Readiness, FP&A Support</span></div>
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
              A private equity-owned HVAC and plumbing company was preparing to go to market but <strong>needed robust data analysis</strong> to support the sale process. Potential buyers required:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Sharp insights across revenue streams</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Marketing effectiveness analysis</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Operational efficiency metrics</li>
              <li className="flex gap-2"><span className="text-[#0D3BC3]">•</span> Clear value driver documentation</li>
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
              We developed detailed analyses to support the sale process:
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Comprehensive revenue analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Marketing & advertising metrics</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Operations & workforce analysis</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Customer retention insights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Execution Steps */}
      <div className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-6">The Execution</h2>
          <div className="space-y-6">
            {/* Revenue Analysis */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-base font-bold text-[#0D3BC3] mb-3">Revenue Analysis</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Segmented revenue by service offering, type, brand, customer, location (city/county/zip), product type, and SKU</p>
                <p>• Performed Pricing, Volume, and Mix (PVM) analysis</p>
                <p>• Analyzed repeat customer data, maintenance plan renewal rates, and customer retention metrics to showcase customer loyalty and recurring revenue potential</p>
              </div>
            </div>

            {/* Marketing Analysis */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-base font-bold text-[#0D3BC3] mb-3">Marketing & Advertising Analysis</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Analyzed revenue by lead source and channel by brand, providing insights into the most effective marketing strategies</p>
                <p>• Analyzed advertising spend and marketing metrics by lead source/channel/brand for cost-effectiveness</p>
                <p>• Assessed revenue-generating jobs and their alignment with marketing efforts</p>
              </div>
            </div>

            {/* Operations Analysis */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-base font-bold text-[#0D3BC3] mb-3">Operations Analysis</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Conducted an employee census, breaking down roles, positions, annual salaries, and bonuses</p>
                <p>• Reviewed technician turnover metrics by brand and analyzed revenue per technician and revenue per truck to assess operational efficiency</p>
                <p>• Provided a fleet overview, detailing utilization and alignment with revenue generation</p>
                <p>• Assessed supplier purchases, material vendors, and equipment to evaluate their impact on customer purchasing and business operations</p>
                <p>• Analyzed financing partners to evaluate their impact on customer purchasing and business operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#0D3BC3] mb-4">The Results</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Confident Navigation</span>
              </div>
              <p className="text-xs text-gray-600">Company navigated the sale process with confidence through comprehensive buyer answers</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Clear Visibility</span>
              </div>
              <p className="text-xs text-gray-600">Clear insights into revenue streams, operational metrics, and marketing effectiveness demonstrated company value</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium text-[#0D3BC3] text-sm">Successful Sale</span>
              </div>
              <p className="text-xs text-gray-600">Detailed insights facilitated a successful transaction with buyers fully understanding strengths and opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0D3BC3] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Prepare Your Business for Sale?</h2>
          <p className="text-gray-400 text-sm mb-6">Let's discuss how we can help you demonstrate value and attract buyers.</p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-6 py-3 rounded font-semibold text-sm hover:bg-amber-300 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
