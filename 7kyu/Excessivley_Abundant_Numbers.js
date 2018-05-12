function abundantNumber(num) {
  let x = 1;
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) x+= i
  }
  return x > num;
}
