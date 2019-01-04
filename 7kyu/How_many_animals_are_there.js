function countAnimals(sentence) {
  let x = sentence.split(' '),
      y = 0;
  for (var i = 0; i < x.length; i++) {
    if (/[1-9]/.test(x[i])) {
      y += +x[i];
    }
  }
  return y;
}
