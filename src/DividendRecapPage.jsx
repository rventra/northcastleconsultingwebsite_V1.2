import React from 'react';

export default function DividendRecapPage({ navigateToPage }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Dividend Recapitalization Prep</h1>
          <p className="text-2xl md:text-3xl font-semibold opacity-95 mb-4">
            Maximize Liquidity While Retaining Control
          </p>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Unlock capital for LPs without sacrificing ownership. North Castle's Dividend Recapitalization Prep ensures a seamless, lender-ready process that strengthens your credit story and optimizes valuation.
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

      {/* Challenge Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">The Challenge: Why Dividend Recap?</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 text-center mb-8">Key Issues Sponsors Face:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-900">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">💧</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Liquidity Demands</h4>
                  <p className="text-gray-600">LPs seek <strong>liquidity</strong>, but a full exit isn't always the best option.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-900">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">📉</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Deleveraging Opportunity</h4>
                  <p className="text-gray-600">The company has <strong>deleveraged</strong>, opening up recap opportunities.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-900">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">📈</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Continued Value Creation</h4>
                  <p className="text-gray-600">Sponsors want to continue <strong>value creation initiatives</strong>.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-900">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">🏦</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Capital Access</h4>
                  <p className="text-gray-600"><strong>Debt capital is available</strong>, but securing optimal terms requires expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Our Solution</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">📊</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Lender-Ready Data Preparation</h4>
                  <p className="text-gray-600 leading-relaxed">Organizing financials for lender due diligence. We ensure your data is clean, consistent, and ready for scrutiny.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">🔍</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Diligence Management</h4>
                  <p className="text-gray-600 leading-relaxed">Handling investor/lender Q&A, minimizing management distractions. We manage the entire diligence process so your team can stay focused on operations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">📈</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Financial Modeling & Stress Testing</h4>
                  <p className="text-gray-600 leading-relaxed">Ensuring leverage sustainability with scenario analysis. We build robust models that demonstrate your company's ability to service debt under various conditions.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">🎯</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Data Reconciliation & KPI Development</h4>
                  <p className="text-gray-600 leading-relaxed">Strengthening your credit story with key performance indicators. We identify and track the metrics that matter most to lenders.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-900">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">🤝</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Market Positioning & Lender Negotiations</h4>
                  <p className="text-gray-600 leading-relaxed">Identifying the optimal capital structure for success. We help position your company to secure the best terms in the market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Why Work With Us?</h2>
          <div className="h-1 w-24 bg-blue-900 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-yellow-600 mb-4">+95%</div>
              <h4 className="text-2xl font-bold mb-3">Success Rate</h4>
              <p className="opacity-90 leading-relaxed">Proven track record of successful transactions. We've helped sponsors across industries execute dividend recaps that deliver value.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-yellow-600 mb-4">↑ IRR</div>
              <h4 className="text-2xl font-bold mb-3">Boosts IRR</h4>
              <p className="opacity-90 leading-relaxed">Maximizing fund returns while maintaining flexibility. Our approach helps you return capital to LPs while preserving upside potential.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-yellow-600 mb-4">⚡</div>
              <h4 className="text-2xl font-bold mb-3">Faster Execution</h4>
              <p className="opacity-90 leading-relaxed">We minimize delays, ensuring a swift, lender-ready process. Our streamlined approach gets deals done on your timeline.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-yellow-600 mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-3">Tailored Strategy</h4>
              <p className="opacity-90 leading-relaxed">Custom solutions designed for <strong>your company's unique situation</strong>. No cookie-cutter approaches—we adapt to your specific needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ready to Unlock Capital?</h2>
          <p className="text-xl mb-10 opacity-90 text-center">
            Schedule a consultation to discuss your dividend recapitalization opportunity.
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
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Tell us about your opportunity</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 resize-none"
                placeholder="Describe your portfolio company and the dividend recap opportunity..."
              ></textarea>
            </div>

            <a
              href="mailto:contact@northcastleconsulting.com?subject=Dividend%20Recapitalization%20Inquiry"
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
