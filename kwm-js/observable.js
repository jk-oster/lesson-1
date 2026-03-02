'use strict';

class Observable {

}

/**
 * Creates a new observable value.
 * @template T
 * @param {T} initialValue - The initial value
 * @returns {{ value: T, subscribe: (fn: () => void) => () => boolean }}
 * @example
 * const count = observable(0);
 * count.get(); // 0
 * count.set(1); // triggers subscribers
 */
export const observable = (initialValue) => new Observable(initialValue);
