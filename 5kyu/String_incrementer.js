function incrementString (strng) {
  if (strng.charCodeAt(strng.length - 1) > 57 || strng.length == 0) {
    return strng + 1;
  }
  if (strng.charCodeAt(strng.length - 1) <= 57 && strng.length == 1) {
    return (+strng + 1) + '';
  }
  let str = strng.split(''), arr = [], x = str.length - 1;
  while (x >= 0 && +str[x].charCodeAt(0) >= 48 && +str[x].charCodeAt(0) <= 57) {
    arr.unshift(str[x][0]);
    x--;
  }
  let y = arr.length - 1;
  arr[arr.length - 1] = (+arr[arr.length - 1] + 1) + '';
  while (arr[y].length > 1 && y >= 0) {
    arr[y] = '0';
    arr[y - 1] = (+arr[y - 1] + 1) + '';
    y--;
  }
  if (y == -1) {
    arr.unshift('1');
  }
  arr = arr.join('');
  return strng.slice(0, (x + 1)) + arr;
}
