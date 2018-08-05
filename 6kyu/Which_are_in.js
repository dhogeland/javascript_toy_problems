function inArray(array1,array2){
  let x = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        x.push(array1[i]);
        break;
      }
    }
  }
  return x.sort();
}
