function calculator(a,b,sign){
  if (typeof a == 'number' && typeof b == 'number') {
    if (sign == '+') {
      return a + b;
    } if (sign == '/') {
      return a / b;
    } if (sign == '-') {
      return a - b;
    } if (sign == '*') {
      return a * b;
    }
  }
  return 'unknown value';
}
