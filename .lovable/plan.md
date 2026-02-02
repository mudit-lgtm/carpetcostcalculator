

## Comprehensive Website Revamp Plan

### Overview
This plan addresses the key issues:
- Moving the main calculator to the top of the page (above fold)
- Reorganizing content for better user engagement and lower bounce rate
- Optimizing SEO based on high-volume keywords from Ahrefs
- Strategic placement of Adsterra banner ads
- Updating all schemas with keyword-rich content
- Adding contextual interlinking and outbound links

---

### Phase 1: Page Structure Reorganization

**Problem:** Main calculator is in the middle of the page causing high bounce rate

**Solution:** Restructure `src/pages/Index.tsx` with calculator-first approach

**New Section Order:**
```text
1. Header (sticky)
2. Hero (compact - reduced padding)
3. MAIN CALCULATOR (immediately visible)
4. Horizontal Ad Banner (728x90)
5. Quick Cost Reference Table
6. Stair Carpet Calculator Section
7. Rectangle Ad (160x300 in sidebar OR between sections)
8. Multi-Room Calculator
9. Horizontal Ad Banner (468x60)
10. Carpet Comparison Tool
11. Cost Ranges Table
12. Carpet Tile Calculator
13. Maintenance Calculator
14. Floor Comparison Tool
15. Step-by-Step Guide
16. Carpet Type Guide
17. Retailer Comparison
18. FAQ
19. Footer
```

**Key Changes:**
- Remove Introduction section OR move below FAQ
- Reduce Hero section padding/height
- Calculator is the FIRST interactive element users see

---

### Phase 2: Adsterra Banner Integration

**Create new component: `src/components/AdBanner.tsx`**

This component will handle 4 different ad sizes:
- 728x90 (horizontal - between sections)
- 468x60 (horizontal - smaller)
- 160x600 (vertical sidebar)
- 160x300 (rectangle)

**Ad Placement Strategy:**
| Location | Size | Purpose |
|----------|------|---------|
| After main calculator | 728x90 | High visibility, post-engagement |
| After Quick Cost Reference | 468x60 | Mid-content |
| Sidebar (if layout allows) | 160x600 | Persistent visibility |
| After Stair Calculator | 160x300 | Between tools |
| After Multi-Room Calculator | 728x90 | Section break |

**Implementation:**
- Create reusable AdBanner component with ad key prop
- Use dangerouslySetInnerHTML for script injection OR
- Create static iframe elements with proper sizing

---

### Phase 3: SEO Optimization Based on Keywords

**3.1 Update `index.html` Meta Tags:**

**New Title (optimized for top keywords):**
```
Carpet Calculator 2026 | Free Carpet Cost Estimator & Installation Quote
```

**New Meta Description (incorporating high-volume keywords):**
```
Free carpet calculator for instant carpet estimates & quotes. Calculate carpet cost per square foot, stair carpet installation, 1000 sq ft pricing, and get accurate carpet installation cost estimates for Home Depot & Lowe's.
```

**Updated Keywords Meta (prioritized by traffic):**
- carpet calculator
- carpet estimate
- carpet quote
- carpet cost estimator
- carpet cost calculator
- carpet estimator
- stair carpet calculator
- carpet calculator cost
- how much carpet do i need
- carpet installation cost calculator
- carpet replacement cost calculator
- carpet square footage calculator
- free carpet calculator
- carpet quote online

**3.2 Update Component Titles/Headers for SEO:**

| Component | Current Title | New SEO-Optimized Title |
|-----------|---------------|------------------------|
| Hero H1 | "Carpet Installation Cost Calculator" | "Carpet Calculator - Free Carpet Cost Estimator 2026" |
| CarpetCalculator | "Free Carpet Installation Cost Estimator 2026" | "Carpet Calculator: Get Your Free Carpet Estimate" |
| MultiRoomCalculator | "Multi-Room Carpet Calculator" | "Multi-Room Carpet Calculator - How Much Carpet Do I Need?" |
| StairCalculatorSection | "Stair Carpet Calculator" | "Stair Carpet Calculator - Calculate Carpet for Stairs" |
| CarpetComparisonTool | "Carpet Comparison Tool" | "Carpet Quote Comparison - Home Depot vs Lowe's Prices" |

---

### Phase 4: Schema Updates

**Update all schemas in `index.html` with keyword-rich content:**

**4.1 WebSite Schema:**
- name: "Carpet Calculator - Free Carpet Cost Estimator"
- description: "Free carpet calculator for accurate carpet estimates, quotes, and installation cost calculations"

**4.2 WebPage Schema:**
- name: "Carpet Calculator 2026 | Free Carpet Cost Estimator & Installation Quote"
- description with keywords: carpet estimate, carpet quote, carpet cost estimator

**4.3 WebApplication Schema:**
- name: "Carpet Calculator App"
- description: "Free online carpet calculator for instant carpet estimates and cost calculations"
- Add more keywords to featureList

**4.4 FAQPage Schema - Add/Update Questions:**
Add high-traffic keyword questions:
- "How do I calculate carpet for a room?"
- "How much carpet do I need calculator?"
- "What is a carpet estimate?"
- "How to get a carpet quote online?"

**4.5 CollectionPage ItemList - Update Names:**
- Position 1: "Carpet Calculator - Free Cost Estimator"
- Position 2: "Multi-Room Carpet Calculator"
- Position 3: "Stair Carpet Calculator"

**4.6 HowTo Schema:**
- name: "How to Use the Carpet Calculator for Accurate Estimates"
- Update step descriptions with keywords

---

### Phase 5: Contextual Interlinking

**Add internal links between sections:**

**In CarpetCalculator component:**
- Link to "#stair-carpet-calculator" for stair calculations
- Link to "#multi-room" for whole-house estimates
- Link to "#comparison-tool" for price comparisons
- Link to "#tile-calculator" for modular carpet

**In Hero component:**
- Add quick links to all major calculators
- Add breadcrumb-style navigation

**Create Table of Contents Component:**
- Sticky sidebar showing all tools
- Highlights current section on scroll
- Quick jump links

---

### Phase 6: Outbound Links (Authority Building)

**Add credible outbound links in content sections:**

| Section | Outbound Link Target |
|---------|---------------------|
| CarpetCalculator | Link to Home Depot carpet page, Lowe's carpet installation |
| StairCalculator | Link to stair carpeting guides from home improvement sites |
| RetailerComparison | Links to actual retailer pages |
| FAQ | Links to flooring industry resources |

**Implementation:**
- Add `target="_blank"` and `rel="noopener noreferrer"`
- Use descriptive anchor text with keywords

---

### Phase 7: Component-Level Changes

**7.1 Update `src/components/Hero.tsx`:**
- Reduce vertical padding (py-20 to py-12)
- Update H1 to target "Carpet Calculator" keyword
- Add quick navigation links to main tools
- Add "Last Updated: January 2026" badge

**7.2 Update `src/components/CarpetCalculator.tsx`:**
- Update title with primary keyword
- Add contextual internal links
- Add "Related Tools" section at bottom

**7.3 Update `src/components/FAQ.tsx`:**
- Add questions matching high-volume keywords
- Add internal links to relevant calculators in answers

**7.4 Create `src/components/QuickNavigation.tsx`:**
- Horizontal list of anchor links
- Shows below hero, above main calculator
- Example: Calculator | Stairs | Multi-Room | Comparison | Tiles

---

### Phase 8: File Changes Summary

| File | Action | Changes |
|------|--------|---------|
| `src/components/AdBanner.tsx` | CREATE | New reusable ad component |
| `src/components/QuickNavigation.tsx` | CREATE | Quick anchor links component |
| `src/pages/Index.tsx` | MODIFY | Reorganize sections, add AdBanner placements |
| `src/components/Hero.tsx` | MODIFY | Reduce size, update H1, add quick links |
| `src/components/CarpetCalculator.tsx` | MODIFY | Update title, add internal links |
| `src/components/MultiRoomCalculator.tsx` | MODIFY | Update title for SEO |
| `src/components/StairCalculatorSection.tsx` | MODIFY | Update title, add keywords |
| `src/components/CarpetComparisonTool.tsx` | MODIFY | Add outbound links to retailers |
| `src/components/FAQ.tsx` | MODIFY | Add keyword-targeted questions |
| `index.html` | MODIFY | Update all schemas, meta tags |

---

### Technical Details

**AdBanner Component Structure:**
```text
src/components/AdBanner.tsx
- Props: size ('728x90' | '468x60' | '160x600' | '160x300')
- Uses useEffect to inject script dynamically
- Wrapper div with proper dimensions
- Loading placeholder
```

**Ad Keys Mapping:**
- 728x90: fa22f807f12e429661e667d0058bee84
- 468x60: 5d1597a4441cca1db1deab2c8065ca9d
- 160x600: d819e122b8e7309fb1ace9cb95a34086
- 160x300: ecaa0a543c4580e64510824c64d09222

---

### Expected Outcomes

1. **Reduced Bounce Rate**: Calculator immediately visible
2. **Increased CTR**: Better meta titles/descriptions with target keywords
3. **Improved Ad Revenue**: Strategic ad placement between sections
4. **Better Rankings**: Keyword-optimized content and schemas
5. **User Engagement**: Internal links keep users exploring
6. **Authority Signals**: Outbound links to credible sources

