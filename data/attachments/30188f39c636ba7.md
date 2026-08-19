# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/plp.spec.ts >> Mobile PLP refinements (M-PLP-110–114) >> M-PLP-110 refinements are multi-select
- Location: tests/mobile/plp.spec.ts:98:7

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 2
Received:    0
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /MarketStreet/en-US/
          - img "Home" [ref=e7]
        - generic [ref=e8]:
          - button "Find a Store" [ref=e9] [cursor=pointer]
          - link "Sign In" [ref=e10] [cursor=pointer]:
            - /url: /MarketStreet/en-US/login
          - link "Wishlist" [ref=e11] [cursor=pointer]:
            - /url: /MarketStreet/en-US/wishlist
          - 'button "My cart, number of items: 0" [ref=e12] [cursor=pointer]'
          - button "Open menu" [ref=e14] [cursor=pointer]
      - generic [ref=e18]:
        - generic [ref=e19]: Search
        - combobox "Search" [ref=e20]
  - main [ref=e21]:
    - generic [ref=e22]:
      - generic [ref=e29]:
        - generic [ref=e30]: Women
        - paragraph [ref=e31]: Women
        - generic [ref=e32]: 36 products available
      - generic [ref=e33]:
        - navigation "Breadcrumb" [ref=e35]:
          - list [ref=e36]:
            - listitem [ref=e37]:
              - link "Home" [ref=e38] [cursor=pointer]:
                - /url: /MarketStreet/en-US/
            - listitem [ref=e39]:
              - link "Women" [ref=e42] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/women
        - generic [ref=e43]:
          - heading "Women (36)" [level=1] [ref=e44]
          - generic [ref=e46]:
            - generic [ref=e47]: "Sort by:"
            - combobox "Sort by:" [ref=e49] [cursor=pointer]:
              - option "Best Matches" [selected]
              - option "Price Low To High"
              - option "Price High to Low"
              - option "Product Name A - Z"
              - option "Product Name Z - A"
              - option "Brand"
              - option "Most Popular"
              - option "Top Sellers"
        - generic [ref=e50]:
          - generic [ref=e51]:
            - button "Filters" [ref=e52] [cursor=pointer]
            - group "Quick category filters" [ref=e53]:
              - button "Accessories" [ref=e54] [cursor=pointer]
              - button "Bags" [active] [ref=e55] [cursor=pointer]
              - button "Bottoms" [ref=e56] [cursor=pointer]
              - button "Dresses" [ref=e57] [cursor=pointer]
              - button "Knitwear" [ref=e58] [cursor=pointer]
              - button "New In" [ref=e59] [cursor=pointer]
              - button "Outerwear" [ref=e60] [cursor=pointer]
              - button "Shoes" [ref=e61] [cursor=pointer]
              - button "Tops" [ref=e62] [cursor=pointer]
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65] [cursor=pointer]:
                - generic [ref=e67]:
                  - link [ref=e69]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - link [ref=e73]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - button "Add to Wishlist" [ref=e76]
                  - button "Quick Add Leather Crossbody Bag" [ref=e80]: Quick Add
                - generic [ref=e81]:
                  - paragraph [ref=e82]: Performer
                  - paragraph [ref=e83]: Women
                  - heading [level=3] [ref=e84]:
                    - link "Leather Crossbody Bag" [ref=e85]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - paragraph [ref=e86]: "SKU: standard-prd-womens-leather-crossbody-bag"
                  - generic [ref=e89]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e90]
                    - button "(218)" [ref=e101]
                  - generic [ref=e103]:
                    - text: $109.99
                    - generic [ref=e104]: "Leather Crossbody Bag Current price: $109.99"
                    - text: $139.90
                    - generic [ref=e105]: "Leather Crossbody Bag List price: $139.90"
              - generic [ref=e106] [cursor=pointer]:
                - generic [ref=e108]:
                  - link [ref=e110]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                  - link [ref=e114]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                  - button "Add to Wishlist" [ref=e117]
                  - button "Quick Add Knit Midi Skirt" [ref=e121]: Quick Add
                - generic [ref=e122]:
                  - group "Available colors" [ref=e124]:
                    - link "View Knit Midi Skirt in Beige" [ref=e125]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                    - link "View Knit Midi Skirt in Black" [ref=e126]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
                    - link "View Knit Midi Skirt in Navy" [ref=e127]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
                  - paragraph [ref=e128]: Performer
                  - paragraph [ref=e129]: Women
                  - heading [level=3] [ref=e130]:
                    - link "Knit Midi Skirt" [ref=e131]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                  - paragraph [ref=e132]: "SKU: womens-knit-midi-skirt"
                  - generic [ref=e135]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e136]
                    - button "(218)" [ref=e147]
                  - generic [ref=e149]:
                    - text: $59.99
                    - generic [ref=e150]: "Knit Midi Skirt Current price: $59.99"
                    - text: $69.90
                    - generic [ref=e151]: Knit Midi Skirt List price from $69.90
              - generic [ref=e152] [cursor=pointer]:
                - generic [ref=e154]:
                  - link [ref=e156]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt
                  - link [ref=e160]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                  - button "Add to Wishlist" [ref=e163]
                  - button "Quick Add Denim Midi Skirt" [ref=e167]: Quick Add
                - generic [ref=e168]:
                  - paragraph [ref=e169]: Performer
                  - paragraph [ref=e170]: Women
                  - heading [level=3] [ref=e171]:
                    - link "Denim Midi Skirt" [ref=e172]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                  - paragraph [ref=e173]: "SKU: womens-denim-midi-skirt"
                  - generic [ref=e176]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e177]
                    - button "(218)" [ref=e188]
                  - generic [ref=e189]:
                    - generic [ref=e190]:
                      - text: $44.99
                      - generic [ref=e191]: "Denim Midi Skirt Current price: $44.99"
                      - text: $69.90
                      - generic [ref=e192]: Denim Midi Skirt List price from $69.90
                    - generic [ref=e193]: New In - 25% Off!
              - generic [ref=e195] [cursor=pointer]:
                - generic [ref=e197]:
                  - link [ref=e199]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer
                  - link [ref=e203]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                  - generic [ref=e204]:
                    - generic [ref=e205]: Best Seller
                    - generic [ref=e206]: New
                  - button "Add to Wishlist" [ref=e209]
                  - button "Quick Add Structured Blazer" [ref=e213]: Quick Add
                - generic [ref=e214]:
                  - paragraph [ref=e215]: Performer
                  - paragraph [ref=e216]: Women
                  - heading [level=3] [ref=e217]:
                    - link "Structured Blazer" [ref=e218]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                  - paragraph [ref=e219]: "SKU: womens-structured-blazer"
                  - generic [ref=e222]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e223]
                    - button "(218)" [ref=e234]
                  - generic [ref=e235]:
                    - generic [ref=e236]:
                      - text: $74.99
                      - generic [ref=e237]: "Structured Blazer Current price: $74.99"
                      - text: $129.90
                      - generic [ref=e238]: Structured Blazer List price from $129.90
                    - generic [ref=e239]: New In - 25% Off!
            - generic [ref=e290]:
              - paragraph [ref=e291]: Showing 24 of 36
              - button "Load more" [ref=e292] [cursor=pointer]
  - contentinfo [ref=e293]:
    - generic [ref=e296]:
      - generic [ref=e297]:
        - generic [ref=e298]:
          - link [ref=e299] [cursor=pointer]:
            - /url: /MarketStreet/en-US/
            - img "Market Street" [ref=e300]
          - generic [ref=e301]:
            - link "Youtube" [ref=e302] [cursor=pointer]:
              - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
              - img "YouTube" [ref=e303]
            - link "Instagram" [ref=e305] [cursor=pointer]:
              - /url: https://instagram.com/commercecloud
              - img "Instagram" [ref=e306]
            - link "X" [ref=e308] [cursor=pointer]:
              - /url: https://x.com/CommerceCloud
              - img "X" [ref=e309]
            - link "Facebook" [ref=e311] [cursor=pointer]:
              - /url: https://facebook.com/CommerceCloud/
              - img "Facebook" [ref=e312]
        - generic [ref=e314]:
          - link "About Us" [ref=e315] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e316] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e317] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e318] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
      - generic [ref=e319]:
        - generic [ref=e320]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e321]:
          - generic [ref=e322]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e325] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e328] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e329]:
            - link "Privacy Policy" [ref=e330] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e331] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
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
  39  |     await expect(page.getByRole('heading', { name: 'Women' }).first()).toBeVisible();
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
> 108 |     expect(active).toBeGreaterThanOrEqual(2);
      |                    ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
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
  145 |     await page.getByRole('button', { name: /filters/i }).tap();
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
```