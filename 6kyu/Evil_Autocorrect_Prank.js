function autocorrect(input){
  let a = '.,!:;';
  if (a.includes(input[input.length - 1])) {
    input = input.split('');
    a = input.pop();
    input = input.join('');
  }
  let x = input.split(' ');
  for (var i = 0; i < x.length; i++) {
    if (x[i].toLowerCase() === 'you') x[i] = 'your sister';
    if (x[i].toLowerCase() === 'u') x[i] = 'your sister';
    if (x[i].toLowerCase().includes('youu')) x[i] = 'your sister';
  }
  return a.length === 5 ? x.join(' ') : x.join(' ') + a;
}
