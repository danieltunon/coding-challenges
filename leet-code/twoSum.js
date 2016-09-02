/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const indeces = nums.reduce((accum, num, i) => {
    accum[num] = i;
    return accum;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    let testIndex = indeces[target - nums[i]];
    if (testIndex !== undefined && testIndex !== i) {
      return [i, indeces[target - nums[i]]];
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9))
