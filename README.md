# Market Street — QA Test Suite

Playwright test suite for the Market Street storefront (Harbourline Group replatform — Storefront Next).
Covers Release 1: **Home** and **Category Listing (PLP)** on desktop and mobile.

---

## Requirements

- Node.js 18 or higher
- npm 9 or higher

---

## Installation

```bash
npm ci
npx playwright install --with-deps chromium webkit
```

---

## Running Tests

### All tests (API + desktop + mobile)
```bash
npm test
```

### API tests only
```bash
npm run test:api
```

### Desktop tests only (Chrome 1280px)
```bash
npm run test:desktop
```

### Mobile tests only (WebKit / iPhone 12 375px)
```bash
npm run test:mobile
```

### Run a specific test file
```bash
npx playwright test tests/mobile/home.spec.ts
```

### Run a specific test by title
```bash
npx playwright test --grep "M-GLB-121"
```

### Run headed (watch the browser)
```bash
npm run test:headed
```

### Debug mode
```bash
npm run test:debug
```

---

## Viewing Test Reports

### Allure report (live)

The latest report is always available at:
**https://mansverma.github.io/amblique**

It is published automatically after every CI run on `main`.

### Run Allure report locally

```bash
npm run allure:report
```

Or separately:
```bash
npm run allure:generate   # builds the report from allure-results/
npm run allure:open       # opens it in the browser
```

### Playwright HTML report
```bash
npm run report
```

---

## Project Structure

```
tests/
  api/              # SCAPI layer tests (no browser)
    helpers/
      client.ts     # SFCC API client and auth helpers
  desktop/          # Desktop Chrome tests (1280px)
  mobile/           # Mobile WebKit tests (iPhone 12, 375px)
  fixtures/         # Shared test data (sort options, price bands, categories)
  helpers/          # Shared utilities (consent, animation)
playwright.config.ts
```

---

## CI / Slack Notifications

Tests run automatically on every push and pull request to `main` via GitHub Actions.

Results are posted to [#reg-amblique](https://mansworkspacegroup.slack.com/archives/C0BP9CK3QDD) after each run.

---

## Sandbox

Tests run against the SFCC sandbox:
```
https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com
```

To run against a different environment:
```bash
BASE_URL=https://your-sandbox.commercecloud.salesforce.com npm test
```

No login or credentials are needed — the suite uses a guest SLAS token obtained automatically from the storefront on first load.

---

## What We Don't Automate and Why

Some requirements are deliberately left for manual testing. Automating them would produce unreliable results or add maintenance overhead with no real benefit.

| Requirement | Why not automated |
|-------------|------------------|
| **HOME-308 / CARD-114** — Hover animations (scale 105% / 500ms, Shop Now expand, Quick Add fade) | Playwright can read the declared CSS transition property but cannot verify the actual rendered animation. Results vary by machine and browser version. Manual visual check against Figma is more reliable. |
| **GLB-107 — Find a Store** | Feature not implemented in the current build. No point running a test that will always fail until the feature exists. |
| **M-QA-101–106 — Quick Add modal** | Modal not built yet. Running 6 tests against a feature that doesn't exist only adds noise to every CI run. These will be added back once the modal is shipped. |
| **PLP-113 — Price band hit counts (browser)** | The API test already verifies the exact counts ($0–$49.99: 4, $50–$99.99: 25, $100–$199.99: 7) against the source of truth. Duplicating this in the browser adds nothing. |
| **M-TCH-105 — Touch target size** | Bounding box measurements via `getBoundingClientRect()` are affected by OS font scaling, zoom level and device pixel ratio. On a real device the numbers differ from emulation. Better checked on a physical device before release. |
| **Carousel swipe feel / momentum** | Playwright can confirm the carousel moves but cannot judge whether the swipe feels natural. Real device testing on iPhone (Safari) and Android (Chrome) is required for this. |
| **Consent modal persistence** | Whether Accept/Decline actually persists on the next visit requires managing session state across browser restarts — fragile to automate. Covered in the manual smoke checklist. |
| **Visual parity against Figma** | Pixel comparison is out of toolchain scope. Verified manually by the QA team against the DSD files. |

---

## Known Failures

The suite currently has **37 failures** across API, desktop, and mobile. All are known product or configuration defects — not broken tests. No test needs to be fixed; the underlying product issues need to be resolved.

---

### Business Manager / Catalog configuration
These require a Commerce Admin to fix in Salesforce Business Manager — no code changes needed:

| Test | Reason |
|------|--------|
| PLP-108 / M-PLP-109 default sort is "Most Popular" | BM Search Preferences: sandbox is returning "Best Matches" as the default sort. Change the default sort rule to "Most Popular" in BM. |
| PLP-111 availability refinement present | BM Search Refinement Definitions: availability refinement not enabled for the Women category. |
| PLP-112a colour refinement present | BM Search Refinement Definitions: colour refinement not enabled for the Women category. |
| PLP-112 / PLP-113 price bands | BM Search Refinement Definitions: price refinement not configured with the correct bands. |
| CARD-102 / M-CARD-102 brand field present | Brand attribute not populated on any product in the catalog. Set brand on all products in BM Catalog. |
| CARD-106 / M-CARD-106 rating and review count fields | Custom attributes `c_rating` and `c_reviewCount` not defined. Add them in BM Object Type Editor. |
| CARD-109a / M-CARD-109a free delivery badge | No "Free delivery on orders over $50" promotion configured. Set up the promotion in BM Promotions and assign it to the catalog. |

---

### Features not yet built on the storefront

| Test | Reason |
|------|--------|
| GLB-107 Find a Store link | "Find a Store" link not implemented in the current build. |
| PLP-114 / M-PLP-117 page shows 12 product cards | PLP grid is not paginating — all products load without splitting into pages of 12. |
| PLP-115 / M-PLP-118 pagination controls | Pagination component not rendered on the page. |
| PLP-110 Filters panel opens | Filters button click is not opening the panel; `aria-expanded` state not being set. |
| M-QA-101–106 Quick Add modal (all 6 tests) | Quick Add modal has not been implemented. Tapping the trigger does nothing. |
| M-TCH-101 hero carousel swipe | Hero carousel does not respond to horizontal swipe gesture. |

---

### Layout defects (storefront rendering differently to spec)

| Test | Reason |
|------|--------|
| M-GLB-101 header is sticky | Header is not `position: fixed` on mobile — it scrolls with the page. |
| M-GLB-102 / M-GLB-108 header two rows / search on own row | Header is rendering as a single row. Search input is not on its own dedicated row below the logo. |
| M-GLB-125 New Arrivals has no chevron | New Arrivals has an expand button in the nav despite the spec saying it should be a direct link only. |
| M-GLB-131 subcategories indented | Subcategory items are not indented beneath their parent — padding-left not applied. |
| M-PLP-102 WOMEN text on banner | "WOMEN" text is not overlaid on the category banner image. |
| M-PLP-112 filters expand inline | Filters panel is opening as an overlay or drawer instead of expanding inline and pushing the grid down. |
| M-CARD-113 Wishlist hidden by default | Add to Wishlist button is visible on mobile product cards by default — spec says it should be hidden. |
| M-CARD-112 / M-CARD-114 Quick Add / Wishlist pointer-events | Hidden controls are still receiving taps — `pointer-events: none` not applied. |
| M-TCH-105 touch target size | Multiple controls (nav links, sort label, filter chips) are smaller than the required 44 × 44 px minimum. |

---

### Hover / animation (spec behaviour not met)

| Test | Reason |
|------|--------|
| CARD-113 Quick Add hidden by default | Quick Add button is visible by default on desktop. It should only appear on card hover. |
| CARD-114 card hover animation | Quick Add does not fade in on hover; image scale transition not matching the 500 ms spec. |
| HOME-308 tile hover animation | Shop Now label is not collapsing to zero height before hover; transition timing does not match the 300 ms ease-out spec. |
