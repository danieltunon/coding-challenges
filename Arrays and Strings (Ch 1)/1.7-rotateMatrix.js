import assert from 'assert';
import { zipWith } from 'ramda';

// Given an (NxN) matix rotate by 90 degrees clockwise
function reverseConcat(a, b) {
  return [b].concat(a);
}
function rotateMatrix(matrix) {
  return matrix.reduce(zipWith(reverseConcat));
}

/******** Tests ********/
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const rotated = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
assert.deepEqual(rotateMatrix(matrix), rotated, 'should rotate matrix by 90deg');
