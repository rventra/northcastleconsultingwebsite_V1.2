import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllWeeksMeta } from './data/index';

export default function NewslettersListPage() {
  const navigate = useNavigate();
  const allWeeks = getAllWeeksMeta();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span className="cursor-pointer hover:text-[#0D3BC3]" onClick={() => navigate('/')}>
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Newsletters</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mass Tort Intelligence</h1>
          <p className="text-xl text-gray-600">
            Weekly litigation intelligence on mass tort developments, settlement dynamics, 
            and portfolio strategy.
          </p>
        </div>

        {/* Newsletter Archive */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Archive</h2>
          
          {allWeeks.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center text-gray-500">
              No newsletters available at this time.
            </div>
          ) : (
            <div className="grid gap-4">
              {allWeeks.map((week) => (
                <div 
                  key={week.id}
                  onClick={() => navigate(`/newsletter/${week.id}`)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-gray-500">{week.publishDate}</span>
                    <span className="text-[#0D3BC3] text-sm font-medium">Read →</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {week.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Latest Newsletter CTA */}
        {allWeeks.length > 0 && (
          <div className="mt-12 bg-[#0D3BC3] rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Read the Latest Edition</h3>
            <p className="text-white/80 mb-6">Stay current with the latest litigation developments</p>
            <button 
              onClick={() => navigate(`/newsletter/${allWeeks[0].id}`)}
              className="bg-[#EDB624] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Read Latest: {allWeeks[0].publishDate}
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-10 text-center">
          <button 
            onClick={() => navigate('/')} 
            className="text-gray-600 hover:text-[#0D3BC3]"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
