function vowel2index(str) {
   let x = 'aeiouAEIOU';
   str = str.split('');
   for (var i = 0; i < str.length; i++) {
     if (x.includes(str[i])) str[i] = i + 1;
   }
   return str.join('');
}
