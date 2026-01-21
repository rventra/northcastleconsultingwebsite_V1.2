import React, { useState, useEffect } from 'react';

const MassTortSignals = () => {
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch mass tort signals from GitHub
  useEffect(() => {
    const fetchSignals = async () => {
      try {
        setLoading(true);
        
        // Fetch all markdown files from the newsletters directory
        const response = await fetch(
          'https://api.github.com/repos/rventra/northcastleconsultingwebsite_V1.2/contents/src/components/newsletters/data'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch newsletter data');
        }
        
        const files = await response.json();
        const markdownFiles = files.filter(file => 
          file.name.endsWith('.js') && file.name.startsWith('week')
        );

        let allSignals = [];

        // Process each file to extract signals
        for (const file of markdownFiles) {
          try {
            const fileResponse = await fetch(file.download_url);
            const fileContent = await fileResponse.text();
            
            // Parse the JavaScript module content to extract articles
            const articleRegex = /articles:\s*\[([\s\S]*?)\]/;
            const match = fileContent.match(articleRegex);
            
            if (match) {
              // Extract the articles array content
              const articlesSection = match[1];
              
              // Find all objects in the articles array
              const articleEntries = articlesSection.match(/\{[\s\S]*?\}(?=.*[,}])/g) || [];
              
              for (const articleEntry of articleEntries) {
                try {
                  // Extract article fields using regex
                  const categoryMatch = articleEntry.match(/category:\s*["']([^"']*)["']/);
                  const headlineMatch = articleEntry.match(/headline:\s*["']([^"']*)["']/);
                  const summaryMatch = articleEntry.match(/summary:\s*["']([^"']*)["']/);
                  const publishDateMatch = articleEntry.match(/publishDate:\s*["']([^"']*)["']/);
                  const urgencyMatch = articleEntry.match(/relevanceScore:\s*(\d+)/);
                  
                  if (headlineMatch && summaryMatch) {
                    const urgencyLevel = parseInt(urgencyMatch ? urgencyMatch[1] : '0');
                    let urgency;
                    
                    if (urgencyLevel >= 8) urgency = 'high';
                    else if (urgencyLevel >= 5) urgency = 'medium';
                    else urgency = 'low';
                    
                    allSignals.push({
                      service_type: categoryMatch ? categoryMatch[1].toLowerCase().replace(/\s+/g, '_') : 'uncategorized',
                      case_name: headlineMatch[1],
                      urgency,
                      news_trigger: headlineMatch[1],
                      published_date: publishDateMatch ? publishDateMatch[1] : new Date().toISOString(),
                      cta_label: `Learn More About ${categoryMatch ? categoryMatch[1] : 'this Case Type'}`,
                      service_url: '/contact-us',
                      excerpt: summaryMatch[1],
                      plaintiff_estimate: null,
                      source: 'internal',
                      mdl_number: '',
                      id: `${Date.now()}-${Math.random()}`
                    });
                  }
                } catch (parseError) {
                  console.warn(`Failed to parse article in ${file.name}:`, parseError);
                }
              }
            }
          } catch (fileError) {
            console.warn(`Failed to process file ${file.name}:`, fileError);
          }
        }

        // Sort by urgency (high -> medium -> low)
        allSignals.sort((a, b) => {
          const urgencyOrder = { high: 3, medium: 2, low: 1 };
          return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
        });

        // Limit to maximum 5 items
        const topSignals = allSignals.slice(0, 5);
        
        setSignals(topSignals);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching mass tort signals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSignals();

    // Set up polling for cache refresh every 6 hours (21600000 ms)
    const intervalId = setInterval(fetchSignals, 21600000);
    return () => clearInterval(intervalId);
  }, []);

  // Get urgency badge class based on NC's existing colors
  const getUrgencyBadgeClass = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-red-500 px-3 py-1 rounded';
      case 'medium':
        return 'inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-yellow-500 px-3 py-1 rounded';
      case 'low':
        return 'inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-green-500 px-3 py-1 rounded';
      default:
        return 'inline-block text-xs font-bold text-[#1A2234] uppercase tracking-wider bg-gray-500 px-3 py-1 rounded';
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Mass Tort Signals</h2>
          </div>
          
          <div className="flex justify-center">
            <div className="spinner-border animate-spin h-8 w-8 border-4 border-[#EDB624] border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Mass Tort Signals</h2>
          </div>
          
          <div className="alert alert-warning bg-yellow-50 border-yellow-200 text-yellow-800 p-4 rounded-lg">
            Unable to load mass tort signals. Please refresh or contact support.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section bg-gray-50 py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2234] mb-3">Mass Tort Signals</h2>
          <p className="text-[#1A2234]/70 text-lg max-w-2xl mx-auto">
            Real-time alerts on emerging litigation opportunities and critical developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {signals.map((signal) => (
            <div 
              key={signal.id}
              className="bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#0D3BC3]/40 hover:-translate-y-1 group block"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={getUrgencyBadgeClass(signal.urgency)}>
                    {signal.urgency} urgency
                  </span>
                  {signal.source === 'pacer' && (
                    <span className="badge badge-success text-xs">⚖️ Court Verified</span>
                  )}
                </div>
                
                <h4 className="card-title text-lg font-bold text-[#1A2234] mb-2 group-hover:text-[#0D3BC3] transition-colors">
                  {signal.news_trigger}
                </h4>
                
                <p className="card-text text-[#1A2234]/70 text-base mb-4">
                  {signal.excerpt}
                </p>

                {signal.mdl_number && signal.source === 'pacer' && (
                  <a 
                    href={`#${signal.mdl_number}`} 
                    className="text-sm text-[#0D3BC3] hover:text-[#EDB624] underline mb-4 block"
                  >
                    MDL #{signal.mdl_number}
                  </a>
                )}

                {signal.plaintiff_estimate && (
                  <p className="text-sm font-semibold text-red-600 mb-4">
                    ~{signal.plaintiff_estimate.toLocaleString()} Plaintiffs Identified
                  </p>
                )}

                {signal.excerpt && (
                  <div className="alert alert-info bg-blue-50 border-blue-200 text-[#1A2234] p-3 rounded-lg mb-4">
                    {signal.excerpt}
                  </div>
                )}

                <a
                  href={signal.service_url}
                  className="btn btn-primary bg-[#EDB624] text-[#1A2234] hover:bg-white border-2 border-[#EDB624] hover:border-[#EDB624] px-6 py-3 rounded-lg font-semibold transition-all duration-300 block text-center w-full"
                >
                  {signal.cta_label}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mass Tort FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1A2234] mb-6 text-center">Mass Tort Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-slate-50 transition-colors flex items-center justify-between">
                How is this different from LexisNexis?
                <svg className="w-5 h-5 text-[#0D3BC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 pt-0 text-[#1A2234]/80 border-t border-slate-100">
                Lexis tells you what happened. We tell you plaintiff count and intake form.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-slate-50 transition-colors flex items-center justify-between">
                Do you monitor state court filings?
                <svg className="w-5 h-5 text-[#0D3BC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 pt-0 text-[#1A2234]/80 border-t border-slate-100">
                Federal MDLs primary; state coordination orders tracked.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden md:col-span-2">
              <summary className="p-4 font-semibold cursor-pointer hover:bg-slate-50 transition-colors flex items-center justify-between">
                What if alert is for uncovered case type?
                <svg className="w-5 h-5 text-[#0D3BC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 pt-0 text-[#1A2234]/80 border-t border-slate-100">
                Recommend vetted co-counsel (no referral fee).
              </div>
            </details>
          </div>
        </div>

        <p className="text-muted text-xs text-center text-[#1A2234]/60 mt-6">
          ⚖️ News for informational purposes. Not legal advice. Verify deadlines with clerk.
        </p>
      </div>
    </div>
  );
};

export default MassTortSignals;