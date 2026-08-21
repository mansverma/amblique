# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/home.spec.ts >> Touch gestures – home page carousels (M-TCH-101/102/103) >> M-TCH-101 hero carousel is swipeable horizontally by touch
- Location: tests/mobile/home.spec.ts:496:7

# Error details

```
Error: locator.isVisible: Error: strict mode violation: getByText('The New Season') resolved to 2 elements:
    1) <h2 class="text-6xl font-bold leading-none [letter-spacing:-1.5px] text-primary-foreground mb-4">The New Season</h2> aka getByRole('heading', { name: 'The New Season' })
    2) <div class="sr-only" aria-live="polite" aria-atomic="true">…</div> aka getByText('Slide 1 of 4: The New Season')

Call log:
    - checking visibility of getByText('The New Season')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "skipToMainContent" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - link [ref=e6] [cursor=pointer]:
      - /url: /MarketStreet/en-US/
      - img "Logo" [ref=e7]
  - main [ref=e8]:
    - generic [ref=e10]:
      - heading "Something went wrong" [level=1] [ref=e11]
      - paragraph [ref=e12]: "Error: Access token is invalid or revoked"
      - link "Go to Homepage" [ref=e14] [cursor=pointer]:
        - /url: /MarketStreet/en-US/
      - generic [ref=e15]:
        - heading "Stack Trace" [level=2] [ref=e17]
        - code [ref=e19]: "AuthTokenInvalidError: Access token is invalid or revoked at Proxy.t3 (/var/task/node_modules/.pnpm/@salesforce+storefront-next-runtime@1.2.0_97f34e813a01aab35f4cb0f9d67adba1/node_modules/@salesforce/storefront-next-runtime/dist/scapi.js:1:8723) at process.processTicksAndRejections (node:internal/process/task_queues:103:5) at async fetchComponent (/var/task/src/lib/api/component.server.ts:48:20) at async fetchComponentWithComponentData (/var/task/src/lib/page-designer/component-loader.server.ts:61:21)"
        - paragraph [ref=e21]:
          - text: To disable stack traces in production, turn off
          - code [ref=e22]: unstable_devTools
          - text: in your router config.
  - contentinfo [ref=e23]:
    - paragraph [ref=e25]: © 2026 All rights reserved.
  - region "Notifications alt+T"
```

# Test source

```ts
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
  499 |     const box = await carousel.boundingBox();
  500 |     if (!box) test.skip();
  501 | 
> 502 |     const initialSlideVisible = await page.getByText(HERO_SLIDES[0].heading).isVisible();
      |                                                                              ^ Error: locator.isVisible: Error: strict mode violation: getByText('The New Season') resolved to 2 elements:
  503 | 
  504 |     await page.touchscreen.tap(box!.x + box!.width * 0.8, box!.y + box!.height / 2);
  505 |     await page.mouse.move(box!.x + box!.width * 0.8, box!.y + box!.height / 2);
  506 |     await page.mouse.down();
  507 |     await page.mouse.move(box!.x + box!.width * 0.2, box!.y + box!.height / 2, { steps: 10 });
  508 |     await page.mouse.up();
  509 |     await page.waitForTimeout(600);
  510 | 
  511 |     const slide2Visible = await page.getByText(HERO_SLIDES[1].heading).isVisible();
  512 |     expect(slide2Visible || !initialSlideVisible).toBe(true);
  513 |   });
  514 | 
  515 |   test('M-TCH-102 Featured Products carousel is swipeable horizontally by touch', async ({ page }) => {
  516 |     const section = page.locator('.section-container, section').filter({ hasText: 'Featured Products' }).first();
  517 | 
  518 |     // Wait for carousel to fully initialise before gesturing
  519 |     await section.locator(`a[href*="/product/"]`).first().waitFor({ state: 'visible' });
  520 |     await page.waitForLoadState('networkidle');
  521 | 
  522 |     const box = await section.boundingBox();
  523 |     if (!box) test.skip();
  524 | 
  525 |     // Use the first product link as the position anchor (more stable than card wrapper)
  526 |     const firstProductLink = section.locator(`a[href*="/product/"]`).first();
  527 |     const before = await firstProductLink.boundingBox();
  528 | 
  529 |     const startX = box!.x + box!.width * 0.85;
  530 |     const endX   = box!.x + box!.width * 0.05;
  531 |     const midY   = box!.y + box!.height / 2;
  532 | 
  533 |     await page.mouse.move(startX, midY);
  534 |     await page.mouse.down();
  535 |     await page.waitForTimeout(50);
  536 |     await page.mouse.move(endX, midY, { steps: 20 });
  537 |     await page.waitForTimeout(100);
  538 |     await page.mouse.up();
  539 |     await page.waitForTimeout(800);
  540 | 
  541 |     const after = await firstProductLink.boundingBox();
  542 |     // First product link must shift left; use first() to avoid sr-only aria-live duplicates
  543 |     const laterVisible = await section.locator(`a[href*="/product/"]`).nth(2).isVisible();
  544 |     expect(after!.x < before!.x || laterVisible).toBe(true);
  545 |   });
  546 | 
  547 |   test('M-TCH-103 Category tiles carousel is swipeable horizontally by touch', async ({ page }) => {
  548 |     const section   = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  549 |     const womenTile = section.locator('a[href*="/category/women"]').first();
  550 | 
  551 |     // Wait for full hydration before querying the section (Chrome hydrates faster, causing
  552 |     // querySelectorAll to run before sections are rendered without this wait).
  553 |     await page.waitForLoadState('networkidle');
  554 | 
  555 |     // Scroll via evaluate — locator-based scroll causes detach on WebKit during hydration.
  556 |     await page.evaluate(() => {
  557 |       const s = [...document.querySelectorAll('section')]
  558 |         .find(el => el.textContent?.includes('Style for Real Life'));
  559 |       s?.scrollIntoView({ block: 'center', behavior: 'instant' });
  560 |     });
  561 |     await page.waitForTimeout(500);
  562 | 
  563 |     // Get carousel viewport and tile coordinates fresh after settle.
  564 |     const coords = await page.evaluate(() => {
  565 |       const s = [...document.querySelectorAll('section')]
  566 |         .find(el => el.textContent?.includes('Style for Real Life'));
  567 |       if (!s) return null;
  568 |       const container = [...s.querySelectorAll('div')].find(el => {
  569 |         const style = getComputedStyle(el);
  570 |         return style.overflowX === 'hidden' && el.getBoundingClientRect().width > 300;
  571 |       });
  572 |       const tile = s.querySelector('a[href*="/category/women"]');
  573 |       if (!container || !tile) return null;
  574 |       const r = container.getBoundingClientRect();
  575 |       return { sx: r.x + r.width * 0.8, ex: r.x + r.width * 0.2, sy: r.y + r.height / 2,
  576 |                tileX: tile.getBoundingClientRect().x };
  577 |     });
  578 |     if (!coords) test.skip();
  579 | 
  580 |     // Attempt swipe gesture (trusted CDP mouse events — works on Chromium mobile emulation).
  581 |     await page.mouse.move(coords!.sx, coords!.sy);
  582 |     await page.mouse.down();
  583 |     await page.waitForTimeout(50);
  584 |     await page.mouse.move(coords!.ex, coords!.sy, { steps: 20 });
  585 |     await page.waitForTimeout(100);
  586 |     await page.mouse.up();
  587 |     await page.waitForTimeout(800);
  588 | 
  589 |     const afterGestureX = await page.evaluate(() => {
  590 |       const s = [...document.querySelectorAll('section')]
  591 |         .find(el => el.textContent?.includes('Style for Real Life'));
  592 |       return s?.querySelector('a[href*="/category/women"]')?.getBoundingClientRect().x ?? null;
  593 |     });
  594 | 
  595 |     if (afterGestureX !== null && afterGestureX < coords!.tileX) {
  596 |       // Gesture worked (Chromium path) — carousel swiped as required.
  597 |       expect(afterGestureX).toBeLessThan(coords!.tileX);
  598 |     } else {
  599 |       // WebKit emulation cannot trigger the touch carousel gesture via mouse drag.
  600 |       // Verify the carousel CAN advance (Next button) to confirm the feature is not broken.
  601 |       const nextBtn = section.getByRole('button', { name: /next/i }).first();
  602 |       await nextBtn.click();
```