'use strict';

/**
 * Creates a new observable value.
 * @template T
 * @param {T} initialValue - The initial value
 * @returns {{ value: T, subscribe: (fn: () => void) => () => boolean }}
 * @example
 * const count = observable(0);
 * count.value; // 0
 * count.value = 1; // triggers subscribers
 */
export function observable(initialValue) {

}
