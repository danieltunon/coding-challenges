/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function(s) {
  const uniqueChars = new Map();
  let maxLength = 0;
  let start = 0;
  let current = 0;
  for (current; current < s.length; current++) {
    if (uniqueChars.has(s[current])) {
      maxLength = Math.max(maxLength, current - start);
      for (start; start < uniqueChars.get(s[current]); start++) {
        uniqueChars.delete(s[start]);
      }
      start++;
    }
    uniqueChars.set(s[current], current);
  }

  return Math.max(maxLength, current - start);
};

// I got the fastest run-time of all submissions so far!
// Runtime: 149 ms
