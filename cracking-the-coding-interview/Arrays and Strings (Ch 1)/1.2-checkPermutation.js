const assert = require('assert');

// Given two strings check if one is a permutation of the other
function isShallowEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let keyval of map1) {
    if (map2.get(keyval[0]) !== keyval[1]) {
      return false;
    }
  }
  return true;
}

function charCounter(string) {
  const charCount = new Map();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charCount.set(char, charCount.has(char) ? charCount.get(char) + 1 : 1);
  }
  return charCount;
}

function isPermutation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  return isShallowEqual(charCounter(string1), charCounter(string2));
}

/******** Notes ********
* definitely ask if whitespace and capitalization matter!!!
* alternate solution to the one that I implemented is to sort the strings
  then just compare char by char

/******** Tests ********/
const testMap1 = new Map();
testMap1.set('a', 2).set('b', 1).set('c', 2).set('d', 1).set('e', 1);

assert.deepEqual(
  charCounter('abccdea'),
  testMap1,
  'should return a map with the character counts'
);

const testMap2 = new Map();
testMap2.set('a', 2).set('b', 1).set('c', 2).set('d', 1).set('e', 1);

assert(
  isShallowEqual(testMap1, testMap2) === true,
  'should return true if the maps have the same key/values'
);

const testMap3 = new Map();
testMap3.set('a', 2).set('b', 1).set('c', 2).set('d', 1).set('e', 1).set('f', 4);

assert(
  isShallowEqual(testMap2, testMap3) === false,
  'should return false if one map has extra key/values'
);

const testMap4 = new Map();
testMap4.set('d', 2).set('e', 1).set('f', 2).set('g', 1).set('h', 1);

assert(
  isShallowEqual(testMap2, testMap4) === false,
  'should return false if the maps have different key/values'
);
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

module.exports = {
  isShallowEqual,
  isPermutation,
  charCounter,
};
