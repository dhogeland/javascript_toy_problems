var splitInParts = function(s, partLength){
  let x = '';
  for (var i = 0; i < s.length; i += partLength) {
    let y = '';
    for (var j = 0; j < partLength; j++) {
      y += j + i < s.length ? s[j + i] : '';
    }
    x += i > 0 ? ' ' + y : y;
  }
  return x;
}
