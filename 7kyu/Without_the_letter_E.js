function findE(str){
  if (str === null) return null;
  if (str === '') return '';
  if (!str.toLowerCase().includes('e')) return 'There is no "e".';
  let x = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'e') x++;
  }
  return x + '';
}
