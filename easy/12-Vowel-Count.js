// Vowel Count
// ----------------------------------------------------------------------------
// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5).
// Do not count y as a vowel for this challenge.


function VowelCount(str) {
  let vowels = "aeiou".split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();

    if (vowels.indexOf(currentLetter) !== -1) ++count;
  }

  return count;
}

console.log( VowelCount("hello" ) )
console.log( VowelCount("coderbyte") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello"        Output = 2
// Input = "coderbyte"    Output = 3





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
