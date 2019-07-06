function pattern(n){
  let x = [];
  for (var i = 0; i < n; i++) {
    let y = '';
    y = 1 + '*'.repeat(i) + (i ? i + 1 : '');
    x.push(y);
  }
  return x.join('\n');
}
