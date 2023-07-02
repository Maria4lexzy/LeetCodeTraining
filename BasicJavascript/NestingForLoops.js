console.log("hello");
// ctrl K to run code with code runner
const arr = [
    [1, 2, 3], [4, 4], [5, 6]
];
//repeat 3 times
// i=0
// j=0, j=1;
// i=1
// j=0, j=1;
// i=2
// j=0, j=1;

for (let i = 0; i < arr.length; i++) {
    // console.log("i =" + i);
    for (let j = 0; j < arr[i].length; j++) {
        // console.log("j =" + j);
        console.log(arr[i][j]);
    }
}


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }

    }

    // Only change code above this line
    console.log(product);
    return product;
}
// product =1;
// product = 1*1
// 1*

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);