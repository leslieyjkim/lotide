// const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");

// //test code
// assertArraysEqual(middle([]), []); // should pass

// // Test case 2: One element
// assertArraysEqual(middle([1]), []); // should pass

// // Test case 3: Two elements
// assertArraysEqual(middle([1, 2]), []); // should pass

// // Test case 4: Odd number of elements
// assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass

// // Test case 5: Even number of elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns an empty array for an empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns an empty array for an array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for an array with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for an array with three elements [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for an array with five elements [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for an array with four elements [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for an array with six elements [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
