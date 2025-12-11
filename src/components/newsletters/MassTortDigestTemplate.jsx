import React, { useState, useEffect } from 'react';
import { WEEKS_REGISTRY, getMostRecentWeek, getWeekById } from './data/index';

export default function MassTortDigestTemplate({ navigateToPage }) {
  const [selectedWeekId, setSelectedWeekId] = useState(getMostRecentWeek().metadata.id);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get the current week's data
  const currentWeek = getWeekById(selectedWeekId) || getMostRecentWeek();
  const { metadata, hero, articles } = currentWeek;

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title and meta tags when week changes
  useEffect(() => {
    document.title = `${metadata.title} - ${metadata.publishDate}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.seoDescription);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = metadata.seoDescription;
      document.head.appendChild(newMeta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.seoKeywords);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = metadata.seoKeywords;
      document.head.appendChild(newMeta);
    }
  }, [metadata]);

  // Smooth scroll to article
  const scrollToArticle = (anchorId) => {
    const element = document.getElementById(anchorId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-screen h-1 bg-gray-200/50 z-50">
        <div
          className="h-full bg-blue-900/70 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header - With Stats in Top Nav */}
      <div className="bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚖️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  MASS TORT <span className="text-blue-900">INTELLIGENCE</span>
                </h1>
                <p className="text-xs text-gray-500">{metadata.author}</p>
              </div>
            </div>
            {/* Stats in Top Nav */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                  <span className="text-blue-900 font-semibold">{articles.length}</span>
                  <span className="text-gray-600">stories</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                  <span className="text-slate-900 font-semibold">{metadata.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Simplified */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-lg font-medium text-blue-200">This Week's Headlines</h2>
              <span className="text-blue-300">|</span>
              <span className="text-blue-200 text-sm">{metadata.publishDate}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{hero.headline}</h3>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl">{hero.summary}</p>
            {/* Stats under date */}
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
              <span>{articles.length} stories this week</span>
              <span className="text-blue-400">•</span>
              <span>{metadata.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - New Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Two Column: Story List + Trending/Past Issues */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 mb-12">
          {/* LEFT: Consolidated Story List */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-gray-200">
              In This Edition
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  onClick={() => scrollToArticle(article.anchorId)}
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 font-mono text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {article.category}
                        </span>
                        <span className="text-[10px] text-gray-400">{article.relevanceScore}/10</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-1">
                        {article.headline}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-2">{article.summary}</p>
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-900 transition-colors mt-1">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Trending + Past Issues */}
          <div className="space-y-6">
            {/* What's Trending */}
            {currentWeek.trending && (
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-orange-500">🔥</span>
                  What's Trending
                </h3>
                <div className="space-y-3">
                  {currentWeek.trending.topics.map((topic, index) => (
                    <div key={index} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">{topic.name}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{topic.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Past Issues - Compact */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-gray-400">📰</span>
                Past Issues
              </h3>
              <div className="space-y-1">
                {WEEKS_REGISTRY.map((week) => {
                  const isSelected = week.metadata.id === selectedWeekId;
                  return (
                    <button
                      key={week.metadata.id}
                      onClick={() => {
                        setSelectedWeekId(week.metadata.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        isSelected
                          ? 'bg-blue-900 text-white'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {week.metadata.publishDate}
                        </span>
                        <span className={`text-xs ${isSelected ? 'text-blue-200' : 'text-gray-400'}`}>
                          {week.articles.length}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* For Legal Professionals - Full Width with Synopsis */}
        {currentWeek.actionItems && (
          <div id="action-items-section" className="mb-12 scroll-mt-24">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-t-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h2 className="text-2xl font-bold">{currentWeek.actionItems.title}</h2>
              </div>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                Strategic imperatives for case intake, portfolio management, and emerging litigation opportunities.
                These action items highlight time-sensitive developments, new filing opportunities, and key
                considerations for legal teams navigating the current mass tort landscape.
              </p>
            </div>
            <div className="bg-gray-100 rounded-b-lg p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentWeek.actionItems.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-3 border-l-blue-900"
                  >
                    <div className="flex gap-3">
                      <span className="text-blue-900 font-bold text-sm flex-shrink-0">
                        {index + 1}.
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full Story Coverage */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <span className="text-blue-900 text-xl">📋</span>
            <h3 className="text-2xl font-bold text-slate-900">Full Story Coverage</h3>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <div
                key={article.id}
                id={article.anchorId}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden scroll-mt-24 hover:shadow-lg transition-shadow"
              >
                {/* Article Header */}
                <div className="bg-slate-900 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      Relevance: <span className="text-white font-semibold">{article.relevanceScore}/10</span>
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight">{article.headline}</h2>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  {/* Summary */}
                  <p className="text-gray-600 italic mb-6 leading-relaxed border-l-4 border-blue-900 pl-4 text-lg">
                    {article.summary}
                  </p>

                  {/* Content Paragraphs */}
                  <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                    {article.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Key Takeaways */}
                  <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span>💡</span>
                      Key Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {article.keyTakeaways.map((takeaway, tIndex) => (
                        <li key={tIndex} className="flex gap-3 text-gray-700 text-sm">
                          <span className="text-blue-900 font-bold">→</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigateToPage('mass-tort')}
              className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-900 transition-all"
            >
              Back to Mass Tort Services
            </button>
            <button
              onClick={() => navigateToPage('contact')}
              className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-semibold text-sm border border-gray-300 hover:bg-gray-50 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
