import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactUsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Schedule your consultation today to leverage our expert insights and drive your business forward.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Drive Your Business Forward</h2>
            <p className="text-[#1A2234]/70 text-lg">Our team provides tailored solutions to meet your organization's unique needs.</p>
          </div>

          <form
            action="https://formsubmit.co/admin@northcastleconsulting.com"
            method="POST"
            className="bg-[#F6F7F7] rounded-xl p-6 md:p-8 border border-gray-200"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_cc" value="rventrapragada@northcastleconsulting.com" />
            <input type="hidden" name="_subject" value="New Website Inquiry - North Castle Consulting" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1A2234] mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1A2234] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3BC3] focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1A2234] mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1A2234] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3BC3] focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#1A2234] mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1A2234] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3BC3] focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#1A2234] mb-2">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1A2234] focus:outline-none focus:ring-2 focus:ring-[#0D3BC3] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Sell-Side Readiness">Sell-Side Readiness</option>
                  <option value="Dividend Recapitalization">Dividend Recapitalization</option>
                  <option value="Corporate Development">Corporate Development</option>
                  <option value="Mass Tort Services">Mass Tort Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-medium text-[#1A2234] mb-2">How Can We Help? *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1A2234] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3BC3] focus:border-transparent resize-none"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full text-center bg-[#0D3BC3] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#0D3BC3]/90 hover:shadow-xl transition-all duration-300 shadow-lg text-lg cursor-pointer"
            >
              Send Message
            </button>
            <p className="text-center text-[#1A2234]/60 text-sm mt-4">We typically respond within 1 business day</p>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-[#F6F7F7]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0D3BC3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0D3BC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Email</h3>
              <p className="text-[#1A2234]/70">
                <a href="mailto:admin@northcastleconsulting.com" className="hover:text-[#0D3BC3] transition-colors">
                  admin@northcastleconsulting.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#0D3BC3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0D3BC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Phone</h3>
              <p className="text-[#1A2234]/70">
                <a href="tel:3144404931" className="hover:text-[#0D3BC3] transition-colors">
                  314.440.4931
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#0D3BC3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0D3BC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2234] mb-2">Location</h3>
              <p className="text-[#1A2234]/70">St. Louis, MO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0 px-0 bg-white">
        <div className="w-full h-96 bg-[#F6F7F7] flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-[#0D3BC3]/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-[#1A2234]/40 text-sm">Map integration placeholder</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-[#0D3BC3] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how North Castle Consulting can help achieve your business goals
          </p>
          <a
            href="mailto:admin@northcastleconsulting.com,rventrapragada@northcastleconsulting.com?subject=General%20Inquiry"
            className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 hover:shadow-xl transition-all duration-300 shadow-lg"
          >
            Email Us Directly
          </a>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
