function x() {
  let y = [];
  for (var i = 0; i < 15; i++) {
    if (i % 3 && i % 5) {
      y.push('fizzbuzz');
    } else if (i % 5) {
      y.push('buzz');
    } else if (i % 3) {
      y.push('fizz');
    } else {
      y.push(i);
    }
  }
  return y;
}
