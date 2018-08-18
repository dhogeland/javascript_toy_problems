function isFlush(cards) {
  let x = cards.join('');
  if (x.includes('S')) {
    x = x.split('S').join('');
    return (!x.includes('C') && !x.includes('D') && !x.includes('H'));
  }
  if (x.includes('C')) {
    x = x.split('C').join('');
    return (!x.includes('S') && !x.includes('D') && !x.includes('H'));
  }
  if (x.includes('D')) {
    x = x.split('D').join('');
    return (!x.includes('C') && !x.includes('S') && !x.includes('H'));
  }
  if (x.includes('H')) {
    x = x.split('H').join('');
    return (!x.includes('C') && !x.includes('D') && !x.includes('S'));
  }
}
