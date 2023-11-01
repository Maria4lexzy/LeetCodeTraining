function romanToInteger(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // Validate input
    const validRomanRegex = /^[IVXLCDM]+$/;
    if (!validRomanRegex.test(roman)) {
        throw new Error("Invalid Roman numeral characters in the input.");
    }

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        let current = romanNumerals[roman[i]];
        let next = romanNumerals[roman[i + 1]];

        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}



console.log(romanToInteger('IIV'));

