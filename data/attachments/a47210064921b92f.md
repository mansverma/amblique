# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/home.spec.ts >> Global header – GLB-101–110 >> GLB-103 Men flyout opens on hover
- Location: tests/desktop/home.spec.ts:86:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.boundingBox: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-slot="navigation-menu-trigger"]:visible').filter({ hasText: /\bmen\b/i }).first()

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
  1   | /**
  2   |  * Desktop – Home page and global header
  3   |  *
  4   |  * Covers: ENV-09 | GLB-101–110, GLB-105a–105c
  5   |  *         HOME-101–111, HOME-201–206, HOME-301–308, HOME-401–406
  6   |  *         STATE-01–03
  7   |  *
  8   |  * Viewport: 1280 × 800, Desktop Chrome (playwright.config.ts "desktop" project)
  9   |  * Visual-only requirements (colours, spacing, iconography) are deliberately
  10  |  * excluded — those are governed by design files and are spot-checked manually.
  11  |  */
  12  | 
  13  | import { test, expect } from '@playwright/test';
  14  | import { bypassConsent, assertConsentModalControls } from '../helpers/consent';
  15  | import {
  16  |   hoverAndWait,
  17  |   getComputedScale,
  18  |   getRenderedHeight,
  19  |   getComputedOpacity,
  20  |   expectTransitionDuration,
  21  |   expectEaseOut,
  22  | } from '../helpers/animation';
  23  | import {
  24  |   HOME_PATH,
  25  |   HERO_SLIDES,
  26  |   FEATURED_PRODUCTS,
  27  |   WOMEN_SUBCATEGORIES,
  28  |   MEN_SUBCATEGORIES,
  29  |   KIDS_SUBCATEGORIES,
  30  | } from '../fixtures';
  31  | 
  32  | // ---------------------------------------------------------------------------
  33  | // ENV-09  Consent modal
  34  | // ---------------------------------------------------------------------------
  35  | test.describe('ENV-09 Tracking consent modal', () => {
  36  |   test('presents Accept, Decline and Close controls on first visit', async ({ page }) => {
  37  |     await page.goto(HOME_PATH);
  38  |     const { accept, decline, close } = await assertConsentModalControls(page);
  39  |     await expect(accept).toBeVisible();
  40  |     await expect(decline).toBeVisible();
  41  |     await expect(close).toBeVisible();
  42  |   });
  43  | });
  44  | 
  45  | // ---------------------------------------------------------------------------
  46  | // GLB-101–110, GLB-105a–105c  Global header
  47  | // ---------------------------------------------------------------------------
  48  | test.describe('Global header – GLB-101–110', () => {
  49  |   test.beforeEach(async ({ page }) => {
  50  |     await bypassConsent(page);
  51  |     await page.goto(HOME_PATH);
  52  |   });
  53  | 
  54  |   test('GLB-101 Market Street logo links to home', async ({ page }) => {
  55  |     // Logo is an <a data-testid="header-logo"><img alt="Home"></a> — accessible name is "Home"
  56  |     const logo = page.locator('[data-testid="header-logo"]');
  57  |     await expect(logo).toBeVisible();
  58  |     const href = await logo.getAttribute('href');
  59  |     expect(href).toMatch(/\/MarketStreet\/en-US\//i);
  60  |   });
  61  | 
  62  |   test('GLB-102 primary nav has four items – Women, Men, Kids, New Arrivals – in order', async ({ page }) => {
  63  |     const nav = page.getByRole('navigation').first();
  64  |     for (const label of ['Women', 'Men', 'Kids', 'New Arrivals']) {
  65  |       await expect(nav.getByText(label, { exact: true }).first()).toBeVisible();
  66  |     }
  67  |     const navText = await nav.innerText();
  68  |     const positions = ['Women', 'Men', 'Kids', 'New Arrivals'].map(l => navText.indexOf(l));
  69  |     for (let i = 1; i < positions.length; i++) {
  70  |       expect(positions[i]).toBeGreaterThan(positions[i - 1]);
  71  |     }
  72  |   });
  73  | 
  74  |   test('GLB-103 Women flyout opens on hover; aria-expanded reflects open state', async ({ page }) => {
  75  |     // Wait for networkidle so Radix NavigationMenu event listeners are initialized.
  76  |     // :visible excludes mobile nav triggers (inside lg:hidden, display:none at 1280px).
  77  |     await page.waitForLoadState('networkidle');
  78  |     const trigger = page.locator('[data-slot="navigation-menu-trigger"]:visible')
  79  |       .filter({ hasText: /\bwomen\b/i }).first();
  80  |     const box = await trigger.boundingBox();
  81  |     await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
  82  |     await page.waitForTimeout(600);
  83  |     await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  84  |   });
  85  | 
  86  |   test('GLB-103 Men flyout opens on hover', async ({ page }) => {
  87  |     await page.waitForLoadState('networkidle');
  88  |     const trigger = page.locator('[data-slot="navigation-menu-trigger"]:visible')
  89  |       .filter({ hasText: /\bmen\b/i }).first();
> 90  |     const box = await trigger.boundingBox();
      |                               ^ Error: locator.boundingBox: Test timeout of 30000ms exceeded.
  91  |     await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
  92  |     await page.waitForTimeout(600);
  93  |     await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  94  |   });
  95  | 
  96  |   test('GLB-103 Kids flyout opens on hover', async ({ page }) => {
  97  |     await page.waitForLoadState('networkidle');
  98  |     const trigger = page.locator('[data-slot="navigation-menu-trigger"]:visible')
  99  |       .filter({ hasText: /\bkids\b/i }).first();
  100 |     const box = await trigger.boundingBox();
  101 |     await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, { steps: 5 });
  102 |     await page.waitForTimeout(600);
  103 |     await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  104 |   });
  105 | 
  106 |   test('GLB-104 New Arrivals is a direct link to /category/new-arrivals (no flyout)', async ({ page }) => {
  107 |     const link = page.getByRole('navigation').getByRole('link', { name: 'New Arrivals' });
  108 |     await expect(link).toBeVisible();
  109 |     const href = await link.getAttribute('href');
  110 |     expect(href).toContain('/category/new-arrivals');
  111 |     // Hovering New Arrivals must not open a flyout
  112 |     await link.hover({ force: true });
  113 |     await page.waitForTimeout(300);
  114 |     await expect(page.locator('[aria-expanded="true"]')).toHaveCount(0);
  115 |   });
  116 | 
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
```