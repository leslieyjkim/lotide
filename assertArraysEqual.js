// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } //check if the 2 arrays have the same length

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true; //if all elements are equal
// };

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
//   }
// };

const eqArrays = require("./eqArrays");
// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function (actual, expected) {
  const message = eqArrays(actual, expected)
    ? "✅ Assertion Passed: Arrays are equal."
    : "❌ Assertion Failed: Arrays are not equal.";
  //ternary operator
  //eqArrays(actual, expected) is a function call to eqArrays with parameters actual and expected.
  //The ? is the ternary operator itself.
  //If the condition (eqArrays(actual, expected)) is true, the expression before the : is executed.
  console.log(message);
  return message;
};

module.exports = assertArraysEqual;
