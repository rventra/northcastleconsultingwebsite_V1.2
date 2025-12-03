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

      {/* Header - Clean Style */}
      <div className="bg-white border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  MASS TORT <span className="text-blue-900">INTELLIGENCE</span>
                </h1>
                <p className="text-sm text-gray-600">{metadata.subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-600">{metadata.publishDate}</div>
              <div className="text-xs text-gray-500">{metadata.readTime}</div>
            </div>
          </div>
        </div>
      </div>

      {/* View Older Editions Link */}
      <div className="bg-gray-100 border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm text-blue-900 hover:text-slate-900 font-semibold flex items-center gap-2 transition-colors"
          >
            <span>📰</span>
            <span>View Older Editions</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          {/* Main Content */}
          <div className="order-2 lg:order-1">
            {/* Hero Story - Top Story with Category */}
            <div className="bg-blue-900 text-white p-8 mb-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-600 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase">
                  {articles[0].category}
                </span>
                <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                  Top Story
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{hero.headline}</h2>
              <p className="text-gray-100 leading-relaxed">{hero.summary}</p>
            </div>

            {/* Featured Story + Also In This Edition - Two Column */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Featured Story - LEFT */}
              <div
                className="bg-white border-2 border-slate-900 rounded-lg p-6 cursor-pointer hover:shadow-xl transition-all"
                onClick={() => scrollToArticle(articles[0].anchorId)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-600 text-slate-900 px-2 py-1 rounded text-xs font-bold uppercase">
                    {articles[0].category}
                  </span>
                  <span className="bg-red-600 text-white px-2 py-1 rounded font-semibold text-xs">
                    Featured
                  </span>
                </div>

                {/* Icon/Visual */}
                <div className="bg-slate-900 rounded-lg p-8 mb-4 flex items-center justify-center">
                  <span className="text-6xl">⚖️</span>
                </div>

                <div className="text-sm text-gray-500 mb-2">{metadata.publishDate.toUpperCase()}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {articles[0].headline}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {articles[0].summary}
                </p>
                <div className="text-blue-900 font-semibold text-sm flex items-center gap-2">
                  <span>Read full story</span>
                  <span>→</span>
                </div>
              </div>

              {/* Also In This Edition - RIGHT */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-yellow-600 pb-2">
                  Also In This Edition
                </h3>
                <div className="space-y-4">
                  {articles.slice(1).map((article) => (
                    <div
                      key={article.id}
                      onClick={() => scrollToArticle(article.anchorId)}
                      className="cursor-pointer group"
                    >
                      <div className="flex items-start gap-2 mb-1">
                        <span className="bg-gray-200 text-slate-900 px-2 py-0.5 rounded text-xs font-bold uppercase">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {article.relevanceScore}/10
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                        {article.headline}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trending Topics + Legal Professionals Preview - Two Column */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Trending Topics - LEFT */}
              {currentWeek.trending && (
                <div className="bg-white border-l-4 border-yellow-600 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">🔥 What's Trending</h3>
                  <div className="space-y-3">
                    {currentWeek.trending.topics.map((topic, index) => (
                      <div key={index} className="pb-3 border-b border-gray-200 last:border-0">
                        <div className="font-bold text-slate-900 text-sm mb-1">{topic.name}</div>
                        <div className="text-gray-600 text-xs leading-relaxed">{topic.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* For Legal Professionals Preview - RIGHT */}
              {currentWeek.actionItems && (
                <div className="bg-white border-l-4 border-slate-900 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">⚡ For Legal Professionals</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Strategic imperatives for case intake, portfolio management, and emerging litigation opportunities.
                  </p>
                  <div className="text-sm text-slate-900 mb-4 leading-relaxed">
                    {currentWeek.actionItems.items[0]}
                  </div>
                  <button
                    onClick={() => scrollToArticle('action-items-section')}
                    className="w-full bg-slate-900 text-white px-4 py-2.5 rounded font-semibold text-sm hover:bg-blue-900 transition-colors"
                  >
                    View All {currentWeek.actionItems.items.length} Action Items →
                  </button>
                </div>
              )}
            </div>

            {/* Detailed Articles - Breakout Sections */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-t-2 border-gray-300 pt-8">
                <span className="text-blue-900">📋</span>
                Full Story Coverage
              </h3>

              <div className="space-y-8">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    id={article.anchorId}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden scroll-mt-24"
                  >
                    {/* Article Header - Solid Color */}
                    <div className="bg-slate-900 p-6 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-yellow-600 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase">
                          {article.category}
                        </span>
                        <span className="bg-white text-slate-900 px-3 py-1 rounded font-bold text-xs">
                          Relevance: {article.relevanceScore}/10
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{article.headline}</h2>
                    </div>

                    {/* Article Body */}
                    <div className="p-6">
                      {/* Summary */}
                      <p className="text-lg text-gray-700 italic mb-6 leading-relaxed border-l-4 border-blue-900 pl-4">
                        {article.summary}
                      </p>

                      {/* Content Paragraphs */}
                      <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                        {article.content.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Key Takeaways */}
                      <div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded">
                        <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                          <span>💡</span>
                          Key Takeaways
                        </h4>
                        <ul className="space-y-2">
                          {article.keyTakeaways.map((takeaway, tIndex) => (
                            <li key={tIndex} className="flex gap-3 text-gray-700">
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

            {/* Action Items - Better Formatted as Cards */}
            {currentWeek.actionItems && (
              <div id="action-items-section" className="mb-12 scroll-mt-24">
                <div className="bg-blue-900 text-white p-8 rounded-lg mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">⚡</span>
                    <h2 className="text-2xl font-bold">{currentWeek.actionItems.title}</h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {currentWeek.actionItems.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border-l-4 border-slate-300 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-3">
                        <span className="text-blue-900 font-bold text-lg flex-shrink-0">
                          {index + 1}.
                        </span>
                        <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="text-center py-8 border-t-2 border-gray-300">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => navigateToPage('mass-tort')}
                  className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-all shadow-lg"
                >
                  Back to Mass Tort Services
                </button>
                <button
                  onClick={() => navigateToPage('contact')}
                  className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Newsletter Archive */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-600">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span>📰</span>
                  Past Issues
                </h3>
                <div className="space-y-2">
                  {WEEKS_REGISTRY.map((week) => {
                    const isSelected = week.metadata.id === selectedWeekId;
                    return (
                      <button
                        key={week.metadata.id}
                        onClick={() => {
                          setSelectedWeekId(week.metadata.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full text-left p-3 rounded transition-all ${
                          isSelected
                            ? 'bg-blue-900 text-white shadow-md'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`text-lg ${isSelected ? 'text-yellow-600' : 'text-gray-400'}`}>
                            📅
                          </span>
                          <div className="flex-1">
                            <div className={`font-semibold text-sm mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                              {week.metadata.publishDate}
                            </div>
                            <div className={`text-xs ${isSelected ? 'text-gray-200' : 'text-gray-600'}`}>
                              {week.articles.length} stories
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-900">
                <h3 className="text-lg font-bold text-slate-900 mb-4">This Week</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">Stories</span>
                    <span className="text-2xl font-bold text-blue-900">{articles.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">Read Time</span>
                    <span className="text-lg font-bold text-blue-900">{metadata.readTime}</span>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-600">
                    <div className="text-xs text-gray-600 mb-1 font-semibold">🔥 Top Story</div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">{articles[0]?.headline}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
