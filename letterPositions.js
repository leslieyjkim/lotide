const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== "" && !results[char]) {
      results[char] = []; //empty array is assigned to current 'char'. ex:'l': []
    }
    results[char].push(i); //push the current index into the array
  }

  return results;
};

const results = letterPositions("lighthouse in the house");
console.log(results);
