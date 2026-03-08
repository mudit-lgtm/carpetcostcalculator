

## Adsterra Revenue Optimization Plan

### Issues Found

1. **Wrong ad domain**: `AdBanner.tsx` uses `highperformanceformat.com` but all your codes use `maddenwiped.com` — ads may not be loading
2. **Missing ad**: Native banner `19c6e2c98905a2ebcae007bf0401b711` (with container div) is not implemented anywhere
3. **Duplicate body ads**: `index.html` has raw ad scripts in `<body>` that conflict with React-managed `AdBanner` components — causes double-loading and potential policy violations
4. **Under-monetized placements**: Only 4 ad slots on the page; can add 2-3 more without hurting UX

### Changes

**1. Fix `src/components/AdBanner.tsx`**
- Change domain from `highperformanceformat.com` to `maddenwiped.com`
- This fixes all 4 existing banner sizes (728x90, 468x60, 160x600, 160x300)

**2. Create `src/components/NativeBanner.tsx`**
- New component for the native ad (`19c6e2c98905a2ebcae007bf0401b711`)
- Renders the container div + async script injection
- This ad type typically has higher CPM than static banners

**3. Clean up `index.html`**
- Remove duplicate banner scripts from `<body>` (160x600 and 728x90 raw scripts) — these are already handled by `AdBanner` React components
- Keep the two JS monetization scripts (`fb8887...` in head, `abea50...` in body) as these are likely popunder/social bar ads
- Add the missing `abea50...` script if not present (it is present)

**4. Optimize ad placements in `src/pages/Index.tsx`**
New layout with 7 strategic ad slots:

```text
Hero
QuickNavigation
CALCULATOR
  → 728x90 (desktop) / 468x60 (mobile)     [existing]
QuickCostReference
  → Native Banner (19c6e...)                [NEW - high CPM]
StairCalculator
  → 160x300 rectangle                       [existing]
MultiRoomCalculator
  → 468x60                                  [existing]
CarpetComparisonTool
  → 728x90 (desktop) / 468x60 (mobile)     [NEW - before retailers]
RetailerComparison
  → 728x90 (desktop only)                   [existing - before FAQ]
FAQ
```

### Summary of Files

| File | Change |
|------|--------|
| `src/components/AdBanner.tsx` | Fix domain to `maddenwiped.com` |
| `src/components/NativeBanner.tsx` | NEW — native ad component |
| `src/pages/Index.tsx` | Add NativeBanner + extra ad slot |
| `index.html` | Remove duplicate body ad scripts |

