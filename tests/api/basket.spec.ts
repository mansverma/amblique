/**
 * API tests – Cart / basket integrity
 *
 * Covers: M-QA-106 "opening Quick Add modal does NOT add items to cart"
 *
 * Validates at the API layer that: (a) a fresh guest basket starts empty,
 * and (b) read-only product/search calls do not mutate basket state.
 */

import { test, expect } from '@playwright/test';
import {
  getGuestToken,
  createBasket,
  getBasket,
  searchProducts,
  deleteBasket,
} from './helpers/client';

test.describe('Basket integrity – M-QA-106', () => {
  let token:    string;
  let basketId: string;

  test.beforeAll(async ({ request }) => {
    token    = await getGuestToken(request);
    const b  = await createBasket(request, token);
    basketId = b.basketId;
  });

  test('M-QA-106 newly created guest basket contains zero product items', async ({ request }) => {
    const basket = await getBasket(request, token, basketId);
    expect((basket.productItems ?? [])).toHaveLength(0);
  });

  test('M-QA-106 basket remains empty after read-only product search (no implicit add)', async ({ request }) => {
    // Simulate what the Quick Add modal does: search + product lookup.
    await searchProducts(request, token, { refine: 'cgid=women', limit: 1 });
    const basket = await getBasket(request, token, basketId);
    expect((basket.productItems ?? [])).toHaveLength(0);
  });

  test.afterAll(async ({ request }) => {
    await deleteBasket(request, token, basketId);
  });
});
