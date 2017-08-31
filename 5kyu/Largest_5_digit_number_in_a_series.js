function solution(digits){
  let split = digits.split('')
  let theLength = split.length - 4;
  let ourNumber = 0;
  for (var i = 0; i < theLength; i++) {
    let myArray = [];
    myArray.push(split[i], split[i + 1], split[i + 2], split[i + 3], split[i +4])
    if (+(myArray.join('')) > ourNumber) {
      ourNumber = myArray.join('');
    }
  }
    return +ourNumber
}
