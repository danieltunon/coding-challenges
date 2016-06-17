const assert = require('assert');

// Determine if a string has all unique characters
function isUnique(string) {
  const charCount = {};
  for (let i = 0; i < string.length; i++) {
    if (charCount.hasOwnProperty(string[i])) {
      return false;
    }
    charCount[string[i]] = true;
  }
  return true;
}

function isUniqueBadTimeComplexity(string) {
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

// Testing
assert(
  isUnique('abc') === true,
  'should return true when all characters are unique'
);
assert(
  isUnique('') === true,
  'should return true for empty strings'
);
assert(
  isUnique('defd') === false,
  'should return false when there is at least 1 repeated character'
);
assert(
  isUniqueBadTimeComplexity('abc') === true,
  'should return true when all characters are unique'
);
assert(
  isUniqueBadTimeComplexity('') === true,
  'should return true for empty strings'
);
assert(
  isUniqueBadTimeComplexity('defd') === false,
  'should return false when there is at least 1 repeated character'
);

module.exports = {
  isUnique,
};
