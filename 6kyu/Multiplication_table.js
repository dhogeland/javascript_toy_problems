multiplicationTable = function(size) {
  let x = 1,
      y = [];
  for (var i = 0; i < size; i++) {
    y[i] = [];
    for (var j = 1; j <= size; j++) {
      y[i].push(x * j);
    }
    x += 1;
  }
  return y;
}
