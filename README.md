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

### Playwright HTML report
Opens automatically after a run, or manually:
```bash
npm run report
```
Report is saved to `playwright-report/index.html`.

### Allure report

Generate and open:
```bash
npm run allure:report
```

Or separately:
```bash
npm run allure:generate   # builds the report from allure-results/
npm run allure:open       # opens it in the browser
```

Report is saved to `allure-report/index.html`.

> **Note:** Allure CLI must be available. It is included as a dev dependency via `allure-commandline` — no separate install needed.

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

Results are posted to the **#reg-amblique** Slack channel after each run.

### Setting up the Slack webhook (one-time)

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and open your **GitHub CI** app
2. Go to **Incoming Webhooks** → **Add New Webhook to Workspace**
3. Select **#reg-amblique** → **Allow**
4. Copy the webhook URL
5. In GitHub: go to **Settings → Secrets and variables → Actions → New repository secret**
6. Name: `SLACK_WEBHOOK_URL` — paste the URL → **Add secret**

Once the secret is set, every CI run will post a pass/fail notification with a direct link to the GitHub Actions run.

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
