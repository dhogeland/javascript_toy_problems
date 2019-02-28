function encode(str) {
 let abc = '0abcdefghijklmnopqrstuvwxyz',
     x = '';
     str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (abc.indexOf(str[i]) > -1) {
      x += abc.indexOf(str[i]);
    } else {
      x += str[i];
    }
  }
  return x;
}
