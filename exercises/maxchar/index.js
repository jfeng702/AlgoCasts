// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};
  let max = 0;
  let maxCh = '';
  for(let ch of str) {
    count[ch] = count[ch] ? count[ch] + 1 : 1;
  }

  for( let ch in count) {
    if (count[ch] > max ) {
      max = count[ch];
      maxCh = ch;
    }
  }


  return maxCh;
}

module.exports = maxChar;
