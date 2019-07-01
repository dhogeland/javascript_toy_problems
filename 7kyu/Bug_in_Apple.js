function sc(apple){
  for (var i = 0; i < apple.length; i++) {
    for (var j = 0; j < apple[i].length; j++) {
      if (apple[i][j] === 'B') {
        return [i, j];
      }
    }
  }
}
