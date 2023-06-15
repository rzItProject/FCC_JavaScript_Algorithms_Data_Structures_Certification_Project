/**
 * Palindrome Checker
*/

// js algorithm without js prototype function



// js algorithm with prototype (reduce, filter, concat...)

function palindrome(str) {
  let regex = /[^\W\s_]/gi;
  let filteredStr = str.match(regex).join('').toLowerCase();
  return filteredStr === filteredStr.split('').reverse().join('');
}

console.log(palindrome("A man, a plan, a canal. Panama"));

// Optimized 

