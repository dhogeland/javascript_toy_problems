function grabscrab(anagram, dictionary) {
  let x = anagram.split('').sort().join(''),
      y = [];
  for (var i = 0; i < dictionary.length; i++) {
    let z = dictionary[i].split('').sort().join('');
    if (z == x) y.push(dictionary[i]);
  }
  return y;
}
