function solution(input, markers){
  let words = input.split("\n");
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < markers.length; j++) {
      if (words[i].includes(markers[j])) {
        words[i] = words[i].slice(0, (words[i].indexOf(markers[j]) - 1));
      }
    }
  }
  return words.join('\n');
}
