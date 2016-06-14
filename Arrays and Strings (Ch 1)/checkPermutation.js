const assert = require('assert');

// Given two strings check if one is a permutation of the other
function isPermutation(string1, string2) {

}

assert(
  isPermutation('dog', 'god') === true,
  'should return true if the strings are permutations'
);
assert(
  isPermutation('happy', 'flag') === false,
  'should return false if the strings are not permutations'
);
assert(
  isPermutation('game', 'game') === true,
  'should return true if the strings are the same'
);
