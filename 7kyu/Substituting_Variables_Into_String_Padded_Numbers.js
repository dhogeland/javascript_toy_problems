function solution(value){
  let x = value + '';
  while (x.length < 5) {
    x = 0 + x;
  }
  return 'Value is ' + x;
}
