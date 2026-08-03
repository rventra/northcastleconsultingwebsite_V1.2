import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CaseStudyLayout — McKinsey editorial template shared by all case studies.
 * Data shape:
 * {
 *   category, backTo, backLabel, title, standfirst, image,
 *   meta: [{label, value}],
 *   situationTitle, situationIntro, challenges: [{title, desc}],
 *   approachTitle, steps: [{title, desc}],
 *   impactTitle, impactText, stats: [{value, label}],
 *   ctaTitle, ctaText, ctaSubject, relatedTo, relatedLabel
 * }
 */
export default function CaseStudyLayout({ data }) {
  return (
    <div className="pt-16">
      {/* HERO — blurred image + navy overlay */}
      <div className="relative bg-[#051c2c] min-h-[75vh] flex items-center justify-center px-6 overflow-hidden">
        <img src={data.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-md scale-110" />
        <div className="absolute inset-0 bg-[#051c2c]/80"></div>

        <div className="absolute top-6 left-0 right-0 px-6 z-10">
          <div className="max-w-5xl mx-auto">
            <Link to={data.backTo} className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {data.backLabel}
            </Link>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto py-24">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            Case Study — {data.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-[1.15] mb-8">
            {data.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            {data.standfirst}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* PROJECT META */}
      <div className="bg-white py-6 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {data.meta.map((m) => (
            <div key={m.label}><span className="text-[#051c2c]/50">{m.label}:</span> <span className="font-medium text-[#051c2c]">{m.value}</span></div>
          ))}
        </div>
      </div>

      {/* THE SITUATION */}
      <div className="bg-white py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">The Situation</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">{data.situationTitle}</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">{data.situationIntro}</p>
          <div>
            {data.challenges.map((c, i) => (
              <div key={i} className="border-t border-gray-200 py-5">
                <h3 className="text-base font-semibold text-[#051c2c] mb-1">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER — blue section hero */}
      <div className="bg-[#2563EB] min-h-[50vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto py-20">
          <p className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-8">The Approach</p>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.15]">{data.approachTitle}</h2>
        </div>
      </div>

      {/* EXECUTION STEPS */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {data.steps.map((s, i) => (
            <div key={i} className="border-t border-gray-200 py-4 md:py-5 flex gap-6">
              <span className="text-sm font-semibold text-[#2563EB] mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#051c2c] mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THE IMPACT */}
      <div className="bg-[#051c2c] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">The Impact</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 max-w-2xl">{data.impactTitle}</h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-12">{data.impactText}</p>
          <div className={`grid grid-cols-2 ${data.stats.length > 2 ? 'md:grid-cols-' + Math.min(data.stats.length, 4) : 'md:grid-cols-2'} gap-10`}>
            {data.stats.map((stat, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <p className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GET IN TOUCH */}
      <div className="bg-white py-14 md:py-16 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#051c2c]/50 text-xs font-semibold tracking-[0.25em] uppercase mb-6">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">{data.ctaTitle}</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">{data.ctaText}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href={`mailto:admin@northcastleconsulting.com?subject=${data.ctaSubject}`}
              className="inline-block bg-[#051c2c] text-white px-8 py-3 text-sm font-semibold hover:bg-[#2563EB] transition-colors self-start"
            >
              Contact Us
            </a>
            {data.relatedTo && (
              <Link to={data.relatedTo} className="inline-flex items-center text-[#051c2c] text-sm font-semibold border-b border-[#051c2c]/30 pb-1 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors self-start">
                {data.relatedLabel} <span className="ml-2">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="bg-white py-6 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Link to="/case-studies" className="text-[#051c2c]/50 hover:text-[#051c2c] transition-colors text-sm">
            &larr; Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
