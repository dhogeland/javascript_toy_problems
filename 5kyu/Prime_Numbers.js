function isPrime(number) {
  let count = 0;
  if (number <= 1) {
    return false;
  }
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count <= 2;
}

function getPrimes(start, finish) {
  let low = Math.min(start, finish),
      high = Math.max(start, finish),
      primes = [];
  if (low <= 1) {
    if (high <= 1) {
      return [];
    }
    if (high >= 5 && low < 5) {
    low = 5;
    primes.push(2, 3);
    }
  }
  for (var j = low; j <= high; j++) {
    let count = 0;
    for (var k = 2; k < j; k++) {
      if (j % k == 0) {
        count++;
        break;
      }
    }
    if (count == 0) {
      primes.push(j);
    }
  }
  return primes;
}
