# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/plp.spec.ts >> Mobile PLP refinements (M-PLP-110–114) >> M-PLP-114 price refinement has min/max fields and price bands with counts
- Location: tests/mobile/plp.spec.ts:144:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.tap: Test timeout of 30000ms exceeded.
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
  140 |     // "Price" section should exist but may be collapsed
  141 |     await expect(page.getByText(/Price/i).first()).toBeVisible();
  142 |   });
  143 | 
  144 |   test('M-PLP-114 price refinement has min/max fields and price bands with counts', async ({ page }) => {
> 145 |     await page.getByRole('button', { name: /filters/i }).tap();
      |                                                          ^ Error: locator.tap: Test timeout of 30000ms exceeded.
  146 |     await page.waitForTimeout(500);
  147 | 
  148 |     // Expand Price if collapsed
  149 |     const priceGroup = page.getByText('Price').locator('..').first();
  150 |     const collapsed  = await priceGroup.locator('[aria-expanded="false"]').count();
  151 |     if (collapsed > 0) await priceGroup.tap();
  152 |     await page.waitForTimeout(300);
  153 | 
  154 |     for (const band of WOMEN_PRICE_BANDS) {
  155 |       await expect(page.getByText(new RegExp(band.label.replace(/\$/g, '\\$')))).toBeVisible();
  156 |     }
  157 |   });
  158 | });
  159 | 
  160 | // ---------------------------------------------------------------------------
  161 | // M-PLP-115–119  Grid and pagination
  162 | // ---------------------------------------------------------------------------
  163 | test.describe('Mobile PLP grid and pagination (M-PLP-115–119)', () => {
  164 |   test('M-PLP-115 no card overflows the 375 px viewport horizontally', async ({ page }) => {
  165 |     const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
  166 |     const count = await cards.count();
  167 |     for (let i = 0; i < count; i++) {
  168 |       const box = await cards.nth(i).boundingBox();
  169 |       if (box) expect(box.x + box.width).toBeLessThanOrEqual(375 + 1);
  170 |     }
  171 |   });
  172 | 
  173 |   test('M-PLP-117 page shows 12 product cards', async ({ page }) => {
  174 |     const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
  175 |     await expect(cards).toHaveCount(12);
  176 |   });
  177 | 
  178 |   test('M-PLP-118 pagination has Previous, page numbers and Next; more than one page exists', async ({ page }) => {
  179 |     await expect(page.getByRole('button', { name: /previous|prev/i })
  180 |       .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
  181 |     await expect(page.getByRole('button', { name: /next/i })
  182 |       .or(page.getByRole('link', { name: /next/i })).first()).toBeVisible();
  183 |     await expect(page.getByRole('button', { name: '2' })
  184 |       .or(page.getByRole('link', { name: '2' })).first()).toBeVisible();
  185 |   });
  186 | 
  187 |   test('M-PLP-116 cards within a row share consistent width', async ({ page }) => {
  188 |     const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
  189 |     const boxes = await Promise.all(
  190 |       Array.from({ length: await cards.count() }, (_, i) => cards.nth(i).boundingBox())
  191 |     );
  192 |     const widths = boxes.filter(Boolean).map(b => Math.round(b!.width));
  193 |     const unique = new Set(widths);
  194 |     // Allow at most 2 distinct widths (last-row orphan may differ)
  195 |     expect(unique.size).toBeLessThanOrEqual(2);
  196 |   });
  197 | });
  198 | 
  199 | 
  200 | // ---------------------------------------------------------------------------
  201 | // M-CARD-101–115  Shared product card (mobile)
  202 | // ---------------------------------------------------------------------------
  203 | test.describe('Mobile product card (M-CARD-101–115)', () => {
  204 |   test('M-CARD-101/104 image and product name link to PDP', async ({ page }) => {
  205 |     const card     = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  206 |     const imgLink  = card.locator('a[href*="/product/"]').first();
  207 |     const nameLink = card.locator('a:not([aria-hidden])').filter({ has: page.locator('text=/[A-Z]/')}).first();
  208 |     expect(await imgLink.getAttribute('href') ?? '').toContain('/product/');
  209 |     expect(await nameLink.getAttribute('href') ?? '').toContain('/product/');
  210 |   });
  211 | 
  212 |   test('M-CARD-102/103 brand name and category line are present on PLP cards', async ({ page }) => {
  213 |     const card = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  214 |     // Brand is first <p class="text-muted-foreground">, category is second
  215 |     await expect(card.locator('p.text-muted-foreground, p[class*="muted"]').first()).toBeVisible();
  216 |     await expect(card.locator('p.text-muted-foreground, p[class*="muted"]').nth(1)).toBeVisible();
  217 |   });
  218 | 
  219 |   test('M-CARD-105 SKU is shown in format "SKU: {id}"', async ({ page }) => {
  220 |     const card = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  221 |     await expect(card.getByText(/SKU:/i)).toBeVisible();
  222 |   });
  223 | 
  224 |   test('M-CARD-106 star rating and review count are present', async ({ page }) => {
  225 |     const card = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  226 |     // Rating: <div role="group" aria-label="N out of 5 stars, N reviews">
  227 |     const rating = card.getByRole('group').filter({ hasText: /stars|reviews/i })
  228 |       .or(card.locator('[aria-label*="stars" i]')).first();
  229 |     await expect(rating).toBeVisible();
  230 |   });
  231 | 
  232 |   test('M-CARD-107 current price is always shown', async ({ page }) => {
  233 |     const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
  234 |     const count = await cards.count();
  235 |     for (let i = 0; i < Math.min(count, 6); i++) {
  236 |       await expect(cards.nth(i).getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
  237 |     }
  238 |   });
  239 | 
  240 |   test('M-CARD-109a "Free delivery on orders over $50" shown on every card', async ({ page }) => {
  241 |     const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
  242 |     const count = await cards.count();
  243 |     for (let i = 0; i < Math.min(count, 6); i++) {
  244 |       await expect(cards.nth(i).getByText(/Free delivery on orders over \$50/i)).toBeVisible();
  245 |     }
```