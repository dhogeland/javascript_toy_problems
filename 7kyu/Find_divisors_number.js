function getDivisorsCnt(n){
  let num = 1;
  for (var i = 1; i < n; i++) {
    if (n % i == 0) num++;
  }
  return num;
}
