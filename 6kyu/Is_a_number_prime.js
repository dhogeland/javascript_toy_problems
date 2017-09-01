function isPrime(num) {
  if (num == 0 || num == 1 || num == -1) {
    return false
  }
  if (num == 2) {
    return true;
  } else {
    let half = num / 2;
    for (var i = 2; i <= half; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true;
  }
}
