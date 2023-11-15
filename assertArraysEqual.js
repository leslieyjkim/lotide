const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } //check if the 2 arrays have the same length

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true; //if all elements are equal
};

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
//   }
// };

// eslint-disable-next-line no-unused-vars
const assertArrayEqual = function (actual, expected) {
  const message = eqArrays(actual, expected)
    ? "✅ Assertion Passed: Arrays are equal."
    : "❌ Assertion Failed: Arrays are not equal.";
  //ternary operator
  //eqArrays(actual, expected) is a function call to eqArrays with parameters actual and expected.
  //The ? is the ternary operator itself.
  //If the condition (eqArrays(actual, expected)) is true, the expression before the : is executed.
  return message;
};

// Example usage
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

console.log(assertArrayEqual(array1, array2));
console.log(assertArrayEqual(array1, array3));
