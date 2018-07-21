var flatten = function (array){
  return array.reduce((acc, val) => acc.concat(val), [])
}
