function portion(a,i,n){
  let myArray = [];
  if (a.length < i || a.length < n || n - i > a.length || n + i > a.length) {
    return -1;
  }
  if (i < 0) {
    let start = ((a.length) + i) - n;
    for (var j = start; myArray.length < n; j++) {
      myArray.push(a[j]);
    }
  } else {
    for (var k = i; myArray.length < n; k++) {
      myArray.push(a[k])
    }
  }
  return myArray;
}
