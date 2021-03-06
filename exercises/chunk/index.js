// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let index = 0;
  let result = [];
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;

}

module.exports = chunk;
//
// function chunk(array, size) {
//   let chunked = [];
//   for (let element of array) {
//     let last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }
//
// module.exports = chunk;

// function chunk(array, size) {
//   let result = [];
//   let arr = [];
//   for (let idx in array) {
//     if (array[idx]) {
//       arr.push(array[idx]);
//     }
//     if (arr.length === size) {
//       result.push(arr);
//       arr = [];
//     } else if (idx == array.length - 1) {
//
//       result.push(arr);
//     }
//   }
//   return result;
// }
