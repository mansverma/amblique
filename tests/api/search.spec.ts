/**
 * API tests – Product Search / Catalog Data
 *
 * Covers: PLP-103, PLP-105, PLP-106/107, PLP-108, PLP-109,
 *         PLP-111, PLP-112, PLP-112a, PLP-113, PLP-114, PLP-115
 *         + mobile equivalents M-PLP-104/106/107/108/109/117/118
 */

import { test, expect } from '@playwright/test';
import { getGuestToken, searchProducts } from './helpers/client';
import { SORT_OPTIONS, WOMEN_PRICE_BANDS, CATEGORY_REFINEMENTS } from '../fixtures';

test.describe('Search API – Women category', () => {
  let token: string;
  let data: Awaited<ReturnType<typeof searchProducts>>;

  test.beforeAll(async ({ request }) => {
    token = await getGuestToken(request);
    data  = await searchProducts(request, token, { refine: 'cgid=women', limit: 12 });
  });

  // ── PLP-103 / M-PLP-104 ──────────────────────────────────────────────────
  test('PLP-103/M-PLP-104 Women category returns exactly 36 products', () => {
    expect(data.total).toBe(36);
  });

  // ── PLP-105 / M-PLP-106 ──────────────────────────────────────────────────
  test('PLP-105/M-PLP-106 total is 36 (drives "Women (36)" heading)', () => {
    expect(data.total).toBe(36);
  });

  // ── PLP-106/107 / M-PLP-107/108 ──────────────────────────────────────────
  test('PLP-106/107/M-PLP-107/108 sort options: eight present, labels match spec', () => {
    const labels = data.sortingOptions.map(o => o.label);
    expect(labels).toHaveLength(8);
    for (const expected of SORT_OPTIONS) {
      expect(labels, `Sort option "${expected}" missing`).toContain(expected);
    }
  });

  // ── PLP-108 / M-PLP-109 ──────────────────────────────────────────────────
  test('PLP-108/M-PLP-109 first sort option (default) is "Most Popular"', () => {
    expect(data.sortingOptions[0]?.label).toMatch(/most popular/i);
  });

  // ── PLP-109 / M-PLP-110 ──────────────────────────────────────────────────
  test('PLP-109/M-PLP-110 category refinement has 9 values matching spec', () => {
    const cgid = data.refinements.find(r => r.attributeId === 'cgid');
    expect(cgid, 'cgid refinement absent').toBeTruthy();
    const names = (cgid!.values ?? []).flatMap(v =>
      (v as any).values
        ? (v as any).values.map((c: { label: string }) => c.label)
        : [v.label]
    );
    for (const cat of CATEGORY_REFINEMENTS) {
      expect(names, `Refinement "${cat}" missing`).toContain(cat);
    }
  });

  // ── PLP-111 ───────────────────────────────────────────────────────────────
  test('PLP-111 availability refinement is present', () => {
    const avail = data.refinements.find(r => /availability|in.?stock/i.test(r.attributeId + r.label));
    expect(avail, 'availability refinement absent').toBeTruthy();
  });

  // ── PLP-112a ──────────────────────────────────────────────────────────────
  test('PLP-112a colour refinement group is present', () => {
    const colour = data.refinements.find(r => /color|colour/i.test(r.attributeId + r.label));
    expect(colour, 'colour refinement absent').toBeTruthy();
  });

  // ── PLP-112 / M-PLP-114 ──────────────────────────────────────────────────
  test('PLP-112/M-PLP-114 price refinement is present with bands', () => {
    const price = data.refinements.find(r => r.attributeId === 'price');
    expect(price, 'price refinement absent').toBeTruthy();
    expect((price!.values ?? []).length).toBeGreaterThanOrEqual(1);
  });

  // ── PLP-113 ───────────────────────────────────────────────────────────────
  test('PLP-113 price band hit counts: $0–$49.99 (4), $50–$99.99 (25), $100–$199.99 (7)', () => {
    const price  = data.refinements.find(r => r.attributeId === 'price');
    const values = price?.values ?? [];
    for (const band of WOMEN_PRICE_BANDS) {
      const found = values.find(v => v.label === band.label);
      expect(found, `Price band "${band.label}" missing`).toBeTruthy();
      expect(found!.hitCount).toBe(band.count);
    }
  });

  // ── PLP-114 / M-PLP-117 ──────────────────────────────────────────────────
  test('PLP-114/M-PLP-117 first page returns 12 product hits', () => {
    expect(data.hits).toHaveLength(12);
  });

  // ── PLP-115 / M-PLP-118 ──────────────────────────────────────────────────
  test('PLP-115/M-PLP-118 total exceeds one page (pagination required)', () => {
    expect(data.total).toBeGreaterThan(data.limit);
  });
});
