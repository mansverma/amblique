# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/plp.spec.ts >> Mobile PLP grid and pagination (M-PLP-115–119) >> M-PLP-118 pagination has Previous, page numbers and Next; more than one page exists
- Location: tests/mobile/plp.spec.ts:178:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /previous|prev/i }).or(getByRole('link', { name: /previous|prev/i })).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /previous|prev/i }).or(getByRole('link', { name: /previous|prev/i })).first()

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - link "Home":
    - /url: /MarketStreet/en-US/
    - img "Home"
  - button "Find a Store"
  - link "Sign In":
    - /url: /MarketStreet/en-US/login
  - link "Wishlist":
    - /url: /MarketStreet/en-US/wishlist
  - 'button "My cart, number of items: 0"'
  - button "Open menu"
  - text: Search
  - combobox "Search"
- main:
  - text: 36 products available
  - navigation "Breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: /MarketStreet/en-US/
      - listitem:
        - link "Women":
          - /url: /MarketStreet/en-US/category/women
  - heading "Women (36)" [level=1]
  - text: "Sort by:"
  - combobox "Sort by:":
    - option "Best Matches" [selected]
    - option "Price Low To High"
    - option "Price High to Low"
    - option "Product Name A - Z"
    - option "Product Name Z - A"
    - option "Brand"
    - option "Most Popular"
    - option "Top Sellers"
  - button "Filters"
  - group "Quick category filters":
    - button "Accessories"
    - button "Bags"
    - button "Bottoms"
    - button "Dresses"
    - button "Knitwear"
    - button "New In"
    - button "Outerwear"
    - button "Shoes"
    - button "Tops"
  - button "Add to Wishlist"
  - button "Quick Add Leather Crossbody Bag": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Leather Crossbody Bag" [level=3]:
    - link "Leather Crossbody Bag":
      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
  - paragraph: "SKU: standard-prd-womens-leather-crossbody-bag"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Leather Crossbody Bag Current price: $109.99 Leather Crossbody Bag List price: $139.90"
  - button "Add to Wishlist"
  - button "Quick Add Knit Midi Skirt": Quick Add
  - group "Available colors":
    - link "View Knit Midi Skirt in Beige":
      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
    - link "View Knit Midi Skirt in Black":
      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
    - link "View Knit Midi Skirt in Navy":
      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
  - paragraph: Performer
  - paragraph: Women
  - heading "Knit Midi Skirt" [level=3]:
    - link "Knit Midi Skirt":
      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
  - paragraph: "SKU: womens-knit-midi-skirt"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Knit Midi Skirt Current price: $59.99 Knit Midi Skirt List price from $69.90"
  - button "Add to Wishlist"
  - button "Quick Add Denim Midi Skirt": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Denim Midi Skirt" [level=3]:
    - link "Denim Midi Skirt":
      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
  - paragraph: "SKU: womens-denim-midi-skirt"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Denim Midi Skirt Current price: $44.99 Denim Midi Skirt List price from $69.90 New In - 25% Off! Best Seller New"
  - button "Add to Wishlist"
  - button "Quick Add Structured Blazer": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Structured Blazer" [level=3]:
    - link "Structured Blazer":
      - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
  - paragraph: "SKU: womens-structured-blazer"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Structured Blazer Current price: $74.99 Structured Blazer List price from $129.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Wool Blend Coat": Quick Add
  - group "Available colors":
    - link "View Wool Blend Coat in Beige":
      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
    - link "View Wool Blend Coat in Black":
      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=black
  - paragraph: Performer
  - paragraph: Women
  - heading "Wool Blend Coat" [level=3]:
    - link "Wool Blend Coat":
      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
  - paragraph: "SKU: womens-wool-blend-coat"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Wool Blend Coat Current price: $144.99 Wool Blend Coat List price from $179.90 New"
  - button "Add to Wishlist"
  - button "Quick Add Wide Leg Trousers": Quick Add
  - group "Available colors":
    - link "View Wide Leg Trousers in Black":
      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
    - link "View Wide Leg Trousers in Navy":
      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=navy
    - link "View Wide Leg Trousers in Cream":
      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=cream
  - paragraph: Performer
  - paragraph: Women
  - heading "Wide Leg Trousers" [level=3]:
    - link "Wide Leg Trousers":
      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
  - paragraph: "SKU: womens-wide-leg-trousers"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Wide Leg Trousers Current price: $53.99 Wide Leg Trousers List price from $89.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Oversized T-Shirt": Quick Add
  - group "Available colors":
    - link "View Oversized T-Shirt in Gray":
      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=gray
    - link "View Oversized T-Shirt in White":
      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=white
  - paragraph: Performer
  - paragraph: Women
  - heading "Oversized T-Shirt" [level=3]:
    - link "Oversized T-Shirt":
      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?pid=womens-oversized-t-shirt-gray-xs
  - paragraph: "SKU: womens-oversized-t-shirt"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Oversized T-Shirt Current price: $29.99 Oversized T-Shirt List price from $39.90 Buy 2+ Tops, Save 15%"
  - button "Add to Wishlist"
  - button "Quick Add Linen Midi Dress": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Linen Midi Dress" [level=3]:
    - link "Linen Midi Dress":
      - /url: /MarketStreet/en-US/product/womens-linen-midi-dress?pid=womens-linen-midi-dress-xs
  - paragraph: "SKU: womens-linen-midi-dress"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Linen Midi Dress Current price: $59.99 Linen Midi Dress List price from $99.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Satin Trousers": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Satin Trousers" [level=3]:
    - link "Satin Trousers":
      - /url: /MarketStreet/en-US/product/womens-satin-trousers?pid=womens-satin-trousers-xs
  - paragraph: "SKU: womens-satin-trousers"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Satin Trousers Current price: $59.99 Satin Trousers List price from $99.90 New In - 25% Off! Best Seller New"
  - button "Add to Wishlist"
  - button "Quick Add Tailored Vest": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Tailored Vest" [level=3]:
    - link "Tailored Vest":
      - /url: /MarketStreet/en-US/product/womens-tailored-vest?pid=womens-tailored-vest-xs
  - paragraph: "SKU: womens-tailored-vest"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Tailored Vest Current price: $59.99 Tailored Vest List price from $99.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Ballet Flats": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Ballet Flats" [level=3]:
    - link "Ballet Flats":
      - /url: /MarketStreet/en-US/product/womens-ballet-flats?pid=womens-ballet-flats-6
  - paragraph: "SKU: womens-ballet-flats"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Ballet Flats Current price: $44.99 Ballet Flats List price from $79.90 New In - 25% Off! Best Seller New"
  - button "Add to Wishlist"
  - button "Quick Add Leather Ankle Boots": Quick Add
  - group "Available colors":
    - link "View Leather Ankle Boots in Black":
      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=black
    - link "View Leather Ankle Boots in Brown":
      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=brown
    - link "View Leather Ankle Boots in Tan":
      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=tan
  - paragraph: Performer
  - paragraph: Women
  - heading "Leather Ankle Boots" [level=3]:
    - link "Leather Ankle Boots":
      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?pid=womens-leather-ankle-boots-black-6
  - paragraph: "SKU: womens-leather-ankle-boots"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Leather Ankle Boots Current price: $112.49 Leather Ankle Boots List price from $179.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Wool Blend Scarf": Quick Add
  - group "Available colors":
    - link "View Wool Blend Scarf in Beige":
      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=beige
    - link "View Wool Blend Scarf in Gray":
      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=gray
  - paragraph: Performer
  - paragraph: Women
  - heading "Wool Blend Scarf" [level=3]:
    - link "Wool Blend Scarf":
      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?pid=womens-wool-blend-scarf-beige-xs
  - paragraph: "SKU: womens-wool-blend-scarf"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Wool Blend Scarf Current price: $49.99 Wool Blend Scarf List price from $64.90"
  - button "Add to Wishlist"
  - button "Quick Add Oversized Denim Shirt": Quick Add
  - group "Available colors":
    - link "View Oversized Denim Shirt in Blue":
      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=blue
    - link "View Oversized Denim Shirt in Black":
      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=black
  - paragraph: Performer
  - paragraph: Women
  - heading "Oversized Denim Shirt" [level=3]:
    - link "Oversized Denim Shirt":
      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?pid=womens-oversized-denim-shirt-blue-xs
  - paragraph: "SKU: womens-oversized-denim-shirt"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Oversized Denim Shirt Current price: $59.99 Oversized Denim Shirt List price from $79.90 Buy 2+ Tops, Save 15%"
  - button "Add to Wishlist"
  - button "Quick Add Wide Leg Jeans": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Wide Leg Jeans" [level=3]:
    - link "Wide Leg Jeans":
      - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans?pid=womens-wide-leg-jeans-xs
  - paragraph: "SKU: womens-wide-leg-jeans"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Wide Leg Jeans Current price: $59.99 Wide Leg Jeans List price from $99.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Crossbody Bag": Quick Add
  - group "Available colors":
    - link "View Crossbody Bag in Black":
      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=black
    - link "View Crossbody Bag in Brown":
      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=brown
  - paragraph: Performer
  - paragraph: Women
  - heading "Crossbody Bag" [level=3]:
    - link "Crossbody Bag":
      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?pid=womens-crossbody-bag-black-one-size
  - paragraph: "SKU: womens-crossbody-bag"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Crossbody Bag Current price: $79.99 Crossbody Bag List price from $99.90"
  - button "Add to Wishlist"
  - button "Quick Add Structured Handbag": Quick Add
  - group "Available colors":
    - link "View Structured Handbag in Beige":
      - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=beige
    - link "View Structured Handbag in Brown":
      - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=brown
  - paragraph: Performer
  - paragraph: Women
  - heading "Structured Handbag" [level=3]:
    - link "Structured Handbag":
      - /url: /MarketStreet/en-US/product/womens-structured-handbag?pid=womens-structured-handbag-beige-one-size
  - paragraph: "SKU: womens-structured-handbag"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Structured Handbag Current price: $89.99 Structured Handbag List price from $119.90 Best Seller"
  - button "Add to Wishlist"
  - button "Quick Add Wool Coat": Quick Add
  - group "Available colors":
    - link "View Wool Coat in Navy":
      - /url: /MarketStreet/en-US/product/womens-wool-coat?color=navy
  - paragraph: Performer
  - paragraph: Women
  - heading "Wool Coat" [level=3]:
    - link "Wool Coat":
      - /url: /MarketStreet/en-US/product/womens-wool-coat?pid=womens-wool-coat-navy-xs
  - paragraph: "SKU: womens-wool-coat"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Wool Coat Current price: $199.99 Wool Coat List price from $249.90 Best Seller New"
  - button "Add to Wishlist"
  - button "Quick Add Oversized Blazer": Quick Add
  - group "Available colors":
    - link "View Oversized Blazer in Black":
      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=black
    - link "View Oversized Blazer in Navy":
      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=navy
    - link "View Oversized Blazer in Beige":
      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=beige
  - paragraph: Performer
  - paragraph: Women
  - heading "Oversized Blazer" [level=3]:
    - link "Oversized Blazer":
      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?pid=womens-oversized-blazer-black-xs
  - paragraph: "SKU: womens-oversized-blazer"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Oversized Blazer Current price: $74.99 Oversized Blazer List price from $129.90 New In - 25% Off! Best Seller"
  - button "Add to Wishlist"
  - button "Quick Add High Waist Jeans": Quick Add
  - group "Available colors":
    - link "View High Waist Jeans in Blue":
      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=blue
    - link "View High Waist Jeans in Black":
      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=black
    - link "View High Waist Jeans in White":
      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=white
  - paragraph: Performer
  - paragraph: Women
  - heading "High Waist Jeans" [level=3]:
    - link "High Waist Jeans":
      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?pid=womens-high-waist-jeans-blue-xs
  - paragraph: "SKU: womens-high-waist-jeans"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "High Waist Jeans Current price: $63.99 High Waist Jeans List price from $79.90 New"
  - button "Add to Wishlist"
  - button "Quick Add Cropped Cardigan": Quick Add
  - group "Available colors":
    - link "View Cropped Cardigan in Beige":
      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=beige
    - link "View Cropped Cardigan in Gray":
      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=gray
    - link "View Cropped Cardigan in Black":
      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=black
  - paragraph: Performer
  - paragraph: Women
  - heading "Cropped Cardigan" [level=3]:
    - link "Cropped Cardigan":
      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?pid=womens-cropped-cardigan-beige-xs
  - paragraph: "SKU: womens-cropped-cardigan"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Cropped Cardigan Current price: $35.99 Cropped Cardigan List price from $59.90 New In - 25% Off! New"
  - button "Add to Wishlist"
  - button "Quick Add Trench Coat": Quick Add
  - paragraph: Performer
  - paragraph: Women
  - heading "Trench Coat" [level=3]:
    - link "Trench Coat":
      - /url: /MarketStreet/en-US/product/womens-trench-coat?pid=womens-trench-coat-xs
  - paragraph: "SKU: womens-trench-coat"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Trench Coat Current price: $149.99 Trench Coat List price from $249.90 New In - 25% Off!"
  - button "Add to Wishlist"
  - button "Quick Add Oversized Knit Sweater": Quick Add
  - group "Available colors":
    - link "View Oversized Knit Sweater in Gray":
      - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=gray
    - link "View Oversized Knit Sweater in Black":
      - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=black
  - paragraph: Performer
  - paragraph: Women
  - heading "Oversized Knit Sweater" [level=3]:
    - link "Oversized Knit Sweater":
      - /url: /MarketStreet/en-US/product/womens-oversized-knit?pid=womens-oversized-knit-gray-xxl
  - paragraph: "SKU: womens-oversized-knit"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Oversized Knit Sweater Current price: $89.90 New"
  - button "Add to Wishlist"
  - button "Quick Add Ribbed Tank Top": Quick Add
  - group "Available colors":
    - link "View Ribbed Tank Top in Black":
      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=black
    - link "View Ribbed Tank Top in White":
      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=white
    - link "View Ribbed Tank Top in Beige":
      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=beige
  - paragraph: Performer
  - paragraph: Women
  - heading "Ribbed Tank Top" [level=3]:
    - link "Ribbed Tank Top":
      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?pid=womens-ribbed-tank-top-black-xs
  - paragraph: "SKU: womens-ribbed-tank-top"
  - group "4 out of 5 stars, 218 reviews"
  - button "(218)"
  - text: "Ribbed Tank Top Current price: $18.74 Ribbed Tank Top List price from $29.90 New In - 25% Off!"
  - paragraph: Showing 24 of 36
  - button "Load more"
- contentinfo:
  - link "Market Street":
    - /url: /MarketStreet/en-US/
    - img "Market Street"
  - link "Youtube":
    - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
    - img "YouTube"
  - link "Instagram":
    - /url: https://instagram.com/commercecloud
    - img "Instagram"
  - link "X":
    - /url: https://x.com/CommerceCloud
    - img "X"
  - link "Facebook":
    - /url: https://facebook.com/CommerceCloud/
    - img "Facebook"
  - link "About Us":
    - /url: /MarketStreet/en-US/about-us
  - link "Accessibility Statement":
    - /url: /MarketStreet/en-US/accessibility
  - link "Privacy Policy":
    - /url: /MarketStreet/en-US/privacy
  - link "Your Privacy Choices":
    - /url: /MarketStreet/en-US/privacy-choices
  - text: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
  - combobox "Language selector. Selecting a language reloads the page in that language.":
    - option "English (US)" [selected]
    - option "English (UK)"
  - combobox "Currency switcher. Selecting a currency updates prices across the site.":
    - option "US Dollar ($)" [selected]
    - option "British Pound (£)"
  - link "Privacy Policy":
    - /url: /MarketStreet/en-US/privacy
  - link "Terms of Use":
    - /url: /MarketStreet/en-US/terms
- region "Notifications alt+T"
```

# Test source

```ts
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
  108 |     expect(active).toBeGreaterThanOrEqual(2);
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
> 180 |       .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
      |                                                                        ^ Error: expect(locator).toBeVisible() failed
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
  264 |     await expect(wishlist).not.toBeVisible();
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
```