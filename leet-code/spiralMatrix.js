/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  let upperBound = 0;
  let leftBound = 0;
  let lowerBound = matrix.length - 1;
  let rightBound = matrix[0].length - 1;
  let row = 0;
  let col = 0;
  const spiral = [];
  debugger;
  while (leftBound != rightBound && upperBound != lowerBound) {
    while (col <= rightBound) {
      spiral.push(matrix[upperBound][col++]);
    }
    row = ++upperBound;
    while (row <= lowerBound) {
      spiral.push(matrix[row++][rightBound]);
    }
    col  = --rightBound;
    while (col >= leftBound) {
      spiral.push(matrix[lowerBound][col--]);
    }
    row = --lowerBound;
    while (row >= upperBound) {
      spiral.push(matrix[row--][leftBound]);
    }
    col = ++leftBound;
  }
  return spiral;
};

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];

console.log(spiralOrder(matrix))
