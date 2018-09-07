function diamond(n){
  let x = [], y = 1;
  if (n <= 0 || n % 2 == 0) return null;
  x[0] = '*'.repeat(n) + '\n';
  for (var i = 2; i <= n; i++) {
    let z = ' '.repeat(y) + '*'.repeat(n - i) + '\n';
    x.push(z);
    x.unshift(z);
    i++;
    y++;
  }
  return x.join('');
}
