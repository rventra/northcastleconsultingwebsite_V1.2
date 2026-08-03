import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Sell-Side Readiness',
  backTo: '/case-studies/sell-side-readiness',
  backLabel: 'Sell-Side Readiness Case Studies',
  title: 'Streamlining Operations & Marketing Insights for a Successful Exit',
  standfirst: 'Comprehensive data analysis for a private equity-owned HVAC and plumbing company preparing for sale.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'HVAC & Plumbing / Consumer Services' },
    { label: 'Duration', value: '6 months' },
    { label: 'Team', value: '1 Managing Director, 1 Vice President' },
    { label: 'Services', value: 'Sell-Side Readiness, FP&A Support' },
  ],
  situationTitle: 'Buyers wanted proof, not anecdotes',
  situationIntro: 'A PE-owned HVAC and plumbing company was preparing to go to market, but potential buyers required sharp, documented insights: where revenue really came from, whether marketing worked, how efficiently operations ran, and what the true value drivers were.',
  challenges: [
    { title: 'Revenue opacity', desc: 'No sharp view across service lines, brands, and geographies.' },
    { title: 'Unproven marketing', desc: 'Ad spend with no measured link to revenue.' },
    { title: 'Efficiency unknowns', desc: 'Technician productivity and fleet utilization never quantified.' },
    { title: 'Undocumented value drivers', desc: 'The equity story lived in anecdotes, not analysis.' },
  ],
  approachTitle: 'Revenue. Marketing. Operations.',
  steps: [
    { title: 'Revenue Analysis', desc: 'Segmented revenue by offering, type, brand, customer, geography, product, and SKU; full pricing-volume-mix analysis; repeat-customer, maintenance-renewal, and retention metrics to prove recurring-revenue quality.' },
    { title: 'Marketing & Advertising Analysis', desc: 'Revenue by lead source, channel, and brand; spend effectiveness by channel; and the alignment between marketing efforts and revenue-generating jobs.' },
    { title: 'Operations Analysis', desc: 'Employee census with roles, salaries, and bonuses; technician turnover, revenue per technician and per truck; fleet utilization; supplier and financing-partner impact on customer purchasing.' },
  ],
  impactTitle: 'A sale navigated with confidence.',
  impactText: 'The company navigated the sale with comprehensive, ready answers for every buyer question. Clear visibility into revenue streams, operational metrics, and marketing effectiveness demonstrated the company\u2019s value — and the detailed insights facilitated a successful transaction with buyers fully understanding the strengths and opportunities.',
  stats: [
    { value: '3', label: 'Analytical pillars delivered' },
    { value: '6 mo', label: 'To diligence-ready' },
    { value: 'Sold', label: 'Successful transaction' },
  ],
  ctaTitle: 'Preparing your business for sale?',
  ctaText: 'Let\u2019s discuss how we can help you demonstrate value and attract buyers.',
  ctaSubject: 'Sell-Side%20Readiness%20Inquiry',
  relatedTo: '/services/sell-side-readiness',
  relatedLabel: 'Related Service: Sell-Side Readiness',
};

export default function StreamliningOperationsCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
