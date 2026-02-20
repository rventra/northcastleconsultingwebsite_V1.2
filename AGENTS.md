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

### Landing Page Structure
- Built as **React components** (JSX), not static HTML
- No navbar on landing pages (handled in `App.jsx`)
- Lambda autoresponder sends email on form submit
- All CTAs should match the v7.1 copy: "Sample Docket Report"

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

### S3 Buckets
- `northcastle-consulting-docs` - PDF documents only (Sample Audit Report, etc.)

---

## Quick Commands

```bash
# AWS
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle
aws lambda invoke --function-name RoundupAutoResponder --payload '{}' --profile northcastle

# GitHub
gh repo view rventra/northcastleconsultingwebsite_V1.2
gh api repos/rventra/northcastleconsultingwebsite_V1.2/branches --paginate
```

---

## Changelog

| Date | Change | Description |
|------|--------|-------------|
| 2026-02-20 | Landing Page v7.1 | Updated RoundupLandingPage to match Nick's v7.1 design |
| 2026-02-20 | Lambda Integration | Connected landing page forms to AWS Lambda autoresponder |
| 2026-02-17 | Initial Setup | Created AGENTS.md with newsletter workflow |

---

> **Tip:** Update this file when adding landing pages, changing AWS resources, or modifying workflows.
