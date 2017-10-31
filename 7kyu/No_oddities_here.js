function noOdds( values ){
  let myArray = [];
  values.map(a => {
    if (a % 2 ==0) {
      myArray.push(a);
    }
  })
  return myArray;
}
