# Market Street — QA Test Suite

Playwright test suite for the Market Street storefront (Harbourline Group replatform — Storefront Next).
Covers Release 1: **Home** and **Category Listing (PLP)** on desktop and mobile.

---

## Requirements

- Node.js 18 or higher
- npm 9 or higher

---

## Installation

```bash
npm ci
npx playwright install --with-deps chromium webkit
```

---

## Running Tests

### All tests (API + desktop + mobile)
```bash
npm test
```

### API tests only
```bash
npm run test:api
```

### Desktop tests only (Chrome 1280px)
```bash
npm run test:desktop
```

### Mobile tests only (WebKit / iPhone 12 375px)
```bash
npm run test:mobile
```

### Run a specific test file
```bash
npx playwright test tests/mobile/home.spec.ts
```

### Run a specific test by title
```bash
npx playwright test --grep "M-GLB-121"
```

### Run headed (watch the browser)
```bash
npm run test:headed
```

### Debug mode
```bash
npm run test:debug
```

---

## Viewing Test Reports

### Allure report (live)

The latest report is always available at:
**https://mansverma.github.io/amblique**

It is published automatically after every CI run on `main`.

### Run Allure report locally

```bash
npm run allure:report
```

Or separately:
```bash
npm run allure:generate   # builds the report from allure-results/
npm run allure:open       # opens it in the browser
```

### Playwright HTML report
```bash
npm run report
```

---

## Project Structure

```
tests/
  api/              # SCAPI layer tests (no browser)
    helpers/
      client.ts     # SFCC API client and auth helpers
  desktop/          # Desktop Chrome tests (1280px)
  mobile/           # Mobile WebKit tests (iPhone 12, 375px)
  fixtures/         # Shared test data (sort options, price bands, categories)
  helpers/          # Shared utilities (consent, animation)
playwright.config.ts
```

---

## CI / Slack Notifications

Tests run automatically on every push and pull request to `main` via GitHub Actions.

Results are posted to [#reg-amblique](https://mansworkspacegroup.slack.com/archives/C0BP9CK3QDD) after each run.

---

## Sandbox

Tests run against the SFCC sandbox:
```
https://marketstre1bd763e481216452.zzrf-045.my.commercecloud.salesforce.com
```

To run against a different environment:
```bash
BASE_URL=https://your-sandbox.commercecloud.salesforce.com npm test
```

No login or credentials are needed — the suite uses a guest SLAS token obtained automatically from the storefront on first load.

---

## Defect Report

See `DEFECT-REPORT.md` for the current list of known failures, their severity, and which are BM/catalog configuration tasks vs code defects.
