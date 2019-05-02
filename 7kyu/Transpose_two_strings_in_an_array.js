function transposeTwoStrings(arr){
  let x = '',
      y = arr[0].length > arr[1].length ? arr[0].length : arr[1].length;
  for (var i = 0; i < y; i++) {
    x += (arr[0][i] || ' ') + ' ' + (arr[1][i] || ' ') + (i < y - 1 ? '\n' : '');
  }
  return x;
}
