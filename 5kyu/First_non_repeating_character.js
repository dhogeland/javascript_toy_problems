function firstNonRepeatingLetter(s) {
  let copy = s.toLowerCase(),
      junk = '';
  for (var i = 0; i < copy.length; i++) {
    if (!copy.substring(i + 1).includes(copy[i])) {
      if (!junk.includes(copy[i])) {
      return s[i];
      }
    } junk += copy[i];
  }
  return '';
}
