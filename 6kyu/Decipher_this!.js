function decipherThis(str) {
  let x = str.split(' ');
  let y = x.map((index) => {
    index = index.split('');
    let z = '';
    while (+index[0] >= 0) {
      z += index.shift();
    }
    index.unshift(String.fromCharCode(+z));
    if (index.length > 1) {
      let y = index[1];
      index[1] = index[index.length - 1];
      index[index.length - 1] = y;
    }
    return index = index.join('');
  });
  return y.join(' ');
}; 
