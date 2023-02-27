const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  minuseIndex = [];
  for (i in arr) {
    if (arr[i] == -1) {
      minuseIndex.push(i);
    }
  }
  arr = arr.filter(e => e != -1)
  arr.sort((a,b) => a - b);
  for (i of minuseIndex) {
    arr.splice(i, 0, -1)
  }
  return arr
}

// console.log(
//   sortByHeight(
//     [-1, 150, 190, 170, -1, -1, 160, 180]
//   )
// );

module.exports = {
  sortByHeight
};
