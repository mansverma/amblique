# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/home.spec.ts >> Home – Hero carousel (HOME-101–111) >> HOME-101–106 four slides have correct headings and CTA labels
- Location: tests/desktop/home.spec.ts:209:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('The New Season').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('The New Season').first()
    3 × locator resolved to <h2 class="text-6xl font-bold leading-none [letter-spacing:-1.5px] text-primary-foreground mb-4">The New Season</h2>
      - unexpected value "hidden"

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
  117 |   test('GLB-105 Women flyout lists 9 subcategories in alphabetical order with correct href pattern', async ({ page }) => {
  118 |     await page.waitForLoadState('networkidle');
  119 |     const trigger = page.locator('[data-slot="navigation-menu-trigger"]:visible')
  120 |       .filter({ hasText: /\bwomen\b/i }).first();
  121 |     const box = await trigger.boundingBox();
  122 |     await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
  123 |     await page.waitForTimeout(600);
  124 |     for (const sub of WOMEN_SUBCATEGORIES) {
  125 |       const link = page.getByRole('link', { name: sub }).first();
  126 |       await expect(link).toBeVisible();
  127 |       const href = await link.getAttribute('href');
  128 |       expect(href).toContain('/category/womens-');
  129 |     }
  130 |   });
  131 | 
  132 |   test('GLB-105a Men flyout lists 9 subcategories with correct href pattern', async ({ page }) => {
  133 |     await page.waitForLoadState('networkidle');
  134 |     const trigger = page.locator('[data-slot="navigation-menu-trigger"]:visible')
  135 |       .filter({ hasText: /\bmen\b/i }).first();
  136 |     const box = await trigger.boundingBox();
  137 |     await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
  138 |     await page.waitForTimeout(600);
  139 |     for (const sub of MEN_SUBCATEGORIES) {
  140 |       await expect(page.getByRole('link', { name: sub }).first()).toBeVisible();
  141 |       const href = await page.getByRole('link', { name: sub }).first().getAttribute('href');
  142 |       expect(href).toContain('/category/mens-');
  143 |     }
  144 |   });
  145 | 
  146 |   test('GLB-105b Kids flyout lists 6 subcategories with correct href pattern', async ({ page }) => {
  147 |     await page.waitForLoadState('networkidle');
  148 |     const trigger = page.locator('[data-slot="navigation-menu-trigger"]:visible')
  149 |       .filter({ hasText: /\bkids\b/i }).first();
  150 |     const box = await trigger.boundingBox();
  151 |     await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
  152 |     await page.waitForTimeout(600);
  153 |     expect(await page.getByRole('link', { name: /Accessories|Baby|Boys|Girls|New In|Shoes/i }).count())
  154 |       .toBeGreaterThanOrEqual(6);
  155 |     for (const sub of KIDS_SUBCATEGORIES) {
  156 |       const href = await page.getByRole('link', { name: sub }).first().getAttribute('href');
  157 |       expect(href).toContain('/category/kids-');
  158 |     }
  159 |   });
  160 | 
  161 |   // GLB-105c (Women/Men/Kids change bg + text colour on hover; New Arrivals bg only) is a
  162 |   // purely visual requirement governed by the design files — not covered in automation.
  163 | 
  164 |   test('GLB-106 search input is present with placeholder "Search"', async ({ page }) => {
  165 |     const search = page.locator('header input[placeholder="Search"]')
  166 |       .or(page.locator('header').getByRole('searchbox'));
  167 |     await expect(search.first()).toBeVisible();
  168 |   });
  169 | 
  170 |   test('GLB-108 Sign In links to /MarketStreet/en-US/login', async ({ page }) => {
  171 |     const link = page.locator('header').getByRole('link', { name: /sign in/i });
  172 |     await expect(link).toBeVisible();
  173 |     expect(await link.getAttribute('href')).toContain('/MarketStreet/en-US/login');
  174 |   });
  175 | 
  176 |   test('GLB-109 Wishlist links to /MarketStreet/en-US/wishlist', async ({ page }) => {
  177 |     const link = page.locator('header').getByRole('link', { name: /wishlist/i });
  178 |     await expect(link).toBeVisible();
  179 |     expect(await link.getAttribute('href')).toContain('/MarketStreet/en-US/wishlist');
  180 |   });
  181 | 
  182 |   test('GLB-110 mini cart shows item count; empty state exposes 0', async ({ page }) => {
  183 |     const cart = page.locator('header').getByRole('link', { name: /cart|basket/i })
  184 |       .or(page.locator('header [aria-label*="cart" i]')).first();
  185 |     await expect(cart).toBeVisible();
  186 |     const label = (await cart.getAttribute('aria-label')) ?? (await cart.innerText());
  187 |     expect(label).toMatch(/0|My cart/i);
  188 |   });
  189 | });
  190 | 
  191 | // ---------------------------------------------------------------------------
  192 | // HOME-101–111  Hero carousel
  193 | // ---------------------------------------------------------------------------
  194 | test.describe('Home – Hero carousel (HOME-101–111)', () => {
  195 |   test.beforeEach(async ({ page }) => {
  196 |     await bypassConsent(page);
  197 |     await page.goto(HOME_PATH);
  198 |   });
  199 | 
  200 |   test('HOME-108/109 dot indicators (×4) and Previous / Next controls are present', async ({ page }) => {
  201 |     await expect(page.getByRole('button', { name: /previous|prev/i }).first()).toBeVisible();
  202 |     await expect(page.getByRole('button', { name: /next/i }).first()).toBeVisible();
  203 |     // Indicators may be tabs or buttons with slide-related labels
  204 |     const indicators = page.locator('[role="tab"]')
  205 |       .or(page.locator('button[aria-label*="slide" i]'));
  206 |     expect(await indicators.count()).toBeGreaterThanOrEqual(4);
  207 |   });
  208 | 
  209 |   test('HOME-101–106 four slides have correct headings and CTA labels', async ({ page }) => {
  210 |     const next = page.getByRole('button', { name: /next/i }).first();
  211 |     for (let i = 0; i < HERO_SLIDES.length; i++) {
  212 |       if (i > 0) {
  213 |         await next.click();
  214 |         await page.waitForTimeout(700);
  215 |       }
  216 |       const { heading, cta } = HERO_SLIDES[i];
> 217 |       await expect(page.getByText(heading).first()).toBeVisible();
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  218 |       await expect(page.getByText(cta).first()).toBeVisible();
  219 |     }
  220 |   });
  221 | 
  222 |   test('HOME-102 each active slide contains image, heading, paragraph and CTA link', async ({ page }) => {
  223 |     // Verify Slide 1 composition — the active slide when the page loads
  224 |     const slide = page.locator('[aria-roledescription="slide"][aria-hidden="false"]')
  225 |       .or(page.locator('[role="group"][aria-label*="1"]')).first();
  226 |     await expect(slide.locator('img').first()).toBeVisible();
  227 |     await expect(slide.getByRole('heading').first()).toBeVisible();
  228 |     await expect(slide.getByRole('link').first()).toBeVisible();
  229 |   });
  230 | 
  231 |   test('HOME-107 all slide CTAs href contains /category/root', async ({ page }) => {
  232 |     const next = page.getByRole('button', { name: /next/i }).first();
  233 |     for (let i = 0; i < HERO_SLIDES.length; i++) {
  234 |       if (i > 0) {
  235 |         await next.click();
  236 |         await page.waitForTimeout(700);
  237 |       }
  238 |       const cta = page.getByText(HERO_SLIDES[i].cta).first();
  239 |       const href = await cta.getAttribute('href');
  240 |       if (href) expect(href).toContain('/category/root');
  241 |     }
  242 |   });
  243 | 
  244 |   test('HOME-110 position announcement exposes "Slide N of 4" to AT', async ({ page }) => {
  245 |     // Accessible position text must exist — it may be in aria-label, aria-live or visually-hidden text
  246 |     const announcement = page.locator('[aria-live]')
  247 |       .or(page.locator('[aria-label*="of 4"]'))
  248 |       .or(page.locator('[aria-label*="Slide"]'))
  249 |       .first();
  250 |     await expect(announcement).toBeAttached();
  251 |   });
  252 | 
  253 |   test('HOME-111 carousel auto-advances without user interaction', async ({ page }) => {
  254 |     // Confirm Slide 1 is initially visible then wait for an auto-advance.
  255 |     // Use getByRole('heading') to avoid matching sr-only live-region elements.
  256 |     await expect(page.getByRole('heading', { name: HERO_SLIDES[0].heading }).first()).toBeVisible();
  257 |     await page.waitForTimeout(7000);
  258 |     const laterSlideVisible =
  259 |       (await page.getByRole('heading', { name: HERO_SLIDES[1].heading }).first().isVisible()) ||
  260 |       (await page.getByRole('heading', { name: HERO_SLIDES[2].heading }).first().isVisible()) ||
  261 |       (await page.getByRole('heading', { name: HERO_SLIDES[3].heading }).first().isVisible());
  262 |     expect(laterSlideVisible).toBe(true);
  263 |   });
  264 | });
  265 | 
  266 | // ---------------------------------------------------------------------------
  267 | // HOME-201–206  Featured Products carousel
  268 | // ---------------------------------------------------------------------------
  269 | test.describe('Home – Featured Products carousel (HOME-201–206)', () => {
  270 |   test.beforeEach(async ({ page }) => {
  271 |     await bypassConsent(page);
  272 |     await page.goto(HOME_PATH);
  273 |   });
  274 | 
  275 |   test('HOME-201 section heading is "Featured Products"', async ({ page }) => {
  276 |     await expect(page.getByRole('heading', { name: 'Featured Products' })).toBeVisible();
  277 |   });
  278 | 
  279 |   test('HOME-202 "Shop all" link targets /category/root', async ({ page }) => {
  280 |     const shopAll = page.getByRole('link', { name: /shop all/i });
  281 |     await expect(shopAll).toBeVisible();
  282 |     expect(await shopAll.getAttribute('href')).toContain('/category/root');
  283 |   });
  284 | 
  285 |   test('HOME-203 first product in carousel is "Leather Crossbody Bag" (order per HOME-204)', async ({ page }) => {
  286 |     const section = page.locator('.section-container, section').filter({ hasText: 'Featured Products' }).first();
  287 |     await expect(section.getByText('Leather Crossbody Bag').first()).toBeVisible();
  288 |   });
  289 | 
  290 |   test('HOME-203 NOTE carousel contains ≥10 reachable products (spec says 10; product list has 12)', async ({ page }) => {
  291 |     const section = page.locator('.section-container, section').filter({ hasText: 'Featured Products' }).first();
  292 |     const next = section.getByRole('button', { name: /next/i }).first();
  293 |     const seen = new Set<string>();
  294 |     for (let i = 0; i < 6; i++) {
  295 |       for (const name of FEATURED_PRODUCTS) {
  296 |         if (await section.getByText(name).first().isVisible()) seen.add(name);
  297 |       }
  298 |       const isDisabled = await next.isDisabled().catch(() => false);
  299 |       if (isDisabled) break;
  300 |       await next.click();
  301 |       await page.waitForTimeout(400);
  302 |     }
  303 |     expect(seen.size).toBeGreaterThanOrEqual(10);
  304 |   });
  305 | 
  306 |   test('HOME-206 Featured Products carousel has Previous / Next; no dot indicators', async ({ page }) => {
  307 |     const section = page.locator('.section-container, section').filter({ hasText: 'Featured Products' }).first();
  308 |     await expect(section.getByRole('button', { name: /previous|prev/i }).first()).toBeVisible();
  309 |     await expect(section.getByRole('button', { name: /next/i }).first()).toBeVisible();
  310 |     // No role="tablist" dot indicators on this carousel
  311 |     await expect(section.locator('[role="tablist"]')).toHaveCount(0);
  312 |   });
  313 | });
  314 | 
  315 | // ---------------------------------------------------------------------------
  316 | // HOME-301–308  Style for Real Life
  317 | // ---------------------------------------------------------------------------
```