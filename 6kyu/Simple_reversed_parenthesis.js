function solve(s){
  if (s.length % 2 == 1) {
    return -1;
  }
  let count = 0, x = s.split('()').join('');
  while (x.length > 0 || x.length == 2 && x[0] == '(' && x[1] == ')') {
    if (x[0] == ')') {
        x = x.split('');
        x[0] = '(';
        count++;
        x = x.join('');
    } if (x[x.length - 1] == '(') {
        x = x.split('');
        x[x.length - 1] = ')';
        count++;
        x = x.join('');
    }
    x = x.split('()').join('')
  }
  return count;
}
