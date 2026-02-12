# North Castle Consulting Website - Project Context

**Project:** North Castle Consulting Website + QoE Service Offering  
**Tech Stack:** React + Vite + Tailwind CSS + AWS Amplify  
**Last Updated:** February 12, 2026  

---

## Quick Reference

| Item | Value |
|------|-------|
| Live URL | https://northcastleconsulting.com |
| QoE Service Page | /services/quality-of-earnings |
| AWS Region | us-east-2 |
| AWS Profile | northcastle |
| Framework | React + Vite |
| Styling | Tailwind CSS |

---

## Quality of Earnings (QoE) Framework

This project includes a complete QoE service offering with the following 7 components:

### The 7 Core Components
```
1. Adjusted EBITDA Bridge (1a, 1b, 1c, 1d)
2. Revenue Quality Assessment (2a, 2b)
3. Working Capital Deep Dive (3a, 3b)
4. Cash Flow Reconciliation (4a, 4b)
5. Add-Back Validation (5a, 5b, 5c)
6. Management Q&A (6a, 6b)
7. Deliverables & Data Room Index (7a, 7b, 7c)
```

### Component Summaries

**1. Adjusted EBITDA Bridge** - Earnings normalization
- 1a: Expense Add-Backs (+) - Owner comp, personal expenses, one-time costs
- 1b: Revenue Adjustments (−) - Asset sales, insurance recoveries, related party
- 1c: Operational Normalizations (±) - Rent, maintenance, inventory
- 1d: Run-Rate Adjustments (±) - New contracts, lost customers, hires

**2. Revenue Quality** - Five-tier taxonomy
- Tier 1: Recurring Contracted (90%+ renewal)
- Tier 2: Sticky Repeat (high switching costs)
- Tier 3: Project w/ Backlog (12-24 mo visibility)
- Tier 4: One-Time Project (non-repeating)
- Tier 5: Windfall/Spot (unpredictable)

**3. Working Capital** - DSO/DIO/DPO analysis
- DSO >75 days = Red Flag
- DIO >90 days = Red Flag
- DPO <30 days = Red Flag
- CCC >120 days = Red Flag

**4. Cash Flow** - Net income to FCF bridge
- Compare: Adj EBITDA - CapEx vs Operating Cash Flow
- Variance >15% requires investigation

**5. Add-Back Validation** - Confidence scoring
- 5a: High Confidence - Court records, salary surveys, agreements
- 5b: Medium Confidence - Appraisals, inspections, offer letters
- 5c: Excluded - Synergies, pipeline, growth assumptions

**6. Management Q&A** - Interview preparation and documentation

**7. Deliverables** - Dashboard, written report, data room index

---

## Key File Locations

### Documents (QoE Framework)
```
documents/
├── QoE_Framework_Complete_Reference.md   # Original framework doc
├── QoE_Project_Master_Context.md         # Comprehensive context
├── QoE_Checklist.docx                    # Word checklist (10 pages)
└── QoE_Data_Source_Matrix.xlsx           # Excel workbook (4 sheets)
```

### Website Source
```
src/
├── QualityOfEarningsPage.jsx             # QoE service page
├── App.jsx                               # Main routing
└── [other components]
```

### Scripts
```
scripts/
├── create_qoe_checklist.py               # Generates Word doc
└── create_qoe_source_matrix_v3.py        # Generates Excel
```

---

## Design System

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Navy | #051c2c | Primary text, headings |
| Bright Blue | #2563EB | Links, accents, highlights |
| Amber | #EDB624 | CTAs, warning flags |
| Gray | #F5F5F5 | Backgrounds, cards |
| Bone | #F9F9F7 | Page background |

### Typography
- Headings: Bold, navy (#051c2c)
- Body: Calibri or system sans-serif
- Emphasis: Bright blue for key terms

### Layout Pattern
McKinsey-style editorial design:
- Split hero (image left, text/obstacles right)
- Horizontal challenge cards
- Expandable framework sections
- Connected visual flow

---

## AWS & Deployment

### AWS Profile Setup
```bash
aws configure --profile northcastle
# Access Key ID: AKIAU55MGHNXJCTZZEHL
# Region: us-east-2
# Output: json
```

### Amplify Commands
```bash
amplify pull
amplify push
amplify status
```

### Deployment Status
- **Status:** Live
- **Amplify Job:** 129 completed successfully
- **Auto-deploy:** On push to main branch

---

## Git Workflow

> **IMPORTANT:** Main branch is `claude/main`, not `main`. Always use feature branch workflow.

### Required: Feature Branch + PR Workflow
```bash
git checkout claude/main
git pull origin claude/main
git checkout -b feature/description
# Make changes
git add .
git commit -m "Description"
git push origin feature/description
# Merge to claude/main locally
git checkout claude/main
git merge feature/description
git push origin claude/main
# Delete feature branch
git branch -d feature/description
```

### ⚠️ NEVER commit directly to claude/main
Always create a feature branch first, then merge back.

---

## Development Commands

### Local Dev
```bash
npm install    # Install dependencies
npm run dev    # Start dev server
npm run build  # Build for production
```

### Document Generation
```bash
python scripts/create_qoe_checklist.py
python scripts/create_qoe_source_matrix_v3.py
```

---

## Team Contacts

| Role | Name | Email |
|------|------|-------|
| Principal | Nick Citrin | ncitrin@northcastleconsulting.com |
| Admin | - | admin@northcastleconsulting.com |

---

## Next Session Priorities

When returning to this project, consider:

1. **Website Enhancements**
   - Add downloadable resources section (link to checklist, matrix)
   - Add case studies/examples
   - Add interactive calculators (DSO/DIO/DPO)
   - SEO optimization

2. **Service Offering Development**
   - Create PowerPoint deck template
   - Develop pricing framework
   - Create engagement letter template
   - Design sample deliverable mockups

3. **Team Onboarding**
   - Set up additional team member AWS CLI access
   - Confirm GitHub repository access
   - Document workflow in README

---

## Notes

- QoE service page is LIVE and functional
- Excel Data Source Matrix consolidates ~50 unique data sources
- Word Checklist is 10 pages, professional format
- AWS Amplify auto-deploys on `claude/main` branch pushes
- Last deployment: Feb 12, 2026 - QoE page styling updates
- Nick Citrin needs AWS credentials (share securely via One-Time Secret)

---

## Recent Changes Log

### February 12, 2026
**QoE Page Styling Updates** (Commit: `24f2c91`)
- Made 'Framework Applied' text larger (`text-sm`)
- Made 'Result' text larger with bold styling (`text-base`, `font-bold`)
- Bolded 'The QoE Framework — Click to Expand' subtitle
- Fixed Data Room Index mapping from component 6 → component 7
- Proper Git workflow: feature branch → merge → push

---

## How We Got Here (Meta-Context)

**This file was created on February 11, 2026** during a session where we (you and Kimi) discussed:

1. How `AGENTS.md` works in Kimi Code CLI
2. That you would `cd` into this directory before launching Kimi next time
3. How this file bridges context between sessions

**So if you're reading this:**
- ✅ You successfully navigated to `northcastleconsultingwebsite_V1.2` before starting Kimi
- ✅ Kimi loaded this context and knows about the QoE project
- ✅ It should feel like a continuation, not a fresh start

**Quick validation:** If this worked, Kimi should already know:
- The 7-component QoE framework without you explaining it
- Where `QoE_Checklist.docx` and `QoE_Data_Source_Matrix.xlsx` are
- That Nick Citrin needs AWS credentials
- The navy color is #051c2c

If Kimi *doesn't* seem to know these things, the AGENTS.md auto-load might not have worked (check you launched Kimi from the right directory).

---

*This AGENTS.md is automatically loaded by Kimi Code CLI when starting from this directory. Think of it as the project's "memory" that persists between our sessions.*
