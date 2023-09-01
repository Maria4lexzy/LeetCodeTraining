// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// SOLUTION 1 
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
// 			for(let j=i+1; j<nums.length; j++){
// 				if(nums[i]+ nums[j]===target){
// 			     return [i, j];
// 				}
// 			}
// 		}
// 		return [];
// };

// SOLUTION 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (complement in numToIndex) {
            console.log('==============numto================');
            console.log([numToIndex[complement], i]);
            console.log('====================================');
            return [numToIndex[complement], i];
        }
        numToIndex[num] = i;
    }
    return [];
};
console.log('====================================');
console.log(
    twoSum([2, 4, 6, 9, 1], 11));
console.log('====================================');