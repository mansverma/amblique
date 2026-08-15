# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/products.spec.ts >> Product card API fields >> CARD-102/M-CARD-102 brand field is present and non-empty
- Location: tests/api/products.spec.ts:32:7

# Error details

```
Error: brand field absent or empty

expect(received).toBeTruthy()

Received: undefined
```

# Test source

```ts
  1  | /**
  2  |  * API tests – Product card fields
  3  |  *
  4  |  * Covers: CARD-101/104, CARD-102, CARD-103, CARD-105, CARD-106, CARD-107,
  5  |  *         CARD-109a  + mobile equivalents M-CARD-101–107/109a
  6  |  */
  7  | 
  8  | import { test, expect } from '@playwright/test';
  9  | import { getGuestToken, searchProducts, getProduct, type ProductResponse } from './helpers/client';
  10 | 
  11 | test.describe('Product card API fields', () => {
  12 |   let token: string;
  13 |   let firstProductId: string;
  14 |   let allHitIds: string[];
  15 |   let product: ProductResponse;
  16 | 
  17 |   test.beforeAll(async ({ request }) => {
  18 |     token      = await getGuestToken(request);
  19 |     const data = await searchProducts(request, token, { refine: 'cgid=women', limit: 12 });
  20 |     allHitIds      = data.hits.map(h => h.productId);
  21 |     firstProductId = allHitIds[0];
  22 |     product        = await getProduct(request, token, firstProductId);
  23 |   });
  24 | 
  25 |   // ── CARD-101/104 / M-CARD-101/104 ────────────────────────────────────────
  26 |   test('CARD-101/104/M-CARD-101/104 product id forms a valid /product/{id} path', () => {
  27 |     expect(product.id).toBeTruthy();
  28 |     expect(`/MarketStreet/en-US/product/${product.id}`).toMatch(/\/product\/.+/);
  29 |   });
  30 | 
  31 |   // ── CARD-102 / M-CARD-102 ─────────────────────────────────────────────────
  32 |   test('CARD-102/M-CARD-102 brand field is present and non-empty', () => {
> 33 |     expect(product.brand, 'brand field absent or empty').toBeTruthy();
     |                                                          ^ Error: brand field absent or empty
  34 |     expect(typeof product.brand).toBe('string');
  35 |   });
  36 | 
  37 |   // ── CARD-103 / M-CARD-103 ─────────────────────────────────────────────────
  38 |   test('CARD-103/M-CARD-103 primary category is present', () => {
  39 |     expect(product.primaryCategoryId, 'primaryCategoryId absent').toBeTruthy();
  40 |   });
  41 | 
  42 |   // ── CARD-105 / M-CARD-105 ─────────────────────────────────────────────────
  43 |   test('CARD-105/M-CARD-105 product id is non-empty (rendered as "SKU: {id}")', () => {
  44 |     expect(product.id).toMatch(/\S+/);
  45 |   });
  46 | 
  47 |   // ── CARD-106 / M-CARD-106 ─────────────────────────────────────────────────
  48 |   test('CARD-106/M-CARD-106 rating and review count fields exist in catalog', () => {
  49 |     expect(Object.keys(product)).toEqual(expect.arrayContaining(['c_rating', 'c_reviewCount']));
  50 |   });
  51 | 
  52 |   // ── CARD-107 / M-CARD-107 ─────────────────────────────────────────────────
  53 |   test('CARD-107/M-CARD-107 price is a positive number', () => {
  54 |     expect(typeof product.price).toBe('number');
  55 |     expect(product.price!).toBeGreaterThan(0);
  56 |   });
  57 | 
  58 |   // ── CARD-109a / M-CARD-109a ───────────────────────────────────────────────
  59 |   test('CARD-109a/M-CARD-109a free delivery promotion exists on products', async ({ request }) => {
  60 |     // Check first 3 products; any one carrying the promo validates the setup.
  61 |     const sampleIds = allHitIds.slice(0, 3);
  62 |     let found = false;
  63 |     for (const id of sampleIds) {
  64 |       const p = await getProduct(request, token, id);
  65 |       const promos = p.productPromotions ?? [];
  66 |       if (promos.some(pr => /free.{0,10}deliver/i.test(pr.calloutMsg ?? ''))) {
  67 |         found = true;
  68 |         break;
  69 |       }
  70 |       if (p['c_freeDeliveryMessage'] != null || p['c_freeDelivery'] === true) {
  71 |         found = true;
  72 |         break;
  73 |       }
  74 |     }
  75 |     expect(found, 'No free delivery promotion found on any of the first 3 products').toBe(true);
  76 |   });
  77 | });
  78 | 
```