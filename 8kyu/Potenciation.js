function power(x,y){
  if (x == 0 || y == 0) {
    return 1;
  }
  let total = x;
  for (var i = 1; i < y; i++) {
    total *= x;
  }
  return total;
}
