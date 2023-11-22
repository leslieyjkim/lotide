const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//test code
assertArraysEqual(middle([]), []); // should pass

// Test case 2: One element
assertArraysEqual(middle([1]), []); // should pass

// Test case 3: Two elements
assertArraysEqual(middle([1, 2]), []); // should pass

// Test case 4: Odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass

// Test case 5: Even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass
