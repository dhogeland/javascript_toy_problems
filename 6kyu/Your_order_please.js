function order(words){
  if (words == '') {
    return words;
  }
  let order = [];
  words = words.split(' ');
  for (var i = 1; i <= words.length; i++) {
    for (var j = 0; j < words.length; j++) {
      if (words[j].includes(i)) {
        order.push(words[j]);
      }
    }
  }
  return order.join(' ');;
}
