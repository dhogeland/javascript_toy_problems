function doubleCheck(str){
  let x = str.toLowerCase();
  for (var i = 0; i < x.length - 1; i++) {
    if (x[i] === x[i + 1]) {
      return true;
    }
  }
  return false;
}
