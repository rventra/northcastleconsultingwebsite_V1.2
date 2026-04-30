# Northcastle Webpage - Agent Guidelines

> This file contains context and guidelines for AI agents working on this project.
> Keep it updated as the project evolves.

---

## ⚠️ CURRENT STATUS - NEXT SESSION READ THIS

**Last Worked On:** 2026-04-30  
**Current Focus:** About Us Page Headshots Added & Deployed  
**Status:** ✅ Headshots live on About Us page with proper crop positioning

### What Was Just Completed (April 30, 2026):

#### About Us Page Headshots - COMPLETE ✅
1. ✅ **Copied headshots** from OneDrive/Documents to `public/images/`
   - `ram-headshot.jpg` (240×336px, portrait)
   - `nick-headshot.png` (320×240px, landscape)
2. ✅ **Updated `src/AboutUsPage.jsx`** — replaced gradient placeholder initials with `<img>` tags
3. ✅ **Fixed crop positioning** — added `object-top` to preserve top of head in square crop
4. ✅ **Deployed** via Amplify Build #258 (SUCCEED)

**Important Note:** The `object-top` CSS property is critical for portrait headshots cropped to `aspect-square` containers. Without it, the center-crop from `object-cover` cuts off the top of the head.

---

### Previous Session (March 16, 2026):

#### Newsletter Deployment - March 16, 2026 Edition
**Status:** ✅ NEWSLETTER DEPLOYED - Healthcare Data Breaches & AI Liability edition live

### What Was Just Completed (Today - March 16, 2026):

#### Newsletter March 16, 2026 ✅ DEPLOYED
1. ✅ **Created newsletter branch**: `newsletter-2026-03-16`
2. ✅ **Added week-2026-03-16.js**: Healthcare Data Breaches & AI Liability (5 articles)
3. ✅ **Updated registry**: Added import and entry to WEEKS_REGISTRY (newest first)
4. ✅ **Merged to claude/main**: PR merged, branch deleted
5. ✅ **Amplify deployed**: Auto-deploy triggered on push

**Articles in this edition:**
| Rank | Category | Headline | Relevance |
|------|----------|----------|-----------|
| 1 | Data Breach | Epic Systems Faces Seven Healthcare Data Breach Class Actions | 10/10 |
| 2 | Regulatory | xAI Faces Landmark CSAM Lawsuit Over Grok-Generated Content | 9/10 |
| 3 | Regulatory | Tariff Refund Litigation Surges After Supreme Court Ruling | 9/10 |
| 4 | Regulatory | Live Nation Faces Mistrial Motion After DOJ Settlement | 8/10 |
| 5 | Regulatory | DOGE AI Discrimination Lawsuits Challenge ChatGPT Use | 8/10 |

---

### What Was Just Completed (Today - March 4, 2026):

#### Task 1: Autoresponder Fix ✅ COMPLETE
1. ✅ **All 4 SES Templates Verified** in AWS (us-east-2)
2. ✅ **Lambda Function Deployed** with switch logic based on `source` parameter
3. ✅ **All 5 Landing Pages Updated** to send `source` parameter
4. ✅ **All Tests Passed** - Lambda correctly routes to appropriate email template

**Test Results:**
| Landing Page | Source Value | Email Template | Status |
|--------------|--------------|----------------|--------|
| Docket Intelligence | `docket_review` | Sample Audit Report | ✅ PASS |
| Free Docket Review | `docket_review` | Sample Audit Report | ✅ PASS |
| Enrichment | `enrichment` | 100-Case Enrichment | ✅ PASS |
| SMS Bridge | `sms_bridge` | SMS Pilot Info | ✅ PASS |
| Swipe File | `swipe_file` | PFS Template | ✅ PASS |

**SES Templates in AWS:**
- `RoundupSampleReportResponse` - Sample Audit Report PDF
- `ClaimantEnrichmentResponse` - 100-case enrichment offer
- `SMSBridgeResponse` - SMS pilot info
- `SwipeFileResponse` - PFS Template info

### NEXT SESSION - START HERE:

**Task 2: GTM Funnel Tracking for Swipe File**

Set up Google Tag Manager tracking for the Roundup Docket Intelligence landing page to track conversions through to the thank you page.

**GTM Setup Notes:**
- **Trigger:** Page Path contains `roundup-docket-intelligence-thank-you`
- **Trigger Type:** Page View - DOM Ready
- Form submission redirects to: `/roundup-docket-intelligence-thank-you?email=user@firm.com`

**After Task 1 Complete:** Move to Task 2 (GTM Funnel Tracking for Swipe File)

**Context:** Need to implement Google Tag Manager tracking for the Roundup Docket Intelligence landing page to track conversions through to the thank you page.

**GTM Setup Notes:**
- **Trigger:** Page Path contains `roundup-docket-intelligence-thank-you`
- **Trigger Type:** Page View - DOM Ready
- Form submission redirects to: `/roundup-docket-intelligence-thank-you?email=user@firm.com`
- Email parameter available in URL for enhanced conversion tracking

**All Landing Pages & Thank You Pages:**
| Landing Page | URL | Thank You Page | URL |
|--------------|-----|----------------|-----|
| Docket Intelligence | `/roundup-docket-intelligence` | Docket Intelligence TY | `/roundup-docket-intelligence-thank-you` |
| Free Docket Review | `/roundup-free-docket-review` | Free Docket Review TY | `/roundup-free-docket-review-thank-you` |
| Claimant Communication Enrichment | `/roundup-claimant-communication-enrichment` | Enrichment TY | `/roundup-claimant-communication-enrichment-thank-you` |
| SMS Bridge | `/roundup-claimant-communication-sms-bridge` | SMS Bridge TY | `/roundup-claimant-communication-sms-bridge-thank-you` |
| Swipe File | `/roundup-claimant-communication-swipe-file` | Swipe File TY | `/roundup-claimant-communication-swipe-file-thank-you` |

---

## 🎯 Ram's Prioritized Action Items (March 4, 2026)

**Overall Context:** Working through Ram's list 1-by-1 (no cowboy coding)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | **Autoresponder Fix** | ✅ **COMPLETE** | All 5 landing pages + Lambda switch working. 5/5 tests passed |
| 2 | **Funnel Tracking (GTM)** | ⏳ PENDING | Set up GTM triggers for "Swipe File" landing page |
| 3 | **Ad Copy Review** | ⏳ PENDING | Review LinkedIn ads, send feedback to Nick |
| 4 | **Audit Brainstorming** | ⏳ PENDING | Backend research on audit pain points for blog posts |
| 5 | **Billing System** | ⏳ PENDING | Set up late-notification billing system |

**Task 1 Completion Notes:**
- Frontend: All 5 landing pages updated with `source` parameter
- Backend: Lambda switch logic working correctly
- API Gateway: No issues - direct JSON passthrough working
- Test Email: rventra85@gmail.com received all 5 test emails successfully

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

### Newsletter Deployment Workflow (One-Shot Process)

**Repository Location:** `C:\Users\New User\northcastle-repo` (or `../northcastle-repo` from working directory)

**When user provides JSON content for a new newsletter, execute these commands:**

```powershell
# === STEP 1: Setup ===
cd ..\northcastle-repo
git checkout claude/main
git pull origin claude/main

# === STEP 2: Create branch (use date from newsletter metadata) ===
# Example: git checkout -b newsletter-2026-03-16
git checkout -b newsletter-YYYY-MM-DD

# === STEP 3: Copy newsletter file ===
# Copy from your working directory to the repo
cp "..\Northcastle Newsletter\ncw-check\src\components\newsletters\data\week-YYYY-MM-DD.js" "src\components\newsletters\data\"

# === STEP 4: Update index.js ===
# Add import at TOP (newest first):
#   import weekYYYYMMDD from './week-YYYY-MM-DD';
# Add to WEEKS_REGISTRY array at TOP (first item):
#   weekYYYYMMDD,

# === STEP 5: Update AGENTS.md ===
# - Update "Last Worked On" date at top
# - Update "Current Status" 
# - Add newsletter summary to "What Was Just Completed"

# === STEP 6: Commit ===
git add -A
git commit -m "Add newsletter for week YYYY-MM-DD: [Brief Title]"

# === STEP 7: Push branch ===
git push origin newsletter-YYYY-MM-DD

# === STEP 8: Create PR and merge ===
gh pr create --title "Add newsletter YYYY-MM-DD" --body "Weekly newsletter: [Title]" --base claude/main
gh pr merge --merge --delete-branch

# === STEP 9: Verify Amplify deployment ===
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle --region us-east-2

# Check status (should show SUCCEED within 2-3 minutes)
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --max-results 1 --profile northcastle --region us-east-2 --output json | ConvertFrom-Json | Select-Object -ExpandProperty jobSummaries | Select-Object jobId, status
```

**Expected Output:**
```
jobId status 
----- ------ 
248   SUCCEED
```

**Live Site:** https://northcastleconsulting.com/newsletter (shows latest edition)

### Adding a Newsletter - Step by Step
1. **Transform JSON → JS** (see `readmefirst.md` for schema)
   - `executiveBrief` → `hero`
   - `topStories` → `articles`
   - `actionItems.items` → `actionItems` (flatten)
   - `content` → array of 4 paragraphs (not string with \n)
   - Use `export default` (not named export)
   
2. **Create file**: `src/components/newsletters/data/week-YYYY-MM-DD.js`

3. **Update `index.js`**:
   - Add import: `import weekYYYYMMDD from './week-YYYY-MM-DD';` (at top, newest first)
   - Add to `WEEKS_REGISTRY`: `weekYYYYMMDD,` (first item in array)

4. **Update AGENTS.md**:
   - Update "Last Worked On" date
   - Update "Current Status"
   - Add newsletter summary to "What Was Just Completed"

5. **Commit, Push, Merge, Cleanup** (see workflow above)

6. **Verify Amplify**: Check deployment status via AWS CLI or Amplify Console

### Critical Checks Before Commit
- [ ] Filename matches `week-YYYY-MM-DD.js` format
- [ ] Uses `export default` (not named export)
- [ ] Exactly 4 paragraphs per article's `content` array
- [ ] Exactly 4 key takeaways per article
- [ ] Exactly 3 action items per article
- [ ] Import added to TOP of index.js (newest first)
- [ ] Added to TOP of WEEKS_REGISTRY array
- [ ] AGENTS.md updated with status

### Last Successful Deployment
| Date | Newsletter | Commit | Job ID | Duration | Status |
|------|------------|--------|--------|----------|--------|
| 2026-03-16 | week-2026-03-16 | `0e6aa8c` | 248 | 1m 26s | ✅ SUCCEED |
| 2026-03-09 | week-2026-03-09 | `5c90c18` | 245 | ~3m | ✅ SUCCEED |

### Troubleshooting

**Issue: `gh pr merge` fails**
- Solution: The PR may have already been merged via GitHub UI. Check with `git branch -a` and delete local branch if needed: `git branch -D newsletter-YYYY-MM-DD`

**Issue: Amplify build shows FAILED**
- Check build logs: `aws amplify get-job --app-id d3418fafn3crpt --branch-name claude/main --job-id <job-id> --profile northcastle --region us-east-2`
- Common causes: syntax errors in JS file, missing imports
- Fix the issue, commit, and push again

**Issue: Newsletter not showing on website**
- Verify `WEEKS_REGISTRY[0]` returns the new newsletter
- Check browser console for JS errors
- Verify Amplify deployment completed successfully

**Issue: Git push fails (authentication)**
- Ensure GitHub CLI is authenticated: `gh auth status`
- If needed: `gh auth login`

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
