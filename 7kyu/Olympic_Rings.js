function olympicRing(a){
  let x = 0;
  for (var i = 0; i < a.length; i++) {
    if ('aAbdDegoOpPqQR'.includes(a[i])) {
      x += 1;
    } else if ('B'.includes(a[i])) {
      x += 2;
    }
  }
  x = Math.floor(x / 2);
  return x <= 1 ? 'Not even a medal!' : x == 2 ? 'Bronze!' : x == 3 ? 'Silver!' : 'Gold!';
}
