function uniqueSum(lst){
  let x = [];
  for (var i = 0; i < lst.length; i++) {
    if (!x.includes(lst[i])) {
      x.push(lst[i]);
    }
  }
  return lst.length ? x.reduce((a,b) => a + b) : null;
}
