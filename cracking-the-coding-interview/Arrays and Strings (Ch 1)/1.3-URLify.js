const assert = require('assert');
// write a method that replaces all the spaces in a string with %20
// there are some conditions for non-dynamic languages:
//   - assume there is enough space in the string to hold the additional chars
//   - you are given the true length of the string (not including addl spaces)

function urlify(string, length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += string[i] === ' ' ? '%20' : string[i];
  }
  return result;
}

assert(
  urlify('Mr John Smith    ', 13) === 'Mr%20John%20Smith',
  'should replace spaces with \'%20\''
);
assert(
  urlify('blah    ', 4) === 'blah',
  'should handle strings with no spaces'
);
