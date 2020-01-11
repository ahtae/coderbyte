// Swap Case
// ----------------------------------------------------------------------------
// Have the function SwapCase(str) take the str parameter and swap the case of each character.
// For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.


function SwapCase(str) {
  let newStr = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();
    let isCapital = (str[i] === str[i].toUpperCase());

    if (alphabet.indexOf(currentLetter) !== -1) isCapital ? newStr += currentLetter.toLowerCase() : newStr += currentLetter.toUpperCase();
    else newStr += currentLetter;
  }

  return newStr;
}

console.log( SwapCase("Hello-LOL") )
console.log( SwapCase("Sup DUDE!!?") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "Hello-LOL"        Output = "hELLO-lol"
// Input = "Sup DUDE!!?"      Output = "sUP dude!!?"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
