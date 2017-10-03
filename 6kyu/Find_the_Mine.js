function mineLocation(field){
  for (var i = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }
}
