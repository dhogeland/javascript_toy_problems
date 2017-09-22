function dirReduc(arr){
  let copy = arr.slice();
  function testing(copy) {
    let myArray = [];
    for (var i = 0; i < copy.length; i++) {
      if (copy[i] === 'NORTH' && copy[i + 1] === 'SOUTH') {
        i++;
      } else if (copy[i] === 'SOUTH' && copy[i + 1] === 'NORTH') {
        i++;
      } else if (copy[i] === 'WEST' && copy[i + 1] === 'EAST') {
        i++;
      } else if (copy[i] === 'EAST' && copy[i + 1] === 'WEST') {
        i++;
      } else {
        myArray.push(copy[i]);
      }
    }
    return myArray;
  }
  return testing(testing(copy));
}
