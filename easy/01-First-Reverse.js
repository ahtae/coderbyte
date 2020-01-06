// First Reverse
// ----------------------------------------------------------------------------
// have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentElement = str[i];

    reversedStr = currentElement + reversedStr;
  }

  return reversedStr;
}

console.log( FirstReverse( "coderbyte" ) )
console.log( FirstReverse( "I Love Code"  ) )



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "coderbyte"    Output = "etybredoc"
// Input = "I Love Code"  Output = "edoC evoL I"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
