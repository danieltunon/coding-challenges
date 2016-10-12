const assert = require('assert');
// const { head, tail, last, init, map, reverse } = require('ramda');
/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  debugger;
  if (matrix.length == 0) return [];
  let upperBound = 0;
  let rightBound = matrix[0].length;
  let lowerBound = matrix.length;
  let leftBound = 0;
  let i;
  const spiral = [];

  while (leftBound < rightBound && upperBound < lowerBound) {
    for (i = leftBound; i < rightBound; i++) {
      spiral.push(matrix[upperBound][i]);
    }
    upperBound++;
    for (i = upperBound; i < lowerBound; i++) {
      spiral.push(matrix[i][rightBound]);
    }
    rightBound--;
    if (leftBound < rightBound) {
      for (i = rightBound; i > leftBound; i--) {
        spiral.push(matrix[lowerBound][i]);
      }
    }
    lowerBound--;
    if (upperBound < lowerBound) {
      for (i = lowerBound; i > upperBound; i--) {
        spiral.push(matrix[i][leftBound]);
      }
    }
    leftBound++;
  }
  return spiral;
}

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];
const oneRow = [[1, 2, 3]];
const oneCol = [[1], [2], [3]];

// assert.deepEqual(head(matrix), [1,2,3])
// assert.deepEqual(head([[5]]), [5])
// assert.deepEqual(tail(matrix), [[ 4, 5, 6 ], [ 7, 8, 9 ]])
// assert.deepEqual(tail(oneRow), [])
// assert.deepEqual(reverse(last(matrix)), [ 9, 8, 7 ])
// assert.deepEqual(init(matrix), [[ 1, 2, 3 ], [ 4, 5, 6 ]])
// assert.deepEqual(init(oneRow), [])
// assert.deepEqual(firstCol(matrix), [7, 4, 1])
// assert.deepEqual(restCol(matrix), [[2, 3], [5, 6], [8, 9]])
// assert.deepEqual(restCol(oneCol), [])
// assert.deepEqual(lastCol(matrix), [3, 6 ,9])
// assert.deepEqual(initCol(oneCol), [])
assert.deepEqual(spiralOrder(matrix), [1,2,3,6,9,8,7,4,5])
assert.deepEqual(spiralOrder([[5]]), [5])
// console.log(spiralOrder([[2,3]]))
// console.log(spiralOrder([[7],[9],[6]]))
// console.log(step(firstCol, restCol, step(lastRow, initRow, step(lastCol, initCol, step(firstRow, restRow, {matrix: matrix, result: []})))));
// void spiralTraversal(int **a, int n) { int rs=0, cs=0;
//   // RowStart and Column Start int re=n-1, ce=n-1;
//   // RowEnd & columnEnd
//   while(rs<=re && cs<=ce)
//   {
//     int i=rs, j=cs;
//     for(j=cs; j<=ce; j++)
//       cout<<" "<<a[i][j];
//     for(i=rs+1, j--; i<=re; i++)
//       cout<<" "<<a[i][j];
//     for(j=ce-1, i--; j>=cs; j--)
//       cout<<" "<<a[i][j];
//     for(i=re-1, j++; i>=rs+1; i--)
//       cout<<" "<<a[i][j];
//     rs++; cs++; re--; ce--;
//   }
// }
