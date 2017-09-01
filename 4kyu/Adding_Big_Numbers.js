function add(a, b) {
  let x = a.split('');
  let y = b.split('');
  let answer = [];
  let carry = 0;
  let xLength = x.length - 1;
  let yLength = y.length - 1;
  while (xLength >= 0 && yLength >= 0) {
    let hold = 0;
    hold = String(+x[xLength] + +y[yLength] + +carry);
    if (hold.length > 1) {
      hold = hold.split('')
      carry = hold[0];
      answer.unshift(hold[1]);
      xLength--;
      yLength--;
    } else {
        answer.unshift(hold[0]);
        xLength--;
        yLength--;
        carry = '0';
    }
  }
  if (xLength >= 0) {
    while(xLength >= 0) {
      hold = String(+x[xLength] + +carry);
        if (hold.length > 1) {
          hold = hold.split('')
          carry = hold[0];
          answer.unshift(hold[1]);
          xLength--;
        } else {
            answer.unshift(hold[0]);
            carry = '0';
            xLength--;
        }
      }
    }
  if (yLength >= 0) {
    while(yLength >= 0) {
      hold = String(+y[yLength] + +carry);
        if (hold.length > 1) {
          hold = hold.split('')
          carry = hold[0];
          answer.unshift(hold[1]);
          yLength--;
        } else {
            answer.unshift(hold[0]);
            carry = '0';
            yLength--;
        }
      }
  }
  if (carry !== '0') {
    answer.unshift(carry);
  }
  return answer.join('')
}
