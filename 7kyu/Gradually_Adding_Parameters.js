function add() {
  let x = 0;
  for (var i = 1; i <= arguments.length; i++) {
    x += arguments[i - 1] * i;
  }
  return x;
}
