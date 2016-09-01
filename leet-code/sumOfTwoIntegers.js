/**
* @param {number} a
* @param {number} b
* @return {number}
*/
var getSum = function(a, b) {
  let sum = a ^ b;
  let carries = (a & b) << 1;

  while (carries != 0) {
    [sum, carries] = [sum ^ carries, (sum & carries) << 1];
  }

  return sum;
};

// The pattern to recreate addition using bitwise operators:
// * take ^ (XOR, exclusive or) of the numbers to get a sum (no carries)
// * calculate the carried bits with & and a << 1(left shift)
// * repeat cycle taking the ^ of the sum and the carries
// * followed by & and << 1 of sum and carries
// * until the carries are 0
