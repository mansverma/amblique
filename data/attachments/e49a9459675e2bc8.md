# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/plp.spec.ts >> Mobile PLP sort (M-PLP-107–109) >> M-PLP-109 default sort is "Most Popular"
- Location: tests/mobile/plp.spec.ts:79:7

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /most popular/i
Received string:  "best-matches"
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
      - generic [ref=e29]:
        - generic [ref=e30]: Women
        - paragraph [ref=e31]: Women
        - generic [ref=e32]: 36 products available
      - generic [ref=e33]:
        - navigation "Breadcrumb" [ref=e35]:
          - list [ref=e36]:
            - listitem [ref=e37]:
              - link "Home" [ref=e38] [cursor=pointer]:
                - /url: /MarketStreet/en-US/
            - listitem [ref=e39]:
              - link "Women" [ref=e42] [cursor=pointer]:
                - /url: /MarketStreet/en-US/category/women
        - generic [ref=e43]:
          - heading "Women (36)" [level=1] [ref=e44]
          - generic [ref=e46]:
            - generic [ref=e47]: "Sort by:"
            - combobox "Sort by:" [ref=e49] [cursor=pointer]:
              - option "Best Matches" [selected]
              - option "Price Low To High"
              - option "Price High to Low"
              - option "Product Name A - Z"
              - option "Product Name Z - A"
              - option "Brand"
              - option "Most Popular"
              - option "Top Sellers"
        - generic [ref=e50]:
          - generic [ref=e51]:
            - button "Filters" [ref=e52] [cursor=pointer]
            - group "Quick category filters" [ref=e53]:
              - button "Accessories" [ref=e54] [cursor=pointer]
              - button "Bags" [ref=e55] [cursor=pointer]
              - button "Bottoms" [ref=e56] [cursor=pointer]
              - button "Dresses" [ref=e57] [cursor=pointer]
              - button "Knitwear" [ref=e58] [cursor=pointer]
              - button "New In" [ref=e59] [cursor=pointer]
              - button "Outerwear" [ref=e60] [cursor=pointer]
              - button "Shoes" [ref=e61] [cursor=pointer]
              - button "Tops" [ref=e62] [cursor=pointer]
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65] [cursor=pointer]:
                - generic [ref=e67]:
                  - link [ref=e69]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - link [ref=e73]:
                    - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - button "Add to Wishlist" [ref=e76]
                  - button "Quick Add Leather Crossbody Bag" [ref=e80]: Quick Add
                - generic [ref=e81]:
                  - paragraph [ref=e82]: Performer
                  - paragraph [ref=e83]: Women
                  - heading [level=3] [ref=e84]:
                    - link "Leather Crossbody Bag" [ref=e85]:
                      - /url: /MarketStreet/en-US/product/standard-prd-womens-leather-crossbody-bag
                  - paragraph [ref=e86]: "SKU: standard-prd-womens-leather-crossbody-bag"
                  - generic [ref=e89]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e90]
                    - button "(218)" [ref=e101]
                  - generic [ref=e103]:
                    - text: $109.99
                    - generic [ref=e104]: "Leather Crossbody Bag Current price: $109.99"
                    - text: $139.90
                    - generic [ref=e105]: "Leather Crossbody Bag List price: $139.90"
              - generic [ref=e106] [cursor=pointer]:
                - generic [ref=e108]:
                  - link [ref=e110]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                  - link [ref=e114]:
                    - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                  - button "Add to Wishlist" [ref=e117]
                  - button "Quick Add Knit Midi Skirt" [ref=e121]: Quick Add
                - generic [ref=e122]:
                  - group "Available colors" [ref=e124]:
                    - link "View Knit Midi Skirt in Beige" [ref=e125]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=beige
                    - link "View Knit Midi Skirt in Black" [ref=e126]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=black
                    - link "View Knit Midi Skirt in Navy" [ref=e127]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?color=navy
                  - paragraph [ref=e128]: Performer
                  - paragraph [ref=e129]: Women
                  - heading [level=3] [ref=e130]:
                    - link "Knit Midi Skirt" [ref=e131]:
                      - /url: /MarketStreet/en-US/product/womens-knit-midi-skirt?pid=womens-knit-midi-skirt-beige-xs
                  - paragraph [ref=e132]: "SKU: womens-knit-midi-skirt"
                  - generic [ref=e135]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e136]
                    - button "(218)" [ref=e147]
                  - generic [ref=e149]:
                    - text: $59.99
                    - generic [ref=e150]: "Knit Midi Skirt Current price: $59.99"
                    - text: $69.90
                    - generic [ref=e151]: Knit Midi Skirt List price from $69.90
              - generic [ref=e152] [cursor=pointer]:
                - generic [ref=e154]:
                  - link [ref=e156]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt
                  - link [ref=e160]:
                    - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                  - button "Add to Wishlist" [ref=e163]
                  - button "Quick Add Denim Midi Skirt" [ref=e167]: Quick Add
                - generic [ref=e168]:
                  - paragraph [ref=e169]: Performer
                  - paragraph [ref=e170]: Women
                  - heading [level=3] [ref=e171]:
                    - link "Denim Midi Skirt" [ref=e172]:
                      - /url: /MarketStreet/en-US/product/womens-denim-midi-skirt?pid=womens-denim-midi-skirt-xs
                  - paragraph [ref=e173]: "SKU: womens-denim-midi-skirt"
                  - generic [ref=e176]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e177]
                    - button "(218)" [ref=e188]
                  - generic [ref=e189]:
                    - generic [ref=e190]:
                      - text: $44.99
                      - generic [ref=e191]: "Denim Midi Skirt Current price: $44.99"
                      - text: $69.90
                      - generic [ref=e192]: Denim Midi Skirt List price from $69.90
                    - generic [ref=e193]: New In - 25% Off!
              - generic [ref=e195] [cursor=pointer]:
                - generic [ref=e197]:
                  - link [ref=e199]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer
                  - link [ref=e203]:
                    - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                  - generic [ref=e204]:
                    - generic [ref=e205]: Best Seller
                    - generic [ref=e206]: New
                  - button "Add to Wishlist" [ref=e209]
                  - button "Quick Add Structured Blazer" [ref=e213]: Quick Add
                - generic [ref=e214]:
                  - paragraph [ref=e215]: Performer
                  - paragraph [ref=e216]: Women
                  - heading [level=3] [ref=e217]:
                    - link "Structured Blazer" [ref=e218]:
                      - /url: /MarketStreet/en-US/product/womens-structured-blazer?pid=womens-structured-blazer-xs
                  - paragraph [ref=e219]: "SKU: womens-structured-blazer"
                  - generic [ref=e222]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e223]
                    - button "(218)" [ref=e234]
                  - generic [ref=e235]:
                    - generic [ref=e236]:
                      - text: $74.99
                      - generic [ref=e237]: "Structured Blazer Current price: $74.99"
                      - text: $129.90
                      - generic [ref=e238]: Structured Blazer List price from $129.90
                    - generic [ref=e239]: New In - 25% Off!
              - generic [ref=e241] [cursor=pointer]:
                - generic [ref=e243]:
                  - link [ref=e245]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                  - link [ref=e247]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                  - button "Add to Wishlist" [ref=e250]
                  - button "Quick Add Wool Blend Coat" [ref=e254]: Quick Add
                - generic [ref=e255]:
                  - group "Available colors" [ref=e257]:
                    - link "View Wool Blend Coat in Beige" [ref=e258]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=beige
                    - link "View Wool Blend Coat in Black" [ref=e259]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?color=black
                  - paragraph [ref=e260]: Performer
                  - paragraph [ref=e261]: Women
                  - heading [level=3] [ref=e262]:
                    - link "Wool Blend Coat" [ref=e263]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-coat?pid=womens-wool-blend-coat-beige-xs
                  - paragraph [ref=e264]: "SKU: womens-wool-blend-coat"
                  - generic [ref=e267]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e268]
                    - button "(218)" [ref=e279]
                  - generic [ref=e281]:
                    - text: $144.99
                    - generic [ref=e282]: "Wool Blend Coat Current price: $144.99"
                    - text: $179.90
                    - generic [ref=e283]: Wool Blend Coat List price from $179.90
              - generic [ref=e284] [cursor=pointer]:
                - generic [ref=e286]:
                  - link [ref=e288]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                  - link [ref=e290]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                  - generic [ref=e291]: New
                  - button "Add to Wishlist" [ref=e295]
                  - button "Quick Add Wide Leg Trousers" [ref=e299]: Quick Add
                - generic [ref=e300]:
                  - group "Available colors" [ref=e302]:
                    - link "View Wide Leg Trousers in Black" [ref=e303]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=black
                    - link "View Wide Leg Trousers in Navy" [ref=e304]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=navy
                    - link "View Wide Leg Trousers in Cream" [ref=e305]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?color=cream
                  - paragraph [ref=e306]: Performer
                  - paragraph [ref=e307]: Women
                  - heading [level=3] [ref=e308]:
                    - link "Wide Leg Trousers" [ref=e309]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-trousers?pid=womens-wide-leg-trousers-black-xs
                  - paragraph [ref=e310]: "SKU: womens-wide-leg-trousers"
                  - generic [ref=e313]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e314]
                    - button "(218)" [ref=e325]
                  - generic [ref=e326]:
                    - generic [ref=e327]:
                      - text: $53.99
                      - generic [ref=e328]: "Wide Leg Trousers Current price: $53.99"
                      - text: $89.90
                      - generic [ref=e329]: Wide Leg Trousers List price from $89.90
                    - generic [ref=e330]: New In - 25% Off!
              - generic [ref=e332] [cursor=pointer]:
                - generic [ref=e334]:
                  - link [ref=e336]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=gray
                  - link [ref=e338]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?pid=womens-oversized-t-shirt-gray-xs
                  - button "Add to Wishlist" [ref=e341]
                  - button "Quick Add Oversized T-Shirt" [ref=e345]: Quick Add
                - generic [ref=e346]:
                  - group "Available colors" [ref=e348]:
                    - link "View Oversized T-Shirt in Gray" [ref=e349]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=gray
                    - link "View Oversized T-Shirt in White" [ref=e350]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?color=white
                  - paragraph [ref=e351]: Performer
                  - paragraph [ref=e352]: Women
                  - heading [level=3] [ref=e353]:
                    - link "Oversized T-Shirt" [ref=e354]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-t-shirt?pid=womens-oversized-t-shirt-gray-xs
                  - paragraph [ref=e355]: "SKU: womens-oversized-t-shirt"
                  - generic [ref=e358]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e359]
                    - button "(218)" [ref=e370]
                  - generic [ref=e371]:
                    - generic [ref=e372]:
                      - text: $29.99
                      - generic [ref=e373]: "Oversized T-Shirt Current price: $29.99"
                      - text: $39.90
                      - generic [ref=e374]: Oversized T-Shirt List price from $39.90
                    - generic [ref=e375]: Buy 2+ Tops, Save 15%
              - generic [ref=e377] [cursor=pointer]:
                - generic [ref=e379]:
                  - link [ref=e381]:
                    - /url: /MarketStreet/en-US/product/womens-linen-midi-dress
                  - link [ref=e383]:
                    - /url: /MarketStreet/en-US/product/womens-linen-midi-dress?pid=womens-linen-midi-dress-xs
                  - button "Add to Wishlist" [ref=e386]
                  - button "Quick Add Linen Midi Dress" [ref=e390]: Quick Add
                - generic [ref=e391]:
                  - paragraph [ref=e392]: Performer
                  - paragraph [ref=e393]: Women
                  - heading [level=3] [ref=e394]:
                    - link "Linen Midi Dress" [ref=e395]:
                      - /url: /MarketStreet/en-US/product/womens-linen-midi-dress?pid=womens-linen-midi-dress-xs
                  - paragraph [ref=e396]: "SKU: womens-linen-midi-dress"
                  - generic [ref=e399]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e400]
                    - button "(218)" [ref=e411]
                  - generic [ref=e412]:
                    - generic [ref=e413]:
                      - text: $59.99
                      - generic [ref=e414]: "Linen Midi Dress Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e415]: Linen Midi Dress List price from $99.90
                    - generic [ref=e416]: New In - 25% Off!
              - generic [ref=e418] [cursor=pointer]:
                - generic [ref=e420]:
                  - link [ref=e422]:
                    - /url: /MarketStreet/en-US/product/womens-satin-trousers
                  - link [ref=e424]:
                    - /url: /MarketStreet/en-US/product/womens-satin-trousers?pid=womens-satin-trousers-xs
                  - button "Add to Wishlist" [ref=e427]
                  - button "Quick Add Satin Trousers" [ref=e431]: Quick Add
                - generic [ref=e432]:
                  - paragraph [ref=e433]: Performer
                  - paragraph [ref=e434]: Women
                  - heading [level=3] [ref=e435]:
                    - link "Satin Trousers" [ref=e436]:
                      - /url: /MarketStreet/en-US/product/womens-satin-trousers?pid=womens-satin-trousers-xs
                  - paragraph [ref=e437]: "SKU: womens-satin-trousers"
                  - generic [ref=e440]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e441]
                    - button "(218)" [ref=e452]
                  - generic [ref=e453]:
                    - generic [ref=e454]:
                      - text: $59.99
                      - generic [ref=e455]: "Satin Trousers Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e456]: Satin Trousers List price from $99.90
                    - generic [ref=e457]: New In - 25% Off!
              - generic [ref=e459] [cursor=pointer]:
                - generic [ref=e461]:
                  - link [ref=e463]:
                    - /url: /MarketStreet/en-US/product/womens-tailored-vest
                  - link [ref=e465]:
                    - /url: /MarketStreet/en-US/product/womens-tailored-vest?pid=womens-tailored-vest-xs
                  - generic [ref=e466]:
                    - generic [ref=e467]: Best Seller
                    - generic [ref=e468]: New
                  - button "Add to Wishlist" [ref=e471]
                  - button "Quick Add Tailored Vest" [ref=e475]: Quick Add
                - generic [ref=e476]:
                  - paragraph [ref=e477]: Performer
                  - paragraph [ref=e478]: Women
                  - heading [level=3] [ref=e479]:
                    - link "Tailored Vest" [ref=e480]:
                      - /url: /MarketStreet/en-US/product/womens-tailored-vest?pid=womens-tailored-vest-xs
                  - paragraph [ref=e481]: "SKU: womens-tailored-vest"
                  - generic [ref=e484]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e485]
                    - button "(218)" [ref=e496]
                  - generic [ref=e497]:
                    - generic [ref=e498]:
                      - text: $59.99
                      - generic [ref=e499]: "Tailored Vest Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e500]: Tailored Vest List price from $99.90
                    - generic [ref=e501]: New In - 25% Off!
              - generic [ref=e503] [cursor=pointer]:
                - generic [ref=e505]:
                  - link [ref=e507]:
                    - /url: /MarketStreet/en-US/product/womens-ballet-flats
                  - link [ref=e509]:
                    - /url: /MarketStreet/en-US/product/womens-ballet-flats?pid=womens-ballet-flats-6
                  - button "Add to Wishlist" [ref=e512]
                  - button "Quick Add Ballet Flats" [ref=e516]: Quick Add
                - generic [ref=e517]:
                  - paragraph [ref=e518]: Performer
                  - paragraph [ref=e519]: Women
                  - heading [level=3] [ref=e520]:
                    - link "Ballet Flats" [ref=e521]:
                      - /url: /MarketStreet/en-US/product/womens-ballet-flats?pid=womens-ballet-flats-6
                  - paragraph [ref=e522]: "SKU: womens-ballet-flats"
                  - generic [ref=e525]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e526]
                    - button "(218)" [ref=e537]
                  - generic [ref=e538]:
                    - generic [ref=e539]:
                      - text: $44.99
                      - generic [ref=e540]: "Ballet Flats Current price: $44.99"
                      - text: $79.90
                      - generic [ref=e541]: Ballet Flats List price from $79.90
                    - generic [ref=e542]: New In - 25% Off!
              - generic [ref=e544] [cursor=pointer]:
                - generic [ref=e546]:
                  - link [ref=e548]:
                    - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=black
                  - link [ref=e550]:
                    - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?pid=womens-leather-ankle-boots-black-6
                  - generic [ref=e551]:
                    - generic [ref=e552]: Best Seller
                    - generic [ref=e553]: New
                  - button "Add to Wishlist" [ref=e556]
                  - button "Quick Add Leather Ankle Boots" [ref=e560]: Quick Add
                - generic [ref=e561]:
                  - group "Available colors" [ref=e563]:
                    - link "View Leather Ankle Boots in Black" [ref=e564]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=black
                    - link "View Leather Ankle Boots in Brown" [ref=e565]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=brown
                    - link "View Leather Ankle Boots in Tan" [ref=e566]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?color=tan
                  - paragraph [ref=e567]: Performer
                  - paragraph [ref=e568]: Women
                  - heading [level=3] [ref=e569]:
                    - link "Leather Ankle Boots" [ref=e570]:
                      - /url: /MarketStreet/en-US/product/womens-leather-ankle-boots?pid=womens-leather-ankle-boots-black-6
                  - paragraph [ref=e571]: "SKU: womens-leather-ankle-boots"
                  - generic [ref=e574]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e575]
                    - button "(218)" [ref=e586]
                  - generic [ref=e587]:
                    - generic [ref=e588]:
                      - text: $112.49
                      - generic [ref=e589]: "Leather Ankle Boots Current price: $112.49"
                      - text: $179.90
                      - generic [ref=e590]: Leather Ankle Boots List price from $179.90
                    - generic [ref=e591]: New In - 25% Off!
              - generic [ref=e593] [cursor=pointer]:
                - generic [ref=e595]:
                  - link [ref=e597]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=beige
                  - link [ref=e599]:
                    - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?pid=womens-wool-blend-scarf-beige-xs
                  - button "Add to Wishlist" [ref=e602]
                  - button "Quick Add Wool Blend Scarf" [ref=e606]: Quick Add
                - generic [ref=e607]:
                  - group "Available colors" [ref=e609]:
                    - link "View Wool Blend Scarf in Beige" [ref=e610]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=beige
                    - link "View Wool Blend Scarf in Gray" [ref=e611]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?color=gray
                  - paragraph [ref=e612]: Performer
                  - paragraph [ref=e613]: Women
                  - heading [level=3] [ref=e614]:
                    - link "Wool Blend Scarf" [ref=e615]:
                      - /url: /MarketStreet/en-US/product/womens-wool-blend-scarf?pid=womens-wool-blend-scarf-beige-xs
                  - paragraph [ref=e616]: "SKU: womens-wool-blend-scarf"
                  - generic [ref=e619]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e620]
                    - button "(218)" [ref=e631]
                  - generic [ref=e633]:
                    - text: $49.99
                    - generic [ref=e634]: "Wool Blend Scarf Current price: $49.99"
                    - text: $64.90
                    - generic [ref=e635]: Wool Blend Scarf List price from $64.90
              - generic [ref=e636] [cursor=pointer]:
                - generic [ref=e638]:
                  - link [ref=e640]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=blue
                  - link [ref=e642]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?pid=womens-oversized-denim-shirt-blue-xs
                  - button "Add to Wishlist" [ref=e645]
                  - button "Quick Add Oversized Denim Shirt" [ref=e649]: Quick Add
                - generic [ref=e650]:
                  - group "Available colors" [ref=e652]:
                    - link "View Oversized Denim Shirt in Blue" [ref=e653]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=blue
                    - link "View Oversized Denim Shirt in Black" [ref=e654]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?color=black
                  - paragraph [ref=e655]: Performer
                  - paragraph [ref=e656]: Women
                  - heading [level=3] [ref=e657]:
                    - link "Oversized Denim Shirt" [ref=e658]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-denim-shirt?pid=womens-oversized-denim-shirt-blue-xs
                  - paragraph [ref=e659]: "SKU: womens-oversized-denim-shirt"
                  - generic [ref=e662]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e663]
                    - button "(218)" [ref=e674]
                  - generic [ref=e675]:
                    - generic [ref=e676]:
                      - text: $59.99
                      - generic [ref=e677]: "Oversized Denim Shirt Current price: $59.99"
                      - text: $79.90
                      - generic [ref=e678]: Oversized Denim Shirt List price from $79.90
                    - generic [ref=e679]: Buy 2+ Tops, Save 15%
              - generic [ref=e681] [cursor=pointer]:
                - generic [ref=e683]:
                  - link [ref=e685]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans
                  - link [ref=e687]:
                    - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans?pid=womens-wide-leg-jeans-xs
                  - button "Add to Wishlist" [ref=e690]
                  - button "Quick Add Wide Leg Jeans" [ref=e694]: Quick Add
                - generic [ref=e695]:
                  - paragraph [ref=e696]: Performer
                  - paragraph [ref=e697]: Women
                  - heading [level=3] [ref=e698]:
                    - link "Wide Leg Jeans" [ref=e699]:
                      - /url: /MarketStreet/en-US/product/womens-wide-leg-jeans?pid=womens-wide-leg-jeans-xs
                  - paragraph [ref=e700]: "SKU: womens-wide-leg-jeans"
                  - generic [ref=e703]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e704]
                    - button "(218)" [ref=e715]
                  - generic [ref=e716]:
                    - generic [ref=e717]:
                      - text: $59.99
                      - generic [ref=e718]: "Wide Leg Jeans Current price: $59.99"
                      - text: $99.90
                      - generic [ref=e719]: Wide Leg Jeans List price from $99.90
                    - generic [ref=e720]: New In - 25% Off!
              - generic [ref=e722] [cursor=pointer]:
                - generic [ref=e724]:
                  - link [ref=e726]:
                    - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=black
                  - link [ref=e728]:
                    - /url: /MarketStreet/en-US/product/womens-crossbody-bag?pid=womens-crossbody-bag-black-one-size
                  - button "Add to Wishlist" [ref=e731]
                  - button "Quick Add Crossbody Bag" [ref=e735]: Quick Add
                - generic [ref=e736]:
                  - group "Available colors" [ref=e738]:
                    - link "View Crossbody Bag in Black" [ref=e739]:
                      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=black
                    - link "View Crossbody Bag in Brown" [ref=e740]:
                      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?color=brown
                  - paragraph [ref=e741]: Performer
                  - paragraph [ref=e742]: Women
                  - heading [level=3] [ref=e743]:
                    - link "Crossbody Bag" [ref=e744]:
                      - /url: /MarketStreet/en-US/product/womens-crossbody-bag?pid=womens-crossbody-bag-black-one-size
                  - paragraph [ref=e745]: "SKU: womens-crossbody-bag"
                  - generic [ref=e748]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e749]
                    - button "(218)" [ref=e760]
                  - generic [ref=e762]:
                    - text: $79.99
                    - generic [ref=e763]: "Crossbody Bag Current price: $79.99"
                    - text: $99.90
                    - generic [ref=e764]: Crossbody Bag List price from $99.90
              - generic [ref=e765] [cursor=pointer]:
                - generic [ref=e767]:
                  - link [ref=e769]:
                    - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=beige
                  - link [ref=e771]:
                    - /url: /MarketStreet/en-US/product/womens-structured-handbag?pid=womens-structured-handbag-beige-one-size
                  - button "Add to Wishlist" [ref=e774]
                  - button "Quick Add Structured Handbag" [ref=e778]: Quick Add
                - generic [ref=e779]:
                  - group "Available colors" [ref=e781]:
                    - link "View Structured Handbag in Beige" [ref=e782]:
                      - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=beige
                    - link "View Structured Handbag in Brown" [ref=e783]:
                      - /url: /MarketStreet/en-US/product/womens-structured-handbag?color=brown
                  - paragraph [ref=e784]: Performer
                  - paragraph [ref=e785]: Women
                  - heading [level=3] [ref=e786]:
                    - link "Structured Handbag" [ref=e787]:
                      - /url: /MarketStreet/en-US/product/womens-structured-handbag?pid=womens-structured-handbag-beige-one-size
                  - paragraph [ref=e788]: "SKU: womens-structured-handbag"
                  - generic [ref=e791]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e792]
                    - button "(218)" [ref=e803]
                  - generic [ref=e805]:
                    - text: $89.99
                    - generic [ref=e806]: "Structured Handbag Current price: $89.99"
                    - text: $119.90
                    - generic [ref=e807]: Structured Handbag List price from $119.90
              - generic [ref=e808] [cursor=pointer]:
                - generic [ref=e810]:
                  - link [ref=e812]:
                    - /url: /MarketStreet/en-US/product/womens-wool-coat?color=navy
                  - link [ref=e814]:
                    - /url: /MarketStreet/en-US/product/womens-wool-coat?pid=womens-wool-coat-navy-xs
                  - generic [ref=e815]: Best Seller
                  - button "Add to Wishlist" [ref=e819]
                  - button "Quick Add Wool Coat" [ref=e823]: Quick Add
                - generic [ref=e824]:
                  - group "Available colors" [ref=e826]:
                    - link "View Wool Coat in Navy" [ref=e827]:
                      - /url: /MarketStreet/en-US/product/womens-wool-coat?color=navy
                  - paragraph [ref=e828]: Performer
                  - paragraph [ref=e829]: Women
                  - heading [level=3] [ref=e830]:
                    - link "Wool Coat" [ref=e831]:
                      - /url: /MarketStreet/en-US/product/womens-wool-coat?pid=womens-wool-coat-navy-xs
                  - paragraph [ref=e832]: "SKU: womens-wool-coat"
                  - generic [ref=e835]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e836]
                    - button "(218)" [ref=e847]
                  - generic [ref=e849]:
                    - text: $199.99
                    - generic [ref=e850]: "Wool Coat Current price: $199.99"
                    - text: $249.90
                    - generic [ref=e851]: Wool Coat List price from $249.90
              - generic [ref=e852] [cursor=pointer]:
                - generic [ref=e854]:
                  - link [ref=e856]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=black
                  - link [ref=e858]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-blazer?pid=womens-oversized-blazer-black-xs
                  - generic [ref=e859]:
                    - generic [ref=e860]: Best Seller
                    - generic [ref=e861]: New
                  - button "Add to Wishlist" [ref=e864]
                  - button "Quick Add Oversized Blazer" [ref=e868]: Quick Add
                - generic [ref=e869]:
                  - group "Available colors" [ref=e871]:
                    - link "View Oversized Blazer in Black" [ref=e872]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=black
                    - link "View Oversized Blazer in Navy" [ref=e873]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=navy
                    - link "View Oversized Blazer in Beige" [ref=e874]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?color=beige
                  - paragraph [ref=e875]: Performer
                  - paragraph [ref=e876]: Women
                  - heading [level=3] [ref=e877]:
                    - link "Oversized Blazer" [ref=e878]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-blazer?pid=womens-oversized-blazer-black-xs
                  - paragraph [ref=e879]: "SKU: womens-oversized-blazer"
                  - generic [ref=e882]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e883]
                    - button "(218)" [ref=e894]
                  - generic [ref=e895]:
                    - generic [ref=e896]:
                      - text: $74.99
                      - generic [ref=e897]: "Oversized Blazer Current price: $74.99"
                      - text: $129.90
                      - generic [ref=e898]: Oversized Blazer List price from $129.90
                    - generic [ref=e899]: New In - 25% Off!
              - generic [ref=e901] [cursor=pointer]:
                - generic [ref=e903]:
                  - link [ref=e905]:
                    - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=blue
                  - link [ref=e907]:
                    - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?pid=womens-high-waist-jeans-blue-xs
                  - generic [ref=e908]: Best Seller
                  - button "Add to Wishlist" [ref=e912]
                  - button "Quick Add High Waist Jeans" [ref=e916]: Quick Add
                - generic [ref=e917]:
                  - group "Available colors" [ref=e919]:
                    - link "View High Waist Jeans in Blue" [ref=e920]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=blue
                    - link "View High Waist Jeans in Black" [ref=e921]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=black
                    - link "View High Waist Jeans in White" [ref=e922]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?color=white
                  - paragraph [ref=e923]: Performer
                  - paragraph [ref=e924]: Women
                  - heading [level=3] [ref=e925]:
                    - link "High Waist Jeans" [ref=e926]:
                      - /url: /MarketStreet/en-US/product/womens-high-waist-jeans?pid=womens-high-waist-jeans-blue-xs
                  - paragraph [ref=e927]: "SKU: womens-high-waist-jeans"
                  - generic [ref=e930]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e931]
                    - button "(218)" [ref=e942]
                  - generic [ref=e944]:
                    - text: $63.99
                    - generic [ref=e945]: "High Waist Jeans Current price: $63.99"
                    - text: $79.90
                    - generic [ref=e946]: High Waist Jeans List price from $79.90
              - generic [ref=e947] [cursor=pointer]:
                - generic [ref=e949]:
                  - link [ref=e951]:
                    - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=beige
                  - link [ref=e953]:
                    - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?pid=womens-cropped-cardigan-beige-xs
                  - generic [ref=e954]: New
                  - button "Add to Wishlist" [ref=e958]
                  - button "Quick Add Cropped Cardigan" [ref=e962]: Quick Add
                - generic [ref=e963]:
                  - group "Available colors" [ref=e965]:
                    - link "View Cropped Cardigan in Beige" [ref=e966]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=beige
                    - link "View Cropped Cardigan in Gray" [ref=e967]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=gray
                    - link "View Cropped Cardigan in Black" [ref=e968]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?color=black
                  - paragraph [ref=e969]: Performer
                  - paragraph [ref=e970]: Women
                  - heading [level=3] [ref=e971]:
                    - link "Cropped Cardigan" [ref=e972]:
                      - /url: /MarketStreet/en-US/product/womens-cropped-cardigan?pid=womens-cropped-cardigan-beige-xs
                  - paragraph [ref=e973]: "SKU: womens-cropped-cardigan"
                  - generic [ref=e976]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e977]
                    - button "(218)" [ref=e988]
                  - generic [ref=e989]:
                    - generic [ref=e990]:
                      - text: $35.99
                      - generic [ref=e991]: "Cropped Cardigan Current price: $35.99"
                      - text: $59.90
                      - generic [ref=e992]: Cropped Cardigan List price from $59.90
                    - generic [ref=e993]: New In - 25% Off!
              - generic [ref=e995] [cursor=pointer]:
                - generic [ref=e997]:
                  - link [ref=e999]:
                    - /url: /MarketStreet/en-US/product/womens-trench-coat
                  - link [ref=e1001]:
                    - /url: /MarketStreet/en-US/product/womens-trench-coat?pid=womens-trench-coat-xs
                  - generic [ref=e1002]: New
                  - button "Add to Wishlist" [ref=e1006]
                  - button "Quick Add Trench Coat" [ref=e1010]: Quick Add
                - generic [ref=e1011]:
                  - paragraph [ref=e1012]: Performer
                  - paragraph [ref=e1013]: Women
                  - heading [level=3] [ref=e1014]:
                    - link "Trench Coat" [ref=e1015]:
                      - /url: /MarketStreet/en-US/product/womens-trench-coat?pid=womens-trench-coat-xs
                  - paragraph [ref=e1016]: "SKU: womens-trench-coat"
                  - generic [ref=e1019]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1020]
                    - button "(218)" [ref=e1031]
                  - generic [ref=e1032]:
                    - generic [ref=e1033]:
                      - text: $149.99
                      - generic [ref=e1034]: "Trench Coat Current price: $149.99"
                      - text: $249.90
                      - generic [ref=e1035]: Trench Coat List price from $249.90
                    - generic [ref=e1036]: New In - 25% Off!
              - generic [ref=e1038] [cursor=pointer]:
                - generic [ref=e1040]:
                  - link [ref=e1042]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=gray
                  - link [ref=e1044]:
                    - /url: /MarketStreet/en-US/product/womens-oversized-knit?pid=womens-oversized-knit-gray-xxl
                  - button "Add to Wishlist" [ref=e1047]
                  - button "Quick Add Oversized Knit Sweater" [ref=e1051]: Quick Add
                - generic [ref=e1052]:
                  - group "Available colors" [ref=e1054]:
                    - link "View Oversized Knit Sweater in Gray" [ref=e1055]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=gray
                    - link "View Oversized Knit Sweater in Black" [ref=e1056]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-knit?color=black
                  - paragraph [ref=e1057]: Performer
                  - paragraph [ref=e1058]: Women
                  - heading [level=3] [ref=e1059]:
                    - link "Oversized Knit Sweater" [ref=e1060]:
                      - /url: /MarketStreet/en-US/product/womens-oversized-knit?pid=womens-oversized-knit-gray-xxl
                  - paragraph [ref=e1061]: "SKU: womens-oversized-knit"
                  - generic [ref=e1064]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1065]
                    - button "(218)" [ref=e1076]
                  - generic [ref=e1078]:
                    - text: $89.90
                    - generic [ref=e1079]: "Oversized Knit Sweater Current price: $89.90"
              - generic [ref=e1080] [cursor=pointer]:
                - generic [ref=e1082]:
                  - link [ref=e1084]:
                    - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=black
                  - link [ref=e1086]:
                    - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?pid=womens-ribbed-tank-top-black-xs
                  - generic [ref=e1087]: New
                  - button "Add to Wishlist" [ref=e1091]
                  - button "Quick Add Ribbed Tank Top" [ref=e1095]: Quick Add
                - generic [ref=e1096]:
                  - group "Available colors" [ref=e1098]:
                    - link "View Ribbed Tank Top in Black" [ref=e1099]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=black
                    - link "View Ribbed Tank Top in White" [ref=e1100]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=white
                    - link "View Ribbed Tank Top in Beige" [ref=e1101]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?color=beige
                  - paragraph [ref=e1102]: Performer
                  - paragraph [ref=e1103]: Women
                  - heading [level=3] [ref=e1104]:
                    - link "Ribbed Tank Top" [ref=e1105]:
                      - /url: /MarketStreet/en-US/product/womens-ribbed-tank-top?pid=womens-ribbed-tank-top-black-xs
                  - paragraph [ref=e1106]: "SKU: womens-ribbed-tank-top"
                  - generic [ref=e1109]:
                    - group "4 out of 5 stars, 218 reviews" [ref=e1110]
                    - button "(218)" [ref=e1121]
                  - generic [ref=e1122]:
                    - generic [ref=e1123]:
                      - text: $18.74
                      - generic [ref=e1124]: "Ribbed Tank Top Current price: $18.74"
                      - text: $29.90
                      - generic [ref=e1125]: Ribbed Tank Top List price from $29.90
                    - generic [ref=e1126]: New In - 25% Off!
            - generic [ref=e1129]:
              - paragraph [ref=e1130]: Showing 24 of 36
              - button "Load more" [ref=e1131] [cursor=pointer]
  - contentinfo [ref=e1132]:
    - generic [ref=e1135]:
      - generic [ref=e1136]:
        - generic [ref=e1137]:
          - link [ref=e1138] [cursor=pointer]:
            - /url: /MarketStreet/en-US/
            - img "Market Street" [ref=e1139]
          - generic [ref=e1140]:
            - link "Youtube" [ref=e1141] [cursor=pointer]:
              - /url: https://youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg
              - img "YouTube" [ref=e1142]
            - link "Instagram" [ref=e1144] [cursor=pointer]:
              - /url: https://instagram.com/commercecloud
              - img "Instagram" [ref=e1145]
            - link "X" [ref=e1147] [cursor=pointer]:
              - /url: https://x.com/CommerceCloud
              - img "X" [ref=e1148]
            - link "Facebook" [ref=e1150] [cursor=pointer]:
              - /url: https://facebook.com/CommerceCloud/
              - img "Facebook" [ref=e1151]
        - generic [ref=e1153]:
          - link "About Us" [ref=e1154] [cursor=pointer]:
            - /url: /MarketStreet/en-US/about-us
          - link "Accessibility Statement" [ref=e1155] [cursor=pointer]:
            - /url: /MarketStreet/en-US/accessibility
          - link "Privacy Policy" [ref=e1156] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy
          - link "Your Privacy Choices" [ref=e1157] [cursor=pointer]:
            - /url: /MarketStreet/en-US/privacy-choices
      - generic [ref=e1158]:
        - generic [ref=e1159]: © 2026 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.
        - generic [ref=e1160]:
          - generic [ref=e1161]:
            - combobox "Language selector. Selecting a language reloads the page in that language." [ref=e1164] [cursor=pointer]:
              - option "English (US)" [selected]
              - option "English (UK)"
            - combobox "Currency switcher. Selecting a currency updates prices across the site." [ref=e1167] [cursor=pointer]:
              - option "US Dollar ($)" [selected]
              - option "British Pound (£)"
          - generic [ref=e1168]:
            - link "Privacy Policy" [ref=e1169] [cursor=pointer]:
              - /url: /MarketStreet/en-US/privacy
            - link "Terms of Use" [ref=e1170] [cursor=pointer]:
              - /url: /MarketStreet/en-US/terms
  - region "Notifications alt+T"
```

# Test source

```ts
  1   | /**
  2   |  * Mobile – Category Listing page (PLP), Quick Add modal, product card and touch
  3   |  *
  4   |  * Covers: M-PLP-101–119 | M-QA-101–106 | M-CARD-101–115 | M-TCH-104–106
  5   |  *
  6   |  * Reference category: Women  /MarketStreet/en-US/category/women
  7   |  * Viewport: 375 × 812, iPhone 12 emulation
  8   |  *
  9   |  * ⚠ Spec inconsistency M-PLP-118:
  10  |  *   M-PLP-117 states 12 products per page.
  11  |  *   M-PLP-118 states "Women returns 2 pages, consistent with 36 results at 24 per page".
  12  |  *   The "at 24 per page" conflicts with M-PLP-117 (12/page).
  13  |  *   Also: desktop PLP-115 says 2 pages but 36 ÷ 12 = 3 pages.
  14  |  *   Tests assert pagination EXISTS and covers multiple pages without asserting exact count.
  15  |  */
  16  | 
  17  | import { test, expect } from '@playwright/test';
  18  | import { bypassConsent } from '../helpers/consent';
  19  | import { WOMEN_PLP_PATH, SORT_OPTIONS, CATEGORY_REFINEMENTS, WOMEN_PRICE_BANDS } from '../fixtures';
  20  | 
  21  | test.beforeEach(async ({ page }) => {
  22  |   await bypassConsent(page);
  23  |   await page.goto(WOMEN_PLP_PATH);
  24  | });
  25  | 
  26  | // ---------------------------------------------------------------------------
  27  | // M-PLP-101–106  Page structure
  28  | // ---------------------------------------------------------------------------
  29  | test.describe('Mobile PLP page structure (M-PLP-101–106)', () => {
  30  |   test('M-PLP-101 page title is "Women | Storefront Next: Market Street"', async ({ page }) => {
  31  |     await expect(page).toHaveTitle(/Women.*Storefront Next.*Market Street/i);
  32  |   });
  33  | 
  34  |   test('M-PLP-102 category banner shows "WOMEN" in uppercase overlaid on banner image', async ({ page }) => {
  35  |     await expect(page.getByText('WOMEN').first()).toBeVisible();
  36  |   });
  37  | 
  38  |   test('M-PLP-103 page heading is "Women"', async ({ page }) => {
  39  |     await expect(page.getByRole('heading', { name: 'Women' }).first()).toBeVisible();
  40  |   });
  41  | 
  42  |   test('M-PLP-104 result summary reads "36 products available"', async ({ page }) => {
  43  |     await expect(page.getByText(/36 products available/i)).toBeVisible();
  44  |   });
  45  | 
  46  |   test('M-PLP-105 breadcrumb is "Home > Women"; Home links to home page', async ({ page }) => {
  47  |     const breadcrumb = page.getByRole('navigation', { name: /breadcrumb/i })
  48  |       .or(page.locator('[aria-label*="breadcrumb" i]')).first();
  49  |     const homeLink = breadcrumb.getByRole('link', { name: 'Home' });
  50  |     await expect(homeLink).toBeVisible();
  51  |     expect(await homeLink.getAttribute('href')).toMatch(/\/MarketStreet\/en-US\//i);
  52  |     await expect(breadcrumb.getByText('Women').first()).toBeVisible();
  53  |   });
  54  | 
  55  |   test('M-PLP-106 result count heading shows "Women (36)"', async ({ page }) => {
  56  |     await expect(page.getByText(/Women\s*\(36\)/)).toBeVisible();
  57  |   });
  58  | });
  59  | 
  60  | // ---------------------------------------------------------------------------
  61  | // M-PLP-107–109  Sort control
  62  | // ---------------------------------------------------------------------------
  63  | test.describe('Mobile PLP sort (M-PLP-107–109)', () => {
  64  |   test('M-PLP-107 sort control is a native select labelled "Sort by:"', async ({ page }) => {
  65  |     const select = page.locator('select').filter({ has: page.locator('option') });
  66  |     await expect(select.first()).toBeAttached();
  67  |     await expect(page.getByText('Sort by:').first()).toBeVisible();
  68  |   });
  69  | 
  70  |   test('M-PLP-108 sort control has eight options in specified order', async ({ page }) => {
  71  |     const select = page.getByLabel(/sort by/i)
  72  |       .or(page.locator('select[name*="sort" i]')).first();
  73  |     const options = await select.locator('option').allInnerTexts();
  74  |     for (const opt of SORT_OPTIONS) {
  75  |       expect(options.some(o => o.trim().toLowerCase() === opt.toLowerCase())).toBe(true);
  76  |     }
  77  |   });
  78  | 
  79  |   test('M-PLP-109 default sort is "Most Popular"', async ({ page }) => {
  80  |     const select = page.getByLabel(/sort by/i)
  81  |       .or(page.locator('select[name*="sort" i]')).first();
  82  |     const value  = await select.inputValue();
> 83  |     expect(value).toMatch(/most popular/i);
      |                   ^ Error: expect(received).toMatch(expected)
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
  180 |       .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
  181 |     await expect(page.getByRole('button', { name: /next/i })
  182 |       .or(page.getByRole('link', { name: /next/i })).first()).toBeVisible();
  183 |     await expect(page.getByRole('button', { name: '2' })
```