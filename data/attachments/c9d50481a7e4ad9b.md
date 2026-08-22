# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> Shared Product Card on PLP (CARD-101–116) >> STATE-04 Quick Add appears when card element receives keyboard focus
- Location: tests/desktop/plp.spec.ts:301:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: keyboard.press: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - paragraph [ref=e3]: Oops...Something went wrong
  - button "Refresh" [active] [ref=e5]
```

# Test source

```ts
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
  235 |     const cards = page.locator('[class*="product-card"]');
  236 |     const count = await cards.count();
  237 |     for (let i = 0; i < Math.min(count, 6); i++) {
  238 |       // Price is in a <span> with large font — cheapest selector: text matching $N.NN
  239 |       const price = cards.nth(i).getByText(/\$\d+\.\d{2}/).first();
  240 |       await expect(price).toBeVisible();
  241 |     }
  242 |   });
  243 | 
  244 |   test('CARD-109a "Free delivery on orders over $50" appears on every visible card', async ({ page }) => {
  245 |     const cards = page.locator('[class*="product-card"], [data-product-id]');
  246 |     const count = await cards.count();
  247 |     for (let i = 0; i < Math.min(count, 6); i++) {
  248 |       await expect(cards.nth(i).getByText(/Free delivery on orders over \$50/i)).toBeVisible();
  249 |     }
  250 |   });
  251 | 
  252 |   test('CARD-112 Add to Wishlist control is present on every visible card', async ({ page }) => {
  253 |     const cards = page.locator('[class*="product-card"], [data-product-id]');
  254 |     const count = await cards.count();
  255 |     for (let i = 0; i < Math.min(count, 6); i++) {
  256 |       const wishlist = cards.nth(i)
  257 |         .getByRole('button', { name: /wishlist/i })
  258 |         .or(cards.nth(i).locator('[aria-label*="wishlist" i]')).first();
  259 |       await expect(wishlist).toBeAttached();
  260 |     }
  261 |   });
  262 | 
  263 |   test('CARD-113 Quick Add control is present in card markup (not visible by default)', async ({ page }) => {
  264 |     const card = page.locator('[class*="product-card"], [data-product-id]').first();
  265 |     const quickAdd = card.getByRole('button', { name: /quick add/i });
  266 |     await expect(quickAdd).toBeAttached();
  267 |     // Must not be visible without hover
  268 |     await expect(quickAdd).not.toBeVisible();
  269 |   });
  270 | 
  271 |   test('CARD-115 product name link is underlined on hover', async ({ page }) => {
  272 |     const card     = page.locator('[class*="product-card"], [data-product-id]').first();
  273 |     const nameLink = card.getByRole('link').last();
  274 |     await nameLink.hover({ force: true });
  275 |     await page.waitForTimeout(200);
  276 |     const decoration = await page.evaluate(
  277 |       el => window.getComputedStyle(el).textDecorationLine,
  278 |       await nameLink.elementHandle()
  279 |     );
  280 |     expect(decoration).toMatch(/underline/);
  281 |   });
  282 | 
  283 |   test('CARD-116 colour swatches each have a 3 px ring on hover', async ({ page }) => {
  284 |     const card = page.locator('[class*="product-card"], [data-product-id]')
  285 |       .filter({ has: page.locator('[class*="swatch" i]') }).first();
  286 |     const swatch = card.locator('[class*="swatch" i]').first();
  287 |     if (!(await swatch.isVisible())) test.skip();
  288 |     await swatch.hover({ force: true });
  289 |     await page.waitForTimeout(200);
  290 |     const outline = await page.evaluate(
  291 |       el => {
  292 |         const s = window.getComputedStyle(el);
  293 |         return s.outline || s.boxShadow || s.border;
  294 |       },
  295 |       await swatch.elementHandle()
  296 |     );
  297 |     // A 3px ring appears as outline or box-shadow
  298 |     expect(outline).toMatch(/3px|ring/i);
  299 |   });
  300 | 
  301 |   test('STATE-04 Quick Add appears when card element receives keyboard focus', async ({ page }) => {
  302 |     const card    = page.locator('[class*="product-card"], [data-product-id]').first();
  303 |     const quickAdd= card.getByRole('button', { name: /quick add/i });
  304 | 
  305 |     // Tab into the card
  306 |     await page.keyboard.press('Tab');
  307 |     for (let i = 0; i < 10; i++) {
  308 |       const focused = await page.evaluate(() => document.activeElement?.closest('[class*="product-card"], [data-product-id]') !== null);
  309 |       if (focused) break;
  310 |       await page.keyboard.press('Tab');
  311 |     }
  312 |     await page.waitForTimeout(300);
  313 |     const opacity = await getComputedOpacity(page, quickAdd).catch(() => 0);
  314 |     // Quick Add must be reachable — either now visible or reachable via further Tab
> 315 |     await page.keyboard.press('Tab');
      |                         ^ Error: keyboard.press: Target page, context or browser has been closed
  316 |     await expect(quickAdd).toBeAttached();
  317 |   });
  318 | });
  319 | 
```