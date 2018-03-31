// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid(n, row = 0, stair = '', col = 0) {
  if (n === row) {
    return;
  }
  if (n*2 - 1 === stair.length) {
    console.log(stair);
    pyramid(n, row+1, '');
    return;
  }
  if (col <= n-1 + row && col >= n-1 - row) {
    pyramid(n, row, stair.concat('#'), col+1);
  } else {
    pyramid(n, row, stair.concat(' '), col+1);
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (let col = 0; col < n*2-1; col++) {
//       let variance = row;
//       if (col <= n-1 + variance && col >= n-1 - variance) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
//
// }
//
// module.exports = pyramid;
