const assert = require('assert');

// Given two strings check if one is a permutation of the other
function isShallowEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function charCounter(string) {
  const charCount = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    (charCount[char] && charCount[char]++) || (charCount[char] = 1);
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
assert.deepEqual(
  charCounter('abccdea'),
  { a: 2, b: 1, c: 2, d: 1, e: 1 },
  'should return an object with the character counts'
);
assert(
  isShallowEqual({ a: 1, b: 2, c: 3 }, { c: 3, a: 1, b: 2 }) === true,
  'should return true if the objects have the same key/values'
);
assert(
  isShallowEqual({ a: 1, b: 2, c: 3 }, { c: 3, a: 1, b: 2, d: 'boo' }) === false,
  'should return false if one object has extra key/values'
);
assert(
  isShallowEqual({ a: 1, b: 2, c: 3 }, { d: 3, a: 1, b: 4 }) === false,
  'should return false if the objects have different key/values'
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
