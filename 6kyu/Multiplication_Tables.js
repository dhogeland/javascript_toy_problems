function multiplicationTable(row,col){
  let x = [],
      y = [],
      z;
  for (var i = 1; i <= col; i++) {
    y.push(i);
  }
  x.push(y);
  i = 2;
  while (x.length < row) {
    z = [];
    for (var j = 0; j < col; j++) {
      z.push(i * y[j]);
    }
    x.push(z);
    i++;
  }
  return x;
}
