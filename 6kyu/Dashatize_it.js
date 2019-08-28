function dashatize(num) {
  let x = (Math.abs(num) + '').split('');
  for (var i = 0; i < x.length && Math.abs(num) > 9; i++) {
    if (+x[i] % 2 === 1) {
      x[i] = i === 0 ? x[0] + '-' : x[i - 1].includes('-') ? i === x.length - 1 ? x[i] : x[i] + '-' : i === x.length - 1 ? '-' + x[i] : '-' + x[i] + '-';
    }
  }
  return x.join('');
};
