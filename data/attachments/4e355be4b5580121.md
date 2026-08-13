# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/home.spec.ts >> Global header – GLB-101–110 >> GLB-104 New Arrivals is a direct link to /category/new-arrivals (no flyout)
- Location: tests/desktop/home.spec.ts:106:7

# Error details

```
Error: locator.hover: Element is not visible
Call log:
  - waiting for getByRole('navigation').getByRole('link', { name: 'New Arrivals' })
    - locator resolved to <a data-discover="true" data-radix-collection-item="" data-slot="navigation-menu-link" href="/MarketStreet/en-US/category/new-arrivals" class="data-[active=true]:focus:bg-header-menu-hover-background data-[active=true]:hover:bg-header-menu-hover-background data-[active=true]:bg-header-menu-active-background hover:bg-header-menu-hover-background focus:bg-header-menu-hover-background focus-visible:ring-ring [&_svg:not([class*='text-'])]:text-header-menu-icon flex flex-col gap-1 rounded-ui p-2 trans…>New Arrivals</a>
  - attempting hover action
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e5]:
      - link [ref=e6] [cursor=pointer]:
        - /url: /MarketStreet/en-US/
        - img "Home" [ref=e7]
      - navigation "Main" [ref=e10]:
        - list [ref=e12]:
          - listitem [ref=e13]:
            - button "Women" [ref=e14] [cursor=pointer]
          - listitem [ref=e15]:
            - button "Men" [ref=e16] [cursor=pointer]
          - listitem [ref=e17]:
            - button "Kids" [ref=e18] [cursor=pointer]
          - listitem [ref=e19]:
            - link "New Arrivals" [ref=e20] [cursor=pointer]:
              - /url: /MarketStreet/en-US/category/new-arrivals
      - generic [ref=e24]:
        - generic [ref=e25]: Search
        - combobox "Search" [ref=e26]
      - generic [ref=e27]:
        - button "Find a Store" [ref=e28] [cursor=pointer]
        - link "Sign In" [ref=e29] [cursor=pointer]:
          - /url: /MarketStreet/en-US/login
        - link "Wishlist" [ref=e30] [cursor=pointer]:
          - /url: /MarketStreet/en-US/wishlist
        - 'button "My cart, number of items: 0" [ref=e31] [cursor=pointer]'
  - main [ref=e32]:
    - generic [ref=e33]:
      - 'heading "Storefront Next: Market Street" [level=1] [ref=e34]'
      - region "Hero carousel with 4 slides" [ref=e36]:
        - region [ref=e37]:
          - list [ref=e39]:
            - listitem [ref=e40]:
              - generic [ref=e41]:
                - img "Women's Slacks Jackets and Purses" [ref=e43]
                - generic [ref=e47]:
                  - heading "The New Season" [level=2] [ref=e48]
                  - paragraph [ref=e49]: A new collection shaped by contrast, proportion, and modern attitude. Introducing key pieces for the season ahead.
                  - link "Discover the Collection" [ref=e51] [cursor=pointer]:
                    - /url: /MarketStreet/en-US/category/root
            - listitem [ref=e52]:
              - generic [ref=e59]:
                - heading [level=2] [ref=e60]: The Modern Wardrobe
                - paragraph [ref=e61]: Elevated silhouettes, refined textures, and a bold approach to everyday dressing. Designed to move with you.
                - link [ref=e63] [cursor=pointer]:
                  - /url: /MarketStreet/en-US/category/root
                  - text: Shop the Look
            - listitem [ref=e64]:
              - generic [ref=e71]:
                - heading [level=2] [ref=e72]: After Hours
                - paragraph [ref=e73]: Statement pieces and refined layers designed for nights out, late moments, and everything in between.
                - link [ref=e75] [cursor=pointer]:
                  - /url: /MarketStreet/en-US/category/root
                  - text: Explore the Collection
            - listitem [ref=e76]:
              - generic [ref=e83]:
                - heading [level=2] [ref=e84]: New Perspectives
                - paragraph [ref=e85]: A curated drop of standout pieces that redefine contemporary fashion. Confident. Expressive. Uncompromising.
                - link [ref=e87] [cursor=pointer]:
                  - /url: /MarketStreet/en-US/category/root
                  - text: Shop Now
        - generic [ref=e89]:
          - tablist "Slide navigation" [ref=e90]:
            - tab "Go to slide 1 of 4" [selected] [ref=e91] [cursor=pointer]
            - tab "Go to slide 2 of 4" [ref=e93] [cursor=pointer]
            - tab "Go to slide 3 of 4" [ref=e95] [cursor=pointer]
            - tab "Go to slide 4 of 4" [ref=e97] [cursor=pointer]
          - generic [ref=e99]:
            - button "Pause carousel" [ref=e100] [cursor=pointer]
            - button "Previous slide (1 of 4)" [ref=e104] [cursor=pointer]
            - button "Next slide (1 of 4)" [ref=e107] [cursor=pointer]
        - generic [ref=e110]: "Slide 1 of 4: The New Season"
      - generic [ref=e190]:
        - generic [ref=e191]:
          - generic [ref=e194]:
            - img "Women's Collection" [ref=e195]
            - generic [ref=e198]:
              - generic [ref=e199]:
                - heading "Women" [level=3] [ref=e200]
                - paragraph [ref=e201]: Discover our curated collection of sophisticated footwear designed for the modern woman.
              - 'link "Explore collection: women''s" [ref=e202] [cursor=pointer]':
                - /url: /MarketStreet/en-US/category/womens
                - text: EXPLORE COLLECTION
          - generic [ref=e205]:
            - img "Men's Collection" [ref=e206]
            - generic [ref=e209]:
              - generic [ref=e210]:
                - heading "Men" [level=3] [ref=e211]
                - paragraph [ref=e212]: Timeless craftsmanship meets contemporary style in our men's footwear collection.
              - 'link "Explore collection: men''s" [ref=e213] [cursor=pointer]':
                - /url: /MarketStreet/en-US/category/mens
                - text: EXPLORE COLLECTION
        - generic [ref=e219]:
          - heading "Style for Real Life" [level=3] [ref=e220]
          - paragraph [ref=e221]: At Market Street, we believe fashion should be effortless, authentic, and accessible. Our collections are designed for the modern individual who values quality, versatility, and timeless style. Discover pieces that move with you, adapt to your life, and become the foundation of a wardrobe that works—every day, everywhere.
  - contentinfo [ref=e222]:
    - generic [ref=e225]:
      - heading "Join Our Community" [level=2] [ref=e226]
      - paragraph [ref=e227]: Be the first to discover new arrivals, exclusive offers, and style inspiration.
      - generic [ref=e229]:
        - generic [ref=e230]: Email address for newsletter subscription
        - generic [ref=e231]:
          - textbox "Email address for newsletter subscription" [ref=e232]:
            - /placeholder: Your email
          - button "Subscribe" [ref=e233] [cursor=pointer]
    - generic [ref=e236]:
      - generic [ref=e238]:
        - link [ref=e239] [cursor=pointer]:
          - /url: /MarketStreet/en-US/
          - img "Market Street" [ref=e240]
        - generic [ref=e241]:
          - link "About Us" [ref=e242] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e243] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e244] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e245] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
        - generic [ref=e246]:
          - link "Youtube" [ref=e247] [cursor=pointer]:
            - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
            - img "YouTube" [ref=e248]
          - link "Instagram" [ref=e250] [cursor=pointer]:
            - /url: https://instagram.com/commercecloud
            - img "Instagram" [ref=e251]
          - link "X" [ref=e253] [cursor=pointer]:
            - /url: https://x.com/CommerceCloud
            - img "X" [ref=e254]
          - link "Facebook" [ref=e256] [cursor=pointer]:
            - /url: https://facebook.com/CommerceCloud/
            - img "Facebook" [ref=e257]
      - generic [ref=e259]:
        - generic [ref=e260]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e261]:
          - generic [ref=e262]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e265] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e268] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e269]:
            - link "Privacy Policy" [ref=e270] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e271] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
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
  90  |     const box = await trigger.boundingBox();
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
> 112 |     await link.hover({ force: true });
      |                ^ Error: locator.hover: Element is not visible
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
```