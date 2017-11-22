function solve(s) {
  let total = 0, test = 0;
  for (var i = 0; i < s.length; i++) {
    if (!s[i].match(/[aeiou]/)) {
      test += s.charCodeAt(i) - 96
    } else {
      if (test > total) {
        total = test;
      }
      test = 0;
    }
  }
  return total;
};
