// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// const assertArraysEqual = function (actual, expected) {
//   const message = eqArrays(actual, expected)
//     ? "✅ Assertion Passed: Arrays are equal."
//     : "❌ Assertion Failed: Arrays are not equal.";

//   console.log(message);
// };

const middle = function (array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return [array[middleIndex]];
  }

  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;
