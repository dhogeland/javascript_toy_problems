function myLanguages(results) {
  let x = [],
      keys = Object.keys(results),
      vals = Object.values(results);
  for (var i = 100; i >= 60; i--) {
    if (vals.indexOf(i) > -1) {
      x.push(keys[(vals.indexOf(i))]);
    }
  }
  return x;
}
