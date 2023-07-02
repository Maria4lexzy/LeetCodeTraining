// function countDown(n) {
//     if (n < 1) {
//         return [];
//     }

//     else {
//         const countArray = countDown(n - 1);
//         countArray.unshift(n);
//         return countArray;
//     }
// }
// console.log(countDown(7));


function rangeOfNumbers(startNum, endNum) {
    if (startNum >= endNum) {
        return [startNum];
    }
    else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
};

console.log(rangeOfNumbers(6, 6));