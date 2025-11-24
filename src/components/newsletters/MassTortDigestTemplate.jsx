import React, { useState, useEffect } from 'react';
import { WEEKS_REGISTRY, getMostRecentWeek, getWeekById } from './data/index';

export default function MassTortDigestTemplate({ navigateToPage }) {
  const [selectedWeekId, setSelectedWeekId] = useState(getMostRecentWeek().metadata.id);

  // Get the current week's data
  const currentWeek = getWeekById(selectedWeekId) || getMostRecentWeek();
  const { metadata, hero, articles } = currentWeek;

  // Update document title and meta tags when week changes
  useEffect(() => {
    document.title = `${metadata.title} - ${metadata.publishDate}`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.seoDescription);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = metadata.seoDescription;
      document.head.appendChild(newMeta);
    }

    // Update meta keywords
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

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{metadata.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">{metadata.subtitle}</p>
            <div className="flex justify-center items-center gap-4 text-sm opacity-75">
              <span>{metadata.publishDate}</span>
              <span>•</span>
              <span>{metadata.readTime}</span>
              <span>•</span>
              <span>{metadata.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Main Content */}
          <div className="order-2 lg:order-1">
            {/* Hero Summary Box */}
            <div className="bg-white p-8 md:p-10 mb-10 border-l-4 border-red-500 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{hero.headline}</h2>
              <p className="text-lg text-gray-700 leading-relaxed italic">{hero.summary}</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white p-8 mb-10 shadow-sm rounded">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">In This Week's Digest</h3>
              <div className="space-y-3">
                {articles.map((article, index) => (
                  <a
                    key={article.id}
                    href={`#${article.anchorId}`}
                    className="block p-4 bg-gray-50 hover:bg-blue-50 rounded transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-blue-900 opacity-50 group-hover:opacity-100 transition-opacity">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-yellow-600 text-slate-900 px-2 py-0.5 rounded text-xs font-semibold uppercase">
                            {article.category}
                          </span>
                          <span className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-xs">
                            {article.relevanceScore}/10
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                          {article.headline}
                        </h4>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Article Sections */}
            {articles.map((article, index) => (
              <div key={article.id} id={article.anchorId} className="bg-white p-8 md:p-10 mb-10 shadow-sm scroll-mt-24">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-600 text-slate-900 px-4 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-xs">
                    Relevance: {article.relevanceScore}/10
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{article.headline}</h2>

                {/* Summary */}
                <p className="text-xl text-gray-600 italic mb-6 leading-relaxed">{article.summary}</p>

                {/* Content Paragraphs */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {article.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                <div className="bg-gray-100 p-6 rounded mt-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {article.keyTakeaways.map((takeaway, tIndex) => (
                      <li key={tIndex} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Trending Topics Section (if present) */}
            {currentWeek.trending && (
              <div className="bg-white p-8 md:p-10 mb-10 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{currentWeek.trending.title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentWeek.trending.topics.map((topic, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded border-l-4 border-blue-900">
                      <h4 className="font-bold text-slate-900 mb-2">{topic.name}</h4>
                      <p className="text-gray-700 text-sm">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Items Section (if present) */}
            {currentWeek.actionItems && (
              <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white p-8 md:p-10 mb-10 shadow-sm rounded">
                <h2 className="text-3xl font-bold mb-6">{currentWeek.actionItems.title}</h2>
                <ul className="space-y-3">
                  {currentWeek.actionItems.items.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-yellow-600 font-bold text-lg">→</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Back Button */}
            <div className="text-center py-10">
              <button
                onClick={() => navigateToPage('mass-tort')}
                className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                ← Back to Mass Tort Services
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Newsletter Archive */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Newsletter Archive</h3>
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
                            ? 'bg-gradient-to-r from-blue-900 to-slate-800 text-white shadow-md'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`text-lg ${isSelected ? 'text-yellow-600' : 'text-gray-400'}`}>
                            📰
                          </span>
                          <div className="flex-1">
                            <div className={`font-semibold text-sm mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                              {week.metadata.publishDate}
                            </div>
                            <div className={`text-xs ${isSelected ? 'text-gray-200' : 'text-gray-600'}`}>
                              {week.articles.length} articles • {week.metadata.readTime}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-900">
                <h3 className="text-xl font-bold text-slate-900 mb-4">This Week's Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium">Articles</span>
                    <span className="text-2xl font-bold text-blue-900">{articles.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium">Read Time</span>
                    <span className="text-lg font-bold text-blue-900">{metadata.readTime}</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-900">
                    <div className="text-xs text-gray-600 mb-1">Top Story</div>
                    <div className="text-sm font-bold text-slate-900">{articles[0]?.headline}</div>
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
