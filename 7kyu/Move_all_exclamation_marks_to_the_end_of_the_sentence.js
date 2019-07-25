function remove(s){
  let x = s.replace(/!/g, '');
  while (x.length < s.length) {
    x += '!';
  }
  return x;
}
