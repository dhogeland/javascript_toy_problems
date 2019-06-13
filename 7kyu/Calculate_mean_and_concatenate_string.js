function mean(lst){
  let x = [0, ''];
  for (var i = 0; i < lst.length; i++) {
    x[0] += '1234567890'.includes(lst[i]) ? +lst[i] : 0;
    x[1] += '1234567890'.includes(lst[i]) ? '' : lst[i];
  }
  x[0] = x[0] / 10;
  return x;
}
