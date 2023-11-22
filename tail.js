// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// const head = function (array) {
//   if (array.length === 0) {
//     return undefined;
//   }
//   return array[0];
// };

// //test cases
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([42]), 42); // Test with an array containing one element
// assertEqual(head([]), undefined); //test with an empty array

//Create a function tail which returns the "tail" of an array:
//everything except for the first item (head) of the provided array.

//There is a workaround to this problem where we could still use our simple assertEqual to test out our tail function. How? Spend some time to think of and/or discuss a possible solution with your peers prior to exposing the answer below.

// const tail = function(array) {
//   if (array.length <= 1) {
//     return [];
//   }
//   return array.slice(1);
// };

//code review: (above code revised) In your tail function, you're returning an empty array when the length of the input array is less than or equal to 1. While this works for an empty array, it doesn't quite meet the requirement for an array with a single element. The requirement states that "using an array with one or zero elements as an argument returns an empty array". Your current implementation will return an empty array for an array with one element, but it should actually return the original array. You might want to adjust your condition to handle this case correctly.
//revised below;

const tail = function (array) {
  if (array.length <= 1) {
    return array.slice(); // Return a shallow copy of the array
  }
  return array.slice(1);
};

module.exports = tail;
