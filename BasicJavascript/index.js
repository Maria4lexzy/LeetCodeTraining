/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// var localWord = [];
// var twoSum = function (nums, target) {
// 	const number = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				number.push(i);
// 				number.push(j);
// 				return number;
// 			}
// 		}

// 	}

// };
var nums = [3, 1, 2, 10, 1];
// twoSum(nums, 9);
// console.log(twoSum(nums, 9));

// let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function (s) {

// };

var runningSum = function (nums) {
	const number = [];
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		// sum += nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			sum = nums[j] + nums[i];
			console.log(sum + "summ")
			number.push(sum);
			// if (nums[i] + nums[j] === target) {
			// 	number.push(i);
			// 	number.push(j);
			// 	return number;
			// }
		}

	}
	return number;

};
console.log(runningSum(nums));