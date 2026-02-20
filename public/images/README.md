# Open Graph Images

This directory contains Open Graph (OG) images for social sharing and LinkedIn Ads.

## Current Images

### roundup-og-image.jpg
- **Dimensions:** 1200 x 627 pixels (LinkedIn recommended)
- **Usage:** Roundup Docket Intelligence landing page
- **Path:** `/images/roundup-og-image.jpg`
- **URL:** `https://northcastleconsulting.com/images/roundup-og-image.jpg`

## Image Requirements

### For LinkedIn Ads (Required)
- **Size:** 1200 x 627 pixels (1.91:1 aspect ratio)
- **Format:** JPG or PNG
- **File size:** Under 8MB
- **Safe zone:** Keep important text/content within center 1000 x 500 area

### For Twitter/X
- **Size:** 1200 x 675 pixels (16:9)
- Same format requirements as LinkedIn

### For Facebook
- **Size:** 1200 x 630 pixels
- Same format requirements as LinkedIn

## Creating OG Images

### Design Guidelines
1. **Branding:** Include North Castle Consulting logo
2. **Colors:** Use brand colors (#0B1D3A navy, #C8973E gold)
3. **Text:** Keep it concise - max 2 lines, large font
4. **No small text:** Will be unreadable in previews
5. **Safe zone:** 40px margin on all sides

### Sample Templates

#### Landing Page Template
```
┌─────────────────────────────────────────┐  627px
│                                         │
│    [Logo: Top Left]                     │
│                                         │
│         HEADLINE TEXT                   │
│         (2 lines max)                   │
│                                         │
│    [Visual Element]                     │
│                                         │
│    northcastleconsulting.com     [CTA]  │
│                                         │
└─────────────────────────────────────────┘
              1200px
```

## Adding New OG Images

1. Create image at 1200 x 627px
2. Save to `/public/images/[page-name]-og-image.jpg`
3. Update `index.html` meta tags (for primary landing page)
4. Update `MetaTags.jsx` PAGE_META config
5. Test with LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Testing Checklist

Before launching any LinkedIn ad, verify:
- [ ] Image shows correctly in LinkedIn Post Inspector
- [ ] Title displays properly
- [ ] Description displays properly
- [ ] URL is correct
- [ ] Image dimensions are 1200x627
- [ ] No text is cut off in the preview

## Tools

- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
