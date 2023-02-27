const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = matrix.map(function(arr) {
    return arr.slice();
  });
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == true) {
        arr[i][j] = 1;
      } else {
        count = 0;
        for (let k = i - 1; k < i + 2; k++) {
          for (let kk = j - 1; kk < j + 2; kk++) {
            if (matrix[k] && matrix[k][kk]) {
              count++
            } else continue;
          } 
        }
        arr[i][j] = count ;
      }

    }
  }
  return arr;
}

// console.log(
//   minesweeper(
//     [
//       [true, false, false],
//       [false, true, false],
//       [false, false, false]
//     ] 
//   )
// );

module.exports = {
  minesweeper
};



