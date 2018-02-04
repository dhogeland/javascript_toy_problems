function solve(str){
  let split = str;
  split = split.split(' ').join('').split('').reverse();
    for (var i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        split.splice(i, 0, ' ');
      }
    }
  return split.join('');
}
