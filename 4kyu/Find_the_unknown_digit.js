function solveExpression(exp) {
  let firstSplit = exp.split('=');
  let secondSplit = firstSplit[0].split('-');
  let myArray = [];
  myArray.push(secondSplit.join(' -'));
  myArray.push(firstSplit[1]);
  let join = myArray.join('=');
  
  for (var i = 0; i < 10; i++) {
    if (exp.includes(i)) {
      // do nothing...
    } else {
        let replace = join.replace(/[?]/g, i);
        let test = replace.split('=');
        if (String(eval(test[0])) == test[1]) {
          return i;
      }
    }
  }
  return -1;
}
