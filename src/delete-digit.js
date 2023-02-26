const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digit = String(n);
  let max = 0;
  let maxCurDigit = undefined;
  for (i = 0; i < digit.length; i++) {
    if (i == digit.length - 1) {
      maxCurDigit = digit.slice(0, i)
    } else {
      maxCurDigit = digit.slice(0, i) + digit.slice(i+1, digit.length);
    }
    if (Number(maxCurDigit) > max) {max = maxCurDigit};
  }
  return parseInt(max);
}

module.exports = {
  deleteDigit
};