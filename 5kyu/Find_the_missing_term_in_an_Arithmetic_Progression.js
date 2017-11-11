var findMissing = function (list) {
  let x = list[1] - list[0],
      y = list[list.length - 1] - list[list.length - 2],
      i = 0;
  if (x == y || Math.abs(x) < Math.abs(y)) {
    while (list[i] + x == list[i + 1]) {
      i++;
    }
    return list[i] + x;
  }
 return list[0] + y;
}
