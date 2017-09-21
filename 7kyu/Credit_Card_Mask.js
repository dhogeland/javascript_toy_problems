function maskify(cc) {
  let split = cc.split('');
  for (var i = 0; i < split.length - 4; i++) {
    split[i] = '#';
  }
  return split.join('');
}
