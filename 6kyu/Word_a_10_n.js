function abbreviate(string) {
  let split = string.split(' ');
  for (var i = 0; i < split.length; i++) {
    let word;
    if (split[i].length >= 4) {
      if (!split[i].includes('-') && !split[i].includes(',')) {
      word = split[i][0] + (split[i].length - 2) + split[i][split[i].length - 1];
      split[i] = word;
      } else if (split[i].includes('-')){
        split[i] = split[i].split('-');
        split[i][0] = split[i][0][0] + (split[i][0].length - 2) + split[i][0][split[i][0].length - 1];
        split[i][1] = split[i][1][0] + (split[i][1].length - 2) + split[i][1][split[i][1].length - 1];
        split[i] = split[i].join('-');
      } else if (split[i].includes(',')){
        split[i] = split[i][0] + (split[i].length - 3) + split[i][split[i].length - 2] + ',';
      }
    }
  }
  return split.join(' ');
}
