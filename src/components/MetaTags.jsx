import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * MetaTags Component
 * 
 * IMPORTANT LIMITATION: This component updates meta tags at RUNTIME via JavaScript.
 * Social media crawlers (LinkedIn, Facebook, Twitter) typically DO NOT execute JavaScript,
 * so they will NOT see these updated tags.
 * 
 * For LinkedIn Ads and social sharing to work properly, you MUST:
 * 1. Update the static meta tags in index.html for your primary landing page
 * 2. Use server-side rendering (SSR) or pre-rendering for multiple landing pages
 * 3. Use a service like prerender.io, Netlify, or Vercel for prerendering
 * 
 * This component is still useful for:
 * - Dynamic title updates (visible in browser tabs)
 * - Search engines that execute JavaScript (Google)
 * - Analytics and tracking tools
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (browser tab only for crawlers)
 * @param {string} props.description - Meta description (SEO, may not work for social)
 * @param {string} props.ogImage - OG image URL (WILL NOT WORK for LinkedIn/Facebook crawlers)
 * @param {string} props.ogType - Open Graph type (default: 'website')
 * @param {boolean} props.noIndex - Set to true to prevent indexing
 */
// Default fallback OG image for all pages (LinkedIn requires an image)
const DEFAULT_OG_IMAGE = 'https://northcastleconsulting.com/images/roundup-og-image.png';

const MetaTags = ({
  title = 'North Castle Consulting',
  description = 'Financial advisory for Private Equity and Corporate Development.',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false
}) => {
  const location = useLocation();
  const canonicalUrl = `https://northcastleconsulting.com${location.pathname}`;

  useEffect(() => {
    // Update document title (visible in browser tabs)
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // NOTE: OG tags updated here will NOT be seen by LinkedIn/Facebook crawlers
    // They only work for JavaScript-executing crawlers (Google) and browser extensions
    if (ogImage) {
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: ogImage },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: ogType },
      ];

      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });
    }

    // Cleanup: restore default title when unmounting
    return () => {
      document.title = 'North Castle Consulting';
    };
  }, [title, description, ogImage, ogType, canonicalUrl, noIndex]);

  return null;
};

export default MetaTags;

/**
 * SUPPORTED PAGES CONFIGURATION
 * 
 * Use this configuration object to manage meta tags for different pages.
 * When adding a new landing page, add its config here and use it in the component.
 * 
 * IMPORTANT: For LinkedIn Ads to work, you STILL need to either:
 * 1. Update index.html with the specific page's OG tags (single landing page)
 * 2. Set up prerendering/SSR (multiple landing pages)
 */
export const PAGE_META = {
  home: {
    title: 'North Castle Consulting | Financial Advisory for PE & Corporate Development',
    description: 'Financial expertise for Private Equity and Corporate Development teams seeking measurable outcomes. Sell-side readiness, M&A support, and data infrastructure.',
  },
  roundupLanding: {
    title: 'Roundup Docket Intelligence | North Castle Consulting',
    description: 'Actionable intelligence and data infrastructure for Roundup mass tort litigation. Know what your docket is worth before you walk into settlement negotiations.',
    ogImage: 'https://northcastleconsulting.com/images/roundup-og-image.png',
  },
  roundupThankYou: {
    title: 'Thank You | Roundup Docket Intelligence',
    description: 'Your sample docket report is on its way. Schedule a consultation to see how this applies to your specific cases.',
    noIndex: true, // Don't index thank you pages
  },
  sellSideReadiness: {
    title: 'Sell-Side Readiness | North Castle Consulting',
    description: 'Preparing portfolio companies for optimal valuation and successful exits.',
  },
  corporateDevelopment: {
    title: 'Corporate Development | North Castle Consulting',
    description: 'End-to-end M&A support for family offices and independent sponsors.',
  },
  massTort: {
    title: 'Mass Tort Litigation Support | North Castle Consulting',
    description: 'End-to-end litigation intelligence and operational infrastructure for law firms.',
  },
  qualityOfEarnings: {
    title: 'Quality of Earnings | North Castle Consulting',
    description: 'Forensic financial analysis for buy-side and sell-side due diligence.',
  },
  dashboarding: {
    title: 'Dashboarding & Data Portal | North Castle Consulting',
    description: 'Custom dashboards for real-time portfolio visibility.',
  },
  caseStudies: {
    title: 'Case Studies | North Castle Consulting',
    description: 'Proven results across sell-side readiness, corporate development, and data infrastructure.',
  },
  about: {
    title: 'About Us | North Castle Consulting',
    description: 'Meet the team behind North Castle Consulting.',
  },
  contact: {
    title: 'Contact Us | North Castle Consulting',
    description: 'Ready to discuss your next transaction? Our team is here to help.',
  },
  blog: {
    title: 'Insights | North Castle Consulting',
    description: 'Thought leadership on data infrastructure, financial advisory, and operational excellence.',
  },
};

/**
 * Hook for easily applying page-specific meta tags
 *
 * Usage:
 * function MyPage() {
 *   const meta = usePageMeta('roundupLanding');
 *   return <MetaTags {...meta} />;
 * }
 */
export const usePageMeta = (pageKey) => {
  const config = PAGE_META[pageKey];
  if (!config) {
    console.warn(`MetaTags: No configuration found for page key "${pageKey}"`);
    return;
  }

  return config;
};

/**
 * PageMeta - Simplified centralized meta tags for landing pages
 *
 * Usage:
 * // For pages with custom OG images (like landing pages for ads):
 * <PageMeta pageKey="roundupLanding" />
 *
 * // For thank you/confirmation pages (auto noindex):
 * <PageMeta pageKey="roundupThankYou" />
 *
 * // For regular pages (uses fallback image):
 * <PageMeta pageKey="home" />
 */
export const PageMeta = ({ pageKey }) => {
  const config = PAGE_META[pageKey];
  if (!config) {
    console.warn(`PageMeta: No configuration found for page key "${pageKey}"`);
    return null;
  }

  return (
    <MetaTags
      title={config.title}
      description={config.description}
      ogImage={config.ogImage}
      ogType={config.ogType || 'website'}
      noIndex={config.noIndex}
    />
  );
};
