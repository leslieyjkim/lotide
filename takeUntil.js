const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  const isEqual = eqArrays(actual, expected);
  const message = isEqual ? "✅ Arrays are equal" : "❌ Arrays are NOT equal";
  console.log(message);
};

const takeUntil = function (array, callback) {
  const result = [];

  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

// Example usage:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// Example test cases

const data3 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
assertArraysEqual(
  takeUntil(data3, (x) => x < 0),
  expected1
);

const data4 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const expected2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(
  takeUntil(data4, (x) => x === ","),
  expected2
);
