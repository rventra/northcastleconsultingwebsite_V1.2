import React from 'react';
import CaseStudyLayout from './components/CaseStudyLayout.jsx';

const data = {
  category: 'Dashboarding & Reporting',
  backTo: '/case-studies/dashboarding-reporting',
  backLabel: 'Dashboarding & Reporting Case Studies',
  title: 'Driving PE Value Through Operational Visibility',
  standfirst: 'Transforming a $100M manufacturer from zero data visibility to automated, enterprise-grade dashboards.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
  meta: [
    { label: 'Industry', value: 'Manufacturing' },
    { label: 'Revenue', value: '$100M' },
    { label: 'Duration', value: 'Multi-phase (extended 3x)' },
    { label: 'Services', value: 'Dashboarding & Reporting, Data Architecture' },
  ],
  situationTitle: '40,000 SKUs and no idea what made money',
  situationIntro: 'A PE-backed $100M manufacturer had no ERP, limited Excel usage, and no centralized reporting. With 40,000+ SKUs lacking a product hierarchy, leadership had no visibility into margins, win rates, or operational performance — and needed outside consultants just to read their own data.',
  challenges: [
    { title: 'No ERP system', desc: 'The system of record was a patchwork of spreadsheets.' },
    { title: '40,000+ SKUs without hierarchy', desc: 'No way to roll parts up into products, families, or margin views.' },
    { title: '5+ hours of manual monthly reporting', desc: 'KPIs assembled by hand, every month, always late.' },
    { title: 'Zero margin visibility', desc: 'Win rates, quoted-vs-unquoted margins, and ops performance unknown.' },
  ],
  approachTitle: 'From zero visibility to enterprise dashboards.',
  steps: [
    { title: 'Automated Performance Reporting', desc: 'Replaced manual processes with automated Power BI dashboards across commercial, financial, and operational KPIs; Python scripts eliminated outside-consultant dependence; monthly Management Business Review delivered to executives and sponsor.' },
    { title: 'Win/Loss & Commercial Analysis', desc: 'Win/loss tracking, quote pipeline aging, and quoted-vs-unquoted margin analysis from never-before-analyzed data — tailored dashboards for ops, sales, and procurement tied to the value-creation plan.' },
    { title: 'Data Architecture & ERP Integration', desc: 'Unified pipeline bridging historical Excel with the new ERP; fuzzy-matched 40,000+ part numbers into a product hierarchy; post-go-live Microsoft Fabric Lakehouse with daily API pulls and bronze-to-gold governance.' },
    { title: 'Board Reporting & Knowledge Transfer', desc: 'Monthly board-ready outputs, training guides with videos, and full documentation — so the internal team owns the system after we leave.' },
  ],
  impactTitle: 'The dashboards rewrote a core assumption.',
  impactText: 'Every functional team received tailored views tied to the value-creation plan. Management had believed quoted work carried lower margins than emergency unquoted jobs — the dashboards proved the opposite. Leadership retrained sales on emergency quoting, unquoted margins improved dramatically, and EBITDA lifted directly. The engagement was extended three times, and the sponsor explored replicating the model across the portfolio.',
  stats: [
    { value: '40,000+', label: 'SKUs mapped into product hierarchy' },
    { value: '3\u00d7', label: 'Engagement extended on impact' },
    { value: 'EBITDA', label: 'Lifted by reversed margin assumption' },
  ],
  ctaTitle: 'Ready to unlock your data\u2019s potential?',
  ctaText: 'Let\u2019s discuss how our dashboarding approach can transform visibility into value.',
  ctaSubject: 'Dashboarding%20Inquiry',
  relatedTo: '/services/dashboarding-data-portal',
  relatedLabel: 'Related Service: Dashboarding & Data Portal',
};

export default function DashboardingCaseStudyPage() {
  return <CaseStudyLayout data={data} />;
}
