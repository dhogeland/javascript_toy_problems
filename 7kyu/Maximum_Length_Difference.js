function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) {
    return -1;
  }
  let num = 0;
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      if (Math.abs(a1[i].length - a2[j].length) > num) {
        num = Math.abs(a1[i].length - a2[j].length);
      }
    }
  }
  return num;
}
