function displayValue(value) {
 let m = 0, w = 0, d = 0, h = 0, mn = 0, left = value, x = '';
  while (left >= 40320) {
    left -= 40320;
    m += 1;
  }
  if (m > 1) {
   m = m + ' months';
  } else if (m == 1) {
   m = m + ' month';
  } else {
    m = 'x';
  }
  while (left >= 10080) {
    left -= 10080;
    w += 1;
  }
  if (w > 1) {
   w = w + ' weeks';
  } else if (w == 1) {
   w = w + ' week';
  } else {
    w = 'x';
  }
  while (left >= 1440) {
    left -= 1440;
    d += 1;
  }
  if (d > 1) {
   d = d + ' days';
  } else if (d == 1) {
   d = d + ' day';
  } else {
    d = 'x';
  }
  while (left >= 60) {
    left -= 60;
    h += 1;
  }
  if (h > 1) {
   h = h + ' hours';
  } else if (h == 1) {
   h = h + ' hour';
  } else {
    h = 'x';
  }
  while (left > 0) {
    mn += 1;
    left -= 1;
  }
  if (mn > 1) {
   mn = mn + ' minutes';
  } else if (mn == 1) {
   mn = mn + ' minute';
  } else {
    mn = 'x';
  }
  if (m != 'x') x += m;
  if (w != 'x') {
    if (x != '') {
      x += ' ' + w;
    } else {
      x += w;
    }
  }
  if (d != 'x') {
    if (x != '') {
      x += ' ' + d;
    } else {
      x += d;
    }
  }
  if (h != 'x') {
    if (x != '') {
      x += ' ' + h;
    } else {
      x += h;
    }
  }
  if (mn != 'x') {
    if (x != '') {
      x += ' ' + mn;
    } else {
      x += mn;
    }
  }
  return x;
}
