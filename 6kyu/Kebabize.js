function kebabize(str) {
  let x = '';
  for (var i = 0; i < str.length; i++) {
    x += '1234567890'.includes(str[i]) ? '' : str[i] === str[i].toLowerCase() ? str[i] : x.length ===  0 ? str[i].toLowerCase() : '-' + str[i].toLowerCase();
  }
  return x;
}
