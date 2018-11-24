function reOrdering(text){
  let x = [];
  text = text.split(' ');
  for (var i = 0; i < text.length; i++) {
    if (text[i][0] == text[i][0].toUpperCase()) {
      x.unshift(text[i])
    } else {
      x.push(text[i]);
    }
  }
  return x.join(' ');
}
