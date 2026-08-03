import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Sell-Side Readiness',
  backTo: '/case-studies/sell-side-readiness',
  backLabel: 'Sell-Side Readiness Case Studies',
  title: 'Enhancing Investment Credibility',
  standfirst: 'Structuring growth and churn analysis for a FinTech payments company to build data-driven buyer confidence.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'FinTech (Payments)' },
    { label: 'Duration', value: '2 months' },
    { label: 'Team', value: '1 MD, 1 Director, 1 VP, 1 Associate' },
    { label: 'Services', value: 'Sell-Side Readiness, FP&A Support' },
  ],
  situationTitle: 'Growth no one could explain',
  situationIntro: 'A PE-backed FinTech payments company was preparing for sale but had never operated with data-driven insights. Buyers were asking questions the company fundamentally couldn\u2019t answer: what was driving revenue growth, how sticky were customers, and how effective was the sales pipeline?',
  challenges: [
    { title: 'Unexplained growth', desc: 'No clear, data-backed explanation for the revenue trajectory.' },
    { title: 'Unclear retention', desc: 'Customer churn and stickiness asserted, but never proven.' },
    { title: 'Unknown pipeline effectiveness', desc: 'Revenue projections without historical win rates behind them.' },
    { title: 'Misaligned teams', desc: 'Sponsor unable to get management and diligence on the same page.' },
  ],
  approachTitle: 'From raw data to investment-grade proof.',
  steps: [
    { title: 'Key Growth Driver Analysis', desc: 'A data cube segmenting revenue and gross profit by customer and service line, connecting revenue streams to issuance data at a granular level — explaining past growth and normalizing post-COVID expectations.' },
    { title: 'Sales Pipeline & Win Rate Analysis', desc: 'CRM data integrated into a pipeline model tracking conversion at each stage — justifying projections with historical win rates and funnel efficiency.' },
    { title: 'Customer Churn & Retention Analysis', desc: 'A lifecycle model of long-term retention across product lines — showing that even infrequent transactors remained consistent contributors, substantiating low churn and high stickiness.' },
  ],
  impactTitle: 'A thesis buyers could underwrite.',
  impactText: 'The company entered diligence with a data-backed investment thesis. Sponsor and management gained a deep understanding of revenue drivers, customer behavior, and long-term stability — answering buyer questions with confidence and addressing concerns before they became issues.',
  stats: [
    { value: '3', label: 'Investment-grade analyses' },
    { value: '2 mo', label: 'From data to diligence-ready' },
    { value: 'Upfront', label: 'Buyer concerns addressed' },
  ],
  ctaTitle: 'Need data-driven credibility for your sale?',
  ctaText: 'Let\u2019s discuss how we can build the analyses buyers are looking for.',
  ctaSubject: 'Sell-Side%20Readiness%20Inquiry',
  relatedTo: '/services/sell-side-readiness',
  relatedLabel: 'Related Service: Sell-Side Readiness',
};

export default function EnhancingInvestmentCredibilityPage() {
  return <CaseStudyLayout data={data} />;
}
