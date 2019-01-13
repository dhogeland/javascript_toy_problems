function capitalsFirst(str){
  let x = [],
      y = [];
      str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
      x.push(str[i]);
    } else if (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123) {
      y.push(str[i]);
    }
  }
  return (x.join(' ') + ' ' + y.join(' ')).trim();
}
