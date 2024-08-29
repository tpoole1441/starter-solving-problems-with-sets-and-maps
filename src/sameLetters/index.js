/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  const results = new Map();

  words.forEach((word) => {
    word.toLowerCase();
    const wordSet = new Set(word);
    const wordArray = [...wordSet];
    const sortArray = wordArray.sort();
    console.log(sortArray);
    const key = sortArray.join("");
    if (results.has(key)) {
      results.set(key, [...results.get(key), word]);
    } else {
      results.set(key, [word]);
    }
  });
  return results;
}
const array = ["pair", "per", "pole", "pear", "peer", "reap", "lope"];
console.log(sameLetters(array));

module.exports = sameLetters;
