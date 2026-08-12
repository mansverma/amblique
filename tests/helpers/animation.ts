/**
 * Animation testing helpers for the Market Street storefront.
 *
 * The specs define animations by their CSS properties – duration, timing function,
 * and the computed end-state value. These helpers read those properties from the
 * live DOM so tests can assert against spec values rather than pixels-on-screen.
 *
 * Key specs this module serves:
 *   HOME-308  tile hover: scale 105% / 500ms, Shop Now height 0→32px / 300ms ease-out
 *   CARD-114  card hover: scale 105% / 500ms, overlay + Quick Add fade in
 *   GLB-103   nav flyout opens on hover
 *   STATE-03  only tile Shop Now and card Quick Add / Wishlist reveal on hover
 */

import { type Locator, type Page } from '@playwright/test';

export interface TransitionProfile {
  durationMs: number;
  timingFunction: string;
  property: string;
}

/** Read all transition declarations on an element. */
async function getTransitions(
  page: Page,
  locator: Locator
): Promise<TransitionProfile[]> {
  const handle = await locator.elementHandle();
  if (!handle) throw new Error('getTransitions: element not found');

  return page.evaluate((el) => {
    const s = window.getComputedStyle(el);
    const props = s.transitionProperty.split(',').map((p) => p.trim());
    const durations = s.transitionDuration.split(',').map((d) => parseFloat(d) * 1000);
    const timings = s.transitionTimingFunction.split(/,(?![^(]*\))/).map((t) => t.trim());
    return props.map((property, i) => ({
      property,
      durationMs: durations[i] ?? durations[0] ?? 0,
      timingFunction: timings[i] ?? timings[0] ?? '',
    }));
  }, handle);
}

/** Return the longest transition duration declared on the element (ms). */
async function getMaxTransitionDuration(page: Page, locator: Locator): Promise<number> {
  const transitions = await getTransitions(page, locator);
  if (transitions.length === 0) return 0;
  return Math.max(...transitions.map((t) => t.durationMs));
}

/** Uniform scale factor from the element's computed CSS transform matrix. */
export async function getComputedScale(page: Page, locator: Locator): Promise<number> {
  const handle = await locator.elementHandle();
  if (!handle) throw new Error('getComputedScale: element not found');

  return page.evaluate((el) => {
    const transform = window.getComputedStyle(el).transform;
    if (!transform || transform === 'none') return 1;
    const m = new DOMMatrix(transform);
    return m.a; // scaleX; for uniform scale scaleX === scaleY
  }, handle);
}

/** Rendered height via getBoundingClientRect (px). */
export async function getRenderedHeight(page: Page, locator: Locator): Promise<number> {
  const handle = await locator.elementHandle();
  if (!handle) throw new Error('getRenderedHeight: element not found');
  return page.evaluate((el) => el.getBoundingClientRect().height, handle);
}

/** Computed opacity. */
export async function getComputedOpacity(page: Page, locator: Locator): Promise<number> {
  const handle = await locator.elementHandle();
  if (!handle) throw new Error('getComputedOpacity: element not found');
  return page.evaluate((el) => parseFloat(window.getComputedStyle(el).opacity), handle);
}

/**
 * Hover `hoverTarget`, wait for the longest transition on `measureTarget` to
 * complete (plus a 100ms guard), then return `measureTarget` for further
 * assertions.
 *
 * If transition duration cannot be read before hover, pass `fallbackMs`.
 */
export async function hoverAndWait(
  page: Page,
  hoverTarget: Locator,
  measureTarget: Locator,
  fallbackMs = 600
): Promise<void> {
  let waitMs = fallbackMs;
  try {
    waitMs = (await getMaxTransitionDuration(page, measureTarget)) + 100;
  } catch {
    // element not yet painted or no transition – use fallback
  }
  await hoverTarget.hover({ force: true });
  await page.waitForTimeout(Math.max(waitMs, fallbackMs));
}

/**
 * Assert that a CSS transition with the given approximate duration exists on
 * the element. Tolerance: ±50ms to allow for browser rounding.
 */
export async function expectTransitionDuration(
  page: Page,
  locator: Locator,
  expectedMs: number,
  toleranceMs = 50
): Promise<void> {
  const transitions = await getTransitions(page, locator);
  const match = transitions.find(
    (t) => Math.abs(t.durationMs - expectedMs) <= toleranceMs
  );
  if (!match) {
    throw new Error(
      `Expected a transition of ~${expectedMs}ms on element. ` +
        `Found: ${JSON.stringify(transitions)}`
    );
  }
}

/**
 * Assert that at least one transition on the element uses an ease-out timing
 * function. Accepts cubic-bezier(0, 0, 0.58, 1) as well as the keyword.
 */
export async function expectEaseOut(page: Page, locator: Locator): Promise<void> {
  const transitions = await getTransitions(page, locator);
  const easeOutPatterns = [
    'ease-out',
    'cubic-bezier(0, 0, 0.58, 1)',
    'cubic-bezier(0,0,0.58,1)',
  ];
  const match = transitions.find((t) =>
    easeOutPatterns.some((p) => t.timingFunction.replace(/\s/g, '') === p.replace(/\s/g, ''))
  );
  if (!match) {
    throw new Error(
      `Expected an ease-out transition. Found: ${JSON.stringify(transitions.map((t) => t.timingFunction))}`
    );
  }
}
