import React from 'react';

export default function AboutUsPage({ navigateToPage }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-4">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Us</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Meet the team behind North Castle Consulting
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">

            {/* Nicholas Citrin */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-[#F6F7F7] aspect-square rounded-lg flex items-center justify-center">
                  <span className="text-6xl text-[#0D3BC3]/20">NC</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-[#1A2234] mb-2">Nicholas Citrin</h2>
                <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-6">Title/Role</p>

                <div className="space-y-4 text-[#1A2234]/70 leading-relaxed">
                  <p>
                    [Biography and professional background to be added]
                  </p>
                  <p>
                    [Additional details about experience, expertise, and achievements]
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1A2234] mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 1]</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 2]</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 3]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Ram Ventrapragada */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-[#F6F7F7] aspect-square rounded-lg flex items-center justify-center">
                  <span className="text-6xl text-[#0D3BC3]/20">RV</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-[#1A2234] mb-2">Ram Ventrapragada</h2>
                <p className="text-[#0D3BC3] text-sm font-medium tracking-wider uppercase mb-6">Title/Role</p>

                <div className="space-y-4 text-[#1A2234]/70 leading-relaxed">
                  <p>
                    [Biography and professional background to be added]
                  </p>
                  <p>
                    [Additional details about experience, expertise, and achievements]
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1A2234] mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 1]</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 2]</span>
                    <span className="px-4 py-2 bg-[#F6F7F7] text-[#1A2234] text-sm rounded-md">[Expertise 3]</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Optional CTA Section */}
      <div className="bg-[#0D3BC3] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch to discuss how we can help your business
          </p>
          <button
            onClick={() => navigateToPage('home')}
            className="bg-white text-[#0D3BC3] px-8 py-3 rounded-md font-semibold hover:bg-[#EDB624] hover:text-white transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
