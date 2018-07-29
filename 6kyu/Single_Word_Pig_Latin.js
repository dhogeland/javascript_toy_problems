function pigLatin(string){
  string = string.toLowerCase();
  if (/\d/gi.test(string)) return null;
  if (!/[aeiou]/gi.test(string)) return string + 'ay';
  if ('aeiou'.includes(string[0])) return string + 'way';
  string = string.split('');
  while (!'aeiou'.includes(string[0])) {
    string.push(string[0]);
    string.shift();
  }
  return string.join('') + 'ay';
}
