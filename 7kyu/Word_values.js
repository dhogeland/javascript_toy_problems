function wordValue(a) {
  let abc = '=abcdefghijklmnopqrstuvwxyz',
      arr = [];
  for (var i = 0; i < a.length; i++) {
    let x = 0;
    for (var j = 0; j < a[i].length; j++) {
      x += a[i][j] != ' ' ? abc.indexOf(a[i][j]) : 0;
    }
    arr.push(x * (i + 1));
  }
  return arr;
}
