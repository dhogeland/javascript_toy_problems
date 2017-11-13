function solve(a,b){
  let arr = [];
  while (arr.length < b.length) {
    arr.push(0);
  }
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        arr[j] += 1;
      }
    }
  }
  return arr;
}
