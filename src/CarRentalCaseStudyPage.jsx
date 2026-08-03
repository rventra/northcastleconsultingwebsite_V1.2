import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Corporate Development',
  backTo: '/case-studies/corporate-development',
  backLabel: 'Corporate Development Case Studies',
  title: 'From Operations to Ownership',
  standfirst: 'Enabling car rental executives to acquire a franchise of a major global brand.',
  image: 'https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/72a1e0b6-d9e8-45b0-b95f-d4002cc6921a/Car+rental+Franchise?format=2500w',
  meta: [
    { label: 'Industry', value: 'Travel & Car Rental' },
    { label: 'Duration', value: '6 months' },
    { label: 'Team', value: '1 Managing Director, 1 Vice President' },
    { label: 'Services', value: 'Corporate Development, Investor Relations' },
  ],
  situationTitle: 'Operators with a vision, but no deal machine',
  situationIntro: 'An independent sponsor team of car rental executives had deep operational expertise and a vision to transform a franchise of a major global brand. What they lacked was everything a transaction requires: deal resources, financial modeling, capital structuring, and investor outreach.',
  challenges: [
    { title: 'No dedicated deal resources', desc: 'Operators running operations — nobody running the deal.' },
    { title: 'No financial modeling expertise', desc: 'A compelling operating vision without the numbers to prove it.' },
    { title: 'No capital structuring experience', desc: 'Fleet-heavy economics that needed creative financing.' },
    { title: 'No investor outreach', desc: 'No network, no materials, no credibility with capital providers.' },
  ],
  approachTitle: 'A deal team in a box.',
  steps: [
    { title: 'Built a Detailed Bottom-Up Financial Model', desc: 'Granular model segmented by location, business line (insurance, maintenance), and KPIs (revenue per car, per transaction, cost per transaction) — letting the team evaluate the business through their operational lens.' },
    { title: 'Developed a BI Dashboard for Decision-Making', desc: 'An interactive dashboard surfacing insights the sponsor team hadn\u2019t planned for — and a way to communicate the value-creation strategy to investors.' },
    { title: 'Structured a Tax-Advantaged Financing Strategy', desc: 'Identified a tax-exchange opportunity to refinance the fleet at a higher LTV, materially reducing required equity; negotiated terms with alternative fleet lenders to optimize the structure.' },
    { title: 'Enhanced Investor Confidence & Negotiated Terms', desc: 'Armed with model and dashboard, the sponsor understood the business better than incumbent management — convincing investors and securing favorable terms.' },
  ],
  impactTitle: 'A credible bid — and a business ready to run.',
  impactText: 'The team secured multiple investors for fleet financing and equity, and submitted a credible, competitive bid for the franchise. The financial model and KPI dashboards transitioned directly into the operational foundation for managing the business post-acquisition — minimizing equity required while positioning the sponsors for significant long-term value as operators.',
  stats: [
    { value: 'Multiple', label: 'Investors secured (fleet + equity)' },
    { value: 'Higher', label: 'Fleet LTV via tax-exchange refinancing' },
    { value: 'Credible', label: 'Competitive bid submitted' },
  ],
  ctaTitle: 'Ready to make the leap to ownership?',
  ctaText: 'Let\u2019s discuss how we can support your acquisition journey.',
  ctaSubject: 'Corporate%20Development%20Inquiry',
  relatedTo: '/services/corporate-development',
  relatedLabel: 'Related Service: Corporate Development',
};

export default function CarRentalCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
