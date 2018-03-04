function scrollingText(text){
  text = text.toUpperCase();
  let arr = [text];
  for (var i = 0; i < text.length - 1; i++) {
    let hold = arr[i].split('');
    let letter = hold.shift('');
    hold.push(letter);
    arr.push(hold.join(''));
  }
  return arr;
}
