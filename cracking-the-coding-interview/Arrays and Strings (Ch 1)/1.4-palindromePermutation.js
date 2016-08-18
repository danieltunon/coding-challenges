const assert = require('assert');
const charCounter = require('./1.2-checkPermutation').charCounter;
// Given a string check if it is a permutation of a palindrome.
// Does not need to be limited to dictionary words.

function isPalindromePermutation(string) {
  const charCount = charCounter(string);
  delete charCount[' '];
  return Object.values(charCount).filter(n => n % 2 !== 0).length <= 1;
}

assert(
  isPalindromePermutation('coat act') === true,
  'should return true if string can be rearranged into a palindrome'
);
assert(
  isPalindromePermutation('happy fact') === false,
  'should return false if string can\'t be rearranged into a palindrome'
);
