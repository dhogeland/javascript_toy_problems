function expandedForm(num) {
  let split = (num + '').split(''),
      expanded = '',
      i = 0;
  while (i < split.length) {
    if (split[i] !== '0') {
      if (i > 0) {
        expanded += ' + ';
      }
      expanded += split[i];
      let j = i;
      while (j < split.length - 1) {
        expanded += '0';
        ++j;
      }
    }
    ++i;
  }
  return expanded;
}
