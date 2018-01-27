function doubles(s){
  let str = '';
  function remove(x) {
    let hold = '';
      for (var i = 0; i < x.length; i++) {
        if (x[i] != x[i + 1]) {
          hold += x[i]
        } else {
          i++;
        }
      }
    str = hold;
    return hold;
  }
  remove(s);
  remove(str)
  remove(str);
  remove(str);
  remove(str);
  return str;
}
