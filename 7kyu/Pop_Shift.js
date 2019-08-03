function popShift(s){
  let x = '',
      y = '';
  s = s.split('');
  while (s.length > 1) {
    x += s.pop();
    y += s.shift();
  }
  return [x, y, s.join('')];
}
