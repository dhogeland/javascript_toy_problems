function solution(pairs){
  if (Object.keys(pairs).length == 0) return '';
  let keys = Object.keys(pairs),
      values = Object.values(pairs),
      str = keys[0] + ' = ' + values[0];
  for (var i = 1; i < keys.length; i++) {
    str += ',' + keys[i] + ' = ' + values[i];
  }
  return str;
}
