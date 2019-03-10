function maxProduct(a) {
  let x = Math.max(...a);
  a.splice(a.indexOf(x),1);
  return x * Math.max(...a);
}
