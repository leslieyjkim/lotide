const tail = require("../tail");
const assertEqual = require("../assertEqual");

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
