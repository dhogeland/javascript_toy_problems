function deleteNth(arr,n){
  let myArr = [], obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      myArr.push(arr[i]);
    } else if (obj[arr[i]] < n) {
      obj[arr[i]] +=1;
      myArr.push(arr[i]);
    }
  }
  return myArr;
}
