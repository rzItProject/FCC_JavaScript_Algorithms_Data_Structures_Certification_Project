/**
 * Palindrome Checker
*/


// V1 - First code

function palindrome(str) {
  // Regular expression to match all alphanumeric characters
  let regex = /[^\W_]/gi;

  // Filter out non-alphanumeric characters and convert to lowercase
  let filteredStr = str.match(regex).join('').toLowerCase();

  // Check if the filtered string is equal to its reverse
  return filteredStr === filteredStr.split('').reverse().join('');
}

console.log(palindrome("A man, a plan, a canal. Panama"));

// V2 - Optimized code

function palindromeOp(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let filteredStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Check if the filtered string is equal to its reverse
  return filteredStr === filteredStr.split('').reverse().join('');
}


console.log(palindromeOp("A man, a plan, a canal. Panama"));