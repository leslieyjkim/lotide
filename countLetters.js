const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

// eslint-disable-next-line func-style
function countLetters(sentence) {
  const letterCount = {
    lowercase: {},
    uppercase: {},
  };

  for (const letter of sentence) {
    if (/^[a-zA-Z]$/.test(letter)) {
      ////^[a-zA-Z]$ is used to test whether a given character letter is an uppercase or lowercase letter.
      const isUpperCase = letter === letter.toUpperCase(); //Check if the letter is uppercase or lowercase
      const countObject = isUpperCase
        ? letterCount.uppercase
        : letterCount.lowercase; //Update the count for the letter based on case
      const key = isUpperCase ? letter : letter.toLowerCase(); //key will be assigned the value of letter if isUppercase is true, and the lowercase version of letter otherwise.

      if (key in countObject) {
        //alternative way to increment the count
        countObject[key]++; //if it is, it increments existing value by 1.
      } else {
        countObject[key] = 1; // if it is not, it initializes with the value of 1.
      }

      //same result achived of previous line with below;
      // countObject[key] = (countObject[key] || 0) + 1;
    }
  }
  // eslint-disable-next-line no-undef
  return letterCount;
}

// const sentence = "lighthouse Labs";
// const result = countLetters(sentence);

// console.log("Lowercase counts:");
// for (const letter in result.lowercase) {
//   console.log(`${letter}: ${result.lowercase[letter]} times`);
// }

// console.log("\nUppercase counts:");
// for (const letter in result.uppercase) {
//   console.log(`${letter}: ${result.uppercase[letter]} times`);
// }
//

const result = countLetters("lighthouse Labs");
assertEqual(result.lowercase["l"], 2, "Count of 'l' (lowercase) is 2");
assertEqual(result.uppercase["L"], 1, "Count of 'L' (uppercase) is 1");

console.log(countLetters("lighthouse Labs"));
