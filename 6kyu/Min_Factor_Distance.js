function minDistance(n){
  let myArray = [1];
  if (n % 2 === 0) {
    myArray.push(2);
    let half = n / 2;
    for (var i = 3; i < half; i++) {
      if (n / i === Math.ceil(n / i)) {
        myArray.push(i);
      }
    }
  } else {
    for (var i = 3; i < n; i++) {
      if (n / i === Math.ceil(n / i)) {
        myArray.push(i);
      }
    }
  }
  if (n > 2) {
    myArray.push(n);
  }
  let lowest = Math.abs(myArray[0] - myArray[1]);
  myArray.forEach((element, index) => {
    if (myArray[index + 1]) {
      if (Math.abs(myArray[index] - myArray[index + 1]) < lowest) {
        lowest = Math.abs(myArray[index] - myArray[index + 1]);
      }
    }
  })
  return lowest;
}
