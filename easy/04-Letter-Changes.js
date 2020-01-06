// Letter Changes
// ----------------------------------------------------------------------------
// Hhave the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let vowels = "aeiou".split("");
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();
    let index = alphabet.indexOf(currentLetter);

    let newIndex = (index + 1) % 26;
    let changedLetter = alphabet[newIndex];

    if (index !== -1) {
      if (vowels.indexOf(changedLetter) !== -1) newStr += changedLetter.toUpperCase();
      else newStr += changedLetter
    } else newStr += currentLetter;
  }

  return newStr;
}

console.log( LetterChanges( "hello*3"  ) );
console.log( LetterChanges( "fun times!" ) );





// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello*3"    Output = "Ifmmp*3"
// Input = "fun times!"    Output = "gvO Ujnft!"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
