function meeting(x, need){
  if (!need) return 'Game On';
  let arr = [];
  for (var i = 0; i < x.length && need > 0; i++) {
    if (x[i][0].length < x[i][1]) {
      if (x[i][1] - x[i][0].length > need) {
        arr.push(need);
        need = 0;
      } else {
        arr.push(x[i][1] - x[i][0].length);
        need -= x[i][1] - x[i][0].length;
      }
    } else {
      arr.push(0)
    }
  }
  return need > 0 ? 'Not enough!': arr;
}
