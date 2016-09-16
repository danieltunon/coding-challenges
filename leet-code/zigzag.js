const assert = require('assert');
// const {  } = require('ramda');
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows < 2) return s;

  const zigzagged = [];
  for (let i = 0; i < numRows; i++) {
    let charIndex = i;
    const j = 2 * (numRows - i - 1);
    const k = 2 * i;

    zigzagged.push(s[charIndex]);

    while (charIndex < s.length) {
      charIndex += j;
      j && s[charIndex] && zigzagged.push(s[charIndex]);
      charIndex += k;
      k && s[charIndex] && zigzagged.push(s[charIndex]);
    }
  }
  return zigzagged.join('');
}

assert(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
assert(convert('A', 1), 'A');
