function sortArray(array) {
  if (array.length == 0) {
    return array;
  }
  let odd = [];
  array.forEach(function(x) {
    if (x % 2 != 0) {
      odd.push(x);
      array[array.indexOf(x)] = 'x';
    }
  });
  odd = odd.sort(function(a,b) {
    return a - b;
    });
  for (var i = 0; i < odd.length; i++) {
    array[array.indexOf('x')] = odd[i];
  }
  return array;
}
