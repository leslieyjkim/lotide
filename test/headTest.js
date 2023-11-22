// const head = require("../head");
// const assertEqual = require("../assertEqual");

//test cases
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([42]), 42); // Test with an array containing one element
// assertEqual(head([]), undefined); //test with an empty array

const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 42 for [42]", () => {
    assert.strictEqual(head([42]), 42);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
