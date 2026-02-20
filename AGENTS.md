# Northcastle Webpage - Agent Guidelines

> This file contains context and guidelines for AI agents working on this project.
> Keep it updated as the project evolves.

---

## Project Overview

**Project Name:** Northcastle Webpage  
**Description:** North Castle Consulting Website + Marketing Landing Pages  
**Tech Stack:** React + Vite + Tailwind CSS + AWS Amplify  
**Live URL:** https://northcastleconsulting.com  
**GitHub Repo:** https://github.com/rventra/northcastleconsultingwebsite_V1.2  
**Default Branch:** `claude/main`  
**Last Updated:** 2026-02-20

---

## GitHub Workflow

All changes must follow this pattern:
```bash
# 1. Clone fresh
gh repo clone rventra/northcastleconsultingwebsite_V1.2 ncw-temp -- --depth 1 --branch claude/main
cd ncw-temp

# 2. Create branch
git checkout -b descriptive-branch-name

# 3. Make changes
# ... edit files ...

# 4. Commit and push
git add -A
git commit -m "Clear description of changes"
git push -u origin descriptive-branch-name

# 5. Create PR and merge
gh pr create --base claude/main --head descriptive-branch-name --title "PR Title"
gh pr merge <PR_NUMBER> --merge --delete-branch

# 6. Verify deployment
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle

# 7. Cleanup
cd ..
Remove-Item -Recurse -Force ncw-temp
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

### Current Landing Pages
| Page | File | URL | Notes |
|------|------|-----|-------|
| Roundup Docket Intelligence | `src/RoundupLandingPage.jsx` | `/roundup-docket-intelligence` | v7.1 - No navbar |
| Roundup Thank You | `src/RoundupThankYouPage.jsx` | `/roundup-docket-intelligence-thank-you` | Post-form submission |

### Landing Page Structure
- Built as **React components** (JSX), not static HTML
- No navbar on landing pages (handled in `App.jsx` with `isRoundupLanding` check)
- Lambda autoresponder sends email on form submit
- All CTAs should match the v7.1 copy: "Sample Docket Report"
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
- **SES Template:** `RoundupSampleReportResponse`
- **Sender:** `consult@northcastleconsulting.com`

### Lambda Payload
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

### SES Email Template Management
Template stored in AWS SES (not Lambda code). To update:

```bash
# 1. Update ses_email_template.json file
# 2. Delete old template
aws ses delete-template --template-name RoundupSampleReportResponse --region us-east-2

# 3. Create new template
aws ses create-template --cli-input-json file://ses_email_template.json --region us-east-2
```

**Template Requirements:**
- NO personalized greeting ("Dear {{name}}")
- NO phone numbers
- NO fake stats ($4.2M, $750K+, 90%)
- Include Calendly link: https://calendly.com/rventrapragada-northcastleconsulting/30min
- Footer trust badges: "All Data Housed in AWS • NDA First • 100% U.S.-Based Team"

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
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle
aws lambda invoke --function-name RoundupAutoResponder --payload '{}' --profile northcastle

# SES Template
aws ses get-template --template-name RoundupSampleReportResponse --region us-east-2

# GitHub
gh repo view rventra/northcastleconsultingwebsite_V1.2
gh api repos/rventra/northcastleconsultingwebsite_V1.2/branches --paginate
```

---

## Architect-Agent Framework

### When to Use MINIMAX2
Spawn MINIMAX2 (via OpenRouter) for fast code generation tasks:
- HTML → JSX conversion
- Component modifications
- Simple refactoring

### MINIMAX2 Configuration
| Setting | Value |
|---------|-------|
| **OpenRouter Model ID** | `minimax/minimax-m2.5` |
| **Use for** | Code generation, JSX conversion |
| **Speed** | ~17 TPS (much faster than Kimi) |
| **Cost** | ~$0.000165 per request |

### Example API Call
```bash
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "minimax/minimax-m2.5",
    "messages": [{"role": "user", "content": "Convert this HTML to JSX..."}]
  }'
```

### Agent Responsibilities
| Task | Agent | Why |
|------|-------|-----|
| Code generation | **MINIMAX2** | Fast, cheap, good at pattern matching |
| Git operations | **Kimi** | File system access, error handling |
| Architecture decisions | **Kimi** | Full context, debugging |
| Deployment | **Kimi** | AWS/GitHub integration |

---

## Changelog

| Date | Change | Description |
|------|--------|-------------|
| 2026-02-20 | OG Meta Tags | Added Open Graph tags to index.html for LinkedIn Ads support |
| 2026-02-20 | MetaTags Component | Created reusable MetaTags.jsx component with PAGE_META config |
| 2026-02-20 | SES Template v2 | Updated email: no greeting, no fake stats, Calendly CTA, clean trust badges |
| 2026-02-20 | Thank You Page | Added RoundupThankYouPage.jsx with Calendly integration |
| 2026-02-20 | Trust Badge Update | Replaced HIPAA/SSL with "All Data Housed in AWS • NDA First • 100% U.S.-Based Team" |
| 2026-02-20 | Landing Page v7.1 | Updated RoundupLandingPage to match Nick's v7.1 design |
| 2026-02-20 | Lambda Integration | Connected landing page forms to AWS Lambda autoresponder |
| 2026-02-17 | Initial Setup | Created AGENTS.md with newsletter workflow |

---

## 🔗 LinkedIn Ads & Open Graph Meta Tags

**CRITICAL:** LinkedIn Ads requires static OG meta tags in `index.html`. React Helmet/runtime meta tags **WILL NOT WORK** for LinkedIn's crawler.

### Current Configuration (index.html)
| Tag | Value |
|-----|-------|
| **og:title** | `Roundup Docket Intelligence \| North Castle Consulting` |
| **og:description** | Actionable intelligence and data infrastructure for Roundup mass tort litigation |
| **og:image** | `https://northcastleconsulting.com/images/roundup-og-image.jpg` (1200×627px) |
| **og:url** | `https://northcastleconsulting.com/roundup-docket-intelligence` |

### SOP for New Landing Pages

**When creating a new landing page for LinkedIn Ads:**

1. **Create OG Image (1200×627px)**
   - Save to: `public/images/[page]-og-image.jpg`
   - Use brand colors: #0B1D3A (navy), #C8973E (gold)
   - Keep text large and minimal (max 2 lines)
   - See `public/images/README.md` for design guidelines

2. **Update index.html Meta Tags**
   ```html
   <title>[Page Title] | North Castle Consulting</title>
   <meta property="og:title" content="[Page Title] | North Castle Consulting" />
   <meta property="og:description" content="[Description]" />
   <meta property="og:image" content="https://northcastleconsulting.com/images/[page]-og-image.jpg" />
   <meta property="og:url" content="https://northcastleconsulting.com/[page-url]" />
   ```

3. **Update MetaTags.jsx Config**
   Add to `PAGE_META` object in `src/components/MetaTags.jsx`:
   ```javascript
   newPage: {
     title: 'Page Title | North Castle Consulting',
     description: 'Page description here',
     ogImage: 'https://northcastleconsulting.com/images/page-og-image.jpg',
   },
   ```

4. **Use MetaTags Component in Page**
   ```jsx
   import MetaTags from './components/MetaTags.jsx';
   
   function MyLandingPage() {
     return (
       <>
         <MetaTags 
           title="Page Title | North Castle Consulting"
           description="Page description"
           ogImage="https://northcastleconsulting.com/images/page-og-image.jpg"
         />
         {/* page content */}
       </>
     );
   }
   ```

5. **Pre-Flight Check**
   - Deploy to production
   - Test with LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Verify image, title, and description show correctly
   - **DO NOT launch ads until LinkedIn Post Inspector passes**

### Multi-Page Strategy (Future)

If running ads for multiple landing pages simultaneously, you'll need **prerendering** since this is a React SPA:

**Options:**
1. **Prerender.io** - Easiest solution, adds middleware
2. **Netlify/Vercel Prerendering** - If migrating hosts  
3. **React Snapshot** - Build-time prerendering
4. **Next.js SSR** - Long-term solution

### Testing Tools
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator

### OG Image Requirements
| Platform | Dimensions | Aspect Ratio |
|----------|-----------|--------------|
| LinkedIn | 1200×627px | 1.91:1 |
| Twitter/X | 1200×675px | 16:9 |
| Facebook | 1200×630px | 1.91:1 |

**Use 1200×627px as the standard** - works well across all platforms.

---

> **Tip:** Update this file when adding landing pages, changing AWS resources, or modifying workflows.
