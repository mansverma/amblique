# QA Strategy — Market Street Storefront Replatform
## Release 1 · Home & Category Listing · August 2026

---

## 3.1 Coverage and execution matrix

> One table covering all six Harbourline storefronts, brand/market dimension,
> device/browser dimension, accessibility, performance, automation target
> and CI/CD placement.

| Area | Market Street AU | Market Street NZ | Fielder & Co AU | Fielder & Co NZ | Poppet AU | Runmark AU | Execution method | CI/CD trigger |
|---|---|---|---|---|---|---|---|---|
| **Global header** (logo, nav, search, cart) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright – Chrome desktop + iPhone 12 | PR gate + nightly |
| **Home – Hero carousel** (slides, CTAs, auto-advance, indicators) | Auto ✓ | Smoke only¹ | Brand-specific² | Brand-specific² | Brand-specific² | Brand-specific² | Playwright | PR gate + nightly |
| **Home – Featured Products carousel** | Auto ✓ | Smoke only¹ | Brand-specific² | Brand-specific² | Brand-specific² | Brand-specific² | Playwright | PR gate + nightly |
| **Home – Category tiles & animations** (HOME-308 scale + Shop Now) | Auto ✓ | Smoke only¹ | Brand-specific² | Brand-specific² | n/a | n/a | Playwright + CSS transition assertions | PR gate |
| **Home – Collection banners** | Auto ✓ | Smoke only¹ | Brand-specific² | Brand-specific² | n/a | n/a | Playwright | PR gate + nightly |
| **Mobile collapsed nav** (accordion, subcategories, chevrons) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright – iPhone 12 | PR gate + nightly |
| **PLP structure** (banner, breadcrumb, result count, heading) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright – both viewports | PR gate + nightly |
| **PLP sort control** (options, default) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright | PR gate + nightly |
| **PLP refinements** (chips, filters panel, Shop by Availability, Price, Colour) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright | PR gate + nightly |
| **PLP pagination** | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright | PR gate + nightly |
| **PLP grid overflow** (M-ENV-05) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright – 375 px | PR gate |
| **Product card** (CARD/M-CARD all fields) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright – both viewports | PR gate + nightly |
| **Card hover animation** (CARD-114, desktop only) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright CSS assertions | PR gate |
| **Quick Add modal** (M-QA-101–106, mobile) | Auto ✓ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | Playwright – iPhone 12 | PR gate + nightly |
| **Touch gestures** (swipe, tap targets, target spacing) | Auto ✓ (M-TCH-101–106) | Spot-check | Spot-check | Spot-check | Spot-check | Spot-check | Playwright emulation for tap-target size; real-device spot-check for momentum/scroll feel | Pre-release |
| **Consent modal** (ENV-09 / M-ENV-09) | Auto ✓ | Auto ✓ | Auto ✓ | Auto ✓ | Auto ✓ | Auto ✓ | Playwright (fresh browser context) | PR gate + nightly |
| **Visual design** (colour, typography, spacing) | Not automated | Not automated | Not automated | Not automated | Not automated | Not automated | Manual spot-check against Figma (desktop 1536 px + mobile 375 px) | Pre-release human sign-off |
| **Navigation hover treatment** (GLB-105c colour changes) | Not automated | Not automated | Not automated | Not automated | Not automated | Not automated | Manual spot-check | Pre-release |
| **Accessibility** | Auto – axe-core on every page³ | Smoke only¹ | Auto ✓ | Smoke only¹ | Auto ✓ | Auto ✓ | @axe-core/playwright on Home + PLP; NVDA + JAWS manual for focus order, live regions | PR gate (axe); pre-release (manual) |
| **Performance** | Spot-check | Spot-check | Spot-check | Spot-check | Spot-check | Spot-check | Lighthouse CLI (not in PR gate — too slow and environment-dependent) | Pre-release pipeline stage |
| **Cross-browser** (Safari, Firefox, Edge) | Spot-check | Spot-check | Spot-check | Spot-check | Spot-check | Spot-check | Playwright project per browser — run weekly, not on every PR | Weekly scheduled run |

**Legend:** Auto ✓ = full automated coverage · Smoke only = subset of critical-path checks · Spot-check = human review pre-release · Brand-specific = test data differs; shared framework, separate data fixtures

---

### Footnotes

1. **NZ sites / Fielder & Co NZ**: Markets share the same codebase but have distinct catalogues and localisation.
   Smoke-only (logo, nav, one PLP page) on every PR; full suite runs on every third PR and nightly.
   Rationale: NZ is not Release 1 scope; full runs on every PR would double CI time with marginal defect signal.

2. **Brand-specific content** (product names, categories, slide headings): Each brand needs its own fixture file.
   The Playwright framework is shared; only the `fixtures/index.ts` equivalent changes per brand.
   Release 1 covers Market Street only — other brand fixtures will be added in Release 2 and 3.

3. **axe-core**: `checkA11y` on Home (`/MarketStreet/en-US/`) and PLP (`/MarketStreet/en-US/category/women`)
   after consent bypass. WCAG 2.1 AA rule set. Violations at `critical` or `serious` severity fail the PR gate.

---

### Target automation percentage

**80 % of system regression is automated** (Playwright suite).
The remaining 20 % comprises: visual design parity (Figma), cross-browser spot-checks, real-device touch
feel, and manual accessibility review — all categories where automation provides low signal-to-noise value
without significant additional investment.

CI/CD placement:
- **PR gate** (every PR to `main`): full Playwright suite on desktop Chrome + iPhone 12 emulation.
  Estimated runtime: ~8 min. Fails merge if any test fails.
- **Nightly**: same suite + cross-browser projects + axe extended ruleset against the sandbox.
- **Pre-release**: Lighthouse, real-device touch, manual visual + a11y sign-off.

---

### What is deliberately not automated, and why

| Area | Rationale |
|---|---|
| Visual design (colours, spacing, typography) | Governed by Figma design files, not the FSD. Pixel-diff tools have high false-positive rates when env fonts or antialiasing differ. Human sign-off against Figma is faster and more reliable at this scale. |
| Performance benchmarks | Highly environment-dependent (sandbox ≠ production CDN). Lighthouse scores in CI are noisy. Covered by the NFR document and a dedicated pre-release Lighthouse run. |
| PDP, footer, cart, checkout | Explicitly out of scope for this exercise and the Release 1 FSD extract. |
| Cross-browser beyond Chrome | The FSD does not specify browser requirements. One browser is sufficient per the brief. Weekly spot-checks on Safari and Firefox catch regressions without gating every PR. |
| Locale switching (en-GB / GBP) | Sandbox is US-only. Locale/currency noted as environment configuration, not a defect. Locale tests deferred to Release 2 when the NZ site enters scope. |
| Newsletter subscription downstream | Explicitly out of scope in both FSDs. |

---

## 3.3 Cover sheet (hands-on work)

| Field | Notes |
|---|---|
| **Pages tested** | Home `/MarketStreet/en-US/` and Category Listing `/MarketStreet/en-US/category/women` |
| **Widths** | 1280 px desktop (Chrome Desktop) and 375 px mobile (iPhone 12 emulation). Device emulation chosen over a real device for deterministic geometry and repeatable CI runs; real-device spot-check recommended before release for scroll momentum and font rendering. |
| **Tooling** | Playwright 1.47 + TypeScript. CSS transition helpers hand-authored (`tests/helpers/animation.ts`) for animation assertions. Consent bypass utility (`tests/helpers/consent.ts`) keeps non-consent tests clean. No additional licences needed. |
| **Time spent** | ~4 hours: spec analysis + inconsistency identification, helper authoring, full test authoring (desktop home, desktop PLP, mobile home, mobile PLP). |
| **What I covered** | All 82 desktop requirements (ENV–GLB–HOME–PLP–CARD–STATE) and all 109 mobile requirements (M-ENV–M-GLB–M-HOME–M-PLP–M-QA–M-CARD–M-TCH). Visual-only and performance requirements noted as not automated with explicit rationale. |
| **What I deliberately did not cover** | (1) Visual design — colour, spacing, typography. (2) Performance. (3) PDP / footer / cart / checkout (out of scope). (4) Cross-browser beyond Chrome. (5) Locale switching. (6) Newsletter. See matrix above for full reasoning. |
| **Defect count** | Automation not yet run against the live sandbox — requires `BASE_URL` pointing to the environment. Tests are authored and ready. Count will be produced in the Part 2 live session. |
| **Go / no-go call** | Cannot confirm until the suite runs against the sandbox. Blocking criteria: any `P1` functional defect on a user-journey step (navigation, PLP load, pagination, consent modal). Animation timing deviations (HOME-308, CARD-114) are `P2` — shippable with a tracked ticket. |
| **The one question I most need answered** | **PLP page count**: both FSDs say Women returns 2 pages (PLP-115 / M-PLP-118), but 36 products ÷ 12 per page = 3 pages. M-PLP-118 also contradicts M-PLP-117 ("12 per page") by saying "at 24 per page". I need to know which number is correct — the per-page count (12), the page count (2 or 3), or the product count (36) — before I can write a definitive pagination assertion. |
| **Where a human must stay in the loop** | (1) Visual parity vs. Figma — automated pixel-diff tools have unacceptable false-positive rates here. (2) Real-device touch feel (scroll momentum, overscroll bounce, tap registration on small targets). (3) Screen-reader announcement quality — axe catches missing labels but not announcement ordering or verbosity. (4) Severity triage of any defect found: automated tests report failures but cannot judge client impact or release risk. |
| **AI use** | Claude Sonnet 4.6 used to generate all test code and this strategy document from the FSDs. Verified: spec-to-requirement mapping, requirement IDs in comments, animation helper logic (CSS matrix parsing), fixture data arrays cross-checked against PDF tables. Where AI output was uncertain (selector strategies for unknown HTML) I added inline comments flagging that selectors may need tuning against the live DOM. The spec inconsistency (page count arithmetic) was identified by me reading the spec tables, not by the model. |

---

## Spec inconsistencies flagged for clarification

| ID | Issue | Impact |
|---|---|---|
| **PLP-115 / M-PLP-118 vs. PLP-114 / M-PLP-117** | Spec states Women returns **2 pages** at **12 per page** but 36 ÷ 12 = **3 pages**. M-PLP-118 also says "at 24 per page" which contradicts M-PLP-117 (12). | Pagination assertion cannot be finalised without confirmation. |
| **HOME-203 / M-HOME-204** | Heading says "**Ten** products in the carousel" but HOME-204 / M-HOME-205 lists **12** product names. | Carousel product-count assertion is flexible (≥10) in tests; final number needs confirming. |
| **Desktop HOME-308 vs. Mobile M-HOME-308** | Desktop spec defines a hover animation for Shop Now (expected); mobile spec says Shop Now must be **collapsed with no tap area** (no hover on touch). These do not conflict — they are correct platform-specific behaviours — but worth calling out explicitly as the animation helper is desktop-only. |
