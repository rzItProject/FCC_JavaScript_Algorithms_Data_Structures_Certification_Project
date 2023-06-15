/**
 * Telephone Number Validator
*/

// js algorithm without js prototype function

/**
 * ^(1\s?)? : begin with the digit 1 followed by an optional whitespace and finish with ? to make the group optional too (0 or one occurrence)
 * (\(\d{3}\)|\d{3}) : match 3 digits surrounded by parentheses or match three digits
 * [-\s]?: match optional - or whitespace between digits group
 */
function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/g;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555"));
  console.log(telephoneCheck("1(555)555-5555"))
  console.log(telephoneCheck("2 (757) 622-7382"))
  console.log(telephoneCheck("-1 (757) 622-7382"))


// Optimized 
