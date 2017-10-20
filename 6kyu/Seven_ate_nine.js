function hungrySeven(arr){
  let count = arr.filter(x =>  x == 7).length;
  function move(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 7 && arr[i + 1] == 8 && arr[i + 2] == 9) {
        arr[i] = 8;
        arr[i + 1] = 9;
        arr[i + 2] = 7;
      }
    }
  }
  while(count > 0) {
    move(arr);
    count--;
  }
  return arr;
}  
