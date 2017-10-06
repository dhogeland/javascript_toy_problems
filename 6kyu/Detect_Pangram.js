function isPangram(string){
  let upper = string.slice().toUpperCase();
  for (var i = 65; i < 91; i++) {
    if (!upper.includes(String.fromCharCode(i))) {
      return false;
    }
  }
  return true;
}
