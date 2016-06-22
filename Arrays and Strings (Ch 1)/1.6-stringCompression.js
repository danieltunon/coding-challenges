const assert = require('assert');
const charCounter = require('./1.2-checkPermutation').charCounter;
import { compose, join, map, ifThen, head } from 'ramda';
// Write a function that compresses a string using repeated
// character counts. If the compressed string is not shorter
// than the original return the original.
// Ex: 'aaaabcccccdee' -> 'a4b1c5d1e2'

const compressor = compose(join(''), map(join('')), Array.from, charCounter);
const compressedAndOriginal = (str) => [str, compressor(str)];
const shorter = (a, b) => a.length <= b.length ? a : b;
const compressString = compose((a) => a.reduce(shorter), compressedAndOriginal);

//////////// Tests ////////////
assert(
  compressString('abcde') === 'abcde',
  'should return the original string when the compressed version is longer'
);
assert(
  compressString('aaaabcccccdee') === 'a4b1c5d1e2',
  'should return the compressed string when the compressed version is shorter'
);
