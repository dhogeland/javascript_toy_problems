function mean(town, strng, myVar) {
    if (!strng.includes(town)) return -1;
    let x = strng.split('\n');
    for (var i = 0; i < x.length; i++) {
      let y = x[i].split(':');
      if (town === y[0]) {
        let z = y[1].split(','),
          total = 0,
          arr = [];
      for (var j = 0; j < z.length; j++) {
        z[j] = z[j].split(' ');
        total += +z[j][1];
        arr[j] = z[j][1];
      }
      x = total;
      y = total / z.length;
      if (myVar) {
        return [y,arr]
      }
      return total / z.length;
    }
  }
  return -1;
}
function variance(town, strng) {
  let x = mean(town,strng, true);
  if (x == -1) return -1;
  let y = 0;
  for (var j = 0; j < x[1].length; j++) {
    let z = (x[0] - x[1][j]) * (x[0] - x[1][j]);
    y += z;
  }
  return y / x[1].length;
}
