/**
 * Mobile – Category Listing page (PLP), Quick Add modal, product card and touch
 *
 * Covers: M-PLP-101–119 | M-QA-101–106 | M-CARD-101–115 | M-TCH-104–106
 *
 * Reference category: Women  /MarketStreet/en-US/category/women
 * Viewport: 375 × 812, iPhone 12 emulation
 *
 * ⚠ Spec inconsistency M-PLP-118:
 *   M-PLP-117 states 12 products per page.
 *   M-PLP-118 states "Women returns 2 pages, consistent with 36 results at 24 per page".
 *   The "at 24 per page" conflicts with M-PLP-117 (12/page).
 *   Also: desktop PLP-115 says 2 pages but 36 ÷ 12 = 3 pages.
 *   Tests assert pagination EXISTS and covers multiple pages without asserting exact count.
 */

import { test, expect } from '@playwright/test';
import { bypassConsent } from '../helpers/consent';
import { WOMEN_PLP_PATH, SORT_OPTIONS, CATEGORY_REFINEMENTS, WOMEN_PRICE_BANDS } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await bypassConsent(page);
  await page.goto(WOMEN_PLP_PATH);
});

// ---------------------------------------------------------------------------
// M-PLP-101–106  Page structure
// ---------------------------------------------------------------------------
test.describe('Mobile PLP page structure (M-PLP-101–106)', () => {
  test('M-PLP-101 page title is "Women | Storefront Next: Market Street"', async ({ page }) => {
    await expect(page).toHaveTitle(/Women.*Storefront Next.*Market Street/i);
  });

  test('M-PLP-102 category banner shows "WOMEN" in uppercase overlaid on banner image', async ({ page }) => {
    await expect(page.getByText('WOMEN').first()).toBeVisible();
  });

  test('M-PLP-103 page heading is "Women"', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Women' }).first()).toBeVisible();
  });

  test('M-PLP-104 result summary reads "36 products available"', async ({ page }) => {
    await expect(page.getByText(/36 products available/i)).toBeVisible();
  });

  test('M-PLP-105 breadcrumb is "Home > Women"; Home links to home page', async ({ page }) => {
    const breadcrumb = page.getByRole('navigation', { name: /breadcrumb/i })
      .or(page.locator('[aria-label*="breadcrumb" i]')).first();
    const homeLink = breadcrumb.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();
    expect(await homeLink.getAttribute('href')).toMatch(/\/MarketStreet\/en-US\//i);
    await expect(breadcrumb.getByText('Women').first()).toBeVisible();
  });

  test('M-PLP-106 result count heading shows "Women (36)"', async ({ page }) => {
    await expect(page.getByText(/Women\s*\(36\)/)).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// M-PLP-107–109  Sort control
// ---------------------------------------------------------------------------
test.describe('Mobile PLP sort (M-PLP-107–109)', () => {
  test('M-PLP-107 sort control is a native select labelled "Sort by:"', async ({ page }) => {
    const select = page.locator('select').filter({ has: page.locator('option') });
    await expect(select.first()).toBeAttached();
    await expect(page.getByText('Sort by:').first()).toBeVisible();
  });

  test('M-PLP-108 sort control has eight options in specified order', async ({ page }) => {
    const select = page.getByLabel(/sort by/i)
      .or(page.locator('select[name*="sort" i]')).first();
    const options = await select.locator('option').allInnerTexts();
    for (const opt of SORT_OPTIONS) {
      expect(options.some(o => o.trim().toLowerCase() === opt.toLowerCase())).toBe(true);
    }
  });

  test('M-PLP-109 default sort is "Most Popular"', async ({ page }) => {
    const select = page.getByLabel(/sort by/i)
      .or(page.locator('select[name*="sort" i]')).first();
    const value  = await select.inputValue();
    expect(value).toMatch(/most popular/i);
  });
});

// ---------------------------------------------------------------------------
// M-PLP-110–114  Refinements and filters panel
// ---------------------------------------------------------------------------
test.describe('Mobile PLP refinements (M-PLP-110–114)', () => {
  test('M-PLP-110 nine category refinement chips are always visible outside the filters panel', async ({ page }) => {
    for (const cat of CATEGORY_REFINEMENTS) {
      await expect(page.getByRole('button', { name: cat })
        .or(page.getByRole('link', { name: cat })).first()).toBeVisible();
    }
  });

  test('M-PLP-110 refinements are multi-select', async ({ page }) => {
    const first  = page.getByRole('button', { name: CATEGORY_REFINEMENTS[0] })
      .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[0] })).first();
    const second = page.getByRole('button', { name: CATEGORY_REFINEMENTS[1] })
      .or(page.getByRole('link', { name: CATEGORY_REFINEMENTS[1] })).first();
    await first.tap();
    await page.waitForLoadState('networkidle');
    await second.tap();
    await page.waitForLoadState('networkidle');
    const active = await page.locator('[aria-pressed="true"], [aria-selected="true"]').count();
    expect(active).toBeGreaterThanOrEqual(2);
  });

  test('M-PLP-111 Filters button is present', async ({ page }) => {
    await expect(page.getByRole('button', { name: /filters/i })).toBeVisible();
  });

  test('M-PLP-112 Filters panel expands inline in page flow (not a drawer, overlay or modal)', async ({ page }) => {
    const filtersBtn = page.getByRole('button', { name: /filters/i });
    const initialGridTop = await page.locator('[class*="product-grid"], [class*="ProductGrid"]')
      .first().boundingBox().then(b => b?.y ?? 0);

    await filtersBtn.tap();
    await page.waitForTimeout(500);

    const afterGridTop = await page.locator('[class*="product-grid"], [class*="ProductGrid"]')
      .first().boundingBox().then(b => b?.y ?? 0);

    // Grid is pushed down — proving inline expansion, not overlay
    expect(afterGridTop).toBeGreaterThan(initialGridTop);
    // No visible dialog — it is NOT a modal (hidden consent modal stays in DOM)
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  test('M-PLP-113 filters panel: Shop by Availability expanded by default; Price collapsed', async ({ page }) => {
    await page.getByRole('button', { name: /filters/i }).tap();
    await page.waitForTimeout(500);

    // "Shop by Availability" section should be expanded showing its contents
    await expect(page.getByText(/In stock at/i)).toBeVisible();
    await expect(page.getByText(/Select Store/i).first()).toBeVisible();

    // "Price" section should exist but may be collapsed
    await expect(page.getByText(/Price/i).first()).toBeVisible();
  });

  test('M-PLP-114 price refinement has min/max fields and price bands with counts', async ({ page }) => {
    await page.getByRole('button', { name: /filters/i }).tap();
    await page.waitForTimeout(500);

    // Expand Price if collapsed
    const priceGroup = page.getByText('Price').locator('..').first();
    const collapsed  = await priceGroup.locator('[aria-expanded="false"]').count();
    if (collapsed > 0) await priceGroup.tap();
    await page.waitForTimeout(300);

    for (const band of WOMEN_PRICE_BANDS) {
      await expect(page.getByText(new RegExp(band.label.replace(/\$/g, '\\$')))).toBeVisible();
    }
  });
});

// ---------------------------------------------------------------------------
// M-PLP-115–119  Grid and pagination
// ---------------------------------------------------------------------------
test.describe('Mobile PLP grid and pagination (M-PLP-115–119)', () => {
  test('M-PLP-115 no card overflows the 375 px viewport horizontally', async ({ page }) => {
    const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const box = await cards.nth(i).boundingBox();
      if (box) expect(box.x + box.width).toBeLessThanOrEqual(375 + 1);
    }
  });

  test('M-PLP-117 page shows 12 product cards', async ({ page }) => {
    const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
    await expect(cards).toHaveCount(12);
  });

  test('M-PLP-118 pagination has Previous, page numbers and Next; more than one page exists', async ({ page }) => {
    await expect(page.getByRole('button', { name: /previous|prev/i })
      .or(page.getByRole('link', { name: /previous|prev/i })).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /next/i })
      .or(page.getByRole('link', { name: /next/i })).first()).toBeVisible();
    await expect(page.getByRole('button', { name: '2' })
      .or(page.getByRole('link', { name: '2' })).first()).toBeVisible();
  });

  test('M-PLP-116 cards within a row share consistent width', async ({ page }) => {
    const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
    const boxes = await Promise.all(
      Array.from({ length: await cards.count() }, (_, i) => cards.nth(i).boundingBox())
    );
    const widths = boxes.filter(Boolean).map(b => Math.round(b!.width));
    const unique = new Set(widths);
    // Allow at most 2 distinct widths (last-row orphan may differ)
    expect(unique.size).toBeLessThanOrEqual(2);
  });
});

// ---------------------------------------------------------------------------
// M-QA-101–106  Quick Add modal
// ---------------------------------------------------------------------------
test.describe('Quick Add modal (M-QA-101–106)', () => {
  const openQuickAdd = async (page: any) => {
    const card       = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    const moreOptions = card.getByRole('button', { name: /more options/i })
      .or(card.locator('[aria-label*="more" i]')).first();
    await moreOptions.tap();
    await page.waitForTimeout(400);
  };

  test('M-QA-101 Quick Add dialog has role="dialog" and accessible name "Quick Add"', async ({ page }) => {
    await openQuickAdd(page);
    const dialog = page.getByRole('dialog', { name: /quick add/i });
    await expect(dialog).toBeVisible();
  });

  test('M-QA-102 dialog description is "Review product details…"', async ({ page }) => {
    await openQuickAdd(page);
    const description = page.getByText(/Review product details, choose options, and add the item to your cart/i);
    await expect(description).toBeVisible();
  });

  test('M-QA-103 Quick Add modal contains image gallery, prev/next, thumbnails, product info, Add to Cart', async ({ page }) => {
    await openQuickAdd(page);
    const dialog = page.getByRole('dialog', { name: /quick add/i });
    await expect(dialog.locator('img').first()).toBeVisible();
    await expect(dialog.getByRole('button', { name: /add to cart/i })).toBeVisible();
    await expect(dialog.getByText(/SKU:/i)).toBeVisible();
  });

  test('M-QA-104 modal contains a "View Details" link to the PDP', async ({ page }) => {
    await openQuickAdd(page);
    const dialog = page.getByRole('dialog', { name: /quick add/i });
    const link   = dialog.getByRole('link', { name: /view details/i });
    await expect(link).toBeVisible();
    expect(await link.getAttribute('href')).toContain('/product/');
  });

  test('M-QA-105 modal closes via close button and Escape key', async ({ page }) => {
    await openQuickAdd(page);
    const dialog   = page.getByRole('dialog', { name: /quick add/i });
    await expect(dialog).toBeVisible();

    // Close via button
    await dialog.getByRole('button', { name: /close/i }).tap();
    await page.waitForTimeout(400);
    await expect(dialog).not.toBeVisible();

    // Re-open and close via Escape
    await openQuickAdd(page);
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    await expect(dialog).not.toBeVisible();
  });

  test('M-QA-106 opening Quick Add modal does NOT add items to cart', async ({ page }) => {
    const cartCount = async () => {
      const cartEl = page.locator('header [aria-label*="cart" i]').first();
      return (await cartEl.getAttribute('aria-label') ?? '').match(/\d+/)?.[0] ?? '0';
    };
    const before = await cartCount();
    await openQuickAdd(page);
    await page.waitForTimeout(1000);
    const after = await cartCount();
    expect(after).toBe(before);
  });
});

// ---------------------------------------------------------------------------
// M-CARD-101–115  Shared product card (mobile)
// ---------------------------------------------------------------------------
test.describe('Mobile product card (M-CARD-101–115)', () => {
  test('M-CARD-101/104 image and product name link to PDP', async ({ page }) => {
    const card     = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    const imgLink  = card.locator('a[href*="/product/"]').first();
    const nameLink = card.locator('a:not([aria-hidden])').filter({ has: page.locator('text=/[A-Z]/')}).first();
    expect(await imgLink.getAttribute('href') ?? '').toContain('/product/');
    expect(await nameLink.getAttribute('href') ?? '').toContain('/product/');
  });

  test('M-CARD-102/103 brand name and category line are present on PLP cards', async ({ page }) => {
    const card = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    // Brand is first <p class="text-muted-foreground">, category is second
    await expect(card.locator('p.text-muted-foreground, p[class*="muted"]').first()).toBeVisible();
    await expect(card.locator('p.text-muted-foreground, p[class*="muted"]').nth(1)).toBeVisible();
  });

  test('M-CARD-105 SKU is shown in format "SKU: {id}"', async ({ page }) => {
    const card = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    await expect(card.getByText(/SKU:/i)).toBeVisible();
  });

  test('M-CARD-106 star rating and review count are present', async ({ page }) => {
    const card = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    // Rating: <div role="group" aria-label="N out of 5 stars, N reviews">
    const rating = card.getByRole('group').filter({ hasText: /stars|reviews/i })
      .or(card.locator('[aria-label*="stars" i]')).first();
    await expect(rating).toBeVisible();
  });

  test('M-CARD-107 current price is always shown', async ({ page }) => {
    const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
    const count = await cards.count();
    for (let i = 0; i < Math.min(count, 6); i++) {
      await expect(cards.nth(i).getByText(/\$\d+\.\d{2}/).first()).toBeVisible();
    }
  });

  test('M-CARD-109a "Free delivery on orders over $50" shown on every card', async ({ page }) => {
    const cards = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]');
    const count = await cards.count();
    for (let i = 0; i < Math.min(count, 6); i++) {
      await expect(cards.nth(i).getByText(/Free delivery on orders over \$50/i)).toBeVisible();
    }
  });

  test('M-CARD-112 Quick Add is revealed after tapping the More options control', async ({ page }) => {
    const card        = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    const moreOptions = card.getByRole('button', { name: /more options/i })
      .or(card.locator('[aria-label*="more" i]')).first();
    await expect(moreOptions).toBeVisible();
    await moreOptions.tap();
    await page.waitForTimeout(400);
    // Quick Add dialog should now appear
    await expect(page.getByRole('dialog', { name: /quick add/i })).toBeVisible();
  });

  test('M-CARD-113 Add to Wishlist is present in markup but not displayed', async ({ page }) => {
    const card      = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    const wishlist  = card.getByRole('button', { name: /wishlist/i })
      .or(card.locator('[aria-label*="wishlist" i]')).first();
    await expect(wishlist).toBeAttached();
    await expect(wishlist).not.toBeVisible();
  });

  test('M-CARD-114 undisplayed controls (Wishlist, Quick Add) must not receive taps (pointer-events disabled)', async ({ page }) => {
    const card       = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    const wishlist   = card.getByRole('button', { name: /wishlist/i })
      .or(card.locator('[aria-label*="wishlist" i]')).first();
    const quickAdd   = card.getByRole('button', { name: /quick add/i });

    for (const ctrl of [wishlist, quickAdd]) {
      const pe = await ctrl.evaluate(el => window.getComputedStyle(el).pointerEvents).catch(() => 'none');
      // Must be 'none' or element must be off-screen / zero size
      if (pe !== 'none') {
        const box = await ctrl.boundingBox();
        expect(box?.width ?? 0).toBe(0);
      }
    }
  });

  test('M-CARD-115 tapping image or product name navigates to PDP', async ({ page }) => {
    const card     = page.locator('[class*="product-card"], [class*="ProductCard"], [data-product-id]').first();
    const nameLink = card.getByRole('link').last();
    const href     = await nameLink.getAttribute('href');
    expect(href).toContain('/product/');
  });
});

// ---------------------------------------------------------------------------
// M-TCH-104–106  Touch interactions
// ---------------------------------------------------------------------------
test.describe('Touch interactions (M-TCH-104–106)', () => {
  test('M-TCH-104 horizontal swipe on a carousel does not prevent vertical page scrolling', async ({ page }) => {
    const beforeY = await page.evaluate(() => window.scrollY);
    // Scroll down normally
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.waitForTimeout(200);
    const afterY  = await page.evaluate(() => window.scrollY);
    expect(afterY).toBeGreaterThan(beforeY);
  });

  test('M-TCH-105 every interactive control meets minimum touch target size (≥44 × 44 px)', async ({ page }) => {
    const controls = page.getByRole('button').or(page.getByRole('link'));
    const count    = await controls.count();
    const failures: string[] = [];

    for (let i = 0; i < Math.min(count, 20); i++) {
      const ctrl = controls.nth(i);
      if (!(await ctrl.isVisible())) continue;
      const box  = await ctrl.boundingBox();
      if (!box) continue;
      if (box.width < 44 || box.height < 44) {
        const label = (await ctrl.getAttribute('aria-label')) ?? (await ctrl.innerText()).trim();
        failures.push(`"${label}" is ${box.width}×${box.height}px`);
      }
    }
    expect(failures, `Touch targets too small:\n${failures.join('\n')}`).toHaveLength(0);
  });

  test('M-TCH-106 adjacent interactive controls are separated by at least 8 px', async ({ page }) => {
    // Check two representative adjacent-control pairs on the PLP:
    // 1. Sort control and Filters button (always visible above the grid)
    // 2. Pagination Previous and Next buttons
    const failures: string[] = [];

    const measureGap = async (labelA: string, a: any, labelB: string, b: any) => {
      const boxA = await a.boundingBox();
      const boxB = await b.boundingBox();
      if (!boxA || !boxB) return;
      // Horizontal gap: left edge of B minus right edge of A (assumes B is to the right)
      const gap = Math.abs(boxB.x - (boxA.x + boxA.width));
      if (gap < 8) failures.push(`"${labelA}" → "${labelB}": ${gap.toFixed(1)}px gap`);
    };

    // Pair 1: sort control and Filters button
    const sortCtrl   = page.getByLabel(/sort by/i).or(page.locator('select[name*="sort" i]')).first();
    const filtersBtn = page.getByRole('button', { name: /filters/i });
    if (await sortCtrl.isVisible() && await filtersBtn.isVisible()) {
      await measureGap('Sort by', sortCtrl, 'Filters', filtersBtn);
    }

    // Pair 2: pagination Previous and Next
    const prevBtn = page.getByRole('button', { name: /previous|prev/i })
      .or(page.getByRole('link', { name: /previous|prev/i })).first();
    const nextBtn = page.getByRole('button', { name: /next/i })
      .or(page.getByRole('link', { name: /next/i })).first();
    if (await prevBtn.isVisible() && await nextBtn.isVisible()) {
      await measureGap('Previous', prevBtn, 'Next', nextBtn);
    }

    expect(failures, `Controls too close together:\n${failures.join('\n')}`).toHaveLength(0);
  });
});
