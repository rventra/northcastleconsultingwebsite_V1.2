#!/usr/bin/env python3
"""
Create North Castle Consulting QoE Marketing Guide PDF
Professional, sales-focused document with website branding
"""

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.pdfgen import canvas

# Brand Colors
NAVY = colors.HexColor('#051c2c')
BRIGHT_BLUE = colors.HexColor('#2563EB')
AMBER = colors.HexColor('#EDB624')
SLATE = colors.HexColor('#475569')
LIGHT_GRAY = colors.HexColor('#F5F5F5')

def create_qoe_marketing_guide():
    doc = SimpleDocTemplate(
        "documents/NorthCastle_QoE_Guide.pdf",
        pagesize=letter,
        rightMargin=0.6*inch,
        leftMargin=0.6*inch,
        topMargin=0.6*inch,
        bottomMargin=0.6*inch
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    cover_title = ParagraphStyle(
        'CoverTitle',
        fontSize=42,
        textColor=NAVY,
        spaceAfter=12,
        fontName='Helvetica-Bold',
        alignment=TA_CENTER,
        leading=48
    )
    
    cover_subtitle = ParagraphStyle(
        'CoverSubtitle',
        fontSize=18,
        textColor=SLATE,
        spaceAfter=30,
        fontName='Helvetica-Oblique',
        alignment=TA_CENTER
    )
    
    section_header = ParagraphStyle(
        'SectionHeader',
        fontSize=22,
        textColor=NAVY,
        spaceBefore=24,
        spaceAfter=12,
        fontName='Helvetica-Bold',
        borderWidth=0,
        borderColor=AMBER,
        borderPadding=5
    )
    
    component_title = ParagraphStyle(
        'ComponentTitle',
        fontSize=16,
        textColor=BRIGHT_BLUE,
        spaceBefore=16,
        spaceAfter=6,
        fontName='Helvetica-Bold'
    )
    
    body_text = ParagraphStyle(
        'BodyText',
        fontSize=11,
        textColor=colors.HexColor('#334155'),
        spaceAfter=10,
        leading=16,
        alignment=TA_JUSTIFY
    )
    
    bullet_text = ParagraphStyle(
        'BulletText',
        fontSize=10,
        textColor=colors.HexColor('#334155'),
        leftIndent=15,
        spaceAfter=5,
        leading=14
    )
    
    highlight_box = ParagraphStyle(
        'HighlightBox',
        fontSize=11,
        textColor=NAVY,
        spaceBefore=10,
        spaceAfter=10,
        leading=16,
        backColor=colors.HexColor('#FEF3C7'),
        borderPadding=10
    )
    
    # Build content
    story = []
    
    # ============ COVER PAGE ============
    story.append(Spacer(1, 2*inch))
    
    # Logo area (text-based)
    story.append(Paragraph("NORTH CASTLE", ParagraphStyle('Logo', fontSize=14, textColor=SLATE, alignment=TA_CENTER, fontName='Helvetica-Bold', tracking=3)))
    story.append(Paragraph("CONSULTING", ParagraphStyle('Logo2', fontSize=14, textColor=SLATE, alignment=TA_CENTER, fontName='Helvetica-Bold', tracking=3)))
    story.append(Spacer(1, 0.8*inch))
    
    # Main title
    story.append(Paragraph("Quality of Earnings", cover_title))
    story.append(Paragraph("The Complete Guide", ParagraphStyle('Guide', fontSize=28, textColor=NAVY, alignment=TA_CENTER, fontName='Helvetica-Bold')))
    story.append(Spacer(1, 0.3*inch))
    
    story.append(Paragraph("A Strategic Framework for M&A Due Diligence", cover_subtitle))
    story.append(Spacer(1, 0.5*inch))
    
    # Amber accent line
    story.append(HRFlowable(width=3*inch, thickness=3, color=AMBER, spaceBefore=20, spaceAfter=20, hAlign='CENTER'))
    story.append(Spacer(1, 0.3*inch))
    
    story.append(Paragraph("AI-Accelerated Analysis • Secure AWS Infrastructure • Faster Deliverables", 
                          ParagraphStyle('Tagline', fontSize=12, textColor=SLATE, alignment=TA_CENTER, fontName='Helvetica')))
    
    story.append(Spacer(1, 1.5*inch))
    
    # Contact on cover
    story.append(Paragraph("northcastleconsulting.com", ParagraphStyle('Contact', fontSize=11, textColor=SLATE, alignment=TA_CENTER)))
    
    story.append(PageBreak())
    
    # ============ PAGE 2: INTRODUCTION ============
    story.append(Paragraph("What is Quality of Earnings?", section_header))
    story.append(HRFlowable(width=100, thickness=2, color=AMBER, spaceBefore=5, spaceAfter=15))
    
    story.append(Paragraph(
        "Quality of Earnings (QoE) analysis is forensic financial due diligence that separates "
        "sustainable, cash-based earnings from accounting artifacts and one-time events. It answers "
        "the critical question every buyer and seller must know: <b>Will these earnings persist under new ownership?</b>",
        body_text
    ))
    
    story.append(Paragraph(
        "Unlike a financial statement audit, which confirms historical accuracy, QoE looks forward. "
        "It identifies add-backs, adjustments, and risk factors that materially impact valuation.",
        body_text
    ))
    
    story.append(Spacer(1, 0.2*inch))
    
    # Highlight box
    story.append(Paragraph(
        "<b>When You Need QoE:</b> Selling a business • Buying a company • Private equity investments "
        "• Sponsor-backed transactions • Family succession planning • Management buyouts",
        highlight_box
    ))
    
    story.append(Spacer(1, 0.2*inch))
    
    story.append(Paragraph("Traditional vs. AI-Accelerated QoE", section_header))
    
    # Comparison table
    data = [
        ['Dimension', 'Traditional QoE', 'North Castle AI QoE'],
        ['Timeline', '4-6 weeks', 'Days to weeks'],
        ['Data Analysis', 'Sample-based', '100% transaction review'],
        ['Cost Structure', 'Premium pricing', 'Fraction of traditional cost'],
        ['Deliverable Speed', 'Months', 'Accelerated with AI agents'],
        ['Technology', 'Spreadsheets & manual review', 'AWS infrastructure + AI automation']
    ]
    
    table = Table(data, colWidths=[1.4*inch, 2*inch, 2.4*inch])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('BACKGROUND', (0, 1), (-1, -1), colors.white),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E5E7EB')),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(table)
    
    story.append(PageBreak())
    
    # ============ PAGE 3: THE 7 COMPONENTS ============
    story.append(Paragraph("The QoE Framework: 7 Core Components", section_header))
    story.append(HRFlowable(width=100, thickness=2, color=AMBER, spaceBefore=5, spaceAfter=15))
    
    story.append(Paragraph(
        "Our comprehensive approach examines every dimension of earnings quality through seven "
        "interconnected components. Each component builds on the others to create a complete picture "
        "of financial reality.",
        body_text
    ))
    story.append(Spacer(1, 0.1*inch))
    
    # Component 1
    story.append(Paragraph("1. Adjusted EBITDA Bridge", component_title))
    story.append(Paragraph(
        "Transform reported EBITDA into sustainable cash flow by normalizing for non-recurring items, "
        "accounting anomalies, and operational distortions.",
        body_text
    ))
    story.append(Paragraph("• <b>Expense Add-Backs (+):</b> Owner compensation, personal expenses, one-time costs", bullet_text))
    story.append(Paragraph("• <b>Revenue Adjustments (−):</b> Asset sales, insurance recoveries, non-recurring revenue", bullet_text))
    story.append(Paragraph("• <b>Operational Normalizations (±):</b> Rent adjustments, deferred maintenance, inventory", bullet_text))
    story.append(Paragraph("• <b>Run-Rate Adjustments (±):</b> New contracts, lost customers, recent hires", bullet_text))
    
    # Component 2
    story.append(Paragraph("2. Revenue Quality Assessment", component_title))
    story.append(Paragraph(
        "Not all revenue is equal. We apply a five-tier taxonomy to assess sustainability and "
        "identify concentration risks that threaten future earnings.",
        body_text
    ))
    story.append(Paragraph("• <b>Tier 1:</b> Recurring Contracted (90%+ renewal rates) — SaaS, multi-year agreements", bullet_text))
    story.append(Paragraph("• <b>Tier 2:</b> Sticky Repeat Business — Industrial consumables, trade relationships", bullet_text))
    story.append(Paragraph("• <b>Tier 3:</b> Project-Based with Backlog — AEC, government (12-24 month visibility)", bullet_text))
    story.append(Paragraph("• <b>Tier 4:</b> One-Time Project — Custom implementations, event-driven", bullet_text))
    story.append(Paragraph("• <b>Tier 5:</b> Windfall/Spot Market — Commodity, distressed sales (unpredictable)", bullet_text))
    
    story.append(PageBreak())
    
    # ============ PAGE 4: COMPONENTS 3-5 ============
    story.append(Paragraph("3. Working Capital Deep Dive", component_title))
    story.append(Paragraph(
        "Analyze DSO, DIO, and DPO trends to identify window dressing, artificial cash flow boosts, "
        "and true net working capital requirements.",
        body_text
    ))
    story.append(Paragraph("• DSO (Days Sales Outstanding): Avg A/R / Revenue × 365", bullet_text))
    story.append(Paragraph("• DIO (Days Inventory Outstanding): Avg Inventory / COGS × 365", bullet_text))
    story.append(Paragraph("• DPO (Days Payable Outstanding): Avg A/P / COGS × 365", bullet_text))
    story.append(Paragraph("• Cash Conversion Cycle: DSO + DIO − DPO", bullet_text))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("4. Cash Flow Reconciliation", component_title))
    story.append(Paragraph(
        "Bridge net income to free cash flow and compare Adjusted EBITDA − CapEx to Operating Cash Flow. "
        "Variance analysis reveals timing differences versus structural issues.",
        body_text
    ))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("5. Add-Back Validation", component_title))
    story.append(Paragraph(
        "Confidence scoring separates defensible adjustments from aggressive assumptions. Every add-back "
        "is evaluated against documented evidence.",
        body_text
    ))
    story.append(Paragraph("• <b>High Confidence:</b> Court records, salary surveys, signed agreements", bullet_text))
    story.append(Paragraph("• <b>Medium Confidence:</b> Appraisals, inspections, offer letters", bullet_text))
    story.append(Paragraph("• <b>Excluded:</b> Synergies, pipeline projections, growth assumptions", bullet_text))
    
    story.append(PageBreak())
    
    # ============ PAGE 5: COMPONENTS 6-7 + AI AGENTS ============
    story.append(Paragraph("6. Management Q&A", component_title))
    story.append(Paragraph(
        "Targeted interviews based on analytical findings. We develop questions from specific anomalies, "
        "prepare management for buyer interviews, and document all responses.",
        body_text
    ))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("7. Deliverables & Data Room Index", component_title))
    story.append(Paragraph(
        "Comprehensive output including interactive dashboards, written reports, and a complete data room "
        "index cross-referencing every finding to source documents.",
        body_text
    ))
    story.append(Paragraph("• Executive dashboard with EBITDA waterfall visualization", bullet_text))
    story.append(Paragraph("• Comprehensive written report with risk matrix", bullet_text))
    story.append(Paragraph("• Complete data room index with audit trail", bullet_text))
    story.append(Paragraph("• Instant verification through document linking", bullet_text))
    
    story.append(Spacer(1, 0.2*inch))
    story.append(HRFlowable(width=100, thickness=1, color=SLATE, spaceBefore=10, spaceAfter=10))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("AI Agent Technology", section_header))
    story.append(Paragraph(
        "Our proprietary AI agents accelerate analysis while maintaining forensic rigor. Each agent "
        "is specialized for specific QoE tasks:",
        body_text
    ))
    
    story.append(Paragraph("<b>Sell-Side Agents:</b>", bullet_text))
    story.append(Paragraph("• Add-Back Discovery — Scans GL for owner perks and one-time expenses", bullet_text))
    story.append(Paragraph("• Revenue Normalization — Classifies revenue by tier and quality", bullet_text))
    story.append(Paragraph("• CIM Prep — Generates recast financials and data room index", bullet_text))
    
    story.append(Paragraph("<b>Buy-Side Agents:</b>", bullet_text))
    story.append(Paragraph("• Transaction Forensics — Analyzes complete transaction populations", bullet_text))
    story.append(Paragraph("• Working Capital Detective — Identifies window dressing patterns", bullet_text))
    story.append(Paragraph("• Hidden Liability Hunter — Surfaces unrecorded obligations", bullet_text))
    
    story.append(PageBreak())
    
    # ============ PAGE 6: ENGAGEMENT TYPES + WHY US ============
    story.append(Paragraph("Engagement Types", section_header))
    story.append(HRFlowable(width=100, thickness=2, color=AMBER, spaceBefore=5, spaceAfter=15))
    
    # Two column layout for engagement types
    story.append(Paragraph("<b>Sell-Side (Vendor Due Diligence)</b>", component_title))
    story.append(Paragraph(
        "6-12 months pre-market. Maximize valuation by identifying and documenting every favorable "
        "adjustment before buyers arrive. Control the narrative.",
        body_text
    ))
    
    story.append(Paragraph("<b>Buy-Side (Confirmatory Due Diligence)</b>", component_title))
    story.append(Paragraph(
        "Post-LOI, during 30-45 day exclusivity. Validate investment thesis, stress-test assumptions, "
        "and surface red flags. Protect your investment.",
        body_text
    ))
    
    story.append(Spacer(1, 0.2*inch))
    story.append(HRFlowable(width=100, thickness=1, color=SLATE, spaceBefore=10, spaceAfter=10))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("Why North Castle Consulting?", section_header))
    
    story.append(Paragraph("<b>Speed Without Compromise</b>", component_title))
    story.append(Paragraph(
        "AI-accelerated analysis delivers institutional-grade QoE in days, not weeks. Same forensic "
        "rigor, exponentially faster execution.",
        body_text
    ))
    
    story.append(Paragraph("<b>Cost Efficiency</b>", component_title))
    story.append(Paragraph(
        "Mid-market deals deserve Big 4 quality without Big 4 pricing. Transparent flat-fee options available.",
        body_text
    ))
    
    story.append(Paragraph("<b>Security & Transparency</b>", component_title))
    story.append(Paragraph(
        "SOC 2-compliant AWS infrastructure. Complete audit trails. Client portal for file tracking, "
        "uploads, and downloads. Every access logged.",
        body_text
    ))
    
    story.append(Paragraph("<b>Middle-Market Focus</b>", component_title))
    story.append(Paragraph(
        "We understand the unique dynamics of family-owned businesses, sponsor-backed companies, "
        "and founder-led enterprises.",
        body_text
    ))
    
    story.append(PageBreak())
    
    # ============ PAGE 7: CALL TO ACTION ============
    story.append(Spacer(1, 1*inch))
    
    story.append(Paragraph("Ready to Validate Earnings Quality?", 
                          ParagraphStyle('CTA', fontSize=26, textColor=NAVY, alignment=TA_CENTER, fontName='Helvetica-Bold')))
    story.append(Spacer(1, 0.3*inch))
    
    story.append(Paragraph(
        "Whether you're preparing for sale or evaluating a target, we provide the forensic analysis "
        "to support confident decisions.",
        ParagraphStyle('CTABody', fontSize=12, textColor=SLATE, alignment=TA_CENTER, leading=18)
    ))
    
    story.append(Spacer(1, 0.5*inch))
    story.append(HRFlowable(width=2*inch, thickness=3, color=AMBER, spaceBefore=10, spaceAfter=30, hAlign='CENTER'))
    
    # Contact info
    story.append(Paragraph("<b>North Castle Consulting</b>", 
                          ParagraphStyle('ContactTitle', fontSize=14, textColor=NAVY, alignment=TA_CENTER, fontName='Helvetica-Bold')))
    story.append(Spacer(1, 0.2*inch))
    story.append(Paragraph("northcastleconsulting.com", ParagraphStyle('Contact', fontSize=12, textColor=SLATE, alignment=TA_CENTER)))
    story.append(Paragraph("admin@northcastleconsulting.com", ParagraphStyle('Contact', fontSize=12, textColor=SLATE, alignment=TA_CENTER)))
    story.append(Spacer(1, 0.2*inch))
    story.append(Paragraph("Schedule: calendly.com/rventrapragada-northcastleconsulting/qoe-consultation", 
                          ParagraphStyle('Contact', fontSize=11, textColor=BRIGHT_BLUE, alignment=TA_CENTER)))
    
    story.append(Spacer(1, 0.8*inch))
    
    # Footer
    story.append(HRFlowable(width=5*inch, thickness=0.5, color=colors.HexColor('#E5E7EB'), spaceBefore=20, spaceAfter=10, hAlign='CENTER'))
    story.append(Paragraph(
        "All engagements operate within SOC 2-compliant AWS environments. "
        "No black-box algorithms—every finding is traceable to source documents.",
        ParagraphStyle('Footer', fontSize=9, textColor=colors.HexColor('#9CA3AF'), alignment=TA_CENTER)
    ))
    
    # Build PDF
    doc.build(story)
    print("PDF created successfully: documents/NorthCastle_QoE_Guide.pdf")

if __name__ == "__main__":
    create_qoe_marketing_guide()
