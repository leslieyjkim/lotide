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

const middle = function (array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return [array[middleIndex]];
  }

  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

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
