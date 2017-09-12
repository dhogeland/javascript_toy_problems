var countBits = function(n) {
  let bitCount = n.toString(2).split('').reduce((total, bit) => {
    return +total + +bit;
  });
  return +bitCount;
};
