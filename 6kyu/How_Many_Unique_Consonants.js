function countConsonants(str) {
  let lower = str.toLowerCase(), dupes = [];
  lower = lower.match(/[^aeiou0-9]/g);
  if (lower == null) {
    return 0;
  }
  lower = lower.join('').match(/[a-z]/g).forEach(x => {
    if (!dupes.includes(x)) {
      dupes.push(x);
    }
  })
  return dupes.length;
}
