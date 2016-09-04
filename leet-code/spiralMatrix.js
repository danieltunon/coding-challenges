const assert = require('assert');
const { head, tail, last, init, map, reverse } = require('ramda');
/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  debugger;
  if (matrix.length == 0) return [];
  return [
    ...head(matrix),
    ...lastCol(tail(matrix)),
    ...reverse(init(initCol(tail(matrix)))),
    ...firstCol(init(initCol(tail(matrix)))),
    spiralOrder(restCol(init(initCol(tail(matrix))))),
  ]
};

function firstCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  return matrix.map(head).reverse();
}

function restCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  return matrix.map(tail);
}

function lastCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  return matrix.map(last);
}

function initCol(matrix) {
  if (matrix.length == 0 || matrix[0].length == 1) return [];
  return matrix.map(init);
}

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];
const oneRow = [[1, 2, 3]];
const oneCol = [[1], [2], [3]];

assert.deepEqual(head(matrix), [1,2,3])
assert.deepEqual(head([[5]]), [5])
assert.deepEqual(tail(matrix), [[ 4, 5, 6 ], [ 7, 8, 9 ]])
assert.deepEqual(tail(oneRow), [])
assert.deepEqual(reverse(last(matrix)), [ 9, 8, 7 ])
assert.deepEqual(init(matrix), [[ 1, 2, 3 ], [ 4, 5, 6 ]])
assert.deepEqual(init(oneRow), [])
assert.deepEqual(firstCol(matrix), [7, 4, 1])
assert.deepEqual(restCol(matrix), [[2, 3], [5, 6], [8, 9]])
assert.deepEqual(restCol(oneCol), [])
assert.deepEqual(lastCol(matrix), [3, 6 ,9])
assert.deepEqual(initCol(oneCol), [])
// assert.deepEqual(spiralOrder(matrix), [1,2,3,6,9,8,7,4,5])
assert.deepEqual(spiralOrder([[5]]), [5])
// console.log(step(firstCol, restCol, step(lastRow, initRow, step(lastCol, initCol, step(firstRow, restRow, {matrix: matrix, result: []})))));
