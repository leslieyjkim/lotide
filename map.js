const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

const assertArraysEqual = function (actual, expected) {
  const message = eqArrays(actual, expected)
    ? "✅ Assertion Passed: Arrays are equal."
    : "❌ Assertion Failed: Arrays are not equal.";
  console.log(message);
};

//Example usage
const results1 = map(words, (word) => word[0]);
console.log(results1);

// Test Case 1: Extracting the first letter of each word
const results2 = map(words, (word) => word[0]);
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);

// Test Case 2: Extracting the length of each word
const results3 = map(words, (word) => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

// Test Case 3: Converting each word to uppercase
const results4 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results4, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
