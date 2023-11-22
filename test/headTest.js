const head = require("../head");
const assertEqual = require("../assertEqual");

//test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), 42); // Test with an array containing one element
assertEqual(head([]), undefined); //test with an empty array
