var countCombinations = function(string, key){
  return string.toLowerCase().split(new RegExp(key)).length - 1
}
