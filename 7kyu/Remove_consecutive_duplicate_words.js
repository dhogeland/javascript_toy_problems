const removeConsecutiveDuplicates = function(s) {
  let x = s.split(' '), y = [x[0]];
  for (var i = 1; i < x.length; i++) {
    if (x[i] != y[y.length - 1]) {
      y.push(x[i]);
    }
  }
  return y.join(' ');
}
