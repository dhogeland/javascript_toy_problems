const reverseSeq = n => {
  let arr = [], i = n;
  while (i >= 1) {
    arr.push(i);
    i--;
  }
  return arr;
};
