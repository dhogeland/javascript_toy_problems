function seqToOne(n){
  let arr = [];
  if (n <= 1) {
    for (var i = n; i <= 1; i++) {
      arr.push(i);
    }
  } else {
    for (var i = n; i >= 1; i--) {
      arr.push(i);
    }
  }
  return arr;
}
