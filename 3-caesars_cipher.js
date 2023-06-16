/**
 * Caesars Cipher - ROT13 - Letters are shifted by 13 places (a → n)
*/

// V1 - First code

function rot13(str) {
    let min = 'A'.charCodeAt(0); // get ASCII code of A
    let max = 'Z'.charCodeAt(0); // get ASCII code of Z
    return str.split('').map(e => {
        const regex = /[\W\s_]/; // Regex to find all non alphanumeric caracter, space and _
        if (!regex.test(e)) { // If a caracter doesn't match 
            let code = e.charCodeAt(0) + 13; // convert to ascii code and add 13
            if (code > max) {
                code = code - 26;
            }
            return String.fromCharCode(code);
        }
        return e;
    }).join('');
}

console.log(rot13("SERR PBQR PNZC"));


// V2 - Optimized code

function rot13(str) {
    // The ASCII code of the maximum character 'Z'
    let max = 'Z'.charCodeAt(0);

    // Replace each uppercase letter in the string using a callback function
    return str.replace(/[A-Z]/g, (char) => {
        // Calculate the ASCII code of the ciphered letter by adding 13
        let cipher = char.charCodeAt(0) + 13;

        // If the ciphered letter exceeds the maximum ASCII code for 'Z',
        // wrap it around by subtracting 26
        if (cipher > max) {
            cipher -= 26;
        }

        // Convert the ASCII code back to the corresponding character
        return String.fromCharCode(cipher);
    });
}


console.log(rot13Op("SERR PBQR PNZC"));