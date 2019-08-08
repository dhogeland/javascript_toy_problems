const generate = length => {
  let x = '';
  while (x.length < length) {
    x += Math.floor(Math.random() * 2);
  }
  return x;
};
