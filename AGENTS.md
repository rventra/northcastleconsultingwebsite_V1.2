# Northcastle Webpage - Agent Guidelines

> This file contains context and guidelines for AI agents working on this project.
> Keep it updated as the project evolves.

---

## ⚠️ CURRENT STATUS - NEXT SESSION READ THIS

**Last Worked On:** 2026-02-25  
**Current Focus:** AWS SES Multi-Template Setup with Lambda Switch Logic  
**Status:** 🔄 IN PROGRESS - 3 New Landing Pages Deployed, SES Templates Next

### What Was Just Completed (Today - Feb 25, 2026):
1. ✅ **3 New Landing Pages Created & Deployed:**
   - `RoundupClaimantCommunicationEnrichment.jsx` → `/roundup-claimant-communication-enrichment`
   - `RoundupClaimantCommunicationSMSBridge.jsx` → `/roundup-claimant-communication-sms-bridge`
   - `RoundupClaimantCommunicationSwipeFile.jsx` → `/roundup-claimant-communication-swipe-file`
2. ✅ **3 Matching Thank You Pages:**
   - `RoundupClaimantCommunicationEnrichmentThankYou.jsx`
   - `RoundupClaimantCommunicationSMSBridgeThankYou.jsx`
   - `RoundupClaimantCommunicationSwipeFileThankYou.jsx`
3. ✅ **App.jsx Updated** with imports, routes, and no-nav logic for all 6 new pages
4. ✅ **MetaTags.jsx Updated** with page meta configurations for all new pages
5. ✅ **Commit b0cd92b pushed** and Amplify Job #209 SUCCEEDED

### NEXT SESSION - START HERE:

**Task:** Create AWS SES Templates + Lambda Switch Logic

**Context:** We now have 4 landing pages all using the same Lambda function, but currently they all send the same generic SES email template. We need to:

1. **Create 3 new SES templates** (JSON files):
   - `ses_email_template_enrichment.json` → Template name: `RoundupEnrichmentResponse`
   - `ses_email_template_sms_bridge.json` → Template name: `RoundupSMSBridgeResponse`
   - `ses_email_template_swipe_file.json` → Template name: `RoundupSwipeFileResponse`

2. **Update existing template** (keep as fallback):
   - Current: `ses_email_template.json` → Template name: `RoundupSampleReportResponse`

3. **Update Lambda function** (`RoundupAutoResponder`) with switch logic:
   ```javascript
   const templateMap = {
     'enrichment': 'RoundupEnrichmentResponse',
     'sms-bridge': 'RoundupSMSBridgeResponse',
     'swipe-file': 'RoundupSwipeFileResponse',
     'docket-intelligence': 'RoundupSampleReportResponse'
   };
   ```

4. **Update all landing pages** to pass `source` parameter in API payload:
   - Enrichment page: `source: 'enrichment'`
   - SMS Bridge page: `source: 'sms-bridge'`
   - Swipe File page: `source: 'swipe-file'`
   - Docket Intelligence page: `source: 'docket-intelligence'`

**SES Template Content Requirements** (same for all):
- NO personalized greeting (no "Dear {{name}}")
- NO phone numbers in body
- NO fake stats
- Include Calendly link: https://calendly.com/rventrapragada-northcastleconsulting/30min
- Footer: "All Data Housed in AWS • NDA First • 100% U.S.-Based Team"
- Subject lines specific to each offer type

**Files to Create:**
- `ses_email_template_enrichment.json`
- `ses_email_template_sms_bridge.json`
- `ses_email_template_swipe_file.json`

**Files to Modify:**
- Lambda function code (need to fetch and update)
- `RoundupLandingPage.jsx` (add source param)
- `RoundupClaimantCommunicationEnrichment.jsx` (add source param)
- `RoundupClaimantCommunicationSMSBridge.jsx` (add source param)
- `RoundupClaimantCommunicationSwipeFile.jsx` (add source param)

---

## Project Overview

**Project Name:** Northcastle Webpage  
**Description:** North Castle Consulting Website + Marketing Landing Pages  
**Tech Stack:** React + Vite + Tailwind CSS + AWS Amplify  
**Live URL:** https://northcastleconsulting.com  
**GitHub Repo:** https://github.com/rventra/northcastleconsultingwebsite_V1.2  
**Default Branch:** `claude/main`  
**Last Updated:** 2026-02-25

---

## GitHub Workflow

All changes must follow this pattern:
```bash
# 1. Make sure on main branch and pull latest
cd ncw-check
git checkout claude/main
git pull origin claude/main

# 2. Make changes
# ... edit files ...

# 3. Commit and push
git add -A
git commit -m "Clear description of changes"
git push origin claude/main

# 4. Verify deployment
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle --region us-east-2
```

---

## 📧 Weekly Newsletter Workflow

**Location:** `src/components/newsletters/data/week-YYYY-MM-DD.js`

### Adding a Newsletter
1. Create file: `src/components/newsletters/data/week-YYYY-MM-DD.js`
2. Transform JSON → JS (see `readmefirst.md` for schema)
3. Update `index.js`: add import + add to `WEEKS_REGISTRY` (newest first!)
4. Follow GitHub workflow above

---

## 🎯 Marketing Landing Pages

### Current Landing Pages (ALL LIVE)
| Page | File | URL | Notes |
|------|------|-----|-------|
| Roundup Docket Intelligence | `src/RoundupLandingPage.jsx` | `/roundup-docket-intelligence` | v7.1 - No navbar |
| Roundup Thank You | `src/RoundupThankYouPage.jsx` | `/roundup-docket-intelligence-thank-you` | Post-form submission |
| Claimant Enrichment | `src/RoundupClaimantCommunicationEnrichment.jsx` | `/roundup-claimant-communication-enrichment` | 100-case free enrichment |
| Enrichment Thank You | `src/RoundupClaimantCommunicationEnrichmentThankYou.jsx` | `/roundup-claimant-communication-enrichment-thank-you` | Calendly CTA |
| SMS Bridge | `src/RoundupClaimantCommunicationSMSBridge.jsx` | `/roundup-claimant-communication-sms-bridge` | Free 100-claimant SMS pilot |
| SMS Bridge Thank You | `src/RoundupClaimantCommunicationSMSBridgeThankYou.jsx` | `/roundup-claimant-communication-sms-bridge-thank-you` | Calendly CTA |
| Swipe File | `src/RoundupClaimantCommunicationSwipeFile.jsx` | `/roundup-claimant-communication-swipe-file` | Templates download |
| Swipe File Thank You | `src/RoundupClaimantCommunicationSwipeFileThankYou.jsx` | `/roundup-claimant-communication-swipe-file-thank-you` | Calendly CTA |

### Landing Page Structure
- Built as **React components** (JSX), not static HTML
- No navbar on landing pages (handled in `App.jsx` with `isRoundupLanding` check)
- Lambda autoresponder sends email on form submit
- Form submissions redirect to thank you page (not inline success)
- **LinkedIn Ads:** Must update `index.html` OG meta tags + create 1200×627px OG image

### Trust Badge Standard
All landing pages must use:
```
All Data Housed in AWS • NDA First • 100% U.S.-Based Team
```
**DO NOT use:** HIPAA-Ready, 256-bit SSL, SOC2, Encrypted (removed per compliance)

### Updating Landing Pages
1. Get latest HTML from Box: `Box/North Castle/Projects/Legal Firm/Marketing/Landing Pages/Final/`
2. Convert HTML changes to JSX (class → className, inline styles → Tailwind)
3. Keep Lambda API integration intact
4. Follow GitHub workflow

---

## AWS Infrastructure

### AWS Amplify (App Hosting)
- **Profile:** `northcastle`
- **Region:** `us-east-2`
- **App ID:** `d3418fafn3crpt`
- **Auto-deploys:** On push to `claude/main`

### AWS Lambda (Email Autoresponder)
- **Function:** `RoundupAutoResponder`
- **API Gateway:** `8jl5xpty5g.execute-api.us-east-2.amazonaws.com/prod`
- **Endpoint:** `POST /request-report`
- **SES Templates:** 
  - `RoundupSampleReportResponse` (existing - for docket intelligence)
  - `RoundupEnrichmentResponse` (TO CREATE - for enrichment)
  - `RoundupSMSBridgeResponse` (TO CREATE - for SMS bridge)
  - `RoundupSwipeFileResponse` (TO CREATE - for swipe file)
- **Sender:** `consult@northcastleconsulting.com`

### Lambda Payload (Current)
```json
{
  "name": "FirstName",
  "email": "user@firm.com",
  "firm": "",
  "phone": "",
  "caseCount": "",
  "message": "Request source"
}
```

### Lambda Payload (Next Version - needs source param)
```json
{
  "name": "FirstName",
  "email": "user@firm.com",
  "firm": "",
  "phone": "",
  "caseCount": "",
  "message": "Request source",
  "source": "enrichment|sms-bridge|swipe-file|docket-intelligence"
}
```

### SES Email Template Management

**To create/update templates:**

```bash
# Create new templates
aws ses create-template --cli-input-json file://ses_email_template_enrichment.json --region us-east-2
aws ses create-template --cli-input-json file://ses_email_template_sms_bridge.json --region us-east-2
aws ses create-template --cli-input-json file://ses_email_template_swipe_file.json --region us-east-2

# Verify templates exist
aws ses list-templates --region us-east-2
aws ses get-template --template-name RoundupEnrichmentResponse --region us-east-2
```

**Template Requirements:**
- NO personalized greeting (no "Dear {{name}}")
- NO phone numbers
- NO fake stats ($4.2M, $750K+, 90%)
- Include Calendly link: https://calendly.com/rventrapragada-northcastleconsulting/30min
- Footer trust badges: "All Data Housed in AWS • NDA First • 100% U.S.-Based Team"

**Switch Logic for Lambda (Next Session):**
```javascript
const templateMap = {
  'enrichment': 'RoundupEnrichmentResponse',
  'sms-bridge': 'RoundupSMSBridgeResponse',
  'swipe-file': 'RoundupSwipeFileResponse',
  'docket-intelligence': 'RoundupSampleReportResponse'
};

const templateName = templateMap[event.source] || 'RoundupSampleReportResponse';
```

### S3 Buckets
- `northcastle-consulting-docs` - PDF documents only (Sample Audit Report, etc.)

### Calendly URLs
| Service | Calendly Path |
|---------|---------------|
| Roundup | `/rventrapragada-northcastleconsulting/30min` |
| QoE | `/rventrapragada-northcastleconsulting/qoe-consultation` |

---

## Quick Commands

```bash
# AWS
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle --region us-east-2

# SES Templates
aws ses list-templates --region us-east-2
aws ses get-template --template-name RoundupSampleReportResponse --region us-east-2
aws ses create-template --cli-input-json file://ses_email_template.json --region us-east-2
aws ses delete-template --template-name RoundupEnrichmentResponse --region us-east-2

# Lambda
aws lambda get-function --function-name RoundupAutoResponder --profile northcastle --region us-east-2
aws lambda update-function-code --function-name RoundupAutoResponder --zip-file fileb://lambda.zip --profile northcastle --region us-east-2

# GitHub
gh repo view rventra/northcastleconsultingwebsite_V1.2
```

---

## 🔗 LinkedIn Ads & Open Graph Meta Tags

**CRITICAL:** LinkedIn Ads requires static OG meta tags in `index.html`. React Helmet/runtime meta tags **WILL NOT WORK** for LinkedIn's crawler.

### Current Configuration (index.html)
| Tag | Value |
|-----|-------|
| **og:title** | `Roundup Docket Intelligence \| North Castle Consulting` |
| **og:description** | Actionable intelligence and data infrastructure for Roundup mass tort litigation |
| **og:image** | `https://northcastleconsulting.com/images/roundup-og-image.png` (1200×627px) |
| **og:url** | `https://northcastleconsulting.com/roundup-docket-intelligence` |

### SOP for New Landing Pages

**When creating a new landing page for LinkedIn Ads:**

1. **Create OG Image (1200×627px)**
   - Save to: `public/images/[page]-og-image.png`
   - Use brand colors: #0B1D3A (navy), #C8973E (gold)
   - Keep text large and minimal (max 2 lines)

2. **Update MetaTags.jsx Config**
   Add to `PAGE_META` object in `src/components/MetaTags.jsx`:
   ```javascript
   newPage: {
     title: 'Page Title | North Castle Consulting',
     description: 'Page description here',
     ogImage: 'https://northcastleconsulting.com/images/page-og-image.png',
   },
   ```

3. **Use PageMeta Component in Page**
   ```jsx
   import { PageMeta } from './components/MetaTags.jsx';
   
   function MyLandingPage() {
     return (
       <>
         <PageMeta pageKey="newPage" />
         {/* page content */}
       </>
     );
   }
   ```

4. **Pre-Flight Check**
   - Deploy to production
   - Test with LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Verify image, title, and description show correctly

---

## Changelog

| Date | Change | Description |
|------|--------|-------------|
| 2026-02-25 | 3 New Landing Pages | Created Claimant Enrichment, SMS Bridge, and Swipe File landing pages + thank you pages |
| 2026-02-25 | App.jsx Routes | Added routes and no-nav logic for 6 new pages |
| 2026-02-25 | MetaTags.jsx | Added PAGE_META configs for enrichment, SMS bridge, and swipe file pages |
| 2026-02-24 | Newsletter Feb 24 | Weekly newsletter: Pharma & Tech Liability Surge (5 articles) |
| 2026-02-20 | OG Meta Tags | Added Open Graph tags to index.html for LinkedIn Ads support |
| 2026-02-20 | MetaTags Component | Created reusable MetaTags.jsx component with PAGE_META config |
| 2026-02-20 | SES Template v2 | Updated email: no greeting, no fake stats, Calendly CTA, clean trust badges |
| 2026-02-20 | Thank You Page | Added RoundupThankYouPage.jsx with Calendly integration |
| 2026-02-20 | Trust Badge Update | Replaced HIPAA/SSL with "All Data Housed in AWS • NDA First • 100% U.S.-Based Team" |
| 2026-02-20 | Landing Page v7.1 | Updated RoundupLandingPage to match v7.1 design |
| 2026-02-20 | Lambda Integration | Connected landing page forms to AWS Lambda autoresponder |

---

> **Tip:** Update this file when adding landing pages, changing AWS resources, or modifying workflows.
