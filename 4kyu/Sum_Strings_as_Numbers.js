function sumStrings(a,b) {
  let carry = 0, max, min, total = [], x, y, hold;
  if (a.length == b.length) {
    max = a.split('');
    min = b.split('');
  } else {
    a.length > b.length ? max = a.split('') : max = b.split('');
    a.length < b.length ? min = a.split('') : min = b.split('');
  }
  x = max.length - 1;
  y = min.length - 1;
  while (y >= 0) {
    hold = (+max[x] + +min[y] + +carry + '').split('');
    if (hold.length > 1) {
      carry = hold[0];
      total.unshift(hold[1]);
    } else {
      carry = 0;
      total.unshift(hold[0]);
    }
    y--;
    x--;
  }
  if (x >= 0) {
    while (x >= 0) {
      hold = (+max[x] + +carry + '').split('');
      if (hold.length > 1) {
      carry = hold[0];
      total.unshift(hold[1]);
      x--;
      } else {
        total.unshift(hold[0]);
        carry = 0;
        x--;
      }
    }
  }
  if (carry != 0) {
    total.unshift(carry);
  }
  while (total[0] == 0) {
    total.shift(0);
  }
  return total.join('');
}
