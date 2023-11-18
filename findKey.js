//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// function findKey(obj, callback) {
//   const foundKey = Object.keys(obj).find((key) => callback(obj[key]));     //Object.keys(obj) is used to get array of object's keys.
//   return foundKey || undefined;                                            //Array.find is used to find first key that callback returns truthy.
// }

function findKey(obj, callback) {
  for (const [key, value] of Object.entries(obj)) {
    //Object.entries(obj) is method returns array of [key, value] in the obj.
    if (callback(value)) {
      return key;
    }
  }
  return undefined;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`Passed: ${testName}`);
  } else {
    console.log(
      `Failed: ${testName}. Expected "${expected}", but got "${actual}"`
    );
  }
}

///Test case 1: Finding a key with stars === 2
const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
assertEqual(result1, "noma", "Should find the first key with stars === 2");

// Test case 2: Finding a key with stars === 3
const result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
);
assertEqual(result2, "Akaleri", "Should find the first key with stars === 3");

// Test case 3: No matching key found
const result3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);
assertEqual(
  result3,
  undefined,
  "Should return undefined when no matching key is found"
);
