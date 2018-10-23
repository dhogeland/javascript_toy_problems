function capMe(names) {
  for (var i = 0; i < names.length; i++) {
    names[i] = names[i].toLowerCase();
    names[i] = names[i].split('');
    names[i][0] = names[i][0].toUpperCase();
    names[i] = names[i].join('');
  }
  return names;
}
