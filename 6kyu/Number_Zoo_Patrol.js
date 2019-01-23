function findNumber(array) {
  let x = 0,
      y = 0;
  for (var i = 0; i <= array.length + 1; i++) {
    x += i;
    y += array[i] ? array[i] : 0;
  }
  return  y == x ? i + 1 : x - y;
}
