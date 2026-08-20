# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile/home.spec.ts >> Mobile category tiles (M-HOME-301–309) >> M-HOME-308 Shop Now label is collapsed to zero height (no tap area) at mobile width
- Location: tests/mobile/home.spec.ts:425:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.elementHandle: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('section').filter({ hasText: 'Style for Real Life' }).first().getByRole('link').first().getByText('Shop Now').locator('..')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "skipToMainContent" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - link [ref=e6] [cursor=pointer]:
      - /url: /MarketStreet/en-US/
      - img "Logo" [ref=e7]
  - main [ref=e8]:
    - generic [ref=e10]:
      - heading "Something went wrong" [level=1] [ref=e11]
      - paragraph [ref=e12]: "Error: Access token is invalid or revoked"
      - link "Go to Homepage" [ref=e14] [cursor=pointer]:
        - /url: /MarketStreet/en-US/
      - generic [ref=e15]:
        - heading "Stack Trace" [level=2] [ref=e17]
        - code [ref=e19]: "AuthTokenInvalidError: Access token is invalid or revoked at Proxy.t3 (/var/task/node_modules/.pnpm/@salesforce+storefront-next-runtime@1.2.0_97f34e813a01aab35f4cb0f9d67adba1/node_modules/@salesforce/storefront-next-runtime/dist/scapi.js:1:8723) at process.processTicksAndRejections (node:internal/process/task_queues:103:5) at async fetchComponent (/var/task/src/lib/api/component.server.ts:48:20) at async fetchComponentWithComponentData (/var/task/src/lib/page-designer/component-loader.server.ts:61:21)"
        - paragraph [ref=e21]:
          - text: To disable stack traces in production, turn off
          - code [ref=e22]: unstable_devTools
          - text: in your router config.
  - contentinfo [ref=e23]:
    - paragraph [ref=e25]: © 2026 All rights reserved.
  - region "Notifications alt+T"
```

# Test source

```ts
  1   | /**
  2   |  * Animation testing helpers for the Market Street storefront.
  3   |  *
  4   |  * The specs define animations by their CSS properties – duration, timing function,
  5   |  * and the computed end-state value. These helpers read those properties from the
  6   |  * live DOM so tests can assert against spec values rather than pixels-on-screen.
  7   |  *
  8   |  * Key specs this module serves:
  9   |  *   HOME-308  tile hover: scale 105% / 500ms, Shop Now height 0→32px / 300ms ease-out
  10  |  *   CARD-114  card hover: scale 105% / 500ms, overlay + Quick Add fade in
  11  |  *   GLB-103   nav flyout opens on hover
  12  |  *   STATE-03  only tile Shop Now and card Quick Add / Wishlist reveal on hover
  13  |  */
  14  | 
  15  | import { type Locator, type Page } from '@playwright/test';
  16  | 
  17  | export interface TransitionProfile {
  18  |   durationMs: number;
  19  |   timingFunction: string;
  20  |   property: string;
  21  | }
  22  | 
  23  | /** Read all transition declarations on an element. */
  24  | async function getTransitions(
  25  |   page: Page,
  26  |   locator: Locator
  27  | ): Promise<TransitionProfile[]> {
  28  |   const handle = await locator.elementHandle();
  29  |   if (!handle) throw new Error('getTransitions: element not found');
  30  | 
  31  |   return page.evaluate((el) => {
  32  |     const s = window.getComputedStyle(el);
  33  |     const props = s.transitionProperty.split(',').map((p) => p.trim());
  34  |     const durations = s.transitionDuration.split(',').map((d) => parseFloat(d) * 1000);
  35  |     const timings = s.transitionTimingFunction.split(/,(?![^(]*\))/).map((t) => t.trim());
  36  |     return props.map((property, i) => ({
  37  |       property,
  38  |       durationMs: durations[i] ?? durations[0] ?? 0,
  39  |       timingFunction: timings[i] ?? timings[0] ?? '',
  40  |     }));
  41  |   }, handle);
  42  | }
  43  | 
  44  | /** Return the longest transition duration declared on the element (ms). */
  45  | async function getMaxTransitionDuration(page: Page, locator: Locator): Promise<number> {
  46  |   const transitions = await getTransitions(page, locator);
  47  |   if (transitions.length === 0) return 0;
  48  |   return Math.max(...transitions.map((t) => t.durationMs));
  49  | }
  50  | 
  51  | /** Uniform scale factor from the element's computed CSS transform matrix. */
  52  | export async function getComputedScale(page: Page, locator: Locator): Promise<number> {
  53  |   const handle = await locator.elementHandle();
  54  |   if (!handle) throw new Error('getComputedScale: element not found');
  55  | 
  56  |   return page.evaluate((el) => {
  57  |     const transform = window.getComputedStyle(el).transform;
  58  |     if (!transform || transform === 'none') return 1;
  59  |     const m = new DOMMatrix(transform);
  60  |     return m.a; // scaleX; for uniform scale scaleX === scaleY
  61  |   }, handle);
  62  | }
  63  | 
  64  | /** Rendered height via getBoundingClientRect (px). */
  65  | export async function getRenderedHeight(page: Page, locator: Locator): Promise<number> {
> 66  |   const handle = await locator.elementHandle();
      |                                ^ Error: locator.elementHandle: Test timeout of 30000ms exceeded.
  67  |   if (!handle) throw new Error('getRenderedHeight: element not found');
  68  |   return page.evaluate((el) => el.getBoundingClientRect().height, handle);
  69  | }
  70  | 
  71  | /** Computed opacity. */
  72  | export async function getComputedOpacity(page: Page, locator: Locator): Promise<number> {
  73  |   const handle = await locator.elementHandle();
  74  |   if (!handle) throw new Error('getComputedOpacity: element not found');
  75  |   return page.evaluate((el) => parseFloat(window.getComputedStyle(el).opacity), handle);
  76  | }
  77  | 
  78  | /**
  79  |  * Hover `hoverTarget`, wait for the longest transition on `measureTarget` to
  80  |  * complete (plus a 100ms guard), then return `measureTarget` for further
  81  |  * assertions.
  82  |  *
  83  |  * If transition duration cannot be read before hover, pass `fallbackMs`.
  84  |  */
  85  | export async function hoverAndWait(
  86  |   page: Page,
  87  |   hoverTarget: Locator,
  88  |   measureTarget: Locator,
  89  |   fallbackMs = 600
  90  | ): Promise<void> {
  91  |   let waitMs = fallbackMs;
  92  |   try {
  93  |     waitMs = (await getMaxTransitionDuration(page, measureTarget)) + 100;
  94  |   } catch {
  95  |     // element not yet painted or no transition – use fallback
  96  |   }
  97  |   await hoverTarget.hover({ force: true });
  98  |   await page.waitForTimeout(Math.max(waitMs, fallbackMs));
  99  | }
  100 | 
  101 | /**
  102 |  * Assert that a CSS transition with the given approximate duration exists on
  103 |  * the element. Tolerance: ±50ms to allow for browser rounding.
  104 |  */
  105 | export async function expectTransitionDuration(
  106 |   page: Page,
  107 |   locator: Locator,
  108 |   expectedMs: number,
  109 |   toleranceMs = 50
  110 | ): Promise<void> {
  111 |   const transitions = await getTransitions(page, locator);
  112 |   const match = transitions.find(
  113 |     (t) => Math.abs(t.durationMs - expectedMs) <= toleranceMs
  114 |   );
  115 |   if (!match) {
  116 |     throw new Error(
  117 |       `Expected a transition of ~${expectedMs}ms on element. ` +
  118 |         `Found: ${JSON.stringify(transitions)}`
  119 |     );
  120 |   }
  121 | }
  122 | 
  123 | /**
  124 |  * Assert that at least one transition on the element uses an ease-out timing
  125 |  * function. Accepts cubic-bezier(0, 0, 0.58, 1) as well as the keyword.
  126 |  */
  127 | export async function expectEaseOut(page: Page, locator: Locator): Promise<void> {
  128 |   const transitions = await getTransitions(page, locator);
  129 |   const easeOutPatterns = [
  130 |     'ease-out',
  131 |     'cubic-bezier(0, 0, 0.58, 1)',
  132 |     'cubic-bezier(0,0,0.58,1)',
  133 |   ];
  134 |   const match = transitions.find((t) =>
  135 |     easeOutPatterns.some((p) => t.timingFunction.replace(/\s/g, '') === p.replace(/\s/g, ''))
  136 |   );
  137 |   if (!match) {
  138 |     throw new Error(
  139 |       `Expected an ease-out transition. Found: ${JSON.stringify(transitions.map((t) => t.timingFunction))}`
  140 |     );
  141 |   }
  142 | }
  143 | 
```