import React from 'react';

export default function SellSideReadinessPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sell-Side Readiness</h1>
          <p className="text-2xl md:text-3xl font-semibold opacity-95 mb-4">
            Maximizing Value & Ensuring a Seamless Transaction
          </p>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            North Castle's Sell-Side Readiness services prepare companies for a smooth, efficient, and high-value exit by optimizing financial transparency, streamlining processes, and proactively addressing potential buyer concerns.
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a
              href="#contact-form"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-block bg-yellow-600 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
              className="inline-block bg-white bg-opacity-10 backdrop-blur-sm text-white border-2 border-white border-opacity-30 px-8 py-3 rounded-full font-semibold hover:bg-opacity-20 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Sell-Side Transaction Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Sell-Side Transaction</h2>
        <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-xl">!</span>
              Challenges
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Risk of Disruption</h4>
                <p className="text-gray-600">Management must <strong>balance day-to-day operations</strong> while preparing for due diligence.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Data Complexity</h4>
                <p className="text-gray-600">Disparate systems, <strong>large, unstructured data</strong>, and <strong>post-merger misalignment</strong> can stall transactions.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Buyer Scrutiny</h4>
                <p className="text-gray-600">Investors <strong>demand accuracy</strong> in financials and operations, and <strong>unexpected issues</strong> can derail valuations.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Resource Constraints</h4>
                <p className="text-gray-600">Understaffed <strong>F&A teams struggle</strong> to meet the diligence requirements of a deal.</p>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl">✓</span>
              Our Solution
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Transaction Success</h4>
                <p className="text-gray-600">Over <strong>95% of engagements</strong> result in a <strong>successful exit</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Management Focus</h4>
                <p className="text-gray-600">Allows leadership to <strong>prioritize daily operations</strong> without distraction.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Maximize Valuation</h4>
                <p className="text-gray-600">Pre-sale diligence <strong>reduces surprises</strong> and <strong>improves deal terms</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Buyer's Perspective</h4>
                <p className="text-gray-600">Our <strong>PE and investment banking expertise</strong> ensures management is well-prepared.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Process Optimization</h4>
                <p className="text-gray-600">Clean, <strong>organized financials</strong> create a <strong>competitive, efficient process</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Data Validation</h4>
                <p className="text-gray-600"><strong>Rigorous verification</strong> of financial and operational metrics to <strong>instill buyer confidence</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Elevate Credibility</h4>
                <p className="text-gray-600">Professional deliverables enhance the <strong>buyer's impression of the management team</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Prevent Surprises</h4>
                <p className="text-gray-600"><strong>Proactively address</strong> operational, technology, and HR concerns before due diligence begins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real World Scenarios Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Real World Scenarios</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

          {/* Scenario 1: Serial Acquirer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex gap-6 items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-3xl flex-shrink-0">📈</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Serial Acquirer</h3>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-yellow-600 pl-4">
                  "I have helped scale our organization through five targeted acquisitions in just three years"
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-900">●</span> Business Challenges
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Incomplete post-merger integration</li>
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Disparate data environment</li>
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Multiple ERP, CRM, CPM, and BI tools in use</li>
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Decentralized and misaligned F&A teams across multiple BUs and subsidiaries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-600">●</span> Greatest Hurdle
                </h4>
                <p className="text-gray-600 bg-red-50 p-4 rounded-lg border border-red-100">
                  "Our management team is unable to address simple diligence requests (e.g. we need help producing a streamlined revenue pipeline by product, customer, etc.)"
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Scenario 2: Understaffed Finance Team */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex gap-6 items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-3xl flex-shrink-0">👥</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Understaffed Finance Team</h3>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-yellow-600 pl-4">
                  "I lead finance at a company where navigating a multi-layered, data-rich environment is critical to decision-making"
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-900">●</span> Business Challenges
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Insufficient systems</li>
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Large and unorganized data sets (ex: millions of rows of transactional data)</li>
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Management lacks the requisite skills to extract data and manipulate it</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-600">●</span> Greatest Hurdle
                </h4>
                <p className="text-gray-600 bg-red-50 p-4 rounded-lg border border-red-100">
                  "Our management team lacks the requisite bandwidth to tackle a transaction without the business being neglected (e.g. we need to stay focused on running the business itself)"
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Scenario 3: Complex Data Environment */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex gap-6 items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-3xl flex-shrink-0">🗄️</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Complex Data Environment</h3>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-yellow-600 pl-4">
                  "I manage finance at a company where the F&A team is currently running lean relative to our operational demands"
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-900">●</span> Business Challenges
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-blue-900">→</span> Management team has significant bandwidth constraints</li>
                  <li className="flex gap-2"><span className="text-blue-900">→</span> F&A team is understaffed and struggling to keep up with their day-to-day activities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-600">●</span> Greatest Hurdle
                </h4>
                <p className="text-gray-600 bg-red-50 p-4 rounded-lg border border-red-100">
                  "Our management team is unable to produce anticipated diligence analysis (e.g. we need to deliver an analysis of revenue/profitability by customer cohort)"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Case Studies</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🎤</div>
                  <p className="text-sm opacity-75">Venue Management</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Building Credibility & Justifying Multiples</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A private equity-backed venue management company was preparing for a sale, but its finance team lacked the expertise to handle the complex due diligence process.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); /* navigateToPage('case-study-credibility'); */ }}
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                >
                  View More →
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-900 via-teal-800 to-slate-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">💳</div>
                  <p className="text-sm opacity-75">FinTech Payments</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enhancing Investment Credibility: Structuring Key Growth & Churn Analysis for a FinTech Sale</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A private equity-backed FinTech payments company was preparing for a sale but lacked the critical analysis that buyers required.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); /* navigateToPage('case-study-fintech'); */ }}
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                >
                  View More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ready to Prepare for Your Exit?</h2>
          <p className="text-xl mb-10 opacity-90 text-center">
            Schedule a consultation to discuss your sell-side readiness needs and how we can help maximize your transaction value.
          </p>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="john@firm.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Firm / Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Acme Capital Partners"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Tell us about your transaction</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 resize-none"
                placeholder="Describe your company and upcoming transaction..."
              ></textarea>
            </div>

            <a
              href="mailto:contact@northcastleconsulting.com?subject=Sell-Side%20Readiness%20Inquiry"
              className="block w-full text-center bg-yellow-600 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>

            <p className="text-sm text-center mt-4 opacity-75">
              We'll respond within 1 business day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
