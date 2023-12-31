// const assertEqual = function (actual, expected) {
//   console.assert(
//     actual === expected,
//     "Assertion Failed: " + actual + " !== " + expected
//   );
//   const condition = true;
//   console.assert(condition, "Assertion Passed: " + actual + "===" + expected);
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//Above coding what I made first was failed
//Below coding is revised one.

// const assertEqual = function (actual, expected) {
//   console.assert(
//     actual === expected,
//     "❌ Assertion Failed: " + actual + " !== " + expected
//   );
//   if (actual === expected) {
//     console.log("✅ Assertion Passed: " + actual + " === " + expected);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//Below would be revised one using a template literals
// const assertEqual = function (actual, expected) {
//   console.assert(
//     actual === expected,
//     `❌ Assertion Failed ${actual} !== ${expected}`
//   );
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

//UPDATED VERSION : USING iF STATEMENT (NO REDUNDANT)

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
