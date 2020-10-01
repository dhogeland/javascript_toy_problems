var encryptThis = function(text) {
  let x = text.split(' ');
  let y = x.map((index) => {
    index = index.split('');
    index[0] = index[0].charCodeAt(0);
    if (index.length > 1) {
      let y = index[index.length - 1];
      index[index.length - 1] = index[1];
      index[1] = y;
    }
    return index = index.join('');
  });
  return y.join(' ');
}
