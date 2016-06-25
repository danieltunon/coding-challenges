import assert from 'assert';
import { compose, adjust, map, addIndex, __, first,
         last, ifElse, none, indexOf, identity, reduce } from 'ramda';

// write an algorithm such that if an element in a MxN matrix is 0,
// its entire row and column are set to 0
const indexedReduce = addIndex(reduce);
const zero = () => 0;
const isNeg1 = n => n === -1;
const mapRowToZero = (matrix) => compose(adjust(map(zero), __, matrix), first);
const mapColToZero = (matrix) => compose(map(adjust(zero, __, matrix)), last);
const zeroOutRowCol = compose(mapRowToZero, mapColToZero);
const coordsOfZero = indexedReduce(
  (coord, val, i) => (isNeg1(indexOf(0, val)) ? coord : [i, indexOf(0, val)]),
  [-1, -1]
);
function zeroMatrix(matrix) {
  return ifElse(none(isNeg1), zeroOutRowCol(matrix), () => identity(matrix))(coordsOfZero(matrix));
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
