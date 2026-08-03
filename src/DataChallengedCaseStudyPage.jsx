import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Sell-Side Readiness',
  backTo: '/case-studies/sell-side-readiness',
  backLabel: 'Sell-Side Readiness Case Studies',
  title: 'Unlocking Value in a Data-Challenged Business Sale',
  standfirst: 'Transforming a stalled year-long sale process into a successful exit for a vending & catering company.',
  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'Business Services (Vending & Catering)' },
    { label: 'Duration', value: '7 months' },
    { label: 'Team', value: '1 Vice President' },
    { label: 'Services', value: 'Sell-Side Readiness, FP&A, Transaction DD' },
  ],
  situationTitle: 'A sale stalled for over a year',
  situationIntro: 'A PE-backed vending and catering company had spent a year trying to sell, but the process had stalled: an understaffed finance department, fragmented legacy systems, and incomplete post-acquisition integrations meant the company simply couldn\u2019t present itself to the market with confidence.',
  challenges: [
    { title: 'Understaffed finance department', desc: 'Too few people to run the business and feed a diligence process at once.' },
    { title: 'Fragmented legacy systems', desc: 'Data scattered across systems that didn\u2019t talk to each other.' },
    { title: 'Incomplete integrations', desc: 'Prior acquisitions never fully folded into the reporting stack.' },
    { title: 'No confident market story', desc: 'A year of banker effort undermined by data the company couldn\u2019t stand behind.' },
  ],
  approachTitle: 'Six analyses. One clear story.',
  steps: [
    { title: 'Site Conversion Analysis', desc: 'Examined conversions of vending locations to higher-revenue full-service cafeterias — conversion economics, ranked non-converted sites by potential, and the value-creation runway from continued conversions.' },
    { title: 'Same Store Growth Review', desc: 'Cohort analyses of multi-year revenue growth at established locations, demonstrating the strategic shift toward higher-margin, recession-resistant cafeteria services.' },
    { title: 'Pricing, Volume & Mix Analysis', desc: 'Isolated growth drivers — proving customer-count expansion, not just price increases, fueled the top line. A key indicator of business health for buyers.' },
    { title: 'CapEx ROI Assessment', desc: 'Evaluated returns on conversion buildouts and equipment, showing capital investments generated attractive returns and supported the growth strategy.' },
    { title: 'Staffing Profitability Analysis', desc: 'Allocated personnel costs to business units and regions to identify optimal staffing and margin-improvement opportunities.' },
    { title: 'Route Effectiveness Review', desc: 'Analyzed logistics efficiency and built a roadmap for integrating acquired locations into the route structure — cost savings and synergies quantified.' },
  ],
  impactTitle: 'Closed in seven months.',
  impactText: 'The sale that had stalled for over a year closed within seven months of our engagement. Structured analysis transformed disorganized financial data into a compelling business narrative — management answered buyer questions confidently, and the investment bank returned to executing the transaction instead of remediating data.',
  stats: [
    { value: '7 mo', label: 'From stalled to closed' },
    { value: '6', label: 'Targeted analytical workstreams' },
    { value: '1 yr', label: 'Prior stall overcome' },
  ],
  ctaTitle: 'Facing data challenges in your exit?',
  ctaText: 'Don\u2019t let disorganized data derail your transaction. Let\u2019s discuss how we can help.',
  ctaSubject: 'Sell-Side%20Readiness%20Inquiry',
  relatedTo: '/services/sell-side-readiness',
  relatedLabel: 'Related Service: Sell-Side Readiness',
};

export default function DataChallengedCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
