/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let strArray = x.toString().split('');
    let numArray = strArray.map(Number);
    if (numArray.length < 3) {
        return false;
    }
    else return (numArray[0] === numArray[2]);
};
console.log(isPalindrome(12));

// Solution 2

const isPalindrome2 = (num) => {
    if (num < 0) {
        return false;
    }
    let originalNum = num;
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10; //give the right-most digit: if num = 123 then 123%10=3
        reversed = reversed * 10 + digit;
        // digit=3 => 0=0*10+3=3
        // digit=2 => 3=3*10+2 = 32
        // digit=1 => 32=32*10+1 =321
        num = Math.floor(num / 10);
    }
    return originalNum === reversed;

}
isPalindrome2(121)
// Test cases
console.log(isPalindrome2(121)); // true
console.log(isPalindrome2(12321)); // true
console.log(isPalindrome2(123)); // false

