const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  const message = eqArrays(actual, expected)
    ? "✅ Assertion Passed: Arrays are equal."
    : "❌ Assertion Failed: Arrays are not equal.";

  console.log(message);
};

// const without = function (source, itemsToRemove) {
//   return source.filter((element) => !itemsToRemove.includes(element));
// };
//explanation regarding above code:
//takes 2 arrays
//return a new array containing only the elements from 'source' array
//that are not present in 'itemsToRemove'(to be removed from the 'source')
//filter method : create new array with that pass the test by function
//arrow function : check each element is not present in 'itemsToRemove'
//passed element includes in the new array(will be result)

//requirement says, no use filter method.
//revised by usign for loop below;

const without = function (source, itemsToRemove) {
  const result = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

// Test case 1
const result1 = without([1, 2, 3], [1]);
assertArraysEqual(result1, [2, 3]); // should pass

// Test case 2
const result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]); // should pass

// Test case 3: Ensure the original array is not modified
const originalArray = [1, 2, 3, 4, 5];
const itemsToRemove = [2, 4];
const result3 = without(originalArray, itemsToRemove);
assertArraysEqual(originalArray, [1, 2, 3, 4, 5]); // should pass
