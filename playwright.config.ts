import { defineConfig, devices } from '@playwright/test';

/**
 * Set BASE_URL to the sandbox hostname, e.g.:
 *   BASE_URL=https://[sandbox].commercecloud.salesforce.com npx playwright test
 *
 * Page paths (/MarketStreet/en-US/ etc.) are appended by each test.
 */
const BASE_URL = process.env.BASE_URL ?? 'https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
    [
      'allure-playwright',
      {
        resultsDir:  'allure-results',
        detail:      true,
        suiteTitle:  true,
      },
    ],
  ],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    /* Consent cookie pre-set so the modal does not interrupt test runs.
       Tests that specifically validate the consent modal clear this first. */
    storageState: undefined,
  },

  projects: [
    // ------------------------------------------------------------------- api
    // No browser — uses Playwright's request fixture only.
    // Set SFCC_CLIENT_ID and optionally SFCC_API_VERSION before running.
    {
      name: 'api',
      use: {
        baseURL: BASE_URL,
        extraHTTPHeaders: { Accept: 'application/json' },
      },
      testMatch: '**/api/**/*.spec.ts',
    },
    // ------------------------------------------------------------------ desktop
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 },
        hasTouch: false,
        isMobile: false,
      },
      testMatch: '**/desktop/**/*.spec.ts',
    },
    // ------------------------------------------------------------------- mobile (WebKit)
    {
      name: 'mobile',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 375, height: 812 },
        hasTouch: true,
        isMobile: true,
        /* Real device emulation – chosen over a physical device because it gives
           deterministic viewport geometry and eliminates device-lab scheduling.
           The tradeoff is that OS-level rendering differences (font smoothing,
           scroll momentum) are not captured; those need a real-device spot-check
           before release. */
      },
      testMatch: '**/mobile/**/*.spec.ts',
    },
  ],
});
