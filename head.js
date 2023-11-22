// const assertEqual = function (actual, expected) {
//   console.assert(
//     actual === expected,
//     `❌ Assertion Failed ${actual} !== ${expected}`
//   );
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

//Instead of using console.assert, you should use an if-else statement to check if actual is equal to expected. If they are equal, print the success message. If they are not, print the failure message.

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
//   }
// };

// const assertEqual = require("./assertEqual");

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const head = function (array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;
