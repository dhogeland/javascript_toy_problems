function encode(plaintext){
  let copy = plaintext.slice();
  copy = copy.split(' ');
  for (var i = 0; i < copy.length; i++) {
    copy[i] = copy[i].split('').reverse().join('');
    copy[i] = copy[i].split('');
    copy[i].push(copy[i].shift());
    copy[i] = copy[i].join('');
  }
  return copy.join(' ');
}
