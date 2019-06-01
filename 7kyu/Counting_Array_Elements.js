function count(array){
  let x = {};
  for (var i = 0; i < array.length; i++) {
    if (!x[array[i]]) {
      x[array[i]] = 1;
    } else {
      x[array[i]] += 1;
    }
  }
  return x;
}
