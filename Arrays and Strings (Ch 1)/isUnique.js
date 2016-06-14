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
