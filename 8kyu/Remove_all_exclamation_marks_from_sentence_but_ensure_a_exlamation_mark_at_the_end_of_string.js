function remove(s){
  let x = s.split('');
  x = x.filter(y => y != '!');
  return x.join('') + '!';
}
