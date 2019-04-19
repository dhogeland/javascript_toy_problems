function multiply(number){
  let x = (number + ''),
      y = number;
  x = x[0] === '-' ? x.length - 1 : x.length;
  for (var i = 0; i < x; i++) {
    y = y * 5;
  }
  return y;
}
