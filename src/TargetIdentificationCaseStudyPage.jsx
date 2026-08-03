import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Corporate Development',
  backTo: '/case-studies/corporate-development',
  backLabel: 'Corporate Development Case Studies',
  title: 'Building an Acquisition Roadmap',
  standfirst: 'Target identification for a PE-backed consulting firm seeking growth through acquisitions.',
  image: 'https://images.squarespace-cdn.com/content/v1/67a3d67b7ec4550695844db8/1741738068173-OFGOTPZGCUD0UQ05C3QO/unsplash-image-FVwG5OzPuzo.jpg?format=2500w',
  meta: [
    { label: 'Industry', value: 'Consulting & Business Services' },
    { label: 'Duration', value: '2 months' },
    { label: 'Team', value: '1 Director, 1 Vice President' },
    { label: 'Services', value: 'Corporate Development' },
  ],
  situationTitle: 'An appetite for deals with no map of the market',
  situationIntro: 'A PE-backed consulting firm wanted to grow through acquisitions but lacked a clear picture of the investment universe: no systematic targeting approach, no way to prioritize opportunities, and no repeatable framework to move efficiently when the right target appeared.',
  challenges: [
    { title: 'No systematic targeting', desc: 'Sourcing was ad hoc and relationship-driven.' },
    { title: 'No prioritization', desc: 'Every opportunity looked equally plausible — and equally unactionable.' },
    { title: 'No deal velocity', desc: 'Without a framework, evaluation stalled and targets moved on.' },
    { title: 'No repeatability', desc: 'Each evaluation started from zero.' },
  ],
  approachTitle: 'From a universe to a shortlist.',
  steps: [
    { title: 'Developed a Comprehensive Market Map', desc: 'Built the broad initial target universe, refined through stakeholder feedback and multiple iterations.' },
    { title: 'Enriched Data for Target Evaluation', desc: 'Used public data to estimate firm size, revenue potential, and valuation ranges from headcount and positioning; service offerings assessed for synergy and competitive fit.' },
    { title: 'Refined the Acquisition Criteria', desc: 'Clarified the thesis — new service lines vs. overlapping expertise to expand the customer base.' },
    { title: 'Talent Pool & Expertise Analysis', desc: 'Analyzed target-firm bios to evaluate workforce complementarity and gaps in high-value services.' },
    { title: 'Client Base & Positioning', desc: 'Reviewed case studies and marketing materials to assess client overlap and positioning fit.' },
    { title: 'Target Ranking & Prioritization', desc: 'A scoring system across geography, client alignment, service compatibility, and size — producing a high-priority shortlist.' },
    { title: 'Facilitated Initial Outreach', desc: 'Detailed profiles on each target so the client entered first conversations prepared.' },
  ],
  impactTitle: 'A living pipeline, not a one-off list.',
  impactText: 'The firm gained a clear view of the market landscape and a refined long-term acquisition strategy. Specific guidance on preferred target types focused the investment list for deeper diligence — and the target universe now serves as a standing resource for competitive intelligence and M&A planning.',
  stats: [
    { value: '7', label: 'Step targeting framework' },
    { value: '1', label: 'Prioritized acquisition pipeline' },
    { value: 'Ongoing', label: 'Competitive-intelligence resource' },
  ],
  ctaTitle: 'Looking to build your acquisition pipeline?',
  ctaText: 'Let\u2019s discuss how we can help identify and prioritize your targets.',
  ctaSubject: 'Corporate%20Development%20Inquiry',
  relatedTo: '/services/corporate-development',
  relatedLabel: 'Related Service: Corporate Development',
};

export default function TargetIdentificationCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
