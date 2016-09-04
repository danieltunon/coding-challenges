/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  function traverseRow(matrix, row, col) {
    if (col < matrix[row].length) {
      return [matrix[row][col]].concat(traverse(matrix, col + 1, row));
    }
    if (row < matrix.length) {
      return [matrix[row][col - 1]].concat(traverse(matrix, col - 1, row + 1));
    }
  }
};
