const assert = require('assert');

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const reversed = [];
  while (x != 0) {
    reversed.push(x % 10);
    x = ~~(x / 10); /*eslint no-param-reassign: 0*/
  }
  const reversedN = reversed.reduce((n, d, i, a) => n + d * Math.pow(10, a.length - 1 - i), 0);
  return reversedN > Math.pow(2, 31) - 1 || reversedN < Math.pow(-2, 31) ? 0 : reversedN;
}

// some notes:
// - the judge did not expect you to be able to handle numbers bigger than
//   2^31 - 1 or smaller than -2^31; super annoying
// - my approach is interesting but a bit cumbersome. An alternative is not worry
//   about storing individual digits and building the number by multiplying by 10
//   for each round

function reverse2(x) {
  var reversed = 0;
  while (x != 0) {
    reversed *= 10;
    reversed += x % 10;
    x = ~~(x / 10); /*eslint no-param-reassign: 0*/
  }
  return reversed > 2147483647 || reversed < -2147483648 ? 0 : reversed;
}

assert(reverse(123) === 321);
assert(reverse(-123) === -321);
assert(reverse(1534236469) === 0);

assert(reverse2(123) === 321);
assert(reverse2(-123) === -321);
assert(reverse2(1534236469) === 0);
