function findLongest(array){
  let num = '';
  for (var i = 0; i < array.length; i++) {
    if ((array[i] + '').length > num.length) {
      num = array[i] + ''
    }
  }
  return +num;
}
