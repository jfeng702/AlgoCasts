// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  let result = charMap(stringA);
  let resultB = charMap(stringB);

  if (Object.keys(result).length !== Object.keys(resultB).length) {
    return false;
  }

  for (let el in resultB) {
    if (resultB[el] !== result[el]) {
      return false;
    }
  }
  return true;
}

function charMap(string) {
  let result = {};
  for (let ch of string.replace(/[^\w]/g,"").toLowerCase()) {
    result[ch] = result[ch] ? result[ch]+1 : 1;
  }
  return result;
}

module.exports = anagrams;
