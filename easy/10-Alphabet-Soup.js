// Alphabet Soup
// ----------------------------------------------------------------------------
// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.


function AlphabetSoup(str) {
  let arr = str.split("");
  let sorted = false;

  while (!sorted) {
    sorted = true;
    
    for (let i = 0; i < arr.length - 1; i++) {
      let currentLetter = arr[i];
      let nextLetter = arr[i + 1];

      if (currentLetter > nextLetter) {
        let placeholder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = placeholder;
        sorted = false;
      }
    }
  }

  return arr.join("");

}

console.log( AlphabetSoup("coderbyte") )
console.log( AlphabetSoup("hooplah") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "coderbyte"    Output = "bcdeeorty"
// Input = "hooplah"       Output = "ahhloop"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
