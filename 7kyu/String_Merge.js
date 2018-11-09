function stringMerge(string1, string2, letter){
  let x = [];
  for (var i = 0; i < string1.indexOf(letter); i++) {
    x.push(string1[i]);
  }
  for (var j = string2.indexOf(letter); j < string2.length; j++) {
    x.push(string2[j]);
  }
  return x.join('');
}
