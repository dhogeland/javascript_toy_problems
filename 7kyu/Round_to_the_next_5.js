function roundToNext5(n){
  if (n == 0) return n;
  while (n % 5 != 0) {
    n++;
  }
  return n;
}
