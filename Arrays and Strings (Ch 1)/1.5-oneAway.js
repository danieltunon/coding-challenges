import assert from 'assert';
import { shorter } from './1.6-stringCompression';
import { head, tail } from 'ramda';
// There are theree kinds of edits that can be performed on a string:
// insert a character, remove a character, replace a character.
// Write a func that takes 2 strings and returns ture if they are only
// one or zero edits away.

const longer = (a, b) => (a.length >= b.length ? a : b);

function oneAway(str1, str2, changes = 0) {
  // if length of both is 0
    // return changes <= 1
  // if head of 1 or 2 is ''
    // return recurse with tail of both and changes + 1
  // if changes > 1
    // return false
  // if head of 1 === head of 2
    // return recurse with tail of both no change to changes
  // if head of 1 !== head of 2 && lengths are ===
    // return recurse with tail of both and changes + 1
  // if head of 1 !== head of 2 && lengths are !==
    // recurse with all of shorter and tail of longer and changes + 1
  // if the heads are the same move on

}

/******** Notes ********/


/******** Tests ********/
assert(oneAway('pale', 'ple') === true, 'should return true when one char is deleted');
assert(oneAway('pale', 'paleo') === true, 'should return true when one new char is inserted');
assert(oneAway('pale', 'palle') === true, 'should return true when one existing char is inserted');
assert(oneAway('pale', 'bale') === true, 'should return true when one char is replaced');
assert(oneAway('pale', 'bake') === false, 'should return false when two char are replaced');
assert(oneAway('abcd', 'efgh') === false, 'should return false when all chars are replaced');
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
