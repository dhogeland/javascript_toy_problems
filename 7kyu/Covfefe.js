function covfefe(str){
  if (!str.includes('coverage')) return str + ' covfefe';
  let x = str.split(' '), y = 0;
  while (y < x.length) {
    if (x[y] == 'coverage') x[y] = 'covfefe';
    if (x[y].includes('coverage')) {
      x[y] = x[y].split('coverage').join('covfefe');
    }
    y += 1;
  }
  return x.join(' ');
}
