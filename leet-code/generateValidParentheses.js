var generateParenthesis = function(n) {
  var validCombinations = [];

  function findCombos(combo, open, close) {
    if (combo.length == 2 * n && open == n && close == n) {
      validCombinations.push(combo);
      return;
    }
    if (combo.length > 2 * n || open > n || close > n) {
      return;
    }
    if (open - close) {
      findCombos(combo + '(', open + 1, close);
      findCombos(combo + ')', open, close + 1);
    } else {
      findCombos(combo + '(', open + 1, close);
    }
  }

  findCombos('(', 1, 0);
  return validCombinations;
};

// This gives me an idea for how to approach the parenthesis checking program
// using an iterative approach.
// Keep track of the open ones
// map from open char to map of close char to # unpaired
// if current char is an open that increments # unpaired
// if current char is close that decrements the # unpaired
// if unpaired is 0 when hitting a close char then false
// if at the end the sum of unpaired is 0 then true
