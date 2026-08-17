# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/home.spec.ts >> Mobile nav menu (M-GLB-121–131) >> M-GLB-131 subcategories are indented beneath their parent
- Location: tests/mobile/home.spec.ts:252:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('nav[aria-label*="Mobile navigation" i]').getByRole('button', { name: /expand women/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /MarketStreet/en-US/
          - img "Home" [ref=e7]
        - generic [ref=e8]:
          - button "Find a Store" [ref=e9] [cursor=pointer]
          - link "Sign In" [ref=e10] [cursor=pointer]:
            - /url: /MarketStreet/en-US/login
          - link "Wishlist" [ref=e11] [cursor=pointer]:
            - /url: /MarketStreet/en-US/wishlist
          - 'button "My cart, number of items: 0" [ref=e12] [cursor=pointer]'
          - button "Open menu" [ref=e14] [cursor=pointer]
      - generic [ref=e18]:
        - generic [ref=e19]: Search
        - combobox "Search" [ref=e20]
  - main [ref=e21]:
    - generic [ref=e22]:
      - 'heading "Storefront Next: Market Street" [level=1] [ref=e23]'
      - generic [ref=e24]:
        - region "Hero carousel with 4 slides" [ref=e25]:
          - region [ref=e26]:
            - list [ref=e28]:
              - listitem [ref=e29]:
                - generic [ref=e30]:
                  - img "Women's Slacks Jackets and Purses" [ref=e32]
                  - generic [ref=e36]:
                    - heading "The New Season" [level=2] [ref=e37]
                    - paragraph [ref=e38]: A new collection shaped by contrast, proportion, and modern attitude. Introducing key pieces for the season ahead.
                    - link "Discover the Collection" [ref=e40] [cursor=pointer]:
                      - /url: /MarketStreet/en-US/category/root
              - listitem [ref=e41]:
                - generic [ref=e48]:
                  - heading [level=2] [ref=e49]: The Modern Wardrobe
                  - paragraph [ref=e50]: Elevated silhouettes, refined textures, and a bold approach to everyday dressing. Designed to move with you.
                  - link [ref=e52] [cursor=pointer]:
                    - /url: /MarketStreet/en-US/category/root
                    - text: Shop the Look
              - listitem [ref=e53]:
                - generic [ref=e60]:
                  - heading [level=2] [ref=e61]: After Hours
                  - paragraph [ref=e62]: Statement pieces and refined layers designed for nights out, late moments, and everything in between.
                  - link [ref=e64] [cursor=pointer]:
                    - /url: /MarketStreet/en-US/category/root
                    - text: Explore the Collection
              - listitem [ref=e65]:
                - generic [ref=e72]:
                  - heading [level=2] [ref=e73]: New Perspectives
                  - paragraph [ref=e74]: A curated drop of standout pieces that redefine contemporary fashion. Confident. Expressive. Uncompromising.
                  - link [ref=e76] [cursor=pointer]:
                    - /url: /MarketStreet/en-US/category/root
                    - text: Shop Now
          - generic [ref=e78]:
            - tablist "Slide navigation" [ref=e79]:
              - tab "Go to slide 1 of 4" [selected] [ref=e80] [cursor=pointer]
              - tab "Go to slide 2 of 4" [ref=e82] [cursor=pointer]
              - tab "Go to slide 3 of 4" [ref=e84] [cursor=pointer]
              - tab "Go to slide 4 of 4" [ref=e86] [cursor=pointer]
            - generic [ref=e88]:
              - button "Pause carousel" [ref=e89] [cursor=pointer]
              - button "Previous slide (1 of 4)" [ref=e93] [cursor=pointer]
              - button "Next slide (1 of 4)" [ref=e96] [cursor=pointer]
          - generic [ref=e99]: "Slide 1 of 4: The New Season"
        - generic [ref=e100]:
          - generic [ref=e101]:
            - heading "Featured Products" [level=2] [ref=e102]
            - link "Shop all" [ref=e104] [cursor=pointer]:
              - /url: /MarketStreet/en-US/category/root
          - region "Featured Products carousel" [ref=e105]:
            - list [ref=e107]:
              - listitem [ref=e108]:
                - generic [ref=e110] [cursor=pointer]:
                  - generic [ref=e112]:
                    - link [ref=e114]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                    - link [ref=e118]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                    - button "Add to Wishlist" [ref=e121]
                    - button "Quick Add Leather Crossbody Bag" [ref=e125]: Quick Add
                  - generic [ref=e126]:
                    - paragraph [ref=e127]: Performer
                    - heading [level=3] [ref=e128]:
                      - link "Leather Crossbody Bag" [ref=e129]:
                        - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                    - paragraph [ref=e130]: "SKU: standard-prd-womens-leather-crossbody-bag"
                    - generic [ref=e133]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e134]
                      - button "(218)" [ref=e145]
                    - generic [ref=e147]:
                      - text: $109.99
                      - generic [ref=e148]: "Leather Crossbody Bag Current price: $109.99"
                      - text: $139.90
                      - generic [ref=e149]: "Leather Crossbody Bag List price: $139.90"
              - listitem [ref=e150]:
                - generic [ref=e152] [cursor=pointer]:
                  - generic [ref=e154]:
                    - link [ref=e156]:
                      - /url: /MarketStreet/en-US/product/girls-puffer-vest
                    - link [ref=e160]:
                      - /url: /MarketStreet/en-US/product/girls-puffer-vest?pid=girls-puffer-vest-2t
                    - button "Add to Wishlist" [ref=e163]
                    - button "Quick Add Girls Puffer Vest" [ref=e167]: Quick Add
                  - generic [ref=e168]:
                    - paragraph [ref=e169]: Performer
                    - heading [level=3] [ref=e170]:
                      - link "Girls Puffer Vest" [ref=e171]:
                        - /url: /MarketStreet/en-US/product/girls-puffer-vest?pid=girls-puffer-vest-2t
                    - paragraph [ref=e172]: "SKU: girls-puffer-vest"
                    - generic [ref=e175]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e176]
                      - button "(218)" [ref=e187]
                    - generic [ref=e188]:
                      - generic [ref=e189]:
                        - text: $33.74
                        - generic [ref=e190]: "Girls Puffer Vest Current price: $33.74"
                        - text: $54.90
                        - generic [ref=e191]: Girls Puffer Vest List price from $54.90
                      - generic [ref=e192]: New In - 25% Off!
              - listitem [ref=e194]:
                - generic [ref=e196] [cursor=pointer]:
                  - generic [ref=e198]:
                    - link [ref=e200]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                    - link [ref=e202]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                    - button "Add to Wishlist" [ref=e205]
                    - button "Quick Add Knit Midi Skirt" [ref=e209]: Quick Add
                  - generic [ref=e210]:
                    - group "Available colors" [ref=e212]:
                      - link "View Knit Midi Skirt in Beige" [ref=e213]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                      - link "View Knit Midi Skirt in Black" [ref=e214]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
                      - link "View Knit Midi Skirt in Navy" [ref=e215]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
                    - paragraph [ref=e216]: Performer
                    - heading [level=3] [ref=e217]:
                      - link "Knit Midi Skirt" [ref=e218]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                    - paragraph [ref=e219]: "SKU: womens-knit-midi-skirt"
                    - generic [ref=e222]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e223]
                      - button "(218)" [ref=e234]
                    - generic [ref=e236]:
                      - text: $59.99
                      - generic [ref=e237]: "Knit Midi Skirt Current price: $59.99"
                      - text: $69.90
                      - generic [ref=e238]: Knit Midi Skirt List price from $69.90
              - listitem [ref=e239]:
                - generic [ref=e241] [cursor=pointer]:
                  - generic [ref=e243]:
                    - link [ref=e245]:
                      - /url: /MarketStreet/en-US/product/kids-rain-boots
                    - link [ref=e247]:
                      - /url: /MarketStreet/en-US/product/kids-rain-boots?pid=kids-rain-boots-8
                    - button "Add to Wishlist" [ref=e250]
                    - button "Quick Add Kids Rain Boots" [ref=e254]: Quick Add
                  - generic [ref=e255]:
                    - paragraph [ref=e256]: Performer
                    - heading [level=3] [ref=e257]:
                      - link "Kids Rain Boots" [ref=e258]:
                        - /url: /MarketStreet/en-US/product/kids-rain-boots?pid=kids-rain-boots-8
                    - paragraph [ref=e259]: "SKU: kids-rain-boots"
                    - generic [ref=e262]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e263]
                      - button "(218)" [ref=e274]
                    - generic [ref=e275]:
                      - generic [ref=e276]:
                        - text: $29.99
                        - generic [ref=e277]: "Kids Rain Boots Current price: $29.99"
                        - text: $49.90
                        - generic [ref=e278]: Kids Rain Boots List price from $49.90
                      - generic [ref=e279]: $10 Off All Kids' Shoes
              - listitem [ref=e281]:
                - generic [ref=e283] [cursor=pointer]:
                  - generic [ref=e285]:
                    - link [ref=e287]:
                      - /url: /MarketStreet/en-US/product/mens-athletic-joggers
                    - link [ref=e289]:
                      - /url: /MarketStreet/en-US/product/mens-athletic-joggers?pid=mens-athletic-joggers-xs
                    - button "Add to Wishlist" [ref=e292]
                    - button "Quick Add Athletic Joggers" [ref=e296]: Quick Add
                  - generic [ref=e297]:
                    - paragraph [ref=e298]: Performer
                    - heading [level=3] [ref=e299]:
                      - link "Athletic Joggers" [ref=e300]:
                        - /url: /MarketStreet/en-US/product/mens-athletic-joggers?pid=mens-athletic-joggers-xs
                    - paragraph [ref=e301]: "SKU: mens-athletic-joggers"
                    - generic [ref=e304]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e305]
                      - button "(218)" [ref=e316]
                    - generic [ref=e317]:
                      - generic [ref=e318]:
                        - text: $37.49
                        - generic [ref=e319]: "Athletic Joggers Current price: $37.49"
                        - text: $69.90
                        - generic [ref=e320]: Athletic Joggers List price from $69.90
                      - generic [ref=e321]: New In - 25% Off!
              - listitem [ref=e323]:
                - generic [ref=e325] [cursor=pointer]:
                  - generic [ref=e327]:
                    - link [ref=e329]:
                      - /url: /MarketStreet/en-US/product/mens-utility-overshirt
                    - link [ref=e331]:
                      - /url: /MarketStreet/en-US/product/mens-utility-overshirt?pid=mens-utility-overshirt-xs
                    - button "Add to Wishlist" [ref=e334]
                    - button "Quick Add Utility Overshirt" [ref=e338]: Quick Add
                  - generic [ref=e339]:
                    - paragraph [ref=e340]: Performer
                    - heading [level=3] [ref=e341]:
                      - link "Utility Overshirt" [ref=e342]:
                        - /url: /MarketStreet/en-US/product/mens-utility-overshirt?pid=mens-utility-overshirt-xs
                    - paragraph [ref=e343]: "SKU: mens-utility-overshirt"
                    - generic [ref=e346]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e347]
                      - button "(218)" [ref=e358]
                    - generic [ref=e359]:
                      - generic [ref=e360]:
                        - text: $44.99
                        - generic [ref=e361]: "Utility Overshirt Current price: $44.99"
                        - text: $79.90
                        - generic [ref=e362]: Utility Overshirt List price from $79.90
                      - generic [ref=e363]: New In - 25% Off!
              - listitem [ref=e365]:
                - generic [ref=e367] [cursor=pointer]:
                  - generic [ref=e369]:
                    - link [ref=e371]:
                      - /url: /MarketStreet/en-US/product/mens-waffle-long-sleeve
                    - link [ref=e373]:
                      - /url: /MarketStreet/en-US/product/mens-waffle-long-sleeve?pid=mens-waffle-long-sleeve-xs
                    - button "Add to Wishlist" [ref=e376]
                    - button "Quick Add Waffle Long Sleeve" [ref=e380]: Quick Add
                  - generic [ref=e381]:
                    - paragraph [ref=e382]: Performer
                    - heading [level=3] [ref=e383]:
                      - link "Waffle Long Sleeve" [ref=e384]:
                        - /url: /MarketStreet/en-US/product/mens-waffle-long-sleeve?pid=mens-waffle-long-sleeve-xs
                    - paragraph [ref=e385]: "SKU: mens-waffle-long-sleeve"
                    - generic [ref=e388]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e389]
                      - button "(218)" [ref=e400]
                    - generic [ref=e401]:
                      - generic [ref=e402]:
                        - text: $33.74
                        - generic [ref=e403]: "Waffle Long Sleeve Current price: $33.74"
                        - text: $59.90
                        - generic [ref=e404]: Waffle Long Sleeve List price from $59.90
                      - generic [ref=e405]: New In - 25% Off!
              - listitem [ref=e407]:
                - generic [ref=e409] [cursor=pointer]:
                  - generic [ref=e411]:
                    - link [ref=e413]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt
                    - link [ref=e415]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                    - button "Add to Wishlist" [ref=e418]
                    - button "Quick Add Denim Midi Skirt" [ref=e422]: Quick Add
                  - generic [ref=e423]:
                    - paragraph [ref=e424]: Performer
                    - heading [level=3] [ref=e425]:
                      - link "Denim Midi Skirt" [ref=e426]:
                        - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                    - paragraph [ref=e427]: "SKU: womens-denim-midi-skirt"
                    - generic [ref=e430]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e431]
                      - button "(218)" [ref=e442]
                    - generic [ref=e443]:
                      - generic [ref=e444]:
                        - text: $44.99
                        - generic [ref=e445]: "Denim Midi Skirt Current price: $44.99"
                        - text: $69.90
                        - generic [ref=e446]: Denim Midi Skirt List price from $69.90
                      - generic [ref=e447]: New In - 25% Off!
              - listitem [ref=e449]:
                - generic [ref=e451] [cursor=pointer]:
                  - generic [ref=e453]:
                    - link [ref=e455]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer
                    - link [ref=e457]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                    - generic [ref=e458]:
                      - generic [ref=e459]: Best Seller
                      - generic [ref=e460]: New
                    - button "Add to Wishlist" [ref=e463]
                    - button "Quick Add Structured Blazer" [ref=e467]: Quick Add
                  - generic [ref=e468]:
                    - paragraph [ref=e469]: Performer
                    - heading [level=3] [ref=e470]:
                      - link "Structured Blazer" [ref=e471]:
                        - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                    - paragraph [ref=e472]: "SKU: womens-structured-blazer"
                    - generic [ref=e475]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e476]
                      - button "(218)" [ref=e487]
                    - generic [ref=e488]:
                      - generic [ref=e489]:
                        - text: $74.99
                        - generic [ref=e490]: "Structured Blazer Current price: $74.99"
                        - text: $129.90
                        - generic [ref=e491]: Structured Blazer List price from $129.90
                      - generic [ref=e492]: New In - 25% Off!
              - listitem [ref=e494]:
                - generic [ref=e496] [cursor=pointer]:
                  - generic [ref=e498]:
                    - link [ref=e500]:
                      - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=white
                    - link [ref=e502]:
                      - /url: /MarketStreet/en-US/product/mens-oxford-shirt?pid=mens-oxford-shirt-white-xs
                    - generic [ref=e503]: Best Seller
                    - button "Add to Wishlist" [ref=e507]
                    - button "Quick Add Oxford Shirt" [ref=e511]: Quick Add
                  - generic [ref=e512]:
                    - group "Available colors" [ref=e514]:
                      - link "View Oxford Shirt in White" [ref=e515]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=white
                      - link "View Oxford Shirt in Blue" [ref=e516]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=blue
                      - link "View Oxford Shirt in Pink" [ref=e517]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=pink
                    - paragraph [ref=e518]: Performer
                    - heading [level=3] [ref=e519]:
                      - link "Oxford Shirt" [ref=e520]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?pid=mens-oxford-shirt-white-xs
                    - paragraph [ref=e521]: "SKU: mens-oxford-shirt"
                    - generic [ref=e524]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e525]
                      - button "(218)" [ref=e536]
                    - generic [ref=e537]:
                      - generic [ref=e538]:
                        - text: $69.90
                        - generic [ref=e539]: "Oxford Shirt Current price: $69.90"
                        - text: $79.99
                        - generic [ref=e540]: Oxford Shirt List price from $79.99
                      - generic [ref=e541]: 3 for $99
              - listitem [ref=e543]:
                - generic [ref=e545] [cursor=pointer]:
                  - generic [ref=e547]:
                    - link [ref=e549]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                    - link [ref=e551]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                    - button "Add to Wishlist" [ref=e554]
                    - button "Quick Add Wool Blend Coat" [ref=e558]: Quick Add
                  - generic [ref=e559]:
                    - group "Available colors" [ref=e561]:
                      - link "View Wool Blend Coat in Beige" [ref=e562]:
                        - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                      - link "View Wool Blend Coat in Black" [ref=e563]:
                        - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=black
                    - paragraph [ref=e564]: Performer
                    - heading [level=3] [ref=e565]:
                      - link "Wool Blend Coat" [ref=e566]:
                        - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                    - paragraph [ref=e567]: "SKU: womens-wool-blend-coat"
                    - generic [ref=e570]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e571]
                      - button "(218)" [ref=e582]
                    - generic [ref=e584]:
                      - text: $144.99
                      - generic [ref=e585]: "Wool Blend Coat Current price: $144.99"
                      - text: $179.90
                      - generic [ref=e586]: Wool Blend Coat List price from $179.90
              - listitem [ref=e587]:
                - generic [ref=e589] [cursor=pointer]:
                  - generic [ref=e591]:
                    - link [ref=e593]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                    - link [ref=e595]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                    - generic [ref=e596]: New
                    - button "Add to Wishlist" [ref=e600]
                    - button "Quick Add Wide Leg Trousers" [ref=e604]: Quick Add
                  - generic [ref=e605]:
                    - group "Available colors" [ref=e607]:
                      - link "View Wide Leg Trousers in Black" [ref=e608]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                      - link "View Wide Leg Trousers in Navy" [ref=e609]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=navy
                      - link "View Wide Leg Trousers in Cream" [ref=e610]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=cream
                    - paragraph [ref=e611]: Performer
                    - heading [level=3] [ref=e612]:
                      - link "Wide Leg Trousers" [ref=e613]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                    - paragraph [ref=e614]: "SKU: womens-wide-leg-trousers"
                    - generic [ref=e617]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e618]
                      - button "(218)" [ref=e629]
                    - generic [ref=e630]:
                      - generic [ref=e631]:
                        - text: $53.99
                        - generic [ref=e632]: "Wide Leg Trousers Current price: $53.99"
                        - text: $89.90
                        - generic [ref=e633]: Wide Leg Trousers List price from $89.90
                      - generic [ref=e634]: New In - 25% Off!
            - button "Previous slide" [disabled]
            - button "Next slide" [ref=e636] [cursor=pointer]
      - generic [ref=e639]:
        - generic [ref=e640]:
          - heading "Style for Real Life" [level=2] [ref=e641]
          - paragraph [ref=e642]: At Market Street, we believe fashion should be effortless, authentic, and accessible. Our collections are designed for the modern individual who values quality, versatility, and timeless style.
        - region "Style for Real Life" [ref=e643]:
          - list [ref=e645]:
            - listitem [ref=e646]:
              - link "Women Women Shop Now" [ref=e648] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/women
                - generic [ref=e649]:
                  - img "Women" [ref=e653]
                  - generic [ref=e655]:
                    - heading "Women" [level=3] [ref=e657]
                    - generic: Shop Now
            - listitem [ref=e659]:
              - link "Men Men Shop Now" [ref=e661] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/men
                - generic [ref=e662]:
                  - img "Men" [ref=e666]
                  - generic [ref=e668]:
                    - heading "Men" [level=3] [ref=e670]
                    - generic: Shop Now
            - listitem [ref=e672]:
              - link "Kids Kids Shop Now" [ref=e674] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/kids
                - generic [ref=e675]:
                  - img "Kids" [ref=e679]
                  - generic [ref=e681]:
                    - heading "Kids" [level=3] [ref=e683]
                    - generic: Shop Now
            - listitem [ref=e685]:
              - link "New Arrivals New Arrivals Shop Now" [ref=e687] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/new-arrivals
                - generic [ref=e688]:
                  - img "New Arrivals" [ref=e692]
                  - generic [ref=e694]:
                    - heading "New Arrivals" [level=3] [ref=e696]
                    - generic: Shop Now
          - button "Previous slide" [disabled]
          - button "Next slide" [ref=e698] [cursor=pointer]
      - generic [ref=e701]:
        - generic [ref=e702]:
          - generic [ref=e705]:
            - img "Women's Collection" [ref=e706]
            - generic [ref=e709]:
              - generic [ref=e710]:
                - heading "Women" [level=3] [ref=e711]
                - paragraph [ref=e712]: Discover our curated collection of sophisticated footwear designed for the modern woman.
              - 'link "Explore collection: women''s" [ref=e713] [cursor=pointer]':
                - /url: /MarketStreet/en-US/category/womens
                - text: EXPLORE COLLECTION
          - generic [ref=e716]:
            - img "Men's Collection" [ref=e717]
            - generic [ref=e720]:
              - generic [ref=e721]:
                - heading "Men" [level=3] [ref=e722]
                - paragraph [ref=e723]: Timeless craftsmanship meets contemporary style in our men's footwear collection.
              - 'link "Explore collection: men''s" [ref=e724] [cursor=pointer]':
                - /url: /MarketStreet/en-US/category/mens
                - text: EXPLORE COLLECTION
        - generic [ref=e730]:
          - heading "Style for Real Life" [level=3] [ref=e731]
          - paragraph [ref=e732]: At Market Street, we believe fashion should be effortless, authentic, and accessible. Our collections are designed for the modern individual who values quality, versatility, and timeless style. Discover pieces that move with you, adapt to your life, and become the foundation of a wardrobe that works—every day, everywhere.
  - contentinfo [ref=e733]:
    - generic [ref=e736]:
      - heading "Join Our Community" [level=2] [ref=e737]
      - paragraph [ref=e738]: Be the first to discover new arrivals, exclusive offers, and style inspiration.
      - generic [ref=e740]:
        - generic [ref=e741]: Email address for newsletter subscription
        - generic [ref=e742]:
          - textbox "Email address for newsletter subscription" [ref=e743]:
            - /placeholder: Your email
          - button "Subscribe" [ref=e744] [cursor=pointer]
    - generic [ref=e747]:
      - generic [ref=e748]:
        - generic [ref=e749]:
          - link [ref=e750] [cursor=pointer]:
            - /url: /MarketStreet/en-US/
            - img "Market Street" [ref=e751]
          - generic [ref=e752]:
            - link "Youtube" [ref=e753] [cursor=pointer]:
              - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
              - img "YouTube" [ref=e754]
            - link "Instagram" [ref=e756] [cursor=pointer]:
              - /url: https://instagram.com/commercecloud
              - img "Instagram" [ref=e757]
            - link "X" [ref=e759] [cursor=pointer]:
              - /url: https://x.com/CommerceCloud
              - img "X" [ref=e760]
            - link "Facebook" [ref=e762] [cursor=pointer]:
              - /url: https://facebook.com/CommerceCloud/
              - img "Facebook" [ref=e763]
        - generic [ref=e765]:
          - link "About Us" [ref=e766] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e767] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e768] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e769] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
      - generic [ref=e770]:
        - generic [ref=e771]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e772]:
          - generic [ref=e773]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e776] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e779] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e780]:
            - link "Privacy Policy" [ref=e781] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e782] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
  154 |     const headerBox = await header.boundingBox();
  155 |     // Panel is nav[aria-label="Mobile navigation menu"] inside div.absolute.top-full
  156 |     const panel     = page.locator('nav[aria-label*="Mobile navigation" i]');
  157 |     const panelBox  = await panel.boundingBox();
  158 |     // Panel top must be at or below header bottom
  159 |     expect(panelBox!.y).toBeGreaterThanOrEqual(headerBox!.y + headerBox!.height - 2);
  160 |   });
  161 | 
  162 |   test('M-GLB-122 menu control changes to a close control while panel is open', async ({ page }) => {
  163 |     // Button changes to aria-label="Close menu"
  164 |     const closeBtn = page.locator('header').getByRole('button', { name: /close menu/i });
  165 |     await expect(closeBtn).toBeVisible();
  166 |   });
  167 | 
  168 |   test('M-GLB-123 four top-level items in order: Women, Men, Kids, New Arrivals', async ({ page }) => {
  169 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
  170 |     for (const label of ['Women', 'Men', 'Kids', 'New Arrivals']) {
  171 |       await expect(panel.getByText(label, { exact: true }).first()).toBeVisible();
  172 |     }
  173 |     const text      = await panel.innerText();
  174 |     const positions = ['Women', 'Men', 'Kids', 'New Arrivals'].map(l => text.indexOf(l));
  175 |     for (let i = 1; i < positions.length; i++) {
  176 |       expect(positions[i]).toBeGreaterThan(positions[i - 1]);
  177 |     }
  178 |   });
  179 | 
  180 |   test('M-GLB-124 expansion is accordion (in-place), not drill-down', async ({ page }) => {
  181 |     const panel   = page.locator('nav[aria-label*="Mobile navigation" i]');
  182 |     // Expand Women via aria-label button
  183 |     await panel.getByRole('button', { name: /expand women/i }).click();
  184 |     await page.waitForTimeout(400);
  185 |     // Panel must still show top-level items (not navigated away)
  186 |     await expect(panel.getByText('Men', { exact: true }).first()).toBeVisible();
  187 |   });
  188 | 
  189 |   test('M-GLB-125 Women, Men, Kids carry chevrons; New Arrivals does not', async ({ page }) => {
  190 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
  191 |     // Expand buttons: aria-label="Expand Women", "Expand Men", "Expand Kids"
  192 |     for (const label of ['Women', 'Men', 'Kids']) {
  193 |       await expect(panel.getByRole('button', { name: new RegExp('expand ' + label, 'i') })).toBeAttached();
  194 |     }
  195 |     // New Arrivals has no expand button
  196 |     await expect(panel.getByRole('button', { name: /expand new arrivals/i })).toHaveCount(0);
  197 |   });
  198 | 
  199 |   test('M-GLB-125 New Arrivals links directly to /category/new-arrivals', async ({ page }) => {
  200 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
  201 |     const link  = panel.getByRole('link', { name: 'New Arrivals' });
  202 |     expect(await link.getAttribute('href')).toContain('/category/new-arrivals');
  203 |   });
  204 | 
  205 |   test('M-GLB-126 label navigates to category; chevron expands without navigating', async ({ page }) => {
  206 |     // Use href-based selector to avoid accessible-name computation delay
  207 |     const panel     = page.locator('nav[aria-label*="Mobile navigation" i]');
  208 |     const womenLink = panel.locator('a[href*="/category/women"]').first();
  209 |     expect(await womenLink.getAttribute('href')).toContain('/category/women');
  210 |   });
  211 | 
  212 |   test('M-GLB-127 chevron rotates when section is expanded', async ({ page }) => {
  213 |     const panel     = page.locator('nav[aria-label*="Mobile navigation" i]');
  214 |     const expandBtn = panel.getByRole('button', { name: /expand women/i });
  215 |     await expect(expandBtn).toBeVisible();
  216 |     await expandBtn.click();
  217 |     await page.waitForTimeout(400);
  218 |     // Button aria-label changes to "Collapse Women" and SVG gets rotate-180
  219 |     const collapseBtn = panel.getByRole('button', { name: /collapse women/i });
  220 |     await expect(collapseBtn).toBeVisible();
  221 |     const svgClass = await collapseBtn.locator('svg').getAttribute('class');
  222 |     expect(svgClass).toContain('rotate-180');
  223 |   });
  224 | 
  225 |   test('M-GLB-128 Women expands to 9 subcategories matching spec', async ({ page }) => {
  226 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
  227 |     await panel.getByRole('button', { name: /expand women/i }).click();
  228 |     await page.waitForTimeout(400);
  229 |     for (const sub of WOMEN_SUBCATEGORIES) {
  230 |       await expect(panel.getByText(sub).first()).toBeVisible();
  231 |     }
  232 |   });
  233 | 
  234 |   test('M-GLB-129 Men expands to 9 subcategories matching spec', async ({ page }) => {
  235 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
  236 |     await panel.getByRole('button', { name: /expand men/i }).click();
  237 |     await page.waitForTimeout(400);
  238 |     for (const sub of MEN_SUBCATEGORIES) {
  239 |       await expect(panel.getByText(sub).first()).toBeVisible();
  240 |     }
  241 |   });
  242 | 
  243 |   test('M-GLB-130 Kids expands to 6 subcategories matching spec', async ({ page }) => {
  244 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
  245 |     await panel.getByRole('button', { name: /expand kids/i }).click();
  246 |     await page.waitForTimeout(400);
  247 |     for (const sub of KIDS_SUBCATEGORIES) {
  248 |       await expect(panel.getByText(sub).first()).toBeVisible();
  249 |     }
  250 |   });
  251 | 
  252 |   test('M-GLB-131 subcategories are indented beneath their parent', async ({ page }) => {
  253 |     const panel = page.locator('nav[aria-label*="Mobile navigation" i]');
> 254 |     await panel.getByRole('button', { name: /expand women/i }).click();
      |                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  255 |     await page.waitForTimeout(400);
  256 |     const parentBox = await panel.getByText('Women', { exact: true }).first().boundingBox();
  257 |     const subBox    = await panel.getByText('Accessories').first().boundingBox();
  258 |     // Subcategory links have pl-4 padding-left — their x is greater than parent
  259 |     expect(subBox!.x).toBeGreaterThan(parentBox!.x);
  260 |   });
  261 | });
  262 | 
  263 | // ---------------------------------------------------------------------------
  264 | // M-HOME-101–111  Hero carousel
  265 | // ---------------------------------------------------------------------------
  266 | test.describe('Mobile hero carousel (M-HOME-101–111)', () => {
  267 |   test.beforeEach(async ({ page }) => {
  268 |     await bypassConsent(page);
  269 |     await page.goto(HOME_PATH);
  270 |   });
  271 | 
  272 |   test('M-HOME-101 carousel region is labelled "Hero carousel with 4 slides" for AT', async ({ page }) => {
  273 |     const region = page.getByRole('region', { name: /hero carousel with 4 slides/i })
  274 |       .or(page.locator('[aria-label*="Hero carousel"]')).first();
  275 |     await expect(region).toBeAttached();
  276 |   });
  277 | 
  278 |   test('M-HOME-102/103/104/105 four slides: correct headings and CTA labels', async ({ page }) => {
  279 |     const next = page.getByRole('button', { name: /next/i }).first();
  280 |     for (let i = 0; i < HERO_SLIDES.length; i++) {
  281 |       if (i > 0) {
  282 |         await next.tap();
  283 |         await page.waitForTimeout(700);
  284 |       }
  285 |       await expect(page.getByText(HERO_SLIDES[i].heading).first()).toBeVisible();
  286 |       await expect(page.getByText(HERO_SLIDES[i].cta).first()).toBeVisible();
  287 |     }
  288 |   });
  289 | 
  290 |   test('M-HOME-106 all slide CTAs href contains /category/root', async ({ page }) => {
  291 |     const next = page.getByRole('button', { name: /next/i }).first();
  292 |     for (let i = 0; i < HERO_SLIDES.length; i++) {
  293 |       if (i > 0) {
  294 |         await next.tap();
  295 |         await page.waitForTimeout(700);
  296 |       }
  297 |       const cta  = page.getByText(HERO_SLIDES[i].cta).first();
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
```