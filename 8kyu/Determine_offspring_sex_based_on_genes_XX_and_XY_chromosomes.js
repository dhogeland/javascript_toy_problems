function chromosomeCheck(sperm) {
  let x = "Congratulations! You're going to have a ";
  return !sperm.includes('Y') ? x + 'daughter.' : x + 'son.';
}
