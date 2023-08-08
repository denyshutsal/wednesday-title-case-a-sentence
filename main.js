"use strict";

// Wednesday  Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize on connecting words like the and of.

// For this algorithm, you can use the split() method.

// titleCase(I'm a little tea pot)should return a string.
// titleCase(I'm a little tea pot)should return I'm A Little Tea Pot.
// titleCase(sHoRt AnD sToUt) should return Short And Stout.

function titleCase(str) {
  const lowerCaseString = str.toLowerCase(); // 'short and stout'
  const splited = lowerCaseString.split(" "); // ['short', 'and', 'stout']
  const result = [];

  for (let i = 0; i < splited.length; i++) {
    const word = splited[i]; // 'short', 'and', 'stout'
    let capitilizedFirstLetterOfEachWord = word[0].toUpperCase(); // 'S', 'A', 'S'

    result.push(`${capitilizedFirstLetterOfEachWord}${word.substring(1)}`); // 'S' + 'hort' = 'Short'
  }
  return result.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
