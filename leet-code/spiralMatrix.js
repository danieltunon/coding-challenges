const assert = require('assert');
const { head, tail, last, init, map } = require('ramda');
/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  // console.log(matrix)
  if (matrix.length == 0) return [];
  return [
    ...head(matrix),
  ]
};

function firstCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  return matrix.map(head).reverse();
  // return matrix.map(row => row[0]);
}

function restCol(matrix) {
  // return matrix.map(row => row.filter((col, i) => i != 0));
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  // return matrix.reduce((cols, row) => row.length > 1 ? cols.concat([row.slice(1)]) : cols, []);
  return matrix.map(tail);
}

function lastCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];

  // return matrix.reduce((col, row) => col.concat(row[row.length - 1]));
  // return matrix.map(row => row[row.length - 1]);
  return matrix.map(last);
}

function initCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  // return matrix.map(row => row.slice(0, row.length - 1));
  // return matrix.reduce((cols, row) => row.length > 1 ? cols.concat([row.slice(0, row.length - 1)]) : cols, []);
  return matrix.map(init);
}

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];
const oneRow = [[1, 2, 3]];
const oneCol = [[1], [2], [3]];

assert.deepEqual(firstCol(matrix), [7, 4, 1])
assert.deepEqual(restCol(matrix), [[2, 3], [5, 6], [8, 9]])
assert.deepEqual(restCol(oneCol), [])
assert.deepEqual(lastCol(matrix), [3, 6 ,9])
assert.deepEqual(initCol(oneCol), [])
assert.deepEqual(spiralOrder(matrix), [1,2,3,6,9,8,7,4,5])
// console.log(step(firstCol, restCol, step(lastRow, initRow, step(lastCol, initCol, step(firstRow, restRow, {matrix: matrix, result: []})))));
