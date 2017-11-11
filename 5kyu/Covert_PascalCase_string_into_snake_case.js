function toUnderscore(string) {
  if (typeof string == 'number') {
    return string.toString();
  }
  let arr = [];
  for (var i = 0; i < string.length; i++) {
    if (i == 0) {
      arr.push(string[i].toLowerCase());
    }
    else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      arr.push('_', string[i].toLowerCase());
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join('');
}
