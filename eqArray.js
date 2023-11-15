// eslint-disable-next-line no-unused-vars
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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should pass
