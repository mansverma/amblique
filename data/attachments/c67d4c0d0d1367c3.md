# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> Shared Product Card on PLP (CARD-101–116) >> CARD-113 Quick Add control is present in card markup (not visible by default)
- Location: tests/desktop/plp.spec.ts:275:7

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('[class*="product-card"], [data-product-id]').first().getByRole('button', { name: /quick add/i })
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('[class*="product-card"], [data-product-id]').first().getByRole('button', { name: /quick add/i })
    14 × locator resolved to <button data-slot="button" data-size="default" data-variant="outline" aria-label="Quick Add Leather Crossbody Bag" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ui text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-inv…>Quick Add</button>
       - unexpected value "visible"

```

```yaml
- button "Quick Add Leather Crossbody Bag": Quick Add
```

# Test source

```ts
  180 |     await expect(page.getByRole('button', { name: /next/i })
  181 |       .or(page.getByRole('link', { name: /next/i })).first()).toBeVisible();
  182 |     // At least page "2" must be reachable (spec says 2 pages; arithmetic gives 3)
  183 |     await expect(page.getByRole('button', { name: '2' })
  184 |       .or(page.getByRole('link', { name: '2' })).first()).toBeVisible();
  185 |   });
  186 | 
  187 |   test('PLP-118 no card overflows the viewport horizontally', async ({ page }) => {
  188 |     const viewportWidth = page.viewportSize()!.width;
  189 |     const cards = page.locator('[data-product-id], .product-tile, article[itemtype*="Product"]')
  190 |       .or(page.locator('[class*="product-card"], [class*="ProductCard"]'));
  191 |     const count = await cards.count();
  192 |     for (let i = 0; i < count; i++) {
  193 |       const box = await cards.nth(i).boundingBox();
  194 |       if (box) expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 1);
  195 |     }
  196 |   });
  197 | });
  198 | 
  199 | // ---------------------------------------------------------------------------
  200 | // CARD-101–116  Shared Product Card (PLP context)
  201 | // ---------------------------------------------------------------------------
  202 | test.describe('Shared Product Card on PLP (CARD-101–116)', () => {
  203 |   const firstCard = () => {
  204 |     // Helper — fresh locator each use
  205 |     return null;
  206 |   };
  207 | 
  208 |   test('CARD-101/104 image and product name both link to PDP (/product/)', async ({ page }) => {
  209 |     const card = page.locator('[class*="product-card"]').first();
  210 |     // Image link is aria-hidden (decorative duplicate); name link is the primary accessible link
  211 |     const imgLink  = card.locator('a[href*="/product/"]').first();
  212 |     const nameLink = card.locator('a:not([aria-hidden])').filter({ has: page.locator('text=/[A-Z]/')}).first();
  213 |     const imgHref  = await imgLink.getAttribute('href');
  214 |     const nameHref = await nameLink.getAttribute('href');
  215 |     expect(imgHref ?? '').toContain('/product/');
  216 |     expect(nameHref ?? '').toContain('/product/');
  217 |   });
  218 | 
  219 |   test('CARD-102 brand name is present above product name', async ({ page }) => {
  220 |     const card = page.locator('[class*="product-card"]').first();
  221 |     // Brand is a <p> that appears before the product name <a>; both share the same text-muted class
  222 |     const brand = card.locator('p.text-muted-foreground, p[class*="muted"]').first();
  223 |     await expect(brand).toBeVisible();
  224 |   });
  225 | 
  226 |   test('CARD-103 category line is shown on PLP cards', async ({ page }) => {
  227 |     const card = page.locator('[class*="product-card"]').first();
  228 |     // Category is the second <p> in the card info area (brand=first, category=second)
  229 |     const category = card.locator('p.text-muted-foreground, p[class*="muted"]').nth(1);
  230 |     await expect(category).toBeVisible();
  231 |   });
  232 | 
  233 |   test('CARD-105 SKU is present in format "SKU: {id}"', async ({ page }) => {
  234 |     const card = page.locator('[class*="product-card"], [data-product-id]').first();
  235 |     await expect(card.getByText(/SKU:/i)).toBeVisible();
  236 |   });
  237 | 
  238 |   test('CARD-106 star rating and review count are present', async ({ page }) => {
  239 |     const card = page.locator('[class*="product-card"]').first();
  240 |     // Rating group: <div role="group" aria-label="N out of 5 stars, N reviews">
  241 |     const rating = card.getByRole('group').filter({ hasText: /stars|reviews/i })
  242 |       .or(card.locator('[aria-label*="stars" i]')).first();
  243 |     await expect(rating).toBeVisible();
  244 |   });
  245 | 
  246 |   test('CARD-107 current price is always shown', async ({ page }) => {
  247 |     const cards = page.locator('[class*="product-card"]');
  248 |     const count = await cards.count();
  249 |     for (let i = 0; i < Math.min(count, 6); i++) {
  250 |       // Price is in a <span> with large font — cheapest selector: text matching $N.NN
  251 |       const price = cards.nth(i).getByText(/\$\d+\.\d{2}/).first();
  252 |       await expect(price).toBeVisible();
  253 |     }
  254 |   });
  255 | 
  256 |   test('CARD-109a "Free delivery on orders over $50" appears on every visible card', async ({ page }) => {
  257 |     const cards = page.locator('[class*="product-card"], [data-product-id]');
  258 |     const count = await cards.count();
  259 |     for (let i = 0; i < Math.min(count, 6); i++) {
  260 |       await expect(cards.nth(i).getByText(/Free delivery on orders over \$50/i)).toBeVisible();
  261 |     }
  262 |   });
  263 | 
  264 |   test('CARD-112 Add to Wishlist control is present on every visible card', async ({ page }) => {
  265 |     const cards = page.locator('[class*="product-card"], [data-product-id]');
  266 |     const count = await cards.count();
  267 |     for (let i = 0; i < Math.min(count, 6); i++) {
  268 |       const wishlist = cards.nth(i)
  269 |         .getByRole('button', { name: /wishlist/i })
  270 |         .or(cards.nth(i).locator('[aria-label*="wishlist" i]')).first();
  271 |       await expect(wishlist).toBeAttached();
  272 |     }
  273 |   });
  274 | 
  275 |   test('CARD-113 Quick Add control is present in card markup (not visible by default)', async ({ page }) => {
  276 |     const card = page.locator('[class*="product-card"], [data-product-id]').first();
  277 |     const quickAdd = card.getByRole('button', { name: /quick add/i });
  278 |     await expect(quickAdd).toBeAttached();
  279 |     // Must not be visible without hover
> 280 |     await expect(quickAdd).not.toBeVisible();
      |                                ^ Error: expect(locator).not.toBeVisible() failed
  281 |   });
  282 | 
  283 |   test('CARD-114 card hover: image scales to ~105 % over 500 ms; Quick Add fades in', async ({ page }) => {
  284 |     const card    = page.locator('[class*="product-card"], [data-product-id]').first();
  285 |     const cardImg = card.locator('img').first();
  286 |     const quickAdd= card.getByRole('button', { name: /quick add/i });
  287 | 
  288 |     // Pre-hover: Quick Add invisible
  289 |     const preOpacity = await getComputedOpacity(page, quickAdd);
  290 |     expect(preOpacity).toBeLessThan(0.1);
  291 | 
  292 |     // CSS must declare the right transition on the image
  293 |     await expectTransitionDuration(page, cardImg, 500);
  294 | 
  295 |     // Hover the card and wait for transitions
  296 |     await hoverAndWait(page, card, cardImg, 700);
  297 | 
  298 |     // Post-hover: image scaled, Quick Add visible
  299 |     const scale       = await getComputedScale(page, cardImg);
  300 |     const postOpacity = await getComputedOpacity(page, quickAdd);
  301 | 
  302 |     expect(scale).toBeCloseTo(1.05, 1);
  303 |     expect(postOpacity).toBeGreaterThan(0.9);
  304 |   });
  305 | 
  306 |   test('CARD-115 product name link is underlined on hover', async ({ page }) => {
  307 |     const card     = page.locator('[class*="product-card"], [data-product-id]').first();
  308 |     const nameLink = card.getByRole('link').last();
  309 |     await nameLink.hover({ force: true });
  310 |     await page.waitForTimeout(200);
  311 |     const decoration = await page.evaluate(
  312 |       el => window.getComputedStyle(el).textDecorationLine,
  313 |       await nameLink.elementHandle()
  314 |     );
  315 |     expect(decoration).toMatch(/underline/);
  316 |   });
  317 | 
  318 |   test('CARD-116 colour swatches each have a 3 px ring on hover', async ({ page }) => {
  319 |     const card = page.locator('[class*="product-card"], [data-product-id]')
  320 |       .filter({ has: page.locator('[class*="swatch" i]') }).first();
  321 |     const swatch = card.locator('[class*="swatch" i]').first();
  322 |     if (!(await swatch.isVisible())) test.skip();
  323 |     await swatch.hover({ force: true });
  324 |     await page.waitForTimeout(200);
  325 |     const outline = await page.evaluate(
  326 |       el => {
  327 |         const s = window.getComputedStyle(el);
  328 |         return s.outline || s.boxShadow || s.border;
  329 |       },
  330 |       await swatch.elementHandle()
  331 |     );
  332 |     // A 3px ring appears as outline or box-shadow
  333 |     expect(outline).toMatch(/3px|ring/i);
  334 |   });
  335 | 
  336 |   test('STATE-04 Quick Add appears when card element receives keyboard focus', async ({ page }) => {
  337 |     const card    = page.locator('[class*="product-card"], [data-product-id]').first();
  338 |     const quickAdd= card.getByRole('button', { name: /quick add/i });
  339 | 
  340 |     // Tab into the card
  341 |     await page.keyboard.press('Tab');
  342 |     for (let i = 0; i < 10; i++) {
  343 |       const focused = await page.evaluate(() => document.activeElement?.closest('[class*="product-card"], [data-product-id]') !== null);
  344 |       if (focused) break;
  345 |       await page.keyboard.press('Tab');
  346 |     }
  347 |     await page.waitForTimeout(300);
  348 |     const opacity = await getComputedOpacity(page, quickAdd).catch(() => 0);
  349 |     // Quick Add must be reachable — either now visible or reachable via further Tab
  350 |     await page.keyboard.press('Tab');
  351 |     await expect(quickAdd).toBeAttached();
  352 |   });
  353 | });
  354 | 
```