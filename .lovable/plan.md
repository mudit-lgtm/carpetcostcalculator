

## Flagship Calculator Revamp Plan

### Overview
Replace the current 4 separate calculators (CarpetCalculator, StairCalculatorSection, MultiRoomCalculator, CarpetComparisonTool) with ONE unified "Carpet & Installation Cost Calculator" as the hero tool. The existing separate calculators become secondary tools linked below.

---

### Core Change: New Unified Calculator Component

**Create `src/components/FlagshipCalculator.tsx`** — a single component with 3 tabs/modes:

**Tab 1: "Single Room" (default)**
- Room size input: length (ft) + width (ft) with pre-filled 12x12 example showing instant result
- Quick preset buttons: 10x10, 10x12, 12x12, 15x15, 20x20
- "Include stairs?" toggle that reveals: number of steps + straight/L-shaped selector
- Quality tier radio: Budget ($2-3/sq ft) | Standard ($3-5/sq ft) | Premium ($5-9/sq ft) — editable price per sq ft
- Installation mode radio: "Professional (materials + labor)" (default) | "DIY (materials only)"
- ZIP code field (optional, for trust/personalization in output)
- Advanced Options accordion (collapsed): waste %, padding type, old carpet removal, furniture moving, retailer selector, region, basement toggle

**Tab 2: "Multiple Rooms"**
- Same as current MultiRoomCalculator but simplified: room name + dimensions, "Add Room" button
- Shared quality tier + installation mode from above
- Optional stairs toggle

**Tab 3: "Rooms + Stairs"**
- Combination: room inputs + dedicated stairs section (number of steps, stair type, coverage type)
- Single combined estimate output

**Output Card (sticky/prominent):**
- Headline: "Estimated cost to carpet your 12×12 room: $430–$1,150 (materials + installation)"
- Breakdown tiles: Area (sq ft + sq yd), Carpet material cost, Padding cost, Installation labor, Stairs cost (if added), Grand total low–high with bolded "Typical" midpoint
- Narrative line: "This estimate includes carpet, padding, and professional installation based on typical US prices in 2026."
- Action buttons: Print Estimate | Download PDF | Calculate Another
- Retailer comparison mini-section showing Lowe's/HD/Costco price for this specific room size

---

### Page Structure Changes (`src/pages/Index.tsx`)

```text
1. Header (sticky)
2. Hero (compact, updated H1)
3. QuickNavigation (updated)
4. FLAGSHIP CALCULATOR (#calculator) — the new unified tool
5. Ad Banner 728x90 / 468x60
6. QuickCostReference (room size + whole house tables — SEO content)
7. NativeBanner
8. Ad Banner 160x300
9. Secondary Tools Links section:
   "Need stairs only?" → #stair-calculator
   "Need a whole-house estimate?" → #multi-room
   "Just want to compare retailers?" → #comparison-tool
10. StairCalculatorSection (#stair-calculator) — kept but demoted
11. Ad Banner 468x60
12. MultiRoomCalculator (#multi-room) — kept but demoted
13. Ad Banner 728x90 / 468x60
14. CarpetComparisonTool (#comparison-tool) — kept but demoted
15. RetailerComparison (#retailers)
16. Ad Banner 728x90
17. FAQ
18. Footer
```

The secondary tools stay on the page for long-tail SEO but are positioned below the fold with small linking text bridges.

---

### Hero Updates (`src/components/Hero.tsx`)

- H1: "Carpet Installation Cost Calculator 2026"
- Subtitle: "Enter your room size and stairs — get an instant carpet + padding + installation cost estimate for US homes."
- Quick CTA buttons: "Calculate Any Room" | "Stair Calculator" | "Whole House"
- Popular searches links: 10x12 Room | 12x12 Room | 20x20 Room | 13 Stairs | Lowe's Prices

---

### Header & Footer Navigation Updates

**Header:** Calculator | Stairs | Multi-Room | Retailers | FAQ (unchanged, already correct)

**QuickNavigation:** Update label from "Carpet Calculator" to "Cost Calculator" for the main tool

---

### SEO Updates (`index.html`)

- Title: `Carpet Installation Cost Calculator 2026 | Free Carpet Cost Estimator (US)`
- Meta description: Updated to emphasize "Enter your room size... get instant carpet + padding + installation cost estimate"
- H1 in hero matches title intent
- Schema updates:
  - WebApplication name: "Carpet Installation Cost Calculator"
  - CollectionPage first item: "Carpet & Installation Cost Calculator (Rooms + Stairs)"
  - HowTo: Update steps to match the new unified flow

---

### Technical Details

**FlagshipCalculator.tsx structure:**
- Uses Radix Tabs for Single Room / Multiple Rooms / Rooms + Stairs
- Default tab pre-fills 12×12 with Standard quality, showing instant results on load
- Results card uses a `useEffect` to auto-calculate when inputs change (no button click needed for basic mode) OR keep the calculate button but auto-fill a demo result
- ZIP code stored but only displayed in output text ("in [ZIP]") — no actual geo-lookup needed
- Reuses existing pricing logic from CarpetCalculator (carpet types, retailer multipliers, regional multipliers, padding types)
- Print uses `window.print()` with print CSS, PDF uses existing jsPDF pattern

**New section: Secondary Tools Bridge**
- Simple div with 3 text links: "Need stairs only?" / "Need a whole-house estimate?" / "Just want to compare retailers?"
- Anchors to the existing demoted sections below

---

### Files to Change

| File | Action |
|------|--------|
| `src/components/FlagshipCalculator.tsx` | CREATE — new unified calculator |
| `src/pages/Index.tsx` | MODIFY — add FlagshipCalculator as hero, demote others below |
| `src/components/Hero.tsx` | MODIFY — update H1/subtitle/CTAs |
| `src/components/QuickNavigation.tsx` | MODIFY — update main tool label |
| `index.html` | MODIFY — update title, meta description, schema |

Existing StairCalculatorSection, MultiRoomCalculator, CarpetComparisonTool, RetailerComparison, FAQ remain unchanged — just repositioned on the page.

