/**
 * Caesars Cipher - ROT13 - Letters are shifted by 13 places (a → n)
*/

// js algorithm - V1

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


// Optimized - V2

function rot13Op(str) {
    return str.replace(/[A-Z]/g, (char) => {
        let code = char.charCodeAt(0) + 13;
        if (code > 90) {
            code = code - 26;
        }
        return String.fromCharCode(code);
    });
}

console.log(rot13Op("SERR PBQR PNZC"));