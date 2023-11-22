const assertArraysEqual = require("../assertArraysEqual");

// Example usage
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

console.log(assertArraysEqual(array1, array2));
console.log(assertArraysEqual(array1, array3));
