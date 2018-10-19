function solution(){
  let x = Object.values(arguments)
    for (var i = 0; i < x.length; i++) {
      if (x.indexOf(x[i]) != x.lastIndexOf(x[i])) return true;
    }
  return false;
}
