/**
 * API tests – Route / link validity (HTTP HEAD checks)
 *
 * Covers: GLB-108, GLB-109, HOME-107, M-GLB-105, M-GLB-106,
 *         M-HOME-106, M-PLP-101
 *
 * These are sub-second checks that every spec-mandated URL resolves
 * to a non-error HTTP status, without loading a browser.
 *
 * 200 = page exists.  302/301 = redirect (still valid — the browser follows it).
 * 4xx/5xx = broken link → test fails.
 */

import { test, expect } from '@playwright/test';
import {
  HOME_PATH,
  LOGIN_PATH,
  WISHLIST_PATH,
  WOMEN_PLP_PATH,
} from '../fixtures';

const BASE_URL =
  process.env.BASE_URL ??
  'https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com';

function url(path: string) {
  return `${BASE_URL}${path}`;
}

async function head(request: import('@playwright/test').APIRequestContext, path: string) {
  // Use GET with maxRedirects to handle 302→final URL.
  const res = await request.get(url(path), { maxRedirects: 5 });
  return res.status();
}

// ── GLB-108 / M-GLB-105 ───────────────────────────────────────────────────
test('GLB-108/M-GLB-105 /login route returns non-error status', async ({ request }) => {
  const status = await head(request, LOGIN_PATH);
  expect(status).toBeLessThan(400);
});

// ── GLB-109 / M-GLB-106 ───────────────────────────────────────────────────
test('GLB-109/M-GLB-106 /wishlist route returns non-error status', async ({ request }) => {
  const status = await head(request, WISHLIST_PATH);
  expect(status).toBeLessThan(400);
});

// ── HOME-107 / M-HOME-106 – carousel CTA target ───────────────────────────
test('HOME-107/M-HOME-106 /category/root route returns non-error status', async ({ request }) => {
  const status = await head(request, '/MarketStreet/en-US/category/root');
  expect(status).toBeLessThan(400);
});

// ── HOME-306 / M-HOME-307 – Style for Real Life tile targets ──────────────
test('HOME-306/M-HOME-307 /category/women route returns non-error status', async ({ request }) => {
  expect(await head(request, '/MarketStreet/en-US/category/women')).toBeLessThan(400);
});

test('HOME-306/M-HOME-307 /category/men route returns non-error status', async ({ request }) => {
  expect(await head(request, '/MarketStreet/en-US/category/men')).toBeLessThan(400);
});

test('HOME-306/M-HOME-307 /category/kids route returns non-error status', async ({ request }) => {
  expect(await head(request, '/MarketStreet/en-US/category/kids')).toBeLessThan(400);
});

test('GLB-104/M-GLB-125 /category/new-arrivals route returns non-error status', async ({ request }) => {
  expect(await head(request, '/MarketStreet/en-US/category/new-arrivals')).toBeLessThan(400);
});

// ── M-PLP-101 – page title ────────────────────────────────────────────────
test('M-PLP-101 Women PLP HTML response contains the correct <title>', async ({ request }) => {
  const res  = await request.get(url(WOMEN_PLP_PATH), { maxRedirects: 5 });
  const html = await res.text();
  expect(html).toMatch(/Women\s*\|.*Market Street/i);
});

// ── HOME – home route ─────────────────────────────────────────────────────
test('Home route returns non-error status', async ({ request }) => {
  expect(await head(request, HOME_PATH)).toBeLessThan(400);
});
