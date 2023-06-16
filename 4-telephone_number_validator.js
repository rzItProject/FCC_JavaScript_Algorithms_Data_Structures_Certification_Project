/**
 * Telephone Number Validator
*/

// V1 - First code

/**
 * ^(1\s?)? → Optional country code '1' followed by an optional space.
 * (\(\d{3}\)|\d{3}) → Three digits enclosed in parentheses or three consecutive digits.
 * [-\s]? → Optional hyphen or space.
 * \d{4}$ → Match four consecutive digits at the end
 */
function telephoneCheck(str) {
  // Regular expression pattern to validate US phone numbers
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/g;

  // Test if the input string matches the phone number pattern
  return regex.test(str);
}


console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1(555)555-5555"))
console.log(telephoneCheck("2 (757) 622-7382"))
console.log(telephoneCheck("-1 (757) 622-7382"))

