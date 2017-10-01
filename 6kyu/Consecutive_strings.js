function longestConsec(strarr, k) {
  if (k > strarr.length) {
    return '';
  }
  let longest = '';
  for (var i = 0; i <= strarr.length - k; i++) {
    let testing = '';
    for (var j = 0; j < k; j++) {
      testing += strarr[i + j];
      if (testing.length > longest.length) {
        longest = testing;
      }
    }
  }
  return longest
}
