function lettersToNumbers(s) {
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      total += +s[i];
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      total += (s.charCodeAt(i) - 96);
    } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      total += (s.charCodeAt(i) - 64) * 2;
    }
  }
  return total;
}
