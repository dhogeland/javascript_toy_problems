function recycleMe(recycle){
  let r = 0, g = 0, b = 0;
  for (var i = 0; i < recycle.length; i++) {
    if (recycle[i] > 0) {
      r++;
    } else if (recycle[i] < 0) {
      g++;
    } else {
      b++;
    }
  }
  return [r, g, b];
}
