function matrixAddition(a, b){
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      a[i][j] += b[i][j];
    }
  }
  return a
}
