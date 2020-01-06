// Dash Insert
// ----------------------------------------------------------------------------
// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
// For example: if str is 454793 the output should be 4547-9-3.
// Don't count zero as an odd number.

function DashInsert(str) {
  let transformedString = String(str);
  let newStr = "";

  for (let i = 0; i < transformedString.length; i++) {
    let currentElement = Number(transformedString[i]);
    let nextElement = Number(transformedString[i + 1]);

    if (currentElement % 2 && nextElement % 2) newStr += currentElement + "-";
    else newStr += currentElement;
  }
  return newStr;
}

console.log(DashInsert(99946));
console.log(DashInsert(56730));
console.log(DashInsert(55));

// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 99946      Output = 9-9-946
// Input = 56730      Output = 567-30





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
