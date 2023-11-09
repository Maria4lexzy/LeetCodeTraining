const calcAverage = (nums) => {
    //    initialize result =0
    // loop through nums
    // add nums[i] to existing result value
    // return result/length of nums
    let result = 0;
    if (nums.length === 0) {
        return result;
    }

    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return Math.floor(result / nums.length);
}
console.log("hi");
console.log(calcAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 15]));