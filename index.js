
/**
 * Expose `toInteger`.
 */

module.exports = toInteger;

/**
 * Convert `value` to an integer value.
 *
 * Please note that this is not an ecma262 "tointeger" implementation,
 * but just a safer version of what you usually want from `parseInt()`
 * to a value to integer value.
 *
 * @param {*} value
 * @returns {number}
 * @example
 *
 * toInteger(1.9);
 * // => 1
 *
 * toInteger('5.5');
 * // => 5
 *
 * toInteger(NaN);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 0
 */

function toInteger(value) {
  return parseInt(value, 10) || ~~value;
}
