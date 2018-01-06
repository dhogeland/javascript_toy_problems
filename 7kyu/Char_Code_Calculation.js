function calc(x){
  let total = '';
  for (var i = 0; i < x.length; i++) {
    total += x.charCodeAt(i);
  }
  total = total.match(/7/g);
  return total ? total.length * 6 : 0;
}
