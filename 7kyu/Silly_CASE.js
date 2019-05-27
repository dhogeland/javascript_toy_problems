function sillycase(silly) {
  silly = silly.split('');
  for (var i = 0; i < silly.length / 2; i++) {
    silly[i] = silly[i].toLowerCase();
  }
  for (var i = Math.ceil(silly.length / 2); i < silly.length; i++) {
    silly[i] = silly[i].toUpperCase();
  }
  return silly.join('');
}
