const mirror = obj => {
  let keys = Object.keys(obj),
      copy = Object.assign({}, obj);
  for (var i = 0; i < keys.length; i++) {
    copy[keys[i]] = keys[i].split('').reverse().join('');
  }
  return copy;
};
