function chessBoard(rows, columns) {
  let x = false,
      y = [];
  for (var i = 0; i < rows; i++) {
    y[i] = [];
    for (var j = 0; j < columns; j++) {
      x = !x;
      y[i].push(x ? 'O' : 'X');
    }
    x = columns % 2 === 0 ? !x : x;
  }
  return y;
}
