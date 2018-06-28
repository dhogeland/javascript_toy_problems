function replace(s){
  let x = 'aeiouAEIOU';
  s = s.split('');
  for (var i = 0; i < s.length; i++) {
    if (x.includes(s[i])) s[i] = '!';
  }
  return s.join('');
}
