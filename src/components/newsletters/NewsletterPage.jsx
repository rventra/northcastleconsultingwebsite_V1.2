import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WEEKS_REGISTRY, getMostRecentWeek, getWeekById, getAllWeeksMeta } from './data/index';

export default function NewsletterPage() {
  const { weekId } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get the current week's data - use weekId from URL or fallback to most recent
  const currentWeek = weekId ? (getWeekById(weekId) || getMostRecentWeek()) : getMostRecentWeek();
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to a specific week's newsletter
  const navigateToWeek = (newWeekId) => {
    navigate(`/newsletter/${newWeekId}`);
  };

  // Get all weeks for the archive dropdown
  const allWeeks = getAllWeeksMeta();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-[#0D3BC3] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb and Archive */}
          <div className="flex justify-between items-center mb-6">
            <nav className="text-sm text-gray-600">
              <span className="cursor-pointer hover:text-[#0D3BC3]" onClick={() => navigate('/')}>
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="cursor-pointer hover:text-[#0D3BC3]" onClick={() => navigate('/newsletters')}>
                Newsletters
              </span>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{metadata.publishDate}</span>
            </nav>
            
            {/* Week Selector */}
            <select 
              value={metadata.id}
              onChange={(e) => navigateToWeek(e.target.value)}
              className="text-sm border border-gray-300 rounded px-3 py-1 bg-white"
            >
              <option value="">Select Edition...</option>
              {allWeeks.map((week) => (
                <option key={week.id} value={week.id}>
                  {week.publishDate} - {week.title.substring(0, 50)}...
                </option>
              ))}
            </select>
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="bg-[#0D3BC3] text-white px-3 py-1 rounded-full">{metadata.edition}</span>
            <span>{metadata.publishDate}</span>
            <span>•</span>
            <span>{metadata.readTime}</span>
            <span>•</span>
            <span className={`font-medium ${
              metadata.marketMood === 'risk-on' ? 'text-green-600' : 
              metadata.marketMood === 'volatile' ? 'text-yellow-600' : 'text-red-600'
            }`}>
              Market Mood: {metadata.marketMood}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {metadata.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{metadata.subtitle}</p>
          <p className="text-sm text-gray-500">By {metadata.author}</p>
        </div>
      </div>

      {/* Executive Brief */}
      <div className="py-8 bg-[#0D3BC3] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Executive Brief</h2>
          <div className="bg-white/10 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-3">{hero.headline}</h3>
            <p className="text-lg mb-4 leading-relaxed">{hero.summary}</p>
          </div>
          <div className="bg-[#EDB624] text-gray-900 rounded-lg p-4">
            <h4 className="font-bold mb-2">Why It Matters</h4>
            <p>{hero.whyItMatters}</p>
          </div>
        </div>
      </div>

      {/* Article Navigation */}
      <div className="py-6 bg-white border-b sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">Top Stories</h3>
          <div className="flex flex-wrap gap-2">
            {articles.map((article, index) => (
              <button
                key={article.id}
                onClick={() => scrollToArticle(article.anchorId)}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-[#0D3BC3] hover:text-white rounded-full transition-colors"
              >
                {index + 1}. {article.headline.substring(0, 40)}...
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              id={article.anchorId}
              className="mb-16 pb-16 border-b border-gray-200 last:border-0"
            >
              {/* Article Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded">
                    #{index + 1}
                  </span>
                  <span className="bg-[#EDB624] text-gray-900 text-xs font-bold px-2 py-1 rounded">
                    {article.category}
                  </span>
                  {article.mdlNumber && (
                    <span className="bg-[#0D3BC3] text-white text-xs font-bold px-2 py-1 rounded">
                      {article.mdlNumber}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.headline}</h2>
                <p className="text-lg text-gray-600 mb-4">{article.summary}</p>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                {article.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Takeaways */}
              {article.keyTakeaways && (
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Key Takeaways</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {article.keyTakeaways.map((takeaway, tIndex) => (
                      <li key={tIndex} className="text-gray-700">{takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Items */}
              {article.actionItems && (
                <div className="mt-6 bg-[#0D3BC3]/5 rounded-lg p-4 border-l-4 border-[#0D3BC3]">
                  <h4 className="font-bold text-[#0D3BC3] mb-3">Action Items</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {article.actionItems.map((item, aIndex) => (
                      <li key={aIndex} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Metadata */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
                {article.court && <span>Court: {article.court}</span>}
                {article.defendants && <span>Defendants: {article.defendants.slice(0, 3).join(', ')}{article.defendants.length > 3 && '...'}</span>}
                <span>Risk Level: <span className={`font-medium ${
                  article.riskLevel === 'critical' ? 'text-red-600' :
                  article.riskLevel === 'high' ? 'text-orange-600' : 'text-yellow-600'
                }`}>{article.riskLevel}</span></span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Court Activity & Market Signals */}
      {currentWeek.courtActivity && (
        <div className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentWeek.courtActivity.title}</h2>
            <div className="space-y-3">
              {currentWeek.courtActivity.filings.map((filing, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded mr-2">
                        {filing.tag}
                      </span>
                      <span className="text-sm text-gray-500">{filing.jurisdiction}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      filing.status === 'New Filings' ? 'bg-green-100 text-green-700' :
                      filing.status === 'Expansion' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {filing.status}
                    </span>
                  </div>
                  {filing.details && <p className="mt-2 text-gray-700">{filing.details}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Market Signals */}
      {currentWeek.marketSignals && (
        <div className="py-12 bg-white border-t">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentWeek.marketSignals.title}</h2>
            <div className="grid gap-4">
              {currentWeek.marketSignals.signals.map((signal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#EDB624] text-xl">→</span>
                  <p className="text-gray-700">{typeof signal === 'string' ? signal : signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Trending Themes */}
      {currentWeek.trendingThemes && (
        <div className="py-12 bg-[#051c2c] text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">{currentWeek.trendingThemes.title}</h2>
            <div className="grid gap-4">
              {currentWeek.trendingThemes.themes.map((theme, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <p className="text-lg">{typeof theme === 'string' ? theme : theme.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="py-8 bg-gray-100 border-t">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => navigate('/newsletters')}
            className="text-[#0D3BC3] hover:underline"
          >
            ← View All Newsletters
          </button>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-600 hover:text-[#0D3BC3]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </div>
  );
}
