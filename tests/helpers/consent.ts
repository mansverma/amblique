/**
 * Tracking consent modal helpers (ENV-09 / M-ENV-09).
 *
 * Spec: modal is presented on first visit with Accept, Decline and Close controls.
 *
 * Two modes:
 *   dismissConsent  – accept and continue (used by most tests)
 *   bypassConsent   – inject a storage flag before navigation so the modal
 *                     never appears (faster; used when modal itself is not under test)
 */

import { type Page } from '@playwright/test';

/**
 * Pre-set consent acceptance so the modal is skipped entirely.
 * The app checks for the dw_dnt cookie (set to "0" when the user accepts
 * tracking consent). Setting it before navigation suppresses the modal.
 */
export async function bypassConsent(page: Page): Promise<void> {
  const baseURL =
    process.env.BASE_URL ??
    'https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com';
  const { hostname } = new URL(baseURL);
  await page.context().addCookies([
    { name: 'dw_dnt', value: '0', domain: hostname, path: '/' },
  ]);
}

/**
 * Verify the consent modal has all three required controls (ENV-09 / M-ENV-09).
 * Returns the modal locator for further assertions.
 */
export async function assertConsentModalControls(page: Page) {
  const modal = page
    .locator('[role="dialog"]')
    .filter({ hasText: /consent|cookie|tracking/i })
    .first();

  await modal.waitFor({ state: 'visible', timeout: 8000 });

  const accept = modal.getByRole('button', { name: /accept/i });
  const decline = modal.getByRole('button', { name: /decline/i });
  // Close may be a button or an × link
  const close = modal
    .getByRole('button', { name: /close/i })
    .or(modal.locator('[aria-label="Close"]'));

  return { modal, accept, decline, close };
}
