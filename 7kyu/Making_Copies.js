function copyList(l){
  if (!l) return l;
  let x = [];
  for (var i = 0; i < l.length; i++) {
    x.push(l[i]);
  }
  return x;
}
