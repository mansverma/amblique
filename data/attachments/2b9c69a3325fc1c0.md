# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/search.spec.ts >> Search API – Women category >> PLP-112a colour refinement group is present
- Location: tests/api/search.spec.ts:67:7

# Error details

```
Error: Could not obtain SLAS token from storefront response
```

# Test source

```ts
  1   | /**
  2   |  * SFCC Shopper API (SCAPI) client for API-layer tests.
  3   |  *
  4   |  * Authentication strategy: fetch the storefront home page once per worker to
  5   |  * obtain the guest access token that SLAS issues automatically (cc-at_MarketStreet
  6   |  * cookie). No external credentials or env vars needed — the sandbox is public.
  7   |  *
  8   |  * Optional env overrides:
  9   |  *   BASE_URL            storefront hostname (defaults to sandbox URL)
  10  |  *   SCAPI_SHORT_CODE    e.g. "kv7kzm78"   (defaults discovered from sandbox)
  11  |  *   SCAPI_ORG_ID        e.g. "f_ecom_zzrf_045"
  12  |  *   SCAPI_SITE_ID       e.g. "MarketStreet"
  13  |  */
  14  | 
  15  | import { type APIRequestContext } from '@playwright/test';
  16  | 
  17  | export const STOREFRONT_BASE =
  18  |   process.env.BASE_URL ??
  19  |   'https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com';
  20  | 
  21  | const SHORT_CODE = process.env.SCAPI_SHORT_CODE ?? 'kv7kzm78';
  22  | const ORG_ID     = process.env.SCAPI_ORG_ID     ?? 'f_ecom_zzrf_045';
  23  | const SITE_ID    = process.env.SCAPI_SITE_ID     ?? 'MarketStreet';
  24  | 
  25  | export const SCAPI_BASE = `https://${SHORT_CODE}.api.commercecloud.salesforce.com`;
  26  | 
  27  | /** Fetch the guest SLAS access token by hitting the storefront home page. */
  28  | export async function getGuestToken(request: APIRequestContext): Promise<string> {
  29  |   const res = await request.get(`${STOREFRONT_BASE}/MarketStreet/en-US/`, {
  30  |     maxRedirects: 5,
  31  |   });
  32  |   // The cc-at cookie is the SLAS Bearer token
  33  |   const setCookie = res.headers()['set-cookie'] ?? '';
  34  |   const match = setCookie.match(/cc-at_MarketStreet=([^;]+)/);
> 35  |   if (!match) throw new Error('Could not obtain SLAS token from storefront response');
      |                     ^ Error: Could not obtain SLAS token from storefront response
  36  |   return match[1];
  37  | }
  38  | 
  39  | /** Build common query params for SCAPI calls */
  40  | function qs(extra: Record<string, string | number> = {}) {
  41  |   return { siteId: SITE_ID, ...extra };
  42  | }
  43  | 
  44  | // ---------------------------------------------------------------------------
  45  | // Typed response shapes (partial — only fields the tests assert on)
  46  | // ---------------------------------------------------------------------------
  47  | 
  48  | export interface SortingOption { id: string; label: string }
  49  | 
  50  | export interface RefinementValue {
  51  |   label:    string;
  52  |   value:    string;
  53  |   hitCount: number;
  54  | }
  55  | 
  56  | export interface Refinement {
  57  |   attributeId: string;
  58  |   label:       string;
  59  |   values?:     RefinementValue[];
  60  | }
  61  | 
  62  | export interface ProductHit {
  63  |   productId:   string;
  64  |   productName: string;
  65  |   price:       number;
  66  | }
  67  | 
  68  | export interface SearchResponse {
  69  |   total:          number;
  70  |   limit:          number;
  71  |   hits:           ProductHit[];
  72  |   sortingOptions: SortingOption[];
  73  |   refinements:    Refinement[];
  74  | }
  75  | 
  76  | export interface CategorySlim {
  77  |   id:          string;
  78  |   name:        string;
  79  |   categories?: CategorySlim[];
  80  | }
  81  | 
  82  | export interface ProductResponse {
  83  |   id:                 string;
  84  |   name:               string;
  85  |   brand?:             string;
  86  |   price?:             number;
  87  |   primaryCategoryId?: string;
  88  |   c_rating?:          number | null;
  89  |   c_reviewCount?:     number | null;
  90  |   productPromotions?: Array<{ calloutMsg?: string }>;
  91  |   [key: string]: unknown;
  92  | }
  93  | 
  94  | export interface BasketResponse {
  95  |   basketId:      string;
  96  |   productItems?: Array<{ productId: string }>;
  97  | }
  98  | 
  99  | // ---------------------------------------------------------------------------
  100 | // API wrappers
  101 | // ---------------------------------------------------------------------------
  102 | 
  103 | export async function searchProducts(
  104 |   request: APIRequestContext,
  105 |   token:   string,
  106 |   extra:   Record<string, string | number> = {},
  107 | ): Promise<SearchResponse> {
  108 |   const res = await request.get(
  109 |     `${SCAPI_BASE}/search/shopper-search/v1/organizations/${ORG_ID}/product-search`,
  110 |     { params: qs(extra), headers: { Authorization: `Bearer ${token}` } },
  111 |   );
  112 |   return res.json() as Promise<SearchResponse>;
  113 | }
  114 | 
  115 | export async function getCategory(
  116 |   request: APIRequestContext,
  117 |   token:   string,
  118 |   id:      string,
  119 | ): Promise<CategorySlim> {
  120 |   const res = await request.get(
  121 |     `${SCAPI_BASE}/product/shopper-products/v1/organizations/${ORG_ID}/categories/${id}`,
  122 |     { params: qs({ levels: 2 }), headers: { Authorization: `Bearer ${token}` } },
  123 |   );
  124 |   return res.json() as Promise<CategorySlim>;
  125 | }
  126 | 
  127 | export async function getProduct(
  128 |   request: APIRequestContext,
  129 |   token:   string,
  130 |   id:      string,
  131 | ): Promise<ProductResponse> {
  132 |   const res = await request.get(
  133 |     `${SCAPI_BASE}/product/shopper-products/v1/organizations/${ORG_ID}/products/${id}`,
  134 |     {
  135 |       params:  qs({ allImages: 'false' }),
```