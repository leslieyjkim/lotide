// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
//   }
// };

// // eslint-disable-next-line func-style
// function countLetters(sentence) {
//   const letterCount = {
//     lowercase: {},
//     uppercase: {},
//   };

//   for (const letter of sentence) {
//     if (/^[a-zA-Z]$/.test(letter)) {
//       const isUpperCase = letter === letter.toUpperCase();
//       const countObject = isUpperCase
//         ? letterCount.uppercase
//         : letterCount.lowercase;
//       const key = isUpperCase ? letter : letter.toLowerCase(); //key will be assigned the value of letter if isUppercase is true, and the lowercase version of letter otherwise.

//       if (key in countObject) {
//         countObject[key]++;
//       } else {
//         countObject[key] = 1;
//       }
//     }
//   }
//   // eslint-disable-next-line no-undef
//   return letterCount;
// }

// // const sentence = "lighthouse Labs";
// // const result = countLetters(sentence);

// // console.log("Lowercase counts:");
// // for (const letter in result.lowercase) {
// //   console.log(`${letter}: ${result.lowercase[letter]} times`);
// // }

// // console.log("\nUppercase counts:");
// // for (const letter in result.uppercase) {
// //   console.log(`${letter}: ${result.uppercase[letter]} times`);
// // }
// //

// const result = countLetters("lighthouse Labs");
// assertEqual(result.lowercase["l"], 2, "Count of 'l' (lowercase) is 2");
// assertEqual(result.uppercase["L"], 1, "Count of 'L' (uppercase) is 1");

// console.log(countLetters("lighthouse Labs"));

//output would be this
// ❌ Assertion Failed 1 !== 2
// ✅ Assertion Passed: 1 === 1
// {
//   lowercase: { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 },
//   uppercase: { L: 1 }
// }

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const obj = {};
  for (const char of sentence) {
    if (char !== " ")
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
  }
  return obj;
};

const result = countLetters("lighthouse Labs");
console.log(result);

assertEqual(result["h"], 2);
assertEqual(result["e"], 1);






{
  l: 1,
  i: 1,
  g: 1,
  h: 2,
  t: 1,
  o: 1,
  u: 1,
  s: 2,
  e: 1,
  L: 1,
  a: 1,
  b: 1
}
✅ Assertion Passed: 2 === 2
✅ Assertion Passed: 1 === 1