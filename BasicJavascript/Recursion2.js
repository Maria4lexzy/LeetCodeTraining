
const arr = [1, 4, 2, 5];
const n = 4;


function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

console.log(multiply(arr, n));

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    }
    return sum(arr, n - 1) + arr[n - 1];
    // Only change code above this line
}
console.log(sum([2, 3, 4, 5], 3))