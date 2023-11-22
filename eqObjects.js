//They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

//#1.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

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

//create an array with an Objects keys using 'Object.keys'
//javascript const shirtObject = { color: "red", size: "medium" }; Object.keys(shirtObject) // => returns ["color", "size"]
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

//test

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

//#2. Stretch : 'Array Value Comparisons'
//we need 'eqArrays'
//If the key value is an array, ensure that eqArrays can be called to compare the array key values for both objects.

//test #2. Array Value Comparison

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);

// ✅ Assertion Passed: true === true
// ✅ Assertion Passed: false === false
// ✅ Assertion Passed: true === true
// ✅ Assertion Passed: false === false

module.exports = eqObjects;
