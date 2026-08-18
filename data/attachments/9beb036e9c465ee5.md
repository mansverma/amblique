# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/plp.spec.ts >> Mobile product card (M-CARD-101–115) >> M-CARD-113 Add to Wishlist is present in markup but not displayed
- Location: tests/mobile/plp.spec.ts:259:7

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first().getByRole('button', { name: /wishlist/i }).or(locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first().locator('[aria-label*="wishlist" i]')).first()
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first().getByRole('button', { name: /wishlist/i }).or(locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first().locator('[aria-label*="wishlist" i]')).first()
    14 × locator resolved to <button aria-label="Add to Wishlist" class="w-9 h-9 p-2 flex items-center justify-center rounded-ui transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed relative top-auto right-auto z-20 bg-muted hover:bg-background shadow-sm border-0">…</button>
       - unexpected value "visible"

```

```yaml
- button "Add to Wishlist"
```

# Test source

```ts
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
  246 |   });
  247 | 
  248 |   test('M-CARD-112 Quick Add is revealed after tapping the More options control', async ({ page }) => {
  249 |     const card        = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  250 |     const moreOptions = card.getByRole('button', { name: /more options/i })
  251 |       .or(card.locator('[aria-label*="more" i]')).first();
  252 |     await expect(moreOptions).toBeVisible();
  253 |     await moreOptions.tap();
  254 |     await page.waitForTimeout(400);
  255 |     // Quick Add dialog should now appear
  256 |     await expect(page.getByRole('dialog', { name: /quick add/i })).toBeVisible();
  257 |   });
  258 | 
  259 |   test('M-CARD-113 Add to Wishlist is present in markup but not displayed', async ({ page }) => {
  260 |     const card      = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  261 |     const wishlist  = card.getByRole('button', { name: /wishlist/i })
  262 |       .or(card.locator('[aria-label*="wishlist" i]')).first();
  263 |     await expect(wishlist).toBeAttached();
> 264 |     await expect(wishlist).not.toBeVisible();
      |                                ^ Error: expect(locator).not.toBeVisible() failed
  265 |   });
  266 | 
  267 |   test('M-CARD-114 undisplayed controls (Wishlist, Quick Add) must not receive taps (pointer-events disabled)', async ({ page }) => {
  268 |     const card       = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  269 |     const wishlist   = card.getByRole('button', { name: /wishlist/i })
  270 |       .or(card.locator('[aria-label*="wishlist" i]')).first();
  271 |     const quickAdd   = card.getByRole('button', { name: /quick add/i });
  272 | 
  273 |     for (const ctrl of [wishlist, quickAdd]) {
  274 |       const pe = await ctrl.evaluate(el => window.getComputedStyle(el).pointerEvents).catch(() => 'none');
  275 |       // Must be 'none' or element must be off-screen / zero size
  276 |       if (pe !== 'none') {
  277 |         const box = await ctrl.boundingBox();
  278 |         expect(box?.width ?? 0).toBe(0);
  279 |       }
  280 |     }
  281 |   });
  282 | 
  283 |   test('M-CARD-115 tapping image or product name navigates to PDP', async ({ page }) => {
  284 |     const card     = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
  285 |     const nameLink = card.getByRole('link').last();
  286 |     const href     = await nameLink.getAttribute('href');
  287 |     expect(href).toContain('/product/');
  288 |   });
  289 | });
  290 | 
  291 | // ---------------------------------------------------------------------------
  292 | // M-TCH-104–106  Touch interactions
  293 | // ---------------------------------------------------------------------------
  294 | test.describe('Touch interactions (M-TCH-104–106)', () => {
  295 |   test('M-TCH-104 horizontal swipe on a carousel does not prevent vertical page scrolling', async ({ page }) => {
  296 |     const beforeY = await page.evaluate(() => window.scrollY);
  297 |     // Scroll down normally
  298 |     await page.evaluate(() => window.scrollBy(0, 300));
  299 |     await page.waitForTimeout(200);
  300 |     const afterY  = await page.evaluate(() => window.scrollY);
  301 |     expect(afterY).toBeGreaterThan(beforeY);
  302 |   });
  303 | 
  304 |   test('M-TCH-106 adjacent interactive controls are separated by at least 8 px', async ({ page }) => {
  305 |     // Check two representative adjacent-control pairs on the PLP:
  306 |     // 1. Sort control and Filters button (always visible above the grid)
  307 |     // 2. Pagination Previous and Next buttons
  308 |     const failures: string[] = [];
  309 | 
  310 |     const measureGap = async (labelA: string, a: any, labelB: string, b: any) => {
  311 |       const boxA = await a.boundingBox();
  312 |       const boxB = await b.boundingBox();
  313 |       if (!boxA || !boxB) return;
  314 |       // Horizontal gap: left edge of B minus right edge of A (assumes B is to the right)
  315 |       const gap = Math.abs(boxB.x - (boxA.x + boxA.width));
  316 |       if (gap < 8) failures.push(`"${labelA}" → "${labelB}": ${gap.toFixed(1)}px gap`);
  317 |     };
  318 | 
  319 |     // Pair 1: sort control and Filters button
  320 |     const sortCtrl   = page.getByLabel(/sort by/i).or(page.locator('select[name*="sort" i]')).first();
  321 |     const filtersBtn = page.getByRole('button', { name: /filters/i });
  322 |     if (await sortCtrl.isVisible() && await filtersBtn.isVisible()) {
  323 |       await measureGap('Sort by', sortCtrl, 'Filters', filtersBtn);
  324 |     }
  325 | 
  326 |     // Pair 2: pagination Previous and Next
  327 |     const prevBtn = page.getByRole('button', { name: /previous|prev/i })
  328 |       .or(page.getByRole('link', { name: /previous|prev/i })).first();
  329 |     const nextBtn = page.getByRole('button', { name: /next/i })
  330 |       .or(page.getByRole('link', { name: /next/i })).first();
  331 |     if (await prevBtn.isVisible() && await nextBtn.isVisible()) {
  332 |       await measureGap('Previous', prevBtn, 'Next', nextBtn);
  333 |     }
  334 | 
  335 |     expect(failures, `Controls too close together:\n${failures.join('\n')}`).toHaveLength(0);
  336 |   });
  337 | });
  338 | 
```