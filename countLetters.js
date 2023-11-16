const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const letterCount = {};
  for (const letter of sentence) {
    if (letter.match(/[a-zA-Z]/)) {
      const upperCaseLetter = letter.toUpperCase();
      letterCount[upperCaseLetter] = (letterCount[upperCaseLetter] || 0) + 1;
    }
  }
  return letterCount;
};

const result = countLetters("lighthouse Labs");
assertEqual(result, {
  L: 3,
  I: 1,
  G: 1,
  H: 2,
  T: 1,
  O: 1,
  U: 1,
  S: 1,
  E: 1,
  A: 1,
  B: 1,
});
