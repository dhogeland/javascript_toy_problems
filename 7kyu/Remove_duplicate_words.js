const removeDuplicateWords = function(s) {
  let x = s.split(' '), y = [x[0]];
  for (var i = 1; i < x.length; i++) {
    if (!y.includes(x[i])) {
      y.push(x[i]);
    }
  }
  return y.join(' ');
}
