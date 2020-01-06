// Longest Word
// ----------------------------------------------------------------------------
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.


function LongestWord(sen) {
  let words = sen.split(" ").map(word => filteredWord(word));
  
  return words.reduce((largestWord, currentWord) => {
    if (largestWord.length >= currentWord.length) return largestWord;
    else return currentWord;
  });

  function filteredWord(word) {
    let acceptedCharacters = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    let filteredString = "";

    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];

      if (acceptedCharacters.indexOf(currentLetter.toLowerCase()) !== -1) {
        filteredString += currentLetter;
      }
    }
    return filteredString;
  }
}

console.log( LongestWord( "fun&!! time"  ) )
console.log( LongestWord( "I love dogs" ) )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "fun&!! time"    Output = "time"
// Input = "I love dogs"    Output = "love"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
