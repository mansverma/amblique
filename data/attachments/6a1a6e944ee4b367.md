# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/search.spec.ts >> Search API – Women category >> PLP-112a colour refinement group is present
- Location: tests/api/search.spec.ts:67:7

# Error details

```
Error: colour refinement absent

expect(received).toBeTruthy()

Received: undefined
```

# Test source

```ts
  1   | /**
  2   |  * API tests – Product Search / Catalog Data
  3   |  *
  4   |  * Covers: PLP-103, PLP-105, PLP-106/107, PLP-108, PLP-109,
  5   |  *         PLP-111, PLP-112, PLP-112a, PLP-113, PLP-114, PLP-115
  6   |  *         + mobile equivalents M-PLP-104/106/107/108/109/117/118
  7   |  */
  8   | 
  9   | import { test, expect } from '@playwright/test';
  10  | import { getGuestToken, searchProducts } from './helpers/client';
  11  | import { SORT_OPTIONS, WOMEN_PRICE_BANDS, CATEGORY_REFINEMENTS } from '../fixtures';
  12  | 
  13  | test.describe('Search API – Women category', () => {
  14  |   let token: string;
  15  |   let data: Awaited<ReturnType<typeof searchProducts>>;
  16  | 
  17  |   test.beforeAll(async ({ request }) => {
  18  |     token = await getGuestToken(request);
  19  |     data  = await searchProducts(request, token, { refine: 'cgid=women', limit: 12 });
  20  |   });
  21  | 
  22  |   // ── PLP-103 / M-PLP-104 ──────────────────────────────────────────────────
  23  |   test('PLP-103/M-PLP-104 Women category returns exactly 36 products', () => {
  24  |     expect(data.total).toBe(36);
  25  |   });
  26  | 
  27  |   // ── PLP-105 / M-PLP-106 ──────────────────────────────────────────────────
  28  |   test('PLP-105/M-PLP-106 total is 36 (drives "Women (36)" heading)', () => {
  29  |     expect(data.total).toBe(36);
  30  |   });
  31  | 
  32  |   // ── PLP-106/107 / M-PLP-107/108 ──────────────────────────────────────────
  33  |   test('PLP-106/107/M-PLP-107/108 sort options: eight present, labels match spec', () => {
  34  |     const labels = data.sortingOptions.map(o => o.label);
  35  |     expect(labels).toHaveLength(8);
  36  |     for (const expected of SORT_OPTIONS) {
  37  |       expect(labels, `Sort option "${expected}" missing`).toContain(expected);
  38  |     }
  39  |   });
  40  | 
  41  |   // ── PLP-108 / M-PLP-109 ──────────────────────────────────────────────────
  42  |   test('PLP-108/M-PLP-109 first sort option (default) is "Most Popular"', () => {
  43  |     expect(data.sortingOptions[0]?.label).toMatch(/most popular/i);
  44  |   });
  45  | 
  46  |   // ── PLP-109 / M-PLP-110 ──────────────────────────────────────────────────
  47  |   test('PLP-109/M-PLP-110 category refinement has 9 values matching spec', () => {
  48  |     const cgid = data.refinements.find(r => r.attributeId === 'cgid');
  49  |     expect(cgid, 'cgid refinement absent').toBeTruthy();
  50  |     const names = (cgid!.values ?? []).flatMap(v =>
  51  |       (v as any).values
  52  |         ? (v as any).values.map((c: { label: string }) => c.label)
  53  |         : [v.label]
  54  |     );
  55  |     for (const cat of CATEGORY_REFINEMENTS) {
  56  |       expect(names, `Refinement "${cat}" missing`).toContain(cat);
  57  |     }
  58  |   });
  59  | 
  60  |   // ── PLP-111 ───────────────────────────────────────────────────────────────
  61  |   test('PLP-111 availability refinement is present', () => {
  62  |     const avail = data.refinements.find(r => /availability|in.?stock/i.test(r.attributeId + r.label));
  63  |     expect(avail, 'availability refinement absent').toBeTruthy();
  64  |   });
  65  | 
  66  |   // ── PLP-112a ──────────────────────────────────────────────────────────────
  67  |   test('PLP-112a colour refinement group is present', () => {
  68  |     const colour = data.refinements.find(r => /color|colour/i.test(r.attributeId + r.label));
> 69  |     expect(colour, 'colour refinement absent').toBeTruthy();
      |                                                ^ Error: colour refinement absent
  70  |   });
  71  | 
  72  |   // ── PLP-112 / M-PLP-114 ──────────────────────────────────────────────────
  73  |   test('PLP-112/M-PLP-114 price refinement is present with bands', () => {
  74  |     const price = data.refinements.find(r => r.attributeId === 'price');
  75  |     expect(price, 'price refinement absent').toBeTruthy();
  76  |     expect((price!.values ?? []).length).toBeGreaterThanOrEqual(1);
  77  |   });
  78  | 
  79  |   // ── PLP-113 ───────────────────────────────────────────────────────────────
  80  |   test('PLP-113 price band hit counts: $0–$49.99 (4), $50–$99.99 (25), $100–$199.99 (7)', () => {
  81  |     const price  = data.refinements.find(r => r.attributeId === 'price');
  82  |     const values = price?.values ?? [];
  83  |     for (const band of WOMEN_PRICE_BANDS) {
  84  |       const found = values.find(v => v.label === band.label);
  85  |       expect(found, `Price band "${band.label}" missing`).toBeTruthy();
  86  |       expect(found!.hitCount).toBe(band.count);
  87  |     }
  88  |   });
  89  | 
  90  |   // ── PLP-114 / M-PLP-117 ──────────────────────────────────────────────────
  91  |   test('PLP-114/M-PLP-117 first page returns 12 product hits', () => {
  92  |     expect(data.hits).toHaveLength(12);
  93  |   });
  94  | 
  95  |   // ── PLP-115 / M-PLP-118 ──────────────────────────────────────────────────
  96  |   test('PLP-115/M-PLP-118 total exceeds one page (pagination required)', () => {
  97  |     expect(data.total).toBeGreaterThan(data.limit);
  98  |   });
  99  | });
  100 | 
```