import React, { useState, useEffect } from 'react';
import { getLatestNewsletters, mapToService } from '../lib/newsletter-api';
import { Link } from 'react-router-dom';

function NewsletterTicker() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Skeleton loader when data is loading
  const TickerSkeleton = () => (
    <div className="bg-[#0D3BC3] py-4 animate-pulse">
      <div className="max-w-7xl mx-auto flex space-x-8 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex-none w-80 h-24 bg-gray-200 rounded-lg" />
        ))}
      </div>
    </div>
  );

  // Fallback display in error state
  const FallbackDisplay = ({ error }) => (
    <div className="bg-[#0D3BC3] py-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-red-500 text-center">Error: {error}</div>
      </div>
    </div>
  );

  // Newsletter card component
  const NewsletterCard = ({ title, service, date }) => (
    <div className="flex-none w-80 bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-medium text-[#0D3BC3] bg-[#EDB624] px-2 py-1 rounded-full truncate">
          {service}
        </span>
        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{date}</span>
      </div>
      <h3 className="font-medium text-gray-900 text-sm line-clamp-2 leading-tight">
        {title}
      </h3>
    </div>
  );

  useEffect(() => {
    try {
      const newsletters = getLatestNewsletters(4);
      const topArticles = newsletters.flatMap(n => 
        n.articles.slice(0, 2).map(article => ({
          id: article.id,
          articleId: article.id, // NEW: for anchor linking
          newsletterId: n.metadata.id, // NEW: for routing
          title: article.headline,
          service: mapToService(article.summary),
          date: n.metadata.publishDate
        }))
      );
      setArticles(topArticles);
    } catch (err) {
      setError('Unable to load newsletter content');
    } finally {
      setLoading(false);
    }
  }, []);

  // Defensive rendering
  if (loading) return <TickerSkeleton />;
  if (error) return <FallbackDisplay error={error} />;
  if (!articles.length) return null;

  return (
    <div className="bg-[#0D3BC3] py-4">
      <div className="max-w-7xl mx-auto">
        <div className="animate-loop flex items-center space-x-8 overflow-hidden py-4">
          {articles.map((item) => (
            <Link to={`/newsletter/${item.newsletterId}#${item.articleId}`} key={item.id}>
              <NewsletterCard 
                key={item.id}
                title={item.title}
                service={item.service}
                date={item.date}
              />
            </Link>
          ))}
          {/* Duplicate items to create seamless looping effect */}
          {articles.map((item) => (
            <Link to={`/newsletter/${item.newsletterId}#${item.articleId}`} key={`duplicate-${item.id}`}>
              <NewsletterCard 
                key={`duplicate-${item.id}`}
                title={item.title}
                service={item.service}
                date={item.date}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsletterTicker;