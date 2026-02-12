#!/usr/bin/env python3
"""
Create North Castle Consulting QoE Service Overview PDF
"""

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, ListFlowable, ListItem
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing
from reportlab.graphics.charts.textlabels import Label

def create_qoe_overview():
    doc = SimpleDocTemplate(
        "documents/NorthCastle_QoE_Service_Overview.pdf",
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=28,
        textColor=colors.HexColor('#051c2c'),
        spaceAfter=12,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=14,
        textColor=colors.HexColor('#475569'),
        spaceAfter=30,
        fontName='Helvetica-Oblique'
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#051c2c'),
        spaceBefore=20,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.HexColor('#334155'),
        spaceAfter=10,
        leading=16,
        alignment=TA_JUSTIFY
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#334155'),
        leftIndent=20,
        spaceAfter=6,
        leading=14
    )
    
    # Build content
    story = []
    
    # Header
    story.append(Paragraph("North Castle Consulting", subtitle_style))
    story.append(Paragraph("Quality of Earnings", title_style))
    story.append(Paragraph("Service Overview", subtitle_style))
    story.append(Spacer(1, 0.3*inch))
    
    # Executive Summary
    story.append(Paragraph("Executive Summary", heading_style))
    story.append(Paragraph(
        "North Castle Consulting delivers AI-accelerated Quality of Earnings (QoE) analysis "
        "for middle-market transactions. We combine deep financial expertise with proprietary "
        "AI agents and secure AWS infrastructure to deliver institutional-grade due diligence "
        "in a fraction of the time and cost of traditional firms.",
        body_style
    ))
    story.append(Spacer(1, 0.2*inch))
    
    # The Problem
    story.append(Paragraph("The Challenge", heading_style))
    story.append(Paragraph(
        "In M&A transactions, reported earnings often mask the true economic reality of a business. "
        "Buyers risk overpaying based on inflated numbers. Sellers miss opportunities to present "
        "their business in the best light. Traditional QoE processes take 4-6 weeks and cost "
        "$75,000-$150,000+, creating friction in fast-moving deals.",
        body_style
    ))
    story.append(Spacer(1, 0.2*inch))
    
    # Our Solution
    story.append(Paragraph("Our Solution: AI-Accelerated QoE", heading_style))
    story.append(Paragraph(
        "We deploy specialized AI agents orchestrated through secure AWS Data Rooms to analyze "
        "100% of transaction data—not samples. Our seven-component framework examines every "
        "aspect of earnings quality, from EBITDA normalization to revenue sustainability to "
        "hidden liability detection.",
        body_style
    ))
    story.append(Spacer(1, 0.1*inch))
    
    # Page break
    story.append(PageBreak())
    
    # The 7 Components
    story.append(Paragraph("The QoE Framework: 7 Core Components", heading_style))
    story.append(Spacer(1, 0.1*inch))
    
    components = [
        ("1. Adjusted EBITDA Bridge", 
         "Comprehensive earnings normalization from reported to sustainable cash flow. "
         "Includes expense add-backs, revenue adjustments, operational normalizations, and run-rate adjustments."),
        ("2. Revenue Quality Assessment", 
         "Five-tier taxonomy from contracted recurring to windfall/spot market. "
         "Identifies concentration risk and assesses revenue sustainability."),
        ("3. Working Capital Deep Dive", 
         "DSO/DIO/DPO analysis with manipulation detection algorithms. "
         "Identifies window dressing and calculates true NWC requirements."),
        ("4. Cash Flow Reconciliation", 
         "Net income to free cash flow bridge with variance analysis. "
         "Compares adjusted EBITDA to operating cash flow for quality verification."),
        ("5. Add-Back Validation", 
         "Confidence scoring framework—high, medium, low evidence tiers. "
         "Separates defensible adjustments from aggressive assumptions."),
        ("6. Management Q&A", 
         "Targeted questions based on analytical findings. "
         "Interview preparation, real-time follow-ups, and documentation."),
        ("7. Deliverables & Data Room Index", 
         "Interactive dashboard, comprehensive written report, and cross-referenced documentation. "
         "Every finding linked to source documents for instant verification.")
    ]
    
    for title, desc in components:
        story.append(Paragraph(f"<b>{title}</b>", bullet_style))
        story.append(Paragraph(desc, bullet_style))
        story.append(Spacer(1, 0.05*inch))
    
    story.append(PageBreak())
    
    # AI Agents
    story.append(Paragraph("AI Agent Deployment", heading_style))
    story.append(Paragraph(
        "Each engagement leverages specialized AI agents that accelerate analysis while "
        "maintaining forensic rigor:",
        body_style
    ))
    story.append(Spacer(1, 0.1*inch))
    
    sell_side_agents = [
        ("Add-Back Discovery Agent", "Scans GL for owner perks, related-party transactions, one-time expenses"),
        ("Revenue Normalization Agent", "Classifies revenue by tier, identifies patterns, flags non-recurring items"),
        ("CIM Prep Agent", "Generates recast financials, adjustment bridges, and data room indexes")
    ]
    
    buy_side_agents = [
        ("Transaction Forensics Agent", "Analyzes complete transaction populations for anomalies and red flags"),
        ("Working Capital Detective", "Detects window dressing and calculates true NWC requirements"),
        ("Hidden Liability Hunter", "Surfaces unrecorded obligations and off-balance-sheet exposures")
    ]
    
    story.append(Paragraph("<b>Sell-Side Agents</b>", bullet_style))
    for name, desc in sell_side_agents:
        story.append(Paragraph(f"• <b>{name}:</b> {desc}", bullet_style))
    story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("<b>Buy-Side Agents</b>", bullet_style))
    for name, desc in buy_side_agents:
        story.append(Paragraph(f"• <b>{name}:</b> {desc}", bullet_style))
    
    story.append(PageBreak())
    
    # Engagement Types
    story.append(Paragraph("Engagement Types", heading_style))
    story.append(Spacer(1, 0.1*inch))
    
    # Create comparison table
    data = [
        ['', 'Sell-Side (VDD)', 'Buy-Side (CDD)'],
        ['Timing', '6-12 months pre-market', 'Post-LOI, 30-45 day window'],
        ['Objective', 'Maximize valuation', 'Validate & protect'],
        ['Key Activities', 'Pre-process financials, document adjustments', 'Stress-test assumptions, find red flags'],
        ['Deliverable', 'Recast financials for CIM', 'Price reduction ammo, NWC true-ups']
    ]
    
    table = Table(data, colWidths=[1.5*inch, 2.25*inch, 2.25*inch])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#051c2c')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#f8fafc')),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#e2e8f0')),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(table)
    story.append(Spacer(1, 0.3*inch))
    
    # Why North Castle
    story.append(Paragraph("Why North Castle Consulting", heading_style))
    story.append(Spacer(1, 0.1*inch))
    
    differentiators = [
        ("Speed", "Deliverables in days, not weeks"),
        ("Cost", "Fraction of Big 4 pricing, flat-fee options available"),
        ("Technology", "Proprietary AI agents + secure AWS infrastructure"),
        ("Coverage", "100% transaction analysis, not sampling"),
        ("Experience", "Deep middle-market expertise across industries")
    ]
    
    for title, desc in differentiators:
        story.append(Paragraph(f"<b>{title}:</b> {desc}", bullet_style))
    
    story.append(PageBreak())
    
    # Contact
    story.append(Paragraph("Get Started", heading_style))
    story.append(Spacer(1, 0.1*inch))
    story.append(Paragraph(
        "Whether you're preparing for sale or evaluating a target, we provide the forensic "
        "analysis to support confident decisions.",
        body_style
    ))
    story.append(Spacer(1, 0.2*inch))
    
    contact_info = [
        ("Website", "www.northcastleconsulting.com"),
        ("Email", "admin@northcastleconsulting.com"),
        ("Schedule", "calendly.com/northcastleconsulting/qoe-consultation")
    ]
    
    for label, value in contact_info:
        story.append(Paragraph(f"<b>{label}:</b> {value}", body_style))
    
    story.append(Spacer(1, 0.4*inch))
    
    # Footer note
    story.append(Paragraph(
        "<i>All engagements operate within SOC 2-compliant AWS environments with full audit trails. "
        "No data leaves your control. No black-box algorithms—every finding is traceable to source documents.</i>",
        ParagraphStyle('Footer', parent=body_style, fontSize=9, textColor=colors.HexColor('#64748b'))
    ))
    
    # Build PDF
    doc.build(story)
    print("PDF created successfully: documents/NorthCastle_QoE_Service_Overview.pdf")

if __name__ == "__main__":
    create_qoe_overview()
