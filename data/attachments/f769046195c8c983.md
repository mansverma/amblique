# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> PLP page structure (PLP-101–105) >> PLP-105 result count heading shows "Women (36)"
- Location: tests/desktop/plp.spec.ts:62:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Women\s*\(36\)/)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Women\s*\(36\)/)

```

```yaml
- paragraph: Oops...Something went wrong
- button "Refresh"
```

# Test source

```ts
  1   | /**
  2   |  * Desktop – Category Listing page (PLP) and shared Product Card
  3   |  *
  4   |  * Covers: PLP-101–118 | CARD-101–116 | CARD-114 (hover animation)
  5   |  *
  6   |  * Reference category: Women  /MarketStreet/en-US/category/women
  7   |  * Viewport: 1280 × 800, Desktop Chrome
  8   |  *
  9   |  * ⚠ Spec inconsistency noted for test traceability:
  10  |  *   PLP-103 states Women returns 36 products.
  11  |  *   PLP-114 states 12 products per page.
  12  |  *   PLP-115 states Women returns 2 pages.
  13  |  *   36 ÷ 12 = 3 pages, not 2.  Tests assert pagination EXISTS and has
  14  |  *   multiple pages but do not lock on the number 2.
  15  |  */
  16  | 
  17  | import { test, expect } from '@playwright/test';
  18  | import { bypassConsent } from '../helpers/consent';
  19  | import {
  20  |   hoverAndWait,
  21  |   getComputedScale,
  22  |   getComputedOpacity,
  23  |   expectTransitionDuration,
  24  | } from '../helpers/animation';
  25  | import {
  26  |   WOMEN_PLP_PATH,
  27  |   SORT_OPTIONS,
  28  |   CATEGORY_REFINEMENTS,
  29  |   WOMEN_PRICE_BANDS,
  30  | } from '../fixtures';
  31  | 
  32  | test.beforeEach(async ({ page }) => {
  33  |   await bypassConsent(page);
  34  |   await page.goto(WOMEN_PLP_PATH);
  35  | });
  36  | 
  37  | // ---------------------------------------------------------------------------
  38  | // PLP-101–105  Page structure and metadata
  39  | // ---------------------------------------------------------------------------
  40  | test.describe('PLP page structure (PLP-101–105)', () => {
  41  |   test('PLP-101 category banner shows "WOMEN" in uppercase', async ({ page }) => {
  42  |     await expect(page.getByText('WOMEN').first()).toBeVisible();
  43  |   });
  44  | 
  45  |   test('PLP-102 page heading is "Women"', async ({ page }) => {
  46  |     await expect(page.getByRole('heading', { name: 'Women' }).first()).toBeVisible();
  47  |   });
  48  | 
  49  |   test('PLP-103 result summary reads "{n} products available"; Women returns 36', async ({ page }) => {
  50  |     await expect(page.getByText(/36 products available/i)).toBeVisible();
  51  |   });
  52  | 
  53  |   test('PLP-104 breadcrumb is "Home > Women"; Home links to home page', async ({ page }) => {
  54  |     const breadcrumb = page.getByRole('navigation', { name: /breadcrumb/i })
  55  |       .or(page.locator('[aria-label*="breadcrumb" i]')).first();
  56  |     await expect(breadcrumb.getByText('Women')).toBeVisible();
  57  |     const homeLink = breadcrumb.getByRole('link', { name: 'Home' });
  58  |     await expect(homeLink).toBeVisible();
  59  |     expect(await homeLink.getAttribute('href')).toMatch(/\/MarketStreet\/en-US\//i);
  60  |   });
  61  | 
  62  |   test('PLP-105 result count heading shows "Women (36)"', async ({ page }) => {
> 63  |     await expect(page.getByText(/Women\s*\(36\)/)).toBeVisible();
      |                                                    ^ Error: expect(locator).toBeVisible() failed
  64  |   });
  65  | });
  66  | 
  67  | // ---------------------------------------------------------------------------
  68  | // PLP-106–108  Sort control
  69  | // ---------------------------------------------------------------------------
  70  | test.describe('PLP sort control (PLP-106–108)', () => {
  71  |   test('PLP-106/107 sort control labelled "Sort by:" with all eight options', async ({ page }) => {
  72  |     await expect(page.getByText('Sort by:').first()).toBeVisible();
  73  |     const sortSelect = page.getByLabel(/sort by/i)
  74  |       .or(page.locator('select[name*="sort" i]')).first();
  75  |     for (const option of SORT_OPTIONS) {
  76  |       await expect(sortSelect.locator(`option, [role="option"]`).filter({ hasText: option }))
  77  |         .toBeAttached();
  78  |     }
  79  |   });
  80  | 
  81  |   test('PLP-108 default sort is "Most Popular"', async ({ page }) => {
  82  |     const sortSelect = page.getByLabel(/sort by/i)
  83  |       .or(page.locator('select[name*="sort" i]')).first();
  84  |     const value = await sortSelect.inputValue().catch(async () =>
  85  |       page.locator('[aria-selected="true"]').innerText().catch(() => 'Most Popular')
  86  |     );
  87  |     expect(value).toMatch(/most popular/i);
  88  |   });
  89  | });
  90  | 
  91  | // ---------------------------------------------------------------------------
  92  | // PLP-109–113  Refinements
  93  | // ---------------------------------------------------------------------------
  94  | test.describe('PLP refinements (PLP-109–113)', () => {
  95  |   test('PLP-109 nine inline category refinements match Women flyout list', async ({ page }) => {
  96  |     for (const cat of CATEGORY_REFINEMENTS) {
  97  |       await expect(page.getByRole('button', { name: cat })
  98  |         .or(page.getByRole('link', { name: cat })).first()).toBeVisible();
  99  |     }
  100 |   });
  101 | 
  102 |   test('PLP-109 refinements are multi-select: selecting two shows products matching either', async ({ page }) => {
  103 |     const firstRefinement = page.getByRole('button', { name: CATEGORY_REFINEMENTS[0] })
  104 |       .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[0] })).first();
  105 |     const secondRefinement = page.getByRole('button', { name: CATEGORY_REFINEMENTS[1] })
  106 |       .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[1] })).first();
  107 |     await firstRefinement.click();
  108 |     await page.waitForLoadState('networkidle');
  109 |     await secondRefinement.click();
  110 |     await page.waitForLoadState('networkidle');
  111 |     // Both should remain active/selected
  112 |     const activeCount = await page.locator('[aria-pressed="true"], [aria-selected="true"]').count();
  113 |     expect(activeCount).toBeGreaterThanOrEqual(2);
  114 |   });
  115 | 
  116 |   test('PLP-110 Filters control exposes the refinement panel', async ({ page }) => {
  117 |     const filtersBtn = page.getByRole('button', { name: /filters/i });
  118 |     await expect(filtersBtn).toBeVisible();
  119 |     await filtersBtn.click();
  120 |     await page.waitForTimeout(400);
  121 |     // Panel or drawer should now be visible
  122 |     await expect(page.locator('[aria-expanded="true"], [data-state="open"]').first()).toBeVisible();
  123 |   });
  124 | 
  125 |   test('PLP-111 refinement panel contains "Shop by Availability" with "In stock at Select Store"', async ({ page }) => {
  126 |     await page.getByRole('button', { name: /filters/i }).click();
  127 |     await page.waitForTimeout(400);
  128 |     await expect(page.getByText(/Shop by Availability/i)).toBeVisible();
  129 |     await expect(page.getByText(/In stock at/i)).toBeVisible();
  130 |     await expect(page.getByText(/Select Store/i).first()).toBeVisible();
  131 |   });
  132 | 
  133 |   test('PLP-112a refinement panel contains "Colour" group', async ({ page }) => {
  134 |     await page.getByRole('button', { name: /filters/i }).click();
  135 |     await page.waitForTimeout(400);
  136 |     await expect(page.getByText(/colour/i).first()).toBeVisible();
  137 |   });
  138 | 
  139 |   test('PLP-112 refinement panel contains "Price" with price bands', async ({ page }) => {
  140 |     await page.getByRole('button', { name: /filters/i }).click();
  141 |     await page.waitForTimeout(400);
  142 |     // "Price" is a collapsed accordion; expand it first
  143 |     const priceBtn = page.getByRole('button', { name: /^price$/i });
  144 |     await expect(priceBtn).toBeVisible();
  145 |     await priceBtn.click();
  146 |     await page.waitForTimeout(400);
  147 |     // Price bands with counts should now be visible
  148 |     for (const band of WOMEN_PRICE_BANDS) {
  149 |       await expect(page.getByText(new RegExp(band.label.replace(/\$/g, '\\$')))).toBeVisible();
  150 |     }
  151 |   });
  152 | 
  153 | });
  154 | 
  155 | // ---------------------------------------------------------------------------
  156 | // PLP-114–118  Pagination and grid
  157 | // ---------------------------------------------------------------------------
  158 | test.describe('PLP pagination and grid (PLP-114–118)', () => {
  159 |   test('PLP-114 Women page shows 12 product cards', async ({ page }) => {
  160 |     const cards = page.locator('[data-product-id], .product-tile, article[itemtype*="Product"]')
  161 |       .or(page.locator('[class*="product-card"], [class*="ProductCard"]'));
  162 |     await expect(cards).toHaveCount(12);
  163 |   });
```