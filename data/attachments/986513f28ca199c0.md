# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> PLP refinements (PLP-109–113) >> PLP-112a refinement panel contains "Colour" group
- Location: tests/desktop/plp.spec.ts:133:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /filters/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]: Oops...Something went wrong
  - button "Refresh" [ref=e5]
```

# Test source

```ts
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
  63  |     await expect(page.getByText(/Women\s*\(36\)/)).toBeVisible();
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
> 134 |     await page.getByRole('button', { name: /filters/i }).click();
      |                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  164 | 
  165 |   test('PLP-115 pagination has Previous, page numbers and Next; more than one page exists', async ({ page }) => {
  166 |     await expect(page.getByRole('button', { name: /previous|prev/i })
  167 |       .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
  168 |     await expect(page.getByRole('button', { name: /next/i })
  169 |       .or(page.getByRole('link', { name: /next/i })).first()).toBeVisible();
  170 |     // At least page "2" must be reachable (spec says 2 pages; arithmetic gives 3)
  171 |     await expect(page.getByRole('button', { name: '2' })
  172 |       .or(page.getByRole('link', { name: '2' })).first()).toBeVisible();
  173 |   });
  174 | 
  175 |   test('PLP-118 no card overflows the viewport horizontally', async ({ page }) => {
  176 |     const viewportWidth = page.viewportSize()!.width;
  177 |     const cards = page.locator('[data-product-id], .product-tile, article[itemtype*="Product"]')
  178 |       .or(page.locator('[class*="product-card"], [class*="ProductCard"]'));
  179 |     const count = await cards.count();
  180 |     for (let i = 0; i < count; i++) {
  181 |       const box = await cards.nth(i).boundingBox();
  182 |       if (box) expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 1);
  183 |     }
  184 |   });
  185 | });
  186 | 
  187 | // ---------------------------------------------------------------------------
  188 | // CARD-101–116  Shared Product Card (PLP context)
  189 | // ---------------------------------------------------------------------------
  190 | test.describe('Shared Product Card on PLP (CARD-101–116)', () => {
  191 |   const firstCard = () => {
  192 |     // Helper — fresh locator each use
  193 |     return null;
  194 |   };
  195 | 
  196 |   test('CARD-101/104 image and product name both link to PDP (/product/)', async ({ page }) => {
  197 |     const card = page.locator('[class*="product-card"]').first();
  198 |     // Image link is aria-hidden (decorative duplicate); name link is the primary accessible link
  199 |     const imgLink  = card.locator('a[href*="/product/"]').first();
  200 |     const nameLink = card.locator('a:not([aria-hidden])').filter({ has: page.locator('text=/[A-Z]/')}).first();
  201 |     const imgHref  = await imgLink.getAttribute('href');
  202 |     const nameHref = await nameLink.getAttribute('href');
  203 |     expect(imgHref ?? '').toContain('/product/');
  204 |     expect(nameHref ?? '').toContain('/product/');
  205 |   });
  206 | 
  207 |   test('CARD-102 brand name is present above product name', async ({ page }) => {
  208 |     const card = page.locator('[class*="product-card"]').first();
  209 |     // Brand is a <p> that appears before the product name <a>; both share the same text-muted class
  210 |     const brand = card.locator('p.text-muted-foreground, p[class*="muted"]').first();
  211 |     await expect(brand).toBeVisible();
  212 |   });
  213 | 
  214 |   test('CARD-103 category line is shown on PLP cards', async ({ page }) => {
  215 |     const card = page.locator('[class*="product-card"]').first();
  216 |     // Category is the second <p> in the card info area (brand=first, category=second)
  217 |     const category = card.locator('p.text-muted-foreground, p[class*="muted"]').nth(1);
  218 |     await expect(category).toBeVisible();
  219 |   });
  220 | 
  221 |   test('CARD-105 SKU is present in format "SKU: {id}"', async ({ page }) => {
  222 |     const card = page.locator('[class*="product-card"], [data-product-id]').first();
  223 |     await expect(card.getByText(/SKU:/i)).toBeVisible();
  224 |   });
  225 | 
  226 |   test('CARD-106 star rating and review count are present', async ({ page }) => {
  227 |     const card = page.locator('[class*="product-card"]').first();
  228 |     // Rating group: <div role="group" aria-label="N out of 5 stars, N reviews">
  229 |     const rating = card.getByRole('group').filter({ hasText: /stars|reviews/i })
  230 |       .or(card.locator('[aria-label*="stars" i]')).first();
  231 |     await expect(rating).toBeVisible();
  232 |   });
  233 | 
  234 |   test('CARD-107 current price is always shown', async ({ page }) => {
```