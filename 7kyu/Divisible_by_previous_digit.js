function divisibleByLast(n) {
  let arr = [false], x = (n + '').split('');;
  for (var i = 1; i < x.length; i++) {
    if (x[i] == 0 || (x[i] % x[i - 1]) == 0) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
}
