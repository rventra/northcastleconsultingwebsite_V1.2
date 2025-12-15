import React from 'react';

export default function CorporateDevPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Corporate Development</h1>
          <p className="text-2xl md:text-3xl font-semibold opacity-95 mb-4">
            Strategic M&A Execution for Growth & Value Creation
          </p>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            North Castle's Corporate Development services provide structured M&A strategy, due diligence, and execution to help companies maximize acquisition value and minimize risks.
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

      {/* M&A Transactions Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">M&A Transactions</h2>
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
                <h4 className="font-bold text-slate-900 mb-2">Strategic Alignment</h4>
                <p className="text-gray-600">Companies must ensure acquisitions align with <strong>growth objectives, market positioning, and financial goals</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Risk Mitigation</h4>
                <p className="text-gray-600">Poor due diligence can lead to <strong>overvaluation, operational disruptions, and integration failures</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Resource Constraints</h4>
                <p className="text-gray-600">Many firms <strong>lack in-house M&A expertise</strong>, slowing execution and increasing risk.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="font-bold text-slate-900 mb-2">Complex Deal Structuring</h4>
                <p className="text-gray-600">Understanding <strong>valuation, synergies, and negotiation strategies</strong> is critical for success.</p>
              </div>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl">✓</span>
              Our Solutions
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Target Screening</h4>
                <p className="text-gray-600">Identify and evaluate <strong>potential acquisition targets</strong> based on strategic fit, financial performance, and market positioning.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Preliminary Diligence</h4>
                <p className="text-gray-600">Assess investment opportunities through <strong>financial analysis, synergy evaluation, and structuring options</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Confirmatory Diligence</h4>
                <p className="text-gray-600">Conduct <strong>comprehensive due diligence</strong>, validate key assumptions, and quantify value drivers and risks.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Valuation & Deal Structuring</h4>
                <p className="text-gray-600">Develop <strong>financial models</strong>, assess transaction risks, and <strong>negotiate optimal deal terms</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Transaction Execution</h4>
                <p className="text-gray-600">Manage the <strong>LOI, purchase agreements, and closing procedures</strong> for a <strong>seamless transaction</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-2">Post-Deal Integration</h4>
                <p className="text-gray-600">Identify <strong>integration challenges, define synergy strategies, and support execution planning</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* M&A Process Visual */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Our M&A Process</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Strategy & Screening</h4>
              <p className="text-gray-600 text-sm">Define acquisition criteria, identify targets, and assess strategic fit</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Due Diligence</h4>
              <p className="text-gray-600 text-sm">Financial analysis, risk assessment, and validation of key assumptions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Execution & Integration</h4>
              <p className="text-gray-600 text-sm">Deal structuring, negotiations, closing, and post-merger support</p>
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
              <div className="h-48 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🚗</div>
                  <p className="text-sm opacity-75">Car Rental Franchise</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">From Operations to Ownership: Enabling Executives to Acquire a Car Rental Franchise</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A car rental franchise of a major global brand was up for sale. The buyers—an independent sponsor team of car rental executives—had deep operational expertise and a vision to enhance the business by implementing more efficient rental models.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); /* navigateToPage('case-study-car-rental'); */ }}
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                >
                  View More →
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🎯</div>
                  <p className="text-sm opacity-75">Consulting Firm Acquisition</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Building an Acquisition Roadmap: Target Identification for a Consulting Firm</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A private equity-backed consulting firm sought to grow through acquisitions but lacked a clear picture of the potential investment universe.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); /* navigateToPage('case-study-consulting'); */ }}
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
                >
                  View More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Why Choose Us?</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">🏦</div>
              <h4 className="text-xl font-bold mb-3">Deep M&A Expertise</h4>
              <p className="opacity-90 leading-relaxed">Seasoned professionals with extensive experience across industries and deal sizes.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3">Data-Driven Approach</h4>
              <p className="opacity-90 leading-relaxed">Rigorous financial analysis and market intelligence to inform every decision.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-3">End-to-End Support</h4>
              <p className="opacity-90 leading-relaxed">From target screening to post-deal integration, we're with you every step.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-3">Efficient Execution</h4>
              <p className="opacity-90 leading-relaxed">Streamlined processes that minimize delays and maximize deal certainty.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-10 opacity-90 text-center">
            Schedule a consultation to discuss your corporate development strategy and M&A objectives.
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
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Acme Holdings"
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
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Tell us about your M&A objectives</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 resize-none"
                placeholder="Describe your acquisition strategy and goals..."
              ></textarea>
            </div>

            <a
              href="mailto:contact@northcastleconsulting.com?subject=Corporate%20Development%20Inquiry"
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
