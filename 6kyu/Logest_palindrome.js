longestPalindrome=function(s){
  if (s.length === 1) {
    return 1;
  } if (s.length === 2 && s[0] === s[1]) {
    return 2;
  }
  var len = 0;
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (s.substr(i, j) === s.substr(i, j).split('').reverse().join('')) {
        if (s.substr(i, j).length > len) {
          len = s.substr(i, j).length
        }
      }
    }
  }
  return len;
}
