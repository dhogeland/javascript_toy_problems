function sepStr(arr) {
  let split = arr.split(' ');
  let length = 0;
  let answer = [];
  for (var i = 0; i < split.length; i++) {
    if (split[i].length > length) {
      length = split[i].length;
    }
    split[i] = split[i].split('');
  }
  while (answer.length < length) {
    answer.push([]);
  }
  for (var j = 0; j < split.length; j++) {
    for (var k = 0; k < length; k++) {
      if (split[j][k]) {
        answer[k].push(split[j][k]);
      } else {
        answer[k].push('');
      }
    }
  }
  return answer;
}
