function one(arr, fun){
  return arr.filter(index => fun(index)).length === 1;
}
