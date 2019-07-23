function dropCap(n) {
  n = n.split(' ');
  for (var i = 0; i < n.length; i++) {
    if (n[i].length > 2) {
      n[i] = n[i].toLowerCase();
      n[i] = n[i].split('');
      n[i][0] = n[i][0].toUpperCase();
      n[i] = n[i].join('');
    }
  }
  return n.join(' ');
}
