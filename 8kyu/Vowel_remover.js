function shortcut(string){
  let x = 'aeiou', y = [];
  for (var i = 0; i < string.length; i++) {
    if (!x.includes(string[i])) {
      y.push(string[i]);
    }
  }
  return y.join('');
}
