// REQUIREMENTS:
// 1. Import all newsletter files from /src/components/newsletters/data/
// 2. Use the WEEKS_REGISTRY array from index.js
// 3. Create function: getLatestNewsletters(count = 3)
//    - Returns the most recent {count} newsletters
//    - Extracts top articles by relevanceScore
//    - Maps article content to Northcastle service categories using keywords
// 4. Create function: mapToService(content)
//    - Uses keyword matching for: "PFAS", "Paraquat", "settlement", "medical record", etc.
//    - Returns service category: "Mass Tort Services", "Medical Record Review", etc.
// 5. Format output for NewsletterTicker component

import { WEEKS_REGISTRY, getWeekById } from '../components/newsletters/data/index.js';

export function getLatestNewsletters(count = 3) {
  try {
    // Get the most recent newsletters from WEEKS_REGISTRY
    const latestNewsletters = WEEKS_REGISTRY.slice(0, count);
    
    // Flatten articles from all newsletters and sort by relevance score
    const allArticles = latestNewsletters.flatMap(newsletter => {
      return newsletter.articles.map(article => ({
        ...article,
        newsletterId: newsletter.metadata.id,
        publishDate: newsletter.metadata.publishDate
      }));
    });
    
    // Sort all articles by relevance score (descending) and take top ones
    const sortedArticles = allArticles.sort((a, b) => b.relevanceScore - a.relevanceScore);
    
    // Return newsletter data with their top articles
    const result = latestNewsletters.map(newsletter => {
      const newsletterArticles = sortedArticles.filter(
        article => article.newsletterId === newsletter.metadata.id
      );
      
      return {
        ...newsletter,
        articles: newsletterArticles
      };
    });
    
    return result;
  } catch (error) {
    console.error('Error fetching latest newsletters:', error);
    return [];
  }
}

export function mapToService(content) {
  const serviceKeywords = {
    'mass tort': 'Mass Tort Services',
    'medical record': 'Medical Record Review',
    'document analysis': 'Document Intelligence',
    'settlement': 'Settlement Services',
    'litigation support': 'Litigation Support',
    'financial intelligence': 'Financial Intelligence',
    'data analytics': 'Data Analytics',
    'PFAS': 'Environmental Services',
    'Paraquat': 'Product Liability',
    'MDL': 'Mass Tort Services',
    'AFFF': 'Environmental Services',
    'Roundup': 'Product Liability'
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

export function getNewsletterById(id) {
  try {
    return getWeekById(id);
  } catch (error) {
    console.error(`Error fetching newsletter with ID ${id}:`, error);
    return null;
  }
}