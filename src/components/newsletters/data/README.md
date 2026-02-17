# Newsletter Creation Guide - READ THIS FIRST! 📰

> **For AI Agents:** This document explains how to properly create weekly newsletters for the North Castle Consulting website.

---

## ⚠️ CRITICAL: JSON Data Transformation Required

**DO NOT** simply copy the JSON data as-is into a `.js` file!

The JSON data you receive contains raw information, but it must be **transformed** into the proper JavaScript module format that matches the existing newsletter schema.

---

## Newsletter File Format

### File Naming Convention
- **Format:** `week-YYYY-MM-DD.js`
- **Example:** `week-2026-02-17.js`
- **Location:** `src/components/newsletters/data/`

### Required Export Format

```javascript
export default {
  metadata: {
    id: "YYYY-MM-DD",                          // Required: Unique ID matching filename date
    publishDate: "Month DD, YYYY",             // Required: Human-readable date
    edition: "Weekly",                         // Required: Edition type
    title: "Mass Tort Intelligence: ...",      // Required: Full newsletter title
    subtitle: "...",                           // Required: Subtitle
    author: "North Castle Consulting",         // Required: Author name
    readTime: "X min read",                    // Required: Estimated read time
    marketMood: "volatile|risk-on|neutral",    // Required: Market sentiment
    confidenceScore: 26,                       // Required: 0-100 scale
    seoDescription: "...",                     // Required: SEO meta description
    seoKeywords: "keyword1, keyword2, ..."     // Required: SEO keywords
  },
  
  hero: {
    headline: "...",                           // Required: Main hero headline
    summary: "...",                            // Required: Brief summary
    whyItMatters: "..."                        // Required: Why this matters
  },
  
  articles: [                                  // Required: Array of articles (3-5 items)
    {
      id: 1,                                   // Required: Unique ID (1, 2, 3...)
      anchorId: "unique-anchor-id",            // Required: URL-friendly anchor (kebab-case)
      category: "MDL|Settlement|Data Breach|Regulatory", // Required: Category
      headline: "...",                         // Required: Article headline
      summary: "...",                          // Required: Brief summary
      content: [                               // Required: Array of paragraphs (4 items)
        "Paragraph 1...",
        "Paragraph 2...",
        "Paragraph 3...",
        "Paragraph 4..."
      ],
      defendants: ["Company 1", "Company 2"],  // Required: Array of defendant names
      mdlNumber: "MDL XXXX|Not applicable",    // Required: MDL number or "Not applicable"
      court: "...|Not applicable",             // Required: Court name or "Not applicable"
      eventType: "MDL Creation|Settlement|New Filings|...", // Required: Event type
      capitalImpact: "High Negative|Low Negative|Neutral|Positive", // Required: Impact
      riskLevel: "low|moderate|high|critical", // Required: Risk level
      timeHorizon: "near-term|mid-term|long-term", // Required: Time horizon
      keyTakeaways: [                          // Required: 4 bullet points
        "Key point 1",
        "Key point 2",
        "Key point 3",
        "Key point 4"
      ],
      portfolioRelevance: "...",               // Required: Portfolio relevance statement
      sourceUrl: "https://...",                // Required: Source URL
      relevanceScore: 10,                      // Required: 1-10 relevance score
      actionItems: [                           // Required: 3 action items
        "Action 1",
        "Action 2",
        "Action 3"
      ]
    }
    // ... more articles
  ],
  
  courtActivity: {                             // Optional: Court activity section
    title: "Court Activity Monitor",
    filings: [
      {caseId: "...", tag: "...", jurisdiction: "...", status: "..."}
    ]
  },
  
  marketSignals: {                             // Optional: Market signals section
    title: "Litigation Market Signals",
    signals: [
      {description: "..."}
    ]
  },
  
  trendingThemes: {                            // Optional: Trends section
    title: "Macro Litigation Themes",
    themes: [
      {description: "..."}
    ]
  }
};
```

---

## Step-by-Step Process

### 1. Receive JSON Data
The user will provide JSON data containing the week's mass tort news.

### 2. Transform Data
Convert the JSON structure to match the required schema:

| JSON Field | JS Schema Field | Notes |
|------------|-----------------|-------|
| `topStories` | `articles` | Rename and restructure |
| `topStories[].content` | `articles[].content` | Split into array of paragraphs |
| `topStories[].actionItems.items` | `articles[].actionItems` | Flatten array |
| `topStories[].relevanceScore` | `articles[].relevanceScore` | Keep as number |
| N/A | `metadata.id` | Add based on filename date |
| N/A | `metadata.seoDescription` | Create from content |
| N/A | `metadata.seoKeywords` | Generate relevant keywords |
| N/A | `hero` section | Create from executiveBrief |
| N/A | `articles[].anchorId` | Create URL-friendly IDs |

### 3. Create the File
Create `src/components/newsletters/data/week-YYYY-MM-DD.js` with the transformed data.

### 4. Update index.js
Add the import and registry entry:

```javascript
// Add import at bottom of imports:
import weekYYYYMMDD from './week-YYYY-MM-DD';

// Add to WEEKS_REGISTRY (NEWEST FIRST!):
export const WEEKS_REGISTRY = [
  weekYYYYMMDD,  // <-- Add new one at TOP
  week20260209,  // Previous newsletter
  // ... rest
];
```

### 5. Test Build Locally (Optional)
```bash
node selectLatestNewsletter.js  # Verify script runs
npm run build                    # Verify build succeeds
```

---

## Common Mistakes to Avoid

### ❌ WRONG: Using `export const newsletterData`
```javascript
// DON'T DO THIS
export const newsletterData = { ... };
```

### ✅ CORRECT: Using `export default`
```javascript
// DO THIS
export default { ... };
```

### ❌ WRONG: Direct JSON copy
```javascript
// DON'T copy JSON directly - transform it first!
{
  "metadata": { ... },  // JSON format
  "topStories": [ ... ]
}
```

### ✅ CORRECT: Transformed JS object
```javascript
// Transform to proper schema
export default {
  metadata: { ... },   // JS format (no quotes on keys)
  hero: { ... },       // Add hero section
  articles: [ ... ]    // Rename topStories → articles
};
```

### ❌ WRONG: Single string content
```javascript
content: "Long text with \n\n paragraphs..."
```

### ✅ CORRECT: Array of paragraphs
```javascript
content: [
  "First paragraph...",
  "Second paragraph...",
  "Third paragraph...",
  "Fourth paragraph..."
]
```

---

## Field Transformations

### Content Field
JSON provides: `"content": "Para 1.\n\nPara 2.\n\nPara 3."`

Transform to:
```javascript
content: [
  "Para 1.",
  "Para 2.",
  "Para 3.",
  "Para 4."  // Split or combine to get 4 paragraphs
]
```

### Action Items
JSON provides:
```json
"actionItems": {
  "title": "Plaintiff Counsel Actions",
  "items": ["Action 1", "Action 2", "Action 3"]
}
```

Transform to:
```javascript
actionItems: ["Action 1", "Action 2", "Action 3"]
```

### Key Takeaways
Create 4 bullet points summarizing the article's key points (not in original JSON).

---

## Complete Workflow

```bash
# 1. Clone repo
gh repo clone rventra/northcastleconsultingwebsite_V1.2 ncw-newsletter -- --depth 1 --branch claude/main
cd ncw-newsletter

# 2. Create branch
git checkout -b newsletter-YYYY-MM-DD

# 3. Create newsletter file (transform JSON to proper format!)
# File: src/components/newsletters/data/week-YYYY-MM-DD.js

# 4. Update index.js (import + registry)

# 5. Commit & push
git add src/components/newsletters/data/
git commit -m "Add weekly newsletter: Month DD, YYYY - Title"
git push -u origin newsletter-YYYY-MM-DD

# 6. Create PR & merge
gh pr create --base claude/main --head newsletter-YYYY-MM-DD --title "Weekly Newsletter: Month DD, YYYY"
gh pr merge <PR_NUMBER> --merge --delete-branch

# 7. Verify deployment
aws amplify list-jobs --app-id d3418fafn3crpt --branch-name claude/main --profile northcastle

# 8. Clean up
cd ..
Remove-Item -Recurse -Force ncw-newsletter
```

---

## Troubleshooting

### Build Fails
- Check that file uses `export default` not `export const`
- Verify `content` is an array of strings, not a single string
- Ensure all required fields are present

### Newsletter Not Showing
- Check that `selectLatestNewsletter.js` is selecting the right file
- Verify file modification times (newest should be first)
- Trigger manual rebuild if needed: `aws amplify start-job --app-id d3418fafn3crpt --branch-name claude/main --job-type RELEASE --profile northcastle`

### Format Errors
- Compare against existing working newsletters (e.g., `week-2026-02-09.js`)
- Ensure proper JavaScript syntax (trailing commas, no quotes on object keys)

---

## Reference Files

| File | Purpose |
|------|---------|
| `week-2026-02-09.js` | Example of correct format (use as template) |
| `index.js` | Registry of all newsletters |
| `selectLatestNewsletter.js` | Script that selects latest newsletter for deployment |

---

## Key Reminders

1. **ALWAYS** transform JSON data - don't copy directly
2. **ALWAYS** use `export default` not `export const`
3. **ALWAYS** add `metadata.id` field (matches filename date)
4. **ALWAYS** add `hero` section
5. **ALWAYS** rename `topStories` to `articles`
6. **ALWAYS** split `content` into array of 4 paragraphs
7. **ALWAYS** add `keyTakeaways` array (4 items)
8. **ALWAYS** put newest newsletter at TOP of `WEEKS_REGISTRY`
9. **ALWAYS** verify build succeeds after merging

---

## Questions?

If unsure about formatting, compare against the most recent working newsletter file in `src/components/newsletters/data/`.
