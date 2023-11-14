const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function (array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

//test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), 42); // Test with an array containing one element
assertEqual(head([]), undefined); //test with an empty array

//Create a function tail which returns the "tail" of an array:
//everything except for the first item (head) of the provided array.

//There is a workaround to this problem where we could still use our simple assertEqual to test out our tail function. How? Spend some time to think of and/or discuss a possible solution with your peers prior to exposing the answer below.
const tail = function (array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
//Here, the tail function is called with an array ["Hello", "Lighthouse", "Labs"], and the result is stored in the variable result. The purpose of this line is to obtain the output of the tail function for further testing.
assertEqual(result.length, 2); // ensure we get back two elements
//This line uses assertEqual to check whether the length of the result array is equal to 2. The tail function is expected to return an array with all elements except the first one, so in this specific case, the original array has 3 elements, and the tail should have 2 elements.
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// This line checks whether the first element of the result array is equal to the string "Lighthouse". Since the tail function is expected to exclude the first element, this assertion ensures that the first element of the tail is indeed "Lighthouse".
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Similarly, this line checks whether the second element of the result array is equal to the string "Labs". Again, because the tail function is designed to exclude the first element, this assertion verifies that the second element of the tail is "Labs".

// In summary, these assertions collectively verify the expected behavior of the tail function: it returns an array with the correct length and contains specific elements that were originally the second and third elements of the input array.

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
