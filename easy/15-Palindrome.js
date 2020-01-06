// Palindrome
// ----------------------------------------------------------------------------
// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
// For example: "racecar" is also "racecar" backwards.
// Punctuation and numbers will not be part of the string.


function Palindrome(str) {
  let newStr = str.split(" ").join("");

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) return false;
  }

  return true;
}

console.log( Palindrome("never odd or even" ) );
console.log( Palindrome("eye" ) );


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "never odd or even"    Output = "true"
// Input = "eye"                  Output = "true"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
