function DNAStrand(dna){
  let splitUp = dna.split('');
  let other = '';
  for (var i = 0; i < splitUp.length; i++) {
    switch(splitUp[i]) {
      case 'A':
        other += 'T';
        break;
      case 'T':
        other += 'A';
        break;
      case 'G':
        other += 'C';
        break;
      case 'C':
        other += 'G';
        break;
    }
  }
  return other;
}
