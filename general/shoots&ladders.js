const { min, reduce, __, curry, map } = require('ramda');
// Write a function that returns the minimum number of dice rolls to get from
// start to finish of a board of shoots and ladders

// Represent the board as a square matrix, n x n
// [[0, 1, 2],
//  [3, 4, 5],
//  [6, 7, 8]]
//
// Can do math to find the col and row of the matrix:
// col = position % n
// row = position div n
// * where div represents integral division

// I have a recursive approach in mind
// param to track throws, param to track current position
const rolls = [1, 2, 3, 4, 5, 6]
const mapRolls = map(__, rolls);
const listMin = reduce(min);
const div = (n, d) => Math.floor(n / d);
const getValAtPos = (p, b) => p + b[div(p, b.length)][p % b.length];
const nextPos = (p, d, b) => getValAtPos(p + d, b);

function minThrows(board) {
  const victory = board.length * board.length - 1;

  function play(throws, position) {
    console.log(position, throws)
    if (position >= victory) {
      return throws;
    }
    // return listMin(
      const mapp = rolls.map(d =>
        play(throws + 1, nextPos(position, d, board))
      )
      console.log(mapp);
      return listMin(mapp);
    // );
  }

  return play(0, 0);
}
const testBoard = [
  [0, 5, 3],
  [0, 0, -2],
  [0, -5, 0],
];
console.log(minThrows(testBoard));

console.log(nextPos(0, 2, testBoard))
