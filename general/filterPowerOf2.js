const { compose, prop, filter, curry } = require('ramda');

const log = val => {
  console.log(val);
  return val;
};

const isPower = curry((base, num) => (Math.log2(num) / Math.log2(base)) % 1 === 0);
const powerCount = (base, numbers) => compose(prop('length'), log, filter(isPower(base)))(numbers);

console.log(powerCount(2, [1, 2, 3, 8, 9, 16]))
console.log(powerCount(3, [1, 2, 3, 8, 9, 16]))
console.log(powerCount(4, [1, 2, 3, 8, 9, 16]))
