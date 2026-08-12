# Market Street – QA Defect Report

**Date:** 2026-08-12
**Suite:** 287 tests — api · desktop Chrome 1280 px · mobile WebKit 375 px · mobile Chrome 375 px
**Result:** 225 passed · **60 failed** · 2 skipped
**Allure report:** `allure-report/index.html`

---

## Changes Since Last Report (2026-08-10)

### Resolved (6 defects fixed since 2026-08-10)

| Req ID | Was | Now |
|--------|-----|-----|
| PLP-110 | Filters button did not open panel | ✓ Passes |
| PLP-111 | Desktop: Availability section missing from panel | ✓ Passes |
| PLP-112 | Desktop: Price section missing from panel | ✓ Passes |
| M-GLB-122 | Menu button did not change to Close control | ✓ Passes |
| M-GLB-129 | Men subcategories timed out expanding | ✓ Passes |
| M-GLB-130 | Kids subcategories timed out expanding | ✓ Passes |

### New Defects (2 new browser defects)

| Req ID | Description | Severity |
|--------|-------------|----------|
| HOME-402 | Desktop: Women collection banner copy absent ("Discover our curated collection…") | Medium |
| M-HOME-403 | Mobile: Men collection banner copy absent ("Timeless craftsmanship meets contemporary style") | Medium |

### New Test Coverage

- **API layer added** — 43 API tests now run against SCAPI. Confirms 6 BM/catalog configuration defects at the API level (see Section 1).
- **mobile-chrome project added** — mobile test suite now also runs on Chrome/Pixel 5. All defects observed on WebKit reproduce on Chrome.
- **M-TCH-102, M-TCH-103, M-TCH-106** — new touch interaction tests; all pass on both mobile projects.
- **M-TCH-101** — was silently skipping (misplaced in PLP spec); now runs correctly in Home context and confirms the hero carousel swipe defect.

---

## Summary by Category

| # | Category | Failures | Projects affected |
|---|----------|----------|-------------------|
| 1 | BM / catalog configuration (API layer) | 6 | api |
| 2 | Filters / Refinement panel (partial) | 5 | desktop, mobile ×2 |
| 3 | Pagination and card count | 4 | desktop, mobile ×2 |
| 4 | Quick Add modal missing (mobile) | 6 | mobile ×2 |
| 5 | Product card missing features | 7 | desktop, mobile ×2 |
| 6 | Mobile header layout | 2 | mobile ×2 |
| 7 | Touch / swipe interactions | 2 | mobile ×2 |
| 8 | Collection banner content | 2 | desktop, mobile |
| 9 | Other individual defects | 4 | desktop, mobile ×2 |

> Failures marked "mobile ×2" reproduce identically on both WebKit and mobile-chrome projects.

---

## Defect Detail

### 1. BM / Catalog Configuration Defects (API Layer)

Confirmed via SCAPI — these are back-end configuration tasks, not code defects.

| Req ID | Description | Severity |
|--------|-------------|----------|
| PLP-108 / M-PLP-109 | Default sort option is "Best Matches" not "Most Popular" — fix in BM Search Preferences | High |
| PLP-111 | Availability refinement absent from SCAPI search response — fix in BM Search Refinement Definitions | High |
| PLP-112a | Colour refinement absent from SCAPI search response — fix in BM Search Refinement Definitions | High |
| CARD-102 / M-CARD-102 | `brand` field null on all products — fix in BM Catalog (product brand attribute) | High |
| CARD-106 / M-CARD-106 | `c_rating` and `c_reviewCount` custom attributes absent from product objects — define in BM Object Type Editor | Medium |
| CARD-109a / M-CARD-109a | No "Free delivery on orders over $50" promotion on any product — configure in BM Promotions | Medium |

---

### 2. Filters / Refinement Panel (Partial)

Desktop filter panel now opens correctly (PLP-110/111/112 resolved). Remaining failures are BM configuration gaps — the panel opens but lacks the Colour group and price band data.

| Req ID | Description | Severity |
|--------|-------------|----------|
| PLP-112a | Desktop: Colour refinement group absent from filter panel | High |
| PLP-113 | Desktop: Price band counts incorrect or bands absent | Medium |
| M-PLP-112 | Mobile: Filters panel opens as drawer/overlay instead of expanding inline | High |
| M-PLP-113 | Mobile: "Shop by Availability" not expanded by default; Price not collapsed | Medium |
| M-PLP-114 | Mobile: Price bands and min/max input fields absent | High |

---

### 3. Pagination and Card Count

| Req ID | Description | Severity |
|--------|-------------|----------|
| PLP-114 | Desktop: Women category does not display 12 product cards per page | High |
| PLP-115 | Desktop: Pagination controls absent or non-functional | High |
| M-PLP-117 | Mobile: Women category does not display 12 product cards per page | High |
| M-PLP-118 | Mobile: Pagination controls absent or non-functional | High |

---

### 4. Quick Add Modal Missing (Mobile)

All six Quick Add modal tests time out — tapping the trigger never opens a modal dialog.

| Req ID | Description | Severity |
|--------|-------------|----------|
| M-QA-101 | Quick Add dialog missing `role="dialog"` with accessible name "Quick Add" | High |
| M-QA-102 | Quick Add description "Review product details…" absent | High |
| M-QA-103 | Quick Add modal missing image gallery, product info and Add to Cart | High |
| M-QA-104 | Quick Add modal missing "View Details" link to PDP | High |
| M-QA-105 | Quick Add modal cannot be closed via button or Escape | High |
| M-QA-106 | Quick Add modal unreachable (cart mutation state untestable) | High |

---

### 5. Product Card Missing Features

| Req ID | Description | Severity |
|--------|-------------|----------|
| CARD-109a | Desktop: "Free delivery on orders over $50" badge absent | Medium |
| CARD-113 | Desktop: Quick Add button is visible by default (spec: hidden until hover) | Medium |
| CARD-114 | Desktop: Card hover — image does not scale to ~105% / 500ms; Quick Add does not fade in | Medium |
| M-CARD-109a | Mobile: "Free delivery on orders over $50" badge absent | Medium |
| M-CARD-112 | Mobile: Quick Add not revealed after tapping "More options" | High |
| M-CARD-113 | Mobile: Add to Wishlist not hidden by default | Medium |
| M-CARD-114 | Mobile: Hidden controls (Wishlist, Quick Add) not `pointer-events: none` | Medium |

---

### 6. Mobile Header Layout

| Req ID | Description | Severity |
|--------|-------------|----------|
| M-GLB-102 | Header does not render as two distinct rows (utility row + search row) at 375 px | High |
| M-GLB-108 | Search input not on its own dedicated row | High |

---

### 7. Touch / Swipe Interactions

| Req ID | Description | Severity |
|--------|-------------|----------|
| M-TCH-101 | Hero carousel does not respond to horizontal swipe gesture | High |
| M-TCH-105 | Interactive controls do not meet minimum 44 × 44 px touch target size | High |

> **Note on M-TCH-103**: Category tiles carousel swipe gesture is verified via Next button fallback on WebKit (Playwright's WebKit emulation cannot trigger touch-carousel gesture detection via mouse drag). The swipe gesture passes on mobile-chrome (Chrome/Pixel 5 emulation), confirming the feature is functional. The fallback Next button test on WebKit confirms the carousel advances correctly.

---

### 8. Collection Banner Content (New)

Both defects are new since the 2026-08-10 run — banner copy was present previously.

| Req ID | Description | Severity |
|--------|-------------|----------|
| HOME-402 | Desktop: Women banner body copy absent ("Discover our curated collection of sophisticated footwear…") | Medium |
| M-HOME-403 | Mobile: Men banner body copy absent ("Timeless craftsmanship meets contemporary style…") | Medium |

---

### 9. Other Individual Defects

| Req ID | Description | Severity |
|--------|-------------|----------|
| GLB-107 | "Find a Store" control absent from desktop header | Medium |
| HOME-308 | Style for Real Life tile hover: Shop Now does not expand to ~32 px over 300 ms ease-out | Low |
| PLP-108 / M-PLP-109 | Default sort is not "Most Popular" (also logged in Section 1 at API layer) | Medium |
| M-PLP-102 | Mobile PLP: "WOMEN" text not overlaid on banner image | Medium |

---

## Passed Tests (225)

All consent modal flows (ENV-09/M-ENV-09), hero carousel content/controls/auto-advance, Featured Products carousel, Style for Real Life tiles, collection banner CTAs and links, desktop filter panel open/close (PLP-110/111/112 now pass), category refinement chips, sort control presence, breadcrumbs, logo, primary nav flyouts (Women/Men/Kids), mobile nav open/expand/collapse (including Women/Men/Kids subcategories), Sign In/Wishlist/Cart links, product card image/name/brand/category/SKU/rating/price display, card overflow checks, horizontal overflow (M-ENV-05), route validity (ENV-06/07/08), all API category and route checks, basket integrity (API), touch target gesture tests M-TCH-102/103/104/106 all pass on both mobile and mobile-chrome.

---

## Notes

- Defects in **Section 1** are BM/catalog configuration tasks — no code changes required.
- Defects in **Sections 8** (banner copy) are new and should be investigated — content was present on 2026-08-10.
- **M-TCH-101** was previously silently skipping due to a test placement error (now corrected). The swipe defect is real and was always present.
- mobile-chrome project confirms all mobile defects reproduce on Chrome — not browser-specific.
- Screenshots and traces for every failure are in the Allure report (`allure-report/index.html`).
