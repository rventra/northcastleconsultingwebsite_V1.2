import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllWeeksMeta } from './data/index';

const INITIAL_VISIBLE = 5;

export default function NewslettersListPage() {
  const navigate = useNavigate();
  const allWeeks = getAllWeeksMeta();
  const [showAll, setShowAll] = useState(false);

  const visibleWeeks = showAll ? allWeeks : allWeeks.slice(0, INITIAL_VISIBLE);
  const hasMore = allWeeks.length > INITIAL_VISIBLE;

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
            <>
              <div className="grid gap-4">
                {visibleWeeks.map((week) => (
                  <div
                    key={week.id}
                    onClick={() => navigate('/newsletter')}
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

              {hasMore && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="w-full py-3 px-6 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                >
                  {showAll ? (
                    <>
                      <span>Show Less</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Show {allWeeks.length - INITIAL_VISIBLE} More Editions</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </>
          )}
        </div>

        {/* Latest Newsletter CTA */}
        {allWeeks.length > 0 && (
          <div className="mt-12 bg-[#0D3BC3] rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Read the Latest Edition</h3>
            <p className="text-white/80 mb-6">Stay current with the latest litigation developments</p>
            <button
              onClick={() => navigate('/newsletter')}
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
