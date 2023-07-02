// The next type of loop you will learn is called a do...while loop. 
// It is called a do...while loop because it will first do one pass of 
// the code inside the loop no matter what, 
// and then continue to run the loop while the specified condition evaluates to true.



/**TASK */
// Change the while loop in the code to a do...while loop so the loop will push only
//  the number 10 to myArray, and i will be equal to 11 when your code has finished running.
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 10);