/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();

  A.forEach((e) => {
    numbers.set(e);
  });

  A.forEach((e) => {
    const diff = N - e;
    if (diff !== e && numbers.has(diff)) {
      if (e < diff) {
        solution.set(e, diff);
      } else {
        solution.set(diff, e);
      }
    }
  });

  return [...solution];
}

module.exports = sumPairs;
