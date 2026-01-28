import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#1A2234] text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Latest Blogs
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Insights and perspectives from North Castle Consulting on data strategy, value creation, and portfolio company performance.
          </p>
        </div>
      </div>

      {/* Blog Listing */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Blog Preview Card */}
            <div className="group block bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-[#0D3BC3]/40 hover:shadow-xl transition-all duration-300">
              <p className="text-sm text-[#1A2234]/50 mb-3">10/29/25</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2234] mb-2 leading-tight">
                Data Visibility as a Core ROI Driver for PE Portfolio Companies
              </h2>
              <p className="text-[#0D3BC3] text-lg font-semibold mb-4">Don't Drive Blind</p>
              <p className="text-[#1A2234]/70 text-base leading-relaxed mb-6">
                Before you drive a car on a cold morning, you defrost the windshield and clean your mirrors.
              </p>
              <Link
                to="/blog/data-visibility-roi-driver"
                className="inline-block bg-[#EDB624] text-[#1A2234] px-8 py-4 rounded-lg font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 shadow-lg border border-transparent hover:border-[#EDB624]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-[#1A2234]/50 hover:text-[#0D3BC3] transition-colors text-sm"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
