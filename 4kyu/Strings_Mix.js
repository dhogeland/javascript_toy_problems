function mix(s1, s2) {
  let one = {},
      two = {},
      x = s1.split(' ').join(''),
      y = s2.split(' ').join('');
  for (var i = 0; i < x.length; i++) {
    if (x[i] === x[i].toLowerCase() && /[a-z]/.test(x[i])) {
      if (one[x[i]]) {
        one[x[i]] = one[x[i]] + x[i];
      } else {
        one[x[i]] = x[i];
      }
    }
  }
  for (var i = 0; i < y.length; i++) {
    if (y[i] === y[i].toLowerCase() && /[a-z]/.test(y[i])) {
      if (two[y[i]]) {
        two[y[i]] = two[y[i]] + y[i];
      } else {
        two[y[i]] = y[i];
      }
    }
  }
  x = Object.keys(one),
  y = Object.keys(two);
  let oneArr = [],
      twoArr = [],
      equalArr = [],
      z = [];
  for (var i = 0; i < x.length; i++) {
    let str = '';
    if (one[x[i]].length > 1) {
      if (!y.includes(x[i])) {
      str += '1:' + one[x[i]];
      } else {
        if (one[x[i]].length === two[x[i]].length) {
          str += '=:' + one[x[i]];
        } else if (one[x[i]].length > two[x[i]].length) {
          str += '1:' + one[x[i]];
        } else {
          str += '2:' + two[x[i]];
        }
      }
    }
    if (str != '') {
      z.push(str);
      if (str[0] === '=') {
        equalArr.push(str);
      } else if (str[0] === '1') {
        oneArr.push(str);
      } else {
        twoArr.push(str);
      }
    }
  }
  for (var i = 0; i < y.length; i++) {
    let str = '';
    if (two[y[i]].length > 1) {
      if (!x.includes(y[i]) || one[y[i]].length <= 1) {
      str += '2:' + two[y[i]];
      } else if (!z.join('').includes(y[i])) {
        if (two[y[i]].length === one[y[i]].length) {
          str += '=:' + two[y[i]];
        } else if (two[y[i]].length > one[y[i]].length) {
          str += '2:' + two[y[i]];
        } else {
          str += '1:' + two[y[i]];
        }
      }
    }
    if (str != '') {
      z.push(str);
      if (str[0] === '=') {
        equalArr.push(str);
      } else if (str[0] === '1') {
        oneArr.push(str);
      } else {
        twoArr.push(str);
      }
    }
  }

oneArr.sort(function(a,b) {
  if (a[2] < b[2]) {
    return -1;
  } else if (a[2] > b[2]) {
    return 1;
  } return 0;
}).sort(function(a,b) {
  if (a.length < b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  } return 0;
});

twoArr.sort(function(a,b) {
  if (a[2] < b[2]) {
    return -1;
  } else if (a[2] > b[2]) {
    return 1;
  } return 0;
}).sort(function(a,b) {
  if (a.length < b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  } return 0;
});

equalArr.sort(function(a,b) {
  if (a[2] < b[2]) {
    return -1;
  } else if (a[2] > b[2]) {
    return 1;
  } return 0;
}).sort(function(a,b) {
  if (a.length < b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  } return 0;
});
let result = [],
      a = oneArr.length > 0 ? oneArr[0].length : 0,
      b = twoArr.length > 0 ? twoArr[0].length : 0,
      c = equalArr.length > 0 ? equalArr[0].length : 0,
    max = Math.max(a, b, c),
    len = oneArr.length + twoArr.length + equalArr.length;
while (max > 0) {
  while (oneArr.length && oneArr[0].length === max) {
    result.push(oneArr[0]);
    oneArr.shift();
  }
  while (twoArr.length && twoArr[0].length === max) {
    result.push(twoArr[0]);
    twoArr.shift();
  }
  while (equalArr.length && equalArr[0].length === max) {
    result.push(equalArr[0]);
    equalArr.shift();
  }
  max--;
}
return result.join('/');
