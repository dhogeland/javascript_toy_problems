function explode(s) {
  let split = s.split('');
  for (var i = 0; i < split.length; i++) {
    let times = +split[i], hold = split[i];
    if (split[i] == '0') {
      hold = '';
    }
    for (var j = 1; j < times; j++) {
      hold += times;
    }
    split[i] = hold;
  }
  return split.join('');
}
