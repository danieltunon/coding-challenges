const assert = require('assert');
/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  // console.log(matrix)
  if (matrix.length == 0) return [];
  return recurse(spiralOrder, step(firstCol, restCol, step(lastRow, initRow, step(lastCol, initCol, step(firstRow, restRow, {matrix: matrix, result: []})))));
};

function step(get, remainder, {matrix, result}) {
  // console.log(matrix);
  return {
    matrix: remainder(matrix),
    result: result.concat(get(matrix)),
  }
}

function recurse(func, {matrix, result}) {
  return result.concat(func(matrix));
}

function firstRow(matrix) {
  if (matrix.length == 0) return [];
  return [...matrix[0]];
}

const rest = (rest, row, i) => i == 0 ? [...rest] : [...rest, [...row]];
function restRow(matrix) {
  if (matrix.length == 0) return [];
  return matrix.reduce(rest, []);
}

function lastRow(matrix) {
  if (matrix.length == 0) return [];
  return matrix[matrix.length - 1].reduceRight((row, val) => row.concat(val), []);
}

const init = (rest, row, i, matrix) => i == matrix.length - 1 ? [...rest] : [...rest, [...row]];
function initRow(matrix) {
  return matrix.reduce(init, []);
}

function firstCol(matrix) {
  return matrix.reduceRight((col, row) => col.concat(row[0]), []);
  // return matrix.map(row => row[0]);
}

function restCol(matrix) {
  // return matrix.map(row => row.filter((col, i) => i != 0));
  return matrix.reduce((cols, row) => row.length > 1 ? cols.concat([row.slice(1)]) : cols, []);
}

function lastCol(matrix) {
  // return matrix.reduce((col, row) => col.concat(row[row.length - 1]));
  return matrix.map(row => row[row.length - 1]);
}

function initCol(matrix) {
  // return matrix.map(row => row.slice(0, row.length - 1));
  return matrix.reduce((cols, row) => row.length > 1 ? cols.concat([row.slice(0, row.length - 1)]) : cols, []);
}

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];
const oneRow = [[1, 2, 3]];
const oneCol = [[1], [2], [3]];

assert.deepEqual(firstRow(matrix), [1,2,3])
assert.deepEqual(firstRow([[5]]), [5])
assert.deepEqual(restRow(matrix), [[ 4, 5, 6 ], [ 7, 8, 9 ]])
assert.deepEqual(restRow(oneRow), [])
assert.deepEqual(lastRow(matrix), [ 9, 8, 7 ])
assert.deepEqual(initRow(matrix), [[ 1, 2, 3 ], [ 4, 5, 6 ]])
assert.deepEqual(initRow(oneRow), [])
assert.deepEqual(firstCol(matrix), [7, 4, 1])
assert.deepEqual(restCol(matrix), [[2, 3], [5, 6], [8, 9]])
assert.deepEqual(restCol(oneCol), [])
assert.deepEqual(lastCol(matrix), [3, 6 ,9])
assert.deepEqual(initCol(oneCol), [])
assert.deepEqual(spiralOrder(matrix), [1,2,3,6,9,8,7,4,5])
// console.log(step(firstCol, restCol, step(lastRow, initRow, step(lastCol, initCol, step(firstRow, restRow, {matrix: matrix, result: []})))));
