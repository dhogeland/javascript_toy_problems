function tribonacci(signature,n){
  let x = signature.slice();
  for (var i = 0; x.length < n; i++) {
    x.push(x[i] + x[i + 1] + x[i + 2])
  }
  return x.slice(0, n);
}
