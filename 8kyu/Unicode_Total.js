function uniTotal(str) {
  let x = 0;
  for (var i = 0; i < str.length; i++) {
    x += str.charCodeAt(i);
  }
  return x;
}
