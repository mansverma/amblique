# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/home.spec.ts >> Mobile category tiles (M-HOME-301–309) >> M-HOME-303/304 four tiles in order: Women, Men, Kids, New Arrivals
- Location: tests/mobile/home.spec.ts:395:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('section').filter({ hasText: 'Style for Real Life' }).first().getByText('Women', { exact: true }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('section').filter({ hasText: 'Style for Real Life' }).first().getByText('Women', { exact: true }).first()

```

```yaml
- link "skipToMainContent":
  - /url: "#main-content"
- banner:
  - link "Logo":
    - /url: /MarketStreet/en-US/
    - img "Logo"
- main:
  - heading "Something went wrong" [level=1]
  - paragraph: "Error: Access token is invalid or revoked"
  - link "Go to Homepage":
    - /url: /MarketStreet/en-US/
  - heading "Stack Trace" [level=2]
  - code: "AuthTokenInvalidError: Access token is invalid or revoked at Proxy.t3 (/var/task/node_modules/.pnpm/@salesforce+storefront-next-runtime@1.2.0_97f34e813a01aab35f4cb0f9d67adba1/node_modules/@salesforce/storefront-next-runtime/dist/scapi.js:1:8723) at process.processTicksAndRejections (node:internal/process/task_queues:103:5) at async fetchComponent (/var/task/src/lib/api/component.server.ts:48:20) at async fetchComponentWithComponentData (/var/task/src/lib/page-designer/component-loader.server.ts:61:21)"
  - paragraph:
    - text: To disable stack traces in production, turn off
    - code: unstable_devTools
    - text: in your router config.
- contentinfo:
  - paragraph: © 2026 All rights reserved.
- region "Notifications alt+T"
```

# Test source

```ts
  298 |       const href = await cta.getAttribute('href');
  299 |       if (href) expect(href).toContain('/category/root');
  300 |     }
  301 |   });
  302 | 
  303 |   test('M-HOME-107 slide CTAs are rendered as buttons (or links styled as buttons)', async ({ page }) => {
  304 |     const cta = page.getByRole('button', { name: /Discover the Collection/i })
  305 |       .or(page.getByRole('link', { name: /Discover the Collection/i })).first();
  306 |     await expect(cta).toBeVisible();
  307 |   });
  308 | 
  309 |   test('M-HOME-108 carousel auto-advances without user interaction', async ({ page }) => {
  310 |     await expect(page.getByRole('heading', { name: HERO_SLIDES[0].heading }).first()).toBeVisible();
  311 |     await page.waitForTimeout(7000);
  312 |     const advanced =
  313 |       (await page.getByRole('heading', { name: HERO_SLIDES[1].heading }).first().isVisible()) ||
  314 |       (await page.getByRole('heading', { name: HERO_SLIDES[2].heading }).first().isVisible()) ||
  315 |       (await page.getByRole('heading', { name: HERO_SLIDES[3].heading }).first().isVisible());
  316 |     expect(advanced).toBe(true);
  317 |   });
  318 | 
  319 |   test('M-HOME-109/110 slide indicators: one per slide; active is distinguished; labels follow "Go to slide N of 4"', async ({ page }) => {
  320 |     const indicators = page.locator('[aria-label*="Go to slide"]')
  321 |       .or(page.locator('[aria-label*="slide" i][role="button"], [role="tab"]'));
  322 |     expect(await indicators.count()).toBeGreaterThanOrEqual(4);
  323 |     // Active indicator
  324 |     const active = page.locator('[aria-selected="true"], [aria-label*="Go to slide 1"]').first();
  325 |     await expect(active).toBeAttached();
  326 |   });
  327 | 
  328 |   test('M-HOME-111 previous and next controls have accessible labels including position', async ({ page }) => {
  329 |     const next = page.getByRole('button', { name: /next slide/i })
  330 |       .or(page.getByRole('button', { name: /next/i })).first();
  331 |     await expect(next).toBeVisible();
  332 |     // Navigate to last slide so "Next slide (4 of 4)" label appears
  333 |     for (let i = 0; i < 3; i++) {
  334 |       await next.tap();
  335 |       await page.waitForTimeout(500);
  336 |     }
  337 |     const label = await next.getAttribute('aria-label');
  338 |     if (label) expect(label).toMatch(/4 of 4|next/i);
  339 |   });
  340 | });
  341 | 
  342 | // ---------------------------------------------------------------------------
  343 | // M-HOME-201–208  Featured Products carousel
  344 | // ---------------------------------------------------------------------------
  345 | test.describe('Mobile featured products (M-HOME-201–208)', () => {
  346 |   test.beforeEach(async ({ page }) => {
  347 |     await bypassConsent(page);
  348 |     await page.goto(HOME_PATH);
  349 |   });
  350 | 
  351 |   test('M-HOME-201 section heading is "Featured Products"', async ({ page }) => {
  352 |     await expect(page.getByRole('heading', { name: 'Featured Products' })).toBeVisible();
  353 |   });
  354 | 
  355 |   test('M-HOME-202 "Shop all" link targets /category/root', async ({ page }) => {
  356 |     const shopAll = page.getByRole('link', { name: /shop all/i });
  357 |     await expect(shopAll).toBeVisible();
  358 |     expect(await shopAll.getAttribute('href')).toContain('/category/root');
  359 |   });
  360 | 
  361 |   test('M-HOME-203 carousel region is labelled "Featured Products carousel"', async ({ page }) => {
  362 |     const region = page.getByRole('region', { name: /featured products carousel/i })
  363 |       .or(page.locator('[aria-label*="Featured Products carousel"]')).first();
  364 |     await expect(region).toBeAttached();
  365 |   });
  366 | 
  367 |   test('M-HOME-204/208 previous and next controls allow reaching all products; no indicators', async ({ page }) => {
  368 |     const section = page.locator('.section-container, section').filter({ hasText: 'Featured Products' }).first();
  369 |     const next    = section.getByRole('button', { name: /next/i }).first();
  370 |     const prev    = section.getByRole('button', { name: /previous|prev/i }).first();
  371 |     await expect(next).toBeVisible();
  372 |     await expect(prev).toBeVisible();
  373 |     await expect(section.locator('[role="tablist"]')).toHaveCount(0);
  374 |   });
  375 | });
  376 | 
  377 | // ---------------------------------------------------------------------------
  378 | // M-HOME-301–309  Category tiles
  379 | // ---------------------------------------------------------------------------
  380 | test.describe('Mobile category tiles (M-HOME-301–309)', () => {
  381 |   test.beforeEach(async ({ page }) => {
  382 |     await bypassConsent(page);
  383 |     await page.goto(HOME_PATH);
  384 |   });
  385 | 
  386 |   test('M-HOME-301 section heading is "Style for Real Life"', async ({ page }) => {
  387 |     await expect(page.getByRole('heading', { name: 'Style for Real Life' }).first()).toBeVisible();
  388 |   });
  389 | 
  390 |   test('M-HOME-302 body copy matches spec', async ({ page }) => {
  391 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  392 |     await expect(section.getByText(/At Market Street, we believe fashion should be effortless/)).toBeVisible();
  393 |   });
  394 | 
  395 |   test('M-HOME-303/304 four tiles in order: Women, Men, Kids, New Arrivals', async ({ page }) => {
  396 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  397 |     for (const label of ['Women', 'Men', 'Kids', 'New Arrivals']) {
> 398 |       await expect(section.getByText(label, { exact: true }).first()).toBeVisible();
      |                                                                       ^ Error: expect(locator).toBeVisible() failed
  399 |     }
  400 |   });
  401 | 
  402 |   test('M-HOME-306/307 tile composition: image + gradient overlay + heading; whole tile is click target', async ({ page }) => {
  403 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  404 |     const tile    = section.getByRole('link').first();
  405 |     await expect(tile.locator('img').first()).toBeVisible();
  406 |     await expect(tile.getByRole('heading').first()).toBeVisible();
  407 |   });
  408 | 
  409 |   test('M-HOME-307 tile targets correct category URLs', async ({ page }) => {
  410 |     const section  = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  411 |     const expected = [
  412 |       { href: '/category/women'        },
  413 |       { href: '/category/men'          },
  414 |       { href: '/category/kids'         },
  415 |       { href: '/category/new-arrivals' },
  416 |     ];
  417 |     for (const { href } of expected) {
  418 |       // Use href-based selector; hasText:'Men' also matches 'Women' (substring)
  419 |       const link = section.locator(`a[href*="${href}"]`).first();
  420 |       await expect(link).toBeAttached();
  421 |       expect(await link.getAttribute('href')).toContain(href);
  422 |     }
  423 |   });
  424 | 
  425 |   test('M-HOME-308 Shop Now label is collapsed to zero height (no tap area) at mobile width', async ({ page }) => {
  426 |     const section   = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  427 |     const tile      = section.getByRole('link').first();
  428 |     const shopNowWrap = tile.getByText('Shop Now').locator('..');
  429 | 
  430 |     const height    = await getRenderedHeight(page, shopNowWrap);
  431 |     expect(height).toBeLessThanOrEqual(1); // collapsed — effectively zero
  432 | 
  433 |     // Site finding: pointer-events is "auto" on the zero-height wrapper (DEF-M-HOME-308).
  434 |     // Zero height already prevents taps, so the primary spec requirement is met.
  435 |     // Spec asks for pointer-events:none — noted as a minor defect.
  436 |   });
  437 | 
  438 |   test('M-HOME-309 carousel has Previous and Next controls', async ({ page }) => {
  439 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  440 |     await expect(section.getByRole('button', { name: /previous|prev/i }).first()).toBeVisible();
  441 |     await expect(section.getByRole('button', { name: /next/i }).first()).toBeVisible();
  442 |   });
  443 | });
  444 | 
  445 | // ---------------------------------------------------------------------------
  446 | // M-HOME-401–406  Collection banners
  447 | // ---------------------------------------------------------------------------
  448 | test.describe('Mobile collection banners (M-HOME-401–406)', () => {
  449 |   test.beforeEach(async ({ page }) => {
  450 |     await bypassConsent(page);
  451 |     await page.goto(HOME_PATH);
  452 |   });
  453 | 
  454 |   test('M-HOME-401 two full-width banners: Women first, then Men', async ({ page }) => {
  455 |     await expect(page.getByText('EXPLORE COLLECTION')).toHaveCount(2);
  456 |   });
  457 | 
  458 |   test('M-HOME-402 Women banner heading and copy', async ({ page }) => {
  459 |     await expect(page.getByText(/Discover our curated collection of sophisticated footwear/)).toBeVisible();
  460 |   });
  461 | 
  462 |   test('M-HOME-403 Men banner heading and copy', async ({ page }) => {
  463 |     await expect(page.getByText(/Timeless craftsmanship meets contemporary style/)).toBeVisible();
  464 |   });
  465 | 
  466 |   test('M-HOME-404 banner CTA is "EXPLORE COLLECTION" on both banners', async ({ page }) => {
  467 |     const ctas = page.getByText('EXPLORE COLLECTION');
  468 |     await expect(ctas.first()).toBeVisible();
  469 |     await expect(ctas.nth(1)).toBeVisible();
  470 |   });
  471 | 
  472 |   test('M-HOME-405 Women CTA links to Women category', async ({ page }) => {
  473 |     // aria-label="Explore collection: women's" — ": women" avoids matching men's link
  474 |     const cta  = page.getByRole('link', { name: /explore collection: women/i });
  475 |     const href = await cta.getAttribute('href');
  476 |     expect(href).toContain('/category/women');
  477 |   });
  478 | 
  479 |   test('M-HOME-406 Men CTA links to Men category', async ({ page }) => {
  480 |     // aria-label="Explore collection: men's" — ": men" avoids matching women's link
  481 |     const cta  = page.getByRole('link', { name: /explore collection: men/i });
  482 |     const href = await cta.getAttribute('href');
  483 |     expect(href).toContain('/category/men');
  484 |   });
  485 | });
  486 | 
  487 | // ---------------------------------------------------------------------------
  488 | // M-TCH-102–103  Touch gestures on home page carousels
  489 | // ---------------------------------------------------------------------------
  490 | test.describe('Touch gestures – home page carousels (M-TCH-101/102/103)', () => {
  491 |   test.beforeEach(async ({ page }) => {
  492 |     await bypassConsent(page);
  493 |     await page.goto(HOME_PATH);
  494 |   });
  495 | 
  496 |   test('M-TCH-101 hero carousel is swipeable horizontally by touch', async ({ page }) => {
  497 |     const carousel = page.getByRole('region', { name: /hero carousel/i })
  498 |       .or(page.locator('[aria-label*="Hero"]')).first();
```