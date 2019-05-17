function array(arr){
  if (arr.length <= 4) return null;
  arr = arr.split(',');
  if (arr.length <= 2) return null;
  arr.pop();
  arr.shift();
  return arr.join(' ');
}
