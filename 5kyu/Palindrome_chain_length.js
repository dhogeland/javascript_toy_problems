var palindromeChainLength = function(n) {
  n = (n +'').split('');
  let m = n.slice();
  let count = 0;
  n = n.reverse();
  while (n.join('') != m.join('')) {
    n = n.join('');
    m = m.join('');
    n = ((+m + +n) + '').split('');
    m = n.slice();
    n = n.reverse();
    count++;
  }
  return count;
};
