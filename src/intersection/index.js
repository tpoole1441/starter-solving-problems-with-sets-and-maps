function intersection(a, b) {
  const map = new Map();
  const set = new Set();
  a.forEach((e) => {
    map.set(e);
  });
  console.log(map);
  b.forEach((e) => {
    if (map.has(e)) {
      set.add(e);
    }
  });
  return [...set];
}

module.exports = intersection;
