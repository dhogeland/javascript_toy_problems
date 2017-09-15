function isAllPossibilities(x){
  for (var i = 0; i < x.length; i++) {
    if (!x.includes(i)) {
      return false;
    }
  }
  return x.length > 0;
}
