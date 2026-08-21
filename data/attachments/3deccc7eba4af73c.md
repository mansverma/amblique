# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/plp.spec.ts >> Mobile PLP page structure (M-PLP-101–106) >> M-PLP-103 page heading is "Women"
- Location: tests/mobile/plp.spec.ts:38:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Women' }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Women' }).first()

```

```yaml
- link "skipToMainContent":
  - /url: "#main-content"
- banner:
  - link "Logo":
    - /url: /MarketStreet/en-US/
    - img "Logo"
- main:
  - text: "500"
  - heading "Something went wrong" [level=1]
  - paragraph: We're sorry, but something unexpected happened on our end. Our team has been notified and is working to fix it.
  - paragraph: Please try again in a few moments, or browse our shop while we sort things out.
  - link "Go to Homepage":
    - /url: /MarketStreet/en-US/
- contentinfo:
  - paragraph: © 2026 All rights reserved.
- region "Notifications alt+T"
```

# Test source

```ts
  1   | /**
  2   |  * Mobile – Category Listing page (PLP), Quick Add modal, product card and touch
  3   |  *
  4   |  * Covers: M-PLP-101–119 | M-QA-101–106 | M-CARD-101–115 | M-TCH-104–106
  5   |  *
  6   |  * Reference category: Women  /MarketStreet/en-US/category/women
  7   |  * Viewport: 375 × 812, iPhone 12 emulation
  8   |  *
  9   |  * ⚠ Spec inconsistency M-PLP-118:
  10  |  *   M-PLP-117 states 12 products per page.
  11  |  *   M-PLP-118 states "Women returns 2 pages, consistent with 36 results at 24 per page".
  12  |  *   The "at 24 per page" conflicts with M-PLP-117 (12/page).
  13  |  *   Also: desktop PLP-115 says 2 pages but 36 ÷ 12 = 3 pages.
  14  |  *   Tests assert pagination EXISTS and covers multiple pages without asserting exact count.
  15  |  */
  16  | 
  17  | import { test, expect } from '@playwright/test';
  18  | import { bypassConsent } from '../helpers/consent';
  19  | import { WOMEN_PLP_PATH, SORT_OPTIONS, CATEGORY_REFINEMENTS, WOMEN_PRICE_BANDS } from '../fixtures';
  20  | 
  21  | test.beforeEach(async ({ page }) => {
  22  |   await bypassConsent(page);
  23  |   await page.goto(WOMEN_PLP_PATH);
  24  | });
  25  | 
  26  | // ---------------------------------------------------------------------------
  27  | // M-PLP-101–106  Page structure
  28  | // ---------------------------------------------------------------------------
  29  | test.describe('Mobile PLP page structure (M-PLP-101–106)', () => {
  30  |   test('M-PLP-101 page title is "Women | Storefront Next: Market Street"', async ({ page }) => {
  31  |     await expect(page).toHaveTitle(/Women.*Storefront Next.*Market Street/i);
  32  |   });
  33  | 
  34  |   test('M-PLP-102 category banner shows "WOMEN" in uppercase overlaid on banner image', async ({ page }) => {
  35  |     await expect(page.getByText('WOMEN').first()).toBeVisible();
  36  |   });
  37  | 
  38  |   test('M-PLP-103 page heading is "Women"', async ({ page }) => {
> 39  |     await expect(page.getByRole('heading', { name: 'Women' }).first()).toBeVisible();
      |                                                                        ^ Error: expect(locator).toBeVisible() failed
  40  |   });
  41  | 
  42  |   test('M-PLP-104 result summary reads "36 products available"', async ({ page }) => {
  43  |     await expect(page.getByText(/36 products available/i)).toBeVisible();
  44  |   });
  45  | 
  46  |   test('M-PLP-105 breadcrumb is "Home > Women"; Home links to home page', async ({ page }) => {
  47  |     const breadcrumb = page.getByRole('navigation', { name: /breadcrumb/i })
  48  |       .or(page.locator('[aria-label*="breadcrumb" i]')).first();
  49  |     const homeLink = breadcrumb.getByRole('link', { name: 'Home' });
  50  |     await expect(homeLink).toBeVisible();
  51  |     expect(await homeLink.getAttribute('href')).toMatch(/\/MarketStreet\/en-US\//i);
  52  |     await expect(breadcrumb.getByText('Women').first()).toBeVisible();
  53  |   });
  54  | 
  55  |   test('M-PLP-106 result count heading shows "Women (36)"', async ({ page }) => {
  56  |     await expect(page.getByText(/Women\s*\(36\)/)).toBeVisible();
  57  |   });
  58  | });
  59  | 
  60  | // ---------------------------------------------------------------------------
  61  | // M-PLP-107–109  Sort control
  62  | // ---------------------------------------------------------------------------
  63  | test.describe('Mobile PLP sort (M-PLP-107–109)', () => {
  64  |   test('M-PLP-107 sort control is a native select labelled "Sort by:"', async ({ page }) => {
  65  |     const select = page.locator('select').filter({ has: page.locator('option') });
  66  |     await expect(select.first()).toBeAttached();
  67  |     await expect(page.getByText('Sort by:').first()).toBeVisible();
  68  |   });
  69  | 
  70  |   test('M-PLP-108 sort control has eight options in specified order', async ({ page }) => {
  71  |     const select = page.getByLabel(/sort by/i)
  72  |       .or(page.locator('select[name*="sort" i]')).first();
  73  |     const options = await select.locator('option').allInnerTexts();
  74  |     for (const opt of SORT_OPTIONS) {
  75  |       expect(options.some(o => o.trim().toLowerCase() === opt.toLowerCase())).toBe(true);
  76  |     }
  77  |   });
  78  | 
  79  |   test('M-PLP-109 default sort is "Most Popular"', async ({ page }) => {
  80  |     const select = page.getByLabel(/sort by/i)
  81  |       .or(page.locator('select[name*="sort" i]')).first();
  82  |     const value  = await select.inputValue();
  83  |     expect(value).toMatch(/most popular/i);
  84  |   });
  85  | });
  86  | 
  87  | // ---------------------------------------------------------------------------
  88  | // M-PLP-110–114  Refinements and filters panel
  89  | // ---------------------------------------------------------------------------
  90  | test.describe('Mobile PLP refinements (M-PLP-110–114)', () => {
  91  |   test('M-PLP-110 nine category refinement chips are always visible outside the filters panel', async ({ page }) => {
  92  |     for (const cat of CATEGORY_REFINEMENTS) {
  93  |       await expect(page.getByRole('button', { name: cat })
  94  |         .or(page.getByRole('link', { name: cat })).first()).toBeVisible();
  95  |     }
  96  |   });
  97  | 
  98  |   test('M-PLP-110 refinements are multi-select', async ({ page }) => {
  99  |     const first  = page.getByRole('button', { name: CATEGORY_REFINEMENTS[0] })
  100 |       .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[0] })).first();
  101 |     const second = page.getByRole('button', { name: CATEGORY_REFINEMENTS[1] })
  102 |       .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[1] })).first();
  103 |     await first.tap();
  104 |     await page.waitForLoadState('networkidle');
  105 |     await second.tap();
  106 |     await page.waitForLoadState('networkidle');
  107 |     const active = await page.locator('[aria-pressed="true"], [aria-selected="true"]').count();
  108 |     expect(active).toBeGreaterThanOrEqual(2);
  109 |   });
  110 | 
  111 |   test('M-PLP-111 Filters button is present', async ({ page }) => {
  112 |     await expect(page.getByRole('button', { name: /filters/i })).toBeVisible();
  113 |   });
  114 | 
  115 |   test('M-PLP-112 Filters panel expands inline in page flow (not a drawer, overlay or modal)', async ({ page }) => {
  116 |     const filtersBtn = page.getByRole('button', { name: /filters/i });
  117 |     const initialGridTop = await page.locator('[class*="product-grid"], [class*="ProductGrid"]')
  118 |       .first().boundingBox().then(b => b?.y ?? 0);
  119 | 
  120 |     await filtersBtn.tap();
  121 |     await page.waitForTimeout(500);
  122 | 
  123 |     const afterGridTop = await page.locator('[class*="product-grid"], [class*="ProductGrid"]')
  124 |       .first().boundingBox().then(b => b?.y ?? 0);
  125 | 
  126 |     // Grid is pushed down — proving inline expansion, not overlay
  127 |     expect(afterGridTop).toBeGreaterThan(initialGridTop);
  128 |     // No visible dialog — it is NOT a modal (hidden consent modal stays in DOM)
  129 |     await expect(page.getByRole('dialog')).toHaveCount(0);
  130 |   });
  131 | 
  132 |   test('M-PLP-113 filters panel: Shop by Availability expanded by default; Price collapsed', async ({ page }) => {
  133 |     await page.getByRole('button', { name: /filters/i }).tap();
  134 |     await page.waitForTimeout(500);
  135 | 
  136 |     // "Shop by Availability" section should be expanded showing its contents
  137 |     await expect(page.getByText(/In stock at/i)).toBeVisible();
  138 |     await expect(page.getByText(/Select Store/i).first()).toBeVisible();
  139 | 
```