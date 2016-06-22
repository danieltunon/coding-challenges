import assert from 'assert';
import { zipWith } from 'ramda';

// Given an (NxN) matix rotate by 90 degrees clockwise
function concat(a, b) {
  return Array.isArray(a) ? a.concat(b) : [a].concat(b);
}
function rotateMatrix(matrix) {
  return matrix.reduceRight(zipWith(concat));
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
