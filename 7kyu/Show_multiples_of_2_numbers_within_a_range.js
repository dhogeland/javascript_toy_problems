function multiples(s1,s2,s3){
  let x = [];
  for (var i = 1; i < s3; i++) {
    if (i % s1 === 0 && i % s2 === 0) {
      x.push(i);
    }
  }
  return x;
}
