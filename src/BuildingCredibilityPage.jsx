import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Sell-Side Readiness',
  backTo: '/case-studies/sell-side-readiness',
  backLabel: 'Sell-Side Readiness Case Studies',
  title: 'Building Credibility & Justifying Multiples',
  standfirst: 'Equipping a venue management company\u2019s finance team to support a premium EBITDA valuation.',
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'Leisure & Hospitality (Venue Management)' },
    { label: 'Duration', value: '5 months' },
    { label: 'Team', value: '1 Director, 1 Vice President' },
    { label: 'Services', value: 'Sell-Side Readiness, FP&A Support' },
  ],
  situationTitle: 'A premium multiple with no proof behind it',
  situationIntro: 'A PE-backed venue management company was preparing for sale, but its finance team lacked the expertise to handle complex due diligence. The CFO and sponsor were pulled into basic analysis, buyers were questioning contract strength, and a high EBITDA multiple needed quantitative justification.',
  challenges: [
    { title: 'Finance team overwhelmed', desc: 'Basic analysis consumed the team before diligence even began.' },
    { title: 'Leadership distracted', desc: 'CFO and sponsor pulled away from strategy into data remediation.' },
    { title: 'Unjustified multiple', desc: 'A premium EBITDA ask with no quantitative evidence behind it.' },
    { title: 'Contract strength questioned', desc: 'Buyers probing the defensibility of the venue agreement portfolio.' },
  ],
  approachTitle: 'Evidence for every turn of the multiple.',
  steps: [
    { title: 'Contract Leverage & Negotiation Analysis', desc: 'Audited dozens of venue management agreements — KPIs, terms, and improvement over time — providing quantitative evidence of negotiating power and relationship quality that directly addressed buyer concerns about contract defensibility.' },
    { title: 'CapEx ROI & Lease Obligations Analysis', desc: 'A financial model isolating capital decisions from market cycles — demonstrating clear long-term CapEx returns and sustainable lease economics, giving buyers confidence in disciplined investment.' },
    { title: 'Operational Improvement Benchmarking', desc: 'Before-and-after analyses across financial results, operational KPIs, customer satisfaction, and efficiency — proving improvements under current management were real, measurable, and sustainable.' },
  ],
  impactTitle: 'Premium justified — and adopted.',
  impactText: 'The analyses justified the premium multiple with the quantitative evidence buyers needed. Freed from the analytical burden, the CFO and sponsor focused on the strategic side of the transaction. Post-close, the acquirer adopted our contract-leverage model as their standard framework for evaluating and negotiating future venue agreements.',
  stats: [
    { value: 'Premium', label: 'EBITDA multiple justified' },
    { value: '3', label: 'Buyer-grade analyses delivered' },
    { value: 'Post-sale', label: 'Contract model adopted by acquirer' },
  ],
  ctaTitle: 'Need to justify your multiple?',
  ctaText: 'Let\u2019s discuss how a structured, evidence-first approach can support your exit.',
  ctaSubject: 'Sell-Side%20Readiness%20Inquiry',
  relatedTo: '/services/sell-side-readiness',
  relatedLabel: 'Related Service: Sell-Side Readiness',
};

export default function BuildingCredibilityPage() {
  return <CaseStudyLayout data={data} />;
}
