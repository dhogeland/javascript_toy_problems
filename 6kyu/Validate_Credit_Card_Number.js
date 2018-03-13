function validate(n){
  n = n.toString().split('');
  var i = n.length % 2 == 0 ? 0 : 1;
  for (i; i < n.length; i+=2) {
    n[i] = n[i] * 2;
    if (n[i] > 9) {
      n[i] = n[i] - 9;
    }
  }
  return n.reduce((a,b) => +a + +b) % 10 == 0;
}
