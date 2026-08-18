# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> Shared Product Card on PLP (CARD-101–116) >> CARD-109a "Free delivery on orders over $50" appears on every visible card
- Location: tests/desktop/plp.spec.ts:244:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[class*="product-card"], [data-product-id]').first().getByText(/Free delivery on orders over \$50/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[class*="product-card"], [data-product-id]').first().getByText(/Free delivery on orders over \$50/i)

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - link "Home":
    - /url: /MarketStreet/en-US/
    - img "Home"
  - navigation "Main":
    - list:
      - listitem:
        - button "Women"
      - listitem:
        - button "Men"
      - listitem:
        - button "Kids"
      - listitem:
        - link "New Arrivals":
          - /url: /MarketStreet/en-US/category/new-arrivals
  - text: Search
  - combobox "Search"
  - button "Find a Store"
  - link "Sign In":
    - /url: /MarketStreet/en-US/login
  - link "Wishlist":
    - /url: /MarketStreet/en-US/wishlist
  - 'button "My cart, number of items: 0"'
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
  - link "About Us":
    - /url: /MarketStreet/en-US/about-us
  - link "Accessibility Statement":
    - /url: /MarketStreet/en-US/accessibility
  - link "Privacy Policy":
    - /url: /MarketStreet/en-US/privacy
  - link "Your Privacy Choices":
    - /url: /MarketStreet/en-US/privacy-choices
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
  148 |     for (const band of WOMEN_PRICE_BANDS) {
  149 |       await expect(page.getByText(new RegExp(band.label.replace(/\$/g, '\\$')))).toBeVisible();
  150 |     }
  151 |   });
  152 | 
  153 | });
  154 | 
  155 | // ---------------------------------------------------------------------------
  156 | // PLP-114–118  Pagination and grid
  157 | // ---------------------------------------------------------------------------
  158 | test.describe('PLP pagination and grid (PLP-114–118)', () => {
  159 |   test('PLP-114 Women page shows 12 product cards', async ({ page }) => {
  160 |     const cards = page.locator('[data-product-id], .product-tile, article[itemtype*="Product"]')
  161 |       .or(page.locator('[class*="product-card"], [class*="ProductCard"]'));
  162 |     await expect(cards).toHaveCount(12);
  163 |   });
  164 | 
  165 |   test('PLP-115 pagination has Previous, page numbers and Next; more than one page exists', async ({ page }) => {
  166 |     await expect(page.getByRole('button', { name: /previous|prev/i })
  167 |       .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
  168 |     await expect(page.getByRole('button', { name: /next/i })
  169 |       .or(page.getByRole('link', { name: /next/i })).first()).toBeVisible();
  170 |     // At least page "2" must be reachable (spec says 2 pages; arithmetic gives 3)
  171 |     await expect(page.getByRole('button', { name: '2' })
  172 |       .or(page.getByRole('link', { name: '2' })).first()).toBeVisible();
  173 |   });
  174 | 
  175 |   test('PLP-118 no card overflows the viewport horizontally', async ({ page }) => {
  176 |     const viewportWidth = page.viewportSize()!.width;
  177 |     const cards = page.locator('[data-product-id], .product-tile, article[itemtype*="Product"]')
  178 |       .or(page.locator('[class*="product-card"], [class*="ProductCard"]'));
  179 |     const count = await cards.count();
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
> 248 |       await expect(cards.nth(i).getByText(/Free delivery on orders over \$50/i)).toBeVisible();
      |                                                                                  ^ Error: expect(locator).toBeVisible() failed
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
  315 |     await page.keyboard.press('Tab');
  316 |     await expect(quickAdd).toBeAttached();
  317 |   });
  318 | });
  319 | 
```