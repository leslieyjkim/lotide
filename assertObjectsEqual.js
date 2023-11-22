const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } //check if the 2 arrays have the same length

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true; //if all elements are equal
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  //below: Inside the loop, it checks if the value of the current key in object1(object1[key]) is not equal to the value of the same key in object2.
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// Test cases
const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
assertObjectsEqual(obj1, obj2);

const obj3 = { x: 5, y: { z: 6, w: 7 } };
const obj4 = { y: { w: 7, z: 6 }, x: 5 };
assertObjectsEqual(obj3, obj4);

const obj5 = { color: "red", size: "medium" };
const obj6 = { size: "medium", color: "red" };
assertObjectsEqual(obj5, obj6);

const obj7 = { colors: ["red", "blue"], size: "medium" };
const obj8 = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(obj7, obj8);

const obj9 = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const obj10 = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "short",
};
assertObjectsEqual(obj9, obj10);

module.exports = assertObjectsEqual;
