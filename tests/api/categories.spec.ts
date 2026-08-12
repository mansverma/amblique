/**
 * API tests – Category / Navigation structure
 *
 * Covers: GLB-104, GLB-105, GLB-105a, GLB-105b,
 *         M-GLB-125, M-GLB-128, M-GLB-129, M-GLB-130,
 *         HOME-202/306, M-HOME-202/307
 */

import { test, expect } from '@playwright/test';
import { getGuestToken, getCategory } from './helpers/client';
import { WOMEN_SUBCATEGORIES, MEN_SUBCATEGORIES, KIDS_SUBCATEGORIES } from '../fixtures';

// ── GLB-104 / M-GLB-125 ───────────────────────────────────────────────────
test('GLB-104/M-GLB-125 new-arrivals category exists in catalog', async ({ request }) => {
  const token = await getGuestToken(request);
  const cat   = await getCategory(request, token, 'new-arrivals');
  expect(cat.id).toBe('new-arrivals');
});

// ── HOME-202 / M-HOME-202 ─────────────────────────────────────────────────
test('HOME-202/M-HOME-202 root category exists (target of "Shop all" link)', async ({ request }) => {
  const token = await getGuestToken(request);
  const cat   = await getCategory(request, token, 'root');
  expect(cat.id).toBe('root');
});

// ── HOME-306 / M-HOME-307 ─────────────────────────────────────────────────
test('HOME-306/M-HOME-307 Women, Men, Kids, New Arrivals categories all exist', async ({ request }) => {
  const token = await getGuestToken(request);
  for (const id of ['women', 'men', 'kids', 'new-arrivals']) {
    const cat = await getCategory(request, token, id);
    expect(cat.id, `category "${id}" not found`).toBe(id);
  }
});

// ── GLB-105 / M-GLB-128 ───────────────────────────────────────────────────
test.describe('GLB-105/M-GLB-128 Women subcategories', () => {
  let token: string;
  let womenCat: Awaited<ReturnType<typeof getCategory>>;

  test.beforeAll(async ({ request }) => {
    token    = await getGuestToken(request);
    womenCat = await getCategory(request, token, 'women');
  });

  test('has exactly 9 subcategories', () => {
    expect((womenCat.categories ?? [])).toHaveLength(9);
  });

  test('subcategory names match spec list', () => {
    const names = (womenCat.categories ?? []).map(c => c.name);
    for (const sub of WOMEN_SUBCATEGORIES) {
      expect(names, `"${sub}" missing from Women subcategories`).toContain(sub);
    }
  });

  test('subcategory IDs follow "womens-*" href pattern', () => {
    for (const sub of (womenCat.categories ?? [])) {
      expect(sub.id).toMatch(/^womens-/);
    }
  });
});

// ── GLB-105a / M-GLB-129 ──────────────────────────────────────────────────
test.describe('GLB-105a/M-GLB-129 Men subcategories', () => {
  let token: string;
  let menCat: Awaited<ReturnType<typeof getCategory>>;

  test.beforeAll(async ({ request }) => {
    token  = await getGuestToken(request);
    menCat = await getCategory(request, token, 'men');
  });

  test('has exactly 9 subcategories', () => {
    expect((menCat.categories ?? [])).toHaveLength(9);
  });

  test('subcategory names match spec list', () => {
    const names = (menCat.categories ?? []).map(c => c.name);
    for (const sub of MEN_SUBCATEGORIES) {
      expect(names, `"${sub}" missing from Men subcategories`).toContain(sub);
    }
  });

  test('subcategory IDs follow "mens-*" href pattern', () => {
    for (const sub of (menCat.categories ?? [])) {
      expect(sub.id).toMatch(/^mens-/);
    }
  });
});

// ── GLB-105b / M-GLB-130 ──────────────────────────────────────────────────
test.describe('GLB-105b/M-GLB-130 Kids subcategories', () => {
  let token: string;
  let kidsCat: Awaited<ReturnType<typeof getCategory>>;

  test.beforeAll(async ({ request }) => {
    token   = await getGuestToken(request);
    kidsCat = await getCategory(request, token, 'kids');
  });

  test('has exactly 6 subcategories', () => {
    expect((kidsCat.categories ?? [])).toHaveLength(6);
  });

  test('subcategory names match spec list', () => {
    const names = (kidsCat.categories ?? []).map(c => c.name);
    for (const sub of KIDS_SUBCATEGORIES) {
      expect(names, `"${sub}" missing from Kids subcategories`).toContain(sub);
    }
  });

  test('subcategory IDs follow "kids-*" href pattern', () => {
    for (const sub of (kidsCat.categories ?? [])) {
      expect(sub.id).toMatch(/^kids-/);
    }
  });
});
