// Write a JavaScript program to check two 
// numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100
function checkTwoNumbers(num1, num2) {
    return (num1 === 100 || num2 === 100 || num1 + num2 === 100);

}
// console.log(checkTwoNumbers(100, 20))
// console.log(checkTwoNumbers(10, 100))
// console.log(checkTwoNumbers(50, 50))
// console.log(checkTwoNumbers(10, 50));
// Write a JavaScript exercise to get the extension of a filename.
// TODO

// Exercise 3:
// Write a JavaScript program to replace every character 
// in a given string with the character
// following it in the alphabet
let myString = 'Maria';
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let myString_split = myString.split("");
let alphabet_split = alphabet.split("");
console.log(myString_split + "" + alphabet_split)
// loop through myString
// 
console.log(alphabet_split.length);