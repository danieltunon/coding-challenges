const assert = require('assert');
const charCounter = require('./1.2-checkPermutation').charCounter;
// There are theree kinds of edits that can be performed on a string:
// insert a character, remove a character, replace a character.
// Write a func that takes 2 strings and returns ture if they are only
// one or zero edits away.

function oneAway(str1, str2) {
  let smallerCount;
  let largerCount;

  if (str1.length > str2.length) {
    largerCount = charCounter(str1);
    smallerCount = charCounter(str2);
  } else {
    largerCount = charCounter(str2);
    smallerCount = charCounter(str1);
  }

  if (Object.keys(largerCount) - Object.keys(smallerCount) > 1) {
    return false;
  }

  const numOfChanges = Object.keys(largerCount).reduce((changeCount, key) => {
    if (smallerCount[key] === undefined || largerCount[key] - smallerCount[key] !== 0) {
      return changeCount + 1;
    }
    return changeCount;
  }, 0);

  return numOfChanges <= 1;
}

/******** Notes ********/


/******** Tests ********/
assert(oneAway('pale', 'ple') === true, 'should return true when one char is deleted');
assert(oneAway('pale', 'paleo') === true, 'should return true when one new char is inserted');
assert(oneAway('pale', 'palle') === true, 'should return true when one existing char is inserted');
assert(oneAway('pale', 'bale') === true, 'should return true when one char is replaced');
assert(oneAway('pale', 'bake') === false, 'should return false when two char are replaced');
assert(
  oneAway('pale', 'passe') === false,
  'should return false when one char is replaced and the new char is also inserted'
);
assert(
  oneAway('pale', 'palesss') === false,
  'should return false when new char is inserted multiple times'
);
assert(
  oneAway('pale', 'paaale') === false,
  'should return false when existing char is inserted multiple times'
);
assert(
  oneAway('pale', 'pa') === false,
  'should return false when more than one char is deleted'
);
