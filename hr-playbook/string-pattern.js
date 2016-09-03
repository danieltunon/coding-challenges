/*/
 * Each of the following follow the pattern 'abab'
 * redblueredblue  (a -> red, b -> blue)
 * catdogcatdog    (a -> cat, b -> dog)
 * xxyyxxyy        (a -> xx, b -> yy)
 * abbabb          (a -> a, b -> bb)
 *
 * Each of the following do not follow the pattern
 * redblueredbluered
 * redbluebluered
 * redredredred
 * xxyxz
 *
 * Any string could have many patterns associated with it
 * aa                (a -> redblue)
 *
 * abab              (a -> r, b -> edblue)
 * abab              (a -> re, b -> dblue)
 * abab              (a -> red, b -> blue)
 * abab              (a -> redb, b -> lue)
 * abab              (a -> redbl, b -> ue)
 * abab              (a -> redblu, b -> e)
 *
 * abcabc            (a -> r, b -> e, c -> dblue)
 * abcabc            (a -> re, b -> d, c -> blue)
 * abcabc            (a -> red, b -> b, c -> lue)
 *           ...
 * abcabc            (a -> redbl, b -> u, c -> e)
 *
 * abcdefbabcdefb    (a -> r, b -> e, c -> d, ... , f -> u)
/*/

function charCounter(string) {
  const charCount = new Map();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charCount.set(char, charCount.get(char) + 1 || 1);
  }
  return charCount;
}

function sum(a,b) {
  return a + b;
}

function mapMaxLength(totalLength, patternGroups) {
  const numOfGroups = [...patternGroups.values()].reduce(sum);
  const maxLength = ([g, v]) => [g, ~~((totalLength - numOfGroups + v) / v)];
  return new Map([...s].map(maxLength));
}

function generateValidLengths(totalLength, groupMaxLengths, groupCounts) {
  const validLengths = [];
  function permute() {
    // if
  }
}

function stringPattern(string, pattern) {
  const patternGroups = charCounter(pattern);

}

console.log(mapMaxLength(12, charCounter('abcab')));
