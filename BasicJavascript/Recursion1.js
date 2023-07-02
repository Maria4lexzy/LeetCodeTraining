
// const arr = [1, 4, 2, 5];
// const n = 4;


// function multiply(arr, n) {
//     if (n <= 0) {
//         return 1;
//     } else {
//         return multiply(arr, n - 1) * arr[n - 1];
//     }
// }

// console.log(multiply(arr, n));


function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);

    }
    console.log('Hooray');
}

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('Hooray');
        return
    }

    console.log(n);
    countDownRecursive(n - 1);
}

// countDownRecursive(3);

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }
    return total;
}

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        console.log(total);
        return total;
    }
    console.log(total);
    return sumRangeRecursive(n - 1, total + n);
}
sumRangeRecursive(3, 0)