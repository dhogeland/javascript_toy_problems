function lowercaseCount(str){
  let rx = new RegExp('[a-z]'),
      total = 0;
  for (var i = 0; i < str.length; i++) {
    if (rx.test(str[i])) total++;
  }
  return total;
}
