import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer — the site's shared McKinsey-style footer.
 * Extracted from the homepage footer so service/landing pages render
 * identical site chrome. Kept outside any page-scoped style wrapper so it
 * uses the site's Tailwind design system, not a page's local CSS.
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <Link to="/" className="font-semibold text-[#051c2c]">North Castle Consulting</Link>
            <p className="text-[#051c2c]/60 text-sm mt-1">Financial advisory for Private Equity and Corporate Development.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/services/sell-side-readiness" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Services</Link>
            <Link to="/case-studies" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Insights</Link>
            <Link to="/contact-us" className="text-[#051c2c]/70 hover:text-[#2563EB] transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-6 pt-6 text-center text-[#051c2c]/40 text-sm">
          © 2025 North Castle Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
