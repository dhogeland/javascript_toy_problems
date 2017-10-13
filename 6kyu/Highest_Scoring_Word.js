function high(x){
  let split = x.split(' '),
      highest = 0,
      word = 0;
  for (var i = 0; i < split.length; i++) {
    let total = 0;
    split[i].split('').forEach(letter => total+= letter.charCodeAt(0) - 96);
    if (total > highest) {
      highest = total;
      word = i;
    }
  }
  return split[word];
}
