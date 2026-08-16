# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> Shared Product Card on PLP (CARD-101–116) >> CARD-115 product name link is underlined on hover
- Location: tests/desktop/plp.spec.ts:271:7

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /underline/
Received string:  ""
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
      - generic [ref=e40]:
        - generic [ref=e41]: Women
        - paragraph [ref=e42]: Women
        - generic [ref=e43]: 36 products available
      - generic [ref=e44]:
        - navigation "Breadcrumb" [ref=e46]:
          - list [ref=e47]:
            - listitem [ref=e48]:
              - link "Home" [ref=e49] [cursor=pointer]:
                - /url: /MarketStreet/en-US/
            - listitem [ref=e50]:
              - link "Women" [ref=e53] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/women
        - generic [ref=e54]:
          - heading "Women (36)" [level=1] [ref=e55]
          - generic [ref=e57]:
            - generic [ref=e58]: "Sort by:"
            - combobox "Sort by:" [ref=e60] [cursor=pointer]:
              - option "Best Matches" [selected]
              - option "Price Low To High"
              - option "Price High to Low"
              - option "Product Name A - Z"
              - option "Product Name Z - A"
              - option "Brand"
              - option "Most Popular"
              - option "Top Sellers"
        - generic [ref=e62]:
          - generic [ref=e63]:
            - button "Filters" [ref=e64] [cursor=pointer]
            - group "Quick category filters" [ref=e65]:
              - button "Accessories" [ref=e66] [cursor=pointer]
              - button "Bags" [ref=e67] [cursor=pointer]
              - button "Bottoms" [ref=e68] [cursor=pointer]
              - button "Dresses" [ref=e69] [cursor=pointer]
              - button "Knitwear" [ref=e70] [cursor=pointer]
              - button "New In" [ref=e71] [cursor=pointer]
              - button "Outerwear" [ref=e72] [cursor=pointer]
              - button "Shoes" [ref=e73] [cursor=pointer]
              - button "Tops" [ref=e74] [cursor=pointer]
          - generic [ref=e75]:
            - generic [ref=e76] [cursor=pointer]:
              - generic [ref=e78]:
                - link [ref=e80]:
                  - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                - link [ref=e84]:
                  - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                - button "Add to Wishlist" [ref=e87]
                - button "Quick Add Leather Crossbody Bag" [ref=e91]: Quick Add
              - generic [ref=e92]:
                - paragraph [ref=e93]: Performer
                - paragraph [ref=e94]: Women
                - heading [level=3] [ref=e95]:
                  - link "Leather Crossbody Bag" [ref=e96]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                - paragraph [ref=e97]: "SKU: standard-prd-womens-leather-crossbody-bag"
                - generic [ref=e100]:
                  - group "4 out of 5 stars, 218 reviews" [ref=e101]
                  - button "(218)" [ref=e112]
                - generic [ref=e114]:
                  - text: $109.99
                  - generic [ref=e115]: "Leather Crossbody Bag Current price: $109.99"
                  - text: $139.90
                  - generic [ref=e116]: "Leather Crossbody Bag List price: $139.90"
            - generic [ref=e117] [cursor=pointer]:
              - generic [ref=e119]:
                - link [ref=e121]:
                  - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                - link [ref=e125]:
                  - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                - button "Add to Wishlist" [ref=e128]
                - button "Quick Add Knit Midi Skirt" [ref=e132]: Quick Add
              - generic [ref=e133]:
                - group "Available colors" [ref=e135]:
                  - link "View Knit Midi Skirt in Beige" [ref=e136]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                  - link "View Knit Midi Skirt in Black" [ref=e137]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
                  - link "View Knit Midi Skirt in Navy" [ref=e138]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
                - paragraph [ref=e139]: Performer
                - paragraph [ref=e140]: Women
                - heading [level=3] [ref=e141]:
                  - link "Knit Midi Skirt" [ref=e142]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                - paragraph [ref=e143]: "SKU: womens-knit-midi-skirt"
                - generic [ref=e146]:
                  - group "4 out of 5 stars, 218 reviews" [ref=e147]
                  - button "(218)" [ref=e158]
                - generic [ref=e160]:
                  - text: $59.99
                  - generic [ref=e161]: "Knit Midi Skirt Current price: $59.99"
                  - text: $69.90
                  - generic [ref=e162]: Knit Midi Skirt List price from $69.90
            - generic [ref=e163] [cursor=pointer]:
              - generic [ref=e165]:
                - link [ref=e167]:
                  - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt
                - link [ref=e171]:
                  - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                - button "Add to Wishlist" [ref=e174]
                - button "Quick Add Denim Midi Skirt" [ref=e178]: Quick Add
              - generic [ref=e179]:
                - paragraph [ref=e180]: Performer
                - paragraph [ref=e181]: Women
                - heading [level=3] [ref=e182]:
                  - link "Denim Midi Skirt" [ref=e183]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                - paragraph [ref=e184]: "SKU: womens-denim-midi-skirt"
                - generic [ref=e187]:
                  - group "4 out of 5 stars, 218 reviews" [ref=e188]
                  - button "(218)" [ref=e199]
                - generic [ref=e200]:
                  - generic [ref=e201]:
                    - text: $44.99
                    - generic [ref=e202]: "Denim Midi Skirt Current price: $44.99"
                    - text: $69.90
                    - generic [ref=e203]: Denim Midi Skirt List price from $69.90
                  - generic [ref=e204]: New In - 25% Off!
            - generic [ref=e206] [cursor=pointer]:
              - generic [ref=e208]:
                - link [ref=e210]:
                  - /url: /MarketStreet/en-US/product/womens-structured-blazer
                - link [ref=e214]:
                  - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                - generic [ref=e215]:
                  - generic [ref=e216]: Best Seller
                  - generic [ref=e217]: New
                - button "Add to Wishlist" [ref=e220]
                - button "Quick Add Structured Blazer" [ref=e224]: Quick Add
              - generic [ref=e225]:
                - paragraph [ref=e226]: Performer
                - paragraph [ref=e227]: Women
                - heading [level=3] [ref=e228]:
                  - link "Structured Blazer" [ref=e229]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                - paragraph [ref=e230]: "SKU: womens-structured-blazer"
                - generic [ref=e233]:
                  - group "4 out of 5 stars, 218 reviews" [ref=e234]
                  - button "(218)" [ref=e245]
                - generic [ref=e246]:
                  - generic [ref=e247]:
                    - text: $74.99
                    - generic [ref=e248]: "Structured Blazer Current price: $74.99"
                    - text: $129.90
                    - generic [ref=e249]: Structured Blazer List price from $129.90
                  - generic [ref=e250]: New In - 25% Off!
          - generic [ref=e301]:
            - paragraph [ref=e302]: Showing 24 of 36
            - button "Load more" [ref=e303] [cursor=pointer]
  - contentinfo [ref=e304]:
    - generic [ref=e307]:
      - generic [ref=e309]:
        - link [ref=e310] [cursor=pointer]:
          - /url: /MarketStreet/en-US/
          - img "Market Street" [ref=e311]
        - generic [ref=e312]:
          - link "About Us" [ref=e313] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e314] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e315] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e316] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
        - generic [ref=e317]:
          - link "Youtube" [ref=e318] [cursor=pointer]:
            - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
            - img "YouTube" [ref=e319]
          - link "Instagram" [ref=e321] [cursor=pointer]:
            - /url: https://instagram.com/commercecloud
            - img "Instagram" [ref=e322]
          - link "X" [ref=e324] [cursor=pointer]:
            - /url: https://x.com/CommerceCloud
            - img "X" [ref=e325]
          - link "Facebook" [ref=e327] [cursor=pointer]:
            - /url: https://facebook.com/CommerceCloud/
            - img "Facebook" [ref=e328]
      - generic [ref=e330]:
        - generic [ref=e331]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e332]:
          - generic [ref=e333]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e336] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e339] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e340]:
            - link "Privacy Policy" [ref=e341] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e342] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
  180 |     for (let i = 0; i < count; i++) {
  181 |       const box = await cards.nth(i).boundingBox();
  182 |       if (box) expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 1);
  183 |     }
  184 |   });
  185 | });
  186 | 
  187 | // ---------------------------------------------------------------------------
  188 | // CARD-101–116  Shared Product Card (PLP context)
  189 | // ---------------------------------------------------------------------------
  190 | test.describe('Shared Product Card on PLP (CARD-101–116)', () => {
  191 |   const firstCard = () => {
  192 |     // Helper — fresh locator each use
  193 |     return null;
  194 |   };
  195 | 
  196 |   test('CARD-101/104 image and product name both link to PDP (/product/)', async ({ page }) => {
  197 |     const card = page.locator('[class*="product-card"]').first();
  198 |     // Image link is aria-hidden (decorative duplicate); name link is the primary accessible link
  199 |     const imgLink  = card.locator('a[href*="/product/"]').first();
  200 |     const nameLink = card.locator('a:not([aria-hidden])').filter({ has: page.locator('text=/[A-Z]/')}).first();
  201 |     const imgHref  = await imgLink.getAttribute('href');
  202 |     const nameHref = await nameLink.getAttribute('href');
  203 |     expect(imgHref ?? '').toContain('/product/');
  204 |     expect(nameHref ?? '').toContain('/product/');
  205 |   });
  206 | 
  207 |   test('CARD-102 brand name is present above product name', async ({ page }) => {
  208 |     const card = page.locator('[class*="product-card"]').first();
  209 |     // Brand is a <p> that appears before the product name <a>; both share the same text-muted class
  210 |     const brand = card.locator('p.text-muted-foreground, p[class*="muted"]').first();
  211 |     await expect(brand).toBeVisible();
  212 |   });
  213 | 
  214 |   test('CARD-103 category line is shown on PLP cards', async ({ page }) => {
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
> 280 |     expect(decoration).toMatch(/underline/);
      |                        ^ Error: expect(received).toMatch(expected)
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
  315 |     await page.keyboard.press('Tab');
  316 |     await expect(quickAdd).toBeAttached();
  317 |   });
  318 | });
  319 | 
```