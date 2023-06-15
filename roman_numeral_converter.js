/**
 *  Roman Numeral Converter
*/

// js algorithm - V1
function convertToRoman(num) {
    // Object containing the Roman numeral values
    const romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    // Array of sorted Roman numeral values
    const romanValue = Object.values(romanNumeral).sort((a, b) => a - b);

    // Function to get the Roman numeral key from its value
    function getKeyByValue(obj, value) {
        const foundKey = Object.keys(obj).find(key => obj[key] === value);
        return foundKey || null;
    }

    // Recursive function to convert the number to Roman numeral
    function getRomanNumeral(array, number) {
        let max = array[array.length - 1];
        if (number == 0) {
            return '';
        } else if (number > max) {
            let res = number /max;
            let rest = number % max;
            return getKeyByValue(romanNumeral, max).repeat(res) + getRomanNumeral(array, rest);
        } else {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === number) {
                    return getKeyByValue(romanNumeral, number);
                } else if (number < array[i]) {
                    let res = number / array[i - 1];
                    let rest = number % array[i - 1];
                    return getKeyByValue(romanNumeral, array[i - 1]).repeat(res) + getRomanNumeral(array, rest);
                }
            }
        }
    }
    return getRomanNumeral(romanValue, num);
}

console.log(convertToRoman(3999));

// Optimized - V2

function convertToRomanOp(num) {
    // Object containing the Roman numeral values
    const romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = '';

    for(let key in romanNumeral){
        while(num >= romanNumeral[key]){
            result+= key;
            num -= romanNumeral[key];
        }  
    }

    return result;
}

console.log(convertToRomanOp(3999));