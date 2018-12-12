function dbSort(a){
  let x = [],
      y = [];
  for (var i = 0; i < a.length; i++) {
    if (typeof a[i] === 'number') {
      x.push(a[i]);
    } else {
      y.push(a[i]);
    }
  }
  x = x.sort((a,b) => a - b);
  y = y.sort();
  return [...x,...y];
}
