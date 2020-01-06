// Ex Oh
// ----------------------------------------------------------------------------
// Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function ExOh(str) {
  let frequency = {};

  if(str.length % 2 !== 0) return false;

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();

    if (currentLetter in frequency) frequency[currentLetter]++;
    else frequency[currentLetter] = 1;
  }

  return frequency['x'] === frequency['o'];
}

console.log( ExOh("xooxxo") )
console.log( ExOh("x") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "xooxxo"   Output = "true"
// Input = "x"        Output = "false"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
