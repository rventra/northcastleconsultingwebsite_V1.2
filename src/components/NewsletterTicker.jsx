import React, { useState, useEffect } from 'react';

function mapToService(content) {
  const serviceKeywords = {
    'mass tort': 'Mass Tort Services',
    'medical record': 'Medical Record Review',
    'document analysis': 'Document Intelligence',
    'settlement': 'Settlement Services',
    'litigation support': 'Litigation Support',
    'financial intelligence': 'Financial Intelligence',
    'data analytics': 'Data Analytics',
  };

  // Search for keyword matches in content, case-insensitive
  for (const [keyword, serviceName] of Object.entries(serviceKeywords)) {
    if (content.toLowerCase().includes(keyword.toLowerCase())) {
      return serviceName;
    }
  }

  // Default fallback
  return 'General Services';
}

export default function NewsletterTicker() {
  const [newsletters, setNewsletters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Skeleton loader for when data is loading
  const TickerSkeleton = () => (
    <div className="bg-gray-50 py-4 animate-pulse">
      <div className="max-w-7xl mx-auto flex space-x-8 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex-none w-80 h-24 bg-gray-200 rounded-lg" />
        ))}
      </div>
    </div>
  );

  // Fallback display in error state
  const FallbackDisplay = ({ error }) => (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-red-500 text-center">Error: {error}</div>
      </div>
    </div>
  );

  // Newsletter card component
  const NewsletterCard = ({ title, service, date }) => (
    <div className="flex-none w-80 bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full truncate">
          {service}
        </span>
        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{date}</span>
      </div>
      <h3 className="font-medium text-gray-900 text-sm line-clamp-2 leading-tight">
        {title}
      </h3>
    </div>
  );

  // Simulated newsletter data for demonstration (replace with real API fetch later)
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: "New Technology Streamlines Medical Record Review Process",
        content: "Implementation of AI for efficient medical record review in mass tort cases.",
        publishDate: "Jan 15, 2025"
      },
      {
        id: 2,
        title: "Improved Settlement Analytics Tool Released",
        content: "Advanced settlement services analytics for improved outcome predictions.",
        publishDate: "Jan 10, 2025"
      },
      {
        id: 3,
        title: "Document Review Efficiency Up 40 Percent",
        content: "New document intelligence techniques boost efficiency significantly.",
        publishDate: "Jan 5, 2025"
      },
      {
        id: 4,
        title: "Regulatory Changes Impact Litigation Planning",
        content: "Changes in regulations require adjustments in litigation support strategies.",
        publishDate: "Dec 28, 2024"
      }
    ];

    // This simulates an API call
    setTimeout(() => {
      try {
        const filtered = mockData.slice(0, 4); // Limit to first 4
        setNewsletters(filtered);
      } catch (err) {
        setError('Unable to load newsletter content');
      } finally {
        setLoading(false);
      }
    }, 1000); // Simulate network delay
  }, []);

  // Defensive rendering
  if (loading) return <TickerSkeleton />;
  if (error) return <FallbackDisplay error={error} />;
  if (!newsletters.length) return null;

  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-8 overflow-hidden px-4">
          {newsletters.map((item) => (
            <NewsletterCard 
              key={item.id}
              title={item.title}
              service={mapToService(item.content)}
              date={item.publishDate}
            />
          ))}
          {/* Duplicate items to create seamless looping effect */}
          {newsletters.map((item) => (
            <NewsletterCard 
              key={`duplicate-${item.id}`}
              title={item.title}
              service={mapToService(item.content)}
              date={item.publishDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}