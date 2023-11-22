const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const result = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      //Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// This code is a for...of loop that iterates over each item in the allItems array. Here's what each part does:

// #1. for (const item of allItems): This is a loop that iterates through each element (item) in the allItems array.

// #2. if (itemsToCount[item]): Inside the loop, it checks if the current item should be counted. It does this by checking if the item exists as a property in the itemsToCount object and if the value associated with that property is truthy. If it is, it means that the current item should be counted.

// #3. Nested if-else block:

// #3-1. if (result[item]): Checks if the current item is already a property in the result object. If it is, it means we've already encountered this item before, and we increment its count by 1 (result[item] += 1).
// #3-2. else: If the current item is not a property in the result object, it means we're encountering it for the first time. In this case, we create a new property in the result object with the item as the key, and set its value to 1 (result[item] = 1).
// #3-3. The purpose of this code is to iterate through each item in the allItems array, check if it should be counted based on the itemsToCount object, and then update the result object to keep track of the count for each item.

// Finally, the entire result object is returned from the countOnly function, providing a count of each item based on the criteria specified in the itemsToCount object.

module.exports = countOnly;
