# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: desktop/home.spec.ts >> Home – Featured Products carousel (HOME-201–206) >> HOME-203 NOTE carousel contains ≥10 reachable products (spec says 10; product list has 12)
- Location: tests/desktop/home.spec.ts:290:7

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 10
Received:    8
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
      - generic [ref=e35]:
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
        - generic [ref=e111]:
          - generic [ref=e112]:
            - heading "Featured Products" [level=2] [ref=e113]
            - link "Shop all" [ref=e115] [cursor=pointer]:
              - /url: /MarketStreet/en-US/category/root
          - region "Featured Products carousel" [ref=e116]:
            - list [ref=e118]:
              - listitem [ref=e119]:
                - generic [ref=e121] [cursor=pointer]:
                  - generic [ref=e123]:
                    - link [ref=e125]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                    - link [ref=e129]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                    - button "Add to Wishlist" [ref=e132]
                    - button "Quick Add Leather Crossbody Bag" [ref=e136]: Quick Add
                  - generic [ref=e137]:
                    - paragraph [ref=e138]: Performer
                    - heading [level=3] [ref=e139]:
                      - link "Leather Crossbody Bag" [ref=e140]:
                        - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                    - paragraph [ref=e141]: "SKU: standard-prd-womens-leather-crossbody-bag"
                    - generic [ref=e144]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e145]
                      - button "(218)" [ref=e156]
                    - generic [ref=e158]:
                      - text: $109.99
                      - generic [ref=e159]: "Leather Crossbody Bag Current price: $109.99"
                      - text: $139.90
                      - generic [ref=e160]: "Leather Crossbody Bag List price: $139.90"
              - listitem [ref=e161]:
                - generic [ref=e163] [cursor=pointer]:
                  - generic [ref=e165]:
                    - link [ref=e167]:
                      - /url: /MarketStreet/en-US/product/girls-puffer-vest
                    - link [ref=e171]:
                      - /url: /MarketStreet/en-US/product/girls-puffer-vest?pid=girls-puffer-vest-2t
                    - button "Add to Wishlist" [ref=e174]
                    - button "Quick Add Girls Puffer Vest" [ref=e178]: Quick Add
                  - generic [ref=e179]:
                    - paragraph [ref=e180]: Performer
                    - heading [level=3] [ref=e181]:
                      - link "Girls Puffer Vest" [ref=e182]:
                        - /url: /MarketStreet/en-US/product/girls-puffer-vest?pid=girls-puffer-vest-2t
                    - paragraph [ref=e183]: "SKU: girls-puffer-vest"
                    - generic [ref=e186]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e187]
                      - button "(218)" [ref=e198]
                    - generic [ref=e199]:
                      - generic [ref=e200]:
                        - text: $33.74
                        - generic [ref=e201]: "Girls Puffer Vest Current price: $33.74"
                        - text: $54.90
                        - generic [ref=e202]: Girls Puffer Vest List price from $54.90
                      - generic [ref=e203]: New In - 25% Off!
              - listitem [ref=e205]:
                - generic [ref=e207] [cursor=pointer]:
                  - generic [ref=e209]:
                    - link [ref=e211]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                    - link [ref=e215]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                    - button "Add to Wishlist" [ref=e218]
                    - button "Quick Add Knit Midi Skirt" [ref=e222]: Quick Add
                  - generic [ref=e223]:
                    - group "Available colors" [ref=e225]:
                      - link "View Knit Midi Skirt in Beige" [ref=e226]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                      - link "View Knit Midi Skirt in Black" [ref=e227]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
                      - link "View Knit Midi Skirt in Navy" [ref=e228]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
                    - paragraph [ref=e229]: Performer
                    - heading [level=3] [ref=e230]:
                      - link "Knit Midi Skirt" [ref=e231]:
                        - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                    - paragraph [ref=e232]: "SKU: womens-knit-midi-skirt"
                    - generic [ref=e235]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e236]
                      - button "(218)" [ref=e247]
                    - generic [ref=e249]:
                      - text: $59.99
                      - generic [ref=e250]: "Knit Midi Skirt Current price: $59.99"
                      - text: $69.90
                      - generic [ref=e251]: Knit Midi Skirt List price from $69.90
              - listitem [ref=e252]:
                - generic [ref=e254] [cursor=pointer]:
                  - generic [ref=e256]:
                    - link [ref=e258]:
                      - /url: /MarketStreet/en-US/product/kids-rain-boots
                    - link [ref=e262]:
                      - /url: /MarketStreet/en-US/product/kids-rain-boots?pid=kids-rain-boots-8
                    - button "Add to Wishlist" [ref=e265]
                    - button "Quick Add Kids Rain Boots" [ref=e269]: Quick Add
                  - generic [ref=e270]:
                    - paragraph [ref=e271]: Performer
                    - heading [level=3] [ref=e272]:
                      - link "Kids Rain Boots" [ref=e273]:
                        - /url: /MarketStreet/en-US/product/kids-rain-boots?pid=kids-rain-boots-8
                    - paragraph [ref=e274]: "SKU: kids-rain-boots"
                    - generic [ref=e277]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e278]
                      - button "(218)" [ref=e289]
                    - generic [ref=e290]:
                      - generic [ref=e291]:
                        - text: $29.99
                        - generic [ref=e292]: "Kids Rain Boots Current price: $29.99"
                        - text: $49.90
                        - generic [ref=e293]: Kids Rain Boots List price from $49.90
                      - generic [ref=e294]: $10 Off All Kids' Shoes
              - listitem [ref=e296]:
                - generic [ref=e298] [cursor=pointer]:
                  - generic [ref=e300]:
                    - link [ref=e302]:
                      - /url: /MarketStreet/en-US/product/mens-athletic-joggers
                    - link [ref=e306]:
                      - /url: /MarketStreet/en-US/product/mens-athletic-joggers?pid=mens-athletic-joggers-xs
                    - button "Add to Wishlist" [ref=e309]
                    - button "Quick Add Athletic Joggers" [ref=e313]: Quick Add
                  - generic [ref=e314]:
                    - paragraph [ref=e315]: Performer
                    - heading [level=3] [ref=e316]:
                      - link "Athletic Joggers" [ref=e317]:
                        - /url: /MarketStreet/en-US/product/mens-athletic-joggers?pid=mens-athletic-joggers-xs
                    - paragraph [ref=e318]: "SKU: mens-athletic-joggers"
                    - generic [ref=e321]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e322]
                      - button "(218)" [ref=e333]
                    - generic [ref=e334]:
                      - generic [ref=e335]:
                        - text: $37.49
                        - generic [ref=e336]: "Athletic Joggers Current price: $37.49"
                        - text: $69.90
                        - generic [ref=e337]: Athletic Joggers List price from $69.90
                      - generic [ref=e338]: New In - 25% Off!
              - listitem [ref=e340]:
                - generic [ref=e342] [cursor=pointer]:
                  - generic [ref=e344]:
                    - link [ref=e346]:
                      - /url: /MarketStreet/en-US/product/mens-utility-overshirt
                    - link [ref=e350]:
                      - /url: /MarketStreet/en-US/product/mens-utility-overshirt?pid=mens-utility-overshirt-xs
                    - button "Add to Wishlist" [ref=e353]
                    - button "Quick Add Utility Overshirt" [ref=e357]: Quick Add
                  - generic [ref=e358]:
                    - paragraph [ref=e359]: Performer
                    - heading [level=3] [ref=e360]:
                      - link "Utility Overshirt" [ref=e361]:
                        - /url: /MarketStreet/en-US/product/mens-utility-overshirt?pid=mens-utility-overshirt-xs
                    - paragraph [ref=e362]: "SKU: mens-utility-overshirt"
                    - generic [ref=e365]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e366]
                      - button "(218)" [ref=e377]
                    - generic [ref=e378]:
                      - generic [ref=e379]:
                        - text: $44.99
                        - generic [ref=e380]: "Utility Overshirt Current price: $44.99"
                        - text: $79.90
                        - generic [ref=e381]: Utility Overshirt List price from $79.90
                      - generic [ref=e382]: New In - 25% Off!
              - listitem [ref=e384]:
                - generic [ref=e386] [cursor=pointer]:
                  - generic [ref=e388]:
                    - link [ref=e390]:
                      - /url: /MarketStreet/en-US/product/mens-waffle-long-sleeve
                    - link [ref=e394]:
                      - /url: /MarketStreet/en-US/product/mens-waffle-long-sleeve?pid=mens-waffle-long-sleeve-xs
                    - button "Add to Wishlist" [ref=e397]
                    - button "Quick Add Waffle Long Sleeve" [ref=e401]: Quick Add
                  - generic [ref=e402]:
                    - paragraph [ref=e403]: Performer
                    - heading [level=3] [ref=e404]:
                      - link "Waffle Long Sleeve" [ref=e405]:
                        - /url: /MarketStreet/en-US/product/mens-waffle-long-sleeve?pid=mens-waffle-long-sleeve-xs
                    - paragraph [ref=e406]: "SKU: mens-waffle-long-sleeve"
                    - generic [ref=e409]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e410]
                      - button "(218)" [ref=e421]
                    - generic [ref=e422]:
                      - generic [ref=e423]:
                        - text: $33.74
                        - generic [ref=e424]: "Waffle Long Sleeve Current price: $33.74"
                        - text: $59.90
                        - generic [ref=e425]: Waffle Long Sleeve List price from $59.90
                      - generic [ref=e426]: New In - 25% Off!
              - listitem [ref=e428]:
                - generic [ref=e430] [cursor=pointer]:
                  - generic [ref=e432]:
                    - link [ref=e434]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt
                    - link [ref=e438]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                    - button "Add to Wishlist" [ref=e441]
                    - button "Quick Add Denim Midi Skirt" [ref=e445]: Quick Add
                  - generic [ref=e446]:
                    - paragraph [ref=e447]: Performer
                    - heading [level=3] [ref=e448]:
                      - link "Denim Midi Skirt" [ref=e449]:
                        - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                    - paragraph [ref=e450]: "SKU: womens-denim-midi-skirt"
                    - generic [ref=e453]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e454]
                      - button "(218)" [ref=e465]
                    - generic [ref=e466]:
                      - generic [ref=e467]:
                        - text: $44.99
                        - generic [ref=e468]: "Denim Midi Skirt Current price: $44.99"
                        - text: $69.90
                        - generic [ref=e469]: Denim Midi Skirt List price from $69.90
                      - generic [ref=e470]: New In - 25% Off!
              - listitem [ref=e472]:
                - generic [ref=e474] [cursor=pointer]:
                  - generic [ref=e476]:
                    - link [ref=e478]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer
                    - link [ref=e482]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                    - generic [ref=e483]:
                      - generic [ref=e484]: Best Seller
                      - generic [ref=e485]: New
                    - button "Add to Wishlist" [ref=e488]
                    - button "Quick Add Structured Blazer" [ref=e492]: Quick Add
                  - generic [ref=e493]:
                    - paragraph [ref=e494]: Performer
                    - heading [level=3] [ref=e495]:
                      - link "Structured Blazer" [ref=e496]:
                        - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                    - paragraph [ref=e497]: "SKU: womens-structured-blazer"
                    - generic [ref=e500]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e501]
                      - button "(218)" [ref=e512]
                    - generic [ref=e513]:
                      - generic [ref=e514]:
                        - text: $74.99
                        - generic [ref=e515]: "Structured Blazer Current price: $74.99"
                        - text: $129.90
                        - generic [ref=e516]: Structured Blazer List price from $129.90
                      - generic [ref=e517]: New In - 25% Off!
              - listitem [ref=e519]:
                - generic [ref=e521] [cursor=pointer]:
                  - generic [ref=e523]:
                    - link [ref=e525]:
                      - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=white
                    - link [ref=e529]:
                      - /url: /MarketStreet/en-US/product/mens-oxford-shirt?pid=mens-oxford-shirt-white-xs
                    - generic [ref=e530]: Best Seller
                    - button "Add to Wishlist" [ref=e534]
                    - button "Quick Add Oxford Shirt" [ref=e538]: Quick Add
                  - generic [ref=e539]:
                    - group "Available colors" [ref=e541]:
                      - link "View Oxford Shirt in White" [ref=e542]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=white
                      - link "View Oxford Shirt in Blue" [ref=e543]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=blue
                      - link "View Oxford Shirt in Pink" [ref=e544]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?color=pink
                    - paragraph [ref=e545]: Performer
                    - heading [level=3] [ref=e546]:
                      - link "Oxford Shirt" [ref=e547]:
                        - /url: /MarketStreet/en-US/product/mens-oxford-shirt?pid=mens-oxford-shirt-white-xs
                    - paragraph [ref=e548]: "SKU: mens-oxford-shirt"
                    - generic [ref=e551]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e552]
                      - button "(218)" [ref=e563]
                    - generic [ref=e564]:
                      - generic [ref=e565]:
                        - text: $69.90
                        - generic [ref=e566]: "Oxford Shirt Current price: $69.90"
                        - text: $79.99
                        - generic [ref=e567]: Oxford Shirt List price from $79.99
                      - generic [ref=e568]: 3 for $99
              - listitem [ref=e570]:
                - generic [ref=e572] [cursor=pointer]:
                  - generic [ref=e574]:
                    - link [ref=e576]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                    - link [ref=e579]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                    - button "Add to Wishlist" [ref=e582]
                    - button "Quick Add Wool Blend Coat" [ref=e586]: Quick Add
                  - generic [ref=e587]:
                    - group "Available colors" [ref=e589]:
                      - link "View Wool Blend Coat in Beige" [ref=e590]:
                        - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                      - link "View Wool Blend Coat in Black" [ref=e591]:
                        - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=black
                    - paragraph [ref=e592]: Performer
                    - heading [level=3] [ref=e593]:
                      - link "Wool Blend Coat" [ref=e594]:
                        - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                    - paragraph [ref=e595]: "SKU: womens-wool-blend-coat"
                    - generic [ref=e598]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e599]
                      - button "(218)" [ref=e610]
                    - generic [ref=e612]:
                      - text: $144.99
                      - generic [ref=e613]: "Wool Blend Coat Current price: $144.99"
                      - text: $179.90
                      - generic [ref=e614]: Wool Blend Coat List price from $179.90
              - listitem [ref=e615]:
                - generic [ref=e617] [cursor=pointer]:
                  - generic [ref=e619]:
                    - link [ref=e621]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                    - link [ref=e624]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                    - generic [ref=e625]: New
                    - button "Add to Wishlist" [ref=e629]
                    - button "Quick Add Wide Leg Trousers" [ref=e633]: Quick Add
                  - generic [ref=e634]:
                    - group "Available colors" [ref=e636]:
                      - link "View Wide Leg Trousers in Black" [ref=e637]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                      - link "View Wide Leg Trousers in Navy" [ref=e638]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=navy
                      - link "View Wide Leg Trousers in Cream" [ref=e639]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=cream
                    - paragraph [ref=e640]: Performer
                    - heading [level=3] [ref=e641]:
                      - link "Wide Leg Trousers" [ref=e642]:
                        - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                    - paragraph [ref=e643]: "SKU: womens-wide-leg-trousers"
                    - generic [ref=e646]:
                      - group "4 out of 5 stars, 218 reviews" [ref=e647]
                      - button "(218)" [ref=e658]
                    - generic [ref=e659]:
                      - generic [ref=e660]:
                        - text: $53.99
                        - generic [ref=e661]: "Wide Leg Trousers Current price: $53.99"
                        - text: $89.90
                        - generic [ref=e662]: Wide Leg Trousers List price from $89.90
                      - generic [ref=e663]: New In - 25% Off!
            - button "Previous slide" [disabled]
            - button "Next slide" [ref=e665] [cursor=pointer]
      - generic [ref=e668]:
        - generic [ref=e669]:
          - heading "Style for Real Life" [level=2] [ref=e670]
          - paragraph [ref=e671]: At Market Street, we believe fashion should be effortless, authentic, and accessible. Our collections are designed for the modern individual who values quality, versatility, and timeless style.
        - region "Style for Real Life" [ref=e672]:
          - list [ref=e674]:
            - listitem [ref=e675]:
              - link "Women Women Shop Now" [ref=e677] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/women
                - generic [ref=e678]:
                  - img "Women" [ref=e682]
                  - generic [ref=e684]:
                    - heading "Women" [level=3] [ref=e686]
                    - generic: Shop Now
            - listitem [ref=e688]:
              - link "Men Men Shop Now" [ref=e690] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/men
                - generic [ref=e691]:
                  - img "Men" [ref=e695]
                  - generic [ref=e697]:
                    - heading "Men" [level=3] [ref=e699]
                    - generic: Shop Now
            - listitem [ref=e701]:
              - link "Kids Kids Shop Now" [ref=e703] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/kids
                - generic [ref=e704]:
                  - img "Kids" [ref=e708]
                  - generic [ref=e710]:
                    - heading "Kids" [level=3] [ref=e712]
                    - generic: Shop Now
            - listitem [ref=e714]:
              - link "New Arrivals New Arrivals Shop Now" [ref=e716] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/new-arrivals
                - generic [ref=e717]:
                  - img "New Arrivals" [ref=e721]
                  - generic [ref=e723]:
                    - heading "New Arrivals" [level=3] [ref=e725]
                    - generic: Shop Now
          - button "Previous slide" [disabled]
          - button "Next slide" [disabled]
      - generic [ref=e728]:
        - generic [ref=e729]:
          - generic [ref=e732]:
            - img "Women's Collection" [ref=e733]
            - generic [ref=e736]:
              - generic [ref=e737]:
                - heading "Women" [level=3] [ref=e738]
                - paragraph [ref=e739]: Discover our curated collection of sophisticated footwear designed for the modern woman.
              - 'link "Explore collection: women''s" [ref=e740] [cursor=pointer]':
                - /url: /MarketStreet/en-US/category/womens
                - text: EXPLORE COLLECTION
          - generic [ref=e743]:
            - img "Men's Collection" [ref=e744]
            - generic [ref=e747]:
              - generic [ref=e748]:
                - heading "Men" [level=3] [ref=e749]
                - paragraph [ref=e750]: Timeless craftsmanship meets contemporary style in our men's footwear collection.
              - 'link "Explore collection: men''s" [ref=e751] [cursor=pointer]':
                - /url: /MarketStreet/en-US/category/mens
                - text: EXPLORE COLLECTION
        - generic [ref=e757]:
          - heading "Style for Real Life" [level=3] [ref=e758]
          - paragraph [ref=e759]: At Market Street, we believe fashion should be effortless, authentic, and accessible. Our collections are designed for the modern individual who values quality, versatility, and timeless style. Discover pieces that move with you, adapt to your life, and become the foundation of a wardrobe that works—every day, everywhere.
  - contentinfo [ref=e760]:
    - generic [ref=e763]:
      - heading "Join Our Community" [level=2] [ref=e764]
      - paragraph [ref=e765]: Be the first to discover new arrivals, exclusive offers, and style inspiration.
      - generic [ref=e767]:
        - generic [ref=e768]: Email address for newsletter subscription
        - generic [ref=e769]:
          - textbox "Email address for newsletter subscription" [ref=e770]:
            - /placeholder: Your email
          - button "Subscribe" [ref=e771] [cursor=pointer]
    - generic [ref=e774]:
      - generic [ref=e776]:
        - link [ref=e777] [cursor=pointer]:
          - /url: /MarketStreet/en-US/
          - img "Market Street" [ref=e778]
        - generic [ref=e779]:
          - link "About Us" [ref=e780] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e781] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e782] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e783] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
        - generic [ref=e784]:
          - link "Youtube" [ref=e785] [cursor=pointer]:
            - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
            - img "YouTube" [ref=e786]
          - link "Instagram" [ref=e788] [cursor=pointer]:
            - /url: https://instagram.com/commercecloud
            - img "Instagram" [ref=e789]
          - link "X" [ref=e791] [cursor=pointer]:
            - /url: https://x.com/CommerceCloud
            - img "X" [ref=e792]
          - link "Facebook" [ref=e794] [cursor=pointer]:
            - /url: https://facebook.com/CommerceCloud/
            - img "Facebook" [ref=e795]
      - generic [ref=e797]:
        - generic [ref=e798]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e799]:
          - generic [ref=e800]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e803] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e806] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e807]:
            - link "Privacy Policy" [ref=e808] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e809] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
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
  217 |       await expect(page.getByText(heading).first()).toBeVisible();
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
> 303 |     expect(seen.size).toBeGreaterThanOrEqual(10);
      |                       ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
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
  318 | test.describe('Home – Style for Real Life tiles (HOME-301–308)', () => {
  319 |   test.beforeEach(async ({ page }) => {
  320 |     await bypassConsent(page);
  321 |     await page.goto(HOME_PATH);
  322 |   });
  323 | 
  324 |   test('HOME-301 section heading is "Style for Real Life"', async ({ page }) => {
  325 |     await expect(page.getByRole('heading', { name: 'Style for Real Life' }).first()).toBeVisible();
  326 |   });
  327 | 
  328 |   test('HOME-302 body copy matches spec', async ({ page }) => {
  329 |     // Text appears in multiple elements (section + a product card); scope to the section
  330 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  331 |     await expect(section.getByText(/At Market Street, we believe fashion should be effortless/)).toBeVisible();
  332 |   });
  333 | 
  334 |   test('HOME-303/304 four tiles: Women, Men, Kids, New Arrivals', async ({ page }) => {
  335 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  336 |     for (const label of ['Women', 'Men', 'Kids', 'New Arrivals']) {
  337 |       await expect(section.getByText(label, { exact: true }).first()).toBeVisible();
  338 |     }
  339 |   });
  340 | 
  341 |   test('HOME-305 "Shop Now" label exists in tile markup (collapsed pre-hover)', async ({ page }) => {
  342 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  343 |     // Attached to DOM even though visually hidden
  344 |     await expect(section.getByText('Shop Now').first()).toBeAttached();
  345 |   });
  346 | 
  347 |   test('HOME-306 tile links target correct category URLs', async ({ page }) => {
  348 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  349 |     const expected = [
  350 |       { label: 'Women',        href: '/category/women'        },
  351 |       { label: 'Men',          href: '/category/men'          },
  352 |       { label: 'Kids',         href: '/category/kids'         },
  353 |       { label: 'New Arrivals', href: '/category/new-arrivals' },
  354 |     ];
  355 |     for (const { href } of expected) {
  356 |       // Use href-based selector; hasText:'Men' would also match 'Women' (substring)
  357 |       const link = section.locator(`a[href*="${href}"]`).first();
  358 |       await expect(link).toBeAttached();
  359 |       expect(await link.getAttribute('href')).toContain(href);
  360 |     }
  361 |   });
  362 | 
  363 |   test('HOME-307 Style for Real Life carousel has Previous and Next controls', async ({ page }) => {
  364 |     const section = page.locator('section').filter({ hasText: 'Style for Real Life' }).first();
  365 |     await expect(section.getByRole('button', { name: /previous|prev/i }).first()).toBeVisible();
  366 |     await expect(section.getByRole('button', { name: /next/i }).first()).toBeVisible();
  367 |   });
  368 | 
  369 | });
  370 | 
  371 | // ---------------------------------------------------------------------------
  372 | // HOME-401–406  Collection banners
  373 | // ---------------------------------------------------------------------------
  374 | test.describe('Home – Collection banners (HOME-401–406)', () => {
  375 |   test.beforeEach(async ({ page }) => {
  376 |     await bypassConsent(page);
  377 |     await page.goto(HOME_PATH);
  378 |   });
  379 | 
  380 |   test('HOME-401 two "EXPLORE COLLECTION" CTAs are present (one per banner)', async ({ page }) => {
  381 |     await expect(page.getByText('EXPLORE COLLECTION')).toHaveCount(2);
  382 |   });
  383 | 
  384 |   test('HOME-402 Women banner: heading "Women" and curated footwear copy', async ({ page }) => {
  385 |     await expect(page.getByText(/Discover our curated collection of sophisticated footwear/)).toBeVisible();
  386 |   });
  387 | 
  388 |   test('HOME-403 Men banner: heading "Men" and timeless craftsmanship copy', async ({ page }) => {
  389 |     await expect(page.getByText(/Timeless craftsmanship meets contemporary style/)).toBeVisible();
  390 |   });
  391 | 
  392 |   test('HOME-405 Women banner CTA links to Women category', async ({ page }) => {
  393 |     // aria-label="Explore collection: women's" — note: "women's" contains "men" so
  394 |     // we must include the colon-space to avoid matching the men's link
  395 |     const cta = page.getByRole('link', { name: /explore collection: women/i });
  396 |     await expect(cta).toBeVisible();
  397 |     expect(await cta.getAttribute('href')).toContain('/category/women');
  398 |   });
  399 | 
  400 |   test('HOME-406 Men banner CTA links to Men category', async ({ page }) => {
  401 |     // aria-label="Explore collection: men's" — ": men" prevents matching "women's"
  402 |     const cta = page.getByRole('link', { name: /explore collection: men/i });
  403 |     await expect(cta).toBeVisible();
```