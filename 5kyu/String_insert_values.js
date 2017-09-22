var format = function (str, obj) {
  let theKeys = Object.keys(obj);
  let split = str.split(' ');
  for (var i = 0; i < split.length; i++) {
    if (split[i].includes('{')) {
      let check = split[i].split('{').join('').split('}');
      if (theKeys.includes(check[0])) {
        split[i] = obj[check[0]];
        if (check[1]) {
          split[i] = split[i] + check[1];
        }
      }
    }
  }
  return split.join(' ');
};
