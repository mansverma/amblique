/**
 * API tests – Product card fields
 *
 * Covers: CARD-101/104, CARD-102, CARD-103, CARD-105, CARD-106, CARD-107,
 *         CARD-109a  + mobile equivalents M-CARD-101–107/109a
 */

import { test, expect } from '@playwright/test';
import { getGuestToken, searchProducts, getProduct, type ProductResponse } from './helpers/client';

test.describe('Product card API fields', () => {
  let token: string;
  let firstProductId: string;
  let allHitIds: string[];
  let product: ProductResponse;

  test.beforeAll(async ({ request }) => {
    token      = await getGuestToken(request);
    const data = await searchProducts(request, token, { refine: 'cgid=women', limit: 12 });
    allHitIds      = data.hits.map(h => h.productId);
    firstProductId = allHitIds[0];
    product        = await getProduct(request, token, firstProductId);
  });

  // ── CARD-101/104 / M-CARD-101/104 ────────────────────────────────────────
  test('CARD-101/104/M-CARD-101/104 product id forms a valid /product/{id} path', () => {
    expect(product.id).toBeTruthy();
    expect(`/MarketStreet/en-US/product/${product.id}`).toMatch(/\/product\/.+/);
  });

  // ── CARD-102 / M-CARD-102 ─────────────────────────────────────────────────
  test('CARD-102/M-CARD-102 brand field is present and non-empty', () => {
    expect(product.brand, 'brand field absent or empty').toBeTruthy();
    expect(typeof product.brand).toBe('string');
  });

  // ── CARD-103 / M-CARD-103 ─────────────────────────────────────────────────
  test('CARD-103/M-CARD-103 primary category is present', () => {
    expect(product.primaryCategoryId, 'primaryCategoryId absent').toBeTruthy();
  });

  // ── CARD-105 / M-CARD-105 ─────────────────────────────────────────────────
  test('CARD-105/M-CARD-105 product id is non-empty (rendered as "SKU: {id}")', () => {
    expect(product.id).toMatch(/\S+/);
  });

  // ── CARD-106 / M-CARD-106 ─────────────────────────────────────────────────
  test('CARD-106/M-CARD-106 rating and review count fields exist in catalog', () => {
    expect(Object.keys(product)).toEqual(expect.arrayContaining(['c_rating', 'c_reviewCount']));
  });

  // ── CARD-107 / M-CARD-107 ─────────────────────────────────────────────────
  test('CARD-107/M-CARD-107 price is a positive number', () => {
    expect(typeof product.price).toBe('number');
    expect(product.price!).toBeGreaterThan(0);
  });

  // ── CARD-109a / M-CARD-109a ───────────────────────────────────────────────
  test('CARD-109a/M-CARD-109a free delivery promotion exists on products', async ({ request }) => {
    // Check first 3 products; any one carrying the promo validates the setup.
    const sampleIds = allHitIds.slice(0, 3);
    let found = false;
    for (const id of sampleIds) {
      const p = await getProduct(request, token, id);
      const promos = p.productPromotions ?? [];
      if (promos.some(pr => /free.{0,10}deliver/i.test(pr.calloutMsg ?? ''))) {
        found = true;
        break;
      }
      if (p['c_freeDeliveryMessage'] != null || p['c_freeDelivery'] === true) {
        found = true;
        break;
      }
    }
    expect(found, 'No free delivery promotion found on any of the first 3 products').toBe(true);
  });
});
