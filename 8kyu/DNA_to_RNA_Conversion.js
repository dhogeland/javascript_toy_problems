function DNAtoRNA(dna) {
  for (var i = 0; i < dna.length; i++) {
    dna = dna.replace('T', 'U');
  }
  return dna;
}
