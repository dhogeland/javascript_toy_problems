function palindrome(string) {
  let lower = string.toLowerCase().match(/[a-z]/g).join(''),
      reverse = [],
      i = 0;
  while (i < lower.length) {
    reverse.unshift(lower[i]);
    i++;
  }
  return lower === reverse.join('');
}
