import assert from 'assert';
import { compose, adjust, map, addIndex } from 'ramda';

// write an algorithm such that if an element in a MxN matrix is 0,
// its entire row and column are set to 0
const mapRowToZero = adjust(rowIndex => map(() => 0, rowIndex));
const mapColToZero = colIndex => map(adjust(() => 0, colIndex));
function zeroMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        return compose(mapRowToZero(i), mapColToZero(j))(matrix);
      }
    }
  }
  return matrix;
}
/******** Tests ********/
const matrixWithoutZero = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
const matrixWithZero = [
  [1, 2, 3],
  [4, 5, 0],
  [7, 8, 9],
  [10, 11, 12],
];
const zeroed = [
  [1, 2, 0],
  [0, 0, 0],
  [7, 8, 0],
  [10, 11, 0],
];
console.log(zeroMatrix(matrixWithZero))
assert.deepEqual(
  zeroMatrix(matrixWithoutZero),
  matrixWithoutZero,
  'should not change a matrix with no zero'
);
assert.deepEqual(
  zeroMatrix(matrixWithZero),
  zeroed,
  'should zero out row and column in matrix containing zero'
);
