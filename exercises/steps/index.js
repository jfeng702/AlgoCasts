// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
 // what is yo base case?
  if (n === row) {
   return;
  }


  if (n === stair.length) {
    console.log(stair);
    steps(n, row+1, '');
    return;
  }

  if (stair.length <= row) {
    steps(n, row, stair.concat('#'));
  } else {
    steps(n, row, stair.concat(' '));
  }

}

module.exports = steps;

// function steps(n) {
//
//   for (let row = 0; row < n; row++) {
//     let result = '';
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         result += '#';
//       } else {
//         result += ' ';
//       }
//     }
//     console.log(result);
//   }
// }
