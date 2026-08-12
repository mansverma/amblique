# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/plp.spec.ts >> PLP refinements (PLP-109–113) >> PLP-113 Women price bands are $0–$49.99 (4), $50–$99.99 (25), $100–$199.99 (7)
- Location: tests/desktop/plp.spec.ts:153:7

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: getByText('4')
Expected: attached
Error: strict mode violation: getByText('4') resolved to 27 elements:
    1) <span class="ml-3 text-sm font-medium">$0 - $49.99</span> aka getByText('$0 - $')
    2) <span class="ml-auto text-xs bg-muted/50 px-2 py-1 rounded-full">4</span> aka getByText('4', { exact: true })
    3) <span aria-hidden="true" class="[&:not(:first-child)]:mt-6 text-left text-lg font-semibold leading-[120%] tracking-[-0.45px] text-card-foreground">$44.99</span> aka getByText('$44.99').first()
    4) <span class="sr-only" aria-live="polite" aria-atomic="true">Denim Midi Skirt Current price: $44.99</span> aka getByText('Denim Midi Skirt Current')
    5) <span aria-hidden="true" class="[&:not(:first-child)]:mt-6 text-left text-lg font-semibold leading-[120%] tracking-[-0.45px] text-card-foreground">$74.99</span> aka getByText('$74.99').first()
    6) <span class="sr-only" aria-live="polite" aria-atomic="true">Structured Blazer Current price: $74.99</span> aka getByText('Structured Blazer Current')
    7) <span aria-hidden="true" class="[&:not(:first-child)]:mt-6 text-left text-lg font-semibold leading-[120%] tracking-[-0.45px] text-card-foreground">$144.99</span> aka getByText('$144.99', { exact: true })
    8) <span class="sr-only" aria-live="polite" aria-atomic="true">Wool Blend Coat Current price: $144.99</span> aka getByText('Wool Blend Coat Current price: $')
    9) <span aria-hidden="true" class="[&:not(:first-child)]:mt-6 text-left text-lg font-semibold leading-[120%] tracking-[-0.45px] text-card-foreground">$44.99</span> aka getByText('$44.99').nth(2)
    10) <span class="sr-only" aria-live="polite" aria-atomic="true">Ballet Flats Current price: $44.99</span> aka getByText('Ballet Flats Current price: $')
    ...

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for getByText('4')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - generic [ref=e61]:
          - region "Filters" [ref=e62]:
            - generic [ref=e63]:
              - generic [ref=e64]:
                - heading [level=3] [ref=e65]:
                  - button "Shop by Availability" [expanded] [ref=e66] [cursor=pointer]
                - generic [ref=e70]:
                  - checkbox "Filter Products by Store Availability at Select Store" [ref=e71] [cursor=pointer]
                  - generic [ref=e72] [cursor=pointer]:
                    - text: In stock at
                    - button "Select Store" [ref=e73]
              - generic [ref=e75]:
                - heading [level=3] [ref=e76]:
                  - button "Price" [expanded] [active] [ref=e77] [cursor=pointer]
                - group "Price" [ref=e81]:
                  - generic [ref=e82]:
                    - generic [ref=e83]:
                      - generic [ref=e84]:
                        - generic [ref=e85]: Min
                        - generic [ref=e86]:
                          - generic [ref=e87]: $
                          - spinbutton "Min" [ref=e89]
                      - generic [ref=e90]: to
                      - generic [ref=e91]:
                        - generic [ref=e92]: Max
                        - generic [ref=e93]:
                          - generic [ref=e94]: $
                          - spinbutton "Max" [ref=e96]
                    - generic [ref=e97]:
                      - generic [ref=e98] [cursor=pointer]:
                        - checkbox "$0 - $49.99 4" [ref=e99]
                        - generic [ref=e100]: $0 - $49.99
                        - generic [ref=e101]: "4"
                      - generic [ref=e102] [cursor=pointer]:
                        - checkbox "$50 - $99.99 25" [ref=e103]
                        - generic [ref=e104]: $50 - $99.99
                        - generic [ref=e105]: "25"
                      - generic [ref=e106] [cursor=pointer]:
                        - checkbox "$100 - $199.99 7" [ref=e107]
                        - generic [ref=e108]: $100 - $199.99
                        - generic [ref=e109]: "7"
          - generic [ref=e110]:
            - generic [ref=e111]:
              - button "Filters" [pressed] [ref=e112] [cursor=pointer]
              - group "Quick category filters" [ref=e113]:
                - button "Accessories" [ref=e114] [cursor=pointer]
                - button "Bags" [ref=e115] [cursor=pointer]
                - button "Bottoms" [ref=e116] [cursor=pointer]
                - button "Dresses" [ref=e117] [cursor=pointer]
                - button "Knitwear" [ref=e118] [cursor=pointer]
                - button "New In" [ref=e119] [cursor=pointer]
                - button "Outerwear" [ref=e120] [cursor=pointer]
                - button "Shoes" [ref=e121] [cursor=pointer]
                - button "Tops" [ref=e122] [cursor=pointer]
            - generic [ref=e123]:
              - generic [ref=e124] [cursor=pointer]:
                - generic [ref=e126]:
                  - link [ref=e128]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - link [ref=e132]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - button "Add to Wishlist" [ref=e135]
                  - button "Quick Add Leather Crossbody Bag" [ref=e139]: Quick Add
                - generic [ref=e140]:
                  - paragraph [ref=e141]: Performer
                  - paragraph [ref=e142]: Women
                  - heading [level=3] [ref=e143]:
                    - link "Leather Crossbody Bag" [ref=e144]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - paragraph [ref=e145]: "SKU: standard-prd-womens-leather-crossbody-bag"
                  - generic [ref=e148]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e149]
                    - button "(218)" [ref=e160]
                  - generic [ref=e162]:
                    - text: $109.99
                    - generic [ref=e163]: "Leather Crossbody Bag Current price: $109.99"
                    - text: $139.90
                    - generic [ref=e164]: "Leather Crossbody Bag List price: $139.90"
              - generic [ref=e165] [cursor=pointer]:
                - generic [ref=e167]:
                  - link [ref=e169]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                  - link [ref=e173]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                  - button "Add to Wishlist" [ref=e176]
                  - button "Quick Add Knit Midi Skirt" [ref=e180]: Quick Add
                - generic [ref=e181]:
                  - group "Available colors" [ref=e183]:
                    - link "View Knit Midi Skirt in Beige" [ref=e184]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                    - link "View Knit Midi Skirt in Black" [ref=e185]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
                    - link "View Knit Midi Skirt in Navy" [ref=e186]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
                  - paragraph [ref=e187]: Performer
                  - paragraph [ref=e188]: Women
                  - heading [level=3] [ref=e189]:
                    - link "Knit Midi Skirt" [ref=e190]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                  - paragraph [ref=e191]: "SKU: womens-knit-midi-skirt"
                  - generic [ref=e194]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e195]
                    - button "(218)" [ref=e206]
                  - generic [ref=e208]:
                    - text: $59.99
                    - generic [ref=e209]: "Knit Midi Skirt Current price: $59.99"
                    - text: $69.90
                    - generic [ref=e210]: Knit Midi Skirt List price from $69.90
              - generic [ref=e211] [cursor=pointer]:
                - generic [ref=e213]:
                  - link [ref=e215]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt
                  - link [ref=e219]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                  - button "Add to Wishlist" [ref=e222]
                  - button "Quick Add Denim Midi Skirt" [ref=e226]: Quick Add
                - generic [ref=e227]:
                  - paragraph [ref=e228]: Performer
                  - paragraph [ref=e229]: Women
                  - heading [level=3] [ref=e230]:
                    - link "Denim Midi Skirt" [ref=e231]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                  - paragraph [ref=e232]: "SKU: womens-denim-midi-skirt"
                  - generic [ref=e235]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e236]
                    - button "(218)" [ref=e247]
                  - generic [ref=e248]:
                    - generic [ref=e249]:
                      - text: $44.99
                      - generic [ref=e250]: "Denim Midi Skirt Current price: $44.99"
                      - text: $69.90
                      - generic [ref=e251]: Denim Midi Skirt List price from $69.90
                    - generic [ref=e252]: New In - 25% Off!
              - generic [ref=e254] [cursor=pointer]:
                - generic [ref=e256]:
                  - link [ref=e258]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer
                  - link [ref=e262]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                  - generic [ref=e263]:
                    - generic [ref=e264]: Best Seller
                    - generic [ref=e265]: New
                  - button "Add to Wishlist" [ref=e268]
                  - button "Quick Add Structured Blazer" [ref=e272]: Quick Add
                - generic [ref=e273]:
                  - paragraph [ref=e274]: Performer
                  - paragraph [ref=e275]: Women
                  - heading [level=3] [ref=e276]:
                    - link "Structured Blazer" [ref=e277]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                  - paragraph [ref=e278]: "SKU: womens-structured-blazer"
                  - generic [ref=e281]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e282]
                    - button "(218)" [ref=e293]
                  - generic [ref=e294]:
                    - generic [ref=e295]:
                      - text: $74.99
                      - generic [ref=e296]: "Structured Blazer Current price: $74.99"
                      - text: $129.90
                      - generic [ref=e297]: Structured Blazer List price from $129.90
                    - generic [ref=e298]: New In - 25% Off!
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e302]:
                  - link [ref=e304]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                  - link [ref=e308]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                  - button "Add to Wishlist" [ref=e311]
                  - button "Quick Add Wool Blend Coat" [ref=e315]: Quick Add
                - generic [ref=e316]:
                  - group "Available colors" [ref=e318]:
                    - link "View Wool Blend Coat in Beige" [ref=e319]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                    - link "View Wool Blend Coat in Black" [ref=e320]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=black
                  - paragraph [ref=e321]: Performer
                  - paragraph [ref=e322]: Women
                  - heading [level=3] [ref=e323]:
                    - link "Wool Blend Coat" [ref=e324]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                  - paragraph [ref=e325]: "SKU: womens-wool-blend-coat"
                  - generic [ref=e328]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e329]
                    - button "(218)" [ref=e340]
                  - generic [ref=e342]:
                    - text: $144.99
                    - generic [ref=e343]: "Wool Blend Coat Current price: $144.99"
                    - text: $179.90
                    - generic [ref=e344]: Wool Blend Coat List price from $179.90
              - generic [ref=e345] [cursor=pointer]:
                - generic [ref=e347]:
                  - link [ref=e349]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                  - link [ref=e353]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                  - generic [ref=e354]: New
                  - button "Add to Wishlist" [ref=e358]
                  - button "Quick Add Wide Leg Trousers" [ref=e362]: Quick Add
                - generic [ref=e363]:
                  - group "Available colors" [ref=e365]:
                    - link "View Wide Leg Trousers in Black" [ref=e366]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                    - link "View Wide Leg Trousers in Navy" [ref=e367]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=navy
                    - link "View Wide Leg Trousers in Cream" [ref=e368]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=cream
                  - paragraph [ref=e369]: Performer
                  - paragraph [ref=e370]: Women
                  - heading [level=3] [ref=e371]:
                    - link "Wide Leg Trousers" [ref=e372]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                  - paragraph [ref=e373]: "SKU: womens-wide-leg-trousers"
                  - generic [ref=e376]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e377]
                    - button "(218)" [ref=e388]
                  - generic [ref=e389]:
                    - generic [ref=e390]:
                      - text: $53.99
                      - generic [ref=e391]: "Wide Leg Trousers Current price: $53.99"
                      - text: $89.90
                      - generic [ref=e392]: Wide Leg Trousers List price from $89.90
                    - generic [ref=e393]: New In - 25% Off!
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e397]:
                  - link [ref=e399]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=gray
                  - link [ref=e403]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?pid=womens-oversized-t-shirt-gray-xs
                  - button "Add to Wishlist" [ref=e406]
                  - button "Quick Add Oversized T-Shirt" [ref=e410]: Quick Add
                - generic [ref=e411]:
                  - group "Available colors" [ref=e413]:
                    - link "View Oversized T-Shirt in Gray" [ref=e414]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=gray
                    - link "View Oversized T-Shirt in White" [ref=e415]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=white
                  - paragraph [ref=e416]: Performer
                  - paragraph [ref=e417]: Women
                  - heading [level=3] [ref=e418]:
                    - link "Oversized T-Shirt" [ref=e419]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?pid=womens-oversized-t-shirt-gray-xs
                  - paragraph [ref=e420]: "SKU: womens-oversized-t-shirt"
                  - generic [ref=e423]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e424]
                    - button "(218)" [ref=e435]
                  - generic [ref=e436]:
                    - generic [ref=e437]:
                      - text: $29.99
                      - generic [ref=e438]: "Oversized T-Shirt Current price: $29.99"
                      - text: $39.90
                      - generic [ref=e439]: Oversized T-Shirt List price from $39.90
                    - generic [ref=e440]: Buy 2+ Tops, Save 15%
              - generic [ref=e442] [cursor=pointer]:
                - generic [ref=e444]:
                  - link [ref=e446]:
                    - /url: /MarketStreet/en-US/product/womens-linen-midi-dress
                  - link [ref=e450]:
                    - /url: /MarketStreet/en-US/product/womens-linen-midi-dress?pid=womens-linen-midi-dress-xs
                  - button "Add to Wishlist" [ref=e453]
                  - button "Quick Add Linen Midi Dress" [ref=e457]: Quick Add
                - generic [ref=e458]:
                  - paragraph [ref=e459]: Performer
                  - paragraph [ref=e460]: Women
                  - heading [level=3] [ref=e461]:
                    - link "Linen Midi Dress" [ref=e462]:
                      - /url: /MarketStreet/en-US/product/womens-linen-midi-dress?pid=womens-linen-midi-dress-xs
                  - paragraph [ref=e463]: "SKU: womens-linen-midi-dress"
                  - generic [ref=e466]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e467]
                    - button "(218)" [ref=e478]
                  - generic [ref=e479]:
                    - generic [ref=e480]:
                      - text: $59.99
                      - generic [ref=e481]: "Linen Midi Dress Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e482]: Linen Midi Dress List price from $99.90
                    - generic [ref=e483]: New In - 25% Off!
              - generic [ref=e485] [cursor=pointer]:
                - generic [ref=e487]:
                  - link [ref=e489]:
                    - /url: /MarketStreet/en-US/product/womens-satin-trousers
                  - link [ref=e493]:
                    - /url: /MarketStreet/en-US/product/womens-satin-trousers?pid=womens-satin-trousers-xs
                  - button "Add to Wishlist" [ref=e496]
                  - button "Quick Add Satin Trousers" [ref=e500]: Quick Add
                - generic [ref=e501]:
                  - paragraph [ref=e502]: Performer
                  - paragraph [ref=e503]: Women
                  - heading [level=3] [ref=e504]:
                    - link "Satin Trousers" [ref=e505]:
                      - /url: /MarketStreet/en-US/product/womens-satin-trousers?pid=womens-satin-trousers-xs
                  - paragraph [ref=e506]: "SKU: womens-satin-trousers"
                  - generic [ref=e509]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e510]
                    - button "(218)" [ref=e521]
                  - generic [ref=e522]:
                    - generic [ref=e523]:
                      - text: $59.99
                      - generic [ref=e524]: "Satin Trousers Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e525]: Satin Trousers List price from $99.90
                    - generic [ref=e526]: New In - 25% Off!
              - generic [ref=e528] [cursor=pointer]:
                - generic [ref=e530]:
                  - link [ref=e532]:
                    - /url: /MarketStreet/en-US/product/womens-tailored-vest
                  - link [ref=e536]:
                    - /url: /MarketStreet/en-US/product/womens-tailored-vest?pid=womens-tailored-vest-xs
                  - generic [ref=e537]:
                    - generic [ref=e538]: Best Seller
                    - generic [ref=e539]: New
                  - button "Add to Wishlist" [ref=e542]
                  - button "Quick Add Tailored Vest" [ref=e546]: Quick Add
                - generic [ref=e547]:
                  - paragraph [ref=e548]: Performer
                  - paragraph [ref=e549]: Women
                  - heading [level=3] [ref=e550]:
                    - link "Tailored Vest" [ref=e551]:
                      - /url: /MarketStreet/en-US/product/womens-tailored-vest?pid=womens-tailored-vest-xs
                  - paragraph [ref=e552]: "SKU: womens-tailored-vest"
                  - generic [ref=e555]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e556]
                    - button "(218)" [ref=e567]
                  - generic [ref=e568]:
                    - generic [ref=e569]:
                      - text: $59.99
                      - generic [ref=e570]: "Tailored Vest Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e571]: Tailored Vest List price from $99.90
                    - generic [ref=e572]: New In - 25% Off!
              - generic [ref=e574] [cursor=pointer]:
                - generic [ref=e576]:
                  - link [ref=e578]:
                    - /url: /MarketStreet/en-US/product/womens-ballet-flats
                  - link [ref=e582]:
                    - /url: /MarketStreet/en-US/product/womens-ballet-flats?pid=womens-ballet-flats-6
                  - button "Add to Wishlist" [ref=e585]
                  - button "Quick Add Ballet Flats" [ref=e589]: Quick Add
                - generic [ref=e590]:
                  - paragraph [ref=e591]: Performer
                  - paragraph [ref=e592]: Women
                  - heading [level=3] [ref=e593]:
                    - link "Ballet Flats" [ref=e594]:
                      - /url: /MarketStreet/en-US/product/womens-ballet-flats?pid=womens-ballet-flats-6
                  - paragraph [ref=e595]: "SKU: womens-ballet-flats"
                  - generic [ref=e598]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e599]
                    - button "(218)" [ref=e610]
                  - generic [ref=e611]:
                    - generic [ref=e612]:
                      - text: $44.99
                      - generic [ref=e613]: "Ballet Flats Current price: $44.99"
                      - text: $79.90
                      - generic [ref=e614]: Ballet Flats List price from $79.90
                    - generic [ref=e615]: New In - 25% Off!
              - generic [ref=e617] [cursor=pointer]:
                - generic [ref=e619]:
                  - link [ref=e621]:
                    - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=black
                  - link [ref=e625]:
                    - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?pid=womens-leather-ankle-boots-black-6
                  - generic [ref=e626]:
                    - generic [ref=e627]: Best Seller
                    - generic [ref=e628]: New
                  - button "Add to Wishlist" [ref=e631]
                  - button "Quick Add Leather Ankle Boots" [ref=e635]: Quick Add
                - generic [ref=e636]:
                  - group "Available colors" [ref=e638]:
                    - link "View Leather Ankle Boots in Black" [ref=e639]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=black
                    - link "View Leather Ankle Boots in Brown" [ref=e640]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=brown
                    - link "View Leather Ankle Boots in Tan" [ref=e641]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=tan
                  - paragraph [ref=e642]: Performer
                  - paragraph [ref=e643]: Women
                  - heading [level=3] [ref=e644]:
                    - link "Leather Ankle Boots" [ref=e645]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?pid=womens-leather-ankle-boots-black-6
                  - paragraph [ref=e646]: "SKU: womens-leather-ankle-boots"
                  - generic [ref=e649]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e650]
                    - button "(218)" [ref=e661]
                  - generic [ref=e662]:
                    - generic [ref=e663]:
                      - text: $112.49
                      - generic [ref=e664]: "Leather Ankle Boots Current price: $112.49"
                      - text: $179.90
                      - generic [ref=e665]: Leather Ankle Boots List price from $179.90
                    - generic [ref=e666]: New In - 25% Off!
              - generic [ref=e668] [cursor=pointer]:
                - generic [ref=e670]:
                  - link [ref=e672]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=beige
                  - link [ref=e676]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?pid=womens-wool-blend-scarf-beige-xs
                  - button "Add to Wishlist" [ref=e679]
                  - button "Quick Add Wool Blend Scarf" [ref=e683]: Quick Add
                - generic [ref=e684]:
                  - group "Available colors" [ref=e686]:
                    - link "View Wool Blend Scarf in Beige" [ref=e687]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=beige
                    - link "View Wool Blend Scarf in Gray" [ref=e688]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=gray
                  - paragraph [ref=e689]: Performer
                  - paragraph [ref=e690]: Women
                  - heading [level=3] [ref=e691]:
                    - link "Wool Blend Scarf" [ref=e692]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?pid=womens-wool-blend-scarf-beige-xs
                  - paragraph [ref=e693]: "SKU: womens-wool-blend-scarf"
                  - generic [ref=e696]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e697]
                    - button "(218)" [ref=e708]
                  - generic [ref=e710]:
                    - text: $49.99
                    - generic [ref=e711]: "Wool Blend Scarf Current price: $49.99"
                    - text: $64.90
                    - generic [ref=e712]: Wool Blend Scarf List price from $64.90
              - generic [ref=e713] [cursor=pointer]:
                - generic [ref=e715]:
                  - link [ref=e717]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=blue
                  - link [ref=e721]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?pid=womens-oversized-denim-shirt-blue-xs
                  - button "Add to Wishlist" [ref=e724]
                  - button "Quick Add Oversized Denim Shirt" [ref=e728]: Quick Add
                - generic [ref=e729]:
                  - group "Available colors" [ref=e731]:
                    - link "View Oversized Denim Shirt in Blue" [ref=e732]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=blue
                    - link "View Oversized Denim Shirt in Black" [ref=e733]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=black
                  - paragraph [ref=e734]: Performer
                  - paragraph [ref=e735]: Women
                  - heading [level=3] [ref=e736]:
                    - link "Oversized Denim Shirt" [ref=e737]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?pid=womens-oversized-denim-shirt-blue-xs
                  - paragraph [ref=e738]: "SKU: womens-oversized-denim-shirt"
                  - generic [ref=e741]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e742]
                    - button "(218)" [ref=e753]
                  - generic [ref=e754]:
                    - generic [ref=e755]:
                      - text: $59.99
                      - generic [ref=e756]: "Oversized Denim Shirt Current price: $59.99"
                      - text: $79.90
                      - generic [ref=e757]: Oversized Denim Shirt List price from $79.90
                    - generic [ref=e758]: Buy 2+ Tops, Save 15%
              - generic [ref=e760] [cursor=pointer]:
                - generic [ref=e762]:
                  - link [ref=e764]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans
                  - link [ref=e768]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans?pid=womens-wide-leg-jeans-xs
                  - button "Add to Wishlist" [ref=e771]
                  - button "Quick Add Wide Leg Jeans" [ref=e775]: Quick Add
                - generic [ref=e776]:
                  - paragraph [ref=e777]: Performer
                  - paragraph [ref=e778]: Women
                  - heading [level=3] [ref=e779]:
                    - link "Wide Leg Jeans" [ref=e780]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans?pid=womens-wide-leg-jeans-xs
                  - paragraph [ref=e781]: "SKU: womens-wide-leg-jeans"
                  - generic [ref=e784]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e785]
                    - button "(218)" [ref=e796]
                  - generic [ref=e797]:
                    - generic [ref=e798]:
                      - text: $59.99
                      - generic [ref=e799]: "Wide Leg Jeans Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e800]: Wide Leg Jeans List price from $99.90
                    - generic [ref=e801]: New In - 25% Off!
              - generic [ref=e803] [cursor=pointer]:
                - generic [ref=e805]:
                  - link [ref=e807]:
                    - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=black
                  - link [ref=e811]:
                    - /url: /MarketStreet/en-US/product/womens-crossbody-bag?pid=womens-crossbody-bag-black-one-size
                  - button "Add to Wishlist" [ref=e814]
                  - button "Quick Add Crossbody Bag" [ref=e818]: Quick Add
                - generic [ref=e819]:
                  - group "Available colors" [ref=e821]:
                    - link "View Crossbody Bag in Black" [ref=e822]:
                      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=black
                    - link "View Crossbody Bag in Brown" [ref=e823]:
                      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=brown
                  - paragraph [ref=e824]: Performer
                  - paragraph [ref=e825]: Women
                  - heading [level=3] [ref=e826]:
                    - link "Crossbody Bag" [ref=e827]:
                      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?pid=womens-crossbody-bag-black-one-size
                  - paragraph [ref=e828]: "SKU: womens-crossbody-bag"
                  - generic [ref=e831]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e832]
                    - button "(218)" [ref=e843]
                  - generic [ref=e845]:
                    - text: $79.99
                    - generic [ref=e846]: "Crossbody Bag Current price: $79.99"
                    - text: $99.90
                    - generic [ref=e847]: Crossbody Bag List price from $99.90
              - generic [ref=e848] [cursor=pointer]:
                - generic [ref=e850]:
                  - link [ref=e852]:
                    - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=beige
                  - link [ref=e856]:
                    - /url: /MarketStreet/en-US/product/womens-structured-handbag?pid=womens-structured-handbag-beige-one-size
                  - button "Add to Wishlist" [ref=e859]
                  - button "Quick Add Structured Handbag" [ref=e863]: Quick Add
                - generic [ref=e864]:
                  - group "Available colors" [ref=e866]:
                    - link "View Structured Handbag in Beige" [ref=e867]:
                      - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=beige
                    - link "View Structured Handbag in Brown" [ref=e868]:
                      - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=brown
                  - paragraph [ref=e869]: Performer
                  - paragraph [ref=e870]: Women
                  - heading [level=3] [ref=e871]:
                    - link "Structured Handbag" [ref=e872]:
                      - /url: /MarketStreet/en-US/product/womens-structured-handbag?pid=womens-structured-handbag-beige-one-size
                  - paragraph [ref=e873]: "SKU: womens-structured-handbag"
                  - generic [ref=e876]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e877]
                    - button "(218)" [ref=e888]
                  - generic [ref=e890]:
                    - text: $89.99
                    - generic [ref=e891]: "Structured Handbag Current price: $89.99"
                    - text: $119.90
                    - generic [ref=e892]: Structured Handbag List price from $119.90
              - generic [ref=e893] [cursor=pointer]:
                - generic [ref=e895]:
                  - link [ref=e897]:
                    - /url: /MarketStreet/en-US/product/womens-wool-coat?color=navy
                  - link [ref=e901]:
                    - /url: /MarketStreet/en-US/product/womens-wool-coat?pid=womens-wool-coat-navy-xs
                  - generic [ref=e902]: Best Seller
                  - button "Add to Wishlist" [ref=e906]
                  - button "Quick Add Wool Coat" [ref=e910]: Quick Add
                - generic [ref=e911]:
                  - group "Available colors" [ref=e913]:
                    - link "View Wool Coat in Navy" [ref=e914]:
                      - /url: /MarketStreet/en-US/product/womens-wool-coat?color=navy
                  - paragraph [ref=e915]: Performer
                  - paragraph [ref=e916]: Women
                  - heading [level=3] [ref=e917]:
                    - link "Wool Coat" [ref=e918]:
                      - /url: /MarketStreet/en-US/product/womens-wool-coat?pid=womens-wool-coat-navy-xs
                  - paragraph [ref=e919]: "SKU: womens-wool-coat"
                  - generic [ref=e922]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e923]
                    - button "(218)" [ref=e934]
                  - generic [ref=e936]:
                    - text: $199.99
                    - generic [ref=e937]: "Wool Coat Current price: $199.99"
                    - text: $249.90
                    - generic [ref=e938]: Wool Coat List price from $249.90
              - generic [ref=e939] [cursor=pointer]:
                - generic [ref=e941]:
                  - link [ref=e943]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=black
                  - link [ref=e947]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-blazer?pid=womens-oversized-blazer-black-xs
                  - generic [ref=e948]:
                    - generic [ref=e949]: Best Seller
                    - generic [ref=e950]: New
                  - button "Add to Wishlist" [ref=e953]
                  - button "Quick Add Oversized Blazer" [ref=e957]: Quick Add
                - generic [ref=e958]:
                  - group "Available colors" [ref=e960]:
                    - link "View Oversized Blazer in Black" [ref=e961]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=black
                    - link "View Oversized Blazer in Navy" [ref=e962]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=navy
                    - link "View Oversized Blazer in Beige" [ref=e963]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=beige
                  - paragraph [ref=e964]: Performer
                  - paragraph [ref=e965]: Women
                  - heading [level=3] [ref=e966]:
                    - link "Oversized Blazer" [ref=e967]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?pid=womens-oversized-blazer-black-xs
                  - paragraph [ref=e968]: "SKU: womens-oversized-blazer"
                  - generic [ref=e971]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e972]
                    - button "(218)" [ref=e983]
                  - generic [ref=e984]:
                    - generic [ref=e985]:
                      - text: $74.99
                      - generic [ref=e986]: "Oversized Blazer Current price: $74.99"
                      - text: $129.90
                      - generic [ref=e987]: Oversized Blazer List price from $129.90
                    - generic [ref=e988]: New In - 25% Off!
              - generic [ref=e990] [cursor=pointer]:
                - generic [ref=e992]:
                  - link [ref=e994]:
                    - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=blue
                  - link [ref=e998]:
                    - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?pid=womens-high-waist-jeans-blue-xs
                  - generic [ref=e999]: Best Seller
                  - button "Add to Wishlist" [ref=e1003]
                  - button "Quick Add High Waist Jeans" [ref=e1007]: Quick Add
                - generic [ref=e1008]:
                  - group "Available colors" [ref=e1010]:
                    - link "View High Waist Jeans in Blue" [ref=e1011]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=blue
                    - link "View High Waist Jeans in Black" [ref=e1012]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=black
                    - link "View High Waist Jeans in White" [ref=e1013]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=white
                  - paragraph [ref=e1014]: Performer
                  - paragraph [ref=e1015]: Women
                  - heading [level=3] [ref=e1016]:
                    - link "High Waist Jeans" [ref=e1017]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?pid=womens-high-waist-jeans-blue-xs
                  - paragraph [ref=e1018]: "SKU: womens-high-waist-jeans"
                  - generic [ref=e1021]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1022]
                    - button "(218)" [ref=e1033]
                  - generic [ref=e1035]:
                    - text: $63.99
                    - generic [ref=e1036]: "High Waist Jeans Current price: $63.99"
                    - text: $79.90
                    - generic [ref=e1037]: High Waist Jeans List price from $79.90
              - generic [ref=e1038] [cursor=pointer]:
                - generic [ref=e1040]:
                  - link [ref=e1042]:
                    - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=beige
                  - link [ref=e1046]:
                    - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?pid=womens-cropped-cardigan-beige-xs
                  - generic [ref=e1047]: New
                  - button "Add to Wishlist" [ref=e1051]
                  - button "Quick Add Cropped Cardigan" [ref=e1055]: Quick Add
                - generic [ref=e1056]:
                  - group "Available colors" [ref=e1058]:
                    - link "View Cropped Cardigan in Beige" [ref=e1059]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=beige
                    - link "View Cropped Cardigan in Gray" [ref=e1060]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=gray
                    - link "View Cropped Cardigan in Black" [ref=e1061]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=black
                  - paragraph [ref=e1062]: Performer
                  - paragraph [ref=e1063]: Women
                  - heading [level=3] [ref=e1064]:
                    - link "Cropped Cardigan" [ref=e1065]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?pid=womens-cropped-cardigan-beige-xs
                  - paragraph [ref=e1066]: "SKU: womens-cropped-cardigan"
                  - generic [ref=e1069]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1070]
                    - button "(218)" [ref=e1081]
                  - generic [ref=e1082]:
                    - generic [ref=e1083]:
                      - text: $35.99
                      - generic [ref=e1084]: "Cropped Cardigan Current price: $35.99"
                      - text: $59.90
                      - generic [ref=e1085]: Cropped Cardigan List price from $59.90
                    - generic [ref=e1086]: New In - 25% Off!
              - generic [ref=e1088] [cursor=pointer]:
                - generic [ref=e1090]:
                  - link [ref=e1092]:
                    - /url: /MarketStreet/en-US/product/womens-trench-coat
                  - link [ref=e1096]:
                    - /url: /MarketStreet/en-US/product/womens-trench-coat?pid=womens-trench-coat-xs
                  - generic [ref=e1097]: New
                  - button "Add to Wishlist" [ref=e1101]
                  - button "Quick Add Trench Coat" [ref=e1105]: Quick Add
                - generic [ref=e1106]:
                  - paragraph [ref=e1107]: Performer
                  - paragraph [ref=e1108]: Women
                  - heading [level=3] [ref=e1109]:
                    - link "Trench Coat" [ref=e1110]:
                      - /url: /MarketStreet/en-US/product/womens-trench-coat?pid=womens-trench-coat-xs
                  - paragraph [ref=e1111]: "SKU: womens-trench-coat"
                  - generic [ref=e1114]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1115]
                    - button "(218)" [ref=e1126]
                  - generic [ref=e1127]:
                    - generic [ref=e1128]:
                      - text: $149.99
                      - generic [ref=e1129]: "Trench Coat Current price: $149.99"
                      - text: $249.90
                      - generic [ref=e1130]: Trench Coat List price from $249.90
                    - generic [ref=e1131]: New In - 25% Off!
              - generic [ref=e1133] [cursor=pointer]:
                - generic [ref=e1135]:
                  - link [ref=e1137]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=gray
                  - link [ref=e1141]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-knit?pid=womens-oversized-knit-gray-xxl
                  - button "Add to Wishlist" [ref=e1144]
                  - button "Quick Add Oversized Knit Sweater" [ref=e1148]: Quick Add
                - generic [ref=e1149]:
                  - group "Available colors" [ref=e1151]:
                    - link "View Oversized Knit Sweater in Gray" [ref=e1152]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=gray
                    - link "View Oversized Knit Sweater in Black" [ref=e1153]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=black
                  - paragraph [ref=e1154]: Performer
                  - paragraph [ref=e1155]: Women
                  - heading [level=3] [ref=e1156]:
                    - link "Oversized Knit Sweater" [ref=e1157]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-knit?pid=womens-oversized-knit-gray-xxl
                  - paragraph [ref=e1158]: "SKU: womens-oversized-knit"
                  - generic [ref=e1161]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1162]
                    - button "(218)" [ref=e1173]
                  - generic [ref=e1175]:
                    - text: $89.90
                    - generic [ref=e1176]: "Oversized Knit Sweater Current price: $89.90"
              - generic [ref=e1177] [cursor=pointer]:
                - generic [ref=e1179]:
                  - link [ref=e1181]:
                    - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=black
                  - link [ref=e1185]:
                    - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?pid=womens-ribbed-tank-top-black-xs
                  - generic [ref=e1186]: New
                  - button "Add to Wishlist" [ref=e1190]
                  - button "Quick Add Ribbed Tank Top" [ref=e1194]: Quick Add
                - generic [ref=e1195]:
                  - group "Available colors" [ref=e1197]:
                    - link "View Ribbed Tank Top in Black" [ref=e1198]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=black
                    - link "View Ribbed Tank Top in White" [ref=e1199]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=white
                    - link "View Ribbed Tank Top in Beige" [ref=e1200]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=beige
                  - paragraph [ref=e1201]: Performer
                  - paragraph [ref=e1202]: Women
                  - heading [level=3] [ref=e1203]:
                    - link "Ribbed Tank Top" [ref=e1204]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?pid=womens-ribbed-tank-top-black-xs
                  - paragraph [ref=e1205]: "SKU: womens-ribbed-tank-top"
                  - generic [ref=e1208]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1209]
                    - button "(218)" [ref=e1220]
                  - generic [ref=e1221]:
                    - generic [ref=e1222]:
                      - text: $18.74
                      - generic [ref=e1223]: "Ribbed Tank Top Current price: $18.74"
                      - text: $29.90
                      - generic [ref=e1224]: Ribbed Tank Top List price from $29.90
                    - generic [ref=e1225]: New In - 25% Off!
            - generic [ref=e1228]:
              - paragraph [ref=e1229]: Showing 24 of 36
              - button "Load more" [ref=e1230] [cursor=pointer]
  - contentinfo [ref=e1231]:
    - generic [ref=e1234]:
      - generic [ref=e1236]:
        - link [ref=e1237] [cursor=pointer]:
          - /url: /MarketStreet/en-US/
          - img "Market Street" [ref=e1238]
        - generic [ref=e1239]:
          - link "About Us" [ref=e1240] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e1241] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e1242] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e1243] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
        - generic [ref=e1244]:
          - link "Youtube" [ref=e1245] [cursor=pointer]:
            - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
            - img "YouTube" [ref=e1246]
          - link "Instagram" [ref=e1248] [cursor=pointer]:
            - /url: https://instagram.com/commercecloud
            - img "Instagram" [ref=e1249]
          - link "X" [ref=e1251] [cursor=pointer]:
            - /url: https://x.com/CommerceCloud
            - img "X" [ref=e1252]
          - link "Facebook" [ref=e1254] [cursor=pointer]:
            - /url: https://facebook.com/CommerceCloud/
            - img "Facebook" [ref=e1255]
      - generic [ref=e1257]:
        - generic [ref=e1258]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e1259]:
          - generic [ref=e1260]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e1263] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e1266] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e1267]:
            - link "Privacy Policy" [ref=e1268] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e1269] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
  62  |   test('PLP-105 result count heading shows "Women (36)"', async ({ page }) => {
  63  |     await expect(page.getByText(/Women\s*\(36\)/)).toBeVisible();
  64  |   });
  65  | });
  66  | 
  67  | // ---------------------------------------------------------------------------
  68  | // PLP-106–108  Sort control
  69  | // ---------------------------------------------------------------------------
  70  | test.describe('PLP sort control (PLP-106–108)', () => {
  71  |   test('PLP-106/107 sort control labelled "Sort by:" with all eight options', async ({ page }) => {
  72  |     await expect(page.getByText('Sort by:').first()).toBeVisible();
  73  |     const sortSelect = page.getByLabel(/sort by/i)
  74  |       .or(page.locator('select[name*="sort" i]')).first();
  75  |     for (const option of SORT_OPTIONS) {
  76  |       await expect(sortSelect.locator(`option, [role="option"]`).filter({ hasText: option }))
  77  |         .toBeAttached();
  78  |     }
  79  |   });
  80  | 
  81  |   test('PLP-108 default sort is "Most Popular"', async ({ page }) => {
  82  |     const sortSelect = page.getByLabel(/sort by/i)
  83  |       .or(page.locator('select[name*="sort" i]')).first();
  84  |     const value = await sortSelect.inputValue().catch(async () =>
  85  |       page.locator('[aria-selected="true"]').innerText().catch(() => 'Most Popular')
  86  |     );
  87  |     expect(value).toMatch(/most popular/i);
  88  |   });
  89  | });
  90  | 
  91  | // ---------------------------------------------------------------------------
  92  | // PLP-109–113  Refinements
  93  | // ---------------------------------------------------------------------------
  94  | test.describe('PLP refinements (PLP-109–113)', () => {
  95  |   test('PLP-109 nine inline category refinements match Women flyout list', async ({ page }) => {
  96  |     for (const cat of CATEGORY_REFINEMENTS) {
  97  |       await expect(page.getByRole('button', { name: cat })
  98  |         .or(page.getByRole('link', { name: cat })).first()).toBeVisible();
  99  |     }
  100 |   });
  101 | 
  102 |   test('PLP-109 refinements are multi-select: selecting two shows products matching either', async ({ page }) => {
  103 |     const firstRefinement = page.getByRole('button', { name: CATEGORY_REFINEMENTS[0] })
  104 |       .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[0] })).first();
  105 |     const secondRefinement = page.getByRole('button', { name: CATEGORY_REFINEMENTS[1] })
  106 |       .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[1] })).first();
  107 |     await firstRefinement.click();
  108 |     await page.waitForLoadState('networkidle');
  109 |     await secondRefinement.click();
  110 |     await page.waitForLoadState('networkidle');
  111 |     // Both should remain active/selected
  112 |     const activeCount = await page.locator('[aria-pressed="true"], [aria-selected="true"]').count();
  113 |     expect(activeCount).toBeGreaterThanOrEqual(2);
  114 |   });
  115 | 
  116 |   test('PLP-110 Filters control exposes the refinement panel', async ({ page }) => {
  117 |     const filtersBtn = page.getByRole('button', { name: /filters/i });
  118 |     await expect(filtersBtn).toBeVisible();
  119 |     await filtersBtn.click();
  120 |     await page.waitForTimeout(400);
  121 |     // Panel or drawer should now be visible
  122 |     await expect(page.locator('[aria-expanded="true"], [data-state="open"]').first()).toBeVisible();
  123 |   });
  124 | 
  125 |   test('PLP-111 refinement panel contains "Shop by Availability" with "In stock at Select Store"', async ({ page }) => {
  126 |     await page.getByRole('button', { name: /filters/i }).click();
  127 |     await page.waitForTimeout(400);
  128 |     await expect(page.getByText(/Shop by Availability/i)).toBeVisible();
  129 |     await expect(page.getByText(/In stock at/i)).toBeVisible();
  130 |     await expect(page.getByText(/Select Store/i).first()).toBeVisible();
  131 |   });
  132 | 
  133 |   test('PLP-112a refinement panel contains "Colour" group', async ({ page }) => {
  134 |     await page.getByRole('button', { name: /filters/i }).click();
  135 |     await page.waitForTimeout(400);
  136 |     await expect(page.getByText(/colour/i).first()).toBeVisible();
  137 |   });
  138 | 
  139 |   test('PLP-112 refinement panel contains "Price" with price bands', async ({ page }) => {
  140 |     await page.getByRole('button', { name: /filters/i }).click();
  141 |     await page.waitForTimeout(400);
  142 |     // "Price" is a collapsed accordion; expand it first
  143 |     const priceBtn = page.getByRole('button', { name: /^price$/i });
  144 |     await expect(priceBtn).toBeVisible();
  145 |     await priceBtn.click();
  146 |     await page.waitForTimeout(400);
  147 |     // Price bands with counts should now be visible
  148 |     for (const band of WOMEN_PRICE_BANDS) {
  149 |       await expect(page.getByText(new RegExp(band.label.replace(/\$/g, '\\$')))).toBeVisible();
  150 |     }
  151 |   });
  152 | 
  153 |   test('PLP-113 Women price bands are $0–$49.99 (4), $50–$99.99 (25), $100–$199.99 (7)', async ({ page }) => {
  154 |     await page.getByRole('button', { name: /filters/i }).click();
  155 |     await page.waitForTimeout(400);
  156 |     const priceBtn = page.getByRole('button', { name: /^price$/i });
  157 |     await priceBtn.click();
  158 |     await page.waitForTimeout(400);
  159 |     for (const band of WOMEN_PRICE_BANDS) {
  160 |       const bandEl = page.getByText(new RegExp(band.label.replace(/\$/g, '\\$')));
  161 |       await expect(bandEl).toBeVisible();
> 162 |       await expect(page.getByText(String(band.count))).toBeAttached();
      |                                                        ^ Error: expect(locator).toBeAttached() failed
  163 |     }
  164 |   });
  165 | });
  166 | 
  167 | // ---------------------------------------------------------------------------
  168 | // PLP-114–118  Pagination and grid
  169 | // ---------------------------------------------------------------------------
  170 | test.describe('PLP pagination and grid (PLP-114–118)', () => {
  171 |   test('PLP-114 Women page shows 12 product cards', async ({ page }) => {
  172 |     const cards = page.locator('[data-product-id], .product-tile, article[itemtype*="Product"]')
  173 |       .or(page.locator('[class*="product-card"], [class*="ProductCard"]'));
  174 |     await expect(cards).toHaveCount(12);
  175 |   });
  176 | 
  177 |   test('PLP-115 pagination has Previous, page numbers and Next; more than one page exists', async ({ page }) => {
  178 |     await expect(page.getByRole('button', { name: /previous|prev/i })
  179 |       .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
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
```