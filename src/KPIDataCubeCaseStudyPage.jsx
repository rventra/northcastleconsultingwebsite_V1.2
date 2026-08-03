import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Sell-Side Readiness',
  backTo: '/case-studies/sell-side-readiness',
  backLabel: 'Sell-Side Readiness Case Studies',
  title: 'Developing a KPI Data Cube for a Company Sale',
  standfirst: 'Transforming 2.7M data points from 6 ERP systems into actionable insights for a $250M auto parts manufacturer.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'Manufacturing (Auto Parts)' },
    { label: 'Duration', value: '4 months' },
    { label: 'Team', value: '1 Managing Director, 1 Director, 1 VP' },
    { label: 'Services', value: 'Sell-Side Readiness, Transaction DD' },
  ],
  situationTitle: 'Six ERPs, no single version of the truth',
  situationIntro: 'A PE-backed auto parts manufacturer preparing for sale had acquired five businesses in two years — leaving 2.7 million transaction-level data points scattered across six disparate ERP systems, with no consolidated view of sales, margin, or KPIs, and no way to respond to buyer inquiries with confidence.',
  challenges: [
    { title: '2.7M transaction-level data points', desc: 'Years of deal-level history across five acquired businesses, none of it unified.' },
    { title: 'Six disparate ERP systems', desc: 'Each acquisition brought its own system, schema, and definitions.' },
    { title: 'No consolidated view', desc: 'Sales, margin, and KPIs could not be seen across the combined business.' },
    { title: 'Buyer inquiries going unanswered', desc: 'Diligence questions that should take hours were taking weeks.' },
  ],
  approachTitle: 'One cube. Every answer.',
  steps: [
    { title: 'Stakeholder Collaboration', desc: 'Partnered with the CFO, VP of Sales, and CIO to understand each ERP system\u2019s architecture and validate data quality — ensuring accurate extraction and consolidation across all six systems.' },
    { title: 'Requirements Discovery', desc: 'Identified the critical data fields and KPIs needed to support the sale thesis, and the questions buyers would ask during diligence.' },
    { title: 'Data Cube Build', desc: 'Built a comprehensive KPI data cube (Power Pivot / Power Query) unifying 2.7 million transactions — sliceable by customer, channel, category, SKU, vintage, period, and region.' },
    { title: 'Diligence Management', desc: 'Ran the Q&A process through the cube, turning custom buyer analyses around quickly and demonstrating management credibility and data sophistication.' },
    { title: 'Knowledge Transfer', desc: 'Transitioned the cube to the FP&A team with training and documentation, so it lives on as a strategic planning and add-on acquisition tool.' },
  ],
  impactTitle: 'A competitive process, backed by data.',
  impactText: 'The KPI data cube transformed the sale process, equipping management to answer buyer inquiries in real time. The transaction-level visibility supported a successful exit — and gave the acquirer a foundation for future acquisitions. Post-transaction, the company engaged us to build their full business intelligence system on the framework we established.',
  stats: [
    { value: '2.7M', label: 'Transactions unified into one cube' },
    { value: '6', label: 'ERP systems consolidated' },
    { value: '5', label: 'Acquired businesses integrated' },
  ],
  ctaTitle: 'Preparing a data-challenged business for sale?',
  ctaText: 'Let\u2019s discuss how a data-driven approach can maximize your transaction value.',
  ctaSubject: 'Sell-Side%20Readiness%20Inquiry',
  relatedTo: '/services/sell-side-readiness',
  relatedLabel: 'Related Service: Sell-Side Readiness',
};

export default function KPIDataCubeCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
