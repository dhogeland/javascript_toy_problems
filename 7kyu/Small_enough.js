function smallEnough(a, limit){
  for (var i = 0; i < a.length; i++) {
    if (a[i] > limit) return false;
  }
  return true;
}
