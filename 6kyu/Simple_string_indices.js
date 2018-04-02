function solve(str,idx){
  let count = 0;
  if (str[idx] !='(') {
    return -1;
  }
  for (var i = idx + 1; i < str.length; i++) {
    if (str[i] == ')' && count == 0) {
      return i
    } else if (str[i] == '(') {
      count++;
    } else if (str[i] == ')') {
      count--;
    }
  }
  return -1;
}
