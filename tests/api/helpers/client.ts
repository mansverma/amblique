/**
 * SFCC Shopper API (SCAPI) client for API-layer tests.
 *
 * Authentication strategy: fetch the storefront home page once per worker to
 * obtain the guest access token that SLAS issues automatically (cc-at_MarketStreet
 * cookie). No external credentials or env vars needed — the sandbox is public.
 *
 * Optional env overrides:
 *   BASE_URL            storefront hostname (defaults to sandbox URL)
 *   SCAPI_SHORT_CODE    e.g. "kv7kzm78"   (defaults discovered from sandbox)
 *   SCAPI_ORG_ID        e.g. "f_ecom_zzrf_045"
 *   SCAPI_SITE_ID       e.g. "MarketStreet"
 */

import { type APIRequestContext } from '@playwright/test';

export const STOREFRONT_BASE =
  process.env.BASE_URL ??
  'https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com';

const SHORT_CODE = process.env.SCAPI_SHORT_CODE ?? 'kv7kzm78';
const ORG_ID     = process.env.SCAPI_ORG_ID     ?? 'f_ecom_zzrf_045';
const SITE_ID    = process.env.SCAPI_SITE_ID     ?? 'MarketStreet';

export const SCAPI_BASE = `https://${SHORT_CODE}.api.commercecloud.salesforce.com`;

/** Fetch the guest SLAS access token by hitting the storefront home page. */
export async function getGuestToken(request: APIRequestContext): Promise<string> {
  const res = await request.get(`${STOREFRONT_BASE}/MarketStreet/en-US/`, {
    maxRedirects: 5,
  });
  // The cc-at cookie is the SLAS Bearer token
  const setCookie = res.headers()['set-cookie'] ?? '';
  const match = setCookie.match(/cc-at_MarketStreet=([^;]+)/);
  if (!match) throw new Error('Could not obtain SLAS token from storefront response');
  return match[1];
}

/** Build common query params for SCAPI calls */
function qs(extra: Record<string, string | number> = {}) {
  return { siteId: SITE_ID, ...extra };
}

// ---------------------------------------------------------------------------
// Typed response shapes (partial — only fields the tests assert on)
// ---------------------------------------------------------------------------

export interface SortingOption { id: string; label: string }

export interface RefinementValue {
  label:    string;
  value:    string;
  hitCount: number;
}

export interface Refinement {
  attributeId: string;
  label:       string;
  values?:     RefinementValue[];
}

export interface ProductHit {
  productId:   string;
  productName: string;
  price:       number;
}

export interface SearchResponse {
  total:          number;
  limit:          number;
  hits:           ProductHit[];
  sortingOptions: SortingOption[];
  refinements:    Refinement[];
}

export interface CategorySlim {
  id:          string;
  name:        string;
  categories?: CategorySlim[];
}

export interface ProductResponse {
  id:                 string;
  name:               string;
  brand?:             string;
  price?:             number;
  primaryCategoryId?: string;
  c_rating?:          number | null;
  c_reviewCount?:     number | null;
  productPromotions?: Array<{ calloutMsg?: string }>;
  [key: string]: unknown;
}

export interface BasketResponse {
  basketId:      string;
  productItems?: Array<{ productId: string }>;
}

// ---------------------------------------------------------------------------
// API wrappers
// ---------------------------------------------------------------------------

export async function searchProducts(
  request: APIRequestContext,
  token:   string,
  extra:   Record<string, string | number> = {},
): Promise<SearchResponse> {
  const res = await request.get(
    `${SCAPI_BASE}/search/shopper-search/v1/organizations/${ORG_ID}/product-search`,
    { params: qs(extra), headers: { Authorization: `Bearer ${token}` } },
  );
  return res.json() as Promise<SearchResponse>;
}

export async function getCategory(
  request: APIRequestContext,
  token:   string,
  id:      string,
): Promise<CategorySlim> {
  const res = await request.get(
    `${SCAPI_BASE}/product/shopper-products/v1/organizations/${ORG_ID}/categories/${id}`,
    { params: qs({ levels: 2 }), headers: { Authorization: `Bearer ${token}` } },
  );
  return res.json() as Promise<CategorySlim>;
}

export async function getProduct(
  request: APIRequestContext,
  token:   string,
  id:      string,
): Promise<ProductResponse> {
  const res = await request.get(
    `${SCAPI_BASE}/product/shopper-products/v1/organizations/${ORG_ID}/products/${id}`,
    {
      params:  qs({ allImages: 'false' }),
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return res.json() as Promise<ProductResponse>;
}

export async function createBasket(
  request: APIRequestContext,
  token:   string,
): Promise<BasketResponse> {
  const res = await request.post(
    `${SCAPI_BASE}/checkout/shopper-baskets/v1/organizations/${ORG_ID}/baskets`,
    { params: qs(), headers: { Authorization: `Bearer ${token}` }, data: {} },
  );
  return res.json() as Promise<BasketResponse>;
}

export async function getBasket(
  request: APIRequestContext,
  token:   string,
  basketId: string,
): Promise<BasketResponse> {
  const res = await request.get(
    `${SCAPI_BASE}/checkout/shopper-baskets/v1/organizations/${ORG_ID}/baskets/${basketId}`,
    { params: qs(), headers: { Authorization: `Bearer ${token}` } },
  );
  return res.json() as Promise<BasketResponse>;
}

export async function deleteBasket(
  request: APIRequestContext,
  token:   string,
  basketId: string,
): Promise<void> {
  await request.delete(
    `${SCAPI_BASE}/checkout/shopper-baskets/v1/organizations/${ORG_ID}/baskets/${basketId}`,
    { params: qs(), headers: { Authorization: `Bearer ${token}` } },
  ).catch(() => { /* best-effort cleanup */ });
}
