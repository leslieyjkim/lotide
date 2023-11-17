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

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    //   if (char !== ' '  && !results[char]) {
    //     results[char] = []; //empty array is assigned to current 'char'. ex:'l': []
    //   }
    //   results[char].push(i); //push the current index into the array
    // }
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};
const results = letterPositions("lighthouse in the house");
console.log(results);

assertArraysEqual(letterPositions("hello").e, [1]);




//{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
}
✅ Assertion Passed: Arrays are equal.