/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  var sentences = [];

  function helper(words, remainingString) {
    if (wordDict.has(remainingString)) {
      sentences.push(words.concat(remainingString).join(' '));
      return;
    }

    var possibleWord;
    for (var i = 1; i < remainingString.length; i++) {
      possibleWord = remainingString.slice(0, i);
      if (wordDict.has(possibleWord)) {
        helper(words.concat(possibleWord), remainingString.slice(i));
      }
    }
  }

  helper([], s);
  return sentences;
};
