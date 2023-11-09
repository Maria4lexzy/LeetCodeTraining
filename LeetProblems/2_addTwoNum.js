// positive ints
//non-empty linked list
var addTwoNumbers = function (l1, l2) {
    let result = [];
    let tempCarry = 0;
    for (let i = 0; i < l1.length; i++) {
        console.log("i= " + (l1[i] + l2[i]));

        if (tempCarry != 0) {
            result.push(tempCarry);
            tempCarry = 0;

        }
        if ((l1[i] + l2[i]) > 9) {


            let digits = (l1[i] + l2[i]).toString().split('');
            tempCarry = parseInt(digits[0]);

            console.log('====================================');
            console.log("carry" + tempCarry);
            console.log('====================================');
            result.push(parseInt(digits[1]));

        }
        else if ((l1[i] + l2[i]) < 9) {

            77888
        }
    }


    return result;
};
console.log(addTwoNumbers([2, 9, 9], [2, 4, 3]));
